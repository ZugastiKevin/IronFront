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

    #[ORM\Column(length: 255)]
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
     * @var Collection<int, User>
     */
    #[ORM\OneToMany(targetEntity: User::class, mappedBy: 'game')]
    private Collection $users;

    #[ORM\OneToMany(targetEntity: GameResourceDeposit::class, mappedBy: 'game', orphanRemoval: true)]
    private Collection $gameResourceDeposits;

    #[ORM\OneToMany(mappedBy: 'game', targetEntity: Delivery::class, orphanRemoval: true)]
    private Collection $Deliveries;

    #[ORM\OneToMany(mappedBy: 'game', targetEntity: Building::class, orphanRemoval: true)]
    private Collection $buildings;

    #[ORM\OneToMany(mappedBy: 'game', targetEntity: PlayerInventory::class, orphanRemoval: true)]
    private Collection $playerInventories;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->gameResourceDeposits = new ArrayCollection();
        $this->Deliveries = new ArrayCollection();
        $this->buildings = new ArrayCollection();
        $this->playerInventories = new ArrayCollection();
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
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): static
    {
        if (!$this->users->contains($user)) {
            $this->users->add($user);
            $user->setGame($this);
        }

        return $this;
    }

    public function removeUser(User $user): static
    {
        if ($this->users->removeElement($user)) {
            // set the owning side to null (unless already changed)
            if ($user->getGame() === $this) {
                $user->setGame(null);
            }
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

    /**
     * @return Collection<int, Delivery>
     */
    public function getDeliveries(): Collection
    {
        return $this->Deliveries;
    }

    public function addDelivery(Delivery $delivery): static
    {
        if (!$this->Deliveries->contains($delivery)) {
            $this->Deliveries->add($delivery);
            $delivery->setGame($this);
        }

        return $this;
    }

    public function removeDelivery(Delivery $delivery): static
    {
        if ($this->Deliveries->removeElement($delivery)) {
            if ($delivery->getGame() === $this) {
                $delivery->setGame(null);
            }
        }

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
            $building->setGame($this);
        }

        return $this;
    }

    public function removeBuilding(Building $building): static
    {
        if ($this->buildings->removeElement($building)) {
            if ($building->getGame() === $this) {
                $building->setGame(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PlayerInventory>
     */
    public function getPlayerInventories(): Collection
    {
        return $this->playerInventories;
    }
}
