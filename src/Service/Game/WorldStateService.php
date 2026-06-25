<?php

namespace App\Service;

use App\Entity\Player;
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
        $buildingData = $this->buildingTransformer->transform($visibleBuildings);

        // 4. PLAYERS
        $players = $this->buildPlayers($game, $player);

        // 5. RESOURCES
        $resources = $this->buildResources($player);

        return [
            'buildings' => $buildingData,
            'players' => $players,
            'resources' => $resources,
            'fogMode' => $game->getFogMode()->value,
        ];
    }

    private function filterBuildings(Player $player, $game, array $buildings): array
    {
        if ($game->isFullVision()) {
            return $buildings;
        }

        $position = $this->visionService->getPlayerPosition($player);

        if (!$position) {
            return [];
        }

        $radius = $this->visionService->getPlayerVisionRadius($player);

        return array_filter($buildings, function ($b) use ($player, $position, $radius) {

            // always see own buildings
            if ($b->getPlayer()->getId() === $player->getId()) {
                return true;
            }

            return $this->visionService->isInRange(
                $position['lat'],
                $position['lng'],
                $b->getLatitudeBuild(),
                $b->getLongitudeBuild(),
                $radius
            );
        });
    }

    private function buildPlayers($game, Player $currentPlayer): array
    {
        $data = [];

        foreach ($game->getPlayers() as $p) {

            $base = $p->getBaseBuilding();

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

    private function buildResources(Player $player): array
    {
        $resources = [];

        foreach ($player->getPlayerInventories() as $inv) {
            $resources[$inv->getResourceType()->getCode()->value] = $inv->getQuantity();
        }

        return $resources;
    }
}