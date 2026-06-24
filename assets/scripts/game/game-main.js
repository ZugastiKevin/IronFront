import { initMap, loadWorld } from './map/map.js';
import { initGPS } from './utils/gps.js';
import { initBaseUI } from './buildings/base.js';
import { initBuildMode } from './buildings/buildMode.js';
import { initNotifications } from './notifications.js';
import { initBuildingTimers } from './utils/timer.js';
import { initDeliveryEvents } from './delivery/delivery.js';
import { initInventoryEvents } from './inventory/inventory.js';

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
        console.log("🧨 MARKER CALL:", args);
        console.trace("MARKER STACK");
        return originalMarker.apply(this, args);
    };

    L.circle = function (...args) {
        console.log("🧨 CIRCLE CALL:", args);
        console.trace("CIRCLE STACK");
        return originalCircle.apply(this, args);
    };

    L.polyline = function (...args) {
        console.log("🧨 POLYLINE CALL:", args);
        console.trace("POLYLINE STACK");
        return originalPolyline.apply(this, args);
    };
}