<?php

namespace App\Controller\Api;

use App\Entity\Delivery;
use App\Entity\User;
use App\Enum\DeliveryStatus;
use App\Repository\BuildingRepository;
use App\Repository\PlayerInventoryRepository;
use App\Repository\DeliveryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER')]
final class DeliveryController extends AbstractController
{
    public function __construct(
        private readonly HubInterface $hub,
        private readonly EntityManagerInterface $em,
    ) {}

    #[Route('/api/deliveries', methods: ['GET'])]
    public function getDeliveries(
        BuildingRepository $buildingRepo,
        DeliveryRepository $deliveryRepo
    ): JsonResponse {
        $user = $this->getUser();
        if (!$user instanceof User) {
            return $this->json(['error' => 'Not authenticated'], 401);
        }

        $base = $buildingRepo->findBaseForUser($user);
        if (!$base) {
            return $this->json([]);
        }

        $deliveries = $deliveryRepo->createQueryBuilder('d')
            ->where('d.targetBuilding = :base')
            ->andWhere('d.status IN (:statuses)')
            ->setParameter('base', $base)
            ->setParameter('statuses', [
                DeliveryStatus::WAITING,
                DeliveryStatus::IN_TRANSIT,
            ])
            ->getQuery()
            ->getResult();

        return $this->json(array_map(fn($d) => [
            'id'             => $d->getId(),
            'resource'       => $d->getResource()?->getCode(),
            'quantity'       => $d->getQuantity(),
            'status'         => $d->getStatus(),
            'progress'       => $d->getProgress(),
            'estimatedTime'  => $d->getEstimatedTime(),
            'scheduledAt'    => $d->getScheduledAt()?->format('c'),
            'waypoints'      => $d->getWaypoints(),
            'sourceBuilding' => $d->getSourceBuilding()?->getId(),
        ], $deliveries));
    }

    #[Route('/api/deliveries/{id}/arrive', methods: ['PATCH'])]
    public function markAsArrived(
        int $id,
        DeliveryRepository $deliveryRepo,
        PlayerInventoryRepository $inventoryRepo
    ): JsonResponse {
        $user = $this->getUser();
        if (!$user instanceof User) {
            return $this->json(['error' => 'Not authenticated'], 401);
        }

        $delivery = $deliveryRepo->find($id);
        if (!$delivery) {
            return $this->json(['error' => 'Delivery not found'], 404);
        }

        // Sécurité : vérifier que la livraison appartient bien à ce joueur
        if ($delivery->getUser()?->getId() !== $user->getId()) {
            return $this->json(['error' => 'Forbidden'], 403);
        }

        // Créditer l'inventaire
        $this->addResourcesToUser($delivery, $inventoryRepo);

        $delivery->setStatus(DeliveryStatus::DELIVERED);
        $delivery->setDeliveredAt(new \DateTimeImmutable());
        $this->em->flush();

        // Push Mercure → client retire le marker et rafraîchit l'inventaire
        $this->hub->publish(new Update(
            topics: ["game/delivery/{$user->getId()}"],
            data: json_encode([
                'id'     => $delivery->getId(),
                'status' => 'arrived',
            ]),
            private: true
        ));

        return $this->json(['status' => 'ok']);
    }

    private function addResourcesToUser(
        Delivery $delivery,
        PlayerInventoryRepository $inventoryRepo
    ): void {
        $user = $delivery->getSourceBuilding()?->getPlayer(); // ← via sourceBuilding
        $resourceType = $delivery->getResource();
        if (!$user || !$resourceType) return;

        $inventory = $inventoryRepo->findOneBy([
            'player'         => $user,
            'resourceType' => $resourceType,
        ]);

        if ($inventory) {
            $inventory->setQuantity($inventory->getQuantity() + $delivery->getQuantity());
        } else {
            $inventory = new \App\Entity\PlayerInventory();
            $inventory->setPlayer($user);
            $inventory->setResourceType($resourceType);
            $inventory->setQuantity($delivery->getQuantity());
            $this->em->persist($inventory);
        }
    }

    #[Route('/api/deliveries/in-transit', name: 'api_deliveries_in_transit', methods: ['GET'])]
    public function inTransit(DeliveryRepository $deliveryRepository): JsonResponse
    {
        $deliveries = $deliveryRepository->findInProgressWithRoutes();

        $result = [];
        foreach ($deliveries as $delivery) {
            $route = $delivery->getRouteData();
            if (!$route) continue;

            $waypoints = $route['waypoints'] ?? [];
            $progress = $delivery->getProgress();

            // Calculer la position actuelle du camion basée sur le progrès
            $currentPosition = $this->interpolatePosition($waypoints, $progress);

            $sourceBuilding = $delivery->getSourceBuilding();
            $faction = $sourceBuilding?->getUser()?->getFaction()?->getCode() ?? 'default';

            $result[] = [
                'deliveryId' => $delivery->getId(),
                'buildingId' => $delivery->getTargetBuilding()?->getId(),
                'resource' => $delivery->getResource()?->getCode(),
                'resourceLabel' => $delivery->getResource()?->getLabel(),
                'quantity' => $delivery->getQuantity(),
                'from' => $delivery->getSourceBuilding()?->getBuildingType()?->getLabel(),
                'to' => $delivery->getTargetBuilding()?->getBuildingType()?->getLabel(),
                'progress' => $progress,
                'estimatedTime' => $delivery->getEstimatedTime(),
                'waypoints' => $waypoints,
                'currentPosition' => $currentPosition,
                'faction' => $faction,
            ];
        }

        return $this->json($result);
    }

    #[Route('/api/deliveries/in-transit/list', name: 'api_deliveries_in_transit_list', methods: ['GET'])]
    public function inTransitList(DeliveryRepository $deliveryRepository): Response
    {
        $deliveries = $deliveryRepository->findInProgressWithRoutes();

        // Formater pour le template
        $formatted = [];
        foreach ($deliveries as $delivery) {
            $formatted[] = [
                'resource' => $delivery->getResource()?->getCode(),
                'quantity' => $delivery->getQuantity(),
                'progress' => $delivery->getProgress(),
            ];
        }

        return $this->render('game/_delivery_list.html.twig', ['deliveries' => $formatted]);
    }

    #[Route('/api/deliveries/refresh', name: 'api_deliveries_refresh', methods: ['POST'])]
    public function refresh(DeliveryRepository $deliveryRepository): Response
    {
        // Retourner les deliveries en transit pour debug
        $user = $this->getUser();
        if (!$user instanceof User) {
            return $this->json(['error' => 'not authenticated']);
        }

        $deliveries = $deliveryRepository->findInProgressWithRoute($user);

        $result = [];
        foreach ($deliveries as $delivery) {
            $route = $delivery->getRouteData();
            $waypoints = $route['waypoints'] ?? [];
            $progress = $delivery->getProgress();
            $currentPosition = $this->interpolatePosition($waypoints, $progress);

            $result[] = [
                'id' => $delivery->getId(),
                'status' => $delivery->getStatus(),
                'progress' => $progress,
                'scheduled_at' => $delivery->getScheduledAt()?->format('Y-m-d H:i:s'),
                'currentPosition' => $currentPosition,
            ];
        }

        return $this->json($result);
    }

    /**
     * Interpoler la position actuelle du camion sur le trajet
     */
    private function interpolatePosition(array $waypoints, int $progress): array
    {
        if (count($waypoints) < 2) {
            return $waypoints[0] ?? null;
        }

        $progressRatio = $progress / 100;
        $targetIndex = (int) floor($progressRatio * (count($waypoints) - 1));
        $targetIndex = min($targetIndex, count($waypoints) - 1);

        if ($targetIndex >= count($waypoints) - 1) {
            return $waypoints[count($waypoints) - 1];
        }

        // Interpolation linéaire entre deux points
        $segmentProgress = $progressRatio * (count($waypoints) - 1) - $targetIndex;
        $p1 = $waypoints[$targetIndex];
        $p2 = $waypoints[$targetIndex + 1];

        return [
            'lat' => $p1['lat'] + ($p2['lat'] - $p1['lat']) * $segmentProgress,
            'lng' => $p1['lng'] + ($p2['lng'] - $p1['lng']) * $segmentProgress,
        ];
    }
}