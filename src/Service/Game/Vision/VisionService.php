<?php

namespace App\Service\Game\Vision;

use App\Entity\Building;
use App\Entity\Player;

final class VisionService
{
    public const BASE_VISION_RADIUS = 0.02;

    public function isInRange(
        float $lat1,
        float $lng1,
        float $lat2,
        float $lng2,
        float $range
    ): bool {
        $dx = $lat1 - $lat2;
        $dy = $lng1 - $lng2;

        return ($dx * $dx + $dy * $dy) <= ($range * $range);
    }

    public function getPlayerVisionRadius(Player $player): float
    {
        $radius = self::BASE_VISION_RADIUS;

        foreach ($player->getBuildings() as $building) {
            $radius += $building->getBuildingType()->getVisionRadius();
        }

        return $radius;
    }

    public function getPlayerPositionFromBase(Building $base): array
    {
        return [
            'lat' => $base->getLatitudeBuild(),
            'lng' => $base->getLongitudeBuild(),
        ];
    }

    public function canPlayerSeePosition(Player $player, float $lat, float $lng): bool
    {
        foreach ($player->getBuildings() as $building) {

            $radius = $building->getBuildingType()->getVisionRadius();

            if ($this->isInRange(
                $building->getLatitudeBuild(),
                $building->getLongitudeBuild(),
                $lat,
                $lng,
                $radius
            )) {
                return true;
            }
        }

        return false;
    }
}