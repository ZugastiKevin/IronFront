import { debugLog, debugError } from '../../../utils/debug.js';

// Set des bboxKeys des zones connues en base (chargé au démarrage).
export const knownBboxKeys = new Set();

// Détails des zones (pour le panneau de debug).
export const knownZones = [];

/**
 * Charge la liste des zones depuis l'API et met à jour knownBboxKeys.
 */
export async function syncKnownZones() {
    try {
        const response = await fetch('/api/zones/status');
        if (!response.ok) throw new Error('API error');

        const data = await response.json();

        knownBboxKeys.clear();
        if (data.bboxKeys) {
            for (const key of data.bboxKeys) {
                knownBboxKeys.add(key);
            }
        }

        // Met à jour knownZones (pour le panneau)
        knownZones.length = 0;
        if (data.zones) {
            knownZones.push(...data.zones);
        }

        debugLog("zones", `${knownBboxKeys.size} zones connues en base`);
        return knownBboxKeys.size;
    } catch (e) {
        debugError("zones", "Erreur sync zones:", e);
        return 0;
    }
}

/**
 * Ajoute une bboxKey locale (après une génération réussie).
 */
export function addKnownBboxKey(bboxKey) {
    knownBboxKeys.add(bboxKey);
}

/**
 * Retourne des stats sur les zones.
 */
export function getZoneStats() {
    return {
        total: knownBboxKeys.size,
        zones: knownZones,
    };
}
