import { TYPE_MAP } from './typeMap.js';

export const DEBUG = {
    enabled: window.APP_DEBUG ?? false,

    mercure: true,
    inventory: true,
    delivery: true,
    buildings: true,

    chunks: true,
    network: true,
    cache: true,
};

function canLog(type) {
    if (!DEBUG.enabled) {
        return false;
    }

    if (!type) {
        return true;
    }

    const key = TYPE_MAP?.[type] || type;

    return DEBUG[key] !== false;
}

export function debugLog(type, ...args) {
    if (!canLog(type)) {
        return;
    }

    console.log(
        `[${TYPE_MAP?.[type] || type}]`,
        ...args
    );
}

export function debugWarn(type, ...args) {
    if (!canLog(type)) {
        return;
    }

    console.warn(
        `[${TYPE_MAP?.[type] || type}]`,
        ...args
    );
}

export function debugError(type, ...args) {
    if (!canLog(type)) {
        return;
    }

    console.error(
        `[${TYPE_MAP?.[type] || type}]`,
        ...args
    );
}