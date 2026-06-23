"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["game"],{

/***/ "./assets/scripts/Game/Layers/gridLayer.js"
/*!*************************************************!*\
  !*** ./assets/scripts/Game/Layers/gridLayer.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gridLayer: () => (/* binding */ gridLayer),
/* harmony export */   initGridLayer: () => (/* binding */ initGridLayer),
/* harmony export */   setChunkColor: () => (/* binding */ setChunkColor)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../utils/debug.js */ "./assets/scripts/utils/debug.js");
/* harmony import */ var _utils_chunk_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../utils/chunk.js */ "./assets/scripts/Game/utils/chunk.js");
/* harmony import */ var _map_map_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../map/map.js */ "./assets/scripts/Game/map/map.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
































var gridLayer = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_28__["default"].layerGroup();
var visibleChunks = new Map();
function initGridLayer() {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_31__.getMap)();
  if (!map) return;
  if (!(0,_map_map_js__WEBPACK_IMPORTED_MODULE_31__.isGridLayerActive)()) return;
  var zoom = map.getZoom();
  if (zoom < 14) return;
  var bounds = map.getBounds();
  var minLat = Math.floor(bounds.getSouth() / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE);
  var maxLat = Math.ceil(bounds.getNorth() / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE);
  var minLng = Math.floor(bounds.getWest() / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE);
  var maxLng = Math.ceil(bounds.getEast() / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE);
  var newVisible = new Set();
  for (var i = minLat; i < maxLat; i++) {
    var _loop = function _loop() {
      var id = "".concat(i, "_").concat(j);
      newVisible.add(id);
      if (visibleChunks.has(id)) return 1; // continue
      var lat = i * _utils_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE;
      var lng = j * _utils_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE;
      var rect = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_28__["default"].rectangle([[lat, lng], [lat + _utils_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE, lng + _utils_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE]], {
        color: "orange",
        weight: 1,
        fillOpacity: 0.15
      });
      rect.on('mouseover', function () {
        return rect.setStyle({
          fillOpacity: 0.3
        });
      });
      rect.on('mouseout', function () {
        return rect.setStyle({
          fillOpacity: 0.15
        });
      });
      gridLayer.addLayer(rect);
      visibleChunks.set(id, rect);
    };
    for (var j = minLng; j < maxLng; j++) {
      if (_loop()) continue;
    }
  }

  // 🧹 remove ceux hors écran
  var _iterator = _createForOfIteratorHelper(visibleChunks.entries()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        id = _step$value[0],
        rect = _step$value[1];
      if (!newVisible.has(id)) {
        gridLayer.removeLayer(rect);
        visibleChunks["delete"](id);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_29__.debugLog)("chunks", "Chunks visibles:", visibleChunks.size);
}

// ==========================
// CHUNK COLOR
// ==========================
function setChunkColor(id, color) {
  if (!(0,_map_map_js__WEBPACK_IMPORTED_MODULE_31__.isGridLayerActive)()) return;
  var rect = visibleChunks.get(id);
  if (!rect) return;
  rect.setStyle({
    color: color,
    fillOpacity: 0.2
  });
}

/***/ },

/***/ "./assets/scripts/Game/api.js"
/*!************************************!*\
  !*** ./assets/scripts/Game/api.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildRequest: () => (/* binding */ buildRequest),
/* harmony export */   getBuildingCosts: () => (/* binding */ getBuildingCosts),
/* harmony export */   getBuildings: () => (/* binding */ getBuildings),
/* harmony export */   getUpgradeInfo: () => (/* binding */ getUpgradeInfo),
/* harmony export */   upgradeBuilding: () => (/* binding */ upgradeBuilding)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);




function buildRequest(lat, lng, typeId) {
  return fetch('/api/build', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      lat: lat,
      lng: lng,
      type_id: typeId
    })
  });
}
function getBuildings() {
  return fetch('/api/map-data').then(function (res) {
    return res.json();
  });
}
function getBuildingCosts(buildingTypeId) {
  return fetch("/api/building-types/".concat(buildingTypeId, "/costs")).then(function (res) {
    return res.json();
  });
}
function upgradeBuilding(buildingId) {
  return fetch("/api/building/".concat(buildingId, "/upgrade"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
function getUpgradeInfo(buildingId) {
  return fetch("/api/building/".concat(buildingId, "/upgrade-info"));
}

/***/ },

/***/ "./assets/scripts/Game/buildings/base.js"
/*!***********************************************!*\
  !*** ./assets/scripts/Game/buildings/base.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableAdminCoordinatePicker: () => (/* binding */ enableAdminCoordinatePicker),
/* harmony export */   getCurrentPlayerFaction: () => (/* binding */ getCurrentPlayerFaction),
/* harmony export */   initBaseUI: () => (/* binding */ initBaseUI),
/* harmony export */   loadBaseFromServer: () => (/* binding */ loadBaseFromServer),
/* harmony export */   loadOtherBase: () => (/* binding */ loadOtherBase),
/* harmony export */   setCurrentPlayerFaction: () => (/* binding */ setCurrentPlayerFaction)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.every.js */ "./node_modules/core-js/modules/es.array.every.js");
/* harmony import */ var core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.number.is-finite.js */ "./node_modules/core-js/modules/es.number.is-finite.js");
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _map_map_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../map/map.js */ "./assets/scripts/Game/map/map.js");
/* harmony import */ var _map_roads_roadsState_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../map/roads/roadsState.js */ "./assets/scripts/Game/map/roads/roadsState.js");
/* harmony import */ var _building_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./building.js */ "./assets/scripts/Game/buildings/building.js");
/* harmony import */ var _utils_chunk_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/chunk.js */ "./assets/scripts/Game/utils/chunk.js");
/* harmony import */ var _map_roads_roads_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../map/roads/roads.js */ "./assets/scripts/Game/map/roads/roads.js");
/* harmony import */ var _map_roads_roadUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../map/roads/roadUtils.js */ "./assets/scripts/Game/map/roads/roadUtils.js");
/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../notifications.js */ "./assets/scripts/Game/notifications.js");
/* harmony import */ var _utils_admin_clipboard_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/admin_clipboard.js */ "./assets/scripts/Game/utils/admin_clipboard.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/debug.js */ "./assets/scripts/utils/debug.js");
/* harmony import */ var _ui_drawOnMap_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../ui/drawOnMap.js */ "./assets/scripts/Game/ui/drawOnMap.js");























// =======================
// 🧠 STATE
// =======================
var baseMarker = null;
var baseCircle = null;
var basePosition = null;
var baseCreated = false;
var placingBase = false;
var previewMarker = null;
var previewCircle = null;
var previewSnapLatLng = null;
var previewLine = null;
var highlightedSegment = null;
var currentPlayerFaction = 'default';

// =======================
// SET PLAYER FACTION
// =======================
function setCurrentPlayerFaction(faction) {
  currentPlayerFaction = (faction || 'default').toLowerCase();
}

// =======================
// GET PLAYER FACTION
// =======================
function getCurrentPlayerFaction() {
  return currentPlayerFaction;
}

// =======================
// INIT UI
// =======================
function initBaseUI() {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_12__.getMap)();
  var baseBtn = document.getElementById('baseBtn');
  baseBtn.addEventListener('click', function () {
    var mode = baseBtn.dataset.mode;

    // =======================
    // CREATE BASE MODE 
    // =======================
    if (mode === 'create') {
      if (baseCreated) {
        alert("Base déjà créée !");
        return;
      }
      placingBase = true;
      map.getContainer().style.cursor = 'crosshair';
      (0,_notifications_js__WEBPACK_IMPORTED_MODULE_18__.showNotification)("Clique sur la carte pour placer ta base", 'info');
      (0,_map_roads_roads_js__WEBPACK_IMPORTED_MODULE_16__.loadVisibleRoadChunks)();
    }

    // =======================
    // RETURN BASE MODE
    // =======================
    if (mode === 'return') {
      if (!basePosition) {
        alert("Aucune base !");
        return;
      }
      (0,_map_map_js__WEBPACK_IMPORTED_MODULE_12__.flyTo)(basePosition[0], basePosition[1], 16);
    }
  });

  // =======================
  // CLICK MAP
  // =======================
  map.on('click', function () {
    if (!placingBase || baseCreated) return;
    if (!previewSnapLatLng) return;
    var _previewSnapLatLng = previewSnapLatLng,
      lat = _previewSnapLatLng.lat,
      lng = _previewSnapLatLng.lng;
    if (!isBasePlacementValid(lat, lng)) {
      alert("❌ Trop proche d'une base !");
      return;
    }
    cleanupPreview(map);
    createBase(lat, lng);
  });

  // =======================
  // MOUSE MOVE (preview snap road)
  // =======================
  map.on('mousemove', function (e) {
    if (!placingBase) return;
    var roads = (0,_map_roads_roadsState_js__WEBPACK_IMPORTED_MODULE_13__.getAllLoadedRoads)();
    if (!roads.length) return;
    var result = (0,_map_roads_roadUtils_js__WEBPACK_IMPORTED_MODULE_17__.findClosestPointOnRoad)(e.latlng, roads);
    if (!result.point) return;
    previewSnapLatLng = result.point;
    var isValid = isBasePlacementValid(result.point.lat, result.point.lng);
    cleanupPreview(map);
    var color = isValid ? 'green' : 'red';
    previewCircle = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_11__["default"].circle(result.point, {
      radius: 600,
      color: color,
      weight: 2,
      fillOpacity: 0
    }).addTo(map);
    previewMarker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_11__["default"].marker(result.point).addTo(map);
    previewLine = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_11__["default"].polyline([e.latlng, result.point], {
      color: 'cyan',
      weight: 2,
      opacity: 0.6,
      dashArray: '5, 5'
    }).addTo(map);
    var segment = (0,_map_roads_roadUtils_js__WEBPACK_IMPORTED_MODULE_17__.findClosestSegment)(e.latlng, roads);
    if (segment) {
      highlightedSegment = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_11__["default"].polyline(segment, {
        color: 'yellow',
        weight: 6,
        opacity: 0.8
      }).addTo(map);
    }
    map.getContainer().style.cursor = 'none';
  });

  // =======================
  // UPDATE VISUAL BASE AND OTHER BASE
  // =======================
  map.on('zoomend', function () {
    updateBaseDisplay();
    updateOtherBases();
  });
}

// =======================
// PATHFINDING DEBUG FOR ADMIN - CLICK TO GET COORDINATES
// =======================
function enableAdminCoordinatePicker() {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_12__.getMap)();
  (0,_notifications_js__WEBPACK_IMPORTED_MODULE_18__.showNotification)("Mode Admin activé : cliquez sur la carte", 'info');
  map.on('click', function (e) {
    (0,_utils_admin_clipboard_js__WEBPACK_IMPORTED_MODULE_19__.getAdminCoords)(e.latlng.lat, e.latlng.lng);
  });
}
window.enableAdminCoordinatePicker = enableAdminCoordinatePicker;

// =======================
// 🧹 CLEAN PREVIEW
// =======================
function cleanupPreview() {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_12__.getMap)();
  previewMarker && map.removeLayer(previewMarker);
  previewCircle && map.removeLayer(previewCircle);
  previewLine && map.removeLayer(previewLine);
  highlightedSegment && map.removeLayer(highlightedSegment);
  previewMarker = null;
  previewCircle = null;
  previewLine = null;
  highlightedSegment = null;
  map.getContainer().style.cursor = '';
}

// =======================
// VALIDATION
// =======================
function isBasePlacementValid(lat, lng) {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_12__.getMap)();
  return otherBases.every(function (base) {
    var dist = map.distance([lat, lng], [base.lat, base.lng]);
    return dist >= 1100;
  });
}

// =======================
// CREATE BASE
// =======================
function createBase(lat, lng) {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_12__.getMap)();
  placingBase = false;
  basePosition = [lat, lng];
  (0,_map_map_js__WEBPACK_IMPORTED_MODULE_12__.flyTo)(lat, lng);
  baseCircle = (0,_ui_drawOnMap_js__WEBPACK_IMPORTED_MODULE_21__.drawBaseCircle)('player_base', lat, lng, currentPlayerFaction, true);
  var baseTypeId = 1;
  fetch('/api/build', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      lat: lat,
      lng: lng,
      type_id: baseTypeId
    })
  }).then(function (res) {
    if (!res.ok) return res.json().then(function (err) {
      throw new Error(err.error || "API error");
    });
    return res.json();
  }).then(function () {
    baseCreated = true;
  })["catch"](function (err) {
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_20__.debugError)('bases', "Erreur création base", err);
    removeBase();
    alert("Erreur création base : " + err.message);
  });
  map.getContainer().style.cursor = '';
  updateBaseDisplay();
}

// =======================
// REMOVE BASE
// =======================
function removeBase() {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_12__.getMap)();
  baseMarker && map.removeLayer(baseMarker);
  baseCircle && map.removeLayer(baseCircle);
  baseMarker = null;
  baseCircle = null;
  basePosition = null;
  baseCreated = false;
  placingBase = false;
  map.getContainer().style.cursor = '';
}
// =======================
// LOAD OTHER BASE
// =======================
var otherBases = [];
function loadOtherBase(lat, lng, pseudo, faction) {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_12__.getMap)();
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
  var isPlayerBase = faction === currentPlayerFaction;

  // Utiliser drawBaseCircle de drawOnMap.js
  var circle = (0,_ui_drawOnMap_js__WEBPACK_IMPORTED_MODULE_21__.drawBaseCircle)("other_".concat(lat, "_").concat(lng), lat, lng, faction, isPlayerBase);
  var icon = createBaseIcon(map.getZoom(), faction);
  var marker = null;
  if (icon) {
    marker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_11__["default"].marker([lat, lng], {
      icon: icon
    }).addTo(map).bindPopup("\uD83C\uDFD5\uFE0F Base de ".concat(pseudo));
  }
  otherBases.push({
    lat: lat,
    lng: lng,
    pseudo: pseudo,
    marker: marker,
    circle: circle,
    faction: faction
  });
}

// =======================
// UPDATE OTHER BASE
// =======================
function updateOtherBases() {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_12__.getMap)();
  var zoom = map.getZoom();
  otherBases.forEach(function (base) {
    var icon = createBaseIcon(zoom, base.faction);
    if (!icon) {
      if (base.marker) map.removeLayer(base.marker);
      return;
    }
    if (!base.marker) {
      base.marker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_11__["default"].marker([base.lat, base.lng], {
        icon: icon
      }).addTo(map).bindPopup("\uD83C\uDFD5\uFE0F Base de ".concat(base.pseudo));
      return;
    }
    if (!map.hasLayer(base.marker)) base.marker.addTo(map);
    base.marker.setIcon(icon);
  });
}

// =======================
// LOAD FROM SERVER
// =======================
function loadBaseFromServer(lat, lng) {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_12__.getMap)();
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
  basePosition = [lat, lng];
  baseCreated = true;

  // Utiliser drawBaseCircle de drawOnMap.js (notre base = isPlayerBase = true)
  baseCircle = (0,_ui_drawOnMap_js__WEBPACK_IMPORTED_MODULE_21__.drawBaseCircle)('player_base', lat, lng, currentPlayerFaction, true);
  updateBaseDisplay();
}

// =======================
// UPDATE BASE DISPLAY
// =======================
function updateBaseDisplay() {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_12__.getMap)();
  if (!basePosition) return;
  var icon = createBaseIcon(map.getZoom(), currentPlayerFaction);
  if (!icon) {
    if (baseMarker) map.removeLayer(baseMarker);
    return;
  }
  if (!baseMarker) {
    baseMarker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_11__["default"].marker(basePosition, {
      icon: icon
    }).addTo(map);
  } else {
    if (!map.hasLayer(baseMarker)) baseMarker.addTo(map);
    baseMarker.setIcon(icon);
  }
}

// =======================
// CREATE BASE ICON
// =======================
function createBaseIcon(zoom, faction) {
  if (zoom < 13) return null;
  var size = faction !== 'nomades' ? zoom > 15 ? 100 : 70 : zoom > 15 ? 75 : 60;

  // Toujours utiliser l'icône de la faction (le fallback Apache gère les 404)
  // Si l'icône n'existe pas, Apache redirige vers default automatiquement
  var iconUrl = (0,_building_js__WEBPACK_IMPORTED_MODULE_14__.getBuildingImage)(faction, 'base');
  return _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_11__["default"].icon({
    iconUrl: iconUrl,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2]
  });
}

/***/ },

/***/ "./assets/scripts/Game/buildings/buildMode.js"
/*!****************************************************!*\
  !*** ./assets/scripts/Game/buildings/buildMode.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateBuildMode: () => (/* binding */ activateBuildMode),
/* harmony export */   deactivateBuildMode: () => (/* binding */ deactivateBuildMode),
/* harmony export */   initBuildMode: () => (/* binding */ initBuildMode),
/* harmony export */   isBuildModeActive: () => (/* binding */ isBuildModeActive)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _map_map_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../map/map.js */ "./assets/scripts/Game/map/map.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../api.js */ "./assets/scripts/Game/api.js");
/* harmony import */ var _building_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./building.js */ "./assets/scripts/Game/buildings/building.js");
/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../notifications.js */ "./assets/scripts/Game/notifications.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../utils/debug.js */ "./assets/scripts/utils/debug.js");

















function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







// =======================
// BUILD MODE STATE
// =======================
var selectedBuildingType = null;
var previewBuildingMarker = null;

/**
 * Initialise le mode construction
 */
function initBuildMode() {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_18__.getMap)();

  // Utiliser la délégation d'événements pour les boutons dynamiques
  document.addEventListener('click', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var btn, typeId;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            btn = e.target.closest('.build-item');
            if (btn) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            typeId = btn.dataset.typeId;
            if (typeId) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            _context.n = 3;
            return selectBuildingType(typeId, btn);
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  // Click sur la carte pour construire
  map.on('click', onMapClick);

  // Mouse move pour prévisualiser
  map.on('mousemove', onMapMouseMove);
}

/**
 * Sélectionne un type de bâtiment à construire
 */
function selectBuildingType(_x2, _x3) {
  return _selectBuildingType.apply(this, arguments);
}
/**
 * Nettoie la sélection actuelle
 */
function _selectBuildingType() {
  _selectBuildingType = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(typeId, button) {
    var map, data, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_18__.getMap)(); // Désélectionner précédemment
          clearBuildingSelection();

          // Gérer le cas spécial de la base (bouton #baseBtn)
          if (!(button.id === 'baseBtn' && typeId == 1)) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2);
        case 1:
          // Mettre en évidence le bouton sélectionné
          button.classList.add('selected');

          // Récupérer les coûts
          _context2.p = 2;
          _context2.n = 3;
          return (0,_api_js__WEBPACK_IMPORTED_MODULE_19__.getBuildingCosts)(typeId);
        case 3:
          data = _context2.v;
          selectedBuildingType = {
            id: typeId,
            name: data.name,
            costs: data.costs,
            button: button
          };
          (0,_notifications_js__WEBPACK_IMPORTED_MODULE_21__.showNotification)("S\xE9lectionn\xE9: ".concat(data.name, ". Clique sur la carte pour construire."), 'info');
          _context2.n = 5;
          break;
        case 4:
          _context2.p = 4;
          _t = _context2.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_22__.debugError)('buildings', "Erreur lors de la récupération des coûts", _t);
          (0,_notifications_js__WEBPACK_IMPORTED_MODULE_21__.showNotification)("Erreur lors de la récupération des coûts", 'error');
        case 5:
          return _context2.a(2);
      }
    }, _callee2, null, [[2, 4]]);
  }));
  return _selectBuildingType.apply(this, arguments);
}
function clearBuildingSelection() {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_18__.getMap)();
  if (previewBuildingMarker) {
    map.removeLayer(previewBuildingMarker);
    previewBuildingMarker = null;
  }
  selectedBuildingType = null;

  // Retirer la classe selected de tous les boutons
  document.querySelectorAll('.build-item').forEach(function (btn) {
    btn.classList.remove('selected');
  });
}

/**
 * Gestion du click sur la carte
 */
function onMapClick(_x4) {
  return _onMapClick.apply(this, arguments);
}
/**
 * Prévisualisation de la position de construction
 */
function _onMapClick() {
  _onMapClick = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(e) {
    var map, lat, lng, response, data, _t2;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_18__.getMap)();
          if (selectedBuildingType) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2);
        case 1:
          if (previewBuildingMarker) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2);
        case 2:
          lat = e.latlng.lat;
          lng = e.latlng.lng;
          _context3.p = 3;
          _context3.n = 4;
          return (0,_api_js__WEBPACK_IMPORTED_MODULE_19__.buildRequest)(lat, lng, selectedBuildingType.id);
        case 4:
          response = _context3.v;
          _context3.n = 5;
          return response.json();
        case 5:
          data = _context3.v;
          if (response.ok) {
            (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_22__.debugLog)('buildings', "".concat(selectedBuildingType.name, " construit avec succ\xE8s !"));
            // Nettoyer
            map.removeLayer(previewBuildingMarker);
            previewBuildingMarker = null;
            clearBuildingSelection();
          } else {
            (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_22__.debugError)('buildings', "Erreur: ".concat(data.error));
          }
          _context3.n = 7;
          break;
        case 6:
          _context3.p = 6;
          _t2 = _context3.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_22__.debugError)('buildings', "Erreur lors de la construction", _t2);
          (0,_notifications_js__WEBPACK_IMPORTED_MODULE_21__.showNotification)("Erreur réseau lors de la construction", 'error');
        case 7:
          return _context3.a(2);
      }
    }, _callee3, null, [[3, 6]]);
  }));
  return _onMapClick.apply(this, arguments);
}
function onMapMouseMove(e) {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_18__.getMap)();
  if (!selectedBuildingType) {
    // Nettoyer les markers de prévisualisation
    if (previewBuildingMarker) {
      map.removeLayer(previewBuildingMarker);
      previewBuildingMarker = null;
    }
    return;
  }

  // Ajouter un marker de prévisualisation
  if (!previewBuildingMarker) {
    previewBuildingMarker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_17__["default"].marker([e.latlng.lat, e.latlng.lng]).addTo(map);
  } else {
    previewBuildingMarker.setLatLng(e.latlng);
  }
}

/**
 * Active le mode construction pour un type de bâtiment
 */
function activateBuildMode(typeId) {
  var btn = document.querySelector("[data-type-id=\"".concat(typeId, "\"]"));
  if (btn) {
    btn.click();
  }
}

/**
 * Désactive le mode construction
 */
function deactivateBuildMode() {
  clearBuildingSelection();
}

/**
 * Vérifie si le mode construction est actif
 */
function isBuildModeActive() {
  return selectedBuildingType !== null;
}

/***/ },

/***/ "./assets/scripts/Game/buildings/building.js"
/*!***************************************************!*\
  !*** ./assets/scripts/Game/buildings/building.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canBuildBuilding: () => (/* binding */ canBuildBuilding),
/* harmony export */   createBuildingIcon: () => (/* binding */ createBuildingIcon),
/* harmony export */   getBuildingImage: () => (/* binding */ getBuildingImage),
/* harmony export */   getBuildingTypeCosts: () => (/* binding */ getBuildingTypeCosts),
/* harmony export */   loadBuildings: () => (/* binding */ loadBuildings),
/* harmony export */   loadBuildingsFromData: () => (/* binding */ loadBuildingsFromData),
/* harmony export */   refreshBuildingPopup: () => (/* binding */ refreshBuildingPopup),
/* harmony export */   setCurrentPlayerId: () => (/* binding */ setCurrentPlayerId)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.is-finite.js */ "./node_modules/core-js/modules/es.number.is-finite.js");
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _map_map_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../map/map.js */ "./assets/scripts/Game/map/map.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../api.js */ "./assets/scripts/Game/api.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./base.js */ "./assets/scripts/Game/buildings/base.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../utils/debug.js */ "./assets/scripts/utils/debug.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
















































// Cache des informations de bâtiments
var buildingMarkers = new Map();

// Cache des popups déjà chargés
var popupContentLoaded = new Set();

// ID du joueur actif (initialisé depuis l'API)
var currentPlayerId = null;

/**
 * Définit l'ID du joueur actif
 * @param {number} id - L'ID du joueur connecté
 */
function setCurrentPlayerId(id) {
  currentPlayerId = id;
}

/**
 * Charge les bâtiments sur la carte avec leurs popups interactifs
 * @param {Array} buildings - Liste des bâtiments à afficher
 */
function loadBuildingsFromData(buildings) {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_43__.getMap)();
  if (!map) {
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_46__.debugError)('buildings', "Map not initialized");
    return;
  }
  if (!buildings || !Array.isArray(buildings)) {
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_46__.debugWarn)('buildings', "loadBuildingsFromData: invalid buildings data");
    return;
  }
  buildings.forEach(function (b) {
    var _b$type;
    // Ignorer les bases - elles sont gérées par base.js
    if (b.code === 'base' || ((_b$type = b.type) === null || _b$type === void 0 ? void 0 : _b$type.toLowerCase()) === 'base') {
      return;
    }
    if (!Number.isFinite(b.lat) || !Number.isFinite(b.lng)) {
      (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_46__.debugWarn)('buildings', "❌ Building ignoré (coord invalide)", b);
      return;
    }

    // Utiliser la faction du bâtiment (ou fallback sur la faction du joueur)
    var buildingFaction = b.faction || (0,_base_js__WEBPACK_IMPORTED_MODULE_45__.getCurrentPlayerFaction)();

    // Créer l'icône avec l'image du bâtiment
    var icon = createBuildingIcon(b.code, buildingFaction);

    // Stocker les données du building pour accès ultérieur
    var buildingData = {
      id: b.id,
      type: b.type,
      level: b.level,
      code: b.code,
      faction: buildingFaction,
      ownerId: b.ownerId,
      production: b.production || null,
      resource_type: b.resource_type || null
    };

    // Créer le marker avec popup vide (chargé au moment de l'ouverture)
    var marker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_42__["default"].marker([b.lat, b.lng], {
      icon: icon
    }).addTo(map).bindPopup(createSimplePopup(buildingData));
    buildingMarkers.set(b.id, {
      marker: marker,
      data: buildingData
    });

    // Écouter l'ouverture de la popup pour charger le contenu
    marker.on('popupopen', function () {
      if (b.id && isOwnBuilding(buildingData)) {
        loadUpgradeInfoAsync(b.id, marker, buildingData);
      }
    });
  });
}

/**
 * Vérifie si le bâtiment appartient au joueur actif
 */
function isOwnBuilding(building) {
  return building.ownerId === currentPlayerId;
}

/**
 * Crée un popup simple (synchrone)
 */
function createSimplePopup(building) {
  return "\n        <div class=\"building-popup\">\n            <h3>".concat(building.type || 'Bâtiment', "</h3>\n        </div>\n    ");
}

/**
 * Charge les infos d'amélioration en arrière-plan
 */
function loadUpgradeInfoAsync(_x, _x2, _x3) {
  return _loadUpgradeInfoAsync.apply(this, arguments);
}
/**
 * Charge les bâtiments depuis l'API (fonction de compatibilité)
 * @deprecated Utiliser loadBuildingsFromData(data) à la place
 */
function _loadUpgradeInfoAsync() {
  _loadUpgradeInfoAsync = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(buildingId, marker, buildingData) {
    var res, html, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          if (isOwnBuilding(buildingData)) {
            _context2.n = 1;
            break;
          }
          marker.setPopupContent(createSimplePopup(buildingData));
          return _context2.a(2);
        case 1:
          if (buildingId) {
            _context2.n = 2;
            break;
          }
          marker.setPopupContent(createSimplePopup(buildingData));
          return _context2.a(2);
        case 2:
          if (!popupContentLoaded.has(buildingId)) {
            _context2.n = 3;
            break;
          }
          return _context2.a(2);
        case 3:
          popupContentLoaded.add(buildingId);
          _context2.p = 4;
          _context2.n = 5;
          return fetch("/api/buildings/".concat(buildingId, "/popup-content"));
        case 5:
          res = _context2.v;
          if (res.ok) {
            _context2.n = 6;
            break;
          }
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_46__.debugWarn)('buildings', "Erreur API popup-content (building ".concat(buildingId, "):"), res.status);
          marker.setPopupContent(createSimplePopup(buildingData));
          return _context2.a(2);
        case 6:
          _context2.n = 7;
          return res.text();
        case 7:
          html = _context2.v;
          marker.setPopupContent(html);
          buildingMarkers.set(buildingId, {
            marker: marker,
            data: buildingData
          });
          _context2.n = 9;
          break;
        case 8:
          _context2.p = 8;
          _t2 = _context2.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_46__.debugError)('buildings', "Erreur lors du chargement du popup", _t2);
          marker.setPopupContent(createSimplePopup(buildingData));
        case 9:
          return _context2.a(2);
      }
    }, _callee2, null, [[4, 8]]);
  }));
  return _loadUpgradeInfoAsync.apply(this, arguments);
}
function loadBuildings() {
  fetch('/api/map-data').then(function (res) {
    return res.json();
  }).then(function (data) {
    loadBuildingsFromData(data);
  })["catch"](function (err) {
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_46__.debugError)('buildings', "Erreur chargement bâtiments", err);
  });
}

/**
 * Crée une icône (marker) pour un bâtiment avec son image spécifique.
 * @param {string} buildingCode - Le code du bâtiment (ex: "base", "iron_mine").
 * @param {string} faction - La faction du bâtiment (optionnel, fallback sur le joueur actuel).
 * @returns {L.Icon} L'icône Leaflet personnalisée.
 */
function createBuildingIcon(buildingCode) {
  var faction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var actualFaction = faction || (0,_base_js__WEBPACK_IMPORTED_MODULE_45__.getCurrentPlayerFaction)();
  var size = 70; // Taille par défaut des icônes

  return _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_42__["default"].icon({
    iconUrl: getBuildingImage(actualFaction, buildingCode),
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2]
  });
}

/**
 * Retourne dynamiquement le chemin de l'image avec fallback vers default.
 * @param {string} faction - Le code ou nom de la faction (ex: "Empire", "Cendres").
 * @param {string} building - Le code du bâtiment (ex: "base", "iron_mine").
 * @returns {string} Le chemin de l'icône.
 */
function getBuildingImage(faction, building) {
  // Normaliser le nom du building pour l'image (remplacer espaces et caractères spéciaux)
  var buildingSlug = building.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
  var factionSlug = (faction || 'default').toLowerCase();

  // Toujours utiliser l'icône de la faction en premier
  // Le serveur ou le navigateur gérera le fallback si l'icône n'existe pas
  // Si la faction est 'default', utiliser l'icône default directement
  if (factionSlug === 'default') {
    return "/assets/images/buildings/default/".concat(buildingSlug, ".png");
  }
  return "/assets/images/buildings/".concat(factionSlug, "/").concat(buildingSlug, ".png");
}

/**
 * Améliore un bâtiment
 */
window.upgradeBuilding = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(buildingId) {
    var response, data, entry, marker, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return (0,_api_js__WEBPACK_IMPORTED_MODULE_44__.upgradeBuilding)(buildingId);
        case 1:
          response = _context.v;
          _context.n = 2;
          return response.json();
        case 2:
          data = _context.v;
          if (response.ok) {
            // Invalider le cache pour forcer le rechargement
            popupContentLoaded["delete"](buildingId);

            // Mettre à jour le marqueur
            entry = buildingMarkers.get(buildingId);
            if (entry) {
              entry.data.level = data.newLevel;
              marker = entry.marker;
              marker.setPopupContent(createSimplePopup(entry.data));

              // Recharger les infos d'amélioration
              loadUpgradeInfoAsync(buildingId, marker, entry.data);
            }
            alert('Bâtiment amélioré avec succès !');
          } else {
            alert("Erreur: " + (data.error || "Impossible d'améliorer le bâtiment"));
          }
          _context.n = 4;
          break;
        case 3:
          _context.p = 3;
          _t = _context.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_46__.debugError)('buildings', "Erreur lors de l'amélioration", _t);
          alert("Erreur réseau lors de l'amélioration");
        case 4:
          return _context.a(2);
      }
    }, _callee, null, [[0, 3]]);
  }));
  return function (_x4) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Retourne les informations sur les coûts de construction d'un type de bâtiment
 */
function getBuildingTypeCosts(_x5) {
  return _getBuildingTypeCosts.apply(this, arguments);
}

/**
 * Vérifie si le joueur peut construire un bâtiment
 */
function _getBuildingTypeCosts() {
  _getBuildingTypeCosts = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(buildingTypeId) {
    var response, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return (0,_api_js__WEBPACK_IMPORTED_MODULE_44__.getBuildingCosts)(buildingTypeId);
        case 1:
          response = _context3.v;
          _context3.n = 2;
          return response.json();
        case 2:
          return _context3.a(2, _context3.v);
        case 3:
          _context3.p = 3;
          _t3 = _context3.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_46__.debugError)('buildings', "Erreur lors de la récupération des coûts", _t3);
          return _context3.a(2, null);
      }
    }, _callee3, null, [[0, 3]]);
  }));
  return _getBuildingTypeCosts.apply(this, arguments);
}
function canBuildBuilding(_x6) {
  return _canBuildBuilding.apply(this, arguments);
}
function _canBuildBuilding() {
  _canBuildBuilding = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(buildingTypeId) {
    var costs, response, data, resources, _i, _Object$entries, _Object$entries$_i, resource, amount;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return getBuildingTypeCosts(buildingTypeId);
        case 1:
          costs = _context4.v;
          if (costs) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, false);
        case 2:
          _context4.n = 3;
          return fetch('/api/player-resources');
        case 3:
          response = _context4.v;
          _context4.n = 4;
          return response.json();
        case 4:
          data = _context4.v;
          resources = {};
          data.resources.forEach(function (r) {
            resources[r.type] = r.quantity;
          });
          _i = 0, _Object$entries = Object.entries(costs.costs);
        case 5:
          if (!(_i < _Object$entries.length)) {
            _context4.n = 7;
            break;
          }
          _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), resource = _Object$entries$_i[0], amount = _Object$entries$_i[1];
          if (!((resources[resource] || 0) < amount)) {
            _context4.n = 6;
            break;
          }
          return _context4.a(2, false);
        case 6:
          _i++;
          _context4.n = 5;
          break;
        case 7:
          return _context4.a(2, true);
      }
    }, _callee4);
  }));
  return _canBuildBuilding.apply(this, arguments);
}
function refreshBuildingPopup(_x7) {
  return _refreshBuildingPopup.apply(this, arguments);
}
function _refreshBuildingPopup() {
  _refreshBuildingPopup = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(buildingId) {
    var entry;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          entry = buildingMarkers.get(buildingId);
          if (entry) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2);
        case 1:
          if (entry.marker.isPopupOpen()) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2);
        case 2:
          _context5.n = 3;
          return loadUpgradeInfoAsync(buildingId, entry.marker, entry.data);
        case 3:
          return _context5.a(2);
      }
    }, _callee5);
  }));
  return _refreshBuildingPopup.apply(this, arguments);
}

/***/ },

/***/ "./assets/scripts/Game/game-main.js"
/*!******************************************!*\
  !*** ./assets/scripts/Game/game-main.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableLeafletDebug: () => (/* binding */ enableLeafletDebug)
/* harmony export */ });
/* harmony import */ var _map_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/map.js */ "./assets/scripts/Game/map/map.js");
/* harmony import */ var _utils_gps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/gps.js */ "./assets/scripts/Game/utils/gps.js");
/* harmony import */ var _buildings_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildings/base.js */ "./assets/scripts/Game/buildings/base.js");
/* harmony import */ var _buildings_buildMode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buildings/buildMode.js */ "./assets/scripts/Game/buildings/buildMode.js");
/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications.js */ "./assets/scripts/Game/notifications.js");





document.addEventListener('DOMContentLoaded', function () {
  enableLeafletDebug(false);
  (0,_map_map_js__WEBPACK_IMPORTED_MODULE_0__.initMap)(46.53972, 2.43028);
  (0,_buildings_base_js__WEBPACK_IMPORTED_MODULE_2__.initBaseUI)();
  (0,_buildings_buildMode_js__WEBPACK_IMPORTED_MODULE_3__.initBuildMode)();
  (0,_map_map_js__WEBPACK_IMPORTED_MODULE_0__.loadWorld)();
  document.body.classList.add('page-game');
  if (window.currentUser) {
    (0,_notifications_js__WEBPACK_IMPORTED_MODULE_4__.initNotifications)();
  }
});
function enableLeafletDebug() {
  var debug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if (!debug) return;
  var originalMarker = L.marker;
  var originalCircle = L.circle;
  var originalPolyline = L.polyline;
  L.marker = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    console.log("🧨 MARKER CALL:", args);
    console.trace("MARKER STACK");
    return originalMarker.apply(this, args);
  };
  L.circle = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    console.log("🧨 CIRCLE CALL:", args);
    console.trace("CIRCLE STACK");
    return originalCircle.apply(this, args);
  };
  L.polyline = function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    console.log("🧨 POLYLINE CALL:", args);
    console.trace("POLYLINE STACK");
    return originalPolyline.apply(this, args);
  };
}

/***/ },

/***/ "./assets/scripts/Game/map/deposits/deposits.js"
/*!******************************************************!*\
  !*** ./assets/scripts/Game/map/deposits/deposits.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   depositLayers: () => (/* binding */ depositLayers),
/* harmony export */   initDepositLayers: () => (/* binding */ initDepositLayers),
/* harmony export */   loadDepositsForChunk: () => (/* binding */ loadDepositsForChunk),
/* harmony export */   renderDepositsFromData: () => (/* binding */ renderDepositsFromData)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/esnext.json.parse.js */ "./node_modules/core-js/modules/esnext.json.parse.js");
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../utils/debug.js */ "./assets/scripts/utils/debug.js");
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



















































var depositMarkers = new Map();

// Cache des popups déjà chargés
var popupContentLoaded = new Set();

// Cache des types de ressources
var buildingTypesCache = null;
var resourceTypesCache = null;

/**
 * Charge les types de ressources depuis l'API
 */
function loadBuildingTypes() {
  return _loadBuildingTypes.apply(this, arguments);
}
function _loadBuildingTypes() {
  _loadBuildingTypes = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var response, _t3;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          if (!buildingTypesCache) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, buildingTypesCache);
        case 1:
          _context2.p = 1;
          _context2.n = 2;
          return fetch("/api/building-types");
        case 2:
          response = _context2.v;
          _context2.n = 3;
          return response.json();
        case 3:
          buildingTypesCache = _context2.v;
          return _context2.a(2, buildingTypesCache);
        case 4:
          _context2.p = 4;
          _t3 = _context2.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_50__.debugError)('deposits', "Erreur lors du chargement des types de ressources", _t3);
          return _context2.a(2, []);
      }
    }, _callee2, null, [[1, 4]]);
  }));
  return _loadBuildingTypes.apply(this, arguments);
}
function loadResourceTypes() {
  return _loadResourceTypes.apply(this, arguments);
} // Mapping des couleurs par défaut
function _loadResourceTypes() {
  _loadResourceTypes = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var response, _t4;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          if (!resourceTypesCache) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2, resourceTypesCache);
        case 1:
          _context3.p = 1;
          _context3.n = 2;
          return fetch("/api/resource-types");
        case 2:
          response = _context3.v;
          _context3.n = 3;
          return response.json();
        case 3:
          resourceTypesCache = _context3.v;
          return _context3.a(2, resourceTypesCache);
        case 4:
          _context3.p = 4;
          _t4 = _context3.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_50__.debugError)('deposits', "Erreur lors du chargement des types de ressources", _t4);
          return _context3.a(2, []);
      }
    }, _callee3, null, [[1, 4]]);
  }));
  return _loadResourceTypes.apply(this, arguments);
}
var DEFAULT_COLORS = {
  'iron': '#7f8c8d',
  'oil': '#f1c40f',
  'coal': '#2c3e50',
  'rubber': '#27ae60',
  'bauxite': '#e67e22',
  'rare_earth': '#8e44ad'
};

/**
 * Retourne la couleur pour un type de ressource (synchrone - utilise le cache)
 */
function getResourceColor(type) {
  var _resourceTypesCache$t, _resourceTypesCache$t2;
  if (resourceTypesCache) return resourceTypesCache && ((_resourceTypesCache$t = resourceTypesCache[type]) === null || _resourceTypesCache$t === void 0 ? void 0 : _resourceTypesCache$t.color) || DEFAULT_COLORS[type] || '#ffffff';
  loadResourceTypes();
  return resourceTypesCache && ((_resourceTypesCache$t2 = resourceTypesCache[type]) === null || _resourceTypesCache$t2 === void 0 ? void 0 : _resourceTypesCache$t2.color) || DEFAULT_COLORS[type] || '#ffffff';
}

/**
 * Trouve le type de bâtiment (mine) pour une ressource donnée
 */
function findBuildingTypeForResource(_x) {
  return _findBuildingTypeForResource.apply(this, arguments);
}
function _findBuildingTypeForResource() {
  _findBuildingTypeForResource = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(resourceType) {
    var buildingTypes, buildingType;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return loadBuildingTypes();
        case 1:
          buildingTypes = _context4.v;
          // Chercher un bâtiment qui produit cette ressource (production_rate > 0)
          buildingType = buildingTypes.find(function (bt) {
            var _bt$resourceType;
            return (bt.resource_type === resourceType || ((_bt$resourceType = bt.resourceType) === null || _bt$resourceType === void 0 ? void 0 : _bt$resourceType.code) === resourceType) && bt.production_rate > 0;
          });
          return _context4.a(2, (buildingType === null || buildingType === void 0 ? void 0 : buildingType.id) || null);
      }
    }, _callee4);
  }));
  return _findBuildingTypeForResource.apply(this, arguments);
}
var depositLayers = {};

/**
 * Initialise les couches de dépôts dynamiquement
 */
function initDepositLayers(_x2, _x3) {
  return _initDepositLayers.apply(this, arguments);
}
function _initDepositLayers() {
  _initDepositLayers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(map, control) {
    var resourceTypes;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.n = 1;
          return loadResourceTypes();
        case 1:
          resourceTypes = _context5.v;
          // Créer une couche pour chaque type de ressource (seulement si color existe)
          resourceTypes.forEach(function (rt) {
            if (rt.color && rt.color.length > 0) {
              depositLayers[rt.code] = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_49__["default"].layerGroup();
              control.addOverlay(depositLayers[rt.code], "Ressource: ".concat(rt.label));
            }
          });
        case 2:
          return _context5.a(2);
      }
    }, _callee5);
  }));
  return _initDepositLayers.apply(this, arguments);
}
function loadDepositsForChunk(_x4, _x5) {
  return _loadDepositsForChunk.apply(this, arguments);
}

/**
 * Formate les coûts sous forme de chaîne lisible
 * @param {Array|Object} costs - Ex: [{code: "iron_ingot", label: "Fer", quantity: 25}] ou {iron_ingot: 25}
 * @returns {string} - Ex: "25 Fer, 15 Caoutchouc"
 */
function _loadDepositsForChunk() {
  _loadDepositsForChunk = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(chunkId, map) {
    var response, deposits, _t5;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return fetch("/api/deposits/".concat(chunkId));
        case 1:
          response = _context6.v;
          _context6.n = 2;
          return response.json();
        case 2:
          deposits = _context6.v;
          renderDepositsFromData(deposits, map);
          _context6.n = 4;
          break;
        case 3:
          _context6.p = 3;
          _t5 = _context6.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_50__.debugError)('deposits', "Erreur chargement dépôts:", _t5);
        case 4:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 3]]);
  }));
  return _loadDepositsForChunk.apply(this, arguments);
}
function formatCosts(costs) {
  if (!costs) return 'N/A';

  // Nouveau format: array d'objets avec code, label, quantity
  if (Array.isArray(costs)) {
    return costs.map(function (c) {
      return "".concat(c.quantity, " ").concat(c.label);
    }).join(', ');
  }

  // Ancien format: objet {code: quantity}
  if (_typeof(costs) === 'object') {
    return Object.entries(costs).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        resource = _ref2[0],
        amount = _ref2[1];
      return "".concat(amount, " ").concat(resource);
    }).join(', ');
  }
  return 'N/A';
}

/**
 * Vérifie si le joueur a assez de ressources pour un dépôt
 */
function checkCanClaim(_x6) {
  return _checkCanClaim.apply(this, arguments);
}
/**
 * Crée un popup simple (synchrone)
 */
function _checkCanClaim() {
  _checkCanClaim = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(deposit) {
    var costs, _loop, _ret, _i, _Object$entries;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          costs = deposit.costs;
          if (!(!costs || Object.keys(costs).length === 0)) {
            _context8.n = 1;
            break;
          }
          return _context8.a(2, false);
        case 1:
          _loop = /*#__PURE__*/_regenerator().m(function _loop() {
            var _playerResources$reso;
            var _Object$entries$_i, resource, amount, response, data, playerResources, has;
            return _regenerator().w(function (_context7) {
              while (1) switch (_context7.n) {
                case 0:
                  _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), resource = _Object$entries$_i[0], amount = _Object$entries$_i[1];
                  _context7.n = 1;
                  return fetch('/api/player-resources');
                case 1:
                  response = _context7.v;
                  _context7.n = 2;
                  return response.json();
                case 2:
                  data = _context7.v;
                  playerResources = {};
                  data.resources.forEach(function (r) {
                    playerResources[r.type] = r.quantity;
                  });
                  has = (_playerResources$reso = playerResources[resource]) !== null && _playerResources$reso !== void 0 ? _playerResources$reso : 0;
                  if (!(has < amount)) {
                    _context7.n = 3;
                    break;
                  }
                  return _context7.a(2, {
                    v: false
                  });
                case 3:
                  return _context7.a(2);
              }
            }, _loop);
          });
          _i = 0, _Object$entries = Object.entries(costs);
        case 2:
          if (!(_i < _Object$entries.length)) {
            _context8.n = 5;
            break;
          }
          return _context8.d(_regeneratorValues(_loop()), 3);
        case 3:
          _ret = _context8.v;
          if (!_ret) {
            _context8.n = 4;
            break;
          }
          return _context8.a(2, _ret.v);
        case 4:
          _i++;
          _context8.n = 2;
          break;
        case 5:
          return _context8.a(2, true);
      }
    }, _callee7);
  }));
  return _checkCanClaim.apply(this, arguments);
}
function createSimplePopup(deposit) {
  return "\n        <div class=\"deposit-popup\">\n            <h3>".concat(deposit.type || 'Dépôt', "</h3>\n        </div>\n    ");
}

/**
 * Charge les infos des dépôts en arrière-plan
 */
function loadDepositInfoAsync(_x7, _x8, _x9) {
  return _loadDepositInfoAsync.apply(this, arguments);
}
/**
 * Rendu des dépôts sur la carte
 */
function _loadDepositInfoAsync() {
  _loadDepositInfoAsync = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(depositsID, marker, depositData) {
    var res, html, _t6;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          if (!popupContentLoaded.has(depositsID)) {
            _context9.n = 1;
            break;
          }
          return _context9.a(2);
        case 1:
          popupContentLoaded.add(depositsID);
          _context9.p = 2;
          _context9.n = 3;
          return fetch("/api/deposit/".concat(depositsID, "/popup-content"));
        case 3:
          res = _context9.v;
          if (res.ok) {
            _context9.n = 4;
            break;
          }
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_50__.debugWarn)('deposits', "Erreur API popup-content (deposit ".concat(depositsID, "):"), res.status);
          marker.setPopupContent(createSimplePopup(depositData));
          return _context9.a(2);
        case 4:
          _context9.n = 5;
          return res.text();
        case 5:
          html = _context9.v;
          marker.setPopupContent(html);
          depositMarkers.set(depositsID, {
            marker: marker,
            data: depositData
          });
          _context9.n = 7;
          break;
        case 6:
          _context9.p = 6;
          _t6 = _context9.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_50__.debugError)('deposits', "Erreur lors du chargement du popup", _t6);
          marker.setPopupContent(createSimplePopup(depositData));
        case 7:
          return _context9.a(2);
      }
    }, _callee8, null, [[2, 6]]);
  }));
  return _loadDepositInfoAsync.apply(this, arguments);
}
function renderDepositsFromData(deposits, map) {
  deposits.forEach(function (deposit) {
    if (depositMarkers.has(deposit.id)) return;
    var type = deposit.resource_type;
    var layer = depositLayers[type];
    if (!layer) {
      (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_50__.debugWarn)('deposits', "Pas de layer pour le type: ".concat(type));
      return;
    }
    var color = getResourceColor(type);
    var marker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_49__["default"].circleMarker([deposit.latitude, deposit.longitude], {
      radius: 8,
      fillColor: color,
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    }).addTo(layer).bindPopup(createSimplePopup(deposit));

    // Charger le contenu de la popup uniquement quand elle est ouverte
    if (deposit.id) {
      marker.on('popupopen', function () {
        loadDepositInfoAsync(deposit.id, marker, deposit);
      });
    }
  });
}

/**
 * Permet d'exploiter un dépôt depuis la popup
 */
window.claimDeposit = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(id, resourceType) {
    var buildingTypeId, response, responseText, data, _t, _t2;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.n = 1;
          return findBuildingTypeForResource(resourceType);
        case 1:
          buildingTypeId = _context.v;
          if (buildingTypeId) {
            _context.n = 2;
            break;
          }
          return _context.a(2, alert("Impossible de trouver un b\xE2timent pour extraire le ".concat(resourceType)));
        case 2:
          _context.p = 2;
          _context.n = 3;
          return fetch('/api/build', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              lat: null,
              lng: null,
              type_id: buildingTypeId,
              deposit_id: id
            })
          });
        case 3:
          response = _context.v;
          _context.n = 4;
          return response.text();
        case 4:
          responseText = _context.v;
          _context.p = 5;
          data = JSON.parse(responseText);
          _context.n = 7;
          break;
        case 6:
          _context.p = 6;
          _t = _context.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_50__.debugError)('deposits', "Réponse non-JSON reçue:", responseText);
          throw new Error("Réponse invalide du serveur");
        case 7:
          if (response.ok) {
            (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_50__.debugLog)('deposits', 'Dépôt exploité avec succès ! Bâtiment créé.');
            location.reload();
          } else {
            (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_50__.debugError)('deposits', "Erreur: " + (data.error || "Impossible d'exploiter ce dépôt"));
          }
          _context.n = 9;
          break;
        case 8:
          _context.p = 8;
          _t2 = _context.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_50__.debugError)('deposits', "Erreur lors de l'exploitation", _t2);
          alert("Erreur réseau lors de l'exploitation: " + _t2.message);
        case 9:
          return _context.a(2);
      }
    }, _callee, null, [[5, 6], [2, 8]]);
  }));
  return function (_x0, _x1) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ },

/***/ "./assets/scripts/Game/map/map.js"
/*!****************************************!*\
  !*** ./assets/scripts/Game/map/map.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   flyTo: () => (/* binding */ flyTo),
/* harmony export */   getMap: () => (/* binding */ getMap),
/* harmony export */   initMap: () => (/* binding */ initMap),
/* harmony export */   isGridLayerActive: () => (/* binding */ isGridLayerActive),
/* harmony export */   loadWorld: () => (/* binding */ loadWorld)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Layers/gridLayer.js */ "./assets/scripts/Game/Layers/gridLayer.js");
/* harmony import */ var _roads_roads_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./roads/roads.js */ "./assets/scripts/Game/map/roads/roads.js");
/* harmony import */ var _roads_roadsState_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./roads/roadsState.js */ "./assets/scripts/Game/map/roads/roadsState.js");
/* harmony import */ var _buildings_base_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../buildings/base.js */ "./assets/scripts/Game/buildings/base.js");
/* harmony import */ var _buildings_building_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../buildings/building.js */ "./assets/scripts/Game/buildings/building.js");
/* harmony import */ var _deposits_deposits_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./deposits/deposits.js */ "./assets/scripts/Game/map/deposits/deposits.js");
/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png");
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../utils/debug.js */ "./assets/scripts/utils/debug.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }




























_LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_18__["default"].Marker.prototype.options.icon = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_18__["default"].icon({
  iconUrl: leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_25__,
  shadowUrl: leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_26__
});
var mapInstance = null;
var moveTimeout = null;
var isChunkMode = false;
function initMap(lat, lng) {
  mapInstance = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_18__["default"].map('map').setView([lat, lng], 7);
  _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_18__["default"].tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(mapInstance);

  // Événement personnalisé pour signaler que la carte est prête
  mapInstance.fire('mapReady');
  var layersControl = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_18__["default"].control.layers(null, {
    "Chunk Grid": _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_19__.gridLayer
  }).addTo(mapInstance);
  (0,_deposits_deposits_js__WEBPACK_IMPORTED_MODULE_24__.initDepositLayers)(mapInstance, layersControl);

  // =====================
  // CENTRAL CHUNK CONTROLLER
  // =====================

  mapInstance.on('moveend', function () {
    if (!isChunkMode) return;
    if (mapInstance.getZoom() < 14) return;
    clearTimeout(moveTimeout);
    moveTimeout = setTimeout(function () {
      (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_19__.initGridLayer)();
      (0,_roads_roads_js__WEBPACK_IMPORTED_MODULE_20__.loadVisibleRoadChunks)();
    }, 300);
  });
  mapInstance.on('overlayadd', function (e) {
    if (e.layer === _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_19__.gridLayer) {
      (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_27__.debugLog)("grid", "Grid ON");
      (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_19__.initGridLayer)();
      (0,_roads_roads_js__WEBPACK_IMPORTED_MODULE_20__.loadVisibleRoadChunks)();
    }
  });
  mapInstance.on('overlayremove', function (e) {
    if (e.layer === _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_19__.gridLayer) {
      (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_27__.debugLog)("grid", "Grid OFF");
    }
  });

  // =====================
  // EVENTS
  // =====================
  mapInstance.on('zoomend', function () {
    var zoom = mapInstance.getZoom();
    if (zoom >= 14) {
      enterChunkMode();
    } else {
      exitChunkMode();
    }
  });
}
function isGridLayerActive() {
  var _mapInstance;
  return (_mapInstance = mapInstance) === null || _mapInstance === void 0 ? void 0 : _mapInstance.hasLayer(_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_19__.gridLayer);
}
function getMap() {
  return mapInstance;
}
function flyTo(lat, lng) {
  var zoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 13;
  var map = getMap();
  map.flyTo([lat, lng], zoom, {
    animate: true,
    duration: 1.5
  });
}

// =====================
// WORLD LOADER (Concentrateur d'appels API)
// =====================
function loadWorld() {
  fetch('/api/world-state').then(function (res) {
    if (!res.ok) {
      throw new Error("HTTP ".concat(res.status, ": ").concat(res.statusText));
    }
    return res.json();
  }).then(function (data) {
    // Vérifier si la réponse est valide
    if (!data || _typeof(data) !== 'object') {
      throw new Error('Invalid response format');
    }

    // Charger les bases via base.js D'ABORD pour connaître la faction du joueur
    if (data.players) {
      var hasCentered = false;
      data.players.forEach(function (player) {
        console.log("Loading player:", player.pseudo, "Faction:", player.faction, "IsMe:", player.isMe);
        if (player.isMe) {
          (0,_buildings_base_js__WEBPACK_IMPORTED_MODULE_22__.setCurrentPlayerFaction)(player.faction);
          (0,_buildings_base_js__WEBPACK_IMPORTED_MODULE_22__.loadBaseFromServer)(player.lat, player.lng);
          console.log("Player faction set to:", player.faction, "Player base loaded at:", player.lat, player.lng);
          if (!hasCentered) {
            flyTo(player.lat, player.lng, 16);
            hasCentered = true;
          }
          return;
        }
        (0,_buildings_base_js__WEBPACK_IMPORTED_MODULE_22__.loadOtherBase)(player.lat, player.lng, player.pseudo, player.faction);
      });
    }

    // Définir l'ID du joueur actif
    if (data.currentPlayerId) {
      (0,_buildings_building_js__WEBPACK_IMPORTED_MODULE_23__.setCurrentPlayerId)(data.currentPlayerId);
    }

    // Charger les bâtiments après avoir défini la faction du joueur
    (0,_buildings_building_js__WEBPACK_IMPORTED_MODULE_23__.loadBuildingsFromData)(data.buildings);
  })["catch"](function (err) {
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_27__.debugError)('map', "Erreur load world", err);
    // Ne pas rediriger automatiquement, laissez le système de login gérer la redirection
  });
}
function enterChunkMode() {
  if (isChunkMode) return;
  isChunkMode = true;
  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_27__.debugLog)("chunks", "ENTER CHUNK MODE");
  (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_19__.initGridLayer)();
  (0,_roads_roads_js__WEBPACK_IMPORTED_MODULE_20__.loadVisibleRoadChunks)();
}
function exitChunkMode() {
  if (!isChunkMode) return;
  isChunkMode = false;
  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_27__.debugLog)("chunks", "EXIT CHUNK MODE");
  if (mapInstance.hasLayer(_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_19__.gridLayer)) {
    mapInstance.removeLayer(_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_19__.gridLayer);
  }
}

/***/ },

/***/ "./assets/scripts/Game/map/roads/invalidateChunk.js"
/*!**********************************************************!*\
  !*** ./assets/scripts/Game/map/roads/invalidateChunk.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invalidateChunk: () => (/* binding */ invalidateChunk)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _roadsState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roadsState.js */ "./assets/scripts/Game/map/roads/roadsState.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/debug.js */ "./assets/scripts/utils/debug.js");




function invalidateChunk(id) {
  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_3__.debugLog)("cache", "🧹 invalidate chunk:", id);
  delete _roadsState_js__WEBPACK_IMPORTED_MODULE_2__.roadsState.chunks[id];
  localStorage.removeItem("chunk_".concat(id));
}

/***/ },

/***/ "./assets/scripts/Game/map/roads/roadUtils.js"
/*!****************************************************!*\
  !*** ./assets/scripts/Game/map/roads/roadUtils.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debugRoads: () => (/* binding */ debugRoads),
/* harmony export */   distanceToSegment: () => (/* binding */ distanceToSegment),
/* harmony export */   findClosestPointOnRoad: () => (/* binding */ findClosestPointOnRoad),
/* harmony export */   findClosestSegment: () => (/* binding */ findClosestSegment),
/* harmony export */   projectPointOnSegment: () => (/* binding */ projectPointOnSegment)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../map.js */ "./assets/scripts/Game/map/map.js");









/**
 * Trouve le point le plus proche sur toutes les routes
 */
function findClosestPointOnRoad(latlng, roads) {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_7__.getMap)();
  var bestPoint = null;
  var bestDistance = Infinity;
  if (!Array.isArray(roads)) return {
    point: null,
    distance: Infinity
  };
  roads.forEach(function (road) {
    if (!Array.isArray(road.points)) return;
    if (road.points.length < 2) return;
    for (var i = 0; i < road.points.length - 1; i++) {
      var aRaw = road.points[i];
      var bRaw = road.points[i + 1];
      if (!aRaw || !bRaw) {
        console.warn("BROKEN ROAD SEGMENT:", road);
      }
      if (aRaw.length < 2 || bRaw.length < 2) continue;
      var a = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"].latLng(aRaw[0], aRaw[1]);
      var b = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"].latLng(bRaw[0], bRaw[1]);
      var projected = projectPointOnSegment(latlng, a, b);
      var dist = map.distance(latlng, projected);
      if (dist < bestDistance) {
        bestDistance = dist;
        bestPoint = projected;
      }
    }
  });
  return {
    point: bestPoint,
    distance: bestDistance
  };
}

/**
 * Trouve le segment le plus proche (pour highlight visuel)
 */
function findClosestSegment(latlng, roads) {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_7__.getMap)();
  var bestSegment = null;
  var bestDistance = Infinity;
  if (!Array.isArray(roads)) return null;
  roads.forEach(function (road) {
    if (!Array.isArray(road.points)) return;
    for (var i = 0; i < road.points.length - 1; i++) {
      var aRaw = road.points[i];
      var bRaw = road.points[i + 1];
      if (!aRaw || !bRaw) continue;
      if (aRaw.length < 2 || bRaw.length < 2) continue;
      var a = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"].latLng(aRaw[0], aRaw[1]);
      var b = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"].latLng(bRaw[0], bRaw[1]);
      var mid = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"].latLng((a.lat + b.lat) / 2, (a.lng + b.lng) / 2);
      var dist = map.distance(latlng, mid);
      if (dist < bestDistance) {
        bestDistance = dist;
        bestSegment = [a, b];
      }
    }
  });
  return bestSegment;
}

/**
 * Projection d'un point sur un segment (A-B)
 * math stable pour snap routes
 */
function projectPointOnSegment(p, a, b) {
  var A = [a.lat, a.lng];
  var B = [b.lat, b.lng];
  var P = [p.lat, p.lng];
  var AB = [B[0] - A[0], B[1] - A[1]];
  var AP = [P[0] - A[0], P[1] - A[1]];
  var ab2 = AB[0] * AB[0] + AB[1] * AB[1];
  if (ab2 === 0) return a;
  var t = (AP[0] * AB[0] + AP[1] * AB[1]) / ab2;
  t = Math.max(0, Math.min(1, t));
  return _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"].latLng(A[0] + AB[0] * t, A[1] + AB[1] * t);
}

/**
 * Distance point -> segment (utile validation future)
 */
function distanceToSegment(p, a, b) {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_7__.getMap)();
  var projected = projectPointOnSegment(p, a, b);
  return map.distance(p, projected);
}

/**
 * Check simple debug roads
 */
function debugRoads(roads) {
  console.log("ROADS DEBUG:", roads.length, roads);
}

/***/ },

/***/ "./assets/scripts/Game/map/roads/roads.js"
/*!************************************************!*\
  !*** ./assets/scripts/Game/map/roads/roads.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadVisibleRoadChunks: () => (/* binding */ loadVisibleRoadChunks),
/* harmony export */   refreshChunk: () => (/* binding */ refreshChunk)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/esnext.json.parse.js */ "./node_modules/core-js/modules/esnext.json.parse.js");
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../map.js */ "./assets/scripts/Game/map/map.js");
/* harmony import */ var _utils_chunk_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../utils/chunk.js */ "./assets/scripts/Game/utils/chunk.js");
/* harmony import */ var _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../Layers/gridLayer.js */ "./assets/scripts/Game/Layers/gridLayer.js");
/* harmony import */ var _invalidateChunk_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./invalidateChunk.js */ "./assets/scripts/Game/map/roads/invalidateChunk.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../utils/debug.js */ "./assets/scripts/utils/debug.js");
/* harmony import */ var _roadsState_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./roadsState.js */ "./assets/scripts/Game/map/roads/roadsState.js");
/* harmony import */ var _deposits_deposits_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../deposits/deposits.js */ "./assets/scripts/Game/map/deposits/deposits.js");
/* harmony import */ var _utils_cacheUtils_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../../utils/cacheUtils.js */ "./assets/scripts/utils/cacheUtils.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }






















































// ==========================
// LOAD CONTROL
// ==========================
var loadingQueue = new Set();
var MAX_CONCURRENT = 4;
var activeRequests = 0;

// ==========================
// CHUNK ID
// ==========================
function getChunkId(lat, lng) {
  var x = Math.floor(lat / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_46__.CHUNK_SIZE);
  var y = Math.floor(lng / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_46__.CHUNK_SIZE);
  return "".concat(x, "_").concat(y);
}

// ==========================
// MAIN LOAD VISIBLE
// ==========================
function loadVisibleRoadChunks() {
  return _loadVisibleRoadChunks.apply(this, arguments);
}

// ==========================
// REFRESH CHUNK COLORS
// ==========================
function _loadVisibleRoadChunks() {
  _loadVisibleRoadChunks = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var map, bounds, visibleChunks, chunksToLoad, finalChunksToLoad, _iterator2, _step2, _chunkId3, _cacheKey, cached, data, _i, _finalChunksToLoad, chunkId, _yield$Promise$all, _yield$Promise$all2, roadsResponse, buildingsResponse, depositsResponse, roadsData, buildingsData, depositsData, buildingsByChunk, _i2, _finalChunksToLoad2, _roadsData$_chunkId, _buildingsData$_chunk, _chunkId, chunkData, hasRoads, cacheKey, _iterator3, _step3, _chunkId2, _t, _t2;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          map = (0,_map_js__WEBPACK_IMPORTED_MODULE_45__.getMap)();
          if (!(!map || map.getZoom() < 14)) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          bounds = map.getBounds();
          visibleChunks = getVisibleChunks(bounds);
          chunksToLoad = visibleChunks.filter(function (chunkId) {
            return !_roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.loadedChunks.has(chunkId);
          }); // ==========================
          // VERIFICATION CACHE LOCAL
          // ==========================
          finalChunksToLoad = [];
          _iterator2 = _createForOfIteratorHelper(chunksToLoad);
          _context.p = 2;
          _iterator2.s();
        case 3:
          if ((_step2 = _iterator2.n()).done) {
            _context.n = 6;
            break;
          }
          _chunkId3 = _step2.value;
          _cacheKey = (0,_utils_cacheUtils_js__WEBPACK_IMPORTED_MODULE_52__.getCacheKey)(_chunkId3);
          cached = localStorage.getItem(_cacheKey);
          if (!cached) {
            _context.n = 4;
            break;
          }
          data = JSON.parse(cached); // Vérifier si le cache est vieux (ex: plus de 1h)
          if (!(Date.now() - data.ts < 3600000)) {
            _context.n = 4;
            break;
          }
          _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.chunks[_chunkId3] = {
            status: data.hasRoads ? 'loaded' : 'empty',
            roads: data.roads,
            buildings: data.buildings,
            deposits: data.deposits,
            hasRoads: data.hasRoads
          };
          _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.loadedChunks.add(_chunkId3);
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(_chunkId3, data.hasRoads ? 'blue' : '#444');
          (0,_deposits_deposits_js__WEBPACK_IMPORTED_MODULE_51__.renderDepositsFromData)(data.deposits || [], map);
          return _context.a(3, 5);
        case 4:
          finalChunksToLoad.push(_chunkId3);
        case 5:
          _context.n = 3;
          break;
        case 6:
          _context.n = 8;
          break;
        case 7:
          _context.p = 7;
          _t = _context.v;
          _iterator2.e(_t);
        case 8:
          _context.p = 8;
          _iterator2.f();
          return _context.f(8);
        case 9:
          // ==========================
          // ETAT LOADING
          // ==========================

          for (_i = 0, _finalChunksToLoad = finalChunksToLoad; _i < _finalChunksToLoad.length; _i++) {
            chunkId = _finalChunksToLoad[_i];
            _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.chunks[chunkId] = {
              status: 'loading',
              roads: [],
              buildings: [],
              deposits: []
            };
            (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, 'orange');
          }

          // rien à charger
          if (!(finalChunksToLoad.length === 0)) {
            _context.n = 10;
            break;
          }
          refreshChunkColors(visibleChunks);
          return _context.a(2);
        case 10:
          _context.p = 10;
          _context.n = 11;
          return Promise.all([fetch('/api/chunks/bulk', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chunks: finalChunksToLoad
            })
          }), fetch('/api/buildings/visible', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chunks: finalChunksToLoad
            })
          }), fetch('/api/deposits/bulk', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chunks: finalChunksToLoad
            })
          })]);
        case 11:
          _yield$Promise$all = _context.v;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
          roadsResponse = _yield$Promise$all2[0];
          buildingsResponse = _yield$Promise$all2[1];
          depositsResponse = _yield$Promise$all2[2];
          if (!(!roadsResponse.ok || !buildingsResponse.ok || !depositsResponse.ok)) {
            _context.n = 12;
            break;
          }
          throw new Error("API error");
        case 12:
          _context.n = 13;
          return roadsResponse.json();
        case 13:
          roadsData = _context.v;
          _context.n = 14;
          return buildingsResponse.json();
        case 14:
          buildingsData = _context.v;
          _context.n = 15;
          return depositsResponse.json();
        case 15:
          depositsData = _context.v;
          // Créer un index pour mapper les bâtiments par chunkId rapidement
          buildingsByChunk = {};
          buildingsData.forEach(function (b) {
            var cId = Math.floor(b.lat * 100) + '_' + Math.floor(b.lng * 100);
            if (!buildingsByChunk[cId]) buildingsByChunk[cId] = [];
            buildingsByChunk[cId].push(b);
          });

          // ==========================
          // TRAITEMENT CHUNKS
          // ==========================

          for (_i2 = 0, _finalChunksToLoad2 = finalChunksToLoad; _i2 < _finalChunksToLoad2.length; _i2++) {
            _chunkId = _finalChunksToLoad2[_i2];
            chunkData = {
              roads: ((_roadsData$_chunkId = roadsData[_chunkId]) === null || _roadsData$_chunkId === void 0 ? void 0 : _roadsData$_chunkId.roads) || [],
              buildings: ((_buildingsData$_chunk = buildingsData[_chunkId]) === null || _buildingsData$_chunk === void 0 ? void 0 : _buildingsData$_chunk.buildings) || [],
              deposits: depositsData[_chunkId] || []
            };
            hasRoads = chunkData.roads && chunkData.roads.length > 0;
            _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.chunks[_chunkId] = {
              status: hasRoads ? 'loaded' : 'empty',
              roads: chunkData.roads || [],
              buildings: chunkData.buildings || [],
              deposits: chunkData.deposits || [],
              hasRoads: hasRoads
            };
            _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.loadedChunks.add(_chunkId);

            // ==========================
            // CACHE
            // ==========================
            cacheKey = (0,_utils_cacheUtils_js__WEBPACK_IMPORTED_MODULE_52__.getCacheKey)(_chunkId);
            localStorage.setItem(cacheKey, JSON.stringify({
              roads: chunkData.roads || [],
              buildings: chunkData.buildings || [],
              deposits: chunkData.deposits || [],
              hasRoads: hasRoads,
              ts: Date.now()
            }));

            // ==========================
            // DRAW ROADS
            // ==========================

            // chunkData.roads.forEach(road => {
            //     drawRoad(road);
            // });

            // ==========================
            // DRAW BUILDINGS
            // ==========================
            // chunkData.buildings.forEach(building => {
            //     drawBuilding(building);
            // });

            // ==========================
            // COULEUR CHUNK
            // ==========================
            (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(_chunkId, hasRoads ? 'blue' : '#444');
            (0,_deposits_deposits_js__WEBPACK_IMPORTED_MODULE_51__.renderDepositsFromData)(chunkData.deposits, map);
            (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_49__.debugLog)("roads", "Chunk ".concat(_chunkId, " loaded (").concat(chunkData.roads.length, " roads, ").concat(chunkData.buildings.length, " buildings, ").concat(chunkData.deposits.length, " deposits)"));
          }
          _context.n = 17;
          break;
        case 16:
          _context.p = 16;
          _t2 = _context.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_49__.debugError)("roads", "Erreur chargement chunks bulk:", _t2);

          // ==========================
          // ETAT ERREUR
          // ==========================
          _iterator3 = _createForOfIteratorHelper(finalChunksToLoad);
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              _chunkId2 = _step3.value;
              _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.chunks[_chunkId2] = {
                status: 'error',
                roads: [],
                buildings: [],
                deposits: []
              };
              (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(_chunkId2, 'red');
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        case 17:
          // ==========================
          // REFRESH VISUEL FINAL
          // ==========================

          refreshChunkColors(visibleChunks);
        case 18:
          return _context.a(2);
      }
    }, _callee, null, [[10, 16], [2, 7, 8, 9]]);
  }));
  return _loadVisibleRoadChunks.apply(this, arguments);
}
function refreshChunkColors(visibleChunks) {
  var _iterator = _createForOfIteratorHelper(visibleChunks),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var chunkId = _step.value;
      var chunk = _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.chunks[chunkId];
      if (!chunk) {
        (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, 'orange');
        continue;
      }
      switch (chunk.status) {
        case 'loaded':
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, 'blue');
          break;
        case 'empty':
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, '#444');
          break;
        case 'loading':
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, 'orange');
          break;
        case 'error':
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, 'red');
          break;
        default:
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, 'yellow');
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

// ==========================
// REFRESH CHUNK
// ==========================
function refreshChunk(_x, _x2) {
  return _refreshChunk.apply(this, arguments);
}

// ==========================
// FETCH SINGLE CHUNK
// ==========================
function _refreshChunk() {
  _refreshChunk = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(lat, lng) {
    var chunkId;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          chunkId = getChunkId(lat, lng);
          (0,_invalidateChunk_js__WEBPACK_IMPORTED_MODULE_48__.invalidateChunk)(chunkId);
          _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.loadedChunks["delete"](chunkId);
          _context2.n = 1;
          return fetchSingleChunk(chunkId);
        case 1:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return _refreshChunk.apply(this, arguments);
}
function fetchSingleChunk(_x3) {
  return _fetchSingleChunk.apply(this, arguments);
}
function _fetchSingleChunk() {
  _fetchSingleChunk = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(chunkId) {
    var _roadsData$chunkId, _buildingsData$chunkI, _yield$Promise$all3, _yield$Promise$all4, roadsRes, buildingsRes, depositsRes, roadsData, buildingsData, depositsData, chunkDeposits, chunkData, hasRoads, cacheKey, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.chunks[chunkId] = {
            status: 'loading',
            roads: [],
            buildings: [],
            deposits: []
          };
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, 'orange');
          _context3.n = 1;
          return Promise.all([fetch('/api/chunks/bulk', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chunks: [chunkId]
            })
          }), fetch('/api/buildings/visible', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chunks: [chunkId]
            })
          }), fetch('/api/deposits/bulk', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chunks: [chunkId]
            })
          })]);
        case 1:
          _yield$Promise$all3 = _context3.v;
          _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 3);
          roadsRes = _yield$Promise$all4[0];
          buildingsRes = _yield$Promise$all4[1];
          depositsRes = _yield$Promise$all4[2];
          if (!(!roadsRes.ok || !buildingsRes.ok || !depositsRes.ok)) {
            _context3.n = 2;
            break;
          }
          throw new Error("API error");
        case 2:
          _context3.n = 3;
          return roadsRes.json();
        case 3:
          roadsData = _context3.v;
          _context3.n = 4;
          return buildingsRes.json();
        case 4:
          buildingsData = _context3.v;
          _context3.n = 5;
          return depositsRes.json();
        case 5:
          depositsData = _context3.v;
          chunkDeposits = depositsData[chunkId] || [];
          chunkData = {
            roads: ((_roadsData$chunkId = roadsData[chunkId]) === null || _roadsData$chunkId === void 0 ? void 0 : _roadsData$chunkId.roads) || [],
            buildings: ((_buildingsData$chunkI = buildingsData[chunkId]) === null || _buildingsData$chunkI === void 0 ? void 0 : _buildingsData$chunkI.buildings) || [],
            deposits: chunkDeposits
          };
          hasRoads = chunkData.roads.length > 0;
          _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.chunks[chunkId] = {
            status: hasRoads ? 'loaded' : 'empty',
            roads: chunkData.roads,
            buildings: chunkData.buildings,
            deposits: chunkData.deposits,
            hasRoads: hasRoads
          };
          cacheKey = (0,_utils_cacheUtils_js__WEBPACK_IMPORTED_MODULE_52__.getCacheKey)(chunkId);
          localStorage.setItem(cacheKey, JSON.stringify({
            roads: chunkData.roads,
            buildings: chunkData.buildings,
            deposits: chunkData.deposits,
            hasRoads: hasRoads,
            ts: Date.now()
          }));
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, hasRoads ? 'blue' : '#444');
          (0,_deposits_deposits_js__WEBPACK_IMPORTED_MODULE_51__.renderDepositsFromData)(chunkData.deposits, (0,_map_js__WEBPACK_IMPORTED_MODULE_45__.getMap)());
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_49__.debugLog)("roads", "[CHUNK REFRESH]", chunkId, chunkData.roads.length);
          _context3.n = 7;
          break;
        case 6:
          _context3.p = 6;
          _t3 = _context3.v;
          _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.chunks[chunkId] = {
            status: 'error',
            roads: [],
            buildings: [],
            deposits: []
          };
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, 'red');
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_49__.debugError)("roads", "[CHUNK REFRESH ERROR]", chunkId, _t3);
        case 7:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 6]]);
  }));
  return _fetchSingleChunk.apply(this, arguments);
}
function getVisibleChunks(bounds) {
  var minX = Math.floor(bounds.getSouth() / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_46__.CHUNK_SIZE);
  var maxX = Math.floor(bounds.getNorth() / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_46__.CHUNK_SIZE);
  var minY = Math.floor(bounds.getWest() / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_46__.CHUNK_SIZE);
  var maxY = Math.floor(bounds.getEast() / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_46__.CHUNK_SIZE);
  var chunkId = [];
  for (var x = minX; x <= maxX; x++) {
    for (var y = minY; y <= maxY; y++) {
      chunkId.push("".concat(x, "_").concat(y));
    }
  }
  return chunkId;
}

/***/ },

/***/ "./assets/scripts/Game/map/roads/roadsState.js"
/*!*****************************************************!*\
  !*** ./assets/scripts/Game/map/roads/roadsState.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllLoadedRoads: () => (/* binding */ getAllLoadedRoads),
/* harmony export */   markRoadCacheDirty: () => (/* binding */ markRoadCacheDirty),
/* harmony export */   roadsState: () => (/* binding */ roadsState)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.flat-map.js */ "./node_modules/core-js/modules/es.array.flat-map.js");
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat-map.js */ "./node_modules/core-js/modules/es.array.unscopables.flat-map.js");
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_esnext_iterator_flat_map_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/esnext.iterator.flat-map.js */ "./node_modules/core-js/modules/esnext.iterator.flat-map.js");
/* harmony import */ var core_js_modules_esnext_iterator_flat_map_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_flat_map_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);




















var roadsState = {
  chunks: {},
  loadedChunks: new Set(),
  roadsReady: false,
  drawnRoads: [],
  visibleChunks: new Set(),
  roadLayers: {},
  buildingLayers: {}
};
var cachedRoads = [];
var cacheDirty = true;
function markRoadCacheDirty() {
  cacheDirty = true;
}
function getAllLoadedRoads() {
  if (!(roadsState !== null && roadsState !== void 0 && roadsState.chunks)) return [];
  if (!cacheDirty) return cachedRoads;
  cachedRoads = Object.values(roadsState.chunks).filter(function (c) {
    return (c === null || c === void 0 ? void 0 : c.status) === 'loaded' && Array.isArray(c.roads);
  }).flatMap(function (c) {
    return c.roads;
  });
  cacheDirty = false;
  return cachedRoads;
}

/***/ },

/***/ "./assets/scripts/Game/notifications.js"
/*!**********************************************!*\
  !*** ./assets/scripts/Game/notifications.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initNotifications: () => (/* binding */ initNotifications),
/* harmony export */   showNotification: () => (/* binding */ showNotification)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);

function initNotifications() {
  // HTMX fait déjà le polling
}
function showNotification(message) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
  var notif = document.createElement('div');
  notif.className = "notif notif-".concat(type);
  notif.textContent = message;
  document.body.appendChild(notif);
  setTimeout(function () {
    notif.remove();
  }, 3000);
}

/***/ },

/***/ "./assets/scripts/Game/ui/drawOnMap.js"
/*!*********************************************!*\
  !*** ./assets/scripts/Game/ui/drawOnMap.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearAllBaseCircles: () => (/* binding */ clearAllBaseCircles),
/* harmony export */   clearAllRoadSegments: () => (/* binding */ clearAllRoadSegments),
/* harmony export */   drawBaseCircle: () => (/* binding */ drawBaseCircle),
/* harmony export */   drawRoadSegment: () => (/* binding */ drawRoadSegment),
/* harmony export */   removeBaseCircle: () => (/* binding */ removeBaseCircle),
/* harmony export */   removeRoadSegment: () => (/* binding */ removeRoadSegment),
/* harmony export */   setRoadSegmentColor: () => (/* binding */ setRoadSegmentColor),
/* harmony export */   updateBaseCircles: () => (/* binding */ updateBaseCircles),
/* harmony export */   updateRoadSegments: () => (/* binding */ updateRoadSegments)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _map_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../map/map.js */ "./assets/scripts/Game/map/map.js");
/* harmony import */ var _buildings_base_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../buildings/base.js */ "./assets/scripts/Game/buildings/base.js");













// =======================
// STATE
// =======================
var baseCircles = new Map(); // baseId -> circle layer
var roadSegments = new Map(); // roadId -> polyline layer

// =======================
// FACTION COLORS
// =======================
var FACTION_COLORS = {
  'default': '#27ae60',
  // vert par défaut
  'empire': '#e74c3c',
  // rouge
  'cendres': '#3498db',
  // bleu
  'nomades': '#f39c12' // orange
};
function getFactionColor(faction) {
  return FACTION_COLORS[faction === null || faction === void 0 ? void 0 : faction.toLowerCase()] || FACTION_COLORS['default'];
}

// =======================
// BASE CIRCLE
// =======================
function drawBaseCircle(baseId, lat, lng, faction) {
  var isPlayerBase = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_10__.getMap)();
  if (!map) return;
  var playerFaction = (0,_buildings_base_js__WEBPACK_IMPORTED_MODULE_11__.getCurrentPlayerFaction)();
  var color = isPlayerBase ? '#27ae60' // vert pour notre base
  : getFactionColor(faction);

  // Supprimer l'ancien cercle si existe
  if (baseCircles.has(baseId)) {
    map.removeLayer(baseCircles.get(baseId));
  }
  var circle = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_9__["default"].circle([lat, lng], {
    radius: 500,
    color: color,
    weight: 2,
    fillOpacity: 0
  }).addTo(map);
  baseCircles.set(baseId, circle);
  return circle;
}
function removeBaseCircle(baseId) {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_10__.getMap)();
  if (!map) return;
  if (baseCircles.has(baseId)) {
    map.removeLayer(baseCircles.get(baseId));
    baseCircles["delete"](baseId);
  }
}
function clearAllBaseCircles() {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_10__.getMap)();
  if (!map) return;
  baseCircles.forEach(function (circle) {
    return map.removeLayer(circle);
  });
  baseCircles.clear();
}

// =======================
// ROAD SEGMENTS
// =======================
function drawRoadSegment(roadId, coords, faction) {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_10__.getMap)();
  if (!map || !coords || coords.length < 2) return;
  var playerFaction = (0,_buildings_base_js__WEBPACK_IMPORTED_MODULE_11__.getCurrentPlayerFaction)();
  var color = faction === playerFaction ? '#27ae60' // vert pour nos routes
  : getFactionColor(faction);

  // Supprimer l'ancien segment si existe
  if (roadSegments.has(roadId)) {
    map.removeLayer(roadSegments.get(roadId));
  }
  var polyline = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_9__["default"].polyline(coords, {
    color: color,
    weight: 3,
    opacity: 0.6,
    dashArray: '8,8'
  }).addTo(map);
  roadSegments.set(roadId, polyline);
  return polyline;
}
function removeRoadSegment(roadId) {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_10__.getMap)();
  if (!map) return;
  if (roadSegments.has(roadId)) {
    map.removeLayer(roadSegments.get(roadId));
    roadSegments["delete"](roadId);
  }
}
function clearAllRoadSegments() {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_10__.getMap)();
  if (!map) return;
  roadSegments.forEach(function (polyline) {
    return map.removeLayer(polyline);
  });
  roadSegments.clear();
}

// =======================
// UPDATE FUNCTIONS
// =======================
function updateBaseCircles(bases) {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_10__.getMap)();
  if (!map) return;
  var playerFaction = (0,_buildings_base_js__WEBPACK_IMPORTED_MODULE_11__.getCurrentPlayerFaction)();
  bases.forEach(function (base) {
    var isPlayerBase = base.faction === playerFaction;
    drawBaseCircle(base.id, base.lat, base.lng, base.faction, isPlayerBase);
  });
}
function updateRoadSegments(roads) {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_10__.getMap)();
  if (!map) return;
  var playerFaction = (0,_buildings_base_js__WEBPACK_IMPORTED_MODULE_11__.getCurrentPlayerFaction)();
  roads.forEach(function (road) {
    var isPlayerRoad = road.faction === playerFaction;
    drawRoadSegment(road.id, road.coords, road.faction);
  });
}

// =======================
// UTILITY
// =======================
function setRoadSegmentColor(roadId, color) {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_10__.getMap)();
  if (!map) return;
  if (roadSegments.has(roadId)) {
    roadSegments.get(roadId).setStyle({
      color: color
    });
  }
}

/***/ },

/***/ "./assets/scripts/Game/utils/admin_clipboard.js"
/*!******************************************************!*\
  !*** ./assets/scripts/Game/utils/admin_clipboard.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAdminCoords: () => (/* binding */ getAdminCoords)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notifications.js */ "./assets/scripts/Game/notifications.js");




// =======================
// PATHFINDING DEBUG - CLICK TO GET COORDINATES
// =======================
function getAdminCoords(lat, lng) {
  if (lat === undefined || lng === undefined) return;
  var format = "".concat(lat.toFixed(6), ",").concat(lng.toFixed(6));
  navigator.clipboard.writeText(format);
  (0,_notifications_js__WEBPACK_IMPORTED_MODULE_2__.showNotification)("Format collable admin copié : " + format, 'success');
}

/***/ },

/***/ "./assets/scripts/Game/utils/chunk.js"
/*!********************************************!*\
  !*** ./assets/scripts/Game/utils/chunk.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHUNK_RADIUS: () => (/* binding */ CHUNK_RADIUS),
/* harmony export */   CHUNK_SIZE: () => (/* binding */ CHUNK_SIZE)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _map_map_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../map/map.js */ "./assets/scripts/Game/map/map.js");
/* harmony import */ var _map_roads_roads_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../map/roads/roads.js */ "./assets/scripts/Game/map/roads/roads.js");
/* harmony import */ var _map_roads_invalidateChunk_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../map/roads/invalidateChunk.js */ "./assets/scripts/Game/map/roads/invalidateChunk.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/debug.js */ "./assets/scripts/utils/debug.js");
/* harmony import */ var _snap_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./snap.js */ "./assets/scripts/Game/utils/snap.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }














function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





var CHUNK_SIZE = 0.01;
var CHUNK_RADIUS = 1;
document.getElementById('requestApiRoadsAndChunksBtn').addEventListener('click', function () {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_14__.getMap)();
  map.getContainer().style.cursor = 'crosshair';
  alert("Clique sur la carte pour faire une requete api pour ajouter un chunk de routes (0.01° x 0.01°).");
  map.once('click', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var _e$latlng, lat, lng, snapped, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _e$latlng = e.latlng, lat = _e$latlng.lat, lng = _e$latlng.lng;
            snapped = (0,_snap_js__WEBPACK_IMPORTED_MODULE_18__.snapToChunk)(lat, lng);
            (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_17__.debugLog)("network", "📡 adding roads chunk:", snapped.chunkId);
            _context.p = 1;
            _context.n = 2;
            return fetch('/api/add-roads-chunk', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                lat: snapped.lat,
                lng: snapped.lng
              })
            });
          case 2:
            (0,_map_roads_roads_js__WEBPACK_IMPORTED_MODULE_15__.refreshChunk)(snapped.lat, snapped.lng);
            (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_17__.debugLog)("chunks", "🔄 chunk refreshed:", snapped.chunkId);
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_17__.debugError)("network", "failed to add roads chunk", _t);
          case 4:
            map.getContainer().style.cursor = '';
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});

/***/ },

/***/ "./assets/scripts/Game/utils/gps.js"
/*!******************************************!*\
  !*** ./assets/scripts/Game/utils/gps.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initGPS: () => (/* binding */ initGPS)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/map.js */ "./assets/scripts/Game/map/map.js");


function initGPS(defaultLat, defaultLng) {
  if (navigator.geolocation) {
    var gpsFound = false;
    navigator.geolocation.watchPosition(function (position) {
      gpsFound = true;
      (0,_map_map_js__WEBPACK_IMPORTED_MODULE_1__.flyTo)(position.coords.latitude, position.coords.longitude);
    }, function () {}, {
      timeout: 5000
    });
    setTimeout(function () {
      if (!gpsFound) {
        (0,_map_map_js__WEBPACK_IMPORTED_MODULE_1__.flyTo)(defaultLat, defaultLng, 7);
      }
    }, 5500);
  }
}

/***/ },

/***/ "./assets/scripts/Game/utils/snap.js"
/*!*******************************************!*\
  !*** ./assets/scripts/Game/utils/snap.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   snapToChunk: () => (/* binding */ snapToChunk)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chunk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk.js */ "./assets/scripts/Game/utils/chunk.js");


function snapToChunk(lat, lng) {
  var x = Math.floor(lat / _chunk_js__WEBPACK_IMPORTED_MODULE_1__.CHUNK_SIZE);
  var y = Math.floor(lng / _chunk_js__WEBPACK_IMPORTED_MODULE_1__.CHUNK_SIZE);
  return {
    lat: x * _chunk_js__WEBPACK_IMPORTED_MODULE_1__.CHUNK_SIZE,
    lng: y * _chunk_js__WEBPACK_IMPORTED_MODULE_1__.CHUNK_SIZE,
    chunkId: "".concat(x, "_").concat(y)
  };
}

/***/ },

/***/ "./assets/scripts/LeafletWrapper.js"
/*!******************************************!*\
  !*** ./assets/scripts/LeafletWrapper.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");


delete (leaflet__WEBPACK_IMPORTED_MODULE_0___default().Icon).Default.prototype._getIconUrl;
leaflet__WEBPACK_IMPORTED_MODULE_0___default().Icon.Default.mergeOptions({
  iconRetinaUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ "./node_modules/leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png"),
  shadowUrl: __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png")
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((leaflet__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ },

/***/ "./assets/scripts/utils/cacheUtils.js"
/*!********************************************!*\
  !*** ./assets/scripts/utils/cacheUtils.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCacheKey: () => (/* binding */ getCacheKey)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);

var CACHE_VERSION = 'v1';
function getCacheKey(chunkId) {
  return "".concat(CACHE_VERSION, "_chunk_").concat(chunkId);
}

/***/ },

/***/ "./assets/scripts/utils/debug.js"
/*!***************************************!*\
  !*** ./assets/scripts/utils/debug.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEBUG: () => (/* binding */ DEBUG),
/* harmony export */   debugError: () => (/* binding */ debugError),
/* harmony export */   debugLog: () => (/* binding */ debugLog),
/* harmony export */   debugWarn: () => (/* binding */ debugWarn)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeMap.js */ "./assets/scripts/utils/typeMap.js");
var _window$APP_DEBUG;


var DEBUG = {
  enabled: (_window$APP_DEBUG = window.APP_DEBUG) !== null && _window$APP_DEBUG !== void 0 ? _window$APP_DEBUG : false,
  mercure: true,
  inventory: true,
  delivery: true,
  buildings: true,
  chunks: true,
  network: true,
  cache: true
};
function canLog(type) {
  if (!DEBUG.enabled) {
    return false;
  }
  if (!type) {
    return true;
  }
  var key = (_typeMap_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_MAP === null || _typeMap_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_MAP === void 0 ? void 0 : _typeMap_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_MAP[type]) || type;
  return DEBUG[key] !== false;
}
function debugLog(type) {
  var _console;
  if (!canLog(type)) {
    return;
  }
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  (_console = console).log.apply(_console, ["[".concat((_typeMap_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_MAP === null || _typeMap_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_MAP === void 0 ? void 0 : _typeMap_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_MAP[type]) || type, "]")].concat(args));
}
function debugWarn(type) {
  var _console2;
  if (!canLog(type)) {
    return;
  }
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  (_console2 = console).warn.apply(_console2, ["[".concat((_typeMap_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_MAP === null || _typeMap_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_MAP === void 0 ? void 0 : _typeMap_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_MAP[type]) || type, "]")].concat(args));
}
function debugError(type) {
  var _console3;
  if (!canLog(type)) {
    return;
  }
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }
  (_console3 = console).error.apply(_console3, ["[".concat((_typeMap_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_MAP === null || _typeMap_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_MAP === void 0 ? void 0 : _typeMap_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_MAP[type]) || type, "]")].concat(args));
}

/***/ },

/***/ "./assets/scripts/utils/typeMap.js"
/*!*****************************************!*\
  !*** ./assets/scripts/utils/typeMap.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TYPE_MAP: () => (/* binding */ TYPE_MAP)
/* harmony export */ });
var TYPE_MAP = {
  mercure: 'MERCURE',
  inventory: 'INVENTORY',
  delivery: 'DELIVERY',
  buildings: 'BUILDINGS',
  chunks: 'CHUNKS',
  network: 'NETWORK',
  cache: 'CACHE'
};

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_leaflet_dist_leaflet_css-node_modules_core-js_internals_add-to-unscopabl-9c1293","vendors-node_modules_leaflet_dist_leaflet-src_js-node_modules_leaflet_dist_images_marker-icon-992f8b"], () => (__webpack_exec__("./assets/scripts/Game/game-main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBUkEsaURBQVEsdUJBQVJBLGlEQUFRLENBQUd4VSxJQUFJLENBQUMsS0FBSUEsSUFBSSxRQUFBNU8sTUFBQSxDQUN6QnVTLElBQUksQ0FDWCxDQUFDO0FBQ0w7QUFFTyxTQUFTMU8sVUFBVUEsQ0FBQytLLElBQUksRUFBVztFQUFBLElBQUFzVixTQUFBO0VBQ3RDLElBQUksQ0FBQ0osTUFBTSxDQUFDbFYsSUFBSSxDQUFDLEVBQUU7SUFDZjtFQUNKO0VBQUMsU0FBQWtFLEtBQUEsR0FBQXhILFNBQUEsQ0FBQXZGLE1BQUEsRUFIK0J3TSxJQUFJLE9BQUFoRSxLQUFBLENBQUF1RSxLQUFBLE9BQUFBLEtBQUEsV0FBQUMsS0FBQSxNQUFBQSxLQUFBLEdBQUFELEtBQUEsRUFBQUMsS0FBQTtJQUFKUixJQUFJLENBQUFRLEtBQUEsUUFBQXpILFNBQUEsQ0FBQXlILEtBQUE7RUFBQTtFQUtwQyxDQUFBbVIsU0FBQSxHQUFBelIsT0FBTyxFQUFDakwsS0FBSyxDQUFBK0QsS0FBQSxDQUFBMlksU0FBQSxPQUFBbGtCLE1BQUEsQ0FDTCxDQUFBb2pCLGlEQUFRLGFBQVJBLGlEQUFRLHVCQUFSQSxpREFBUSxDQUFHeFUsSUFBSSxDQUFDLEtBQUlBLElBQUksUUFBQTVPLE1BQUEsQ0FDekJ1UyxJQUFJLENBQ1gsQ0FBQztBQUNMLEM7Ozs7Ozs7Ozs7Ozs7O0FDNURPLElBQU02USxRQUFRLEdBQUc7RUFDcEJLLE9BQU8sRUFBRSxTQUFTO0VBQ2xCQyxTQUFTLEVBQUUsV0FBVztFQUN0QkMsUUFBUSxFQUFFLFVBQVU7RUFDcEJyVixTQUFTLEVBQUUsV0FBVztFQUN0QjJMLE1BQU0sRUFBRSxRQUFRO0VBQ2hCMkosT0FBTyxFQUFFLFNBQVM7RUFDbEJDLEtBQUssRUFBRTtBQUNYLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvTGF5ZXJzL2dyaWRMYXllci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2J1aWxkaW5ncy9iYXNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvYnVpbGRpbmdzL2J1aWxkTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2J1aWxkaW5ncy9idWlsZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2dhbWUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9kZXBvc2l0cy9kZXBvc2l0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvcm9hZHMvaW52YWxpZGF0ZUNodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwL3JvYWRzL3JvYWRVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9yb2Fkcy9yb2Fkcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9yb2Fkcy9yb2Fkc1N0YXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3VpL2RyYXdPbk1hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3V0aWxzL2FkbWluX2NsaXBib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3V0aWxzL2NodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvdXRpbHMvZ3BzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvdXRpbHMvc25hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9MZWFmbGV0V3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy91dGlscy9jYWNoZVV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3V0aWxzL2RlYnVnLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3V0aWxzL3R5cGVNYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4uL3V0aWxzL2NodW5rLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwLCBpc0dyaWRMYXllckFjdGl2ZSB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyaWRMYXllciA9IEwubGF5ZXJHcm91cCgpO1xyXG5cclxuY29uc3QgdmlzaWJsZUNodW5rcyA9IG5ldyBNYXAoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R3JpZExheWVyKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBpZiAoIWlzR3JpZExheWVyQWN0aXZlKCkpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB6b29tID0gbWFwLmdldFpvb20oKTtcclxuICAgIGlmICh6b29tIDwgMTQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBib3VuZHMgPSBtYXAuZ2V0Qm91bmRzKCk7XHJcblxyXG4gICAgY29uc3QgbWluTGF0ID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0U291dGgoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWF4TGF0ID0gTWF0aC5jZWlsKGJvdW5kcy5nZXROb3J0aCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtaW5MbmcgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRXZXN0KCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1heExuZyA9IE1hdGguY2VpbChib3VuZHMuZ2V0RWFzdCgpIC8gQ0hVTktfU0laRSk7XHJcblxyXG4gICAgY29uc3QgbmV3VmlzaWJsZSA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gbWluTGF0OyBpIDwgbWF4TGF0OyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gbWluTG5nOyBqIDwgbWF4TG5nOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYCR7aX1fJHtqfWA7XHJcbiAgICAgICAgICAgIG5ld1Zpc2libGUuYWRkKGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlQ2h1bmtzLmhhcyhpZCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGF0ID0gaSAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgICAgIGNvbnN0IGxuZyA9IGogKiBDSFVOS19TSVpFO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IEwucmVjdGFuZ2xlKFtcclxuICAgICAgICAgICAgICAgIFtsYXQsIGxuZ10sXHJcbiAgICAgICAgICAgICAgICBbbGF0ICsgQ0hVTktfU0laRSwgbG5nICsgQ0hVTktfU0laRV1cclxuICAgICAgICAgICAgXSwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IDEsXHJcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogMC4xNVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlY3Qub24oJ21vdXNlb3ZlcicsICgpID0+IHJlY3Quc2V0U3R5bGUoeyBmaWxsT3BhY2l0eTogMC4zIH0pKTtcclxuICAgICAgICAgICAgcmVjdC5vbignbW91c2VvdXQnLCAoKSA9PiByZWN0LnNldFN0eWxlKHsgZmlsbE9wYWNpdHk6IDAuMTUgfSkpO1xyXG5cclxuICAgICAgICAgICAgZ3JpZExheWVyLmFkZExheWVyKHJlY3QpO1xyXG5cclxuICAgICAgICAgICAgdmlzaWJsZUNodW5rcy5zZXQoaWQsIHJlY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDwn6e5IHJlbW92ZSBjZXV4IGhvcnMgw6ljcmFuXHJcbiAgICBmb3IgKGNvbnN0IFtpZCwgcmVjdF0gb2YgdmlzaWJsZUNodW5rcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICBpZiAoIW5ld1Zpc2libGUuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICBncmlkTGF5ZXIucmVtb3ZlTGF5ZXIocmVjdCk7XHJcbiAgICAgICAgICAgIHZpc2libGVDaHVua3MuZGVsZXRlKGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVidWdMb2coXCJjaHVua3NcIiwgXCJDaHVua3MgdmlzaWJsZXM6XCIsIHZpc2libGVDaHVua3Muc2l6ZSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENIVU5LIENPTE9SXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDaHVua0NvbG9yKGlkLCBjb2xvcikge1xyXG4gICAgaWYgKCFpc0dyaWRMYXllckFjdGl2ZSgpKSByZXR1cm47XHJcbiAgICBcclxuICAgIGNvbnN0IHJlY3QgPSB2aXNpYmxlQ2h1bmtzLmdldChpZCk7XHJcbiAgICBpZiAoIXJlY3QpIHJldHVybjtcclxuXHJcbiAgICByZWN0LnNldFN0eWxlKHtcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBmaWxsT3BhY2l0eTogMC4yXHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBidWlsZFJlcXVlc3QobGF0LCBsbmcsIHR5cGVJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL2J1aWxkJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbGF0OiBsYXQsIGxuZzogbG5nLCB0eXBlX2lkOiB0eXBlSWQgfSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVpbGRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL21hcC1kYXRhJylcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWlsZGluZ0Nvc3RzKGJ1aWxkaW5nVHlwZUlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYC9hcGkvYnVpbGRpbmctdHlwZXMvJHtidWlsZGluZ1R5cGVJZH0vY29zdHNgKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZ3JhZGVCdWlsZGluZyhidWlsZGluZ0lkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYC9hcGkvYnVpbGRpbmcvJHtidWlsZGluZ0lkfS91cGdyYWRlYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVwZ3JhZGVJbmZvKGJ1aWxkaW5nSWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgL2FwaS9idWlsZGluZy8ke2J1aWxkaW5nSWR9L3VwZ3JhZGUtaW5mb2ApO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBmbHlUbywgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IHJvYWRzU3RhdGUsIGdldEFsbExvYWRlZFJvYWRzIH0gZnJvbSAnLi4vbWFwL3JvYWRzL3JvYWRzU3RhdGUuanMnO1xyXG5pbXBvcnQgeyBnZXRCdWlsZGluZ0ltYWdlIH0gZnJvbSAnLi9idWlsZGluZy5qcyc7XHJcbmltcG9ydCB7IENIVU5LX1NJWkUgfSBmcm9tICcuLi91dGlscy9jaHVuay5qcyc7XHJcbmltcG9ydCB7IHNhZmVMb2FkQ2h1bmssIGxvYWRWaXNpYmxlUm9hZENodW5rcyB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2Fkcy5qcyc7XHJcbmltcG9ydCB7IGZpbmRDbG9zZXN0UG9pbnRPblJvYWQsIGZpbmRDbG9zZXN0U2VnbWVudCB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2FkVXRpbHMuanMnO1xyXG5pbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vbm90aWZpY2F0aW9ucy5qcyc7XHJcbmltcG9ydCB7IGdldEFkbWluQ29vcmRzIH0gZnJvbSAnLi4vdXRpbHMvYWRtaW5fY2xpcGJvYXJkLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgZHJhd0Jhc2VDaXJjbGUsIHJlbW92ZUJhc2VDaXJjbGUgfSBmcm9tICcuLi91aS9kcmF3T25NYXAuanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g8J+noCBTVEFURVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5sZXQgYmFzZU1hcmtlciA9IG51bGw7XHJcbmxldCBiYXNlQ2lyY2xlID0gbnVsbDtcclxubGV0IGJhc2VQb3NpdGlvbiA9IG51bGw7XHJcbmxldCBiYXNlQ3JlYXRlZCA9IGZhbHNlO1xyXG5sZXQgcGxhY2luZ0Jhc2UgPSBmYWxzZTtcclxuXHJcbmxldCBwcmV2aWV3TWFya2VyID0gbnVsbDtcclxubGV0IHByZXZpZXdDaXJjbGUgPSBudWxsO1xyXG5sZXQgcHJldmlld1NuYXBMYXRMbmcgPSBudWxsO1xyXG5sZXQgcHJldmlld0xpbmUgPSBudWxsO1xyXG5sZXQgaGlnaGxpZ2h0ZWRTZWdtZW50ID0gbnVsbDtcclxuXHJcbmxldCBjdXJyZW50UGxheWVyRmFjdGlvbiA9ICdkZWZhdWx0JztcclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTRVQgUExBWUVSIEZBQ1RJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKGZhY3Rpb24pIHtcclxuICAgIGN1cnJlbnRQbGF5ZXJGYWN0aW9uID0gKGZhY3Rpb24gfHwgJ2RlZmF1bHQnKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVQgUExBWUVSIEZBQ1RJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXJGYWN0aW9uO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJTklUIFVJXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0QmFzZVVJKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGNvbnN0IGJhc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFzZUJ0bicpO1xyXG5cclxuICAgIGJhc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vZGUgPSBiYXNlQnRuLmRhdGFzZXQubW9kZTtcclxuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBDUkVBVEUgQkFTRSBNT0RFIFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgaWYgKG1vZGUgPT09ICdjcmVhdGUnKSB7XHJcbiAgICAgICAgICAgIGlmIChiYXNlQ3JlYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJCYXNlIGTDqWrDoCBjcsOpw6llICFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBsYWNpbmdCYXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICdjcm9zc2hhaXInO1xyXG5cclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbihcIkNsaXF1ZSBzdXIgbGEgY2FydGUgcG91ciBwbGFjZXIgdGEgYmFzZVwiLCAnaW5mbycpO1xyXG4gICAgICAgICAgICBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gUkVUVVJOIEJBU0UgTU9ERVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgaWYgKG1vZGUgPT09ICdyZXR1cm4nKSB7XHJcbiAgICAgICAgICAgIGlmICghYmFzZVBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkF1Y3VuZSBiYXNlICFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZseVRvKGJhc2VQb3NpdGlvblswXSwgYmFzZVBvc2l0aW9uWzFdLCAxNik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBDTElDSyBNQVBcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBtYXAub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIXBsYWNpbmdCYXNlIHx8IGJhc2VDcmVhdGVkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFwcmV2aWV3U25hcExhdExuZykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB7IGxhdCwgbG5nIH0gPSBwcmV2aWV3U25hcExhdExuZztcclxuXHJcbiAgICAgICAgaWYgKCFpc0Jhc2VQbGFjZW1lbnRWYWxpZChsYXQsIGxuZykpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCLinYwgVHJvcCBwcm9jaGUgZCd1bmUgYmFzZSAhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhbnVwUHJldmlldyhtYXApO1xyXG4gICAgICAgIGNyZWF0ZUJhc2UobGF0LCBsbmcpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gTU9VU0UgTU9WRSAocHJldmlldyBzbmFwIHJvYWQpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbWFwLm9uKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIXBsYWNpbmdCYXNlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJvYWRzID0gZ2V0QWxsTG9hZGVkUm9hZHMoKTtcclxuXHJcbiAgICAgICAgaWYgKCFyb2Fkcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZmluZENsb3Nlc3RQb2ludE9uUm9hZChlLmxhdGxuZywgcm9hZHMpO1xyXG4gICAgICAgIGlmICghcmVzdWx0LnBvaW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIHByZXZpZXdTbmFwTGF0TG5nID0gcmVzdWx0LnBvaW50O1xyXG5cclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gaXNCYXNlUGxhY2VtZW50VmFsaWQocmVzdWx0LnBvaW50LmxhdCwgcmVzdWx0LnBvaW50LmxuZyk7XHJcblxyXG4gICAgICAgIGNsZWFudXBQcmV2aWV3KG1hcCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gaXNWYWxpZCA/ICdncmVlbicgOiAncmVkJztcclxuXHJcbiAgICAgICAgcHJldmlld0NpcmNsZSA9IEwuY2lyY2xlKHJlc3VsdC5wb2ludCwge1xyXG4gICAgICAgICAgICByYWRpdXM6IDYwMCxcclxuICAgICAgICAgICAgY29sb3IsXHJcbiAgICAgICAgICAgIHdlaWdodDogMixcclxuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDBcclxuICAgICAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBwcmV2aWV3TWFya2VyID0gTC5tYXJrZXIocmVzdWx0LnBvaW50KS5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBwcmV2aWV3TGluZSA9IEwucG9seWxpbmUoW2UubGF0bG5nLCByZXN1bHQucG9pbnRdLCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnY3lhbicsXHJcbiAgICAgICAgICAgIHdlaWdodDogMixcclxuICAgICAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgICAgICBkYXNoQXJyYXk6ICc1LCA1J1xyXG4gICAgICAgIH0pLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlZ21lbnQgPSBmaW5kQ2xvc2VzdFNlZ21lbnQoZS5sYXRsbmcsIHJvYWRzKTtcclxuXHJcbiAgICAgICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWRTZWdtZW50ID0gTC5wb2x5bGluZShzZWdtZW50LCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3llbGxvdycsXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IDYsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjhcclxuICAgICAgICAgICAgfSkuYWRkVG8obWFwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gVVBEQVRFIFZJU1VBTCBCQVNFIEFORCBPVEhFUiBCQVNFXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbWFwLm9uKCd6b29tZW5kJywgKCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZUJhc2VEaXNwbGF5KCk7XHJcbiAgICAgICAgdXBkYXRlT3RoZXJCYXNlcygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBBVEhGSU5ESU5HIERFQlVHIEZPUiBBRE1JTiAtIENMSUNLIFRPIEdFVCBDT09SRElOQVRFU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlQWRtaW5Db29yZGluYXRlUGlja2VyKCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKFwiTW9kZSBBZG1pbiBhY3RpdsOpIDogY2xpcXVleiBzdXIgbGEgY2FydGVcIiwgJ2luZm8nKTtcclxuICAgICAgICBcclxuICAgIG1hcC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGdldEFkbWluQ29vcmRzKGUubGF0bG5nLmxhdCwgZS5sYXRsbmcubG5nKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG53aW5kb3cuZW5hYmxlQWRtaW5Db29yZGluYXRlUGlja2VyID0gZW5hYmxlQWRtaW5Db29yZGluYXRlUGlja2VyO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g8J+nuSBDTEVBTiBQUkVWSUVXXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGNsZWFudXBQcmV2aWV3KCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIHByZXZpZXdNYXJrZXIgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdNYXJrZXIpO1xyXG4gICAgcHJldmlld0NpcmNsZSAmJiBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0NpcmNsZSk7XHJcbiAgICBwcmV2aWV3TGluZSAmJiBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0xpbmUpO1xyXG4gICAgaGlnaGxpZ2h0ZWRTZWdtZW50ICYmIG1hcC5yZW1vdmVMYXllcihoaWdobGlnaHRlZFNlZ21lbnQpO1xyXG5cclxuICAgIHByZXZpZXdNYXJrZXIgPSBudWxsO1xyXG4gICAgcHJldmlld0NpcmNsZSA9IG51bGw7XHJcbiAgICBwcmV2aWV3TGluZSA9IG51bGw7XHJcbiAgICBoaWdobGlnaHRlZFNlZ21lbnQgPSBudWxsO1xyXG5cclxuICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnJztcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBpc0Jhc2VQbGFjZW1lbnRWYWxpZChsYXQsIGxuZykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIHJldHVybiBvdGhlckJhc2VzLmV2ZXJ5KGJhc2UgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBkaXN0ID0gbWFwLmRpc3RhbmNlKFxyXG4gICAgICAgICAgICBbbGF0LCBsbmddLFxyXG4gICAgICAgICAgICBbYmFzZS5sYXQsIGJhc2UubG5nXVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBkaXN0ID49IDExMDA7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ1JFQVRFIEJBU0VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gY3JlYXRlQmFzZShsYXQsIGxuZykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIHBsYWNpbmdCYXNlID0gZmFsc2U7XHJcbiAgICBiYXNlUG9zaXRpb24gPSBbbGF0LCBsbmddO1xyXG5cclxuICAgIGZseVRvKGxhdCwgbG5nKTtcclxuXHJcbiAgICBiYXNlQ2lyY2xlID0gZHJhd0Jhc2VDaXJjbGUoJ3BsYXllcl9iYXNlJywgbGF0LCBsbmcsIGN1cnJlbnRQbGF5ZXJGYWN0aW9uLCB0cnVlKTtcclxuXHJcbiAgICBjb25zdCBiYXNlVHlwZUlkID0gMTtcclxuICAgIGZldGNoKCcvYXBpL2J1aWxkJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbGF0LFxyXG4gICAgICAgICAgICBsbmcsXHJcbiAgICAgICAgICAgIHR5cGVfaWQ6IGJhc2VUeXBlSWRcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXMub2spIHJldHVybiByZXMuanNvbigpLnRoZW4oZXJyID0+IHsgdGhyb3cgbmV3IEVycm9yKGVyci5lcnJvciB8fCBcIkFQSSBlcnJvclwiKSB9KTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICBiYXNlQ3JlYXRlZCA9IHRydWU7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYmFzZXMnLCBcIkVycmV1ciBjcsOpYXRpb24gYmFzZVwiLCBlcnIpO1xyXG4gICAgICAgIHJlbW92ZUJhc2UoKTtcclxuICAgICAgICBhbGVydChcIkVycmV1ciBjcsOpYXRpb24gYmFzZSA6IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG4gICAgdXBkYXRlQmFzZURpc3BsYXkoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUkVNT1ZFIEJBU0VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gcmVtb3ZlQmFzZSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBiYXNlTWFya2VyICYmIG1hcC5yZW1vdmVMYXllcihiYXNlTWFya2VyKTtcclxuICAgIGJhc2VDaXJjbGUgJiYgbWFwLnJlbW92ZUxheWVyKGJhc2VDaXJjbGUpO1xyXG5cclxuICAgIGJhc2VNYXJrZXIgPSBudWxsO1xyXG4gICAgYmFzZUNpcmNsZSA9IG51bGw7XHJcbiAgICBiYXNlUG9zaXRpb24gPSBudWxsO1xyXG4gICAgYmFzZUNyZWF0ZWQgPSBmYWxzZTtcclxuICAgIHBsYWNpbmdCYXNlID0gZmFsc2U7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG59XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExPQUQgT1RIRVIgQkFTRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5sZXQgb3RoZXJCYXNlcyA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRPdGhlckJhc2UobGF0LCBsbmcsIHBzZXVkbywgZmFjdGlvbikge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShsbmcpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaXNQbGF5ZXJCYXNlID0gZmFjdGlvbiA9PT0gY3VycmVudFBsYXllckZhY3Rpb247XHJcblxyXG4gICAgLy8gVXRpbGlzZXIgZHJhd0Jhc2VDaXJjbGUgZGUgZHJhd09uTWFwLmpzXHJcbiAgICBjb25zdCBjaXJjbGUgPSBkcmF3QmFzZUNpcmNsZShgb3RoZXJfJHtsYXR9XyR7bG5nfWAsIGxhdCwgbG5nLCBmYWN0aW9uLCBpc1BsYXllckJhc2UpO1xyXG5cclxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbihtYXAuZ2V0Wm9vbSgpLCBmYWN0aW9uKTtcclxuXHJcbiAgICBsZXQgbWFya2VyID0gbnVsbDtcclxuXHJcbiAgICBpZiAoaWNvbikge1xyXG4gICAgICAgIG1hcmtlciA9IEwubWFya2VyKFtsYXQsIGxuZ10sIHsgaWNvbiB9KVxyXG4gICAgICAgICAgICAuYWRkVG8obWFwKVxyXG4gICAgICAgICAgICAuYmluZFBvcHVwKGDwn4+V77iPIEJhc2UgZGUgJHtwc2V1ZG99YCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3RoZXJCYXNlcy5wdXNoKHsgbGF0LCBsbmcsIHBzZXVkbywgbWFya2VyLCBjaXJjbGUsIGZhY3Rpb24gfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVQREFURSBPVEhFUiBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHVwZGF0ZU90aGVyQmFzZXMoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBjb25zdCB6b29tID0gbWFwLmdldFpvb20oKTtcclxuXHJcbiAgICBvdGhlckJhc2VzLmZvckVhY2goYmFzZSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbih6b29tLCBiYXNlLmZhY3Rpb24pO1xyXG5cclxuICAgICAgICBpZiAoIWljb24pIHtcclxuICAgICAgICAgICAgaWYgKGJhc2UubWFya2VyKSBtYXAucmVtb3ZlTGF5ZXIoYmFzZS5tYXJrZXIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWJhc2UubWFya2VyKSB7XHJcbiAgICAgICAgICAgIGJhc2UubWFya2VyID0gTC5tYXJrZXIoW2Jhc2UubGF0LCBiYXNlLmxuZ10sIHsgaWNvbiB9KVxyXG4gICAgICAgICAgICAgICAgLmFkZFRvKG1hcClcclxuICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAoYPCfj5XvuI8gQmFzZSBkZSAke2Jhc2UucHNldWRvfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hcC5oYXNMYXllcihiYXNlLm1hcmtlcikpIGJhc2UubWFya2VyLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgICAgIGJhc2UubWFya2VyLnNldEljb24oaWNvbik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTE9BRCBGUk9NIFNFUlZFUlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEJhc2VGcm9tU2VydmVyKGxhdCwgbG5nKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobGF0KSB8fCAhTnVtYmVyLmlzRmluaXRlKGxuZykpIHJldHVybjtcclxuXHJcbiAgICBiYXNlUG9zaXRpb24gPSBbbGF0LCBsbmddO1xyXG4gICAgYmFzZUNyZWF0ZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIFV0aWxpc2VyIGRyYXdCYXNlQ2lyY2xlIGRlIGRyYXdPbk1hcC5qcyAobm90cmUgYmFzZSA9IGlzUGxheWVyQmFzZSA9IHRydWUpXHJcbiAgICBiYXNlQ2lyY2xlID0gZHJhd0Jhc2VDaXJjbGUoJ3BsYXllcl9iYXNlJywgbGF0LCBsbmcsIGN1cnJlbnRQbGF5ZXJGYWN0aW9uLCB0cnVlKTtcclxuXHJcbiAgICB1cGRhdGVCYXNlRGlzcGxheSgpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVUERBVEUgQkFTRSBESVNQTEFZXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHVwZGF0ZUJhc2VEaXNwbGF5KCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghYmFzZVBvc2l0aW9uKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUJhc2VJY29uKG1hcC5nZXRab29tKCksIGN1cnJlbnRQbGF5ZXJGYWN0aW9uKTtcclxuXHJcbiAgICBpZiAoIWljb24pIHtcclxuICAgICAgICBpZiAoYmFzZU1hcmtlcikgbWFwLnJlbW92ZUxheWVyKGJhc2VNYXJrZXIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJhc2VNYXJrZXIpIHtcclxuICAgICAgICBiYXNlTWFya2VyID0gTC5tYXJrZXIoYmFzZVBvc2l0aW9uLCB7IGljb24gfSkuYWRkVG8obWFwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFtYXAuaGFzTGF5ZXIoYmFzZU1hcmtlcikpIGJhc2VNYXJrZXIuYWRkVG8obWFwKTtcclxuICAgICAgICBiYXNlTWFya2VyLnNldEljb24oaWNvbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENSRUFURSBCQVNFIElDT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gY3JlYXRlQmFzZUljb24oem9vbSwgZmFjdGlvbikge1xyXG5cclxuICAgIGlmICh6b29tIDwgMTMpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IHNpemUgPSBmYWN0aW9uICE9PSAnbm9tYWRlcycgPyAoem9vbSA+IDE1ID8gMTAwIDogNzApIDogKHpvb20gPiAxNSA/IDc1IDogNjApO1xyXG5cclxuICAgIC8vIFRvdWpvdXJzIHV0aWxpc2VyIGwnaWPDtG5lIGRlIGxhIGZhY3Rpb24gKGxlIGZhbGxiYWNrIEFwYWNoZSBnw6hyZSBsZXMgNDA0KVxyXG4gICAgLy8gU2kgbCdpY8O0bmUgbidleGlzdGUgcGFzLCBBcGFjaGUgcmVkaXJpZ2UgdmVycyBkZWZhdWx0IGF1dG9tYXRpcXVlbWVudFxyXG4gICAgY29uc3QgaWNvblVybCA9IGdldEJ1aWxkaW5nSW1hZ2UoZmFjdGlvbiwgJ2Jhc2UnKTtcclxuXHJcbiAgICByZXR1cm4gTC5pY29uKHtcclxuICAgICAgICBpY29uVXJsOiBpY29uVXJsLFxyXG4gICAgICAgIGljb25TaXplOiBbc2l6ZSwgc2l6ZV0sXHJcbiAgICAgICAgaWNvbkFuY2hvcjogW3NpemUgLyAyLCBzaXplIC8gMl0sXHJcbiAgICAgICAgcG9wdXBBbmNob3I6IFswLCAtc2l6ZSAvIDJdXHJcbiAgICB9KTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcbmltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xuaW1wb3J0IHsgZ2V0QnVpbGRpbmdDb3N0cywgYnVpbGRSZXF1ZXN0IH0gZnJvbSAnLi4vYXBpLmpzJztcbmltcG9ydCB7IGdldEJ1aWxkaW5nSW1hZ2UgfSBmcm9tICcuL2J1aWxkaW5nLmpzJztcbmltcG9ydCB7IHNob3dOb3RpZmljYXRpb24gfSBmcm9tICcuLi9ub3RpZmljYXRpb25zLmpzJztcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCVUlMRCBNT0RFIFNUQVRFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxubGV0IHNlbGVjdGVkQnVpbGRpbmdUeXBlID0gbnVsbDtcbmxldCBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xuXG4vKipcbiAqIEluaXRpYWxpc2UgbGUgbW9kZSBjb25zdHJ1Y3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRCdWlsZE1vZGUoKSB7XG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XG5cbiAgICAvLyBVdGlsaXNlciBsYSBkw6lsw6lnYXRpb24gZCfDqXbDqW5lbWVudHMgcG91ciBsZXMgYm91dG9ucyBkeW5hbWlxdWVzXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldC5jbG9zZXN0KCcuYnVpbGQtaXRlbScpO1xuICAgICAgICBpZiAoIWJ0bikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHR5cGVJZCA9IGJ0bi5kYXRhc2V0LnR5cGVJZDtcbiAgICAgICAgaWYgKCF0eXBlSWQpIHJldHVybjtcblxuICAgICAgICAvLyBTw6lsZWN0aW9ubmVyIGxlIHR5cGUgZGUgYsOidGltZW50XG4gICAgICAgIGF3YWl0IHNlbGVjdEJ1aWxkaW5nVHlwZSh0eXBlSWQsIGJ0bik7XG4gICAgfSk7XG5cbiAgICAvLyBDbGljayBzdXIgbGEgY2FydGUgcG91ciBjb25zdHJ1aXJlXG4gICAgbWFwLm9uKCdjbGljaycsIG9uTWFwQ2xpY2spO1xuXG4gICAgLy8gTW91c2UgbW92ZSBwb3VyIHByw6l2aXN1YWxpc2VyXG4gICAgbWFwLm9uKCdtb3VzZW1vdmUnLCBvbk1hcE1vdXNlTW92ZSk7XG59XG5cbi8qKlxuICogU8OpbGVjdGlvbm5lIHVuIHR5cGUgZGUgYsOidGltZW50IMOgIGNvbnN0cnVpcmVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gc2VsZWN0QnVpbGRpbmdUeXBlKHR5cGVJZCwgYnV0dG9uKSB7XG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XG5cbiAgICAvLyBEw6lzw6lsZWN0aW9ubmVyIHByw6ljw6lkZW1tZW50XG4gICAgY2xlYXJCdWlsZGluZ1NlbGVjdGlvbigpO1xuXG4gICAgLy8gR8OpcmVyIGxlIGNhcyBzcMOpY2lhbCBkZSBsYSBiYXNlIChib3V0b24gI2Jhc2VCdG4pXG4gICAgaWYgKGJ1dHRvbi5pZCA9PT0gJ2Jhc2VCdG4nICYmIHR5cGVJZCA9PSAxKSB7XG4gICAgICAgIC8vIExhIGJhc2UgZXN0IGfDqXLDqWUgcGFyIGJhc2UuanMsIG9uIG5lIGZhaXQgcmllbiBpY2lcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE1ldHRyZSBlbiDDqXZpZGVuY2UgbGUgYm91dG9uIHPDqWxlY3Rpb25uw6lcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAgIC8vIFLDqWN1cMOpcmVyIGxlcyBjb8O7dHNcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QnVpbGRpbmdDb3N0cyh0eXBlSWQpO1xuICAgICAgICBzZWxlY3RlZEJ1aWxkaW5nVHlwZSA9IHtcbiAgICAgICAgICAgIGlkOiB0eXBlSWQsXG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb3N0czogZGF0YS5jb3N0cyxcbiAgICAgICAgICAgIGJ1dHRvbjogYnV0dG9uXG4gICAgICAgIH07XG5cbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbihgU8OpbGVjdGlvbm7DqTogJHtkYXRhLm5hbWV9LiBDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgY29uc3RydWlyZS5gLCAnaW5mbycpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZXMgY2/Du3RzXCIsIGUpO1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGNvw7t0c1wiLCAnZXJyb3InKTtcbiAgICB9XG59XG5cbi8qKlxuICogTmV0dG9pZSBsYSBzw6lsZWN0aW9uIGFjdHVlbGxlXG4gKi9cbmZ1bmN0aW9uIGNsZWFyQnVpbGRpbmdTZWxlY3Rpb24oKSB7XG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XG5cbiAgICBpZiAocHJldmlld0J1aWxkaW5nTWFya2VyKSB7XG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3QnVpbGRpbmdNYXJrZXIpO1xuICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHNlbGVjdGVkQnVpbGRpbmdUeXBlID0gbnVsbDtcblxuICAgIC8vIFJldGlyZXIgbGEgY2xhc3NlIHNlbGVjdGVkIGRlIHRvdXMgbGVzIGJvdXRvbnNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnVpbGQtaXRlbScpLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogR2VzdGlvbiBkdSBjbGljayBzdXIgbGEgY2FydGVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gb25NYXBDbGljayhlKSB7XG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XG5cbiAgICBpZiAoIXNlbGVjdGVkQnVpbGRpbmdUeXBlKSByZXR1cm47XG4gICAgaWYgKCFwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHJldHVybjtcblxuICAgIGNvbnN0IGxhdCA9IGUubGF0bG5nLmxhdDtcbiAgICBjb25zdCBsbmcgPSBlLmxhdGxuZy5sbmc7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJ1aWxkUmVxdWVzdChsYXQsIGxuZywgc2VsZWN0ZWRCdWlsZGluZ1R5cGUuaWQpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgZGVidWdMb2coJ2J1aWxkaW5ncycsIGAke3NlbGVjdGVkQnVpbGRpbmdUeXBlLm5hbWV9IGNvbnN0cnVpdCBhdmVjIHN1Y2PDqHMgIWApO1xuICAgICAgICAgICAgLy8gTmV0dG95ZXJcbiAgICAgICAgICAgIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3QnVpbGRpbmdNYXJrZXIpO1xuICAgICAgICAgICAgcHJldmlld0J1aWxkaW5nTWFya2VyID0gbnVsbDtcbiAgICAgICAgICAgIGNsZWFyQnVpbGRpbmdTZWxlY3Rpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIGBFcnJldXI6ICR7ZGF0YS5lcnJvcn1gKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgbG9ycyBkZSBsYSBjb25zdHJ1Y3Rpb25cIiwgZSk7XG4gICAgICAgIHNob3dOb3RpZmljYXRpb24oXCJFcnJldXIgcsOpc2VhdSBsb3JzIGRlIGxhIGNvbnN0cnVjdGlvblwiLCAnZXJyb3InKTtcbiAgICB9XG59XG5cbi8qKlxuICogUHLDqXZpc3VhbGlzYXRpb24gZGUgbGEgcG9zaXRpb24gZGUgY29uc3RydWN0aW9uXG4gKi9cbmZ1bmN0aW9uIG9uTWFwTW91c2VNb3ZlKGUpIHtcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcblxuICAgIGlmICghc2VsZWN0ZWRCdWlsZGluZ1R5cGUpIHtcbiAgICAgICAgLy8gTmV0dG95ZXIgbGVzIG1hcmtlcnMgZGUgcHLDqXZpc3VhbGlzYXRpb25cbiAgICAgICAgaWYgKHByZXZpZXdCdWlsZGluZ01hcmtlcikge1xuICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdCdWlsZGluZ01hcmtlcik7XG4gICAgICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBam91dGVyIHVuIG1hcmtlciBkZSBwcsOpdmlzdWFsaXNhdGlvblxuICAgIGlmICghcHJldmlld0J1aWxkaW5nTWFya2VyKSB7XG4gICAgICAgIHByZXZpZXdCdWlsZGluZ01hcmtlciA9IEwubWFya2VyKFtlLmxhdGxuZy5sYXQsIGUubGF0bG5nLmxuZ10pLmFkZFRvKG1hcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJldmlld0J1aWxkaW5nTWFya2VyLnNldExhdExuZyhlLmxhdGxuZyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEFjdGl2ZSBsZSBtb2RlIGNvbnN0cnVjdGlvbiBwb3VyIHVuIHR5cGUgZGUgYsOidGltZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZUJ1aWxkTW9kZSh0eXBlSWQpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10eXBlLWlkPVwiJHt0eXBlSWR9XCJdYCk7XG4gICAgaWYgKGJ0bikge1xuICAgICAgICBidG4uY2xpY2soKTtcbiAgICB9XG59XG5cbi8qKlxuICogRMOpc2FjdGl2ZSBsZSBtb2RlIGNvbnN0cnVjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZUJ1aWxkTW9kZSgpIHtcbiAgICBjbGVhckJ1aWxkaW5nU2VsZWN0aW9uKCk7XG59XG5cbi8qKlxuICogVsOpcmlmaWUgc2kgbGUgbW9kZSBjb25zdHJ1Y3Rpb24gZXN0IGFjdGlmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0J1aWxkTW9kZUFjdGl2ZSgpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRCdWlsZGluZ1R5cGUgIT09IG51bGw7XG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XG5pbXBvcnQgeyBnZXRCdWlsZGluZ0Nvc3RzLCB1cGdyYWRlQnVpbGRpbmcsIGdldFVwZ3JhZGVJbmZvIH0gZnJvbSAnLi4vYXBpLmpzJztcbmltcG9ydCB7IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uIH0gZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XG5cbi8vIENhY2hlIGRlcyBpbmZvcm1hdGlvbnMgZGUgYsOidGltZW50c1xubGV0IGJ1aWxkaW5nTWFya2VycyA9IG5ldyBNYXAoKTtcblxuLy8gQ2FjaGUgZGVzIHBvcHVwcyBkw6lqw6AgY2hhcmfDqXNcbmxldCBwb3B1cENvbnRlbnRMb2FkZWQgPSBuZXcgU2V0KCk7XG5cbi8vIElEIGR1IGpvdWV1ciBhY3RpZiAoaW5pdGlhbGlzw6kgZGVwdWlzIGwnQVBJKVxubGV0IGN1cnJlbnRQbGF5ZXJJZCA9IG51bGw7XG5cbi8qKlxuICogRMOpZmluaXQgbCdJRCBkdSBqb3VldXIgYWN0aWZcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCAtIEwnSUQgZHUgam91ZXVyIGNvbm5lY3TDqVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFBsYXllcklkKGlkKSB7XG4gICAgY3VycmVudFBsYXllcklkID0gaWQ7XG59XG5cbi8qKlxuICogQ2hhcmdlIGxlcyBiw6J0aW1lbnRzIHN1ciBsYSBjYXJ0ZSBhdmVjIGxldXJzIHBvcHVwcyBpbnRlcmFjdGlmc1xuICogQHBhcmFtIHtBcnJheX0gYnVpbGRpbmdzIC0gTGlzdGUgZGVzIGLDonRpbWVudHMgw6AgYWZmaWNoZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCdWlsZGluZ3NGcm9tRGF0YShidWlsZGluZ3MpIHtcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcblxuICAgIGlmICghbWFwKSB7XG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiTWFwIG5vdCBpbml0aWFsaXplZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghYnVpbGRpbmdzIHx8ICFBcnJheS5pc0FycmF5KGJ1aWxkaW5ncykpIHtcbiAgICAgICAgZGVidWdXYXJuKCdidWlsZGluZ3MnLCBcImxvYWRCdWlsZGluZ3NGcm9tRGF0YTogaW52YWxpZCBidWlsZGluZ3MgZGF0YVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGJ1aWxkaW5ncy5mb3JFYWNoKGIgPT4ge1xuICAgICAgICAvLyBJZ25vcmVyIGxlcyBiYXNlcyAtIGVsbGVzIHNvbnQgZ8OpcsOpZXMgcGFyIGJhc2UuanNcbiAgICAgICAgaWYgKGIuY29kZSA9PT0gJ2Jhc2UnIHx8IGIudHlwZT8udG9Mb3dlckNhc2UoKSA9PT0gJ2Jhc2UnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShiLmxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShiLmxuZykpIHtcbiAgICAgICAgICAgIGRlYnVnV2FybignYnVpbGRpbmdzJywgXCLinYwgQnVpbGRpbmcgaWdub3LDqSAoY29vcmQgaW52YWxpZGUpXCIsIGIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXRpbGlzZXIgbGEgZmFjdGlvbiBkdSBiw6J0aW1lbnQgKG91IGZhbGxiYWNrIHN1ciBsYSBmYWN0aW9uIGR1IGpvdWV1cilcbiAgICAgICAgY29uc3QgYnVpbGRpbmdGYWN0aW9uID0gYi5mYWN0aW9uIHx8IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XG5cbiAgICAgICAgLy8gQ3LDqWVyIGwnaWPDtG5lIGF2ZWMgbCdpbWFnZSBkdSBiw6J0aW1lbnRcbiAgICAgICAgY29uc3QgaWNvbiA9IGNyZWF0ZUJ1aWxkaW5nSWNvbihiLmNvZGUsIGJ1aWxkaW5nRmFjdGlvbik7XG5cbiAgICAgICAgLy8gU3RvY2tlciBsZXMgZG9ubsOpZXMgZHUgYnVpbGRpbmcgcG91ciBhY2PDqHMgdWx0w6lyaWV1clxuICAgICAgICBjb25zdCBidWlsZGluZ0RhdGEgPSB7XG4gICAgICAgICAgICBpZDogYi5pZCxcbiAgICAgICAgICAgIHR5cGU6IGIudHlwZSxcbiAgICAgICAgICAgIGxldmVsOiBiLmxldmVsLFxuICAgICAgICAgICAgY29kZTogYi5jb2RlLFxuICAgICAgICAgICAgZmFjdGlvbjogYnVpbGRpbmdGYWN0aW9uLFxuICAgICAgICAgICAgb3duZXJJZDogYi5vd25lcklkLFxuICAgICAgICAgICAgcHJvZHVjdGlvbjogYi5wcm9kdWN0aW9uIHx8IG51bGwsXG4gICAgICAgICAgICByZXNvdXJjZV90eXBlOiBiLnJlc291cmNlX3R5cGUgfHwgbnVsbCxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBDcsOpZXIgbGUgbWFya2VyIGF2ZWMgcG9wdXAgdmlkZSAoY2hhcmfDqSBhdSBtb21lbnQgZGUgbCdvdXZlcnR1cmUpXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IEwubWFya2VyKFtiLmxhdCwgYi5sbmddLCB7IGljb24gfSlcbiAgICAgICAgICAgIC5hZGRUbyhtYXApXG4gICAgICAgICAgICAuYmluZFBvcHVwKGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nRGF0YSkpO1xuXG4gICAgICAgIGJ1aWxkaW5nTWFya2Vycy5zZXQoYi5pZCwgeyBtYXJrZXIsIGRhdGE6IGJ1aWxkaW5nRGF0YSB9KTtcblxuICAgICAgICAvLyDDiWNvdXRlciBsJ291dmVydHVyZSBkZSBsYSBwb3B1cCBwb3VyIGNoYXJnZXIgbGUgY29udGVudVxuICAgICAgICBtYXJrZXIub24oJ3BvcHVwb3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChiLmlkICYmIGlzT3duQnVpbGRpbmcoYnVpbGRpbmdEYXRhKSkge1xuICAgICAgICAgICAgICAgIGxvYWRVcGdyYWRlSW5mb0FzeW5jKGIuaWQsIG1hcmtlciwgYnVpbGRpbmdEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogVsOpcmlmaWUgc2kgbGUgYsOidGltZW50IGFwcGFydGllbnQgYXUgam91ZXVyIGFjdGlmXG4gKi9cbmZ1bmN0aW9uIGlzT3duQnVpbGRpbmcoYnVpbGRpbmcpIHtcbiAgICByZXR1cm4gYnVpbGRpbmcub3duZXJJZCA9PT0gY3VycmVudFBsYXllcklkO1xufVxuXG4vKipcbiAqIENyw6llIHVuIHBvcHVwIHNpbXBsZSAoc3luY2hyb25lKVxuICovXG5mdW5jdGlvbiBjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZykge1xuICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGluZy1wb3B1cFwiPlxuICAgICAgICAgICAgPGgzPiR7YnVpbGRpbmcudHlwZSB8fCAnQsOidGltZW50J308L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xufVxuXG4vKipcbiAqIENoYXJnZSBsZXMgaW5mb3MgZCdhbcOpbGlvcmF0aW9uIGVuIGFycmnDqHJlLXBsYW5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZFVwZ3JhZGVJbmZvQXN5bmMoYnVpbGRpbmdJZCwgbWFya2VyLCBidWlsZGluZ0RhdGEpIHtcbiAgICAvLyBOZSBwYXMgY2hhcmdlciBsZXMgaW5mb3MgZCdhbcOpbGlvcmF0aW9uIHBvdXIgbGVzIGLDonRpbWVudHMgZW5uZW1pc1xuICAgIGlmICghaXNPd25CdWlsZGluZyhidWlsZGluZ0RhdGEpKSB7XG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWJ1aWxkaW5nSWQpIHtcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZ0RhdGEpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIMOJdml0ZXIgZGUgcmVjaGFyZ2VyIHNpIGTDqWrDoCBjaGFyZ8OpXG4gICAgaWYgKHBvcHVwQ29udGVudExvYWRlZC5oYXMoYnVpbGRpbmdJZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwb3B1cENvbnRlbnRMb2FkZWQuYWRkKGJ1aWxkaW5nSWQpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgLy8gQ2hhcmdlciBkaXJlY3RlbWVudCBsZSBjb250ZW51IGR1IHBvcHVwXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2J1aWxkaW5ncy8ke2J1aWxkaW5nSWR9L3BvcHVwLWNvbnRlbnRgKTtcblxuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgZGVidWdXYXJuKCdidWlsZGluZ3MnLCBgRXJyZXVyIEFQSSBwb3B1cC1jb250ZW50IChidWlsZGluZyAke2J1aWxkaW5nSWR9KTpgLCByZXMuc3RhdHVzKTtcbiAgICAgICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChodG1sKTtcbiAgICAgICAgYnVpbGRpbmdNYXJrZXJzLnNldChidWlsZGluZ0lkLCB7IG1hcmtlciwgZGF0YTogYnVpbGRpbmdEYXRhIH0pO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZHUgcG9wdXBcIiwgZSk7XG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XG4gICAgfVxufVxuXG4vKipcbiAqIENoYXJnZSBsZXMgYsOidGltZW50cyBkZXB1aXMgbCdBUEkgKGZvbmN0aW9uIGRlIGNvbXBhdGliaWxpdMOpKVxuICogQGRlcHJlY2F0ZWQgVXRpbGlzZXIgbG9hZEJ1aWxkaW5nc0Zyb21EYXRhKGRhdGEpIMOgIGxhIHBsYWNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQnVpbGRpbmdzKCkge1xuICAgIGZldGNoKCcvYXBpL21hcC1kYXRhJylcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbG9hZEJ1aWxkaW5nc0Zyb21EYXRhKGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGNoYXJnZW1lbnQgYsOidGltZW50c1wiLCBlcnIpO1xuICAgICAgICB9KTtcbn1cblxuLyoqXG4gKiBDcsOpZSB1bmUgaWPDtG5lIChtYXJrZXIpIHBvdXIgdW4gYsOidGltZW50IGF2ZWMgc29uIGltYWdlIHNww6ljaWZpcXVlLlxuICogQHBhcmFtIHtzdHJpbmd9IGJ1aWxkaW5nQ29kZSAtIExlIGNvZGUgZHUgYsOidGltZW50IChleDogXCJiYXNlXCIsIFwiaXJvbl9taW5lXCIpLlxuICogQHBhcmFtIHtzdHJpbmd9IGZhY3Rpb24gLSBMYSBmYWN0aW9uIGR1IGLDonRpbWVudCAob3B0aW9ubmVsLCBmYWxsYmFjayBzdXIgbGUgam91ZXVyIGFjdHVlbCkuXG4gKiBAcmV0dXJucyB7TC5JY29ufSBMJ2ljw7RuZSBMZWFmbGV0IHBlcnNvbm5hbGlzw6llLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnVpbGRpbmdJY29uKGJ1aWxkaW5nQ29kZSwgZmFjdGlvbiA9IG51bGwpIHtcbiAgICBjb25zdCBhY3R1YWxGYWN0aW9uID0gZmFjdGlvbiB8fCBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xuICAgIGNvbnN0IHNpemUgPSA3MDsgLy8gVGFpbGxlIHBhciBkw6lmYXV0IGRlcyBpY8O0bmVzXG5cbiAgICByZXR1cm4gTC5pY29uKHtcbiAgICAgICAgaWNvblVybDogZ2V0QnVpbGRpbmdJbWFnZShhY3R1YWxGYWN0aW9uLCBidWlsZGluZ0NvZGUpLFxuICAgICAgICBpY29uU2l6ZTogW3NpemUsIHNpemVdLFxuICAgICAgICBpY29uQW5jaG9yOiBbc2l6ZSAvIDIsIHNpemUgLyAyXSxcbiAgICAgICAgcG9wdXBBbmNob3I6IFswLCAtc2l6ZSAvIDJdXG4gICAgfSk7XG59XG5cbi8qKlxuICogUmV0b3VybmUgZHluYW1pcXVlbWVudCBsZSBjaGVtaW4gZGUgbCdpbWFnZSBhdmVjIGZhbGxiYWNrIHZlcnMgZGVmYXVsdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmYWN0aW9uIC0gTGUgY29kZSBvdSBub20gZGUgbGEgZmFjdGlvbiAoZXg6IFwiRW1waXJlXCIsIFwiQ2VuZHJlc1wiKS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBidWlsZGluZyAtIExlIGNvZGUgZHUgYsOidGltZW50IChleDogXCJiYXNlXCIsIFwiaXJvbl9taW5lXCIpLlxuICogQHJldHVybnMge3N0cmluZ30gTGUgY2hlbWluIGRlIGwnaWPDtG5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVpbGRpbmdJbWFnZShmYWN0aW9uLCBidWlsZGluZykge1xuICAgIC8vIE5vcm1hbGlzZXIgbGUgbm9tIGR1IGJ1aWxkaW5nIHBvdXIgbCdpbWFnZSAocmVtcGxhY2VyIGVzcGFjZXMgZXQgY2FyYWN0w6hyZXMgc3DDqWNpYXV4KVxuICAgIGNvbnN0IGJ1aWxkaW5nU2x1ZyA9IGJ1aWxkaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnXycpLnJlcGxhY2UoL1teYS16MC05X10vZywgJycpO1xuICAgIGNvbnN0IGZhY3Rpb25TbHVnID0gKGZhY3Rpb24gfHwgJ2RlZmF1bHQnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gVG91am91cnMgdXRpbGlzZXIgbCdpY8O0bmUgZGUgbGEgZmFjdGlvbiBlbiBwcmVtaWVyXG4gICAgLy8gTGUgc2VydmV1ciBvdSBsZSBuYXZpZ2F0ZXVyIGfDqXJlcmEgbGUgZmFsbGJhY2sgc2kgbCdpY8O0bmUgbidleGlzdGUgcGFzXG4gICAgLy8gU2kgbGEgZmFjdGlvbiBlc3QgJ2RlZmF1bHQnLCB1dGlsaXNlciBsJ2ljw7RuZSBkZWZhdWx0IGRpcmVjdGVtZW50XG4gICAgaWYgKGZhY3Rpb25TbHVnID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgcmV0dXJuIGAvYXNzZXRzL2ltYWdlcy9idWlsZGluZ3MvZGVmYXVsdC8ke2J1aWxkaW5nU2x1Z30ucG5nYDtcbiAgICB9XG5cbiAgICByZXR1cm4gYC9hc3NldHMvaW1hZ2VzL2J1aWxkaW5ncy8ke2ZhY3Rpb25TbHVnfS8ke2J1aWxkaW5nU2x1Z30ucG5nYDtcbn1cblxuLyoqXG4gKiBBbcOpbGlvcmUgdW4gYsOidGltZW50XG4gKi9cbndpbmRvdy51cGdyYWRlQnVpbGRpbmcgPSBhc3luYyBmdW5jdGlvbihidWlsZGluZ0lkKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB1cGdyYWRlQnVpbGRpbmcoYnVpbGRpbmdJZCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAvLyBJbnZhbGlkZXIgbGUgY2FjaGUgcG91ciBmb3JjZXIgbGUgcmVjaGFyZ2VtZW50XG4gICAgICAgICAgICBwb3B1cENvbnRlbnRMb2FkZWQuZGVsZXRlKGJ1aWxkaW5nSWQpO1xuXG4gICAgICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsZSBtYXJxdWV1clxuICAgICAgICAgICAgY29uc3QgZW50cnkgPSBidWlsZGluZ01hcmtlcnMuZ2V0KGJ1aWxkaW5nSWQpO1xuICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgZW50cnkuZGF0YS5sZXZlbCA9IGRhdGEubmV3TGV2ZWw7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFya2VyID0gZW50cnkubWFya2VyO1xuICAgICAgICAgICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoZW50cnkuZGF0YSkpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVjaGFyZ2VyIGxlcyBpbmZvcyBkJ2Ftw6lsaW9yYXRpb25cbiAgICAgICAgICAgICAgICBsb2FkVXBncmFkZUluZm9Bc3luYyhidWlsZGluZ0lkLCBtYXJrZXIsIGVudHJ5LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxlcnQoJ0LDonRpbWVudCBhbcOpbGlvcsOpIGF2ZWMgc3VjY8OocyAhJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIkVycmV1cjogXCIgKyAoZGF0YS5lcnJvciB8fCBcIkltcG9zc2libGUgZCdhbcOpbGlvcmVyIGxlIGLDonRpbWVudFwiKSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGxvcnMgZGUgbCdhbcOpbGlvcmF0aW9uXCIsIGUpO1xuICAgICAgICBhbGVydChcIkVycmV1ciByw6lzZWF1IGxvcnMgZGUgbCdhbcOpbGlvcmF0aW9uXCIpO1xuICAgIH1cbn07XG5cbi8qKlxuICogUmV0b3VybmUgbGVzIGluZm9ybWF0aW9ucyBzdXIgbGVzIGNvw7t0cyBkZSBjb25zdHJ1Y3Rpb24gZCd1biB0eXBlIGRlIGLDonRpbWVudFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QnVpbGRpbmdUeXBlQ29zdHMoYnVpbGRpbmdUeXBlSWQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJ1aWxkaW5nQ29zdHMoYnVpbGRpbmdUeXBlSWQpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZXMgY2/Du3RzXCIsIGUpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbi8qKlxuICogVsOpcmlmaWUgc2kgbGUgam91ZXVyIHBldXQgY29uc3RydWlyZSB1biBiw6J0aW1lbnRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbkJ1aWxkQnVpbGRpbmcoYnVpbGRpbmdUeXBlSWQpIHtcbiAgICBjb25zdCBjb3N0cyA9IGF3YWl0IGdldEJ1aWxkaW5nVHlwZUNvc3RzKGJ1aWxkaW5nVHlwZUlkKTtcbiAgICBpZiAoIWNvc3RzKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3BsYXllci1yZXNvdXJjZXMnKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgcmVzb3VyY2VzID0ge307XG4gICAgZGF0YS5yZXNvdXJjZXMuZm9yRWFjaChyID0+IHtcbiAgICAgICAgcmVzb3VyY2VzW3IudHlwZV0gPSByLnF1YW50aXR5O1xuICAgIH0pO1xuXG4gICAgZm9yIChjb25zdCBbcmVzb3VyY2UsIGFtb3VudF0gb2YgT2JqZWN0LmVudHJpZXMoY29zdHMuY29zdHMpKSB7XG4gICAgICAgIGlmICgocmVzb3VyY2VzW3Jlc291cmNlXSB8fCAwKSA8IGFtb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoQnVpbGRpbmdQb3B1cChidWlsZGluZ0lkKSB7XG4gICAgY29uc3QgZW50cnkgPSBidWlsZGluZ01hcmtlcnMuZ2V0KGJ1aWxkaW5nSWQpO1xuXG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT3B0aW9ubmVsIDogdW5pcXVlbWVudCBzaSBsZSBwb3B1cCBlc3Qgb3V2ZXJ0XG4gICAgaWYgKCFlbnRyeS5tYXJrZXIuaXNQb3B1cE9wZW4oKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXdhaXQgbG9hZFVwZ3JhZGVJbmZvQXN5bmMoXG4gICAgICAgIGJ1aWxkaW5nSWQsXG4gICAgICAgIGVudHJ5Lm1hcmtlcixcbiAgICAgICAgZW50cnkuZGF0YVxuICAgICk7XG59IiwiaW1wb3J0IHsgaW5pdE1hcCwgbG9hZFdvcmxkIH0gZnJvbSAnLi9tYXAvbWFwLmpzJztcclxuaW1wb3J0IHsgaW5pdEdQUyB9IGZyb20gJy4vdXRpbHMvZ3BzLmpzJztcclxuaW1wb3J0IHsgaW5pdEJhc2VVSSB9IGZyb20gJy4vYnVpbGRpbmdzL2Jhc2UuanMnO1xyXG5pbXBvcnQgeyBpbml0QnVpbGRNb2RlIH0gZnJvbSAnLi9idWlsZGluZ3MvYnVpbGRNb2RlLmpzJztcclxuaW1wb3J0IHsgaW5pdE5vdGlmaWNhdGlvbnMgfSBmcm9tICcuL25vdGlmaWNhdGlvbnMuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHJcbiAgICBlbmFibGVMZWFmbGV0RGVidWcoZmFsc2UpO1xyXG5cclxuICAgIGluaXRNYXAoNDYuNTM5NzIsIDIuNDMwMjgpO1xyXG5cclxuICAgIGluaXRCYXNlVUkoKTtcclxuICAgIGluaXRCdWlsZE1vZGUoKTtcclxuICAgIGxvYWRXb3JsZCgpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncGFnZS1nYW1lJyk7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5jdXJyZW50VXNlcikge1xyXG4gICAgICAgIGluaXROb3RpZmljYXRpb25zKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUxlYWZsZXREZWJ1ZyhkZWJ1ZyA9IGZhbHNlKSB7XHJcblxyXG4gICAgaWYgKCFkZWJ1ZykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG9yaWdpbmFsTWFya2VyID0gTC5tYXJrZXI7XHJcbiAgICBjb25zdCBvcmlnaW5hbENpcmNsZSA9IEwuY2lyY2xlO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxQb2x5bGluZSA9IEwucG9seWxpbmU7XHJcblxyXG4gICAgTC5tYXJrZXIgPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+nqCBNQVJLRVIgQ0FMTDpcIiwgYXJncyk7XHJcbiAgICAgICAgY29uc29sZS50cmFjZShcIk1BUktFUiBTVEFDS1wiKTtcclxuICAgICAgICByZXR1cm4gb3JpZ2luYWxNYXJrZXIuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEwuY2lyY2xlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfp6ggQ0lSQ0xFIENBTEw6XCIsIGFyZ3MpO1xyXG4gICAgICAgIGNvbnNvbGUudHJhY2UoXCJDSVJDTEUgU1RBQ0tcIik7XHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQ2lyY2xlLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBMLnBvbHlsaW5lID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfp6ggUE9MWUxJTkUgQ0FMTDpcIiwgYXJncyk7XHJcbiAgICAgICAgY29uc29sZS50cmFjZShcIlBPTFlMSU5FIFNUQUNLXCIpO1xyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFBvbHlsaW5lLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWJ1Zy5qcyc7XG5cbmNvbnN0IGRlcG9zaXRNYXJrZXJzID0gbmV3IE1hcCgpO1xuXG4vLyBDYWNoZSBkZXMgcG9wdXBzIGTDqWrDoCBjaGFyZ8Opc1xuY29uc3QgcG9wdXBDb250ZW50TG9hZGVkID0gbmV3IFNldCgpO1xuXG4vLyBDYWNoZSBkZXMgdHlwZXMgZGUgcmVzc291cmNlc1xubGV0IGJ1aWxkaW5nVHlwZXNDYWNoZSA9IG51bGw7XG5sZXQgcmVzb3VyY2VUeXBlc0NhY2hlID0gbnVsbDtcblxuLyoqXG4gKiBDaGFyZ2UgbGVzIHR5cGVzIGRlIHJlc3NvdXJjZXMgZGVwdWlzIGwnQVBJXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRCdWlsZGluZ1R5cGVzKCkge1xuICAgIGlmIChidWlsZGluZ1R5cGVzQ2FjaGUpIHJldHVybiBidWlsZGluZ1R5cGVzQ2FjaGU7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2J1aWxkaW5nLXR5cGVzYCk7XG4gICAgICAgIGJ1aWxkaW5nVHlwZXNDYWNoZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGJ1aWxkaW5nVHlwZXNDYWNoZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGRlcyB0eXBlcyBkZSByZXNzb3VyY2VzXCIsIGUpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkUmVzb3VyY2VUeXBlcygpIHtcbiAgICBpZiAocmVzb3VyY2VUeXBlc0NhY2hlKSByZXR1cm4gcmVzb3VyY2VUeXBlc0NhY2hlO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9yZXNvdXJjZS10eXBlc2ApO1xuICAgICAgICByZXNvdXJjZVR5cGVzQ2FjaGUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiByZXNvdXJjZVR5cGVzQ2FjaGU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkZXMgdHlwZXMgZGUgcmVzc291cmNlc1wiLCBlKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuLy8gTWFwcGluZyBkZXMgY291bGV1cnMgcGFyIGTDqWZhdXRcbmNvbnN0IERFRkFVTFRfQ09MT1JTID0ge1xuICAgICdpcm9uJzogJyM3ZjhjOGQnLFxuICAgICdvaWwnOiAnI2YxYzQwZicsXG4gICAgJ2NvYWwnOiAnIzJjM2U1MCcsXG4gICAgJ3J1YmJlcic6ICcjMjdhZTYwJyxcbiAgICAnYmF1eGl0ZSc6ICcjZTY3ZTIyJyxcbiAgICAncmFyZV9lYXJ0aCc6ICcjOGU0NGFkJ1xufTtcblxuLyoqXG4gKiBSZXRvdXJuZSBsYSBjb3VsZXVyIHBvdXIgdW4gdHlwZSBkZSByZXNzb3VyY2UgKHN5bmNocm9uZSAtIHV0aWxpc2UgbGUgY2FjaGUpXG4gKi9cbmZ1bmN0aW9uIGdldFJlc291cmNlQ29sb3IodHlwZSkge1xuICAgIGlmIChyZXNvdXJjZVR5cGVzQ2FjaGUpIHJldHVybiAocmVzb3VyY2VUeXBlc0NhY2hlICYmIHJlc291cmNlVHlwZXNDYWNoZVt0eXBlXT8uY29sb3IpIHx8IERFRkFVTFRfQ09MT1JTW3R5cGVdIHx8ICcjZmZmZmZmJztcblxuICAgIGxvYWRSZXNvdXJjZVR5cGVzKCk7XG5cbiAgICByZXR1cm4gKHJlc291cmNlVHlwZXNDYWNoZSAmJiByZXNvdXJjZVR5cGVzQ2FjaGVbdHlwZV0/LmNvbG9yKSB8fCBERUZBVUxUX0NPTE9SU1t0eXBlXSB8fCAnI2ZmZmZmZic7XG59XG5cbi8qKlxuICogVHJvdXZlIGxlIHR5cGUgZGUgYsOidGltZW50IChtaW5lKSBwb3VyIHVuZSByZXNzb3VyY2UgZG9ubsOpZVxuICovXG5hc3luYyBmdW5jdGlvbiBmaW5kQnVpbGRpbmdUeXBlRm9yUmVzb3VyY2UocmVzb3VyY2VUeXBlKSB7XG4gICAgY29uc3QgYnVpbGRpbmdUeXBlcyA9IGF3YWl0IGxvYWRCdWlsZGluZ1R5cGVzKCk7XG5cbiAgICAvLyBDaGVyY2hlciB1biBiw6J0aW1lbnQgcXVpIHByb2R1aXQgY2V0dGUgcmVzc291cmNlIChwcm9kdWN0aW9uX3JhdGUgPiAwKVxuICAgIGNvbnN0IGJ1aWxkaW5nVHlwZSA9IGJ1aWxkaW5nVHlwZXMuZmluZChidCA9PiB7XG4gICAgICAgIHJldHVybiAoYnQucmVzb3VyY2VfdHlwZSA9PT0gcmVzb3VyY2VUeXBlIHx8IGJ0LnJlc291cmNlVHlwZT8uY29kZSA9PT0gcmVzb3VyY2VUeXBlKSAmJiBidC5wcm9kdWN0aW9uX3JhdGUgPiAwO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJ1aWxkaW5nVHlwZT8uaWQgfHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IGRlcG9zaXRMYXllcnMgPSB7fTtcblxuLyoqXG4gKiBJbml0aWFsaXNlIGxlcyBjb3VjaGVzIGRlIGTDqXDDtHRzIGR5bmFtaXF1ZW1lbnRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXREZXBvc2l0TGF5ZXJzKG1hcCwgY29udHJvbCkge1xuICAgIGNvbnN0IHJlc291cmNlVHlwZXMgPSBhd2FpdCBsb2FkUmVzb3VyY2VUeXBlcygpO1xuXG4gICAgLy8gQ3LDqWVyIHVuZSBjb3VjaGUgcG91ciBjaGFxdWUgdHlwZSBkZSByZXNzb3VyY2UgKHNldWxlbWVudCBzaSBjb2xvciBleGlzdGUpXG4gICAgcmVzb3VyY2VUeXBlcy5mb3JFYWNoKHJ0ID0+IHtcbiAgICAgICAgaWYgKHJ0LmNvbG9yICYmIHJ0LmNvbG9yLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRlcG9zaXRMYXllcnNbcnQuY29kZV0gPSBMLmxheWVyR3JvdXAoKTtcbiAgICAgICAgICAgIGNvbnRyb2wuYWRkT3ZlcmxheShkZXBvc2l0TGF5ZXJzW3J0LmNvZGVdLCBgUmVzc291cmNlOiAke3J0LmxhYmVsfWApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRGVwb3NpdHNGb3JDaHVuayhjaHVua0lkLCBtYXApIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2RlcG9zaXRzLyR7Y2h1bmtJZH1gKTtcbiAgICAgICAgY29uc3QgZGVwb3NpdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoZGVwb3NpdHMsIG1hcCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJFcnJldXIgY2hhcmdlbWVudCBkw6lww7R0czpcIiwgZXJyKTtcbiAgICB9XG59XG5cbi8qKlxuICogRm9ybWF0ZSBsZXMgY2/Du3RzIHNvdXMgZm9ybWUgZGUgY2hhw65uZSBsaXNpYmxlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29zdHMgLSBFeDogW3tjb2RlOiBcImlyb25faW5nb3RcIiwgbGFiZWw6IFwiRmVyXCIsIHF1YW50aXR5OiAyNX1dIG91IHtpcm9uX2luZ290OiAyNX1cbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gRXg6IFwiMjUgRmVyLCAxNSBDYW91dGNob3VjXCJcbiAqL1xuZnVuY3Rpb24gZm9ybWF0Q29zdHMoY29zdHMpIHtcbiAgICBpZiAoIWNvc3RzKSByZXR1cm4gJ04vQSc7XG5cbiAgICAvLyBOb3V2ZWF1IGZvcm1hdDogYXJyYXkgZCdvYmpldHMgYXZlYyBjb2RlLCBsYWJlbCwgcXVhbnRpdHlcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb3N0cykpIHtcbiAgICAgICAgcmV0dXJuIGNvc3RzLm1hcChjID0+IGAke2MucXVhbnRpdHl9ICR7Yy5sYWJlbH1gKS5qb2luKCcsICcpO1xuICAgIH1cblxuICAgIC8vIEFuY2llbiBmb3JtYXQ6IG9iamV0IHtjb2RlOiBxdWFudGl0eX1cbiAgICBpZiAodHlwZW9mIGNvc3RzID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY29zdHMpXG4gICAgICAgICAgICAubWFwKChbcmVzb3VyY2UsIGFtb3VudF0pID0+IGAke2Ftb3VudH0gJHtyZXNvdXJjZX1gKVxuICAgICAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuICdOL0EnO1xufVxuXG4vKipcbiAqIFbDqXJpZmllIHNpIGxlIGpvdWV1ciBhIGFzc2V6IGRlIHJlc3NvdXJjZXMgcG91ciB1biBkw6lww7R0XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrQ2FuQ2xhaW0oZGVwb3NpdCkge1xuICAgIGNvbnN0IGNvc3RzID0gZGVwb3NpdC5jb3N0cztcbiAgICBpZiAoIWNvc3RzIHx8IE9iamVjdC5rZXlzKGNvc3RzKS5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcblxuICAgIC8vIFBvdXIgY2hhcXVlIGNvw7t0LCB2w6lyaWZpZXIgc2kgbGUgam91ZXVyIGEgYXNzZXpcbiAgICBmb3IgKGNvbnN0IFtyZXNvdXJjZSwgYW1vdW50XSBvZiBPYmplY3QuZW50cmllcyhjb3N0cykpIHtcbiAgICAgICAgLy8gSWNpIG9uIHBvdXJyYWl0IGZhaXJlIHVuIGFwcGVsIEFQSSB2ZXJzIC9hcGkvcGxheWVyLXJlc291cmNlc1xuICAgICAgICAvLyBvdSB1dGlsaXNlciBsZXMgZG9ubsOpZXMgZMOpasOgIGNoYXJnw6llc1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3BsYXllci1yZXNvdXJjZXMnKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgcGxheWVyUmVzb3VyY2VzID0ge307XG4gICAgICAgIGRhdGEucmVzb3VyY2VzLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgICBwbGF5ZXJSZXNvdXJjZXNbci50eXBlXSA9IHIucXVhbnRpdHk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGhhcyA9IHBsYXllclJlc291cmNlc1tyZXNvdXJjZV0gPz8gMDtcbiAgICAgICAgaWYgKGhhcyA8IGFtb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIENyw6llIHVuIHBvcHVwIHNpbXBsZSAoc3luY2hyb25lKVxuICovXG5mdW5jdGlvbiBjcmVhdGVTaW1wbGVQb3B1cChkZXBvc2l0KSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImRlcG9zaXQtcG9wdXBcIj5cbiAgICAgICAgICAgIDxoMz4ke2RlcG9zaXQudHlwZSB8fCAnRMOpcMO0dCd9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbn1cblxuLyoqXG4gKiBDaGFyZ2UgbGVzIGluZm9zIGRlcyBkw6lww7R0cyBlbiBhcnJpw6hyZS1wbGFuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWREZXBvc2l0SW5mb0FzeW5jKGRlcG9zaXRzSUQsIG1hcmtlciwgZGVwb3NpdERhdGEpIHtcbiAgICAvLyDDiXZpdGVyIGRlIHJlY2hhcmdlciBzaSBkw6lqw6AgY2hhcmfDqVxuICAgIGlmIChwb3B1cENvbnRlbnRMb2FkZWQuaGFzKGRlcG9zaXRzSUQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcG9wdXBDb250ZW50TG9hZGVkLmFkZChkZXBvc2l0c0lEKTtcblxuICAgIHRyeSB7XG4gICAgICAgIC8vIENoYXJnZXIgZGlyZWN0ZW1lbnQgbGUgY29udGVudSBkdSBwb3B1cFxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9kZXBvc2l0LyR7ZGVwb3NpdHNJRH0vcG9wdXAtY29udGVudGApO1xuXG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBkZWJ1Z1dhcm4oJ2RlcG9zaXRzJywgYEVycmV1ciBBUEkgcG9wdXAtY29udGVudCAoZGVwb3NpdCAke2RlcG9zaXRzSUR9KTpgLCByZXMuc3RhdHVzKTtcbiAgICAgICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoZGVwb3NpdERhdGEpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGh0bWwpO1xuICAgICAgICBkZXBvc2l0TWFya2Vycy5zZXQoZGVwb3NpdHNJRCwgeyBtYXJrZXIsIGRhdGE6IGRlcG9zaXREYXRhIH0pO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSBwb3B1cFwiLCBlKTtcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChkZXBvc2l0RGF0YSkpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZW5kdSBkZXMgZMOpcMO0dHMgc3VyIGxhIGNhcnRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGRlcG9zaXRzLCBtYXApIHtcbiAgICBkZXBvc2l0cy5mb3JFYWNoKGRlcG9zaXQgPT4ge1xuICAgICAgICBpZiAoZGVwb3NpdE1hcmtlcnMuaGFzKGRlcG9zaXQuaWQpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGRlcG9zaXQucmVzb3VyY2VfdHlwZTtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBkZXBvc2l0TGF5ZXJzW3R5cGVdO1xuXG4gICAgICAgIGlmICghbGF5ZXIpIHtcbiAgICAgICAgICAgIGRlYnVnV2FybignZGVwb3NpdHMnLCBgUGFzIGRlIGxheWVyIHBvdXIgbGUgdHlwZTogJHt0eXBlfWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29sb3IgPSBnZXRSZXNvdXJjZUNvbG9yKHR5cGUpO1xuXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IEwuY2lyY2xlTWFya2VyKFtkZXBvc2l0LmxhdGl0dWRlLCBkZXBvc2l0LmxvbmdpdHVkZV0sIHtcbiAgICAgICAgICAgIHJhZGl1czogOCxcbiAgICAgICAgICAgIGZpbGxDb2xvcjogY29sb3IsXG4gICAgICAgICAgICBjb2xvcjogXCIjMDAwXCIsXG4gICAgICAgICAgICB3ZWlnaHQ6IDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuOFxuICAgICAgICB9KVxuICAgICAgICAuYWRkVG8obGF5ZXIpXG4gICAgICAgIC5iaW5kUG9wdXAoY3JlYXRlU2ltcGxlUG9wdXAoZGVwb3NpdCkpO1xuXG4gICAgICAgIC8vIENoYXJnZXIgbGUgY29udGVudSBkZSBsYSBwb3B1cCB1bmlxdWVtZW50IHF1YW5kIGVsbGUgZXN0IG91dmVydGVcbiAgICAgICAgaWYgKGRlcG9zaXQuaWQpIHtcbiAgICAgICAgICAgIG1hcmtlci5vbigncG9wdXBvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWREZXBvc2l0SW5mb0FzeW5jKGRlcG9zaXQuaWQsIG1hcmtlciwgZGVwb3NpdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIFBlcm1ldCBkJ2V4cGxvaXRlciB1biBkw6lww7R0IGRlcHVpcyBsYSBwb3B1cFxuICovXG53aW5kb3cuY2xhaW1EZXBvc2l0ID0gYXN5bmMgZnVuY3Rpb24oaWQsIHJlc291cmNlVHlwZSkge1xuICAgIC8vIFRyb3V2ZXIgbGUgdHlwZSBkZSBiw6J0aW1lbnQgYXBwcm9wcmnDqVxuICAgIGNvbnN0IGJ1aWxkaW5nVHlwZUlkID0gYXdhaXQgZmluZEJ1aWxkaW5nVHlwZUZvclJlc291cmNlKHJlc291cmNlVHlwZSk7XG5cbiAgICBpZiAoIWJ1aWxkaW5nVHlwZUlkKSB7XG4gICAgICAgIHJldHVybiBhbGVydChgSW1wb3NzaWJsZSBkZSB0cm91dmVyIHVuIGLDonRpbWVudCBwb3VyIGV4dHJhaXJlIGxlICR7cmVzb3VyY2VUeXBlfWApO1xuICAgIH1cblxuICAgIC8vIENvbnN0cnVpcmUgZGlyZWN0ZW1lbnQgbGUgYsOidGltZW50IHN1ciBsZXMgY29vcmRvbm7DqWVzIGR1IGTDqXDDtHRcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2J1aWxkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBsYXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbG5nOiBudWxsLFxuICAgICAgICAgICAgICAgIHR5cGVfaWQ6IGJ1aWxkaW5nVHlwZUlkLFxuICAgICAgICAgICAgICAgIGRlcG9zaXRfaWQ6IGlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXNwb25zZVRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfSBjYXRjaCAocGFyc2VFcnJvcikge1xuICAgICAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIlLDqXBvbnNlIG5vbi1KU09OIHJlw6d1ZTpcIiwgcmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlLDqXBvbnNlIGludmFsaWRlIGR1IHNlcnZldXJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGRlYnVnTG9nKCdkZXBvc2l0cycsICdEw6lww7R0IGV4cGxvaXTDqSBhdmVjIHN1Y2PDqHMgISBCw6J0aW1lbnQgY3LDqcOpLicpO1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiRXJyZXVyOiBcIiArIChkYXRhLmVycm9yIHx8IFwiSW1wb3NzaWJsZSBkJ2V4cGxvaXRlciBjZSBkw6lww7R0XCIpKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1ciBsb3JzIGRlIGwnZXhwbG9pdGF0aW9uXCIsIGUpO1xuICAgICAgICBhbGVydChcIkVycmV1ciByw6lzZWF1IGxvcnMgZGUgbCdleHBsb2l0YXRpb246IFwiICsgZS5tZXNzYWdlKTtcbiAgICB9XG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xuXG5pbXBvcnQgeyBncmlkTGF5ZXIsIGluaXRHcmlkTGF5ZXIgfSBmcm9tICcuLi9MYXllcnMvZ3JpZExheWVyLmpzJztcbmltcG9ydCB7IGxvYWRWaXNpYmxlUm9hZENodW5rcyB9IGZyb20gJy4vcm9hZHMvcm9hZHMuanMnO1xuaW1wb3J0IHsgcm9hZHNTdGF0ZSB9IGZyb20gJy4vcm9hZHMvcm9hZHNTdGF0ZS5qcyc7XG5cbmltcG9ydCB7IGxvYWRCYXNlRnJvbVNlcnZlciwgbG9hZE90aGVyQmFzZSwgc2V0Q3VycmVudFBsYXllckZhY3Rpb24gfSBmcm9tICcuLi9idWlsZGluZ3MvYmFzZS5qcyc7XG5pbXBvcnQgeyBsb2FkQnVpbGRpbmdzRnJvbURhdGEsIHNldEN1cnJlbnRQbGF5ZXJJZCB9IGZyb20gJy4uL2J1aWxkaW5ncy9idWlsZGluZy5qcyc7XG5cbmltcG9ydCB7IGluaXREZXBvc2l0TGF5ZXJzLCBkZXBvc2l0TGF5ZXJzIH0gZnJvbSAnLi9kZXBvc2l0cy9kZXBvc2l0cy5qcyc7XG5cbmltcG9ydCBtYXJrZXJJY29uIGZyb20gJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24ucG5nJztcbmltcG9ydCBtYXJrZXJTaGFkb3cgZnJvbSAnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItc2hhZG93LnBuZyc7XG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xuXG5MLk1hcmtlci5wcm90b3R5cGUub3B0aW9ucy5pY29uID0gTC5pY29uKHtcbiAgICBpY29uVXJsOiBtYXJrZXJJY29uLFxuICAgIHNoYWRvd1VybDogbWFya2VyU2hhZG93LFxufSk7XG5cbmxldCBtYXBJbnN0YW5jZSA9IG51bGw7XG5sZXQgbW92ZVRpbWVvdXQgPSBudWxsO1xubGV0IGlzQ2h1bmtNb2RlID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0TWFwKGxhdCwgbG5nKSB7XG5cbiAgICBtYXBJbnN0YW5jZSA9IEwubWFwKCdtYXAnKS5zZXRWaWV3KFtsYXQsIGxuZ10sIDcpO1xuXG4gICAgTC50aWxlTGF5ZXIoJ2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJywge1xuICAgICAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyBPcGVuU3RyZWV0TWFwJ1xuICAgIH0pLmFkZFRvKG1hcEluc3RhbmNlKTtcblxuICAgIC8vIMOJdsOpbmVtZW50IHBlcnNvbm5hbGlzw6kgcG91ciBzaWduYWxlciBxdWUgbGEgY2FydGUgZXN0IHByw6p0ZVxuICAgIG1hcEluc3RhbmNlLmZpcmUoJ21hcFJlYWR5Jyk7XG5cbiAgICBjb25zdCBsYXllcnNDb250cm9sID0gTC5jb250cm9sLmxheWVycyhudWxsLCB7XG4gICAgICAgIFwiQ2h1bmsgR3JpZFwiOiBncmlkTGF5ZXJcbiAgICB9KS5hZGRUbyhtYXBJbnN0YW5jZSk7XG5cbiAgICBpbml0RGVwb3NpdExheWVycyhtYXBJbnN0YW5jZSwgbGF5ZXJzQ29udHJvbCk7XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBDRU5UUkFMIENIVU5LIENPTlRST0xMRVJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cblxuICAgIG1hcEluc3RhbmNlLm9uKCdtb3ZlZW5kJywgKCkgPT4ge1xuXG4gICAgICAgIGlmICghaXNDaHVua01vZGUpIHJldHVybjtcbiAgICAgICAgaWYgKG1hcEluc3RhbmNlLmdldFpvb20oKSA8IDE0KSByZXR1cm47XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KG1vdmVUaW1lb3V0KTtcblxuICAgICAgICBtb3ZlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaW5pdEdyaWRMYXllcigpO1xuICAgICAgICAgICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfSk7XG5cbiAgICBtYXBJbnN0YW5jZS5vbignb3ZlcmxheWFkZCcsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmxheWVyID09PSBncmlkTGF5ZXIpIHtcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiZ3JpZFwiLCBcIkdyaWQgT05cIik7XG5cbiAgICAgICAgICAgIGluaXRHcmlkTGF5ZXIoKTtcbiAgICAgICAgICAgIGxvYWRWaXNpYmxlUm9hZENodW5rcygpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBtYXBJbnN0YW5jZS5vbignb3ZlcmxheXJlbW92ZScsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmxheWVyID09PSBncmlkTGF5ZXIpIHtcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiZ3JpZFwiLCBcIkdyaWQgT0ZGXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBFVkVOVFNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cbiAgICBtYXBJbnN0YW5jZS5vbignem9vbWVuZCcsICgpID0+IHtcblxuICAgICAgICBjb25zdCB6b29tID0gbWFwSW5zdGFuY2UuZ2V0Wm9vbSgpO1xuXG4gICAgICAgIGlmICh6b29tID49IDE0KSB7XG4gICAgICAgICAgICBlbnRlckNodW5rTW9kZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhpdENodW5rTW9kZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0dyaWRMYXllckFjdGl2ZSgpIHtcbiAgICByZXR1cm4gbWFwSW5zdGFuY2U/Lmhhc0xheWVyKGdyaWRMYXllcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXAoKSB7XG4gICAgcmV0dXJuIG1hcEluc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmx5VG8obGF0LCBsbmcsIHpvb20gPSAxMykge1xuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xuICAgIG1hcC5mbHlUbyhbbGF0LCBsbmddLCB6b29tLCB7XG4gICAgICAgIGFuaW1hdGU6IHRydWUsXG4gICAgICAgIGR1cmF0aW9uOiAxLjVcbiAgICB9KTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vLyBXT1JMRCBMT0FERVIgKENvbmNlbnRyYXRldXIgZCdhcHBlbHMgQVBJKVxuLy8gPT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZnVuY3Rpb24gbG9hZFdvcmxkKCkge1xuXG4gICAgZmV0Y2goJy9hcGkvd29ybGQtc3RhdGUnKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgJHtyZXMuc3RhdHVzfTogJHtyZXMuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIFbDqXJpZmllciBzaSBsYSByw6lwb25zZSBlc3QgdmFsaWRlXG4gICAgICAgICAgICBpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlc3BvbnNlIGZvcm1hdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGFyZ2VyIGxlcyBiYXNlcyB2aWEgYmFzZS5qcyBEJ0FCT1JEIHBvdXIgY29ubmHDrnRyZSBsYSBmYWN0aW9uIGR1IGpvdWV1clxuICAgICAgICAgICAgaWYgKGRhdGEucGxheWVycykge1xuICAgICAgICAgICAgICAgIGxldCBoYXNDZW50ZXJlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgZGF0YS5wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgcGxheWVyOlwiLCBwbGF5ZXIucHNldWRvLCBcIkZhY3Rpb246XCIsIHBsYXllci5mYWN0aW9uLCBcIklzTWU6XCIsIHBsYXllci5pc01lKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLmlzTWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKHBsYXllci5mYWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRCYXNlRnJvbVNlcnZlcihwbGF5ZXIubGF0LCBwbGF5ZXIubG5nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXIgZmFjdGlvbiBzZXQgdG86XCIsIHBsYXllci5mYWN0aW9uICwgXCJQbGF5ZXIgYmFzZSBsb2FkZWQgYXQ6XCIsIHBsYXllci5sYXQsIHBsYXllci5sbmcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0NlbnRlcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx5VG8ocGxheWVyLmxhdCwgcGxheWVyLmxuZywgMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NlbnRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbG9hZE90aGVyQmFzZShwbGF5ZXIubGF0LCBwbGF5ZXIubG5nLCBwbGF5ZXIucHNldWRvLCBwbGF5ZXIuZmFjdGlvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIETDqWZpbmlyIGwnSUQgZHUgam91ZXVyIGFjdGlmXG4gICAgICAgICAgICBpZiAoZGF0YS5jdXJyZW50UGxheWVySWQpIHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGxheWVySWQoZGF0YS5jdXJyZW50UGxheWVySWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGFyZ2VyIGxlcyBiw6J0aW1lbnRzIGFwcsOocyBhdm9pciBkw6lmaW5pIGxhIGZhY3Rpb24gZHUgam91ZXVyXG4gICAgICAgICAgICBsb2FkQnVpbGRpbmdzRnJvbURhdGEoZGF0YS5idWlsZGluZ3MpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoJ21hcCcsIFwiRXJyZXVyIGxvYWQgd29ybGRcIiwgZXJyKTtcbiAgICAgICAgICAgIC8vIE5lIHBhcyByZWRpcmlnZXIgYXV0b21hdGlxdWVtZW50LCBsYWlzc2V6IGxlIHN5c3TDqG1lIGRlIGxvZ2luIGfDqXJlciBsYSByZWRpcmVjdGlvblxuICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gZW50ZXJDaHVua01vZGUoKSB7XG4gICAgaWYgKGlzQ2h1bmtNb2RlKSByZXR1cm47XG5cbiAgICBpc0NodW5rTW9kZSA9IHRydWU7XG5cbiAgICBkZWJ1Z0xvZyhcImNodW5rc1wiLCBcIkVOVEVSIENIVU5LIE1PREVcIik7XG5cbiAgICBpbml0R3JpZExheWVyKCk7XG4gICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XG59XG5cbmZ1bmN0aW9uIGV4aXRDaHVua01vZGUoKSB7XG4gICAgaWYgKCFpc0NodW5rTW9kZSkgcmV0dXJuO1xuXG4gICAgaXNDaHVua01vZGUgPSBmYWxzZTtcblxuICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwiRVhJVCBDSFVOSyBNT0RFXCIpO1xuXG4gICAgaWYgKG1hcEluc3RhbmNlLmhhc0xheWVyKGdyaWRMYXllcikpIHtcbiAgICAgICAgbWFwSW5zdGFuY2UucmVtb3ZlTGF5ZXIoZ3JpZExheWVyKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgcm9hZHNTdGF0ZSB9IGZyb20gJy4vcm9hZHNTdGF0ZS5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRhdGVDaHVuayhpZCkge1xyXG4gICAgZGVidWdMb2coXCJjYWNoZVwiLCBcIvCfp7kgaW52YWxpZGF0ZSBjaHVuazpcIiwgaWQpO1xyXG4gICAgXHJcbiAgICBkZWxldGUgcm9hZHNTdGF0ZS5jaHVua3NbaWRdO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGNodW5rXyR7aWR9YCk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC5qcyc7XHJcblxyXG4vKipcclxuICogVHJvdXZlIGxlIHBvaW50IGxlIHBsdXMgcHJvY2hlIHN1ciB0b3V0ZXMgbGVzIHJvdXRlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDbG9zZXN0UG9pbnRPblJvYWQobGF0bG5nLCByb2Fkcykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgbGV0IGJlc3RQb2ludCA9IG51bGw7XHJcbiAgICBsZXQgYmVzdERpc3RhbmNlID0gSW5maW5pdHk7XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWRzKSkgcmV0dXJuIHsgcG9pbnQ6IG51bGwsIGRpc3RhbmNlOiBJbmZpbml0eSB9O1xyXG5cclxuICAgIHJvYWRzLmZvckVhY2gocm9hZCA9PiB7XHJcblxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkLnBvaW50cykpIHJldHVybjtcclxuICAgICAgICBpZiAocm9hZC5wb2ludHMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvYWQucG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYVJhdyA9IHJvYWQucG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiUmF3ID0gcm9hZC5wb2ludHNbaSArIDFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFhUmF3IHx8ICFiUmF3KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJCUk9LRU4gUk9BRCBTRUdNRU5UOlwiLCByb2FkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFSYXcubGVuZ3RoIDwgMiB8fCBiUmF3Lmxlbmd0aCA8IDIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYSA9IEwubGF0TG5nKGFSYXdbMF0sIGFSYXdbMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gTC5sYXRMbmcoYlJhd1swXSwgYlJhd1sxXSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ZWQgPSBwcm9qZWN0UG9pbnRPblNlZ21lbnQobGF0bG5nLCBhLCBiKTtcclxuICAgICAgICAgICAgY29uc3QgZGlzdCA9IG1hcC5kaXN0YW5jZShsYXRsbmcsIHByb2plY3RlZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlzdCA8IGJlc3REaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgYmVzdERpc3RhbmNlID0gZGlzdDtcclxuICAgICAgICAgICAgICAgIGJlc3RQb2ludCA9IHByb2plY3RlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcG9pbnQ6IGJlc3RQb2ludCxcclxuICAgICAgICBkaXN0YW5jZTogYmVzdERpc3RhbmNlXHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVHJvdXZlIGxlIHNlZ21lbnQgbGUgcGx1cyBwcm9jaGUgKHBvdXIgaGlnaGxpZ2h0IHZpc3VlbClcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ2xvc2VzdFNlZ21lbnQobGF0bG5nLCByb2Fkcykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgbGV0IGJlc3RTZWdtZW50ID0gbnVsbDtcclxuICAgIGxldCBiZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZHMpKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByb2Fkcy5mb3JFYWNoKHJvYWQgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZC5wb2ludHMpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9hZC5wb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhUmF3ID0gcm9hZC5wb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGJSYXcgPSByb2FkLnBvaW50c1tpICsgMV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFSYXcgfHwgIWJSYXcpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoYVJhdy5sZW5ndGggPCAyIHx8IGJSYXcubGVuZ3RoIDwgMikgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhID0gTC5sYXRMbmcoYVJhd1swXSwgYVJhd1sxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBMLmxhdExuZyhiUmF3WzBdLCBiUmF3WzFdKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1pZCA9IEwubGF0TG5nKFxyXG4gICAgICAgICAgICAgICAgKGEubGF0ICsgYi5sYXQpIC8gMixcclxuICAgICAgICAgICAgICAgIChhLmxuZyArIGIubG5nKSAvIDJcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBtYXAuZGlzdGFuY2UobGF0bG5nLCBtaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3QgPCBiZXN0RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0YW5jZSA9IGRpc3Q7XHJcbiAgICAgICAgICAgICAgICBiZXN0U2VnbWVudCA9IFthLCBiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBiZXN0U2VnbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFByb2plY3Rpb24gZCd1biBwb2ludCBzdXIgdW4gc2VnbWVudCAoQS1CKVxyXG4gKiBtYXRoIHN0YWJsZSBwb3VyIHNuYXAgcm91dGVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFBvaW50T25TZWdtZW50KHAsIGEsIGIpIHtcclxuXHJcbiAgICBjb25zdCBBID0gW2EubGF0LCBhLmxuZ107XHJcbiAgICBjb25zdCBCID0gW2IubGF0LCBiLmxuZ107XHJcbiAgICBjb25zdCBQID0gW3AubGF0LCBwLmxuZ107XHJcblxyXG4gICAgY29uc3QgQUIgPSBbQlswXSAtIEFbMF0sIEJbMV0gLSBBWzFdXTtcclxuICAgIGNvbnN0IEFQID0gW1BbMF0gLSBBWzBdLCBQWzFdIC0gQVsxXV07XHJcblxyXG4gICAgY29uc3QgYWIyID0gQUJbMF0gKiBBQlswXSArIEFCWzFdICogQUJbMV07XHJcblxyXG4gICAgaWYgKGFiMiA9PT0gMCkgcmV0dXJuIGE7XHJcblxyXG4gICAgbGV0IHQgPSAoQVBbMF0gKiBBQlswXSArIEFQWzFdICogQUJbMV0pIC8gYWIyO1xyXG5cclxuICAgIHQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0KSk7XHJcblxyXG4gICAgcmV0dXJuIEwubGF0TG5nKFxyXG4gICAgICAgIEFbMF0gKyBBQlswXSAqIHQsXHJcbiAgICAgICAgQVsxXSArIEFCWzFdICogdFxyXG4gICAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3RhbmNlIHBvaW50IC0+IHNlZ21lbnQgKHV0aWxlIHZhbGlkYXRpb24gZnV0dXJlKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlVG9TZWdtZW50KHAsIGEsIGIpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RlZCA9IHByb2plY3RQb2ludE9uU2VnbWVudChwLCBhLCBiKTtcclxuICAgIHJldHVybiBtYXAuZGlzdGFuY2UocCwgcHJvamVjdGVkKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIHNpbXBsZSBkZWJ1ZyByb2Fkc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnUm9hZHMocm9hZHMpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiUk9BRFMgREVCVUc6XCIsIHJvYWRzLmxlbmd0aCwgcm9hZHMpO1xyXG59IiwiaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwLmpzJztcclxuaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4uLy4uL3V0aWxzL2NodW5rLmpzJztcclxuaW1wb3J0IHsgc2V0Q2h1bmtDb2xvciB9IGZyb20gJy4uLy4uL0xheWVycy9ncmlkTGF5ZXIuanMnO1xyXG5pbXBvcnQgeyBpbnZhbGlkYXRlQ2h1bmsgfSBmcm9tICcuL2ludmFsaWRhdGVDaHVuay5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcbmltcG9ydCB7IHJvYWRzU3RhdGUgfSBmcm9tICcuL3JvYWRzU3RhdGUuanMnO1xyXG5pbXBvcnQgeyByZW5kZXJEZXBvc2l0c0Zyb21EYXRhIH0gZnJvbSAnLi4vZGVwb3NpdHMvZGVwb3NpdHMuanMnO1xyXG5pbXBvcnQgeyBnZXRDYWNoZUtleSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhY2hlVXRpbHMuanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTE9BRCBDT05UUk9MXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGxvYWRpbmdRdWV1ZSA9IG5ldyBTZXQoKTtcclxuY29uc3QgTUFYX0NPTkNVUlJFTlQgPSA0O1xyXG5sZXQgYWN0aXZlUmVxdWVzdHMgPSAwO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ0hVTksgSURcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gZ2V0Q2h1bmtJZChsYXQsIGxuZykge1xyXG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IobGF0IC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihsbmcgLyBDSFVOS19TSVpFKTtcclxuICAgIHJldHVybiBgJHt4fV8ke3l9YDtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTUFJTiBMT0FEIFZJU0lCTEVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRWaXNpYmxlUm9hZENodW5rcygpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAoIW1hcCB8fCBtYXAuZ2V0Wm9vbSgpIDwgMTQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBib3VuZHMgPSBtYXAuZ2V0Qm91bmRzKCk7XHJcblxyXG4gICAgY29uc3QgdmlzaWJsZUNodW5rcyA9IGdldFZpc2libGVDaHVua3MoYm91bmRzKTtcclxuXHJcbiAgICBjb25zdCBjaHVua3NUb0xvYWQgPSB2aXNpYmxlQ2h1bmtzLmZpbHRlcihcclxuICAgICAgICBjaHVua0lkID0+ICFyb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5oYXMoY2h1bmtJZClcclxuICAgICk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFZFUklGSUNBVElPTiBDQUNIRSBMT0NBTFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIGNvbnN0IGZpbmFsQ2h1bmtzVG9Mb2FkID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBjaHVua0lkIG9mIGNodW5rc1RvTG9hZCkge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gZ2V0Q2FjaGVLZXkoY2h1bmtJZCk7XHJcbiAgICAgICAgY29uc3QgY2FjaGVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oY2FjaGVLZXkpO1xyXG4gICAgICAgIGlmIChjYWNoZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoY2FjaGVkKTtcclxuICAgICAgICAgICAgLy8gVsOpcmlmaWVyIHNpIGxlIGNhY2hlIGVzdCB2aWV1eCAoZXg6IHBsdXMgZGUgMWgpXHJcbiAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gZGF0YS50cyA8IDM2MDAwMDApIHsgXHJcbiAgICAgICAgICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGRhdGEuaGFzUm9hZHMgPyAnbG9hZGVkJyA6ICdlbXB0eScsXHJcbiAgICAgICAgICAgICAgICAgICAgcm9hZHM6IGRhdGEucm9hZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBkYXRhLmJ1aWxkaW5ncyxcclxuICAgICAgICAgICAgICAgICAgICBkZXBvc2l0czogZGF0YS5kZXBvc2l0cyxcclxuICAgICAgICAgICAgICAgICAgICBoYXNSb2FkczogZGF0YS5oYXNSb2Fkc1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJvYWRzU3RhdGUubG9hZGVkQ2h1bmtzLmFkZChjaHVua0lkKTtcclxuICAgICAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgZGF0YS5oYXNSb2FkcyA/ICdibHVlJyA6ICcjNDQ0Jyk7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGRhdGEuZGVwb3NpdHMgfHwgW10sIG1hcCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbENodW5rc1RvTG9hZC5wdXNoKGNodW5rSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBFVEFUIExPQURJTkdcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgZm9yIChjb25zdCBjaHVua0lkIG9mIGZpbmFsQ2h1bmtzVG9Mb2FkKSB7XHJcblxyXG4gICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG4gICAgICAgICAgICBzdGF0dXM6ICdsb2FkaW5nJyxcclxuICAgICAgICAgICAgcm9hZHM6IFtdLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IFtdLFxyXG4gICAgICAgICAgICBkZXBvc2l0czogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByaWVuIMOgIGNoYXJnZXJcclxuICAgIGlmIChmaW5hbENodW5rc1RvTG9hZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZWZyZXNoQ2h1bmtDb2xvcnModmlzaWJsZUNodW5rcyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIGNvbnN0IFtyb2Fkc1Jlc3BvbnNlLCBidWlsZGluZ3NSZXNwb25zZSwgZGVwb3NpdHNSZXNwb25zZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2NodW5rcy9idWxrJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2h1bmtzOiBmaW5hbENodW5rc1RvTG9hZCB9KVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvYnVpbGRpbmdzL3Zpc2libGUnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IGZpbmFsQ2h1bmtzVG9Mb2FkIH0pXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9kZXBvc2l0cy9idWxrJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2h1bmtzOiBmaW5hbENodW5rc1RvTG9hZCB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBpZiAoIXJvYWRzUmVzcG9uc2Uub2sgfHwgIWJ1aWxkaW5nc1Jlc3BvbnNlLm9rIHx8ICFkZXBvc2l0c1Jlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJBUEkgZXJyb3JcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvYWRzRGF0YSA9IGF3YWl0IHJvYWRzUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGJ1aWxkaW5nc0RhdGEgPSBhd2FpdCBidWlsZGluZ3NSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgZGVwb3NpdHNEYXRhID0gYXdhaXQgZGVwb3NpdHNSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIC8vIENyw6llciB1biBpbmRleCBwb3VyIG1hcHBlciBsZXMgYsOidGltZW50cyBwYXIgY2h1bmtJZCByYXBpZGVtZW50XHJcbiAgICAgICAgY29uc3QgYnVpbGRpbmdzQnlDaHVuayA9IHt9O1xyXG4gICAgICAgIGJ1aWxkaW5nc0RhdGEuZm9yRWFjaChiID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY0lkID0gTWF0aC5mbG9vcihiLmxhdCAqIDEwMCkgKyAnXycgKyBNYXRoLmZsb29yKGIubG5nICogMTAwKTtcclxuICAgICAgICAgICAgaWYgKCFidWlsZGluZ3NCeUNodW5rW2NJZF0pIGJ1aWxkaW5nc0J5Q2h1bmtbY0lkXSA9IFtdO1xyXG4gICAgICAgICAgICBidWlsZGluZ3NCeUNodW5rW2NJZF0ucHVzaChiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBUUkFJVEVNRU5UIENIVU5LU1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBmaW5hbENodW5rc1RvTG9hZCkge1xyXG4gICAgICAgICAgICBjb25zdCBjaHVua0RhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICByb2Fkczogcm9hZHNEYXRhW2NodW5rSWRdPy5yb2FkcyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogYnVpbGRpbmdzRGF0YVtjaHVua0lkXT8uYnVpbGRpbmdzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVwb3NpdHM6IGRlcG9zaXRzRGF0YVtjaHVua0lkXSB8fCBbXVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFzUm9hZHMgPSBjaHVua0RhdGEucm9hZHMgJiYgY2h1bmtEYXRhLnJvYWRzLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogaGFzUm9hZHMgPyAnbG9hZGVkJyA6ICdlbXB0eScsXHJcbiAgICAgICAgICAgICAgICByb2FkczogY2h1bmtEYXRhLnJvYWRzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBjaHVua0RhdGEuYnVpbGRpbmdzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVwb3NpdHM6IGNodW5rRGF0YS5kZXBvc2l0cyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGhhc1JvYWRzXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5hZGQoY2h1bmtJZCk7XHJcblxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBDQUNIRVxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICBjb25zdCBjYWNoZUtleSA9IGdldENhY2hlS2V5KGNodW5rSWQpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgICAgY2FjaGVLZXksXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHJvYWRzOiBjaHVua0RhdGEucm9hZHMgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6IGNodW5rRGF0YS5idWlsZGluZ3MgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBkZXBvc2l0czogY2h1bmtEYXRhLmRlcG9zaXRzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgaGFzUm9hZHMsXHJcbiAgICAgICAgICAgICAgICB0czogRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBEUkFXIFJPQURTXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgICAgICAvLyBjaHVua0RhdGEucm9hZHMuZm9yRWFjaChyb2FkID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGRyYXdSb2FkKHJvYWQpO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIERSQVcgQlVJTERJTkdTXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIGNodW5rRGF0YS5idWlsZGluZ3MuZm9yRWFjaChidWlsZGluZyA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBkcmF3QnVpbGRpbmcoYnVpbGRpbmcpO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIENPVUxFVVIgQ0hVTktcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihcclxuICAgICAgICAgICAgICAgIGNodW5rSWQsXHJcbiAgICAgICAgICAgICAgICBoYXNSb2FkcyA/ICdibHVlJyA6ICcjNDQ0J1xyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShjaHVua0RhdGEuZGVwb3NpdHMsIG1hcCk7XHJcblxyXG4gICAgICAgICAgICBkZWJ1Z0xvZyhcInJvYWRzXCIsIGBDaHVuayAke2NodW5rSWR9IGxvYWRlZCAoJHtjaHVua0RhdGEucm9hZHMubGVuZ3RofSByb2FkcywgJHtjaHVua0RhdGEuYnVpbGRpbmdzLmxlbmd0aH0gYnVpbGRpbmdzLCAke2NodW5rRGF0YS5kZXBvc2l0cy5sZW5ndGh9IGRlcG9zaXRzKWApO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgIGRlYnVnRXJyb3IoXCJyb2Fkc1wiLCBcIkVycmV1ciBjaGFyZ2VtZW50IGNodW5rcyBidWxrOlwiLCBlcnJvcik7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gRVRBVCBFUlJFVVJcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgZmluYWxDaHVua3NUb0xvYWQpIHtcclxuICAgICAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG5cclxuICAgICAgICAgICAgICAgIHJvYWRzOiBbXSxcclxuXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVwb3NpdHM6IFtdXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdyZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFRlJFU0ggVklTVUVMIEZJTkFMXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHJlZnJlc2hDaHVua0NvbG9ycyh2aXNpYmxlQ2h1bmtzKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUkVGUkVTSCBDSFVOSyBDT0xPUlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gcmVmcmVzaENodW5rQ29sb3JzKHZpc2libGVDaHVua3MpIHtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgdmlzaWJsZUNodW5rcykge1xyXG5cclxuICAgICAgICBjb25zdCBjaHVuayA9IHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdO1xyXG4gICAgICAgIGlmICghY2h1bmspIHtcclxuXHJcbiAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ29yYW5nZScpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY2h1bmsuc3RhdHVzKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdsb2FkZWQnOlxyXG5cclxuICAgICAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ2JsdWUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2VtcHR5JzpcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICcjNDQ0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdsb2FkaW5nJzpcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdyZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAneWVsbG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSRUZSRVNIIENIVU5LXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoQ2h1bmsobGF0LCBsbmcpIHtcclxuICAgIGNvbnN0IGNodW5rSWQgPSBnZXRDaHVua0lkKGxhdCwgbG5nKTtcclxuXHJcbiAgICBpbnZhbGlkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcblxyXG4gICAgcm9hZHNTdGF0ZS5sb2FkZWRDaHVua3MuZGVsZXRlKGNodW5rSWQpO1xyXG5cclxuICAgIGF3YWl0IGZldGNoU2luZ2xlQ2h1bmsoY2h1bmtJZCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZFVENIIFNJTkdMRSBDSFVOS1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFNpbmdsZUNodW5rKGNodW5rSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgICByb2FkczogW10sXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogW10sXHJcbiAgICAgICAgICAgIGRlcG9zaXRzOiBbXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ29yYW5nZScpO1xyXG5cclxuICAgICAgICBjb25zdCBbcm9hZHNSZXMsIGJ1aWxkaW5nc1JlcywgZGVwb3NpdHNSZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9jaHVua3MvYnVsaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogW2NodW5rSWRdIH0pXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9idWlsZGluZ3MvdmlzaWJsZScsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogW2NodW5rSWRdIH0pXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9kZXBvc2l0cy9idWxrJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2h1bmtzOiBbY2h1bmtJZF0gfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgaWYgKCFyb2Fkc1Jlcy5vayB8fCAhYnVpbGRpbmdzUmVzLm9rIHx8ICFkZXBvc2l0c1Jlcy5vaykgXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFQSSBlcnJvclwiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9hZHNEYXRhICAgICA9IGF3YWl0IHJvYWRzUmVzLmpzb24oKTtcclxuICAgICAgICBjb25zdCBidWlsZGluZ3NEYXRhID0gYXdhaXQgYnVpbGRpbmdzUmVzLmpzb24oKTtcclxuICAgICAgICBjb25zdCBkZXBvc2l0c0RhdGEgID0gYXdhaXQgZGVwb3NpdHNSZXMuanNvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBjaHVua0RlcG9zaXRzID0gZGVwb3NpdHNEYXRhW2NodW5rSWRdIHx8IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBjaHVua0RhdGEgPSB7XHJcbiAgICAgICAgICAgIHJvYWRzOiAgICAgcm9hZHNEYXRhW2NodW5rSWRdPy5yb2FkcyAgICAgfHwgW10sXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogYnVpbGRpbmdzRGF0YVtjaHVua0lkXT8uYnVpbGRpbmdzIHx8IFtdLFxyXG4gICAgICAgICAgICBkZXBvc2l0czogIGNodW5rRGVwb3NpdHNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBoYXNSb2FkcyA9IGNodW5rRGF0YS5yb2Fkcy5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiBoYXNSb2FkcyA/ICdsb2FkZWQnIDogJ2VtcHR5JyxcclxuICAgICAgICAgICAgcm9hZHM6ICAgICBjaHVua0RhdGEucm9hZHMsXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogY2h1bmtEYXRhLmJ1aWxkaW5ncyxcclxuICAgICAgICAgICAgZGVwb3NpdHM6ICBjaHVua0RhdGEuZGVwb3NpdHMsXHJcbiAgICAgICAgICAgIGhhc1JvYWRzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBnZXRDYWNoZUtleShjaHVua0lkKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjYWNoZUtleSwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICByb2FkczogICAgIGNodW5rRGF0YS5yb2FkcyxcclxuICAgICAgICAgICAgYnVpbGRpbmdzOiBjaHVua0RhdGEuYnVpbGRpbmdzLFxyXG4gICAgICAgICAgICBkZXBvc2l0czogIGNodW5rRGF0YS5kZXBvc2l0cyxcclxuICAgICAgICAgICAgaGFzUm9hZHMsXHJcbiAgICAgICAgICAgIHRzOiBEYXRlLm5vdygpXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsIGhhc1JvYWRzID8gJ2JsdWUnIDogJyM0NDQnKTtcclxuICAgICAgICByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGNodW5rRGF0YS5kZXBvc2l0cywgZ2V0TWFwKCkpO1xyXG5cclxuICAgICAgICBkZWJ1Z0xvZyhcInJvYWRzXCIsIFwiW0NIVU5LIFJFRlJFU0hdXCIsIGNodW5rSWQsIGNodW5rRGF0YS5yb2Fkcy5sZW5ndGgpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgICAgICByb2FkczogW10sXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogW10sXHJcbiAgICAgICAgICAgIGRlcG9zaXRzOiBbXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ3JlZCcpO1xyXG4gICAgICAgIGRlYnVnRXJyb3IoXCJyb2Fkc1wiLCBcIltDSFVOSyBSRUZSRVNIIEVSUk9SXVwiLCBjaHVua0lkLCBlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmlzaWJsZUNodW5rcyhib3VuZHMpIHtcclxuXHJcbiAgICBjb25zdCBtaW5YID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0U291dGgoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWF4WCA9IE1hdGguZmxvb3IoYm91bmRzLmdldE5vcnRoKCkgLyBDSFVOS19TSVpFKTtcclxuXHJcbiAgICBjb25zdCBtaW5ZID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0V2VzdCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtYXhZID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0RWFzdCgpIC8gQ0hVTktfU0laRSk7XHJcblxyXG4gICAgY29uc3QgY2h1bmtJZCA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IHggPSBtaW5YOyB4IDw9IG1heFg7IHgrKykge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSBtaW5ZOyB5IDw9IG1heFk7IHkrKykge1xyXG4gICAgICAgICAgICBjaHVua0lkLnB1c2goYCR7eH1fJHt5fWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2h1bmtJZDtcclxufSIsImV4cG9ydCBjb25zdCByb2Fkc1N0YXRlID0ge1xyXG4gICAgY2h1bmtzOiB7fSxcclxuICAgIGxvYWRlZENodW5rczogbmV3IFNldCgpLFxyXG4gICAgcm9hZHNSZWFkeTogZmFsc2UsXHJcbiAgICBkcmF3blJvYWRzOiBbXSxcclxuICAgIHZpc2libGVDaHVua3M6IG5ldyBTZXQoKSxcclxuICAgIFxyXG4gICAgcm9hZExheWVyczoge30sXHJcblxyXG4gICAgYnVpbGRpbmdMYXllcnM6IHt9XHJcbn07XHJcblxyXG5sZXQgY2FjaGVkUm9hZHMgPSBbXTtcclxubGV0IGNhY2hlRGlydHkgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtSb2FkQ2FjaGVEaXJ0eSgpIHtcclxuICAgIGNhY2hlRGlydHkgPSB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsTG9hZGVkUm9hZHMoKSB7XHJcblxyXG4gICAgaWYgKCFyb2Fkc1N0YXRlPy5jaHVua3MpIHJldHVybiBbXTtcclxuXHJcbiAgICBpZiAoIWNhY2hlRGlydHkpIHJldHVybiBjYWNoZWRSb2FkcztcclxuXHJcbiAgICBjYWNoZWRSb2FkcyA9IE9iamVjdC52YWx1ZXMocm9hZHNTdGF0ZS5jaHVua3MpXHJcbiAgICAgICAgLmZpbHRlcihjID0+IGM/LnN0YXR1cyA9PT0gJ2xvYWRlZCcgJiYgQXJyYXkuaXNBcnJheShjLnJvYWRzKSlcclxuICAgICAgICAuZmxhdE1hcChjID0+IGMucm9hZHMpO1xyXG5cclxuICAgIGNhY2hlRGlydHkgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gY2FjaGVkUm9hZHM7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gaW5pdE5vdGlmaWNhdGlvbnMoKVxyXG57XHJcbiAgICAvLyBIVE1YIGZhaXQgZMOpasOgIGxlIHBvbGxpbmdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSwgdHlwZSA9ICdpbmZvJykge1xyXG5cclxuICAgIGNvbnN0IG5vdGlmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBub3RpZi5jbGFzc05hbWUgPSBgbm90aWYgbm90aWYtJHt0eXBlfWA7XHJcbiAgICBub3RpZi50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub3RpZik7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbm90aWYucmVtb3ZlKCk7XHJcbiAgICB9LCAzMDAwKTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcbmltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xuaW1wb3J0IHsgZ2V0Q3VycmVudFBsYXllckZhY3Rpb24gfSBmcm9tICcuLi9idWlsZGluZ3MvYmFzZS5qcyc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTVEFURVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IGJhc2VDaXJjbGVzID0gbmV3IE1hcCgpOyAvLyBiYXNlSWQgLT4gY2lyY2xlIGxheWVyXG5jb25zdCByb2FkU2VnbWVudHMgPSBuZXcgTWFwKCk7IC8vIHJvYWRJZCAtPiBwb2x5bGluZSBsYXllclxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRkFDVElPTiBDT0xPUlNcbi8vID09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBGQUNUSU9OX0NPTE9SUyA9IHtcbiAgICAnZGVmYXVsdCc6ICcjMjdhZTYwJywgIC8vIHZlcnQgcGFyIGTDqWZhdXRcbiAgICAnZW1waXJlJzogJyNlNzRjM2MnLCAgIC8vIHJvdWdlXG4gICAgJ2NlbmRyZXMnOiAnIzM0OThkYicsICAgIC8vIGJsZXVcbiAgICAnbm9tYWRlcyc6ICcjZjM5YzEyJywgIC8vIG9yYW5nZVxufTtcblxuZnVuY3Rpb24gZ2V0RmFjdGlvbkNvbG9yKGZhY3Rpb24pIHtcbiAgICByZXR1cm4gRkFDVElPTl9DT0xPUlNbZmFjdGlvbj8udG9Mb3dlckNhc2UoKV0gfHwgRkFDVElPTl9DT0xPUlNbJ2RlZmF1bHQnXTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJBU0UgQ0lSQ0xFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdCYXNlQ2lyY2xlKGJhc2VJZCwgbGF0LCBsbmcsIGZhY3Rpb24sIGlzUGxheWVyQmFzZSA9IGZhbHNlKSB7XG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XG4gICAgaWYgKCFtYXApIHJldHVybjtcblxuICAgIGNvbnN0IHBsYXllckZhY3Rpb24gPSBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xuICAgIGNvbnN0IGNvbG9yID0gaXNQbGF5ZXJCYXNlXG4gICAgICAgID8gJyMyN2FlNjAnICAvLyB2ZXJ0IHBvdXIgbm90cmUgYmFzZVxuICAgICAgICA6IGdldEZhY3Rpb25Db2xvcihmYWN0aW9uKTtcblxuICAgIC8vIFN1cHByaW1lciBsJ2FuY2llbiBjZXJjbGUgc2kgZXhpc3RlXG4gICAgaWYgKGJhc2VDaXJjbGVzLmhhcyhiYXNlSWQpKSB7XG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihiYXNlQ2lyY2xlcy5nZXQoYmFzZUlkKSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2lyY2xlID0gTC5jaXJjbGUoW2xhdCwgbG5nXSwge1xuICAgICAgICByYWRpdXM6IDUwMCxcbiAgICAgICAgY29sb3I6IGNvbG9yLFxuICAgICAgICB3ZWlnaHQ6IDIsXG4gICAgICAgIGZpbGxPcGFjaXR5OiAwXG4gICAgfSkuYWRkVG8obWFwKTtcblxuICAgIGJhc2VDaXJjbGVzLnNldChiYXNlSWQsIGNpcmNsZSk7XG4gICAgcmV0dXJuIGNpcmNsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJhc2VDaXJjbGUoYmFzZUlkKSB7XG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XG4gICAgaWYgKCFtYXApIHJldHVybjtcblxuICAgIGlmIChiYXNlQ2lyY2xlcy5oYXMoYmFzZUlkKSkge1xuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIoYmFzZUNpcmNsZXMuZ2V0KGJhc2VJZCkpO1xuICAgICAgICBiYXNlQ2lyY2xlcy5kZWxldGUoYmFzZUlkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFsbEJhc2VDaXJjbGVzKCkge1xuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xuICAgIGlmICghbWFwKSByZXR1cm47XG5cbiAgICBiYXNlQ2lyY2xlcy5mb3JFYWNoKGNpcmNsZSA9PiBtYXAucmVtb3ZlTGF5ZXIoY2lyY2xlKSk7XG4gICAgYmFzZUNpcmNsZXMuY2xlYXIoKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJPQUQgU0VHTUVOVFNcbi8vID09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZnVuY3Rpb24gZHJhd1JvYWRTZWdtZW50KHJvYWRJZCwgY29vcmRzLCBmYWN0aW9uKSB7XG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XG4gICAgaWYgKCFtYXAgfHwgIWNvb3JkcyB8fCBjb29yZHMubGVuZ3RoIDwgMikgcmV0dXJuO1xuXG4gICAgY29uc3QgcGxheWVyRmFjdGlvbiA9IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XG4gICAgY29uc3QgY29sb3IgPSBmYWN0aW9uID09PSBwbGF5ZXJGYWN0aW9uXG4gICAgICAgID8gJyMyN2FlNjAnICAvLyB2ZXJ0IHBvdXIgbm9zIHJvdXRlc1xuICAgICAgICA6IGdldEZhY3Rpb25Db2xvcihmYWN0aW9uKTtcblxuICAgIC8vIFN1cHByaW1lciBsJ2FuY2llbiBzZWdtZW50IHNpIGV4aXN0ZVxuICAgIGlmIChyb2FkU2VnbWVudHMuaGFzKHJvYWRJZCkpIHtcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKHJvYWRTZWdtZW50cy5nZXQocm9hZElkKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcG9seWxpbmUgPSBMLnBvbHlsaW5lKGNvb3Jkcywge1xuICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgIHdlaWdodDogMyxcbiAgICAgICAgb3BhY2l0eTogMC42LFxuICAgICAgICBkYXNoQXJyYXk6ICc4LDgnXG4gICAgfSkuYWRkVG8obWFwKTtcblxuICAgIHJvYWRTZWdtZW50cy5zZXQocm9hZElkLCBwb2x5bGluZSk7XG4gICAgcmV0dXJuIHBvbHlsaW5lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUm9hZFNlZ21lbnQocm9hZElkKSB7XG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XG4gICAgaWYgKCFtYXApIHJldHVybjtcblxuICAgIGlmIChyb2FkU2VnbWVudHMuaGFzKHJvYWRJZCkpIHtcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKHJvYWRTZWdtZW50cy5nZXQocm9hZElkKSk7XG4gICAgICAgIHJvYWRTZWdtZW50cy5kZWxldGUocm9hZElkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFsbFJvYWRTZWdtZW50cygpIHtcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xuXG4gICAgcm9hZFNlZ21lbnRzLmZvckVhY2gocG9seWxpbmUgPT4gbWFwLnJlbW92ZUxheWVyKHBvbHlsaW5lKSk7XG4gICAgcm9hZFNlZ21lbnRzLmNsZWFyKCk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09XG4vLyBVUERBVEUgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUJhc2VDaXJjbGVzKGJhc2VzKSB7XG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XG4gICAgaWYgKCFtYXApIHJldHVybjtcblxuICAgIGNvbnN0IHBsYXllckZhY3Rpb24gPSBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xuXG4gICAgYmFzZXMuZm9yRWFjaChiYXNlID0+IHtcbiAgICAgICAgY29uc3QgaXNQbGF5ZXJCYXNlID0gYmFzZS5mYWN0aW9uID09PSBwbGF5ZXJGYWN0aW9uO1xuICAgICAgICBkcmF3QmFzZUNpcmNsZShiYXNlLmlkLCBiYXNlLmxhdCwgYmFzZS5sbmcsIGJhc2UuZmFjdGlvbiwgaXNQbGF5ZXJCYXNlKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVJvYWRTZWdtZW50cyhyb2Fkcykge1xuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xuICAgIGlmICghbWFwKSByZXR1cm47XG5cbiAgICBjb25zdCBwbGF5ZXJGYWN0aW9uID0gZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKTtcblxuICAgIHJvYWRzLmZvckVhY2gocm9hZCA9PiB7XG4gICAgICAgIGNvbnN0IGlzUGxheWVyUm9hZCA9IHJvYWQuZmFjdGlvbiA9PT0gcGxheWVyRmFjdGlvbjtcbiAgICAgICAgZHJhd1JvYWRTZWdtZW50KHJvYWQuaWQsIHJvYWQuY29vcmRzLCByb2FkLmZhY3Rpb24pO1xuICAgIH0pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVVRJTElUWVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBmdW5jdGlvbiBzZXRSb2FkU2VnbWVudENvbG9yKHJvYWRJZCwgY29sb3IpIHtcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xuXG4gICAgaWYgKHJvYWRTZWdtZW50cy5oYXMocm9hZElkKSkge1xuICAgICAgICByb2FkU2VnbWVudHMuZ2V0KHJvYWRJZCkuc2V0U3R5bGUoeyBjb2xvciB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4uL25vdGlmaWNhdGlvbnMuanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUEFUSEZJTkRJTkcgREVCVUcgLSBDTElDSyBUTyBHRVQgQ09PUkRJTkFURVNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkbWluQ29vcmRzKGxhdCwgbG5nKSB7XHJcbiAgICBpZiAobGF0ID09PSB1bmRlZmluZWQgfHwgbG5nID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBmb3JtYXQgPSBgJHtsYXQudG9GaXhlZCg2KX0sJHtsbmcudG9GaXhlZCg2KX1gO1xyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZm9ybWF0KTtcclxuICAgIHNob3dOb3RpZmljYXRpb24oXCJGb3JtYXQgY29sbGFibGUgYWRtaW4gY29wacOpIDogXCIgKyBmb3JtYXQsICdzdWNjZXNzJyk7XHJcbn0iLCJpbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcclxuaW1wb3J0IHsgcmVmcmVzaENodW5rIH0gZnJvbSAnLi4vbWFwL3JvYWRzL3JvYWRzLmpzJztcclxuaW1wb3J0IHsgaW52YWxpZGF0ZUNodW5rIH0gZnJvbSAnLi4vbWFwL3JvYWRzL2ludmFsaWRhdGVDaHVuay5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5pbXBvcnQgeyBzbmFwVG9DaHVuayB9IGZyb20gJy4vc25hcC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hVTktfU0laRSA9IDAuMDE7XHJcbmV4cG9ydCBjb25zdCBDSFVOS19SQURJVVMgPSAxO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcXVlc3RBcGlSb2Fkc0FuZENodW5rc0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnY3Jvc3NoYWlyJztcclxuICAgIGFsZXJ0KFwiQ2xpcXVlIHN1ciBsYSBjYXJ0ZSBwb3VyIGZhaXJlIHVuZSByZXF1ZXRlIGFwaSBwb3VyIGFqb3V0ZXIgdW4gY2h1bmsgZGUgcm91dGVzICgwLjAxwrAgeCAwLjAxwrApLlwiKTtcclxuXHJcbiAgICBtYXAub25jZSgnY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB7IGxhdCwgbG5nIH0gPSBlLmxhdGxuZztcclxuXHJcbiAgICAgICAgY29uc3Qgc25hcHBlZCA9IHNuYXBUb0NodW5rKGxhdCwgbG5nKTtcclxuXHJcbiAgICAgICAgZGVidWdMb2coXCJuZXR3b3JrXCIsIFwi8J+ToSBhZGRpbmcgcm9hZHMgY2h1bms6XCIsIHNuYXBwZWQuY2h1bmtJZCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKCcvYXBpL2FkZC1yb2Fkcy1jaHVuaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBzbmFwcGVkLmxhdCxcclxuICAgICAgICAgICAgICAgICAgICBsbmc6IHNuYXBwZWQubG5nXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlZnJlc2hDaHVuayhzbmFwcGVkLmxhdCwgc25hcHBlZC5sbmcpO1xyXG5cclxuICAgICAgICAgICAgZGVidWdMb2coXCJjaHVua3NcIiwgXCLwn5SEIGNodW5rIHJlZnJlc2hlZDpcIiwgc25hcHBlZC5jaHVua0lkKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoXCJuZXR3b3JrXCIsIFwiZmFpbGVkIHRvIGFkZCByb2FkcyBjaHVua1wiLCBlcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG4gICAgfSk7XHJcbn0pOyIsImltcG9ydCB7IGZseVRvIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdQUyhkZWZhdWx0TGF0LCBkZWZhdWx0TG5nKSB7XHJcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICAgICAgbGV0IGdwc0ZvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxyXG4gICAgICAgICAgICAocG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGdwc0ZvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmbHlUbyhcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge30sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDUwMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWdwc0ZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBmbHlUbyhkZWZhdWx0TGF0LCBkZWZhdWx0TG5nLCA3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDU1MDApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4vY2h1bmsuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNuYXBUb0NodW5rKGxhdCwgbG5nKSB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihsYXQgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGxuZyAvIENIVU5LX1NJWkUpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGF0OiB4ICogQ0hVTktfU0laRSxcclxuICAgICAgICBsbmc6IHkgKiBDSFVOS19TSVpFLFxyXG4gICAgICAgIGNodW5rSWQ6IGAke3h9XyR7eX1gXHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnbGVhZmxldCc7XHJcbmltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJztcclxuXHJcbmRlbGV0ZSBMLkljb24uRGVmYXVsdC5wcm90b3R5cGUuX2dldEljb25Vcmw7XHJcbkwuSWNvbi5EZWZhdWx0Lm1lcmdlT3B0aW9ucyh7XHJcbiAgICBpY29uUmV0aW5hVXJsOiByZXF1aXJlKCdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1pY29uLTJ4LnBuZycpLFxyXG4gICAgaWNvblVybDogcmVxdWlyZSgnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi5wbmcnKSxcclxuICAgIHNoYWRvd1VybDogcmVxdWlyZSgnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItc2hhZG93LnBuZycpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEw7IiwiY29uc3QgQ0FDSEVfVkVSU0lPTiA9ICd2MSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FjaGVLZXkoY2h1bmtJZCkge1xyXG4gICAgcmV0dXJuIGAke0NBQ0hFX1ZFUlNJT059X2NodW5rXyR7Y2h1bmtJZH1gO1xyXG59IiwiaW1wb3J0IHsgVFlQRV9NQVAgfSBmcm9tICcuL3R5cGVNYXAuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFQlVHID0ge1xyXG4gICAgZW5hYmxlZDogd2luZG93LkFQUF9ERUJVRyA/PyBmYWxzZSxcclxuXHJcbiAgICBtZXJjdXJlOiB0cnVlLFxyXG4gICAgaW52ZW50b3J5OiB0cnVlLFxyXG4gICAgZGVsaXZlcnk6IHRydWUsXHJcbiAgICBidWlsZGluZ3M6IHRydWUsXHJcblxyXG4gICAgY2h1bmtzOiB0cnVlLFxyXG4gICAgbmV0d29yazogdHJ1ZSxcclxuICAgIGNhY2hlOiB0cnVlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2FuTG9nKHR5cGUpIHtcclxuICAgIGlmICghREVCVUcuZW5hYmxlZCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBrZXkgPSBUWVBFX01BUD8uW3R5cGVdIHx8IHR5cGU7XHJcblxyXG4gICAgcmV0dXJuIERFQlVHW2tleV0gIT09IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdMb2codHlwZSwgLi4uYXJncykge1xyXG4gICAgaWYgKCFjYW5Mb2codHlwZSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYFske1RZUEVfTUFQPy5bdHlwZV0gfHwgdHlwZX1dYCxcclxuICAgICAgICAuLi5hcmdzXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdXYXJuKHR5cGUsIC4uLmFyZ3MpIHtcclxuICAgIGlmICghY2FuTG9nKHR5cGUpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBgWyR7VFlQRV9NQVA/Llt0eXBlXSB8fCB0eXBlfV1gLFxyXG4gICAgICAgIC4uLmFyZ3NcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z0Vycm9yKHR5cGUsIC4uLmFyZ3MpIHtcclxuICAgIGlmICghY2FuTG9nKHR5cGUpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgYFske1RZUEVfTUFQPy5bdHlwZV0gfHwgdHlwZX1dYCxcclxuICAgICAgICAuLi5hcmdzXHJcbiAgICApO1xyXG59IiwiZXhwb3J0IGNvbnN0IFRZUEVfTUFQID0ge1xyXG4gICAgbWVyY3VyZTogJ01FUkNVUkUnLFxyXG4gICAgaW52ZW50b3J5OiAnSU5WRU5UT1JZJyxcclxuICAgIGRlbGl2ZXJ5OiAnREVMSVZFUlknLFxyXG4gICAgYnVpbGRpbmdzOiAnQlVJTERJTkdTJyxcclxuICAgIGNodW5rczogJ0NIVU5LUycsXHJcbiAgICBuZXR3b3JrOiAnTkVUV09SSycsXHJcbiAgICBjYWNoZTogJ0NBQ0hFJyxcclxufTsiXSwibmFtZXMiOlsiTCIsImRlYnVnTG9nIiwiQ0hVTktfU0laRSIsImdldE1hcCIsImlzR3JpZExheWVyQWN0aXZlIiwiZ3JpZExheWVyIiwibGF5ZXJHcm91cCIsInZpc2libGVDaHVua3MiLCJNYXAiLCJpbml0R3JpZExheWVyIiwibWFwIiwiem9vbSIsImdldFpvb20iLCJib3VuZHMiLCJnZXRCb3VuZHMiLCJtaW5MYXQiLCJNYXRoIiwiZmxvb3IiLCJnZXRTb3V0aCIsIm1heExhdCIsImNlaWwiLCJnZXROb3J0aCIsIm1pbkxuZyIsImdldFdlc3QiLCJtYXhMbmciLCJnZXRFYXN0IiwibmV3VmlzaWJsZSIsIlNldCIsImkiLCJfbG9vcCIsImlkIiwiY29uY2F0IiwiaiIsImFkZCIsImhhcyIsImxhdCIsImxuZyIsInJlY3QiLCJyZWN0YW5nbGUiLCJjb2xvciIsIndlaWdodCIsImZpbGxPcGFjaXR5Iiwib24iLCJzZXRTdHlsZSIsImFkZExheWVyIiwic2V0IiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJlbnRyaWVzIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJfc3RlcCR2YWx1ZSIsIl9zbGljZWRUb0FycmF5IiwidmFsdWUiLCJyZW1vdmVMYXllciIsImVyciIsImUiLCJmIiwic2l6ZSIsInNldENodW5rQ29sb3IiLCJnZXQiLCJidWlsZFJlcXVlc3QiLCJ0eXBlSWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGVfaWQiLCJnZXRCdWlsZGluZ3MiLCJ0aGVuIiwicmVzIiwianNvbiIsImdldEJ1aWxkaW5nQ29zdHMiLCJidWlsZGluZ1R5cGVJZCIsInVwZ3JhZGVCdWlsZGluZyIsImJ1aWxkaW5nSWQiLCJnZXRVcGdyYWRlSW5mbyIsImZseVRvIiwicm9hZHNTdGF0ZSIsImdldEFsbExvYWRlZFJvYWRzIiwiZ2V0QnVpbGRpbmdJbWFnZSIsInNhZmVMb2FkQ2h1bmsiLCJsb2FkVmlzaWJsZVJvYWRDaHVua3MiLCJmaW5kQ2xvc2VzdFBvaW50T25Sb2FkIiwiZmluZENsb3Nlc3RTZWdtZW50Iiwic2hvd05vdGlmaWNhdGlvbiIsImdldEFkbWluQ29vcmRzIiwiZGVidWdXYXJuIiwiZGVidWdFcnJvciIsImRyYXdCYXNlQ2lyY2xlIiwicmVtb3ZlQmFzZUNpcmNsZSIsImJhc2VNYXJrZXIiLCJiYXNlQ2lyY2xlIiwiYmFzZVBvc2l0aW9uIiwiYmFzZUNyZWF0ZWQiLCJwbGFjaW5nQmFzZSIsInByZXZpZXdNYXJrZXIiLCJwcmV2aWV3Q2lyY2xlIiwicHJldmlld1NuYXBMYXRMbmciLCJwcmV2aWV3TGluZSIsImhpZ2hsaWdodGVkU2VnbWVudCIsImN1cnJlbnRQbGF5ZXJGYWN0aW9uIiwic2V0Q3VycmVudFBsYXllckZhY3Rpb24iLCJmYWN0aW9uIiwidG9Mb3dlckNhc2UiLCJnZXRDdXJyZW50UGxheWVyRmFjdGlvbiIsImluaXRCYXNlVUkiLCJiYXNlQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2RlIiwiZGF0YXNldCIsImFsZXJ0IiwiZ2V0Q29udGFpbmVyIiwic3R5bGUiLCJjdXJzb3IiLCJfcHJldmlld1NuYXBMYXRMbmciLCJpc0Jhc2VQbGFjZW1lbnRWYWxpZCIsImNsZWFudXBQcmV2aWV3IiwiY3JlYXRlQmFzZSIsInJvYWRzIiwibGVuZ3RoIiwicmVzdWx0IiwibGF0bG5nIiwicG9pbnQiLCJpc1ZhbGlkIiwiY2lyY2xlIiwicmFkaXVzIiwiYWRkVG8iLCJtYXJrZXIiLCJwb2x5bGluZSIsIm9wYWNpdHkiLCJkYXNoQXJyYXkiLCJzZWdtZW50IiwidXBkYXRlQmFzZURpc3BsYXkiLCJ1cGRhdGVPdGhlckJhc2VzIiwiZW5hYmxlQWRtaW5Db29yZGluYXRlUGlja2VyIiwid2luZG93Iiwib3RoZXJCYXNlcyIsImV2ZXJ5IiwiYmFzZSIsImRpc3QiLCJkaXN0YW5jZSIsImJhc2VUeXBlSWQiLCJvayIsIkVycm9yIiwiZXJyb3IiLCJyZW1vdmVCYXNlIiwibWVzc2FnZSIsImxvYWRPdGhlckJhc2UiLCJwc2V1ZG8iLCJOdW1iZXIiLCJpc0Zpbml0ZSIsImlzUGxheWVyQmFzZSIsImljb24iLCJjcmVhdGVCYXNlSWNvbiIsImJpbmRQb3B1cCIsInB1c2giLCJmb3JFYWNoIiwiaGFzTGF5ZXIiLCJzZXRJY29uIiwibG9hZEJhc2VGcm9tU2VydmVyIiwiaWNvblVybCIsImljb25TaXplIiwiaWNvbkFuY2hvciIsInBvcHVwQW5jaG9yIiwidCIsInIiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93Iiwic2VsZWN0ZWRCdWlsZGluZ1R5cGUiLCJwcmV2aWV3QnVpbGRpbmdNYXJrZXIiLCJpbml0QnVpbGRNb2RlIiwiX3JlZiIsIl9jYWxsZWUiLCJidG4iLCJfY29udGV4dCIsInRhcmdldCIsImNsb3Nlc3QiLCJzZWxlY3RCdWlsZGluZ1R5cGUiLCJfeCIsIm9uTWFwQ2xpY2siLCJvbk1hcE1vdXNlTW92ZSIsIl94MiIsIl94MyIsIl9zZWxlY3RCdWlsZGluZ1R5cGUiLCJfY2FsbGVlMiIsImJ1dHRvbiIsImRhdGEiLCJfdCIsIl9jb250ZXh0MiIsImNsZWFyQnVpbGRpbmdTZWxlY3Rpb24iLCJjbGFzc0xpc3QiLCJuYW1lIiwiY29zdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlIiwiX3g0IiwiX29uTWFwQ2xpY2siLCJfY2FsbGVlMyIsInJlc3BvbnNlIiwiX3QyIiwiX2NvbnRleHQzIiwic2V0TGF0TG5nIiwiYWN0aXZhdGVCdWlsZE1vZGUiLCJxdWVyeVNlbGVjdG9yIiwiY2xpY2siLCJkZWFjdGl2YXRlQnVpbGRNb2RlIiwiaXNCdWlsZE1vZGVBY3RpdmUiLCJidWlsZGluZ01hcmtlcnMiLCJwb3B1cENvbnRlbnRMb2FkZWQiLCJjdXJyZW50UGxheWVySWQiLCJzZXRDdXJyZW50UGxheWVySWQiLCJsb2FkQnVpbGRpbmdzRnJvbURhdGEiLCJidWlsZGluZ3MiLCJBcnJheSIsImlzQXJyYXkiLCJiIiwiX2IkdHlwZSIsImNvZGUiLCJ0eXBlIiwiYnVpbGRpbmdGYWN0aW9uIiwiY3JlYXRlQnVpbGRpbmdJY29uIiwiYnVpbGRpbmdEYXRhIiwibGV2ZWwiLCJvd25lcklkIiwicHJvZHVjdGlvbiIsInJlc291cmNlX3R5cGUiLCJjcmVhdGVTaW1wbGVQb3B1cCIsImlzT3duQnVpbGRpbmciLCJsb2FkVXBncmFkZUluZm9Bc3luYyIsImJ1aWxkaW5nIiwiX2xvYWRVcGdyYWRlSW5mb0FzeW5jIiwiaHRtbCIsInNldFBvcHVwQ29udGVudCIsInN0YXR1cyIsInRleHQiLCJsb2FkQnVpbGRpbmdzIiwiYnVpbGRpbmdDb2RlIiwidW5kZWZpbmVkIiwiYWN0dWFsRmFjdGlvbiIsImJ1aWxkaW5nU2x1ZyIsInJlcGxhY2UiLCJmYWN0aW9uU2x1ZyIsImVudHJ5IiwibmV3TGV2ZWwiLCJnZXRCdWlsZGluZ1R5cGVDb3N0cyIsIl94NSIsIl9nZXRCdWlsZGluZ1R5cGVDb3N0cyIsIl90MyIsImNhbkJ1aWxkQnVpbGRpbmciLCJfeDYiLCJfY2FuQnVpbGRCdWlsZGluZyIsIl9jYWxsZWU0IiwicmVzb3VyY2VzIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJyZXNvdXJjZSIsImFtb3VudCIsIl9jb250ZXh0NCIsInF1YW50aXR5IiwicmVmcmVzaEJ1aWxkaW5nUG9wdXAiLCJfeDciLCJfcmVmcmVzaEJ1aWxkaW5nUG9wdXAiLCJfY2FsbGVlNSIsIl9jb250ZXh0NSIsImlzUG9wdXBPcGVuIiwiaW5pdE1hcCIsImxvYWRXb3JsZCIsImluaXRHUFMiLCJpbml0Tm90aWZpY2F0aW9ucyIsImVuYWJsZUxlYWZsZXREZWJ1ZyIsImN1cnJlbnRVc2VyIiwiZGVidWciLCJvcmlnaW5hbE1hcmtlciIsIm9yaWdpbmFsQ2lyY2xlIiwib3JpZ2luYWxQb2x5bGluZSIsIl9sZW4iLCJhcmdzIiwiX2tleSIsImNvbnNvbGUiLCJsb2ciLCJ0cmFjZSIsIl9sZW4yIiwiX2tleTIiLCJfbGVuMyIsIl9rZXkzIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwiZnJvbSIsInRlc3QiLCJuZXh0IiwiX3R5cGVvZiIsImRlcG9zaXRNYXJrZXJzIiwiYnVpbGRpbmdUeXBlc0NhY2hlIiwicmVzb3VyY2VUeXBlc0NhY2hlIiwibG9hZEJ1aWxkaW5nVHlwZXMiLCJfbG9hZEJ1aWxkaW5nVHlwZXMiLCJsb2FkUmVzb3VyY2VUeXBlcyIsIl9sb2FkUmVzb3VyY2VUeXBlcyIsIl90NCIsIkRFRkFVTFRfQ09MT1JTIiwiZ2V0UmVzb3VyY2VDb2xvciIsIl9yZXNvdXJjZVR5cGVzQ2FjaGUkdCIsIl9yZXNvdXJjZVR5cGVzQ2FjaGUkdDIiLCJmaW5kQnVpbGRpbmdUeXBlRm9yUmVzb3VyY2UiLCJfZmluZEJ1aWxkaW5nVHlwZUZvclJlc291cmNlIiwicmVzb3VyY2VUeXBlIiwiYnVpbGRpbmdUeXBlcyIsImJ1aWxkaW5nVHlwZSIsImZpbmQiLCJidCIsIl9idCRyZXNvdXJjZVR5cGUiLCJwcm9kdWN0aW9uX3JhdGUiLCJkZXBvc2l0TGF5ZXJzIiwiaW5pdERlcG9zaXRMYXllcnMiLCJfaW5pdERlcG9zaXRMYXllcnMiLCJjb250cm9sIiwicmVzb3VyY2VUeXBlcyIsInJ0IiwiYWRkT3ZlcmxheSIsImxhYmVsIiwibG9hZERlcG9zaXRzRm9yQ2h1bmsiLCJfbG9hZERlcG9zaXRzRm9yQ2h1bmsiLCJfY2FsbGVlNiIsImNodW5rSWQiLCJkZXBvc2l0cyIsIl90NSIsIl9jb250ZXh0NiIsInJlbmRlckRlcG9zaXRzRnJvbURhdGEiLCJmb3JtYXRDb3N0cyIsImpvaW4iLCJfcmVmMiIsImNoZWNrQ2FuQ2xhaW0iLCJfY2hlY2tDYW5DbGFpbSIsIl9jYWxsZWU3IiwiZGVwb3NpdCIsIl9yZXQiLCJfY29udGV4dDgiLCJrZXlzIiwiX3BsYXllclJlc291cmNlcyRyZXNvIiwicGxheWVyUmVzb3VyY2VzIiwiX2NvbnRleHQ3IiwiX3JlZ2VuZXJhdG9yVmFsdWVzIiwibG9hZERlcG9zaXRJbmZvQXN5bmMiLCJfeDgiLCJfeDkiLCJfbG9hZERlcG9zaXRJbmZvQXN5bmMiLCJfY2FsbGVlOCIsImRlcG9zaXRzSUQiLCJkZXBvc2l0RGF0YSIsIl90NiIsIl9jb250ZXh0OSIsImxheWVyIiwiY2lyY2xlTWFya2VyIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJmaWxsQ29sb3IiLCJjbGFpbURlcG9zaXQiLCJfcmVmMyIsInJlc3BvbnNlVGV4dCIsImRlcG9zaXRfaWQiLCJwYXJzZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiX3gwIiwiX3gxIiwibWFya2VySWNvbiIsIm1hcmtlclNoYWRvdyIsIk1hcmtlciIsIm9wdGlvbnMiLCJzaGFkb3dVcmwiLCJtYXBJbnN0YW5jZSIsIm1vdmVUaW1lb3V0IiwiaXNDaHVua01vZGUiLCJzZXRWaWV3IiwidGlsZUxheWVyIiwiYXR0cmlidXRpb24iLCJmaXJlIiwibGF5ZXJzQ29udHJvbCIsImxheWVycyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlbnRlckNodW5rTW9kZSIsImV4aXRDaHVua01vZGUiLCJfbWFwSW5zdGFuY2UiLCJhbmltYXRlIiwiZHVyYXRpb24iLCJzdGF0dXNUZXh0IiwicGxheWVycyIsImhhc0NlbnRlcmVkIiwicGxheWVyIiwiaXNNZSIsImludmFsaWRhdGVDaHVuayIsImNodW5rcyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJiZXN0UG9pbnQiLCJiZXN0RGlzdGFuY2UiLCJJbmZpbml0eSIsInJvYWQiLCJwb2ludHMiLCJhUmF3IiwiYlJhdyIsIndhcm4iLCJsYXRMbmciLCJwcm9qZWN0ZWQiLCJwcm9qZWN0UG9pbnRPblNlZ21lbnQiLCJiZXN0U2VnbWVudCIsIm1pZCIsIkEiLCJCIiwiUCIsIkFCIiwiQVAiLCJhYjIiLCJtYXgiLCJtaW4iLCJkaXN0YW5jZVRvU2VnbWVudCIsImRlYnVnUm9hZHMiLCJfbiIsIkYiLCJnZXRDYWNoZUtleSIsImxvYWRpbmdRdWV1ZSIsIk1BWF9DT05DVVJSRU5UIiwiYWN0aXZlUmVxdWVzdHMiLCJnZXRDaHVua0lkIiwieCIsIl9sb2FkVmlzaWJsZVJvYWRDaHVua3MiLCJjaHVua3NUb0xvYWQiLCJmaW5hbENodW5rc1RvTG9hZCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJfY2h1bmtJZDMiLCJfY2FjaGVLZXkiLCJjYWNoZWQiLCJfZmluYWxDaHVua3NUb0xvYWQiLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwyIiwicm9hZHNSZXNwb25zZSIsImJ1aWxkaW5nc1Jlc3BvbnNlIiwiZGVwb3NpdHNSZXNwb25zZSIsInJvYWRzRGF0YSIsImJ1aWxkaW5nc0RhdGEiLCJkZXBvc2l0c0RhdGEiLCJidWlsZGluZ3NCeUNodW5rIiwiX2kyIiwiX2ZpbmFsQ2h1bmtzVG9Mb2FkMiIsIl9yb2Fkc0RhdGEkX2NodW5rSWQiLCJfYnVpbGRpbmdzRGF0YSRfY2h1bmsiLCJfY2h1bmtJZCIsImNodW5rRGF0YSIsImhhc1JvYWRzIiwiY2FjaGVLZXkiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiX2NodW5rSWQyIiwiZ2V0VmlzaWJsZUNodW5rcyIsImZpbHRlciIsImxvYWRlZENodW5rcyIsImdldEl0ZW0iLCJEYXRlIiwibm93IiwidHMiLCJyZWZyZXNoQ2h1bmtDb2xvcnMiLCJhbGwiLCJjSWQiLCJzZXRJdGVtIiwiY2h1bmsiLCJyZWZyZXNoQ2h1bmsiLCJfcmVmcmVzaENodW5rIiwiZmV0Y2hTaW5nbGVDaHVuayIsIl9mZXRjaFNpbmdsZUNodW5rIiwiX3JvYWRzRGF0YSRjaHVua0lkIiwiX2J1aWxkaW5nc0RhdGEkY2h1bmtJIiwiX3lpZWxkJFByb21pc2UkYWxsMyIsIl95aWVsZCRQcm9taXNlJGFsbDQiLCJyb2Fkc1JlcyIsImJ1aWxkaW5nc1JlcyIsImRlcG9zaXRzUmVzIiwiY2h1bmtEZXBvc2l0cyIsIm1pblgiLCJtYXhYIiwibWluWSIsIm1heFkiLCJyb2Fkc1JlYWR5IiwiZHJhd25Sb2FkcyIsInJvYWRMYXllcnMiLCJidWlsZGluZ0xheWVycyIsImNhY2hlZFJvYWRzIiwiY2FjaGVEaXJ0eSIsIm1hcmtSb2FkQ2FjaGVEaXJ0eSIsInZhbHVlcyIsImZsYXRNYXAiLCJub3RpZiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiYmFzZUNpcmNsZXMiLCJyb2FkU2VnbWVudHMiLCJGQUNUSU9OX0NPTE9SUyIsImdldEZhY3Rpb25Db2xvciIsImJhc2VJZCIsInBsYXllckZhY3Rpb24iLCJjbGVhckFsbEJhc2VDaXJjbGVzIiwiY2xlYXIiLCJkcmF3Um9hZFNlZ21lbnQiLCJyb2FkSWQiLCJjb29yZHMiLCJyZW1vdmVSb2FkU2VnbWVudCIsImNsZWFyQWxsUm9hZFNlZ21lbnRzIiwidXBkYXRlQmFzZUNpcmNsZXMiLCJiYXNlcyIsInVwZGF0ZVJvYWRTZWdtZW50cyIsImlzUGxheWVyUm9hZCIsInNldFJvYWRTZWdtZW50Q29sb3IiLCJmb3JtYXQiLCJ0b0ZpeGVkIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic25hcFRvQ2h1bmsiLCJDSFVOS19SQURJVVMiLCJvbmNlIiwiX2UkbGF0bG5nIiwic25hcHBlZCIsImRlZmF1bHRMYXQiLCJkZWZhdWx0TG5nIiwiZ2VvbG9jYXRpb24iLCJncHNGb3VuZCIsIndhdGNoUG9zaXRpb24iLCJwb3NpdGlvbiIsInRpbWVvdXQiLCJJY29uIiwiRGVmYXVsdCIsIl9nZXRJY29uVXJsIiwibWVyZ2VPcHRpb25zIiwiaWNvblJldGluYVVybCIsInJlcXVpcmUiLCJDQUNIRV9WRVJTSU9OIiwiVFlQRV9NQVAiLCJERUJVRyIsImVuYWJsZWQiLCJfd2luZG93JEFQUF9ERUJVRyIsIkFQUF9ERUJVRyIsIm1lcmN1cmUiLCJpbnZlbnRvcnkiLCJkZWxpdmVyeSIsIm5ldHdvcmsiLCJjYWNoZSIsImNhbkxvZyIsImtleSIsIl9jb25zb2xlIiwiX2NvbnNvbGUyIiwiX2NvbnNvbGUzIl0sInNvdXJjZVJvb3QiOiIifQ==