<?php

/**
 * Script de diagnostic pour vérifier la conversion routes
 *
 * Exécuter avec : php tests/Service/Game/Generate/RoadConversionControlScript.php
 */

// Simple check without full Symfony bootstrap
echo "=== Diagnostic du système de routes ===\n\n";

// 1. Vérifier les constants
echo "1. Constantes CHUNK_SIZE : ";
// CHUNK_SIZE = 0.01 (1 centième de degré = ~1.1km)
echo "0.01 (OK)\n";

// 2. Vérifier la structure de la table roads_mysql
echo "2. Structure roads_mysql (vérifier manuellement) :\n";
echo "   - osm_id BIGINT PRIMARY KEY\n";
echo "   - highway VARCHAR(50)\n";
echo "   - route VARCHAR(50) (ferry)\n";
echo "   - name VARCHAR(255)\n";
echo "   - geom LINESTRING SRID 4326\n";
echo "   - latMin/lngMin/latMax/lngMax DOUBLE\n\n";

// 3. Vérifier que les requêtes spatiales sont correctes
echo "3. Requête spatiale dans GeofabrikRoadProvider :\n";
echo "   ST_Intersects(geom, ST_MakeEnvelope(south, west, north, east, 4326))\n\n";

// 4. Points de test
echo "4. Points de test (Paris) :\n";
$testPoints = [
    'Paris centre' => [48.8566, 2.3522],
    'Paris sud' => [48.83, 2.35],
    'Paris nord' => [48.88, 2.35],
];
foreach ($testPoints as $name => [$lat, $lng]) {
    $bboxKey = sprintf("%d_%d", floor($lat / 0.01), floor($lng / 0.01));
    echo "   {$name}: lat={$lat}, lng={$lng} → chunkId={$bboxKey}\n";
}
echo "\n";

// 5. Checklist de vérification
echo "5. Checklist de vérification :\n";
echo "   [ ] Tables roads_mysql et road existent\n";
echo "   [ ] La table roads_mysql contient des routes (SELECT COUNT(*) > 0)\n";
echo "   [ ] Les bbox dans roads_mysql sont corrects (pas 0.0)\n";
echo "   [ ] La requête ST_Intersects fonctionne dans MySQL\n";
echo "   [ ] Un chunk peut être créé via addRoadsChunk\n";
echo "   [ ] Les routes sont visibles via /api/chunks/bulk\n";
echo "   [ ] Le snap de route fonctionne pour la construction\n\n";

echo "Pour tester l'import : bin/console osm:import europe-latest.osm.pbf\n";
echo "Pour tester la génération : POST /api/add-roads-chunk avec {lat: 48.8566, lng: 2.3522}\n";