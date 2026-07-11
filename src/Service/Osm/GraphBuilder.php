<?php

namespace App\Service\Osm;

use App\Entity\RoadGraph;
use App\Repository\RoadSegmentRepository;
use App\Repository\RoadGraphRepository;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;

/**
 * Phase 3-4 : Construction du graphe de navigation.
 * Implémente CompilerPhase.
 */
final class GraphBuilder implements CompilerPhase
{
    public function __construct(
        private readonly RoadSegmentRepository $segmentRepository,
        private readonly RoadGraphRepository $graphRepository,
        private readonly EntityManagerInterface $em,
        private readonly LoggerInterface $logger,
    ) {}

    /**
     * Implémente CompilerPhase.
     */
    public function compile(WorldContext $context): CompilationResult
    {
        $result = $this->build();
        return new CompilationResult(
            edgesCreated: $result['edges_created'] ?? 0,
        );
    }

    public function phase(): CompilePhase
    {
        return CompilePhase::GRAPH;
    }

    /**
     * Construit le graphe à partir des segments existants (cursor-based).
     */
    public function build(): array
    {
        $totalEdges = 0;
        $lastId = 0;
        $batchSize = 5000;

        $this->graphRepository->truncate();

        while (true) {
            $segments = $this->fetchSegments($batchSize, $lastId);

            if (empty($segments)) {
                break;
            }

            $edgesCreated = 0;
            $this->em->beginTransaction();

            try {
                foreach ($segments as $segment) {
                    $lastId = max($lastId, (int) $segment['id']);

                    // Arête aller
                    $edge = new RoadGraph(
                        $segment['node_start_id'],
                        $segment['node_end_id'],
                        $segment['id']
                    );
                    $this->em->persist($edge);

                    // Arête retour (bidirectionnel)
                    $reverseEdge = new RoadGraph(
                        $segment['node_end_id'],
                        $segment['node_start_id'],
                        $segment['id']
                    );
                    $this->em->persist($reverseEdge);

                    $edgesCreated += 2;
                    $totalEdges += 2;
                }

                $this->em->flush();
                $this->em->clear();
                $this->em->commit();

            } catch (\Throwable $e) {
                $this->em->rollback();
                throw $e;
            }

            $this->logger->info(sprintf('Graphe : %d arêtes créées', $totalEdges));
        }

        return [
            'edges_created' => $totalEdges,
            'unique_nodes' => $this->getUniqueNodeCount(),
        ];
    }

    /**
     * Récupère les segments (cursor-based).
     */
    private function fetchSegments(int $limit, int $lastId): array
    {
        return $this->segmentRepository->createQueryBuilder('s')
            ->select('s.id', 's.nodeStartId', 's.nodeEndId')
            ->where('s.id > :lastId')
            ->setParameter('lastId', $lastId)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getArrayResult();
    }

    private function getUniqueNodeCount(): int
    {
        $conn = $this->em->getConnection();
        $result = $conn->fetchOne(
            'SELECT COUNT(DISTINCT node_id) FROM road_graph'
        );
        return (int) $result;
    }

    public function findNeighbors(int $nodeId): array
    {
        return $this->graphRepository->findNeighborsByNodeId($nodeId);
    }

    public function countEdges(): int
    {
        return $this->graphRepository->countEdges();
    }

    public function reset(): void
    {
        $this->graphRepository->truncate();
    }
}