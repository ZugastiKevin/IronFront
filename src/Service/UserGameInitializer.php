<?php

namespace App\Service;

use App\Entity\User;
use App\Service\Game\StartingResourcesInitializer;
use App\Service\InventoryInitializer;

class UserGameInitializer
{
    public function __construct(
        private InventoryInitializer $inventoryInitializer,
        private StartingResourcesInitializer $startingResourcesInitializer,
        // private TechnologyInitializer $technologyInitializer,
    ) {}

    public function initialize(User $user): void
    {
        $this->inventoryInitializer->initialize($user);
        $this->startingResourcesInitializer->initialize($user);
        // $this->technologyInitializer->initialize($user);
    }
}