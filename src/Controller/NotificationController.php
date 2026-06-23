<?php

namespace App\Controller;

use App\Repository\NotificationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class NotificationController extends AbstractController
{
    #[Route('/notifications', name: 'notifications', methods: ['GET'])]
    public function index(
        NotificationRepository $repository,
    ): Response {
        return $this->render('notification/list.html.twig', [
            'notifications' => $repository->latest(),
        ]);
    }
}