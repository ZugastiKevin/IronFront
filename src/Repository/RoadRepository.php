<?php

namespace App\Repository;

use App\Entity\Road;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Road>
 */
class RoadRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Road::class);
    }

    /**
     * Trouve toutes les routes dont la bounding box chevauche la bbox donnée.
     *
     * Test standard d'overlap : A chevauche B si
     *   A.latMax >= B.south AND A.latMin <= B.north
     *   AND A.lngMax >= B.west AND A.lngMin <= B.east
     */
    public function findByBbox(float $south, float $west, float $north, float $east): array
    {
        return $this->createQueryBuilder('r')
            ->where('r.bboxLatMax >= :south')->setParameter('south', $south)
            ->andWhere('r.bboxLatMin <= :north')->setParameter('north', $north)
            ->andWhere('r.bboxLngMax >= :west')->setParameter('west', $west)
            ->andWhere('r.bboxLngMin <= :east')->setParameter('east', $east)
            ->getQuery()->getResult();
    }

    /**
     * Trouve toutes les routes avec leurs points.
     */
    public function findAllWithPoints(): array
    {
        return $this->createQueryBuilder('r')
            ->addSelect('r.points')
            ->getQuery()
            ->getResult();
    }
}
