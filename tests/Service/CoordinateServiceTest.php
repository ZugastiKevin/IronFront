<?php

namespace App\Tests\Service;

use App\Service\CoordinateService;
use PHPUnit\Framework\TestCase;

final class CoordinateServiceTest extends TestCase
{
    private CoordinateService $service;

    protected function setUp(): void
    {
        $this->service = new CoordinateService();
    }

    public function testDistanceBetweenSamePointReturnsZero(): void
    {
        $distance = $this->service->distance(48.8566, 2.3522, 48.8566, 2.3522);

        $this->assertEquals(0, $distance);
    }

    public function testDistanceBetweenTwoPoints(): void
    {
        // Paris to Lyon (environ 391 km)
        $distance = $this->service->distance(48.8566, 2.3522, 45.7640, 4.8357);

        // La distance devrait être d'environ 391 km (avec une marge d'erreur)
        $this->assertGreaterThan(380000, $distance);
        $this->assertLessThan(400000, $distance);
    }

    public function testGetBoundingBoxReturnsCellCorners(): void
    {
        $bbox = $this->service->getBoundingBox(48.8566, 2.3522);

        // 48.8566 / 0.01 = 4885.66 → floor = 4885 → latMin = 48.85, latMax = 48.86
        $this->assertEqualsWithDelta(48.85, $bbox['latMin'], 0.001);
        $this->assertEqualsWithDelta(48.86, $bbox['latMax'], 0.001);

        // 2.3522 / 0.01 = 235.22 → floor = 235 → lngMin = 2.35, lngMax = 2.36
        $this->assertEqualsWithDelta(2.35, $bbox['lngMin'], 0.001);
        $this->assertEqualsWithDelta(2.36, $bbox['lngMax'], 0.001);
    }

    public function testGetBoundingBoxConsistentForSameCoordinates(): void
    {
        $bbox1 = $this->service->getBoundingBox(48.8566, 2.3522);
        $bbox2 = $this->service->getBoundingBox(48.8566, 2.3522);

        $this->assertEquals($bbox1, $bbox2);
    }

    public function testGetBoundingBoxDifferentForDifferentCoordinates(): void
    {
        $bbox1 = $this->service->getBoundingBox(48.8566, 2.3522);
        $bbox2 = $this->service->getBoundingBox(45.7640, 4.8357);

        $this->assertNotEquals($bbox1, $bbox2);
    }

    public function testBboxKeyIsStable(): void
    {
        $bbox = $this->service->getBoundingBox(48.8566, 2.3522);
        $key1 = $this->service->bboxKey($bbox);
        $key2 = $this->service->bboxKey($bbox);

        $this->assertEquals($key1, $key2);
    }

    public function testBboxKeyFormat(): void
    {
        $bbox = $this->service->getBoundingBox(48.8566, 2.3522);
        $key = $this->service->bboxKey($bbox);

        // Format : "latMin_lngMin_latMax_lngMax"
        $this->assertMatchesRegularExpression('/^-?\d+\.?\d*_-?\d+\.?\d*_-?\d+\.?\d*_-?\d+\.?\d*$/', $key);
    }
}
