<?php

namespace App\Service\Game\Generate;

use App\Entity\Road;
use Doctrine\DBAL\Connection;
use Psr\Log\LoggerInterface;

/**
 * Fournisseur de routes depuis la base MySQL.
 *
 * Lit depuis la table `road` (Doctrine) au lieu de `roads_mysql`.
 * Cela permet de fonctionner avec les données déjà importées via OsmImportCommand.
 *
 * Pour la migration future vers roads_mysql, changer la requête SQL.
 */
final class GeofabrikRoadProvider
{
    public function __construct(
        private readonly LoggerInterface $logger,
        private readonly Connection $pdo,
    ) {}

    /**
     * Récupère toutes les routes (terrestres + ferries) intersectant la bbox.
     * Utilise la table `road` avec index bbox_lat_min etc.
     *
     * @return Road[]
     */
    public function findRoadsInBbox(float $latMin, float $lngMin, float $latMax, float $lngMax): array
    {
        // Requête sur la table road (déjà importée via OsmImportCommand)
        $sql = <<<'SQL'
            SELECT id, points, type
            FROM road
            WHERE bbox_lat_min <= :north AND bbox_lat_max >= :south
              AND bbox_lng_min <= :east AND bbox_lng_max >= :west
            SQL;

        $stmt = $this->pdo->executeQuery($sql, [
            'south' => $latMin,
            'west'  => $lngMin,
            'north' => $latMax,
            'east'  => $lngMax,
        ]);

        $roads = [];
        while ($row = $stmt->fetchAssociative()) {
            $road = $this->hydrateFromRoadRow($row);
            if ($road !== null) {
                $roads[] = $road;
            }
        }

        $this->logger->info(sprintf(
            'RoadProvider : %d routes dans bbox [%F,%F,%F,%F]',
            count($roads), $latMin, $lngMin, $latMax, $lngMax
        ));

        return $roads;
    }

    /** Nombre total de routes indexées (diagnostic). */
    public function countRoads(): int
    {
        return (int) $this->pdo->fetchOne('SELECT COUNT(*) FROM road');
    }

    /**
     * @return array{latMin:float, lngMin:float, latMax:float, lngMax:float}|null
     */
    public function bboxOfAllRoads(): ?array
    {
        $row = $this->pdo->fetchAssociative(
            'SELECT MIN(bbox_lat_min), MIN(bbox_lng_min), MAX(bbox_lat_max), MAX(bbox_lng_max) FROM road'
        );

        return $row && $row['MIN(bbox_lat_min)'] !== null && $row['MIN(bbox_lat_min)'] != 0.0
            ? [
                'latMin' => (float) $row['MIN(bbox_lat_min)'],
                'lngMin' => (float) $row['MIN(bbox_lng_min)'],
                'latMax' => (float) $row['MAX(bbox_lat_max)'],
                'lngMax' => (float) $row['MAX(bbox_lng_max)'],
            ]
            : null;
    }

    /** Hydrate depuis la table road. */
    private function hydrateFromRoadRow(array $row): ?Road
    {
        $points = $row['points'] ?? [];

        if (is_string($points)) {
            $points = json_decode($points, true);
        }

        if (!is_array($points) || count($points) < 2) {
            return null;
        }

        $road = new Road();
        // Set l'ID pour qu'elle soit reconnue comme "existante" par Doctrine
        // Cela évite la re-création dans GenerateChunkService
        $road->setId((int) $row['id']);
        $road->setPoints($points);
        $road->setType($row['type'] ?? 'road');

        // Calculer les bbox depuis les points
        $road->computeBboxFromPoints();

        return $road;
    }
}