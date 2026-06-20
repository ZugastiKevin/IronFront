<?php

namespace App\Enum;

enum ResourceCode: string
{
    case IRON = "iron";
    case IRON_INGOT = "iron_ingot";
    case OIL = "oil";
    case REFINED_OIL = "refined_oil";
    case GASOLINE = "gasoline";
    case LATEX = "latex";
    case RUBBER = "rubber";
    case BAUXITE = "bauxite";
    case RARE_EARTH = "rare_earth";
    
    

    public function label(): string
    {
        return match ($this) {
            self::IRON => "Minerai de fer",
            self::IRON_INGOT => "L'ingot de fer",
            self::OIL => "Pétrole brut",
            self::REFINED_OIL => "Pétrole raffiné",
            self::GASOLINE => "Essence",
            self::LATEX => "Latex",
            self::RUBBER => "Caoutchouc",
            self::BAUXITE => "Bauxite",
            self::RARE_EARTH => "Terres rares",
        };
    }
}