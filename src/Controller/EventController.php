<?php

namespace App\Controller;

use App\Service\Game\CurrentPlayer;
use App\Repository\NotificationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class EventController extends AbstractController
{
    #[Route('/events', name: 'events')]
    public function index(
        NotificationRepository $repository,
        CurrentPlayer $currentPlayer,
    ): Response {

        $player = $currentPlayer->get();

        if (!$player) {
            return new Response('', Response::HTTP_NO_CONTENT);
        }

        return $this->render('events/events.html.twig', [
            'notifications' => $repository->latestForPlayer($player),
        ]);
    }
}