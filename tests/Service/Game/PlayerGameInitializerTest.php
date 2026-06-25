<?php

namespace App\Tests\Service\Game;

use App\Entity\Faction;
use App\Entity\Player;
use App\Service\Game\Player\InventoryInitializer;
use App\Service\Game\Player\StartingResourcesInitializer;
use App\Service\PlayerGameInitializer;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

final class PlayerGameInitializerTest extends TestCase
{
    private PlayerGameInitializer $service;
    private InventoryInitializer&MockObject $inventoryInitializer;
    private StartingResourcesInitializer&MockObject $startingResourcesInitializer;

    protected function setUp(): void
    {
        $this->inventoryInitializer = $this->createMock(InventoryInitializer::class);
        $this->startingResourcesInitializer = $this->createMock(StartingResourcesInitializer::class);

        $this->service = new PlayerGameInitializer(
            $this->inventoryInitializer,
            $this->startingResourcesInitializer
        );
    }

    public function testInitializeCallsInventoryInitializer(): void
    {
        $player = new Player();
        $faction = new Faction();
        $player->setFaction($faction);

        $this->inventoryInitializer
            ->expects($this->once())
            ->method('initialize')
            ->with($player);

        $this->startingResourcesInitializer
            ->expects($this->once())
            ->method('initialize')
            ->with($player);

        $this->service->initialize($player);
    }

    public function testInitializeDelegatesToBothInitializers(): void
    {
        $player = new Player();

        $callOrder = [];

        $this->inventoryInitializer
            ->expects($this->once())
            ->method('initialize')
            ->willReturnCallback(function() use (&$callOrder) {
                $callOrder[] = 'inventory';
            });

        $this->startingResourcesInitializer
            ->expects($this->once())
            ->method('initialize')
            ->willReturnCallback(function() use (&$callOrder) {
                $callOrder[] = 'resources';
            });

        $this->service->initialize($player);

        $this->assertEquals(['inventory', 'resources'], $callOrder);
    }
}