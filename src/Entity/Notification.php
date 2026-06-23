<?php

namespace App\Entity;

use App\Repository\NotificationRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: NotificationRepository::class)]
class Notification
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'notifications')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Player $player = null;

    #[ORM\Column(length: 50)]
    private string $type;

    #[ORM\Column]
    private array $payload = [];

    #[ORM\Column]
    private bool $readed = false;

    #[ORM\Column]
    private \DateTimeImmutable $createdAt;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setPlayer(?Player $player): static
    {
        $this->player = $player;

        return $this;
    }

    public function getPlayer(): ?Player
    {
        return $this->player;
    }

    public function setType(string $type): static
    {
        $this->type = $type;

        return $this;
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function setPayload(array $payload): static
    {
        $this->payload = $payload;

        return $this;
    }

    public function getPayload(): array
    {
        return $this->payload;
    }

    public function isReaded(): bool
    {
        return $this->readed;
    }

    public function setReaded(bool $readed): static
    {
        $this->readed = $readed;

        return $this;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }
}