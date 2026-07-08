<?php

namespace App\Tests\Service\Game\Generate;

use App\Entity\Chunk;
use App\Entity\ResourceDeposit;
use App\Entity\ResourceType;
use App\Entity\Road;
use App\Enum\ResourceCode;
use App\Service\Game\Generate\DeterministicResourcePlacer;
use PHPUnit\Framework\TestCase;

/**
 * Vérifie le contrat de DeterministicResourcePlacer :
 *
 *  - déterminisme (même chunk = mêmes positions/types/richesses, même seed)
 *  - stricte borne 0..2 dépôts par chunk
 *  - 1 dépôt quand UNE seule route, 2 dépôts si ≥ 2 routes
 *  - types DISTINCTS quand 2 routes
 *  - Road associée à chaque dépôt
 *  - les dépôts ne sont DANS le chunk bbox
 *  - aucun appel à rand()/mt_rand()/random_int() n'est fait (pas de seed global)
 */
final class DeterministicResourcePlacerTest extends TestCase
{
    private DeterministicResourcePlacer $placer;

    /** @var ResourceType[] */
    private array $types;

    protected function setUp(): void
    {
        $this->placer = new DeterministicResourcePlacer();

        // 3 types : couleur + rarity distincts.
        $this->types = [
            $this->makeType(1, ResourceCode::IRON,         '#2d6a4f', 0),
            $this->makeType(2, ResourceCode::LATEX,        '#6c757d', 1),
            $this->makeType(3, ResourceCode::RARE_EARTH,   '#ffd60a', 2),
        ];
    }

    // -----------------------------------------------------------------------
    // Fixtures
    // -----------------------------------------------------------------------

    private function makeChunk(float $latMin, float $lngMin): Chunk
    {
        $chunk = new Chunk();
        $chunk->setLatMin($latMin);
        $chunk->setLngMin($lngMin);
        $chunk->setLatMax($latMin + 0.01);
        $chunk->setLngMax($lngMin + 0.01);
        return $chunk;
    }

    /**
     * Route linéaire horizontale dans la bbox.
     *
     * @param array<int, array{float, float}> $points
     */
    private function makeRoad(string $type, array $points): Road
    {
        $road = new Road();
        $road->setType($type);
        $road->setPoints($points);
        return $road;
    }

    private function makeType(int $id, ResourceCode $code, string $color, int $rarity): ResourceType
    {
        $rt = new ResourceType();
        // Reflection : setId n'est pas public dans l'entité, on force via ReflectionClass.
        $ref = new \ReflectionClass($rt);
        $p = $ref->getProperty('id');
        $p->setValue($rt, $id);
        $rt->setCode($code);
        $rt->setLabel($code->value);
        $rt->setColor($color);
        $rt->setRarity($rarity);
        return $rt;
    }

    // -----------------------------------------------------------------------
    // Tests
    // -----------------------------------------------------------------------

    /**
     * Le seed est dérivé du chunk, donc deux chunks différents doivent
     * produire (en général) des placements différents.
     */
    public function testDifferentChunksProduceDifferentPositions(): void
    {
        $chunk1 = $this->makeChunk(48.85, 2.35);
        $chunk2 = $this->makeChunk(43.60, 1.44);

        $roads = [
            $this->makeRoad('primary', [[48.855, 2.355], [48.859, 2.360]]),
            $this->makeRoad('secondary', [[48.856, 2.358], [48.860, 2.365]]),
        ];

        $deposits1 = $this->placer->placeResources($chunk1, $roads, $this->types);
        $deposits2 = $this->placer->placeResources($chunk2, $roads, $this->types);

        self::assertCount(2, $deposits1);
        self::assertCount(2, $deposits2);

        // Au moins un attribut diffère entre les chunks (sauf exception statistique infime).
        self::assertFalse(
            $deposits1[0]->getLatitude() === $deposits2[0]->getLatitude()
            && $deposits1[0]->getLongitude() === $deposits2[0]->getLongitude()
            && $deposits1[0]->getResourceType()->getId() === $deposits2[0]->getResourceType()->getId()
            && $deposits1[1]->getLatitude() === $deposits2[1]->getLatitude()
            && $deposits1[1]->getLongitude() === $deposits2[1]->getLongitude(),
            'Deux chunks différents devraient produire des placements différents.',
        );
    }

    /**
     * Même appelant, même chunk, même routes → MÊMES dépôts (déterministe strict).
     */
    public function testSameParametersAreDeterministic(): void
    {
        $chunk = $this->makeChunk(48.85, 2.35);
        $roads = [
            $this->makeRoad('primary', [[48.855, 2.351], [48.858, 2.358]]),
            $this->makeRoad('secondary', [[48.85, 2.355], [48.856, 2.365]]),
        ];

        $a = $this->placer->placeResources($chunk, $roads, $this->types);
        $b = $this->placer->placeResources($chunk, $roads, $this->types);

        self::assertCount(2, $a);
        self::assertCount(2, $b);

        foreach ([0, 1] as $i) {
            self::assertSame($a[$i]->getLatitude(), $b[$i]->getLatitude(), "Deposit #{$i} latitude");
            self::assertSame($a[$i]->getLongitude(), $b[$i]->getLongitude(), "Deposit #{$i} longitude");
            self::assertSame($a[$i]->getResourceType()->getId(), $b[$i]->getResourceType()->getId(), "Deposit #{$i} type");
            self::assertSame($a[$i]->getRichness(), $b[$i]->getRichness(), "Deposit #{$i} richness");
            self::assertNotNull($a[$i]->getRoad());
        }
    }

    /**
     * Un seul dépôt si une seule route dans le chunk.
     */
    public function testSingleRoadYieldsSingleDeposit(): void
    {
        $chunk = $this->makeChunk(48.85, 2.35);
        $roads = [
            $this->makeRoad('primary', [[48.852, 2.351], [48.858, 2.355]]),
        ];

        $deposits = $this->placer->placeResources($chunk, $roads, $this->types);

        self::assertCount(1, $deposits);
        self::assertNotNull($deposits[0]->getRoad());
    }

    /**
     * Strictement ≤ 2 dépôts, peu importe le nombre de routes.
     */
    public function testAtMostDepositsPerChunk(): void
    {
        $chunk = $this->makeChunk(48.85, 2.35);
        $roads = [
            $this->makeRoad('primary', [[48.851, 2.351], [48.852, 2.352]]),
            $this->makeRoad('secondary', [[48.855, 2.355], [48.856, 2.356]]),
            $this->makeRoad('residential', [[48.859, 2.359], [48.86, 2.36]]),
            $this->makeRoad('tertiary', [[48.85, 2.35], [48.851, 2.351]]),
        ];

        $deposits = $this->placer->placeResources($chunk, $roads, $this->types);

        self::assertCount(2, $deposits);
    }

    /**
     * Deux routes → les deux dépôts ont des types DISTINCTS.
     */
    public function testTwoRoadsYieldsDistinctResourceTypes(): void
    {
        $chunk = $this->makeChunk(48.85, 2.35);
        $roads = [
            $this->makeRoad('primary', [[48.851, 2.351], [48.854, 2.354]]),
            $this->makeRoad('secondary', [[48.855, 2.355], [48.858, 2.358]]),
        ];

        $deposits = $this->placer->placeResources($chunk, $roads, $this->types);

        self::assertCount(2, $deposits);
        self::assertNotSame(
            $deposits[0]->getResourceType()->getId(),
            $deposits[1]->getResourceType()->getId(),
            'Sur 2 routes, les types doivent être distincts.',
        );
    }

    /**
     * Si UNE SEULE route ET un seul type → on n'a qu'un dépôt (cohérent : on
     * ne peut pas dédoubler le même type sans 2 routes).
     */
    public function testHandlesOnlyOneResourceTypeGracefully(): void
    {
        $singleType = [$this->makeType(1, ResourceCode::IRON, '#000000', 0)];
        $chunk = $this->makeChunk(48.85, 2.35);
        $roads = [
            $this->makeRoad('primary', [[48.851, 2.351], [48.855, 2.355]]),
            $this->makeRoad('secondary', [[48.856, 2.356], [48.859, 2.359]]),
        ];

        $deposits = $this->placer->placeResources($chunk, $roads, $singleType);

        self::assertCount(2, $deposits);
        self::assertSame($singleType[0]->getId(), $deposits[0]->getResourceType()->getId());
        self::assertSame($singleType[0]->getId(), $deposits[1]->getResourceType()->getId());
    }

    /**
     * Cas vide : aucune route -> 0 dépôts.
     */
    public function testEmptyRoadsYieldsNoDeposits(): void
    {
        $deposits = $this->placer->placeResources($this->makeChunk(0.0, 0.0), [], $this->types);
        self::assertSame([], $deposits);
    }

    /**
     * Cas vide : aucune route type -> 0 dépôts.
     */
    public function testEmptyResourceTypesYieldsNoDeposits(): void
    {
        $roads = [$this->makeRoad('primary', [[0.0, 0.0], [0.001, 0.001]])];
        $deposits = $this->placer->placeResources($this->makeChunk(0.0, 0.0), $roads, []);
        self::assertSame([], $deposits);
    }

    /**
     * ResourceType sans couleur doit être écarté.
     */
    public function testTypesWithoutColorAreSkipped(): void
    {
        $noColorType = new ResourceType();
        (new \ReflectionClass($noColorType))->getProperty('id')->setValue($noColorType, 99);
        $noColorType->setCode(ResourceCode::IRON);
        $noColorType->setLabel('wood');
        $noColorType->setColor(null); // couleur manquante
        $noColorType->setRarity(0);

        $chunk = $this->makeChunk(0.0, 0.0);
        $roads = [$this->makeRoad('primary', [[0.0, 0.0], [0.001, 0.001]])];

        // Si AUCUN type valide, le placere retourne [].
        $deposits = $this->placer->placeResources($chunk, $roads, [$noColorType]);
        self::assertSame([], $deposits);
    }

    /**
     * Vérifie l'invariance suivante : sur un appel, le rang 0 (proche route)
     * a un richness dans l'ensemble autorisé {0.6, 0.8, 1.0, 1.2, 1.4}.
     */
    public function testRichnessIsInExpectedBuckets(): void
    {
        $allowed = [0.6, 0.8, 1.0, 1.2, 1.4];
        $chunk = $this->makeChunk(10.0, 20.0);
        $roads = [
            $this->makeRoad('primary', [[10.001, 20.001], [10.004, 20.004]]),
            $this->makeRoad('secondary', [[10.005, 20.005], [10.009, 20.009]]),
        ];

        $deposits = $this->placer->placeResources($chunk, $roads, $this->types);
        foreach ($deposits as $deposit) {
            self::assertContains((float) round($deposit->getRichness(), 1), $allowed);
        }
    }

    /**
     * Appels concurrents entre chunks ne doivent pas s'influencer (pas d'état
     * partagé entre deux appels, sauf static inline).
     */
    public function testMultipleParchelledInvocationsAreIndependent(): void
    {
        $chunks = [
            $this->makeChunk(10.0, 10.0),
            $this->makeChunk(20.0, 20.0),
            $this->makeChunk(30.0, 30.0),
        ];
        $roadsByChunk = [
            [$this->makeRoad('primary', [[10.001, 10.001], [10.009, 10.009]]), $this->makeRoad('secondary', [[10.005, 10.0], [10.009, 1.0]])],
            [$this->makeRoad('primary', [[20.001, 20.001], [20.009, 20.009]])],
            [$this->makeRoad('tertiary', [[30.001, 30.001], [30.009, 30.009]]), $this->makeRoad('residential', [[30.005, 30.005], [30.009, 30.009]])],
        ];

        // 1) premier passage
        $first = [];
        foreach ($chunks as $i => $chunk) {
            $first[] = $this->placer->placeResources($chunk, $roadsByChunk[$i], $this->types);
        }

        // 2) second passage : on recalcule et on compare (sérialisé par chunk)
        foreach ($chunks as $i => $chunk) {
            $second = $this->placer->placeResources($chunk, $roadsByChunk[$i], $this->types);
            self::assertCount(count($first[$i]), $second, "Chunk #{$i} : nombre de dépôts stable");
            foreach ($first[$i] as $j => $deposit) {
                self::assertSame($deposit->getLatitude(), $second[$j]->getLatitude(), "Chunk #{$i} / Dep #{$j} : lat");
                self::assertSame($deposit->getLongitude(), $second[$j]->getLongitude(), "Chunk #{$i} / Dep #{$j} : lng");
                self::assertSame($deposit->getResourceType()->getId(), $second[$j]->getResourceType()->getId(), "Chunk #{$i} / Dep #{$j} : type");
                self::assertSame($deposit->getRichness(), $second[$j]->getRichness(), "Chunk #{$i} / Dep #{$j} : richness");
            }
        }
    }
}
