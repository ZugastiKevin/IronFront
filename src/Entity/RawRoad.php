<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Route brute temporaire pendant la compilation OSM.
 *
 * Stockée après l'extraction PBF, supprimée après normalisation.
 */
#[ORM\Entity]
#[ORM\Table(name: 'raw_road')]
class RawRoad
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(name: 'osm_id')]
    private int $osmId;

    #[ORM\Column(length: 50)]
    private string $type;

    #[ORM\Column(type: 'json')]
    private array $points = [];

    #[ORM\Column(name: 'bbox_lat_min', type: 'float')]
    private float $bboxLatMin = 0.0;

    #[ORM\Column(name: 'bbox_lat_max', type: 'float')]
    private float $bboxLatMax = 0.0;

    #[ORM\Column(name: 'bbox_lng_min', type: 'float')]
    private float $bboxLngMin = 0.0;

    #[ORM\Column(name: 'bbox_lng_max', type: 'float')]
    private float $bboxLngMax = 0.0;

    public function __construct()
    {
        // Constructeur vide pour Doctrine
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOsmId(): int
    {
        return $this->osmId;
    }

    public function setOsmId(int $osmId): static
    {
        $this->osmId = $osmId;
        return $this;
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function setType(string $type): static
    {
        $this->type = $type;
        return $this;
    }

    public function getPoints(): array
    {
        return $this->points;
    }

    public function setPoints(array $points): static
    {
        $this->points = $points;
        return $this;
    }

    public function getBboxLatMin(): float
    {
        return $this->bboxLatMin;
    }

    public function setBboxLatMin(float $bboxLatMin): static
    {
        $this->bboxLatMin = $bboxLatMin;
        return $this;
    }

    public function getBboxLatMax(): float
    {
        return $this->bboxLatMax;
    }

    public function setBboxLatMax(float $bboxLatMax): static
    {
        $this->bboxLatMax = $bboxLatMax;
        return $this;
    }

    public function getBboxLngMin(): float
    {
        return $this->bboxLngMin;
    }

    public function setBboxLngMin(float $bboxLngMin): static
    {
        $this->bboxLngMin = $bboxLngMin;
        return $this;
    }

    public function getBboxLngMax(): float
    {
        return $this->bboxLngMax;
    }

    public function setBboxLngMax(float $bboxLngMax): static
    {
        $this->bboxLngMax = $bboxLngMax;
        return $this;
    }
}