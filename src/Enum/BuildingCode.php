<?php

namespace App\Enum;

enum BuildingCode: string
{
    case BASE = "base";
    case IRON_MINE = "iron_mine";
    case FACTORY_IRON_INGOT = "factory_iron_ingot";
    case OIL_PUMP = "oil_pump";
    case OIL_TANK = "oil_tank";
    case REFINERY_OIL = "refinery_oil";
    case TANK_OIL_REFINED = "tank_oil_refined";
    case REFINERY_GASOLINE = "refinery_gasoline";
    case TANK_GASOLINE = "tank_gasoline";
    case LATEX_PLANTATION = "latex_plantation";
    case FACTORY_RUBBER = "factory_rubber";
    case BAUXITE_QUARRY = "bauxite_quarry";
    case RARE_EARTH_MINE = "rare_earth_mine";
    case FACTORY_ALUMINUM_ALLOY = "factory_aluminum_alloy";
    case FACTORY_CIRCUIT_BOARD = "factory_circuit_board";
    
    

    public function label(): string
    {
        return match ($this) {
            self::BASE => "Base",
            self::IRON_MINE => "Mine de fer",
            self::FACTORY_IRON_INGOT => "Usine de l'ingots de fer",
            self::OIL_PUMP => "Pompe à pétrole",
            self::OIL_TANK => "Réservoir de pétrole",
            self::REFINERY_OIL => "Raffinerie de pétrole",
            self::TANK_OIL_REFINED => "Réservoir de pétrole raffiné",
            self::REFINERY_GASOLINE => "Raffinerie d'essence",
            self::TANK_GASOLINE => "Réservoir d'essence",
            self::LATEX_PLANTATION => "plantation d'hévéas",
            self::FACTORY_RUBBER => "Usine de caoutchouc",
            self::BAUXITE_QUARRY => "Carrière de bauxite",
            self::RARE_EARTH_MINE => "Mine de terres rares",
            self::FACTORY_ALUMINUM_ALLOY => "Usine d'alliage d'aluminium",
            self::FACTORY_CIRCUIT_BOARD => "Usine de circuits imprimés",
        };
    }
}