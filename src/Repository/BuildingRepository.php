<?php

namespace App\Repository;

use App\Entity\Building;
use App\Entity\Player;
use App\Entity\ResourceType;
use App\Enum\BuildingCategory;
use App\Enum\BuildingCode;
use App\Service\Game\Vision\VisionService;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Building>
 */
class BuildingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry, private VisionService $visionService,)
    {
        parent::__construct($registry, Building::class);
    }

    public function findAllBuildings(): array
    {
        return $this->createQueryBuilder('b')
            ->leftJoin('b.buildingType', 'bt')
            ->addSelect('bt')
            ->getQuery()
            ->getResult();
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
    public function getBuildingsData(?Player $player = null, bool $global = false): array
    {
        $qb = $this->createQueryBuilder('b')
            ->leftJoin('b.buildingType', 'bt')
            ->addSelect('bt');

        if ($player !== null) {
            $qb->where('b.player = :player')
            ->setParameter('player', $player);
        }

        $buildings = $qb->getQuery()->getResult();
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
                'production_rate' => $productionRate > 0 ? $productionRate : null,
                'production' => $production > 0 ? $production : null,
                'resource_type' => $resourceType,
            ];
        }

        return $buildingData;
    }

    /**
     * Récupère les bâtiments visibles pour un joueur donné.
     * @param Player $player
     * @return array
     */
    public function getVisibleBuildings(Player $player): array
    {
        $allBuildings = $this->findAll();
        $ownBuildings = $this->findBy(['player' => $player]);

        $playerBase = $this->findBaseForPlayer($player);

        if (!$playerBase) {
            return [];
        }

        $pLat = $playerBase->getLatitudeBuild();
        $pLng = $playerBase->getLongitudeBuild();

        $visionBonus = 0.0;

        foreach ($ownBuildings as $b) {
            $visionBonus += $b->getBuildingType()->getVisionRadius();
        }

        $baseRange = $this->visionService->getPlayerVisionRadius($player);

        $visible = [];

        foreach ($allBuildings as $b) {

            // toujours visible si à toi
            if ($b->getPlayer()->getId() === $player->getId()) {
                $visible[] = $b;
                continue;
            }

            if ($this->visionService->isInRange(
                $pLat,
                $pLng,
                $b->getLatitudeBuild(),
                $b->getLongitudeBuild(),
                $baseRange
            )) {
                $visible[] = $b;
            }
        }

        return $visible;
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

    /**
     * Trouve les bâtiments dans une bounding box.
     */
    public function findByBbox(float $south, float $west, float $north, float $east): array
    {
        return $this->createQueryBuilder('b')
            ->where('b.latitudeBuild >= :south')->andWhere('b.latitudeBuild <= :north')
            ->andWhere('b.longitudeBuild >= :west')->andWhere('b.longitudeBuild <= :east')
            ->setParameter('south', $south)
            ->setParameter('west', $west)
            ->setParameter('north', $north)
            ->setParameter('east', $east)
            ->getQuery()
            ->getResult();
    }
}
