<?php

namespace App\Enum;

enum BuildingCategory: string
{
    case BASE = 'base';
    case PRODUCTION = 'production';
    case MILITARY = 'military';
    case STORAGE = 'storage';
    case DEFENSE = 'defense';
    case RESEARCH = 'research';
    case TRADE = 'trade';
    case INFRASTRUCTURE = 'infrastructure';
}