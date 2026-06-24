<?php

namespace App\Service\Game\Generate;

use App\Entity\Chunk;
use App\Entity\ResourceDeposit;
use App\Entity\ResourceType;
use App\Entity\Road;
use App\Repository\ChunkRepository;
use App\Repository\ResourceTypeRepository;
use App\Service\CoordinateService;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;

/**
 * Service responsable de la génération du contenu d'un chunk,
 * notamment en allant chercher les données de routes depuis une API externe (Overpass).
 */
class GenerateChunkService
{
    public function __construct(
        private ResourceTypeRepository $resourceTypeRepository,
        private ChunkRepository $chunkRepository,
        private EntityManagerInterface $em,
        private LoggerInterface $logger,
        private CoordinateService $coordinateService
    ) {}

    /**
     * Génère les routes pour un chunk donné à partir de coordonnées.
     * Si les routes ont déjà été générées pour ce chunk, ne fait rien.
     *
     * @param float $lat Latitude pour identifier le chunk
     * @param float $lng Longitude pour identifier le chunk
     * @return array Les données des routes générées, ou un tableau vide si déjà fait ou en cas d'erreur.
     */
    public function generate(float $lat, float $lng): array
    {
        $chunkId = $this->coordinateService->getChunkId($lat, $lng);
        $chunk   = $this->chunkRepository->findOrCreate($chunkId);

        if ($chunk->getRoads()->count() > 0) {
            $this->logger->info("Chunk {$chunkId} déjà peuplé, annulation.");
            return [];
        }

        $roads    = $this->fetchFromOverpass($lat, $lng, $chunk);
        $allTypes = $this->resourceTypeRepository->findAll();
        $allTypes = array_values(array_filter($allTypes, fn($rt) => !empty($rt->getColor())));

        if (empty($allTypes)) {
            $this->logger->warning("Aucun type de ressource extractible trouvé.");
            return $roads;
        }

        $depositCount  = !empty($roads) ? rand(1, min(2, count($roads))) : 0;
        $selectedRoads = [];

        if ($depositCount > 0) {
            $shuffled = $roads;
            shuffle($shuffled);
            $selectedRoads = array_slice($shuffled, 0, $depositCount);

            foreach ($selectedRoads as $road) {
                $randomType = $this->selectResourceByRarity($allTypes);
                $deposit = new ResourceDeposit($randomType, $this->generateRichness());
                $deposit->setRoad($road);

                $points = $road->getPoints();
                if (!empty($points)) {
                    $deposit->setLatitude((float)$points[0][0]);
                    $deposit->setLongitude((float)$points[0][1]);
                }

                $this->em->persist($deposit);
                $this->logger->info("Dépôt [{$randomType->getCode()->value}] généré sur route {$road->getId()}.");
            }
        }

        $this->em->flush();
        $this->logger->info("Chunk {$chunkId} : " . count($roads) . " routes, " . count($selectedRoads) . " dépôt(s).");

        return $roads;
    }

    private function fetchFromOverpass(float $lat, float $lng, Chunk $chunk): array
    {
        $size   = 0.01;
        $x      = floor($lat / $size);
        $y      = floor($lng / $size);
        $latMin = $x * $size;
        $latMax = ($x + 1) * $size;
        $lngMin = $y * $size;
        $lngMax = ($y + 1) * $size;

        $query    = "[out:json][timeout:25];way[\"highway\"]($latMin,$lngMin,$latMax,$lngMax);out geom;";
        $url      = "https://overpass-api.de/api/interpreter";
        $response = @file_get_contents($url, false, stream_context_create([
            'http' => [
                'method'  => 'POST',
                'header'  => "Content-Type: application/x-www-form-urlencoded\r\nUser-Agent: IronFront/1.0",
                'content' => http_build_query(['data' => $query]),
                'timeout' => 20,
            ]
        ]));

        if ($response === false) {
            $this->logger->error("Échec Overpass pour chunk " . $chunk->getChunkId());
            return [];
        }

        $data = json_decode($response, true);
        if (!isset($data['elements'])) {
            return [];
        }

        $roads = [];
        foreach ($data['elements'] as $way) {
            if (!isset($way['geometry']) || count($way['geometry']) < 2) continue;

            $points = [];
            foreach ($way['geometry'] as $node) {
                if (!isset($node['lat'], $node['lon'])) continue;
                $points[] = [(float)$node['lat'], (float)$node['lon']];
            }
            if (count($points) < 2) continue;

            $road = new Road();
            $road->setChunk($chunk);
            $road->setPoints($points);
            $road->setType($way['tags']['highway'] ?? 'road');
            $this->em->persist($road);
            $roads[] = $road;
        }

        $chunk->setUpdatedAt(new \DateTimeImmutable());
        $this->em->persist($chunk);

        $this->logger->info(count($roads) . " routes récupérées pour chunk " . $chunk->getChunkId());
        return $roads;
    }

    private function selectResourceByRarity(array $types): ResourceType
    {
        $roll = rand(1, 100);

        if ($roll <= 10) {
            $filtered = array_values(array_filter($types, fn($rt) => $rt->getRarity() >= 2));
            if (!empty($filtered)) return $filtered[array_rand($filtered)];
        }

        if ($roll <= 25) {
            $filtered = array_values(array_filter($types, fn($rt) => $rt->getRarity() >= 1));
            if (!empty($filtered)) return $filtered[array_rand($filtered)];
        }

        $common = array_values(array_filter($types, fn($rt) => $rt->getRarity() === 0));
        if (!empty($common)) return $common[array_rand($common)];

        return $types[array_rand($types)];
    }

    private function generateRichness(): float
    {
        $roll = rand(1, 100);

        return match(true) {
            $roll <= 10  => 0.6,  // très pauvre (10%)
            $roll <= 25  => 0.8,  // pauvre (15%)
            $roll <= 60  => 1.0,  // normal (35%)
            $roll <= 85  => 1.2,  // riche (25%)
            default      => 1.4,  // très riche (15%)
        };
    }
}