<?php

namespace App\Service\Game\Player;

use App\Entity\Player;
use App\Repository\PlayerInventoryRepository;
use Doctrine\ORM\EntityManagerInterface;

class StartingResourcesInitializer
{
    public function __construct(
        private readonly PlayerInventoryRepository $playerInventoryRepository,
        private readonly EntityManagerInterface $entityManager,
    ) {
    }

    public function initialize(Player $player): void
    {
        if ($player === null) {
            return;
        }

        // Quantités de départ
        $startingResources = ['iron' => 100, 'iron_ingot' => 30, 'oil' => 100, 'latex' => 30,];

        foreach ($this->playerInventoryRepository->findByPlayer($player) as $inventory) {

            $code = $inventory->getResourceType()->getCode();

            if (isset($startingResources[$code])) {
                $inventory->setQuantity($startingResources[$code]);
            }
        }

        $this->entityManager->flush();
    }
}