import { CHUNK_SIZE } from './chunk.js';

export function snapToChunk(lat, lng) {
    const x = Math.floor(Math.round(lat * 100) / 1);
    const y = Math.floor(Math.round(lng * 100) / 1);

    return {
        lat: Number((x * CHUNK_SIZE).toFixed(8)),
        lng: Number((y * CHUNK_SIZE).toFixed(8)),
        chunkId: `${x}_${y}`
    };
}