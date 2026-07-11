<?php

namespace App\Service\Game\Generate;

use App\Entity\Chunk;
use App\Entity\ResourceDeposit;
use App\Entity\ResourceType;
use App\Entity\RoadSegment;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Place au maximum 2 ressources par chunk — de façon DÉTERMINISTE.
 *
 * Adapté pour utiliser RoadSegment au lieu de Road.
 */
class DeterministicResourcePlacer
{
    public function __construct(
        private readonly EntityManagerInterface $em,
    ) {}

    /**
     * @param RoadSegment[] $segments
     * @param ResourceType[] $resourceTypes
     * @return ResourceDeposit[]
     */
    public function placeResources(Chunk $chunk, array $segments, array $resourceTypes): array
    {
        if ($segments === [] || $resourceTypes === []) {
            return [];
        }

        $seed = new SplitMix64($this->chunkSeed($chunk));

        $types = array_values(array_filter($resourceTypes, fn(ResourceType $rt) => !empty($rt->getColor())));
        if ($types === []) {
            return [];
        }

        // 1 dépôt par segment disponible (max 2)
        $depositCount = min(2, count($segments));

        $deposits = [];
        $usedTypes = [];

        for ($i = 0; $i < $depositCount; $i++) {
            $segment = $segments[$seed->nextInt(count($segments))];
            $point = $this->getSegmentMidpoint($segment);

            // Choisir un type différent si possible
            $type = $this->pickResourceType($types, $usedTypes, $seed);
            $usedTypes[] = $type->getId();

            $deposit = new ResourceDeposit($type, $this->deterministicRichness($seed));
            $deposit->setLatitude($point[0]);
            $deposit->setLongitude($point[1]);
            $deposit->setRoad($segment);

            $deposits[] = $deposit;
        }

        return $deposits;
    }

    /**
     * Point au milieu du segment.
     */
    private function getSegmentMidpoint(RoadSegment $segment): array
    {
        $nodeRepo = $this->em->getRepository(\App\Entity\RoadNode::class);

        $start = $nodeRepo->find($segment->getNodeStartId());
        $end = $nodeRepo->find($segment->getNodeEndId());

        if (!$start || !$end) {
            return [0.0, 0.0];
        }

        return [
            ($start->getLat() + $end->getLat()) / 2,
            ($start->getLng() + $end->getLng()) / 2,
        ];
    }

    private function pickResourceType(array $types, array $used, SplitMix64 $seed): ResourceType
    {
        $available = array_values(array_filter($types, fn($t) => !in_array($t->getId(), $used)));

        if ($available === []) {
            return $types[$seed->nextInt(count($types))];
        }

        return $available[$seed->nextInt(count($available))];
    }

    private function deterministicRichness(SplitMix64 $seed): float
    {
        $roll = 1 + $seed->nextInt(100);
        return match (true) {
            $roll <= 10  => 0.6,
            $roll <= 25  => 0.8,
            $roll <= 60  => 1.0,
            $roll <= 85  => 1.2,
            default      => 1.4,
        };
    }

    private function chunkSeed(Chunk $chunk): int
    {
        $key = sprintf('%.8F|%.8F', $chunk->getLatMin(), $chunk->getLngMin());
        $msk = gmp_init('0xFFFFFFFFFFFFFFFF', 16);
        $basis = gmp_init('0xcbf29ce484222325', 16);
        $prime = gmp_init('0x100000001b3', 16);

        $hash = $basis;
        for ($i = 0, $len = strlen($key); $i < $len; $i++) {
            $hash = gmp_xor($hash, gmp_init((string) ord($key[$i]), 10));
            $hash = gmp_and(gmp_mul($hash, $prime), $msk);
        }

        return (int) gmp_strval(gmp_and($hash, '0x7FFFFFFFFFFFFFFF'), 10);
    }
}