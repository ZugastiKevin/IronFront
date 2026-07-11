<?php

namespace App\Command;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

/**
 * Provisionne un user de test dans la base de test isolée (SQLite).
 *
 * Cette commande est volontairement réservée à l'environnement `test` : elle ne
 * doit jamais être exécutée contre la base de production (ironfront). Elle est
 * invoquée par le script de setup des tests (bin/setup-tests.ps1), et jamais
 * depuis un fichier de test — les fichiers de test ne doivent pas écrire en base.
 */
#[AsCommand(
    name: 'app:seed-test-user',
    description: 'Crée le user de test (email@example.com / password) en environnement test uniquement.',
)]
final class SeedTestUserCommand extends Command
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly UserPasswordHasherInterface $passwordHasher,
        private readonly ParameterBagInterface $params,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        if ('test' !== $this->params->get('kernel.environment')) {
            throw new \RuntimeException(
                'app:seed-test-user ne peut être exécutée qu\'en environnement test.',
            );
        }

        $io = new SymfonyStyle($input, $output);

        $user = (new User())
            ->setEmail('email@example.com')
            ->setPseudo('test')
            ->setPassword($this->passwordHasher->hashPassword(new User(), 'password'));

        $this->em->persist($user);
        $this->em->flush();

        $io->success('User de test créé : email@example.com / password');

        return Command::SUCCESS;
    }
}
