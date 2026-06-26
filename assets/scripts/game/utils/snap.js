import { CHUNK_SIZE } from './chunk.js';

export function snapToChunk(lat, lng) {
    const x = Math.round(lat / CHUNK_SIZE);
    const y = Math.round(lng / CHUNK_SIZE);

    return {
        lat: Number((x * CHUNK_SIZE).toFixed(8)),
        lng: Number((y * CHUNK_SIZE).toFixed(8)),
        chunkId: `${x}_${y}`
    };
}