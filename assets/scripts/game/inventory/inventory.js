import { refreshBuildingPopup } from '../buildings/building.js';
import { debugLog, debugWarn, debugError } from '../../utils/debug.js';

// ==========================
// INIT — remplace initInventoryMercure
// ==========================
export function initInventoryEvents() {
    if (!window.currentUser) {
        debugWarn('inventory', 'Aucun utilisateur connecté');
        return;
    }

    debugLog('inventory', 'initInventoryEvents appelé');

    document.addEventListener('game:event', (e) => {
        const data = e.detail;
        if (data.type !== 'inventory_update') return;

        debugLog('inventory', 'Inventaire mis à jour:', data);
        handleInventoryUpdate(data);
    });
}

// ==========================
// HANDLE UPDATE
// ==========================
function handleInventoryUpdate(data) {
    updateNavbarResources(data.resources ?? data);

    const popup = document.querySelector('.building-popup');
    if (popup) {
        refreshBuildingPopup(parseInt(popup.dataset.buildingId));
    }

    // Garder l'event custom pour les autres composants qui écoutent déjà
    window.dispatchEvent(new CustomEvent('inventoryUpdated', { detail: data }));
}

// ==========================
// NAVBAR
// ==========================
function updateNavbarResources(resources) {
    if (!resources) return;

    document.querySelectorAll('.resource-item').forEach(item => {
        const code = item.dataset.resourceCode;
        if (resources[code] !== undefined) {
            const qtyElement = item.querySelector('.resource-qty');
            if (qtyElement) {
                qtyElement.textContent = resources[code];
            }
        }
    });
}

// ==========================
// UPGRADE REQUIREMENTS
// ==========================
function checkUpgradeRequirements(popup, resourceCode, quantity) {
    const requiredElement = popup.querySelector(`[data-required-${resourceCode}]`);
    if (!requiredElement) return;

    const required = parseInt(
        requiredElement.getAttribute(`data-required-${resourceCode}`) || '0'
    );

    requiredElement.classList.toggle('text-success', quantity >= required);
    requiredElement.classList.toggle('text-danger',  quantity < required);
}