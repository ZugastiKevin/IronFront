<?php

namespace App\Tests\Service\Game\Building;

use App\Entity\Building;
use App\Entity\BuildingCost;
use App\Entity\BuildingType;
use App\Entity\Player;
use App\Entity\PlayerInventory;
use App\Entity\ResourceType;
use App\Enum\ResourceCode;
use App\Service\Game\Building\BuildingService;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

final class BuildingServiceTest extends TestCase
{
    private BuildingService $service;
    private EntityManagerInterface&MockObject $entityManager;

    protected function setUp(): void
    {
        $this->entityManager = $this->createMock(EntityManagerInterface::class);
        $this->service = new BuildingService($this->entityManager);
    }

    public function testCanAffordReturnsTrueWhenNoCosts(): void
    {
        $player = new Player();
        $buildingType = new BuildingType();
        // BuildingType a une collection de coûts vide par défaut dans le constructeur

        $result = $this->service->canAfford($player, $buildingType, 1);

        $this->assertTrue($result);
    }

    public function testGetResourceQuantityReturnsZeroWhenNoInventory(): void
    {
        $player = new Player();

        $result = $this->service->getResourceQuantity($player, 'iron');

        $this->assertEquals(0, $result);
    }

    public function testGetResourceQuantityReturnsCorrectQuantity(): void
    {
        $player = new Player();

        $resourceType = new ResourceType();
        $resourceType->setCode(ResourceCode::IRON);

        $inventory = new PlayerInventory();
        $inventory->setQuantity(42);
        $inventory->setResourceType($resourceType);
        $player->addPlayerInventory($inventory);

        $result = $this->service->getResourceQuantity($player, 'iron');

        $this->assertEquals(42, $result);
    }

    public function testCanUpgradeReturnsFalseWhenMaxLevelReached(): void
    {
        $player = new Player();

        $buildingType = new BuildingType();
        $buildingType->setMaxLevel(3);

        $building = new Building();
        $building->setLevel(3);
        $building->setBuildingType($buildingType);
        $building->setPlayer($player);

        $result = $this->service->canUpgrade($building);

        $this->assertFalse($result);
    }

    public function testGetBuildCostsReturnsEmptyArrayWhenNoCosts(): void
    {
        $buildingType = new BuildingType();
        // Coûts vide par défaut

        $result = $this->service->getBuildCosts($buildingType, 1);

        $this->assertEmpty($result);
    }

    public function testGetBuildCostsWithLabelsReturnsEmptyArrayWhenNoCosts(): void
    {
        $buildingType = new BuildingType();
        // Coûts vide par défaut

        $result = $this->service->getBuildCostsWithLabels($buildingType, 1);

        $this->assertEmpty($result);
    }

    public function testCanAffordReturnsFalseWhenNotEnoughResources(): void
    {
        $player = new Player();

        $resourceType = new ResourceType();
        $resourceType->setCode(ResourceCode::IRON);

        $inventory = new PlayerInventory();
        $inventory->setQuantity(10);
        $inventory->setResourceType($resourceType);
        $player->addPlayerInventory($inventory);

        $buildingType = new BuildingType();
        $buildingCost = new BuildingCost();
        $buildingCost->setCosts(100);
        $buildingCost->setResourceType($resourceType);
        $buildingType->addCost($buildingCost);

        $result = $this->service->canAfford($player, $buildingType, 1);

        $this->assertFalse($result);
    }

    public function testCanAffordReturnsTrueWhenEnoughResources(): void
    {
        $player = new Player();

        $resourceType = new ResourceType();
        $resourceType->setCode(ResourceCode::IRON);

        $inventory = new PlayerInventory();
        $inventory->setQuantity(100);
        $inventory->setResourceType($resourceType);
        $player->addPlayerInventory($inventory);

        $buildingType = new BuildingType();
        $buildingCost = new BuildingCost();
        $buildingCost->setCosts(50);
        $buildingCost->setResourceType($resourceType);
        $buildingType->addCost($buildingCost);

        $result = $this->service->canAfford($player, $buildingType, 1);

        $this->assertTrue($result);
    }
}