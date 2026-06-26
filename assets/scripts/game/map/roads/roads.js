import { getMap } from '../map.js';
import { CHUNK_SIZE } from '../../utils/chunk.js';
import { setChunkColor } from '../../Layers/gridLayer.js';
import { invalidateChunk } from './invalidateChunk.js';
import { debugLog, debugWarn, debugError } from '../../../utils/debug.js';
import { roadsState } from './roadsState.js';
import { renderDepositsFromData } from '../deposits/deposits.js';
import { getCachedChunk, setCachedChunk, invalidateChunkCache } from './chunkCache.js';

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

    try {
        const [roadsResponse, buildingsResponse, depositsResponse] = await Promise.all([
            fetch('/api/chunks/bulk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chunks: finalChunksToLoad })
            }),
            fetch('/api/buildings/visible', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chunks: finalChunksToLoad })
            }),
            fetch('/api/deposits/bulk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chunks: finalChunksToLoad })
            })
        ]);

        if (!roadsResponse.ok || !buildingsResponse.ok || !depositsResponse.ok) {
            throw new Error("API error");
        }

        const roadsData     = await roadsResponse.json();
        const buildingsData = await buildingsResponse.json();
        const depositsData  = await depositsResponse.json();

        for (const chunkId of finalChunksToLoad) {
            const chunkData = {
                roads:     roadsData[chunkId]?.roads     || [],
                buildings: buildingsData[chunkId]?.buildings || [],
                deposits:  depositsData[chunkId] || []
            };

            const hasRoads = chunkData.roads.length > 0;

            roadsState.chunks[chunkId] = {
                status: hasRoads ? 'loaded' : 'empty',
                ...chunkData,
                hasRoads
            };

            roadsState.loadedChunks.add(chunkId);
            setCachedChunk(chunkId, { ...chunkData, hasRoads });

            setChunkColor(chunkId, hasRoads ? 'blue' : '#444');
            renderDepositsFromData(chunkData.deposits, map);

            debugLog("roads", `Chunk ${chunkId} chargé (${chunkData.roads.length} routes, ${chunkData.deposits.length} dépôts)`);
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
// FETCH SINGLE CHUNK
// ==========================
async function fetchSingleChunk(chunkId) {
    try {
        roadsState.chunks[chunkId] = { status: 'loading', roads: [], buildings: [], deposits: [] };
        setChunkColor(chunkId, 'orange');

        const [roadsRes, buildingsRes, depositsRes] = await Promise.all([
            fetch('/api/chunks/bulk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chunks: [chunkId] })
            }),
            fetch('/api/buildings/visible', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chunks: [chunkId] })
            }),
            fetch('/api/deposits/bulk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chunks: [chunkId] })
            })
        ]);

        if (!roadsRes.ok || !buildingsRes.ok || !depositsRes.ok) throw new Error("API error");

        const roadsData     = await roadsRes.json();
        const buildingsData = await buildingsRes.json();
        const depositsData  = await depositsRes.json();

        const chunkData = {
            roads:     roadsData[chunkId]?.roads     || [],
            buildings: buildingsData[chunkId]?.buildings || [],
            deposits:  depositsData[chunkId] || []
        };

        const hasRoads = chunkData.roads.length > 0;

        roadsState.chunks[chunkId] = { status: hasRoads ? 'loaded' : 'empty', ...chunkData, hasRoads };
        setCachedChunk(chunkId, { ...chunkData, hasRoads });

        setChunkColor(chunkId, hasRoads ? 'blue' : '#444');
        renderDepositsFromData(chunkData.deposits, getMap());

        debugLog("roads", "[CHUNK REFRESH]", chunkId, chunkData.roads.length);

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
            chunks.push(`${x}_${y}`);
        }
    }
    return chunks;
}