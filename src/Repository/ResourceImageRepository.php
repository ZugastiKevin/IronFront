<?php

namespace App\Repository;

use App\Entity\ResourceImage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceRepository<ResourceImage>
 */
class ResourceImageRepository extends ServiceRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ResourceImage::class);
    }
}