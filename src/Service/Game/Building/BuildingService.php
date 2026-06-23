<?php

namespace App\Service\Game\Building;

use App\Entity\Building;
use App\Entity\BuildingType;
use App\Entity\Player;
use Doctrine\ORM\EntityManagerInterface;

class BuildingService
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
    ) {}

    /**
     * Vérifie si le joueur a les ressources nécessaires pour construire un bâtiment.
     */
    public function canAfford(Player $player, BuildingType $buildingType, int $level = 1): bool
    {
        $costs = $buildingType->getCosts();

        // Si pas de coûts définis, le bâtiment est gratuit
        if ($costs->isEmpty()) {
            return true;
        }

        foreach ($costs as $cost) {
            $required = $this->calculateCost($cost->getCosts(), $level);
            $available = $this->getResourceQuantity($player, $cost->getResourceType()->getCode()->value);

            if ($available < $required) {
                return false;
            }
        }

        return true;
    }

    /**
     * Consomme les ressources nécessaires pour construire/améliorer un bâtiment.
     */
    public function consumeResources(Player $player, BuildingType $buildingType, int $level = 1): void
    {
        $costs = $buildingType->getCosts();

        foreach ($costs as $cost) {
            $required = $this->calculateCost($cost->getCosts(), $level);
            $this->removeResource($player, $cost->getResourceType()->getCode()->value, $required);
        }
    }

    /**
     * Calcule le coût total pour un level donnée.
     * Formule exponentielle.
     * Level 1 = baseCost, Level 2 = baseCost * factor, Level 3 = baseCost * factor^2, etc.
     */
    private function calculateCost(int $baseCost, int $level): int
    {
        // Pour la construction initiale (level 1), coût de base
        if ($level <= 1) {
            return $baseCost;
        }

        // Facteur d'escalade exponentielle (ajustable)
        // factor=2 → level 2=2x, level 3=4x, level 4=8x, etc.
        $factor = 2;

        return (int) round($baseCost * pow($factor, $level - 1));
    }

    /**
     * Retourne la quantité de ressource disponible pour un utilisateur.
     */
    public function getResourceQuantity(Player $player, string $resourceCode): int
    {
        foreach ($player->getPlayerInventories() as $inventory) {
            if ($inventory->getResourceType()->getCode() === $resourceCode) {
                return $inventory->getQuantity();
            }
        }

        return 0;
    }

    /**
     * Retourne les coûts nécessaires pour construire un bâtiment au niveau donné.
     * @return array<string, int> Map des codes ressources => quantités
     */
    public function getBuildCosts(BuildingType $buildingType, int $level = 1): array
    {
        $costs = [];

        foreach ($buildingType->getCosts() as $cost) {
            $costs[$cost->getResourceType()->getCode()->value] = $this->calculateCost($cost->getCosts(), $level);
        }

        return $costs;
    }

    /**
     * Retourne les coûts avec les labels des ressources.
     * @return array{array{code: string, label: string, quantity: int}>
     */
    public function getBuildCostsWithLabels(BuildingType $buildingType, int $level = 1): array
    {
        $costs = [];

        foreach ($buildingType->getCosts() as $cost) {
            $costs[] = [
                'code' => $cost->getResourceType()->getCode()->value,
                'label' => $cost->getResourceType()->getLabel(),
                'quantity' => $this->calculateCost($cost->getCosts(), $level),
            ];
        }

        return $costs;
    }

    /**
     * Vérifie si le joueur peut améliorer un bâtiment existant.
     */
    public function canUpgrade(Building $building): bool
    {
        $nextLevel = $building->getLevel() + 1;
        
        if ($nextLevel > $building->getBuildingType()->getMaxLevel()) {
            return false;
        }

        return $this->canAfford(
            $building->getPlayer(),
            $building->getBuildingType(),
            $nextLevel
        );
    }

    /**
     * Améliore un bâtiment d'un niveau.
     */
    public function upgrade(Building $building): bool
    {
        if (!$this->canUpgrade($building)) {
            return false;
        }

        $nextLevel = $building->getLevel() + 1;
        $this->consumeResources(
            $building->getPlayer(),
            $building->getBuildingType(),
            $nextLevel
        );

        $building->setLevel($nextLevel);
        $this->entityManager->persist($building);
        $this->entityManager->flush();

        return true;
    }

    /**
     * Retourne le niveau maximum possible pour un bâtiment.
     */
    public function getMaxPossibleLevel(Building $building): int
    {
        $currentLevel = $building->getLevel();
        $maxLevel = $building->getBuildingType()->getMaxLevel();

        // Trouver le niveau maximum atteignable avec les ressources disponibles
        $player = $building->getPlayer();
        $buildingType = $building->getBuildingType();

        for ($level = $currentLevel + 1; $level <= $maxLevel; $level++) {
            if (!$this->canAfford($player, $buildingType, $level)) {
                return $level - 1;
            }
        }

        return $maxLevel;
    }

    /**
     * Retourne les informations de coût pour l'amélioration d'un bâtiment.
     * @return array{needed: array<string, int>, available: array<string, int>, neededWithLabels: array<array{code: string, label: string, quantity: int}>, canUpgrade: bool, maxLevel: int}
     */
    public function getUpgradeInfo(Building $building): array
    {
        $nextLevel = $building->getLevel() + 1;
        $maxLevel = $building->getBuildingType()->getMaxLevel();
        $canUpgrade = $nextLevel <= $maxLevel && $this->canUpgrade($building);
        $needed = $this->getBuildCosts($building->getBuildingType(), $nextLevel);
        $available = [];
        $neededWithLabels = [];

        foreach ($building->getBuildingType()->getCosts() as $cost) {
            $code = $cost->getResourceType()->getCode()->value;
            $quantity = $this->calculateCost($cost->getCosts(), $nextLevel);
            $neededWithLabels[] = [
                'code' => $code,
                'label' => $cost->getResourceType()->getLabel(),
                'quantity' => $quantity,
            ];
            $available[$code] = $this->getResourceQuantity($building->getPlayer(), $code);
        }

        return [
            'needed' => $needed,
            'available' => $available,
            'neededWithLabels' => $neededWithLabels,
            'canUpgrade' => $canUpgrade,
            'maxLevel' => $maxLevel,
        ];
    }

    private function removeResource(Player $player, string $code, int $amount): void
    {
        foreach ($player->getPlayerInventories() as $inventory) {
            if ($inventory->getResourceType()->getCode()->value === $code) {
                $newQty = $inventory->getQuantity() - $amount;
                $inventory->setQuantity(max(0, $newQty));
                $this->entityManager->persist($inventory);
                return;
            }
        }
    }
}