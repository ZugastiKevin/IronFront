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
        $buildingData = $this->buildingTransformer->transform($visibleBuildings);

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

        $base = $this->buildingRepository->findBaseForPlayer($player);

        $position = $base
            ? $this->visionService->getPlayerPositionFromBase($base)
            : null;

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

        foreach ($game->getPlayers() as $p) {
            $base = $this->buildingRepository->findBaseForPlayer($p);

            if (!$base) {
                continue;
            }

            $position = $this->visionService->getPlayerPositionFromBase($base);
            $radius = $this->visionService->getPlayerVisionRadius($p);

            // Toujours inclure sa propre base
            $sources[] = [
                'lat' => $position['lat'],
                'lng' => $position['lng'],
                'radius' => $radius,
                'isMe' => $p->getId() === $player->getId(),
            ];
        }

        return $sources;
    }
}