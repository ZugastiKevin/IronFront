<?php

namespace App\Entity;

use App\Repository\RoadSegmentRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RoadSegmentRepository::class)]
#[ORM\Table(name: 'road_segment')]
#[ORM\Index(name: 'idx_road_segment_nodes', columns: ['node_start_id', 'node_end_id'])]
#[ORM\Index(name: 'idx_road_segment_type', columns: ['type'])]
#[ORM\Index(name: 'idx_road_segment_bbox', columns: ['bbox_lat_min', 'bbox_lat_max', 'bbox_lng_min', 'bbox_lng_max'])]
class RoadSegment
{
    // Mapping des types OSM vers les propriétés gameplay (étape 9)
    public const TYPE_MAPPING = [
        'motorway' => ['cost_factor' => 0.8, 'max_speed' => 130, 'cover' => 0.2],
        'trunk' => ['cost_factor' => 0.85, 'max_speed' => 110, 'cover' => 0.3],
        'primary' => ['cost_factor' => 0.9, 'max_speed' => 90, 'cover' => 0.5],
        'secondary' => ['cost_factor' => 1.0, 'max_speed' => 70, 'cover' => 0.6],
        'tertiary' => ['cost_factor' => 1.0, 'max_speed' => 50, 'cover' => 0.6],
        'unclassified' => ['cost_factor' => 1.0, 'max_speed' => 40, 'cover' => 0.7],
        'residential' => ['cost_factor' => 1.1, 'max_speed' => 30, 'cover' => 0.8],
        'service' => ['cost_factor' => 1.2, 'max_speed' => 20, 'cover' => 0.9],
        'track' => ['cost_factor' => 1.5, 'max_speed' => 20, 'cover' => 0.9],
        'ferry' => ['cost_factor' => 1.3, 'max_speed' => 20, 'cover' => 0.1],
        'path' => ['cost_factor' => 1.2, 'max_speed' => 10, 'cover' => 0.8],
        'cycleway' => ['cost_factor' => 1.0, 'max_speed' => 20, 'cover' => 0.7],
    ];

    // Propriétés spécifiquement générées (pas dans OSM)
    private const DEFAULT_PROPERTIES = [
        'boat' => false,
        'bridge' => false,
        'ford' => false,
        'rail_crossing' => false,
        'tunnel' => false,
    ];

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(name: 'node_start_id')]
    private int $nodeStartId;

    #[ORM\Column(name: 'node_end_id')]
    private int $nodeEndId;

    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $polyline = null;

    #[ORM\Column(length: 50)]
    private string $type;

    #[ORM\Column(type: 'float')]
    private float $length = 0.0;

    #[ORM\Column(type: 'float')]
    private float $cost = 1.0;

    #[ORM\Column(name: 'bbox_lat_min', type: 'float')]
    private float $bboxLatMin = 0.0;

    #[ORM\Column(name: 'bbox_lat_max', type: 'float')]
    private float $bboxLatMax = 0.0;

    #[ORM\Column(name: 'bbox_lng_min', type: 'float')]
    private float $bboxLngMin = 0.0;

    #[ORM\Column(name: 'bbox_lng_max', type: 'float')]
    private float $bboxLngMax = 0.0;

    /**
     * @var Collection<int, ResourceDeposit>
     */
    #[ORM\OneToMany(targetEntity: ResourceDeposit::class, mappedBy: 'roadSegment')]
    private Collection $deposits;

    public function __construct()
    {
        // Valeurs par défaut
        $this->deposits = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNodeStartId(): int
    {
        return $this->nodeStartId;
    }

    public function setNodeStartId(int $nodeStartId): static
    {
        $this->nodeStartId = $nodeStartId;
        return $this;
    }

    public function getNodeEndId(): int
    {
        return $this->nodeEndId;
    }

    public function setNodeEndId(int $nodeEndId): static
    {
        $this->nodeEndId = $nodeEndId;
        return $this;
    }

    /**
     * Polyligne simplifiée (coordonnées [lat, lng]) préservant la courbure réelle.
     * Vide pour les segments importés avant l'ajout de la colonne.
     *
     * @return array<int, array{0: float, 1: float}>
     */
    public function getPolyline(): array
    {
        return $this->polyline ?? [];
    }

    /**
     * @param array<int, array{0: float, 1: float}> $polyline
     */
    public function setPolyline(array $polyline): static
    {
        $this->polyline = $polyline;
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

    public function getLength(): float
    {
        return $this->length;
    }

    public function setLength(float $length): static
    {
        $this->length = $length;
        return $this;
    }

    public function getCost(): float
    {
        return $this->cost;
    }

    public function setCost(float $cost): static
    {
        $this->cost = $cost;
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

    /**
     * Retourne les propriétés gameplay pour ce type de route.
     */
    public function getGameplayProperties(): array
    {
        $props = self::DEFAULT_PROPERTIES;

        if (isset(self::TYPE_MAPPING[$this->type])) {
            $props = array_merge($props, self::TYPE_MAPPING[$this->type]);
        }

        return $props;
    }

    /**
     * @return Collection<int, ResourceDeposit>
     */
    public function getDeposits(): Collection
    {
        return $this->deposits;
    }

    public function addDeposit(ResourceDeposit $deposit): static
    {
        if (!$this->deposits->contains($deposit)) {
            $this->deposits->add($deposit);
            $deposit->setRoadSegment($this);
        }

        return $this;
    }

    public function removeDeposit(ResourceDeposit $deposit): static
    {
        if ($this->deposits->removeElement($deposit)) {
            if ($deposit->getRoadSegment() === $this) {
                $deposit->setRoadSegment(null);
            }
        }

        return $this;
    }
}