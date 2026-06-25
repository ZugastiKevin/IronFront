<?php

namespace App\Entity;

use App\Entity\ResourceImage;
use App\Enum\ResourceCode;
use App\Repository\ResourceTypeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ResourceTypeRepository::class)]
class ResourceType
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $label = null;

    #[ORM\Column(type: 'string',length: 191, enumType: ResourceCode::class)]
    private ResourceCode $code;

    #[ORM\Column(length: 7)]
    private ?string $color = null;

    #[ORM\Column]
    private int $rarity = 0;

    /**
     * @var Collection<int, ResourceImage>
     */
    #[ORM\OneToMany(targetEntity: ResourceImage::class, mappedBy: 'resourceType', orphanRemoval: true)]
    private Collection $resourceImages;

    public function __construct()
    {
        $this->resourceImages = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?ResourceCode
    { 
        return $this->code;
    }

    public function setCode(ResourceCode $code): static
    { 
        $this->code = $code; return $this;
    }

    public function getLabel(): ?string
    { 
        return $this->label;
    }

    public function setLabel(string $label): static
    {
        $this->label = $label; return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(?string $color): static
    {
        $this->color = $color;
        return $this;
    }

    public function __toString(): string
    {
        return $this->label ?? '';
    }

    public function getRarity(): int
    {
        return $this->rarity;
    }

    public function setRarity(int $rarity): static
    {
        $this->rarity = $rarity;
        return $this;
    }

    /**
     * @return Collection<int, ResourceImage>
     */
    public function getResourceImages(): Collection
    {
        return $this->resourceImages;
    }

    public function addResourceImage(ResourceImage $resourceImage): static
    {
        if (!$this->resourceImages->contains($resourceImage)) {
            $this->resourceImages->add($resourceImage);
            $resourceImage->setResourceType($this);
        }

        return $this;
    }

    public function removeResourceImage(ResourceImage $resourceImage): static
    {
        if ($this->resourceImages->removeElement($resourceImage)) {
            if ($resourceImage->getResourceType() === $this) {
                $resourceImage->setResourceType(null);
            }
        }

        return $this;
    }
}