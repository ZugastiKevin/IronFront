<?php

namespace App\Entity;

use App\Repository\SpatialCellRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SpatialCellRepository::class)]
#[ORM\Table(name: 'spatial_cell')]
#[ORM\Index(name: 'idx_spatial_cell_coords', columns: ['x', 'y'])]
class SpatialCell
{
    // Taille d'une cellule en degrés (environ 1km à l'équateur)
    public const CELL_SIZE_DEGREES = 0.009; // ~1km

    #[ORM\Id]
    #[ORM\Column(length: 50)]
    private string $id;

    #[ORM\Column]
    private int $x;

    #[ORM\Column]
    private int $y;

    #[ORM\Column(name: 'lat_min', type: 'float')]
    private float $latMin = 0.0;

    #[ORM\Column(name: 'lat_max', type: 'float')]
    private float $latMax = 0.0;

    #[ORM\Column(name: 'lng_min', type: 'float')]
    private float $lngMin = 0.0;

    #[ORM\Column(name: 'lng_max', type: 'float')]
    private float $lngMax = 0.0;

    public function __construct(string $id = '', int $x = 0, int $y = 0)
    {
        $this->id = $id;
        $this->x = $x;
        $this->y = $y;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function setId(string $id): static
    {
        $this->id = $id;
        return $this;
    }

    public function getX(): int
    {
        return $this->x;
    }

    public function setX(int $x): static
    {
        $this->x = $x;
        return $this;
    }

    public function getY(): int
    {
        return $this->y;
    }

    public function setY(int $y): static
    {
        $this->y = $y;
        return $this;
    }

    public function getLatMin(): float
    {
        return $this->latMin;
    }

    public function setLatMin(float $latMin): static
    {
        $this->latMin = $latMin;
        return $this;
    }

    public function getLatMax(): float
    {
        return $this->latMax;
    }

    public function setLatMax(float $latMax): static
    {
        $this->latMax = $latMax;
        return $this;
    }

    public function getLngMin(): float
    {
        return $this->lngMin;
    }

    public function setLngMin(float $lngMin): static
    {
        $this->lngMin = $lngMin;
        return $this;
    }

    public function getLngMax(): float
    {
        return $this->lngMax;
    }

    public function setLngMax(float $lngMax): static
    {
        $this->lngMax = $lngMax;
        return $this;
    }

    /**
     * Crée une clé de cellule à partir des coordonnées.
     */
    public static function buildId(float $lat, float $lng): string
    {
        $x = (int) floor($lat / self::CELL_SIZE_DEGREES);
        $y = (int) floor($lng / self::CELL_SIZE_DEGREES);
        return sprintf('%d_%d', $x, $y);
    }

    /**
     * Vérifie si un point est dans cette cellule.
     */
    public function contains(float $lat, float $lng): bool
    {
        return $lat >= $this->latMin && $lat <= $this->latMax
            && $lng >= $this->lngMin && $lng <= $this->lngMax;
    }
}