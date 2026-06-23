<?php
namespace App\Service\Game\Generate;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class OsrmService
{
    private const BASE_URL = 'http://router.project-osrm.org/route/v1';

    // Vitesses moyennes par type de route (m/s)
    private const SPEEDS = [
        'motorway'       => 33.3,  // 120 km/h
        'motorway_link'  => 33.3,  // 120 km/h (voie express dérivée)
        'trunk'          => 27.8,  // 100 km/h
        'primary'        => 22.2,  //  80 km/h
        'secondary'      => 16.7,  //  60 km/h
        'tertiary'       => 13.9,  //  50 km/h
        'unclassified'   => 13.9,  //  50 km/h
        'residential'    => 8.3,   //  30 km/h
        'service'        => 8.3,   //  30 km/h (zones à accès restreint)
        'path'           => 5.6,   //  20 km/h (chemins de campagne)
        'track'          => 5.6,   //  20 km/h (chemins de tracteur)
        'footway'        => 5.6,   //  20 km/h (voies piétonnes)
        'default'        => 13.9,  //  50 km/h
    ];

    public function __construct(
        private readonly HttpClientInterface $httpClient,
    ) {}

    /**
     * Calcule l'itinéraire entre deux points
     * Retourne les waypoints et la durée en secondes
     */
    public function getRoute(
        float $fromLat, float $fromLng,
        float $toLat,   float $toLng
    ): array {
        try {
            $url = sprintf(
                '%s/driving/%s,%s;%s,%s?overview=full&geometries=geojson&steps=false',
                self::BASE_URL,
                $fromLng, $fromLat,  // OSRM = lng,lat (inversé)
                $toLng,   $toLat
            );

            $response = $this->httpClient->request('GET', $url, [
                'timeout' => 10,
            ]);

            $data = $response->toArray();

            if ($data['code'] !== 'Ok' || empty($data['routes'])) {
                return $this->fallback($fromLat, $fromLng, $toLat, $toLng);
            }

            $route    = $data['routes'][0];
            $duration = (int) $route['duration'];   // secondes
            $distance = (int) $route['distance'];   // mètres

            // Extraire les waypoints depuis la géométrie GeoJSON
            $coordinates = $route['geometry']['coordinates'];
            $waypoints   = array_map(
                fn($c) => ['lat' => $c[1], 'lng' => $c[0]],
                $coordinates
            );

            return [
                'waypoints' => $waypoints,
                'duration'  => $duration,
                'distance'  => $distance,
            ];

        } catch (\Throwable $e) {
            // Fallback ligne droite si OSRM indisponible
            return $this->fallback($fromLat, $fromLng, $toLat, $toLng);
        }
    }

    /**
     * Fallback : ligne droite si OSRM indisponible
     */
    private function fallback(
        float $fromLat, float $fromLng,
        float $toLat,   float $toLng
    ): array {
        $distance = $this->haversine($fromLat, $fromLng, $toLat, $toLng);
        $duration = max(60, (int)($distance / self::SPEEDS['default']));

        return [
            'waypoints' => [
                ['lat' => $fromLat, 'lng' => $fromLng],
                ['lat' => $toLat,   'lng' => $toLng],
            ],
            'duration' => $duration,
            'distance' => (int) $distance,
        ];
    }

    private function haversine(float $lat1, float $lng1, float $lat2, float $lng2): float
    {
        $R    = 6371000;
        $dLat = deg2rad($lat2 - $lat1);
        $dLng = deg2rad($lng2 - $lng1);
        $a    = sin($dLat/2) ** 2
              + cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * sin($dLng/2) ** 2;
        return $R * 2 * atan2(sqrt($a), sqrt(1 - $a));
    }
}