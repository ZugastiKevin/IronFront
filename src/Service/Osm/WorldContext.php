<?php

namespace App\Service\Osm;

use Psr\Log\LoggerInterface;

/**
 * Contexte partagé entre toutes les phases de compilation.
 */
final class WorldContext
{
    public const VERSION = 'ironfront-1.0';

    public function __construct(
        public readonly LoggerInterface $logger,
        public readonly \DateTimeImmutable $startTime,
        public readonly string $region = 'all',
        public readonly float $tileSize = 0.5,
        public readonly int $batchSize = 2000,
        public readonly bool $resume = false,
        public readonly bool $reset = false,
        public readonly string $version = self::VERSION,
    ) {}
}