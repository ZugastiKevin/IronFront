<?php

namespace App\Service\Game\Road;

use App\Entity\ImportProgress;
use App\Repository\ImportProgressRepository;
use App\Repository\RoadSegmentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;

/**
 * Gestionnaire de checkpoints pour l'import OSM (version road_segment).
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
        private RoadSegmentRepository $roadSegmentRepository,
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

        // Charge en une seule requête les clés déjà connues (évite N SELECT).
        $existing = $this->progressRepository->findAllTileKeys($region);

        $count = 0;

        foreach ($tiles as $tile) {
            $tileKey = $this->buildTileKey($tile);

            if (isset($existing[$tileKey])) {
                continue;
            }

            $progress = new ImportProgress();
            $progress->setRegion($region);
            $progress->setTileKey($tileKey);
            $progress->setStatus(self::STATUS_PENDING);

            $this->em->persist($progress);

            // Flush par lots pour éviter la surcharge mémoire
            if (++$count % 500 === 0) {
                $this->em->flush();
                $this->em->clear();
            }
        }

        $this->em->flush();
        $this->em->clear();
    }

    /**
     * Retourne les clés des tuiles complétées d'une région.
     *
     * @return array<string, true>
     */
    public function getCompletedTileKeys(string $region): array
    {
        return $this->progressRepository->findCompletedTileKeys($region);
    }

    /**
     * Remet en attente les tuiles restées en 'processing' (arrêt/crash).
     *
     * @return int Nombre de tuiles réouvertes
     */
    public function resetProcessing(string $region): int
    {
        return $this->progressRepository->resetProcessingToPending($region);
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
     * Marque une tuile comme en cours de traitement.
     * Retourne true si la tuile a déjà été traitée (à ignorer).
     */
    public function startTile(string $region, array $tile): bool
    {
        $tileKey = $this->buildTileKey($tile);
        $progress = $this->progressRepository->findByRegionAndTile($region, $tileKey);

        // Déjà complétée, ignorer
        if ($progress !== null && $progress->getStatus() === self::STATUS_COMPLETED) {
            return true;
        }

        // Marquer comme en cours de traitement
        if ($progress === null) {
            $progress = new ImportProgress();
            $progress->setRegion($region);
            $progress->setTileKey($tileKey);
        }

        $progress->setStatus(self::STATUS_PROCESSING);
        $this->em->persist($progress);
        $this->em->flush();

        return false;
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