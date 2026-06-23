<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260623152830 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE building (id INT AUTO_INCREMENT NOT NULL, created_at DATETIME NOT NULL, latitude_build DOUBLE PRECISION NOT NULL, longitude_build DOUBLE PRECISION NOT NULL, level INT NOT NULL, status VARCHAR(191) NOT NULL, building_type_id INT NOT NULL, player_id INT NOT NULL, chunk_id INT NOT NULL, INDEX IDX_E16F61D4F28401B9 (building_type_id), INDEX idx_building_player (player_id), INDEX idx_building_chunk (chunk_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE building_cost (id INT AUTO_INCREMENT NOT NULL, costs INT NOT NULL, building_type_id INT NOT NULL, resource_type_id INT NOT NULL, INDEX IDX_BE02E3A8F28401B9 (building_type_id), INDEX IDX_BE02E3A898EC6B7B (resource_type_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE building_type (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(191) NOT NULL, code VARCHAR(100) NOT NULL, category VARCHAR(191) NOT NULL, production_rate DOUBLE PRECISION NOT NULL, max_level INT NOT NULL, resource_type_id INT DEFAULT NULL, UNIQUE INDEX UNIQ_2AFA207D77153098 (code), INDEX IDX_2AFA207D98EC6B7B (resource_type_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE chunk (id INT AUTO_INCREMENT NOT NULL, chunk_id VARCHAR(50) NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_9506712E8BD543CD (chunk_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE delivery (id INT AUTO_INCREMENT NOT NULL, quantity INT NOT NULL, status VARCHAR(191) NOT NULL, created_at DATETIME NOT NULL, waypoints JSON DEFAULT NULL, scheduled_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, progress INT NOT NULL, estimated_time INT NOT NULL, player_id INT NOT NULL, resource_id INT NOT NULL, source_building_id INT NOT NULL, target_building_id INT NOT NULL, INDEX IDX_3781EC1099E6F5DF (player_id), INDEX IDX_3781EC1089329D25 (resource_id), INDEX IDX_3781EC1071552EB2 (source_building_id), INDEX IDX_3781EC10CA103118 (target_building_id), INDEX idx_player_status (player_id, status), INDEX idx_player_scheduled_at (player_id, scheduled_at), INDEX idx_player_created_at (player_id, created_at), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE faction (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(191) NOT NULL, code VARCHAR(100) NOT NULL, description LONGTEXT DEFAULT NULL, UNIQUE INDEX UNIQ_83048B9077153098 (code), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE faction_building_image (id INT AUTO_INCREMENT NOT NULL, image_path VARCHAR(191) NOT NULL, faction_id INT NOT NULL, building_type_id INT NOT NULL, INDEX IDX_64AA84374448F8DA (faction_id), INDEX IDX_64AA8437F28401B9 (building_type_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE game (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(191) NOT NULL, started_at DATETIME NOT NULL, ended_at DATETIME DEFAULT NULL, description LONGTEXT DEFAULT NULL, is_active TINYINT NOT NULL, PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE game_resource_deposit (id INT AUTO_INCREMENT NOT NULL, is_captured TINYINT NOT NULL, game_id INT NOT NULL, resource_deposit_id INT NOT NULL, building_id INT DEFAULT NULL, INDEX IDX_F66ABDCDE48FD905 (game_id), INDEX IDX_F66ABDCDF80DA337 (resource_deposit_id), UNIQUE INDEX UNIQ_F66ABDCD4D2A7E12 (building_id), UNIQUE INDEX game_deposit_unique (game_id, resource_deposit_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE notification (id INT AUTO_INCREMENT NOT NULL, type VARCHAR(50) NOT NULL, payload JSON NOT NULL, readed TINYINT NOT NULL, created_at DATETIME NOT NULL, player_id INT NOT NULL, INDEX IDX_BF5476CA99E6F5DF (player_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE player (id INT AUTO_INCREMENT NOT NULL, created_at DATETIME NOT NULL, user_id INT NOT NULL, game_id INT NOT NULL, faction_id INT NOT NULL, INDEX IDX_98197A65A76ED395 (user_id), INDEX IDX_98197A65E48FD905 (game_id), INDEX IDX_98197A654448F8DA (faction_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE player_inventory (id INT AUTO_INCREMENT NOT NULL, quantity INT NOT NULL, updated_at DATETIME NOT NULL, player_id INT NOT NULL, resource_type_id INT DEFAULT NULL, INDEX IDX_11217F0F99E6F5DF (player_id), INDEX IDX_11217F0F98EC6B7B (resource_type_id), UNIQUE INDEX player_resource_unique (player_id, resource_type_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE resource_deposit (id INT AUTO_INCREMENT NOT NULL, latitude DOUBLE PRECISION NOT NULL, longitude DOUBLE PRECISION NOT NULL, richness DOUBLE PRECISION NOT NULL, resource_type_id INT NOT NULL, road_id INT NOT NULL, INDEX IDX_C87B7AD198EC6B7B (resource_type_id), INDEX IDX_C87B7AD1962F8178 (road_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE resource_type (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(100) NOT NULL, code VARCHAR(191) NOT NULL, color VARCHAR(7) NOT NULL, rarity INT NOT NULL, PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE road (id INT AUTO_INCREMENT NOT NULL, points JSON NOT NULL, type VARCHAR(50) NOT NULL, chunk_id INT NOT NULL, INDEX IDX_95C0C4B18BD543CD (chunk_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(191) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, pseudo VARCHAR(191) NOT NULL, UNIQUE INDEX UNIQ_IDENTIFIER_EMAIL (email), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(190) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E0FB7336F0E3BD61CE16BA31DBBF396750 (queue_name, available_at, delivered_at, id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('ALTER TABLE building ADD CONSTRAINT FK_E16F61D4F28401B9 FOREIGN KEY (building_type_id) REFERENCES building_type (id)');
        $this->addSql('ALTER TABLE building ADD CONSTRAINT FK_E16F61D499E6F5DF FOREIGN KEY (player_id) REFERENCES player (id)');
        $this->addSql('ALTER TABLE building ADD CONSTRAINT FK_E16F61D48BD543CD FOREIGN KEY (chunk_id) REFERENCES chunk (id)');
        $this->addSql('ALTER TABLE building_cost ADD CONSTRAINT FK_BE02E3A8F28401B9 FOREIGN KEY (building_type_id) REFERENCES building_type (id)');
        $this->addSql('ALTER TABLE building_cost ADD CONSTRAINT FK_BE02E3A898EC6B7B FOREIGN KEY (resource_type_id) REFERENCES resource_type (id)');
        $this->addSql('ALTER TABLE building_type ADD CONSTRAINT FK_2AFA207D98EC6B7B FOREIGN KEY (resource_type_id) REFERENCES resource_type (id)');
        $this->addSql('ALTER TABLE delivery ADD CONSTRAINT FK_3781EC1099E6F5DF FOREIGN KEY (player_id) REFERENCES player (id)');
        $this->addSql('ALTER TABLE delivery ADD CONSTRAINT FK_3781EC1089329D25 FOREIGN KEY (resource_id) REFERENCES resource_type (id)');
        $this->addSql('ALTER TABLE delivery ADD CONSTRAINT FK_3781EC1071552EB2 FOREIGN KEY (source_building_id) REFERENCES building (id)');
        $this->addSql('ALTER TABLE delivery ADD CONSTRAINT FK_3781EC10CA103118 FOREIGN KEY (target_building_id) REFERENCES building (id)');
        $this->addSql('ALTER TABLE faction_building_image ADD CONSTRAINT FK_64AA84374448F8DA FOREIGN KEY (faction_id) REFERENCES faction (id)');
        $this->addSql('ALTER TABLE faction_building_image ADD CONSTRAINT FK_64AA8437F28401B9 FOREIGN KEY (building_type_id) REFERENCES building_type (id)');
        $this->addSql('ALTER TABLE game_resource_deposit ADD CONSTRAINT FK_F66ABDCDE48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE game_resource_deposit ADD CONSTRAINT FK_F66ABDCDF80DA337 FOREIGN KEY (resource_deposit_id) REFERENCES resource_deposit (id)');
        $this->addSql('ALTER TABLE game_resource_deposit ADD CONSTRAINT FK_F66ABDCD4D2A7E12 FOREIGN KEY (building_id) REFERENCES building (id)');
        $this->addSql('ALTER TABLE notification ADD CONSTRAINT FK_BF5476CA99E6F5DF FOREIGN KEY (player_id) REFERENCES player (id)');
        $this->addSql('ALTER TABLE player ADD CONSTRAINT FK_98197A65A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE player ADD CONSTRAINT FK_98197A65E48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE player ADD CONSTRAINT FK_98197A654448F8DA FOREIGN KEY (faction_id) REFERENCES faction (id)');
        $this->addSql('ALTER TABLE player_inventory ADD CONSTRAINT FK_11217F0F99E6F5DF FOREIGN KEY (player_id) REFERENCES player (id)');
        $this->addSql('ALTER TABLE player_inventory ADD CONSTRAINT FK_11217F0F98EC6B7B FOREIGN KEY (resource_type_id) REFERENCES resource_type (id)');
        $this->addSql('ALTER TABLE resource_deposit ADD CONSTRAINT FK_C87B7AD198EC6B7B FOREIGN KEY (resource_type_id) REFERENCES resource_type (id)');
        $this->addSql('ALTER TABLE resource_deposit ADD CONSTRAINT FK_C87B7AD1962F8178 FOREIGN KEY (road_id) REFERENCES road (id)');
        $this->addSql('ALTER TABLE road ADD CONSTRAINT FK_95C0C4B18BD543CD FOREIGN KEY (chunk_id) REFERENCES chunk (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE building DROP FOREIGN KEY FK_E16F61D4F28401B9');
        $this->addSql('ALTER TABLE building DROP FOREIGN KEY FK_E16F61D499E6F5DF');
        $this->addSql('ALTER TABLE building DROP FOREIGN KEY FK_E16F61D48BD543CD');
        $this->addSql('ALTER TABLE building_cost DROP FOREIGN KEY FK_BE02E3A8F28401B9');
        $this->addSql('ALTER TABLE building_cost DROP FOREIGN KEY FK_BE02E3A898EC6B7B');
        $this->addSql('ALTER TABLE building_type DROP FOREIGN KEY FK_2AFA207D98EC6B7B');
        $this->addSql('ALTER TABLE delivery DROP FOREIGN KEY FK_3781EC1099E6F5DF');
        $this->addSql('ALTER TABLE delivery DROP FOREIGN KEY FK_3781EC1089329D25');
        $this->addSql('ALTER TABLE delivery DROP FOREIGN KEY FK_3781EC1071552EB2');
        $this->addSql('ALTER TABLE delivery DROP FOREIGN KEY FK_3781EC10CA103118');
        $this->addSql('ALTER TABLE faction_building_image DROP FOREIGN KEY FK_64AA84374448F8DA');
        $this->addSql('ALTER TABLE faction_building_image DROP FOREIGN KEY FK_64AA8437F28401B9');
        $this->addSql('ALTER TABLE game_resource_deposit DROP FOREIGN KEY FK_F66ABDCDE48FD905');
        $this->addSql('ALTER TABLE game_resource_deposit DROP FOREIGN KEY FK_F66ABDCDF80DA337');
        $this->addSql('ALTER TABLE game_resource_deposit DROP FOREIGN KEY FK_F66ABDCD4D2A7E12');
        $this->addSql('ALTER TABLE notification DROP FOREIGN KEY FK_BF5476CA99E6F5DF');
        $this->addSql('ALTER TABLE player DROP FOREIGN KEY FK_98197A65A76ED395');
        $this->addSql('ALTER TABLE player DROP FOREIGN KEY FK_98197A65E48FD905');
        $this->addSql('ALTER TABLE player DROP FOREIGN KEY FK_98197A654448F8DA');
        $this->addSql('ALTER TABLE player_inventory DROP FOREIGN KEY FK_11217F0F99E6F5DF');
        $this->addSql('ALTER TABLE player_inventory DROP FOREIGN KEY FK_11217F0F98EC6B7B');
        $this->addSql('ALTER TABLE resource_deposit DROP FOREIGN KEY FK_C87B7AD198EC6B7B');
        $this->addSql('ALTER TABLE resource_deposit DROP FOREIGN KEY FK_C87B7AD1962F8178');
        $this->addSql('ALTER TABLE road DROP FOREIGN KEY FK_95C0C4B18BD543CD');
        $this->addSql('DROP TABLE building');
        $this->addSql('DROP TABLE building_cost');
        $this->addSql('DROP TABLE building_type');
        $this->addSql('DROP TABLE chunk');
        $this->addSql('DROP TABLE delivery');
        $this->addSql('DROP TABLE faction');
        $this->addSql('DROP TABLE faction_building_image');
        $this->addSql('DROP TABLE game');
        $this->addSql('DROP TABLE game_resource_deposit');
        $this->addSql('DROP TABLE notification');
        $this->addSql('DROP TABLE player');
        $this->addSql('DROP TABLE player_inventory');
        $this->addSql('DROP TABLE resource_deposit');
        $this->addSql('DROP TABLE resource_type');
        $this->addSql('DROP TABLE road');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
