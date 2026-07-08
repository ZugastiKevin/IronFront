<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Refacto Chunk → Bounding Box :
 * - chunk : ajoute lat_min/lng_min/lat_max/lng_max (le chunk_id VARCHAR est gardé temporairement, supprimé en Phase 9)
 * - road  : ajoute bbox_lat_min/bbox_lng_min/bbox_lat_max/bbox_lng_max, supprime la FK vers chunk
 * - ajoute un index spatial sur road.bbox pour les requêtes par zone
 */
final class Version20260627000000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Ajoute les colonnes bbox sur chunk et road, supprime la FK road→chunk';
    }

    public function up(Schema $schema): void
    {
        // --- chunk : ajouter les 4 colonnes bbox ---
        $this->addSql('ALTER TABLE chunk ADD lat_min NUMERIC(10, 7) NULL, ADD lng_min NUMERIC(10, 7) NULL, ADD lat_max NUMERIC(10, 7) NULL, ADD lng_max NUMERIC(10, 7) NULL');
        // Index unique sur la bbox pour findOrCreateByBbox
        $this->addSql('CREATE UNIQUE INDEX UNIQ_chunk_bbox ON chunk (lat_min, lng_min, lat_max, lng_max)');

        // --- road : ajouter les 4 colonnes bbox ---
        $this->addSql('ALTER TABLE road ADD bbox_lat_min NUMERIC(10, 7) NULL, ADD bbox_lng_min NUMERIC(10, 7) NULL, ADD bbox_lat_max NUMERIC(10, 7) NULL, ADD bbox_lng_max NUMERIC(10, 7) NULL');
        // Index pour accélérer les requêtes par zone
        $this->addSql('CREATE INDEX idx_road_bbox ON road (bbox_lat_min, bbox_lat_max, bbox_lng_min, bbox_lng_max)');

        // --- road : supprimer la FK et l'index vers chunk ---
        $this->addSql('ALTER TABLE road DROP FOREIGN KEY FK_95C0C4B18BD543CD');
        $this->addSql('DROP INDEX IDX_95C0C4B18BD543CD ON road');
        $this->addSql('ALTER TABLE road DROP COLUMN chunk_id');
    }

    public function down(Schema $schema): void
    {
        // --- road : recréer la colonne chunk_id et la FK ---
        $this->addSql('ALTER TABLE road ADD chunk_id INT NOT NULL');
        $this->addSql('CREATE INDEX IDX_95C0C4B18BD543CD ON road (chunk_id)');
        $this->addSql('ALTER TABLE road ADD CONSTRAINT FK_95C0C4B18BD543CD FOREIGN KEY (chunk_id) REFERENCES chunk (id)');

        // --- road : supprimer les colonnes bbox ---
        $this->addSql('DROP INDEX idx_road_bbox ON road');
        $this->addSql('ALTER TABLE road DROP COLUMN bbox_lat_min, DROP COLUMN bbox_lng_min, DROP COLUMN bbox_lat_max, DROP COLUMN bbox_lng_max');

        // --- chunk : supprimer les colonnes bbox ---
        $this->addSql('DROP INDEX UNIQ_chunk_bbox ON chunk');
        $this->addSql('ALTER TABLE chunk DROP COLUMN lat_min, DROP COLUMN lng_min, DROP COLUMN lat_max, DROP COLUMN lng_max');
    }
}
