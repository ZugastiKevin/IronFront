<?php

namespace App\Service\Osm;

use Psr\Log\LoggerInterface;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

/**
 * Service d'accès aux routes/ferry stockées dans les fichiers .osm.pbf Geofabrik.
 *
 * Flux :
 *   1. On reçoit une bbox (latMin, lngMin, latMax, lngMax).
 *   2. On détermine le PBF continent à lire (via la config des régions).
 *   3. On invoque `osmium extract` pour créer un micro-PBF de la bbox.
 *   4. On convertit ce micro-PBF en XML via `osmium cat -F osm`.
 *   5. On parse le XML via OsmXmlParser (streaming) et on yield les routes.
 *
 * Le binaire osmium est référencé par `osmiumBinary` (chemin absolu vers
 * osmium.exe, ex. celui de l'environnement Anaconda).
 */
class OsmDataService
{
    /**
     * @param string $pbfDir        Dossier racine contenant les PBF (ex. %kernel.project_dir%/src/osm)
     * @param string $osmiumBinary  Chemin absolu vers osmium.exe
     * @param array  $regions       Config des régions (nom => {file, bbox: [s,w,n,e]})
     */
    public function __construct(
        private string $pbfDir,
        private string $osmiumBinary,
        private LoggerInterface $logger,
        private array $regions = [],
    ) {
        if (!is_file($this->osmiumBinary)) {
            throw new \InvalidArgumentException("Binaire osmium introuvable : {$this->osmiumBinary}");
        }
    }

    /**
     * Extrait toutes les routes (highway + ferry) d'une bbox depuis les PBF Geofabrik.
     *
     * @return list<array{id: int, type: string, points: list<array{0: float, 1: float}>}>
     */
    public function extractRoadsInBbox(
        float $latMin,
        float $lngMin,
        float $latMax,
        float $lngMax,
    ): array {
        $region = $this->findRegion($latMin, $lngMin, $latMax, $lngMax);
        if ($region === null) {
            $this->logger->warning(sprintf(
                "Aucune région OSM ne couvre la bbox [%F,%F,%F,%F]",
                $latMin, $lngMin, $latMax, $lngMax
            ));
            return [];
        }

        $pbfPath = $this->pbfDir . '/' . $region['file'];
        if (!is_file($pbfPath)) {
            $this->logger->error("PBF introuvable : {$pbfPath}");
            return [];
        }

        $this->logger->info(sprintf(
            "Extraction OSM : région=%s bbox=[%F,%F,%F,%F] fichier=%s",
            $region['name'], $latMin, $lngMin, $latMax, $lngMax, $region['file']
        ));

        // 1) osmium extract → micro-PBF bbox
        $extractedPbf = $this->runOsmiumExtract($pbfPath, $latMin, $lngMin, $latMax, $lngMax);
        if ($extractedPbf === null) {
            return [];
        }

        // 2) osmium cat -F osm → XML
        $xmlPath = $this->runOsmiumToXml($extractedPbf);
        @unlink($extractedPbf);

        if ($xmlPath === null) {
            return [];
        }

        // 3) Parse XML streaming
        try {
            $parser = new OsmXmlParser($xmlPath);
            $roads = [];
            foreach ($parser->iterateRoads() as $road) {
                $roads[] = $road;
            }
            $this->logger->info(sprintf(
                "Extraction OK : %d routes parsées (sur %d ways lus) pour région %s",
                count($roads),
                $parser->parsedCount,
                $region['name']
            ));
            return $roads;
        } finally {
            @unlink($xmlPath);
        }
    }

    /**
     * Trouve la région dont la bbox englobante couvre (au moins partiellement) la bbox demandée.
     *
     * @return array{name: string, file: string, bbox: array{s: float, w: float, n: float, e: float}}|null
     */
    private function findRegion(float $latMin, float $lngMin, float $latMax, float $lngMax): ?array
    {
        foreach ($this->regions as $region) {
            $b = $region['bbox'];
            // Test d'overlap : les bbox se chevauchent ?
            $overlap = !(
                $latMax < $b['s'] || $latMin > $b['n'] ||
                $lngMax < $b['w'] || $lngMin > $b['e']
            );
            if ($overlap) {
                return $region;
            }
        }
        return null;
    }

    /**
     * Lance `osmium extract -b <w>,<s>,<e>,<n> <src> -o <dst>`.
     * osmium attend l'ordre west,south,east,north.
     */
    private function runOsmiumExtract(
        string $srcPbf,
        float $latMin,
        float $lngMin,
        float $latMax,
        float $lngMax,
    ): ?string {
        $dst = tempnam(sys_get_temp_dir(), 'osm_extract_') . '.osm.pbf';
        $bbox = sprintf('%F,%F,%F,%F', $lngMin, $latMin, $lngMax, $latMax);

        $process = new Process([
            $this->osmiumBinary, 'extract',
            '-b', $bbox,
            $srcPbf,
            '-o', $dst,
            '--overwrite',
        ]);
        $process->setTimeout(300);
        $process->run();

        if (!$process->isSuccessful()) {
            $this->logger->error(sprintf(
                "osmium extract échoué (code %d) : %s",
                $process->getExitCode(),
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
            '-F', 'osm',
            $srcPbf,
            '-o', $dst,
            '--overwrite',
        ]);
        $process->setTimeout(120);
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
