import L from '../../LeafletWrapper.js';

import { gridLayer, initGridLayer } from '../Layers/gridLayer.js';
import { loadVisibleRoadChunks } from './roads/roads.js';
import { roadsState } from './roads/roadsState.js';

import { loadBaseFromServer, loadOtherBase, setCurrentPlayerFaction } from '../buildings/base.js';
import { loadBuildingsFromData, setCurrentPlayerId } from '../buildings/building.js';

import { initDepositLayers, depositLayers } from './deposits/deposits.js';
import { initFogOfWar } from './fogOfWar.js';
import { initZoneDebugPanel } from './roads/zoneDebugPanel.js';
import { syncKnownZones } from './roads/zoneSync.js';
import { roadsLayer } from './roads/roadsLayer.js';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { debugLog, debugWarn, debugError } from '../../utils/debug.js';

L.Marker.prototype.options.icon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

let mapInstance = null;
let moveTimeout = null;
let isChunkMode = false;

export async function initMap(lat, lng) {

    mapInstance = L.map('map').setView([lat, lng], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(mapInstance);

    // Événement personnalisé pour signaler que la carte est prête
    mapInstance.fire('mapReady');

    // Les couches admin (routes possédées + chunk grid) ne sont visibles que pour les admins
    const isAdmin = window.IS_ADMIN === true;

    if (isAdmin) {
        roadsLayer.addTo(mapInstance);
    }

    // Couches de base : dépôts (visibles pour tout le monde) + chunk grid (admin seulement)
    const baseOverlays = {};

    if (isAdmin) {
        baseOverlays["Chunk Grid"] = gridLayer;
    }

    const layersControl = L.control.layers(null, baseOverlays).addTo(mapInstance);

    // Initialise les couches de dépôts (visibles pour tout le monde)
    await initDepositLayers(mapInstance, layersControl);

    // Ajoute la couche routes possédées (admin seulement)
    if (isAdmin) {
        layersControl.addOverlay(roadsLayer, "Routes possédées");
    }

    // Panneau de debug des zones
    initZoneDebugPanel();

    // Charge la liste des zones en base pour l'overlay "non fetché"
    syncKnownZones().then(async (count) => {
        debugLog("zones", `${count} zones synchronisées depuis la base`);
        // Re-colore le grid si déjà initialisé
        const { refreshGridColors } = await import('../Layers/gridLayer.js');
        refreshGridColors();
    });

    // =====================
    // CENTRAL CHUNK CONTROLLER
    // =====================

    mapInstance.on('moveend', () => {

        if (!isChunkMode) return;
        if (mapInstance.getZoom() < 14) return;

        clearTimeout(moveTimeout);

        moveTimeout = setTimeout(() => {
            initGridLayer();
            loadVisibleRoadChunks();
        }, 300);
    });

    mapInstance.on('overlayadd', (e) => {
        if (e.layer === gridLayer) {
            debugLog("grid", "Grid ON");

            initGridLayer();
            loadVisibleRoadChunks();
        }
    });

    mapInstance.on('overlayremove', (e) => {
        if (e.layer === gridLayer) {
            debugLog("grid", "Grid OFF");
        }
    });

    // =====================
    // EVENTS
    // =====================
    mapInstance.on('zoomend', () => {

        const zoom = mapInstance.getZoom();

        if (zoom >= 14) {
            enterChunkMode();
        } else {
            exitChunkMode();
        }
    });
}

export function isGridLayerActive() {
    return mapInstance?.hasLayer(gridLayer);
}

export function getMap() {
    return mapInstance;
}

export function flyTo(lat, lng, zoom = 13) {
    const map = getMap();
    map.flyTo([lat, lng], zoom, {
        animate: true,
        duration: 1.5
    });
}

// =====================
// WORLD LOADER (Concentrateur d'appels API)
// =====================
export function loadWorld() {

    fetch('/api/world-state')
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP ${res.status}: ${res.statusText}`);
            }
            return res.json();
        })
        .then(data => {
            // Vérifier si la réponse est valide
            if (!data || typeof data !== 'object') {
                throw new Error('Invalid response format');
            }

            // Charger les bases via base.js D'ABORD pour connaître la faction du joueur
            if (data.players) {
                let hasCentered = false;

                data.players.forEach(player => {
                    if (player.isMe) {
                        setCurrentPlayerFaction(player.faction);
                        loadBaseFromServer(player.lat, player.lng);

                        if (!hasCentered) {
                            flyTo(player.lat, player.lng, 16);
                            hasCentered = true;
                        }

                        return;
                    }

                    loadOtherBase(player.lat, player.lng, player.pseudo, player.faction);
                });
            }

            // Définir l'ID du joueur actif
            if (data.currentPlayerId) {
                setCurrentPlayerId(data.currentPlayerId);
            }

            // Charger les bâtiments après avoir défini la faction du joueur
            loadBuildingsFromData(data.buildings);

            // Initialiser le Fog of War
            if (data.fogMode && data.visionSources) {
                initFogOfWar(data.fogMode, data.visionSources, mapInstance);
            }
        })
        .catch(err => {
            debugError('map', "Erreur load world", err);
            // Ne pas rediriger automatiquement, laissez le système de login gérer la redirection
        });
}

function enterChunkMode() {
    if (isChunkMode) return;

    isChunkMode = true;

    debugLog("chunks", "ENTER CHUNK MODE");

    initGridLayer();
    loadVisibleRoadChunks();
}

function exitChunkMode() {
    if (!isChunkMode) return;

    isChunkMode = false;

    debugLog("chunks", "EXIT CHUNK MODE");

    if (mapInstance.hasLayer(gridLayer)) {
        mapInstance.removeLayer(gridLayer);
    }
}