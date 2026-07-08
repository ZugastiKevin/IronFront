<?php

namespace App\Service\Game\Generate;

use App\Repository\ChunkRepository;
use App\Service\CoordinateService;
use Psr\Log\LoggerInterface;

class WorldExpansionService
{
    public function __construct(
        private readonly ChunkRepository $chunkRepository,
        private readonly GenerateChunkService $generateChunkService,
        private readonly LoggerInterface $logger,
    ) {}

    public function expand(): bool
    {
        // On part d'un chunk au hasard (qui a des bâtiments ou pas — on cherche juste une zone déjà fetchée)
        $seedChunk = $this->chunkRepository->findRandomChunkWithBuildings()
            ?? $this->chunkRepository->findOneBy([]);

        if (!$seedChunk) {
            $this->logger->warning('[WorldExpansion] Aucun chunk trouvé.');
            return false;
        }

        $this->logger->info(sprintf(
            '[WorldExpansion] Chunk de départ : %s (%s,%s)',
            $seedChunk->getId(),
            $seedChunk->getLatMin(),
            $seedChunk->getLngMin()
        ));

        $size = CoordinateService::CHUNK_SIZE;

        // 8 voisins (cardinaux + diagonaux) en bbox
        $neighborOffsets = [
            [+1, 0], [-1, 0], [0, +1], [0, -1],
            [+1, +1], [+1, -1], [-1, +1], [-1, -1],
        ];
        shuffle($neighborOffsets);

        foreach ($neighborOffsets as [$dx, $dy]) {
            $bbox = [
                'latMin' => $seedChunk->getLatMin() + $dx * $size,
                'lngMin' => $seedChunk->getLngMin() + $dy * $size,
                'latMax' => $seedChunk->getLatMax() + $dx * $size,
                'lngMax' => $seedChunk->getLngMax() + $dy * $size,
            ];

            $existing = $this->chunkRepository->findByBbox($bbox);

            if (!$existing) {
                $this->logger->info(sprintf(
                    '[WorldExpansion] Voisin vide : bbox %s',
                    $this->bboxKey($bbox)
                ));

                $generatedRoads = $this->generateChunkService->generate($bbox['latMin'], $bbox['lngMin']);

                if (count($generatedRoads) > 0) {
                    $this->logger->info(sprintf(
                        '[WorldExpansion] ✅ %s généré avec %d routes.',
                        $this->bboxKey($bbox),
                        count($generatedRoads)
                    ));
                    return true;
                }

                $this->logger->warning(sprintf(
                    '[WorldExpansion] ⚠️ %s sans routes générées.',
                    $this->bboxKey($bbox)
                ));
            }
        }

        $this->logger->info(sprintf(
            '[WorldExpansion] Aucun voisin vide pour chunk %s.',
            $seedChunk->getId()
        ));
        return false;
    }

    private function bboxKey(array $bbox): string
    {
        return sprintf('%s,%s', $bbox['latMin'], $bbox['lngMin']);
    }
}
