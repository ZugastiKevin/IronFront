<?php

namespace App\Tests\Service\Osm;

use App\Service\Osm\GeometryHelper;
use PHPUnit\Framework\TestCase;

/**
 * Tests pour GeometryHelper.
 */
final class GeometryHelperTest extends TestCase
{
    public function testDouglasPeuckerSimplifiesPoints(): void
    {
        // Ligne droite avec points intermédiaires
        $points = [
            [48.0, 2.0],
            [48.1, 2.1], // Devrait être supprimé (< epsilon)
            [48.2, 2.2], // Devrait être supprimé (< epsilon)
            [48.3, 2.3],
        ];

        $result = GeometryHelper::douglasPeucker($points, 50.0); // 50m epsilon

        // Doit garder les extrémités
        $this->assertCount(2, $result);
        $this->assertEquals([48.0, 2.0], $result[0]);
        $this->assertEquals([48.3, 2.3], $result[1]);
    }

    public function testDouglasPeuckerKeepsSharpTurns(): void
    {
        // Virage prononcé
        $points = [
            [48.0, 2.0],
            [48.5, 2.0], // Virage important
            [48.5, 2.5],
        ];

        $result = GeometryHelper::douglasPeucker($points, 50.0);

        // Doit garder le virage
        $this->assertCount(3, $result);
    }

    public function testCalculateLengthReturnsMeters(): void
    {
        // Distance approximative entre deux points proches
        $points = [
            [48.0, 2.0],
            [48.0, 2.1], // ~7.4km à l'équateur
        ];

        $length = GeometryHelper::calculateLength($points);

        // Environ 7.4km à cette latitude
        $this->assertGreaterThan(7000, $length);
        $this->assertLessThan(8000, $length);
    }

    public function testCalculateBboxReturnsCorrectBounds(): void
    {
        $points = [
            [48.5, 2.3],
            [48.2, 2.7],
            [48.8, 2.1],
        ];

        $bbox = GeometryHelper::calculateBbox($points);

        $this->assertEquals(48.2, $bbox['lat_min']);
        $this->assertEquals(48.8, $bbox['lat_max']);
        $this->assertEquals(2.1, $bbox['lng_min']);
        $this->assertEquals(2.7, $bbox['lng_max']);
    }

    public function testGetCellIdsForBboxReturnsCorrectIds(): void
    {
        // Bbox couvrant 2 cellules
        $ids = GeometryHelper::getCellIdsForBbox(48.0, 2.0, 48.1, 2.1);

        // Devrait couvrir plusieurs cellules 1km
        $this->assertNotEmpty($ids);
        $this->assertStringContainsString('_', $ids[0]);
    }

    public function testSegmentSignatureIsDirectionAgnostic(): void
    {
        $forward = [[48.0, 2.0], [48.1, 2.1]];
        $reversed = [[48.1, 2.1], [48.0, 2.0]];

        $sig1 = GeometryHelper::segmentSignature($forward);
        $sig2 = GeometryHelper::segmentSignature($reversed);

        $this->assertEquals($sig1, $sig2);
    }

    public function testDouglasPeuckerIndicesReturnsOriginalIndices(): void
    {
        $points = [
            [48.0, 2.0],
            [48.1, 2.1],
            [48.2, 2.2],
            [48.3, 2.3],
        ];

        $indices = GeometryHelper::douglasPeuckerIndices($points, 50.0);

        // Ligne droite : seules les extrémités sont conservées
        $this->assertSame([0, 3], $indices);
        $this->assertSame($points[0], $points[$indices[0]]);
        $this->assertSame($points[3], $points[$indices[1]]);
    }

    public function testDouglasPeuckerIndicesKeepsSharpTurns(): void
    {
        $points = [
            [48.0, 2.0],
            [48.5, 2.0],
            [48.5, 2.5],
        ];

        $indices = GeometryHelper::douglasPeuckerIndices($points, 50.0);

        $this->assertSame([0, 1, 2], $indices);
    }

    public function testPointToSegmentDistanceIsNowPublic(): void
    {
        // Point 111m au nord d'un segment horizontal, au milieu en longitude
        $dist = GeometryHelper::pointToSegmentDistance(48.001, 2.05, 48.0, 2.0, 48.0, 2.1);

        $this->assertGreaterThan(100.0, $dist);
        $this->assertLessThan(130.0, $dist);
    }

    public function testPointToPolylineDistanceMinEdge(): void
    {
        $polyline = [
            [48.0, 2.0],
            [48.0, 2.1],
        ];

        // Point 111m au nord, projeté au milieu de l'arête
        $dist = GeometryHelper::pointToPolylineDistance(48.001, 2.05, $polyline);

        $this->assertGreaterThan(100.0, $dist);
        $this->assertLessThan(130.0, $dist);
    }

    public function testPointToPolylineDistanceIgnoresFarEdge(): void
    {
        $polyline = [
            [48.0, 2.0],
            [48.0, 2.1],
            [49.0, 2.1], // arête lointaine
        ];

        // Point proche de la 1re arête, loin de la 2e
        $dist = GeometryHelper::pointToPolylineDistance(48.001, 2.05, $polyline);

        $this->assertGreaterThan(100.0, $dist);
        $this->assertLessThan(130.0, $dist);
    }

    public function testMetersToDegreesConversions(): void
    {
        // 1 degré de latitude ≈ 111 km
        $this->assertGreaterThan(0.99, GeometryHelper::metersToDegreesLat(111000));
        $this->assertLessThan(1.01, GeometryHelper::metersToDegreesLat(111000));

        // La longitude se compresse avec la latitude (cos) : par degré de
        // latitude on couvre moins de mètres en longitude, donc il faut
        // davantage de degrés de longitude par mètre à haute latitude.
        $lat = 60.0;
        $this->assertGreaterThan(
            GeometryHelper::metersToDegreesLng(111000, 0.0),
            GeometryHelper::metersToDegreesLng(111000, $lat)
        );
    }
}