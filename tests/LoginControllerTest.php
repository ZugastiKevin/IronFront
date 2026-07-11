<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class LoginControllerTest extends WebTestCase
{
    private KernelBrowser $client;

    protected function setUp(): void
    {
        // Le user de test (email@example.com / password) est provisionné par
        // bin/setup-tests.ps1 (app:seed-test-user). Les fichiers de test
        // n'écrivent jamais en base.
        $this->client = static::createClient();
    }

    public function testLogin(): void
    {
        // Denied - Can't login with invalid email address.
        $this->client->request('GET', '/login');
        self::assertResponseIsSuccessful();

        $this->submitLogin([
            '_username' => 'doesNotExist@example.com',
            '_password' => 'password',
        ]);

        self::assertResponseRedirects('/login');
        $this->client->followRedirect();

        // Ensure we do not reveal if the user exists or not.
        self::assertSelectorTextContains('.alert-danger', 'Identifiants invalides.');

        // Denied - Can't login with invalid password.
        $this->client->request('GET', '/login');
        self::assertResponseIsSuccessful();

        $this->submitLogin([
            '_username' => 'email@example.com',
            '_password' => 'bad-password',
        ]);

        self::assertResponseRedirects('/login');
        $this->client->followRedirect();

        // Ensure we do not reveal the user exists but the password is wrong.
        self::assertSelectorTextContains('.alert-danger', 'Identifiants invalides.');

        // Success - Login with valid credentials is allowed.
        $this->client->request('GET', '/login');
        self::assertResponseIsSuccessful();

        $this->submitLogin([
            '_username' => 'email@example.com',
            '_password' => 'password',
        ]);

        self::assertResponseRedirects('/');
        $this->client->followRedirect();

        self::assertSelectorNotExists('.alert-danger');
    }

    /**
     * Soumet le formulaire de login (identifié par son id, le libellé du bouton
     * étant traduit et non constant).
     *
     * @param array<string, string> $fields
     */
    private function submitLogin(array $fields): void
    {
        $form = $this->client->getCrawler()->filter('form#login-form')->form($fields);
        $this->client->submit($form);
    }
}
