<?php

namespace App\Repository;

use App\Entity\Game;
use App\Entity\ResourceDeposit;
use App\Entity\GameResourceDeposit;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class GameResourceDepositRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GameResourceDeposit::class);
    }

    public function isCaptured(Game $game, ResourceDeposit $deposit): bool
    {
        return (bool) $this->createQueryBuilder('g')
            ->select('COUNT(g.id)')
            ->where('g.game = :game')
            ->andWhere('g.resourceDeposit = :deposit')
            ->andWhere('g.isCaptured = true')
            ->setParameter('game', $game)
            ->setParameter('deposit', $deposit)
            ->getQuery()
            ->getSingleScalarResult();
    }
}