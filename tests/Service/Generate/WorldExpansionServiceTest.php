<?php

namespace App\Tests\Service\Generate;

use App\Entity\Chunk;
use App\Entity\Road;
use App\Repository\ChunkRepository;
use App\Service\Game\Generate\GenerateChunkService;
use App\Service\Game\Generate\WorldExpansionService;
use Doctrine\Common\Collections\ArrayCollection;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

final class WorldExpansionServiceTest extends TestCase
{
    private WorldExpansionService $service;
    private ChunkRepository&MockObject $chunkRepository;
    private GenerateChunkService&MockObject $generateChunkService;
    private LoggerInterface&MockObject $logger;

    protected function setUp(): void
    {
        $this->chunkRepository = $this->createMock(ChunkRepository::class);
        $this->generateChunkService = $this->createMock(GenerateChunkService::class);
        $this->logger = $this->createMock(LoggerInterface::class);

        $this->service = new WorldExpansionService(
            $this->chunkRepository,
            $this->generateChunkService,
            $this->logger
        );
    }

    public function testExpandReturnsFalseWhenNoPopulatedChunk(): void
    {
        $this->chunkRepository
            ->expects($this->once())
            ->method('findRandomChunkWithRoads')
            ->willReturn(null);

        $this->logger
            ->expects($this->once())
            ->method('warning')
            ->with('[WorldExpansion] Aucun chunk peuplé trouvé.');

        $result = $this->service->expand();

        $this->assertFalse($result);
    }

    public function testExpandReturnsTrueWhenNeighborGenerated(): void
    {
        $sourceChunk = new Chunk();
        $sourceChunk->setChunkId('4885_234');

        // Mock roads to make it "populated"
        $road = new Road();
        $sourceChunk->addRoad($road);

        $neighborChunk = new Chunk();
        $neighborChunk->setChunkId('4886_234');
        // Pas de routes

        $this->chunkRepository
            ->expects($this->once())
            ->method('findRandomChunkWithRoads')
            ->willReturn($sourceChunk);

        $this->chunkRepository
            ->expects($this->once())
            ->method('findOneByChunkId')
            ->willReturn($neighborChunk);

        $this->generateChunkService
            ->expects($this->once())
            ->method('generate')
            ->willReturn([new Road()]); // Retourne des routes générées

        $this->logger
            ->expects($this->atLeastOnce())
            ->method('info');

        $result = $this->service->expand();

        $this->assertTrue($result);
    }

    public function testExpandReturnsFalseWhenNoNeighborsCanBeGenerated(): void
    {
        $sourceChunk = new Chunk();
        $sourceChunk->setChunkId('4885_234');

        $road = new Road();
        $sourceChunk->addRoad($road);

        $neighborChunk = new Chunk();
        $neighborChunk->setChunkId('4886_234');
        // Pas de routes

        $this->chunkRepository
            ->expects($this->once())
            ->method('findRandomChunkWithRoads')
            ->willReturn($sourceChunk);

        $this->chunkRepository
            ->expects($this->exactly(8))
            ->method('findOneByChunkId')
            ->willReturn($neighborChunk);

        $this->generateChunkService
            ->expects($this->exactly(8))
            ->method('generate')
            ->willReturn([]); // Pas de routes générées

        $this->logger
            ->expects($this->atLeastOnce())
            ->method('warning');

        $result = $this->service->expand();

        $this->assertFalse($result);
    }
}