<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260627181919 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE chunk ADD status VARCHAR(16) DEFAULT NULL');
        $this->addSql('CREATE INDEX idx_chunk_status ON chunk (status)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE chunk DROP status, CHANGE chunk_id chunk_id VARCHAR(50) NOT NULL');
        $this->addSql('ALTER TABLE resource_image DROP FOREIGN KEY FK_EE867E6D98EC6B7B');
    }
}
