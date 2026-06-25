<?php

namespace App\Tests\Service\Game\Road;

use App\Entity\Chunk;
use App\Entity\Road;
use App\Repository\ChunkRepository;
use App\Service\CoordinateService;
use App\Service\Game\Generate\GenerateChunkService;
use App\Service\Game\Road\RoadService;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

final class RoadServiceTest extends TestCase
{
    private RoadService $service;
    private ChunkRepository&MockObject $chunkRepository;
    private GenerateChunkService&MockObject $chunkGenerator;
    private CoordinateService&MockObject $coordinateService;

    protected function setUp(): void
    {
        $this->chunkRepository = $this->createMock(ChunkRepository::class);
        $this->chunkGenerator = $this->createMock(GenerateChunkService::class);
        $this->coordinateService = $this->createMock(CoordinateService::class);

        $this->service = new RoadService(
            $this->chunkRepository,
            $this->chunkGenerator,
            $this->coordinateService
        );
    }

    public function testIsNearRoadReturnsFalseWhenNoChunkAndGenerationFails(): void
    {
        $this->coordinateService
            ->expects($this->once())
            ->method('getChunkId')
            ->willReturn('4885_234');

        // First call returns null, second call also returns null after generation
        $this->chunkRepository
            ->expects($this->exactly(2))
            ->method('findOneBy')
            ->willReturn(null);

        $this->chunkGenerator
            ->expects($this->once())
            ->method('generate');

        $result = $this->service->isNearRoad(48.8566, 2.3522, 50);

        $this->assertFalse($result);
    }

    public function testIsNearRoadReturnsTrueWhenRoadExistsInChunk(): void
    {
        $chunk = new Chunk();
        $chunk->setChunkId('4885_234');

        $road = new Road();
        $road->setPoints([[48.8566, 2.3522], [48.8570, 2.3530]]);
        $chunk->addRoad($road);

        $this->coordinateService
            ->expects($this->once())
            ->method('getChunkId')
            ->willReturn('4885_234');

        $this->coordinateService
            ->expects($this->once())
            ->method('distance')
            ->willReturn(10.0); // Distance proche

        $this->chunkRepository
            ->expects($this->once())
            ->method('findOneBy')
            ->with(['chunkId' => '4885_234'])
            ->willReturn($chunk);

        $result = $this->service->isNearRoad(48.8566, 2.3522, 50);

        $this->assertTrue($result);
    }

    public function testIsNearRoadReturnsFalseWhenRoadTooFar(): void
    {
        $chunk = new Chunk();
        $chunk->setChunkId('4885_234');

        $road = new Road();
        $road->setPoints([[48.8566, 2.3522], [48.8570, 2.3530]]);
        $chunk->addRoad($road);

        $this->coordinateService
            ->expects($this->once())
            ->method('getChunkId')
            ->willReturn('4885_234');

        $this->coordinateService
            ->expects($this->once())
            ->method('distance')
            ->willReturn(100.0); // Distance trop lointaine

        $this->chunkRepository
            ->expects($this->once())
            ->method('findOneBy')
            ->with(['chunkId' => '4885_234'])
            ->willReturn($chunk);

        $result = $this->service->isNearRoad(48.8566, 2.3522, 50);

        $this->assertFalse($result);
    }
}