<?php

namespace App\Repository;

use App\Entity\Building;
use App\Entity\Delivery;
use App\Entity\Player;
use App\Enum\DeliveryStatus;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class DeliveryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Delivery::class);
    }

    /**
     * Livraisons IN_TRANSIT pour un joueur (carte)
     */
    public function findInTransitForPlayer(Player $player): array
    {
        return $this->createQueryBuilder('d')
            ->where('d.player = :player')
            ->andWhere('d.status = :status')
            ->andWhere('d.waypoints IS NOT NULL')
            ->setParameter('player', $player)
            ->setParameter('status', DeliveryStatus::IN_TRANSIT)
            ->getQuery()
            ->getResult();
    }

    /**
     * Toutes les livraisons IN_TRANSIT (scheduler)
     */
    public function findInProgressAll(): array
    {
        return $this->createQueryBuilder('d')
            ->where('d.status = :status')
            ->andWhere('d.waypoints IS NOT NULL')
            ->setParameter('status', DeliveryStatus::IN_TRANSIT)
            ->getQuery()
            ->getResult();
    }

    /**
     * Livraisons IN_TRANSIT pour un joueur avec un progress minimum
     */
    public function findInProgress(?Player $player = null, int $minProgress = 0): array
    {
        $qb = $this->createQueryBuilder('d')
            ->where('d.status = :status')
            ->andWhere('d.progress >= :minProgress')
            ->andWhere('d.waypoints IS NOT NULL')
            ->setParameter('status', DeliveryStatus::IN_TRANSIT)
            ->setParameter('minProgress', $minProgress);

        if ($player !== null) {
            $qb->andWhere('d.player = :player')
               ->setParameter('player', $player);
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * Prochaine livraison WAITING pour un bâtiment (popup timer)
     */
    public function findNextWaitingForBuilding(Building $building): ?Delivery
    {
        return $this->createQueryBuilder('d')
            ->where('d.sourceBuilding = :building')
            ->andWhere('d.status = :status')
            ->setParameter('building', $building)
            ->setParameter('status', DeliveryStatus::WAITING)
            ->orderBy('d.scheduledAt', 'ASC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Temps restant avant la prochaine livraison d'un bâtiment.
     */
    public function getTimeUntilNextDeparture(Building $building): ?int
    {
        $now      = new \DateTimeImmutable();
        $statuses = [DeliveryStatus::WAITING, DeliveryStatus::IN_TRANSIT];

        $delivery = $this->createQueryBuilder('d')
            ->where('d.sourceBuilding = :building')
            ->andWhere('d.status IN (:statuses)')
            ->andWhere('d.scheduledAt IS NOT NULL')
            ->setParameter('building', $building)
            ->setParameter('statuses', $statuses)
            ->orderBy('d.scheduledAt', 'ASC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        if (!$delivery) {
            return null;
        }

        if ($delivery->getStatus() === DeliveryStatus::WAITING) {
            $remaining = $delivery->getScheduledAt()->getTimestamp() - $now->getTimestamp();
            return (int) $remaining; // peut être négatif si en retard
        }

        // IN_TRANSIT → temps restant basé sur le progress
        $estimatedTime = $delivery->getEstimatedTime();
        $progress      = $delivery->getProgress();

        if ($progress >= 100) return 0;

        return max(0, (int)(($estimatedTime * (100 - $progress)) / 100));
    }

    /**
     * Livraisons WAITING prêtes à partir (scheduledAt <= now)
     */
    public function findWaiting(\DateTimeImmutable $now): array
    {
        return $this->createQueryBuilder('d')
            ->where('d.status = :status')
            ->andWhere('d.scheduledAt <= :now')
            ->setParameter('status', DeliveryStatus::WAITING)
            ->setParameter('now', $now)
            ->getQuery()
            ->getResult();
    }

    /**
     * Livraison programmée à une date précise pour un bâtiment.
     */
    public function findByBuildingAndScheduledAt(Building $building, \DateTimeImmutable $scheduledAt): ?Delivery
    {
        return $this->createQueryBuilder('d')
            ->where('d.sourceBuilding = :building')
            ->andWhere('d.scheduledAt = :scheduledAt')
            ->setParameter('building', $building)
            ->setParameter('scheduledAt', $scheduledAt)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Vérifie qu'une livraison WAITING ou IN_TRANSIT existe pour un bâtiment.
     */
    public function hasWaitingDeliveryForBuilding(Building $building): bool
    {
        return (int) $this->createQueryBuilder('d')
            ->select('COUNT(d.id)')
            ->where('d.sourceBuilding = :building')
            ->andWhere('d.status IN (:statuses)')
            ->setParameter('building', $building)
            ->setParameter('statuses', [DeliveryStatus::WAITING, DeliveryStatus::IN_TRANSIT])
            ->getQuery()
            ->getSingleScalarResult() > 0;
    }

    /**
     * Dernière livraison programmée (tous statuts).
     */
    public function findLatestScheduledDelivery(Building $building): ?Delivery
    {
        return $this->createQueryBuilder('d')
            ->where('d.sourceBuilding = :building')
            ->andWhere('d.scheduledAt IS NOT NULL')
            ->setParameter('building', $building)
            ->orderBy('d.scheduledAt', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Dernière livraison DELIVERED pour un bâtiment.
     */
    public function findLastDeliveredForBuilding(Building $building): ?Delivery
    {
        return $this->createQueryBuilder('d')
            ->where('d.sourceBuilding = :building')
            ->andWhere('d.status = :status')
            ->setParameter('building', $building)
            ->setParameter('status', DeliveryStatus::DELIVERED)
            ->orderBy('d.scheduledAt', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}