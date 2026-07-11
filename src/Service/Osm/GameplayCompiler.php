<?php

namespace App\Service\Osm;

use App\Entity\RoadSegment;
use App\Repository\RoadSegmentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;

/**
 * Phase 9 : Compilation des métadonnées gameplay.
 * Implémente CompilerPhase.
 */
final class GameplayCompiler implements CompilerPhase
{
    public function __construct(
        private readonly RoadSegmentRepository $segmentRepository,
        private readonly EntityManagerInterface $em,
        private readonly LoggerInterface $logger,
    ) {}

    /**
     * Implémente CompilerPhase - utilise WorldContext.
     */
    public function compile(WorldContext $context): CompilationResult
    {
        $startTime = microtime(true);
        $stats = $this->compileGameplay($context->batchSize);

        $duration = microtime(true) - $startTime;

        return new CompilationResult(
            segmentsCreated: $stats['segments_compiled'] ?? 0,
            duration: $duration,
            memoryPeak: memory_get_peak_usage(true),
        );
    }

    public function phase(): CompilePhase
    {
        return CompilePhase::GAMEPLAY;
    }

    /**
     * Compile les propriétés gameplay sur les segments (cursor-based).
     */
    private function compileGameplay(int $batchSize): array
    {
        $totalCompiled = 0;
        $lastId = 0;

        while (true) {
            $segments = $this->fetchSegments($batchSize, $lastId);

            if (empty($segments)) {
                break;
            }

            $this->em->beginTransaction();

            try {
                foreach ($segments as $segment) {
                    $lastId = max($lastId, $segment->getId());

                    // Calculer les propriétés gameplay
                    $this->applyGameplayProperties($segment);
                }

                $this->em->flush();
                $this->em->clear();
                $this->em->commit();

                $totalCompiled += count($segments);

            } catch (\Throwable $e) {
                $this->em->rollback();
                throw $e;
            }

            $this->logger->info(sprintf('Gameplay : %d segments traités', $totalCompiled));
        }

        return [
            'segments_compiled' => $totalCompiled,
        ];
    }

    /**
     * Applique les propriétés gameplay à un segment.
     */
    private function applyGameplayProperties(RoadSegment $segment): void
    {
        $props = RoadSegment::TYPE_MAPPING[$segment->getType()] ?? [];

        // Movement cost = facteur * longueur
        $costFactor = $props['cost_factor'] ?? 1.0;
        $segment->setCost($segment->getLength() * $costFactor);

        // Note: d'autres propriétés peuvent être ajoutées ici
        // (max_speed, tank_speed, visibility_bonus, cover, etc.)
    }

    /**
     * Récupère les segments par curseur ID.
     */
    private function fetchSegments(int $limit, int $lastId): array
    {
        return $this->segmentRepository->createQueryBuilder('s')
            ->where('s.id > :lastId')
            ->setParameter('lastId', $lastId)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }

    /**
     * Statistiques par type de route.
     */
    public function getStatsByType(): array
    {
        return $this->em->getConnection()->fetchAllAssociative(
            'SELECT type, COUNT(*) as count FROM road_segment GROUP BY type ORDER BY count DESC'
        );
    }
}