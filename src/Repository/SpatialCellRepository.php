<?php

namespace App\Repository;

use App\Entity\SpatialCell;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<SpatialCell>
 */
class SpatialCellRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SpatialCell::class);
    }

    /**
     * Trouve une cellule par ses coordonnées x,y.
     */
    public function findByCoords(int $x, int $y): ?SpatialCell
    {
        return $this->createQueryBuilder('c')
            ->where('c.x = :x')->setParameter('x', $x)
            ->andWhere('c.y = :y')->setParameter('y', $y)
            ->getQuery()->getOneOrNullResult();
    }

    /**
     * Trouve ou crée une cellule pour une latitude/longitude.
     */
    public function findOrCreateForPoint(float $lat, float $lng): SpatialCell
    {
        $x = (int) floor($lat / SpatialCell::CELL_SIZE_DEGREES);
        $y = (int) floor($lng / SpatialCell::CELL_SIZE_DEGREES);
        $id = sprintf('%d_%d', $x, $y);

        $existing = $this->find($id);
        if ($existing !== null) {
            return $existing;
        }

        $cell = new SpatialCell($id, $x, $y);
        $cell->setLatMin($x * SpatialCell::CELL_SIZE_DEGREES);
        $cell->setLatMax(($x + 1) * SpatialCell::CELL_SIZE_DEGREES);
        $cell->setLngMin($y * SpatialCell::CELL_SIZE_DEGREES);
        $cell->setLngMax(($y + 1) * SpatialCell::CELL_SIZE_DEGREES);

        $this->getEntityManager()->persist($cell);

        return $cell;
    }

    /**
     * Retourne les cellules dont la grille recouvre la bbox donnée.
     * Calcule la plage x/y (floor(lat/CELL_SIZE)) et interroge l'index
     * idx_spatial_cell_coords. Renvoie les cell_id existants (une cellule
     * n'est créée que si elle contient au moins un segment).
     *
     * @return string[]
     */
    public function findCellIdsForBbox(float $south, float $west, float $north, float $east): array
    {
        $size  = SpatialCell::CELL_SIZE_DEGREES;
        $minX  = (int) floor($south / $size);
        $maxX  = (int) floor($north / $size);
        $minY  = (int) floor($west  / $size);
        $maxY  = (int) floor($east  / $size);

        $rows = $this->getEntityManager()->getConnection()->fetchAllAssociative(
            'SELECT id FROM spatial_cell WHERE x BETWEEN :minX AND :maxX AND y BETWEEN :minY AND :maxY',
            ['minX' => $minX, 'maxX' => $maxX, 'minY' => $minY, 'maxY' => $maxY]
        );

        return array_map(fn($row) => $row['id'], $rows);
    }

    /**
     * Compte le nombre total de cellules.
     */
    public function countCells(): int
    {
        return (int) $this->createQueryBuilder('c')
            ->select('COUNT(c.id)')
            ->getQuery()
            ->getSingleScalarResult();
    }

    /**
     * Vide la table des cellules.
     */
    public function truncate(): void
    {
        $this->getEntityManager()->getConnection()->executeStatement('TRUNCATE TABLE spatial_cell');
    }

    /**
     * Vide la table des relations cellule-segment.
     */
    public function truncateSpatialSegment(): void
    {
        $this->getEntityManager()->getConnection()->executeStatement('TRUNCATE TABLE spatial_segment');
    }
}