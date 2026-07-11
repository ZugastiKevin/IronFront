<?php

namespace App\Service\Osm;

use App\Entity\RoadNode;
use App\Entity\RoadSegment;
use App\Repository\RoadNodeRepository;
use App\Repository\RoadSegmentRepository;
use Doctrine\DBAL\Connection;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;

/**
 * Phase 2 : Normalisation des routes OSM.
 *
 * Transforme chaque route en segments A→B, B→C...
 * Implémente CompilerPhase.
 */
final class RoadNormalizer implements CompilerPhase
{
    // Distance maximale pour Douglas-Peucker (en mètres)
    private const DP_EPSILON = 10.0;

    public function __construct(
        private readonly Connection $connection,
        private readonly EntityManagerInterface $em,
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
     * Normalise toutes les routes de raw_road.
     */
    public function normalize(): array
    {
        $totalSegments = 0;
        $lastId = 0;
        $batchSize = 1000;
        $seenSignatures = [];

        while (true) {
            $rows = $this->fetchRawRoads($batchSize, $lastId);
            if (empty($rows)) {
                break;
            }

            $batchSegments = 0;
            $this->em->beginTransaction();

            try {
                foreach ($rows as $row) {
                    $lastId = max($lastId, (int) $row['id']);

                    $originalPoints = is_string($row['points']) ? json_decode($row['points'], true) : $row['points'];
                    $type = $row['type'];

                    if (count($originalPoints) < 2) {
                        continue;
                    }

                    // Simplification Douglas-Peucker (indices dans le tableau original)
                    $simplifiedIndices = GeometryHelper::douglasPeuckerIndices($originalPoints, self::DP_EPSILON);
                    $simplifiedPoints = array_map(fn(int $i): array => $originalPoints[$i], $simplifiedIndices);

                    if (count($simplifiedPoints) < 2) {
                        continue;
                    }

                    // Créer ou récupérer les nœuds (sur les points simplifiés)
                    $nodeIds = $this->getOrCreateNodes($simplifiedPoints);

                    // Créer les segments en conservant la sous-polyligne originale
                    foreach ($simplifiedIndices as $k => $startIdx) {
                        $endIdx = $simplifiedIndices[$k + 1] ?? null;

                        if ($endIdx === null) {
                            break;
                        }

                        if (!isset($nodeIds[$k]) || !isset($nodeIds[$k + 1])) {
                            continue;
                        }

                        $nodeStartId = $nodeIds[$k];
                        $nodeEndId = $nodeIds[$k + 1];

                        // Sous-polyligne ORIGINALE entre les deux nœuds DP (courbure réelle)
                        $subPolyline = array_slice($originalPoints, $startIdx, $endIdx - $startIdx + 1);

                        $signature = GeometryHelper::segmentSignature([
                            $subPolyline[0],
                            $subPolyline[count($subPolyline) - 1],
                        ]);

                        if (isset($seenSignatures[$signature])) {
                            continue;
                        }
                        $seenSignatures[$signature] = true;

                        $segment = $this->createSegment($nodeStartId, $nodeEndId, $type, $subPolyline);
                        $this->em->persist($segment);
                        $batchSegments++;
                    }

                    $totalSegments += $batchSegments;

                    if ($batchSegments > 0) {
                        $this->em->flush();
                        $this->em->clear();
                    }
                }

                $this->em->commit();

            } catch (\Throwable $e) {
                $this->em->rollback();
                throw $e;
            }

            $this->logger->info(sprintf('Normalisé : %d segments créés', $totalSegments));
        }

        return [
            'segments_created' => $totalSegments,
            'nodes_created' => $this->nodeRepository->countNodes(),
        ];
    }

    /**
     * Récupère un lot de routes brutes (cursor-based).
     */
    private function fetchRawRoads(int $limit, int $lastId): array
    {
        return $this->connection->fetchAllAssociative(
            'SELECT id, osm_id, type, points, bbox_lat_min, bbox_lng_min, bbox_lat_max, bbox_lng_max
             FROM raw_road WHERE id > :lastId ORDER BY id LIMIT :limit',
            ['lastId' => $lastId, 'limit' => $limit]
        );
    }

    /**
     * Crée ou récupère les nœuds pour une série de points.
     */
    private function getOrCreateNodes(array $points): array
    {
        $nodeIds = [];

        foreach ($points as $point) {
            $lat = (float) $point[0];
            $lng = (float) $point[1];

            $node = $this->nodeRepository->findByCoordinates($lat, $lng);

            if ($node === null) {
                $node = new RoadNode($lat, $lng);
                $this->em->persist($node);
                $this->em->flush(); // Flush immédiat pour avoir l'ID
            }

            $nodeIds[] = $node->getId();
        }

        return $nodeIds;
    }

    /**
     * Crée un segment avec ses propriétés et sa sous-polyligne.
     *
     * @param array<int, array{0: float, 1: float}> $polyline
     */
    private function createSegment(int $nodeStartId, int $nodeEndId, string $type, array $polyline): RoadSegment
    {
        $segment = new RoadSegment();
        $segment->setNodeStartId($nodeStartId);
        $segment->setNodeEndId($nodeEndId);
        $segment->setType($type);
        $segment->setPolyline($polyline);

        $length = GeometryHelper::calculateLength($polyline);
        $segment->setLength($length);

        // Coût de base = longueur * facteur type
        $costFactor = 1.0;
        if (isset(RoadSegment::TYPE_MAPPING[$type])) {
            $costFactor = RoadSegment::TYPE_MAPPING[$type]['cost_factor'] ?? 1.0;
        }
        $segment->setCost($length * $costFactor);

        $bbox = GeometryHelper::calculateBbox($polyline);
        $segment->setBboxLatMin($bbox['lat_min']);
        $segment->setBboxLatMax($bbox['lat_max']);
        $segment->setBboxLngMin($bbox['lng_min']);
        $segment->setBboxLngMax($bbox['lng_max']);

        return $segment;
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
        $this->nodeRepository->truncate();
        $this->segmentRepository->truncate();
    }
}