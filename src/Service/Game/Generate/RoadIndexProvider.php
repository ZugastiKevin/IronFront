<?php

namespace App\Service\Game\Generate;

use App\Service\Osm\SpatialIndexer;
use App\Entity\RoadSegment;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;

/**
 * Fournisseur de routes depuis l'index spatial (road_segment + spatial_segment).
 *
 * Remplace GeofabrikRoadProvider en utilisant le nouveau schéma optimisé.
 */
final class RoadIndexProvider
{
    public function __construct(
        private readonly SpatialIndexer $spatialIndexer,
        private readonly EntityManagerInterface $em,
        private readonly LoggerInterface $logger,
    ) {}

    /**
     * Trouve les segments qui chevauchent une bbox en utilisant l'index spatial.
     *
     * @return RoadSegment[]
     */
    public function findRoadsInBbox(float $latMin, float $lngMin, float $latMax, float $lngMax): array
    {
        $roads = $this->spatialIndexer->findSegmentsInBbox(
            $latMin, $lngMin, $latMax, $lngMax
        );

        $this->logger->info(sprintf(
            'RoadIndexProvider : %d segments dans bbox [%F,%F,%F,%F]',
            count($roads), $latMin, $lngMin, $latMax, $lngMax
        ));

        return $roads;
    }

    /**
     * Compte le nombre total de segments.
     */
    public function countSegments(): int
    {
        return (int) $this->em->getConnection()->fetchOne('SELECT COUNT(*) FROM road_segment');
    }
}