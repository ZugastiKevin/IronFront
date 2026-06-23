import L from '../../LeafletWrapper.js';
import { getMap } from '../map/map.js';
import { getCurrentPlayerFaction } from '../buildings/base.js';

// =======================
// STATE
// =======================
const baseCircles = new Map(); // baseId -> circle layer
const roadSegments = new Map(); // roadId -> polyline layer

// =======================
// FACTION COLORS
// =======================
const FACTION_COLORS = {
    'default': '#27ae60',  // vert par défaut
    'empire': '#e74c3c',   // rouge
    'cendres': '#3498db',    // bleu
    'nomades': '#f39c12',  // orange
};

function getFactionColor(faction) {
    return FACTION_COLORS[faction?.toLowerCase()] || FACTION_COLORS['default'];
}

// =======================
// BASE CIRCLE
// =======================
export function drawBaseCircle(baseId, lat, lng, faction, isPlayerBase = false) {
    const map = getMap();
    if (!map) return;

    const playerFaction = getCurrentPlayerFaction();
    const color = isPlayerBase
        ? '#27ae60'  // vert pour notre base
        : getFactionColor(faction);

    // Supprimer l'ancien cercle si existe
    if (baseCircles.has(baseId)) {
        map.removeLayer(baseCircles.get(baseId));
    }

    const circle = L.circle([lat, lng], {
        radius: 500,
        color: color,
        weight: 2,
        fillOpacity: 0
    }).addTo(map);

    baseCircles.set(baseId, circle);
    return circle;
}

export function removeBaseCircle(baseId) {
    const map = getMap();
    if (!map) return;

    if (baseCircles.has(baseId)) {
        map.removeLayer(baseCircles.get(baseId));
        baseCircles.delete(baseId);
    }
}

export function clearAllBaseCircles() {
    const map = getMap();
    if (!map) return;

    baseCircles.forEach(circle => map.removeLayer(circle));
    baseCircles.clear();
}

// =======================
// ROAD SEGMENTS
// =======================
export function drawRoadSegment(roadId, coords, faction) {
    const map = getMap();
    if (!map || !coords || coords.length < 2) return;

    const playerFaction = getCurrentPlayerFaction();
    const color = faction === playerFaction
        ? '#27ae60'  // vert pour nos routes
        : getFactionColor(faction);

    // Supprimer l'ancien segment si existe
    if (roadSegments.has(roadId)) {
        map.removeLayer(roadSegments.get(roadId));
    }

    const polyline = L.polyline(coords, {
        color: color,
        weight: 3,
        opacity: 0.6,
        dashArray: '8,8'
    }).addTo(map);

    roadSegments.set(roadId, polyline);
    return polyline;
}

export function removeRoadSegment(roadId) {
    const map = getMap();
    if (!map) return;

    if (roadSegments.has(roadId)) {
        map.removeLayer(roadSegments.get(roadId));
        roadSegments.delete(roadId);
    }
}

export function clearAllRoadSegments() {
    const map = getMap();
    if (!map) return;

    roadSegments.forEach(polyline => map.removeLayer(polyline));
    roadSegments.clear();
}

// =======================
// UPDATE FUNCTIONS
// =======================
export function updateBaseCircles(bases) {
    const map = getMap();
    if (!map) return;

    const playerFaction = getCurrentPlayerFaction();

    bases.forEach(base => {
        const isPlayerBase = base.faction === playerFaction;
        drawBaseCircle(base.id, base.lat, base.lng, base.faction, isPlayerBase);
    });
}

export function updateRoadSegments(roads) {
    const map = getMap();
    if (!map) return;

    const playerFaction = getCurrentPlayerFaction();

    roads.forEach(road => {
        const isPlayerRoad = road.faction === playerFaction;
        drawRoadSegment(road.id, road.coords, road.faction);
    });
}

// =======================
// UTILITY
// =======================
export function setRoadSegmentColor(roadId, color) {
    const map = getMap();
    if (!map) return;

    if (roadSegments.has(roadId)) {
        roadSegments.get(roadId).setStyle({ color });
    }
}