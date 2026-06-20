<?php

namespace App\Service\Game\Player;

use App\Entity\Player;
use App\Entity\PlayerInventory;
use App\Repository\ResourceTypeRepository;
use Doctrine\ORM\EntityManagerInterface;

class InventoryInitializer
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly ResourceTypeRepository $resourceTypeRepository
    ) {}

    /**
     * Initialise les inventaires d'un joueur avec toutes les ressources à 0.
     */
    public function initialize(Player $player): void
    {
        // Si pas de player, ne rien faire
        if ($player === null) {
            return;
        }

        // Vérifier si le joueur a déjà des inventaires
        if ($player->getPlayerInventories()->count() > 0) {
            return;
        }

        $resourceTypes = $this->resourceTypeRepository->findAll();

        foreach ($resourceTypes as $resourceType) {
            $inventory = new PlayerInventory();
            $inventory->setPlayer($player);
            $inventory->setResourceType($resourceType);
            $inventory->setQuantity(0);
            $inventory->setUpdatedAt(new \DateTimeImmutable());

            $this->entityManager->persist($inventory);
        }

        $this->entityManager->flush();
    }
}