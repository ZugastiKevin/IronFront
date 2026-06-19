<?php

namespace App\Repository;

use App\Entity\Chunk;
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

    public function findOneByChunkId(string $chunkId): ?Chunk
    {
        return $this->findOneBy([
            'chunkId' => $chunkId
        ]);
    }

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

    public function findChunkWithRelations(string $chunkId): ?Chunk
    {
        $cacheKey = 'chunk_' . str_replace(['{', '}', '(', ')', '/', '\\', '@', ':'], '_', $chunkId);

        return $this->cache->get($cacheKey, function (ItemInterface $item) use ($chunkId) {
            $item->expiresAfter(3600); // Cache pour 1 heure

            return $this->createQueryBuilder('c')
                ->leftJoin('c.roads', 'r')
                ->leftJoin('c.buildings', 'b')
                ->addSelect('r', 'b')
                ->where('c.chunkId = :id')
                ->setParameter('id', $chunkId)
                ->getQuery()
                ->getOneOrNullResult();
        });
    }

    public function findChunksWithRelations(array $chunkIds): array
    {
        $chunks = [];
        foreach ($chunkIds as $chunkId) {
            $chunk = $this->findChunkWithRelations($chunkId);
            if ($chunk) {
                $chunks[] = $chunk;
            }
        }
        return $chunks;
    }

    /**
     * Trouve un chunk aléatoire qui contient au moins une route.
     *
     * @return Chunk|null
     */
    public function findRandomChunkWithRoads(): ?Chunk
    {
        $query = $this->createQueryBuilder('c')
            ->select('c.id')
            ->innerJoin('c.roads', 'r')
            ->distinct(true)
            ->getQuery();

        $chunkIds = $query->getSingleColumnResult();

        if (empty($chunkIds)) {
            return null;
        }

        $randomKey = array_rand($chunkIds);
        $randomChunkId = $chunkIds[$randomKey];

        return $this->find($randomChunkId);
    }
}