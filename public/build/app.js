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
/* harmony import */ var _scripts_layout_switch_layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/layout/switch_layout.js */ "./assets/scripts/layout/switch_layout.js");
/* harmony import */ var _scripts_layout_switch_layout_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_layout_switch_layout_js__WEBPACK_IMPORTED_MODULE_4__);
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
/**
 * Gestion de la sélection visuelle des games et factions
 */

function initSelection() {
  // Gérer la sélection des games
  document.querySelectorAll('.game-card').forEach(function (card) {
    var radio = card.querySelector('input[type="radio"]');
    if (radio) {
      radio.addEventListener('change', function () {
        document.querySelectorAll('.game-card').forEach(function (c) {
          return c.classList.remove('selected');
        });
        if (this.checked) {
          card.classList.add('selected');
        }
      });
    }
  });

  // Gérer la sélection des factions
  document.querySelectorAll('.faction-card').forEach(function (card) {
    var radio = card.querySelector('input[type="radio"]');
    if (radio) {
      radio.addEventListener('change', function () {
        document.querySelectorAll('.faction-card').forEach(function (c) {
          return c.classList.remove('selected');
        });
        if (this.checked) {
          card.classList.add('selected');
        }
      });
    }
  });

  // Au chargement, sélectionner la carte déjà cochée (si elle existe)
  document.querySelectorAll('input[type="radio"]:checked').forEach(function (radio) {
    var card = radio.closest('.game-card, .faction-card');
    if (card) {
      card.classList.add('selected');
    }
  });
}

// Attendre que le DOM soit prêt
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

/***/ "./assets/scripts/layout/switch_layout.js"
/*!************************************************!*\
  !*** ./assets/scripts/layout/switch_layout.js ***!
  \************************************************/
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_leaflet_dist_leaflet_css-node_modules_core-js_internals_add-to-unscopabl-de41ae","vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-6d35c4"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxZQUFNO0lBQ25DLElBQU1xRSxLQUFLLEdBQUc2RSxNQUFNLENBQUNDLHNCQUFzQjtJQUMzQyxJQUFJOUUsS0FBSyxJQUFJQSxLQUFLLENBQUN4RCxPQUFPLENBQUN1SSxRQUFRLEtBQUtsRCxTQUFTLEVBQUU7TUFDL0M3QixLQUFLLENBQUNOLEtBQUssR0FBR00sS0FBSyxDQUFDeEQsT0FBTyxDQUFDdUksUUFBUTtNQUNwQy9FLEtBQUssQ0FBQ2dGLGFBQWEsQ0FBQyxJQUFJQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUM7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDUkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2dhbWUvdXRpbHMvZmFjdGlvbi1nYW1lLWNob2ljZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9sYXlvdXQvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbGF5b3V0L3N3aXRjaF9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvc2VjdXJpdHkvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9zZWN1cml0eS9yZW1lbWJlcl9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9zZWN1cml0eS9yZXNldC1idG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnO1xyXG4vKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxyXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxyXG4gKi9cclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG5pbXBvcnQgJy4vc2NyaXB0cy9sYXlvdXQvZHJvcGRvd24uanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9sYXlvdXQvc3dpdGNoX2xheW91dC5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL3NlY3VyaXR5L2Zvcm0uanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9zZWN1cml0eS9yZW1lbWJlcl9tZS5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL3NlY3VyaXR5L3Jlc2V0LWJ0bi5qcyc7XHJcblxyXG5cclxuLy8gR2FtZS1zcGVjaWZpYyBzY3JpcHRzIChvbmx5IGxvYWRlZCBvbiBnYW1lIHBhZ2VzKVxyXG5pbXBvcnQgJy4vc2NyaXB0cy9nYW1lL3V0aWxzL2ZhY3Rpb24tZ2FtZS1jaG9pY2UuanMnO1xyXG5cclxuaW1wb3J0IFwibGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzXCI7IiwiLyoqXHJcbiAqIEdlc3Rpb24gZGUgbGEgc8OpbGVjdGlvbiB2aXN1ZWxsZSBkZXMgZ2FtZXMgZXQgZmFjdGlvbnNcclxuICovXHJcblxyXG5mdW5jdGlvbiBpbml0U2VsZWN0aW9uKCkge1xyXG5cclxuICAgIC8vIEfDqXJlciBsYSBzw6lsZWN0aW9uIGRlcyBnYW1lc1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtY2FyZCcpLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmFkaW8gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xyXG4gICAgICAgIGlmIChyYWRpbykge1xyXG4gICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZS1jYXJkJykuZm9yRWFjaChjID0+IGMuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBHw6lyZXIgbGEgc8OpbGVjdGlvbiBkZXMgZmFjdGlvbnNcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWN0aW9uLWNhcmQnKS5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhZGlvID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcclxuICAgICAgICBpZiAocmFkaW8pIHtcclxuICAgICAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhY3Rpb24tY2FyZCcpLmZvckVhY2goYyA9PiBjLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXUgY2hhcmdlbWVudCwgc8OpbGVjdGlvbm5lciBsYSBjYXJ0ZSBkw6lqw6AgY29jaMOpZSAoc2kgZWxsZSBleGlzdGUpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCcpLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSByYWRpby5jbG9zZXN0KCcuZ2FtZS1jYXJkLCAuZmFjdGlvbi1jYXJkJyk7XHJcbiAgICAgICAgaWYgKGNhcmQpIHtcclxuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBBdHRlbmRyZSBxdWUgbGUgRE9NIHNvaXQgcHLDqnRcclxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRTZWxlY3Rpb24pO1xyXG59IGVsc2Uge1xyXG4gICAgaW5pdFNlbGVjdGlvbigpO1xyXG59IiwiZnVuY3Rpb24gYXR0YWNoSG92ZXJEcm9wZG93bih0b2dnbGVTZWxlY3Rvcikge1xyXG4gICAgY29uc3QgdG9nZ2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodG9nZ2xlU2VsZWN0b3IpO1xyXG5cclxuICAgIHRvZ2dsZXMuZm9yRWFjaCgodG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgICAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xyXG4gICAgICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlYWxseUhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaGlkZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQocmVhbGx5SGlkZURyb3Bkb3duLCAxNTApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBEZXNrdG9wIDogaG92ZXJcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuXHJcbiAgICAgICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZURyb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG9nZ2xlRHJvcGRvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgYWlsbGV1cnNcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc09wZW4gJiYgIXRvZ2dsZS5jb250YWlucyhldmVudC50YXJnZXQpICYmICFkcm9wZG93bkNvbnRlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmICF0b2dnbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZHJvcGRvd25Db250ZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaE5hdmJhckRyb3Bkb3duKCkge1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG4gICAgY29uc3QgbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyX21lbnVcIik7XHJcbiAgICBjb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW5hdmJhclwiKTtcclxuXHJcbiAgICBpZiAoIXRvZ2dsZSB8fCAhbmF2YmFyTWVudSB8fCAhbmF2YmFyQ29udGFpbmVyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcclxuICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVnaW9uRWxzID0gW3RvZ2dsZSwgbmF2YmFyQ29udGFpbmVyLCBkcm9wZG93bkNvbnRlbnRdO1xyXG5cclxuICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICBsZXQgaXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICBsZXQgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgaXNJblJlZ2lvbiA9IChlbCkgPT5cclxuICAgICAgICByZWdpb25FbHMuc29tZSgobm9kZSkgPT4gbm9kZSAmJiBub2RlLmNvbnRhaW5zKGVsKSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG4gICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWFsbHlIaWRlQWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGlzQ2xvc2luZyA9IHRydWU7XHJcbiAgICAgICAgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG5cclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLXNob3dcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xyXG5cclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkxlYXZlUmVnaW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG8gPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xyXG4gICAgICAgIGlmICh0byAmJiBpc0luUmVnaW9uKHRvKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlYWxseUhpZGVBbGwsIDE1MCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZU5hdmJhciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93QWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBEZXNrdG9wIDogaG92ZXJcclxuICAgIHJlZ2lvbkVscy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dBbGwpO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG9uTGVhdmVSZWdpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTmF2YmFyKTtcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b2dnbGVOYXZiYXIsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblxyXG4gICAgLy8gRmVybWVyIHNpIG9uIGNsaXF1ZSBhaWxsZXVyc1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBhdHRhY2hOYXZiYXJEcm9wZG93bigpO1xyXG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi5sYW5ndWFnZS1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLnRoZW1lLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxufSk7Iiwid2luZG93LnN3aXRjaFZpZXcgPSBmdW5jdGlvbih2aWV3SWQpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLXZpZXcnKS5mb3JFYWNoKHYgPT4gdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZpZXdJZCkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxufTsiLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBWQUxJREFUSU9OIEfDiU7DiVJJUVVFIERFUyBGT1JNVUxBSVJFU1xyXG4gICBFbWFpbHMgKyBNb3RzIGRlIHBhc3NlICsgUHNldWRvcyArIEN1c3RvbSB2YWxpZGF0b3JzXHJcbiAgIENvbXBhdGlibGUgU3VwcG9ydCAvIFVzZXIgLyBMb2dpbiAvIEZvcmdvdFBhc3N3b3JkXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5jb25zdCBzZWxlY3RvciA9ICdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXSwgaW5wdXRbdHlwZT1cImVtYWlsXCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sIHNlbGVjdCwgdGV4dGFyZWEnO1xyXG5jb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtZm9ybScpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRm9uY3Rpb25zIGQnYXBwYXJlbmNlIGRlcyBpbnB1dHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaW5pdElucHV0KGlucHV0RWwpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dEVsLmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dEVsLnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGlucHV0RWwudmFsdWUudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9jdXMpO1xyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyKTtcclxuXHJcbiAgICAvLyBQb3VyIGxlIHJlc3BvbnNpdmUgbW9iaWxlXHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25CbHVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Gb2N1cyhldikge1xyXG4gICAgY29uc3QgcGFyZW50ID0gZXYudGFyZ2V0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBldi50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5jbGFzc0xpc3QpIHtcclxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25CbHVyKGV2KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0tZmlsbGVkJywgJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXZlVmFsaWRhdGlvbihldikge1xyXG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFN5c3TDqG1lIGRlIHZhbGlkYXRpb24gZ8OpbsOpcmlxdWVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgdmFsaWRhdG9ycyA9IHt9O1xyXG5jb25zdCB2YWxpZGF0aW9uVGltZXJzID0ge307IC8vIFN0b2NrYWdlIGRlcyB0aW1lcnNcclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyVmFsaWRhdG9yKGlucHV0SWQsIGVycm9ySWQsIHZhbGlkYXRlRm4pIHtcclxuICAgIHZhbGlkYXRvcnNbaW5wdXRJZF0gPSB7IGVycm9ySWQsIHZhbGlkYXRlRm4gfTtcclxufVxyXG5cclxuLy8gLSB0cnVlICAgICAgICAgICAgICAgIC0+IHBhcyBkJ2VycmV1clxyXG4vLyAtIHN0cmluZyAgICAgICAgICAgICAgIC0+IG1lc3NhZ2UgdW5pcXVlIChjb21wb3J0ZW1lbnQgZXhpc3RhbnQpXHJcbi8vIC0gc3RyaW5nW10gICAgICAgICAgICAgIC0+IGxpc3RlIMOgIHB1Y2VzLCB1bmUgbGlnbmUgcGFyIHLDqGdsZSBub24gcmVzcGVjdMOpZVxyXG5mdW5jdGlvbiBidWlsZEVycm9yTWFya3VwKHJlc3VsdCkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSByZXR1cm4gJyc7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSByZXN1bHQubWFwKGxpbmUgPT4gYDxsaT4ke2xpbmV9PC9saT5gKS5qb2luKCcnKTtcclxuICAgICAgICByZXR1cm4gYDx1bCBjbGFzcz1cImZvcm0tZXJyb3ItbGlzdFwiPiR7aXRlbXN9PC91bD5gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gcnVuVmFsaWRhdG9yKGlucHV0SWQpIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHZhbGlkYXRvcnNbaW5wdXRJZF07XHJcbiAgICBpZiAoIWNvbmZpZykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcclxuICAgIGNvbnN0IGVycm9yQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmVycm9ySWQpO1xyXG5cclxuICAgIGlmICghaW5wdXQgfHwgIWVycm9yQm94KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgZXJyb3JCb3guc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSAnXFx1MDBBMCc7XHJcbiAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBjb25maWcudmFsaWRhdGVGbihpbnB1dC52YWx1ZSwgaW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IGlzVmFsaWQgPSByZXN1bHQgPT09IHRydWUgfHwgKEFycmF5LmlzQXJyYXkocmVzdWx0KSAmJiByZXN1bHQubGVuZ3RoID09PSAwKTtcclxuIFxyXG4gICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgZXJyb3JCb3guaW5uZXJIVE1MID0gYnVpbGRFcnJvck1hcmt1cChyZXN1bHQpO1xyXG4gICAgICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRhY2hWYWxpZGF0b3IoaW5wdXRJZCwgZXZlbnRUeXBlcyA9IFsnaW5wdXQnLCAnYmx1ciddLCBkZWxheU1zID0gMzAwMCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcclxuICAgIGlmICghaW5wdXQpIHJldHVybjtcclxuXHJcbiAgICBldmVudFR5cGVzLmZvckVhY2goZXZlbnRUeXBlID0+IHtcclxuICAgICAgICBpZiAoZXZlbnRUeXBlID09PSAnaW5wdXQnKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgbCfDqXbDqW5lbWVudCAnaW5wdXQnLCBvbiBham91dGUgdW4gZMOpbGFpIGRlIDMgc2Vjb25kZXNcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xyXG4gICAgICAgICAgICAgICAgfSwgZGVsYXlNcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnY2hhbmdlJykge1xyXG4gICAgICAgICAgICAvLyBQb3VyICdjaGFuZ2UnLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnYmx1cicpIHtcclxuICAgICAgICAgICAgLy8gUG91ciAnYmx1cicsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQWpvdXRlciAndG91Y2hlbmQnIHBvdXIgbW9iaWxlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBQZXRpdCBkw6lsYWkgcG91ciDDqXZpdGVyIGxlcyBkb3VibGVzIGTDqWNsZW5jaGVtZW50c1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBydW5WYWxpZGF0b3IoaW5wdXRJZCksIDEwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgJ2NsaWNrJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBQU0VVRE9TIChnw6luw6lyaXF1ZXMpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiB0KGtleSkge1xyXG4gICAgcmV0dXJuICh3aW5kb3cuYXBwVHJhbnNsYXRpb25zICYmIHdpbmRvdy5hcHBUcmFuc2xhdGlvbnNba2V5XSkgfHwga2V5O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclBzZXVkbyhpbnB1dElkLCBlcnJvcklkLCBtaW5MZW5ndGggPSAzLCBtYXhMZW5ndGggPSAyNSkge1xyXG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ3BzZXVkb19yZXF1aXJlZCcpO1xyXG4gICAgICAgIGlmICh2Lmxlbmd0aCA8IG1pbkxlbmd0aCkgcmV0dXJuIHQoJ3BzZXVkb19taW5fMycpO1xyXG4gICAgICAgIGlmICh2Lmxlbmd0aCA+IG1heExlbmd0aCkgcmV0dXJuIHQoJ3BzZXVkb19tYXhfMjUnKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBwc2V1ZG9GaWVsZHMgPSBbXHJcbiAgICB7IGlucHV0SWQ6IFwic3VwcG9ydF9uYW1lXCIsIGVycm9ySWQ6IFwicHNldWRvLWVycm9yXCIsIG1pbkxlbmd0aDogMywgbWF4TGVuZ3RoOiAyNSB9LFxyXG4gICAgeyBpbnB1dElkOiBcInVzZXJfcHNldWRvXCIsIGVycm9ySWQ6IFwidXNlcl9wc2V1ZG8tZXJyb3JcIiwgbWluTGVuZ3RoOiAzLCBtYXhMZW5ndGg6IDI1IH0sXHJcbl07XHJcblxyXG5wc2V1ZG9GaWVsZHMuZm9yRWFjaChmID0+IHJlZ2lzdGVyUHNldWRvKGYuaW5wdXRJZCwgZi5lcnJvcklkLCBmLm1pbkxlbmd0aCwgZi5tYXhMZW5ndGgpKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIEVNQUlMUyAoZ8OpbsOpcmlxdWVzIHBvdXIgdG91dCBsZSBzaXRlKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJFbWFpbChpbnB1dElkLCBlcnJvcklkKSB7XHJcbiAgICByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ2VtYWlsX3JlcXVpcmVkJyk7XHJcbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHJldHVybiB0KCdlbWFpbF9pbnZhbGlkJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgZW1haWxGaWVsZHMgPSBbXHJcbiAgICB7IGlucHV0SWQ6IFwic3VwcG9ydF9lbWFpbFwiLCBlcnJvcklkOiBcImVtYWlsLWVycm9yXCIgfSxcclxuICAgIHsgaW5wdXRJZDogXCJ1c2VyX2VtYWlsXCIsIGVycm9ySWQ6IFwidXNlcl9lbWFpbC1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcm5hbWVcIiwgZXJyb3JJZDogXCJ1c2VybmFtZS1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwiZm9yZ290X3Bhc3N3b3JkX3JlcXVlc3RfZm9ybV9lbWFpbFwiLCBlcnJvcklkOiBcImZvcmdvdF9lbWFpbC1lcnJvclwiIH1cclxuXTtcclxuXHJcbmVtYWlsRmllbGRzLmZvckVhY2goZiA9PiByZWdpc3RlckVtYWlsKGYuaW5wdXRJZCwgZi5lcnJvcklkKSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBNT1RTIERFIFBBU1NFIChnw6luw6lyaXF1ZXMpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiBwYXNzd29yZENoZWNrbGlzdCh2YWx1ZSkge1xyXG4gICAgY29uc3QgdiA9IHZhbHVlO1xyXG4gICAgY29uc3QgZXJyb3JzID0gW107XHJcbiBcclxuICAgIGlmICh2Lmxlbmd0aCA8IDgpIGVycm9ycy5wdXNoKHQoJ3Bhc3N3b3JkX2xlbmd0aF84JykpO1xyXG4gICAgaWYgKCEvW0EtWl0vLnRlc3QodikpIGVycm9ycy5wdXNoKHQoJ3Bhc3N3b3JkX3VwcGVyJykpO1xyXG4gICAgaWYgKCEvXFxkLy50ZXN0KHYpKSBlcnJvcnMucHVzaCh0KCdwYXNzd29yZF9udW1iZXInKSk7XHJcbiAgICBpZiAoIS9bXFxXX10vLnRlc3QodikpIGVycm9ycy5wdXNoKHQoJ3Bhc3N3b3JkX3NwZWNpYWwnKSk7XHJcbiBcclxuICAgIHJldHVybiBlcnJvcnM7XHJcbn1cclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIsIFwidXNlcl9wYXNzd29yZF9maXJzdC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIHJldHVybiBwYXNzd29yZENoZWNrbGlzdCh2YWx1ZSk7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJ1c2VyX3BsYWluUGFzc3dvcmRfc2Vjb25kXCIsIFwidXNlcl9wYXNzd29yZF9zZWNvbmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIpO1xyXG4gICAgaWYgKCFmaXJzdCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX2NvbmZpcm1fcmVxdWlyZWQnKTtcclxuICAgIGlmICh2YWx1ZSAhPT0gZmlyc3QudmFsdWUpIHJldHVybiB0KCdwYXNzd29yZF9taXNtYXRjaCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3RcIiwgXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3QtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gcGFzc3dvcmRDaGVja2xpc3QodmFsdWUpO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZFwiLCBcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0XCIpO1xyXG4gICAgaWYgKCFmaXJzdCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX2NvbmZpcm1fcmVxdWlyZWQnKTtcclxuICAgIGlmICh2YWx1ZSAhPT0gZmlyc3QudmFsdWUpIHJldHVybiB0KCdwYXNzd29yZF9taXNtYXRjaCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gTW90IGRlIHBhc3NlIGRlIGNvbm5leGlvblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInBhc3N3b3JkXCIsIFwicGFzc3dvcmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfcmVxdWlyZWQnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vIE1vdCBkZSBwYXNzZSBcIm91Ymxpw6lcIiAobm91dmVhdSBtb3QgZGUgcGFzc2UsIHNpIHR1IGFzIHVuIGNoYW1wcyBkw6lkacOpKVxyXG5yZWdpc3RlclZhbGlkYXRvcihcImZvcmdvdF9wYXNzd29yZFwiLCBcImZvcmdvdF9wYXNzd29yZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9yZXF1aXJlZCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgU1VQUE9SVCBTVVBQTMOJTUVOVEFJUkVTIOKGkiBjYXRlZ29yeSAvIG1lc3NhZ2UgLyBpbWFnZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X2NhdGVnb3J5XCIsIFwic2VsZWN0ZS1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGlmICghdmFsdWUgfHwgdmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgnc3VwcG9ydF9jYXRlZ29yeV9yZXF1aXJlZCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X21lc3NhZ2VcIiwgXCJ0ZXh0LWFyZWEtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdzdXBwb3J0X21lc3NhZ2VfcmVxdWlyZWQnKTtcclxuICAgIGlmICh2Lmxlbmd0aCA8IDEwKSByZXR1cm4gdCgnc3VwcG9ydF9tZXNzYWdlX21pbl8xMCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gVkFMSURBVElPTiBERSBM4oCZSU1BR0UgKHN1cHBvcnQpXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9pbWFnZUZpbGVcIiwgXCJpbWFnZS1lcnJvclwiLCAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbMF07XHJcbiAgICBpZiAoIWZpbGUpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGFsbG93ZWQgPSBbXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2UvanBnXCIsIFwiaW1hZ2UvcG5nXCIsIFwiaW1hZ2Uvd2VicFwiXTtcclxuICAgIGNvbnN0IG1heCA9IDIgKiAxMDI0ICogMTAyNDtcclxuXHJcbiAgICBpZiAoIWFsbG93ZWQuaW5jbHVkZXMoZmlsZS50eXBlKSkgcmV0dXJuIHQoJ2ltYWdlX3R5cGUnKTtcclxuICAgIGlmIChmaWxlLnNpemUgPiBtYXgpIHJldHVybiB0KCdpbWFnZV9zaXplJyk7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNPVU1JU1NJT04gRFUgRk9STVVMQUlSRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gb25TdWJtaXQoZXYpIHtcclxuICAgIGxldCBoYXNFcnJvciA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEFubnVsZXIgdG91cyBsZXMgdGltZXJzIGVuIGNvdXJzXHJcbiAgICBPYmplY3Qua2V5cyh2YWxpZGF0aW9uVGltZXJzKS5mb3JFYWNoKGlucHV0SWQgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciB0b3VzIGxlcyB2YWxpZGF0ZXVycyBlbnJlZ2lzdHLDqXNcclxuICAgIE9iamVjdC5rZXlzKHZhbGlkYXRvcnMpLmZvckVhY2goKGlucHV0SWQpID0+IHtcclxuICAgICAgICBpZiAoIXJ1blZhbGlkYXRvcihpbnB1dElkKSkge1xyXG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVsOpcmlmaWVyIGxhIHZhbGlkaXTDqSBIVE1MNSBkZXMgY2hhbXBzIHNhbnMgdmFsaWRhdGV1ciBjdXN0b21cclxuICAgIGNvbnN0IGZvcm0gPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIC8vIElnbm9yZXIgbGVzIGNoYW1wcyBxdWkgb250IGTDqWrDoCB1biB2YWxpZGF0ZXVyIGN1c3RvbVxyXG4gICAgICAgIGlmICh2YWxpZGF0b3JzW2lucHV0LmlkXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGhhc0Vycm9yKSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVRJQUxJU0FUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtZm9ybScpO1xyXG4gICAgY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWZvcm0nKTtcclxuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpc2VyIGxlcyBpbnB1dHMgZGUgYmFzZVxyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgaW5pdElucHV0KGlucHV0KTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0LnRhZ05hbWUgPT09ICdTRUxFQ1QnICYmIGlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSBkZSBzdXBwb3J0XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfbmFtZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9jYXRlZ29yeScsIFsnY2hhbmdlJywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfbWVzc2FnZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9pbWFnZUZpbGUnLCBbJ2NoYW5nZSddLCAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSB1dGlsaXNhdGV1clxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BzZXVkbycsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0JywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BsYWluUGFzc3dvcmRfc2Vjb25kJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIHJlc2V0IHBhc3N3b3JkXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Jlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigncmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSBkZSBjb25uZXhpb25cclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcm5hbWUnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Bhc3N3b3JkJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyDDqXZlbnR1ZWxzIGR1IGZvcm11bGFpcmUgXCJtb3QgZGUgcGFzc2Ugb3VibGnDqVwiXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ2ZvcmdvdF9wYXNzd29yZF9yZXF1ZXN0X2Zvcm1fZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ2ZvcmdvdF9wYXNzd29yZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsYSB2YWxpZGF0aW9uIGF1IHN1Ym1pdFxyXG4gICAgaWYgKGZvcm0pIHtcclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdHRhY2hlciBsYSB2YWxpZGF0aW9uIGF1IGZvcm11bGFpcmUgZGUgY29ubmV4aW9uXHJcbiAgICBpZiAobG9naW5Gb3JtKSB7XHJcbiAgICAgICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcclxuICAgIH1cclxufSk7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtY29uc2VudFwiKTtcclxuICAgIGNvbnN0IGFjY2VwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXB0LWNvb2tpZXNcIik7XHJcbiAgICBjb25zdCByZWZ1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZnVzZS1jb29raWVzXCIpO1xyXG4gICAgY29uc3QgcmVtZW1iZXJDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX3JlbWVtYmVyX21lXCIpO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciBxdWUgbGVzIMOpbMOpbWVudHMgZXhpc3RlbnRcclxuICAgIGlmICghYm94IHx8ICFhY2NlcHQgfHwgIXJlZnVzZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIsOJbMOpbWVudHMgY29va2llIG5vbiB0cm91dsOpc1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29uc2VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIik7XHJcblxyXG4gICAgLy8gQUZGSUNIQUdFIElOSVRJQUxcclxuICAgIGlmICghY29uc2VudCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgIH0gZWxzZSBpZiAoY29uc2VudCA9PT0gXCJyZWZ1c2VkXCIpIHtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEw4lTQUNUSVZFUiBSRU1FTUJFUiBNRSBTSSBSRUZVU1xyXG4gICAgaWYgKGNvbnNlbnQgIT09IFwiYWNjZXB0ZWRcIiAmJiByZW1lbWJlckNoZWNrYm94KSB7XHJcbiAgICAgICAgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQUNDRVBURVJcclxuICAgIGFjY2VwdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIiwgXCJhY2NlcHRlZFwiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJFRlVTRVJcclxuICAgIHJlZnVzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIiwgXCJyZWZ1c2VkXCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHtcclxuICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNJIE9OIENMSVFVRSBTVVIgTEUgQk9VVE9OIFLDiURVSVQg4oaSIFLDiUFGRklDSEVSIExBIEJBTk5Jw4hSRVxyXG4gICAgY29uc3QgY29sbGFwc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1leHBhbmQtYnRuXCIpO1xyXG4gICAgaWYgKGNvbGxhcHNlQnRuKSB7XHJcbiAgICAgICAgY29sbGFwc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZWRcIik7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTSSBPTiBDTElRVUUgU1VSIFJFTUVNQkVSIE1FIEFQUsOIUyBVTiBSRUZVUyDihpIgUsOJQUZGSUNIRVIgTEEgQkFOTknDiFJFXHJcbiAgICBpZiAocmVtZW1iZXJDaGVja2JveCkge1xyXG4gICAgICAgIGNvbnN0IHJlbWVtYmVyTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9XCJfcmVtZW1iZXJfbWVcIl0nKTtcclxuICAgICAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29uc2VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbnNlbnQgPT09IFwicmVmdXNlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbWVtYmVyQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgaWYgKHJlbWVtYmVyTGFiZWwpIHtcclxuICAgICAgICAgICAgcmVtZW1iZXJMYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyIsImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNldC1idG4nKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBidXR0b24ucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQuZGF0YXNldC5vcmlnaW5hbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQuZGF0YXNldC5vcmlnaW5hbDtcclxuICAgICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImluaXRTZWxlY3Rpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2FyZCIsInJhZGlvIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY2hlY2tlZCIsImFkZCIsImNsb3Nlc3QiLCJyZWFkeVN0YXRlIiwiYXR0YWNoSG92ZXJEcm9wZG93biIsInRvZ2dsZVNlbGVjdG9yIiwidG9nZ2xlcyIsInRvZ2dsZSIsInRhcmdldFNlbGVjdG9yIiwiZGF0YXNldCIsImRyb3Bkb3duVGFyZ2V0IiwiZHJvcGRvd25Db250ZW50IiwiaGlkZVRpbWVvdXQiLCJpc09wZW4iLCJzaG93RHJvcGRvd24iLCJjbGVhclRpbWVvdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJhbmltYXRpb24iLCJyZWFsbHlIaWRlRHJvcGRvd24iLCJoYW5kbGVyIiwiZXZlbnQiLCJhbmltYXRpb25OYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhpZGVEcm9wZG93biIsInNldFRpbWVvdXQiLCJ0b2dnbGVEcm9wZG93biIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFzc2l2ZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiYXR0YWNoTmF2YmFyRHJvcGRvd24iLCJuYXZiYXJNZW51IiwibmF2YmFyQ29udGFpbmVyIiwicmVnaW9uRWxzIiwiaXNDbG9zaW5nIiwiaXNJblJlZ2lvbiIsImVsIiwic29tZSIsIm5vZGUiLCJzaG93QWxsIiwicmVhbGx5SGlkZUFsbCIsIm9uTGVhdmVSZWdpb24iLCJ0byIsInJlbGF0ZWRUYXJnZXQiLCJ0b2dnbGVOYXZiYXIiLCJ3aW5kb3ciLCJzd2l0Y2hWaWV3Iiwidmlld0lkIiwidiIsImdldEVsZW1lbnRCeUlkIiwic2VsZWN0b3IiLCJpbnB1dHMiLCJmb3JtIiwiaW5pdElucHV0IiwiaW5wdXRFbCIsIndyYXBwZXIiLCJwYXJlbnRFbGVtZW50IiwidmFsdWUiLCJ0cmltIiwib25Gb2N1cyIsIm9uQmx1ciIsImV2IiwicGFyZW50IiwiaW5wdXQiLCJsaXZlVmFsaWRhdGlvbiIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGF0b3JzIiwidmFsaWRhdGlvblRpbWVycyIsInJlZ2lzdGVyVmFsaWRhdG9yIiwiaW5wdXRJZCIsImVycm9ySWQiLCJ2YWxpZGF0ZUZuIiwiYnVpbGRFcnJvck1hcmt1cCIsInJlc3VsdCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIml0ZW1zIiwibWFwIiwibGluZSIsImNvbmNhdCIsImpvaW4iLCJydW5WYWxpZGF0b3IiLCJjb25maWciLCJlcnJvckJveCIsInZpc2liaWxpdHkiLCJ0ZXh0Q29udGVudCIsImlzVmFsaWQiLCJpbm5lckhUTUwiLCJhdHRhY2hWYWxpZGF0b3IiLCJldmVudFR5cGVzIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiZGVsYXlNcyIsImV2ZW50VHlwZSIsInQiLCJrZXkiLCJhcHBUcmFuc2xhdGlvbnMiLCJyZWdpc3RlclBzZXVkbyIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInBzZXVkb0ZpZWxkcyIsImYiLCJyZWdpc3RlckVtYWlsIiwiZW1haWxGaWVsZHMiLCJwYXNzd29yZENoZWNrbGlzdCIsImVycm9ycyIsInB1c2giLCJ0ZXN0IiwiZmlyc3QiLCJmaWxlIiwiZmlsZXMiLCJhbGxvd2VkIiwibWF4IiwiaW5jbHVkZXMiLCJ0eXBlIiwic2l6ZSIsIm9uU3VibWl0IiwiaGFzRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwiaWQiLCJsb2dpbkZvcm0iLCJ0YWdOYW1lIiwiYm94IiwiYWNjZXB0IiwicmVmdXNlIiwicmVtZW1iZXJDaGVja2JveCIsImNvbnNvbGUiLCJ3YXJuIiwiY29uc2VudCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXNhYmxlZCIsInNldEl0ZW0iLCJjb2xsYXBzZUJ0biIsImUiLCJyZW1lbWJlckxhYmVsIiwiY2xpY2tIYW5kbGVyIiwiY3VycmVudENvbnNlbnQiLCJidXR0b24iLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwib3JpZ2luYWwiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9