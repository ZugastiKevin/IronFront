<?php

namespace App\Service\Game;

use App\Entity\Game;
use App\Entity\Player;
use App\Enum\FogMode;
use App\Repository\BuildingRepository;
use App\Service\Game\Building\BuildingTransformer;
use App\Service\Game\Vision\VisionService;

final class WorldStateService
{
    public function __construct(
        private BuildingRepository $buildingRepository,
        private VisionService $visionService,
        private BuildingTransformer $buildingTransformer,
    ) {}

    public function build(Player $player): array
    {
        $game = $player->getGame();

        // 1. ALL BUILDINGS
        $allBuildings = $this->buildingRepository->findAllBuildings();

        // 2. FILTER BY FOG
        $visibleBuildings = $this->filterBuildings($player, $game, $allBuildings);

        // 3. TRANSFORM
        $buildingData = $this->buildingTransformer->transform($visibleBuildings, $player);

        // 4. PLAYERS
        $players = $this->buildPlayers($game, $player);

        // 5. INVENTORIES
        $inventories = $this->buildInventories($player);

        // 6. VISION SOURCES
        $visionSources = $this->buildVisionSources($player, $game);

        return [
            'buildings' => $buildingData,
            'players' => $players,
            'inventories' => $inventories,
            'fogMode' => $game->getFogMode()?->value ?? FogMode::DISABLED->value,
            'visionSources' => $visionSources,
        ];
    }

    private function filterBuildings(Player $player, Game $game, array $buildings): array
    {
        if ($game->isFullVision()) {
            return $buildings;
        }

        return array_filter(
            $buildings,
            function ($building) use ($player) {

                // Toujours voir ses propres bâtiments
                if ($building->getPlayer()->getId() === $player->getId()) {
                    return true;
                }

                return $this->visionService->canPlayerSeePosition(
                    $player,
                    $building->getLatitudeBuild(),
                    $building->getLongitudeBuild()
                );
            }
        );
    }

    private function buildPlayers(Game $game, Player $currentPlayer): array
    {
        $data = [];

        foreach ($game->getPlayers() as $p) {

            $base = $this->buildingRepository->findBaseForPlayer($p);

            if (!$base) {
                continue;
            }

            $data[] = [
                'lat' => $base->getLatitudeBuild(),
                'lng' => $base->getLongitudeBuild(),
                'pseudo' => $p->getUser()->getPseudo(),
                'faction' => $p->getFaction()?->getCode(),
                'isMe' => $p->getId() === $currentPlayer->getId(),
            ];
        }

        return $data;
    }

    private function buildInventories(Player $player): array
    {
        $inventories = [];

        foreach ($player->getPlayerInventories() as $inv) {
            $inventories[$inv->getResourceType()->getCode()->value] = $inv->getQuantity();
        }

        return $inventories;
    }

    /**
     * Construit les sources de vision (base + bâtiments améliorés)
     */
    private function buildVisionSources(Player $player, Game $game): array
    {
        $sources = [];

        foreach ($player->getBuildings() as $building) {

            $radius = $building->getBuildingType()->getVisionRadius();

            if ($radius <= 0) {
                $radius = VisionService::BASE_VISION_RADIUS;
            }

            $sources[] = [
                'lat' => $building->getLatitudeBuild(),
                'lng' => $building->getLongitudeBuild(),
                'radius' => $radius,
                'type' => $building->getBuildingType()->getCode(),
            ];
        }

        return $sources;
    }
}