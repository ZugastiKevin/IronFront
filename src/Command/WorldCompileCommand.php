<?php

namespace App\Command;

use App\Service\Osm\WorldCompiler;
use App\Service\Osm\RawImportService;
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
 * Pipeline de compilation OSM pour IronFront MMO.
 *
 * Phases :
 * 1. raw       : PBF → raw_road (données brutes uniquement)
 * 2. normalize : raw_road → road_node + road_segment
 * 3. graph     : road_segment → road_graph
 * 4. spatial   : road_segment → spatial_cell + spatial_segment
 * 5. gameplay  : métadonnées gameplay sur road_segment
 * 6. all       : exécute toutes les phases
 */
#[AsCommand(
    name: 'app:world:compile',
    description: 'Pipeline de compilation OSM (raw → normalize → graph → spatial → gameplay)',
)]
class WorldCompileCommand extends Command
{
    private array $regions = [];

    public function __construct(
        private readonly string $pbfDir,
        private readonly string $osmiumBinary,
        private readonly Connection $connection,
        private readonly LoggerInterface $logger,
        private readonly ImportCheckpointManager $checkpointManager,
        private readonly RawImportService $rawImport,
        private readonly WorldCompiler $worldCompiler,
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
            ->addOption('region', null, InputOption::VALUE_REQUIRED, 'Nom de la région à importer', 'all')
            ->addOption('tile-size', null, InputOption::VALUE_REQUIRED, 'Taille des tuiles en degrés (0.5 pour un import complet)', '0.5')
            ->addOption('phase', null, InputOption::VALUE_REQUIRED, 'Phase à exécuter (all|raw|normalize|graph|spatial|gameplay)', 'all')
            ->addOption('batch', null, InputOption::VALUE_REQUIRED, 'Taille des lots INSERT', '2000')
            ->addOption('extract-batch', null, InputOption::VALUE_REQUIRED, 'Nombre de tuiles extraites par passe osmium', '250')
            ->addOption('resume', null, InputOption::VALUE_NONE, 'Reprendre après crash')
            ->addOption('reset', null, InputOption::VALUE_NONE, 'Réinitialiser les tables')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        ini_set('memory_limit', '6144M');

        $io = new SymfonyStyle($input, $output);
        $regionFilter = $input->getOption('region');
        $phase = $input->getOption('phase');
        $tileSize = (float) $input->getOption('tile-size');
        $batchSize = (int) $input->getOption('batch');
        $extractBatch = max(1, (int) $input->getOption('extract-batch'));
        $resume = (bool) $input->getOption('resume');
        $reset = (bool) $input->getOption('reset');

        $io->title('Compilation OSM IronFront MMO');

        if (!is_file($this->osmiumBinary)) {
            $io->error("Binaire osmium introuvable : {$this->osmiumBinary}");
            return Command::FAILURE;
        }

        $regions = $this->regions;
        if ($regionFilter !== null && $regionFilter !== 'all') {
            if (!isset($regions[$regionFilter])) {
                $io->error("Région inconnue : {$regionFilter}");
                return Command::FAILURE;
            }
            $regions = [$regionFilter => $regions[$regionFilter]];
        }

        // Reset complet si demandé
        if ($reset) {
            $this->resetTables($io);
        }

        // On ne traite l'import raw que si phase=all ou phase=raw
        if ($phase === 'all' || $phase === 'raw') {
            $totalRoads = 0;
            $totalTiles = 0;

            foreach ($regions as $name => $region) {
                $pbfPath = $this->pbfDir . '/' . $region['file'];
                if (!is_file($pbfPath)) {
                    $io->warning("PBF introuvable pour {$name}");
                    continue;
                }

                $io->section("Région : {$name}");

                // Table de staging régénérée à chaque compilation raw.
                $this->connection->executeStatement('TRUNCATE TABLE raw_road');

                // 1. Pré-filtrage : PBF complet -> PBF routes uniquement (mis en cache).
                $io->text('Pré-filtrage des routes (long à la 1re exécution, puis mis en cache)…');
                $filteredPbf = $this->rawImport->prepareFilteredPbf($pbfPath, $name);
                $io->text(sprintf('PBF filtré : %s', $filteredPbf));

                // 2. Import streaming en une passe (osmium export + index sur disque).
                //    RAM basse (~0,5 Go), aucune extraction par tuile, zéro doublon.
                $io->text("Import des routes (construction de l'index de nœuds puis streaming)…");

                $regionRoads = $this->rawImport->importRegionStreaming(
                    $filteredPbf,
                    $batchSize,
                    function (int $total) use ($io): void {
                        $mem = memory_get_usage(true) / 1024 / 1024;
                        $peak = memory_get_peak_usage(true) / 1024 / 1024;
                        $io->writeln(sprintf('  … %s routes importées | RAM %.1f Mo (pic %.1f Mo)', number_format($total, 0, '.', ' '), $mem, $peak));
                    }
                );

                $io->success(sprintf('%s : %d routes importées.', $name, $regionRoads));
                $totalRoads += $regionRoads;
            }

            $io->success(sprintf('Import raw terminé : %d routes.', $totalRoads));
        }

        // Exécuter les autres phases si demandé
        if ($phase === 'all' || in_array($phase, ['normalize', 'graph', 'spatial', 'gameplay'])) {
            $options = ['phase' => $phase];
            $stats = $this->worldCompiler->compile($io, $options);

            $io->section('Statistiques finales');
            $io->table(
                ['Phase', 'Valeur'],
                [
                    ['Nodes', $stats['normalize']->nodesCreated ?? 0],
                    ['Segments', $stats['normalize']->segmentsCreated ?? 0],
                    ['Graph edges', $stats['graph']->edgesCreated ?? 0],
                    ['Cells', $stats['spatial']->cellsCreated ?? 0],
                    ['Spatial relations', $stats['spatial']->relationsCreated ?? 0],
                ]
            );
        }

        return Command::SUCCESS;
    }

    private function resetTables(SymfonyStyle $io): void
    {
        $tables = ['raw_road', 'road_graph', 'spatial_segment', 'spatial_cell', 'road_segment', 'road_node'];
        foreach ($tables as $table) {
            $this->connection->executeStatement("TRUNCATE TABLE {$table}");
        }
        $io->writeln("Tables remises à zéro");
    }

    private function buildTiles(array $bbox, float $size): array
    {
        $tiles = [];
        $s = floor($bbox['s'] / $size) * $size;
        $w = floor($bbox['w'] / $size) * $size;

        for ($lat = $s; $lat < $bbox['n']; $lat += $size) {
            for ($lng = $w; $lng < $bbox['e']; $lng += $size) {
                $tiles[] = [
                    's' => $lat, 'w' => $lng,
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
     * Supprime les fichiers .osm résiduels d'un dossier temporaire de tuiles.
     */
    private function cleanupDir(string $dir): void
    {
        if (!is_dir($dir)) {
            return;
        }

        foreach (glob($dir . '/*.osm') ?: [] as $file) {
            @unlink($file);
        }
    }
}