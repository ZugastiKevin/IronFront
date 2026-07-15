<?php

namespace App\Service\Osm;

use App\Repository\RoadGraphRepository;
use App\Service\Osm\CompilationResult;
use App\Service\Osm\CompilePhase;
use App\Service\Osm\WorldContext;
use Doctrine\DBAL\Connection;
use Psr\Log\LoggerInterface;

/**
 * Phase 3-4 : Construction du graphe de navigation.
 * Implémente CompilerPhase.
 *
 * DBAL bulk (pas d'ORM) : pour des volumes de l'ordre de 40-80 M d'arêtes,
 * persister/flusher une entité par arête est ×5-×10 plus lent. On insère en
 * INSERT multi-lignes découpés par lot (INSERT_CHUNK), deux arêtes par segment
 * (A→B et B→A, graphe non orienté). Mémoire bornée : on ne charge que le
 * curseur de segments (BATCH_SIZE), jamais tout le graphe.
 */
final class GraphBuilder implements CompilerPhase
{
    // Nombre de segments lus par curseur.
    private const BATCH_SIZE = 5000;

    // Nombre de lignes (arêtes) par INSERT bulk (paquets réseau MySQL).
    private const INSERT_CHUNK = 5000;

    public function __construct(
        private readonly Connection $connection,
        private readonly RoadGraphRepository $graphRepository,
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
     * Construit le graphe à partir des segments existants (cursor-based, DBAL).
     *
     * @return array{edges_created: int, unique_nodes: int}
     */
    public function build(): array
    {
        $totalEdges = 0;
        $lastId = 0;

        $this->graphRepository->truncate();

        while (true) {
            $segments = $this->fetchSegments(self::BATCH_SIZE, $lastId);

            if (empty($segments)) {
                break;
            }

            $rows = [];
            foreach ($segments as $seg) {
                $segId = (int) $seg['id'];
                $start = (int) $seg['node_start_id'];
                $end = (int) $seg['node_end_id'];

                $lastId = max($lastId, $segId);

                // Arête aller (graphe bidirectionnel : on stocke les deux sens).
                $rows[] = [$start, $end, $segId];
                // Pas d'arête retour si c'est une boucle (start == end) :
                // les deux sens seraient identiques -> doublon sur uniq_road_graph.
                if ($start !== $end) {
                    $rows[] = [$end, $start, $segId];
                    $totalEdges += 2;
                } else {
                    $totalEdges += 1;
                }
            }

            $this->insertEdgesBulk($rows);
            gc_mem_caches();

            $this->logger->info(sprintf('Graphe : %d arêtes créées', $totalEdges));
        }

        return [
            'edges_created' => $totalEdges,
            'unique_nodes' => $this->getUniqueNodeCount(),
        ];
    }

    /**
     * Insère les arêtes en INSERT multi-lignes découpés (paquets MySQL).
     *
     * @param array<int, array{0: int, 1: int, 2: int}> $rows [nodeId, neighborId, segmentId]
     */
    private function insertEdgesBulk(array $rows): void
    {
        if ($rows === []) {
            return;
        }

        foreach (array_chunk($rows, self::INSERT_CHUNK) as $chunk) {
            $parts = [];
            $params = [];
            foreach ($chunk as [$nodeId, $neighborId, $segmentId]) {
                $parts[] = '(?, ?, ?)';
                $params[] = $nodeId;
                $params[] = $neighborId;
                $params[] = $segmentId;
            }

            $this->connection->executeStatement(
                'INSERT IGNORE INTO road_graph (node_id, neighbor_id, segment_id) VALUES '
                . implode(',', $parts),
                $params
            );
        }
    }

    /**
     * Récupère les segments (cursor-based, DBAL direct).
     *
     * @return array<int, array{id: int, node_start_id: int, node_end_id: int}>
     */
    private function fetchSegments(int $limit, int $lastId): array
    {
        return $this->connection->fetchAllAssociative(
            'SELECT id, node_start_id, node_end_id
             FROM road_segment WHERE id > ? ORDER BY id ASC LIMIT ?',
            [$lastId, $limit],
            [\Doctrine\DBAL\ParameterType::INTEGER, \Doctrine\DBAL\ParameterType::INTEGER]
        );
    }

    private function getUniqueNodeCount(): int
    {
        return (int) $this->connection->fetchOne(
            'SELECT COUNT(DISTINCT node_id) FROM road_graph'
        );
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
