<?php

namespace App\Service;

use App\Entity\Player;
use App\Service\Game\Player\StartingResourcesInitializer;
use App\Service\Game\Player\InventoryInitializer;

class PlayerGameInitializer
{
    public function __construct(
        private InventoryInitializer $inventoryInitializer,
        private StartingResourcesInitializer $startingResourcesInitializer,
        // private TechnologyInitializer $technologyInitializer,
    ) {}

    public function initialize(Player $player): void
    {
        $this->inventoryInitializer->initialize($player);
        $this->startingResourcesInitializer->initialize($player);
        // $this->technologyInitializer->initialize($player);
    }
}