<?php

namespace App\Service\Game\Generate;

use App\Entity\Chunk;
use App\Entity\ResourceDeposit;
use App\Entity\ResourceType;
use App\Entity\Road;

/**
 * Place au maximum 2 ressources par chunk — de façon DÉTERMINISTE.
 *
 * Objectifs :
 *   - reproductibilité (même chunk = mêmes ressources, quel que soit le
 *     worker, le redémarrage, la BDD)
 *   - 1 ressource "satellitaire" près d'une route (pondération ferry↓)
 *   - 1 ressource "sauvage", éloignée de toutes routes, plus rare
 *   - maximum 2
 *
 * Le seed est un hash 64 bits dérivé (FNV-1a) du chunkId.
 * Aucun appel à rand()/mt_rand()/random_int() n'est effectué : tout
 * découle du seed via des opérations arithmétiques entières (SplitMix64),
 * ce qui garantit l'atomicité et une absence totale de dépendance à
 * l'état global du PRNG PHP.
 */
class DeterministicResourcePlacer
{
    /**
     * @param Road[]       $roads
     * @param ResourceType[] $resourceTypes
     * @return ResourceDeposit[]
     */
    public function placeResources(Chunk $chunk, array $roads, array $resourceTypes): array
    {
        if ($roads === [] || $resourceTypes === []) {
            return [];
        }

        $types = array_values(array_filter($resourceTypes, fn(ResourceType $rt) => !empty($rt->getColor())));
        if ($types === []) {
            return [];
        }

        $seed = new SplitMix64($this->chunkSeed($chunk));

        $bbox = [
            'latMin' => (float) $chunk->getLatMin(),
            'latMax' => (float) $chunk->getLatMax(),
            'lngMin' => (float) $chunk->getLngMin(),
            'lngMax' => (float) $chunk->getLngMax(),
        ];

        $chosen_road = $this->pickWeightedRoad($roads, $seed);
        $pointNear = $seed->pointOnRoad($chosen_road);
        $typeNear = $types[$seed->nextInt(count($types))];

        // Choix pondéré rareté pour la 2e (sauvage).
        $typeWild = $types[$seed->nextInt(count($types))];
        $typeWild = $this->pickByTypeBias($types, ResourceBias::RARE, $seed, $typeWild);

        // Pour éviter doublon de type sur une chunk, si le sauvage a le même
        // id que le proche, le sauvage = le premier id différent disponible.
        if (count($types) > 1 && $typeNear->getId() === $typeWild->getId()) {
            foreach ($types as $candidate) {
                if ($candidate->getId() !== $typeNear->getId()) {
                    $typeWild = $candidate;
                    break;
                }
            }
        }

        // 2e point : aussi proche qu'une route non-ferry que possible.
        // Le dépôt "sauvage" reste lié à la route la plus proche (la contrainte
        // d'intégrité `road_id NOT NULL` l'impose), mais sa position est tirée
        // pour être maximale à des routes terrestres : l'utilisateur doit
        // fournir plus d'effort pour l'atteindre.
        $pointWild = $seed->pointAwayFromRoads($bbox, $roads);
        $nearestRoadForWild = $this->nearestRoad($pointWild, $roads);

        // 1 dépôt si 1 route, 2 si ≥ 2 routes.
        $depositCount = (count($roads) >= 2) ? 2 : 1;

        $deposits = [];
        $depositNear = new ResourceDeposit($typeNear, $this->deterministicRichness($seed));
        $depositNear->setLatitude($pointNear[0]);
        $depositNear->setLongitude($pointNear[1]);
        $depositNear->setRoad($chosen_road);
        $deposits[] = $depositNear;

        if ($depositCount === 2 && $nearestRoadForWild !== null) {
            $depositWild = new ResourceDeposit($typeWild, $this->deterministicRichness($seed));
            $depositWild->setLatitude($pointWild[0]);
            $depositWild->setLongitude($pointWild[1]);
            $depositWild->setRoad($nearestRoadForWild);
            $deposits[] = $depositWild;
        }

        return $deposits;
    }

    /**
     * Hash 64 bits déterministe du chunk via FNV-1a (en GMP pour rester
     * exactement sur 64 bits non signés au-delà de PHP_INT_MAX).
     */
    private function chunkSeed(Chunk $chunk): int
    {
        $key = sprintf('%.8F|%.8F', $chunk->getLatMin(), $chunk->getLngMin());
        // offset basis FNV-1a 64 bits, puis on travaille en GMP.
        $msk = gmp_init('0xFFFFFFFFFFFFFFFF', 16);
        $basis = gmp_init('0xcbf29ce484222325', 16);
        $prime = gmp_init('0x100000001b3', 16);

        $hash = $basis;
        for ($i = 0, $len = strlen($key); $i < $len; $i++) {
            $hash = gmp_xor($hash, gmp_init((string) ord($key[$i]), 10));
            $hash = gmp_and(gmp_mul($hash, $prime), $msk);
        }
        // Conversion vers un int signé PHP (si < PHP_INT_MAX) sinon tronqué —
        // c'est OK : le SplitMix64 accepte n'importe quel int comme seed.
        return (int) gmp_strval(gmp_and($hash, '0x7FFFFFFFFFFFFFFF'), 10);
    }

    /**
     * Choix pondéré d'une route : les segments "ferry" ont un poids divisé
     * par 2 par rapport aux routes terrestres, car les dépôts maritimes
     * n'existent pas (les ferries sont juste des points de passage). Les
     * highway importants (trunk/primary) ont un poids ×2.
     *
     * @param Road[] $roads
     */
    private function pickWeightedRoad(array $roads, SplitMix64 $seed): Road
    {
        $weights = [];
        $total = 0.0;
        foreach ($roads as $road) {
            $w = 1.0;
            $type = $road->getType();
            if (str_starts_with((string) $type, 'ferry')) {
                $w *= 0.5;
            } elseif (in_array($type, ['trunk', 'motorway', 'primary'], true)) {
                $w *= 2.0;
            }
            $weights[] = $w;
            $total += $w;
        }

        if ($total <= 0.0) {
            return $roads[0];
        }

        $target = $seed->nextFloat() * $total;
        $acc = 0.0;
        foreach ($roads as $i => $road) {
            $acc += $weights[$i];
            if ($acc >= $target) {
                return $road;
            }
        }
        return $roads[array_key_last($roads)];
    }

    private function nearestRoad(array $pt, array $roads): ?Road
    {
        $best = null;
        $bestDist = PHP_FLOAT_MAX;
        foreach ($roads as $road) {
            $d = $this->approxMeters($pt, $road);
            if ($d < $bestDist) {
                $bestDist = $d;
                $best = $road;
            }
        }
        return $best;
    }

    private function approxMeters(array $pt, Road $road): float
    {
        $min = PHP_FLOAT_MAX;
        foreach ($road->getPoints() as $i => $a) {
            $b = $road->getPoints()[$i + 1] ?? null;
            if ($b === null) {
                continue;
            }
            $d = $this->fastMeters($pt, [
                $a[0] + ($b[0] - $a[0]) * 0.5,
                $a[1] + ($b[1] - $a[1]) * 0.5,
            ]);
            if ($d < $min) {
                $min = $d;
            }
        }
        return $min;
    }

    private function pickByTypeBias(array $types, ResourceBias $bias, SplitMix64 $seed, ResourceType $fallback): ResourceType
    {
        $weighted = [];
        $total = 0;
        foreach ($types as $type) {
            $rarity = $type->getRarity() ?? 0;
            $weight = match ($bias) {
                ResourceBias::COMMON => match ($rarity) { 0 => 60, 1 => 30, default => 10 },
                ResourceBias::RARE   => match ($rarity) { 0 => 10, 1 => 30, default => 60 },
            };
            for ($w = 0; $w < $weight; $w++) {
                $weighted[] = $type;
            }
            $total += $weight;
        }

        if ($weighted === []) {
            return $fallback;
        }

        $idx = $seed->nextInt(count($weighted));
        return $weighted[$idx] ?? $fallback;
    }

    private function deterministicRichness(SplitMix64 $seed): float
    {
        // Même distribution que GenerateChunkService::generateRichness :
        //   10% → 0.6
        //   15% → 0.8
        //   35% → 1.0
        //   25% → 1.2
        //   15% → 1.4
        $roll = 1 + $seed->nextInt(100);
        return match (true) {
            $roll <= 10  => 0.6,
            $roll <= 25  => 0.8,
            $roll <= 60  => 1.0,
            $roll <= 85  => 1.2,
            default      => 1.4,
        };
    }

    /**
     * Distance minimale (mètres) d'un point à une route (distance min
     * à chaque segment). Approximation suffisante.
     */
    private function distanceToRoad(array $pt, Road $road): float
    {
        $min = PHP_FLOAT_MAX;
        $pts = $road->getPoints();
        for ($i = 0, $n = count($pts) - 1; $i < $n; $i++) {
            $d = $this->distanceToSegment($pt, $pts[$i], $pts[$i + 1]);
            if ($d < $min) {
                $min = $d;
            }
        }
        return $min;
    }

    /**
     * Distance approx. (non Haversine, mais suffisante pour comparaison)
     * en mètres du point au segment AB.
     */
    private function distanceToSegment(array $p, array $a, array $b): float
    {
        $dx = ($b[1] - $a[1]);
        $dy = ($b[0] - $a[0]);
        if ($dx === 0.0 && $dy === 0.0) {
            return $this->fastMeters($p, $a);
        }
        $t = (($p[1] - $a[1]) * $dx + ($p[0] - $a[0]) * $dy) / ($dx * $dx + $dy * $dy);
        $t = max(0.0, min(1.0, $t));
        $proj = [$a[0] + $t * $dy, $a[1] + $t * $dx];
        return $this->fastMeters($p, $proj);
    }

    /**
     * Distance approchée en mètres via échelles latitude/longitude.
     * Suffisante pour comparer.
     */
    private function fastMeters(array $a, array $b): float
    {
        $dLat = ($b[0] - $a[0]) * 111_000.0;
        $dLng = ($b[1] - $a[1]) * 111_000.0 * cos(deg2rad(($a[0] + $b[0]) / 2.0));
        return sqrt($dLat * $dLat + $dLng * $dLng);
    }
}

/**
 * Biais de sélection de ressources.
 */
enum ResourceBias
{
    /** Favorise les resources communes (rarity 0). */
    case COMMON;
    /** Favorise les resources rares (rarity ≥ 2). */
    case RARE;
}

/**
 * PRNG déterministe SplitMix64 — pas d'état global PHP.
 *
 * L'état 64 bits non signé ne tient pas dans un `int` de PHP (signé).
 * On le manipule via GMP (précision arbitraire) pour rester exactement
 * sur la spécification SplitMix64, y compris les constantes > 2^63.
 *
 * Méthodes : nextInt(max) et nextFloat().
 */
class SplitMix64
{
    // Constantes SplitMix64 (cf. http://xoshiro.di.unimi.it/splitmix64.c)
    private const C1  = '0x9E3779B97F4A7C15';
    private const C2  = '0xBF58476D1CE4E5B9';
    private const C3  = '0x94D049BB133111EB';
    private const MSK64 = '0xFFFFFFFFFFFFFFFF';

    /** État non signé 64 bits, stocké en tant que chaîne décimale GMP. */
    private string $state;

    public function __construct(int $seed)
    {
        // FNV mix initial pour casser les suites trop linéaires.
        $this->state = gmp_strval(gmp_and(
            gmp_xor(self::int64($seed), self::int64(self::C1)),
            self::int64(self::MSK64),
        ), 10);
    }

    /**
     * Entier dans [0, max).
     */
    public function nextInt(int $max): int
    {
        if ($max <= 0) {
            return 0;
        }
        // state += C1
        $this->state = gmp_strval(gmp_and(
            gmp_add(self::int64($this->state), self::int64(self::C1)),
            self::int64(self::MSK64),
        ), 10);

        $z = $this->state;
        // z = ((z ^ (z >> 30)) * C2) & MSK64
        $z = gmp_strval(gmp_and(
            gmp_mul(gmp_xor(self::int64($z), self::shr64($z, 30)), self::int64(self::C2)),
            self::int64(self::MSK64),
        ), 10);
        // z = ((z ^ (z >> 27)) * C3) & MSK64
        $z = gmp_strval(gmp_and(
            gmp_mul(gmp_xor(self::int64($z), self::shr64($z, 27)), self::int64(self::C3)),
            self::int64(self::MSK64),
        ), 10);
        $z = gmp_strval(gmp_xor(self::int64($z), self::shr64($z, 31)), 10);

        // Modulo sans biais significatif pour max << 2^64.
        $mod = gmp_strval(gmp_mod(self::int64($z), self::int64($max)), 10);
        return (int) $mod;
    }

    /**
     * Flottant dans [0, 1).
     */
    public function nextFloat(): float
    {
        // 30 bits de précision suffisent pour les points entre 0 et 1 degré.
        return $this->nextInt(1 << 30) / (1 << 30);
    }

    /**
     * Initialise l'état GMP depuis une chaîne décimale / entier PHP / hex.
     */
    private static function int64(int|string $v): \GMP
    {
        if (\is_int($v)) {
            return gmp_init($v < 0 ? sprintf('%u', $v) : (string) $v, 10);
        }
        $s = (string) $v;
        if (preg_match('/^0x[0-9a-f]+$/i', $s)) {
            return gmp_init($s, 16);
        }
        return gmp_init($s, 10);
    }

    /** Décalage droite non signé (équivalent (z >> n) sur un 64 bits non signé). */
    private static function shr64(\GMP|string $v, int $n): \GMP
    {
        return gmp_div(self::int64($v), gmp_pow(2, $n));
    }

    /**
     * Point aléatoire SUR la route, choisi déterministement.
     * @param Road $road
     * @return array{0:float, 1:float} [lat, lng]
     */
    public function pointOnRoad(Road $road): array
    {
        $pts = $road->getPoints();
        if ($pts === []) {
            return [0.0, 0.0];
        }
        if (count($pts) === 1) {
            return $pts[0];
        }
        // Choisir un segment, puis avancer dans ce segment.
        $segIdx = $this->nextInt(count($pts) - 1);
        $a = $pts[$segIdx];
        $b = $pts[$segIdx + 1];
        $t = $this->nextFloat();
        return [
            $a[0] + ($b[0] - $a[0]) * $t,
            $a[1] + ($b[1] - $a[1]) * $t,
        ];
    }

    /**
     * Point dans le bbox "éloigné" de toutes les routes.
     * Straténie par rejets déterministe : on tire 50 candidats, on garde
     * celui dont la distance min. à la route la plus proche est maximale.
     *
     * @param Road[] $roads
     * @param array{latMin:float, lngMin:float, latMax:float, lngMax:float} $bbox
     * @return array{0:float, 1:float}
     */
    public function pointAwayFromRoads(array $bbox, array $roads): array
    {
        $bestPt = [0.0, 0.0];
        $bestDist = -1.0;

        for ($k = 0; $k < 50; $k++) {
            $cand = [
                $this->lerp($bbox['latMin'], $bbox['latMax'], $this->nextFloat()),
                $this->lerp($bbox['lngMin'], $bbox['lngMax'], $this->nextFloat()),
            ];
            $min = PHP_FLOAT_MAX;
            foreach ($roads as $road) {
                $d = $this->distanceToRoad($cand, $road);
                if ($d < $min) {
                    $min = $d;
                }
            }
            if ($min > $bestDist) {
                $bestDist = $min;
                $bestPt = $cand;
            }
        }

        return $bestPt;
    }

    private function lerp(float $a, float $b, float $t): float
    {
        return $a + ($b - $a) * $t;
    }

    /**
     * Distance minimale (mètres) d'un point à une route (distance min
     * à chaque segment). Approximation suffisante.
     */
    private function distanceToRoad(array $pt, Road $road): float
    {
        $min = PHP_FLOAT_MAX;
        $pts = $road->getPoints();
        for ($i = 0, $n = count($pts) - 1; $i < $n; $i++) {
            $d = $this->distanceToSegment($pt, $pts[$i], $pts[$i + 1]);
            if ($d < $min) {
                $min = $d;
            }
        }
        return $min;
    }

    /**
     * Distance approx. (non Haversine, mais suffisante pour comparaison)
     * en mètres du point au segment AB.
     */
    private function distanceToSegment(array $p, array $a, array $b): float
    {
        $dx = ($b[1] - $a[1]);
        $dy = ($b[0] - $a[0]);
        if ($dx === 0.0 && $dy === 0.0) {
            return $this->fastMeters($p, $a);
        }
        $t = (($p[1] - $a[1]) * $dx + ($p[0] - $a[0]) * $dy) / ($dx * $dx + $dy * $dy);
        $t = max(0.0, min(1.0, $t));
        $proj = [$a[0] + $t * $dy, $a[1] + $t * $dx];
        return $this->fastMeters($p, $proj);
    }

    /**
     * Distance approchée en mètres via échelles latitude/longitude.
     * Suffisante pour comparer.
     */
    private function fastMeters(array $a, array $b): float
    {
        $dLat = ($b[0] - $a[0]) * 111_000.0;
        $dLng = ($b[1] - $a[1]) * 111_000.0 * cos(deg2rad(($a[0] + $b[0]) / 2.0));
        return sqrt($dLat * $dLat + $dLng * $dLng);
    }
}
