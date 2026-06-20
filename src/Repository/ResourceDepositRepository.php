<?php

namespace App\Repository;

use App\Entity\Game;
use App\Entity\ResourceDeposit;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ResourceDeposit>
 */
class ResourceDepositRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ResourceDeposit::class);
    }

    public function findNearestAvailable(Game $game, float $lat, float $lng, float $radius = 0.005): ?ResourceDeposit {
        return $this->createQueryBuilder('r')
            ->leftJoin('r.gameResourceDeposits', 'grd', 'WITH', 'grd.game = :game')
            ->where('grd.id IS NULL OR grd.isClaimed = false')
            ->andWhere('ABS(r.latitude - :lat) < :radius')
            ->andWhere('ABS(r.longitude - :lng) < :radius')
            ->setParameter('game', $game)
            ->setParameter('lat', $lat)
            ->setParameter('lng', $lng)
            ->setParameter('radius', $radius)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findByChunkId(string $chunkId): array
    {
        return $this->createQueryBuilder('d')
            ->join('d.road', 'r')
            ->join('r.chunk', 'c')
            ->where('c.chunkId = :chunkId')
            ->setParameter('chunkId', $chunkId)
            ->getQuery()
            ->getResult();
    }
}