<?php

namespace App\Command;

use App\Service\Game\Road\ImportCheckpointManager;
use App\Service\Osm\OsmXmlParser;
use Doctrine\DBAL\Connection;
use Psr\Log\LoggerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Process\Process;

/**
 * Importe les routes (highway + ferry) des extraits .osm.pbf Geofabrik
 * dans la table MySQL `road`.
 *
 * Usage :
 *   php bin/console app:osm:import                  # tout
 *   php bin/console app:osm:import --region=europe    # une seule région
 *   php bin/console app:osm:import --resume           # reprendre après crash
 *
 * Le processus :
 *   1. Pour chaque PBF continental, on le sous-découpe en tuiles de
 *      `--tile-size` degrés via `osmium extract` (un PBF de 33 GB ne
 *      peut pas être parsé en PHP en une seule passe).
 *   2. Chaque tuile est convertie en XML via `osmium cat -F osm`.
 *   3. Le XML est parsé en streaming par OsmXmlParser.
 *   4. Chaque way retenu → INSERT IGNORE dans `road` (dédoublonnage par
 *      signature de points).
 *   5. Checkpoint par tuile avec reprise automatique après crash.
 */
#[AsCommand(
    name: 'app:osm:import',
    description: 'Importe les routes Geofabrik (.osm.pbf) dans MySQL (avec reprise après crash)',
)]
class OsmImportCommand extends Command
{
    /** @var array<string, array{file: string, bbox: array{s: float, w: float, n: float, e: float}}> */
    private array $regions;

    public function __construct(
        private readonly string $pbfDir,
        private readonly string $osmiumBinary,
        private readonly Connection $connection,
        private readonly LoggerInterface $logger,
        private readonly ImportCheckpointManager $checkpointManager,
        array $osmRegions = [],
    ) {
        foreach ($osmRegions as $name => $cfg) {
            $this->regions[$name] = [
                'file' => $cfg['file'],
                'bbox' => $cfg['bbox'],
            ];
        }
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('region', null, InputOption::VALUE_REQUIRED, 'Nom de la région à importer (défaut : toutes)')
            ->addOption('tile-size', null, InputOption::VALUE_REQUIRED, 'Taille des tuiles en degrés pour le sous-découpage', '2')
            ->addOption('batch', null, InputOption::VALUE_REQUIRED, 'Taille des lots INSERT', '500')
            ->addOption('resume', null, InputOption::VALUE_NONE, 'Reprendre après crash (ignore les tuiles complétées)')
            ->addOption('reset', null, InputOption::VALUE_NONE, 'Réinitialiser les checkpoints (recommencer depuis zéro)')
            ->addOption('no-download', null, InputOption::VALUE_NONE, 'Ne pas télécharger (PBF déjà présent)')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        // L'import de gros XML OSM demande de la mémoire (index de nodes).
        // 2 Go permettent de parser des tuiles denses de 2°x2°.
        ini_set('memory_limit', '2048M');

        $io = new SymfonyStyle($input, $output);
        $regionFilter = $input->getOption('region');
        $tileSize = (float) $input->getOption('tile-size');
        $batchSize = (int) $input->getOption('batch');
        $resume = (bool) $input->getOption('resume');
        $reset = (bool) $input->getOption('reset');

        $io->title('Import OSM Geofabrik → MySQL');
        $io->note('Usage du systeme de checkpoint pour reprise apres crash');

        if (!is_file($this->osmiumBinary)) {
            $io->error("Binaire osmium introuvable : {$this->osmiumBinary}");
            return Command::FAILURE;
        }

        $regions = $this->regions;
        if ($regionFilter !== null && $regionFilter !== 'all') {
            if (!isset($regions[$regionFilter])) {
                $io->error("Région inconnue : {$regionFilter}. Disponibles : " . implode(', ', array_keys($regions)));
                return Command::FAILURE;
            }
            $regions = [$regionFilter => $regions[$regionFilter]];
        }

        $totalRoads = 0;
        $totalTiles = 0;

        foreach ($regions as $name => $region) {
            $pbfPath = $this->pbfDir . '/' . $region['file'];
            if (!is_file($pbfPath)) {
                $io->warning("PBF introuvable pour {$name} : {$pbfPath} — ignoré.");
                continue;
            }

            $io->section("Région : {$name} ({$region['file']})");

            if ($reset) {
                $this->checkpointManager->resetRegion($name);
                $io->warning("Checkpoints réinitialisés pour {$name}");
            }

            // Découper la bbox de la région en tuiles
            $tiles = $this->buildTiles($region['bbox'], $tileSize);
            $io->info(sprintf('%d tuiles de %.1f° à traiter.', count($tiles), $tileSize));

            // Toujours initialiser les checkpoints (création si inexistants)
            $this->checkpointManager->initializeRegion($name, $tiles);

            if ($resume) {
                $stats = $this->checkpointManager->getStats($name);
                $io->note(sprintf(
                    'Reprise : %d tuiles complétées, %d en erreur, %d restantes',
                    $stats['completed'],
                    $stats['crashed'],
                    $stats['pending']
                ));
            }

            $regionRoads = 0;
            $tileCount = count($tiles);
            $lastReport = 0;
            $regionStart = microtime(true);

            foreach ($tiles as $tileIndex => $tile) {
                $tileKey = $this->buildTileKey($tile);

                // Vérifier/attendre le checkpoint (saute si déjà complété)
                if ($this->checkpointManager->startTile($name, $tile)) {
                    $io->text(sprintf("  [SKIP] Tuile déjà complétée : %s", $tileKey));
                    $totalTiles++;
                    continue;
                }

                try {
                    $roads = $this->importTile($pbfPath, $tile, $batchSize);
                    $regionRoads += $roads;
                    $totalTiles++;

                    // Marquer comme complétée
                    $this->checkpointManager->completeTile($name, $tile, $roads);

                } catch (\Throwable $e) {
                    $this->checkpointManager->markCrashed($name, $tile);
                    $this->logger->error(sprintf(
                        "Erreur import tuile %s : %s - %s",
                        $tileKey,
                        $e->getMessage(),
                        $e->getTraceAsString()
                    ));

                    $io->warning(sprintf("[ERREUR] Tuile %s : %s — passage à la suivante", $tileKey, $e->getMessage()));
                    continue;
                }

                // Rapport progressif
                $pct = round(100 * ($tileIndex + 1) / $tileCount);
                $elapsed = microtime(true) - $regionStart;

                if ($tileIndex === $tileCount - 1 || ($tileIndex - $lastReport) >= 10) {
                    $lastReport = $tileIndex;
                    $output->writeln(sprintf(
                        '  [%d%%] tuile %d/%d — %d routes (%.1fs) — tuile %s',
                        $pct,
                        $tileIndex + 1,
                        $tileCount,
                        $regionRoads,
                        $elapsed,
                        $tileKey
                    ));
                }
            }

            $io->success(sprintf('%s : %d routes importées.', $name, $regionRoads));
            $totalRoads += $regionRoads;
        }

        $io->success(sprintf('Import terminé : %d routes au total (%d tuiles traitées).', $totalRoads, $totalTiles));

        return Command::SUCCESS;
    }

    /**
     * Découpe une bbox en tuiles de `size` degrés.
     *
     * @return list<array{s: float, w: float, n: float, e: float}>
     */
    private function buildTiles(array $bbox, float $size): array
    {
        $tiles = [];
        $s = floor($bbox['s'] / $size) * $size;
        $w = floor($bbox['w'] / $size) * $size;

        for ($lat = $s; $lat < $bbox['n']; $lat += $size) {
            for ($lng = $w; $lng < $bbox['e']; $lng += $size) {
                $tiles[] = [
                    's' => $lat,
                    'w' => $lng,
                    'n' => min($lat + $size, $bbox['n']),
                    'e' => min($lng + $size, $bbox['e']),
                ];
            }
        }

        return $tiles;
    }

    private function buildTileKey(array $tile): string
    {
        return sprintf('%.6f_%.6f_%.6f_%.6f', $tile['s'], $tile['w'], $tile['n'], $tile['e']);
    }

    /**
     * Importe une tuile (petite bbox) depuis le PBF continental.
     * Utilise des INSERT bruts DBAL (pas d'ORM) pour la performance et
     * pour éviter l'accumulation mémoire de l'EntityManager.
     */
    private function importTile(string $pbfPath, array $tile, int $batchSize): int
    {
        $tileKey = $this->buildTileKey($tile);

        // 1) osmium extract → micro-PBF de la tuile
        $extractedPbf = $this->runOsmiumExtract($pbfPath, $tile);
        if ($extractedPbf === null) {
            return 0;
        }

        try {
            // 2) osmium cat -f osm → XML
            $xmlPath = $this->runOsmiumToXml($extractedPbf);
            @unlink($extractedPbf);

            if ($xmlPath === null) {
                return 0;
            }

            // 3) Parse XML streaming + INSERT brut DBAL avec transactions
            $roadsInserted = 0;
            $this->connection->beginTransaction();

            try {
                $parser = new OsmXmlParser($xmlPath);
                $batch = [];

                foreach ($parser->iterateRoads() as $roadData) {
                    $batch[] = $roadData;

                    if (count($batch) >= $batchSize) {
                        $roadsInserted += $this->insertBatch($batch);
                        $batch = [];
                    }
                }

                if (!empty($batch)) {
                    $roadsInserted += $this->insertBatch($batch);
                }

                $this->connection->commit();

            } catch (\Throwable $e) {
                $this->connection->rollBack();
                throw $e;
            } finally {
                @unlink($xmlPath);
            }

            return $roadsInserted;

        } finally {
            @unlink($extractedPbf);
        }
    }

    /**
     * Insère un lot de routes en INSERT IGNORE (dédoublonnage par signature).
     *
     * @param list<array{id: int, type: string, points: list<array{0: float, 1: float}>}> $roads
     */
    private function insertBatch(array $roads): int
    {
        if (empty($roads)) {
            return 0;
        }

        // Signature déjà-vu dans ce lot (évite les doublons intra-tuile).
        $seen = [];
        $values = [];
        $params = [];
        $paramIndex = 0;

        foreach ($roads as $road) {
            $sig = $this->roadSignature($road['points']);
            if (isset($seen[$sig])) {
                continue;
            }
            $seen[$sig] = true;

            $points = $road['points'];
            $lats = array_column($points, 0);
            $lngs = array_column($points, 1);

            $values[] = sprintf(
                "(:t%d, :p%d, :blatmin%d, :blngmin%d, :blatmax%d, :blngmax%d)",
                $paramIndex,
                $paramIndex,
                $paramIndex,
                $paramIndex,
                $paramIndex,
                $paramIndex
            );
            $params['t' . $paramIndex] = $road['type'];
            $params['p' . $paramIndex] = json_encode($points);
            $params['blatmin' . $paramIndex] = empty($lats) ? null : min($lats);
            $params['blngmin' . $paramIndex] = empty($lngs) ? null : min($lngs);
            $params['blatmax' . $paramIndex] = empty($lats) ? null : max($lats);
            $params['blngmax' . $paramIndex] = empty($lngs) ? null : max($lngs);

            $paramIndex++;
        }

        if (empty($values)) {
            return 0;
        }

        $sql = 'INSERT IGNORE INTO road (type, points, bbox_lat_min, bbox_lng_min, bbox_lat_max, bbox_lng_max) VALUES '
            . implode(', ', $values);

        return $this->connection->executeStatement($sql, $params);
    }

    /**
     * Signature normalisée d'une route (points arrondis à 6 décimales, sens normalisé).
     *
     * @param list<array{0: float, 1: float}> $points
     */
    private function roadSignature(array $points): string
    {
        $normalized = [];
        foreach ($points as $pt) {
            $normalized[] = sprintf('%.6f,%.6f', $pt[0], $pt[1]);
        }
        $forward = implode('|', $normalized);
        $reversed = implode('|', array_reverse($normalized));

        return min($forward, $reversed);
    }

    /**
     * Lance `osmium extract -b <w>,<s>,<e>,<n> <src> -o <dst>`.
     */
    private function runOsmiumExtract(string $srcPbf, array $tile): ?string
    {
        $dst = tempnam(sys_get_temp_dir(), 'osm_tile_') . '.osm.pbf';
        $bbox = sprintf('%F,%F,%F,%F', $tile['w'], $tile['s'], $tile['e'], $tile['n']);

        $process = new Process([
            $this->osmiumBinary, 'extract',
            '-b', $bbox,
            $srcPbf,
            '-o', $dst,
            '--overwrite',
        ]);
        $process->setTimeout(600);
        $process->run();

        if (!$process->isSuccessful()) {
            $this->logger->warning(sprintf(
                "osmium extract échoué (code %d) pour tuile [%F,%F,%F,%F] : %s",
                $process->getExitCode(),
                $tile['s'],
                $tile['w'],
                $tile['n'],
                $tile['e'],
                $process->getErrorOutput()
            ));
            @unlink($dst);

            return null;
        }

        return $dst;
    }

    /**
     * Convertit un PBF en XML via `osmium cat -F osm <src> -o <dst>`.
     */
    private function runOsmiumToXml(string $srcPbf): ?string
    {
        $dst = tempnam(sys_get_temp_dir(), 'osm_xml_') . '.osm';

        $process = new Process([
            $this->osmiumBinary, 'cat',
            '-f', 'osm',
            $srcPbf,
            '-o', $dst,
            '--overwrite',
        ]);
        $process->setTimeout(300);
        $process->run();

        if (!$process->isSuccessful()) {
            $this->logger->error(sprintf(
                "osmium cat échoué (code %d) : %s",
                $process->getExitCode(),
                $process->getErrorOutput()
            ));
            @unlink($dst);

            return null;
        }

        return $dst;
    }
}