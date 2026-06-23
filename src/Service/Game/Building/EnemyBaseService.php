<?php

namespace App\Service\Game\Building;

use App\Entity\Game;
use App\Entity\Player;
use App\Service\CoordinateService;
use App\Repository\BuildingRepository;


class EnemyBaseService
{
    private BuildingRepository $buildingRepo;
    private CoordinateService $coordinateService;

    public function __construct(BuildingRepository $buildingRepo, CoordinateService $coordinateService)
    {
        $this->buildingRepo = $buildingRepo;
        $this->coordinateService = $coordinateService;
    }

    public function isTooCloseToEnemy(float $lat, float $lng, Game $game, Player $player, float $minDistance = 1000): bool
    {
        // Building n'a pas de relation directe avec Game, passez par Player
        $enemies = $this->buildingRepo->createQueryBuilder('b')
            ->join('b.player', 'p')
            ->where('p.game = :game')
            ->andWhere('p != :player')
            ->setParameter('game', $game)
            ->setParameter('player', $player)
            ->getQuery()
            ->getResult();


        foreach ($enemies as $building) {

            if ($building->getPlayer()->getId() === $player->getId()) {
                continue;
            }
            
            if ($building->getLatitudeBuild() === null) {
                continue;
            }

            $distance = $this->coordinateService->distance(
                $lat,
                $lng,
                $building->getLatitudeBuild(),
                $building->getLongitudeBuild()
            );

            if ($distance < $minDistance) {
                return true;
            }
        }

        return false;
    }
}