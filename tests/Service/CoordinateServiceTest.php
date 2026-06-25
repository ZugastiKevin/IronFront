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

    public function testGetChunkIdFormat(): void
    {
        $chunkId = $this->service->getChunkId(48.8566, 2.3522);

        // Le format devrait être "4885_235" (floor lat*100, floor lng*100)
        $this->assertMatchesRegularExpression('/^-?\d+_-?\d+$/', $chunkId);
    }

    public function testGetChunkIdConsistentForSameCoordinates(): void
    {
        $chunkId1 = $this->service->getChunkId(48.8566, 2.3522);
        $chunkId2 = $this->service->getChunkId(48.8566, 2.3522);

        $this->assertEquals($chunkId1, $chunkId2);
    }

    public function testGetChunkIdDifferentForDifferentCoordinates(): void
    {
        $chunkId1 = $this->service->getChunkId(48.8566, 2.3522);
        $chunkId2 = $this->service->getChunkId(45.7640, 4.8357);

        $this->assertNotEquals($chunkId1, $chunkId2);
    }
}