<?php

namespace App\Service\Game\Generate;

use App\Entity\Chunk;
use App\Entity\Building;
use App\Repository\ChunkRepository;
use App\Repository\BuildingRepository;
use Doctrine\ORM\EntityManagerInterface;

class ChunkBuilderService
{
    public function __construct(
        private EntityManagerInterface $em,
        private ChunkRepository $chunkRepo,
        private BuildingRepository $buildingRepo,
    ) {}

    /**
     * Met à jour le chunk spécifié après une modification (building).
     */
    public function updateChunk(Chunk $chunk): void
    {
        $buildings = $this->buildingRepo->findBy(['chunk' => $chunk]);

        $data = [
            'buildings' => $this->serializeBuildings($buildings),
            'version'   => time(),
        ];

        $chunk->setUpdatedAt(new \DateTimeImmutable());
        $this->em->flush();
    }

    /**
     * @param Building[] $buildings
     */
    private function serializeBuildings(array $buildings): array
    {
        return array_map(function (Building $building) {
            return [
                'id'    => $building->getId(),
                'lat'   => $building->getLatitudeBuild(),
                'lng'   => $building->getLongitudeBuild(),
                'level' => $building->getLevel(),
                'type'  => $building->getBuildingType(),
            ];
        }, $buildings);
    }
}
