<?php

namespace App\Controller\Api;

use App\Entity\Delivery;
use App\Entity\PlayerInventory;
use App\Enum\DeliveryStatus;
use App\Repository\PlayerInventoryRepository;
use App\Repository\DeliveryRepository;
use App\Service\Game\CurrentPlayer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER')]
final class DeliveryController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $em,
    ) {}

    // -------------------------
    // LIST WAITING + IN_TRANSIT
    // -------------------------
    #[Route('/api/deliveries', name: 'api_deliveries', methods: ['GET'])]
    public function getDeliveries(
        DeliveryRepository $deliveryRepo,
        CurrentPlayer $currentPlayer,
    ): JsonResponse {
        $player = $currentPlayer->get();
        if (!$player) {
            throw $this->createAccessDeniedException();
        }

        $deliveries = $deliveryRepo->createQueryBuilder('d')
            ->where('d.player = :player')
            ->andWhere('d.status IN (:statuses)')
            ->setParameter('player', $player)
            ->setParameter('statuses', [
                DeliveryStatus::WAITING,
                DeliveryStatus::IN_TRANSIT,
            ])
            ->getQuery()
            ->getResult();

        return $this->json(array_map(fn(Delivery $d) => [
            'id'             => $d->getId(),
            'resource'       => $d->getResource()?->getCode()?->value, // ✅
            'quantity'       => $d->getQuantity(),
            'status'         => $d->getStatus()->value,                // ✅
            'progress'       => $d->getProgress(),
            'estimatedTime'  => $d->getEstimatedTime(),
            'scheduledAt'    => $d->getScheduledAt()?->format('c'),
            'waypoints'      => $d->getWaypoints(),
            'sourceBuilding' => $d->getSourceBuilding()?->getId(),
        ], $deliveries));
    }

    // -------------------------
    // MARK AS ARRIVED
    // -------------------------
    #[Route('/api/deliveries/{id}/arrive', name: 'api_delivery_arrive', methods: ['PATCH'])]
    public function markAsArrived(
        int $id,
        DeliveryRepository $deliveryRepo,
        PlayerInventoryRepository $inventoryRepo,
        CurrentPlayer $currentPlayer,
    ): JsonResponse {
        $player = $currentPlayer->get();
        if (!$player) {
            throw $this->createAccessDeniedException();
        }

        $delivery = $deliveryRepo->find($id);
        if (!$delivery) {
            return $this->json(['error' => 'Delivery not found'], 404);
        }

        if ($delivery->getPlayer()?->getId() !== $player->getId()) {
            return $this->json(['error' => 'Forbidden'], 403);
        }

        $this->creditInventory($delivery, $inventoryRepo);

        $delivery->setStatus(DeliveryStatus::DELIVERED);
        $delivery->setDeliveredAt(new \DateTimeImmutable());
        $this->em->flush();

        return $this->json(['status' => 'ok']);
    }

    // -------------------------
    // IN-TRANSIT (carte)
    // -------------------------
    #[Route('/api/deliveries/in-transit', name: 'api_deliveries_in_transit', methods: ['GET'])]
    public function inTransitDeliveries(
        DeliveryRepository $deliveryRepository,
        CurrentPlayer $currentPlayer,
    ): JsonResponse {
        $player = $currentPlayer->get();
        if (!$player) {
            throw $this->createAccessDeniedException();
        }

        $now       = new \DateTimeImmutable();
        $deliveries = $deliveryRepository->findInTransitForPlayer($player);

        return $this->json(array_map(function (Delivery $d) use ($now) {
            $scheduledAt   = $d->getScheduledAt();
            $estimatedTime = $d->getEstimatedTime();

            $elapsed  = $scheduledAt ? $now->getTimestamp() - $scheduledAt->getTimestamp() : 0;
            $progress = $estimatedTime > 0
                ? min(100, max(0, (int)(($elapsed / $estimatedTime) * 100)))
                : 0;

            return [
                'deliveryId'    => $d->getId(),
                'buildingId'    => $d->getSourceBuilding()?->getId(),
                'progress'      => $progress,                           // ✅ calculé live
                'scheduledAt'   => $scheduledAt?->format('c'),          // ✅ ISO pour le JS
                'estimatedTime' => $estimatedTime,
                'waypoints'     => $d->getWaypoints(),
                'resource'      => $d->getResource()?->getCode()?->value,
                'resourceLabel' => $d->getResource()?->getLabel(),
                'quantity'      => $d->getQuantity(),
                'faction'       => $d->getPlayer()?->getFaction()?->getCode(),
            ];
        }, $deliveries));
    }

    // -------------------------
    // IN-TRANSIT LIST (UI)
    // -------------------------
    #[Route('/api/deliveries/in-transit/list', name: 'api_deliveries_in_transit_list', methods: ['GET'])]
    public function inTransitList(
        DeliveryRepository $deliveryRepository,
        CurrentPlayer $currentPlayer,
    ): Response {
        $player = $currentPlayer->get();
        if (!$player) {
            throw $this->createAccessDeniedException();
        }

        $deliveries = $deliveryRepository->findInTransitForPlayer($player);

        $formatted = array_map(fn(Delivery $d) => [
            'resource' => $d->getResource()?->getCode()?->value, // ✅
            'label'    => $d->getResource()?->getLabel(),
            'quantity' => $d->getQuantity(),
            'progress' => $d->getProgress(),
        ], $deliveries);

        return $this->render('game/delivery/_delivery_list.html.twig', [
            'deliveries' => $formatted,
        ]);
    }

    // -------------------------
    // HELPERS
    // -------------------------
    private function creditInventory(
        Delivery $delivery,
        PlayerInventoryRepository $inventoryRepo,
    ): void {
        $player       = $delivery->getPlayer();
        $resourceType = $delivery->getResource();
        if (!$player || !$resourceType) return;

        $inventory = $inventoryRepo->findOneBy([
            'player'       => $player,
            'resourceType' => $resourceType,
        ]);

        if ($inventory) {
            $inventory->setQuantity($inventory->getQuantity() + $delivery->getQuantity());
        } else {
            $inventory = new PlayerInventory();
            $inventory->setPlayer($player);
            $inventory->setResourceType($resourceType);
            $inventory->setQuantity($delivery->getQuantity());
            $this->em->persist($inventory);
        }
    }
}