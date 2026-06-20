<?php

namespace App\Controller;

use App\Entity\Player;
use App\Entity\User;
use App\Form\FactionGameChoiceType;
use App\Repository\BuildingRepository;
use App\Repository\BuildingTypeRepository;
use App\Repository\GameRepository;
use App\Repository\PlayerRepository;
use App\Service\PlayerGameInitializer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER')]
final class GameController extends AbstractController
{
    #[Route('/game/choose-game-faction', name: 'choose-game-faction')]
    public function chooseFaction(
        Request $request,
        EntityManagerInterface $entityManager,
        PlayerGameInitializer $playerGameInitializer,
        GameRepository $gameRepository,
        PlayerRepository $playerRepo
    ): Response {
        $user = $this->getUser();

        if (!$user instanceof User) {
            return $this->redirectToRoute('app_login');
        }

        $form = $this->createForm(FactionGameChoiceType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $selectedGame = $form->get('game')->getData();

            // Un user ne peut avoir qu'un seul player par game : on regarde s'il en a déjà un
            $existingPlayer = $playerRepo->findOneBy(['user' => $user, 'game' => $selectedGame]);

            if ($existingPlayer !== null) {
                // Le player existe déjà pour cette game : pas de choix de faction,
                // on le reprend tel quel et on file directement sur /game
                $request->getSession()->set('active_player_id', $existingPlayer->getId());

                return $this->redirectToRoute('game');
            }

            // Aucun player pour cette game : on en crée un, la faction devient obligatoire ici
            $selectedFaction = $form->get('faction')->getData();

            if ($selectedFaction === null) {
                $form->get('faction')->addError(new FormError('Veuillez sélectionner une faction.'));

                $activeGames = $gameRepository->findBy(['isActive' => true]);

                return $this->render('game/choose_faction.html.twig', [
                    'form' => $form->createView(),
                    'activeGames' => $activeGames,
                    'existingPlayers' => $user->getPlayers(),
                ]);
            }

            $player = new Player();
            $player->setUser($user);
            $player->setGame($selectedGame);
            $player->setFaction($selectedFaction);

            $entityManager->persist($player);
            $entityManager->flush();

            // Initialisation des données du nouveau joueur
            $playerGameInitializer->initialize($player);

            $request->getSession()->set('active_player_id', $player->getId());

            return $this->redirectToRoute('game');
        }

        // Parties actives disponibles, et games sur lesquelles l'utilisateur a déjà un player
        $activeGames = $gameRepository->findBy(['isActive' => true]);

        return $this->render('game/choose_faction.html.twig', [
            'form' => $form->createView(),
            'activeGames' => $activeGames,
            'existingPlayers' => $user->getPlayers(),
        ]);
    }

    #[Route('/game', name: 'game')]
    public function index(
        Request $request,
        BuildingRepository $buildingRepo,
        BuildingTypeRepository $buildingTypeRepo,
        PlayerRepository $playerRepo
    ): Response {
        $user = $this->getUser();

        if (!$user instanceof User) {
            return $this->redirectToRoute('app_login');
        }

        // Aucun player du tout -> il faut en choisir/créer un
        if ($user->getPlayers()->isEmpty()) {
            return $this->redirectToRoute('choose-game-faction');
        }

        $activePlayerId = $request->getSession()->get('active_player_id');
        $player = $activePlayerId !== null
            ? $playerRepo->find($activePlayerId)
            : null;

        // Le player en session n'existe plus, ou n'appartient pas à l'utilisateur connecté -> retour au choix
        if ($player === null || $player->getUser() !== $user) {
            return $this->redirectToRoute('choose-game-faction');
        }

        $hasBase = $buildingRepo->findBaseForPlayer($player) !== null;

        return $this->render('game/index.html.twig', [
            'player' => $player,
            'buildingTypes' => $buildingTypeRepo->findAll(),
            'hasBase' => $hasBase,
        ]);
    }
}