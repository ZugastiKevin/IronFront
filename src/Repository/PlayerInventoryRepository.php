<?php

namespace App\Repository;

use App\Entity\PlayerInventory;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PlayerInventory>
 */
class PlayerInventoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PlayerInventory::class);
    }

    public function findByPlayer(User $user): array
    {
        return $this->createQueryBuilder('pi')
            ->join('pi.resourceType', 'rt')
            ->addSelect('rt')
            ->where('pi.player = :player')
            ->setParameter('player', $user)
            ->getQuery()
            ->getResult();
    }
}