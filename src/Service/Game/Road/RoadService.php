<?php

namespace App\Service\Game\Road;

use App\Repository\RoadRepository;
use App\Service\Game\Generate\GenerateChunkService;

/**
 * Service de logique métier lié aux routes.
 * Permet de vérifier des informations sur les routes, comme la proximité.
 * Orchestre la génération de routes si elles n'existent pas.
 *
 * Utilise des bounding boxes (pas de chunkId) pour rester cohérent avec la génération Overpass.
 */
class RoadService
{
    /** Marge de recherche autour du point pour capturer les routes proches des bords de cellule. */
    private const SEARCH_RADIUS = 0.02;

    public function __construct(
        private RoadRepository $roadRepository,
        private GenerateChunkService $chunkGenerator,
    ) {}

    /**
     * Vérifie si un point GPS est à proximité d'une route.
     * Si aucune route n'est trouvée dans la zone, déclenche la génération Overpass.
     */
    public function isNearRoad(float $lat, float $lng, float $maxDistance = 50): bool
    {
        // 1. Chercher les routes dans une bbox élargie (±0.02°)
        $roads = $this->findRoadsNear($lat, $lng);

        // 2. Si rien trouvé, générer la zone puis re-chercher
        if (empty($roads)) {
            $this->chunkGenerator->generate($lat, $lng);
            $roads = $this->findRoadsNear($lat, $lng);
        }

        // 3. Vérifier la distance à chaque segment de route
        foreach ($roads as $road) {
            $points = $road->getPoints();
            for ($i = 0; $i < count($points) - 1; $i++) {
                $a = $points[$i];
                $b = $points[$i + 1];

                if ($this->distanceToSegment($lat, $lng, $a, $b) < $maxDistance) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Cherche les routes dans une bbox élargie autour du point.
     *
     * @return \App\Entity\Road[]
     */
    private function findRoadsNear(float $lat, float $lng): array
    {
        return $this->roadRepository->findByBbox(
            $lat - self::SEARCH_RADIUS,
            $lng - self::SEARCH_RADIUS,
            $lat + self::SEARCH_RADIUS,
            $lng + self::SEARCH_RADIUS,
        );
    }

    /**
     * Calcule la distance la plus courte entre un point et un segment [a, b].
     * Utilise une approximation pour le gameplay, pas un calcul géodésique précis.
     */
    private function distanceToSegment(float $lat, float $lng, array $a, array $b): float
    {
        $x  = $lat;
        $y  = $lng;
        $x1 = $a[0];
        $y1 = $a[1];
        $x2 = $b[0];
        $y2 = $b[1];

        $A = $x - $x1;
        $B = $y - $y1;
        $C = $x2 - $x1;
        $D = $y2 - $y1;

        $dot  = $A * $C + $B * $D;
        $lenSq = $C * $C + $D * $D;

        if ($lenSq == 0) {
            return $this->approxDistance($x, $y, $x1, $y1);
        }

        $param = $dot / $lenSq;

        if ($param < 0) {
            return $this->approxDistance($x, $y, $x1, $y1);
        }

        if ($param > 1) {
            return $this->approxDistance($x, $y, $x2, $y2);
        }

        $xx = $x1 + $param * $C;
        $yy = $y1 + $param * $D;

        return $this->approxDistance($x, $y, $xx, $yy);
    }

    /**
     * Distance approximative en degrés (suffisant pour le gameplay).
     */
    private function approxDistance(float $lat1, float $lng1, float $lat2, float $lng2): float
    {
        $dx = ($lat2 - $lat1) * 111000; // ~111 km par degré de latitude
        $dy = ($lng2 - $lng1) * 111000 * cos(deg2rad($lat1));
        return sqrt($dx * $dx + $dy * $dy);
    }
}
