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
/* harmony import */ var _scripts_Layout_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/Layout/dropdown.js */ "./assets/scripts/Layout/dropdown.js");
/* harmony import */ var _scripts_Layout_dropdown_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_Layout_dropdown_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_Layout_switch_layout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/Layout/switch_layout.js */ "./assets/scripts/Layout/switch_layout.js");
/* harmony import */ var _scripts_Layout_switch_layout_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_Layout_switch_layout_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_security_form_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/security/form.js */ "./assets/scripts/security/form.js");
/* harmony import */ var _scripts_security_form_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_security_form_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scripts_security_remember_me_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/security/remember_me.js */ "./assets/scripts/security/remember_me.js");
/* harmony import */ var _scripts_security_remember_me_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_security_remember_me_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _scripts_security_reset_btn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/security/reset-btn.js */ "./assets/scripts/security/reset-btn.js");
/* harmony import */ var _scripts_security_reset_btn_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scripts_security_reset_btn_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _scripts_Game_utils_faction_game_choice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/Game/utils/faction-game-choice.js */ "./assets/scripts/Game/utils/faction-game-choice.js");
/* harmony import */ var _scripts_Game_utils_faction_game_choice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scripts_Game_utils_faction_game_choice_js__WEBPACK_IMPORTED_MODULE_8__);


/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */







// Game-specific scripts (only loaded on game pages)


/***/ },

/***/ "./assets/scripts/Game/utils/faction-game-choice.js"
/*!**********************************************************!*\
  !*** ./assets/scripts/Game/utils/faction-game-choice.js ***!
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

/***/ "./assets/scripts/Layout/dropdown.js"
/*!*******************************************!*\
  !*** ./assets/scripts/Layout/dropdown.js ***!
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

/***/ "./assets/scripts/Layout/switch_layout.js"
/*!************************************************!*\
  !*** ./assets/scripts/Layout/switch_layout.js ***!
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-bf79e2"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ047QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBRVc7QUFDSztBQUNQO0FBQ087QUFDRjs7QUFHekM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGFBQWFBLENBQUEsRUFBRztFQUVyQjtFQUNBQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQUMsSUFBSSxFQUFJO0lBQ3BELElBQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxhQUFhLENBQUMscUJBQXFCLENBQUM7SUFDdkQsSUFBSUQsS0FBSyxFQUFFO01BQ1BBLEtBQUssQ0FBQ0UsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVk7UUFDekNOLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBSyxDQUFDO1VBQUEsT0FBSUEsQ0FBQyxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFBQSxFQUFDO1FBQ3BGLElBQUksSUFBSSxDQUFDQyxPQUFPLEVBQUU7VUFDZFAsSUFBSSxDQUFDSyxTQUFTLENBQUNHLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDbEM7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUMsQ0FBQzs7RUFFRjtFQUNBWCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQUMsSUFBSSxFQUFJO0lBQ3ZELElBQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxhQUFhLENBQUMscUJBQXFCLENBQUM7SUFDdkQsSUFBSUQsS0FBSyxFQUFFO01BQ1BBLEtBQUssQ0FBQ0UsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVk7UUFDekNOLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBSyxDQUFDO1VBQUEsT0FBSUEsQ0FBQyxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFBQSxFQUFDO1FBQ3ZGLElBQUksSUFBSSxDQUFDQyxPQUFPLEVBQUU7VUFDZFAsSUFBSSxDQUFDSyxTQUFTLENBQUNHLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDbEM7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUMsQ0FBQzs7RUFFRjtFQUNBWCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBRSxLQUFLLEVBQUk7SUFDdEUsSUFBTUQsSUFBSSxHQUFHQyxLQUFLLENBQUNRLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQztJQUN2RCxJQUFJVCxJQUFJLEVBQUU7TUFDTkEsSUFBSSxDQUFDSyxTQUFTLENBQUNHLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDbEM7RUFDSixDQUFDLENBQUM7QUFDTjs7QUFFQTtBQUNBLElBQUlYLFFBQVEsQ0FBQ2EsVUFBVSxLQUFLLFNBQVMsRUFBRTtFQUNuQ2IsUUFBUSxDQUFDTSxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRVAsYUFBYSxDQUFDO0FBQ2hFLENBQUMsTUFBTTtFQUNIQSxhQUFhLENBQUMsQ0FBQztBQUNuQixDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQSxTQUFTZSxtQkFBbUJBLENBQUNDLGNBQWMsRUFBRTtFQUN6QyxJQUFNQyxPQUFPLEdBQUdoQixRQUFRLENBQUNDLGdCQUFnQixDQUFDYyxjQUFjLENBQUM7RUFFekRDLE9BQU8sQ0FBQ2QsT0FBTyxDQUFDLFVBQUNlLE1BQU0sRUFBSztJQUN4QixJQUFNQyxjQUFjLEdBQUdELE1BQU0sQ0FBQ0UsT0FBTyxDQUFDQyxjQUFjO0lBQ3BELElBQUksQ0FBQ0YsY0FBYyxFQUFFO0lBRXJCLElBQU1HLGVBQWUsR0FBR3JCLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDYSxjQUFjLENBQUM7SUFDOUQsSUFBSSxDQUFDRyxlQUFlLEVBQUU7SUFFdEIsSUFBSUMsV0FBVyxHQUFHLElBQUk7SUFDdEIsSUFBSUMsTUFBTSxHQUFHLEtBQUs7SUFFbEIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztNQUN2QixJQUFJRixXQUFXLEVBQUU7UUFDYkcsWUFBWSxDQUFDSCxXQUFXLENBQUM7UUFDekJBLFdBQVcsR0FBRyxJQUFJO01BQ3RCO01BRUFDLE1BQU0sR0FBRyxJQUFJO01BQ2JGLGVBQWUsQ0FBQ0ssS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtNQUN0Q04sZUFBZSxDQUFDSyxLQUFLLENBQUNFLFNBQVMsR0FBRyxrQ0FBa0M7TUFDcEVYLE1BQU0sQ0FBQ1QsU0FBUyxDQUFDRyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFNa0Isa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFrQkEsQ0FBQSxFQUFTO01BQzdCUixlQUFlLENBQUNLLEtBQUssQ0FBQ0UsU0FBUyxHQUFHLHVDQUF1QztNQUV6RSxJQUFNRSxRQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsS0FBSyxFQUFLO1FBQ3ZCLElBQUlBLEtBQUssQ0FBQ0MsYUFBYSxLQUFLLG1CQUFtQixFQUFFO1VBQzdDWCxlQUFlLENBQUNLLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07VUFDdENWLE1BQU0sQ0FBQ1QsU0FBUyxDQUFDQyxNQUFNLENBQUMsZUFBZSxDQUFDO1VBQ3hDWSxlQUFlLENBQUNZLG1CQUFtQixDQUFDLGNBQWMsRUFBRUgsUUFBTyxDQUFDO1VBQzVEUCxNQUFNLEdBQUcsS0FBSztRQUNsQjtNQUNKLENBQUM7TUFFREYsZUFBZSxDQUFDZixnQkFBZ0IsQ0FBQyxjQUFjLEVBQUV3QixRQUFPLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7TUFDdkJaLFdBQVcsR0FBR2EsVUFBVSxDQUFDTixrQkFBa0IsRUFBRSxHQUFHLENBQUM7SUFDckQsQ0FBQztJQUVELElBQU1PLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSUwsS0FBSyxFQUFLO01BQzlCQSxLQUFLLENBQUNNLGNBQWMsQ0FBQyxDQUFDO01BQ3RCTixLQUFLLENBQUNPLGVBQWUsQ0FBQyxDQUFDO01BRXZCLElBQUlmLE1BQU0sRUFBRTtRQUNSLElBQUlELFdBQVcsRUFBRTtVQUNiRyxZQUFZLENBQUNILFdBQVcsQ0FBQztRQUM3QjtRQUNBTyxrQkFBa0IsQ0FBQyxDQUFDO01BQ3hCLENBQUMsTUFBTTtRQUNITCxZQUFZLENBQUMsQ0FBQztNQUNsQjtJQUNKLENBQUM7O0lBRUQ7SUFDQVAsTUFBTSxDQUFDWCxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVrQixZQUFZLENBQUM7SUFDbkRQLE1BQU0sQ0FBQ1gsZ0JBQWdCLENBQUMsWUFBWSxFQUFFNEIsWUFBWSxDQUFDO0lBQ25EYixlQUFlLENBQUNmLGdCQUFnQixDQUFDLFlBQVksRUFBRWtCLFlBQVksQ0FBQztJQUM1REgsZUFBZSxDQUFDZixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU0QixZQUFZLENBQUM7O0lBRTVEO0lBQ0FqQixNQUFNLENBQUNYLGdCQUFnQixDQUFDLE9BQU8sRUFBRThCLGNBQWMsQ0FBQztJQUNoRG5CLE1BQU0sQ0FBQ1gsZ0JBQWdCLENBQUMsWUFBWSxFQUFFOEIsY0FBYyxFQUFFO01BQUVHLE9BQU8sRUFBRTtJQUFNLENBQUMsQ0FBQzs7SUFFekU7SUFDQXZDLFFBQVEsQ0FBQ00sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUN5QixLQUFLLEVBQUs7TUFDMUMsSUFBSVIsTUFBTSxJQUFJLENBQUNOLE1BQU0sQ0FBQ3VCLFFBQVEsQ0FBQ1QsS0FBSyxDQUFDVSxNQUFNLENBQUMsSUFBSSxDQUFDcEIsZUFBZSxDQUFDbUIsUUFBUSxDQUFDVCxLQUFLLENBQUNVLE1BQU0sQ0FBQyxFQUFFO1FBQ3JGLElBQUluQixXQUFXLEVBQUU7VUFDYkcsWUFBWSxDQUFDSCxXQUFXLENBQUM7UUFDN0I7UUFDQU8sa0JBQWtCLENBQUMsQ0FBQztNQUN4QjtJQUNKLENBQUMsQ0FBQztJQUVGN0IsUUFBUSxDQUFDTSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsVUFBQ3lCLEtBQUssRUFBSztNQUMvQyxJQUFJUixNQUFNLElBQUksQ0FBQ04sTUFBTSxDQUFDdUIsUUFBUSxDQUFDVCxLQUFLLENBQUNVLE1BQU0sQ0FBQyxJQUFJLENBQUNwQixlQUFlLENBQUNtQixRQUFRLENBQUNULEtBQUssQ0FBQ1UsTUFBTSxDQUFDLEVBQUU7UUFDckYsSUFBSW5CLFdBQVcsRUFBRTtVQUNiRyxZQUFZLENBQUNILFdBQVcsQ0FBQztRQUM3QjtRQUNBTyxrQkFBa0IsQ0FBQyxDQUFDO01BQ3hCO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047QUFFQSxTQUFTYSxvQkFBb0JBLENBQUEsRUFBRztFQUM1QixJQUFNekIsTUFBTSxHQUFHakIsUUFBUSxDQUFDSyxhQUFhLENBQUMseUJBQXlCLENBQUM7RUFDaEUsSUFBTXNDLFVBQVUsR0FBRzNDLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUN6RCxJQUFNdUMsZUFBZSxHQUFHNUMsUUFBUSxDQUFDSyxhQUFhLENBQUMsa0JBQWtCLENBQUM7RUFFbEUsSUFBSSxDQUFDWSxNQUFNLElBQUksQ0FBQzBCLFVBQVUsSUFBSSxDQUFDQyxlQUFlLEVBQUU7RUFFaEQsSUFBTTFCLGNBQWMsR0FBR0QsTUFBTSxDQUFDRSxPQUFPLENBQUNDLGNBQWM7RUFDcEQsSUFBSSxDQUFDRixjQUFjLEVBQUU7RUFFckIsSUFBTUcsZUFBZSxHQUFHckIsUUFBUSxDQUFDSyxhQUFhLENBQUNhLGNBQWMsQ0FBQztFQUM5RCxJQUFJLENBQUNHLGVBQWUsRUFBRTtFQUV0QixJQUFNd0IsU0FBUyxHQUFHLENBQUM1QixNQUFNLEVBQUUyQixlQUFlLEVBQUV2QixlQUFlLENBQUM7RUFFNUQsSUFBSUMsV0FBVyxHQUFHLElBQUk7RUFDdEIsSUFBSXdCLFNBQVMsR0FBRyxLQUFLO0VBQ3JCLElBQUl2QixNQUFNLEdBQUcsS0FBSztFQUVsQixJQUFNd0IsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLEVBQUU7SUFBQSxPQUNsQkgsU0FBUyxDQUFDSSxJQUFJLENBQUMsVUFBQ0MsSUFBSTtNQUFBLE9BQUtBLElBQUksSUFBSUEsSUFBSSxDQUFDVixRQUFRLENBQUNRLEVBQUUsQ0FBQztJQUFBLEVBQUM7RUFBQTtFQUV2RCxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0lBQ2xCLElBQUk3QixXQUFXLEVBQUU7TUFDYkcsWUFBWSxDQUFDSCxXQUFXLENBQUM7TUFDekJBLFdBQVcsR0FBRyxJQUFJO0lBQ3RCO0lBRUF3QixTQUFTLEdBQUcsS0FBSztJQUNqQnZCLE1BQU0sR0FBRyxJQUFJO0lBRWJGLGVBQWUsQ0FBQ0ssS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtJQUN0Q04sZUFBZSxDQUFDSyxLQUFLLENBQUNFLFNBQVMsR0FBRyxrQ0FBa0M7SUFDcEVYLE1BQU0sQ0FBQ1QsU0FBUyxDQUFDRyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBRXJDZ0MsVUFBVSxDQUFDbkMsU0FBUyxDQUFDQyxNQUFNLENBQUMsdUJBQXVCLENBQUM7SUFDcERrQyxVQUFVLENBQUNuQyxTQUFTLENBQUNHLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztJQUVqRGlDLGVBQWUsQ0FBQ2xCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDdENpQixlQUFlLENBQUNwQyxTQUFTLENBQUNDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztJQUM3RG1DLGVBQWUsQ0FBQ3BDLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLDJCQUEyQixDQUFDO0VBQzlELENBQUM7RUFFRCxJQUFNeUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDeEJOLFNBQVMsR0FBRyxJQUFJO0lBQ2hCdkIsTUFBTSxHQUFHLEtBQUs7SUFFZEYsZUFBZSxDQUFDSyxLQUFLLENBQUNFLFNBQVMsR0FBRyx1Q0FBdUM7SUFFekUsSUFBTUUsU0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUlDLEtBQUssRUFBSztNQUN2QixJQUFJQSxLQUFLLENBQUNDLGFBQWEsS0FBSyxtQkFBbUIsRUFBRTtRQUM3QyxJQUFJLENBQUNjLFNBQVMsRUFBRTtVQUNaekIsZUFBZSxDQUFDWSxtQkFBbUIsQ0FBQyxjQUFjLEVBQUVILFNBQU8sQ0FBQztVQUM1RDtRQUNKO1FBRUFULGVBQWUsQ0FBQ0ssS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtRQUN0Q1YsTUFBTSxDQUFDVCxTQUFTLENBQUNDLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDeENZLGVBQWUsQ0FBQ1ksbUJBQW1CLENBQUMsY0FBYyxFQUFFSCxTQUFPLENBQUM7TUFDaEU7SUFDSixDQUFDO0lBQ0RULGVBQWUsQ0FBQ2YsZ0JBQWdCLENBQUMsY0FBYyxFQUFFd0IsU0FBTyxDQUFDO0lBRXpEYyxlQUFlLENBQUNwQyxTQUFTLENBQUNDLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQztJQUM3RG1DLGVBQWUsQ0FBQ3BDLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLDJCQUEyQixDQUFDO0lBRTFEZ0MsVUFBVSxDQUFDbkMsU0FBUyxDQUFDQyxNQUFNLENBQUMsdUJBQXVCLENBQUM7SUFDcERrQyxVQUFVLENBQUNuQyxTQUFTLENBQUNHLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztFQUNyRCxDQUFDO0VBRUQsSUFBTTBDLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSXRCLEtBQUssRUFBSztJQUM3QixJQUFNdUIsRUFBRSxHQUFHdkIsS0FBSyxDQUFDd0IsYUFBYTtJQUM5QixJQUFJRCxFQUFFLElBQUlQLFVBQVUsQ0FBQ08sRUFBRSxDQUFDLEVBQUU7SUFFMUIsSUFBSWhDLFdBQVcsRUFBRTtNQUNiRyxZQUFZLENBQUNILFdBQVcsQ0FBQztJQUM3QjtJQUNBQSxXQUFXLEdBQUdhLFVBQVUsQ0FBQ2lCLGFBQWEsRUFBRSxHQUFHLENBQUM7RUFDaEQsQ0FBQztFQUVELElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJekIsS0FBSyxFQUFLO0lBQzVCQSxLQUFLLENBQUNNLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCTixLQUFLLENBQUNPLGVBQWUsQ0FBQyxDQUFDO0lBRXZCLElBQUlmLE1BQU0sRUFBRTtNQUNSLElBQUlELFdBQVcsRUFBRTtRQUNiRyxZQUFZLENBQUNILFdBQVcsQ0FBQztNQUM3QjtNQUNBOEIsYUFBYSxDQUFDLENBQUM7SUFDbkIsQ0FBQyxNQUFNO01BQ0hELE9BQU8sQ0FBQyxDQUFDO0lBQ2I7RUFDSixDQUFDOztFQUVEO0VBQ0FOLFNBQVMsQ0FBQzNDLE9BQU8sQ0FBQyxVQUFDOEMsRUFBRSxFQUFLO0lBQ3RCQSxFQUFFLENBQUMxQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU2QyxPQUFPLENBQUM7SUFDMUNILEVBQUUsQ0FBQzFDLGdCQUFnQixDQUFDLFlBQVksRUFBRStDLGFBQWEsQ0FBQztFQUNwRCxDQUFDLENBQUM7O0VBRUY7RUFDQXBDLE1BQU0sQ0FBQ1gsZ0JBQWdCLENBQUMsT0FBTyxFQUFFa0QsWUFBWSxDQUFDO0VBQzlDdkMsTUFBTSxDQUFDWCxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVrRCxZQUFZLEVBQUU7SUFBRWpCLE9BQU8sRUFBRTtFQUFNLENBQUMsQ0FBQzs7RUFFdkU7RUFDQXZDLFFBQVEsQ0FBQ00sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUN5QixLQUFLLEVBQUs7SUFDMUMsSUFBSVIsTUFBTSxJQUFJLENBQUN3QixVQUFVLENBQUNoQixLQUFLLENBQUNVLE1BQU0sQ0FBQyxFQUFFO01BQ3JDLElBQUluQixXQUFXLEVBQUU7UUFDYkcsWUFBWSxDQUFDSCxXQUFXLENBQUM7TUFDN0I7TUFDQThCLGFBQWEsQ0FBQyxDQUFDO0lBQ25CO0VBQ0osQ0FBQyxDQUFDO0VBRUZwRCxRQUFRLENBQUNNLGdCQUFnQixDQUFDLFlBQVksRUFBRSxVQUFDeUIsS0FBSyxFQUFLO0lBQy9DLElBQUlSLE1BQU0sSUFBSSxDQUFDd0IsVUFBVSxDQUFDaEIsS0FBSyxDQUFDVSxNQUFNLENBQUMsRUFBRTtNQUNyQyxJQUFJbkIsV0FBVyxFQUFFO1FBQ2JHLFlBQVksQ0FBQ0gsV0FBVyxDQUFDO01BQzdCO01BQ0E4QixhQUFhLENBQUMsQ0FBQztJQUNuQjtFQUNKLENBQUMsQ0FBQztBQUNOO0FBRUFwRCxRQUFRLENBQUNNLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDaERvQyxvQkFBb0IsQ0FBQyxDQUFDO0VBQ3RCNUIsbUJBQW1CLENBQUMsMkJBQTJCLENBQUM7RUFDaERBLG1CQUFtQixDQUFDLHdCQUF3QixDQUFDO0FBQ2pELENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7QUN6TkYyQyxNQUFNLENBQUNDLFVBQVUsR0FBRyxVQUFTQyxNQUFNLEVBQUU7RUFDakMzRCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQTBELENBQUM7SUFBQSxPQUFJQSxDQUFDLENBQUNsQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQUEsRUFBQztFQUNqRjNCLFFBQVEsQ0FBQzZELGNBQWMsQ0FBQ0YsTUFBTSxDQUFDLENBQUNqQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0FBQzFELENBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1tQyxRQUFRLEdBQUcseUdBQXlHO0FBQzFILElBQU1DLE1BQU0sR0FBRy9ELFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUM2RCxRQUFRLENBQUM7QUFDbEQsSUFBTUUsSUFBSSxHQUFHaEUsUUFBUSxDQUFDSyxhQUFhLENBQUMsV0FBVyxDQUFDOztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxTQUFTNEQsU0FBU0EsQ0FBQ0MsT0FBTyxFQUFFO0VBQ3hCLElBQU1DLE9BQU8sR0FBR0QsT0FBTyxDQUFDdEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJc0QsT0FBTyxDQUFDRSxhQUFhO0VBRWhFLElBQUlGLE9BQU8sQ0FBQ0csS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtJQUM3QkgsT0FBTyxhQUFQQSxPQUFPLGVBQVBBLE9BQU8sQ0FBRTNELFNBQVMsQ0FBQ0csR0FBRyxDQUFDLGdCQUFnQixDQUFDO0VBQzVDO0VBRUF1RCxPQUFPLENBQUM1RCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVpRSxPQUFPLENBQUM7RUFDMUNMLE9BQU8sQ0FBQzVELGdCQUFnQixDQUFDLE1BQU0sRUFBRWtFLE1BQU0sQ0FBQzs7RUFFeEM7RUFDQU4sT0FBTyxDQUFDNUQsZ0JBQWdCLENBQUMsVUFBVSxFQUFFa0UsTUFBTSxDQUFDO0FBQ2hEO0FBRUEsU0FBU0QsT0FBT0EsQ0FBQ0UsRUFBRSxFQUFFO0VBQ2pCLElBQU1DLE1BQU0sR0FBR0QsRUFBRSxDQUFDaEMsTUFBTSxDQUFDN0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJNkQsRUFBRSxDQUFDaEMsTUFBTSxDQUFDMkIsYUFBYTtFQUVuRSxJQUFJTSxNQUFNLElBQUlBLE1BQU0sQ0FBQ2xFLFNBQVMsRUFBRTtJQUM1QmtFLE1BQU0sQ0FBQ2xFLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLGdCQUFnQixDQUFDO0VBQzFDO0FBQ0o7QUFFQSxTQUFTNkQsTUFBTUEsQ0FBQ0MsRUFBRSxFQUFFO0VBQ2hCLElBQU1FLEtBQUssR0FBR0YsRUFBRSxDQUFDaEMsTUFBTTtFQUN2QixJQUFNMEIsT0FBTyxHQUFHUSxLQUFLLENBQUMvRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUkrRCxLQUFLLENBQUNQLGFBQWE7RUFFNUQsSUFBSU8sS0FBSyxDQUFDTixLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQzNCSCxPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFM0QsU0FBUyxDQUFDQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUM7RUFDbEUsQ0FBQyxNQUFNO0lBQ0gwRCxPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFM0QsU0FBUyxDQUFDRyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFDNUM7QUFDSjtBQUVBLFNBQVNpRSxjQUFjQSxDQUFDSCxFQUFFLEVBQUU7RUFDeEIsSUFBTUUsS0FBSyxHQUFHRixFQUFFLENBQUNoQyxNQUFNO0VBQ3ZCLElBQU0wQixPQUFPLEdBQUdRLEtBQUssQ0FBQy9ELE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSStELEtBQUssQ0FBQ1AsYUFBYTtFQUU1RCxJQUFJLENBQUNPLEtBQUssQ0FBQ0UsYUFBYSxDQUFDLENBQUMsRUFBRTtJQUN4QlYsT0FBTyxhQUFQQSxPQUFPLGVBQVBBLE9BQU8sQ0FBRTNELFNBQVMsQ0FBQ0csR0FBRyxDQUFDLGlCQUFpQixDQUFDO0VBQzdDLENBQUMsTUFBTTtJQUNId0QsT0FBTyxhQUFQQSxPQUFPLGVBQVBBLE9BQU8sQ0FBRTNELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0VBQ2hEO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBTXFFLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDckIsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFN0IsU0FBU0MsaUJBQWlCQSxDQUFDQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO0VBQ3JETCxVQUFVLENBQUNHLE9BQU8sQ0FBQyxHQUFHO0lBQUVDLE9BQU8sRUFBUEEsT0FBTztJQUFFQyxVQUFVLEVBQVZBO0VBQVcsQ0FBQztBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxnQkFBZ0JBLENBQUNDLE1BQU0sRUFBRTtFQUM5QixJQUFJQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDLEVBQUU7SUFDdkIsSUFBSUEsTUFBTSxDQUFDRyxNQUFNLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRTtJQUNsQyxJQUFNQyxLQUFLLEdBQUdKLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLFVBQUFDLElBQUk7TUFBQSxjQUFBQyxNQUFBLENBQVdELElBQUk7SUFBQSxDQUFPLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUM3RCx3Q0FBQUQsTUFBQSxDQUFzQ0gsS0FBSztFQUMvQztFQUNBLE9BQU9KLE1BQU07QUFDakI7QUFFQSxTQUFTUyxZQUFZQSxDQUFDYixPQUFPLEVBQUU7RUFDM0IsSUFBTWMsTUFBTSxHQUFHakIsVUFBVSxDQUFDRyxPQUFPLENBQUM7RUFDbEMsSUFBSSxDQUFDYyxNQUFNLEVBQUUsT0FBTyxJQUFJO0VBRXhCLElBQU1wQixLQUFLLEdBQUczRSxRQUFRLENBQUM2RCxjQUFjLENBQUNvQixPQUFPLENBQUM7RUFDOUMsSUFBTWUsUUFBUSxHQUFHaEcsUUFBUSxDQUFDNkQsY0FBYyxDQUFDa0MsTUFBTSxDQUFDYixPQUFPLENBQUM7RUFFeEQsSUFBSSxDQUFDUCxLQUFLLElBQUksQ0FBQ3FCLFFBQVEsRUFBRSxPQUFPLElBQUk7RUFFcEMsSUFBTTdCLE9BQU8sR0FBR1EsS0FBSyxDQUFDL0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJK0QsS0FBSyxDQUFDUCxhQUFhO0VBRTVENEIsUUFBUSxDQUFDdEUsS0FBSyxDQUFDdUUsVUFBVSxHQUFHLFFBQVE7RUFDcENELFFBQVEsQ0FBQ0UsV0FBVyxHQUFHLE1BQVE7RUFDL0IvQixPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFM0QsU0FBUyxDQUFDQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7RUFFNUMsSUFBTTRFLE1BQU0sR0FBR1UsTUFBTSxDQUFDWixVQUFVLENBQUNSLEtBQUssQ0FBQ04sS0FBSyxFQUFFTSxLQUFLLENBQUM7RUFFcEQsSUFBTXdCLE9BQU8sR0FBR2QsTUFBTSxLQUFLLElBQUksSUFBS0MsS0FBSyxDQUFDQyxPQUFPLENBQUNGLE1BQU0sQ0FBQyxJQUFJQSxNQUFNLENBQUNHLE1BQU0sS0FBSyxDQUFFO0VBRWpGLElBQUksQ0FBQ1csT0FBTyxFQUFFO0lBQ1ZILFFBQVEsQ0FBQ0ksU0FBUyxHQUFHaEIsZ0JBQWdCLENBQUNDLE1BQU0sQ0FBQztJQUM3Q1csUUFBUSxDQUFDdEUsS0FBSyxDQUFDdUUsVUFBVSxHQUFHLFNBQVM7SUFDckM5QixPQUFPLGFBQVBBLE9BQU8sZUFBUEEsT0FBTyxDQUFFM0QsU0FBUyxDQUFDRyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDekMsT0FBTyxLQUFLO0VBQ2hCO0VBRUEsT0FBTyxJQUFJO0FBQ2Y7QUFFQSxTQUFTMEYsZUFBZUEsQ0FBQ3BCLE9BQU8sRUFBa0Q7RUFBQSxJQUFoRHFCLFVBQVUsR0FBQUMsU0FBQSxDQUFBZixNQUFBLFFBQUFlLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0VBQUEsSUFBRUUsT0FBTyxHQUFBRixTQUFBLENBQUFmLE1BQUEsUUFBQWUsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxJQUFJO0VBQzVFLElBQU01QixLQUFLLEdBQUczRSxRQUFRLENBQUM2RCxjQUFjLENBQUNvQixPQUFPLENBQUM7RUFDOUMsSUFBSSxDQUFDTixLQUFLLEVBQUU7RUFFWjJCLFVBQVUsQ0FBQ3BHLE9BQU8sQ0FBQyxVQUFBd0csU0FBUyxFQUFJO0lBQzVCLElBQUlBLFNBQVMsS0FBSyxPQUFPLEVBQUU7TUFDdkI7TUFDQS9CLEtBQUssQ0FBQ3JFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQ2xDLElBQUl5RSxnQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDLEVBQUU7VUFDM0J4RCxZQUFZLENBQUNzRCxnQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7UUFDM0M7UUFFQUYsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQyxHQUFHOUMsVUFBVSxDQUFDLFlBQU07VUFDekMyRCxZQUFZLENBQUNiLE9BQU8sQ0FBQztRQUN6QixDQUFDLEVBQUV3QixPQUFPLENBQUM7TUFDZixDQUFDLENBQUM7SUFDTixDQUFDLE1BQU0sSUFBSUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtNQUMvQjtNQUNBL0IsS0FBSyxDQUFDckUsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07UUFDbkMsSUFBSXlFLGdCQUFnQixDQUFDRSxPQUFPLENBQUMsRUFBRTtVQUMzQnhELFlBQVksQ0FBQ3NELGdCQUFnQixDQUFDRSxPQUFPLENBQUMsQ0FBQztVQUN2QyxPQUFPRixnQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDO1FBQ3BDO1FBQ0FhLFlBQVksQ0FBQ2IsT0FBTyxDQUFDO01BQ3pCLENBQUMsQ0FBQztJQUNOLENBQUMsTUFBTSxJQUFJeUIsU0FBUyxLQUFLLE1BQU0sRUFBRTtNQUM3QjtNQUNBL0IsS0FBSyxDQUFDckUsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQU07UUFDakMsSUFBSXlFLGdCQUFnQixDQUFDRSxPQUFPLENBQUMsRUFBRTtVQUMzQnhELFlBQVksQ0FBQ3NELGdCQUFnQixDQUFDRSxPQUFPLENBQUMsQ0FBQztVQUN2QyxPQUFPRixnQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDO1FBQ3BDO1FBQ0FhLFlBQVksQ0FBQ2IsT0FBTyxDQUFDO01BQ3pCLENBQUMsQ0FBQzs7TUFFRjtNQUNBTixLQUFLLENBQUNyRSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsWUFBTTtRQUNyQyxJQUFJeUUsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQyxFQUFFO1VBQzNCeEQsWUFBWSxDQUFDc0QsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQyxDQUFDO1VBQ3ZDLE9BQU9GLGdCQUFnQixDQUFDRSxPQUFPLENBQUM7UUFDcEM7UUFDQTtRQUNBOUMsVUFBVSxDQUFDO1VBQUEsT0FBTTJELFlBQVksQ0FBQ2IsT0FBTyxDQUFDO1FBQUEsR0FBRSxHQUFHLENBQUM7TUFDaEQsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxNQUFNLElBQUl5QixTQUFTLEtBQUssT0FBTyxFQUFFO01BQzlCO01BQ0EvQixLQUFLLENBQUNyRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtRQUNsQyxJQUFJeUUsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQyxFQUFFO1VBQzNCeEQsWUFBWSxDQUFDc0QsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQyxDQUFDO1VBQ3ZDLE9BQU9GLGdCQUFnQixDQUFDRSxPQUFPLENBQUM7UUFDcEM7UUFDQWEsWUFBWSxDQUFDYixPQUFPLENBQUM7TUFDekIsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDLENBQUM7QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzBCLENBQUNBLENBQUNDLEdBQUcsRUFBRTtFQUNaLE9BQVFuRCxNQUFNLENBQUNvRCxlQUFlLElBQUlwRCxNQUFNLENBQUNvRCxlQUFlLENBQUNELEdBQUcsQ0FBQyxJQUFLQSxHQUFHO0FBQ3pFO0FBRUEsU0FBU0UsY0FBY0EsQ0FBQzdCLE9BQU8sRUFBRUMsT0FBTyxFQUFpQztFQUFBLElBQS9CNkIsU0FBUyxHQUFBUixTQUFBLENBQUFmLE1BQUEsUUFBQWUsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxDQUFDO0VBQUEsSUFBRVMsU0FBUyxHQUFBVCxTQUFBLENBQUFmLE1BQUEsUUFBQWUsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxFQUFFO0VBQ25FdkIsaUJBQWlCLENBQUNDLE9BQU8sRUFBRUMsT0FBTyxFQUFFLFVBQUNiLEtBQUssRUFBSztJQUMzQyxJQUFNVCxDQUFDLEdBQUdTLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDdEIsSUFBSVYsQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPK0MsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0lBQ3pDLElBQUkvQyxDQUFDLENBQUM0QixNQUFNLEdBQUd1QixTQUFTLEVBQUUsT0FBT0osQ0FBQyxDQUFDLGNBQWMsQ0FBQztJQUNsRCxJQUFJL0MsQ0FBQyxDQUFDNEIsTUFBTSxHQUFHd0IsU0FBUyxFQUFFLE9BQU9MLENBQUMsQ0FBQyxlQUFlLENBQUM7SUFDbkQsT0FBTyxJQUFJO0VBQ2YsQ0FBQyxDQUFDO0FBQ047QUFFQSxJQUFNTSxZQUFZLEdBQUcsQ0FDakI7RUFBRWhDLE9BQU8sRUFBRSxjQUFjO0VBQUVDLE9BQU8sRUFBRSxjQUFjO0VBQUU2QixTQUFTLEVBQUUsQ0FBQztFQUFFQyxTQUFTLEVBQUU7QUFBRyxDQUFDLEVBQ2pGO0VBQUUvQixPQUFPLEVBQUUsYUFBYTtFQUFFQyxPQUFPLEVBQUUsbUJBQW1CO0VBQUU2QixTQUFTLEVBQUUsQ0FBQztFQUFFQyxTQUFTLEVBQUU7QUFBRyxDQUFDLENBQ3hGO0FBRURDLFlBQVksQ0FBQy9HLE9BQU8sQ0FBQyxVQUFBZ0gsQ0FBQztFQUFBLE9BQUlKLGNBQWMsQ0FBQ0ksQ0FBQyxDQUFDakMsT0FBTyxFQUFFaUMsQ0FBQyxDQUFDaEMsT0FBTyxFQUFFZ0MsQ0FBQyxDQUFDSCxTQUFTLEVBQUVHLENBQUMsQ0FBQ0YsU0FBUyxDQUFDO0FBQUEsRUFBQzs7QUFFekY7QUFDQTtBQUNBOztBQUVBLFNBQVNHLGFBQWFBLENBQUNsQyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtFQUNyQ0YsaUJBQWlCLENBQUNDLE9BQU8sRUFBRUMsT0FBTyxFQUFFLFVBQUNiLEtBQUssRUFBRU0sS0FBSyxFQUFLO0lBQ2xELElBQU1mLENBQUMsR0FBR1MsS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUN0QixJQUFJVixDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8rQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7SUFDeEMsSUFBSSxDQUFDaEMsS0FBSyxDQUFDRSxhQUFhLENBQUMsQ0FBQyxFQUFFLE9BQU84QixDQUFDLENBQUMsZUFBZSxDQUFDO0lBQ3JELE9BQU8sSUFBSTtFQUNmLENBQUMsQ0FBQztBQUNOO0FBRUEsSUFBTVMsV0FBVyxHQUFHLENBQ2hCO0VBQUVuQyxPQUFPLEVBQUUsZUFBZTtFQUFFQyxPQUFPLEVBQUU7QUFBYyxDQUFDLEVBQ3BEO0VBQUVELE9BQU8sRUFBRSxZQUFZO0VBQUVDLE9BQU8sRUFBRTtBQUFtQixDQUFDLEVBQ3REO0VBQUVELE9BQU8sRUFBRSxVQUFVO0VBQUVDLE9BQU8sRUFBRTtBQUFpQixDQUFDLEVBQ2xEO0VBQUVELE9BQU8sRUFBRSxvQ0FBb0M7RUFBRUMsT0FBTyxFQUFFO0FBQXFCLENBQUMsQ0FDbkY7QUFFRGtDLFdBQVcsQ0FBQ2xILE9BQU8sQ0FBQyxVQUFBZ0gsQ0FBQztFQUFBLE9BQUlDLGFBQWEsQ0FBQ0QsQ0FBQyxDQUFDakMsT0FBTyxFQUFFaUMsQ0FBQyxDQUFDaEMsT0FBTyxDQUFDO0FBQUEsRUFBQzs7QUFFN0Q7QUFDQTtBQUNBOztBQUVBLFNBQVNtQyxpQkFBaUJBLENBQUNoRCxLQUFLLEVBQUU7RUFDOUIsSUFBTVQsQ0FBQyxHQUFHUyxLQUFLO0VBQ2YsSUFBTWlELE1BQU0sR0FBRyxFQUFFO0VBRWpCLElBQUkxRCxDQUFDLENBQUM0QixNQUFNLEdBQUcsQ0FBQyxFQUFFOEIsTUFBTSxDQUFDQyxJQUFJLENBQUNaLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0VBQ3JELElBQUksQ0FBQyxPQUFPLENBQUNhLElBQUksQ0FBQzVELENBQUMsQ0FBQyxFQUFFMEQsTUFBTSxDQUFDQyxJQUFJLENBQUNaLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0VBQ3RELElBQUksQ0FBQyxJQUFJLENBQUNhLElBQUksQ0FBQzVELENBQUMsQ0FBQyxFQUFFMEQsTUFBTSxDQUFDQyxJQUFJLENBQUNaLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0VBQ3BELElBQUksQ0FBQyxPQUFPLENBQUNhLElBQUksQ0FBQzVELENBQUMsQ0FBQyxFQUFFMEQsTUFBTSxDQUFDQyxJQUFJLENBQUNaLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0VBRXhELE9BQU9XLE1BQU07QUFDakI7QUFFQXRDLGlCQUFpQixDQUFDLDBCQUEwQixFQUFFLDJCQUEyQixFQUFFLFVBQUNYLEtBQUssRUFBSztFQUNsRixPQUFPZ0QsaUJBQWlCLENBQUNoRCxLQUFLLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUZXLGlCQUFpQixDQUFDLDJCQUEyQixFQUFFLDRCQUE0QixFQUFFLFVBQUNYLEtBQUssRUFBSztFQUNwRixJQUFNb0QsS0FBSyxHQUFHekgsUUFBUSxDQUFDNkQsY0FBYyxDQUFDLDBCQUEwQixDQUFDO0VBQ2pFLElBQUksQ0FBQzRELEtBQUssRUFBRSxPQUFPLElBQUk7RUFFdkIsSUFBSXBELEtBQUssQ0FBQ0MsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBT3FDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztFQUM5RCxJQUFJdEMsS0FBSyxLQUFLb0QsS0FBSyxDQUFDcEQsS0FBSyxFQUFFLE9BQU9zQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7RUFDeEQsT0FBTyxJQUFJO0FBQ2YsQ0FBQyxDQUFDO0FBRUYzQixpQkFBaUIsQ0FBQyx5Q0FBeUMsRUFBRSwrQ0FBK0MsRUFBRSxVQUFDWCxLQUFLLEVBQUs7RUFDckgsT0FBT2dELGlCQUFpQixDQUFDaEQsS0FBSyxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGVyxpQkFBaUIsQ0FBQywwQ0FBMEMsRUFBRSxnREFBZ0QsRUFBRSxVQUFDWCxLQUFLLEVBQUs7RUFDdkgsSUFBTW9ELEtBQUssR0FBR3pILFFBQVEsQ0FBQzZELGNBQWMsQ0FBQyx5Q0FBeUMsQ0FBQztFQUNoRixJQUFJLENBQUM0RCxLQUFLLEVBQUUsT0FBTyxJQUFJO0VBRXZCLElBQUlwRCxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU9xQyxDQUFDLENBQUMsMkJBQTJCLENBQUM7RUFDOUQsSUFBSXRDLEtBQUssS0FBS29ELEtBQUssQ0FBQ3BELEtBQUssRUFBRSxPQUFPc0MsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO0VBQ3hELE9BQU8sSUFBSTtBQUNmLENBQUMsQ0FBQzs7QUFFRjtBQUNBM0IsaUJBQWlCLENBQUMsVUFBVSxFQUFFLGdCQUFnQixFQUFFLFVBQUNYLEtBQUssRUFBSztFQUN2RCxJQUFJQSxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU9xQyxDQUFDLENBQUMsbUJBQW1CLENBQUM7RUFDdEQsT0FBTyxJQUFJO0FBQ2YsQ0FBQyxDQUFDOztBQUVGO0FBQ0EzQixpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxVQUFDWCxLQUFLLEVBQUs7RUFDckUsSUFBSUEsS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPcUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO0VBQ3RELE9BQU8sSUFBSTtBQUNmLENBQUMsQ0FBQzs7QUFFRjtBQUNBO0FBQ0E7O0FBRUEzQixpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsVUFBQ1gsS0FBSyxFQUFLO0VBQzlELElBQUksQ0FBQ0EsS0FBSyxJQUFJQSxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU9xQyxDQUFDLENBQUMsMkJBQTJCLENBQUM7RUFDeEUsT0FBTyxJQUFJO0FBQ2YsQ0FBQyxDQUFDO0FBRUYzQixpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxVQUFDWCxLQUFLLEVBQUs7RUFDL0QsSUFBTVQsQ0FBQyxHQUFHUyxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDO0VBQ3RCLElBQUlWLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTytDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQztFQUNsRCxJQUFJL0MsQ0FBQyxDQUFDNEIsTUFBTSxHQUFHLEVBQUUsRUFBRSxPQUFPbUIsQ0FBQyxDQUFDLHdCQUF3QixDQUFDO0VBQ3JELE9BQU8sSUFBSTtBQUNmLENBQUMsQ0FBQzs7QUFFRjtBQUNBM0IsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLFVBQUNYLEtBQUssRUFBRU0sS0FBSyxFQUFLO0VBQ3BFLElBQU0rQyxJQUFJLEdBQUcvQyxLQUFLLENBQUNnRCxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQzNCLElBQUksQ0FBQ0QsSUFBSSxFQUFFLE9BQU8sSUFBSTtFQUV0QixJQUFNRSxPQUFPLEdBQUcsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUM7RUFDdEUsSUFBTUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSTtFQUUzQixJQUFJLENBQUNELE9BQU8sQ0FBQ0UsUUFBUSxDQUFDSixJQUFJLENBQUNLLElBQUksQ0FBQyxFQUFFLE9BQU9wQixDQUFDLENBQUMsWUFBWSxDQUFDO0VBQ3hELElBQUllLElBQUksQ0FBQ00sSUFBSSxHQUFHSCxHQUFHLEVBQUUsT0FBT2xCLENBQUMsQ0FBQyxZQUFZLENBQUM7RUFFM0MsT0FBTyxJQUFJO0FBQ2YsQ0FBQyxDQUFDOztBQUVGO0FBQ0E7QUFDQTtBQUNBLFNBQVNzQixRQUFRQSxDQUFDeEQsRUFBRSxFQUFFO0VBQ2xCLElBQUl5RCxRQUFRLEdBQUcsS0FBSzs7RUFFcEI7RUFDQUMsTUFBTSxDQUFDQyxJQUFJLENBQUNyRCxnQkFBZ0IsQ0FBQyxDQUFDN0UsT0FBTyxDQUFDLFVBQUErRSxPQUFPLEVBQUk7SUFDN0N4RCxZQUFZLENBQUNzRCxnQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7SUFDdkMsT0FBT0YsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQztFQUNwQyxDQUFDLENBQUM7O0VBRUY7RUFDQWtELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDdEQsVUFBVSxDQUFDLENBQUM1RSxPQUFPLENBQUMsVUFBQytFLE9BQU8sRUFBSztJQUN6QyxJQUFJLENBQUNhLFlBQVksQ0FBQ2IsT0FBTyxDQUFDLEVBQUU7TUFDeEJpRCxRQUFRLEdBQUcsSUFBSTtJQUNuQjtFQUNKLENBQUMsQ0FBQzs7RUFFRjtFQUNBLElBQU1sRSxJQUFJLEdBQUdTLEVBQUUsQ0FBQ2hDLE1BQU07RUFDdEIsSUFBTXNCLE1BQU0sR0FBR0MsSUFBSSxDQUFDL0QsZ0JBQWdCLENBQUM2RCxRQUFRLENBQUM7RUFFOUNDLE1BQU0sQ0FBQzdELE9BQU8sQ0FBQyxVQUFDeUUsS0FBSyxFQUFLO0lBQ3RCO0lBQ0EsSUFBSUcsVUFBVSxDQUFDSCxLQUFLLENBQUMwRCxFQUFFLENBQUMsRUFBRTtJQUUxQixJQUFNbEUsT0FBTyxHQUFHUSxLQUFLLENBQUMvRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUkrRCxLQUFLLENBQUNQLGFBQWE7SUFFNUQsSUFBSSxDQUFDTyxLQUFLLENBQUNFLGFBQWEsQ0FBQyxDQUFDLEVBQUU7TUFDeEJWLE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUUzRCxTQUFTLENBQUNHLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztNQUN6Q3VILFFBQVEsR0FBRyxJQUFJO0lBQ25CLENBQUMsTUFBTTtNQUNIL0QsT0FBTyxhQUFQQSxPQUFPLGVBQVBBLE9BQU8sQ0FBRTNELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hEO0VBQ0osQ0FBQyxDQUFDO0VBRUYsSUFBSXlILFFBQVEsRUFBRTtJQUNWekQsRUFBRSxDQUFDcEMsY0FBYyxDQUFDLENBQUM7RUFDdkI7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQXJDLFFBQVEsQ0FBQ00sZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNoRCxJQUFNMEQsSUFBSSxHQUFHaEUsUUFBUSxDQUFDSyxhQUFhLENBQUMsV0FBVyxDQUFDO0VBQ2hELElBQU1pSSxTQUFTLEdBQUd0SSxRQUFRLENBQUM2RCxjQUFjLENBQUMsWUFBWSxDQUFDO0VBQ3ZELElBQU1FLE1BQU0sR0FBRy9ELFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUM2RCxRQUFRLENBQUM7O0VBRWxEO0VBQ0FDLE1BQU0sQ0FBQzdELE9BQU8sQ0FBQyxVQUFDeUUsS0FBSyxFQUFLO0lBQ3RCVixTQUFTLENBQUNVLEtBQUssQ0FBQztJQUVoQixJQUFJQSxLQUFLLENBQUM0RCxPQUFPLEtBQUssUUFBUSxJQUFJNUQsS0FBSyxDQUFDTixLQUFLLEVBQUU7TUFDM0MsSUFBTUYsT0FBTyxHQUFHUSxLQUFLLENBQUMvRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUkrRCxLQUFLLENBQUNQLGFBQWE7TUFDNURELE9BQU8sYUFBUEEsT0FBTyxlQUFQQSxPQUFPLENBQUUzRCxTQUFTLENBQUNHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUM1QztFQUNKLENBQUMsQ0FBQzs7RUFFRjtFQUNBMEYsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDeERBLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ3pEQSxlQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQzdEQSxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQzNEQSxlQUFlLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7O0VBRW5EO0VBQ0FBLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ3ZEQSxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQztFQUN0REEsZUFBZSxDQUFDLDBCQUEwQixFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNwRUEsZUFBZSxDQUFDLDJCQUEyQixFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQzs7RUFFckU7RUFDQUEsZUFBZSxDQUFDLHlDQUF5QyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNuRkEsZUFBZSxDQUFDLDBDQUEwQyxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQzs7RUFFcEY7RUFDQUEsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDcERBLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDOztFQUVwRDtFQUNBQSxlQUFlLENBQUMsb0NBQW9DLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQzlFQSxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDOztFQUUzRDtFQUNBLElBQUlyQyxJQUFJLEVBQUU7SUFDTkEsSUFBSSxDQUFDMUQsZ0JBQWdCLENBQUMsUUFBUSxFQUFFMkgsUUFBUSxDQUFDO0VBQzdDOztFQUVBO0VBQ0EsSUFBSUssU0FBUyxFQUFFO0lBQ1hBLFNBQVMsQ0FBQ2hJLGdCQUFnQixDQUFDLFFBQVEsRUFBRTJILFFBQVEsQ0FBQztFQUNsRDtBQUNKLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7OztBQ3RZRmpJLFFBQVEsQ0FBQ00sZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN0RCxJQUFNa0ksR0FBRyxHQUFHeEksUUFBUSxDQUFDNkQsY0FBYyxDQUFDLGdCQUFnQixDQUFDO0VBQ3JELElBQU00RSxNQUFNLEdBQUd6SSxRQUFRLENBQUM2RCxjQUFjLENBQUMsZ0JBQWdCLENBQUM7RUFDeEQsSUFBTTZFLE1BQU0sR0FBRzFJLFFBQVEsQ0FBQzZELGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztFQUN4RCxJQUFNOEUsZ0JBQWdCLEdBQUczSSxRQUFRLENBQUM2RCxjQUFjLENBQUMsY0FBYyxDQUFDOztFQUVoRTtFQUNBLElBQUksQ0FBQzJFLEdBQUcsSUFBSSxDQUFDQyxNQUFNLElBQUksQ0FBQ0MsTUFBTSxFQUFFO0lBQzVCRSxPQUFPLENBQUNDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQztJQUMzQztFQUNKO0VBRUEsSUFBTUMsT0FBTyxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs7RUFFdEQ7RUFDQSxJQUFJLENBQUNGLE9BQU8sRUFBRTtJQUNWM0csVUFBVSxDQUFDLFlBQU07TUFDYnFHLEdBQUcsQ0FBQ2hJLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ1gsQ0FBQyxNQUFNLElBQUltSSxPQUFPLEtBQUssU0FBUyxFQUFFO0lBQzlCTixHQUFHLENBQUNoSSxTQUFTLENBQUNHLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFDbEM7O0VBRUE7RUFDQSxJQUFJbUksT0FBTyxLQUFLLFVBQVUsSUFBSUgsZ0JBQWdCLEVBQUU7SUFDNUNBLGdCQUFnQixDQUFDTSxRQUFRLEdBQUcsSUFBSTtFQUNwQzs7RUFFQTtFQUNBUixNQUFNLENBQUNuSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNuQ3lJLFlBQVksQ0FBQ0csT0FBTyxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQztJQUNsRFYsR0FBRyxDQUFDaEksU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzVCK0gsR0FBRyxDQUFDaEksU0FBUyxDQUFDRyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQzNCLElBQUlnSSxnQkFBZ0IsRUFBRUEsZ0JBQWdCLENBQUNNLFFBQVEsR0FBRyxLQUFLO0VBQzNELENBQUMsQ0FBQzs7RUFFRjtFQUNBUCxNQUFNLENBQUNwSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNuQ3lJLFlBQVksQ0FBQ0csT0FBTyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQztJQUNqRFYsR0FBRyxDQUFDaEksU0FBUyxDQUFDQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzVCK0gsR0FBRyxDQUFDaEksU0FBUyxDQUFDRyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBRTlCLElBQUlnSSxnQkFBZ0IsRUFBRTtNQUNsQkEsZ0JBQWdCLENBQUNqSSxPQUFPLEdBQUcsS0FBSztNQUNoQ2lJLGdCQUFnQixDQUFDTSxRQUFRLEdBQUcsSUFBSTtJQUNwQztFQUNKLENBQUMsQ0FBQzs7RUFFRjtFQUNBLElBQU1FLFdBQVcsR0FBR25KLFFBQVEsQ0FBQzZELGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztFQUNoRSxJQUFJc0YsV0FBVyxFQUFFO0lBQ2JBLFdBQVcsQ0FBQzdJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDOEksQ0FBQyxFQUFLO01BQ3pDQSxDQUFDLENBQUMvRyxjQUFjLENBQUMsQ0FBQztNQUNsQitHLENBQUMsQ0FBQzlHLGVBQWUsQ0FBQyxDQUFDO01BQ25Ca0csR0FBRyxDQUFDaEksU0FBUyxDQUFDQyxNQUFNLENBQUMsV0FBVyxDQUFDO01BQ2pDK0gsR0FBRyxDQUFDaEksU0FBUyxDQUFDRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUMsQ0FBQztFQUNOOztFQUVBO0VBQ0EsSUFBSWdJLGdCQUFnQixFQUFFO0lBQ2xCLElBQU1VLGFBQWEsR0FBR3JKLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLDJCQUEyQixDQUFDO0lBQ3pFLElBQU1pSixZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUYsQ0FBQyxFQUFLO01BQ3hCLElBQU1HLGNBQWMsR0FBR1IsWUFBWSxDQUFDQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7TUFFN0QsSUFBSU8sY0FBYyxLQUFLLFNBQVMsRUFBRTtRQUM5QkgsQ0FBQyxDQUFDL0csY0FBYyxDQUFDLENBQUM7UUFDbEIrRyxDQUFDLENBQUM5RyxlQUFlLENBQUMsQ0FBQztRQUNuQnFHLGdCQUFnQixDQUFDakksT0FBTyxHQUFHLEtBQUs7UUFDaEM4SCxHQUFHLENBQUNoSSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDakMrSCxHQUFHLENBQUNoSSxTQUFTLENBQUNHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDekIsT0FBTyxLQUFLO01BQ2hCO0lBQ0osQ0FBQztJQUVEZ0ksZ0JBQWdCLENBQUNySSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVnSixZQUFZLENBQUM7SUFDeEQsSUFBSUQsYUFBYSxFQUFFO01BQ2ZBLGFBQWEsQ0FBQy9JLGdCQUFnQixDQUFDLE9BQU8sRUFBRWdKLFlBQVksQ0FBQztJQUN6RDtFQUNKO0FBQ0osQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2hGRnRKLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBc0osTUFBTSxFQUFJO0VBQ3REQSxNQUFNLENBQUNsSixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNuQyxJQUFNcUUsS0FBSyxHQUFHNkUsTUFBTSxDQUFDQyxzQkFBc0I7SUFDM0MsSUFBSTlFLEtBQUssSUFBSUEsS0FBSyxDQUFDeEQsT0FBTyxDQUFDdUksUUFBUSxLQUFLbEQsU0FBUyxFQUFFO01BQy9DN0IsS0FBSyxDQUFDTixLQUFLLEdBQUdNLEtBQUssQ0FBQ3hELE9BQU8sQ0FBQ3VJLFFBQVE7TUFDcEMvRSxLQUFLLENBQUNnRixhQUFhLENBQUMsSUFBSUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7OztBQ1JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3V0aWxzL2ZhY3Rpb24tZ2FtZS1jaG9pY2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvTGF5b3V0L2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0xheW91dC9zd2l0Y2hfbGF5b3V0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3NlY3VyaXR5L2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvc2VjdXJpdHkvcmVtZW1iZXJfbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvc2VjdXJpdHkvcmVzZXQtYnRuLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcclxuLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcclxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cclxuICovXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuaW1wb3J0ICcuL3NjcmlwdHMvTGF5b3V0L2Ryb3Bkb3duLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvTGF5b3V0L3N3aXRjaF9sYXlvdXQuanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9zZWN1cml0eS9mb3JtLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvc2VjdXJpdHkvcmVtZW1iZXJfbWUuanMnO1xyXG5pbXBvcnQgJy4vc2NyaXB0cy9zZWN1cml0eS9yZXNldC1idG4uanMnO1xyXG5cclxuXHJcbi8vIEdhbWUtc3BlY2lmaWMgc2NyaXB0cyAob25seSBsb2FkZWQgb24gZ2FtZSBwYWdlcylcclxuaW1wb3J0ICcuL3NjcmlwdHMvR2FtZS91dGlscy9mYWN0aW9uLWdhbWUtY2hvaWNlLmpzJzsiLCIvKipcbiAqIEdlc3Rpb24gZGUgbGEgc8OpbGVjdGlvbiB2aXN1ZWxsZSBkZXMgZ2FtZXMgZXQgZmFjdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBpbml0U2VsZWN0aW9uKCkge1xuXG4gICAgLy8gR8OpcmVyIGxhIHPDqWxlY3Rpb24gZGVzIGdhbWVzXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtY2FyZCcpLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcbiAgICAgICAgaWYgKHJhZGlvKSB7XG4gICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtY2FyZCcpLmZvckVhY2goYyA9PiBjLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBHw6lyZXIgbGEgc8OpbGVjdGlvbiBkZXMgZmFjdGlvbnNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFjdGlvbi1jYXJkJykuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgY29uc3QgcmFkaW8gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuICAgICAgICBpZiAocmFkaW8pIHtcbiAgICAgICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFjdGlvbi1jYXJkJykuZm9yRWFjaChjID0+IGMuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIEF1IGNoYXJnZW1lbnQsIHPDqWxlY3Rpb25uZXIgbGEgY2FydGUgZMOpasOgIGNvY2jDqWUgKHNpIGVsbGUgZXhpc3RlKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJykuZm9yRWFjaChyYWRpbyA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSByYWRpby5jbG9zZXN0KCcuZ2FtZS1jYXJkLCAuZmFjdGlvbi1jYXJkJyk7XG4gICAgICAgIGlmIChjYXJkKSB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gQXR0ZW5kcmUgcXVlIGxlIERPTSBzb2l0IHByw6p0XG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRTZWxlY3Rpb24pO1xufSBlbHNlIHtcbiAgICBpbml0U2VsZWN0aW9uKCk7XG59IiwiZnVuY3Rpb24gYXR0YWNoSG92ZXJEcm9wZG93bih0b2dnbGVTZWxlY3Rvcikge1xyXG4gICAgY29uc3QgdG9nZ2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodG9nZ2xlU2VsZWN0b3IpO1xyXG5cclxuICAgIHRvZ2dsZXMuZm9yRWFjaCgodG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgICAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xyXG4gICAgICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlYWxseUhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaGlkZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQocmVhbGx5SGlkZURyb3Bkb3duLCAxNTApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBEZXNrdG9wIDogaG92ZXJcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuXHJcbiAgICAgICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZURyb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG9nZ2xlRHJvcGRvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgYWlsbGV1cnNcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc09wZW4gJiYgIXRvZ2dsZS5jb250YWlucyhldmVudC50YXJnZXQpICYmICFkcm9wZG93bkNvbnRlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmICF0b2dnbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZHJvcGRvd25Db250ZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaE5hdmJhckRyb3Bkb3duKCkge1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG4gICAgY29uc3QgbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyX21lbnVcIik7XHJcbiAgICBjb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW5hdmJhclwiKTtcclxuXHJcbiAgICBpZiAoIXRvZ2dsZSB8fCAhbmF2YmFyTWVudSB8fCAhbmF2YmFyQ29udGFpbmVyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcclxuICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVnaW9uRWxzID0gW3RvZ2dsZSwgbmF2YmFyQ29udGFpbmVyLCBkcm9wZG93bkNvbnRlbnRdO1xyXG5cclxuICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICBsZXQgaXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICBsZXQgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgaXNJblJlZ2lvbiA9IChlbCkgPT5cclxuICAgICAgICByZWdpb25FbHMuc29tZSgobm9kZSkgPT4gbm9kZSAmJiBub2RlLmNvbnRhaW5zKGVsKSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG4gICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWFsbHlIaWRlQWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGlzQ2xvc2luZyA9IHRydWU7XHJcbiAgICAgICAgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG5cclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLXNob3dcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xyXG5cclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkxlYXZlUmVnaW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG8gPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xyXG4gICAgICAgIGlmICh0byAmJiBpc0luUmVnaW9uKHRvKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlYWxseUhpZGVBbGwsIDE1MCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZU5hdmJhciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93QWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBEZXNrdG9wIDogaG92ZXJcclxuICAgIHJlZ2lvbkVscy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dBbGwpO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG9uTGVhdmVSZWdpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTmF2YmFyKTtcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b2dnbGVOYXZiYXIsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblxyXG4gICAgLy8gRmVybWVyIHNpIG9uIGNsaXF1ZSBhaWxsZXVyc1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBhdHRhY2hOYXZiYXJEcm9wZG93bigpO1xyXG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi5sYW5ndWFnZS1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLnRoZW1lLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxufSk7Iiwid2luZG93LnN3aXRjaFZpZXcgPSBmdW5jdGlvbih2aWV3SWQpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLXZpZXcnKS5mb3JFYWNoKHYgPT4gdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZpZXdJZCkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxufTsiLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBWQUxJREFUSU9OIEfDiU7DiVJJUVVFIERFUyBGT1JNVUxBSVJFU1xyXG4gICBFbWFpbHMgKyBNb3RzIGRlIHBhc3NlICsgUHNldWRvcyArIEN1c3RvbSB2YWxpZGF0b3JzXHJcbiAgIENvbXBhdGlibGUgU3VwcG9ydCAvIFVzZXIgLyBMb2dpbiAvIEZvcmdvdFBhc3N3b3JkXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5jb25zdCBzZWxlY3RvciA9ICdpbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cIm51bWJlclwiXSwgaW5wdXRbdHlwZT1cImVtYWlsXCJdLCBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0sIHNlbGVjdCwgdGV4dGFyZWEnO1xyXG5jb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtZm9ybScpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRm9uY3Rpb25zIGQnYXBwYXJlbmNlIGRlcyBpbnB1dHNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaW5pdElucHV0KGlucHV0RWwpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dEVsLmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dEVsLnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGlucHV0RWwudmFsdWUudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIG9uRm9jdXMpO1xyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyKTtcclxuXHJcbiAgICAvLyBQb3VyIGxlIHJlc3BvbnNpdmUgbW9iaWxlXHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25CbHVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25Gb2N1cyhldikge1xyXG4gICAgY29uc3QgcGFyZW50ID0gZXYudGFyZ2V0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBldi50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5jbGFzc0xpc3QpIHtcclxuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25CbHVyKGV2KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSAnJykge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0tZmlsbGVkJywgJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaXZlVmFsaWRhdGlvbihldikge1xyXG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFN5c3TDqG1lIGRlIHZhbGlkYXRpb24gZ8OpbsOpcmlxdWVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgdmFsaWRhdG9ycyA9IHt9O1xyXG5jb25zdCB2YWxpZGF0aW9uVGltZXJzID0ge307IC8vIFN0b2NrYWdlIGRlcyB0aW1lcnNcclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyVmFsaWRhdG9yKGlucHV0SWQsIGVycm9ySWQsIHZhbGlkYXRlRm4pIHtcclxuICAgIHZhbGlkYXRvcnNbaW5wdXRJZF0gPSB7IGVycm9ySWQsIHZhbGlkYXRlRm4gfTtcclxufVxyXG5cclxuLy8gLSB0cnVlICAgICAgICAgICAgICAgIC0+IHBhcyBkJ2VycmV1clxyXG4vLyAtIHN0cmluZyAgICAgICAgICAgICAgIC0+IG1lc3NhZ2UgdW5pcXVlIChjb21wb3J0ZW1lbnQgZXhpc3RhbnQpXHJcbi8vIC0gc3RyaW5nW10gICAgICAgICAgICAgIC0+IGxpc3RlIMOgIHB1Y2VzLCB1bmUgbGlnbmUgcGFyIHLDqGdsZSBub24gcmVzcGVjdMOpZVxyXG5mdW5jdGlvbiBidWlsZEVycm9yTWFya3VwKHJlc3VsdCkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAwKSByZXR1cm4gJyc7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSByZXN1bHQubWFwKGxpbmUgPT4gYDxsaT4ke2xpbmV9PC9saT5gKS5qb2luKCcnKTtcclxuICAgICAgICByZXR1cm4gYDx1bCBjbGFzcz1cImZvcm0tZXJyb3ItbGlzdFwiPiR7aXRlbXN9PC91bD5gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gcnVuVmFsaWRhdG9yKGlucHV0SWQpIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IHZhbGlkYXRvcnNbaW5wdXRJZF07XHJcbiAgICBpZiAoIWNvbmZpZykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcclxuICAgIGNvbnN0IGVycm9yQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uZmlnLmVycm9ySWQpO1xyXG5cclxuICAgIGlmICghaW5wdXQgfHwgIWVycm9yQm94KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgZXJyb3JCb3guc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSAnXFx1MDBBMCc7XHJcbiAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBjb25maWcudmFsaWRhdGVGbihpbnB1dC52YWx1ZSwgaW5wdXQpO1xyXG5cclxuICAgIGNvbnN0IGlzVmFsaWQgPSByZXN1bHQgPT09IHRydWUgfHwgKEFycmF5LmlzQXJyYXkocmVzdWx0KSAmJiByZXN1bHQubGVuZ3RoID09PSAwKTtcclxuIFxyXG4gICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgZXJyb3JCb3guaW5uZXJIVE1MID0gYnVpbGRFcnJvck1hcmt1cChyZXN1bHQpO1xyXG4gICAgICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRhY2hWYWxpZGF0b3IoaW5wdXRJZCwgZXZlbnRUeXBlcyA9IFsnaW5wdXQnLCAnYmx1ciddLCBkZWxheU1zID0gMzAwMCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbnB1dElkKTtcclxuICAgIGlmICghaW5wdXQpIHJldHVybjtcclxuXHJcbiAgICBldmVudFR5cGVzLmZvckVhY2goZXZlbnRUeXBlID0+IHtcclxuICAgICAgICBpZiAoZXZlbnRUeXBlID09PSAnaW5wdXQnKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgbCfDqXbDqW5lbWVudCAnaW5wdXQnLCBvbiBham91dGUgdW4gZMOpbGFpIGRlIDMgc2Vjb25kZXNcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVuVmFsaWRhdG9yKGlucHV0SWQpO1xyXG4gICAgICAgICAgICAgICAgfSwgZGVsYXlNcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnY2hhbmdlJykge1xyXG4gICAgICAgICAgICAvLyBQb3VyICdjaGFuZ2UnLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnYmx1cicpIHtcclxuICAgICAgICAgICAgLy8gUG91ciAnYmx1cicsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQWpvdXRlciAndG91Y2hlbmQnIHBvdXIgbW9iaWxlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBQZXRpdCBkw6lsYWkgcG91ciDDqXZpdGVyIGxlcyBkb3VibGVzIGTDqWNsZW5jaGVtZW50c1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBydW5WYWxpZGF0b3IoaW5wdXRJZCksIDEwMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgJ2NsaWNrJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBQU0VVRE9TIChnw6luw6lyaXF1ZXMpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiB0KGtleSkge1xyXG4gICAgcmV0dXJuICh3aW5kb3cuYXBwVHJhbnNsYXRpb25zICYmIHdpbmRvdy5hcHBUcmFuc2xhdGlvbnNba2V5XSkgfHwga2V5O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclBzZXVkbyhpbnB1dElkLCBlcnJvcklkLCBtaW5MZW5ndGggPSAzLCBtYXhMZW5ndGggPSAyNSkge1xyXG4gICAgcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ3BzZXVkb19yZXF1aXJlZCcpO1xyXG4gICAgICAgIGlmICh2Lmxlbmd0aCA8IG1pbkxlbmd0aCkgcmV0dXJuIHQoJ3BzZXVkb19taW5fMycpO1xyXG4gICAgICAgIGlmICh2Lmxlbmd0aCA+IG1heExlbmd0aCkgcmV0dXJuIHQoJ3BzZXVkb19tYXhfMjUnKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBwc2V1ZG9GaWVsZHMgPSBbXHJcbiAgICB7IGlucHV0SWQ6IFwic3VwcG9ydF9uYW1lXCIsIGVycm9ySWQ6IFwicHNldWRvLWVycm9yXCIsIG1pbkxlbmd0aDogMywgbWF4TGVuZ3RoOiAyNSB9LFxyXG4gICAgeyBpbnB1dElkOiBcInVzZXJfcHNldWRvXCIsIGVycm9ySWQ6IFwidXNlcl9wc2V1ZG8tZXJyb3JcIiwgbWluTGVuZ3RoOiAzLCBtYXhMZW5ndGg6IDI1IH0sXHJcbl07XHJcblxyXG5wc2V1ZG9GaWVsZHMuZm9yRWFjaChmID0+IHJlZ2lzdGVyUHNldWRvKGYuaW5wdXRJZCwgZi5lcnJvcklkLCBmLm1pbkxlbmd0aCwgZi5tYXhMZW5ndGgpKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIEVNQUlMUyAoZ8OpbsOpcmlxdWVzIHBvdXIgdG91dCBsZSBzaXRlKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJFbWFpbChpbnB1dElkLCBlcnJvcklkKSB7XHJcbiAgICByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ2VtYWlsX3JlcXVpcmVkJyk7XHJcbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHJldHVybiB0KCdlbWFpbF9pbnZhbGlkJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgZW1haWxGaWVsZHMgPSBbXHJcbiAgICB7IGlucHV0SWQ6IFwic3VwcG9ydF9lbWFpbFwiLCBlcnJvcklkOiBcImVtYWlsLWVycm9yXCIgfSxcclxuICAgIHsgaW5wdXRJZDogXCJ1c2VyX2VtYWlsXCIsIGVycm9ySWQ6IFwidXNlcl9lbWFpbC1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcm5hbWVcIiwgZXJyb3JJZDogXCJ1c2VybmFtZS1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwiZm9yZ290X3Bhc3N3b3JkX3JlcXVlc3RfZm9ybV9lbWFpbFwiLCBlcnJvcklkOiBcImZvcmdvdF9lbWFpbC1lcnJvclwiIH1cclxuXTtcclxuXHJcbmVtYWlsRmllbGRzLmZvckVhY2goZiA9PiByZWdpc3RlckVtYWlsKGYuaW5wdXRJZCwgZi5lcnJvcklkKSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBNT1RTIERFIFBBU1NFIChnw6luw6lyaXF1ZXMpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiBwYXNzd29yZENoZWNrbGlzdCh2YWx1ZSkge1xyXG4gICAgY29uc3QgdiA9IHZhbHVlO1xyXG4gICAgY29uc3QgZXJyb3JzID0gW107XHJcbiBcclxuICAgIGlmICh2Lmxlbmd0aCA8IDgpIGVycm9ycy5wdXNoKHQoJ3Bhc3N3b3JkX2xlbmd0aF84JykpO1xyXG4gICAgaWYgKCEvW0EtWl0vLnRlc3QodikpIGVycm9ycy5wdXNoKHQoJ3Bhc3N3b3JkX3VwcGVyJykpO1xyXG4gICAgaWYgKCEvXFxkLy50ZXN0KHYpKSBlcnJvcnMucHVzaCh0KCdwYXNzd29yZF9udW1iZXInKSk7XHJcbiAgICBpZiAoIS9bXFxXX10vLnRlc3QodikpIGVycm9ycy5wdXNoKHQoJ3Bhc3N3b3JkX3NwZWNpYWwnKSk7XHJcbiBcclxuICAgIHJldHVybiBlcnJvcnM7XHJcbn1cclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIsIFwidXNlcl9wYXNzd29yZF9maXJzdC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIHJldHVybiBwYXNzd29yZENoZWNrbGlzdCh2YWx1ZSk7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJ1c2VyX3BsYWluUGFzc3dvcmRfc2Vjb25kXCIsIFwidXNlcl9wYXNzd29yZF9zZWNvbmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIpO1xyXG4gICAgaWYgKCFmaXJzdCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX2NvbmZpcm1fcmVxdWlyZWQnKTtcclxuICAgIGlmICh2YWx1ZSAhPT0gZmlyc3QudmFsdWUpIHJldHVybiB0KCdwYXNzd29yZF9taXNtYXRjaCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3RcIiwgXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3QtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICByZXR1cm4gcGFzc3dvcmRDaGVja2xpc3QodmFsdWUpO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZFwiLCBcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0XCIpO1xyXG4gICAgaWYgKCFmaXJzdCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX2NvbmZpcm1fcmVxdWlyZWQnKTtcclxuICAgIGlmICh2YWx1ZSAhPT0gZmlyc3QudmFsdWUpIHJldHVybiB0KCdwYXNzd29yZF9taXNtYXRjaCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gTW90IGRlIHBhc3NlIGRlIGNvbm5leGlvblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInBhc3N3b3JkXCIsIFwicGFzc3dvcmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfcmVxdWlyZWQnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vIE1vdCBkZSBwYXNzZSBcIm91Ymxpw6lcIiAobm91dmVhdSBtb3QgZGUgcGFzc2UsIHNpIHR1IGFzIHVuIGNoYW1wcyBkw6lkacOpKVxyXG5yZWdpc3RlclZhbGlkYXRvcihcImZvcmdvdF9wYXNzd29yZFwiLCBcImZvcmdvdF9wYXNzd29yZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9yZXF1aXJlZCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgU1VQUE9SVCBTVVBQTMOJTUVOVEFJUkVTIOKGkiBjYXRlZ29yeSAvIG1lc3NhZ2UgLyBpbWFnZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X2NhdGVnb3J5XCIsIFwic2VsZWN0ZS1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGlmICghdmFsdWUgfHwgdmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgnc3VwcG9ydF9jYXRlZ29yeV9yZXF1aXJlZCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X21lc3NhZ2VcIiwgXCJ0ZXh0LWFyZWEtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdzdXBwb3J0X21lc3NhZ2VfcmVxdWlyZWQnKTtcclxuICAgIGlmICh2Lmxlbmd0aCA8IDEwKSByZXR1cm4gdCgnc3VwcG9ydF9tZXNzYWdlX21pbl8xMCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gVkFMSURBVElPTiBERSBM4oCZSU1BR0UgKHN1cHBvcnQpXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9pbWFnZUZpbGVcIiwgXCJpbWFnZS1lcnJvclwiLCAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbMF07XHJcbiAgICBpZiAoIWZpbGUpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGFsbG93ZWQgPSBbXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2UvanBnXCIsIFwiaW1hZ2UvcG5nXCIsIFwiaW1hZ2Uvd2VicFwiXTtcclxuICAgIGNvbnN0IG1heCA9IDIgKiAxMDI0ICogMTAyNDtcclxuXHJcbiAgICBpZiAoIWFsbG93ZWQuaW5jbHVkZXMoZmlsZS50eXBlKSkgcmV0dXJuIHQoJ2ltYWdlX3R5cGUnKTtcclxuICAgIGlmIChmaWxlLnNpemUgPiBtYXgpIHJldHVybiB0KCdpbWFnZV9zaXplJyk7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNPVU1JU1NJT04gRFUgRk9STVVMQUlSRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gb25TdWJtaXQoZXYpIHtcclxuICAgIGxldCBoYXNFcnJvciA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEFubnVsZXIgdG91cyBsZXMgdGltZXJzIGVuIGNvdXJzXHJcbiAgICBPYmplY3Qua2V5cyh2YWxpZGF0aW9uVGltZXJzKS5mb3JFYWNoKGlucHV0SWQgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciB0b3VzIGxlcyB2YWxpZGF0ZXVycyBlbnJlZ2lzdHLDqXNcclxuICAgIE9iamVjdC5rZXlzKHZhbGlkYXRvcnMpLmZvckVhY2goKGlucHV0SWQpID0+IHtcclxuICAgICAgICBpZiAoIXJ1blZhbGlkYXRvcihpbnB1dElkKSkge1xyXG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVsOpcmlmaWVyIGxhIHZhbGlkaXTDqSBIVE1MNSBkZXMgY2hhbXBzIHNhbnMgdmFsaWRhdGV1ciBjdXN0b21cclxuICAgIGNvbnN0IGZvcm0gPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIC8vIElnbm9yZXIgbGVzIGNoYW1wcyBxdWkgb250IGTDqWrDoCB1biB2YWxpZGF0ZXVyIGN1c3RvbVxyXG4gICAgICAgIGlmICh2YWxpZGF0b3JzW2lucHV0LmlkXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGhhc0Vycm9yKSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVRJQUxJU0FUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtZm9ybScpO1xyXG4gICAgY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWZvcm0nKTtcclxuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpc2VyIGxlcyBpbnB1dHMgZGUgYmFzZVxyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgaW5pdElucHV0KGlucHV0KTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0LnRhZ05hbWUgPT09ICdTRUxFQ1QnICYmIGlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSBkZSBzdXBwb3J0XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfbmFtZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9jYXRlZ29yeScsIFsnY2hhbmdlJywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfbWVzc2FnZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9pbWFnZUZpbGUnLCBbJ2NoYW5nZSddLCAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSB1dGlsaXNhdGV1clxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BzZXVkbycsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0JywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BsYWluUGFzc3dvcmRfc2Vjb25kJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIHJlc2V0IHBhc3N3b3JkXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Jlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigncmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSBkZSBjb25uZXhpb25cclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcm5hbWUnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Bhc3N3b3JkJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyDDqXZlbnR1ZWxzIGR1IGZvcm11bGFpcmUgXCJtb3QgZGUgcGFzc2Ugb3VibGnDqVwiXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ2ZvcmdvdF9wYXNzd29yZF9yZXF1ZXN0X2Zvcm1fZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ2ZvcmdvdF9wYXNzd29yZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsYSB2YWxpZGF0aW9uIGF1IHN1Ym1pdFxyXG4gICAgaWYgKGZvcm0pIHtcclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdHRhY2hlciBsYSB2YWxpZGF0aW9uIGF1IGZvcm11bGFpcmUgZGUgY29ubmV4aW9uXHJcbiAgICBpZiAobG9naW5Gb3JtKSB7XHJcbiAgICAgICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcclxuICAgIH1cclxufSk7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtY29uc2VudFwiKTtcclxuICAgIGNvbnN0IGFjY2VwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXB0LWNvb2tpZXNcIik7XHJcbiAgICBjb25zdCByZWZ1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZnVzZS1jb29raWVzXCIpO1xyXG4gICAgY29uc3QgcmVtZW1iZXJDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX3JlbWVtYmVyX21lXCIpO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciBxdWUgbGVzIMOpbMOpbWVudHMgZXhpc3RlbnRcclxuICAgIGlmICghYm94IHx8ICFhY2NlcHQgfHwgIXJlZnVzZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIsOJbMOpbWVudHMgY29va2llIG5vbiB0cm91dsOpc1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29uc2VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIik7XHJcblxyXG4gICAgLy8gQUZGSUNIQUdFIElOSVRJQUxcclxuICAgIGlmICghY29uc2VudCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgIH0gZWxzZSBpZiAoY29uc2VudCA9PT0gXCJyZWZ1c2VkXCIpIHtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEw4lTQUNUSVZFUiBSRU1FTUJFUiBNRSBTSSBSRUZVU1xyXG4gICAgaWYgKGNvbnNlbnQgIT09IFwiYWNjZXB0ZWRcIiAmJiByZW1lbWJlckNoZWNrYm94KSB7XHJcbiAgICAgICAgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQUNDRVBURVJcclxuICAgIGFjY2VwdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIiwgXCJhY2NlcHRlZFwiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJFRlVTRVJcclxuICAgIHJlZnVzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIiwgXCJyZWZ1c2VkXCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHtcclxuICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNJIE9OIENMSVFVRSBTVVIgTEUgQk9VVE9OIFLDiURVSVQg4oaSIFLDiUFGRklDSEVSIExBIEJBTk5Jw4hSRVxyXG4gICAgY29uc3QgY29sbGFwc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1leHBhbmQtYnRuXCIpO1xyXG4gICAgaWYgKGNvbGxhcHNlQnRuKSB7XHJcbiAgICAgICAgY29sbGFwc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZWRcIik7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTSSBPTiBDTElRVUUgU1VSIFJFTUVNQkVSIE1FIEFQUsOIUyBVTiBSRUZVUyDihpIgUsOJQUZGSUNIRVIgTEEgQkFOTknDiFJFXHJcbiAgICBpZiAocmVtZW1iZXJDaGVja2JveCkge1xyXG4gICAgICAgIGNvbnN0IHJlbWVtYmVyTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9XCJfcmVtZW1iZXJfbWVcIl0nKTtcclxuICAgICAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29uc2VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbnNlbnQgPT09IFwicmVmdXNlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbWVtYmVyQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgaWYgKHJlbWVtYmVyTGFiZWwpIHtcclxuICAgICAgICAgICAgcmVtZW1iZXJMYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyIsImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNldC1idG4nKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBidXR0b24ucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQuZGF0YXNldC5vcmlnaW5hbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQuZGF0YXNldC5vcmlnaW5hbDtcclxuICAgICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImluaXRTZWxlY3Rpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2FyZCIsInJhZGlvIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY2hlY2tlZCIsImFkZCIsImNsb3Nlc3QiLCJyZWFkeVN0YXRlIiwiYXR0YWNoSG92ZXJEcm9wZG93biIsInRvZ2dsZVNlbGVjdG9yIiwidG9nZ2xlcyIsInRvZ2dsZSIsInRhcmdldFNlbGVjdG9yIiwiZGF0YXNldCIsImRyb3Bkb3duVGFyZ2V0IiwiZHJvcGRvd25Db250ZW50IiwiaGlkZVRpbWVvdXQiLCJpc09wZW4iLCJzaG93RHJvcGRvd24iLCJjbGVhclRpbWVvdXQiLCJzdHlsZSIsImRpc3BsYXkiLCJhbmltYXRpb24iLCJyZWFsbHlIaWRlRHJvcGRvd24iLCJoYW5kbGVyIiwiZXZlbnQiLCJhbmltYXRpb25OYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhpZGVEcm9wZG93biIsInNldFRpbWVvdXQiLCJ0b2dnbGVEcm9wZG93biIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFzc2l2ZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiYXR0YWNoTmF2YmFyRHJvcGRvd24iLCJuYXZiYXJNZW51IiwibmF2YmFyQ29udGFpbmVyIiwicmVnaW9uRWxzIiwiaXNDbG9zaW5nIiwiaXNJblJlZ2lvbiIsImVsIiwic29tZSIsIm5vZGUiLCJzaG93QWxsIiwicmVhbGx5SGlkZUFsbCIsIm9uTGVhdmVSZWdpb24iLCJ0byIsInJlbGF0ZWRUYXJnZXQiLCJ0b2dnbGVOYXZiYXIiLCJ3aW5kb3ciLCJzd2l0Y2hWaWV3Iiwidmlld0lkIiwidiIsImdldEVsZW1lbnRCeUlkIiwic2VsZWN0b3IiLCJpbnB1dHMiLCJmb3JtIiwiaW5pdElucHV0IiwiaW5wdXRFbCIsIndyYXBwZXIiLCJwYXJlbnRFbGVtZW50IiwidmFsdWUiLCJ0cmltIiwib25Gb2N1cyIsIm9uQmx1ciIsImV2IiwicGFyZW50IiwiaW5wdXQiLCJsaXZlVmFsaWRhdGlvbiIsImNoZWNrVmFsaWRpdHkiLCJ2YWxpZGF0b3JzIiwidmFsaWRhdGlvblRpbWVycyIsInJlZ2lzdGVyVmFsaWRhdG9yIiwiaW5wdXRJZCIsImVycm9ySWQiLCJ2YWxpZGF0ZUZuIiwiYnVpbGRFcnJvck1hcmt1cCIsInJlc3VsdCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIml0ZW1zIiwibWFwIiwibGluZSIsImNvbmNhdCIsImpvaW4iLCJydW5WYWxpZGF0b3IiLCJjb25maWciLCJlcnJvckJveCIsInZpc2liaWxpdHkiLCJ0ZXh0Q29udGVudCIsImlzVmFsaWQiLCJpbm5lckhUTUwiLCJhdHRhY2hWYWxpZGF0b3IiLCJldmVudFR5cGVzIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiZGVsYXlNcyIsImV2ZW50VHlwZSIsInQiLCJrZXkiLCJhcHBUcmFuc2xhdGlvbnMiLCJyZWdpc3RlclBzZXVkbyIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsInBzZXVkb0ZpZWxkcyIsImYiLCJyZWdpc3RlckVtYWlsIiwiZW1haWxGaWVsZHMiLCJwYXNzd29yZENoZWNrbGlzdCIsImVycm9ycyIsInB1c2giLCJ0ZXN0IiwiZmlyc3QiLCJmaWxlIiwiZmlsZXMiLCJhbGxvd2VkIiwibWF4IiwiaW5jbHVkZXMiLCJ0eXBlIiwic2l6ZSIsIm9uU3VibWl0IiwiaGFzRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwiaWQiLCJsb2dpbkZvcm0iLCJ0YWdOYW1lIiwiYm94IiwiYWNjZXB0IiwicmVmdXNlIiwicmVtZW1iZXJDaGVja2JveCIsImNvbnNvbGUiLCJ3YXJuIiwiY29uc2VudCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXNhYmxlZCIsInNldEl0ZW0iLCJjb2xsYXBzZUJ0biIsImUiLCJyZW1lbWJlckxhYmVsIiwiY2xpY2tIYW5kbGVyIiwiY3VycmVudENvbnNlbnQiLCJidXR0b24iLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwib3JpZ2luYWwiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9