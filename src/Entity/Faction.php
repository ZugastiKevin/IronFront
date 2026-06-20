<?php

namespace App\Entity;

use App\Entity\FactionBuildingImage;
use App\Repository\FactionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FactionRepository::class)]
class Faction
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 191)]
    private ?string $label = null;

    #[ORM\Column(length: 100, unique: true)]
    private ?string $code = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    /**
     * @var Collection<int, Player>
     */
    #[ORM\OneToMany(targetEntity: Player::class, mappedBy: 'faction')]
    private Collection $players;

    /**
     * @var Collection<int, FactionBuildingImage>
     */
    #[ORM\OneToMany(targetEntity: FactionBuildingImage::class, mappedBy: 'faction', orphanRemoval: true)]
    private Collection $factionBuildingImages;

    public function __construct()
    {
        $this->players = new ArrayCollection();
        $this->factionBuildingImages = new ArrayCollection();
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

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): static
    {
        $this->code = $code;

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
            $player->setFaction($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, FactionBuildingImage>
     */
    public function getFactionBuildingImages(): Collection
    {
        return $this->factionBuildingImages;
    }

    public function addFactionBuildingImage(FactionBuildingImage $factionBuildingImage): static
    {
        if (!$this->factionBuildingImages->contains($factionBuildingImage)) {
            $this->factionBuildingImages->add($factionBuildingImage);
            $factionBuildingImage->setFaction($this);
        }

        return $this;
    }

    public function removeFactionBuildingImage(FactionBuildingImage $factionBuildingImage): static
    {
        if ($this->factionBuildingImages->removeElement($factionBuildingImage)) {
            // set the owning side to null (unless already changed)
            if ($factionBuildingImage->getFaction() === $this) {
                $factionBuildingImage->setFaction(null);
            }
        }

        return $this;
    }

    public function __toString(): string
    {
        return $this->label ?? '';
    }
}
