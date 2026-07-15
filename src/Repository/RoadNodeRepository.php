<?php

namespace App\Repository;

use App\Entity\RoadNode;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<RoadNode>
 */
class RoadNodeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RoadNode::class);
    }

    /**
     * Trouve un nœud existant à ces coordonnées (ou null).
     */
    public function findByCoordinates(float $lat, float $lng, float $epsilon = 0.000001): ?RoadNode
    {
        return $this->createQueryBuilder('n')
            ->where('ABS(n.lat - :lat) < :eps')
            ->andWhere('ABS(n.lng - :lng) < :eps')
            ->setParameter('lat', $lat)
            ->setParameter('lng', $lng)
            ->setParameter('eps', $epsilon)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Trouve ou crée un nœud à ces coordonnées.
     */
    public function findOrCreate(float $lat, float $lng): RoadNode
    {
        $existing = $this->findByCoordinates($lat, $lng);

        if ($existing !== null) {
            return $existing;
        }

        $node = new RoadNode($lat, $lng);
        $this->getEntityManager()->persist($node);

        return $node;
    }

    /**
     * Trouve tous les nœuds dans une bbox.
     */
    public function findByBbox(float $south, float $west, float $north, float $east): array
    {
        return $this->createQueryBuilder('n')
            ->where('n.lat >= :south')->setParameter('south', $south)
            ->andWhere('n.lat <= :north')->setParameter('north', $north)
            ->andWhere('n.lng >= :west')->setParameter('west', $west)
            ->andWhere('n.lng <= :east')->setParameter('east', $east)
            ->getQuery()->getResult();
    }

    /**
     * Clé de déduplication robuste : conversion single-precision (FLOAT) identique
     * à ce que MySQL stocke, pour que l'entrée et la valeur lue correspondent
     * exactement (et non pas via une approximation décimale fragile).
     */
    public static function coordKey(float $lat, float $lng): string
    {
        return unpack('f', pack('f', $lat))[1] . '|' . unpack('f', pack('f', $lng))[1];
    }

    /**
     * Résout les IDs de nœuds pour un lot de coordonnées en une seule requête
     * (exploite l'index unique uniq_road_node_coord). Retourne une map
     * coordKey => id. Scalable (une requête par lot, pas par nœud).
     *
     * @param array<int, array{0: float, 1: float}> $coords
     * @return array<string, int>
     */
    public function findIdsByCoordinates(array $coords): array
    {
        if ($coords === []) {
            return [];
        }

        $conn = $this->getEntityManager()->getConnection();
        $tuples = [];
        $params = [];
        foreach ($coords as $c) {
            $tuples[] = '(?, ?)';
            $params[] = $c[0];
            $params[] = $c[1];
        }

        $sql = 'SELECT id, lat, lng FROM road_node WHERE (lat, lng) IN ('
            . implode(',', $tuples) . ')';
        $rows = $conn->fetchAllAssociative($sql, $params);

        $map = [];
        foreach ($rows as $r) {
            $key = self::coordKey((float) $r['lat'], (float) $r['lng']);
            $map[$key] = (int) $r['id'];
        }

        return $map;
    }

    /**
     * Compte le nombre total de nœuds.
     */
    public function countNodes(): int
    {
        return (int) $this->createQueryBuilder('n')
            ->select('COUNT(n.id)')
            ->getQuery()
            ->getSingleScalarResult();
    }

    /**
     * Vide la table des nœuds.
     */
    public function truncate(): void
    {
        $this->getEntityManager()->getConnection()->executeStatement('TRUNCATE TABLE road_node');
    }
}