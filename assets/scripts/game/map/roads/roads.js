import { getMap } from '../map.js';
import { CHUNK_SIZE } from '../../utils/chunk.js';
import { setChunkColor } from '../../Layers/gridLayer.js';
import { invalidateChunk } from './invalidateChunk.js';
import { debugLog, debugWarn, debugError } from '../../../utils/debug.js';
import { roadsState } from './roadsState.js';
import { renderDepositsFromData } from '../deposits/deposits.js';
import { getCachedChunk, setCachedChunk, invalidateChunkCache } from './chunkCache.js';
import { drawOwnedRoads } from './roadsLayer.js';

// ==========================
// SAFE JSON PARSE
// ==========================
// Parse le JSON d'une réponse en renvoyant TOUJOURS du JSON valide.
// Si le corps n'est du JSON (page d'erreur HTML, 500, 404, vide),
// le texte brut est loggé pour diagnostic et un objet par défaut
// est retourné pour éviter le crash "JSON.parse: unexpected character".
async function safeJson(response, defaultData) {
    const text = await response.text();
    try {
        return JSON.parse(text);
    } catch (e) {
        debugError("roads", `[SAFE_JSON] Réponse non-JSON (status ${response.status} ${response.url}):`,
            text.slice(0, 500));
        return defaultData;
    }
}

// ==========================
// MAIN LOAD VISIBLE
// ==========================
export async function loadVisibleRoadChunks() {
    const map = getMap();
    if (!map || map.getZoom() < 14) return;

    const bounds        = map.getBounds();
    const visibleChunks = getVisibleChunks(bounds);
    const chunksToLoad  = visibleChunks.filter(chunkId => !roadsState.loadedChunks.has(chunkId));

    const finalChunksToLoad = [];

    for (const chunkId of chunksToLoad) {
        const data = getCachedChunk(chunkId);
        if (data) {
            roadsState.chunks[chunkId] = {
                status:   data.hasRoads ? 'loaded' : 'empty',
                roads:    data.roads,
                buildings: data.buildings,
                deposits: data.deposits,
                hasRoads: data.hasRoads
            };
            roadsState.loadedChunks.add(chunkId);
            setChunkColor(chunkId, data.hasRoads ? 'blue' : '#444');
            renderDepositsFromData(data.deposits || [], map);
            continue;
        }
        finalChunksToLoad.push(chunkId);
    }

    for (const chunkId of finalChunksToLoad) {
        roadsState.chunks[chunkId] = { status: 'loading', roads: [], buildings: [], deposits: [] };
        setChunkColor(chunkId, 'orange');
    }

    if (finalChunksToLoad.length === 0) {
        refreshChunkColors(visibleChunks);
        return;
    }

    // La bbox englobante des chunks visibles
    const visibleBounds = {
        south: bounds.getSouth(),
        west:  bounds.getWest(),
        north: bounds.getNorth(),
        east:  bounds.getEast(),
    };

    try {
        const [roadsResponse, buildingsResponse, depositsResponse] = await Promise.all([
            fetch('/api/chunks/bulk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(visibleBounds),
            }),
            fetch('/api/buildings/visible', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(visibleBounds),
            }),
            fetch('/api/deposits/bulk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(visibleBounds),
            }),
        ]);

        // On parse en tolérant une réponse non-JSON (page d'erreur HTML 500/404…)
        // pour éviter "JSON.parse: unexpected character" et logger le corps brut.
        const roadsData     = await safeJson(roadsResponse, { roads: [] });
        const buildingsData = await safeJson(buildingsResponse, { buildings: [] });
        const depositsData  = await safeJson(depositsResponse, { deposits: [] });

        // Nouveau format : tableaux plats dans $.roads, $.buildings, $.deposits
        const allRoads     = roadsData.roads || [];
        const allBuildings = buildingsData.buildings || [];
        const allDeposits  = depositsData.deposits || [];

        // Distribue les routes dans les cellules visibles (une route peut toucher plusieurs cellules)
        for (const chunkId of finalChunksToLoad) {
            const [cxStr, cyStr] = chunkId.split('_');
            // Le chunkId est "latMin_lngMin" où latMin/lngMin sont des floats (ex: "45.16_0.76").
            // Utiliser parseFloat / CHUNK_SIZE pour obtenir l'entier de grille (ex: 4516, 76).
            const cx = Math.round(parseFloat(cxStr) / CHUNK_SIZE);
            const cy = Math.round(parseFloat(cyStr) / CHUNK_SIZE);
            if (Number.isNaN(cx) || Number.isNaN(cy)) continue;

            // Normaliser la bbox avec toFixed(8) pour éviter les erreurs de précision floats
            const cellSouth = Number((cx * CHUNK_SIZE).toFixed(8));
            const cellWest  = Number((cy * CHUNK_SIZE).toFixed(8));
            const cellNorth = Number((cellSouth + CHUNK_SIZE).toFixed(8));
            const cellEast  = Number((cellWest + CHUNK_SIZE).toFixed(8));

            const cellRoads = allRoads.filter(road =>
                Array.isArray(road.points) && road.points.some(pt =>
                    pt[0] >= cellSouth && pt[0] <= cellNorth &&
                    pt[1] >= cellWest  && pt[1] <= cellEast
                )
            );

            const isEmpty = allRoads.length === 0 && allBuildings.length === 0 && allDeposits.length === 0;
            const status = isEmpty ? 'empty' : 'loaded';

            roadsState.chunks[chunkId] = {
                status,
                roads:     cellRoads,
                buildings: allBuildings,
                deposits:  allDeposits,
                hasRoads:  cellRoads.length > 0,
            };

            roadsState.loadedChunks.add(chunkId);
            setCachedChunk(chunkId, { roads: cellRoads, buildings: allBuildings, deposits: allDeposits, hasRoads: cellRoads.length > 0 });

            setChunkColor(chunkId, isEmpty ? '#444' : 'blue');
            renderDepositsFromData(allDeposits, map);

            // Dessine les routes possédées sur la carte (seules les routes de CE chunk)
            drawOwnedRoads(cellRoads);

            debugLog("roads", `[LOAD] ${chunkId}: ${status} (${cellRoads.length} routes ici, ${allRoads.length} total)`);
        }

    } catch (error) {
        debugError("roads", "Erreur chargement chunks bulk:", error);
        for (const chunkId of finalChunksToLoad) {
            roadsState.chunks[chunkId] = { status: 'error', roads: [], buildings: [], deposits: [] };
            setChunkColor(chunkId, 'red');
        }
    }

    refreshChunkColors(visibleChunks);
}

// ==========================
// REFRESH CHUNK
// ==========================
export async function refreshChunk(chunkId) {
    invalidateChunk(chunkId);
    invalidateChunkCache(chunkId);

    roadsState.loadedChunks.delete(chunkId);

    await fetchSingleChunk(chunkId);
}

// ==========================
// REFRESH MULTIPLE CHUNKS
// ==========================
export async function refreshChunks(chunkIds) {
    if (!Array.isArray(chunkIds) || chunkIds.length === 0) return;
    await Promise.all(chunkIds.map(id => refreshChunk(id)));
}

// ==========================
// FETCH SINGLE CHUNK
// ==========================
async function fetchSingleChunk(chunkId) {
    try {
        roadsState.chunks[chunkId] = { status: 'loading', roads: [], buildings: [], deposits: [] };
        setChunkColor(chunkId, 'orange');

        // Déduire une bbox du chunkId "latMin_lngMin" (ex: "45.16_0.76")
        // Utiliser parseFloat / CHUNK_SIZE pour obtenir l'entier de grille (ex: 4516, 76).
        const [cxStr, cyStr] = chunkId.split('_');
        const cx = Math.round(parseFloat(cxStr) / CHUNK_SIZE);
        const cy = Math.round(parseFloat(cyStr) / CHUNK_SIZE);
        const cellSouth = Number((cx * CHUNK_SIZE).toFixed(8));
        const cellWest  = Number((cy * CHUNK_SIZE).toFixed(8));
        const cellNorth = Number((cellSouth + CHUNK_SIZE).toFixed(8));
        const cellEast  = Number((cellWest + CHUNK_SIZE).toFixed(8));

        const [roadsRes, buildingsRes, depositsRes] = await Promise.all([
            fetch('/api/chunks/bulk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ south: cellSouth, west: cellWest, north: cellNorth, east: cellEast }),
            }),
            fetch('/api/buildings/visible', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ south: cellSouth, west: cellWest, north: cellNorth, east: cellEast }),
            }),
            fetch('/api/deposits/bulk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ south: cellSouth, west: cellWest, north: cellNorth, east: cellEast }),
            }),
        ]);

        const roadsData     = await safeJson(roadsRes, { roads: [] });
        const buildingsData = await safeJson(buildingsRes, { buildings: [] });
        const depositsData  = await safeJson(depositsRes, { deposits: [] });

        const allRoads     = roadsData.roads || [];
        const allBuildings = buildingsData.buildings || [];
        const allDeposits  = depositsData.deposits || [];

        // Filtre les routes qui intersectent CE chunk
        const cellRoads = allRoads.filter(road =>
            Array.isArray(road.points) && road.points.some(pt =>
                pt[0] >= cellSouth && pt[0] <= cellNorth &&
                pt[1] >= cellWest  && pt[1] <= cellEast
            )
        );

        // Un chunk est "loaded" (bleu) dès que la zone a été fetchée avec succès,
        // même si les routes sont stockées dans des chunks voisins.
        // Le statut "empty" (gris) n'apparaît que si l'API confirme qu'il n'y a
        // strictement aucune route dans la bbox du chunk.
        const isEmpty = allRoads.length === 0 && allBuildings.length === 0 && allDeposits.length === 0;
        const status = isEmpty ? 'empty' : 'loaded';

        roadsState.chunks[chunkId] = { status, roads: cellRoads, buildings: allBuildings, deposits: allDeposits, hasRoads: cellRoads.length > 0 };
        setCachedChunk(chunkId, { roads: cellRoads, buildings: allBuildings, deposits: allDeposits, hasRoads: cellRoads.length > 0 });

        setChunkColor(chunkId, isEmpty ? '#444' : 'blue');
        renderDepositsFromData(allDeposits, getMap());

        debugLog("roads", `[CHUNK REFRESH] ${chunkId}: ${status} (${cellRoads.length} routes ici, ${allRoads.length} total dans la bbox)`);

    } catch (e) {
        roadsState.chunks[chunkId] = { status: 'error', roads: [], buildings: [], deposits: [] };
        setChunkColor(chunkId, 'red');
        debugError("roads", "[CHUNK REFRESH ERROR]", chunkId, e);
    }
}

// ==========================
// REFRESH CHUNK COLORS
// ==========================
function refreshChunkColors(visibleChunks) {
    for (const chunkId of visibleChunks) {
        const chunk = roadsState.chunks[chunkId];
        if (!chunk) { setChunkColor(chunkId, 'orange'); continue; }

        const colors = { loaded: 'blue', empty: '#444', loading: 'orange', error: 'red' };
        setChunkColor(chunkId, colors[chunk.status] ?? 'yellow');
    }
}

// ==========================
// VISIBLE CHUNKS
// ==========================
function getVisibleChunks(bounds) {
    const minX = Math.floor(bounds.getSouth() / CHUNK_SIZE);
    const maxX = Math.floor(bounds.getNorth() / CHUNK_SIZE);
    const minY = Math.floor(bounds.getWest()  / CHUNK_SIZE);
    const maxY = Math.floor(bounds.getEast()  / CHUNK_SIZE);

    const chunks = [];
    for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
            // Format cohérent avec snapToChunk : "latMin_lngMin" (floats, ex: "45.16_0.76")
            const latMin = Number((x * CHUNK_SIZE).toFixed(8));
            const lngMin = Number((y * CHUNK_SIZE).toFixed(8));
            chunks.push(`${latMin}_${lngMin}`);
        }
    }
    return chunks;
}
