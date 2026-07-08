<?php

namespace App\Command;

use App\Entity\Chunk;
use App\Repository\RoadRepository;
use App\Service\CoordinateService;
use App\Service\Game\Generate\DeterministicResourcePlacer;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Import complet : roads → chunks → resource_deposits.
 *
 * Usage :
 *   php bin/console osm:full-import
 *   php bin/console osm:full-import --area=europe
 */
#[AsCommand(
    name: 'osm:full-import',
    description: 'Import complet : roads → chunks → resource_deposits (un seul chunk = un seul appel)',
)]
class FullImportCommand extends Command
{
    public function __construct(
        private readonly RoadRepository $roadRepository,
        private readonly EntityManagerInterface $em,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('bbox', null, InputOption::VALUE_REQUIRED, 'BBox "south,west,north,east" ou "europe"')
            ->addOption('dry-run', null, InputOption::VALUE_NONE, 'Ne rien écrire en base');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $bboxOption = $input->getOption('bbox');
        $dryRun = (bool) $input->getOption('dry-run');

        $io->title('Import complet ironfront');

        // Définir la bbox
        if ($bboxOption === null || $bboxOption === 'europe') {
            $bbox = ['south' => 35.0, 'west' => -10.0, 'north' => 84.0, 'east' => 45.0];
        } else {
            $parts = explode(',', $bboxOption);
            if (count($parts) !== 4) {
                $io->error("BBox invalide. Utiliser 'south,west,north,east'");
                return Command::FAILURE;
            }
            $bbox = [
                'south' => (float) $parts[0],
                'west' => (float) $parts[1],
                'north' => (float) $parts[2],
                'east' => (float) $parts[3],
            ];
        }

        $io->text(sprintf(
            "BBox : [%.2f, %.2f, %.2f, %.2f]",
            $bbox['south'], $bbox['west'], $bbox['north'], $bbox['east']
        ));

        // 1. Créer les chunks pour cette bbox
        $chunksCreated = 0;
        $depositsCreated = 0;

        $size = 0.01; // CHUNK_SIZE

        for ($lat = floor($bbox['south'] / $size) * $size; $lat < $bbox['north']; $lat += $size) {
            for ($lng = floor($bbox['west'] / $size) * $size; $lng < $bbox['east']; $lng += $size) {

                // Chercher les routes dans ce chunk
                $roads = $this->roadRepository->findByBbox(
                    $lat,
                    $lng,
                    $lat + $size,
                    $lng + $size
                );

                if (empty($roads)) {
                    continue;
                }

                // Créer le chunk
                if (!$dryRun) {
                    $chunk = new Chunk();
                    $chunk->setLatMin($lat);
                    $chunk->setLngMin($lng);
                    $chunk->setLatMax($lat + $size);
                    $chunk->setLngMax($lng + $size);
                    $chunk->setChunkId(sprintf('%d_%d', floor($lat/$size), floor($lng/$size)));

                    $this->em->persist($chunk);
                }

                $chunksCreated++;
                $io->text(sprintf("Chunk %.2f,%.2f : %d routes", $lat, $lng, count($roads)));
            }
        }

        if (!$dryRun) {
            $this->em->flush();
        }

        $io->success([
            "{$chunksCreated} chunks créés",
        ]);

        return Command::SUCCESS;
    }
}