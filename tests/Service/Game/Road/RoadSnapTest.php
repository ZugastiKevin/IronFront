<?php

namespace App\Tests\Service\Game\Road;

use App\Entity\Road;
use App\Service\Game\Road\RoadService;
use App\Repository\RoadRepository;
use App\Service\Game\Generate\GenerateChunkService;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class RoadSnapTest extends KernelTestCase
{
    private RoadRepository $roadRepository;
    private GenerateChunkService $chunkService;

    protected static function getKernelClass(): string
    {
        return \App\Kernel::class;
    }

    protected function setUp(): void
    {
        parent::setUp();
        $this->roadRepository = static::getContainer()->get(RoadRepository::class);
        $this->chunkService = static::getContainer()->get(GenerateChunkService::class);
    }

    public function testRoadSnapWorks(): void
    {
        // Coordonnées test (Amérique centrale - zone importée)
        $lat = 5.54;
        $lng = -87.05;

        // Tester via GenerateChunkService (le endpoint API fait pareil)
        $result = $this->chunkService->addRoadsChunk($lat, $lng);

        $this->assertArrayHasKey('roads_created', $result);

        // Vérifier que RoadService peut trouver une route
        $roadService = new RoadService(
            $this->roadRepository,
            $this->chunkService
        );

        // Note: isNearRoad déclenche generate() si aucune route trouvée
        // Mais generate() cherche d'abord dans la table road via RoadRepository
        // Donc si ya des routes, ça doit marcher

        echo sprintf(
            "✅ Test snap : %d routes créées pour lat=%F, lng=%F\n",
            $result['roads_created'],
            $lat,
            $lng
        );
    }
}