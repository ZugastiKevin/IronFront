(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js"
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _scripts_layout_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/layout/dropdown.js */ "./assets/scripts/layout/dropdown.js");
/* harmony import */ var _scripts_layout_dropdown_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_layout_dropdown_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_layout_switch_layout_sidebar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/layout/switch_layout_sidebar.js */ "./assets/scripts/layout/switch_layout_sidebar.js");
/* harmony import */ var _scripts_layout_switch_layout_sidebar_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_layout_switch_layout_sidebar_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_security_form_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/security/form.js */ "./assets/scripts/security/form.js");
/* harmony import */ var _scripts_security_form_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_security_form_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scripts_security_remember_me_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/security/remember_me.js */ "./assets/scripts/security/remember_me.js");
/* harmony import */ var _scripts_security_remember_me_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_security_remember_me_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _scripts_security_reset_btn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/security/reset-btn.js */ "./assets/scripts/security/reset-btn.js");
/* harmony import */ var _scripts_security_reset_btn_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scripts_security_reset_btn_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _scripts_game_utils_faction_game_choice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/game/utils/faction-game-choice.js */ "./assets/scripts/game/utils/faction-game-choice.js");
/* harmony import */ var _scripts_game_utils_faction_game_choice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scripts_game_utils_faction_game_choice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");


/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */







// Game-specific scripts (only loaded on game pages)



/***/ },

/***/ "./assets/scripts/game/utils/faction-game-choice.js"
/*!**********************************************************!*\
  !*** ./assets/scripts/game/utils/faction-game-choice.js ***!
  \**********************************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
function initSelection() {
  var _document$getElementB;
  document.querySelectorAll('.game-card').forEach(function (card) {
    var radio = card.querySelector('input[type="radio"]');
    if (radio) {
      radio.addEventListener('change', function () {
        document.querySelectorAll('.game-card').forEach(function (c) {
          return c.classList.remove('selected');
        });
        if (this.checked) {
          card.classList.add('selected');
          selectGame(this.value, card.dataset.gameLabel);
        }
      });
    }
  });
  document.querySelectorAll('.faction-card').forEach(function (card) {
    var radio = card.querySelector('input[type="radio"]');
    if (radio) {
      radio.addEventListener('change', function () {
        document.querySelectorAll('.faction-card').forEach(function (c) {
          return c.classList.remove('selected');
        });
        if (this.checked) card.classList.add('selected');
      });
    }
  });

  // Bouton "Changer de game"
  (_document$getElementB = document.getElementById('btn-change-game')) === null || _document$getElementB === void 0 || _document$getElementB.addEventListener('click', resetGameSelection);

  // Au chargement si une game est déjà cochée
  var checkedGame = document.querySelector('.game-card input[type="radio"]:checked');
  if (checkedGame) {
    var _card$dataset$gameLab;
    var card = checkedGame.closest('.game-card');
    card === null || card === void 0 || card.classList.add('selected');
    selectGame(checkedGame.value, (_card$dataset$gameLab = card === null || card === void 0 ? void 0 : card.dataset.gameLabel) !== null && _card$dataset$gameLab !== void 0 ? _card$dataset$gameLab : '');
  }
}
function selectGame(gameId, gameLabel) {
  // Changer le titre
  document.getElementById('form-title').textContent = 'Choisissez votre faction';

  // Réduire la grille des games → afficher le résumé compact
  document.getElementById('games-grid').style.display = 'none';
  document.getElementById('game-selected-summary').style.display = 'flex';
  document.getElementById('game-selected-label').textContent = gameLabel;

  // Afficher la section factions et le séparateur
  document.getElementById('factions-section').style.display = '';
  document.getElementById('submit-btn').style.display = '';
  handleGameSelection(gameId);
}
function resetGameSelection() {
  // Remettre le titre initial
  document.getElementById('form-title').textContent = 'Choisissez une partie';

  // Réafficher la grille des games
  document.getElementById('games-grid').style.display = '';
  document.getElementById('game-selected-summary').style.display = 'none';

  // Masquer factions
  document.getElementById('factions-section').style.display = 'none';
  document.getElementById('submit-btn').style.display = 'none';

  // Décocher toutes les games
  document.querySelectorAll('.game-card').forEach(function (c) {
    c.classList.remove('selected');
    var r = c.querySelector('input[type="radio"]');
    if (r) r.checked = false;
  });

  // Réinitialiser les factions
  document.querySelectorAll('.faction-card').forEach(function (card) {
    card.style.display = '';
    card.classList.remove('selected');
    var r = card.querySelector('input[type="radio"]');
    if (r) r.checked = false;
  });
}
function handleGameSelection(gameId) {
  var _window$existingPlaye;
  var existing = (_window$existingPlaye = window.existingPlayers) !== null && _window$existingPlaye !== void 0 ? _window$existingPlaye : {};
  var factionCards = document.querySelectorAll('.faction-card');
  var factionsGrid = document.querySelector('.factions-grid');
  if (existing[gameId] !== undefined) {
    var playerFaction = existing[gameId];
    var visibleCount = 0;
    factionCards.forEach(function (card) {
      var radio = card.querySelector('input[type="radio"]');
      var factionCode = radio === null || radio === void 0 ? void 0 : radio.dataset.code;
      if (factionCode === playerFaction) {
        card.style.display = '';
        card.classList.add('selected');
        if (radio) radio.checked = true;
        visibleCount++;
      } else {
        card.style.display = 'none';
        card.classList.remove('selected');
        if (radio) radio.checked = false;
      }
    });
    if (factionsGrid) {
      if (visibleCount === 1) {
        factionsGrid.style.gridTemplateColumns = 'minmax(0, 400px)';
        factionsGrid.style.justifyContent = 'center';
      } else if (visibleCount === 2) {
        factionsGrid.style.gridTemplateColumns = 'repeat(2, minmax(0, 400px))';
        factionsGrid.style.justifyContent = 'center';
      } else {
        factionsGrid.style.gridTemplateColumns = '';
        factionsGrid.style.justifyContent = '';
      }
    }
  } else {
    factionCards.forEach(function (card) {
      card.style.display = '';
      card.classList.remove('selected');
      var radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = false;
    });
    if (factionsGrid) {
      factionsGrid.style.gridTemplateColumns = '';
      factionsGrid.style.justifyContent = '';
    }
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSelection);
} else {
  initSelection();
}

/***/ },

/***/ "./assets/scripts/layout/dropdown.js"
/*!*******************************************!*\
  !*** ./assets/scripts/layout/dropdown.js ***!
  \*******************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function attachHoverDropdown(toggleSelector) {
  var toggles = document.querySelectorAll(toggleSelector);
  toggles.forEach(function (toggle) {
    var targetSelector = toggle.dataset.dropdownTarget;
    if (!targetSelector) return;
    var dropdownContent = document.querySelector(targetSelector);
    if (!dropdownContent) return;
    var hideTimeout = null;
    var isOpen = false;
    var showDropdown = function showDropdown() {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      isOpen = true;
      dropdownContent.style.display = "flex";
      dropdownContent.style.animation = "show-content 0.25s ease forwards";
      toggle.classList.add("dropdown-open");
    };
    var reallyHideDropdown = function reallyHideDropdown() {
      dropdownContent.style.animation = "dont-show-content 0.25s ease forwards";
      var _handler = function handler(event) {
        if (event.animationName === "dont-show-content") {
          dropdownContent.style.display = "none";
          toggle.classList.remove("dropdown-open");
          dropdownContent.removeEventListener("animationend", _handler);
          isOpen = false;
        }
      };
      dropdownContent.addEventListener("animationend", _handler);
    };
    var hideDropdown = function hideDropdown() {
      hideTimeout = setTimeout(reallyHideDropdown, 150);
    };
    var toggleDropdown = function toggleDropdown(event) {
      event.preventDefault();
      event.stopPropagation();
      if (isOpen) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        reallyHideDropdown();
      } else {
        showDropdown();
      }
    };

    // Desktop : hover
    toggle.addEventListener("mouseenter", showDropdown);
    toggle.addEventListener("mouseleave", hideDropdown);
    dropdownContent.addEventListener("mouseenter", showDropdown);
    dropdownContent.addEventListener("mouseleave", hideDropdown);

    // Mobile : click/touch
    toggle.addEventListener("click", toggleDropdown);
    toggle.addEventListener("touchstart", toggleDropdown, {
      passive: false
    });

    // Fermer si on clique ailleurs
    document.addEventListener("click", function (event) {
      if (isOpen && !toggle.contains(event.target) && !dropdownContent.contains(event.target)) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        reallyHideDropdown();
      }
    });
    document.addEventListener("touchstart", function (event) {
      if (isOpen && !toggle.contains(event.target) && !dropdownContent.contains(event.target)) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        reallyHideDropdown();
      }
    });
  });
}
function attachNavbarDropdown() {
  var toggle = document.querySelector(".navbar-dropdown-toggle");
  var navbarMenu = document.querySelector(".navbar_menu");
  var navbarContainer = document.querySelector(".dropdown-navbar");
  if (!toggle || !navbarMenu || !navbarContainer) return;
  var targetSelector = toggle.dataset.dropdownTarget;
  if (!targetSelector) return;
  var dropdownContent = document.querySelector(targetSelector);
  if (!dropdownContent) return;
  var regionEls = [toggle, navbarContainer, dropdownContent];
  var hideTimeout = null;
  var isClosing = false;
  var isOpen = false;
  var isInRegion = function isInRegion(el) {
    return regionEls.some(function (node) {
      return node && node.contains(el);
    });
  };
  var showAll = function showAll() {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
    isClosing = false;
    isOpen = true;
    dropdownContent.style.display = "flex";
    dropdownContent.style.animation = "show-content 0.25s ease forwards";
    toggle.classList.add("dropdown-open");
    navbarMenu.classList.remove("navbar-menu-anim-show");
    navbarMenu.classList.add("navbar-menu-anim-hide");
    navbarContainer.style.display = "flex";
    navbarContainer.classList.remove("dropdown-navbar-anim-hide");
    navbarContainer.classList.add("dropdown-navbar-anim-show");
  };
  var reallyHideAll = function reallyHideAll() {
    isClosing = true;
    isOpen = false;
    dropdownContent.style.animation = "dont-show-content 0.25s ease forwards";
    var _handler2 = function handler(event) {
      if (event.animationName === "dont-show-content") {
        if (!isClosing) {
          dropdownContent.removeEventListener("animationend", _handler2);
          return;
        }
        dropdownContent.style.display = "none";
        toggle.classList.remove("dropdown-open");
        dropdownContent.removeEventListener("animationend", _handler2);
      }
    };
    dropdownContent.addEventListener("animationend", _handler2);
    navbarContainer.classList.remove("dropdown-navbar-anim-show");
    navbarContainer.classList.add("dropdown-navbar-anim-hide");
    navbarMenu.classList.remove("navbar-menu-anim-hide");
    navbarMenu.classList.add("navbar-menu-anim-show");
  };
  var onLeaveRegion = function onLeaveRegion(event) {
    var to = event.relatedTarget;
    if (to && isInRegion(to)) return;
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    hideTimeout = setTimeout(reallyHideAll, 150);
  };
  var toggleNavbar = function toggleNavbar(event) {
    event.preventDefault();
    event.stopPropagation();
    if (isOpen) {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      reallyHideAll();
    } else {
      showAll();
    }
  };

  // Desktop : hover
  regionEls.forEach(function (el) {
    el.addEventListener("mouseenter", showAll);
    el.addEventListener("mouseleave", onLeaveRegion);
  });

  // Mobile : click/touch
  toggle.addEventListener("click", toggleNavbar);
  toggle.addEventListener("touchstart", toggleNavbar, {
    passive: false
  });

  // Fermer si on clique ailleurs
  document.addEventListener("click", function (event) {
    if (isOpen && !isInRegion(event.target)) {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      reallyHideAll();
    }
  });
  document.addEventListener("touchstart", function (event) {
    if (isOpen && !isInRegion(event.target)) {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      reallyHideAll();
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  attachNavbarDropdown();
  attachHoverDropdown(".language-dropdown-toggle");
  attachHoverDropdown(".theme-dropdown-toggle");
});

/***/ },

/***/ "./assets/scripts/layout/switch_layout_sidebar.js"
/*!********************************************************!*\
  !*** ./assets/scripts/layout/switch_layout_sidebar.js ***!
  \********************************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
window.switchView = function (viewId) {
  document.querySelectorAll('.sidebar-view').forEach(function (v) {
    return v.style.display = 'none';
  });
  document.getElementById(viewId).style.display = 'flex';
};

/***/ },

/***/ "./assets/scripts/security/form.js"
/*!*****************************************!*\
  !*** ./assets/scripts/security/form.js ***!
  \*****************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* =====================================================
   VALIDATION GÉNÉRIQUE DES FORMULAIRES
   Emails + Mots de passe + Pseudos + Custom validators
   Compatible Support / User / Login / ForgotPassword
   ===================================================== */

var selector = 'input[type="text"], input[type="number"], input[type="email"], input[type="password"], select, textarea';
var inputs = document.querySelectorAll(selector);
var form = document.querySelector('.all-form');

// =====================================================
// Fonctions d'apparence des inputs
// =====================================================
function initInput(inputEl) {
  var wrapper = inputEl.closest('span') || inputEl.parentElement;
  if (inputEl.value.trim() !== '') {
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--filled');
  }
  inputEl.addEventListener('focus', onFocus);
  inputEl.addEventListener('blur', onBlur);

  // Pour le responsive mobile
  inputEl.addEventListener('touchend', onBlur);
}
function onFocus(ev) {
  var parent = ev.target.closest('span') || ev.target.parentElement;
  if (parent && parent.classList) {
    parent.classList.add('inputs--filled');
  }
}
function onBlur(ev) {
  var input = ev.target;
  var wrapper = input.closest('span') || input.parentElement;
  if (input.value.trim() === '') {
    wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--filled', 'inputs--invalid');
  } else {
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--filled');
  }
}
function liveValidation(ev) {
  var input = ev.target;
  var wrapper = input.closest('span') || input.parentElement;
  if (!input.checkValidity()) {
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--invalid');
  } else {
    wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--invalid');
  }
}

// =====================================================
// Système de validation générique
// =====================================================
var validators = {};
var validationTimers = {}; // Stockage des timers

function registerValidator(inputId, errorId, validateFn) {
  validators[inputId] = {
    errorId: errorId,
    validateFn: validateFn
  };
}

// - true                -> pas d'erreur
// - string               -> message unique (comportement existant)
// - string[]              -> liste à puces, une ligne par règle non respectée
function buildErrorMarkup(result) {
  if (Array.isArray(result)) {
    if (result.length === 0) return '';
    var items = result.map(function (line) {
      return "<li>".concat(line, "</li>");
    }).join('');
    return "<ul class=\"form-error-list\">".concat(items, "</ul>");
  }
  return result;
}
function runValidator(inputId) {
  var config = validators[inputId];
  if (!config) return true;
  var input = document.getElementById(inputId);
  var errorBox = document.getElementById(config.errorId);
  if (!input || !errorBox) return true;
  var wrapper = input.closest('span') || input.parentElement;
  errorBox.style.visibility = 'hidden';
  errorBox.textContent = "\xA0";
  wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--invalid');
  var result = config.validateFn(input.value, input);
  var isValid = result === true || Array.isArray(result) && result.length === 0;
  if (!isValid) {
    errorBox.innerHTML = buildErrorMarkup(result);
    errorBox.style.visibility = 'visible';
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--invalid');
    return false;
  }
  return true;
}
function attachValidator(inputId) {
  var eventTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['input', 'blur'];
  var delayMs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
  var input = document.getElementById(inputId);
  if (!input) return;
  eventTypes.forEach(function (eventType) {
    if (eventType === 'input') {
      // Pour l'événement 'input', on ajoute un délai de 3 secondes
      input.addEventListener('input', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
        }
        validationTimers[inputId] = setTimeout(function () {
          runValidator(inputId);
        }, delayMs);
      });
    } else if (eventType === 'change') {
      // Pour 'change', validation immédiate
      input.addEventListener('change', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
          delete validationTimers[inputId];
        }
        runValidator(inputId);
      });
    } else if (eventType === 'blur') {
      // Pour 'blur', validation immédiate
      input.addEventListener('blur', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
          delete validationTimers[inputId];
        }
        runValidator(inputId);
      });

      // Ajouter 'touchend' pour mobile
      input.addEventListener('touchend', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
          delete validationTimers[inputId];
        }
        // Petit délai pour éviter les doubles déclenchements
        setTimeout(function () {
          return runValidator(inputId);
        }, 100);
      });
    } else if (eventType === 'click') {
      // Pour 'click', validation immédiate
      input.addEventListener('click', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
          delete validationTimers[inputId];
        }
        runValidator(inputId);
      });
    }
  });
}

// =====================================================
// VALIDATEURS PSEUDOS (génériques)
// =====================================================

function t(key) {
  return window.appTranslations && window.appTranslations[key] || key;
}
function registerPseudo(inputId, errorId) {
  var minLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  var maxLength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 25;
  registerValidator(inputId, errorId, function (value) {
    var v = value.trim();
    if (v === "") return t('pseudo_required');
    if (v.length < minLength) return t('pseudo_min_3');
    if (v.length > maxLength) return t('pseudo_max_25');
    return true;
  });
}
var pseudoFields = [{
  inputId: "support_name",
  errorId: "pseudo-error",
  minLength: 3,
  maxLength: 25
}, {
  inputId: "user_pseudo",
  errorId: "user_pseudo-error",
  minLength: 3,
  maxLength: 25
}];
pseudoFields.forEach(function (f) {
  return registerPseudo(f.inputId, f.errorId, f.minLength, f.maxLength);
});

// =====================================================
// VALIDATEURS EMAILS (génériques pour tout le site)
// =====================================================

function registerEmail(inputId, errorId) {
  registerValidator(inputId, errorId, function (value, input) {
    var v = value.trim();
    if (v === "") return t('email_required');
    if (!input.checkValidity()) return t('email_invalid');
    return true;
  });
}
var emailFields = [{
  inputId: "support_email",
  errorId: "email-error"
}, {
  inputId: "user_email",
  errorId: "user_email-error"
}, {
  inputId: "username",
  errorId: "username-error"
}, {
  inputId: "forgot_password_request_form_email",
  errorId: "forgot_email-error"
}];
emailFields.forEach(function (f) {
  return registerEmail(f.inputId, f.errorId);
});

// =====================================================
// VALIDATEURS MOTS DE PASSE (génériques)
// =====================================================

function passwordChecklist(value) {
  var v = value;
  var errors = [];
  if (v.length < 8) errors.push(t('password_length_8'));
  if (!/[A-Z]/.test(v)) errors.push(t('password_upper'));
  if (!/\d/.test(v)) errors.push(t('password_number'));
  if (!/[\W_]/.test(v)) errors.push(t('password_special'));
  return errors;
}
registerValidator("user_plainPassword_first", "user_password_first-error", function (value) {
  return passwordChecklist(value);
});
registerValidator("user_plainPassword_second", "user_password_second-error", function (value) {
  var first = document.getElementById("user_plainPassword_first");
  if (!first) return true;
  if (value.trim() === "") return t('password_confirm_required');
  if (value !== first.value) return t('password_mismatch');
  return true;
});
registerValidator("reset_password_form_plainPassword_first", "reset_password_form_plainPassword_first-error", function (value) {
  return passwordChecklist(value);
});
registerValidator("reset_password_form_plainPassword_second", "reset_password_form_plainPassword_second-error", function (value) {
  var first = document.getElementById("reset_password_form_plainPassword_first");
  if (!first) return true;
  if (value.trim() === "") return t('password_confirm_required');
  if (value !== first.value) return t('password_mismatch');
  return true;
});

// Mot de passe de connexion
registerValidator("password", "password-error", function (value) {
  if (value.trim() === "") return t('password_required');
  return true;
});

// Mot de passe "oublié" (nouveau mot de passe, si tu as un champs dédié)
registerValidator("forgot_password", "forgot_password-error", function (value) {
  if (value.trim() === "") return t('password_required');
  return true;
});

// =====================================================
// VALIDATEURS SUPPORT SUPPLÉMENTAIRES → category / message / image
// =====================================================

registerValidator("support_category", "selecte-error", function (value) {
  if (!value || value.trim() === "") return t('support_category_required');
  return true;
});
registerValidator("support_message", "text-area-error", function (value) {
  var v = value.trim();
  if (v === "") return t('support_message_required');
  if (v.length < 10) return t('support_message_min_10');
  return true;
});

// VALIDATION DE L’IMAGE (support)
registerValidator("support_imageFile", "image-error", function (value, input) {
  var file = input.files[0];
  if (!file) return true;
  var allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  var max = 2 * 1024 * 1024;
  if (!allowed.includes(file.type)) return t('image_type');
  if (file.size > max) return t('image_size');
  return true;
});

// ========================
// SOUMISSION DU FORMULAIRE
// ========================
function onSubmit(ev) {
  var hasError = false;

  // Annuler tous les timers en cours
  Object.keys(validationTimers).forEach(function (inputId) {
    clearTimeout(validationTimers[inputId]);
    delete validationTimers[inputId];
  });

  // Vérifier tous les validateurs enregistrés
  Object.keys(validators).forEach(function (inputId) {
    if (!runValidator(inputId)) {
      hasError = true;
    }
  });

  // Vérifier la validité HTML5 des champs sans validateur custom
  var form = ev.target;
  var inputs = form.querySelectorAll(selector);
  inputs.forEach(function (input) {
    // Ignorer les champs qui ont déjà un validateur custom
    if (validators[input.id]) return;
    var wrapper = input.closest('span') || input.parentElement;
    if (!input.checkValidity()) {
      wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--invalid');
      hasError = true;
    } else {
      wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--invalid');
    }
  });
  if (hasError) {
    ev.preventDefault();
  }
}

// ========================
// INITIALISATION
// ========================
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.all-form');
  var loginForm = document.getElementById('login-form');
  var inputs = document.querySelectorAll(selector);

  // Initialiser les inputs de base
  inputs.forEach(function (input) {
    initInput(input);
    if (input.tagName === 'SELECT' && input.value) {
      var wrapper = input.closest('span') || input.parentElement;
      wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--filled');
    }
  });

  // Attacher les validateurs du formulaire de support
  attachValidator('support_name', ['input', 'blur'], 3000);
  attachValidator('support_email', ['input', 'blur'], 3000);
  attachValidator('support_category', ['change', 'blur'], 3000);
  attachValidator('support_message', ['input', 'blur'], 3000);
  attachValidator('support_imageFile', ['change'], 0);

  // Attacher les validateurs du formulaire utilisateur
  attachValidator('user_pseudo', ['input', 'blur'], 3000);
  attachValidator('user_email', ['input', 'blur'], 3000);
  attachValidator('user_plainPassword_first', ['input', 'blur'], 3000);
  attachValidator('user_plainPassword_second', ['input', 'blur'], 3000);

  // Attacher les validateurs du formulaire reset password
  attachValidator('reset_password_form_plainPassword_first', ['input', 'blur'], 3000);
  attachValidator('reset_password_form_plainPassword_second', ['input', 'blur'], 3000);

  // Attacher les validateurs du formulaire de connexion
  attachValidator('username', ['input', 'blur'], 3000);
  attachValidator('password', ['input', 'blur'], 3000);

  // Attacher les validateurs éventuels du formulaire "mot de passe oublié"
  attachValidator('forgot_password_request_form_email', ['input', 'blur'], 3000);
  attachValidator('forgot_password', ['input', 'blur'], 3000);

  // Attacher la validation au submit
  if (form) {
    form.addEventListener('submit', onSubmit);
  }

  // Attacher la validation au formulaire de connexion
  if (loginForm) {
    loginForm.addEventListener('submit', onSubmit);
  }
});

/***/ },

/***/ "./assets/scripts/security/remember_me.js"
/*!************************************************!*\
  !*** ./assets/scripts/security/remember_me.js ***!
  \************************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
document.addEventListener("DOMContentLoaded", function () {
  var box = document.getElementById("cookie-consent");
  var accept = document.getElementById("accept-cookies");
  var refuse = document.getElementById("refuse-cookies");
  var rememberCheckbox = document.getElementById("_remember_me");

  // Vérifier que les éléments existent
  if (!box || !accept || !refuse) {
    console.warn("Éléments cookie non trouvés");
    return;
  }
  var consent = localStorage.getItem("cookie-consent");

  // AFFICHAGE INITIAL
  if (!consent) {
    setTimeout(function () {
      box.classList.add("show");
    }, 600);
  } else if (consent === "refused") {
    box.classList.add("collapsed");
  }

  // DÉSACTIVER REMEMBER ME SI REFUS
  if (consent !== "accepted" && rememberCheckbox) {
    rememberCheckbox.disabled = true;
  }

  // ACCEPTER
  accept.addEventListener("click", function () {
    localStorage.setItem("cookie-consent", "accepted");
    box.classList.remove("show");
    box.classList.add("hidden");
    if (rememberCheckbox) rememberCheckbox.disabled = false;
  });

  // REFUSER
  refuse.addEventListener("click", function () {
    localStorage.setItem("cookie-consent", "refused");
    box.classList.remove("show");
    box.classList.add("collapsed");
    if (rememberCheckbox) {
      rememberCheckbox.checked = false;
      rememberCheckbox.disabled = true;
    }
  });

  // SI ON CLIQUE SUR LE BOUTON RÉDUIT → RÉAFFICHER LA BANNIÈRE
  var collapseBtn = document.getElementById("cookie-expand-btn");
  if (collapseBtn) {
    collapseBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      box.classList.remove("collapsed");
      box.classList.add("show");
    });
  }

  // SI ON CLIQUE SUR REMEMBER ME APRÈS UN REFUS → RÉAFFICHER LA BANNIÈRE
  if (rememberCheckbox) {
    var rememberLabel = document.querySelector('label[for="_remember_me"]');
    var clickHandler = function clickHandler(e) {
      var currentConsent = localStorage.getItem("cookie-consent");
      if (currentConsent === "refused") {
        e.preventDefault();
        e.stopPropagation();
        rememberCheckbox.checked = false;
        box.classList.remove("collapsed");
        box.classList.add("show");
        return false;
      }
    };
    rememberCheckbox.addEventListener("click", clickHandler);
    if (rememberLabel) {
      rememberLabel.addEventListener("click", clickHandler);
    }
  }
});

/***/ },

/***/ "./assets/scripts/security/reset-btn.js"
/*!**********************************************!*\
  !*** ./assets/scripts/security/reset-btn.js ***!
  \**********************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.querySelectorAll('.reset-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    var input = button.previousElementSibling;
    if (input && input.dataset.original !== undefined) {
      input.value = input.dataset.original;
      input.dispatchEvent(new Event('change'));
    }
  });
});

/***/ },

/***/ "./assets/styles/app.scss"
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_leaflet_dist_leaflet_css-node_modules_core-js_internals_add-to-unscopabl-467c3d","vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-27c7a3"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNuQyxJQUFNMEYsS0FBSyxHQUFHMkUsTUFBTSxDQUFDQyxzQkFBc0I7SUFDM0MsSUFBSTVFLEtBQUssSUFBSUEsS0FBSyxDQUFDbEYsT0FBTyxDQUFDK0osUUFBUSxLQUFLNUksU0FBUyxFQUFFO01BQy9DK0QsS0FBSyxDQUFDbkYsS0FBSyxHQUFHbUYsS0FBSyxDQUFDbEYsT0FBTyxDQUFDK0osUUFBUTtNQUNwQzdFLEtBQUssQ0FBQzhFLGFBQWEsQ0FBQyxJQUFJQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUM7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDUkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2dhbWUvdXRpbHMvZmFjdGlvbi1nYW1lLWNob2ljZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9sYXlvdXQvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbGF5b3V0L3N3aXRjaF9sYXlvdXRfc2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9zZWN1cml0eS9mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3NlY3VyaXR5L3JlbWVtYmVyX21lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3NlY3VyaXR5L3Jlc2V0LWJ0bi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnO1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcyc7XHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXHJcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXHJcbiAqL1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbmltcG9ydCAnLi9zY3JpcHRzL2xheW91dC9kcm9wZG93bi5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL2xheW91dC9zd2l0Y2hfbGF5b3V0X3NpZGViYXIuanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9zZWN1cml0eS9mb3JtLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvc2VjdXJpdHkvcmVtZW1iZXJfbWUuanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9zZWN1cml0eS9yZXNldC1idG4uanMnO1xyXG5cclxuXHJcbi8vIEdhbWUtc3BlY2lmaWMgc2NyaXB0cyAob25seSBsb2FkZWQgb24gZ2FtZSBwYWdlcylcclxuaW1wb3J0ICcuL3NjcmlwdHMvZ2FtZS91dGlscy9mYWN0aW9uLWdhbWUtY2hvaWNlLmpzJztcclxuXHJcbmltcG9ydCBcImxlYWZsZXQvZGlzdC9sZWFmbGV0LmNzc1wiOyIsImZ1bmN0aW9uIGluaXRTZWxlY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZS1jYXJkJykuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICBjb25zdCByYWRpbyA9IGNhcmQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XHJcbiAgICAgICAgaWYgKHJhZGlvKSB7XHJcbiAgICAgICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLWNhcmQnKS5mb3JFYWNoKGMgPT4gYy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0R2FtZSh0aGlzLnZhbHVlLCBjYXJkLmRhdGFzZXQuZ2FtZUxhYmVsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhY3Rpb24tY2FyZCcpLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmFkaW8gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xyXG4gICAgICAgIGlmIChyYWRpbykge1xyXG4gICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFjdGlvbi1jYXJkJykuZm9yRWFjaChjID0+IGMuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSBjYXJkLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEJvdXRvbiBcIkNoYW5nZXIgZGUgZ2FtZVwiXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWNoYW5nZS1nYW1lJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRHYW1lU2VsZWN0aW9uKTtcclxuXHJcbiAgICAvLyBBdSBjaGFyZ2VtZW50IHNpIHVuZSBnYW1lIGVzdCBkw6lqw6AgY29jaMOpZVxyXG4gICAgY29uc3QgY2hlY2tlZEdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1jYXJkIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJyk7XHJcbiAgICBpZiAoY2hlY2tlZEdhbWUpIHtcclxuICAgICAgICBjb25zdCBjYXJkID0gY2hlY2tlZEdhbWUuY2xvc2VzdCgnLmdhbWUtY2FyZCcpO1xyXG4gICAgICAgIGNhcmQ/LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgc2VsZWN0R2FtZShjaGVja2VkR2FtZS52YWx1ZSwgY2FyZD8uZGF0YXNldC5nYW1lTGFiZWwgPz8gJycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RHYW1lKGdhbWVJZCwgZ2FtZUxhYmVsKSB7XHJcbiAgICAvLyBDaGFuZ2VyIGxlIHRpdHJlXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS10aXRsZScpLnRleHRDb250ZW50ID0gJ0Nob2lzaXNzZXogdm90cmUgZmFjdGlvbic7XHJcblxyXG4gICAgLy8gUsOpZHVpcmUgbGEgZ3JpbGxlIGRlcyBnYW1lcyDihpIgYWZmaWNoZXIgbGUgcsOpc3Vtw6kgY29tcGFjdFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVzLWdyaWQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2VsZWN0ZWQtc3VtbWFyeScpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zZWxlY3RlZC1sYWJlbCcpLnRleHRDb250ZW50ID0gZ2FtZUxhYmVsO1xyXG5cclxuICAgIC8vIEFmZmljaGVyIGxhIHNlY3Rpb24gZmFjdGlvbnMgZXQgbGUgc8OpcGFyYXRldXJcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWN0aW9ucy1zZWN0aW9uJykuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idG4nKS5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcblxyXG4gICAgaGFuZGxlR2FtZVNlbGVjdGlvbihnYW1lSWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEdhbWVTZWxlY3Rpb24oKSB7XHJcbiAgICAvLyBSZW1ldHRyZSBsZSB0aXRyZSBpbml0aWFsXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS10aXRsZScpLnRleHRDb250ZW50ID0gJ0Nob2lzaXNzZXogdW5lIHBhcnRpZSc7XHJcblxyXG4gICAgLy8gUsOpYWZmaWNoZXIgbGEgZ3JpbGxlIGRlcyBnYW1lc1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVzLWdyaWQnKS5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zZWxlY3RlZC1zdW1tYXJ5Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAvLyBNYXNxdWVyIGZhY3Rpb25zXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjdGlvbnMtc2VjdGlvbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWJ0bicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgLy8gRMOpY29jaGVyIHRvdXRlcyBsZXMgZ2FtZXNcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLWNhcmQnKS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgIGMuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICBjb25zdCByID0gYy5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcclxuICAgICAgICBpZiAocikgci5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSw6lpbml0aWFsaXNlciBsZXMgZmFjdGlvbnNcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWN0aW9uLWNhcmQnKS5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICBjb25zdCByID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcclxuICAgICAgICBpZiAocikgci5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlR2FtZVNlbGVjdGlvbihnYW1lSWQpIHtcclxuICAgIGNvbnN0IGV4aXN0aW5nID0gd2luZG93LmV4aXN0aW5nUGxheWVycyA/PyB7fTtcclxuICAgIGNvbnN0IGZhY3Rpb25DYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWN0aW9uLWNhcmQnKTtcclxuICAgIGNvbnN0IGZhY3Rpb25zR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYWN0aW9ucy1ncmlkJyk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nW2dhbWVJZF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnN0IHBsYXllckZhY3Rpb24gPSBleGlzdGluZ1tnYW1lSWRdO1xyXG4gICAgICAgIGxldCB2aXNpYmxlQ291bnQgPSAwO1xyXG5cclxuICAgICAgICBmYWN0aW9uQ2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmFkaW8gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xyXG4gICAgICAgICAgICBjb25zdCBmYWN0aW9uQ29kZSA9IHJhZGlvPy5kYXRhc2V0LmNvZGU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmFjdGlvbkNvZGUgPT09IHBsYXllckZhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZGlvKSByYWRpby5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZpc2libGVDb3VudCsrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhZGlvKSByYWRpby5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGZhY3Rpb25zR3JpZCkge1xyXG4gICAgICAgICAgICBpZiAodmlzaWJsZUNvdW50ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBmYWN0aW9uc0dyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICdtaW5tYXgoMCwgNDAwcHgpJztcclxuICAgICAgICAgICAgICAgIGZhY3Rpb25zR3JpZC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZpc2libGVDb3VudCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgZmFjdGlvbnNHcmlkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAncmVwZWF0KDIsIG1pbm1heCgwLCA0MDBweCkpJztcclxuICAgICAgICAgICAgICAgIGZhY3Rpb25zR3JpZC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmFjdGlvbnNHcmlkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnJztcclxuICAgICAgICAgICAgICAgIGZhY3Rpb25zR3JpZC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmFjdGlvbkNhcmRzLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlvID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcclxuICAgICAgICAgICAgaWYgKHJhZGlvKSByYWRpby5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChmYWN0aW9uc0dyaWQpIHtcclxuICAgICAgICAgICAgZmFjdGlvbnNHcmlkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnJztcclxuICAgICAgICAgICAgZmFjdGlvbnNHcmlkLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdFNlbGVjdGlvbik7XHJcbn0gZWxzZSB7XHJcbiAgICBpbml0U2VsZWN0aW9uKCk7XHJcbn0iLCJmdW5jdGlvbiBhdHRhY2hIb3ZlckRyb3Bkb3duKHRvZ2dsZVNlbGVjdG9yKSB7XHJcbiAgICBjb25zdCB0b2dnbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0b2dnbGVTZWxlY3Rvcik7XHJcblxyXG4gICAgdG9nZ2xlcy5mb3JFYWNoKCh0b2dnbGUpID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IHRvZ2dsZS5kYXRhc2V0LmRyb3Bkb3duVGFyZ2V0O1xyXG4gICAgICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3Rvcik7XHJcbiAgICAgICAgaWYgKCFkcm9wZG93bkNvbnRlbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICBsZXQgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpc09wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG4gICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVhbGx5SGlkZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBoaWRlRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChyZWFsbHlIaWRlRHJvcGRvd24sIDE1MCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVhbGx5SGlkZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzaG93RHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIERlc2t0b3AgOiBob3ZlclxyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93RHJvcGRvd24pO1xyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoaWRlRHJvcGRvd24pO1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93RHJvcGRvd24pO1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoaWRlRHJvcGRvd24pO1xyXG5cclxuICAgICAgICAvLyBNb2JpbGUgOiBjbGljay90b3VjaFxyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlRHJvcGRvd24pO1xyXG4gICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b2dnbGVEcm9wZG93biwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgLy8gRmVybWVyIHNpIG9uIGNsaXF1ZSBhaWxsZXVyc1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzT3BlbiAmJiAhdG9nZ2xlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRyb3Bkb3duQ29udGVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVhbGx5SGlkZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc09wZW4gJiYgIXRvZ2dsZS5jb250YWlucyhldmVudC50YXJnZXQpICYmICFkcm9wZG93bkNvbnRlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0YWNoTmF2YmFyRHJvcGRvd24oKSB7XHJcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhci1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICBjb25zdCBuYXZiYXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJfbWVudVwiKTtcclxuICAgIGNvbnN0IG5hdmJhckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd24tbmF2YmFyXCIpO1xyXG5cclxuICAgIGlmICghdG9nZ2xlIHx8ICFuYXZiYXJNZW51IHx8ICFuYXZiYXJDb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB0YXJnZXRTZWxlY3RvciA9IHRvZ2dsZS5kYXRhc2V0LmRyb3Bkb3duVGFyZ2V0O1xyXG4gICAgaWYgKCF0YXJnZXRTZWxlY3RvcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xyXG4gICAgaWYgKCFkcm9wZG93bkNvbnRlbnQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCByZWdpb25FbHMgPSBbdG9nZ2xlLCBuYXZiYXJDb250YWluZXIsIGRyb3Bkb3duQ29udGVudF07XHJcblxyXG4gICAgbGV0IGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgIGxldCBpc0Nsb3NpbmcgPSBmYWxzZTtcclxuICAgIGxldCBpc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBpc0luUmVnaW9uID0gKGVsKSA9PlxyXG4gICAgICAgIHJlZ2lvbkVscy5zb21lKChub2RlKSA9PiBub2RlICYmIG5vZGUuY29udGFpbnMoZWwpKTtcclxuXHJcbiAgICBjb25zdCBzaG93QWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpc0Nsb3NpbmcgPSBmYWxzZTtcclxuICAgICAgICBpc09wZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcInNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcbiAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG5cclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbWVudS1hbmltLXNob3dcIik7XHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1oaWRlXCIpO1xyXG5cclxuICAgICAgICBuYXZiYXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0taGlkZVwiKTtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW5hdmJhci1hbmltLXNob3dcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlYWxseUhpZGVBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaXNDbG9zaW5nID0gdHJ1ZTtcclxuICAgICAgICBpc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5hbmltYXRpb25OYW1lID09PSBcImRvbnQtc2hvdy1jb250ZW50XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaXNDbG9zaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcblxyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0tc2hvd1wiKTtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW5hdmJhci1hbmltLWhpZGVcIik7XHJcblxyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItbWVudS1hbmltLXNob3dcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uTGVhdmVSZWdpb24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0byA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQ7XHJcbiAgICAgICAgaWYgKHRvICYmIGlzSW5SZWdpb24odG8pKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQocmVhbGx5SGlkZUFsbCwgMTUwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlTmF2YmFyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIERlc2t0b3AgOiBob3ZlclxyXG4gICAgcmVnaW9uRWxzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0FsbCk7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgb25MZWF2ZVJlZ2lvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBNb2JpbGUgOiBjbGljay90b3VjaFxyXG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVOYXZiYXIpO1xyXG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvZ2dsZU5hdmJhciwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcclxuXHJcbiAgICAvLyBGZXJtZXIgc2kgb24gY2xpcXVlIGFpbGxldXJzXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzT3BlbiAmJiAhaXNJblJlZ2lvbihldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFsbHlIaWRlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzT3BlbiAmJiAhaXNJblJlZ2lvbihldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFsbHlIaWRlQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGF0dGFjaE5hdmJhckRyb3Bkb3duKCk7XHJcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLmxhbmd1YWdlLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuICAgIGF0dGFjaEhvdmVyRHJvcGRvd24oXCIudGhlbWUtZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG59KTsiLCJ3aW5kb3cuc3dpdGNoVmlldyA9IGZ1bmN0aW9uKHZpZXdJZCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItdmlldycpLmZvckVhY2godiA9PiB2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlld0lkKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG59OyIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFZBTElEQVRJT04gR8OJTsOJUklRVUUgREVTIEZPUk1VTEFJUkVTXHJcbiAgIEVtYWlscyArIE1vdHMgZGUgcGFzc2UgKyBQc2V1ZG9zICsgQ3VzdG9tIHZhbGlkYXRvcnNcclxuICAgQ29tcGF0aWJsZSBTdXBwb3J0IC8gVXNlciAvIExvZ2luIC8gRm9yZ290UGFzc3dvcmRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgc2VsZWN0LCB0ZXh0YXJlYSc7XHJcbmNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGb25jdGlvbnMgZCdhcHBhcmVuY2UgZGVzIGlucHV0c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBpbml0SW5wdXQoaW5wdXRFbCkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0RWwuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0RWwucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoaW5wdXRFbC52YWx1ZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb2N1cyk7XHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xyXG5cclxuICAgIC8vIFBvdXIgbGUgcmVzcG9uc2l2ZSBtb2JpbGVcclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkJsdXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkZvY3VzKGV2KSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBldi50YXJnZXQuY2xvc2VzdCgnc3BhbicpIHx8IGV2LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmNsYXNzTGlzdCkge1xyXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkJsdXIoZXYpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1maWxsZWQnLCAnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpdmVWYWxpZGF0aW9uKGV2KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU3lzdMOobWUgZGUgdmFsaWRhdGlvbiBnw6luw6lyaXF1ZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCB2YWxpZGF0b3JzID0ge307XHJcbmNvbnN0IHZhbGlkYXRpb25UaW1lcnMgPSB7fTsgLy8gU3RvY2thZ2UgZGVzIHRpbWVyc1xyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgdmFsaWRhdGVGbikge1xyXG4gICAgdmFsaWRhdG9yc1tpbnB1dElkXSA9IHsgZXJyb3JJZCwgdmFsaWRhdGVGbiB9O1xyXG59XHJcblxyXG4vLyAtIHRydWUgICAgICAgICAgICAgICAgLT4gcGFzIGQnZXJyZXVyXHJcbi8vIC0gc3RyaW5nICAgICAgICAgICAgICAgLT4gbWVzc2FnZSB1bmlxdWUgKGNvbXBvcnRlbWVudCBleGlzdGFudClcclxuLy8gLSBzdHJpbmdbXSAgICAgICAgICAgICAgLT4gbGlzdGUgw6AgcHVjZXMsIHVuZSBsaWduZSBwYXIgcsOoZ2xlIG5vbiByZXNwZWN0w6llXHJcbmZ1bmN0aW9uIGJ1aWxkRXJyb3JNYXJrdXAocmVzdWx0KSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHJldHVybiAnJztcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHJlc3VsdC5tYXAobGluZSA9PiBgPGxpPiR7bGluZX08L2xpPmApLmpvaW4oJycpO1xyXG4gICAgICAgIHJldHVybiBgPHVsIGNsYXNzPVwiZm9ybS1lcnJvci1saXN0XCI+JHtpdGVtc308L3VsPmA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBydW5WYWxpZGF0b3IoaW5wdXRJZCkge1xyXG4gICAgY29uc3QgY29uZmlnID0gdmFsaWRhdG9yc1tpbnB1dElkXTtcclxuICAgIGlmICghY29uZmlnKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xyXG4gICAgY29uc3QgZXJyb3JCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuZXJyb3JJZCk7XHJcblxyXG4gICAgaWYgKCFpbnB1dCB8fCAhZXJyb3JCb3gpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBlcnJvckJveC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICBlcnJvckJveC50ZXh0Q29udGVudCA9ICdcXHUwMEEwJztcclxuICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbmZpZy52YWxpZGF0ZUZuKGlucHV0LnZhbHVlLCBpbnB1dCk7XHJcblxyXG4gICAgY29uc3QgaXNWYWxpZCA9IHJlc3VsdCA9PT0gdHJ1ZSB8fCAoQXJyYXkuaXNBcnJheShyZXN1bHQpICYmIHJlc3VsdC5sZW5ndGggPT09IDApO1xyXG4gXHJcbiAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICBlcnJvckJveC5pbm5lckhUTUwgPSBidWlsZEVycm9yTWFya3VwKHJlc3VsdCk7XHJcbiAgICAgICAgZXJyb3JCb3guc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaFZhbGlkYXRvcihpbnB1dElkLCBldmVudFR5cGVzID0gWydpbnB1dCcsICdibHVyJ10sIGRlbGF5TXMgPSAzMDAwKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xyXG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xyXG5cclxuICAgIGV2ZW50VHlwZXMuZm9yRWFjaChldmVudFR5cGUgPT4ge1xyXG4gICAgICAgIGlmIChldmVudFR5cGUgPT09ICdpbnB1dCcpIHtcclxuICAgICAgICAgICAgLy8gUG91ciBsJ8OpdsOpbmVtZW50ICdpbnB1dCcsIG9uIGFqb3V0ZSB1biBkw6lsYWkgZGUgMyBzZWNvbmRlc1xyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgICAgICB9LCBkZWxheU1zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdjaGFuZ2UnKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgJ2NoYW5nZScsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdibHVyJykge1xyXG4gICAgICAgICAgICAvLyBQb3VyICdibHVyJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBam91dGVyICd0b3VjaGVuZCcgcG91ciBtb2JpbGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFBldGl0IGTDqWxhaSBwb3VyIMOpdml0ZXIgbGVzIGRvdWJsZXMgZMOpY2xlbmNoZW1lbnRzXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJ1blZhbGlkYXRvcihpbnB1dElkKSwgMTAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgLy8gUG91ciAnY2xpY2snLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIFBTRVVET1MgKGfDqW7DqXJpcXVlcylcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIHQoa2V5KSB7XHJcbiAgICByZXR1cm4gKHdpbmRvdy5hcHBUcmFuc2xhdGlvbnMgJiYgd2luZG93LmFwcFRyYW5zbGF0aW9uc1trZXldKSB8fCBrZXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyUHNldWRvKGlucHV0SWQsIGVycm9ySWQsIG1pbkxlbmd0aCA9IDMsIG1heExlbmd0aCA9IDI1KSB7XHJcbiAgICByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCAodmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgncHNldWRvX3JlcXVpcmVkJyk7XHJcbiAgICAgICAgaWYgKHYubGVuZ3RoIDwgbWluTGVuZ3RoKSByZXR1cm4gdCgncHNldWRvX21pbl8zJyk7XHJcbiAgICAgICAgaWYgKHYubGVuZ3RoID4gbWF4TGVuZ3RoKSByZXR1cm4gdCgncHNldWRvX21heF8yNScpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHBzZXVkb0ZpZWxkcyA9IFtcclxuICAgIHsgaW5wdXRJZDogXCJzdXBwb3J0X25hbWVcIiwgZXJyb3JJZDogXCJwc2V1ZG8tZXJyb3JcIiwgbWluTGVuZ3RoOiAzLCBtYXhMZW5ndGg6IDI1IH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcl9wc2V1ZG9cIiwgZXJyb3JJZDogXCJ1c2VyX3BzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMsIG1heExlbmd0aDogMjUgfSxcclxuXTtcclxuXHJcbnBzZXVkb0ZpZWxkcy5mb3JFYWNoKGYgPT4gcmVnaXN0ZXJQc2V1ZG8oZi5pbnB1dElkLCBmLmVycm9ySWQsIGYubWluTGVuZ3RoLCBmLm1heExlbmd0aCkpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgRU1BSUxTIChnw6luw6lyaXF1ZXMgcG91ciB0b3V0IGxlIHNpdGUpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlckVtYWlsKGlucHV0SWQsIGVycm9ySWQpIHtcclxuICAgIHJlZ2lzdGVyVmFsaWRhdG9yKGlucHV0SWQsIGVycm9ySWQsICh2YWx1ZSwgaW5wdXQpID0+IHtcclxuICAgICAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgnZW1haWxfcmVxdWlyZWQnKTtcclxuICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkgcmV0dXJuIHQoJ2VtYWlsX2ludmFsaWQnKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBlbWFpbEZpZWxkcyA9IFtcclxuICAgIHsgaW5wdXRJZDogXCJzdXBwb3J0X2VtYWlsXCIsIGVycm9ySWQ6IFwiZW1haWwtZXJyb3JcIiB9LFxyXG4gICAgeyBpbnB1dElkOiBcInVzZXJfZW1haWxcIiwgZXJyb3JJZDogXCJ1c2VyX2VtYWlsLWVycm9yXCIgfSxcclxuICAgIHsgaW5wdXRJZDogXCJ1c2VybmFtZVwiLCBlcnJvcklkOiBcInVzZXJuYW1lLWVycm9yXCIgfSxcclxuICAgIHsgaW5wdXRJZDogXCJmb3Jnb3RfcGFzc3dvcmRfcmVxdWVzdF9mb3JtX2VtYWlsXCIsIGVycm9ySWQ6IFwiZm9yZ290X2VtYWlsLWVycm9yXCIgfVxyXG5dO1xyXG5cclxuZW1haWxGaWVsZHMuZm9yRWFjaChmID0+IHJlZ2lzdGVyRW1haWwoZi5pbnB1dElkLCBmLmVycm9ySWQpKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIE1PVFMgREUgUEFTU0UgKGfDqW7DqXJpcXVlcylcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIHBhc3N3b3JkQ2hlY2tsaXN0KHZhbHVlKSB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWU7XHJcbiAgICBjb25zdCBlcnJvcnMgPSBbXTtcclxuIFxyXG4gICAgaWYgKHYubGVuZ3RoIDwgOCkgZXJyb3JzLnB1c2godCgncGFzc3dvcmRfbGVuZ3RoXzgnKSk7XHJcbiAgICBpZiAoIS9bQS1aXS8udGVzdCh2KSkgZXJyb3JzLnB1c2godCgncGFzc3dvcmRfdXBwZXInKSk7XHJcbiAgICBpZiAoIS9cXGQvLnRlc3QodikpIGVycm9ycy5wdXNoKHQoJ3Bhc3N3b3JkX251bWJlcicpKTtcclxuICAgIGlmICghL1tcXFdfXS8udGVzdCh2KSkgZXJyb3JzLnB1c2godCgncGFzc3dvcmRfc3BlY2lhbCcpKTtcclxuIFxyXG4gICAgcmV0dXJuIGVycm9ycztcclxufVxyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJ1c2VyX3BsYWluUGFzc3dvcmRfZmlyc3RcIiwgXCJ1c2VyX3Bhc3N3b3JkX2ZpcnN0LWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHBhc3N3b3JkQ2hlY2tsaXN0KHZhbHVlKTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInVzZXJfcGxhaW5QYXNzd29yZF9zZWNvbmRcIiwgXCJ1c2VyX3Bhc3N3b3JkX3NlY29uZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyX3BsYWluUGFzc3dvcmRfZmlyc3RcIik7XHJcbiAgICBpZiAoIWZpcnN0KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfY29uZmlybV9yZXF1aXJlZCcpO1xyXG4gICAgaWYgKHZhbHVlICE9PSBmaXJzdC52YWx1ZSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX21pc21hdGNoJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdFwiLCBcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIHJldHVybiBwYXNzd29yZENoZWNrbGlzdCh2YWx1ZSk7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kXCIsIFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3RcIik7XHJcbiAgICBpZiAoIWZpcnN0KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfY29uZmlybV9yZXF1aXJlZCcpO1xyXG4gICAgaWYgKHZhbHVlICE9PSBmaXJzdC52YWx1ZSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX21pc21hdGNoJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyBNb3QgZGUgcGFzc2UgZGUgY29ubmV4aW9uXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwicGFzc3dvcmRcIiwgXCJwYXNzd29yZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9yZXF1aXJlZCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gTW90IGRlIHBhc3NlIFwib3VibGnDqVwiIChub3V2ZWF1IG1vdCBkZSBwYXNzZSwgc2kgdHUgYXMgdW4gY2hhbXBzIGTDqWRpw6kpXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwiZm9yZ290X3Bhc3N3b3JkXCIsIFwiZm9yZ290X3Bhc3N3b3JkLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX3JlcXVpcmVkJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBTVVBQT1JUIFNVUFBMw4lNRU5UQUlSRVMg4oaSIGNhdGVnb3J5IC8gbWVzc2FnZSAvIGltYWdlXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInN1cHBvcnRfY2F0ZWdvcnlcIiwgXCJzZWxlY3RlLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdzdXBwb3J0X2NhdGVnb3J5X3JlcXVpcmVkJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInN1cHBvcnRfbWVzc2FnZVwiLCBcInRleHQtYXJlYS1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ3N1cHBvcnRfbWVzc2FnZV9yZXF1aXJlZCcpO1xyXG4gICAgaWYgKHYubGVuZ3RoIDwgMTApIHJldHVybiB0KCdzdXBwb3J0X21lc3NhZ2VfbWluXzEwJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyBWQUxJREFUSU9OIERFIEzigJlJTUFHRSAoc3VwcG9ydClcclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X2ltYWdlRmlsZVwiLCBcImltYWdlLWVycm9yXCIsICh2YWx1ZSwgaW5wdXQpID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBpbnB1dC5maWxlc1swXTtcclxuICAgIGlmICghZmlsZSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY29uc3QgYWxsb3dlZCA9IFtcImltYWdlL2pwZWdcIiwgXCJpbWFnZS9qcGdcIiwgXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS93ZWJwXCJdO1xyXG4gICAgY29uc3QgbWF4ID0gMiAqIDEwMjQgKiAxMDI0O1xyXG5cclxuICAgIGlmICghYWxsb3dlZC5pbmNsdWRlcyhmaWxlLnR5cGUpKSByZXR1cm4gdCgnaW1hZ2VfdHlwZScpO1xyXG4gICAgaWYgKGZpbGUuc2l6ZSA+IG1heCkgcmV0dXJuIHQoJ2ltYWdlX3NpemUnKTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU09VTUlTU0lPTiBEVSBGT1JNVUxBSVJFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBvblN1Ym1pdChldikge1xyXG4gICAgbGV0IGhhc0Vycm9yID0gZmFsc2U7XHJcblxyXG4gICAgLy8gQW5udWxlciB0b3VzIGxlcyB0aW1lcnMgZW4gY291cnNcclxuICAgIE9iamVjdC5rZXlzKHZhbGlkYXRpb25UaW1lcnMpLmZvckVhY2goaW5wdXRJZCA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVsOpcmlmaWVyIHRvdXMgbGVzIHZhbGlkYXRldXJzIGVucmVnaXN0csOpc1xyXG4gICAgT2JqZWN0LmtleXModmFsaWRhdG9ycykuZm9yRWFjaCgoaW5wdXRJZCkgPT4ge1xyXG4gICAgICAgIGlmICghcnVuVmFsaWRhdG9yKGlucHV0SWQpKSB7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBWw6lyaWZpZXIgbGEgdmFsaWRpdMOpIEhUTUw1IGRlcyBjaGFtcHMgc2FucyB2YWxpZGF0ZXVyIGN1c3RvbVxyXG4gICAgY29uc3QgZm9ybSA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblxyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgLy8gSWdub3JlciBsZXMgY2hhbXBzIHF1aSBvbnQgZMOpasOgIHVuIHZhbGlkYXRldXIgY3VzdG9tXHJcbiAgICAgICAgaWYgKHZhbGlkYXRvcnNbaW5wdXQuaWRdKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaGFzRXJyb3IpIHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5JVElBTElTQVRJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XHJcbiAgICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZm9ybScpO1xyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblxyXG4gICAgLy8gSW5pdGlhbGlzZXIgbGVzIGlucHV0cyBkZSBiYXNlXHJcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICBpbml0SW5wdXQoaW5wdXQpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXQudGFnTmFtZSA9PT0gJ1NFTEVDVCcgJiYgaW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIGRlIHN1cHBvcnRcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9uYW1lJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2NhdGVnb3J5JywgWydjaGFuZ2UnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9tZXNzYWdlJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2ltYWdlRmlsZScsIFsnY2hhbmdlJ10sIDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIHV0aWxpc2F0ZXVyXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcHNldWRvJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BsYWluUGFzc3dvcmRfZmlyc3QnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcGxhaW5QYXNzd29yZF9zZWNvbmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgcmVzZXQgcGFzc3dvcmRcclxuICAgIGF0dGFjaFZhbGlkYXRvcigncmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0JywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIGRlIGNvbm5leGlvblxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VybmFtZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigncGFzc3dvcmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIMOpdmVudHVlbHMgZHUgZm9ybXVsYWlyZSBcIm1vdCBkZSBwYXNzZSBvdWJsacOpXCJcclxuICAgIGF0dGFjaFZhbGlkYXRvcignZm9yZ290X3Bhc3N3b3JkX3JlcXVlc3RfZm9ybV9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignZm9yZ290X3Bhc3N3b3JkJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxhIHZhbGlkYXRpb24gYXUgc3VibWl0XHJcbiAgICBpZiAoZm9ybSkge1xyXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxhIHZhbGlkYXRpb24gYXUgZm9ybXVsYWlyZSBkZSBjb25uZXhpb25cclxuICAgIGlmIChsb2dpbkZvcm0pIHtcclxuICAgICAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQpO1xyXG4gICAgfVxyXG59KTsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1jb25zZW50XCIpO1xyXG4gICAgY29uc3QgYWNjZXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtY29va2llc1wiKTtcclxuICAgIGNvbnN0IHJlZnVzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVmdXNlLWNvb2tpZXNcIik7XHJcbiAgICBjb25zdCByZW1lbWJlckNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfcmVtZW1iZXJfbWVcIik7XHJcblxyXG4gICAgLy8gVsOpcmlmaWVyIHF1ZSBsZXMgw6lsw6ltZW50cyBleGlzdGVudFxyXG4gICAgaWYgKCFib3ggfHwgIWFjY2VwdCB8fCAhcmVmdXNlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiw4lsw6ltZW50cyBjb29raWUgbm9uIHRyb3V2w6lzXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25zZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWUtY29uc2VudFwiKTtcclxuXHJcbiAgICAvLyBBRkZJQ0hBR0UgSU5JVElBTFxyXG4gICAgaWYgKCFjb25zZW50KSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICB9LCA2MDApO1xyXG4gICAgfSBlbHNlIGlmIChjb25zZW50ID09PSBcInJlZnVzZWRcIikge1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIETDiVNBQ1RJVkVSIFJFTUVNQkVSIE1FIFNJIFJFRlVTXHJcbiAgICBpZiAoY29uc2VudCAhPT0gXCJhY2NlcHRlZFwiICYmIHJlbWVtYmVyQ2hlY2tib3gpIHtcclxuICAgICAgICByZW1lbWJlckNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBQ0NFUFRFUlxyXG4gICAgYWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWUtY29uc2VudFwiLCBcImFjY2VwdGVkXCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBpZiAocmVtZW1iZXJDaGVja2JveCkgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUkVGVVNFUlxyXG4gICAgcmVmdXNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWUtY29uc2VudFwiLCBcInJlZnVzZWRcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xyXG5cclxuICAgICAgICBpZiAocmVtZW1iZXJDaGVja2JveCkge1xyXG4gICAgICAgICAgICByZW1lbWJlckNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU0kgT04gQ0xJUVVFIFNVUiBMRSBCT1VUT04gUsOJRFVJVCDihpIgUsOJQUZGSUNIRVIgTEEgQkFOTknDiFJFXHJcbiAgICBjb25zdCBjb2xsYXBzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWV4cGFuZC1idG5cIik7XHJcbiAgICBpZiAoY29sbGFwc2VCdG4pIHtcclxuICAgICAgICBjb2xsYXBzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJIE9OIENMSVFVRSBTVVIgUkVNRU1CRVIgTUUgQVBSw4hTIFVOIFJFRlVTIOKGkiBSw4lBRkZJQ0hFUiBMQSBCQU5OScOIUkVcclxuICAgIGlmIChyZW1lbWJlckNoZWNrYm94KSB7XHJcbiAgICAgICAgY29uc3QgcmVtZW1iZXJMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cIl9yZW1lbWJlcl9tZVwiXScpO1xyXG4gICAgICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb25zZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWUtY29uc2VudFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q29uc2VudCA9PT0gXCJyZWZ1c2VkXCIpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZW1lbWJlckNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVtZW1iZXJDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICAgICAgICBpZiAocmVtZW1iZXJMYWJlbCkge1xyXG4gICAgICAgICAgICByZW1lbWJlckxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7IiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2V0LWJ0bicpLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsO1xyXG4gICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiaW5pdFNlbGVjdGlvbiIsIl9kb2N1bWVudCRnZXRFbGVtZW50QiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjYXJkIiwicmFkaW8iLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImMiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjaGVja2VkIiwiYWRkIiwic2VsZWN0R2FtZSIsInZhbHVlIiwiZGF0YXNldCIsImdhbWVMYWJlbCIsImdldEVsZW1lbnRCeUlkIiwicmVzZXRHYW1lU2VsZWN0aW9uIiwiY2hlY2tlZEdhbWUiLCJfY2FyZCRkYXRhc2V0JGdhbWVMYWIiLCJjbG9zZXN0IiwiZ2FtZUlkIiwidGV4dENvbnRlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJoYW5kbGVHYW1lU2VsZWN0aW9uIiwiciIsIl93aW5kb3ckZXhpc3RpbmdQbGF5ZSIsImV4aXN0aW5nIiwid2luZG93IiwiZXhpc3RpbmdQbGF5ZXJzIiwiZmFjdGlvbkNhcmRzIiwiZmFjdGlvbnNHcmlkIiwidW5kZWZpbmVkIiwicGxheWVyRmFjdGlvbiIsInZpc2libGVDb3VudCIsImZhY3Rpb25Db2RlIiwiY29kZSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJqdXN0aWZ5Q29udGVudCIsInJlYWR5U3RhdGUiLCJhdHRhY2hIb3ZlckRyb3Bkb3duIiwidG9nZ2xlU2VsZWN0b3IiLCJ0b2dnbGVzIiwidG9nZ2xlIiwidGFyZ2V0U2VsZWN0b3IiLCJkcm9wZG93blRhcmdldCIsImRyb3Bkb3duQ29udGVudCIsImhpZGVUaW1lb3V0IiwiaXNPcGVuIiwic2hvd0Ryb3Bkb3duIiwiY2xlYXJUaW1lb3V0IiwiYW5pbWF0aW9uIiwicmVhbGx5SGlkZURyb3Bkb3duIiwiaGFuZGxlciIsImV2ZW50IiwiYW5pbWF0aW9uTmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoaWRlRHJvcGRvd24iLCJzZXRUaW1lb3V0IiwidG9nZ2xlRHJvcGRvd24iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInBhc3NpdmUiLCJjb250YWlucyIsInRhcmdldCIsImF0dGFjaE5hdmJhckRyb3Bkb3duIiwibmF2YmFyTWVudSIsIm5hdmJhckNvbnRhaW5lciIsInJlZ2lvbkVscyIsImlzQ2xvc2luZyIsImlzSW5SZWdpb24iLCJlbCIsInNvbWUiLCJub2RlIiwic2hvd0FsbCIsInJlYWxseUhpZGVBbGwiLCJvbkxlYXZlUmVnaW9uIiwidG8iLCJyZWxhdGVkVGFyZ2V0IiwidG9nZ2xlTmF2YmFyIiwic3dpdGNoVmlldyIsInZpZXdJZCIsInYiLCJzZWxlY3RvciIsImlucHV0cyIsImZvcm0iLCJpbml0SW5wdXQiLCJpbnB1dEVsIiwid3JhcHBlciIsInBhcmVudEVsZW1lbnQiLCJ0cmltIiwib25Gb2N1cyIsIm9uQmx1ciIsImV2IiwicGFyZW50IiwiaW5wdXQiLCJsaXZlVmFsaWRhdGlvbiIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGF0b3JzIiwidmFsaWRhdGlvblRpbWVycyIsInJlZ2lzdGVyVmFsaWRhdG9yIiwiaW5wdXRJZCIsImVycm9ySWQiLCJ2YWxpZGF0ZUZuIiwiYnVpbGRFcnJvck1hcmt1cCIsInJlc3VsdCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIml0ZW1zIiwibWFwIiwibGluZSIsImNvbmNhdCIsImpvaW4iLCJydW5WYWxpZGF0b3IiLCJjb25maWciLCJlcnJvckJveCIsInZpc2liaWxpdHkiLCJpc1ZhbGlkIiwiaW5uZXJIVE1MIiwiYXR0YWNoVmFsaWRhdG9yIiwiZXZlbnRUeXBlcyIsImFyZ3VtZW50cyIsImRlbGF5TXMiLCJldmVudFR5cGUiLCJ0Iiwia2V5IiwiYXBwVHJhbnNsYXRpb25zIiwicmVnaXN0ZXJQc2V1ZG8iLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJwc2V1ZG9GaWVsZHMiLCJmIiwicmVnaXN0ZXJFbWFpbCIsImVtYWlsRmllbGRzIiwicGFzc3dvcmRDaGVja2xpc3QiLCJlcnJvcnMiLCJwdXNoIiwidGVzdCIsImZpcnN0IiwiZmlsZSIsImZpbGVzIiwiYWxsb3dlZCIsIm1heCIsImluY2x1ZGVzIiwidHlwZSIsInNpemUiLCJvblN1Ym1pdCIsImhhc0Vycm9yIiwiT2JqZWN0Iiwia2V5cyIsImlkIiwibG9naW5Gb3JtIiwidGFnTmFtZSIsImJveCIsImFjY2VwdCIsInJlZnVzZSIsInJlbWVtYmVyQ2hlY2tib3giLCJjb25zb2xlIiwid2FybiIsImNvbnNlbnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGlzYWJsZWQiLCJzZXRJdGVtIiwiY29sbGFwc2VCdG4iLCJlIiwicmVtZW1iZXJMYWJlbCIsImNsaWNrSGFuZGxlciIsImN1cnJlbnRDb25zZW50IiwiYnV0dG9uIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm9yaWdpbmFsIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==