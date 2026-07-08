<?php

namespace App\Command;

use App\Entity\Chunk;
use App\Repository\ResourceTypeRepository;
use App\Service\Game\Generate\DeterministicResourcePlacer;
use App\Service\Game\Generate\GeofabrikRoadProvider;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Génère les chunks et resource_deposits à partir des routes déjà importées.
 *
 * Usage :
 *   php bin/console app:osm:generate-deposits --bbox=35.0,-25.0,72.0,45.0
 *   php bin/console app:osm:generate-deposits --region=europe
 *
 * Processus :
 *   - Découpe la bbox en chunks de 0.01°
 *   - Pour chaque chunk avec des routes, crée le chunk et les deposits
 *   - Maximum 2 deposits par zone (déterministe)
 */
#[AsCommand(
    name: 'app:osm:generate-deposits',
    description: 'Génère les chunks et resource_deposits à partir des routes importées',
)]
class GenerateDepositsCommand extends Command
{
    private const CHUNK_SIZE = 0.01;

    public function __construct(
        private readonly ResourceTypeRepository $resourceTypeRepository,
        private readonly EntityManagerInterface $em,
        private readonly GeofabrikRoadProvider $roadProvider,
        private readonly DeterministicResourcePlacer $resourcePlacer,
        private readonly LoggerInterface $logger,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('bbox', null, InputOption::VALUE_REQUIRED, 'BBox "south,west,north,east" (ex: 35.0,-25.0,72.0,45.0)')
            ->addOption('batch', null, InputOption::VALUE_REQUIRED, 'Taille des lots flush ORM', '100')
            ->addOption('dry-run', null, InputOption::VALUE_NONE, 'N\'afficher que ce qui serait créé')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        ini_set('memory_limit', '1024M');

        $io = new SymfonyStyle($input, $output);
        $bboxOption = $input->getOption('bbox');
        $batchSize = (int) $input->getOption('batch');
        $dryRun = (bool) $input->getOption('dry-run');

        // Bbox Europe par défaut
        if ($bboxOption === null) {
            $bbox = ['south' => 35.0, 'west' => -25.0, 'north' => 72.0, 'east' => 45.0];
            $io->info('Aucune bbox fournie - utilisation de l\'Europe par défaut');
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

        $io->title('Génération des chunks et resource_deposits');
        $io->text(sprintf(
            'BBox : [%.2f, %.2f, %.2f, %.2f] - Batch: %d, Dry-run: %s',
            $bbox['south'], $bbox['west'], $bbox['north'], $bbox['east'],
            $batchSize, $dryRun ? 'oui' : 'non'
        ));

        $totalChunks = 0;
        $totalDeposits = 0;
        $chunksInBatch = 0;

        $io->progressStart(0); // Indéterminé car on ne sait pas le nombre de chunks à l'avance

        $start = microtime(true);

        // Découper la bbox en chunks
        for ($lat = floor($bbox['south'] / self::CHUNK_SIZE) * self::CHUNK_SIZE; $lat < $bbox['north']; $lat += self::CHUNK_SIZE) {
            for ($lng = floor($bbox['west'] / self::CHUNK_SIZE) * self::CHUNK_SIZE; $lng < $bbox['east']; $lng += self::CHUNK_SIZE) {
                $chunkBbox = [
                    'latMin' => (float) round($lat, 8),
                    'lngMin' => (float) round($lng, 8),
                    'latMax' => (float) round($lat + self::CHUNK_SIZE, 8),
                    'lngMax' => (float) round($lng + self::CHUNK_SIZE, 8),
                ];

                // Chercher les routes existantes dans ce chunk
                $roads = $this->roadProvider->findRoadsInBbox(
                    $chunkBbox['latMin'] - 0.001,
                    $chunkBbox['lngMin'] - 0.001,
                    $chunkBbox['latMax'] + 0.001,
                    $chunkBbox['lngMax'] + 0.001
                );

                if (empty($roads)) {
                    continue;
                }

                // Trouver ou créer le chunk
                [$chunk, $isNewChunk] = $this->findOrCreateChunkByBbox($chunkBbox);

                if ($isNewChunk) {
                    $totalChunks++;
                    $io->writeln(sprintf(
                        '  <info>Nouveau chunk</info> : %.2f,%.2f (%.2f,%.2f)',
                        $chunkBbox['latMin'], $chunkBbox['lngMin'],
                        $chunkBbox['latMax'], $chunkBbox['lngMax']
                    ));
                }

                // Vérifier si des deposits existent déjà
                $existingDeposits = (int) $this->em->createQueryBuilder()
                    ->select('COUNT(d.id)')
                    ->from(\App\Entity\ResourceDeposit::class, 'd')
                    ->where('d.latitude BETWEEN :latMin AND :latMax')
                    ->andWhere('d.longitude BETWEEN :lngMin AND :lngMax')
                    ->setParameter('latMin', $chunkBbox['latMin'] - 0.001)
                    ->setParameter('latMax', $chunkBbox['latMax'] + 0.001)
                    ->setParameter('lngMin', $chunkBbox['lngMin'] - 0.001)
                    ->setParameter('lngMax', $chunkBbox['lngMax'] + 0.001)
                    ->getQuery()
                    ->getSingleScalarResult();

                if ($existingDeposits < 2) {
                    $allTypes = $this->resourceTypeRepository->findAll();

                    // Les routes sont déjà en base, mais doivent être mergées pour être liées aux deposits
                    $managedRoads = [];
                    foreach ($roads as $road) {
                        $managedRoads[] = $this->em->merge($road);
                    }

                    if (!$dryRun) {
                        $deposits = $this->resourcePlacer->placeResources($chunk, $managedRoads, $allTypes);
                        foreach ($deposits as $deposit) {
                            $this->em->persist($deposit);
                            $totalDeposits++;
                        }
                    } else {
                        // Estimation du nombre de deposits (1 si < 2 routes, 2 sinon)
                        $totalDeposits += (count($roads) >= 2) ? 2 : 1;
                    }

                    $chunksInBatch++;
                    if ($chunksInBatch >= $batchSize) {
                        if (!$dryRun) {
                            $this->em->flush();
                            $this->em->clear();
                        }
                        $chunksInBatch = 0;
                    }
                }

                $io->progressAdvance();
            }
        }

        // Flush final
        if (!$dryRun && $chunksInBatch > 0) {
            $this->em->flush();
            $this->em->clear();
        }

        $io->progressFinish();

        $elapsed = microtime(true) - $start;
        $io->success(sprintf(
            '%s : %d chunks, %d deposits en %.1fs',
            $dryRun ? '[DRY-RUN] Création' : 'Création',
            $totalChunks,
            $totalDeposits,
            $elapsed
        ));

        return Command::SUCCESS;
    }

    /**
     * Trouve ou crée un chunk par ses coordonnées bbox.
     * Retourne un tableau avec le chunk et un booléen indiquant s'il est nouveau.
     */
    private function findOrCreateChunkByBbox(array $bbox): array
    {
        // Chercher par bbox
        $chunk = $this->em->createQueryBuilder()
            ->select('c')
            ->from(Chunk::class, 'c')
            ->where('c.latMin = :latMin')
            ->andWhere('c.lngMin = :lngMin')
            ->andWhere('c.latMax = :latMax')
            ->andWhere('c.lngMax = :lngMax')
            ->setParameter('latMin', $bbox['latMin'])
            ->setParameter('lngMin', $bbox['lngMin'])
            ->setParameter('latMax', $bbox['latMax'])
            ->setParameter('lngMax', $bbox['lngMax'])
            ->getQuery()
            ->getOneOrNullResult();

        if ($chunk !== null) {
            return [$chunk, false];
        }

        // Chercher aussi par chunkId "X_Y" (pour anciens chunks phase 1)
        $x = (int) floor($bbox['latMin'] / self::CHUNK_SIZE);
        $y = (int) floor($bbox['lngMin'] / self::CHUNK_SIZE);
        $chunkId = "{$x}_{$y}";

        $chunk = $this->em->createQueryBuilder()
            ->select('c')
            ->from(Chunk::class, 'c')
            ->where('c.chunkId = :chunkId')
            ->setParameter('chunkId', $chunkId)
            ->getQuery()
            ->getOneOrNullResult();

        if ($chunk !== null) {
            $chunk->setLatMin($bbox['latMin']);
            $chunk->setLngMin($bbox['lngMin']);
            $chunk->setLatMax($bbox['latMax']);
            $chunk->setLngMax($bbox['lngMax']);
            // L'entité est déjà gérée
            return [$chunk, false];
        }

        // Créer le chunk
        $chunk = new Chunk();
        $chunk->setLatMin($bbox['latMin']);
        $chunk->setLngMin($bbox['lngMin']);
        $chunk->setLatMax($bbox['latMax']);
        $chunk->setLngMax($bbox['lngMax']);
        $chunk->setChunkId($chunkId);

        $this->em->persist($chunk);

        return [$chunk, true];
    }
}