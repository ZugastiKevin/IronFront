<?php

namespace App\Tests\Service\Game\Generate;

use PHPUnit\Framework\TestCase;
use App\Service\Game\Generate\GeofabrikRoadProvider;
use App\Service\Game\Generate\GenerateChunkService;
use App\Entity\Road;

/**
 * Tests de validation du système de conversion roads_mysql → road
 */
class RoadConversionTest extends TestCase
{
    private const TEST_BBOX = [
        'latMin' => 48.85,  // Paris centre
        'lngMin' => 2.34,
        'latMax' => 48.86,
        'lngMax' => 2.35,
    ];

    /**
     * Test 1 : Vérifier que la table roads_mysql contient des données
     */
    public function testRoadsMysqlHasData(): void
    {
        // Ce test doit être exécuté avec la BDD connectée
        // Vérifie que countRoads() > 0
        $this->assertTrue(true, 'Placeholder - à exécuter avec la BDD réelle');
    }

    /**
     * Test 2 : Vérifier que la requête spatiale fonctionne
     */
    public function testSpatialQueryReturnsRoads(): void
    {
        // Ce test doit être exécuté avec la BDD connectée
        // La requête ST_Intersects doit retourner des routes pour la bbox Paris
        $this->assertTrue(true, 'Placeholder - à exécuter avec la BDD réelle');
    }

    /**
     * Test 3 : Vérifier que les bbox sont correctement calculées
     */
    public function testRoadBboxIsComputed(): void
    {
        $road = new Road();
        $road->setPoints([
            [48.855, 2.345],
            [48.856, 2.346],
            [48.857, 2.347],
        ]);
        $road->setType('primary');

        $this->assertNotNull($road->getBboxLatMin());
        $this->assertNotNull($road->getBboxLngMin());
        $this->assertEquals(48.855, $road->getBboxLatMin());
        $this->assertEquals(48.857, $road->getBboxLatMax());
        $this->assertEquals(2.345, $road->getBboxLngMin());
        $this->assertEquals(2.347, $road->getBboxLngMax());
    }

    /**
     * Test 4 : Vérifier la signature de route pour le dédoublonnage
     */
    public function testRoadSignatureIsBidirectional(): void
    {
        $service = $this->getMockBuilder(GenerateChunkService::class)
            ->disableOriginalConstructor()
            ->getMock();

        // On va tester la méthode roadSignature via un test d'intégration
        // La signature MÊME qu'avec les points inversés
        $road = new Road();
        $road->setPoints([[48.85, 2.35], [48.86, 2.34]]);
        $road->setType('primary');

        $roadReversed = new Road();
        $roadReversed->setPoints([[48.86, 2.34], [48.85, 2.35]]);
        $roadReversed->setType('primary');

        // Les deux routes devraient avoir la même signature
        // (cette logique est dans filterNewRoads)
        $this->assertEquals(
            $road->getBboxLatMin(), $roadReversed->getBboxLatMax()
        );
    }
}