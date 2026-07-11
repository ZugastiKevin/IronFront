<?php

namespace App\Command;

use App\Entity\RoadNode;
use App\Entity\RoadSegment;
use App\Entity\SpatialCell;
use App\Entity\SpatialSegment;
use App\Repository\RoadNodeRepository;
use App\Repository\RoadSegmentRepository;
use App\Repository\SpatialCellRepository;
use App\Service\Osm\GeometryHelper;
use Doctrine\DBAL\Connection;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

/**
 * Test import : crée quelques routes Paris dans road_segment + index spatial
 * (pour tester le snap via l'API /api/add-roads-chunk).
 *
 * Remplace l'ancien import dans la table `road` (supprimée) : on crée
 * directement les nœuds (road_node), le segment (road_segment, avec sa
 * sous-polyligne) et les entrées d'index spatial (spatial_cell /
 * spatial_segment) afin que RoadService::isNearRoad les trouve.
 */
#[AsCommand(
    name: 'osm:test-import',
    description: 'Crée des routes test Paris dans road_segment (test du snap)',
)]
class TestImportCommand extends Command
{
    /** @var array<int, array{points: list<array{0: float, 1: float}>, type: string}> */
    private const TEST_ROADS = [
        [
            'points' => [[48.85, 2.34], [48.86, 2.34], [48.86, 2.35], [48.85, 2.35], [48.85, 2.34]],
            'type' => 'primary',
        ],
        [
            'points' => [[48.84, 2.33], [48.85, 2.33], [48.85, 2.34]],
            'type' => 'residential',
        ],
    ];

    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly RoadNodeRepository $nodeRepository,
        private readonly RoadSegmentRepository $segmentRepository,
        private readonly SpatialCellRepository $cellRepository,
        private readonly Connection $connection,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('truncate', null, InputOption::VALUE_NONE, 'Vide road_node/road_segment/spatial_* avant insertion (repartir de zéro)');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Import test routes Paris (road_segment)');

        if ($input->getOption('truncate')) {
            $this->connection->executeStatement('TRUNCATE TABLE spatial_segment');
            $this->connection->executeStatement('TRUNCATE TABLE spatial_cell');
            $this->connection->executeStatement('TRUNCATE TABLE road_segment');
            $this->connection->executeStatement('TRUNCATE TABLE road_node');
            $io->info('Tables road_node/road_segment/spatial_* vidées.');
        }

        $count = 0;
        foreach (self::TEST_ROADS as $data) {
            $this->createRoad($data['points'], $data['type']);
            $count++;
        }

        $io->success(sprintf('%d routes test créées dans road_segment + index spatial', $count));
        $io->writeln("\nTestez maintenant :");
        $io->writeln("curl -X POST /api/add-roads-chunk -d '{\"lat\":48.85,\"lng\":2.34}'");

        return Command::SUCCESS;
    }

    /**
     * Crée un segment de test (nœuds + segment + index spatial).
     *
     * @param list<array{0: float, 1: float}> $points
     */
    private function createRoad(array $points, string $type): void
    {
        // Nœuds extrêmes (find-or-create sur les coordonnées).
        $start = $this->nodeRepository->findOrCreate($points[0][0], $points[0][1]);
        $end = $this->nodeRepository->findOrCreate($points[count($points) - 1][0], $points[count($points) - 1][1]);
        // Flush pour obtenir les IDs des nœuds (nouveaux ou existants).
        $this->em->flush();

        $bbox = GeometryHelper::calculateBbox($points);
        $length = GeometryHelper::calculateLength($points);
        $costFactor = RoadSegment::TYPE_MAPPING[$type]['cost_factor'] ?? 1.0;

        $segment = new RoadSegment();
        $segment->setNodeStartId($start->getId());
        $segment->setNodeEndId($end->getId());
        $segment->setType($type);
        $segment->setPolyline($points);
        $segment->setLength($length);
        $segment->setCost($length * $costFactor);
        $segment->setBboxLatMin($bbox['lat_min']);
        $segment->setBboxLatMax($bbox['lat_max']);
        $segment->setBboxLngMin($bbox['lng_min']);
        $segment->setBboxLngMax($bbox['lng_max']);

        $this->em->persist($segment);
        $this->em->flush(); // Flush pour obtenir l'ID du segment avant l'indexation.

        $this->indexSegment($segment->getId(), $bbox);
    }

    /**
     * Indexe un segment dans l'index spatial (cellules + relations).
     *
     * Idempotent : cellules en INSERT via l'EntityManager (find-or-create),
     * relations cellule↔segment en INSERT IGNORE (DBAL) pour supporter les
     * ré-exécutions sans doublon.
     *
     * @param array{lat_min: float, lat_max: float, lng_min: float, lng_max: float} $bbox
     */
    private function indexSegment(int $segmentId, array $bbox): void
    {
        $cellIds = GeometryHelper::getCellIdsForBbox(
            $bbox['lat_min'],
            $bbox['lng_min'],
            $bbox['lat_max'],
            $bbox['lng_max']
        );

        foreach ($cellIds as $cellId) {
            // Cellule : find-or-create (clé primaire = id).
            if ($this->cellRepository->find($cellId) === null) {
                $parts = explode('_', $cellId);
                $x = (int) $parts[0];
                $y = (int) $parts[1];

                $cell = new SpatialCell($cellId, $x, $y);
                $cell->setLatMin($x * SpatialCell::CELL_SIZE_DEGREES);
                $cell->setLatMax(($x + 1) * SpatialCell::CELL_SIZE_DEGREES);
                $cell->setLngMin($y * SpatialCell::CELL_SIZE_DEGREES);
                $cell->setLngMax(($y + 1) * SpatialCell::CELL_SIZE_DEGREES);
                $this->em->persist($cell);
                // Flush immédiat : la relation spatial_segment a une FK vers la
                // cellule, elle doit exister en base avant l'insertion de la relation.
                $this->em->flush();
            }

            // Relation cellule↔segment : éviter les doublons entre exécutions.
            $exists = $this->connection->fetchOne(
                'SELECT 1 FROM spatial_segment WHERE cell_id = ? AND segment_id = ?',
                [$cellId, $segmentId]
            );

            if ($exists === false) {
                $this->connection->insert('spatial_segment', [
                    'cell_id' => $cellId,
                    'segment_id' => $segmentId,
                ]);
            }
        }
    }
}
