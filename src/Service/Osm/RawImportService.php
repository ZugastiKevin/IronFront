<?php

namespace App\Service\Osm;

use App\Service\Osm\OsmXmlParser;
use Doctrine\DBAL\Connection;
use Psr\Log\LoggerInterface;
use Symfony\Component\Process\Process;

/**
 * Étape 1 : Import brut des données OSM.
 *
 * Extrait les ways highway principales (motorway→residential) / ferry
 * depuis un PBF et stocke les points GPS dans la table raw_road
 * (temporaire). Aucune logique métier.
 */
final class RawImportService
{
    public function __construct(
        private readonly string $osmiumBinary,
        private readonly Connection $connection,
        private readonly LoggerInterface $logger,
    ) {}

    /**
     * Prépare un PBF ne contenant que les routes (highway + ferry) d'une région.
     *
     * Filtre le PBF source une seule fois (opération longue) et met le résultat
     * en cache dans un sous-dossier `_roads_cache`. Les extractions de tuiles
     * suivantes lisent ce fichier réduit (de ~33 Go à quelques Go) au lieu du
     * PBF complet, ce qui accélère massivement le pipeline.
     *
     * Le cache est réutilisé tant qu'il est plus récent que le PBF source.
     */
    public function prepareFilteredPbf(string $srcPbf, string $region): string
    {
        $cacheDir = \dirname($srcPbf) . '/_roads_cache';
        if (!is_dir($cacheDir) && !@mkdir($cacheDir, 0777, true) && !is_dir($cacheDir)) {
            throw new \RuntimeException("Impossible de créer le dossier de cache : {$cacheDir}");
        }

        $filtered = $cacheDir . '/' . $region . '-roads.osm.pbf';

        // Cache valide : fichier présent et plus récent que la source.
        if (is_file($filtered) && filemtime($filtered) >= filemtime($srcPbf)) {
            return $filtered;
        }

        // Routes principales uniquement : on exclut service/piste/track/
        // chemin piéton qui dominent OSM et ne servent pas au jeu.
        // tags-filter conserve les ways correspondants ET les nœuds référencés
        // (comportement par défaut), donc les géométries restent complètes.
        // Valeurs séparées par virgules = OU au sein d'une expression.
        $process = new Process([
            $this->osmiumBinary, 'tags-filter',
            $srcPbf,
            'w/highway=motorway,trunk,primary,secondary,tertiary,unclassified,residential',
            'w/route=ferry',
            '-o', $filtered,
            '--overwrite',
        ]);
        $process->setTimeout(7200); // jusqu'à 2h pour un continent complet (une seule fois)
        $process->run();

        if (!$process->isSuccessful()) {
            @unlink($filtered);
            throw new \RuntimeException(
                'osmium tags-filter a échoué : ' . trim($process->getErrorOutput() ?: $process->getOutput())
            );
        }

        return $filtered;
    }

    /**
     * Extrait un lot de tuiles en UNE SEULE passe du PBF filtré.
     *
     * Utilise la configuration multi-extraits d'osmium (`extract -c config.json`)
     * pour découper toutes les tuiles du lot en un seul balayage du fichier, au
     * lieu d'une passe par tuile. Chaque tuile est écrite directement en XML
     * (.osm) prête à être parsée.
     *
     * @param array<int, array{s: float, w: float, n: float, e: float}> $tiles
     * @return array<string, string> tileKey => chemin du fichier .osm produit (présents uniquement)
     */
    public function extractTileBatch(string $filteredPbf, array $tiles, string $outputDir): array
    {
        if (empty($tiles)) {
            return [];
        }

        if (!is_dir($outputDir) && !@mkdir($outputDir, 0777, true) && !is_dir($outputDir)) {
            throw new \RuntimeException("Impossible de créer le dossier temporaire : {$outputDir}");
        }

        $extracts = [];
        $map = [];

        foreach ($tiles as $tile) {
            $key = $this->tileKey($tile);
            $file = $key . '.osm';
            $extracts[] = [
                'output' => $file,
                'output_format' => 'osm', // XML, directement parsable
                // osmium attend [left, bottom, right, top] = [w, s, e, n]
                'bbox' => [$tile['w'], $tile['s'], $tile['e'], $tile['n']],
            ];
            $map[$key] = $outputDir . '/' . $file;
        }

        $config = [
            'directory' => $outputDir,
            'extracts' => $extracts,
        ];

        $configPath = tempnam(sys_get_temp_dir(), 'osm_cfg_') . '.json';
        file_put_contents(
            $configPath,
            json_encode($config, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES)
        );

        try {
            $process = new Process([
                $this->osmiumBinary, 'extract',
                '-c', $configPath,
                $filteredPbf,
                '--overwrite',
            ]);
            $process->setTimeout(3600);
            $process->run();

            if (!$process->isSuccessful()) {
                throw new \RuntimeException(
                    'osmium extract (lot) a échoué : ' . trim($process->getErrorOutput() ?: $process->getOutput())
                );
            }
        } finally {
            @unlink($configPath);
        }

        // Ne retourner que les fichiers réellement produits.
        $result = [];
        foreach ($map as $key => $path) {
            if (is_file($path)) {
                $result[$key] = $path;
            }
        }

        return $result;
    }

    /**
     * Importe TOUTES les routes d'une région en une seule passe streaming.
     *
     * Utilise `osmium export` (GeoJSONSeq) avec un index de localisation des
     * nœuds sur disque (`sparse_file_array`), ce qui garde la RAM très basse
     * (~0,5 Go au lieu des ~10 Go de `extract --complete-ways`). La sortie est
     * lue ligne par ligne depuis stdout (aucun fichier temporaire géant), et
     * chaque route OSM n'apparaît qu'une seule fois : aucun doublon possible.
     *
     * @param callable(int):void|null $onProgress Callback périodique (total inséré)
     */
    public function importRegionStreaming(string $filteredPbf, int $batchSize = 2000, ?callable $onProgress = null): int
    {
        $indexPath = \dirname($filteredPbf) . '/_export_idx.dat';
        @unlink($indexPath);

        // Lecture ligne-à-ligne via proc_open + fgets : mémoire bornée quelle que
        // soit la taille des morceaux émis par osmium (contrairement au buffering
        // par substr() qui duplique le buffer et provoque un OOM sur gros volumes).
        $descriptors = [
            1 => ['pipe', 'w'],            // stdout (GeoJSONSeq)
            2 => ['file', 'NUL', 'w'],     // stderr ignoré (sinon blocage si trop verbeux)
        ];

        $cmd = [
            $this->osmiumBinary, 'export',
            '-i', 'sparse_file_array,' . $indexPath,
            '-f', 'geojsonseq',
            '--geometry-types=linestring',
            '-O',            // écrase l'index existant si besoin
            '-o', '-',       // sortie sur stdout
            $filteredPbf,
        ];

        $process = proc_open($cmd, $descriptors, $pipes);
        if ($process === false || !isset($pipes[1]) || !is_resource($pipes[1])) {
            @unlink($indexPath);
            throw new \RuntimeException('Impossible de lancer osmium export');
        }

        $stdout = $pipes[1];

        $inserted = 0;
        $osmIdCounter = 0;
        $batch = [];
        $batchPoints = 0;
        $lineBuffer = '';
        $readSize = 1 << 20;          // 1 Mo par lecture
        $maxLineBytes = 50 * (1 << 20); // ligne pathologique > 50 Mo ignorée
        // Budget de points par lot : borne l'empreinte mémoire même si des
        // voies très longues cohabitent. Le flush ne dépend plus seulement du
        // nombre de voies (2000) mais aussi du volume de points qu'elles
        // représentent, ce qui évite l'OOM sur les voies géantes.
        $batchPointBudget = 300000;

        $this->connection->beginTransaction();

        try {
            while (($chunk = fgets($stdout, $readSize)) !== false) {
                // fgets renvoie la ligne (terminée par \n) OU un morceau tronqué
                // si la ligne dépasse readSize : on réassemble alors dans $lineBuffer.
                if (substr($chunk, -1) === "\n") {
                    $fullLine = $lineBuffer . substr($chunk, 0, -1);
                    $lineBuffer = '';

                    $road = $this->parseGeojsonLine($fullLine, ++$osmIdCounter);
                    if ($road !== null) {
                        $roadPoints = count($road['points']);

                        // Vide d'abord le lot en cours si l'ajout ferait dépasser
                        // le budget de points (garantit une mémoire bornée même
                        // avec une voie très longue).
                        if ($batchPoints + $roadPoints > $batchPointBudget && $batch !== []) {
                            $inserted += $this->insertBatch($batch);
                            $batch = [];
                            $batchPoints = 0;

                            // Commit intermédiaire pour borner la transaction / le binlog.
                            if ($inserted % 50000 < $batchSize) {
                                $this->connection->commit();
                                $this->connection->beginTransaction();
                                // Rend la mémoire libre au système d'exploitation.
                                // Sous le chargement soutenu (millions de json_decode),
                                // le gestionnaire de mémoire PHP ne rend pas la
                                // mémoire libre à l'OS seul, ce qui fait grossir
                                // le RSS jusqu'au memory_limit. gc_mem_caches()
                                // force ce retour et borne la consommation réelle ;
                                // gc_collect_cycles() évacue aussi les éventuels
                                // cycles résiduels.
                                gc_mem_caches();
                                gc_collect_cycles();
                                if ($onProgress !== null) {
                                    $onProgress($inserted);
                                }
                            }
                        }

                        $batch[] = $road;
                        $batchPoints += $roadPoints;

                        if (count($batch) >= $batchSize) {
                            $inserted += $this->insertBatch($batch);
                            $batch = [];
                            $batchPoints = 0;

                            // Commit intermédiaire pour borner la transaction / le binlog.
                            if ($inserted % 50000 < $batchSize) {
                                $this->connection->commit();
                                $this->connection->beginTransaction();
                                gc_mem_caches();
                                gc_collect_cycles();
                                if ($onProgress !== null) {
                                    $onProgress($inserted);
                                }
                            }
                        }
                    }
                } else {
                    // Ligne plus longue que readSize : on accumule (borné).
                    $lineBuffer .= $chunk;
                    if (strlen($lineBuffer) > $maxLineBytes) {
                        $lineBuffer = ''; // abandon d'une ligne pathologique
                    }
                }
            }

            fclose($stdout);
            $stdout = null;
            $exitCode = proc_close($process);
            $process = null;

            // Dernière ligne sans saut de ligne final.
            if ($lineBuffer !== '') {
                $road = $this->parseGeojsonLine($lineBuffer, ++$osmIdCounter);
                if ($road !== null) {
                    $batch[] = $road;
                }
            }

            if (!empty($batch)) {
                $inserted += $this->insertBatch($batch);
            }

            $this->connection->commit();

        } catch (\Throwable $e) {
            $this->connection->rollBack();
            if (is_resource($stdout)) {
                fclose($stdout);
            }
            if (is_resource($process)) {
                proc_close($process);
            }
            @unlink($indexPath);
            throw $e;
        }

        @unlink($indexPath);

        if ($exitCode !== 0) {
            throw new \RuntimeException('osmium export a échoué (code ' . $exitCode . ')');
        }

        if ($onProgress !== null) {
            $onProgress($inserted);
        }

        return $inserted;
    }

    /**
     * Transforme une ligne GeoJSONSeq (une LineString) en route pour raw_road.
     *
     * @return array{id: int, type: string, points: list<array{0: float, 1: float}>}|null
     */
    private function parseGeojsonLine(string $line, int $osmId): ?array
    {
        // GeoJSONSeq préfixe parfois chaque enregistrement d'un séparateur RS (0x1e).
        $line = ltrim($line, "\x1e \t\r\n");
        if ($line === '' || $line[0] !== '{') {
            return null;
        }

        $data = json_decode($line, true);
        if (!is_array($data)) {
            return null;
        }

        $coords = $data['geometry']['coordinates'] ?? null;
        if (!is_array($coords) || count($coords) < 2) {
            return null;
        }

        // Voies pathologiques (frontières, cours d'eau ou ferries mal tagués
        // comptant des millions de nœuds) : ignorées. Elles satureraient la
        // mémoire à le décodage et ne constituent pas un réseau routier
        // exploitable pour le jeu.
        if (count($coords) > 200000) {
            return null;
        }

        $props = $data['properties'] ?? [];
        $highway = $props['highway'] ?? null;

        $type = null;
        if ($highway !== null && $highway !== 'no') {
            $type = $highway;
        } elseif (($props['route'] ?? null) === 'ferry') {
            $type = 'ferry';
        }

        if ($type === null) {
            return null;
        }

        // GeoJSON = [lon, lat] ; raw_road stocke [lat, lng].
        $points = [];
        foreach ($coords as $c) {
            $points[] = [(float) $c[1], (float) $c[0]];
        }

        return [
            'id' => $osmId,
            'type' => $type,
            'points' => $points,
        ];
    }

    /**
     * Parse un fichier XML OSM (.osm) et insère ses routes dans raw_road.
     *
     * Le dédoublonnage est effectué en mémoire par signature de segment, à
     * l'échelle du fichier (comme historiquement à l'échelle de la tuile).
     */
    public function importXmlFile(string $xmlPath, int $batchSize = 2000): int
    {
        $roadsInserted = 0;
        $this->connection->beginTransaction();

        try {
            $parser = new OsmXmlParser($xmlPath);
            $batch = [];
            $seen = [];

            foreach ($parser->iterateRoads() as $roadData) {
                $signature = GeometryHelper::segmentSignature($roadData['points']);
                if (isset($seen[$signature])) {
                    continue;
                }
                $seen[$signature] = true;

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
        }

        return $roadsInserted;
    }

    /**
     * Importe les routes d'une tuile en les stockant dans raw_road.
     *
     * @deprecated Chemin historique (une passe osmium par tuile sur le PBF
     *             complet). Préférer prepareFilteredPbf() + extractTileBatch()
     *             + importXmlFile() qui sont bien plus rapides.
     */
    public function importTile(string $pbfPath, array $tile, int $batchSize = 2000): int
    {
        $extractedPbf = $this->runOsmiumExtract($pbfPath, $tile);
        if ($extractedPbf === null) {
            return 0;
        }

        try {
            $xmlPath = $this->runOsmiumToXml($extractedPbf);
            if ($xmlPath === null) {
                return 0;
            }

            try {
                return $this->importXmlFile($xmlPath, $batchSize);
            } finally {
                @unlink($xmlPath);
            }

        } finally {
            @unlink($extractedPbf);
        }
    }

    /**
     * Construit la clé unique d'une tuile (identique au checkpoint manager).
     */
    private function tileKey(array $tile): string
    {
        return sprintf('%.6f_%.6f_%.6f_%.6f', $tile['s'], $tile['w'], $tile['n'], $tile['e']);
    }

    /**
     * Insère un lot de routes dans raw_road.
     *
     * Les valeurs sont interpolées directement dans le SQL (échappées via
     * quote()) puis exécutées par le driver natif en COM_QUERY direct
     * (->exec()), SANS prepared statement. Cela évite la fuite mémoire par
     * route de PDO : executeStatement() prépare à chaque lot un statement côté
     * serveur que PDO ne libère pas suffisamment vite, ce qui saturait le heap
     * PHP (~0,6 Ko/route, OOM à ~9,6 M routes).
     */
    private function insertBatch(array $roads): int
    {
        if (empty($roads)) {
            return 0;
        }

        $values = [];

        foreach ($roads as $road) {
            $points = $road['points'];
            $bbox = GeometryHelper::calculateBbox($points);

            $values[] = sprintf(
                '(%s, %s, %s, %s, %s, %s, %s)',
                $this->connection->quote($road['id']),
                $this->connection->quote($road['type']),
                $this->connection->quote(json_encode($points)),
                $this->connection->quote($bbox['lat_min']),
                $this->connection->quote($bbox['lng_min']),
                $this->connection->quote($bbox['lat_max']),
                $this->connection->quote($bbox['lng_max']),
            );
        }

        $sql = 'INSERT IGNORE INTO raw_road (osm_id, type, points, bbox_lat_min, bbox_lng_min, bbox_lat_max, bbox_lng_max) VALUES '
            . implode(', ', $values);

        // COM_QUERY direct, sans statement préparé -> pas de fuite mémoire.
        return $this->connection->getNativeConnection()->exec($sql);
    }

    /**
     * Extrait une tuile depuis le PBF source.
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
            @unlink($dst);
            return null;
        }

        return $dst;
    }

    /**
     * Convertit PBF vers XML.
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
            @unlink($dst);
            return null;
        }

        return $dst;
    }

    /**
     * Compte les routes importées.
     */
    public function countImported(): int
    {
        return (int) $this->connection->fetchOne('SELECT COUNT(*) FROM raw_road');
    }

    /**
     * Vide la table raw_road.
     */
    public function truncate(): void
    {
        $this->connection->executeStatement('TRUNCATE TABLE raw_road');
    }
}