<?php

namespace App\Repository;

use App\Entity\Notification;
use App\Entity\Player;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

final class NotificationRepository extends ServiceEntityRepository
{
    public function __construct(
        ManagerRegistry $registry
    ) {
        parent::__construct($registry, Notification::class);
    }

    public function latestForPlayer(Player $player): array
    {
        return $this->createQueryBuilder('n')
            ->where('n.player = :player')
            ->andWhere('n.readed = false')
            ->setParameter('player', $player)
            ->orderBy('n.createdAt', 'DESC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult();
    }

    public function latest(int $limit = 20): array
    {
        return $this->createQueryBuilder('n')
            ->orderBy('n.createdAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }
}