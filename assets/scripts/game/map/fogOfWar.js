import L from '../../LeafletWrapper.js';

let fogLayer = null;
let visionSources = [];
let fogMode = 'disabled';
let mapInstance = null;

class FogOfWar {
    constructor(map) {
        this.map = map;
        this.canvas = document.createElement('canvas');
        this.ctx = this.initCanvas();
        this.visionSources = [];
        this.resize();
        this.bindEvents();
    }

    initCanvas() {
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '500';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';

        const container = this.map.getContainer();
        container.appendChild(this.canvas);

        const ctx = this.canvas.getContext('2d');
        if (!ctx) {
            throw new Error('Canvas context unavailable');
        }

        return ctx;
    }

    bindEvents() {
        this.map.on('move zoom resize moveend zoomend', () => {
            this.resize();
            this.render(this.visionSources);
        });
    }

    resize() {
        const size = this.map.getSize();
        this.canvas.width = size.x;
        this.canvas.height = size.y;

        this.canvas.style.width = `${size.x}px`;
        this.canvas.style.height = `${size.y}px`;
    }

    updateSources(sources) {
        this.visionSources = sources;
        this.render(sources);
    }

    render(sources) {
        const size = this.map.getSize();
        const ctx = this.ctx;

        ctx.clearRect(0, 0, size.x, size.y);

        // Brouillard
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = 'rgba(0,0,0,0.75)';
        ctx.fillRect(0, 0, size.x, size.y);

        // Découpe des zones visibles
        ctx.globalCompositeOperation = 'destination-out';

        for (const source of sources) {
            const center = L.latLng(source.lat, source.lng);

            const point = this.map.latLngToContainerPoint(center);

            const edge = L.latLng(source.lat, source.lng + source.radius);

            const radiusPx = point.distanceTo(this.map.latLngToContainerPoint(edge));

            const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, radiusPx);

            gradient.addColorStop(0, 'rgba(0,0,0,1)');
            gradient.addColorStop(1, 'rgba(0,0,0,0)');

            ctx.fillStyle = gradient;

            ctx.beginPath();
            ctx.arc(point.x, point.y, radiusPx, 0, Math.PI * 2);

            ctx.fill();

            // Debug
            if (fogMode === 'debug') {
                ctx.globalCompositeOperation = 'source-over';

                ctx.beginPath();
                ctx.arc(point.x, point.y, radiusPx, 0, Math.PI * 2);

                ctx.strokeStyle = 'lime';
                ctx.lineWidth = 2;
                ctx.stroke();

                ctx.globalCompositeOperation = 'destination-out';
            }
        }

        ctx.globalCompositeOperation = 'source-over';
    }
}

let fogInstance = null;

/**
 * Initialise le brouillard de guerre
 * @param {string} mode - Mode de brouillard ('enabled', 'disabled', 'debug')
 * @param {Array} sources - Sources de vision
 * @param {Object} map - Instance Leaflet
 */
export function initFogOfWar(mode, sources, map) {
    fogMode = mode || 'disabled';

    if (!fogInstance && fogMode !== 'disabled') {
        fogInstance = new FogOfWar(map);
    }

    if (!fogInstance) {
        return;
    }

    if (fogMode === 'disabled') {
        fogInstance.canvas.style.display = 'none';
        return;
    }

    fogInstance.canvas.style.display = 'block';
    fogInstance.updateSources(sources);
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

    const sources = fogInstance?.visionSources || [];
    return sources.some(source => {
        const dx = lat - source.lat;
        const dy = lng - source.lng;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance <= source.radius;
    });
}