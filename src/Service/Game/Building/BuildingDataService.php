<?php

namespace App\Service\Game\Building;

use App\DTO\BuildingData;
use App\Entity\Building;
use App\Entity\Game;
use App\Repository\BuildingRepository;

/**
 * Service dédié à la transformation des données de building pour les APIs.
 * Sépare la logique de présentation de l'entité.
 */
class BuildingDataService
{
    public function __construct(
        private readonly BuildingRepository $buildingRepository,
    ) {}

    /**
     * Récupère les données des bâtiments pour une partie donnée.
     *
     * @return array<int, BuildingData>
     */
    public function getBuildingsDataForGame(Game $game): array
    {
        // Building n'a pas de relation directe avec Game, passez par Player
        $buildings = $this->buildingRepository->createQueryBuilder('b')
            ->join('b.player', 'p')
            ->where('p.game = :game')
            ->setParameter('game', $game)
            ->getQuery()
            ->getResult();

        $buildingData = [];

        // Créer une map des factions des joueurs
        $playerFactions = [];
        foreach ($game->getPlayers() as $player) {
            $playerFactions[$player->getId()] = strtolower($player->getFaction()?->getCode() ?? 'default');
        }

        foreach ($buildings as $building) {
            $buildingData[] = $this->buildBuildingData($building, $playerFactions);
        }

        return $buildingData;
    }

    /**
     * Construit les données d'un seul building.
     */
    private function buildBuildingData(Building $building, array $playerFactions): BuildingData
    {
        $buildingType = $building->getBuildingType();
        $level = $building->getLevel() ?? 1;
        $productionRate = $buildingType->getProductionRate() ?? 0;
        $resourceType = $buildingType->getResourceType()?->getLabel();

        // Calculer le taux de production avec le niveau
        $production = $productionRate * $level;

        return new BuildingData(
            id: $building->getId(),
            lat: $building->getLatitudeBuild(),
            lng: $building->getLongitudeBuild(),
            type: $buildingType->getLabel(),
            code: $buildingType->getCode(),
            level: $level,
            ownerId: $building->getPlayer()->getId(),
            productionRate: $productionRate > 0 ? $productionRate : null,
            production: $production > 0 ? $production : null,
            resourceType: $resourceType,
            faction: $playerFactions[$building->getPlayer()->getId()] ?? 'default',
        );
    }
}