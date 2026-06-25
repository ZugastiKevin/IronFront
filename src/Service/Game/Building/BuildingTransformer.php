<?php

namespace App\Service\Game\Building;

final class BuildingTransformer
{
    public function transform(array $buildings): array
    {
        $data = [];

        foreach ($buildings as $b) {
            $type = $b->getBuildingType();
            $level = $b->getLevel() ?? 1;
            $prod = ($type->getProductionRate() ?? 0) * $level;

            $data[] = [
                'id' => $b->getId(),
                'lat' => $b->getLatitudeBuild(),
                'lng' => $b->getLongitudeBuild(),
                'type' => $type->getLabel(),
                'code' => $type->getCode(),
                'level' => $level,
                'ownerId' => $b->getPlayer()->getId(),
                'production' => $prod ?: null,
                'resource_type' => $type->getResourceType()?->getLabel(),
            ];
        }

        return $data;
    }
}