<?php

namespace App\Enum;

enum BuildingStatus: string
{
    case UNDER_CONSTRUCTION = 'construction';
    case ACTIVE = 'active';
    case PAUSED = 'paused';
    case DESTROYED = 'destroyed';

    public function label(): string
    {
        return match ($this) {
            self::UNDER_CONSTRUCTION => 'En construction',
            self::ACTIVE => 'Actif',
            self::PAUSED => 'En pause',
            self::DESTROYED => 'Détruit',
        };
    }
}