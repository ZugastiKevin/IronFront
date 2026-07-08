<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260708000000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Table de suivi de progression pour l\'import OSM avec reprise après crash';
    }

    public function up(Schema $schema): void
    {
        $this->addSql(<<<'SQL'
            CREATE TABLE import_progress (
                id INT AUTO_INCREMENT PRIMARY KEY,
                region VARCHAR(50) NOT NULL,
                tile_key VARCHAR(100) NOT NULL,
                status VARCHAR(20) DEFAULT 'pending',
                roads_imported INT DEFAULT 0,
                created_at DATETIME NOT NULL,
                updated_at DATETIME DEFAULT NULL,
                INDEX idx_import_progress_region_tile (region, tile_key),
                INDEX idx_import_progress_status (status)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`
        SQL);
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE import_progress');
    }
}