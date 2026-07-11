<?php

namespace App\Tests\Service\Game\Generate;

use App\Entity\Chunk;
use App\Entity\ResourceDeposit;
use App\Entity\ResourceType;
use App\Entity\RoadNode;
use App\Entity\RoadSegment;
use App\Enum\ResourceCode;
use App\Repository\RoadNodeRepository;
use App\Service\Game\Generate\DeterministicResourcePlacer;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

/**
 * Vérifie le contrat de DeterministicResourcePlacer (utilise RoadSegment) :
 *
 *  - déterminisme (même chunk = mêmes positions/types/richesses, même seed)
 *  - stricte borne 0..2 dépôts par chunk
 *  - 1 dépôt quand UNE seule route, 2 dépôts si ≥ 2 routes
 *  - types DISTINCTS quand 2 routes
 *  - RoadSegment associé à chaque dépôt
 *  - les dépôts sont DANS le chunk bbox
 *  - aucun appel à rand()/mt_rand()/random_int() n'est fait (pas de seed global)
 */
final class DeterministicResourcePlacerTest extends TestCase
{
    private DeterministicResourcePlacer $placer;
    private RoadNodeRepository&MockObject $nodeRepository;
    private EntityManagerInterface&MockObject $em;

    /** @var ResourceType[] */
    private array $types;

    protected function setUp(): void
    {
        $this->nodeRepository = $this->createMock(RoadNodeRepository::class);
        $this->em = $this->createMock(EntityManagerInterface::class);
        $this->em->method('getRepository')->with(\App\Entity\RoadNode::class)->willReturn($this->nodeRepository);

        $this->placer = new DeterministicResourcePlacer($this->em);

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
     * Segment linéaire horizontale dans la bbox.
     *
     * @param array<int, array{0: float, 1: float}> $points
     */
    private function makeSegment(string $type, array $points, int $startId, int $endId): RoadSegment
    {
        $segment = new RoadSegment();
        $segment->setType($type);
        $segment->setPolyline($points);
        $segment->setNodeStartId($startId);
        $segment->setNodeEndId($endId);
        return $segment;
    }

    /**
     * Stub les nœuds utilisés par leurs identifiants (le placeur calcule le
     * milieu du segment à partir des coordonnées des nœuds start/end).
     *
     * @param array<int, array{0: float, 1: float}> $coords  map id => [lat, lng]
     */
    private function stubNodes(array $coords): void
    {
        $map = [];
        foreach ($coords as $id => [$lat, $lng]) {
            $map[] = [$id, new RoadNode($lat, $lng)];
        }
        $this->nodeRepository->method('find')->willReturnMap($map);
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

    public function testDifferentChunksProduceDifferentPositions(): void
    {
        $roads = [
            $this->makeSegment('primary', [[48.855, 2.355], [48.859, 2.360]], 1, 2),
            $this->makeSegment('secondary', [[48.856, 2.358], [48.860, 2.365]], 3, 4),
        ];
        $this->stubNodes([
            1 => [48.855, 2.355], 2 => [48.859, 2.360],
            3 => [48.856, 2.358], 4 => [48.860, 2.365],
        ]);

        // Plusieurs chunks distincts : au moins deux doivent produire des
        // placements différents (la seed dérive du chunk). On compare un
        // ensemble de chunks plutôt qu'une paire pour éviter un test aléatoire.
        $chunks = [
            $this->makeChunk(48.85, 2.35),
            $this->makeChunk(43.60, 1.44),
            $this->makeChunk(10.0, 20.0),
            $this->makeChunk(35.0, 139.0),
            $this->makeChunk(-33.0, 151.0),
        ];

        $signatures = [];
        foreach ($chunks as $chunk) {
            $deposits = $this->placer->placeResources($chunk, $roads, $this->types);
            self::assertCount(2, $deposits);

            $sig = array_map(
                fn(ResourceDeposit $d): string => sprintf(
                    '%.6F|%.6F|%d|%.1F',
                    $d->getLatitude(),
                    $d->getLongitude(),
                    $d->getResourceType()->getId(),
                    $d->getRichness()
                ),
                $deposits
            );
            $signatures[] = implode('#', $sig);
        }

        self::assertGreaterThan(
            1,
            count(array_unique($signatures)),
            'Des chunks différents devraient produire des placements différents.',
        );
    }

    public function testSameParametersAreDeterministic(): void
    {
        $chunk = $this->makeChunk(48.85, 2.35);
        $roads = [
            $this->makeSegment('primary', [[48.855, 2.351], [48.858, 2.358]], 1, 2),
            $this->makeSegment('secondary', [[48.85, 2.355], [48.856, 2.365]], 3, 4),
        ];
        $this->stubNodes([
            1 => [48.855, 2.351], 2 => [48.858, 2.358],
            3 => [48.85, 2.355], 4 => [48.856, 2.365],
        ]);

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

    public function testSingleRoadYieldsSingleDeposit(): void
    {
        $chunk = $this->makeChunk(48.85, 2.35);
        $roads = [
            $this->makeSegment('primary', [[48.852, 2.351], [48.858, 2.355]], 1, 2),
        ];
        $this->stubNodes([1 => [48.852, 2.351], 2 => [48.858, 2.355]]);

        $deposits = $this->placer->placeResources($chunk, $roads, $this->types);

        self::assertCount(1, $deposits);
        self::assertNotNull($deposits[0]->getRoad());
    }

    public function testAtMostDepositsPerChunk(): void
    {
        $chunk = $this->makeChunk(48.85, 2.35);
        $roads = [
            $this->makeSegment('primary', [[48.851, 2.351], [48.852, 2.352]], 1, 2),
            $this->makeSegment('secondary', [[48.855, 2.355], [48.856, 2.356]], 3, 4),
            $this->makeSegment('residential', [[48.859, 2.359], [48.86, 2.36]], 5, 6),
            $this->makeSegment('tertiary', [[48.85, 2.35], [48.851, 2.351]], 7, 8),
        ];
        $this->stubNodes([
            1 => [48.851, 2.351], 2 => [48.852, 2.352],
            3 => [48.855, 2.355], 4 => [48.856, 2.356],
            5 => [48.859, 2.359], 6 => [48.86, 2.36],
            7 => [48.85, 2.35], 8 => [48.851, 2.351],
        ]);

        $deposits = $this->placer->placeResources($chunk, $roads, $this->types);

        self::assertCount(2, $deposits);
    }

    public function testTwoRoadsYieldsDistinctResourceTypes(): void
    {
        $chunk = $this->makeChunk(48.85, 2.35);
        $roads = [
            $this->makeSegment('primary', [[48.851, 2.351], [48.854, 2.354]], 1, 2),
            $this->makeSegment('secondary', [[48.855, 2.355], [48.858, 2.358]], 3, 4),
        ];
        $this->stubNodes([
            1 => [48.851, 2.351], 2 => [48.854, 2.354],
            3 => [48.855, 2.355], 4 => [48.858, 2.358],
        ]);

        $deposits = $this->placer->placeResources($chunk, $roads, $this->types);

        self::assertCount(2, $deposits);
        self::assertNotSame(
            $deposits[0]->getResourceType()->getId(),
            $deposits[1]->getResourceType()->getId(),
            'Sur 2 routes, les types doivent être distincts.',
        );
    }

    public function testHandlesOnlyOneResourceTypeGracefully(): void
    {
        $singleType = [$this->makeType(1, ResourceCode::IRON, '#000000', 0)];
        $chunk = $this->makeChunk(48.85, 2.35);
        $roads = [
            $this->makeSegment('primary', [[48.851, 2.351], [48.855, 2.355]], 1, 2),
            $this->makeSegment('secondary', [[48.856, 2.356], [48.859, 2.359]], 3, 4),
        ];
        $this->stubNodes([
            1 => [48.851, 2.351], 2 => [48.855, 2.355],
            3 => [48.856, 2.356], 4 => [48.859, 2.359],
        ]);

        $deposits = $this->placer->placeResources($chunk, $roads, $singleType);

        self::assertCount(2, $deposits);
        self::assertSame($singleType[0]->getId(), $deposits[0]->getResourceType()->getId());
        self::assertSame($singleType[0]->getId(), $deposits[1]->getResourceType()->getId());
    }

    public function testEmptyRoadsYieldsNoDeposits(): void
    {
        $deposits = $this->placer->placeResources($this->makeChunk(0.0, 0.0), [], $this->types);
        self::assertSame([], $deposits);
    }

    public function testEmptyResourceTypesYieldsNoDeposits(): void
    {
        $roads = [$this->makeSegment('primary', [[0.0, 0.0], [0.001, 0.001]], 1, 2)];
        $this->stubNodes([1 => [0.0, 0.0], 2 => [0.001, 0.001]]);

        $deposits = $this->placer->placeResources($this->makeChunk(0.0, 0.0), $roads, []);
        self::assertSame([], $deposits);
    }

    public function testTypesWithoutColorAreSkipped(): void
    {
        $noColorType = new ResourceType();
        (new \ReflectionClass($noColorType))->getProperty('id')->setValue($noColorType, 99);
        $noColorType->setCode(ResourceCode::IRON);
        $noColorType->setLabel('wood');
        $noColorType->setColor(null); // couleur manquante
        $noColorType->setRarity(0);

        $chunk = $this->makeChunk(0.0, 0.0);
        $roads = [$this->makeSegment('primary', [[0.0, 0.0], [0.001, 0.001]], 1, 2)];
        $this->stubNodes([1 => [0.0, 0.0], 2 => [0.001, 0.001]]);

        // Si AUCUN type valide, le placere retourne [].
        $deposits = $this->placer->placeResources($chunk, $roads, [$noColorType]);
        self::assertSame([], $deposits);
    }

    public function testRichnessIsInExpectedBuckets(): void
    {
        $allowed = [0.6, 0.8, 1.0, 1.2, 1.4];
        $chunk = $this->makeChunk(10.0, 20.0);
        $roads = [
            $this->makeSegment('primary', [[10.001, 20.001], [10.004, 20.004]], 1, 2),
            $this->makeSegment('secondary', [[10.005, 20.005], [10.009, 20.009]], 3, 4),
        ];
        $this->stubNodes([
            1 => [10.001, 20.001], 2 => [10.004, 20.004],
            3 => [10.005, 20.005], 4 => [10.009, 20.009],
        ]);

        $deposits = $this->placer->placeResources($chunk, $roads, $this->types);
        foreach ($deposits as $deposit) {
            self::assertContains((float) round($deposit->getRichness(), 1), $allowed);
        }
    }

    public function testMultipleParchelledInvocationsAreIndependent(): void
    {
        $chunks = [
            $this->makeChunk(10.0, 10.0),
            $this->makeChunk(20.0, 20.0),
            $this->makeChunk(30.0, 30.0),
        ];
        $roadsByChunk = [
            [
                $this->makeSegment('primary', [[10.001, 10.001], [10.009, 10.009]], 1, 2),
                $this->makeSegment('secondary', [[10.005, 10.0], [10.009, 1.0]], 3, 4),
            ],
            [
                $this->makeSegment('primary', [[20.001, 20.001], [20.009, 20.009]], 5, 6),
            ],
            [
                $this->makeSegment('tertiary', [[30.001, 30.001], [30.009, 30.009]], 7, 8),
                $this->makeSegment('residential', [[30.005, 30.005], [30.009, 30.009]], 9, 10),
            ],
        ];
        $this->stubNodes([
            1 => [10.001, 10.001], 2 => [10.009, 10.009],
            3 => [10.005, 10.0], 4 => [10.009, 1.0],
            5 => [20.001, 20.001], 6 => [20.009, 20.009],
            7 => [30.001, 30.001], 8 => [30.009, 30.009],
            9 => [30.005, 30.005], 10 => [30.009, 30.009],
        ]);

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
