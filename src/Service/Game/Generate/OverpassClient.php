<?php

namespace App\Service\Game\Generate;

use App\Entity\Road;
use Psr\Log\LoggerInterface;

/**
 * Client pour l'API Overpass avec support de multiples mirrors.
 *
 * Alterne automatiquement entre les instances disponibles.
 * En cas de 429/504 sur un mirror, passe au suivant.
 */
class OverpassClient
{
    private const MAX_RETRIES = 3;
    private const BASE_DELAY_MS = 1000;
    private const HARD_TIMEOUT = 25;

    /**
     * Mirrors Overpass publics (ordre de priorité).
     * Le premier est le principal, les autres sont des fallback.
     */
    private const MIRRORS = [
        'https://overpass-api.de/api/interpreter',
        'https://overpass.openstreetmap.ru/api/interpreter',
        'https://overpass.openstreetmap.fr/api/interpreter',
        'https://overpass.kumi.systems/api/interpreter',
        'https://overpass.nchc.org.tw/api/interpreter',
    ];

    private float $lastRequestTime = 0;
    private int $currentMirrorIndex = 0;
    private int $consecutiveFailures = 0;

    public function __construct(
        private LoggerInterface $logger,
        private float $throttleSeconds = 2.0,
    ) {}

    public function setThrottle(float $seconds): void
    {
        $this->throttleSeconds = max(0.5, $seconds);
    }

    /**
     * Récupère les routes depuis Overpass pour une bbox donnée.
     *
     * @return Road[] Routes non persistées (le caller décide de les persister)
     * @throws OverpassException Après échec sur tous les mirrors
     */
    public function fetchRoads(float $latMin, float $lngMin, float $latMax, float $lngMax): array
    {
        $this->enforceThrottle();

        $bbox = sprintf('%F,%F,%F,%F', $latMin, $lngMin, $latMax, $lngMax);
        $query = "[out:json][timeout:25];way[\"highway\"]($bbox);out geom;";

        $lastError = null;
        $mirrorsTried = [];

        for ($attempt = 1; $attempt <= self::MAX_RETRIES; $attempt++) {
            // Choisir le mirror : essayer tous les mirrors disponibles
            $mirror = $this->selectMirror($attempt, $mirrorsTried);
            if ($mirror === null) {
                // Tous les mirrors ont été essayés, on réessaie depuis le début
                $mirrorsTried = [];
                $mirror = self::MIRRORS[0];
            }

            $mirrorsTried[] = $mirror;

            try {
                $this->logger->info(sprintf(
                    "Overpass tentative %d/%d [%s] pour bbox [%s]",
                    $attempt, self::MAX_RETRIES,
                    $this->mirrorName($mirror),
                    $bbox
                ));

                $response = $this->doRequest($mirror, $query);
                $roads = $this->parseResponse($response);

                $this->logger->info(sprintf(
                    "Overpass OK [%s] : %d routes pour bbox [%s]",
                    $this->mirrorName($mirror),
                    count($roads),
                    $bbox
                ));

                $this->consecutiveFailures = 0;

                return $roads;
            } catch (\Throwable $e) {
                $lastError = $e;
                $isRateLimit = str_contains($e->getMessage(), '429');
                $isTimeout = str_contains($e->getMessage(), '504') || str_contains($e->getMessage(), 'timed out');

                // Backoff plus agressif pour les 429/504
                $delay = ($isRateLimit || $isTimeout)
                    ? self::BASE_DELAY_MS * 5 * (2 ** ($attempt - 1))
                    : self::BASE_DELAY_MS * (2 ** ($attempt - 1));

                $reason = $isRateLimit ? 'RATE LIMIT' : ($isTimeout ? 'TIMEOUT' : 'ERROR');

                $this->logger->warning(sprintf(
                    "Overpass échec tentative %d/%d [%s] : %s (retry dans %dms) [%s]",
                    $attempt, self::MAX_RETRIES,
                    $this->mirrorName($mirror),
                    $e->getMessage(),
                    $delay,
                    $reason
                ));

                $this->consecutiveFailures++;
            }
        }

        throw new OverpassException(sprintf(
            "Échec Overpass après %d tentatives sur %d mirrors pour bbox [%s] : %s",
            self::MAX_RETRIES,
            count($mirrorsTried),
            $bbox,
            $lastError?->getMessage() ?? 'unknown'
        ));
    }

    /**
     * Sélectionne le prochain mirror à essayer.
     */
    private function selectMirror(int $attempt, array $alreadyTried): ?string
    {
        // Premier essai : utiliser le mirror courant
        if ($attempt === 1) {
            return self::MIRRORS[$this->currentMirrorIndex];
        }

        // Essais suivants : essayer les autres mirrors
        for ($i = 0; $i < count(self::MIRRORS); $i++) {
            if ($i === $this->currentMirrorIndex) {
                continue;
            }
            if (in_array(self::MIRRORS[$i], $alreadyTried, true)) {
                continue;
            }
            return self::MIRRORS[$i];
        }

        return null;
    }

    /**
     * Extrait un nom court depuis l'URL du mirror.
     */
    private function mirrorName(string $url): string
    {
        $host = parse_url($url, PHP_URL_HOST);
        return str_replace('overpass.', '', $host ?? 'unknown');
    }

    /**
     * Force un délai minimum entre deux appels Overpass.
     */
    private function enforceThrottle(): void
    {
        if ($this->lastRequestTime <= 0) {
            $this->lastRequestTime = microtime(true);
            return;
        }

        $elapsed = microtime(true) - $this->lastRequestTime;
        $wait = $this->throttleSeconds - $elapsed;

        if ($wait > 0) {
            $this->logger->debug(sprintf("Throttle Overpass : attente %.1fs", $wait));
            usleep((int) ($wait * 1_000_000));
        }

        $this->lastRequestTime = microtime(true);
    }

    /**
     * Exécute la requête HTTP vers un mirror Overpass.
     */
    private function doRequest(string $url, string $query): string
    {
        $context = stream_context_create([
            'http' => [
                'method' => 'POST',
                'header' => "Content-Type: application/x-www-form-urlencoded\r\nUser-Agent: IronFront/1.0",
                'content' => http_build_query(['data' => $query]),
                'timeout' => self::HARD_TIMEOUT,
            ],
        ]);

        $response = @file_get_contents($url, false, $context);

        if ($response === false) {
            $error = error_get_last();
            throw new \RuntimeException('HTTP failed: ' . ($error['message'] ?? 'unknown'));
        }

        // Détecter les erreurs Overpass dans la réponse
        if (str_contains($response, 'runtime error') || str_contains($response, 'out of memory')) {
            throw new \RuntimeException('Overpass runtime error');
        }

        return $response;
    }

    /**
     * Parse la réponse JSON Overpass en entités Road.
     *
     * @return Road[]
     */
    private function parseResponse(string $response): array
    {
        $data = json_decode($response, true);

        if (!isset($data['elements'])) {
            return [];
        }

        $roads = [];
        foreach ($data['elements'] as $way) {
            if (!isset($way['geometry']) || count($way['geometry']) < 2) {
                continue;
            }

            $points = [];
            foreach ($way['geometry'] as $node) {
                if (!isset($node['lat'], $node['lon'])) {
                    continue;
                }
                $points[] = [(float) $node['lat'], (float) $node['lon']];
            }

            if (count($points) < 2) {
                continue;
            }

            $road = new Road();
            $road->setPoints($points);
            $road->setType($way['tags']['highway'] ?? 'road');

            $roads[] = $road;
        }

        return $roads;
    }
}
