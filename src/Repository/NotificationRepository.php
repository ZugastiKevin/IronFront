<?php

use Doctrine\DBAL\Connection;

final class NotificationRepository
{
    public function __construct(private Connection $db) {}

    public function latest(): array
    {
        return $this->db->fetchAllAssociative(
            'SELECT * FROM notification ORDER BY id DESC LIMIT 10'
        );
    }
}