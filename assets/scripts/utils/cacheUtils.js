const CACHE_VERSION = 'v1';

/**
 * @deprecated Utiliser directement le bboxKey dans chunkCache.js
 */
export function getCacheKey(chunkId) {
    return `${CACHE_VERSION}_chunk_${chunkId}`;
}
