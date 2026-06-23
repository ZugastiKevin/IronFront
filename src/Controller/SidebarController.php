<?php

namespace App\Controller;

use App\Repository\BuildingRepository;
use App\Service\Game\CurrentPlayer;
use App\Repository\BuildingTypeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class SidebarController extends AbstractController
{
    #[Route('/sidebar', name: 'sidebar', methods: ['GET'])]
    public function index(
        CurrentPlayer $currentPlayer,
        BuildingRepository $buildingRepo,
        BuildingTypeRepository $buildingTypeRepo,
    ): Response {
        $player = $currentPlayer->get();

        if (!$player) {
            return new Response('', Response::HTTP_NO_CONTENT);
        }

        $hasBase = $buildingRepo->findBaseForPlayer($player) !== null;

        return $this->render('layout/_sidebar.html.twig', [
            'hasBase' => $hasBase,
            'buildingTypes' => $buildingTypeRepo->findAll(),
        ]);
    }
}