<?php
namespace App\MessageHandler;

use App\Domain\Events\EventPublisher;
use App\Entity\Building;
use App\Entity\Delivery;
use App\Entity\Player;
use App\Entity\PlayerInventory;
use App\Entity\ResourceType;
use App\Enum\DeliveryStatus;
use App\Message\ProcessProductionMessage;
use App\Repository\BuildingRepository;
use App\Repository\DeliveryRepository;
use App\Service\CoordinateService;
use App\Service\Game\Generate\OsrmService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
class ProcessProductionHandler
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly BuildingRepository $buildingRepository,
        private readonly DeliveryRepository $deliveryRepository,
        private readonly OsrmService $osrmService,
        private readonly CoordinateService $coordinateService,
        private readonly EventPublisher $eventPublisher,
    ) {}

    public function __invoke(ProcessProductionMessage $message): void
    {
        $now = new \DateTimeImmutable();

        // 1. Rattrapage : créer/créditer les heures manquées pendant l'arrêt du scheduler
        $this->catchUpMissedDeliveries($now);

        // 2. WAITING → IN_TRANSIT pour les livraisons prêtes
        $this->processWaitingToInProgress($now);

        // 3. Mettre à jour le progress des IN_TRANSIT et passer en DELIVERED si terminé
        $this->processInProgressToDelivered($now);

        // 4. S'assurer qu'il y a toujours une WAITING par bâtiment
        $this->ensureWaitingExists($now);

        $this->em->flush();
    }

    /**
     * Rattrapage des heures manquées pendant l'arrêt du scheduler.
     * Pour chaque bâtiment, calcule les heures écoulées depuis le dernier
     * scheduledAt connu, crée les DELIVERED manquants et crédite l'inventaire.
     */
    private function catchUpMissedDeliveries(\DateTimeImmutable $now): void
    {
        $players = $this->em->getRepository(Player::class)->findAll();

        foreach ($players as $player) {
            $base = $this->buildingRepository->findBaseForPlayer($player);
            if (!$base) continue;

            $buildings = $this->buildingRepository->getProducerBuildings($player);

            foreach ($buildings as $building) {
                $this->catchUpBuilding($building, $base, $now);
            }
        }
    }

    private function catchUpBuilding(
        Building $building,
        Building $base,
        \DateTimeImmutable $now
    ): void {
        $buildingType = $building->getBuildingType();
        if (!$buildingType->getResourceType() || $buildingType->getProductionRate() <= 0) return;

        $player       = $building->getPlayer();
        $resourceType = $buildingType->getResourceType();

        // Quantité selon le niveau ACTUEL du bâtiment
        $quantity = (int)($buildingType->getProductionRate() * ($building->getLevel() ?? 1));

        // Trouver la dernière livraison connue (tous statuts)
        $lastDelivery = $this->deliveryRepository->findLastDeliveredForBuilding($building);

        // Point de départ : scheduledAt de la dernière ou création du bâtiment arrondie à l'heure
        if ($lastDelivery) {
            $lastScheduledAt = $lastDelivery->getScheduledAt();
            if (!$lastScheduledAt || $lastScheduledAt > $now) {
                return;
            }
        } else {
            // Premier lancement : partir de la création du bâtiment arrondie à l'heure
            $createdAt = $building->getCreatedAt();
            $lastScheduledAt = $createdAt->setTime((int)$createdAt->format('H'), 0, 0);
        }

        // Combien d'heures complètes depuis le dernier scheduledAt
        $hoursElapsed = (int) floor(
            ($now->getTimestamp() - $lastScheduledAt->getTimestamp()) / 3600
        );

        if ($hoursElapsed <= 0) return;

        // Récupérer la route une seule fois
        $routeData      = $this->getRouteData($building, $base);
        $transitSeconds = $routeData['duration'];
        $waypoints      = $routeData['waypoints'];

        // Créer toutes les heures manquées
        for ($i = 1; $i <= $hoursElapsed; $i++) {
            $scheduledAt = $lastScheduledAt->modify("+{$i} hours");

            $existingDelivery = $this->deliveryRepository->findByBuildingAndScheduledAt($building, $scheduledAt);

            if ($existingDelivery) {
                if (
                    in_array(
                        $existingDelivery->getStatus(),
                        [
                            DeliveryStatus::WAITING,
                            DeliveryStatus::IN_TRANSIT,
                        ],
                        true
                    )
                ) {
                    $existingDelivery->setStatus(DeliveryStatus::DELIVERED);
                    $existingDelivery->setDeliveredAt($scheduledAt->modify("+{$transitSeconds} seconds"));
                    $existingDelivery->setProgress(100);

                    $this->creditInventory(
                        $player,
                        $resourceType,
                        $quantity
                    );
                }

                continue;
            }

            // Sinon on crée la livraison manquante
            $delivery = $this->buildDelivery(
                $building,
                $base,
                $resourceType,
                $quantity,
                $scheduledAt,
                $transitSeconds,
                $waypoints,
                $player
            );

            $delivery->setStatus(DeliveryStatus::DELIVERED);
            $delivery->setDeliveredAt(
                $scheduledAt->modify("+{$transitSeconds} seconds")
            );
            $delivery->setProgress(100);

            $this->em->persist($delivery);

            $this->creditInventory(
                $player,
                $resourceType,
                $quantity
            );
        }
    }

    /**
     * WAITING → IN_TRANSIT pour les livraisons dont scheduledAt <= now
     */
    private function processWaitingToInProgress(\DateTimeImmutable $now): void
    {
        $waitingDeliveries = $this->deliveryRepository->findWaiting($now);

        foreach ($waitingDeliveries as $delivery) {
            $building = $delivery->getSourceBuilding();
            $player     = $delivery->getPlayer();

            // Calculer la route et stocker les waypoints
            $routeData = $this->getRouteData($building, $delivery->getTargetBuilding());
            $delivery->setWaypoints($routeData['waypoints']);
            $delivery->setEstimatedTime($routeData['duration']);
            $delivery->setStatus(DeliveryStatus::IN_TRANSIT);
            $delivery->setProgress(0);

            // Envoyer notification via EventPublisher
            $this->eventPublisher->publish($player, 'delivery_update', [
                'deliveryId' => $delivery->getId(),
                'buildingId' => $building->getId(),
                'status' => DeliveryStatus::IN_TRANSIT->value,
                'progress' => 0,
                'waypoints' => $routeData['waypoints'],
                'resourceCode' => $delivery->getResource()?->getCode()?->value,
                'quantity' => $delivery->getQuantity(),
                'duration' => $routeData['duration'],
            ]);
        }

        $this->em->flush();
    }

    /**
     * Mettre à jour le progress des IN_TRANSIT, passer en DELIVERED si terminé
     */
    private function processInProgressToDelivered(\DateTimeImmutable $now): void
{
    $inTransitDeliveries = $this->deliveryRepository->findInProgressAll();

    foreach ($inTransitDeliveries as $delivery) {
        $building       = $delivery->getSourceBuilding();
        $player        = $delivery->getPlayer();
        $transitStart   = $delivery->getScheduledAt();
        $transitSeconds = $delivery->getEstimatedTime();

        if ($transitSeconds <= 0) {
            continue;
        }

        // Ignorer les livraisons dont le départ est dans le futur
        if ($transitStart > $now) {
            continue;
        }

        $elapsed = $now->getTimestamp() - $transitStart->getTimestamp();

        $progress = min(
            100,
            max(
                0,
                (int) (($elapsed / $transitSeconds) * 100)
            )
        );

        // Éviter les UPDATE SQL inutiles
        if ($delivery->getProgress() !== $progress) {
            $delivery->setProgress($progress);
        }

        // Livraison terminée
        if ($progress >= 100) {

            // Éviter de retraiter une livraison déjà livrée
            if ($delivery->getStatus() === DeliveryStatus::DELIVERED) {
                continue;
            }

            $delivery->setStatus(DeliveryStatus::DELIVERED);
            $delivery->setDeliveredAt($now);

            // Créditer l'inventaire
            $this->creditInventory(
                $player,
                $delivery->getResource(),
                $delivery->getQuantity()
            );

            // Envoyer mise à jour inventaire
            $inventories = $this->em
                ->getRepository(PlayerInventory::class)
                ->findBy(['player' => $player]);

            $resources = [];

            foreach ($inventories as $inventory) {
                $resources[
                    strtolower($inventory->getResourceType()->getCode()->value)
                ] = $inventory->getQuantity();
            }

            $this->eventPublisher->publish($player, 'inventory_update', [
                'resources' => $resources,
            ]);

            // Notifier uniquement la fin de livraison
            $this->eventPublisher->publish($player, 'delivery_update', [
                'deliveryId' => $delivery->getId(),
                'buildingId' => $building->getId(),
                'status' => DeliveryStatus::DELIVERED->value,
                'progress' => 100,
                'resourceCode' => $delivery->getResource()?->getCode()?->value,
                'quantity' => $delivery->getQuantity(),
            ]);
        }
    }

    // Un seul flush à la fin
    $this->em->flush();
}

    /**
     * S'assurer qu'il y a toujours exactement une WAITING par bâtiment producteur.
     * Appelé après le rattrapage et les transitions pour combler les trous.
     */
    private function ensureWaitingExists(\DateTimeImmutable $now): void
    {
        $players = $this->em->getRepository(Player::class)->findAll();

        foreach ($players as $player) {
            $base = $this->buildingRepository->findBaseForPlayer($player);
            if (!$base) continue;

            $buildings = $this->buildingRepository->getProducerBuildings($player);

            foreach ($buildings as $building) {
                $this->ensureOneWaiting($building, $base, $now);
            }
        }
    }

    private function ensureOneWaiting(
        Building $building,
        Building $base,
        \DateTimeImmutable $now
    ): void {
        $buildingType = $building->getBuildingType();
        if (!$buildingType->getResourceType() || $buildingType->getProductionRate() <= 0) return;

        // Si une WAITING ou IN_TRANSIT existe déjà → rien à faire
        $hasWaiting = $this->deliveryRepository->hasWaitingDeliveryForBuilding($building);

        if ($hasWaiting) {
            return;
        }

        $player        = $building->getPlayer();
        $quantity     = (int)($buildingType->getProductionRate() * ($building->getLevel() ?? 1));
        $resourceType = $buildingType->getResourceType();

        // Trouver la dernière livraison pour calculer le prochain scheduledAt
        $lastDelivery = $this->deliveryRepository->findLatestScheduledDelivery($building);

        if ($lastDelivery) {
            // Prochaine heure après la dernière scheduledAt
            $nextScheduledAt = $lastDelivery->getScheduledAt()->modify('+1 hour');
        } else {
            // Premier bâtiment sans livraison : dans 1h
            $nextScheduledAt = $now->modify('+1 hour');
        }

        // Récupérer route depuis la dernière livraison ou recalculer
        if ($lastDelivery && $lastDelivery->getWaypoints()) {
            $waypoints      = $lastDelivery->getWaypoints();
            $transitSeconds = $lastDelivery->getEstimatedTime();
        } else {
            $routeData      = $this->getRouteData($building, $base);
            $waypoints      = $routeData['waypoints'];
            $transitSeconds = $routeData['duration'];
        }

        $delivery = $this->buildDelivery(
            $building, $base, $resourceType,
            $quantity, $nextScheduledAt, $transitSeconds, $waypoints, $player
        );
        $delivery->setStatus(DeliveryStatus::WAITING);
        $this->em->persist($delivery);
    }

    private function buildDelivery(
        Building $building,
        Building $base,
        ResourceType $resourceType,
        int $quantity,
        \DateTimeImmutable $scheduledAt,
        int $transitSeconds,
        ?array $waypoints,
        Player $player
    ): Delivery {
        $delivery = new Delivery();
        $delivery->setSourceBuilding($building);
        $delivery->setTargetBuilding($base);
        $delivery->setResource($resourceType);
        $delivery->setQuantity($quantity);
        $delivery->setScheduledAt($scheduledAt);
        $delivery->setEstimatedTime($transitSeconds);
        $delivery->setProgress(0);
        $delivery->setWaypoints($waypoints);
        $delivery->setPlayer($player);
        return $delivery;
    }

    private function getRouteData(Building $building, Building $base): array
    {
        return $this->osrmService->getRoute(
            $building->getLatitudeBuild(), $building->getLongitudeBuild(),
            $base->getLatitudeBuild(),     $base->getLongitudeBuild()
        );
    }

    private function creditInventory(Player $player, ResourceType $resourceType, int $quantity): void
    {
        $inventory = $this->em->getRepository(PlayerInventory::class)
            ->findOneBy(['player' => $player, 'resourceType' => $resourceType]);

        if (!$inventory) {
            $inventory = new PlayerInventory();
            $inventory->setPlayer($player);
            $inventory->setResourceType($resourceType);
            $inventory->setQuantity(0);
            $this->em->persist($inventory);
        }

        $inventory->setQuantity($inventory->getQuantity() + $quantity);
        $inventory->setUpdatedAt(new \DateTimeImmutable());

        $this->eventPublisher->publish($player, 'inventory_update', [
            $resourceType->getCode()->value => $inventory->getQuantity(),
        ]);
    }
}