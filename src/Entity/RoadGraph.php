<?php

namespace App\Entity;

use App\Repository\RoadGraphRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RoadGraphRepository::class)]
#[ORM\Table(name: 'road_graph')]
#[ORM\Index(name: 'idx_road_graph_node', columns: ['node_id'])]
#[ORM\Index(name: 'idx_road_graph_neighbor', columns: ['neighbor_id'])]
#[ORM\UniqueConstraint(name: 'uniq_road_graph', columns: ['node_id', 'neighbor_id', 'segment_id'])]
class RoadGraph
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(name: 'node_id')]
    private int $nodeId;

    #[ORM\Column(name: 'neighbor_id')]
    private int $neighborId;

    #[ORM\Column(name: 'segment_id')]
    private int $segmentId;

    public function __construct(int $nodeId = 0, int $neighborId = 0, int $segmentId = 0)
    {
        $this->nodeId = $nodeId;
        $this->neighborId = $neighborId;
        $this->segmentId = $segmentId;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNodeId(): int
    {
        return $this->nodeId;
    }

    public function setNodeId(int $nodeId): static
    {
        $this->nodeId = $nodeId;
        return $this;
    }

    public function getNeighborId(): int
    {
        return $this->neighborId;
    }

    public function setNeighborId(int $neighborId): static
    {
        $this->neighborId = $neighborId;
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