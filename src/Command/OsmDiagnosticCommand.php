<?php

namespace App\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Process\Process;

/**
 * Diagnostic : vérifie ce que produit ogr2ogr pour une tuile.
 */
#[AsCommand(
    name: 'osm:diagnostic',
    description: 'Diagnostic de la sortie ogr2ogr (tuile test)',
)]
class OsmDiagnosticCommand extends Command
{
    public function __construct(
        private readonly string $pbfDir = 'D:/osm',
        private readonly string $osmiumBinary = 'C:\\Users\\rocha\\miniconda3\\Library\\bin\\osmium.exe',
        private readonly string $ogr2ogrBinary = 'C:\\Users\\rocha\\miniconda3\\Library\\bin\\ogr2ogr.exe',
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('pbf', InputArgument::REQUIRED, 'Fichier PBF (ex: europe-latest.osm.pbf)')
            ->addArgument('bbox', InputArgument::REQUIRED, 'BBox "south,west,north,east"')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $pbfFile = $input->getArgument('pbf');
        $bbox = $input->getArgument('bbox');

        $pbfPath = $this->pbfDir . '/' . $pbfFile;
        if (!is_file($pbfPath)) {
            $io->error("PBF introuvable : {$pbfPath}");
            return Command::FAILURE;
        }

        $io->title("Diagnostic ogr2ogr pour {$pbfFile}");
        $io->writeln("BBox : {$bbox}");

        // Étape 1: Extraire une petite tuile
        $extractedPbf = tempnam(sys_get_temp_dir(), 'osm_tile_') . '.osm.pbf';
        $io->writeln("\n1. Extraction osmium...");

        $process = new Process([
            $this->osmiumBinary, 'extract',
            '-b', $bbox,
            $pbfPath,
            '-o', $extractedPbf,
            '--overwrite',
        ]);
        $process->setTimeout(300);
        $process->run();

        if (!$process->isSuccessful()) {
            $io->error("osmium extract échoué");
            return Command::FAILURE;
        }

        $io->writeln("   ✓ Fichier extrait : " . filesize($extractedPbf) . " octets");

        // Étape 2: ogr2ogr vers SQLite
        $sqlitePath = tempnam(sys_get_temp_dir(), 'osm_sqlite_') . '.sqlite';
        $io->writeln("\n2. Conversion ogr2ogr → SQLite...");

        $gdalData = 'C:\Users\rocha\miniconda3\Library\share\gdal';
        putenv("GDAL_DATA={$gdalData}");

        $process = new Process([
            $this->ogr2ogrBinary,
            '-f', 'SQLite',
            '-dialect', 'SQLITE',
            '-overwrite',
            $sqlitePath,
            $extractedPbf,
            'lines',
        ]);
        $process->setTimeout(600);
        $process->run();

        if (!$process->isSuccessful()) {
            $io->error("ogr2ogr échoué : " . $process->getErrorOutput());
            return Command::FAILURE;
        }

        $io->writeln("   ✓ SQLite créé : " . filesize($sqlitePath) . " octets");

        // Diagnostic SQLite
        $sqlite = new \SQLite3($sqlitePath);

        // 3. Tables disponibles
        $io->writeln("\n3. Tables dans SQLite :");
        $tables = $sqlite->query("SELECT name FROM sqlite_master WHERE type='table'");
        while ($row = $tables->fetchArray(\SQLITE3_ASSOC)) {
            $io->writeln("   - " . $row['name']);
        }

        // 4. Colonnes de la table lines
        $io->writeln("\n4. Colonnes de la table lines :");
        $cols = $sqlite->query("PRAGMA table_info(lines)");
        while ($row = $cols->fetchArray(\SQLITE3_ASSOC)) {
            $io->writeln(sprintf("   - %s (%s)", $row['name'], $row['type']));
        }

        // 5. Nombre total
        $count = $sqlite->querySingle("SELECT COUNT(*) FROM lines");
        $io->writeln("\n5. Nombre total de lignes : {$count}");

        // 6. Exemple de données
        $io->writeln("\n6. Exemple de ligne (raw) :");
        $sample = $sqlite->query("SELECT * FROM lines LIMIT 1");
        $row = $sample->fetchArray(\SQLITE3_ASSOC);
        foreach ($row as $k => $v) {
            $display = is_string($v) && strlen($v) > 80 ? substr($v, 0, 80) . '...' : $v;
            $io->writeln("   {$k} : " . (is_string($v) ? $display : json_encode($v)));
        }

        // 7. Test AsText sur Geometry
        $io->writeln("\n7. Test AsText(Geometry) :");
        $wkt = $sqlite->querySingle("SELECT AsText(Geometry) FROM lines LIMIT 1");
        $io->writeln("   Résultat : " . ($wkt ?: "NULL/Vide"));

        // 8. Test ST_AsText (autre syntaxe)
        $io->writeln("\n8. Test ST_AsText(Geometry) :");
        $wkt2 = $sqlite->querySingle("SELECT ST_AsText(Geometry) FROM lines LIMIT 1");
        $io->writeln("   Résultat : " . ($wkt2 ?: "NULL/Vide"));

        $sqlite->close();
        @unlink($extractedPbf);
        @unlink($sqlitePath);

        $io->writeln("\n✅ Diagnostic terminé");
        return Command::SUCCESS;
    }
}