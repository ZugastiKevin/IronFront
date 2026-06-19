<?php

namespace App\Service\Game;

use App\Entity\User;
use App\Repository\PlayerInventoryRepository;
use Doctrine\ORM\EntityManagerInterface;

class StartingResourcesInitializer
{
    public function __construct(
        private readonly PlayerInventoryRepository $playerInventoryRepository,
        private readonly EntityManagerInterface $entityManager,
    ) {
    }

    public function initialize(User $user): void
    {
        // Quantités de départ
        $startingResources = ['iron' => 100, 'iron_ingot' => 30, 'oil' => 100, 'latex' => 30,];

        foreach ($this->playerInventoryRepository->findByPlayer($user) as $inventory) {

            $code = $inventory->getResourceType()->getCode();

            if (isset($startingResources[$code])) {
                $inventory->setQuantity($startingResources[$code]);
            }
        }

        $this->entityManager->flush();
    }
}