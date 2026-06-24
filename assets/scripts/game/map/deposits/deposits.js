import L from '../../../LeafletWrapper.js';
import { debugLog, debugWarn, debugError } from '../../../utils/debug.js';

const depositMarkers = new Map();

// Cache des popups déjà chargés
const popupContentLoaded = new Set();

// Cache des types de ressources
let buildingTypesCache = null;
let resourceTypesCache = null;

/**
 * Charge les types de ressources depuis l'API
 */
async function loadBuildingTypes() {
    if (buildingTypesCache) return buildingTypesCache;

    try {
        const response = await fetch(`/api/building-types`);
        buildingTypesCache = await response.json();
        return buildingTypesCache;
    } catch (e) {
        debugError('deposits', "Erreur lors du chargement des types de ressources", e);
        return [];
    }
}

async function loadResourceTypes() {
    if (resourceTypesCache) return resourceTypesCache;

    try {
        const response = await fetch(`/api/resource-types`);
        resourceTypesCache = await response.json();
        return resourceTypesCache;
    } catch (e) {
        debugError('deposits', "Erreur lors du chargement des types de ressources", e);
        return [];
    }
}

// Mapping des couleurs par défaut
const DEFAULT_COLORS = {
    'iron': '#7f8c8d',
    'oil': '#f1c40f',
    'coal': '#2c3e50',
    'rubber': '#27ae60',
    'bauxite': '#e67e22',
    'rare_earth': '#8e44ad'
};

/**
 * Retourne la couleur pour un type de ressource (synchrone - utilise le cache)
 */
function getResourceColor(type) {
    if (resourceTypesCache) return (resourceTypesCache && resourceTypesCache[type]?.color) || DEFAULT_COLORS[type] || '#ffffff';

    loadResourceTypes();

    return (resourceTypesCache && resourceTypesCache[type]?.color) || DEFAULT_COLORS[type] || '#ffffff';
}

/**
 * Trouve le type de bâtiment (mine) pour une ressource donnée
 */
async function findBuildingTypeForResource(resourceType) {
    const buildingTypes = await loadBuildingTypes();

    // Chercher un bâtiment qui produit cette ressource (production_rate > 0)
    const buildingType = buildingTypes.find(bt => {
        return (bt.resource_type === resourceType || bt.resourceType?.code === resourceType) && bt.production_rate > 0;
    });

    return buildingType?.id || null;
}

export const depositLayers = {};

/**
 * Initialise les couches de dépôts dynamiquement
 */
export async function initDepositLayers(map, control) {
    const resourceTypes = await loadResourceTypes();

    // Créer une couche pour chaque type de ressource (seulement si color existe)
    resourceTypes.forEach(rt => {
        if (rt.color && rt.color.length > 0) {
            depositLayers[rt.code] = L.layerGroup();
            control.addOverlay(depositLayers[rt.code], `Ressource: ${rt.label}`);
        }
    });
}

export async function loadDepositsForChunk(chunkId, map) {
    try {
        const response = await fetch(`/api/deposits/${chunkId}`);
        const deposits = await response.json();
        renderDepositsFromData(deposits, map);
    } catch (err) {
        debugError('deposits', "Erreur chargement dépôts:", err);
    }
}

/**
 * Formate les coûts sous forme de chaîne lisible
 * @param {Array|Object} costs - Ex: [{code: "iron_ingot", label: "Fer", quantity: 25}] ou {iron_ingot: 25}
 * @returns {string} - Ex: "25 Fer, 15 Caoutchouc"
 */
function formatCosts(costs) {
    if (!costs) return 'N/A';

    // Nouveau format: array d'objets avec code, label, quantity
    if (Array.isArray(costs)) {
        return costs.map(c => `${c.quantity} ${c.label}`).join(', ');
    }

    // Ancien format: objet {code: quantity}
    if (typeof costs === 'object') {
        return Object.entries(costs)
            .map(([resource, amount]) => `${amount} ${resource}`)
            .join(', ');
    }

    return 'N/A';
}

/**
 * Vérifie si le joueur a assez de ressources pour un dépôt
 */
async function checkCanClaim(deposit) {
    const costs = deposit.costs;
    if (!costs || Object.keys(costs).length === 0) return false;

    // Pour chaque coût, vérifier si le joueur a assez
    for (const [resource, amount] of Object.entries(costs)) {
        // Ici on pourrait faire un appel API vers /api/player-resources
        // ou utiliser les données déjà chargées
        const response = await fetch('/api/player-resources');
        const data = await response.json();
        const playerResources = {};
        data.resources.forEach(r => {
            playerResources[r.type] = r.quantity;
        });

        const has = playerResources[resource] ?? 0;
        if (has < amount) {
            return false;
        }
    }
    return true;
}

/**
 * Crée un popup simple (synchrone)
 */
function createSimplePopup(deposit) {
    return `
        <div class="deposit-popup">
            <h3>${deposit.type || 'Dépôt de resource'}</h3>
        </div>
    `;
}

/**
 * Charge les infos des dépôts en arrière-plan
 */
async function loadDepositInfoAsync(depositsID, marker, depositData) {
    // Éviter de recharger si déjà chargé
    if (popupContentLoaded.has(depositsID)) {
        return;
    }
    popupContentLoaded.add(depositsID);

    try {
        // Charger directement le contenu du popup
        const res = await fetch(`/api/deposit/${depositsID}/popup-content`);

        if (!res.ok) {
            debugWarn('deposits', `Erreur API popup-content (deposit ${depositsID}):`, res.status);
            marker.setPopupContent(createSimplePopup(depositData));
            return;
        }

        const html = await res.text();
        marker.setPopupContent(html);
        depositMarkers.set(depositsID, { marker, data: depositData });

    } catch (e) {
        debugError('deposits', "Erreur lors du chargement du popup", e);
        marker.setPopupContent(createSimplePopup(depositData));
    }
}

/**
 * Rendu des dépôts sur la carte
 */
export function renderDepositsFromData(deposits, map) {
    deposits.forEach(deposit => {
        if (depositMarkers.has(deposit.id)) return;

        const type = deposit.resource_type;
        const layer = depositLayers[type];

        if (!layer) return;

        const color = getResourceColor(type);

        const marker = L.circleMarker([deposit.latitude, deposit.longitude], {
            radius: 8,
            fillColor: color,
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        })
        .addTo(layer)
        .bindPopup(createSimplePopup(deposit));

        // Charger le contenu de la popup uniquement quand elle est ouverte
        if (deposit.id) {
            marker.on('popupopen', () => {
                loadDepositInfoAsync(deposit.id, marker, deposit);
            });
        }
    });
}

/**
 * Permet d'exploiter un dépôt depuis la popup
 */
window.claimDeposit = async function(id, resourceType) {
    // Trouver le type de bâtiment approprié
    const buildingTypeId = await findBuildingTypeForResource(resourceType);

    if (!buildingTypeId) {
        return alert(`Impossible de trouver un bâtiment pour extraire le ${resourceType}`);
    }

    // Construire directement le bâtiment sur les coordonnées du dépôt
    try {
        const response = await fetch('/api/build', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                lat: null,
                lng: null,
                type_id: buildingTypeId,
                deposit_id: id
            })
        });

        const responseText = await response.text();
        let data;
        try {
            data = JSON.parse(responseText);
        } catch (parseError) {
            debugError('deposits', "Réponse non-JSON reçue:", responseText);
            throw new Error("Réponse invalide du serveur");
        }

        if (response.ok) {
            debugLog('deposits', 'Dépôt exploité avec succès ! Bâtiment créé.');
            location.reload();
        } else {
            debugError('deposits', "Erreur: " + (data.error || "Impossible d'exploiter ce dépôt"));
        }
    } catch (e) {
        debugError('deposits', "Erreur lors de l'exploitation", e);
        alert("Erreur réseau lors de l'exploitation: " + e.message);
    }
}