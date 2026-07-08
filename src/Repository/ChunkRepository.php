<?php

namespace App\Repository;

use App\Entity\Chunk;
use App\Service\CoordinateService;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Contracts\Cache\CacheInterface;
use Symfony\Contracts\Cache\ItemInterface;

/**
 * @extends ServiceEntityRepository<Chunk>
 */
class ChunkRepository extends ServiceEntityRepository
{
    private CacheInterface $cache;

    public function __construct(ManagerRegistry $registry, CacheInterface $gameCache)
    {
        parent::__construct($registry, Chunk::class);
        $this->cache = $gameCache;
    }

    /**
     * Trouve un chunk par sa bounding box, ou le crée s'il n'existe pas.
     *
     * @param array{latMin: float, lngMin: float, latMax: float, lngMax: float} $bbox
     */
    public function findOrCreateByBbox(array $bbox): Chunk
    {
        $em = $this->getEntityManager();

        $chunk = $this->createQueryBuilder('c')
            ->where('c.latMin = :latMin')->setParameter('latMin', $bbox['latMin'])
            ->andWhere('c.lngMin = :lngMin')->setParameter('lngMin', $bbox['lngMin'])
            ->andWhere('c.latMax = :latMax')->setParameter('latMax', $bbox['latMax'])
            ->andWhere('c.lngMax = :lngMax')->setParameter('lngMax', $bbox['lngMax'])
            ->getQuery()->getOneOrNullResult();

        if (!$chunk) {
            // Chercher aussi par chunkId pour éviter les doublons
            $x = (int) floor($bbox['latMin'] / CoordinateService::CHUNK_SIZE);
            $y = (int) floor($bbox['lngMin'] / CoordinateService::CHUNK_SIZE);
            $chunkId = "{$x}_{$y}";

            $existingByChunkId = $this->findOneBy(['chunkId' => $chunkId]);
            if ($existingByChunkId !== null) {
                // Mettre à jour les bbox et retourner l'existant
                $existingByChunkId->setLatMin($bbox['latMin']);
                $existingByChunkId->setLngMin($bbox['lngMin']);
                $existingByChunkId->setLatMax($bbox['latMax']);
                $existingByChunkId->setLngMax($bbox['lngMax']);
                return $existingByChunkId;
            }

            // Vérifier aussi par chunkId "X_Y" avec des signes négatifs
            $chunk = new Chunk();
            $chunk->setLatMin($bbox['latMin']);
            $chunk->setLngMin($bbox['lngMin']);
            $chunk->setLatMax($bbox['latMax']);
            $chunk->setLngMax($bbox['lngMax']);
            $chunk->setChunkId($chunkId);

            $em->persist($chunk);
            $em->flush(); // Flush immédiat pour éviter les doublons concurrents
        }

        return $chunk;
    }

    /**
     * Trouve un chunk par sa bounding box (sans le créer).
     *
     * @param array{latMin: float, lngMin: float, latMax: float, lngMax: float} $bbox
     */
    public function findByBbox(array $bbox): ?Chunk
    {
        return $this->createQueryBuilder('c')
            ->leftJoin('c.buildings', 'b')
            ->addSelect('b')
            ->where('c.latMin = :latMin')->setParameter('latMin', $bbox['latMin'])
            ->andWhere('c.lngMin = :lngMin')->setParameter('lngMin', $bbox['lngMin'])
            ->andWhere('c.latMax = :latMax')->setParameter('latMax', $bbox['latMax'])
            ->andWhere('c.lngMax = :lngMax')->setParameter('lngMax', $bbox['lngMax'])
            ->getQuery()->getOneOrNullResult();
    }

    /**
     * Charge un chunk avec ses bâtiments, mis en cache 1h.
     *
     * @param array{latMin: float, lngMin: float, latMax: float, lngMax: float} $bbox
     */
    public function findCachedByBbox(array $bbox): ?Chunk
    {
        $cacheKey = sprintf('chunk_bbox_%s_%s_%s_%s',
            $bbox['latMin'], $bbox['lngMin'], $bbox['latMax'], $bbox['lngMax']
        );

        return $this->cache->get($cacheKey, function (ItemInterface $item) use ($bbox) {
            $item->expiresAfter(3600);
            return $this->findByBbox($bbox);
        });
    }

    /**
     * Trouve un chunk aléatoire qui contient au moins un bâtiment.
     */
    public function findRandomChunkWithBuildings(): ?Chunk
    {
        $query = $this->createQueryBuilder('c')
            ->select('c.id')
            ->innerJoin('c.buildings', 'b')
            ->distinct(true)
            ->getQuery();

        $ids = $query->getSingleColumnResult();

        if (empty($ids)) {
            return null;
        }

        $randomKey = array_rand($ids);
        return $this->find($ids[$randomKey]);
    }

    // ------------------------------------------------------------------
    // Méthodes conservées temporairement pour la transition (Phase 9).
    // Elles ne doivent plus être utilisées par le nouveau code.
    // ------------------------------------------------------------------

    /**
     * @deprecated Utiliser findOrCreateByBbox() ou findByBbox()
     */
    public function findOneByChunkId(string $chunkId): ?Chunk
    {
        return $this->findOneBy(['chunkId' => $chunkId]);
    }

    /**
     * @deprecated Utiliser findOrCreateByBbox()
     */
    public function findOrCreate(string $chunkId): Chunk
    {
        $chunk = $this->findOneByChunkId($chunkId);

        if (!$chunk) {
            $chunk = new Chunk();
            $chunk->setChunkId($chunkId);

            $this->getEntityManager()->persist($chunk);
        }

        return $chunk;
    }
}
