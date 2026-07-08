<?php

namespace App\Repository;

use App\Entity\ImportProgress;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ImportProgress>
 */
class ImportProgressRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ImportProgress::class);
    }

    /**
     * Trouve un checkpoint par région et clé de tuile.
     */
    public function findByRegionAndTile(string $region, string $tileKey): ?ImportProgress
    {
        return $this->createQueryBuilder('ip')
            ->where('ip.region = :region')->setParameter('region', $region)
            ->andWhere('ip.tileKey = :tileKey')->setParameter('tileKey', $tileKey)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Récupère les tuiles avec statut 'processing' (crashs à reprendre).
     *
     * @return ImportProgress[]
     */
    public function findCrashedTiles(string $region): array
    {
        return $this->createQueryBuilder('ip')
            ->where('ip.region = :region')->setParameter('region', $region)
            ->andWhere('ip.status = :status')->setParameter('status', 'processing')
            ->getQuery()
            ->getResult();
    }

    /**
     * Supprime les checkpoints d'une région (reset complet).
     */
    public function deleteByRegion(string $region): int
    {
        return $this->createQueryBuilder('ip')
            ->delete()
            ->where('ip.region = :region')->setParameter('region', $region)
            ->getQuery()
            ->execute();
    }

    /**
     * Compte les tuiles complétées pour une région.
     */
    public function countCompleted(string $region): int
    {
        return (int) $this->createQueryBuilder('ip')
            ->select('COUNT(ip.id)')
            ->where('ip.region = :region')->setParameter('region', $region)
            ->andWhere('ip.status = :status')->setParameter('status', 'completed')
            ->getQuery()
            ->getSingleScalarResult();
    }

    /**
     * Compte les tuiles en erreur/crash.
     */
    public function countCrashed(string $region): int
    {
        return (int) $this->createQueryBuilder('ip')
            ->select('COUNT(ip.id)')
            ->where('ip.region = :region')->setParameter('region', $region)
            ->andWhere('ip.status = :status')->setParameter('status', 'crashed')
            ->getQuery()
            ->getSingleScalarResult();
    }

    /**
     * Compte les tuiles avec un statut spécifique.
     */
    public function countByStatus(string $region, string $status): int
    {
        return (int) $this->createQueryBuilder('ip')
            ->select('COUNT(ip.id)')
            ->where('ip.region = :region')->setParameter('region', $region)
            ->andWhere('ip.status = :status')->setParameter('status', $status)
            ->getQuery()
            ->getSingleScalarResult();
    }
}