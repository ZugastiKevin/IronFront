import L from '../../../LeafletWrapper.js';
import { getMap } from '../map.js';
import { debugLog, debugWarn } from '../../../utils/debug.js';

// Couche Leaflet contenant les routes possédées (polylignes bleues)
// Visible uniquement par les admins
export const roadsLayer = L.layerGroup();

// Set des IDs déjà dessinés (pour éviter les doublons)
const drawnRoadIds = new Set();

/**
 * Dessine sur la carte toutes les routes qui ne le sont pas encore.
 * @param {Array} roads - tableau de { id, points, type }
 */
export function drawOwnedRoads(roads) {
    if (!Array.isArray(roads) || roads.length === 0) return;

    const map = getMap();
    if (!map) return;

    let added = 0;

    for (const road of roads) {
        if (!road || drawnRoadIds.has(road.id)) continue;
        if (!Array.isArray(road.points) || road.points.length < 2) continue;

        // Convertit les points [lat, lng] en tableau pour Leaflet
        const latlngs = road.points.map(pt => [pt[0], pt[1]]);

        // Couleur selon le type de route
        const color = getRoadColor(road.type);

        const polyline = L.polyline(latlngs, {
            color,
            weight: 3,
            opacity: 0.8,
        });

        polyline.addTo(roadsLayer);
        drawnRoadIds.add(road.id);
        added++;
    }

    if (added > 0) {
        debugLog("roadsLayer", `${added} routes dessinées (${drawnRoadIds.size} total)`);
    }
}

/**
 * Efface toutes les routes dessinées (pour un rechargement complet).
 */
export function clearOwnedRoads() {
    roadsLayer.clearLayers();
    drawnRoadIds.clear();
    debugLog("roadsLayer", "Routes effacées");
}

/**
 * Retourne la couleur selon le type de route OSM.
 */
function getRoadColor(type) {
    const colors = {
        motorway: '#e74c3c',
        trunk: '#e67e22',
        primary: '#f1c40f',
        secondary: '#2ecc71',
        tertiary: '#1abc9c',
        residential: '#3498db',
        service: '#9b59b6',
        unclassified: '#95a5a6',
        ferry: '#00CED1',        // cyan foncé pour les lignes maritimes
    };
    return colors[type] || '#2980b9'; // bleu par défaut
}

/**
 * Compte le nombre de routes possédées.
 */
export function getOwnedRoadsCount() {
    return drawnRoadIds.size;
}
