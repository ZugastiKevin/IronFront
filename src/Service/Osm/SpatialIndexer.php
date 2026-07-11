<?php

namespace App\Service\Osm;

use App\Entity\SpatialCell;
use App\Entity\RoadSegment;
use App\Repository\RoadSegmentRepository;
use Doctrine\DBAL\ArrayParameterType;
use Doctrine\DBAL\Connection;
use Psr\Log\LoggerInterface;

/**
 * Phase 5 : Construction de l'index spatial.
 * Implémente CompilerPhase.
 *
 * Utilise DBAL directement (pas de Doctrine ORM) pour absorber des volumes
 * de l'ordre de 40 M de segments : INSERT IGNORE pour les cellules (MySQL
 * dédoublonne sur la clé primaire, aucun cache PHP), et INSERT multi-lignes
 * par batch pour les relations cellule ↔ segment.
 */
class SpatialIndexer implements CompilerPhase
{
    private const BATCH_SIZE = 5000;

    public function __construct(
        private readonly RoadSegmentRepository $segmentRepository,
        private readonly Connection $connection,
        private readonly LoggerInterface $logger,
    ) {}

    /**
     * Implémente CompilerPhase.
     */
    public function compile(WorldContext $context): CompilationResult
    {
        $result = $this->index();
        return new CompilationResult(
            cellsCreated: $result['cells_created'] ?? 0,
            relationsCreated: $result['relations_created'] ?? 0,
        );
    }

    public function phase(): CompilePhase
    {
        return CompilePhase::SPATIAL;
    }

    /**
     * Construit l'index spatial (cursor-based, DBAL).
     *
     * @return array{cells_created: int, relations_created: int}
     */
    public function index(): array
    {
        $totalRelations = 0;
        $totalCells = 0;
        $lastId = 0;

        // Vider les tables (idempotent : un rerun ne duplique rien)
        $this->connection->executeStatement('TRUNCATE TABLE spatial_segment');
        $this->connection->executeStatement('TRUNCATE TABLE spatial_cell');

        while (true) {
            $segments = $this->fetchSegments(static::BATCH_SIZE, $lastId);

            if (empty($segments)) {
                break;
            }

            $cellRows = [];
            $relRows = [];

            foreach ($segments as $seg) {
                $lastId = max($lastId, (int) $seg['id']);

                $cellIds = GeometryHelper::getCellIdsForBbox(
                    $seg['bboxLatMin'],
                    $seg['bboxLngMin'],
                    $seg['bboxLatMax'],
                    $seg['bboxLngMax']
                );

                foreach ($cellIds as $cellId) {
                    $cellRows[] = $this->buildCellRow($cellId);
                    $relRows[] = [$cellId, (int) $seg['id']];
                }
            }

            // INSERT IGNORE : MySQL dédoublonne les cellules (clé primaire).
            // Le retour = nombre de lignes réellement insérées (doublons ignorés).
            [$cellsInserted, $relationsInserted] = $this->connection->transactional(
                fn(): array => [$this->flushCells($cellRows), $this->flushRelations($relRows)]
            );

            $totalCells += $cellsInserted;
            $totalRelations += $relationsInserted;

            $this->logger->info(sprintf(
                'Index spatial : %d relations, %d cellules (lot)',
                count($relRows),
                count($cellRows)
            ));
        }

        return [
            'cells_created' => $totalCells,
            'relations_created' => $totalRelations,
        ];
    }

    /**
     * Construit une ligne spatial_cell à partir de son identifiant "x_y".
     *
     * @return array{0: string, 1: int, 2: int, 3: float, 4: float, 5: float, 6: float}
     */
    private function buildCellRow(string $cellId): array
    {
        $parts = explode('_', $cellId);
        $x = (int) $parts[0];
        $y = (int) $parts[1];

        return [
            $cellId,
            $x,
            $y,
            $x * SpatialCell::CELL_SIZE_DEGREES,
            ($x + 1) * SpatialCell::CELL_SIZE_DEGREES,
            $y * SpatialCell::CELL_SIZE_DEGREES,
            ($y + 1) * SpatialCell::CELL_SIZE_DEGREES,
        ];
    }

    /**
     * @param array<int, array{0: string, 1: int, 2: int, 3: float, 4: float, 5: float, 6: float}> $cellRows
     */
    private function flushCells(array $cellRows): int
    {
        if (empty($cellRows)) {
            return 0;
        }

        $placeholders = implode(',', array_fill(0, count($cellRows), '(?,?,?,?,?,?,?)'));
        $params = [];
        foreach ($cellRows as $row) {
            array_push($params, $row[0], $row[1], $row[2], $row[3], $row[4], $row[5], $row[6]);
        }

        return $this->connection->executeStatement(
            'INSERT IGNORE INTO spatial_cell (id, x, y, lat_min, lat_max, lng_min, lng_max) VALUES ' . $placeholders,
            $params
        );
    }

    /**
     * @param array<int, array{0: string, 1: int}> $relRows
     */
    private function flushRelations(array $relRows): int
    {
        if (empty($relRows)) {
            return 0;
        }

        $placeholders = implode(',', array_fill(0, count($relRows), '(?,?)'));
        $params = [];
        foreach ($relRows as $row) {
            array_push($params, $row[0], $row[1]);
        }

        return $this->connection->executeStatement(
            'INSERT INTO spatial_segment (cell_id, segment_id) VALUES ' . $placeholders,
            $params
        );
    }

    private function fetchSegments(int $limit, int $lastId): array
    {
        return $this->segmentRepository->createQueryBuilder('s')
            ->select('s.id', 's.bboxLatMin', 's.bboxLatMax', 's.bboxLngMin', 's.bboxLngMax')
            ->where('s.id > :lastId')
            ->setParameter('lastId', $lastId)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getArrayResult();
    }

    /**
     * Trouve les segments associés à une cellule.
     *
     * @return RoadSegment[]
     */
    public function findSegmentsInCell(string $cellId): array
    {
        $segmentIds = $this->connection->fetchFirstColumn(
            'SELECT DISTINCT segment_id FROM spatial_segment WHERE cell_id = ?',
            [$cellId]
        );

        if (empty($segmentIds)) {
            return [];
        }

        return $this->segmentRepository->createQueryBuilder('s')
            ->where('s.id IN (:ids)')
            ->setParameter('ids', $segmentIds)
            ->getQuery()
            ->getResult();
    }

    /**
     * Trouve les segments qui chevauchent une bbox via l'index spatial.
     *
     * @return RoadSegment[]
     */
    public function findSegmentsInBbox(float $south, float $west, float $north, float $east): array
    {
        $cellIds = GeometryHelper::getCellIdsForBbox($south, $west, $north, $east);

        if (empty($cellIds)) {
            return [];
        }

        $segmentIds = $this->connection->fetchFirstColumn(
            'SELECT DISTINCT s.id
             FROM road_segment s
             JOIN spatial_segment ss ON s.id = ss.segment_id
             WHERE ss.cell_id IN (:cells)',
            ['cells' => $cellIds],
            ['cells' => ArrayParameterType::STRING]
        );

        if (empty($segmentIds)) {
            return [];
        }

        return $this->segmentRepository->createQueryBuilder('s')
            ->where('s.id IN (:ids)')
            ->setParameter('ids', $segmentIds)
            ->getQuery()
            ->getResult();
    }

    public function countCells(): int
    {
        return (int) $this->connection->fetchOne('SELECT COUNT(*) FROM spatial_cell');
    }

    public function reset(): void
    {
        $this->connection->executeStatement('TRUNCATE TABLE spatial_cell');
        $this->connection->executeStatement('TRUNCATE TABLE spatial_segment');
    }
}
