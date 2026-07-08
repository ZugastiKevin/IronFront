import { debugLog, debugError } from '../../../utils/debug.js';
import { knownZones, getZoneStats, syncKnownZones } from './zoneSync.js';
import { flyTo } from '../map.js';
import { addRoadsChunk } from '../../utils/chunk.js';

let panel = null;
let isPanelOpen = false;
let toggleBtn = null;

export function initZoneDebugPanel() {
    // Bouton toggle (toujours visible)
    toggleBtn = document.createElement('button');
    toggleBtn.id = 'zone-debug-toggle';
    toggleBtn.textContent = '📍 Zones';
    toggleBtn.style.cssText = `
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 1000;
        background: #333;
        color: #eee;
        border: 1px solid #666;
        border-radius: 4px;
        padding: 4px 10px;
        cursor: pointer;
        font-family: monospace;
        font-size: 11px;
    `;
    toggleBtn.onclick = togglePanel;
    document.body.appendChild(toggleBtn);

    // Panel (caché par défaut)
    panel = document.createElement('div');
    panel.id = 'zone-debug-panel';
    panel.style.cssText = `
        position: fixed;
        bottom: 40px;
        right: 10px;
        width: 280px;
        max-height: 300px;
        background: rgba(0, 0, 0, 0.9);
        color: #eee;
        font-family: monospace;
        font-size: 11px;
        z-index: 1000;
        border-radius: 6px;
        overflow: hidden;
        display: none;
        flex-direction: column;
    `;
    document.body.appendChild(panel);
}

function togglePanel() {
    isPanelOpen = !isPanelOpen;
    panel.style.display = isPanelOpen ? 'flex' : 'none';
    toggleBtn.style.background = isPanelOpen ? '#555' : '#333';
    if (isPanelOpen) refreshPanel();
}

async function refreshPanel() {
    await syncKnownZones();
    renderPanel();
    debugLog("zones", `${getZoneStats().total} zones en base`);
}

function renderPanel() {
    if (!panel) return;

    const stats = getZoneStats();
    const zones = stats.zones;
    const withRoads = zones.filter(z => z.updatedAt).length;
    const without = zones.length - withRoads;

    panel.innerHTML = `
        <div style="padding: 6px 8px; background: #222; font-weight: bold; display: flex; justify-content: space-between; align-items: center;">
            <span>📍 Zones en base</span>
            <span style="display: flex; gap: 8px; align-items: center;">
                <span style="color: #8f8; font-size: 10px;">${zones.length}</span>
                <button id="zone-refresh-btn" style="background: #444; border: 1px solid #666; color: #eee; border-radius: 3px; padding: 2px 6px; cursor: pointer; font-size: 10px;">🔄</button>
            </span>
        </div>
        <div style="padding: 4px 8px; background: #1a1a1a; color: #aaa; border-bottom: 1px solid #333; font-size: 10px;">
            <span style="color: #6af">● ${withRoads} générées</span>
            &nbsp;|&nbsp;
            <span style="color: #888">● ${without} vides</span>
            &nbsp;|&nbsp;
            <span style="color: #e44">● rouge = à générer</span>
        </div>
        <div id="zone-list" style="overflow-y: auto; max-height: 220px; padding: 2px;">
            ${zones.length === 0 ? '<div style="padding: 8px; color: #666; text-align: center;">Aucune zone en base</div>' : ''}
            ${zones.map(zone => `
                <div class="zone-row" data-id="${zone.id}"
                     style="padding: 3px 8px; cursor: pointer; border-bottom: 1px solid #2a2a2a; display: flex; justify-content: space-between; font-size: 10px;"
                     onmouseover="this.style.background='#333'"
                     onmouseout="this.style.background='transparent'">
                    <span>${zone.latMin},${zone.lngMin}</span>
                    <span style="color: ${zone.updatedAt ? '#6f6' : '#888'}">
                        ${zone.updatedAt ? '✓' : '·'}
                    </span>
                </div>
            `).join('')}
        </div>
        <div style="padding: 4px 8px; background: #1a1a1a; color: #666; font-size: 9px; border-top: 1px solid #333;">
            clic = naviguer · double-clic = générer
        </div>
    `;

    const refreshBtn = document.getElementById('zone-refresh-btn');
    if (refreshBtn) refreshBtn.onclick = (e) => { e.stopPropagation(); refreshPanel(); };

    panel.querySelectorAll('.zone-row').forEach(row => {
        row.onclick = () => {
            const id = parseInt(row.dataset.id);
            const zone = zones.find(z => z.id === id);
            if (zone) {
                // Clic simple : fly vers le coin supérieur gauche de la zone
                const lat = Number(zone.latMin);
                const lng = Number(zone.lngMin);
                flyTo(lat + 0.005, lng + 0.005, 16);
                debugLog("zones", `flyTo zone ${zone.latMin},${zone.lngMin}`);
            }
        };

        row.ondblclick = () => {
            const id = parseInt(row.dataset.id);
            const zone = zones.find(z => z.id === id);
            if (zone) {
                // Double-clic : relancer la génération pour cette zone
                const lat = Number(zone.latMin) + 0.005;
                const lng = Number(zone.lngMin) + 0.005;
                debugLog("zones", `Régénération zone ${zone.latMin},${zone.lngMin}`);
                addRoadsChunk(lat, lng, 200);
            }
        };
    });
}

export { refreshPanel };
