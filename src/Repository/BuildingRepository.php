<?php

namespace App\Repository;

use App\Entity\Building;
use App\Entity\Player;
use App\Entity\ResourceType;
use App\Enum\BuildingCategory;
use App\Enum\BuildingCode;
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

    public function findBaseForPlayer(Player $player): ?Building
    {
        return $this->createQueryBuilder('b')
            ->join('b.buildingType', 'bt')
            ->where('b.player = :player')
            ->andWhere('bt.code = :code')
            ->setParameter('player', $player)
            ->setParameter('code', BuildingCode::BASE)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Récupère les données des bâtiments pour une partie.
     * @param Player $player
     * @return array
     */
    public function getBuildingsDataForPlayer(Player $player): array
    {
        $buildings = $this->findBy(['player' => $player]);
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
                'ownerId' => $b->getPlayer()->getId(),
                'production_rate' => $productionRate > 0 ? $production : null,
                'production' => $production > 0 ? $production : null,
                'resource_type' => $resourceType,
            ];
        }

        return $buildingData;
    }

    /**
     * Trouve les types de bâtiments qui produisent une ressource donnée
     */
    public function findProductionBuildingsByResource(Player $player, ResourceType $resourceType): array
    {
        return $this->createQueryBuilder('b')
            ->join('b.buildingType', 'bt')
            ->where('bt.resourceType = :resourceType')
            ->andWhere('bt.category = :category')
            ->setParameter('category', BuildingCategory::PRODUCTION)
            ->andWhere('b.player = :player')
            ->setParameter('resourceType', $resourceType)
            ->setParameter('player', $player)
            ->getQuery()
            ->getResult();
    }

    /**
     * Retourne tous les bâtiments producteurs d'un joueur
     * (peu importe l'état des livraisons — le handler gère la logique)
     */
    public function getProducerBuildings(Player $player): array
    {
        return $this->createQueryBuilder('b')
            ->join('b.buildingType', 'bt')
            ->where('b.player = :player')
            ->andWhere('bt.category = :category')
            ->andWhere('bt.resourceType IS NOT NULL')
            ->andWhere('b.createdAt IS NOT NULL')
            ->setParameter('player', $player)
            ->setParameter('category', BuildingCategory::PRODUCTION)
            ->getQuery()
            ->getResult();
    }
}
