<?php

namespace App\Service\Game\Generate;

use App\Entity\Chunk;
use App\Entity\ResourceDeposit;
use App\Entity\Road;
use App\Repository\ChunkRepository;
use App\Repository\ResourceDepositRepository;
use App\Repository\ResourceTypeRepository;
use App\Repository\RoadRepository;
use App\Service\CoordinateService;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;

/**
 * Service responsable de la génération du contenu d'une zone.
 *
 * Les routes sont lues depuis la table `road` (déjà importée via OsmImportCommand).
 * Les dépôts de ressources sont placés déterministement.
 */
class GenerateChunkService
{
    public function __construct(
        private ResourceTypeRepository $resourceTypeRepository,
        private ChunkRepository $chunkRepository,
        private RoadRepository $roadRepository,
        private ResourceDepositRepository $resourceDepositRepository,
        private EntityManagerInterface $em,
        private LoggerInterface $logger,
        private CoordinateService $coordinateService,
        private GeofabrikRoadProvider $roadProvider,
        private DeterministicResourcePlacer $resourcePlacer,
    ) {}

    public function clearEntityManager(): void
    {
        $this->em->clear();
    }

    /**
     * Génère les routes pour une zone. Si routes existent déjà, crée les dépôts.
     */
    public function generate(float $lat, float $lng): array
    {
        $bbox = $this->coordinateService->getBoundingBox($lat, $lng);
        $chunk = $this->chunkRepository->findOrCreateByBbox($bbox);

        $this->logger->info(sprintf(
            "Generate zone : lat=%F lng=%F → bbox [%s]",
            $lat, $lng,
            $this->coordinateService->bboxKey($bbox)
        ));

        // Chercher les routes existantes
        $existingRoads = $this->roadRepository->findByBbox(
            $bbox['latMin'] - 0.001,
            $bbox['lngMin'] - 0.001,
            $bbox['latMax'] + 0.001,
            $bbox['lngMax'] + 0.001
        );

        // Si routes existent, créer les dépôts si besoin
        if (!empty($existingRoads)) {
            $this->logger->info(sprintf("Zone populatee : %d routes existantes", count($existingRoads)));

            $deposits = $this->createDepositsIfNeeded($chunk, $bbox, $existingRoads);

            $chunk->setUpdatedAt(new \DateTimeImmutable());
            $this->em->flush();

            return [
                'roads' => [], // Pas de nouvelles routes
                'roads_created' => 0,
                'deposits_created' => count($deposits),
            ];
        }

        // Sinon, chercher dans roads_mysql via le provider
        $roads = $this->roadProvider->findRoadsInBbox(
            $bbox['latMin'] - 0.001,
            $bbox['lngMin'] - 0.001,
            $bbox['latMax'] + 0.001,
            $bbox['lngMax'] + 0.001
        );

        if (empty($roads)) {
            $this->logger->info("Zone sans routes (ocean/desert)");
            $chunk->setUpdatedAt(new \DateTimeImmutable());
            $this->em->flush();
            return [];
        }

        // Persister les routes et dépôts
        $deposits = $this->createDepositsIfNeeded($chunk, $bbox, $roads);

        foreach ($roads as $road) {
            $this->em->persist($road);
        }
        foreach ($deposits as $deposit) {
            $this->em->persist($deposit);
        }

        $this->em->flush();
        $chunk->setUpdatedAt(new \DateTimeImmutable());
        $this->em->flush();

        $this->logger->info(sprintf(
            "Zone %s : %d routes, %d depots.",
            $this->coordinateService->bboxKey($bbox),
            count($roads),
            count($deposits)
        ));

        return [
            'roads' => $roads,
            'roads_created' => count($roads),
            'deposits_created' => count($deposits),
        ];
    }

    /**
     * Ajoute des routes pour une zone.
     */
    public function addRoadsChunk(float $lat, float $lng): array
    {
        $bbox = $this->coordinateService->getBoundingBox($lat, $lng);
        $chunk = $this->chunkRepository->findOrCreateByBbox($bbox);

        // Chercher les routes existantes
        $existingRoads = $this->roadRepository->findByBbox(
            $bbox['latMin'] - 0.001,
            $bbox['lngMin'] - 0.001,
            $bbox['latMax'] + 0.001,
            $bbox['lngMax'] + 0.001
        );

        $alreadyPopulated = !empty($existingRoads);

        // Si routes existent, juste créer les dépôts
        if ($alreadyPopulated) {
            $this->logger->info(sprintf("Zone populatee : %d routes", count($existingRoads)));

            $deposits = $this->createDepositsIfNeeded($chunk, $bbox, $existingRoads);

            $chunk->setUpdatedAt(new \DateTimeImmutable());
            $this->em->flush();

            return [
                'roads' => [],
                'roads_created' => 0,
                'already_populated' => true,
            ];
        }

        // Sinon, chercher dans le provider (roads_mysql)
        $roads = $this->roadProvider->findRoadsInBbox(
            $bbox['latMin'] - 0.001,
            $bbox['lngMin'] - 0.001,
            $bbox['latMax'] + 0.001,
            $bbox['lngMax'] + 0.001
        );

        if (empty($roads)) {
            $chunk->setUpdatedAt(new \DateTimeImmutable());
            $this->em->flush();
            return ['roads' => [], 'roads_created' => 0, 'already_populated' => false];
        }

        // Créer les dépôts
        $deposits = $this->createDepositsIfNeeded($chunk, $bbox, $roads);

        // Persister
        foreach ($roads as $road) {
            $this->em->persist($road);
        }
        foreach ($deposits as $deposit) {
            $this->em->persist($deposit);
        }

        $this->em->flush();
        $chunk->setUpdatedAt(new \DateTimeImmutable());
        $this->em->flush();

        $this->logger->info(sprintf(
            "Zone %s : %d routes, %d depots.",
            $this->coordinateService->bboxKey($bbox),
            count($roads),
            count($deposits)
        ));

        return [
            'roads' => $roads,
            'roads_created' => count($roads),
            'already_populated' => false,
        ];
    }

    /** Crée les dépôts si < 2 dans la zone. */
    private function createDepositsIfNeeded(Chunk $chunk, array $bbox, array $roads): array
    {
        $existingDepositCount = (int) $this->resourceDepositRepository->createQueryBuilder('d')
            ->select('COUNT(d.id)')
            ->where('d.latitude BETWEEN :latMin AND :latMax')
            ->andWhere('d.longitude BETWEEN :lngMin AND :lngMax')
            ->setParameter('latMin', $bbox['latMin'] - 0.001)
            ->setParameter('latMax', $bbox['latMax'] + 0.001)
            ->setParameter('lngMin', $bbox['lngMin'] - 0.001)
            ->setParameter('lngMax', $bbox['lngMax'] + 0.001)
            ->getQuery()
            ->getSingleScalarResult();

        if ($existingDepositCount >= 2) {
            return [];
        }

        $allTypes = $this->resourceTypeRepository->findAll();
        return $this->resourcePlacer->placeResources($chunk, $roads, $allTypes);
    }
}