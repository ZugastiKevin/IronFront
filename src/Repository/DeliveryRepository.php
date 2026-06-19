<?php

namespace App\Repository;

use App\Entity\Building;
use App\Entity\Game;
use App\Entity\Delivery;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class DeliveryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Delivery::class);
    }

    /**
     * Trouve les livraisons prêtes à être démarrées (waiting mais scheduledAt passé)
     */
    public function findReadyToStart(\DateTimeImmutable $now): array
    {
        return $this->createQueryBuilder('d')
            ->where('d.status = :status')
            ->andWhere('d.scheduledAt <= :now')
            ->setParameter('status', Delivery::STATUS_WAITING)
            ->setParameter('now', $now)
            ->getQuery()
            ->getResult();
    }

    /**
     * Vérifie s'il y a des livraisons en attente/pendant pour une ressource donnée
     * Utilisé pour éviter les doublons de production
     */
    public function hasPendingDeliveryForResource(\App\Entity\User $user, string $resourceCode): bool
    {
        $result = $this->createQueryBuilder('d')
            ->select('COUNT(d.id)')
            ->join('d.sourceBuilding', 'b')
            ->join('d.resource', 'r')
            ->where('b.user = :user')
            ->andWhere('r.code = :resourceCode')
            ->andWhere('d.status IN (:statuses)')
            ->setParameter('user', $user)
            ->setParameter('resourceCode', $resourceCode)
            ->setParameter('statuses', [Delivery::STATUS_WAITING, Delivery::STATUS_PENDING, Delivery::STATUS_IN_TRANSIT])
            ->getQuery()
            ->getSingleScalarResult();

        return (int) $result > 0;
    }

    /**
     * Vérifie s'il y a des livraisons pour une ressource donnée
     * @deprecated Depuis 2024-01, utilisez hasPendingDeliveryForResource() à la place
     */
    public function hasDeliveryForResource(User $user, string $resourceCode): bool
    {
        return $this->hasPendingDeliveryForResource($user, $resourceCode);
    }

    /**
     * Trouve les livraisons en cours avec un seuil de progrès
     */
    public function findInProgress(int $minProgress = 0): array
    {
        return $this->createQueryBuilder('d')
            ->where('d.status = :status')
            ->andWhere('d.progress >= :minProgress')
            ->setParameter('status', Delivery::STATUS_IN_TRANSIT)
            ->setParameter('minProgress', $minProgress)
            ->getQuery()
            ->getResult();
    }

    /**
     * Trouve toutes les livraisons en transit
     */
    public function findInProgressAll(Game $game): array
    {
        return $this->createQueryBuilder('d')
            ->where('d.status = :status')
            ->andWhere('d.game = :game')
            ->setParameter('status', Delivery::STATUS_IN_TRANSIT)
            ->setParameter('game', $game)
            ->getQuery()
            ->getResult();
    }

    /**
     * Trouve une livraison en attente ou en transit pour un bâtiment donné
     */
    public function findPendingByBuilding(int $buildingId): ?Delivery
    {
        return $this->createQueryBuilder('d')
            ->where('d.sourceBuilding = :buildingId')
            ->andWhere('d.status IN (:statuses)')
            ->setParameter('buildingId', $buildingId)
            ->setParameter('statuses', [Delivery::STATUS_PENDING, Delivery::STATUS_IN_TRANSIT])
            ->orderBy('d.createdAt', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Trouve la prochaine livraison pour un bâtiment (waiting ou in_transit)
     * Le bâtiment peut être source (producteur) ou cible (base)
     * Retourne null si pas de livraison
     */
    public function findNextDepartureByBuilding(int $buildingId): ?Delivery
    {
        // Chercher par sourceBuilding d'abord
        $delivery = $this->createQueryBuilder('d')
            ->where('d.sourceBuilding = :buildingId')
            ->andWhere('d.status IN (:statuses)')
            ->setParameter('buildingId', $buildingId)
            ->setParameter('statuses', [Delivery::STATUS_WAITING, Delivery::STATUS_PENDING, Delivery::STATUS_IN_TRANSIT])
            ->orderBy('d.createdAt', 'ASC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        // Puis par targetBuilding
        if (!$delivery) {
            $delivery = $this->createQueryBuilder('d')
                ->where('d.targetBuilding = :buildingId')
                ->andWhere('d.status IN (:statuses)')
                ->setParameter('buildingId', $buildingId)
                ->setParameter('statuses', [Delivery::STATUS_WAITING, Delivery::STATUS_PENDING, Delivery::STATUS_IN_TRANSIT])
                ->orderBy('d.createdAt', 'ASC')
                ->setMaxResults(1)
                ->getQuery()
                ->getOneOrNullResult();
        }

        return $delivery;
    }

    /**
     * Calcule le temps restant pour la PROCHAINE livraison
     * Ignore les livraisons déjà passées
     * Retourne null si pas de livraison
     */
    public function getTimeUntilNextDeparture(int $buildingId): ?int
    {
        $now = new \DateTimeImmutable();
        $statuses = [Delivery::STATUS_WAITING, Delivery::STATUS_PENDING, Delivery::STATUS_IN_TRANSIT];

        // Chercher la prochaine livraison par sourceBuilding (producteur)
        $delivery = $this->createQueryBuilder('d')
            ->where('d.sourceBuilding = :buildingId')
            ->andWhere('d.status IN (:statuses)')
            ->andWhere('d.scheduledAt IS NOT NULL')
            ->andWhere('d.scheduledAt > :now')
            ->setParameter('buildingId', $buildingId)
            ->setParameter('statuses', $statuses)
            ->setParameter('now', $now)
            ->orderBy('d.scheduledAt', 'ASC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        // Si pas trouvé, chercher aussi par targetBuilding (base)
        if (!$delivery) {
            $delivery = $this->createQueryBuilder('d')
                ->where('d.targetBuilding = :buildingId')
                ->andWhere('d.status IN (:statuses)')
                ->andWhere('d.scheduledAt IS NOT NULL')
                ->andWhere('d.scheduledAt > :now')
                ->setParameter('buildingId', $buildingId)
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
     * Trouve toutes les livraisons WAITING dont le moment d'envoi est passé
     */
    public function findWaiting(\DateTimeImmutable $now): array
    {
        return $this->createQueryBuilder('d')
            ->where('d.status = :status')
            ->andWhere('d.scheduledAt <= :now')
            ->setParameter('status', Delivery::STATUS_WAITING)
            ->setParameter('now', $now)
            ->getQuery()
            ->getResult();
    }

    /**
     * Trouve les livraisons en transit pour un utilisateur
     */
    public function findInProgressWithRoute(User $user): array
    {
        return $this->createQueryBuilder('d')
            ->where('d.status = :status')
            ->andWhere('d.user = :user')
            ->andWhere('d.waypoints IS NOT NULL')
            ->setParameter('status', Delivery::STATUS_IN_TRANSIT)
            ->setParameter('user', $user)
            ->getQuery()
            ->getResult();
    }

    /**
     * Trouve les livraisons en transit pour tous
     */
    public function findInProgressWithRoutes(): array
    {
        return $this->createQueryBuilder('d')
            ->where('d.status = :status')
            ->andWhere('d.waypoints IS NOT NULL')
            ->setParameter('status', Delivery::STATUS_IN_TRANSIT)
            ->getQuery()
            ->getResult();
    }

    /**
     * Vérifie si une livraison WAITING existe pour un bâtiment à une heure donnée
     * @deprecated Utilisée uniquement dans les tests, remplacer par hasWaitingDeliveryForBuilding
     */
    public function findWaitingForBuildingAt(Building $building, \DateTimeImmutable $scheduledAt): ?Delivery
    {
        return $this->createQueryBuilder('d')
            ->where('d.sourceBuilding = :building')
            ->andWhere('d.status = :status')
            ->andWhere('d.scheduledAt = :scheduledAt')
            ->setParameter('building', $building)
            ->setParameter('status', Delivery::STATUS_WAITING)
            ->setParameter('scheduledAt', $scheduledAt)
            ->getQuery()
            ->getOneOrNullResult();
    }

    // Trouver une livraison par bâtiment et scheduledAt exact
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

    // Vérifie si une WAITING existe pour ce bâtiment
    public function hasWaitingDeliveryForBuilding(Building $building): bool
    {
        return (bool)$this->createQueryBuilder('d')
            ->select('COUNT(d.id)')
            ->where('d.sourceBuilding = :building')
            ->andWhere('d.status = :status')
            ->setParameter('building', $building)
            ->setParameter('status', Delivery::STATUS_WAITING)
            ->getQuery()
            ->getSingleScalarResult();
    }

    // Trouve la dernière livraison programmée pour un bâtiment
    public function findLatestScheduledDelivery(Building $building): ?Delivery
    {
        return $this->createQueryBuilder('d')
            ->where('d.sourceBuilding = :building')
            ->setParameter('building', $building)
            ->orderBy('d.scheduledAt', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findLastDeliveredForBuilding(Building $building): ?Delivery
    {
        return $this->createQueryBuilder('d')
            ->where('d.sourceBuilding = :building')
            ->andWhere('d.status = :status')
            ->setParameter('building', $building)
            ->setParameter('status', Delivery::STATUS_DELIVERED)
            ->orderBy('d.scheduledAt', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}