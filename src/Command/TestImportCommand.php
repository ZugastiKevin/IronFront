<?php

namespace App\Command;

use App\Service\Game\Generate\GeofabrikRoadProvider;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Test import : crée quelques routes Paris dans road pour tester le snap.
 */
#[AsCommand(
    name: 'osm:test-import',
    description: 'Crée des routes test Paris dans road (test du snap)',
)]
class TestImportCommand extends Command
{
    public function __construct(
        private readonly EntityManagerInterface $em,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Import test routes Paris');

        // Créer quelques routes autour de Paris
        $testRoads = [
            [
                'points' => [[48.85, 2.34], [48.86, 2.34], [48.86, 2.35], [48.85, 2.35], [48.85, 2.34]],
                'type' => 'primary',
            ],
            [
                'points' => [[48.84, 2.33], [48.85, 2.33], [48.85, 2.34]],
                'type' => 'residential',
            ],
        ];

        $count = 0;
        foreach ($testRoads as $data) {
            $road = new \App\Entity\Road();
            $road->setPoints($data['points']);
            $road->setType($data['type']);

            $this->em->persist($road);
            $count++;
        }

        $this->em->flush();

        $io->success("{$count} routes test créées dans la table road");
        $io->writeln("\nTestez maintenant :");
        $io->writeln("curl -X POST /api/add-roads-chunk -d '{\"lat\":48.85,\"lng\":2.34}'");

        return Command::SUCCESS;
    }
}