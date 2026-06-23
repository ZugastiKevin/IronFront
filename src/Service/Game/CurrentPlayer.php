<?php

namespace App\Service\Game;

use App\Entity\Player;
use App\Entity\User;
use App\Repository\PlayerRepository;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\RequestStack;

final readonly class CurrentPlayer
{
    public function __construct(
        private Security $security,
        private RequestStack $requestStack,
        private PlayerRepository $players,
    ) {
    }

    public function get(): ?Player
    {
        /** @var User|null $user */
        $user = $this->security->getUser();

        if (!$user) {
            return null;
        }

        $session = $this->requestStack->getSession();

        $gameId = $session->get('current_game_id');

        if (!$gameId) {
            return null;
        }

        return $this->players->findOneBy([
            'user' => $user,
            'game' => $gameId,
        ]);
    }
}