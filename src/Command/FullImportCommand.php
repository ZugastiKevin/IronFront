<?php

namespace App\Command;

use App\Entity\Chunk;
use App\Repository\RoadSegmentRepository;
use App\Repository\SpatialCellRepository;
use App\Service\Osm\SpatialIndexer;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Import complet : segments → chunks.
 *
 * Usage :
 *   php bin/console osm:full-import
 *   php bin/console osm:full-import --bbox="48.0,2.0,49.0,3.0"
 */
#[AsCommand(
    name: 'osm:full-import',
    description: 'Import complet : segments → chunks (un seul appel)',
)]
class FullImportCommand extends Command
{
    private const CHUNK_SIZE = 0.01; // ~1km

    public function __construct(
        private readonly RoadSegmentRepository $roadSegmentRepository,
        private readonly SpatialIndexer $spatialIndexer,
        private readonly EntityManagerInterface $em,
        private readonly LoggerInterface $logger,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('bbox', null, InputOption::VALUE_REQUIRED, 'BBox "south,west,north,east"')
            ->addOption('dry-run', null, InputOption::VALUE_NONE, 'Ne rien écrire en base');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $bboxOption = $input->getOption('bbox');
        $dryRun = (bool) $input->getOption('dry-run');

        $io->title('Import complet ironfront - chunks depuis index spatial');

        // BBox par défaut (Europe)
        if ($bboxOption === null) {
            $bbox = ['south' => 35.0, 'west' => -10.0, 'north' => 72.0, 'east' => 45.0];
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

        $chunksCreated = 0;

        for ($lat = floor($bbox['south'] / self::CHUNK_SIZE) * self::CHUNK_SIZE; $lat < $bbox['north']; $lat += self::CHUNK_SIZE) {
            for ($lng = floor($bbox['west'] / self::CHUNK_SIZE) * self::CHUNK_SIZE; $lng < $bbox['east']; $lng += self::CHUNK_SIZE) {

                // Trouver les segments via l'index spatial
                $cellId = sprintf('%d_%d', floor($lat / \App\Entity\SpatialCell::CELL_SIZE_DEGREES), floor($lng / \App\Entity\SpatialCell::CELL_SIZE_DEGREES));

                // Pour l'instant on crée les chunks même s'ils sont vides
                // (ils seront marqués 'empty' après vérification)
                if (!$dryRun) {
                    $chunk = new Chunk();
                    $chunk->setLatMin($lat);
                    $chunk->setLngMin($lng);
                    $chunk->setLatMax($lat + self::CHUNK_SIZE);
                    $chunk->setLngMax($lng + self::CHUNK_SIZE);
                    $chunk->setChunkId(sprintf('%d_%d', (int) floor($lat / self::CHUNK_SIZE), (int) floor($lng / self::CHUNK_SIZE)));

                    $this->em->persist($chunk);
                }

                $chunksCreated++;

                if ($lat * $lng % 10 === 0) {
                    $io->text(sprintf("Chunk %.2f,%.2f créé", $lat, $lng));
                }
            }
        }

        if (!$dryRun) {
            $this->em->flush();
        }

        $io->success(["{$chunksCreated} chunks créés"]);

        return Command::SUCCESS;
    }
}