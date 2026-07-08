<?php

namespace App\Tests\Service\Generate;

use App\Entity\Chunk;
use App\Repository\ChunkRepository;
use App\Service\Game\Generate\GenerateChunkService;
use App\Service\Game\Generate\WorldExpansionService;
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
            $this->logger,
        );
    }

    public function testExpandReturnsFalseWhenNoChunkFound(): void
    {
        $this->chunkRepository
            ->expects($this->once())
            ->method('findRandomChunkWithBuildings')
            ->willReturn(null);

        $this->chunkRepository
            ->expects($this->once())
            ->method('findOneBy')
            ->with([])
            ->willReturn(null);

        $result = $this->service->expand();

        $this->assertFalse($result);
    }

    public function testExpandReturnsTrueWhenNeighborGenerated(): void
    {
        $sourceChunk = new Chunk();
        $sourceChunk->setLatMin(48.85);
        $sourceChunk->setLngMin(2.35);
        $sourceChunk->setLatMax(48.86);
        $sourceChunk->setLngMax(2.36);

        $this->chunkRepository
            ->expects($this->once())
            ->method('findRandomChunkWithBuildings')
            ->willReturn($sourceChunk);

        // findByBbox retourne null pour le premier voisin testé (il n'existe pas)
        // L'ordre étant aléatoire (shuffle), on ne teste pas les coordonnées exactes
        $this->chunkRepository
            ->expects($this->once())
            ->method('findByBbox')
            ->willReturn(null);

        $this->generateChunkService
            ->expects($this->once())
            ->method('generate')
            ->with($this->anything(), $this->anything())
            ->willReturn([new \App\Entity\Road()]);

        $result = $this->service->expand();

        $this->assertTrue($result);
    }

    public function testExpandReturnsFalseWhenNoNeighborsCanBeGenerated(): void
    {
        $sourceChunk = new Chunk();
        $sourceChunk->setLatMin(48.85);
        $sourceChunk->setLngMin(2.35);
        $sourceChunk->setLatMax(48.86);
        $sourceChunk->setLngMax(2.36);

        $existingNeighbor = new Chunk();
        $existingNeighbor->setLatMin(48.86);
        $existingNeighbor->setLngMin(2.35);
        $existingNeighbor->setLatMax(48.87);
        $existingNeighbor->setLngMax(2.36);

        $this->chunkRepository
            ->expects($this->once())
            ->method('findRandomChunkWithBuildings')
            ->willReturn($sourceChunk);

        // Tous les voisins existent déjà
        $this->chunkRepository
            ->expects($this->exactly(8))
            ->method('findByBbox')
            ->willReturn($existingNeighbor);

        $this->generateChunkService
            ->expects($this->never())
            ->method('generate');

        $result = $this->service->expand();

        $this->assertFalse($result);
    }
}
