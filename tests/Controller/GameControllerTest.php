<?php

namespace App\Tests\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

final class GameControllerTest extends WebTestCase
{
    public function testIndex(): void
    {
        $client = static::createClient();
        $container = static::getContainer();

        // GameController porte #[IsGranted('ROLE_USER')] : on s'authentifie avec
        // le user de test provisionné par bin/setup-tests.ps1. Aucun écrit en
        // base depuis le fichier de test.
        $em = $container->get('doctrine.orm.entity_manager');
        /** @var User|null $user */
        $user = $em->getRepository(User::class)->findOneBy(['email' => 'email@example.com']);
        self::assertNotNull($user, 'Le user de test doit être provisionné (bin/setup-tests.ps1).');

        $client->loginUser($user);

        $client->request('GET', '/game');

        // Un user authentifié sans faction est redirigé vers le choix de faction.
        self::assertResponseRedirects('/game/choose-game-faction');
    }
}
