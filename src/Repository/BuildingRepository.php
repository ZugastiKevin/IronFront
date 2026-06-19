<?php

namespace App\Repository;

use App\Entity\Building;
use App\Entity\Game;
use App\Entity\ResourceType;
use App\Entity\User;
use App\Enum\BuildingCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Building>
 */
class BuildingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Building::class);
    }

    /**
     * Récupère les données des bâtiments pour une partie.
     * @param Game $game
     * @return array
     */
    public function getBuildingsDataForGame(Game $game): array
    {
        $buildings = $this->findBy(['game' => $game]);
        $buildingData = [];

        foreach ($buildings as $b) {
            $buildingType = $b->getBuildingType();
            $level = $b->getLevel() ?? 1;
            $productionRate = $buildingType->getProductionRate() ?? 0;
            $resourceType = $buildingType->getResourceType()?->getLabel();

            $production = $productionRate * $level;

            $buildingData[] = [
                'id' => $b->getId(),
                'lat' => $b->getLatitudeBuild(),
                'lng' => $b->getLongitudeBuild(),
                'type' => $buildingType->getLabel(),
                'code' => $buildingType->getCode(),
                'level' => $level,
                'ownerId' => $b->getUser()->getId(),
                'production_rate' => $productionRate > 0 ? $production : null,
                'production' => $production > 0 ? $production : null,
                'resource_type' => $resourceType,
            ];
        }

        return $buildingData;
    }

    /**
     * @return array<string, float> Map du code ressource => taux de production par heure
     */
    public function getProductionRatesByResourceForUser(User $user): array
    {
        $rows = $this->createQueryBuilder('b')
            ->select('rt.code AS resourceCode', 'SUM(COALESCE(b.level, 1) * COALESCE(bt.production_rate, 0)) AS productionRate')
            ->join('b.buildingType', 'bt')
            ->join('bt.resourceType', 'rt')
            ->where('b.user = :user')
            ->andWhere('bt.resourceType IS NOT NULL')
            ->setParameter('user', $user)
            ->groupBy('rt.code')
            ->getQuery()
            ->getArrayResult();

        $rates = [];

        foreach ($rows as $row) {
            $resourceCode = $row['resourceCode'] ?? null;

            if (!$resourceCode) {
                continue;
            }

            $rates[$resourceCode] = (float) ($row['productionRate'] ?? 0);
        }

        return $rates;
    }

    public function findBaseForUser(Game $game, User $user): ?Building
    {
        return $this->createQueryBuilder('b')
            ->join('b.buildingType', 'bt')
            ->where('b.user = :user')
            ->andWhere('b.game = :game')
            ->andWhere('bt.name = :name')
            ->setParameter('user', $user)
            ->setParameter('game', $game)
            ->setParameter('name', 'base')
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Trouve les bâtiments producteurs pouvant avoir une livraison
     * - Bâtiments créés depuis plus de 1h
     * - Bâtiments sans livraison, ou avec livraison terminée
     */
    public function getProducerBuildingsWithoutDelivery(User $user, Game $game): array
    {
        $now = new \DateTimeImmutable();
        $oneHourAgo = $now->modify('-1 hour');

        return $this->createQueryBuilder('b')
            ->join('b.buildingType', 'bt')
            ->where('b.user = :user')
            ->andWhere('b.game = :game')
            ->andWhere('bt.category = :category')
            ->setParameter('category', BuildingCategory::PRODUCTION)
            ->andWhere('b.createdAt IS NOT NULL AND b.createdAt <= :oneHourAgo')
            ->leftJoin('b.deliveries', 'd')
            ->andWhere('d.id IS NULL OR d.status = :deliveredStatus')
            ->setParameter('user', $user)
            ->setParameter('game', $game)
            ->setParameter('oneHourAgo', $oneHourAgo)
            ->setParameter('deliveredStatus', \App\Entity\ResourceDelivery::STATUS_DELIVERED)
            ->getQuery()
            ->getResult();
    }

    /**
     * Trouve les types de bâtiments qui produisent une ressource donnée
     */
    public function findProductionBuildingsByResource(Game $game, ResourceType $resourceType): array
    {
        return $this->createQueryBuilder('b')
            ->join('b.buildingType', 'bt')
            ->where('bt.resourceType = :resourceType')
            ->andWhere('bt.category = :category')
            ->setParameter('category', BuildingCategory::PRODUCTION)
            ->andWhere('b.game = :game')
            ->setParameter('resourceType', $resourceType)
            ->setParameter('game', $game)
            ->getQuery()
            ->getResult();
    }

    /**
     * Retourne tous les bâtiments producteurs d'un joueur
     * (peu importe l'état des livraisons — le handler gère la logique)
     */
    public function getProducerBuildings(Game $game, User $user): array
    {
        return $this->createQueryBuilder('b')
            ->join('b.buildingType', 'bt')
            ->where('b.user = :user')
            ->andWhere('b.game = :game')
            ->andWhere('bt.category = :category')
            ->andWhere('bt.resourceType IS NOT NULL')
            ->andWhere('b.createdAt IS NOT NULL')
            ->setParameter('user', $user)
            ->setParameter('game', $game)
            ->setParameter('category', BuildingCategory::PRODUCTION)
            ->getQuery()
            ->getResult();
    }
}
