<?php

namespace App\Service\Osm;

/**
 * Méthodes géométriques pour le pipeline OSM.
 * Douglas-Peucker, distances, bbox, grille spatiale.
 */
final class GeometryHelper
{
    // 1 degré lat ≈ 111 km
    private const METERS_PER_DEGREE = 111000.0;

    /**
     * Algorithme Douglas-Peucker pour simplifier une polyligne.
     *
     * @param array $points   Liste de [lat, lng]
     * @param float $epsilon  Distance maximale en mètres
     * @return array         Points simplifiés
     */
    public static function douglasPeucker(array $points, float $epsilon = 10.0): array
    {
        if (count($points) <= 2) {
            return $points;
        }

        $indices = self::douglasPeuckerIndices($points, $epsilon);

        return array_map(fn(int $i): array => $points[$i], $indices);
    }

    /**
     * Renvoie les indices (dans le tableau original) des points conservés
     * par Douglas-Peucker. Permet de retrouver la sous-polyligne originale
     * entre deux nœuds simplifiés.
     *
     * @param array<int, array{0: float, 1: float}> $points
     * @return int[]
     */
    public static function douglasPeuckerIndices(array $points, float $epsilon = 10.0): array
    {
        $count = count($points);

        if ($count <= 2) {
            return range(0, max(0, $count - 1));
        }

        return self::douglasPeuckerIndicesRecursive($points, 0, $count - 1, $epsilon);
    }

    /**
     * @param array<int, array{0: float, 1: float}> $points
     * @return int[]
     */
    private static function douglasPeuckerIndicesRecursive(array $points, int $first, int $last, float $epsilon): array
    {
        $maxDist = 0.0;
        $index = -1;

        for ($i = $first + 1; $i < $last; $i++) {
            $dist = self::pointToSegmentDistance(
                $points[$i][0], $points[$i][1],
                $points[$first][0], $points[$first][1],
                $points[$last][0], $points[$last][1]
            );

            if ($dist > $maxDist) {
                $maxDist = $dist;
                $index = $i;
            }
        }

        if ($maxDist > $epsilon) {
            $left = self::douglasPeuckerIndicesRecursive($points, $first, $index, $epsilon);
            $right = self::douglasPeuckerIndicesRecursive($points, $index, $last, $epsilon);
            return array_merge(array_slice($left, 0, -1), $right);
        }

        return [$first, $last];
    }

    /**
     * Calcule la distance perpendiculaire (mètres) d'un point à un segment.
     */
    public static function pointToSegmentDistance(float $px, float $py, float $x1, float $y1, float $x2, float $y2): float
    {
        $dx = $x2 - $x1;
        $dy = $y2 - $y1;

        if ($dx == 0 && $dy == 0) {
            return self::approxDistance($px, $py, $x1, $y1);
        }

        $t = (($px - $x1) * $dx + ($py - $y1) * $dy) / ($dx * $dx + $dy * $dy);
        $t = max(0, min(1, $t));

        $closestX = $x1 + $t * $dx;
        $closestY = $y1 + $t * $dy;

        return self::approxDistance($px, $py, $closestX, $closestY);
    }

    /**
     * Distance minimale (mètres) d'un point à une polyligne [[lat, lng], ...].
     *
     * @param array<int, array{0: float, 1: float}> $polyline
     */
    public static function pointToPolylineDistance(float $px, float $py, array $polyline): float
    {
        if (count($polyline) === 0) {
            return 0.0;
        }

        if (count($polyline) === 1) {
            return self::haversineDistance($px, $py, $polyline[0][0], $polyline[0][1]);
        }

        $min = PHP_FLOAT_MAX;

        for ($i = 1; $i < count($polyline); $i++) {
            $dist = self::pointToSegmentDistance(
                $px, $py,
                $polyline[$i - 1][0], $polyline[$i - 1][1],
                $polyline[$i][0], $polyline[$i][1]
            );

            if ($dist < $min) {
                $min = $dist;
            }
        }

        return $min;
    }

    /**
     * Conversion d'une distance en mètres vers un delta de latitude (degrés).
     */
    public static function metersToDegreesLat(float $meters): float
    {
        return $meters / self::METERS_PER_DEGREE;
    }

    /**
     * Conversion d'une distance en mètres vers un delta de longitude (degrés),
     * corrigé par la latitude (les méridiens se rapprochent vers les pôles).
     */
    public static function metersToDegreesLng(float $meters, float $lat): float
    {
        return $meters / (self::METERS_PER_DEGREE * cos(deg2rad($lat)));
    }

    /**
     * Distance approximative en mètres (suffisante pour le gameplay).
     */
    public static function approxDistance(float $lat1, float $lng1, float $lat2, float $lng2): float
    {
        $dx = ($lat2 - $lat1) * self::METERS_PER_DEGREE;
        $dy = ($lng2 - $lng1) * self::METERS_PER_DEGREE * cos(deg2rad($lat1));
        return sqrt($dx * $dx + $dy * $dy);
    }

    /**
     * Distance Haversine précise pour les calculs de longueur de segments.
     */
    public static function haversineDistance(float $lat1, float $lng1, float $lat2, float $lng2): float
    {
        $earthRadius = 6371000; // mètres

        $dLat = deg2rad($lat2 - $lat1);
        $dLng = deg2rad($lng2 - $lng1);

        $lat1 = deg2rad($lat1);
        $lat2 = deg2rad($lat2);

        $a = sin($dLat/2) * sin($dLat/2) +
             sin($dLng/2) * sin($dLng/2) * cos($lat1) * cos($lat2);
        $c = 2 * atan2(sqrt($a), sqrt(1-$a));

        return $earthRadius * $c;
    }

    /**
     * Calcule la longueur totale d'une polyligne.
     */
    public static function calculateLength(array $points): float
    {
        if (count($points) < 2) {
            return 0.0;
        }

        $length = 0.0;
        for ($i = 1; $i < count($points); $i++) {
            $length += self::haversineDistance(
                $points[$i-1][0], $points[$i-1][1],
                $points[$i][0], $points[$i][1]
            );
        }

        return $length;
    }

    /**
     * Calcule la bounding box d'une série de points.
     */
    public static function calculateBbox(array $points): array
    {
        if (empty($points)) {
            return [
                'lat_min' => 0.0, 'lat_max' => 0.0,
                'lng_min' => 0.0, 'lng_max' => 0.0,
            ];
        }

        $lats = array_column($points, 0);
        $lngs = array_column($points, 1);

        return [
            'lat_min' => min($lats),
            'lat_max' => max($lats),
            'lng_min' => min($lngs),
            'lng_max' => max($lngs),
        ];
    }

    /**
     * Calcule les cellules spatiales traversées par une bbox.
     */
    public static function getCellIdsForBbox(float $south, float $west, float $north, float $east): array
    {
        $cellSize = 0.009; // ~1km
        $ids = [];

        $minX = (int) floor($south / $cellSize);
        $maxX = (int) floor($north / $cellSize);
        $minY = (int) floor($west / $cellSize);
        $maxY = (int) floor($east / $cellSize);

        for ($x = $minX; $x <= $maxX; $x++) {
            for ($y = $minY; $y <= $maxY; $y++) {
                $ids[] = sprintf('%d_%d', $x, $y);
            }
        }

        return $ids;
    }

    /**
     * Encode une signature unique pour un segment (détection doublons).
     */
    public static function segmentSignature(array $points): string
    {
        $normalized = array_map(
            fn($pt) => sprintf('%.6f,%.6f', $pt[0], $pt[1]),
            $points
        );
        $forward = implode('|', $normalized);
        $reversed = implode('|', array_reverse($normalized));

        return min($forward, $reversed);
    }
}