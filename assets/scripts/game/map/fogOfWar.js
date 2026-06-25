import L from '../../LeafletWrapper.js';

let fogLayer = null;
let visionSources = [];
let fogMode = 'disabled';
let mapInstance = null;

/**
 * Initialise la couche de brouillard de guerre
 * @param {string} mode - Mode de brouillard ('enabled', 'disabled', 'debug')
 * @param {Array} sources - Sources de vision [{lat, lng, radius, isMe}]
 * @param {Object} map - Instance Leaflet
 */
export function initFogOfWar(mode, sources, map) {
    fogMode = mode || 'disabled';
    visionSources = sources || [];
    mapInstance = map;

    if (fogMode === 'disabled') {
        return;
    }

    if (!mapInstance) return;

    if (fogLayer) {
        mapInstance.removeLayer(fogLayer);
    }

    // Rectangle couvrant toute la carte
    fogLayer = L.layerGroup().addTo(mapInstance);

    // Ajouter la couche sombre
    const fogRect = L.rectangle(
        [[-90, -180], [90, 180]],
        {
            color: '#000',
            weight: 0,
            fillColor: '#000',
            fillOpacity: 0.7
        }
    ).addTo(fogLayer);

    // Créer les trous de visibilité (cercles transparency)
    visionSources.forEach(source => {
        const circle = L.circle(
            [source.lat, source.lng],
            {
                radius: source.radius * 111000, // Convertir en mètres
                color: 'transparent',
                fillColor: '#fff',
                fillOpacity: 1,
                weight: 0
            }
        ).addTo(fogLayer);
    });
}

/**
 * Met à jour les sources de vision
 * @param {Array} sources
 * @param {Object} map - Instance Leaflet
 */
export function updateVisionSources(sources, map) {
    visionSources = sources || [];
    mapInstance = map;

    if (fogLayer && fogMode !== 'disabled') {
        mapInstance.removeLayer(fogLayer);
        initFogOfWar(fogMode, visionSources, mapInstance);
    }
}

/**
 * Vérifie si un point est visible
 * @param {number} lat
 * @param {number} lng
 * @returns {boolean}
 */
export function isPointVisible(lat, lng) {
    if (fogMode === 'disabled' || fogMode === 'debug') {
        return true;
    }

    return visionSources.some(source => {
        const dx = lat - source.lat;
        const dy = lng - source.lng;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance <= source.radius;
    });
}