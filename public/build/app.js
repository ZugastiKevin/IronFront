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
/* harmony import */ var _scripts_security_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/security/form.js */ "./assets/scripts/security/form.js");
/* harmony import */ var _scripts_security_form_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_security_form_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_security_remember_me_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/security/remember_me.js */ "./assets/scripts/security/remember_me.js");
/* harmony import */ var _scripts_security_remember_me_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_security_remember_me_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_security_reset_btn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/security/reset-btn.js */ "./assets/scripts/security/reset-btn.js");
/* harmony import */ var _scripts_security_reset_btn_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_security_reset_btn_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scripts_Game_utils_faction_game_choice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/Game/utils/faction-game-choice.js */ "./assets/scripts/Game/utils/faction-game-choice.js");
/* harmony import */ var _scripts_Game_utils_faction_game_choice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_Game_utils_faction_game_choice_js__WEBPACK_IMPORTED_MODULE_6__);


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_fortawesome_fontawes-b05623"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNuQyxJQUFNc0IsS0FBSyxHQUFHcUYsTUFBTSxDQUFDQyxzQkFBc0I7SUFDM0MsSUFBSXRGLEtBQUssSUFBSUEsS0FBSyxDQUFDdUYsT0FBTyxDQUFDQyxRQUFRLEtBQUt6RCxTQUFTLEVBQUU7TUFDL0MvQixLQUFLLENBQUNQLEtBQUssR0FBR08sS0FBSyxDQUFDdUYsT0FBTyxDQUFDQyxRQUFRO01BQ3BDeEYsS0FBSyxDQUFDeUYsYUFBYSxDQUFDLElBQUlDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QztFQUNKLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUNSRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91dGlscy9mYWN0aW9uLWdhbWUtY2hvaWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3NlY3VyaXR5L2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvc2VjdXJpdHkvcmVtZW1iZXJfbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvc2VjdXJpdHkvcmVzZXQtYnRuLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XHJcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcclxuLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcclxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cclxuICovXHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuaW1wb3J0ICcuL3NjcmlwdHMvc2VjdXJpdHkvZm9ybS5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL3NlY3VyaXR5L3JlbWVtYmVyX21lLmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvc2VjdXJpdHkvcmVzZXQtYnRuLmpzJztcclxuXHJcblxyXG4vLyBHYW1lLXNwZWNpZmljIHNjcmlwdHMgKG9ubHkgbG9hZGVkIG9uIGdhbWUgcGFnZXMpXHJcbmltcG9ydCAnLi9zY3JpcHRzL0dhbWUvdXRpbHMvZmFjdGlvbi1nYW1lLWNob2ljZS5qcyc7IiwiLyoqXG4gKiBHZXN0aW9uIGRlIGxhIHPDqWxlY3Rpb24gdmlzdWVsbGUgZGVzIGdhbWVzIGV0IGZhY3Rpb25zXG4gKi9cblxuZnVuY3Rpb24gaW5pdFNlbGVjdGlvbigpIHtcblxuICAgIC8vIEfDqXJlciBsYSBzw6lsZWN0aW9uIGRlcyBnYW1lc1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLWNhcmQnKS5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICBjb25zdCByYWRpbyA9IGNhcmQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG4gICAgICAgIGlmIChyYWRpbykge1xuICAgICAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLWNhcmQnKS5mb3JFYWNoKGMgPT4gYy5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gR8OpcmVyIGxhIHPDqWxlY3Rpb24gZGVzIGZhY3Rpb25zXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhY3Rpb24tY2FyZCcpLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNvbnN0IHJhZGlvID0gY2FyZC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcbiAgICAgICAgaWYgKHJhZGlvKSB7XG4gICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhY3Rpb24tY2FyZCcpLmZvckVhY2goYyA9PiBjLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBdSBjaGFyZ2VtZW50LCBzw6lsZWN0aW9ubmVyIGxhIGNhcnRlIGTDqWrDoCBjb2Now6llIChzaSBlbGxlIGV4aXN0ZSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCcpLmZvckVhY2gocmFkaW8gPT4ge1xuICAgICAgICBjb25zdCBjYXJkID0gcmFkaW8uY2xvc2VzdCgnLmdhbWUtY2FyZCwgLmZhY3Rpb24tY2FyZCcpO1xuICAgICAgICBpZiAoY2FyZCkge1xuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIEF0dGVuZHJlIHF1ZSBsZSBET00gc29pdCBwcsOqdFxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0U2VsZWN0aW9uKTtcbn0gZWxzZSB7XG4gICAgaW5pdFNlbGVjdGlvbigpO1xufSIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIFZBTElEQVRJT04gR8OJTsOJUklRVUUgREVTIEZPUk1VTEFJUkVTXHJcbiAgIEVtYWlscyArIE1vdHMgZGUgcGFzc2UgKyBQc2V1ZG9zICsgQ3VzdG9tIHZhbGlkYXRvcnNcclxuICAgQ29tcGF0aWJsZSBTdXBwb3J0IC8gVXNlciAvIExvZ2luIC8gRm9yZ290UGFzc3dvcmRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmNvbnN0IHNlbGVjdG9yID0gJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBpbnB1dFt0eXBlPVwiZW1haWxcIl0sIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSwgc2VsZWN0LCB0ZXh0YXJlYSc7XHJcbmNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGb25jdGlvbnMgZCdhcHBhcmVuY2UgZGVzIGlucHV0c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBpbml0SW5wdXQoaW5wdXRFbCkge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0RWwuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0RWwucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoaW5wdXRFbC52YWx1ZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25Gb2N1cyk7XHJcbiAgICBpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpO1xyXG5cclxuICAgIC8vIFBvdXIgbGUgcmVzcG9uc2l2ZSBtb2JpbGVcclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkJsdXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbkZvY3VzKGV2KSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBldi50YXJnZXQuY2xvc2VzdCgnc3BhbicpIHx8IGV2LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmNsYXNzTGlzdCkge1xyXG4gICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkJsdXIoZXYpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1maWxsZWQnLCAnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpdmVWYWxpZGF0aW9uKGV2KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU3lzdMOobWUgZGUgdmFsaWRhdGlvbiBnw6luw6lyaXF1ZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCB2YWxpZGF0b3JzID0ge307XHJcbmNvbnN0IHZhbGlkYXRpb25UaW1lcnMgPSB7fTsgLy8gU3RvY2thZ2UgZGVzIHRpbWVyc1xyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJWYWxpZGF0b3IoaW5wdXRJZCwgZXJyb3JJZCwgdmFsaWRhdGVGbikge1xyXG4gICAgdmFsaWRhdG9yc1tpbnB1dElkXSA9IHsgZXJyb3JJZCwgdmFsaWRhdGVGbiB9O1xyXG59XHJcblxyXG4vLyAtIHRydWUgICAgICAgICAgICAgICAgLT4gcGFzIGQnZXJyZXVyXHJcbi8vIC0gc3RyaW5nICAgICAgICAgICAgICAgLT4gbWVzc2FnZSB1bmlxdWUgKGNvbXBvcnRlbWVudCBleGlzdGFudClcclxuLy8gLSBzdHJpbmdbXSAgICAgICAgICAgICAgLT4gbGlzdGUgw6AgcHVjZXMsIHVuZSBsaWduZSBwYXIgcsOoZ2xlIG5vbiByZXNwZWN0w6llXHJcbmZ1bmN0aW9uIGJ1aWxkRXJyb3JNYXJrdXAocmVzdWx0KSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHQpKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHJldHVybiAnJztcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHJlc3VsdC5tYXAobGluZSA9PiBgPGxpPiR7bGluZX08L2xpPmApLmpvaW4oJycpO1xyXG4gICAgICAgIHJldHVybiBgPHVsIGNsYXNzPVwiZm9ybS1lcnJvci1saXN0XCI+JHtpdGVtc308L3VsPmA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBydW5WYWxpZGF0b3IoaW5wdXRJZCkge1xyXG4gICAgY29uc3QgY29uZmlnID0gdmFsaWRhdG9yc1tpbnB1dElkXTtcclxuICAgIGlmICghY29uZmlnKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xyXG4gICAgY29uc3QgZXJyb3JCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcuZXJyb3JJZCk7XHJcblxyXG4gICAgaWYgKCFpbnB1dCB8fCAhZXJyb3JCb3gpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICBlcnJvckJveC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICBlcnJvckJveC50ZXh0Q29udGVudCA9ICdcXHUwMEEwJztcclxuICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbmZpZy52YWxpZGF0ZUZuKGlucHV0LnZhbHVlLCBpbnB1dCk7XHJcblxyXG4gICAgY29uc3QgaXNWYWxpZCA9IHJlc3VsdCA9PT0gdHJ1ZSB8fCAoQXJyYXkuaXNBcnJheShyZXN1bHQpICYmIHJlc3VsdC5sZW5ndGggPT09IDApO1xyXG4gXHJcbiAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICBlcnJvckJveC5pbm5lckhUTUwgPSBidWlsZEVycm9yTWFya3VwKHJlc3VsdCk7XHJcbiAgICAgICAgZXJyb3JCb3guc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaFZhbGlkYXRvcihpbnB1dElkLCBldmVudFR5cGVzID0gWydpbnB1dCcsICdibHVyJ10sIGRlbGF5TXMgPSAzMDAwKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xyXG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xyXG5cclxuICAgIGV2ZW50VHlwZXMuZm9yRWFjaChldmVudFR5cGUgPT4ge1xyXG4gICAgICAgIGlmIChldmVudFR5cGUgPT09ICdpbnB1dCcpIHtcclxuICAgICAgICAgICAgLy8gUG91ciBsJ8OpdsOpbmVtZW50ICdpbnB1dCcsIG9uIGFqb3V0ZSB1biBkw6lsYWkgZGUgMyBzZWNvbmRlc1xyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgICAgICB9LCBkZWxheU1zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdjaGFuZ2UnKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgJ2NoYW5nZScsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdibHVyJykge1xyXG4gICAgICAgICAgICAvLyBQb3VyICdibHVyJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBam91dGVyICd0b3VjaGVuZCcgcG91ciBtb2JpbGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFBldGl0IGTDqWxhaSBwb3VyIMOpdml0ZXIgbGVzIGRvdWJsZXMgZMOpY2xlbmNoZW1lbnRzXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJ1blZhbGlkYXRvcihpbnB1dElkKSwgMTAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgLy8gUG91ciAnY2xpY2snLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIFBTRVVET1MgKGfDqW7DqXJpcXVlcylcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIHQoa2V5KSB7XHJcbiAgICByZXR1cm4gKHdpbmRvdy5hcHBUcmFuc2xhdGlvbnMgJiYgd2luZG93LmFwcFRyYW5zbGF0aW9uc1trZXldKSB8fCBrZXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyUHNldWRvKGlucHV0SWQsIGVycm9ySWQsIG1pbkxlbmd0aCA9IDMsIG1heExlbmd0aCA9IDI1KSB7XHJcbiAgICByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCAodmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgncHNldWRvX3JlcXVpcmVkJyk7XHJcbiAgICAgICAgaWYgKHYubGVuZ3RoIDwgbWluTGVuZ3RoKSByZXR1cm4gdCgncHNldWRvX21pbl8zJyk7XHJcbiAgICAgICAgaWYgKHYubGVuZ3RoID4gbWF4TGVuZ3RoKSByZXR1cm4gdCgncHNldWRvX21heF8yNScpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHBzZXVkb0ZpZWxkcyA9IFtcclxuICAgIHsgaW5wdXRJZDogXCJzdXBwb3J0X25hbWVcIiwgZXJyb3JJZDogXCJwc2V1ZG8tZXJyb3JcIiwgbWluTGVuZ3RoOiAzLCBtYXhMZW5ndGg6IDI1IH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcl9wc2V1ZG9cIiwgZXJyb3JJZDogXCJ1c2VyX3BzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMsIG1heExlbmd0aDogMjUgfSxcclxuXTtcclxuXHJcbnBzZXVkb0ZpZWxkcy5mb3JFYWNoKGYgPT4gcmVnaXN0ZXJQc2V1ZG8oZi5pbnB1dElkLCBmLmVycm9ySWQsIGYubWluTGVuZ3RoLCBmLm1heExlbmd0aCkpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgRU1BSUxTIChnw6luw6lyaXF1ZXMgcG91ciB0b3V0IGxlIHNpdGUpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlckVtYWlsKGlucHV0SWQsIGVycm9ySWQpIHtcclxuICAgIHJlZ2lzdGVyVmFsaWRhdG9yKGlucHV0SWQsIGVycm9ySWQsICh2YWx1ZSwgaW5wdXQpID0+IHtcclxuICAgICAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgnZW1haWxfcmVxdWlyZWQnKTtcclxuICAgICAgICBpZiAoIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkgcmV0dXJuIHQoJ2VtYWlsX2ludmFsaWQnKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBlbWFpbEZpZWxkcyA9IFtcclxuICAgIHsgaW5wdXRJZDogXCJzdXBwb3J0X2VtYWlsXCIsIGVycm9ySWQ6IFwiZW1haWwtZXJyb3JcIiB9LFxyXG4gICAgeyBpbnB1dElkOiBcInVzZXJfZW1haWxcIiwgZXJyb3JJZDogXCJ1c2VyX2VtYWlsLWVycm9yXCIgfSxcclxuICAgIHsgaW5wdXRJZDogXCJ1c2VybmFtZVwiLCBlcnJvcklkOiBcInVzZXJuYW1lLWVycm9yXCIgfSxcclxuICAgIHsgaW5wdXRJZDogXCJmb3Jnb3RfcGFzc3dvcmRfcmVxdWVzdF9mb3JtX2VtYWlsXCIsIGVycm9ySWQ6IFwiZm9yZ290X2VtYWlsLWVycm9yXCIgfVxyXG5dO1xyXG5cclxuZW1haWxGaWVsZHMuZm9yRWFjaChmID0+IHJlZ2lzdGVyRW1haWwoZi5pbnB1dElkLCBmLmVycm9ySWQpKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIE1PVFMgREUgUEFTU0UgKGfDqW7DqXJpcXVlcylcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmZ1bmN0aW9uIHBhc3N3b3JkQ2hlY2tsaXN0KHZhbHVlKSB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWU7XHJcbiAgICBjb25zdCBlcnJvcnMgPSBbXTtcclxuIFxyXG4gICAgaWYgKHYubGVuZ3RoIDwgOCkgZXJyb3JzLnB1c2godCgncGFzc3dvcmRfbGVuZ3RoXzgnKSk7XHJcbiAgICBpZiAoIS9bQS1aXS8udGVzdCh2KSkgZXJyb3JzLnB1c2godCgncGFzc3dvcmRfdXBwZXInKSk7XHJcbiAgICBpZiAoIS9cXGQvLnRlc3QodikpIGVycm9ycy5wdXNoKHQoJ3Bhc3N3b3JkX251bWJlcicpKTtcclxuICAgIGlmICghL1tcXFdfXS8udGVzdCh2KSkgZXJyb3JzLnB1c2godCgncGFzc3dvcmRfc3BlY2lhbCcpKTtcclxuIFxyXG4gICAgcmV0dXJuIGVycm9ycztcclxufVxyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJ1c2VyX3BsYWluUGFzc3dvcmRfZmlyc3RcIiwgXCJ1c2VyX3Bhc3N3b3JkX2ZpcnN0LWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHBhc3N3b3JkQ2hlY2tsaXN0KHZhbHVlKTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInVzZXJfcGxhaW5QYXNzd29yZF9zZWNvbmRcIiwgXCJ1c2VyX3Bhc3N3b3JkX3NlY29uZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyX3BsYWluUGFzc3dvcmRfZmlyc3RcIik7XHJcbiAgICBpZiAoIWZpcnN0KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfY29uZmlybV9yZXF1aXJlZCcpO1xyXG4gICAgaWYgKHZhbHVlICE9PSBmaXJzdC52YWx1ZSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX21pc21hdGNoJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdFwiLCBcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIHJldHVybiBwYXNzd29yZENoZWNrbGlzdCh2YWx1ZSk7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kXCIsIFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3RcIik7XHJcbiAgICBpZiAoIWZpcnN0KSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfY29uZmlybV9yZXF1aXJlZCcpO1xyXG4gICAgaWYgKHZhbHVlICE9PSBmaXJzdC52YWx1ZSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX21pc21hdGNoJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyBNb3QgZGUgcGFzc2UgZGUgY29ubmV4aW9uXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwicGFzc3dvcmRcIiwgXCJwYXNzd29yZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9yZXF1aXJlZCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gTW90IGRlIHBhc3NlIFwib3VibGnDqVwiIChub3V2ZWF1IG1vdCBkZSBwYXNzZSwgc2kgdHUgYXMgdW4gY2hhbXBzIGTDqWRpw6kpXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwiZm9yZ290X3Bhc3N3b3JkXCIsIFwiZm9yZ290X3Bhc3N3b3JkLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX3JlcXVpcmVkJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBTVVBQT1JUIFNVUFBMw4lNRU5UQUlSRVMg4oaSIGNhdGVnb3J5IC8gbWVzc2FnZSAvIGltYWdlXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInN1cHBvcnRfY2F0ZWdvcnlcIiwgXCJzZWxlY3RlLWVycm9yXCIsICh2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdzdXBwb3J0X2NhdGVnb3J5X3JlcXVpcmVkJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInN1cHBvcnRfbWVzc2FnZVwiLCBcInRleHQtYXJlYS1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ3N1cHBvcnRfbWVzc2FnZV9yZXF1aXJlZCcpO1xyXG4gICAgaWYgKHYubGVuZ3RoIDwgMTApIHJldHVybiB0KCdzdXBwb3J0X21lc3NhZ2VfbWluXzEwJyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyBWQUxJREFUSU9OIERFIEzigJlJTUFHRSAoc3VwcG9ydClcclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X2ltYWdlRmlsZVwiLCBcImltYWdlLWVycm9yXCIsICh2YWx1ZSwgaW5wdXQpID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBpbnB1dC5maWxlc1swXTtcclxuICAgIGlmICghZmlsZSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY29uc3QgYWxsb3dlZCA9IFtcImltYWdlL2pwZWdcIiwgXCJpbWFnZS9qcGdcIiwgXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS93ZWJwXCJdO1xyXG4gICAgY29uc3QgbWF4ID0gMiAqIDEwMjQgKiAxMDI0O1xyXG5cclxuICAgIGlmICghYWxsb3dlZC5pbmNsdWRlcyhmaWxlLnR5cGUpKSByZXR1cm4gdCgnaW1hZ2VfdHlwZScpO1xyXG4gICAgaWYgKGZpbGUuc2l6ZSA+IG1heCkgcmV0dXJuIHQoJ2ltYWdlX3NpemUnKTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU09VTUlTU0lPTiBEVSBGT1JNVUxBSVJFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBvblN1Ym1pdChldikge1xyXG4gICAgbGV0IGhhc0Vycm9yID0gZmFsc2U7XHJcblxyXG4gICAgLy8gQW5udWxlciB0b3VzIGxlcyB0aW1lcnMgZW4gY291cnNcclxuICAgIE9iamVjdC5rZXlzKHZhbGlkYXRpb25UaW1lcnMpLmZvckVhY2goaW5wdXRJZCA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgIGRlbGV0ZSB2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVsOpcmlmaWVyIHRvdXMgbGVzIHZhbGlkYXRldXJzIGVucmVnaXN0csOpc1xyXG4gICAgT2JqZWN0LmtleXModmFsaWRhdG9ycykuZm9yRWFjaCgoaW5wdXRJZCkgPT4ge1xyXG4gICAgICAgIGlmICghcnVuVmFsaWRhdG9yKGlucHV0SWQpKSB7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBWw6lyaWZpZXIgbGEgdmFsaWRpdMOpIEhUTUw1IGRlcyBjaGFtcHMgc2FucyB2YWxpZGF0ZXVyIGN1c3RvbVxyXG4gICAgY29uc3QgZm9ybSA9IGV2LnRhcmdldDtcclxuICAgIGNvbnN0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblxyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgLy8gSWdub3JlciBsZXMgY2hhbXBzIHF1aSBvbnQgZMOpasOgIHVuIHZhbGlkYXRldXIgY3VzdG9tXHJcbiAgICAgICAgaWYgKHZhbGlkYXRvcnNbaW5wdXQuaWRdKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIGhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaGFzRXJyb3IpIHtcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5JVElBTElTQVRJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1mb3JtJyk7XHJcbiAgICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZm9ybScpO1xyXG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblxyXG4gICAgLy8gSW5pdGlhbGlzZXIgbGVzIGlucHV0cyBkZSBiYXNlXHJcbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgICBpbml0SW5wdXQoaW5wdXQpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXQudGFnTmFtZSA9PT0gJ1NFTEVDVCcgJiYgaW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIGRlIHN1cHBvcnRcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9uYW1lJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2NhdGVnb3J5JywgWydjaGFuZ2UnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9tZXNzYWdlJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdzdXBwb3J0X2ltYWdlRmlsZScsIFsnY2hhbmdlJ10sIDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIHV0aWxpc2F0ZXVyXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcHNldWRvJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX2VtYWlsJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BsYWluUGFzc3dvcmRfZmlyc3QnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3VzZXJfcGxhaW5QYXNzd29yZF9zZWNvbmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIGR1IGZvcm11bGFpcmUgcmVzZXQgcGFzc3dvcmRcclxuICAgIGF0dGFjaFZhbGlkYXRvcigncmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0JywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCdyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfc2Vjb25kJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIGRlIGNvbm5leGlvblxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VybmFtZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigncGFzc3dvcmQnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcblxyXG4gICAgLy8gQXR0YWNoZXIgbGVzIHZhbGlkYXRldXJzIMOpdmVudHVlbHMgZHUgZm9ybXVsYWlyZSBcIm1vdCBkZSBwYXNzZSBvdWJsacOpXCJcclxuICAgIGF0dGFjaFZhbGlkYXRvcignZm9yZ290X3Bhc3N3b3JkX3JlcXVlc3RfZm9ybV9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignZm9yZ290X3Bhc3N3b3JkJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxhIHZhbGlkYXRpb24gYXUgc3VibWl0XHJcbiAgICBpZiAoZm9ybSkge1xyXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxhIHZhbGlkYXRpb24gYXUgZm9ybXVsYWlyZSBkZSBjb25uZXhpb25cclxuICAgIGlmIChsb2dpbkZvcm0pIHtcclxuICAgICAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TdWJtaXQpO1xyXG4gICAgfVxyXG59KTsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1jb25zZW50XCIpO1xyXG4gICAgY29uc3QgYWNjZXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NlcHQtY29va2llc1wiKTtcclxuICAgIGNvbnN0IHJlZnVzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVmdXNlLWNvb2tpZXNcIik7XHJcbiAgICBjb25zdCByZW1lbWJlckNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJfcmVtZW1iZXJfbWVcIik7XHJcblxyXG4gICAgLy8gVsOpcmlmaWVyIHF1ZSBsZXMgw6lsw6ltZW50cyBleGlzdGVudFxyXG4gICAgaWYgKCFib3ggfHwgIWFjY2VwdCB8fCAhcmVmdXNlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiw4lsw6ltZW50cyBjb29raWUgbm9uIHRyb3V2w6lzXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25zZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWUtY29uc2VudFwiKTtcclxuXHJcbiAgICAvLyBBRkZJQ0hBR0UgSU5JVElBTFxyXG4gICAgaWYgKCFjb25zZW50KSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICB9LCA2MDApO1xyXG4gICAgfSBlbHNlIGlmIChjb25zZW50ID09PSBcInJlZnVzZWRcIikge1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIETDiVNBQ1RJVkVSIFJFTUVNQkVSIE1FIFNJIFJFRlVTXHJcbiAgICBpZiAoY29uc2VudCAhPT0gXCJhY2NlcHRlZFwiICYmIHJlbWVtYmVyQ2hlY2tib3gpIHtcclxuICAgICAgICByZW1lbWJlckNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBQ0NFUFRFUlxyXG4gICAgYWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWUtY29uc2VudFwiLCBcImFjY2VwdGVkXCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICBpZiAocmVtZW1iZXJDaGVja2JveCkgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUkVGVVNFUlxyXG4gICAgcmVmdXNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb29raWUtY29uc2VudFwiLCBcInJlZnVzZWRcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiY29sbGFwc2VkXCIpO1xyXG5cclxuICAgICAgICBpZiAocmVtZW1iZXJDaGVja2JveCkge1xyXG4gICAgICAgICAgICByZW1lbWJlckNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU0kgT04gQ0xJUVVFIFNVUiBMRSBCT1VUT04gUsOJRFVJVCDihpIgUsOJQUZGSUNIRVIgTEEgQkFOTknDiFJFXHJcbiAgICBjb25zdCBjb2xsYXBzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llLWV4cGFuZC1idG5cIik7XHJcbiAgICBpZiAoY29sbGFwc2VCdG4pIHtcclxuICAgICAgICBjb2xsYXBzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNJIE9OIENMSVFVRSBTVVIgUkVNRU1CRVIgTUUgQVBSw4hTIFVOIFJFRlVTIOKGkiBSw4lBRkZJQ0hFUiBMQSBCQU5OScOIUkVcclxuICAgIGlmIChyZW1lbWJlckNoZWNrYm94KSB7XHJcbiAgICAgICAgY29uc3QgcmVtZW1iZXJMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cIl9yZW1lbWJlcl9tZVwiXScpO1xyXG4gICAgICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb25zZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb29raWUtY29uc2VudFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q29uc2VudCA9PT0gXCJyZWZ1c2VkXCIpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZW1lbWJlckNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmVtZW1iZXJDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICAgICAgICBpZiAocmVtZW1iZXJMYWJlbCkge1xyXG4gICAgICAgICAgICByZW1lbWJlckxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7IiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2V0LWJ0bicpLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IGJ1dHRvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGlmIChpbnB1dCAmJiBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5kYXRhc2V0Lm9yaWdpbmFsO1xyXG4gICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiaW5pdFNlbGVjdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJjYXJkIiwicmFkaW8iLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImMiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjaGVja2VkIiwiYWRkIiwiY2xvc2VzdCIsInJlYWR5U3RhdGUiLCJzZWxlY3RvciIsImlucHV0cyIsImZvcm0iLCJpbml0SW5wdXQiLCJpbnB1dEVsIiwid3JhcHBlciIsInBhcmVudEVsZW1lbnQiLCJ2YWx1ZSIsInRyaW0iLCJvbkZvY3VzIiwib25CbHVyIiwiZXYiLCJwYXJlbnQiLCJ0YXJnZXQiLCJpbnB1dCIsImxpdmVWYWxpZGF0aW9uIiwiY2hlY2tWYWxpZGl0eSIsInZhbGlkYXRvcnMiLCJ2YWxpZGF0aW9uVGltZXJzIiwicmVnaXN0ZXJWYWxpZGF0b3IiLCJpbnB1dElkIiwiZXJyb3JJZCIsInZhbGlkYXRlRm4iLCJidWlsZEVycm9yTWFya3VwIiwicmVzdWx0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiaXRlbXMiLCJtYXAiLCJsaW5lIiwiY29uY2F0Iiwiam9pbiIsInJ1blZhbGlkYXRvciIsImNvbmZpZyIsImdldEVsZW1lbnRCeUlkIiwiZXJyb3JCb3giLCJzdHlsZSIsInZpc2liaWxpdHkiLCJ0ZXh0Q29udGVudCIsImlzVmFsaWQiLCJpbm5lckhUTUwiLCJhdHRhY2hWYWxpZGF0b3IiLCJldmVudFR5cGVzIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiZGVsYXlNcyIsImV2ZW50VHlwZSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ0Iiwia2V5Iiwid2luZG93IiwiYXBwVHJhbnNsYXRpb25zIiwicmVnaXN0ZXJQc2V1ZG8iLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJ2IiwicHNldWRvRmllbGRzIiwiZiIsInJlZ2lzdGVyRW1haWwiLCJlbWFpbEZpZWxkcyIsInBhc3N3b3JkQ2hlY2tsaXN0IiwiZXJyb3JzIiwicHVzaCIsInRlc3QiLCJmaXJzdCIsImZpbGUiLCJmaWxlcyIsImFsbG93ZWQiLCJtYXgiLCJpbmNsdWRlcyIsInR5cGUiLCJzaXplIiwib25TdWJtaXQiLCJoYXNFcnJvciIsIk9iamVjdCIsImtleXMiLCJpZCIsInByZXZlbnREZWZhdWx0IiwibG9naW5Gb3JtIiwidGFnTmFtZSIsImJveCIsImFjY2VwdCIsInJlZnVzZSIsInJlbWVtYmVyQ2hlY2tib3giLCJjb25zb2xlIiwid2FybiIsImNvbnNlbnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGlzYWJsZWQiLCJzZXRJdGVtIiwiY29sbGFwc2VCdG4iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicmVtZW1iZXJMYWJlbCIsImNsaWNrSGFuZGxlciIsImN1cnJlbnRDb25zZW50IiwiYnV0dG9uIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImRhdGFzZXQiLCJvcmlnaW5hbCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCJdLCJzb3VyY2VSb290IjoiIn0=