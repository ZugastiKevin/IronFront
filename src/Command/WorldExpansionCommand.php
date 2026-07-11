<?php

namespace App\Command;

use App\Service\Game\Generate\ContinentalExpansionManager;
use App\Service\Game\Generate\GenerateChunkService;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'game:world-expansion',
    description: 'Expansion continentale — peuple les chunks par frontière.',
)]
class WorldExpansionCommand extends Command
{
    public function __construct(
        private readonly ContinentalExpansionManager $manager,
        private readonly GenerateChunkService $generateChunkService,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('seed', 's', InputOption::VALUE_REQUIRED, 'Seed initial au format "lat,lng" (ex: 48.8566,2.3522)')
            ->addOption('max-chunks', 'm', InputOption::VALUE_REQUIRED, 'Nombre max de chunks par run (0 = illimité)', 0)
            ->addOption('max-failures', 'f', InputOption::VALUE_REQUIRED, 'Échecs consécutifs max avant arrêt', 10)
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $maxChunks = (int) $input->getOption('max-chunks');
        $maxFailures = (int) $input->getOption('max-failures');

        // 1. Seed initial si fourni
        $seed = $input->getOption('seed');
        if ($seed) {
            [$lat, $lng] = explode(',', $seed);
            $lat = (float) trim($lat);
            $lng = (float) trim($lng);

            $io->info("Seed initial : {$lat},{$lng}");
            $seedChunk = $this->manager->createSeed($lat, $lng);

            // Peupler le seed
            $result = $this->generateChunkService->addRoadsChunk($lat, $lng);
            if ($result['roads_created'] > 0) {
                $this->manager->markPopulated($seedChunk, $result['roads_created']);
                $io->info("Seed peuplé : {$result['roads_created']} routes");
            } else {
                $this->manager->markEmpty($seedChunk);
                $io->info("Seed vide (océan)");
            }
        }

        // 3. Initialiser la frontière depuis les chunks existants
        $seeded = $this->manager->seedFrontier();
        $io->info("Frontière initialisée : {$seeded} chunks en attente");

        // 4. Boucle d'expansion
        $stats = $this->manager->getStats();
        $io->newLine();
        $io->title(sprintf(
            'Expansion en cours — %d peuplés, %d en attente, %d vides',
            $stats['populated'], $stats['frontier'], $stats['empty']
        ));

        $progress = $io->createProgressBar($maxChunks > 0 ? $maxChunks : 1000);
        $progress->start();

        $done = 0;
        $consecutiveFailures = 0;

        while (true) {
            if ($maxChunks > 0 && $done >= $maxChunks) {
                break;
            }

            $chunk = $this->manager->pickNextChunk();
            if ($chunk === null) {
                $io->newLine();
                $io->info('Frontière vide — expansion terminée pour ce continent');
                break;
            }

            try {
                $lat = (float) $chunk->getLatMin() + 0.005;
                $lng = (float) $chunk->getLngMin() + 0.005;

                $result = $this->generateChunkService->addRoadsChunk($lat, $lng);

                if ($result['roads_created'] > 0) {
                    $this->manager->markPopulated($chunk, $result['roads_created']);
                    $consecutiveFailures = 0;
                } else {
                    $this->manager->markEmpty($chunk);
                }

                $done++;
                $progress->advance();

                // Nettoyer la mémoire toutes les 10 chunks
                if ($done % 10 === 0) {
                    $this->generateChunkService->clearEntityManager();
                    $this->manager->clearEntityManager();
                }

                if ($done % 50 === 0) {
                    $progress->setMessage(sprintf(
                        '%d chunks | %d peuplés | %d frontière | %d vides',
                        $done,
                        $stats['populated'] ?? 0,
                        $stats['frontier'] ?? 0,
                        $stats['empty'] ?? 0
                    ));
                }
            } catch (\Throwable $e) {
                $io->warning(sprintf(
                    "Erreur chunk %s,%s : %s",
                    $chunk->getLatMin(), $chunk->getLngMin(), $e->getMessage()
                ));
                $this->manager->markFailed($chunk);
                $consecutiveFailures++;

                if ($consecutiveFailures >= $maxFailures) {
                    $io->newLine();
                    $io->error("{$maxFailures} échecs consécutifs — arrêt");
                    break;
                }
            }
        }

        $progress->finish();
        $io->newLine(2);

        // 5. Afficher les stats finales
        $stats = $this->manager->getStats();
        $io->table(
            ['Statut', 'Nombre'],
            [
                ['Peuplés', $stats['populated']],
                ['Vides (océan)', $stats['empty']],
                ['Échecs', $stats['failed']],
                ['Frontière', $stats['frontier']],
            ]
        );

        // Code retour : 2 si frontière vide (terminé)
        return ($stats['frontier'] === 0) ? 2 : Command::SUCCESS;
    }
}