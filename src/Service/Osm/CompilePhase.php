<?php

namespace App\Service\Osm;

/**
 * Phases du pipeline de compilation OSM.
 */
enum CompilePhase: string
{
    case RAW = 'raw';
    case NORMALIZE = 'normalize';
    case GRAPH = 'graph';
    case SPATIAL = 'spatial';
    case GAMEPLAY = 'gameplay';
    case ALL = 'all';
}