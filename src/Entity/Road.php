<?php

namespace App\Entity;

use App\Repository\RoadRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RoadRepository::class)]
#[ORM\Index(name: 'idx_road_bbox', columns: ['bbox_lat_min', 'bbox_lat_max', 'bbox_lng_min', 'bbox_lng_max'])]
class Road
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'json')]
    private array $points = [];

    #[ORM\Column(length: 50)]
    private string $type;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 7, nullable: true)]
    private ?string $bboxLatMin = null;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 7, nullable: true)]
    private ?string $bboxLngMin = null;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 7, nullable: true)]
    private ?string $bboxLatMax = null;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 7, nullable: true)]
    private ?string $bboxLngMax = null;

    /**
     * @var Collection<int, ResourceDeposit>
     */
    #[ORM\OneToMany(targetEntity: ResourceDeposit::class, mappedBy: 'road')]
    private Collection $deposits;

    public function __construct()
    {
        $this->deposits = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * Set ID (utilisé par GeofabrikRoadProvider pour hydrater depuis la table road).
     */
    public function setId(int $id): static
    {
        $this->id = $id;
        return $this;
    }

    public function getPoints(): array
    {
        return $this->points;
    }

    public function setPoints(array $points): static
    {
        $this->points = $points;
        $this->computeBboxFromPoints();
        return $this;
    }

    /**
     * (Re)calcule la bounding box à partir des points de la route.
     * Appelé automatiquement par setPoints().
     */
    public function computeBboxFromPoints(): void
    {
        if (empty($this->points)) {
            return;
        }

        $lats = array_column($this->points, 0);
        $lngs = array_column($this->points, 1);

        if (empty($lats) || empty($lngs)) {
            return;
        }

        $this->bboxLatMin = (string) min($lats);
        $this->bboxLatMax = (string) max($lats);
        $this->bboxLngMin = (string) min($lngs);
        $this->bboxLngMax = (string) max($lngs);
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

    public function getBboxLatMin(): ?float
    {
        return $this->bboxLatMin !== null ? (float) $this->bboxLatMin : null;
    }

    public function setBboxLatMin(?float $bboxLatMin): static
    {
        $this->bboxLatMin = $bboxLatMin !== null ? (string) $bboxLatMin : null;
        return $this;
    }

    public function getBboxLngMin(): ?float
    {
        return $this->bboxLngMin !== null ? (float) $this->bboxLngMin : null;
    }

    public function setBboxLngMin(?float $bboxLngMin): static
    {
        $this->bboxLngMin = $bboxLngMin !== null ? (string) $bboxLngMin : null;
        return $this;
    }

    public function getBboxLatMax(): ?float
    {
        return $this->bboxLatMax !== null ? (float) $this->bboxLatMax : null;
    }

    public function setBboxLatMax(?float $bboxLatMax): static
    {
        $this->bboxLatMax = $bboxLatMax !== null ? (string) $bboxLatMax : null;
        return $this;
    }

    public function getBboxLngMax(): ?float
    {
        return $this->bboxLngMax !== null ? (float) $this->bboxLngMax : null;
    }

    public function setBboxLngMax(?float $bboxLngMax): static
    {
        $this->bboxLngMax = $bboxLngMax !== null ? (string) $bboxLngMax : null;
        return $this;
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
            $deposit->setRoad($this);
        }

        return $this;
    }

    public function removeDeposit(ResourceDeposit $deposit): static
    {
        if ($this->deposits->removeElement($deposit)) {
            if ($deposit->getRoad() === $this) {
                $deposit->setRoad(null);
            }
        }

        return $this;
    }
}
