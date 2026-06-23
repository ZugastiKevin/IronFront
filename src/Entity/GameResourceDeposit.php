<?php

namespace App\Entity;

use App\Repository\GameResourceDepositRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GameResourceDepositRepository::class)]
#[ORM\UniqueConstraint(name: 'game_deposit_unique', columns: ['game_id', 'resource_deposit_id'])]
class GameResourceDeposit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'gameResourceDeposits')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Game $game = null;

    #[ORM\ManyToOne(inversedBy: 'gameResourceDeposits')]
    #[ORM\JoinColumn(nullable: false)]
    private ?ResourceDeposit $resourceDeposit = null;

    #[ORM\OneToOne(inversedBy: 'gameResourceDeposit')]
    #[ORM\JoinColumn(name: 'building_id', referencedColumnName: 'id')]
    private ?Building $building = null;

    #[ORM\Column]
    private bool $isCaptured = false;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGame(): ?Game
    {
        return $this->game;
    }

    public function setGame(?Game $game): static
    {
        $this->game = $game;

        return $this;
    }

    public function getResourceDeposit(): ?ResourceDeposit
    {
        return $this->resourceDeposit;
    }

    public function setResourceDeposit(?ResourceDeposit $resourceDeposit): static
    {
        $this->resourceDeposit = $resourceDeposit;

        return $this;
    }

    public function isCaptured(): bool
    {
        return $this->isCaptured;
    }

    public function setIsCaptured(bool $isCaptured): static
    {
        $this->isCaptured = $isCaptured;

        return $this;
    }

    public function getBuilding(): ?Building
    {
        return $this->building;
    }

    public function setBuilding(?Building $building): static
    {
        $this->building = $building;

        return $this;
    }
}