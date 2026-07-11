<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Ajoute la colonne polyline à road_segment (point 10).
 *
 * Stocke la sous-polyligne originale (coordonnées [lat, lng]) de chaque segment
 * afin de préserver la courbure réelle des routes pour le gameplay
 * (LOS, collision, snap route, IA...).
 */
final class Version20260709000100 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Ajoute la colonne polyline (JSON) à road_segment';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE road_segment ADD polyline JSON DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE road_segment DROP COLUMN polyline');
    }
}
