import { CHUNK_SIZE } from './chunk.js';

/**
 * Retourne la bounding box (grille CHUNK_SIZE × CHUNK_SIZE) pour un point GPS.
 *
 * Utilise Math.floor(lat / CHUNK_SIZE) — la même formule que le backend
 * (CoordinateService::getBoundingBox), pour garantir la cohérence front/back.
 *
 * @returns {{ latMin: number, lngMin: number, latMax: number, lngMax: number, bboxKey: string }}
 */
export function snapToChunk(lat, lng) {
    const x = Math.floor(lat / CHUNK_SIZE);
    const y = Math.floor(lng / CHUNK_SIZE);

    const latMin = Number((x * CHUNK_SIZE).toFixed(8));
    const lngMin = Number((y * CHUNK_SIZE).toFixed(8));
    const latMax = Number(((x + 1) * CHUNK_SIZE).toFixed(8));
    const lngMax = Number(((y + 1) * CHUNK_SIZE).toFixed(8));

    return {
        latMin,
        lngMin,
        latMax,
        lngMax,
        bboxKey: `${latMin}_${lngMin}`,
    };
}
