<?php

namespace App\Command;

use App\Service\Game\Road\ImportCheckpointManager;
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
 * dans la table MySQL `road` via SpatiaLite (10-50x plus rapide que XML).
 *
 * Usage :
 *   php bin/console app:osm:import                  # tout
 *   php bin/console app:osm:import --region=europe    # une seule région
 *   php bin/console app:osm:import --resume           # reprendre après crash
 *   php bin/console app:osm:import --reset            # tout recommencer
 *
 * Pipeline :
 *   1. osmium extract → micro-PBF de la tuile (découpage géographique)
 *   2. ogr2ogr → SQLite SpatiaLite (extraction géométrie native C++)
 *   3. Batch import SQLite → MySQL (transaction par tuile)
 *   4. Checkpoints avec reprise automatique après crash
 */
#[AsCommand(
    name: 'app:osm:import',
    description: 'Importe les routes Geofabrik (.osm.pbf) dans MySQL (rapide + reprise après crash)',
)]
class OsmImportCommand extends Command
{
    /** @var array<string, array{file: string, bbox: array{s: float, w: float, n: float, e: float}}> */
    private array $regions;

    public function __construct(
        private readonly string $pbfDir,
        private readonly string $osmiumBinary,
        private readonly string $ogr2ogrBinary,
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
            ->addOption('tile-size', null, InputOption::VALUE_REQUIRED, 'Taille des tuiles en degrés (plus petit = plus de tuiles mais moins de mémoire)', '1')
            ->addOption('batch', null, InputOption::VALUE_REQUIRED, 'Taille des lots INSERT', '2000')
            ->addOption('resume', null, InputOption::VALUE_NONE, 'Reprendre après crash (ignore les tuiles complétées)')
            ->addOption('reset', null, InputOption::VALUE_NONE, 'Réinitialiser les checkpoints (recommencer depuis zéro)')
            ->addOption('gdal-data', null, InputOption::VALUE_REQUIRED, 'Chemin GDAL_DATA pour ogr2ogr', 'C:\\Users\\rocha\\miniconda3\\Library\\share\\gdal')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        ini_set('memory_limit', '2048M');

        $io = new SymfonyStyle($input, $output);
        $regionFilter = $input->getOption('region');
        $tileSize = (float) $input->getOption('tile-size');
        $batchSize = (int) $input->getOption('batch');
        $resume = (bool) $input->getOption('resume');
        $reset = (bool) $input->getOption('reset');
        $gdalData = $input->getOption('gdal-data');

        $io->title('Import OSM Geofabrik → MySQL (SpatiaLite)');
        $io->note('Pipeline: osmium extract → ogr2ogr → SQLite → MySQL');

        // Vérifier les binaires
        if (!is_file($this->osmiumBinary)) {
            $io->error("Binaire osmium introuvable : {$this->osmiumBinary}");
            return Command::FAILURE;
        }

        // ogr2ogr est maintenant requis (méthode SpatiaLite)
        if (!is_file($this->ogr2ogrBinary)) {
            $io->error("Binaire ogr2ogr introuvable : {$this->ogr2ogrBinary}");
            $io->writeln("Installez GDAL via conda : conda install -c conda-forge gdal");
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

            $tiles = $this->buildTiles($region['bbox'], $tileSize);
            $io->info(sprintf('%d tuiles de %.1f° à traiter.', count($tiles), $tileSize));

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

                if ($this->checkpointManager->startTile($name, $tile)) {
                    $io->text(sprintf("  [SKIP] Déjà complétée : %s", $tileKey));
                    $totalTiles++;
                    continue;
                }

                try {
                    $roads = $this->importTile($pbfPath, $tile, $batchSize, $gdalData);
                    $regionRoads += $roads;
                    $totalTiles++;

                    $this->checkpointManager->completeTile($name, $tile, $roads);

                } catch (\Throwable $e) {
                    $this->checkpointManager->markCrashed($name, $tile);
                    $this->logger->error(sprintf(
                        "Erreur import tuile %s : %s",
                        $tileKey,
                        $e->getMessage()
                    ));
                    $io->warning(sprintf("[ERREUR] Tuile %s : %s", $tileKey, $e->getMessage()));
                    continue;
                }

                $pct = round(100 * ($tileIndex + 1) / $tileCount);
                $elapsed = microtime(true) - $regionStart;

                if ($tileIndex === $tileCount - 1 || ($tileIndex - $lastReport) >= 5) {
                    $lastReport = $tileIndex;
                    $output->writeln(sprintf(
                        '  [%d%%] tuile %d/%d — %d routes (%.1fs) — %s',
                        $pct,
                        $tileIndex + 1,
                        $tileCount,
                        $regionRoads,
                        $elapsed,
                        $tileKey
                    ));
                }
            }

            $io->success(sprintf('%s : %d routes importées en %.1fs.', $name, $regionRoads, microtime(true) - $regionStart));
            $totalRoads += $regionRoads;
        }

        $io->success(sprintf('Import terminé : %d routes (%d tuiles).', $totalRoads, $totalTiles));

        return Command::SUCCESS;
    }

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
     * Importe une tuile via SpatiaLite (10-50x plus rapide que XML).
     */
    private function importTile(string $pbfPath, array $tile, int $batchSize, string $gdalData): int
    {
        // Étape 1: Filtrer le PBF pour ne garder que highway + ferry
        $filteredPbf = tempnam(sys_get_temp_dir(), 'osm_filtered_') . '.osm.pbf';
        $this->runOsmiumFilter($pbfPath, $filteredPbf);

        // Étape 2: Convertir en SQLite SpatiaLite
        $sqlitePath = tempnam(sys_get_temp_dir(), 'osm_sqlite_') . '.sqlite';
        $this->runOgr2ogr($filteredPbf, $sqlitePath, $gdalData);

        try {
            // Étape 3: Importer depuis SQLite vers MySQL
            return $this->importFromSqlite($sqlitePath, $batchSize);
        } finally {
            @unlink($filteredPbf);
            @unlink($sqlitePath);
        }
    }

    private function runOsmiumFilter(string $srcPbf, string $dstPbf): void
    {
        $process = new Process([
            $this->osmiumBinary, 'tags-filter', $srcPbf,
            'highway', 'route=ferry',
            '-o', $dstPbf,
            '--overwrite',
        ]);
        $process->setTimeout(600);
        $process->run();

        if (!$process->isSuccessful()) {
            throw new \RuntimeException("osmium tags-filter échoué : " . $process->getErrorOutput());
        }
    }

    private function runOgr2ogr(string $srcPbf, string $dstSqlite, string $gdalData): void
    {
        $process = new Process([
            $this->ogr2ogrBinary,
            '-f', 'SQLite',
            '-dialect', 'spatialite',
            '-overwrite',
            $dstSqlite,
            $srcPbf,
            'lines',
        ]);
        $process->setTimeout(900);
        $process->setEnv(['GDAL_DATA' => $gdalData]);
        $process->run();

        if (!$process->isSuccessful()) {
            throw new \RuntimeException("ogr2ogr échoué : " . $process->getErrorOutput());
        }
    }

    private function importFromSqlite(string $sqlitePath, int $batchSize): int
    {
        $sqlite = new \SQLite3($sqlitePath);
        $count = (int) $sqlite->querySingle("SELECT COUNT(*) FROM lines");

        $this->logger->info("SQLite import : {$count} routes à traiter");

        $roadsInserted = 0;
        $offset = 0;
        $seenSignatures = [];

        $this->connection->beginTransaction();

        try {
            while ($offset < $count) {
                $result = $sqlite->query("
                    SELECT osm_id, highway, other_tags, name, Geometry as wkt
                    FROM lines
                    LIMIT {$batchSize} OFFSET {$offset}
                ");

                $batch = 0;
                while ($row = $result->fetchArray(\SQLITE3_ASSOC)) {
                    $road = $this->hydrateFromSqliteRow($row);
                    if ($road !== null) {
                        $sig = $road['signature'];
                        if (isset($seenSignatures[$sig])) {
                            continue;
                        }
                        $seenSignatures[$sig] = true;

                        $points = $road['points'];
                        $lats = array_column($points, 0);
                        $lngs = array_column($points, 1);

                        $this->connection->insert('road', [
                            'type' => $road['type'],
                            'points' => json_encode($points),
                            'bbox_lat_min' => empty($lats) ? null : min($lats),
                            'bbox_lng_min' => empty($lngs) ? null : min($lngs),
                            'bbox_lat_max' => empty($lats) ? null : max($lats),
                            'bbox_lng_max' => empty($lngs) ? null : max($lngs),
                        ]);
                        $batch++;
                    }
                }

                $offset += $batchSize;
                $roadsInserted += $batch;
            }

            $this->connection->commit();

        } catch (\Throwable $e) {
            $this->connection->rollBack();
            throw $e;
        } finally {
            $sqlite->close();
        }

        return $roadsInserted;
    }

    private function hydrateFromSqliteRow(array $row): ?array
    {
        $highway = $row['highway'] ?? '';
        $otherTags = $row['other_tags'] ?? '';
        $route = '';

        // Détecter ferry depuis other_tags
        if (str_contains($otherTags, '"route"=>"ferry"') || str_contains($otherTags, '"route"="ferry"')) {
            $route = 'ferry';
        }

        if (!$highway && $route !== 'ferry') {
            return null;
        }

        // Parser WKT LINESTRING (format: lng lat, lng lat)
        $wkt = $row['wkt'] ?? '';
        if (!preg_match('/LINESTRING\s*\(([^)]+)\)/i', $wkt, $matches)) {
            return null;
        }

        $points = [];
        foreach (explode(',', $matches[1]) as $pair) {
            $parts = preg_split('/\s+/', trim($pair));
            if (count($parts) >= 2) {
                // WKT stocke lng lat → on inverse pour lat,lng
                $lng = (float) $parts[0];
                $lat = (float) $parts[1];
                $points[] = [$lat, $lng];
            }
        }

        if (count($points) < 2) {
            return null;
        }

        return [
            'points' => $points,
            'type' => $route ?: ($highway ?: 'road'),
            'signature' => $this->roadSignature($points),
        ];
    }

    private function roadSignature(array $points): string
    {
        $normalized = array_map(fn($pt) => sprintf('%.6f,%.6f', $pt[0], $pt[1]), $points);
        $forward = implode('|', $normalized);
        $reversed = implode('|', array_reverse($normalized));

        return min($forward, $reversed);
    }
}