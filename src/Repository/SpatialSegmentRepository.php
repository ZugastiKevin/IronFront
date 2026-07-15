<?php

namespace App\Repository;

use App\Entity\SpatialSegment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\DBAL\ArrayParameterType;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<SpatialSegment>
 */
class SpatialSegmentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SpatialSegment::class);
    }

    /**
     * Trouve les segments associés à une cellule.
     */
    public function findByCellId(string $cellId): array
    {
        return $this->createQueryBuilder('s')
            ->where('s.cellId = :cellId')->setParameter('cellId', $cellId)
            ->getQuery()->getResult();
    }

    /**
     * Trouve les cellules intersectées par un segment (bbox).
     */
    public function findCellsForSegment(int $segmentId, float $south, float $west, float $north, float $east): array
    {
        // Calcul des cellules couvertes par la bbox
        $cellSize = \App\Entity\SpatialCell::CELL_SIZE_DEGREES;

        $minX = (int) floor($south / $cellSize);
        $maxX = (int) floor($north / $cellSize);
        $minY = (int) floor($west / $cellSize);
        $maxY = (int) floor($east / $cellSize);

        // Utiliser une requête SQL directe pour performance
        $conn = $this->getEntityManager()->getConnection();
        $rows = $conn->fetchAllAssociative(
            "SELECT id FROM spatial_cell WHERE x BETWEEN :minX AND :maxX AND y BETWEEN :minY AND :maxY",
            ['minX' => $minX, 'maxX' => $maxX, 'minY' => $minY, 'maxY' => $maxY]
        );

        return array_map(fn($row) => $row['id'], $rows);
    }

    /**
     * Retourne les segment_id distincts associés à un ensemble de cellules.
     * Interroge l'index idx_spatial_segment_cell (cell_id IN).
     *
     * @param string[] $cellIds
     * @return int[]
     */
    public function findSegmentIdsByCellIds(array $cellIds): array
    {
        if (empty($cellIds)) {
            return [];
        }

        $rows = $this->getEntityManager()->getConnection()->fetchAllAssociative(
            'SELECT DISTINCT segment_id FROM spatial_segment WHERE cell_id IN (?)',
            [$cellIds],
            [ArrayParameterType::STRING]
        );

        return array_map(fn($row) => (int) $row['segment_id'], $rows);
    }

    /**
     * Compte le nombre total de relations.
     */
    public function countRelations(): int
    {
        return (int) $this->createQueryBuilder('s')
            ->select('COUNT(s.id)')
            ->getQuery()
            ->getSingleScalarResult();
    }
}