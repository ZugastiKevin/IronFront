<?php

namespace App\Tests\Service\Game\Road;

use App\Entity\Road;
use App\Repository\RoadRepository;
use App\Service\Game\Generate\GenerateChunkService;
use App\Service\Game\Road\RoadService;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

final class RoadServiceTest extends TestCase
{
    private RoadService $service;
    private RoadRepository&MockObject $roadRepository;
    private GenerateChunkService&MockObject $chunkGenerator;

    protected function setUp(): void
    {
        $this->roadRepository = $this->createMock(RoadRepository::class);
        $this->chunkGenerator  = $this->createMock(GenerateChunkService::class);

        $this->service = new RoadService(
            $this->roadRepository,
            $this->chunkGenerator,
        );
    }

    public function testIsNearRoadReturnsFalseWhenNoRoadsAndGenerationFindsNothing(): void
    {
        // findByBbox retourne vide deux fois (avant et après génération)
        $this->roadRepository
            ->expects($this->exactly(2))
            ->method('findByBbox')
            ->willReturn([]);

        $this->chunkGenerator
            ->expects($this->once())
            ->method('generate');

        $result = $this->service->isNearRoad(48.8566, 2.3522, 50);

        $this->assertFalse($result);
    }

    public function testIsNearRoadReturnsTrueWhenRoadExistsNearby(): void
    {
        $road = new Road();
        $road->setPoints([[48.8566, 2.3522], [48.8570, 2.3530]]);

        $this->roadRepository
            ->expects($this->once())
            ->method('findByBbox')
            ->willReturn([$road]);

        // Pas de génération needed
        $this->chunkGenerator
            ->expects($this->never())
            ->method('generate');

        $result = $this->service->isNearRoad(48.8566, 2.3522, 50);

        $this->assertTrue($result);
    }

    public function testIsNearRoadReturnsFalseWhenRoadTooFar(): void
    {
        // Route très éloignée du point testé
        $road = new Road();
        $road->setPoints([[48.9000, 2.4000], [48.9010, 2.4010]]);

        $this->roadRepository
            ->expects($this->once())
            ->method('findByBbox')
            ->willReturn([$road]);

        $result = $this->service->isNearRoad(48.8566, 2.3522, 50);

        $this->assertFalse($result);
    }

    public function testIsNearRoadGeneratesWhenEmptyThenFindsRoad(): void
    {
        $road = new Road();
        $road->setPoints([[48.8566, 2.3522], [48.8570, 2.3530]]);

        // Premier appel : vide. Deuxième appel (après génération) : route trouvée.
        $this->roadRepository
            ->expects($this->exactly(2))
            ->method('findByBbox')
            ->willReturnOnConsecutiveCalls([], [$road]);

        $this->chunkGenerator
            ->expects($this->once())
            ->method('generate');

        $result = $this->service->isNearRoad(48.8566, 2.3522, 50);

        $this->assertTrue($result);
    }
}
