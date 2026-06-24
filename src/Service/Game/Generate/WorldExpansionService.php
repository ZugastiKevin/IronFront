<?php
namespace App\Service\Game\Generate;

use App\Repository\ChunkRepository;
use Psr\Log\LoggerInterface;

class WorldExpansionService
{
    private const CHUNK_SIZE = 0.01;

    public function __construct(
        private readonly ChunkRepository $chunkRepository,
        private readonly GenerateChunkService $generateChunkService,
        private readonly LoggerInterface $logger,
    ) {}

    public function expand(): bool
    {
        $populatedChunk = $this->chunkRepository->findRandomChunkWithRoads();

        if (!$populatedChunk) {
            $this->logger->warning('[WorldExpansion] Aucun chunk peuplé trouvé.');
            return false;
        }

        $this->logger->info('[WorldExpansion] Chunk de départ : ' . $populatedChunk->getChunkId());

        [$x, $y] = array_map('intval', explode('_', $populatedChunk->getChunkId()));

        $neighbors = [
            [$x + 1, $y], [$x - 1, $y],
            [$x, $y + 1], [$x, $y - 1],
            [$x + 1, $y + 1], [$x + 1, $y - 1],
            [$x - 1, $y + 1], [$x - 1, $y - 1],
        ];
        shuffle($neighbors);

        foreach ($neighbors as [$nx, $ny]) {
            $neighborChunkId = "{$nx}_{$ny}";
            $neighborChunk   = $this->chunkRepository->findOneByChunkId($neighborChunkId);

            if (!$neighborChunk || $neighborChunk->getRoads()->isEmpty()) {
                $this->logger->info("[WorldExpansion] Voisin vide : {$neighborChunkId}");

                $lat = $nx * self::CHUNK_SIZE;
                $lng = $ny * self::CHUNK_SIZE;

                $generatedRoads = $this->generateChunkService->generate($lat, $lng);

                if (count($generatedRoads) > 0) {
                    $this->logger->info("[WorldExpansion] ✅ {$neighborChunkId} généré avec " . count($generatedRoads) . " routes.");
                    return true;
                }

                $this->logger->warning("[WorldExpansion] ⚠️ {$neighborChunkId} sans routes générées.");
            }
        }

        $this->logger->info('[WorldExpansion] Aucun voisin vide pour ' . $populatedChunk->getChunkId());
        return false;
    }
}