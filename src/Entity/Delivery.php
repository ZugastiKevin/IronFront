<?php

namespace App\Entity;

use App\Enum\DeliveryStatus;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\HasLifecycleCallbacks]
#[ORM\Table]
#[ORM\Index(name: 'idx_player_status', columns: ['player_id', 'status'])]
#[ORM\Index(name: 'idx_player_scheduled_at', columns: ['player_id', 'scheduled_at'])]
#[ORM\Index(name: 'idx_player_created_at', columns: ['player_id', 'created_at'])]
class Delivery
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: Player::class, inversedBy: 'deliveries')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Player $player = null;

    #[ORM\ManyToOne(targetEntity: ResourceType::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?ResourceType $resource = null;

    #[ORM\Column]
    private int $quantity = 0;

    #[ORM\ManyToOne(inversedBy: 'deliveries')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Building $sourceBuilding = null;

    #[ORM\ManyToOne(inversedBy: 'incomingDeliveries')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Building $targetBuilding = null;

    #[ORM\Column(type: 'string',length: 191, enumType: DeliveryStatus::class)]
    private DeliveryStatus $status = DeliveryStatus::WAITING;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE)]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(type: Types::JSON, nullable: true)]
    private ?array $waypoints = null;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE)]
    private ?\DateTimeImmutable $scheduledAt = null;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE, nullable: true)]
    private ?\DateTimeImmutable $deliveredAt = null;

    #[ORM\Column(type: Types::INTEGER)]
    private int $progress = 0;

    #[ORM\Column(type: Types::INTEGER)]
    private int $estimatedTime = 0;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    #[ORM\PrePersist]
    public function setCreatedAtValue(): void
    {
        if ($this->createdAt === null) {
            $this->createdAt = new \DateTimeImmutable();
        }
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getResource(): ?ResourceType
    {
        return $this->resource;
    }

    public function setResource(?ResourceType $resource): static
    {
        $this->resource = $resource;
        return $this;
    }

    public function getQuantity(): int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): static
    {
        $this->quantity = $quantity;
        return $this;
    }

    public function getSourceBuilding(): ?Building
    {
        return $this->sourceBuilding;
    }

    public function setSourceBuilding(?Building $sourceBuilding): static
    {
        $this->sourceBuilding = $sourceBuilding;
        return $this;
    }

    public function getTargetBuilding(): ?Building
    {
        return $this->targetBuilding;
    }

    public function setTargetBuilding(?Building $targetBuilding): static
    {
        $this->targetBuilding = $targetBuilding;
        return $this;
    }

    public function getStatus(): DeliveryStatus
    {
        return $this->status;
    }

    public function setStatus(DeliveryStatus $status): static
    {
        $this->status = $status;
        return $this;
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

    public function getDeliveredAt(): ?\DateTimeImmutable
    {
        return $this->deliveredAt;
    }

    public function setDeliveredAt(?\DateTimeImmutable $deliveredAt): static
    {
        $this->deliveredAt = $deliveredAt;
        return $this;
    }

    public function getProgress(): int
    {
        return $this->progress;
    }

    public function setProgress(int $progress): static
    {
        $this->progress = $progress;
        return $this;
    }

    public function getEstimatedTime(): int
    {
        return $this->estimatedTime;
    }

    public function setEstimatedTime(int $estimatedTime): static
    {
        $this->estimatedTime = $estimatedTime;
        return $this;
    }

    public function getScheduledAt(): ?\DateTimeImmutable
    {
        return $this->scheduledAt;
    }

    public function setScheduledAt(?\DateTimeImmutable $scheduledAt): static
    {
        $this->scheduledAt = $scheduledAt;
        return $this;
    }

    public function isDelivered(): bool
    {
        return $this->status === DeliveryStatus::DELIVERED;
    }

    public function isWaiting(): bool
    {
        return $this->status === DeliveryStatus::WAITING;
    }

    public function startDelivery(): void
    {
        $this->status = DeliveryStatus::IN_TRANSIT;
        $this->progress = 0;
    }

    /**
     * Retourne les waypoints sous forme de tableau.
     */
    public function getWaypoints(): ?array
    {
        return $this->waypoints;
    }

    /**
     * Définit les waypoints depuis un tableau.
     */
    public function setWaypoints(?array $waypoints): static
    {
        $this->waypoints = $waypoints;
        return $this;
    }

    /**
     * Retourne les données de route (waypoints déjà décodés)
     */
    public function getRouteData(): ?array
    {
        if ($this->waypoints === null) {
            return null;
        }

        return [
            'waypoints' => $this->waypoints,
            'progress' => $this->progress,
        ];
    }
}