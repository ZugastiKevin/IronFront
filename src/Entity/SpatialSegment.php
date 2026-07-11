<?php

namespace App\Entity;

use App\Repository\SpatialSegmentRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SpatialSegmentRepository::class)]
#[ORM\Table(name: 'spatial_segment')]
#[ORM\Index(name: 'idx_spatial_segment_cell', columns: ['cell_id'])]
#[ORM\Index(name: 'idx_spatial_segment_segment', columns: ['segment_id'])]
class SpatialSegment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(name: 'cell_id', length: 50)]
    private string $cellId;

    #[ORM\Column(name: 'segment_id')]
    private int $segmentId;

    public function __construct(string $cellId = '', int $segmentId = 0)
    {
        $this->cellId = $cellId;
        $this->segmentId = $segmentId;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCellId(): string
    {
        return $this->cellId;
    }

    public function setCellId(string $cellId): static
    {
        $this->cellId = $cellId;
        return $this;
    }

    public function getSegmentId(): int
    {
        return $this->segmentId;
    }

    public function setSegmentId(int $segmentId): static
    {
        $this->segmentId = $segmentId;
        return $this;
    }
}