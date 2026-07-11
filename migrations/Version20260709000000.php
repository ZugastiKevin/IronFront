<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Pipeline de compilation OSM - nouvelles tables pour le moteur MMO.
 *
 * road_node : Nœuds d'intersection avec coordonnées GPS
 * road_segment : Segments entre nœuds (decoupés depuis les ways OSM)
 * road_graph : Graphe de navigation (liaisons nœuds ↔ segments)
 * spatial_cell : Grille 1km pour indexation spatiale
 * spatial_segment : Relation cellule ↔ segment
 * raw_road : Routes brutes temporaire pendant l'import
 */
final class Version20260709000000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Tables pour le pipeline de compilation OSM : road_node, road_segment, road_graph, spatial_cell, spatial_segment, raw_road';
    }

    public function up(Schema $schema): void
    {
        // Supprimer les tables existantes (cas d'un rollback/rerun)
        $this->addSql('DROP TABLE IF EXISTS spatial_segment');
        $this->addSql('DROP TABLE IF EXISTS spatial_cell');
        $this->addSql('DROP TABLE IF EXISTS road_graph');
        $this->addSql('DROP TABLE IF EXISTS road_segment');
        $this->addSql('DROP TABLE IF EXISTS road_node');
        $this->addSql('DROP TABLE IF EXISTS raw_road');

        // Table temporaire pour les routes brutes (étape 1)
        $this->addSql(<<<'SQL'
            CREATE TABLE raw_road (
                id INT AUTO_INCREMENT PRIMARY KEY,
                osm_id BIGINT NOT NULL,
                type VARCHAR(50) NOT NULL,
                points JSON NOT NULL,
                bbox_lat_min DOUBLE PRECISION NOT NULL,
                bbox_lat_max DOUBLE PRECISION NOT NULL,
                bbox_lng_min DOUBLE PRECISION NOT NULL,
                bbox_lng_max DOUBLE PRECISION NOT NULL,
                INDEX idx_raw_road_bbox (bbox_lat_min, bbox_lat_max, bbox_lng_min, bbox_lng_max),
                INDEX idx_raw_road_osm (osm_id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`
        SQL);

        // Nœuds d'intersection (étape 2-3)
        $this->addSql(<<<'SQL'
            CREATE TABLE road_node (
                id INT AUTO_INCREMENT PRIMARY KEY,
                lat DOUBLE PRECISION NOT NULL,
                lng DOUBLE PRECISION NOT NULL,
                UNIQUE KEY uniq_road_node_coord (lat, lng),
                INDEX idx_road_node_lat (lat),
                INDEX idx_road_node_lng (lng)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`
        SQL);

        // Segments entre nœuds (étape 2-3)
        $this->addSql(<<<'SQL'
            CREATE TABLE road_segment (
                id INT AUTO_INCREMENT PRIMARY KEY,
                node_start_id INT NOT NULL,
                node_end_id INT NOT NULL,
                type VARCHAR(50) NOT NULL,
                length DOUBLE PRECISION NOT NULL DEFAULT 0,
                cost DOUBLE PRECISION NOT NULL DEFAULT 1,
                bbox_lat_min DOUBLE PRECISION NOT NULL,
                bbox_lat_max DOUBLE PRECISION NOT NULL,
                bbox_lng_min DOUBLE PRECISION NOT NULL,
                bbox_lng_max DOUBLE PRECISION NOT NULL,
                INDEX idx_road_segment_nodes (node_start_id, node_end_id),
                INDEX idx_road_segment_type (type),
                INDEX idx_road_segment_bbox (bbox_lat_min, bbox_lat_max, bbox_lng_min, bbox_lng_max),
                FOREIGN KEY (node_start_id) REFERENCES road_node(id) ON DELETE CASCADE,
                FOREIGN KEY (node_end_id) REFERENCES road_node(id) ON DELETE CASCADE
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`
        SQL);

        // Graphe de navigation : chaque nœud connaît ses voisins (étape 4)
        $this->addSql(<<<'SQL'
            CREATE TABLE road_graph (
                id INT AUTO_INCREMENT PRIMARY KEY,
                node_id INT NOT NULL,
                neighbor_id INT NOT NULL,
                segment_id INT NOT NULL,
                INDEX idx_road_graph_node (node_id),
                INDEX idx_road_graph_neighbor (neighbor_id),
                UNIQUE KEY uniq_road_graph (node_id, neighbor_id, segment_id),
                FOREIGN KEY (node_id) REFERENCES road_node(id) ON DELETE CASCADE,
                FOREIGN KEY (neighbor_id) REFERENCES road_node(id) ON DELETE CASCADE,
                FOREIGN KEY (segment_id) REFERENCES road_segment(id) ON DELETE CASCADE
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`
        SQL);

        // Grille spatiale 1km (étape 5)
        $this->addSql(<<<'SQL'
            CREATE TABLE spatial_cell (
                id VARCHAR(50) PRIMARY KEY,
                x INT NOT NULL,
                y INT NOT NULL,
                lat_min DOUBLE PRECISION NOT NULL,
                lat_max DOUBLE PRECISION NOT NULL,
                lng_min DOUBLE PRECISION NOT NULL,
                lng_max DOUBLE PRECISION NOT NULL,
                INDEX idx_spatial_cell_coords (x, y)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`
        SQL);

        // Relation cellule ↔ segment (étape 5)
        $this->addSql(<<<'SQL'
            CREATE TABLE spatial_segment (
                id INT AUTO_INCREMENT PRIMARY KEY,
                cell_id VARCHAR(50) NOT NULL,
                segment_id INT NOT NULL,
                INDEX idx_spatial_segment_cell (cell_id),
                INDEX idx_spatial_segment_segment (segment_id),
                FOREIGN KEY (cell_id) REFERENCES spatial_cell(id) ON DELETE CASCADE,
                FOREIGN KEY (segment_id) REFERENCES road_segment(id) ON DELETE CASCADE
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci`
        SQL);

        // Suppression de l'ancienne table road (reset complet)
        // D'abord supprimer la contrainte FK depuis resource_deposit
        // Note: les données existantes seront perdues - reset complet comme demandé
        $this->addSql('ALTER TABLE resource_deposit DROP FOREIGN KEY FK_C87B7AD1962F8178');
        $this->addSql('ALTER TABLE resource_deposit DROP COLUMN road_id');
        $this->addSql('DROP TABLE IF EXISTS road');

        // Ajouter la colonne road_segment_id (nullable pour l'instant)
        $this->addSql('ALTER TABLE resource_deposit ADD COLUMN road_segment_id INT DEFAULT NULL');
        $this->addSql('CREATE INDEX idx_resource_deposit_segment ON resource_deposit (road_segment_id)');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP INDEX idx_resource_deposit_segment ON resource_deposit');
        $this->addSql('ALTER TABLE resource_deposit DROP COLUMN road_segment_id');
        $this->addSql('DROP TABLE IF EXISTS spatial_segment');
        $this->addSql('DROP TABLE IF EXISTS spatial_cell');
        $this->addSql('DROP TABLE IF EXISTS road_graph');
        $this->addSql('DROP TABLE IF EXISTS road_segment');
        $this->addSql('DROP TABLE IF EXISTS road_node');
        $this->addSql('DROP TABLE IF EXISTS raw_road');
    }
}