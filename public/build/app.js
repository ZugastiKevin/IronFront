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
/******/ __webpack_require__.O(0, ["vendors-node_modules_leaflet_dist_leaflet_css-node_modules_core-js_internals_add-to-unscopabl-467c3d","vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-27c7a3"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxZQUFNO0lBQ25DLElBQU1xRSxLQUFLLEdBQUc2RSxNQUFNLENBQUNDLHNCQUFzQjtJQUMzQyxJQUFJOUUsS0FBSyxJQUFJQSxLQUFLLENBQUN4RCxPQUFPLENBQUN1SSxRQUFRLEtBQUtsRCxTQUFTLEVBQUU7TUFDL0M3QixLQUFLLENBQUNOLEtBQUssR0FBR00sS0FBSyxDQUFDeEQsT0FBTyxDQUFDdUksUUFBUTtNQUNwQy9FLEtBQUssQ0FBQ2dGLGFBQWEsQ0FBQyxJQUFJQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUM7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDUkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2dhbWUvdXRpbHMvZmFjdGlvbi1nYW1lLWNob2ljZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9sYXlvdXQvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvbGF5b3V0L3N3aXRjaF9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvc2VjdXJpdHkvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9zZWN1cml0eS9yZW1lbWJlcl9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9zZWN1cml0eS9yZXNldC1idG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcclxuLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcclxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cclxuICovXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuaW1wb3J0ICcuL3NjcmlwdHMvbGF5b3V0L2Ryb3Bkb3duLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvbGF5b3V0L3N3aXRjaF9sYXlvdXQuanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9zZWN1cml0eS9mb3JtLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvc2VjdXJpdHkvcmVtZW1iZXJfbWUuanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9zZWN1cml0eS9yZXNldC1idG4uanMnO1xyXG5cclxuXHJcbi8vIEdhbWUtc3BlY2lmaWMgc2NyaXB0cyAob25seSBsb2FkZWQgb24gZ2FtZSBwYWdlcylcclxuaW1wb3J0ICcuL3NjcmlwdHMvZ2FtZS91dGlscy9mYWN0aW9uLWdhbWUtY2hvaWNlLmpzJztcclxuXHJcbmltcG9ydCBcImxlYWZsZXQvZGlzdC9sZWFmbGV0LmNzc1wiOyIsIi8qKlxyXG4gKiBHZXN0aW9uIGRlIGxhIHPDqWxlY3Rpb24gdmlzdWVsbGUgZGVzIGdhbWVzIGV0IGZhY3Rpb25zXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gaW5pdFNlbGVjdGlvbigpIHtcclxuXHJcbiAgICAvLyBHw6lyZXIgbGEgc8OpbGVjdGlvbiBkZXMgZ2FtZXNcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLWNhcmQnKS5mb3JFYWNoKGNhcmQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhZGlvID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcclxuICAgICAgICBpZiAocmFkaW8pIHtcclxuICAgICAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtY2FyZCcpLmZvckVhY2goYyA9PiBjLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gR8OpcmVyIGxhIHPDqWxlY3Rpb24gZGVzIGZhY3Rpb25zXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFjdGlvbi1jYXJkJykuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICBjb25zdCByYWRpbyA9IGNhcmQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XHJcbiAgICAgICAgaWYgKHJhZGlvKSB7XHJcbiAgICAgICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWN0aW9uLWNhcmQnKS5mb3JFYWNoKGMgPT4gYy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEF1IGNoYXJnZW1lbnQsIHPDqWxlY3Rpb25uZXIgbGEgY2FydGUgZMOpasOgIGNvY2jDqWUgKHNpIGVsbGUgZXhpc3RlKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnKS5mb3JFYWNoKHJhZGlvID0+IHtcclxuICAgICAgICBjb25zdCBjYXJkID0gcmFkaW8uY2xvc2VzdCgnLmdhbWUtY2FyZCwgLmZhY3Rpb24tY2FyZCcpO1xyXG4gICAgICAgIGlmIChjYXJkKSB7XHJcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gQXR0ZW5kcmUgcXVlIGxlIERPTSBzb2l0IHByw6p0XHJcbmlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0U2VsZWN0aW9uKTtcclxufSBlbHNlIHtcclxuICAgIGluaXRTZWxlY3Rpb24oKTtcclxufSIsImZ1bmN0aW9uIGF0dGFjaEhvdmVyRHJvcGRvd24odG9nZ2xlU2VsZWN0b3IpIHtcclxuICAgIGNvbnN0IHRvZ2dsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRvZ2dsZVNlbGVjdG9yKTtcclxuXHJcbiAgICB0b2dnbGVzLmZvckVhY2goKHRvZ2dsZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gdG9nZ2xlLmRhdGFzZXQuZHJvcGRvd25UYXJnZXQ7XHJcbiAgICAgICAgaWYgKCF0YXJnZXRTZWxlY3RvcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcclxuICAgICAgICBpZiAoIWRyb3Bkb3duQ29udGVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIGxldCBpc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd0Ryb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcInNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcbiAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZWFsbHlIaWRlRHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5hbmltYXRpb25OYW1lID09PSBcImRvbnQtc2hvdy1jb250ZW50XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBpc09wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlYWxseUhpZGVEcm9wZG93biwgMTUwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB0b2dnbGVEcm9wZG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gRGVza3RvcCA6IGhvdmVyXHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dEcm9wZG93bik7XHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhpZGVEcm9wZG93bik7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dEcm9wZG93bik7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhpZGVEcm9wZG93bik7XHJcblxyXG4gICAgICAgIC8vIE1vYmlsZSA6IGNsaWNrL3RvdWNoXHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVEcm9wZG93bik7XHJcbiAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvZ2dsZURyb3Bkb3duLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAvLyBGZXJtZXIgc2kgb24gY2xpcXVlIGFpbGxldXJzXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmICF0b2dnbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZHJvcGRvd25Db250ZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzT3BlbiAmJiAhdG9nZ2xlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWRyb3Bkb3duQ29udGVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVhbGx5SGlkZURyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRhY2hOYXZiYXJEcm9wZG93bigpIHtcclxuICAgIGNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxuICAgIGNvbnN0IG5hdmJhck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhcl9tZW51XCIpO1xyXG4gICAgY29uc3QgbmF2YmFyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bi1uYXZiYXJcIik7XHJcblxyXG4gICAgaWYgKCF0b2dnbGUgfHwgIW5hdmJhck1lbnUgfHwgIW5hdmJhckNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gdG9nZ2xlLmRhdGFzZXQuZHJvcGRvd25UYXJnZXQ7XHJcbiAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZHJvcGRvd25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3Rvcik7XHJcbiAgICBpZiAoIWRyb3Bkb3duQ29udGVudCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHJlZ2lvbkVscyA9IFt0b2dnbGUsIG5hdmJhckNvbnRhaW5lciwgZHJvcGRvd25Db250ZW50XTtcclxuXHJcbiAgICBsZXQgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgbGV0IGlzQ2xvc2luZyA9IGZhbHNlO1xyXG4gICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGlzSW5SZWdpb24gPSAoZWwpID0+XHJcbiAgICAgICAgcmVnaW9uRWxzLnNvbWUoKG5vZGUpID0+IG5vZGUgJiYgbm9kZS5jb250YWlucyhlbCkpO1xyXG5cclxuICAgIGNvbnN0IHNob3dBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlzQ2xvc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGlzT3BlbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuICAgICAgICB0b2dnbGUuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLW9wZW5cIik7XHJcblxyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm5hdmJhci1tZW51LWFuaW0tc2hvd1wiKTtcclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XHJcblxyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0tc2hvd1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVhbGx5SGlkZUFsbCA9ICgpID0+IHtcclxuICAgICAgICBpc0Nsb3NpbmcgPSB0cnVlO1xyXG4gICAgICAgIGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJkb250LXNob3ctY29udGVudCAwLjI1cyBlYXNlIGZvcndhcmRzXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0Nsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZHJvcGRvd24tb3BlblwiKTtcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBoYW5kbGVyKTtcclxuXHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xyXG4gICAgICAgIG5hdmJhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tbmF2YmFyLWFuaW0taGlkZVwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLW1lbnUtYW5pbS1oaWRlXCIpO1xyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0tc2hvd1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25MZWF2ZVJlZ2lvbiA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvID0gZXZlbnQucmVsYXRlZFRhcmdldDtcclxuICAgICAgICBpZiAodG8gJiYgaXNJblJlZ2lvbih0bykpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChyZWFsbHlIaWRlQWxsLCAxNTApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVOYXZiYXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWFsbHlIaWRlQWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0FsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gRGVza3RvcCA6IGhvdmVyXHJcbiAgICByZWdpb25FbHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzaG93QWxsKTtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBvbkxlYXZlUmVnaW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE1vYmlsZSA6IGNsaWNrL3RvdWNoXHJcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZU5hdmJhcik7XHJcbiAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG9nZ2xlTmF2YmFyLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xyXG5cclxuICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgYWlsbGV1cnNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoaXNPcGVuICYmICFpc0luUmVnaW9uKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoaXNPcGVuICYmICFpc0luUmVnaW9uKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgYXR0YWNoTmF2YmFyRHJvcGRvd24oKTtcclxuICAgIGF0dGFjaEhvdmVyRHJvcGRvd24oXCIubGFuZ3VhZ2UtZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi50aGVtZS1kcm9wZG93bi10b2dnbGVcIik7XHJcbn0pOyIsIndpbmRvdy5zd2l0Y2hWaWV3ID0gZnVuY3Rpb24odmlld0lkKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhci12aWV3JykuZm9yRWFjaCh2ID0+IHYuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2aWV3SWQpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbn07IiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgVkFMSURBVElPTiBHw4lOw4lSSVFVRSBERVMgRk9STVVMQUlSRVNcclxuICAgRW1haWxzICsgTW90cyBkZSBwYXNzZSArIFBzZXVkb3MgKyBDdXN0b20gdmFsaWRhdG9yc1xyXG4gICBDb21wYXRpYmxlIFN1cHBvcnQgLyBVc2VyIC8gTG9naW4gLyBGb3Jnb3RQYXNzd29yZFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3Qgc2VsZWN0b3IgPSAnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCBzZWxlY3QsIHRleHRhcmVhJztcclxuY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZvbmN0aW9ucyBkJ2FwcGFyZW5jZSBkZXMgaW5wdXRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGluaXRJbnB1dChpbnB1dEVsKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXRFbC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXRFbC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChpbnB1dEVsLnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvY3VzKTtcclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XHJcblxyXG4gICAgLy8gUG91ciBsZSByZXNwb25zaXZlIG1vYmlsZVxyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uQmx1cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRm9jdXMoZXYpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGV2LnRhcmdldC5jbG9zZXN0KCdzcGFuJykgfHwgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uQmx1cihldikge1xyXG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWZpbGxlZCcsICdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGl2ZVZhbGlkYXRpb24oZXYpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTeXN0w6htZSBkZSB2YWxpZGF0aW9uIGfDqW7DqXJpcXVlXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IHZhbGlkYXRvcnMgPSB7fTtcclxuY29uc3QgdmFsaWRhdGlvblRpbWVycyA9IHt9OyAvLyBTdG9ja2FnZSBkZXMgdGltZXJzXHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCB2YWxpZGF0ZUZuKSB7XHJcbiAgICB2YWxpZGF0b3JzW2lucHV0SWRdID0geyBlcnJvcklkLCB2YWxpZGF0ZUZuIH07XHJcbn1cclxuXHJcbi8vIC0gdHJ1ZSAgICAgICAgICAgICAgICAtPiBwYXMgZCdlcnJldXJcclxuLy8gLSBzdHJpbmcgICAgICAgICAgICAgICAtPiBtZXNzYWdlIHVuaXF1ZSAoY29tcG9ydGVtZW50IGV4aXN0YW50KVxyXG4vLyAtIHN0cmluZ1tdICAgICAgICAgICAgICAtPiBsaXN0ZSDDoCBwdWNlcywgdW5lIGxpZ25lIHBhciByw6hnbGUgbm9uIHJlc3BlY3TDqWVcclxuZnVuY3Rpb24gYnVpbGRFcnJvck1hcmt1cChyZXN1bHQpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gcmVzdWx0Lm1hcChsaW5lID0+IGA8bGk+JHtsaW5lfTwvbGk+YCkuam9pbignJyk7XHJcbiAgICAgICAgcmV0dXJuIGA8dWwgY2xhc3M9XCJmb3JtLWVycm9yLWxpc3RcIj4ke2l0ZW1zfTwvdWw+YDtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1blZhbGlkYXRvcihpbnB1dElkKSB7XHJcbiAgICBjb25zdCBjb25maWcgPSB2YWxpZGF0b3JzW2lucHV0SWRdO1xyXG4gICAgaWYgKCFjb25maWcpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XHJcbiAgICBjb25zdCBlcnJvckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5lcnJvcklkKTtcclxuXHJcbiAgICBpZiAoIWlucHV0IHx8ICFlcnJvckJveCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIGVycm9yQm94LnRleHRDb250ZW50ID0gJ1xcdTAwQTAnO1xyXG4gICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gY29uZmlnLnZhbGlkYXRlRm4oaW5wdXQudmFsdWUsIGlucHV0KTtcclxuXHJcbiAgICBjb25zdCBpc1ZhbGlkID0gcmVzdWx0ID09PSB0cnVlIHx8IChBcnJheS5pc0FycmF5KHJlc3VsdCkgJiYgcmVzdWx0Lmxlbmd0aCA9PT0gMCk7XHJcbiBcclxuICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgIGVycm9yQm94LmlubmVySFRNTCA9IGJ1aWxkRXJyb3JNYXJrdXAocmVzdWx0KTtcclxuICAgICAgICBlcnJvckJveC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0YWNoVmFsaWRhdG9yKGlucHV0SWQsIGV2ZW50VHlwZXMgPSBbJ2lucHV0JywgJ2JsdXInXSwgZGVsYXlNcyA9IDMwMDApIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XHJcbiAgICBpZiAoIWlucHV0KSByZXR1cm47XHJcblxyXG4gICAgZXZlbnRUeXBlcy5mb3JFYWNoKGV2ZW50VHlwZSA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gJ2lucHV0Jykge1xyXG4gICAgICAgICAgICAvLyBQb3VyIGwnw6l2w6luZW1lbnQgJ2lucHV0Jywgb24gYWpvdXRlIHVuIGTDqWxhaSBkZSAzIHNlY29uZGVzXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgICAgIH0sIGRlbGF5TXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gJ2NoYW5nZScpIHtcclxuICAgICAgICAgICAgLy8gUG91ciAnY2hhbmdlJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gJ2JsdXInKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgJ2JsdXInLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFqb3V0ZXIgJ3RvdWNoZW5kJyBwb3VyIG1vYmlsZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gUGV0aXQgZMOpbGFpIHBvdXIgw6l2aXRlciBsZXMgZG91YmxlcyBkw6ljbGVuY2hlbWVudHNcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcnVuVmFsaWRhdG9yKGlucHV0SWQpLCAxMDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgICAgICAvLyBQb3VyICdjbGljaycsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgUFNFVURPUyAoZ8OpbsOpcmlxdWVzKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gdChrZXkpIHtcclxuICAgIHJldHVybiAod2luZG93LmFwcFRyYW5zbGF0aW9ucyAmJiB3aW5kb3cuYXBwVHJhbnNsYXRpb25zW2tleV0pIHx8IGtleTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJQc2V1ZG8oaW5wdXRJZCwgZXJyb3JJZCwgbWluTGVuZ3RoID0gMywgbWF4TGVuZ3RoID0gMjUpIHtcclxuICAgIHJlZ2lzdGVyVmFsaWRhdG9yKGlucHV0SWQsIGVycm9ySWQsICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdwc2V1ZG9fcmVxdWlyZWQnKTtcclxuICAgICAgICBpZiAodi5sZW5ndGggPCBtaW5MZW5ndGgpIHJldHVybiB0KCdwc2V1ZG9fbWluXzMnKTtcclxuICAgICAgICBpZiAodi5sZW5ndGggPiBtYXhMZW5ndGgpIHJldHVybiB0KCdwc2V1ZG9fbWF4XzI1Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgcHNldWRvRmllbGRzID0gW1xyXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfbmFtZVwiLCBlcnJvcklkOiBcInBzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMsIG1heExlbmd0aDogMjUgfSxcclxuICAgIHsgaW5wdXRJZDogXCJ1c2VyX3BzZXVkb1wiLCBlcnJvcklkOiBcInVzZXJfcHNldWRvLWVycm9yXCIsIG1pbkxlbmd0aDogMywgbWF4TGVuZ3RoOiAyNSB9LFxyXG5dO1xyXG5cclxucHNldWRvRmllbGRzLmZvckVhY2goZiA9PiByZWdpc3RlclBzZXVkbyhmLmlucHV0SWQsIGYuZXJyb3JJZCwgZi5taW5MZW5ndGgsIGYubWF4TGVuZ3RoKSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBFTUFJTFMgKGfDqW7DqXJpcXVlcyBwb3VyIHRvdXQgbGUgc2l0ZSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyRW1haWwoaW5wdXRJZCwgZXJyb3JJZCkge1xyXG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgKHZhbHVlLCBpbnB1dCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdlbWFpbF9yZXF1aXJlZCcpO1xyXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSByZXR1cm4gdCgnZW1haWxfaW52YWxpZCcpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGVtYWlsRmllbGRzID0gW1xyXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfZW1haWxcIiwgZXJyb3JJZDogXCJlbWFpbC1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcl9lbWFpbFwiLCBlcnJvcklkOiBcInVzZXJfZW1haWwtZXJyb3JcIiB9LFxyXG4gICAgeyBpbnB1dElkOiBcInVzZXJuYW1lXCIsIGVycm9ySWQ6IFwidXNlcm5hbWUtZXJyb3JcIiB9LFxyXG4gICAgeyBpbnB1dElkOiBcImZvcmdvdF9wYXNzd29yZF9yZXF1ZXN0X2Zvcm1fZW1haWxcIiwgZXJyb3JJZDogXCJmb3Jnb3RfZW1haWwtZXJyb3JcIiB9XHJcbl07XHJcblxyXG5lbWFpbEZpZWxkcy5mb3JFYWNoKGYgPT4gcmVnaXN0ZXJFbWFpbChmLmlucHV0SWQsIGYuZXJyb3JJZCkpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgTU9UUyBERSBQQVNTRSAoZ8OpbsOpcmlxdWVzKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gcGFzc3dvcmRDaGVja2xpc3QodmFsdWUpIHtcclxuICAgIGNvbnN0IHYgPSB2YWx1ZTtcclxuICAgIGNvbnN0IGVycm9ycyA9IFtdO1xyXG4gXHJcbiAgICBpZiAodi5sZW5ndGggPCA4KSBlcnJvcnMucHVzaCh0KCdwYXNzd29yZF9sZW5ndGhfOCcpKTtcclxuICAgIGlmICghL1tBLVpdLy50ZXN0KHYpKSBlcnJvcnMucHVzaCh0KCdwYXNzd29yZF91cHBlcicpKTtcclxuICAgIGlmICghL1xcZC8udGVzdCh2KSkgZXJyb3JzLnB1c2godCgncGFzc3dvcmRfbnVtYmVyJykpO1xyXG4gICAgaWYgKCEvW1xcV19dLy50ZXN0KHYpKSBlcnJvcnMucHVzaCh0KCdwYXNzd29yZF9zcGVjaWFsJykpO1xyXG4gXHJcbiAgICByZXR1cm4gZXJyb3JzO1xyXG59XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInVzZXJfcGxhaW5QYXNzd29yZF9maXJzdFwiLCBcInVzZXJfcGFzc3dvcmRfZmlyc3QtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gcGFzc3dvcmRDaGVja2xpc3QodmFsdWUpO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwidXNlcl9wbGFpblBhc3N3b3JkX3NlY29uZFwiLCBcInVzZXJfcGFzc3dvcmRfc2Vjb25kLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJfcGxhaW5QYXNzd29yZF9maXJzdFwiKTtcclxuICAgIGlmICghZmlyc3QpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9jb25maXJtX3JlcXVpcmVkJyk7XHJcbiAgICBpZiAodmFsdWUgIT09IGZpcnN0LnZhbHVlKSByZXR1cm4gdCgncGFzc3dvcmRfbWlzbWF0Y2gnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0XCIsIFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0LWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHBhc3N3b3JkQ2hlY2tsaXN0KHZhbHVlKTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmRcIiwgXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZmlyc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdFwiKTtcclxuICAgIGlmICghZmlyc3QpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9jb25maXJtX3JlcXVpcmVkJyk7XHJcbiAgICBpZiAodmFsdWUgIT09IGZpcnN0LnZhbHVlKSByZXR1cm4gdCgncGFzc3dvcmRfbWlzbWF0Y2gnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vIE1vdCBkZSBwYXNzZSBkZSBjb25uZXhpb25cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJwYXNzd29yZFwiLCBcInBhc3N3b3JkLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX3JlcXVpcmVkJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyBNb3QgZGUgcGFzc2UgXCJvdWJsacOpXCIgKG5vdXZlYXUgbW90IGRlIHBhc3NlLCBzaSB0dSBhcyB1biBjaGFtcHMgZMOpZGnDqSlcclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJmb3Jnb3RfcGFzc3dvcmRcIiwgXCJmb3Jnb3RfcGFzc3dvcmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfcmVxdWlyZWQnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIFNVUFBPUlQgU1VQUEzDiU1FTlRBSVJFUyDihpIgY2F0ZWdvcnkgLyBtZXNzYWdlIC8gaW1hZ2VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9jYXRlZ29yeVwiLCBcInNlbGVjdGUtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3N1cHBvcnRfY2F0ZWdvcnlfcmVxdWlyZWQnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9tZXNzYWdlXCIsIFwidGV4dC1hcmVhLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgnc3VwcG9ydF9tZXNzYWdlX3JlcXVpcmVkJyk7XHJcbiAgICBpZiAodi5sZW5ndGggPCAxMCkgcmV0dXJuIHQoJ3N1cHBvcnRfbWVzc2FnZV9taW5fMTAnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vIFZBTElEQVRJT04gREUgTOKAmUlNQUdFIChzdXBwb3J0KVxyXG5yZWdpc3RlclZhbGlkYXRvcihcInN1cHBvcnRfaW1hZ2VGaWxlXCIsIFwiaW1hZ2UtZXJyb3JcIiwgKHZhbHVlLCBpbnB1dCkgPT4ge1xyXG4gICAgY29uc3QgZmlsZSA9IGlucHV0LmZpbGVzWzBdO1xyXG4gICAgaWYgKCFmaWxlKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBhbGxvd2VkID0gW1wiaW1hZ2UvanBlZ1wiLCBcImltYWdlL2pwZ1wiLCBcImltYWdlL3BuZ1wiLCBcImltYWdlL3dlYnBcIl07XHJcbiAgICBjb25zdCBtYXggPSAyICogMTAyNCAqIDEwMjQ7XHJcblxyXG4gICAgaWYgKCFhbGxvd2VkLmluY2x1ZGVzKGZpbGUudHlwZSkpIHJldHVybiB0KCdpbWFnZV90eXBlJyk7XHJcbiAgICBpZiAoZmlsZS5zaXplID4gbWF4KSByZXR1cm4gdCgnaW1hZ2Vfc2l6ZScpO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTT1VNSVNTSU9OIERVIEZPUk1VTEFJUkVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIG9uU3VibWl0KGV2KSB7XHJcbiAgICBsZXQgaGFzRXJyb3IgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBBbm51bGVyIHRvdXMgbGVzIHRpbWVycyBlbiBjb3Vyc1xyXG4gICAgT2JqZWN0LmtleXModmFsaWRhdGlvblRpbWVycykuZm9yRWFjaChpbnB1dElkID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBWw6lyaWZpZXIgdG91cyBsZXMgdmFsaWRhdGV1cnMgZW5yZWdpc3Ryw6lzXHJcbiAgICBPYmplY3Qua2V5cyh2YWxpZGF0b3JzKS5mb3JFYWNoKChpbnB1dElkKSA9PiB7XHJcbiAgICAgICAgaWYgKCFydW5WYWxpZGF0b3IoaW5wdXRJZCkpIHtcclxuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciBsYSB2YWxpZGl0w6kgSFRNTDUgZGVzIGNoYW1wcyBzYW5zIHZhbGlkYXRldXIgY3VzdG9tXHJcbiAgICBjb25zdCBmb3JtID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHJcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICAvLyBJZ25vcmVyIGxlcyBjaGFtcHMgcXVpIG9udCBkw6lqw6AgdW4gdmFsaWRhdGV1ciBjdXN0b21cclxuICAgICAgICBpZiAodmFsaWRhdG9yc1tpbnB1dC5pZF0pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChoYXNFcnJvcikge1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJTklUSUFMSVNBVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcclxuICAgIGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1mb3JtJyk7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXNlciBsZXMgaW5wdXRzIGRlIGJhc2VcclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGluaXRJbnB1dChpbnB1dCk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dC50YWdOYW1lID09PSAnU0VMRUNUJyAmJiBpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgZGUgc3VwcG9ydFxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X25hbWUnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfY2F0ZWdvcnknLCBbJ2NoYW5nZScsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X21lc3NhZ2UnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfaW1hZ2VGaWxlJywgWydjaGFuZ2UnXSwgMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgdXRpbGlzYXRldXJcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wc2V1ZG8nLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcGxhaW5QYXNzd29yZF9maXJzdCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wbGFpblBhc3N3b3JkX3NlY29uZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSByZXNldCBwYXNzd29yZFxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3QnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Jlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgZGUgY29ubmV4aW9uXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJuYW1lJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdwYXNzd29yZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgw6l2ZW50dWVscyBkdSBmb3JtdWxhaXJlIFwibW90IGRlIHBhc3NlIG91Ymxpw6lcIlxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdmb3Jnb3RfcGFzc3dvcmRfcmVxdWVzdF9mb3JtX2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdmb3Jnb3RfcGFzc3dvcmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGEgdmFsaWRhdGlvbiBhdSBzdWJtaXRcclxuICAgIGlmIChmb3JtKSB7XHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGEgdmFsaWRhdGlvbiBhdSBmb3JtdWxhaXJlIGRlIGNvbm5leGlvblxyXG4gICAgaWYgKGxvZ2luRm9ybSkge1xyXG4gICAgICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBvblN1Ym1pdCk7XHJcbiAgICB9XHJcbn0pOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWNvbnNlbnRcIik7XHJcbiAgICBjb25zdCBhY2NlcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY2VwdC1jb29raWVzXCIpO1xyXG4gICAgY29uc3QgcmVmdXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWZ1c2UtY29va2llc1wiKTtcclxuICAgIGNvbnN0IHJlbWVtYmVyQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIl9yZW1lbWJlcl9tZVwiKTtcclxuXHJcbiAgICAvLyBWw6lyaWZpZXIgcXVlIGxlcyDDqWzDqW1lbnRzIGV4aXN0ZW50XHJcbiAgICBpZiAoIWJveCB8fCAhYWNjZXB0IHx8ICFyZWZ1c2UpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCLDiWzDqW1lbnRzIGNvb2tpZSBub24gdHJvdXbDqXNcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnNlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIpO1xyXG5cclxuICAgIC8vIEFGRklDSEFHRSBJTklUSUFMXHJcbiAgICBpZiAoIWNvbnNlbnQpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgIH0sIDYwMCk7XHJcbiAgICB9IGVsc2UgaWYgKGNvbnNlbnQgPT09IFwicmVmdXNlZFwiKSB7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRMOJU0FDVElWRVIgUkVNRU1CRVIgTUUgU0kgUkVGVVNcclxuICAgIGlmIChjb25zZW50ICE9PSBcImFjY2VwdGVkXCIgJiYgcmVtZW1iZXJDaGVja2JveCkge1xyXG4gICAgICAgIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFDQ0VQVEVSXHJcbiAgICBhY2NlcHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIsIFwiYWNjZXB0ZWRcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGlmIChyZW1lbWJlckNoZWNrYm94KSByZW1lbWJlckNoZWNrYm94LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBSRUZVU0VSXHJcbiAgICByZWZ1c2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIsIFwicmVmdXNlZFwiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzZWRcIik7XHJcblxyXG4gICAgICAgIGlmIChyZW1lbWJlckNoZWNrYm94KSB7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZW1lbWJlckNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTSSBPTiBDTElRVUUgU1VSIExFIEJPVVRPTiBSw4lEVUlUIOKGkiBSw4lBRkZJQ0hFUiBMQSBCQU5OScOIUkVcclxuICAgIGNvbnN0IGNvbGxhcHNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtZXhwYW5kLWJ0blwiKTtcclxuICAgIGlmIChjb2xsYXBzZUJ0bikge1xyXG4gICAgICAgIGNvbGxhcHNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU0kgT04gQ0xJUVVFIFNVUiBSRU1FTUJFUiBNRSBBUFLDiFMgVU4gUkVGVVMg4oaSIFLDiUFGRklDSEVSIExBIEJBTk5Jw4hSRVxyXG4gICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHtcclxuICAgICAgICBjb25zdCByZW1lbWJlckxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVwiX3JlbWVtYmVyX21lXCJdJyk7XHJcbiAgICAgICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudENvbnNlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvb2tpZS1jb25zZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb25zZW50ID09PSBcInJlZnVzZWRcIikge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZWRcIik7XHJcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZW1lbWJlckNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgICAgIGlmIChyZW1lbWJlckxhYmVsKSB7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTsiLCJkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzZXQtYnRuJykuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gYnV0dG9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0LmRhdGFzZXQub3JpZ2luYWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0LmRhdGFzZXQub3JpZ2luYWw7XHJcbiAgICAgICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJpbml0U2VsZWN0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImNhcmQiLCJyYWRpbyIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiYyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImNoZWNrZWQiLCJhZGQiLCJjbG9zZXN0IiwicmVhZHlTdGF0ZSIsImF0dGFjaEhvdmVyRHJvcGRvd24iLCJ0b2dnbGVTZWxlY3RvciIsInRvZ2dsZXMiLCJ0b2dnbGUiLCJ0YXJnZXRTZWxlY3RvciIsImRhdGFzZXQiLCJkcm9wZG93blRhcmdldCIsImRyb3Bkb3duQ29udGVudCIsImhpZGVUaW1lb3V0IiwiaXNPcGVuIiwic2hvd0Ryb3Bkb3duIiwiY2xlYXJUaW1lb3V0Iiwic3R5bGUiLCJkaXNwbGF5IiwiYW5pbWF0aW9uIiwicmVhbGx5SGlkZURyb3Bkb3duIiwiaGFuZGxlciIsImV2ZW50IiwiYW5pbWF0aW9uTmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoaWRlRHJvcGRvd24iLCJzZXRUaW1lb3V0IiwidG9nZ2xlRHJvcGRvd24iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInBhc3NpdmUiLCJjb250YWlucyIsInRhcmdldCIsImF0dGFjaE5hdmJhckRyb3Bkb3duIiwibmF2YmFyTWVudSIsIm5hdmJhckNvbnRhaW5lciIsInJlZ2lvbkVscyIsImlzQ2xvc2luZyIsImlzSW5SZWdpb24iLCJlbCIsInNvbWUiLCJub2RlIiwic2hvd0FsbCIsInJlYWxseUhpZGVBbGwiLCJvbkxlYXZlUmVnaW9uIiwidG8iLCJyZWxhdGVkVGFyZ2V0IiwidG9nZ2xlTmF2YmFyIiwid2luZG93Iiwic3dpdGNoVmlldyIsInZpZXdJZCIsInYiLCJnZXRFbGVtZW50QnlJZCIsInNlbGVjdG9yIiwiaW5wdXRzIiwiZm9ybSIsImluaXRJbnB1dCIsImlucHV0RWwiLCJ3cmFwcGVyIiwicGFyZW50RWxlbWVudCIsInZhbHVlIiwidHJpbSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJldiIsInBhcmVudCIsImlucHV0IiwibGl2ZVZhbGlkYXRpb24iLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRhdG9ycyIsInZhbGlkYXRpb25UaW1lcnMiLCJyZWdpc3RlclZhbGlkYXRvciIsImlucHV0SWQiLCJlcnJvcklkIiwidmFsaWRhdGVGbiIsImJ1aWxkRXJyb3JNYXJrdXAiLCJyZXN1bHQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJpdGVtcyIsIm1hcCIsImxpbmUiLCJjb25jYXQiLCJqb2luIiwicnVuVmFsaWRhdG9yIiwiY29uZmlnIiwiZXJyb3JCb3giLCJ2aXNpYmlsaXR5IiwidGV4dENvbnRlbnQiLCJpc1ZhbGlkIiwiaW5uZXJIVE1MIiwiYXR0YWNoVmFsaWRhdG9yIiwiZXZlbnRUeXBlcyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImRlbGF5TXMiLCJldmVudFR5cGUiLCJ0Iiwia2V5IiwiYXBwVHJhbnNsYXRpb25zIiwicmVnaXN0ZXJQc2V1ZG8iLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJwc2V1ZG9GaWVsZHMiLCJmIiwicmVnaXN0ZXJFbWFpbCIsImVtYWlsRmllbGRzIiwicGFzc3dvcmRDaGVja2xpc3QiLCJlcnJvcnMiLCJwdXNoIiwidGVzdCIsImZpcnN0IiwiZmlsZSIsImZpbGVzIiwiYWxsb3dlZCIsIm1heCIsImluY2x1ZGVzIiwidHlwZSIsInNpemUiLCJvblN1Ym1pdCIsImhhc0Vycm9yIiwiT2JqZWN0Iiwia2V5cyIsImlkIiwibG9naW5Gb3JtIiwidGFnTmFtZSIsImJveCIsImFjY2VwdCIsInJlZnVzZSIsInJlbWVtYmVyQ2hlY2tib3giLCJjb25zb2xlIiwid2FybiIsImNvbnNlbnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGlzYWJsZWQiLCJzZXRJdGVtIiwiY29sbGFwc2VCdG4iLCJlIiwicmVtZW1iZXJMYWJlbCIsImNsaWNrSGFuZGxlciIsImN1cnJlbnRDb25zZW50IiwiYnV0dG9uIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm9yaWdpbmFsIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==