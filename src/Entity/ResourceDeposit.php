<?php

namespace App\Entity;

use App\Entity\Road;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Repository\ResourceDepositRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ResourceDepositRepository::class)]
class ResourceDeposit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: ResourceType::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?ResourceType $resourceType = null;

    #[ORM\Column(type: 'float')]
    private float $latitude;

    #[ORM\Column(type: 'float')]
    private float $longitude;

    /**
     * Multiplicateur de richesse du filon.
     *
     * Exemples :
     * 0.6 = très pauvre
     * 0.8 = pauvre
     * 1.0 = normal
     * 1.2 = riche
     * 1.4 = très riche
     */
    #[ORM\Column(type: 'float')]
    private float $richness = 1.0;

    #[ORM\ManyToOne(targetEntity: Road::class, inversedBy: 'deposits')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Road $road = null;

    #[ORM\OneToMany(targetEntity: GameResourceDeposit::class, mappedBy: 'resourceDeposit', orphanRemoval: true)]
    private Collection $gameResourceDeposits;

    public function __construct(ResourceType $resourceType, float $richness = 1.0)
    {
        $this->resourceType = $resourceType;
        $this->richness = $richness;
        $this->gameResourceDeposits = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getResourceType(): ?ResourceType
    {
        return $this->resourceType;
    }

    public function setResourceType(?ResourceType $resourceType): static
    {
        $this->resourceType = $resourceType;

        return $this;
    }

    public function getLatitude(): float
    {
        return $this->latitude;
    }

    public function setLatitude(float $latitude): static
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getLongitude(): float
    {
        return $this->longitude;
    }

    public function setLongitude(float $longitude): static
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getRichness(): float
    {
        return $this->richness;
    }

    public function setRichness(float $richness): static
    {
        $this->richness = $richness;

        return $this;
    }

    public function getRoad(): ?Road
    {
        return $this->road;
    }

    public function setRoad(?Road $road): static
    {
        $this->road = $road;

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
            $gameResourceDeposit->setResourceDeposit($this);
        }

        return $this;
    }

    public function removeGameResourceDeposit(GameResourceDeposit $gameResourceDeposit): static
    {
        if ($this->gameResourceDeposits->removeElement($gameResourceDeposit)) {
            if ($gameResourceDeposit->getResourceDeposit() === $this) {
                $gameResourceDeposit->setResourceDeposit(null);
            }
        }

        return $this;
    }
}