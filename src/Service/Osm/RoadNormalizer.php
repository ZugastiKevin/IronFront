<?php

namespace App\Service\Osm;

use App\Entity\RoadSegment;
use App\Repository\RoadNodeRepository;
use App\Repository\RoadSegmentRepository;
use Doctrine\DBAL\Connection;
use Psr\Log\LoggerInterface;

/**
 * Phase 2 : Normalisation des routes OSM.
 *
 * Transforme chaque route en segments A→B, B→C...
 * Implémente CompilerPhase.
 *
 * Conçu pour passer à l'échelle (Europe = ~13M de ways) SANS OOM :
 *  - deux passes streaming, mémoire CONSTANTE et bornée à une fenêtre ;
 *  - on ne garde jamais tout un lot de polylignes en mémoire ;
 *  - gc_mem_caches()/gc_collect_cycles() après chaque buffer pour rendre la
 *    mémoire libre à l'OS (sous le chargement soutenu, le gestionnaire PHP ne
 *    le fait pas seul → RSS qui grossit jusqu'au memory_limit).
 *
 * Pass 1 : on lit les ways un par un, on extrait uniquement les coordonnées
 *          des nœuds (buffer flushé en base dès COORD_FLUSH), INSERT IGNORE
 *          dans road_node. Mémoire ≈ négligeable (un way à la fois).
 * Pass 2 : on lit les ways par fenêtre bornée (POINT_BUDGET points), on résout
 *          les nœuds en bulk, on construit et insère les segments (buffer
 *          flushé en base dès SEG_FLUSH). Mémoire constante (~150 Mo).
 */
final class RoadNormalizer implements CompilerPhase
{
    // Distance maximale pour Douglas-Peucker (en mètres)
    private const DP_EPSILON = 10.0;

    // Nombre de rows lues par requête cursor (décodage paresseux ensuite).
    // Volontairement bas (500) : en Pass 2 on conserve les points DÉCODÉS
    // complets de la fenêtre ; un gros batch de ways volumineux ferait sinon
    // monter le pic mémoire au-delà de memory_limit (OOM observé à 6 Go).
    private const FETCH_CHUNK = 500;

    // Au-delà, la voie est sous-échantillonnée avant Douglas-Peucker
    // (protège la pile récursive et la mémoire).
    private const MAX_WAY_POINTS = 20000;

    // Taille max d'un lot de coordonnées pour les requêtes IN (limites MySQL)
    private const COORD_CHUNK = 4000;

    // Budget de points par fenêtre (pass 2) : borne la mémoire.
    private const POINT_BUDGET = 300000;

    // Nombre max de ways dans une fenêtre (plafond secondaire, pass 2).
    // Baisse de 2000 -> 500 pour plafonner le nombre de points décodés
    // conservés simultanément (le garde-fou points reste POINT_BUDGET).
    private const WINDOW_WAYS = 500;

    // Buffer de coordonnées de nœuds avant flush (pass 1).
    private const COORD_FLUSH = 50000;

    // Buffer de segments avant flush (pass 2).
    // Volontairement bas (2000) : buildSegmentRow stocke la polyline en JSON
    // (chaîne), mais un segment de voie longue peut porter des milliers de
    // points ; un gros buffer de lignes décodées faisait monter le pic mémoire
    // jusqu'à OOM (cf. OSM-PIPELINE.md « OOM Pass 2 v2.3 »). 2000 borne le
    // buffer à ~1 Go même sur de longues voies.
    private const SEG_FLUSH = 2000;

    // Nombre de lignes par INSERT bulk (paquets réseau MySQL).
    private const INSERT_CHUNK = 5000;

    private int $totalSegments = 0;

    public function __construct(
        private readonly Connection $connection,
        private readonly RoadNodeRepository $nodeRepository,
        private readonly RoadSegmentRepository $segmentRepository,
        private readonly LoggerInterface $logger,
    ) {}

    /**
     * Implémente CompilerPhase.
     */
    public function compile(WorldContext $context): CompilationResult
    {
        $result = $this->normalize();
        return new CompilationResult(
            nodesCreated: $result['nodes_created'] ?? 0,
            segmentsCreated: $result['segments_created'] ?? 0,
        );
    }

    public function phase(): CompilePhase
    {
        return CompilePhase::NORMALIZE;
    }

    /**
     * Normalise toutes les routes de raw_road, en deux passes streaming.
     */
    public function normalize(int $startId = 0): array
    {
        $this->totalSegments = 0;

        // ---------- PASS 1 : extraction de tous les nœuds dans road_node ----------
        $this->logger->info('PASS 1 : extraction des nœuds (streaming)');
        $nodeBuffer = []; // list of [lat, lng]
        $lastId = $startId;
        $batch = 0;

        $stopId = (int) getenv('NORMALIZE_DEBUG_STOP_ID');

        while (true) {
            $rows = $this->fetchRawRoads(self::FETCH_CHUNK, $lastId);
            if (empty($rows)) {
                break;
            }
            if ($stopId > 0 && $lastId > $stopId) {
                fprintf(STDERR, 'DEBUG STOP at id=%d' . PHP_EOL, $lastId);
                break;
            }

            foreach ($rows as $row) {
                $lastId = max($lastId, (int) $row['id']);
                $points = $this->decodePoints($row['points']);
                $n = count($points);
                if ($n < 2) {
                    continue;
                }
                if ($n > self::MAX_WAY_POINTS) {
                    $points = $this->downsample($points, self::MAX_WAY_POINTS);
                }

                $indices = GeometryHelper::douglasPeuckerIndices($points, self::DP_EPSILON);
                if (count($indices) < 2) {
                    continue;
                }

                // Extrémités de chaque segment simplifié = nœuds à créer.
                foreach ($indices as $k => $startIdx) {
                    $endIdx = $indices[$k + 1] ?? null;
                    if ($endIdx === null) {
                        break;
                    }
                    $nodeBuffer[] = [$points[$startIdx][0], $points[$startIdx][1]];
                    $nodeBuffer[] = [$points[$endIdx][0], $points[$endIdx][1]];
                }

                // Libère immédiatement les points de ce way (mémoire constante).
                unset($points, $indices, $row);

                if (count($nodeBuffer) >= self::COORD_FLUSH) {
                    $this->flushNodeBuffer($nodeBuffer);
                    $nodeBuffer = [];
                    gc_mem_caches();
                    gc_collect_cycles();
                }
            }

            unset($rows);
            gc_mem_caches();
            gc_collect_cycles();
            if ((++$batch % 25) === 0) {
                fprintf(STDERR, 'MEM P1 id=%d ram=%.1fM inn=%.1fM nodeBuf=%d' . PHP_EOL,
                    $lastId, memory_get_usage(true) / 1048576, memory_get_usage(false) / 1048576, count($nodeBuffer));
            }
        }

        if ($nodeBuffer !== []) {
            $this->flushNodeBuffer($nodeBuffer);
            $nodeBuffer = [];
        }

        $this->logger->info(sprintf(
            'PASS 1 terminé : %d nœuds | RAM %.1f Mo',
            $this->nodeRepository->countNodes(),
            memory_get_usage(true) / 1024 / 1024
        ));

        // ---------- PASS 2 : construction des segments (streaming par fenêtre) ----------
        $this->logger->info('PASS 2 : construction des segments (streaming)');
        $lastId = $startId;
        $window = [];        // ways décodés de la fenêtre : ['type', 'idx', 'pts']
        $windowPoints = 0;
        $segmentRows = [];
        $batch = 0;

        while (true) {
            $rows = $this->fetchRawRoads(self::FETCH_CHUNK, $lastId);
            if (empty($rows)) {
                break;
            }
            if ($stopId > 0 && $lastId > $stopId) {
                fprintf(STDERR, 'DEBUG STOP at id=%d' . PHP_EOL, $lastId);
                break;
            }

            foreach ($rows as $row) {
                $lastId = max($lastId, (int) $row['id']);
                $points = $this->decodePoints($row['points']);
                $n = count($points);
                if ($n < 2) {
                    continue;
                }
                if ($n > self::MAX_WAY_POINTS) {
                    $points = $this->downsample($points, self::MAX_WAY_POINTS);
                }

                $indices = GeometryHelper::douglasPeuckerIndices($points, self::DP_EPSILON);
                if (count($indices) < 2) {
                    continue;
                }

                $window[] = ['type' => $row['type'], 'idx' => $indices, 'pts' => $points];
                $windowPoints += $n;

                // Flush la fenêtre si le budget de points / le plafond de ways
                // est atteint. Garantit une mémoire bornée.
                if (count($window) >= self::WINDOW_WAYS || $windowPoints >= self::POINT_BUDGET) {
                    $segmentRows = array_merge($segmentRows, $this->buildWindowSegments($window));
                    $window = [];
                    $windowPoints = 0;

                    if (count($segmentRows) >= self::SEG_FLUSH) {
                        $this->insertSegmentsBulk($segmentRows);
                        $this->totalSegments += count($segmentRows);
                        $segmentRows = [];
                        gc_mem_caches();
                        gc_collect_cycles();
                    }
                }
            }

            unset($rows);
            if ((++$batch % 25) === 0) {
                $maxPoly = 0;
                foreach ($segmentRows as $sr) {
                    $l = strlen($sr['polyline']);
                    if ($l > $maxPoly) {
                        $maxPoly = $l;
                    }
                }
                fprintf(STDERR, 'MEM P2 id=%d ram=%.1fM inn=%.1fM win=%d seg=%d maxPoly=%dKB tot=%d' . PHP_EOL,
                    $lastId, memory_get_usage(true) / 1048576, memory_get_usage(false) / 1048576,
                    count($window), count($segmentRows), (int) ($maxPoly / 1024), $this->totalSegments);
            }
        }

        if ($window !== []) {
            $segmentRows = array_merge($segmentRows, $this->buildWindowSegments($window));
        }
        if ($segmentRows !== []) {
            $this->insertSegmentsBulk($segmentRows);
            $this->totalSegments += count($segmentRows);
        }

        $this->logger->info(sprintf(
            'PASS 2 terminé : %d segments | RAM %.1f Mo',
            $this->totalSegments,
            memory_get_usage(true) / 1024 / 1024
        ));

        return [
            'segments_created' => $this->totalSegments,
            'nodes_created' => $this->nodeRepository->countNodes(),
        ];
    }

    /**
     * Construit les lignes de segments d'une fenêtre de ways.
     * Résout les IDs de nœuds en une seule requête bulk (pass 1 a déjà créé
     * tous les nœuds, donc lookup pur).
     *
     * @param array<int, array{type: string, idx: int[], pts: array}> $ways
     * @return array<int, array{startId: int, endId: int, type: string, polyline: array, length: float, cost: float, bbox_lat_min: float, bbox_lat_max: float, bbox_lng_min: float, bbox_lng_max: float}>
     */
    private function buildWindowSegments(array $ways): array
    {
        // 1. Collecter les coordonnées de nœuds de la fenêtre (pour le lookup bulk)
        $coordByKey = [];
        foreach ($ways as $w) {
            $idx = $w['idx'];
            $pts = $w['pts'];
            foreach ($idx as $k => $startIdx) {
                $endIdx = $idx[$k + 1] ?? null;
                if ($endIdx === null) {
                    break;
                }
                $sp = $pts[$startIdx];
                $ep = $pts[$endIdx];
                $coordByKey[RoadNodeRepository::coordKey((float) $sp[0], (float) $sp[1])] = $sp;
                $coordByKey[RoadNodeRepository::coordKey((float) $ep[0], (float) $ep[1])] = $ep;
            }
        }

        $coordToId = $this->resolveNodeIds(array_values($coordByKey));

        // 2. Construire les segments
        $rows = [];
        $seen = [];
        foreach ($ways as $w) {
            $idx = $w['idx'];
            $pts = $w['pts'];
            $type = $w['type'];

            foreach ($idx as $k => $startIdx) {
                $endIdx = $idx[$k + 1] ?? null;
                if ($endIdx === null) {
                    break;
                }

                $sp = $pts[$startIdx];
                $ep = $pts[$endIdx];
                $sub = array_slice($pts, $startIdx, $endIdx - $startIdx + 1);

                $signature = GeometryHelper::segmentSignature([$sub[0], $sub[count($sub) - 1]]);
                if (isset($seen[$signature])) {
                    continue;
                }
                $seen[$signature] = true;

                $startId = $coordToId[RoadNodeRepository::coordKey((float) $sp[0], (float) $sp[1])] ?? null;
                $endId = $coordToId[RoadNodeRepository::coordKey((float) $ep[0], (float) $ep[1])] ?? null;
                if ($startId === null || $endId === null) {
                    continue;
                }

                $rows[] = $this->buildSegmentRow($startId, $endId, $type, $sub);
            }
        }

        return $rows;
    }

    /**
     * Insère un buffer de coordonnées de nœuds (INSERT IGNORE, dédoublonné).
     *
     * @param array<int, array{0: float, 1: float}> $coords
     */
    private function flushNodeBuffer(array $coords): void
    {
        if ($coords === []) {
            return;
        }

        // Déduplication par coordKey avant insertion.
        $unique = [];
        foreach ($coords as $c) {
            $unique[RoadNodeRepository::coordKey((float) $c[0], (float) $c[1])] = $c;
        }

        $parts = [];
        $params = [];
        foreach ($unique as $c) {
            $parts[] = '(?, ?)';
            $params[] = $c[0];
            $params[] = $c[1];
        }

        if ($parts !== []) {
            $this->connection->executeStatement(
                'INSERT IGNORE INTO road_node (lat, lng) VALUES ' . implode(',', $parts),
                $params
            );
        }
    }

    /**
     * Décode les points JSON d'un way (et sous-échantillonnage si pathologique).
     *
     * @param string|array $points
     * @return array<int, array{0: float, 1: float}>
     */
    private function decodePoints($points): array
    {
        $decoded = is_string($points) ? json_decode($points, true) : $points;
        return is_array($decoded) ? $decoded : [];
    }

    /**
     * Sous-échantillonnage régulier d'une voie pour la ramener sous $max points
     * (en conservant le premier et le dernier point).
     *
     * @param array<int, array{0: float, 1: float}> $points
     * @return array<int, array{0: float, 1: float}>
     */
    private function downsample(array $points, int $max): array
    {
        $n = count($points);
        if ($n <= $max) {
            return $points;
        }

        $step = (int) ceil($n / $max);
        $sampled = [];
        for ($i = 0; $i < $n; $i += $step) {
            $sampled[] = $points[$i];
        }
        $last = $points[$n - 1];
        if ($sampled[count($sampled) - 1] !== $last) {
            $sampled[] = $last;
        }

        return $sampled;
    }

    /**
     * Récupère les IDs de nœuds pour un lot de coordonnées (lookup bulk).
     * Pass 1 ayant déjà inséré tous les nœuds, c'est un lookup pur ;
     * l'INSERT IGNORE de sécurité ne fait rien en pass 2.
     *
     * @param array<int, array{0: float, 1: float}> $coords
     * @return array<string, int> coordKey => id
     */
    private function resolveNodeIds(array $coords): array
    {
        $map = [];

        foreach (array_chunk($coords, self::COORD_CHUNK, false) as $chunk) {
            $existing = $this->nodeRepository->findIdsByCoordinates($chunk);

            $toInsert = [];
            foreach ($chunk as $c) {
                $key = RoadNodeRepository::coordKey((float) $c[0], (float) $c[1]);
                if (!isset($existing[$key])) {
                    $toInsert[$key] = $c;
                }
            }

            if ($toInsert !== []) {
                $parts = [];
                $params = [];
                foreach ($toInsert as $c) {
                    $parts[] = '(?, ?)';
                    $params[] = $c[0];
                    $params[] = $c[1];
                }
                $this->connection->executeStatement(
                    'INSERT IGNORE INTO road_node (lat, lng) VALUES ' . implode(',', $parts),
                    $params
                );
                $newIds = $this->nodeRepository->findIdsByCoordinates(array_values($toInsert));
                foreach ($newIds as $k => $id) {
                    $existing[$k] = $id;
                }
            }

            $map = array_merge($map, $existing);
        }

        return $map;
    }

    /**
     * Insère les segments en requêtes multi-lignes découpées (paquets MySQL).
     *
     * @param array<int, array{startId: int, endId: int, type: string, polyline: string, length: float, cost: float, bbox_lat_min: float, bbox_lat_max: float, bbox_lng_min: float, bbox_lng_max: float}> $rows
     */
    private function insertSegmentsBulk(array $rows): void
    {
        if ($rows === []) {
            return;
        }

        foreach (array_chunk($rows, self::INSERT_CHUNK) as $chunk) {
            $parts = [];
            $params = [];
            foreach ($chunk as $r) {
                $parts[] = '(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
                $params[] = $r['startId'];
                $params[] = $r['endId'];
                $params[] = $r['type'];
                // polyline déjà encodée en JSON par buildSegmentRow (chaîne).
                $params[] = $r['polyline'];
                $params[] = $r['length'];
                $params[] = $r['cost'];
                $params[] = $r['bbox_lat_min'];
                $params[] = $r['bbox_lat_max'];
                $params[] = $r['bbox_lng_min'];
                $params[] = $r['bbox_lng_max'];
            }

            $sql = 'INSERT INTO road_segment '
                . '(node_start_id, node_end_id, type, polyline, length, cost, '
                . 'bbox_lat_min, bbox_lat_max, bbox_lng_min, bbox_lng_max) VALUES '
                . implode(',', $parts);

            $this->connection->executeStatement($sql, $params);
        }
    }

    /**
     * Construit la ligne de données d'un segment (longueur, coût, bbox).
     *
     * La polyline est encodée en JSON *immédiatement* (chaîne) et non conservée
     * comme tableau PHP décodé : un tableau imbriqué de milliers de points pèse
     * ~10× plus en RAM qu'une chaîne JSON, et le buffer de segments s'en
     * retrouvait saturé (OOM Pass 2 v2.3). La géométrie réelle est préservée
     * à l'identique.
     *
     * @param array<int, array{0: float, 1: float}> $subPolyline
     * @return array{startId: int, endId: int, type: string, polyline: string, length: float, cost: float, bbox_lat_min: float, bbox_lat_max: float, bbox_lng_min: float, bbox_lng_max: float}
     */
    private function buildSegmentRow(int $startId, int $endId, string $type, array $subPolyline): array
    {
        $length = GeometryHelper::calculateLength($subPolyline);

        $costFactor = 1.0;
        if (isset(RoadSegment::TYPE_MAPPING[$type])) {
            $costFactor = RoadSegment::TYPE_MAPPING[$type]['cost_factor'] ?? 1.0;
        }
        $cost = $length * $costFactor;

        $bbox = GeometryHelper::calculateBbox($subPolyline);

        return [
            'startId' => $startId,
            'endId' => $endId,
            'type' => $type,
            'polyline' => json_encode($subPolyline),
            'length' => $length,
            'cost' => $cost,
            'bbox_lat_min' => $bbox['lat_min'],
            'bbox_lat_max' => $bbox['lat_max'],
            'bbox_lng_min' => $bbox['lng_min'],
            'bbox_lng_max' => $bbox['lng_max'],
        ];
    }

    /**
     * Récupère un lot de routes brutes (cursor-based, par id croissant).
     */
    private function fetchRawRoads(int $limit, int $lastId): array
    {
        return $this->connection->fetchAllAssociative(
            'SELECT id, osm_id, type, points, bbox_lat_min, bbox_lng_min, bbox_lat_max, bbox_lng_max
             FROM raw_road WHERE id > :lastId ORDER BY id LIMIT :limit',
            ['lastId' => $lastId, 'limit' => $limit],
            ['lastId' => \Doctrine\DBAL\ParameterType::INTEGER, 'limit' => \Doctrine\DBAL\ParameterType::INTEGER]
        );
    }

    /**
     * Compte les segments créés.
     */
    public function countSegments(): int
    {
        return $this->segmentRepository->countSegments();
    }

    /**
     * Compte les nœuds créés.
     */
    public function countNodes(): int
    {
        return $this->nodeRepository->countNodes();
    }

    /**
     * Vide les tables de normalisation.
     */
    public function truncate(): void
    {
        $this->segmentRepository->truncate();
        $this->nodeRepository->truncate();
    }
}
