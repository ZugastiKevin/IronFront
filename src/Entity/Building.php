<?php

namespace App\Entity;

use App\Enum\BuildingStatus;
use App\Repository\BuildingRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BuildingRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[ORM\Table]
#[ORM\Index(name: 'idx_building_player', columns: ['player_id'])]
#[ORM\Index(name: 'idx_building_chunk', columns: ['chunk_id'])]
class Building
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE)]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\PrePersist]
    public function setCreatedAtValue(): void
    {
        if ($this->createdAt === null) {
            $this->createdAt = new \DateTimeImmutable();
        }
    }

    #[ORM\Column]
    private ?float $latitudeBuild = null;

    #[ORM\Column]
    private ?float $longitudeBuild = null;

    #[ORM\Column]
    private ?int $level = 1;

    #[ORM\ManyToOne(inversedBy: 'buildings')]
    #[ORM\JoinColumn(nullable: false)]
    private ?BuildingType $buildingType = null;

    #[ORM\ManyToOne(inversedBy: 'buildings')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Player $player = null;

    #[ORM\ManyToOne(targetEntity: Chunk::class, inversedBy: 'buildings')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Chunk $chunk = null;

    #[ORM\OneToOne(targetEntity: GameResourceDeposit::class, mappedBy: 'building', orphanRemoval: true)]
    private ?GameResourceDeposit $gameResourceDeposit = null;

    #[ORM\OneToMany(targetEntity: Delivery::class, mappedBy: 'sourceBuilding')]
    private Collection $deliveries;

    #[ORM\OneToMany(targetEntity: Delivery::class, mappedBy: 'targetBuilding')]
    private Collection $incomingDeliveries;

    #[ORM\Column(type: 'string',length: 191, enumType: BuildingStatus::class)]
    private BuildingStatus $status = BuildingStatus::UNDER_CONSTRUCTION;

    public function __construct()
    {
        $this->deliveries = new ArrayCollection();
        $this->incomingDeliveries = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    public function getLatitudeBuild(): ?float
    {
        return $this->latitudeBuild;
    }

    public function setLatitudeBuild(float $latitudeBuild): static
    {
        $this->latitudeBuild = $latitudeBuild;

        return $this;
    }

    public function getLongitudeBuild(): ?float
    {
        return $this->longitudeBuild;
    }

    public function setLongitudeBuild(float $longitudeBuild): static
    {
        $this->longitudeBuild = $longitudeBuild;

        return $this;
    }

    public function getLevel(): ?int
    {
        return $this->level;
    }

    public function setLevel(int $level): static
    {
        $this->level = $level;

        return $this;
    }

    public function getBuildingType(): ?BuildingType
    {
        return $this->buildingType;
    }

    public function setBuildingType(?BuildingType $buildingType): static
    {
        $this->buildingType = $buildingType;

        return $this;
    }

    public function getPlayer(): ?Player
    {
        return $this->player;
    }

    public function setPlayer(?Player $player): static
    {
        $this->player = $player;

        return $this;
    }

    public function getChunk(): ?Chunk
    {
        return $this->chunk;
    }

    public function setChunk(?Chunk $chunk): static
    {
        $this->chunk = $chunk;

        return $this;
    }

    public function setCoordinates(string $coords): void
    {
        $parts = explode(',', $coords);
        if (count($parts) === 2) {
            $this->setLatitudeBuild((float)$parts[0]);
            $this->setLongitudeBuild((float)$parts[1]);
        }
    }

    public function getCoordinates(): string
    {
        return $this->latitudeBuild . ',' . $this->longitudeBuild;
    }

    public function getGameResourceDeposit(): ?GameResourceDeposit
    {
        return $this->gameResourceDeposit;
    }

    public function setGameResourceDeposit(?GameResourceDeposit $gameResourceDeposit): static
    {
        $this->gameResourceDeposit = $gameResourceDeposit;
        return $this;
    }

    /**
     * @return Collection<int, Delivery>
     */
    public function getIncomingDeliveries(): Collection
    {
        return $this->incomingDeliveries;
    }

    public function addIncomingDelivery(Delivery $delivery): static
    {
        if (!$this->incomingDeliveries->contains($delivery)) {
            $this->incomingDeliveries->add($delivery);
            $delivery->setTargetBuilding($this);
        }

        return $this;
    }

    public function removeIncomingDelivery(Delivery $delivery): static
    {
        if ($this->incomingDeliveries->removeElement($delivery)) {
            if ($delivery->getTargetBuilding() === $this) {
                $delivery->setTargetBuilding(null);
            }
        }

        return $this;
    }

    public function getStatus(): BuildingStatus
    {
        return $this->status;
    }

    public function setStatus(BuildingStatus $status): static
    {
        $this->status = $status;

        return $this;
    }
}