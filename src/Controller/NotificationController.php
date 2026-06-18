<?php

namespace App\Controller;

use NotificationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class NotificationController extends AbstractController
{
    #[Route('/notifications', name: 'app_notifications', methods: ['GET'])]
    public function index(NotificationRepository $repo): Response
    {
        return $this->render('notification/list.html.twig', [
            'notifications' => $repo->latest()
        ]);
    }
}