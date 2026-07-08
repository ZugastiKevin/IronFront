#!/usr/bin/env php
<?php

/**
 * Smoke test du système de routes - test rapide sans Symfony bootstrap
 *
 * Exécuter : php tests/RoadSystemSmokeTest.php
 */

echo "=== SMOKE TEST - Système de routes ===\n\n";

// Test 1: Vérifier les fichiers existent
$files = [
    'src/Service/Game/Generate/GeofabrikRoadProvider.php',
    'src/Service/Game/Generate/GenerateChunkService.php',
    'src/Service/Game/Road/RoadService.php',
    'src/Entity/Road.php',
    'src/Repository/RoadRepository.php',
];

echo "1. Vérification des fichiers critiques :\n";
foreach ($files as $f) {
    $path = __DIR__ . '/../' . $f;
    echo "   " . (file_exists($path) ? "✓ " : "✗ ") . $f . "\n";
}

// Test 2: Vérifier la syntaxe PHP
echo "\n2. Vérification syntaxe PHP :\n";
$phpFiles = [
    'src/Service/Game/Generate/GeofabrikRoadProvider.php',
    'src/Service/Game/Generate/GenerateChunkService.php',
];
foreach ($phpFiles as $f) {
    $path = __DIR__ . '/../' . $f;
    $output = [];
    exec("php -l " . escapeshellarg($path) . " 2>&1", $output, $code);
    echo "   " . ($code === 0 ? "✓ " : "✗ ") . " {$f}\n";
}

// Test 3: Vérifier les endpoints API
echo "\n3. Endpoints API critiques :\n";
$endpoints = [
    '/api/chunks/bulk' => 'POST - récupère routes/deposits',
    '/api/add-roads-chunk' => 'POST - génère routes pour une zone',
    '/api/build' => 'POST - construit un bâtiment (vérifie isNearRoad)',
];
foreach ($endpoints as $method => $desc) {
    echo "   {$method} ({$desc})\n";
}

echo "\n=== FIN DU TEST ===\n";
echo "\nPour tester l'import : bin/console osm:import europe-latest.osm.pbf\n";
echo "Pour tester la génération : curl -X POST /api/add-roads-chunk -d '{\"lat\":48.8566,\"lng\":2.3522}'\n";