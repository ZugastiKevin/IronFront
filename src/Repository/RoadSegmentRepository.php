<?php

namespace App\Repository;

use App\Entity\RoadSegment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<RoadSegment>
 */
class RoadSegmentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RoadSegment::class);
    }

    /**
     * Trouve les segments qui chevauchent une bbox.
     */
    public function findByBbox(float $south, float $west, float $north, float $east): array
    {
        return $this->createQueryBuilder('s')
            ->where('s.bboxLatMax >= :south')->setParameter('south', $south)
            ->andWhere('s.bboxLatMin <= :north')->setParameter('north', $north)
            ->andWhere('s.bboxLngMax >= :west')->setParameter('west', $west)
            ->andWhere('s.bboxLngMin <= :east')->setParameter('east', $east)
            ->getQuery()->getResult();
    }

    /**
     * Compte le nombre total de segments.
     */
    public function countSegments(): int
    {
        return (int) $this->createQueryBuilder('s')
            ->select('COUNT(s.id)')
            ->getQuery()
            ->getSingleScalarResult();
    }

    /**
     * Vide la table des segments.
     */
    public function truncate(): void
    {
        $this->_em->getConnection()->executeStatement('TRUNCATE TABLE road_segment');
    }
}