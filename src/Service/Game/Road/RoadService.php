<?php

namespace App\Service\Game\Road;

use App\Repository\RoadSegmentRepository;
use App\Repository\RoadNodeRepository;
use App\Service\Osm\SpatialIndexer;
use App\Service\Game\Generate\GenerateChunkService;

/**
 * Service de logique métier lié aux routes.
 * Vérifie la proximité des segments (nouveau schéma).
 */
class RoadService
{
    private const SEARCH_RADIUS = 0.02; // Degrés

    public function __construct(
        private RoadSegmentRepository $roadSegmentRepository,
        private RoadNodeRepository $nodeRepository,
        private SpatialIndexer $spatialIndexer,
        private GenerateChunkService $chunkGenerator,
    ) {}

    /**
     * Vérifie si un point GPS est à proximité d'un segment.
     */
    public function isNearRoad(float $lat, float $lng, float $maxDistance = 50): bool
    {
        $segments = $this->findSegmentsNear($lat, $lng);

        if (empty($segments)) {
            $this->chunkGenerator->generate($lat, $lng);
            $segments = $this->findSegmentsNear($lat, $lng);
        }

        foreach ($segments as $segment) {
            $dist = $this->distanceToSegment($lat, $lng, $segment);
            if ($dist < $maxDistance) {
                return true;
            }
        }

        return false;
    }

    /**
     * Trouve les segments proches d'un point via l'index spatial.
     */
    private function findSegmentsNear(float $lat, float $lng): array
    {
        $cellId = \App\Entity\SpatialCell::buildId($lat, $lng);

        return $this->spatialIndexer->findSegmentsInCell($cellId);
    }

    /**
     * Calcule la distance d'un point à un segment.
     */
    private function distanceToSegment(float $lat, float $lng, $segment): float
    {
        $start = $this->nodeRepository->find($segment->getNodeStartId());
        $end = $this->nodeRepository->find($segment->getNodeEndId());

        if (!$start || !$end) {
            return PHP_FLOAT_MAX;
        }

        return $this->pointToSegmentDistance(
            $lat, $lng,
            $start->getLat(), $start->getLng(),
            $end->getLat(), $end->getLng()
        );
    }

    /**
     * Distance perpendiculaire d'un point à un segment.
     */
    private function pointToSegmentDistance(float $px, float $py, float $x1, float $y1, float $x2, float $y2): float
    {
        $dx = $x2 - $x1;
        $dy = $y2 - $y1;

        if ($dx == 0 && $dy == 0) {
            return $this->approxDistance($px, $py, $x1, $y1);
        }

        $t = (($px - $x1) * $dx + ($py - $y1) * $dy) / ($dx * $dx + $dy * $dy);
        $t = max(0, min(1, $t));

        $xx = $x1 + $t * $dx;
        $yy = $y1 + $t * $dy;

        return $this->approxDistance($px, $py, $xx, $yy);
    }

    private function approxDistance(float $lat1, float $lng1, float $lat2, float $lng2): float
    {
        $dx = ($lat2 - $lat1) * 111000;
        $dy = ($lng2 - $lng1) * 111000 * cos(deg2rad($lat1));
        return sqrt($dx * $dx + $dy * $dy);
    }
}