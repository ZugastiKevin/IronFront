<?php

namespace App\Controller\Api;

use App\Entity\Building;
use App\Entity\BuildingType;
use App\Entity\Game;
use App\Entity\GameResourceDeposit;
use App\Entity\Player;
use App\Entity\ResourceDeposit;
use App\Entity\ResourceType;
use App\Repository\BuildingRepository;
use App\Repository\BuildingTypeRepository;
use App\Repository\ChunkRepository;
use App\Repository\DeliveryRepository;
use App\Repository\GameResourceDepositRepository;
use App\Repository\ResourceDepositRepository;
use App\Repository\ResourceTypeRepository;
use App\Repository\RoadRepository;
use App\Service\CoordinateService;
use App\Service\Game\Building\BuildingService;
use App\Service\Game\Building\EnemyBaseService;
use App\Service\Game\CurrentPlayer;
use App\Service\Game\WorldStateService;
use App\Service\Game\Generate\ContinentalExpansionManager;
use App\Service\Game\Generate\GenerateChunkService;
use App\Service\Game\Road\RoadService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Contracts\Cache\CacheInterface;

/**
 * Controller API principal pour le jeu.
 */
#[IsGranted('ROLE_USER')]
final class GameApiController extends AbstractController
{
    private const CACHE_VERSION = 'v1';

    public function __construct(
        private readonly BuildingService $buildingService,
        private readonly CoordinateService $coordinateService,
        private readonly BuildingTypeRepository $buildingTypeRepo,
    ) {}

    // -------------------------
    // WORLD STATE
    // -------------------------
    #[Route('/api/world-state', name: 'api_world_state', methods: ['GET'])]
    public function worldState(WorldStateService $worldState, CurrentPlayer $currentPlayer): JsonResponse {
        $player = $currentPlayer->get();

        if (!$player) {
            return $this->json(['error' => 'No session'], 401);
        }

        return $this->json(
            $worldState->build($player)
        );
    }

    // -------------------------
    // PLAYER RESOURCES
    // -------------------------
    #[Route('/api/player-resources', name: 'api_player_resources', methods: ['GET'])]
    public function playerResources(
        CurrentPlayer $currentPlayer,
    ): JsonResponse {
        $player = $currentPlayer->get();

        if (!$player) {
            throw $this->createAccessDeniedException();
        }

        return $this->json([
            'resources' => array_map(fn($inv) => [
                'type' => $inv->getResourceType()->getCode()->value,
                'quantity' => $inv->getQuantity()
            ], $player->getPlayerInventories()->toArray()),
            'updatedAt' => $player->getPlayerInventories()->first()?->getUpdatedAt()?->format('c'),
        ]);
    }

    // -------------------------
    // BUILD
    // -------------------------
    #[Route('/api/build', name: 'api_build', methods: ['POST'])]
    public function build(
        Request $request,
        EntityManagerInterface $em,
        BuildingRepository $buildingRepo,
        BuildingTypeRepository $buildingTypeRepo,
        ChunkRepository $chunkRepo,
        CacheInterface $gameCache,
        RoadService $roadService,
        EnemyBaseService $enemyService,
        ResourceDepositRepository $depositRepo,
        GameResourceDepositRepository $gameDepositRepo,
        CoordinateService $coordinateService,
        CurrentPlayer $currentPlayer,
    ): JsonResponse {
        $player = $currentPlayer->get();

        if (!$player) {
            throw $this->createAccessDeniedException();
        }

        $game = $player->getGame();
        
        if (!$game) {
            return $this->json(['error' => 'No active game'], 400);
        }

        $data = json_decode($request->getContent(), true);
        $lat = $data['lat'] ?? null;
        $lng = $data['lng'] ?? null;
        $typeId = $data['type_id'] ?? null;
        $depositId = $data['deposit_id'] ?? null;

        // Cas spécial: construction depuis un dépôt
        if ($depositId !== null) {
            return $this->buildFromDeposit($depositId, $typeId, $player, $game, $em, $buildingRepo, $buildingTypeRepo, $depositRepo, $gameDepositRepo, $gameCache, $coordinateService);
        }

        if ($lat === null || $lng === null || $typeId === null) {
            return $this->json(['error' => 'Invalid data'], 400);
        }

        $buildingType = $buildingTypeRepo->find($typeId);
        if (!$buildingType) {
            return $this->json(['error' => 'Type not found'], 404);
        }

        $existingBase = $buildingRepo->findBaseForPlayer($player);

        // 1. Gestion spécifique pour la création de la base
        if ($buildingType->getLabel() === 'Base') {
            if ($existingBase) {
                return $this->json(['error' => 'Base already exists'], 400);
            }
        }
        // 2. Pour tout autre bâtiment, la base est obligatoire et la distance est vérifiée
        else {
            if (!$existingBase) {
                return $this->json(['error' => 'You need a base to build'], 400);
            }

            $distance = $this->coordinateService->distance($lat, $lng, $existingBase->getLatitudeBuild(), $existingBase->getLongitudeBuild());
            if ($distance > 500) {
                return $this->json(['error' => 'Too far from base'], 403);
            }
        }

        // 3. Vérification des coûts
        if (!$this->buildingService->canAfford($player, $buildingType, 1)) {
            return $this->json(['error' => 'Not enough resources'], 403);
        }

        // 4. Vérifications communes (Enemy proximity & Road)
        if ($enemyService->isTooCloseToEnemy($lat, $lng, $game, $player)) {
            return $this->json(['error' => 'Too close to enemy base'], 403);
        }

        if (!$roadService->isNearRoad($lat, $lng)) {
            return $this->json(['error' => 'Must be near a road'], 403);
        }

        // 4. Persistance du bâtiment
        $bbox  = $this->coordinateService->getBoundingBox($lat, $lng);
        $chunk = $chunkRepo->findOrCreateByBbox($bbox);

        $building = new Building();
        $building->setPlayer($player);
        $building->setChunk($chunk);
        $building->setBuildingType($buildingType);
        $building->setLatitudeBuild($lat);
        $building->setLongitudeBuild($lng);
        $building->setLevel(1);

        if ($buildingType->getProductionRate() > 0 && $buildingType->getResourceType() !== null) {
            $deposit = $depositRepo->findNearestAvailable($game, $lat, $lng);

            if ($deposit) {
                if ($deposit->getResourceType()->getId() !== $buildingType->getResourceType()->getId()) {
                    return $this->json(['error' => 'Ce bâtiment ne peut pas extraire cette ressource.'], 403);
                }

                // Créer un GameResourceDeposit pour marquer le dépôt comme capturé pour ce jeu
                $gameDeposit = new GameResourceDeposit();
                $gameDeposit->setGame($game);
                $gameDeposit->setResourceDeposit($deposit);
                $gameDeposit->setIsCaptured(true);
                $em->persist($gameDeposit);

                $building->setGameResourceDeposit($gameDeposit);
            } else {
                return $this->json(['error' => 'No deposit found here'], 403);
            }
        }


        $em->persist($building);
        $chunk->addBuilding($building);
        $chunk->setUpdatedAt(new \DateTimeImmutable());

        // Consommer les ressources
        $this->buildingService->consumeResources($player, $buildingType, 1);

        $em->flush();

        // Invalider le cache pour cette bbox
        $cacheKey = self::CACHE_VERSION . '_bbox_' . $this->coordinateService->bboxKey($bbox);
        $gameCache->delete($cacheKey);

        return $this->json([
            'status' => 'ok',
            'chunk' => [
                'latMin' => $bbox['latMin'],
                'lngMin' => $bbox['lngMin'],
                'latMax' => $bbox['latMax'],
                'lngMax' => $bbox['lngMax'],
            ],
            'refreshSidebar' => true,
            'baseCoords' => [
                'lat' => $lat,
                'lng' => $lng,
            ],
        ]);
    }

    // -------------------------
    // BUILDINGS VISIBLE
    // -------------------------
    #[Route('/api/buildings/visible', methods: ['POST'])]
    public function getBuildingsVisible(
        Request $request,
        BuildingRepository $buildingRepo
    ): JsonResponse {
        $bbox = $this->parseBbox($request);

        $buildings = $buildingRepo->findByBbox($bbox['south'], $bbox['west'], $bbox['north'], $bbox['east']);

        $result = [];
        foreach ($buildings as $building) {
            $result[] = [
                'id' => $building->getId(),
                'lat' => $building->getLatitudeBuild(),
                'lng' => $building->getLongitudeBuild(),
                'type' => $building->getBuildingType()->getLabel(),
                'level' => $building->getLevel()
            ];
        }

        return $this->json(['buildings' => $result]);
    }

    // -------------------------
    // ZONE GENERATE (force une zone précise)
    // -------------------------
    #[Route('/api/zones/generate', methods: ['POST'])]
    public function generateZone(
        Request $request,
        GenerateChunkService $generator,
        CurrentPlayer $currentPlayer,
    ): JsonResponse {
        $player = $currentPlayer->get();
        if (!$player) {
            throw $this->createAccessDeniedException();
        }

        $bbox = $this->parseBbox($request);
        $lat = ($bbox['south'] + $bbox['north']) / 2;
        $lng = ($bbox['west'] + $bbox['east']) / 2;

        $roads = $generator->generate($lat, $lng);

        return $this->json([
            'status'       => 'ok',
            'roads_created' => count($roads),
            'bbox'         => $bbox,
        ]);
    }

    // -------------------------
    // ZONES STATUS (debug / panneau)
    // -------------------------
    #[Route('/api/zones/status', methods: ['GET'])]
    public function getZonesStatus(ChunkRepository $chunkRepo): JsonResponse
    {
        $chunks = $chunkRepo->createQueryBuilder('c')
            ->select('c.id', 'c.latMin', 'c.lngMin', 'c.latMax', 'c.lngMax', 'c.updatedAt')
            ->getQuery()->getResult();

        $zones = array_map(fn($c) => [
            'id'        => $c['id'],
            'latMin'    => (float) $c['latMin'],
            'lngMin'    => (float) $c['lngMin'],
            'latMax'    => (float) $c['latMax'],
            'lngMax'    => (float) $c['lngMax'],
            'updatedAt' => $c['updatedAt']?->format('c'),
        ], $chunks);

        // Set des bboxKeys pour une recherche rapide côté front
        $bboxKeys = array_map(fn($c) => sprintf('%s_%s',
            (float) $c['latMin'],
            (float) $c['lngMin']
        ), $chunks);

        return $this->json([
            'zones'   => $zones,
            'bboxKeys' => $bboxKeys,
        ]);
    }

    // -------------------------
    // MAP DATA
    // -------------------------
    #[Route('/api/map-data', name: 'api_map', methods: ['GET'])]
    public function mapData(CurrentPlayer $currentPlayer, BuildingRepository $buildingRepo): JsonResponse
    {
        $player = $currentPlayer->get();

        if (!$player) {
            throw $this->createAccessDeniedException();
        }

        return $this->json($buildingRepo->getBuildingsDataForPlayer($player));
    }

    #[Route('/api/chunks/bulk', methods: ['POST'])]
    public function getChunksBulk(Request $request, RoadRepository $roadRepo): JsonResponse
    {
        $bbox = $this->parseBbox($request);

        $roads = $roadRepo->findByBbox($bbox['south'], $bbox['west'], $bbox['north'], $bbox['east']);

        return $this->json([
            'roads' => array_map(fn($r) => [
                'id'     => $r->getId(),
                'points' => $r->getPoints(),
                'type'   => $r->getType(),
            ], $roads),
        ]);
    }

    #[Route('/api/add-roads-chunk', methods: ['POST'])]
    public function addRoadsChunk(
        Request $request,
        GenerateChunkService $generator
    ): JsonResponse {

        try {
            $data = json_decode($request->getContent(), true);

            $lat = (float) ($data['lat'] ?? 0);
            $lng = (float) ($data['lng'] ?? 0);
            $radius = (float) ($data['radius'] ?? 200.0);

            if (!$lat || !$lng) {
                return $this->json(['error' => 'Invalid data'], 400);
            }

            $result = $generator->addRoadsChunk($lat, $lng);

            return $this->json([
                'status' => 'ok',
                'roads_created' => $result['roads_created'],
                'roads' => array_map(fn($r) => [
                    'id' => $r->getId(),
                    'points' => $r->getPoints(),
                    'type' => $r->getType(),
                ], $result['roads']),
            ]);
        } catch (\Throwable $e) {
            return $this->json([
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ], 500);
        }
    }

    // -------------------------
    // WORLD EXPANSION
    // -------------------------
    #[Route('/api/world-expansion/status', name: 'api_world_expansion_status', methods: ['GET'])]
    public function worldExpansionStatus(
        ContinentalExpansionManager $manager,
    ): JsonResponse {
        return $this->json($manager->getStats());
    }

    #[Route('/api/building-types', name: 'api_building_types', methods: ['GET'])]
    public function getBuildingTypes(BuildingTypeRepository $buildingTypeRepo): JsonResponse
    {
        $types = $buildingTypeRepo->findAll();
        return $this->json(array_map(fn($bt) => [
            'id' => $bt->getId(),
            'name' => $bt->getLabel(),
            'code' => $bt->getCode(),
            'base_costs' => $this->buildingService->getBuildCosts($bt, 1),
            'production_rate' => $bt->getProductionRate(),
            'max_level' => $bt->getMaxLevel(),
            'resource_type' => $bt->getResourceType()?->getCode()?->value,
        ], $types));
    }

    /**
     * @deprecated Utiliser POST /api/deposits/bulk avec une bbox
     */
    #[Route('/api/deposits/legacy/{chunkId}', methods: ['GET'], requirements: ['chunkId' => '-?\d+_-?\d+'])]
    public function getDepositsLegacy(string $chunkId, ResourceDepositRepository $depositRepo, CurrentPlayer $currentPlayer, GameResourceDepositRepository $gameDepositRepo): JsonResponse
    {
        $player = $currentPlayer->get();
        if (!$player) {
            throw $this->createAccessDeniedException();
        }

        $game = $player->getGame();
        if (!$game) {
            return $this->json([]);
        }

        // Reconstruire une bbox à partir du chunkId "X_Y"
        $parts = explode('_', $chunkId);
        if (count($parts) !== 2 || !is_numeric($parts[0]) || !is_numeric($parts[1])) {
            return $this->json([]);
        }

        $x = (int) $parts[0];
        $y = (int) $parts[1];
        $size = CoordinateService::CHUNK_SIZE;

        $deposits = $depositRepo->findByBbox(
            $x * $size, $y * $size,
            ($x + 1) * $size, ($y + 1) * $size
        );

        return $this->json(array_map(fn($d) => [
            'id' => $d->getId(),
            'resource_type'  => $d->getResourceType()->getCode()->value,
            'resource_label' => $d->getResourceType()->getLabel(),
            'costs' => $this->getExtractorCosts($d->getResourceType()),
            'richness' => $d->getRichness(),
            'latitude' => $d->getLatitude(),
            'longitude' => $d->getLongitude(),
            'is_claimed' => $gameDepositRepo->isCaptured($game, $d),
        ], $deposits));
    }

    #[Route('/api/deposit/{id}/popup-content', methods: ['GET'])]
    public function getDepositPopup(CurrentPlayer $currentPlayer, ResourceDeposit $deposit, GameResourceDepositRepository $gameDepositRepo): Response
    {
        $player = $currentPlayer->get();

        if (!$player) {
            throw $this->createAccessDeniedException();
        }

        $game = $player->getGame();
        if (!$game) {
            throw $this->createAccessDeniedException();
        }

        $extractorType = $this->buildingTypeRepo->createQueryBuilder('bt')
            ->where('bt.resourceType = :rt')
            ->andWhere('bt.production_rate > 0')
            ->setParameter('rt', $deposit->getResourceType())
            ->getQuery()
            ->getOneOrNullResult();

        $costs = $extractorType ? $this->buildingService->getBuildCostsWithLabels($extractorType, 1) : [];

        // Calculer les ressources disponibles pour le joueur (tableau associatif code => quantity)
        $available = [];
        foreach ($costs as $item) {
            $available[$item['code']] = $this->buildingService->getResourceQuantity($player, $item['code']);
        }

        return $this->render('game/popup/_deposit_popup_content.html.twig', [
            'deposit' => $deposit,
            'costs' => $costs,
            'available' => $available,
            'isClaimed' => $gameDepositRepo->isCaptured($game, $deposit),
        ]);
    }

    /**
     * Extrait une bounding box du body JSON.
     *
     * Accepte :
     *   - { "south": ..., "west": ..., "north": ..., "east": ... }
     *   - { "bbox": { "south": ..., ... } }
     *
     * @return array{south: float, west: float, north: float, east: float}
     */
    private function parseBbox(Request $request): array
    {
        $data = json_decode($request->getContent(), true) ?? [];

        $south = (float) ($data['south'] ?? $data['bbox']['south'] ?? 0);
        $west  = (float) ($data['west']  ?? $data['bbox']['west']  ?? 0);
        $north = (float) ($data['north'] ?? $data['bbox']['north'] ?? 0);
        $east  = (float) ($data['east']  ?? $data['bbox']['east']  ?? 0);

        return compact('south', 'west', 'north', 'east');
    }

    /**
     * Récupère les coûts de construction pour l'extracteur d'un type de ressource.
     * Retourne un tableau avec code, label et quantité pour chaque ressource.
     */
    private function getExtractorCosts(ResourceType $resourceType): array
    {
        $extractorType = $this->buildingTypeRepo->createQueryBuilder('bt')
            ->where('bt.resourceType = :rt')
            ->andWhere('bt.production_rate > 0')
            ->setParameter('rt', $resourceType)
            ->getQuery()
            ->getOneOrNullResult();

        if (!$extractorType) {
            return [];
        }

        return $this->buildingService->getBuildCostsWithLabels($extractorType, 1);
    }

    #[Route('/api/deposits/bulk', methods: ['POST'])]
    public function bulkDeposits(Request $request, ResourceDepositRepository $depositRepo, CurrentPlayer $currentPlayer, GameResourceDepositRepository $gameDepositRepo): JsonResponse
    {
        $player = $currentPlayer->get();
        if (!$player) {
            throw $this->createAccessDeniedException();
        }

        $game = $player->getGame();
        if (!$game) {
            return $this->json(['error' => 'No active game'], 400);
        }

        try {
            $bbox = $this->parseBbox($request);
            $deposits = $depositRepo->findByBbox($bbox['south'], $bbox['west'], $bbox['north'], $bbox['east']);

            return $this->json([
                'deposits' => array_map(fn($d) => [
                    'id'             => $d->getId(),
                    'resource_type' => $d->getResourceType()?->getCode()?->value ?? 'unknown',
                    'resource_label' => $d->getResourceType()?->getLabel() ?? 'unknown',
                    'costs'          => $this->getExtractorCosts($d->getResourceType()),
                    'richness'       => $d->getRichness(),
                    'latitude'       => $d->getLatitude(),
                    'longitude'      => $d->getLongitude(),
                    'is_claimed'     => $gameDepositRepo->isCaptured($game, $d),
                ], $deposits),
            ]);
        } catch (\Exception $e) {
            return $this->json(['error' => $e->getMessage()], 500);
        }
    }

    // -------------------------
    // BUILDING UPGRADE
    // -------------------------
    #[Route('/api/building/{id}/upgrade', name: 'api_building_upgrade', methods: ['POST'])]
    public function upgradeBuilding(CurrentPlayer $currentPlayer, Building $building): JsonResponse
    {
        $player = $currentPlayer->get();

        if (!$player instanceof Player || $building->getPlayer()->getId() !== $player->getId()) {
            return $this->json(['error' => 'Unauthorized'], 403);
        }

        if (!$this->buildingService->canUpgrade($building)) {
            return $this->json(['error' => 'Not enough resources'], 403);
        }

        if (!$this->buildingService->upgrade($building)) {
            return $this->json(['error' => 'Cannot upgrade'], 400);
        }

        return $this->json([
            'status' => 'ok',
            'newLevel' => $building->getLevel(),
        ]);
    }

    #[Route('/api/building/{id}/upgrade-info', name: 'api_building_upgrade_info', methods: ['GET'])]
    public function getUpgradeInfo(CurrentPlayer $currentPlayer, Building $building): JsonResponse
    {
        $player = $currentPlayer->get();
        if (!$player instanceof Player) {
            return $this->json(['error' => 'Not logged'], 401);
        }

        // Seul le propriétaire peut voir les infos d'amélioration
        if ($building->getPlayer()->getId() !== $player->getId()) {
            return $this->json(['error' => 'Unauthorized'], 403);
        }

        return $this->json($this->buildingService->getUpgradeInfo($building));
    }

    #[Route('/api/buildings/{id}/popup-content', methods: ['GET'])]
    public function getBuildingPopupContent(CurrentPlayer $currentPlayer, Building $building, DeliveryRepository $deliveryRepo, BuildingRepository $buildingRepo): Response
    {
        $player = $currentPlayer->get();
        if (!$player instanceof Player) {
            return new Response('Non autorisé', 401, ['Content-Type' => 'text/plain']);
        }

        if ($building->getPlayer()->getId() !== $player->getId()) {
            return new Response('Non autorisé', 403, ['Content-Type' => 'text/plain']);
        }

        $buildingType = $building->getBuildingType();
        $level = $building->getLevel() ?? 1;
        $maxLevel = $buildingType->getMaxLevel() ?? 1;
        $production = $buildingType->getProductionRate() * $level;
        $resourceType = $buildingType->getResourceType()?->getCode();
        $resourceLabel = $buildingType->getResourceType()?->getLabel();

        $upgradeInfo = $this->buildingService->getUpgradeInfo($building);
        $timeRemaining = $deliveryRepo->getTimeUntilNextDeparture($building);

        $nextDelivery = $deliveryRepo->findNextWaitingForBuilding($building);

        $html = $this->render('game/popup/_building_popup_content.html.twig', [
            'building' => $building,
            'buildingType' => $buildingType,
            'level' => $level,
            'maxLevel' => $maxLevel,
            'production' => $production,
            'resourceType' => $resourceType,
            'resourceLabel' => $resourceLabel,
            'needed' => $upgradeInfo['needed'] ?? [],
            'available' => $upgradeInfo['available'] ?? [],
            'neededWithLabels' => $upgradeInfo['neededWithLabels'] ?? [],
            'canUpgrade' => $upgradeInfo['canUpgrade'] ?? false,
            'timeRemaining' => $timeRemaining,
            'scheduledAt' => $nextDelivery?->getScheduledAt()?->format('c'),
        ])->getContent();

        return new Response($html);
    }

    // -------------------------
    // BUILDING COSTS
    // -------------------------
    #[Route('/api/building-types/{id}/costs', name: 'api_building_costs', methods: ['GET'])]
    public function getBuildingCosts(BuildingType $buildingType): JsonResponse
    {
        return $this->json([
            'buildingTypeId' => $buildingType->getId(),
            'name' => $buildingType->getLabel(),
            'costs' => $this->buildingService->getBuildCosts($buildingType, 1),
        ]);
    }

    // -------------------------
    // CLAIM DEPOSIT (EXTRACTOR BUILDING)
    // -------------------------
    #[Route('/api/deposit/{id}/claim', name: 'api_claim_deposit', methods: ['POST'])]
    public function claimDeposit(
        CurrentPlayer $currentPlayer,
        int $id,
        EntityManagerInterface $em,
        BuildingTypeRepository $buildingTypeRepo,
        BuildingRepository $buildingRepo,
        ChunkRepository $chunkRepo,
        ResourceDepositRepository $depositRepo,
        GameResourceDepositRepository $gameDepositRepo
    ): JsonResponse {
        $player = $currentPlayer->get();

        if (!$player instanceof Player) {
            return $this->json(['error' => 'Not logged'], 401);
        }

        $game = $player->getGame();
        if (!$game) {
            return $this->json(['error' => 'No active game'], 400);
        }

        // Trouver le dépôt
        $deposit = $depositRepo->find($id);
        if (!$deposit) {
            return $this->json(['error' => 'Deposit not found'], 404);
        }

        // Vérifier qu'il n'est pas déjà exploité pour ce jeu
        if ($gameDepositRepo->isCaptured($game, $deposit)) {
            return $this->json(['error' => 'Deposit already captured'], 400);
        }

        // Trouver le type de bâtiment extracteur pour cette ressource
        $resourceType = $deposit->getResourceType();
        $extractorType = $buildingTypeRepo->createQueryBuilder('bt')
            ->where('bt.resourceType = :rt')
            ->andWhere('bt.production_rate > 0')
            ->setParameter('rt', $resourceType)
            ->getQuery()
            ->getOneOrNullResult();

        if (!$extractorType) {
            return $this->json(['error' => 'No extractor building for this resource'], 404);
        }

        // Vérifier la base du joueur
        $existingBase = $buildingRepo->findBaseForPlayer($player);
        if (!$existingBase) {
            return $this->json(['error' => 'You need a base to claim deposits'], 400);
        }

        // Vérifier les coûts
        if (!$this->buildingService->canAfford($player, $extractorType, 1)) {
            return $this->json(['error' => 'Not enough resources'], 403);
        }

        // Vérifier la distance (doit être à proximité du dépôt)
        $distance = $this->coordinateService->distance(
            $deposit->getLatitude(),
            $deposit->getLongitude(),
            $existingBase->getLatitudeBuild(),
            $existingBase->getLongitudeBuild()
        );
        if ($distance > 500) {
            return $this->json(['error' => 'Too far from base'], 403);
        }

        // Consommer les ressources
        $this->buildingService->consumeResources($player, $extractorType, 1);

        // Créer le bâtiment extracteur
        $lat = $deposit->getLatitude();
        $lng = $deposit->getLongitude();

        $chunkId = $this->coordinateService->getChunkId($lat, $lng);
        $chunk = $chunkRepo->findOrCreate($chunkId);

        $building = new Building();
        $building->setPlayer($player);
        $building->setChunk($chunk);
        $building->setBuildingType($extractorType);
        $building->setLatitudeBuild($lat);
        $building->setLongitudeBuild($lng);
        $building->setLevel(1);

        // Créer un GameResourceDeposit pour marquer le dépôt comme capturé pour ce jeu
        $gameDeposit = new GameResourceDeposit();
        $gameDeposit->setGame($game);
        $gameDeposit->setResourceDeposit($deposit);
        $gameDeposit->setIsCaptured(true);
        $em->persist($gameDeposit);

        $building->setGameResourceDeposit($gameDeposit);

        $em->persist($building);
        $chunk->addBuilding($building);
        $chunk->setUpdatedAt(new \DateTimeImmutable());

        $em->flush();

        return $this->json([
            'status' => 'ok',
            'buildingId' => $building->getId(),
            'chunkId' => $chunk->getChunkId(),
        ]);
    }

    // -------------------------
    // BUILD FROM DEPOSIT
    // -------------------------
    private function buildFromDeposit(
        int $depositId,
        int $typeId,
        Player $player,
        Game $game,
        EntityManagerInterface $em,
        BuildingRepository $buildingRepo,
        BuildingTypeRepository $buildingTypeRepo,
        ResourceDepositRepository $depositRepo,
        GameResourceDepositRepository $gameDepositRepo,
        CacheInterface $gameCache,
        CoordinateService $coordinateService,
    ): JsonResponse {
        try {
            // Trouver le dépôt
            $deposit = $depositRepo->find($depositId);
            if (!$deposit) {
                return $this->json(['error' => 'Deposit not found'], 404);
            }

            // Vérifier la route du dépôt
            $road = $deposit->getRoad();
            if (!$road) {
                return $this->json(['error' => 'Deposit has no road'], 400);
            }

            // Vérifier qu'il n'est pas déjà exploité pour ce jeu
            if ($gameDepositRepo->isCaptured($game, $deposit)) {
                return $this->json(['error' => 'Deposit already captured'], 400);
            }

            // Trouver le type de bâtiment
            $buildingType = $buildingTypeRepo->find($typeId);
            if (!$buildingType) {
                return $this->json(['error' => 'Building type not found'], 404);
            }

            // Vérifier la base du joueur
            $existingBase = $buildingRepo->findBaseForPlayer($player);
            if (!$existingBase) {
                return $this->json(['error' => 'You need a base to claim deposits'], 400);
            }

            // Vérifier les coûts
            if (!$this->buildingService->canAfford($player, $buildingType, 1)) {
                return $this->json(['error' => 'Not enough resources'], 403);
            }

            // Vérifier la distance
            $distance = $coordinateService->distance(
                $deposit->getLatitude(),
                $deposit->getLongitude(),
                $existingBase->getLatitudeBuild(),
                $existingBase->getLongitudeBuild()
            );
            if ($distance > 500) {
                return $this->json(['error' => 'Too far from base'], 403);
            }

            // Consommer les ressources
            $this->buildingService->consumeResources($player, $buildingType, 1);

            // Créer le bâtiment sur les coordonnées du dépôt
            $lat = $deposit->getLatitude();
            $lng = $deposit->getLongitude();

            // Récupérer le chunk depuis la route du dépôt
            $chunk = $road->getChunk();
            if (!$chunk) {
                return $this->json(['error' => 'Deposit chunk not found'], 400);
            }

            $building = new Building();
            $building->setPlayer($player);
            $building->setChunk($chunk);
            $building->setBuildingType($buildingType);
            $building->setLatitudeBuild($lat);
            $building->setLongitudeBuild($lng);
            $building->setLevel(1);

            // Créer un GameResourceDeposit pour marquer le dépôt comme capturé pour ce jeu
            $gameDeposit = new GameResourceDeposit();
            $gameDeposit->setGame($game);
            $gameDeposit->setResourceDeposit($deposit);
            $gameDeposit->setIsCaptured(true);
            $em->persist($gameDeposit);

            $building->setGameResourceDeposit($gameDeposit);

            $em->persist($building);
            $chunk->addBuilding($building);
            $chunk->setUpdatedAt(new \DateTimeImmutable());

            $em->flush();

            // Invalider le cache
            $cacheKey = self::CACHE_VERSION . '_chunk_' . str_replace(['{', '}', '(', ')', '/', '\\', '@', ':'], '_', $chunk->getChunkId());
            $gameCache->delete($cacheKey);

            return $this->json([
                'status' => 'ok',
                'buildingId' => $building->getId(),
                'chunkId' => $chunk->getChunkId(),
                'refreshSidebar' => true,
            ]);
        } catch (\Exception $e) {
            return $this->json(['error' => 'Server error: ' . $e->getMessage()], 500);
        }
    }

    // -------------------------
    // RESOURCE TYPE
    // -------------------------
    #[Route('/api/resource-types', name: 'api_resource_types', methods: ['GET'])]
    public function getResource(ResourceTypeRepository $resourceType): JsonResponse
    {
        $types = $resourceType->findAll();

        return $this->json(array_map(fn($rt) => [
            'id' => $rt->getId(),
            'label' => $rt->getLabel(),
            'code' => $rt->getCode()->value,
            'color' => $rt->getColor(),
        ], $types));
    }
}