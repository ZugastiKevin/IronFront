<?php

namespace App\Service\Game\Player;

use App\Entity\Player;
use App\Enum\ResourceCode;
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
        $startingResources = [
            ResourceCode::IRON->value       => 100,
            ResourceCode::IRON_INGOT->value => 30,
            ResourceCode::OIL->value        => 100,
            ResourceCode::LATEX->value      => 30,
        ];

        foreach ($this->playerInventoryRepository->findByPlayer($player) as $inventory) {

            $code = $inventory->getResourceType()->getCode()?->value;

            if ($code !== null && isset($startingResources[$code])) {
                $inventory->setQuantity($startingResources[$code]);
            }
        }

        $this->entityManager->flush();
    }
}