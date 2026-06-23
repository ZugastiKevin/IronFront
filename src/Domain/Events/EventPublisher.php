<?php

namespace App\Domain\Events;

use App\Entity\Player;

interface EventPublisher
{
    public function publish(Player $player, string $type, array $payload = []): void;
}