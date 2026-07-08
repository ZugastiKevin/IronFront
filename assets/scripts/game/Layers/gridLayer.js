import L from '../../LeafletWrapper.js';
import { debugLog } from '../../utils/debug.js';
import { CHUNK_SIZE } from '../utils/chunk.js';
import { getMap, isGridLayerActive } from '../map/map.js';
import { roadsState } from '../map/roads/roadsState.js';
import { knownBboxKeys } from '../map/roads/zoneSync.js';

export const gridLayer = L.layerGroup();

const visibleChunks = new Map();

export function initGridLayer() {

    const map = getMap();
    if (!map) return;

    if (!isGridLayerActive()) return;

    const zoom = map.getZoom();
    if (zoom < 14) return;

    const bounds = map.getBounds();

    const minLat = Math.floor(bounds.getSouth() / CHUNK_SIZE);
    const maxLat = Math.ceil(bounds.getNorth() / CHUNK_SIZE);
    const minLng = Math.floor(bounds.getWest() / CHUNK_SIZE);
    const maxLng = Math.ceil(bounds.getEast() / CHUNK_SIZE);

    const newVisible = new Set();

    for (let i = minLat; i < maxLat; i++) {
        for (let j = minLng; j < maxLng; j++) {

            const id = `${i}_${j}`;
            newVisible.add(id);

            if (visibleChunks.has(id)) continue;

            const lat = i * CHUNK_SIZE;
            const lng = j * CHUNK_SIZE;

            const rect = L.rectangle([
                [lat, lng],
                [lat + CHUNK_SIZE, lng + CHUNK_SIZE]
            ], {
                color: "orange",
                weight: 1,
                fillOpacity: 0.15
            });

            rect.on('mouseover', () => rect.setStyle({ fillOpacity: 0.3 }));
            rect.on('mouseout', () => rect.setStyle({ fillOpacity: 0.15 }));

            gridLayer.addLayer(rect);

            visibleChunks.set(id, rect);
        }
    }

    // 🧹 remove ceux hors écran
    for (const [id, rect] of visibleChunks.entries()) {
        if (!newVisible.has(id)) {
            gridLayer.removeLayer(rect);
            visibleChunks.delete(id);
        }
    }

    debugLog("chunks", "Chunks visibles:", visibleChunks.size);
}

// ==========================
// CHUNK COLOR
// ==========================
export function setChunkColor(id, color) {
    if (!isGridLayerActive()) return;

    const rect = visibleChunks.get(id);
    if (!rect) return;

    rect.setStyle({
        color,
        fillOpacity: 0.2
    });
}

/**
 * Re-colore toutes les cellules visibles selon leur état.
 *
 * Rouge   = zone PAS EN BASE (jamais fetchée)
 * Orange  = en base mais pas encore chargée dans ce viewport
 * Bleu    = chargée avec au moins une route
 * Gris    = chargée mais vide
 */
export function refreshGridColors() {
    if (!isGridLayerActive()) return;

    for (const [bboxKey, rect] of visibleChunks.entries()) {
        let color = 'orange';
        let fillOpacity = 0.15;
        let weight = 1;
        let dashArray = undefined;

        if (knownBboxKeys.has(bboxKey)) {
            // Zone en base : regarde si elle est chargée dans ce viewport
            const chunk = roadsState.chunks[bboxKey];
            if (chunk) {
                color = chunk.hasRoads ? 'blue' : '#444';
                fillOpacity = 0.2;
            } else {
                color = '#8f8'; // en base mais pas chargé : vert pâle
                fillOpacity = 0.1;
            }
        } else {
            // Zone PAS en base : rouge bien visible avec pointillés
            color = '#e44';
            weight = 2;
            fillOpacity = 0.25;
            dashArray = '4, 3';
        }

        rect.setStyle({ color, fillOpacity, weight, dashArray });
    }
}