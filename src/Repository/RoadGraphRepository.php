<?php

namespace App\Repository;

use App\Entity\RoadGraph;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<RoadGraph>
 */
class RoadGraphRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RoadGraph::class);
    }

    /**
     * Trouve tous les voisins d'un nœud.
     */
    public function findNeighborsByNodeId(int $nodeId): array
    {
        return $this->createQueryBuilder('g')
            ->where('g.nodeId = :nodeId')->setParameter('nodeId', $nodeId)
            ->getQuery()->getResult();
    }

    /**
     * Trouve le lien entre deux nœuds (si existant).
     */
    public function findLink(int $nodeId, int $neighborId): ?RoadGraph
    {
        return $this->createQueryBuilder('g')
            ->where('g.nodeId = :nodeId')->setParameter('nodeId', $nodeId)
            ->andWhere('g.neighborId = :neighborId')->setParameter('neighborId', $neighborId)
            ->getQuery()->getOneOrNullResult();
    }

    /**
     * Vide la table du graphe.
     */
    public function truncate(): void
    {
        $this->_em->getConnection()->executeStatement('TRUNCATE TABLE road_graph');
    }

    /**
     * Compte le nombre total d'arêtes.
     */
    public function countEdges(): int
    {
        return (int) $this->createQueryBuilder('g')
            ->select('COUNT(g.id)')
            ->getQuery()
            ->getSingleScalarResult();
    }
}