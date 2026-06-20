<?php

namespace App\Entity;

use App\Repository\GameRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GameRepository::class)]
class Game
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 191)]
    private ?string $label = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $startedAt = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $endedAt = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column]
    private ?bool $isActive = null;

    /**
     * @var Collection<int, Player>
     */
    #[ORM\OneToMany(targetEntity: Player::class, mappedBy: 'game')]
    private Collection $players;

    /**
     * @var Collection<int, GameResourceDeposit>
     */
    #[ORM\OneToMany(targetEntity: GameResourceDeposit::class, mappedBy: 'game', orphanRemoval: true)]
    private Collection $gameResourceDeposits;

    public function __construct()
    {
        $this->players = new ArrayCollection();
        $this->gameResourceDeposits = new ArrayCollection();
    }

    public function __toString(): string
    {
        return $this->label ?? 'Partie #' . $this->id;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function getStartedAt(): ?\DateTimeImmutable
    {
        return $this->startedAt;
    }

    public function setStartedAt(\DateTimeImmutable $startedAt): static
    {
        $this->startedAt = $startedAt;

        return $this;
    }

    public function getEndedAt(): ?\DateTimeImmutable
    {
        return $this->endedAt;
    }

    public function setEndedAt(?\DateTimeImmutable $endedAt): static
    {
        $this->endedAt = $endedAt;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function isActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): static
    {
        $this->isActive = $isActive;

        return $this;
    }

    /**
     * @return Collection<int, Player>
     */
    public function getPlayers(): Collection
    {
        return $this->players;
    }

    public function addPlayer(Player $player): static
    {
        if (!$this->players->contains($player)) {
            $this->players->add($player);
            $player->setGame($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, GameResourceDeposit>
     */
    public function getGameResourceDeposits(): Collection
    {
        return $this->gameResourceDeposits;
    }

    public function addGameResourceDeposit(GameResourceDeposit $gameResourceDeposit): static
    {
        if (!$this->gameResourceDeposits->contains($gameResourceDeposit)) {
            $this->gameResourceDeposits->add($gameResourceDeposit);
            $gameResourceDeposit->setGame($this);
        }

        return $this;
    }

    public function removeGameResourceDeposit(GameResourceDeposit $gameResourceDeposit): static
    {
        if ($this->gameResourceDeposits->removeElement($gameResourceDeposit)) {
            if ($gameResourceDeposit->getGame() === $this) {
                $gameResourceDeposit->setGame(null);
            }
        }

        return $this;
    }
}
