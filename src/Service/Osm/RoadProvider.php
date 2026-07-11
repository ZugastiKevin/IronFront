<?php

namespace App\Service\Osm;

use App\Entity\RoadSegment;
use App\Repository\RoadSegmentRepository;
use App\Repository\RoadGraphRepository;
use App\Repository\RoadNodeRepository;
use App\Service\Osm\GeometryHelper;
use App\Service\Osm\SpatialIndexer;
use Psr\Log\LoggerInterface;

/**
 * Fournisseur de routes depuis les nouvelles tables optimisées.
 *
 * Remplace GeofabrikRoadProvider en utilisant le schéma road_segment + spatial_segment.
 * Utilise l'index spatial pour des recherches efficaces (bbox et rayon), et la
 * polyligne stockée sur chaque segment pour un calcul de distance réel.
 */
final class RoadProvider
{
    public function __construct(
        private readonly RoadSegmentRepository $segmentRepository,
        private readonly RoadGraphRepository $graphRepository,
        private readonly SpatialIndexer $spatialIndexer,
        private readonly RoadNodeRepository $nodeRepository,
        private readonly LoggerInterface $logger,
    ) {}

    /**
     * Trouve les segments qui chevauchent une bbox en utilisant l'index spatial.
     *
     * @return RoadSegment[]
     */
    public function findSegmentsInBbox(float $south, float $west, float $north, float $east): array
    {
        return $this->spatialIndexer->findSegmentsInBbox($south, $west, $north, $east);
    }

    /**
     * Trouve le segment le plus proche d'un point (distance réelle à la polyligne).
     */
    public function findNearestSegment(float $lat, float $lng, float $maxDistance = 50): ?RoadSegment
    {
        $dLat = GeometryHelper::metersToDegreesLat($maxDistance);
        $dLng = GeometryHelper::metersToDegreesLng($maxDistance, $lat);

        $segments = $this->findSegmentsInBbox(
            $lat - $dLat,
            $lng - $dLng,
            $lat + $dLat,
            $lng + $dLng
        );

        $nearest = null;
        $minDist = $maxDistance;

        foreach ($segments as $segment) {
            $dist = GeometryHelper::pointToPolylineDistance($lat, $lng, $this->segmentPolyline($segment));

            if ($dist <= $minDist) {
                $minDist = $dist;
                $nearest = $segment;
            }
        }

        return $nearest;
    }

    /**
     * Trouve tous les segments situés dans un rayon (mètres) autour d'un point.
     * Requête gameplay majoritaire (visibilité, artillerie, détection, IA...).
     *
     * @return RoadSegment[]
     */
    public function findSegmentsInRadius(float $lat, float $lng, float $radiusMeters): array
    {
        $dLat = GeometryHelper::metersToDegreesLat($radiusMeters);
        $dLng = GeometryHelper::metersToDegreesLng($radiusMeters, $lat);

        $candidates = $this->findSegmentsInBbox(
            $lat - $dLat,
            $lng - $dLng,
            $lat + $dLat,
            $lng + $dLng
        );

        $result = [];

        foreach ($candidates as $segment) {
            if (GeometryHelper::pointToPolylineDistance($lat, $lng, $this->segmentPolyline($segment)) <= $radiusMeters) {
                $result[] = $segment;
            }
        }

        return $result;
    }

    /**
     * Variante "point" de findSegmentsInRadius avec un petit rayon par défaut.
     *
     * @return RoadSegment[]
     */
    public function findSegmentsNearPoint(float $lat, float $lng, float $radiusMeters = 50): array
    {
        return $this->findSegmentsInRadius($lat, $lng, $radiusMeters);
    }

    /**
     * Trouve les voisins d'un nœud dans le graphe.
     *
     * @return array<int, mixed>
     */
    public function findNeighbors(int $nodeId): array
    {
        return $this->graphRepository->findNeighborsByNodeId($nodeId);
    }

    /**
     * Compte le nombre total de segments.
     */
    public function countSegments(): int
    {
        return $this->segmentRepository->countSegments();
    }

    /**
     * Polyligne d'un segment, ou fallback sur ses nœuds extrêmes si la
     * colonne polyline est vide (segments importés avant l'ajout de la colonne).
     *
     * @return array<int, array{0: float, 1: float}>
     */
    private function segmentPolyline(RoadSegment $segment): array
    {
        $polyline = $segment->getPolyline();

        if (!empty($polyline)) {
            return $polyline;
        }

        $start = $this->nodeRepository->find($segment->getNodeStartId());
        $end = $this->nodeRepository->find($segment->getNodeEndId());

        if ($start === null || $end === null) {
            return [];
        }

        return [
            [$start->getLat(), $start->getLng()],
            [$end->getLat(), $end->getLng()],
        ];
    }
}
