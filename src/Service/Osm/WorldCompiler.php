<?php

namespace App\Service\Osm;

use Psr\Log\LoggerInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Orchestrateur du pipeline de compilation OSM.
 *
 * Les phases CompilerPhase sont injectées (taggées `app.osm_compiler_phase`,
 * voir config/services.yaml) : ajouter une phase (ex. ForestCompiler) ne
 * nécessite aucune modification de cette classe (principe Open/Closed).
 */
final class WorldCompiler
{
    /**
     * @param iterable<CompilerPhase> $phases
     */
    public function __construct(
        private readonly iterable $phases,
        private readonly LoggerInterface $logger,
    ) {}

    /**
     * Compile les phases demandées.
     *
     * @return array<string, CompilationResult>
     */
    public function compile(SymfonyStyle $io, array $options): array
    {
        $phase = CompilePhase::tryFrom($options['phase'] ?? 'all') ?? CompilePhase::ALL;

        $context = new WorldContext(
            region: $options['region'] ?? 'all',
            tileSize: (float) ($options['tileSize'] ?? 0.5),
            batchSize: (int) ($options['batchSize'] ?? 2000),
            resume: (bool) ($options['resume'] ?? false),
            reset: (bool) ($options['reset'] ?? false),
            logger: $this->logger,
            startTime: new \DateTimeImmutable()
        );

        $stats = [];

        $phasesToRun = match ($phase) {
            CompilePhase::ALL => [
                CompilePhase::NORMALIZE,
                CompilePhase::GRAPH,
                CompilePhase::SPATIAL,
                CompilePhase::GAMEPLAY,
            ],
            default => [$phase],
        };

        // Index des phases injectées par valeur de CompilePhase
        $phaseMap = [];
        foreach ($this->phases as $compilerPhase) {
            $phaseMap[$compilerPhase->phase()->value] = $compilerPhase;
        }

        foreach ($phasesToRun as $phaseToRun) {
            $compilerPhase = $phaseMap[$phaseToRun->value] ?? null;

            if ($compilerPhase === null) {
                $io->warning(sprintf('Phase `%s` non configurée (aucun CompilerPhase injecté).', $phaseToRun->value));
                continue;
            }

            $result = $compilerPhase->compile($context);
            $stats[$phaseToRun->value] = $result;

            $io->writeln(sprintf(
                '  ✓ %s: %d segments, %d arêtes, %d cellules (%.1fs)',
                $phaseToRun->value,
                $result?->segmentsCreated ?? 0,
                $result?->edgesCreated ?? 0,
                $result?->cellsCreated ?? 0,
                $result?->duration ?? 0
            ));
        }

        return $stats;
    }
}
