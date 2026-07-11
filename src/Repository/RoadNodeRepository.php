<?php

namespace App\Repository;

use App\Entity\RoadNode;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<RoadNode>
 */
class RoadNodeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RoadNode::class);
    }

    /**
     * Trouve un nœud existant à ces coordonnées (ou null).
     */
    public function findByCoordinates(float $lat, float $lng, float $epsilon = 0.000001): ?RoadNode
    {
        return $this->createQueryBuilder('n')
            ->where('ABS(n.lat - :lat) < :eps')
            ->andWhere('ABS(n.lng - :lng) < :eps')
            ->setParameter('lat', $lat)
            ->setParameter('lng', $lng)
            ->setParameter('eps', $epsilon)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Trouve ou crée un nœud à ces coordonnées.
     */
    public function findOrCreate(float $lat, float $lng): RoadNode
    {
        $existing = $this->findByCoordinates($lat, $lng);

        if ($existing !== null) {
            return $existing;
        }

        $node = new RoadNode($lat, $lng);
        $this->_em->persist($node);

        return $node;
    }

    /**
     * Trouve tous les nœuds dans une bbox.
     */
    public function findByBbox(float $south, float $west, float $north, float $east): array
    {
        return $this->createQueryBuilder('n')
            ->where('n.lat >= :south')->setParameter('south', $south)
            ->andWhere('n.lat <= :north')->setParameter('north', $north)
            ->andWhere('n.lng >= :west')->setParameter('west', $west)
            ->andWhere('n.lng <= :east')->setParameter('east', $east)
            ->getQuery()->getResult();
    }

    /**
     * Compte le nombre total de nœuds.
     */
    public function countNodes(): int
    {
        return (int) $this->createQueryBuilder('n')
            ->select('COUNT(n.id)')
            ->getQuery()
            ->getSingleScalarResult();
    }

    /**
     * Vide la table des nœuds.
     */
    public function truncate(): void
    {
        $this->_em->getConnection()->executeStatement('TRUNCATE TABLE road_node');
    }
}