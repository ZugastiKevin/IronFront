import { initMap, loadWorld } from './map/map.js';
import { initGPS } from './utils/gps.js';
import { initBaseUI } from './buildings/base.js';
import { initBuildMode } from './buildings/buildMode.js';
import { initNotifications } from './notifications.js';
import { initBuildingTimers } from './utils/timer.js';
import { initDeliveryEvents } from './delivery/delivery.js';
import { initInventoryEvents } from './inventory/inventory.js';
import { debugLog } from '../utils/debug.js';

document.addEventListener('DOMContentLoaded', () => {

    enableLeafletDebug(false);

    initMap(46.53972, 2.43028);

    initBaseUI();
    initBuildMode();
    loadWorld();

    document.body.classList.add('page-game');

    if (window.currentUser) {
        initNotifications();
        initDeliveryEvents();
        initInventoryEvents();
        initBuildingTimers();
    }
});

export function enableLeafletDebug(debug = false) {

    if (!debug) return;

    const originalMarker = L.marker;
    const originalCircle = L.circle;
    const originalPolyline = L.polyline;

    L.marker = function (...args) {
        debugLog("leaflet", "🧨 MARKER CALL:", args);
        debugLog("leaflet", "MARKER STACK");
        return originalMarker.apply(this, args);
    };

    L.circle = function (...args) {
        debugLog("leaflet", "🧨 CIRCLE CALL:", args);
        debugLog("leaflet", "CIRCLE STACK");
        return originalCircle.apply(this, args);
    };

    L.polyline = function (...args) {
        debugLog("leaflet", "🧨 POLYLINE CALL:", args);
        debugLog("leaflet", "POLYLINE STACK");
        return originalPolyline.apply(this, args);
    };
}