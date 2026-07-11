<?php

namespace App\Service\Osm;

/**
 * Interface pour une phase de compilation OSM.
 */
interface CompilerPhase
{
    /**
     * Exécute la phase de compilation.
     */
    public function compile(WorldContext $context): CompilationResult;

    /**
     * Identifiant de la phase (permet le câblage injecté / Open-Closed).
     */
    public function phase(): CompilePhase;
}