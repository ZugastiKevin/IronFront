<?php

namespace App\Entity;

use App\Repository\ResourceImageRepository;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ResourceImageRepository::class)]
class ResourceImage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 191)]
    private ?string $imagePath = null;

    private ?UploadedFile $imageFile = null;

    #[ORM\ManyToOne(inversedBy: 'resourceImages')]
    #[ORM\JoinColumn(nullable: false)]
    private ?ResourceType $resourceType = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImagePath(): ?string
    {
        return $this->imagePath;
    }

    public function setImagePath(string $imagePath): static
    {
        $this->imagePath = $imagePath;

        return $this;
    }

    public function getImageFile(): ?UploadedFile
    {
        return $this->imageFile;
    }

    public function setImageFile(?UploadedFile $imageFile): void
    {
        $this->imageFile = $imageFile;
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
}