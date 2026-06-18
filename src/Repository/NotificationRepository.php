<?php

namespace App\Repository;

use Doctrine\DBAL\Connection;

final readonly class NotificationRepository
{
    public function __construct(
        private Connection $db,
    ) {
    }

    public function latest(int $limit = 10): array
    {
        return $this->db->fetchAllAssociative(
            'SELECT * FROM notification ORDER BY id DESC LIMIT ?',
            [$limit],
        );
    }
}