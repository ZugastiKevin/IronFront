<?php

namespace App\Entity;

use App\Repository\ImportProgressRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * Entité pour suivre la progression des imports OSM.
 * Permet la reprise après crash et l'atomicité par tuile.
 */
#[ORM\Entity(repositoryClass: ImportProgressRepository::class)]
#[ORM\Table(name: 'import_progress')]
#[ORM\Index(columns: ['region', 'tile_key'], name: 'idx_import_progress_region_tile')]
#[ORM\Index(columns: ['status'], name: 'idx_import_progress_status')]
class ImportProgress
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    /** Région concernée (europe, planet, etc.) */
    #[ORM\Column(length: 50)]
    private string $region;

    /** Clé unique de la tuile (format: lat_min_lng_min_lat_max_lng_max) */
    #[ORM\Column(length: 100)]
    private string $tileKey;

    /** Statut: pending, processing, completed, crashed */
    #[ORM\Column(length: 20, options: ['default' => 'pending'])]
    private string $status = 'pending';

    /** Nombre de routes importées dans cette tuile */
    #[ORM\Column(options: ['default' => 0])]
    private int $roadsImported = 0;

    /** Date de création du checkpoint */
    #[ORM\Column]
    private \DateTimeImmutable $createdAt;

    /** Date de mise à jour (début/fin traitement) */
    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $updatedAt = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRegion(): string
    {
        return $this->region;
    }

    public function setRegion(string $region): static
    {
        $this->region = $region;
        return $this;
    }

    public function getTileKey(): string
    {
        return $this->tileKey;
    }

    public function setTileKey(string $tileKey): static
    {
        $this->tileKey = $tileKey;
        return $this;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;
        $this->updatedAt = new \DateTimeImmutable();
        return $this;
    }

    public function getRoadsImported(): int
    {
        return $this->roadsImported;
    }

    public function setRoadsImported(int $roadsImported): static
    {
        $this->roadsImported = $roadsImported;
        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }
}