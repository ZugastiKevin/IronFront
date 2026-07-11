<?php

namespace App\Tests\Service\Game\Road;

use App\Entity\RoadSegment;
use App\Entity\RoadNode;
use App\Repository\RoadSegmentRepository;
use App\Repository\RoadNodeRepository;
use App\Service\Game\Generate\GenerateChunkService;
use App\Service\Game\Road\RoadService;
use App\Service\Osm\SpatialIndexer;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

final class RoadServiceTest extends TestCase
{
    private RoadService $service;
    private RoadSegmentRepository&MockObject $segmentRepository;
    private RoadNodeRepository&MockObject $nodeRepository;
    private SpatialIndexer&MockObject $spatialIndexer;
    private GenerateChunkService&MockObject $chunkGenerator;

    protected function setUp(): void
    {
        $this->segmentRepository = $this->createMock(RoadSegmentRepository::class);
        $this->nodeRepository = $this->createMock(RoadNodeRepository::class);
        $this->spatialIndexer = $this->createMock(SpatialIndexer::class);
        $this->chunkGenerator = $this->createMock(GenerateChunkService::class);

        $this->service = new RoadService(
            $this->segmentRepository,
            $this->nodeRepository,
            $this->spatialIndexer,
            $this->chunkGenerator,
        );
    }

    private function segment(int $startId, int $endId): RoadSegment
    {
        $segment = new RoadSegment();
        $segment->setNodeStartId($startId);
        $segment->setNodeEndId($endId);
        return $segment;
    }

    /**
     * @param array<int, array{0: float, 1: float}> $coords  map id => [lat, lng]
     */
    private function stubNodes(array $coords): void
    {
        $map = [];
        foreach ($coords as $id => [$lat, $lng]) {
            $map[] = [$id, new RoadNode($lat, $lng)];
        }
        $this->nodeRepository->method('find')->willReturnMap($map);
    }

    public function testIsNearRoadReturnsFalseWhenNoRoadsAndGenerationFindsNothing(): void
    {
        $this->spatialIndexer
            ->expects($this->exactly(2))
            ->method('findSegmentsInCell')
            ->willReturn([]);

        $this->chunkGenerator
            ->expects($this->once())
            ->method('generate');

        $this->assertFalse($this->service->isNearRoad(48.8566, 2.3522, 50));
    }

    public function testIsNearRoadReturnsTrueWhenRoadExistsNearby(): void
    {
        $segment = $this->segment(1, 2);
        $this->stubNodes([
            1 => [48.8566, 2.3522],
            2 => [48.8570, 2.3530],
        ]);

        $this->spatialIndexer
            ->expects($this->once())
            ->method('findSegmentsInCell')
            ->willReturn([$segment]);

        $this->chunkGenerator
            ->expects($this->never())
            ->method('generate');

        $this->assertTrue($this->service->isNearRoad(48.8566, 2.3522, 50));
    }

    public function testIsNearRoadReturnsFalseWhenRoadTooFar(): void
    {
        $segment = $this->segment(3, 4);
        $this->stubNodes([
            3 => [48.9000, 2.4000],
            4 => [48.9010, 2.4010],
        ]);

        $this->spatialIndexer
            ->expects($this->once())
            ->method('findSegmentsInCell')
            ->willReturn([$segment]);

        $this->assertFalse($this->service->isNearRoad(48.8566, 2.3522, 50));
    }

    public function testIsNearRoadGeneratesWhenEmptyThenFindsRoad(): void
    {
        $segment = $this->segment(5, 6);
        $this->stubNodes([
            5 => [48.8566, 2.3522],
            6 => [48.8570, 2.3530],
        ]);

        $this->spatialIndexer
            ->expects($this->exactly(2))
            ->method('findSegmentsInCell')
            ->willReturnOnConsecutiveCalls([], [$segment]);

        $this->chunkGenerator
            ->expects($this->once())
            ->method('generate');

        $this->assertTrue($this->service->isNearRoad(48.8566, 2.3522, 50));
    }
}
