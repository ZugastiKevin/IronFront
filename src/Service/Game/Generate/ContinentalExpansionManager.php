<?php

namespace App\Service\Game\Generate;

use App\Entity\Chunk;
use App\Repository\ChunkRepository;
use App\Repository\RoadSegmentRepository;
use App\Service\CoordinateService;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;

/**
 * Gestionnaire d'expansion continentale.
 *
 * Maintient une frontière de chunks à explorer et les peuple
 * un par un via Overpass, en s'étendant par voisins directs.
 * Les chunks océans (0 routes) bloquent l'expansion dans cette direction.
 */
class ContinentalExpansionManager
{
    /** Tolérance pour comparer des coordonnées de bbox (float rounding) */
    private const BBOX_EPSILON = 0.0001;

    /**
     * Nettoie l'EntityManager pour libérer la mémoire.
     */
    public function clearEntityManager(): void
    {
        $this->em->clear();
    }

    public function __construct(
        private EntityManagerInterface $em,
        private ChunkRepository $chunkRepository,
        private RoadSegmentRepository $roadSegmentRepository,
        private GenerateChunkService $generateChunkService,
        private CoordinateService $coordinateService,
        private LoggerInterface $logger,
    ) {}

    /**
     * Récupère le prochain chunk à traiter depuis la frontière.
     *
     * Un chunk de la frontier est un chunk avec status=null
     * dont au moins un voisin direct a status='populated'.
     */
    public function pickNextChunk(): ?Chunk
    {
        $chunks = $this->chunkRepository->createQueryBuilder('c')
            ->where('c.status IS NULL')
            ->andWhere('c.latMin IS NOT NULL')
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(100)
            ->getQuery()
            ->getResult();

        foreach ($chunks as $chunk) {
            if ($this->hasPopulatedNeighbor($chunk)) {
                return $chunk;
            }
        }

        return null;
    }

    /**
     * Vérifie si un chunk a au moins un voisin direct peuplé.
     */
    private function hasPopulatedNeighbor(Chunk $chunk): bool
    {
        if ($chunk->getLatMin() === null) {
            return false;
        }

        $lat = (float) $chunk->getLatMin();
        $lng = (float) $chunk->getLngMin();
        $size = CoordinateService::CHUNK_SIZE;

        // Vérifier les 8 directions (+/- 1 chunk)
        for ($dLat = -1; $dLat <= 1; $dLat++) {
            for ($dLng = -1; $dLng <= 1; $dLng++) {
                if ($dLat === 0 && $dLng === 0) {
                    continue;
                }

                $neighborLat = round(($lat + $dLat * $size), 8);
                $neighborLng = round(($lng + $dLng * $size), 8);

                $neighbor = $this->chunkRepository->createQueryBuilder('c')
                    ->where('c.latMin = :lat')->setParameter('lat', $neighborLat)
                    ->andWhere('c.lngMin = :lng')->setParameter('lng', $neighborLng)
                    ->andWhere('c.status = :status')->setParameter('status', 'populated')
                    ->setMaxResults(1)
                    ->getQuery()
                    ->getOneOrNullResult();

                if ($neighbor !== null) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Marque un chunk comme peuplé et crée les chunks voisins dans la frontière.
     */
    public function markPopulated(Chunk $chunk, int $roadCount): void
    {
        $chunk->setStatus('populated');
        $chunk->setUpdatedAt(new \DateTimeImmutable());
        $this->em->persist($chunk);

        if ($chunk->getLatMin() === null) {
            $this->em->flush();
            return;
        }

        $lat = (float) $chunk->getLatMin();
        $lng = (float) $chunk->getLngMin();
        $size = CoordinateService::CHUNK_SIZE;

        // Créer les 8 chunks voisins (status=null → candidats frontière)
        $created = 0;
        for ($dLat = -1; $dLat <= 1; $dLat++) {
            for ($dLng = -1; $dLng <= 1; $dLng++) {
                if ($dLat === 0 && $dLng === 0) {
                    continue;
                }

                $nLat = round($lat + $dLat * $size, 8);
                $nLng = round($lng + $dLng * $size, 8);

                // Vérifier si ce voisin existe déjà
                $existing = $this->chunkRepository->findByBbox([
                    'latMin' => $nLat,
                    'lngMin' => $nLng,
                    'latMax' => round($nLat + $size, 8),
                    'lngMax' => round($nLng + $size, 8),
                ]);

                if ($existing === null) {
                    $bbox = [
                        'latMin' => $nLat,
                        'lngMin' => $nLng,
                        'latMax' => round($nLat + $size, 8),
                        'lngMax' => round($nLng + $size, 8),
                    ];
                    $this->chunkRepository->findOrCreateByBbox($bbox);
                    $created++;
                }
            }
        }

        $this->logger->info(sprintf(
            "Chunk %s,%s peuplé (%d routes), %d voisins créés",
            $chunk->getLatMin(), $chunk->getLngMin(), $roadCount, $created
        ));

        $this->em->flush();
    }

    /**
     * Marque un chunk comme vide (océan).
     * Ne crée PAS de voisins — l'expansion s'arrête dans cette direction.
     */
    public function markEmpty(Chunk $chunk): void
    {
        $chunk->setStatus('empty');
        $chunk->setUpdatedAt(new \DateTimeImmutable());
        $this->em->persist($chunk);
        $this->em->flush();

        $this->logger->info(sprintf(
            "Chunk %s,%s vide (océan) — expansion stoppée ici",
            $chunk->getLatMin(), $chunk->getLngMin()
        ));
    }

    /**
     * Marque un chunk comme en échec.
     */
    public function markFailed(Chunk $chunk): void
    {
        $chunk->setStatus('failed');
        $chunk->setUpdatedAt(new \DateTimeImmutable());
        $this->em->persist($chunk);
        $this->em->flush();

        $this->logger->warning(sprintf(
            "Chunk %s,%s en échec",
            $chunk->getLatMin(), $chunk->getLngMin()
        ));
    }

    /**
     * Initialise la frontière à partir de tous les chunks déjà peuplés.
     * Crée les voisins de chaque chunk populated.
     */
    public function seedFrontier(): int
    {
        $populated = $this->chunkRepository->findBy(['status' => 'populated']);

        if (empty($populated)) {
            return 0;
        }

        $size = CoordinateService::CHUNK_SIZE;
        $created = 0;

        foreach ($populated as $chunk) {
            if ($chunk->getLatMin() === null) {
                continue;
            }

            $lat = (float) $chunk->getLatMin();
            $lng = (float) $chunk->getLngMin();

            for ($dLat = -1; $dLat <= 1; $dLat++) {
                for ($dLng = -1; $dLng <= 1; $dLng++) {
                    if ($dLat === 0 && $dLng === 0) {
                        continue;
                    }

                    $nLat = round($lat + $dLat * $size, 8);
                    $nLng = round($lng + $dLng * $size, 8);

                    $existing = $this->chunkRepository->findByBbox([
                        'latMin' => $nLat,
                        'lngMin' => $nLng,
                        'latMax' => round($nLat + $size, 8),
                        'lngMax' => round($nLng + $size, 8),
                    ]);

                    if ($existing === null) {
                        $bbox = [
                            'latMin' => $nLat,
                            'lngMin' => $nLng,
                            'latMax' => round($nLat + $size, 8),
                            'lngMax' => round($nLng + $size, 8),
                        ];
                        $this->chunkRepository->findOrCreateByBbox($bbox);
                        $created++;
                    }
                }
            }
        }

        $this->em->flush();

        $this->logger->info(sprintf(
            "Frontière initialisée depuis %d chunks peuplés : %d chunks voisins créés",
            count($populated), $created
        ));

        return $created;
    }

    /**
     * Statistiques de l'expansion.
     */
    public function getStats(): array
    {
        $rows = $this->chunkRepository->createQueryBuilder('c')
            ->select('c.status', 'COUNT(c.id) as cnt')
            ->groupBy('c.status')
            ->getQuery()
            ->getResult();

        $stats = [
            'populated' => 0,
            'empty' => 0,
            'failed' => 0,
            'pending' => 0,
        ];

        foreach ($rows as $row) {
            $status = $row['status'] ?? 'pending';
            $stats[$status] = (int) $row['cnt'];
        }

        // Chunks sans voisin peuplé = frontière morte
        $frontier = $this->chunkRepository->createQueryBuilder('c')
            ->select('COUNT(c.id)')
            ->where('c.status IS NULL')
            ->andWhere('c.latMin IS NOT NULL')
            ->getQuery()
            ->getSingleScalarResult();

        $stats['frontier'] = (int) $frontier;

        return $stats;
    }

    /**
     * Crée un chunk seed à partir de coordonnées GPS.
     */
    public function createSeed(float $lat, float $lng): Chunk
    {
        $bbox = $this->coordinateService->getBoundingBox($lat, $lng);
        return $this->chunkRepository->findOrCreateByBbox($bbox);
    }
}
