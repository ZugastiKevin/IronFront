import { getMap } from '../map/map.js';
import { refreshChunk } from '../map/roads/roads.js';
import { debugLog, debugError, debugWarn } from '../../utils/debug.js';
import { snapToChunk } from './snap.js';

export const CHUNK_SIZE = 0.01;
export const CHUNK_RADIUS = 1;
export const DEFAULT_ROAD_RADIUS = 200;

let isPending = false;

/**
 * Ajoute des routes par clic sur la carte.
 * Si des routes existent déjà dans la zone, ne fait rien.
 * Sinon, récupère les routes depuis Overpass et les crée.
 */
export async function addRoadsChunk(lat, lng, radius = DEFAULT_ROAD_RADIUS) {
    if (isPending) {
        debugWarn("chunks", "Generation already in progress, ignoring click");
        return null;
    }

    const map = getMap();
    if (map) map.getContainer().style.cursor = 'wait';

    try {
        const response = await fetch('/api/add-roads-chunk', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lat, lng, radius }),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        // Feedback visuel
        showGenerationFeedback(data);

        // Refresh tous les chunks affectés
        const chunkIds = computeAffectedChunkIds(lat, lng, data);
        await Promise.all(chunkIds.map(id => refreshChunk(id)));

        debugLog("chunks", `Roads: ${data.roads_created} created, already_populated=${data.already_populated}`);
        return data;
    } catch (err) {
        debugError("chunks", "Failed to add roads chunk:", err);
        showToast("Erreur: " + err.message, "error");
        return null;
    } finally {
        isPending = false;
        if (map) map.getContainer().style.cursor = '';
    }
}

/**
 * Calcule la liste des chunkIds à rafraîchir après une génération.
 */
function computeAffectedChunkIds(lat, lng, data) {
    const ids = new Set();

    // Chunk du clic
    const clickSnap = snapToChunk(lat, lng);
    ids.add(clickSnap.bboxKey);

    // Chunks des routes retournées
    if (data.roads && Array.isArray(data.roads)) {
        for (const road of data.roads) {
            if (!Array.isArray(road.points)) continue;
            for (const [ptLat, ptLng] of road.points) {
                const snap = snapToChunk(ptLat, ptLng);
                ids.add(snap.bboxKey);
            }
        }
    }

    return [...ids];
}

/**
 * Affiche un feedback visuel selon le résultat de la génération.
 */
function showGenerationFeedback(data) {
    if (data.roads_created > 0) {
        showToast(`${data.roads_created} route(s) ajoutée(s)`, "success");
    } else {
        showToast("Toutes les routes sont déjà présentes", "info");
    }
}

/**
 * Affiche un toast d'information.
 */
export function showToast(message, type = "info") {
    const event = new CustomEvent('toast', { detail: { message, type } });
    document.dispatchEvent(event);
    debugLog("toast", `[${type}] ${message}`);
}

document.getElementById('requestApiRoadsAndChunksBtn').addEventListener('click', () => {

    const map = getMap();

    map.getContainer().style.cursor = 'crosshair';
    showToast("Cliquez sur la carte pour ajouter les routes", "info");

    map.once('click', async (e) => {

        const { lat, lng } = e.latlng;

        debugLog("network", "📡 adding roads chunk at:", lat, lng);

        await addRoadsChunk(lat, lng, DEFAULT_ROAD_RADIUS);

        map.getContainer().style.cursor = '';
    });
});
