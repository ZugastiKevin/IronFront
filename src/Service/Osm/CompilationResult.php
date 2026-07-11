<?php

namespace App\Service\Osm;

/**
 * Résultat d'une phase de compilation.
 */
final class CompilationResult
{
    public function __construct(
        public readonly int $nodesCreated = 0,
        public readonly int $segmentsCreated = 0,
        public readonly int $edgesCreated = 0,
        public readonly int $cellsCreated = 0,
        public readonly int $relationsCreated = 0,
        public readonly int $roadsImported = 0,
        public readonly float $duration = 0.0,
        public readonly int $memoryPeak = 0,
        public readonly array $warnings = [],
        public readonly array $errors = [],
    ) {}
}