<?php

namespace App\Service;

class CoordinateService
{
    private const EARTH_RADIUS_METERS = 6371000;

    public const CHUNK_SIZE = 0.01;

    /**
     * Calcule la distance en mètres entre deux points GPS en utilisant la formule Haversine.
     */
    public function distance(float $lat1, float $lon1, float $lat2, float $lon2): float
    {
        $dLat = deg2rad($lat2 - $lat1);
        $dLon = deg2rad($lon2 - $lon1);

        $a = sin($dLat / 2) ** 2 +
            cos(deg2rad($lat1)) *
            cos(deg2rad($lat2)) *
            sin($dLon / 2) ** 2;

        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

        return self::EARTH_RADIUS_METERS * $c;
    }

    /**
     * Retourne la bounding box (grille CHUNK_SIZE × CHUNK_SIZE) pour un point GPS.
     *
     * Utilise floor(lat / CHUNK_SIZE) — la même formule que la génération Overpass,
     * pour garantir la cohérence front/back.
     *
     * @return array{latMin: float, lngMin: float, latMax: float, lngMax: float}
     */
    public function getBoundingBox(float $lat, float $lng): array
    {
        $x = floor($lat / self::CHUNK_SIZE);
        $y = floor($lng / self::CHUNK_SIZE);

        return [
            'latMin' => (float) round($x * self::CHUNK_SIZE, 8),
            'lngMin' => (float) round($y * self::CHUNK_SIZE, 8),
            'latMax' => (float) round(($x + 1) * self::CHUNK_SIZE, 8),
            'lngMax' => (float) round(($y + 1) * self::CHUNK_SIZE, 8),
        ];
    }

    /**
     * Clé stable utilisée pour indexer le cache (cohérente front/back).
     */
    public function bboxKey(array $bbox): string
    {
        return sprintf(
            '%s_%s_%s_%s',
            (string) $bbox['latMin'],
            (string) $bbox['lngMin'],
            (string) $bbox['latMax'],
            (string) $bbox['lngMax']
        );
    }
}
