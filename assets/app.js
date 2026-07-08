import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.scss';

import './scripts/layout/dropdown.js';
import './scripts/layout/switch_layout_sidebar.js';
import './scripts/security/form.js';
import './scripts/security/remember_me.js';
import './scripts/security/reset-btn.js';


// Game-specific scripts (only loaded on game pages)
import './scripts/game/utils/faction-game-choice.js';

import "leaflet/dist/leaflet.css";