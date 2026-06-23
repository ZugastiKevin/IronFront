<?php

namespace App\Controller;

use App\Repository\NotificationRepository;
use App\Service\Game\CurrentPlayer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class EventController extends AbstractController
{
    #[Route('/events', name: 'events')]
    public function index(
        NotificationRepository $repository,
        CurrentPlayer $currentPlayer,
        EntityManagerInterface $em,
    ): Response {

        $player = $currentPlayer->get();

        if (!$player) {
            return new Response('', Response::HTTP_NO_CONTENT);
        }

        $notifications = $repository->latestForPlayer($player);

        foreach ($notifications as $notif) {
            $notif->setReaded(true);
        }
        $em->flush();

        if (empty($notifications)) {
            return new Response('', Response::HTTP_NO_CONTENT);
        }

        return $this->render('events/events.html.twig', [
            'notifications' => $notifications,
        ]);
    }
}