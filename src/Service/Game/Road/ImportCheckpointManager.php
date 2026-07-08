<?php

namespace App\Service\Game\Road;

use App\Entity\ImportProgress;
use App\Repository\ImportProgressRepository;
use App\Repository\RoadRepository;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;

/**
 * Gestionnaire de checkpoints pour l'import OSM.
 * Permet la reprise après crash et la suppression des données partielles.
 */
class ImportCheckpointManager
{
    public const STATUS_PENDING = 'pending';
    public const STATUS_PROCESSING = 'processing';
    public const STATUS_COMPLETED = 'completed';
    public const STATUS_CRASHED = 'crashed';

    public function __construct(
        private ImportProgressRepository $progressRepository,
        private RoadRepository $roadRepository,
        private EntityManagerInterface $em,
        private LoggerInterface $logger,
    ) {}

    /**
     * Initialise les checkpoints pour toutes les tuiles d'une région.
     *
     * @param string $region Nom de la région
     * @param array $tiles Liste des tuiles (clé 'tile_key')
     */
    public function initializeRegion(string $region, array $tiles): void
    {
        $this->logger->info(sprintf('Initialisation checkpoints pour région %s : %d tuiles', $region, count($tiles)));

        $batch = [];

        foreach ($tiles as $tile) {
            $tileKey = $this->buildTileKey($tile);
            $existing = $this->progressRepository->findByRegionAndTile($region, $tileKey);

            if ($existing === null) {
                $progress = new ImportProgress();
                $progress->setRegion($region);
                $progress->setTileKey($tileKey);
                $progress->setStatus(self::STATUS_PENDING);

                $this->em->persist($progress);
                $batch[] = $progress;
            }

            // Flush par batches de 100 pour éviter la surcharge mémoire
            if (count($batch) >= 100) {
                $this->em->flush();
                $this->em->clear();
                $batch = [];
            }
        }

        if (!empty($batch)) {
            $this->em->flush();
        }
        $this->em->clear();
    }

    /**
     * Marque le début du traitement d'une tuile.
     * Retourne true si la tuile doit être ignorée (déjà complétée).
     */
    public function startTile(string $region, array $tile): bool
    {
        $tileKey = $this->buildTileKey($tile);
        $progress = $this->progressRepository->findByRegionAndTile($region, $tileKey);

        // Cas 1: Tuile déjà complétée → on saute
        if ($progress !== null && $progress->getStatus() === self::STATUS_COMPLETED) {
            return true;
        }

        // Cas 2: Tuile en cours (crash) → on supprime les routes partielles
        if ($progress !== null && $progress->getStatus() === self::STATUS_PROCESSING) {
            $this->cleanupPartialTile($tile, $progress->getRoadsImported());
        }

        // Cas 3: Tuile inexistante → on crée un checkpoint
        if ($progress === null) {
            $progress = new ImportProgress();
            $progress->setRegion($region);
            $progress->setTileKey($tileKey);
        }

        $progress->setStatus(self::STATUS_PROCESSING);
        $progress->setRoadsImported(0);
        $this->em->persist($progress);
        $this->em->flush();

        return false;
    }

    /**
     * Marque la fin du traitement d'une tuile.
     */
    public function completeTile(string $region, array $tile, int $roadsImported): void
    {
        $tileKey = $this->buildTileKey($tile);
        $progress = $this->progressRepository->findByRegionAndTile($region, $tileKey);

        if ($progress === null) {
            $progress = new ImportProgress();
            $progress->setRegion($region);
            $progress->setTileKey($tileKey);
        }

        $progress->setStatus(self::STATUS_COMPLETED);
        $progress->setRoadsImported($roadsImported);
        $this->em->persist($progress);
        $this->em->flush();
    }

    /**
     * Marque une tuile comme crashée.
     */
    public function markCrashed(string $region, array $tile): void
    {
        $tileKey = $this->buildTileKey($tile);
        $progress = $this->progressRepository->findByRegionAndTile($region, $tileKey);

        if ($progress !== null) {
            $progress->setStatus(self::STATUS_CRASHED);
            $this->em->persist($progress);
            $this->em->flush();
        }
    }

    /**
     * Supprime les routes importées partiellement dans une tuile.
     * Utilisé quand on reprend après un crash.
     */
    private function cleanupPartialTile(array $tile, int $previousCount): int
    {
        $this->logger->warning(sprintf(
            'Nettoyage tuile [%F,%F,%F,%F] : %d routes à supprimer',
            $tile['s'], $tile['w'], $tile['n'], $tile['e'],
            $previousCount
        ));

        $deleted = $this->roadRepository->createQueryBuilder('r')
            ->delete()
            ->where('r.bboxLatMin >= :latMin')->setParameter('latMin', $tile['s'])
            ->andWhere('r.bboxLatMax <= :latMax')->setParameter('latMax', $tile['n'])
            ->andWhere('r.bboxLngMin >= :lngMin')->setParameter('lngMin', $tile['w'])
            ->andWhere('r.bboxLngMax <= :lngMax')->setParameter('lngMax', $tile['e'])
            ->getQuery()
            ->execute();

        $this->logger->info(sprintf('Nettoyage terminé : %d routes supprimées', $deleted));

        return $deleted;
    }

    /**
     * Récupère les statistiques de progression.
     */
    public function getStats(string $region): array
    {
        $total = (int) $this->progressRepository->createQueryBuilder('ip')
            ->select('COUNT(ip.id)')
            ->where('ip.region = :region')->setParameter('region', $region)
            ->getQuery()
            ->getSingleScalarResult();

        return [
            'total' => $total,
            'completed' => $this->progressRepository->countCompleted($region),
            'crashed' => $this->progressRepository->countCrashed($region),
            'pending' => $total - $this->progressRepository->countCompleted($region) - $this->progressRepository->countCrashed($region),
        ];
    }

    /**
     * Construit la clé unique d'une tuile.
     */
    private function buildTileKey(array $tile): string
    {
        return sprintf('%.6f_%.6f_%.6f_%.6f', $tile['s'], $tile['w'], $tile['n'], $tile['e']);
    }

    /**
     * Supprime tous les checkpoints d'une région (reset complet).
     */
    public function resetRegion(string $region): int
    {
        return $this->progressRepository->deleteByRegion($region);
    }
}