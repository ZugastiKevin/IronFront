<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260625172225 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE game ADD fog_mode VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE resource_image ADD CONSTRAINT FK_EE867E6D98EC6B7B FOREIGN KEY (resource_type_id) REFERENCES resource_type (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE game DROP fog_mode');
        $this->addSql('ALTER TABLE resource_image DROP FOREIGN KEY FK_EE867E6D98EC6B7B');
    }
}
