import { debugLog, debugError } from '../../utils/debug.js';

let panel = null;
let isPanelOpen = false;
let toggleBtn = null;
let pollInterval = null;

export function initWorldExpansionProgressPanel() {
    // Bouton toggle
    toggleBtn = document.createElement('button');
    toggleBtn.id = 'expansion-progress-toggle';
    toggleBtn.textContent = '🌍 Expansion';
    toggleBtn.style.cssText = `
        position: fixed;
        bottom: 10px;
        right: 100px;
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

    // Panel
    panel = document.createElement('div');
    panel.id = 'expansion-progress-panel';
    panel.style.cssText = `
        position: fixed;
        bottom: 40px;
        right: 100px;
        width: 240px;
        max-height: 220px;
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

    if (isPanelOpen) {
        refreshPanel();
        pollInterval = setInterval(refreshPanel, 5000);
    } else {
        clearInterval(pollInterval);
        pollInterval = null;
    }
}

async function refreshPanel() {
    try {
        const response = await fetch('/api/world-expansion/status');
        if (!response.ok) throw new Error('API error');
        const stats = await response.json();
        renderPanel(stats);
    } catch (e) {
        debugError("expansion", "Erreur refresh:", e);
    }
}

function renderPanel(stats) {
    if (!panel) return;

    const total = (stats.populated || 0) + (stats.empty || 0) + (stats.frontier || 0);
    const progress = total > 0 ? ((stats.populated / total) * 100).toFixed(1) : 0;

    panel.innerHTML = `
        <div style="padding: 6px 8px; background: #222; font-weight: bold; display: flex; justify-content: space-between; align-items: center;">
            <span>🌍 Expansion</span>
            <button id="expansion-refresh-btn" style="background: #444; border: 1px solid #666; color: #eee; border-radius: 3px; padding: 2px 6px; cursor: pointer; font-size: 10px;">🔄</button>
        </div>
        <div style="padding: 4px 8px; background: #1a1a1a; border-bottom: 1px solid #333;">
            <div style="background: #333; border-radius: 3px; height: 8px; overflow: hidden; margin-bottom: 4px;">
                <div style="background: #4a4; height: 100%; width: ${progress}%; transition: width 0.3s;"></div>
            </div>
            <span style="color: #8f8">${progress}%</span>
        </div>
        <div style="padding: 4px 8px; background: #1a1a1a; color: #aaa; border-bottom: 1px solid #333; font-size: 10px;">
            <span style="color: #6af">● ${stats.populated || 0} peuplés</span>
            &nbsp;|&nbsp;
            <span style="color: #e44">● ${stats.empty || 0} vides</span>
            &nbsp;|&nbsp;
            <span style="color: #fa0">● ${stats.frontier || 0} frontière</span>
        </div>
        <div style="padding: 4px 8px; background: #1a1a1a; color: #666; font-size: 9px; border-top: 1px solid #333;">
            Frontière = chunks en attente de génération
        </div>
    `;

    const refreshBtn = document.getElementById('expansion-refresh-btn');
    if (refreshBtn) {
        refreshBtn.onclick = (e) => { e.stopPropagation(); refreshPanel(); };
    }
}

export { refreshPanel };
