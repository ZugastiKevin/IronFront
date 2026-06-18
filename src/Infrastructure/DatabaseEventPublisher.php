<?php

namespace App\Infrastructure;

use App\Domain\Events\EventPublisher;
use Doctrine\DBAL\Connection;

class DatabaseEventPublisher implements EventPublisher
{
    public function __construct(private Connection $db) {}

    public function publish(string $topic, array $payload): void
    {
        $this->db->insert('event_queue', [
            'topic' => $topic,
            'payload' => json_encode($payload),
            'created_at' => (new \DateTime())->format('Y-m-d H:i:s'),
            'processed' => 0
        ]);
    }
}