<?php

namespace App\Domain\Events;

interface EventPublisher
{
    public function publish(string $topic, array $payload): void;
}