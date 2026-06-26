const chunkCache = new Map();
const CACHE_TTL = 3600000;

export function getCachedChunk(id) {
    const cached = chunkCache.get(id);

    if (!cached) {
        return null;
    }

    if (Date.now() - cached.ts > CACHE_TTL) {
        chunkCache.delete(id);
        return null;
    }

    return cached;
}

export function setCachedChunk(id, data) {
    chunkCache.set(id, {
        ...data,
        ts: Date.now()
    });
}

export function invalidateChunkCache(id) {
    chunkCache.delete(id);
}

export function clearChunkCache() {
    chunkCache.clear();
}