<?php

namespace App\Entity;

use App\Repository\ChunkRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ChunkRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_chunk_bbox', columns: ['lat_min', 'lng_min', 'lat_max', 'lng_max'])]
class Chunk
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    /**
     * Ancien identifiant "X_Y" — conservé temporairement pour le backfill (Phase 1).
     * Sera supprimé en Phase 9.
     */
    #[ORM\Column(type: 'string', length: 50, unique: true, nullable: true)]
    private ?string $chunkId = null;

    #[ORM\Column(type: "datetime_immutable")]
    private \DateTimeImmutable $updatedAt;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 7, nullable: true)]
    private ?string $latMin = null;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 7, nullable: true)]
    private ?string $lngMin = null;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 7, nullable: true)]
    private ?string $latMax = null;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 7, nullable: true)]
    private ?string $lngMax = null;

    /**
     * Statut du chunk pour l'expansion continentale.
     *
     * null   = jamais touché (frontière potentielle)
     * 'populated' = a au moins une route
     * 'empty'     = récupéré, 0 routes (océan/désert)
     * 'failed'    = échec après retry
     */
    #[ORM\Column(type: 'string', length: 16, nullable: true)]
    private ?string $status = null;

    /**
     * @var Collection<int, Building>
     */
    #[ORM\OneToMany(targetEntity: Building::class, mappedBy: 'chunk')]
    private Collection $buildings;

    public function __construct()
    {
        $this->updatedAt = new \DateTimeImmutable();
        $this->buildings = new ArrayCollection();
    }

    public function __toString(): string
    {
        if ($this->latMin !== null && $this->lngMin !== null) {
            return sprintf('Chunk %s,%s', $this->latMin, $this->lngMin);
        }
        return 'Chunk #' . $this->id;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getChunkId(): ?string
    {
        return $this->chunkId;
    }

    public function setChunkId(?string $chunkId): static
    {
        $this->chunkId = $chunkId;
        return $this;
    }

    public function getUpdatedAt(): \DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): static
    {
        $this->updatedAt = $updatedAt;
        return $this;
    }

    public function getLatMin(): ?float
    {
        return $this->latMin !== null ? (float) $this->latMin : null;
    }

    public function setLatMin(float $latMin): static
    {
        $this->latMin = $latMin;
        return $this;
    }

    public function getLngMin(): ?float
    {
        return $this->lngMin !== null ? (float) $this->lngMin : null;
    }

    public function setLngMin(float $lngMin): static
    {
        $this->lngMin = $lngMin;
        return $this;
    }

    public function getLatMax(): ?float
    {
        return $this->latMax !== null ? (float) $this->latMax : null;
    }

    public function setLatMax(float $latMax): static
    {
        $this->latMax = $latMax;
        return $this;
    }

    public function getLngMax(): ?float
    {
        return $this->lngMax !== null ? (float) $this->lngMax : null;
    }

    public function setLngMax(float $lngMax): static
    {
        $this->lngMax = $lngMax;
        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(?string $status): static
    {
        $this->status = $status;
        return $this;
    }

    /**
     * @return Collection<int, Building>
     */
    public function getBuildings(): Collection
    {
        return $this->buildings;
    }

    public function addBuilding(Building $building): static
    {
        if (!$this->buildings->contains($building)) {
            $this->buildings->add($building);
            $building->setChunk($this);
        }

        return $this;
    }

    public function removeBuilding(Building $building): static
    {
        if ($this->buildings->removeElement($building)) {
            if ($building->getChunk() === $this) {
                $building->setChunk(null);
            }
        }

        return $this;
    }
}
