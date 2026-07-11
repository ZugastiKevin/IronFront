<?php

namespace App\Entity;

use App\Repository\RoadNodeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RoadNodeRepository::class)]
#[ORM\Table(name: 'road_node')]
#[ORM\Index(name: 'idx_road_node_lat', columns: ['lat'])]
#[ORM\Index(name: 'idx_road_node_lng', columns: ['lng'])]
#[ORM\UniqueConstraint(name: 'uniq_road_node_coord', columns: ['lat', 'lng'])]
class RoadNode
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'float')]
    private float $lat;

    #[ORM\Column(type: 'float')]
    private float $lng;

    public function __construct(float $lat = 0.0, float $lng = 0.0)
    {
        $this->lat = $lat;
        $this->lng = $lng;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLat(): float
    {
        return $this->lat;
    }

    public function setLat(float $lat): static
    {
        $this->lat = $lat;
        return $this;
    }

    public function getLng(): float
    {
        return $this->lng;
    }

    public function setLng(float $lng): static
    {
        $this->lng = $lng;
        return $this;
    }

    /**
     * Retourne la position sous forme de tuple pour comparaison.
     */
    public function getPosition(): array
    {
        return [$this->lat, $this->lng];
    }
}