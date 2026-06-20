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
     * Retourne les livraisons en transit.
     * Si un joueur est fourni, limite aux livraisons du joueur.
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
     * Temps restant avant la prochaine livraison d'un bâtiment.
     * Ignore les livraisons déjà passées
     * Retourne null si pas de livraison
     */
    public function getTimeUntilNextDeparture(Building $building): ?int
    {
        $now = new \DateTimeImmutable();
        $statuses = [DeliveryStatus::WAITING, DeliveryStatus::PENDING, DeliveryStatus::IN_TRANSIT];

        // Chercher la prochaine livraison par sourceBuilding (producteur)
        $delivery = $this->createQueryBuilder('d')
            ->where('d.sourceBuilding = :building')
            ->andWhere('d.status IN (:statuses)')
            ->andWhere('d.scheduledAt IS NOT NULL')
            ->andWhere('d.scheduledAt > :now')
            ->setParameter('building', $building)
            ->setParameter('statuses', $statuses)
            ->setParameter('now', $now)
            ->orderBy('d.scheduledAt', 'ASC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        // Si pas trouvé, chercher aussi par targetBuilding (base)
        if (!$delivery) {
            $delivery = $this->createQueryBuilder('d')
                ->where('d.targetBuilding = :building')
                ->andWhere('d.status IN (:statuses)')
                ->andWhere('d.scheduledAt IS NOT NULL')
                ->andWhere('d.scheduledAt > :now')
                ->setParameter('building', $building)
                ->setParameter('statuses', $statuses)
                ->setParameter('now', $now)
                ->orderBy('d.scheduledAt', 'ASC')
                ->setMaxResults(1)
                ->getQuery()
                ->getOneOrNullResult();
        }

        if (!$delivery) {
            return null;
        }

        // Si la livraison est en attente (waiting), retourner le temps jusqu'au scheduledAt
        if ($delivery->isWaiting()) {
            $scheduledAt = $delivery->getScheduledAt();
            if (!$scheduledAt) {
                return null;
            }

            $remaining = $scheduledAt->getTimestamp() - $now->getTimestamp();
            return max(0, (int) $remaining);
        }

        // Si la livraison est en transit, calculer le temps restant basé sur le progrès
        $estimatedTime = $delivery->getEstimatedTime();
        $progress = $delivery->getProgress();

        if ($progress >= 100) {
            return 0;
        }

        $remaining = (int) (($estimatedTime * (100 - $progress)) / 100);
        return max(0, $remaining);
    }

    /**
     * Livraisons WAITING prêtes à partir.
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
     * Livraison programmée à une date précise.
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
     * Vérifie qu'une livraison WAITING existe déjà.
     */
    public function hasWaitingDeliveryForBuilding(Building $building): bool
    {
        return (int)$this->createQueryBuilder('d')
            ->select('COUNT(d.id)')
            ->where('d.sourceBuilding = :building')
            ->andWhere('d.status = :status')
            ->setParameter('building', $building)
            ->setParameter('status', DeliveryStatus::WAITING)
            ->getQuery()
            ->getSingleScalarResult() > 0;
    }

    /**
     * Dernière livraison programmée.
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
     * Dernière livraison terminée.
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