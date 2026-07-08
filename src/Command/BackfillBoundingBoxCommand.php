<?php

namespace App\Command;

use App\Repository\ChunkRepository;
use App\Repository\RoadRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Backfill les colonnes bbox (lat_min/lng_min/lat_max/lng_max) à partir des données existantes.
 *
 * - Pour les chunk : parse le chunk_id "X_Y" → lat_min = X*0.01, lng_min = Y*0.01, lat_max = lat_min+0.01, lng_max = lng_min+0.01
 * - Pour les road  : calcule la bbox à partir des points JSON (min/max des lat/lng)
 *
 * Idempotent : ne touche que les lignes où les colonnes bbox sont NULL.
 */
#[AsCommand(
    name: 'app:backfill-bbox',
    description: 'Remplit les colonnes bbox sur chunk et road à partir des données existantes (chunk_id / points JSON).',
)]
class BackfillBoundingBoxCommand extends Command
{
    private const CHUNK_SIZE = 0.01;

    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly ChunkRepository $chunkRepository,
        private readonly RoadRepository $roadRepository,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Backfill des bounding boxes');

        // --- 1. Chunks ---
        $chunks = $this->chunkRepository->createQueryBuilder('c')
            ->where('c.latMin IS NULL')
            ->getQuery()->getResult();

        $io->section(sprintf('%d chunks à backfiller', count($chunks)));
        $chunkDone = 0;

        foreach ($chunks as $chunk) {
            $chunkId = $chunk->getChunkId();
            if ($chunkId === null) {
                $io->warning(sprintf('Chunk #%d sans chunk_id, ignoré.', $chunk->getId()));
                continue;
            }

            // Format attendu : "X_Y"
            $parts = explode('_', $chunkId);
            if (count($parts) !== 2 || !is_numeric($parts[0]) || !is_numeric($parts[1])) {
                $io->warning(sprintf('Chunk #%d: chunk_id "%s" non exploitable, ignoré.', $chunk->getId(), $chunkId));
                continue;
            }

            $x = (int) $parts[0];
            $y = (int) $parts[1];

            $chunk->setLatMin(round($x * self::CHUNK_SIZE, 8));
            $chunk->setLngMin(round($y * self::CHUNK_SIZE, 8));
            $chunk->setLatMax(round(($x + 1) * self::CHUNK_SIZE, 8));
            $chunk->setLngMax(round(($y + 1) * self::CHUNK_SIZE, 8));
            $chunkDone++;
        }

        $this->em->flush();
        $io->success(sprintf('%d chunks mis à jour', $chunkDone));

        // --- 2. Routes (SQL direct pour éviter l'OOM de Doctrine) ---
        // On lit les points JSON, on calcule la bbox en PHP, on UPDATE en lot.
        $connection = $this->em->getConnection();
        $batchSize  = 500;
        $offset     = 0;
        $roadDone   = 0;

        $io->section('Routes à analyser (par lots de ' . $batchSize . ', SQL direct)');

        do {
            $rows = $connection->executeQuery(
                'SELECT id, points FROM road WHERE bbox_lat_min IS NULL ORDER BY id ASC LIMIT :limit OFFSET :offset',
                ['limit' => $batchSize, 'offset' => $offset],
                ['limit' => 'integer', 'offset' => 'integer']
            )->fetchAllAssociative();

            $count = count($rows);
            if ($count === 0) {
                break;
            }

            foreach ($rows as $row) {
                $points = json_decode($row['points'], true);
                if (!is_array($points) || count($points) < 2) {
                    continue;
                }

                $lats = array_column($points, 0);
                $lngs = array_column($points, 1);

                if (empty($lats) || empty($lngs)) {
                    continue;
                }

                $connection->executeStatement(
                    'UPDATE road SET bbox_lat_min = :latMin, bbox_lng_min = :lngMin, bbox_lat_max = :latMax, bbox_lng_max = :lngMax WHERE id = :id',
                    [
                        'id'     => (int) $row['id'],
                        'latMin' => (float) min($lats),
                        'lngMin' => (float) min($lngs),
                        'latMax' => (float) max($lats),
                        'lngMax' => (float) max($lngs),
                    ]
                );
                $roadDone++;
            }

            $offset += $batchSize;
            $io->writeln(sprintf('  lot %d-%d : %d routes traitées', $offset - $batchSize + 1, $offset, $roadDone));
        } while ($count === $batchSize);

        $io->success(sprintf('%d routes mises à jour', $roadDone));

        $io->info('Terminé. Relancez la commande pour vérifier qu\'il ne reste rien (0 chunks / 0 routes).');
        return Command::SUCCESS;
    }
}
