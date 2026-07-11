<?php

namespace App\Command;

use App\Repository\ChunkRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Backfill les colonnes bbox des chunks (lat_min/lng_min/lat_max/lng_max) à partir du chunk_id.
 *
 * Obsolete : la table road n'existe plus, les bbox sont calculées directement
 * par RoadNormalizer lors de la compilation OSM.
 */
#[AsCommand(
    name: 'app:backfill-bbox',
    description: 'Remplit les colonnes bbox sur chunk à partir du chunk_id.',
)]
class BackfillBoundingBoxCommand extends Command
{
    private const CHUNK_SIZE = 0.01;

    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly ChunkRepository $chunkRepository,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Backfill des bounding boxes (chunks)');

        // --- 1. Chunks uniquement ---
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

        $io->note('Note: la table road n\'existe plus. Les bbox sont calculées automatiquement par RoadNormalizer.');
        return Command::SUCCESS;
    }
}