<?php

namespace App\Repository;

use App\Entity\BuildingType;
use App\Enum\BuildingCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class BuildingTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BuildingType::class);
    }

    public function findByCategory(BuildingCategory $category): array
    {
        return $this->createQueryBuilder('bt')
            ->where('bt.category = :category')
            ->setParameter('category', $category)
            ->orderBy('bt.name', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findProductionBuildings(): array
    {
        return $this->findByCategory(BuildingCategory::PRODUCTION);
    }

    public function findMilitaryBuildings(): array
    {
        return $this->findByCategory(BuildingCategory::MILITARY);
    }

    public function findStorageBuildings(): array
    {
        return $this->findByCategory(BuildingCategory::STORAGE);
    }

    public function findBases(): array
    {
        return $this->findByCategory(BuildingCategory::BASE);
    }

    public function findResearchBuildings(): array
    {
        return $this->findByCategory(BuildingCategory::RESEARCH);
    }

    public function findDefenseBuildings(): array
    {
        return $this->findByCategory(BuildingCategory::DEFENSE);
    }

    public function findTradeBuildings(): array
    {
        return $this->findByCategory(BuildingCategory::TRADE);
    }
}