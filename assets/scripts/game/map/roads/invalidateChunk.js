import { roadsState } from './roadsState.js';
import { debugLog } from '../../../utils/debug.js';
import { invalidateChunkCache } from './chunkCache.js';

export function invalidateChunk(id) {
    debugLog("cache", "🧹 invalidate chunk:", id);

    delete roadsState.chunks[id];
    invalidateChunkCache(id);
}