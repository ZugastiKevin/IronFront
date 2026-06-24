import L from '../../LeafletWrapper.js';
import { getMap } from '../map/map.js';
import { drawRoadSegment } from '../ui/drawOnMap.js';
import { debugLog, debugWarn, debugError } from '../../utils/debug.js';
import { formatDate } from '../utils/timer.js';

// State
const activeDeliveries = new Map();
let deliveryLayer = null;
let animationFrame = null;
const pendingEvents = [];

const truckIcon = L.divIcon({
    className: '',
    html: '<div style="font-size:18px">🚚</div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
});

// ==========================
// INIT
// ==========================
export function initDeliveryEvents() {
    initDeliveryLayers();
    loadDeliveries();

    document.addEventListener('game:event', (e) => {
        const data = e.detail;
        if (data.type !== 'delivery_update') return;

        handleDeliveryEvent({
            deliveryId:    data.deliveryId,
            buildingId:    data.buildingId,
            status:        data.status,
            progress:      data.progress,
            waypoints:     data.waypoints,
            resource:      data.resourceCode,
            resourceLabel: data.resourceLabel,
            quantity:      data.quantity,
            estimatedTime: data.duration,
            scheduledAt:   data.scheduledAt,
            faction:       data.faction ?? 'default',
        });
    });
}

// ==========================
// INIT LAYERS
// ==========================
export function initDeliveryLayers() {
    const map = getMap();
    if (!map || deliveryLayer) return;
    deliveryLayer = L.layerGroup().addTo(map);
    startAnimation();
    pendingEvents.forEach(processDeliveryEvent);
    pendingEvents.length = 0;
}

// ==========================
// CHARGER les livraisons IN_TRANSIT depuis l'API
// ==========================
export async function loadDeliveries() {
    try {
        const response = await fetch('/api/deliveries/in-transit');
        if (!response.ok) return;
        const deliveries = await response.json();

        deliveries.forEach(d => {
            const deliveryData = {
                deliveryId:    d.deliveryId,
                buildingId:    d.buildingId,
                status:        'in_transit',
                progress:      d.progress,
                scheduledAt:   d.scheduledAt,
                estimatedTime: d.estimatedTime,
                waypoints:     d.waypoints,
                resource:      d.resource,
                resourceLabel: d.resourceLabel,
                quantity:      d.quantity,
                faction:       d.faction || 'default',
            };
            debugLog('delivery', 'Loading delivery from API:', deliveryData);
            handleDeliveryEvent(deliveryData);
        });
    } catch (e) {
        debugError('delivery', 'Failed to load deliveries:', e);
    }
}

// ==========================
// HANDLE EVENT
// ==========================
export function handleDeliveryEvent(data) {
    if (!deliveryLayer) {
        pendingEvents.push(data);
        return;
    }
    processDeliveryEvent(data);
}

function processDeliveryEvent(data) {
    if (data.status === 'delivered') {
        removeDelivery(data.deliveryId);
        return;
    }
    if (data.status === 'in_transit') {
        upsertDelivery(data);
    }
}

function upsertDelivery(data) {
    const key = data.deliveryId;
    if (!key) { console.warn('Delivery sans ID', data); return; }

    const map = getMap();
    if (!map) return;

    let waypoints = data.waypoints;
    if (typeof waypoints === 'string') {
        try { waypoints = JSON.parse(waypoints); } catch { return; }
    }
    if (!Array.isArray(waypoints) || waypoints.length === 0) return;

    const latlngs = waypoints.map(wp => [wp.lat, wp.lng]);
    const faction = data.faction || 'default';

    if (activeDeliveries.has(key)) {
        const delivery = activeDeliveries.get(key);
        delivery.waypoints          = latlngs;
        delivery.progress           = data.progress ?? delivery.progress;
        delivery.estimatedTime      = data.estimatedTime;
        delivery.scheduledAt        = data.scheduledAt ?? delivery.scheduledAt;
        delivery.lastServerProgress = data.progress ?? 0;
        delivery.lastServerTime     = Date.now();
        delivery.faction            = faction;
    } else {
        const polyline = drawRoadSegment(`delivery-${key}`, latlngs, faction);

        // Formater l'heure du départ prévu
        const scheduledTime = data.scheduledAt ? formatDate(data.scheduledAt) : 'Inconnue';

        const marker = L.marker(latlngs[0], { icon: truckIcon })
            .addTo(deliveryLayer)
            .bindPopup(`
                <strong>Camion n°${key}</strong><br>
                Transporte : ${data.quantity ?? ''} unités de <strong>${data.resourceLabel ?? ''}</strong><br>
                <span class="delivery-progress-${key}">Progression : ${data.progress ?? 0}%</span><br>
                <small class="text-muted">Départ prévu : ${scheduledTime}</small>
            `);

        activeDeliveries.set(key, {
            marker,
            polyline,
            waypoints:          latlngs,
            progress:           data.progress ?? 0,
            estimatedTime:      data.estimatedTime ?? 3600,
            scheduledAt:        data.scheduledAt ?? null,
            lastServerProgress: data.progress ?? 0,
            lastServerTime:     Date.now(),
            resource:           data.resource,
            resourceLabel:      data.resourceLabel,
            quantity:           data.quantity,
            faction,
        });
    }
}

function removeDelivery(key) {
    const delivery = activeDeliveries.get(key);
    if (!delivery) return;
    delivery.marker.remove();
    delivery.polyline.remove();
    activeDeliveries.delete(key);
}

// ==========================
// ANIMATION LOCALE (requestAnimationFrame)
// ==========================
function startAnimation() {
    if (animationFrame) return;

    function animate() {
        const now = Date.now();

        activeDeliveries.forEach((delivery, key) => {
            let interpolatedProgress;

            if (delivery.scheduledAt) {
                // résistant au reload de page
                const startTime = new Date(delivery.scheduledAt).getTime();
                const elapsed   = (now - startTime) / 1000;
                interpolatedProgress = Math.min(
                    100,
                    Math.max(0, (elapsed / delivery.estimatedTime) * 100)
                );
            } else {
                // fallback si pas de scheduledAt
                const elapsedSinceServer = (now - delivery.lastServerTime) / 1000;
                const progressPerSecond  = 100 / delivery.estimatedTime;
                interpolatedProgress = Math.min(
                    100,
                    delivery.lastServerProgress + (elapsedSinceServer * progressPerSecond)
                );
            }

            const pos = interpolateAlongRoute(delivery.waypoints, interpolatedProgress / 100);
            if (pos) delivery.marker.setLatLng(pos);

            const el = document.querySelector(`.delivery-progress-${key}`);
            if (el) el.textContent = `Progression : ${Math.round(interpolatedProgress)}%`;

            if (interpolatedProgress >= 100) removeDelivery(key);
        });

        animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate);
}

// ==========================
// INTERPOLATION sur la polyligne
// ==========================
function interpolateAlongRoute(latlngs, t) {
    if (!latlngs || latlngs.length === 0) return null;
    if (t <= 0) return latlngs[0];
    if (t >= 1) return latlngs[latlngs.length - 1];

    let totalDist = 0;
    const segments = [];
    for (let i = 1; i < latlngs.length; i++) {
        const d = haversine(latlngs[i - 1], latlngs[i]);
        segments.push(d);
        totalDist += d;
    }

    let target = totalDist * t;
    for (let i = 0; i < segments.length; i++) {
        if (target <= segments[i]) {
            const u = target / segments[i];
            return [
                latlngs[i][0] + u * (latlngs[i + 1][0] - latlngs[i][0]),
                latlngs[i][1] + u * (latlngs[i + 1][1] - latlngs[i][1]),
            ];
        }
        target -= segments[i];
    }

    return latlngs[latlngs.length - 1];
}

function haversine(a, b) {
    const R = 6371000;
    const dLat = (b[0] - a[0]) * Math.PI / 180;
    const dLng = (b[1] - a[1]) * Math.PI / 180;
    const x = Math.sin(dLat / 2) ** 2
            + Math.cos(a[0] * Math.PI / 180) * Math.cos(b[0] * Math.PI / 180)
            * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}