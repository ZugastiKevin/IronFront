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
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.is-finite.js */ "./node_modules/core-js/modules/es.number.is-finite.js");
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _map_map_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../map/map.js */ "./assets/scripts/Game/map/map.js");
/* harmony import */ var _map_roads_roadsState_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../map/roads/roadsState.js */ "./assets/scripts/Game/map/roads/roadsState.js");
/* harmony import */ var _building_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./building.js */ "./assets/scripts/Game/buildings/building.js");
/* harmony import */ var _utils_chunk_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/chunk.js */ "./assets/scripts/Game/utils/chunk.js");
/* harmony import */ var _map_roads_roads_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../map/roads/roads.js */ "./assets/scripts/Game/map/roads/roads.js");
/* harmony import */ var _map_roads_roadUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../map/roads/roadUtils.js */ "./assets/scripts/Game/map/roads/roadUtils.js");
/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../notifications.js */ "./assets/scripts/Game/notifications.js");
/* harmony import */ var _utils_admin_clipboard_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../utils/admin_clipboard.js */ "./assets/scripts/Game/utils/admin_clipboard.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../utils/debug.js */ "./assets/scripts/utils/debug.js");
/* harmony import */ var _ui_drawOnMap_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../ui/drawOnMap.js */ "./assets/scripts/Game/ui/drawOnMap.js");
/* harmony import */ var _buildMode_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./buildMode.js */ "./assets/scripts/Game/buildings/buildMode.js");



























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
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_15__.getMap)();
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
      (0,_notifications_js__WEBPACK_IMPORTED_MODULE_21__.showNotification)("Clique sur la carte pour placer ta base", 'info');
      (0,_map_roads_roads_js__WEBPACK_IMPORTED_MODULE_19__.loadVisibleRoadChunks)();
    }

    // =======================
    // RETURN BASE MODE
    // =======================
    if (mode === 'return') {
      if (!basePosition) {
        alert("Aucune base !");
        return;
      }
      (0,_map_map_js__WEBPACK_IMPORTED_MODULE_15__.flyTo)(basePosition[0], basePosition[1], 16);
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
    var roads = (0,_map_roads_roadsState_js__WEBPACK_IMPORTED_MODULE_16__.getAllLoadedRoads)();
    if (!roads.length) return;
    var result = (0,_map_roads_roadUtils_js__WEBPACK_IMPORTED_MODULE_20__.findClosestPointOnRoad)(e.latlng, roads);
    if (!result.point) return;
    previewSnapLatLng = result.point;
    var isValid = isBasePlacementValid(result.point.lat, result.point.lng);
    cleanupPreview(map);
    var color = isValid ? 'green' : 'red';
    previewCircle = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_14__["default"].circle(result.point, {
      radius: 600,
      color: color,
      weight: 2,
      fillOpacity: 0
    }).addTo(map);
    previewMarker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_14__["default"].marker(result.point).addTo(map);
    previewLine = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_14__["default"].polyline([e.latlng, result.point], {
      color: 'cyan',
      weight: 2,
      opacity: 0.6,
      dashArray: '5, 5'
    }).addTo(map);
    var segment = (0,_map_roads_roadUtils_js__WEBPACK_IMPORTED_MODULE_20__.findClosestSegment)(e.latlng, roads);
    if (segment) {
      highlightedSegment = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_14__["default"].polyline(segment, {
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
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_15__.getMap)();
  (0,_notifications_js__WEBPACK_IMPORTED_MODULE_21__.showNotification)("Mode Admin activé : cliquez sur la carte", 'info');
  map.on('click', function (e) {
    (0,_utils_admin_clipboard_js__WEBPACK_IMPORTED_MODULE_22__.getAdminCoords)(e.latlng.lat, e.latlng.lng);
  });
}
window.enableAdminCoordinatePicker = enableAdminCoordinatePicker;

// =======================
// 🧹 CLEAN PREVIEW
// =======================
function cleanupPreview() {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_15__.getMap)();
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
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_15__.getMap)();
  return otherBases.every(function (base) {
    var dist = map.distance([lat, lng], [base.lat, base.lng]);
    return dist >= 1100;
  });
}

// =======================
// CREATE BASE
// =======================
function createBase(lat, lng) {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_15__.getMap)();
  placingBase = false;
  basePosition = [lat, lng];
  (0,_map_map_js__WEBPACK_IMPORTED_MODULE_15__.flyTo)(lat, lng);
  baseCircle = (0,_ui_drawOnMap_js__WEBPACK_IMPORTED_MODULE_24__.drawBaseCircle)('player_base', lat, lng, currentPlayerFaction, true);
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
    (0,_buildMode_js__WEBPACK_IMPORTED_MODULE_25__.refreshSidebar)().then(function () {
      // Ré-initialiser l'UI de base pour ré-attacher les listeners aux nouveaux boutons
      Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./base.js */ "./assets/scripts/Game/buildings/base.js")).then(function (_ref) {
        var initBaseUI = _ref.initBaseUI;
        return initBaseUI();
      });
    });
  })["catch"](function (err) {
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_23__.debugError)('bases', "Erreur création base", err);
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
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_15__.getMap)();
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
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_15__.getMap)();
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
  var isPlayerBase = faction === currentPlayerFaction;

  // Utiliser drawBaseCircle de drawOnMap.js
  var circle = (0,_ui_drawOnMap_js__WEBPACK_IMPORTED_MODULE_24__.drawBaseCircle)("other_".concat(lat, "_").concat(lng), lat, lng, faction, isPlayerBase);
  var icon = createBaseIcon(map.getZoom(), faction);
  var marker = null;
  if (icon) {
    marker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_14__["default"].marker([lat, lng], {
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
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_15__.getMap)();
  var zoom = map.getZoom();
  otherBases.forEach(function (base) {
    var icon = createBaseIcon(zoom, base.faction);
    if (!icon) {
      if (base.marker) map.removeLayer(base.marker);
      return;
    }
    if (!base.marker) {
      base.marker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_14__["default"].marker([base.lat, base.lng], {
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
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_15__.getMap)();
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
  basePosition = [lat, lng];
  baseCreated = true;

  // Utiliser drawBaseCircle de drawOnMap.js (notre base = isPlayerBase = true)
  baseCircle = (0,_ui_drawOnMap_js__WEBPACK_IMPORTED_MODULE_24__.drawBaseCircle)('player_base', lat, lng, currentPlayerFaction, true);
  updateBaseDisplay();
}

// =======================
// UPDATE BASE DISPLAY
// =======================
function updateBaseDisplay() {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_15__.getMap)();
  if (!basePosition) return;
  var icon = createBaseIcon(map.getZoom(), currentPlayerFaction);
  if (!icon) {
    if (baseMarker) map.removeLayer(baseMarker);
    return;
  }
  if (!baseMarker) {
    baseMarker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_14__["default"].marker(basePosition, {
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
  var iconUrl = (0,_building_js__WEBPACK_IMPORTED_MODULE_17__.getBuildingImage)(faction, 'base');
  return _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_14__["default"].icon({
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
/* harmony export */   isBuildModeActive: () => (/* binding */ isBuildModeActive),
/* harmony export */   refreshSidebar: () => (/* binding */ refreshSidebar)
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

            // Rafraîchir la sidebar si nécessaire
            if (data.refreshSidebar) {
              refreshSidebar();
            }
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

/**
 * Rafraîchit le contenu de la sidebar
 */
function refreshSidebar() {
  return _refreshSidebar.apply(this, arguments);
}
function _refreshSidebar() {
  _refreshSidebar = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
    var response, html, parser, doc, newSidebar, _document$querySelect, _t3;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _context4.n = 1;
          return fetch('/sidebar');
        case 1:
          response = _context4.v;
          if (!response.ok) {
            _context4.n = 3;
            break;
          }
          _context4.n = 2;
          return response.text();
        case 2:
          html = _context4.v;
          parser = new DOMParser();
          doc = parser.parseFromString(html, 'text/html');
          newSidebar = doc.querySelector('#sideBar');
          if (newSidebar) {
            (_document$querySelect = document.querySelector('#sideBar')) === null || _document$querySelect === void 0 || _document$querySelect.replaceWith(newSidebar);
            (0,_notifications_js__WEBPACK_IMPORTED_MODULE_21__.showNotification)('Sidebar actualisée', 'info');
          }
        case 3:
          _context4.n = 5;
          break;
        case 4:
          _context4.p = 4;
          _t3 = _context4.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_22__.debugError)('buildings', "Erreur lors du rafraîchissement de la sidebar", _t3);
        case 5:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 4]]);
  }));
  return _refreshSidebar.apply(this, arguments);
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

/***/ "./assets/scripts/Game/delivery/delivery.js"
/*!**************************************************!*\
  !*** ./assets/scripts/Game/delivery/delivery.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleDeliveryEvent: () => (/* binding */ handleDeliveryEvent),
/* harmony export */   initDeliveryEvents: () => (/* binding */ initDeliveryEvents),
/* harmony export */   initDeliveryLayers: () => (/* binding */ initDeliveryLayers),
/* harmony export */   loadDeliveries: () => (/* binding */ loadDeliveries)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/esnext.json.parse.js */ "./node_modules/core-js/modules/esnext.json.parse.js");
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _map_map_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../map/map.js */ "./assets/scripts/Game/map/map.js");
/* harmony import */ var _ui_drawOnMap_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../ui/drawOnMap.js */ "./assets/scripts/Game/ui/drawOnMap.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../utils/debug.js */ "./assets/scripts/utils/debug.js");
/* harmony import */ var _utils_timer_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../utils/timer.js */ "./assets/scripts/Game/utils/timer.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



































// State
var activeDeliveries = new Map();
var deliveryLayer = null;
var animationFrame = null;
var pendingEvents = [];
var truckIcon = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_29__["default"].divIcon({
  className: '',
  html: '<div style="font-size:18px">🚚</div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

// ==========================
// INIT
// ==========================
function initDeliveryEvents() {
  initDeliveryLayers();
  loadDeliveries();
  document.addEventListener('game:event', function (e) {
    var _data$faction;
    var data = e.detail;
    if (data.type !== 'delivery_update') return;
    handleDeliveryEvent({
      deliveryId: data.deliveryId,
      buildingId: data.buildingId,
      status: data.status,
      progress: data.progress,
      waypoints: data.waypoints,
      resource: data.resourceCode,
      resourceLabel: data.resourceLabel,
      quantity: data.quantity,
      estimatedTime: data.duration,
      scheduledAt: data.scheduledAt,
      faction: (_data$faction = data.faction) !== null && _data$faction !== void 0 ? _data$faction : 'default'
    });
  });
}

// ==========================
// INIT LAYERS
// ==========================
function initDeliveryLayers() {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_30__.getMap)();
  if (!map || deliveryLayer) return;
  deliveryLayer = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_29__["default"].layerGroup().addTo(map);
  startAnimation();
  pendingEvents.forEach(processDeliveryEvent);
  pendingEvents.length = 0;
}

// ==========================
// CHARGER les livraisons IN_TRANSIT depuis l'API
// ==========================
function loadDeliveries() {
  return _loadDeliveries.apply(this, arguments);
}

// ==========================
// HANDLE EVENT
// ==========================
function _loadDeliveries() {
  _loadDeliveries = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var response, deliveries, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return fetch('/api/deliveries/in-transit');
        case 1:
          response = _context.v;
          if (response.ok) {
            _context.n = 2;
            break;
          }
          return _context.a(2);
        case 2:
          _context.n = 3;
          return response.json();
        case 3:
          deliveries = _context.v;
          deliveries.forEach(function (d) {
            var deliveryData = {
              deliveryId: d.deliveryId,
              buildingId: d.buildingId,
              status: 'in_transit',
              progress: d.progress,
              scheduledAt: d.scheduledAt,
              estimatedTime: d.estimatedTime,
              waypoints: d.waypoints,
              resource: d.resource,
              resourceLabel: d.resourceLabel,
              quantity: d.quantity,
              faction: d.faction || 'default'
            };
            (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_32__.debugLog)('delivery', 'Loading delivery from API:', deliveryData);
            handleDeliveryEvent(deliveryData);
          });
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_32__.debugError)('delivery', 'Failed to load deliveries:', _t);
        case 5:
          return _context.a(2);
      }
    }, _callee, null, [[0, 4]]);
  }));
  return _loadDeliveries.apply(this, arguments);
}
function handleDeliveryEvent(data) {
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
  var key = data.deliveryId;
  if (!key) {
    console.warn('Delivery sans ID', data);
    return;
  }
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_30__.getMap)();
  if (!map) return;
  var waypoints = data.waypoints;
  if (typeof waypoints === 'string') {
    try {
      waypoints = JSON.parse(waypoints);
    } catch (_unused) {
      return;
    }
  }
  if (!Array.isArray(waypoints) || waypoints.length === 0) return;
  var latlngs = waypoints.map(function (wp) {
    return [wp.lat, wp.lng];
  });
  var faction = data.faction || 'default';
  if (activeDeliveries.has(key)) {
    var _data$progress, _data$scheduledAt, _data$progress2;
    var delivery = activeDeliveries.get(key);
    delivery.waypoints = latlngs;
    delivery.progress = (_data$progress = data.progress) !== null && _data$progress !== void 0 ? _data$progress : delivery.progress;
    delivery.estimatedTime = data.estimatedTime;
    delivery.scheduledAt = (_data$scheduledAt = data.scheduledAt) !== null && _data$scheduledAt !== void 0 ? _data$scheduledAt : delivery.scheduledAt;
    delivery.lastServerProgress = (_data$progress2 = data.progress) !== null && _data$progress2 !== void 0 ? _data$progress2 : 0;
    delivery.lastServerTime = Date.now();
    delivery.faction = faction;
  } else {
    var _data$quantity, _data$resourceLabel, _data$progress3, _data$progress4, _data$estimatedTime, _data$scheduledAt2, _data$progress5;
    var polyline = (0,_ui_drawOnMap_js__WEBPACK_IMPORTED_MODULE_31__.drawRoadSegment)("delivery-".concat(key), latlngs, faction);

    // Formater l'heure du départ prévu
    var scheduledTime = data.scheduledAt ? (0,_utils_timer_js__WEBPACK_IMPORTED_MODULE_33__.formatDate)(data.scheduledAt) : 'Inconnue';
    var marker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_29__["default"].marker(latlngs[0], {
      icon: truckIcon
    }).addTo(deliveryLayer).bindPopup("\n                <strong>Camion n\xB0".concat(key, "</strong><br>\n                Transporte : ").concat((_data$quantity = data.quantity) !== null && _data$quantity !== void 0 ? _data$quantity : '', " unit\xE9s de <strong>").concat((_data$resourceLabel = data.resourceLabel) !== null && _data$resourceLabel !== void 0 ? _data$resourceLabel : '', "</strong><br>\n                <span class=\"delivery-progress-").concat(key, "\">Progression : ").concat((_data$progress3 = data.progress) !== null && _data$progress3 !== void 0 ? _data$progress3 : 0, "%</span><br>\n            "));
    activeDeliveries.set(key, {
      marker: marker,
      polyline: polyline,
      waypoints: latlngs,
      progress: (_data$progress4 = data.progress) !== null && _data$progress4 !== void 0 ? _data$progress4 : 0,
      estimatedTime: (_data$estimatedTime = data.estimatedTime) !== null && _data$estimatedTime !== void 0 ? _data$estimatedTime : 3600,
      scheduledAt: (_data$scheduledAt2 = data.scheduledAt) !== null && _data$scheduledAt2 !== void 0 ? _data$scheduledAt2 : null,
      lastServerProgress: (_data$progress5 = data.progress) !== null && _data$progress5 !== void 0 ? _data$progress5 : 0,
      lastServerTime: Date.now(),
      resource: data.resource,
      resourceLabel: data.resourceLabel,
      quantity: data.quantity,
      faction: faction
    });
  }
}
function removeDelivery(key) {
  var delivery = activeDeliveries.get(key);
  if (!delivery) return;
  delivery.marker.remove();
  delivery.polyline.remove();
  activeDeliveries["delete"](key);
}

// ==========================
// ANIMATION LOCALE (requestAnimationFrame)
// ==========================
function startAnimation() {
  if (animationFrame) return;
  function animate() {
    var now = Date.now();
    activeDeliveries.forEach(function (delivery, key) {
      var interpolatedProgress;
      if (delivery.scheduledAt) {
        // résistant au reload de page
        var startTime = new Date(delivery.scheduledAt).getTime();
        var elapsed = (now - startTime) / 1000;
        interpolatedProgress = Math.min(100, Math.max(0, elapsed / delivery.estimatedTime * 100));
      } else {
        // fallback si pas de scheduledAt
        var elapsedSinceServer = (now - delivery.lastServerTime) / 1000;
        var progressPerSecond = 100 / delivery.estimatedTime;
        interpolatedProgress = Math.min(100, delivery.lastServerProgress + elapsedSinceServer * progressPerSecond);
      }
      var pos = interpolateAlongRoute(delivery.waypoints, interpolatedProgress / 100);
      if (pos) delivery.marker.setLatLng(pos);
      var el = document.querySelector(".delivery-progress-".concat(key));
      if (el) el.textContent = "Progression : ".concat(Math.round(interpolatedProgress), "%");
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
  var totalDist = 0;
  var segments = [];
  for (var i = 1; i < latlngs.length; i++) {
    var d = haversine(latlngs[i - 1], latlngs[i]);
    segments.push(d);
    totalDist += d;
  }
  var target = totalDist * t;
  for (var _i = 0; _i < segments.length; _i++) {
    if (target <= segments[_i]) {
      var u = target / segments[_i];
      return [latlngs[_i][0] + u * (latlngs[_i + 1][0] - latlngs[_i][0]), latlngs[_i][1] + u * (latlngs[_i + 1][1] - latlngs[_i][1])];
    }
    target -= segments[_i];
  }
  return latlngs[latlngs.length - 1];
}
function haversine(a, b) {
  var R = 6371000;
  var dLat = (b[0] - a[0]) * Math.PI / 180;
  var dLng = (b[1] - a[1]) * Math.PI / 180;
  var x = Math.pow(Math.sin(dLat / 2), 2) + Math.cos(a[0] * Math.PI / 180) * Math.cos(b[0] * Math.PI / 180) * Math.pow(Math.sin(dLng / 2), 2);
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
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
/* harmony import */ var _utils_timer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/timer.js */ "./assets/scripts/Game/utils/timer.js");
/* harmony import */ var _delivery_delivery_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery/delivery.js */ "./assets/scripts/Game/delivery/delivery.js");
/* harmony import */ var _inventory_inventory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventory/inventory.js */ "./assets/scripts/Game/inventory/inventory.js");








document.addEventListener('DOMContentLoaded', function () {
  enableLeafletDebug(false);
  (0,_map_map_js__WEBPACK_IMPORTED_MODULE_0__.initMap)(46.53972, 2.43028);
  (0,_buildings_base_js__WEBPACK_IMPORTED_MODULE_2__.initBaseUI)();
  (0,_buildings_buildMode_js__WEBPACK_IMPORTED_MODULE_3__.initBuildMode)();
  (0,_map_map_js__WEBPACK_IMPORTED_MODULE_0__.loadWorld)();
  document.body.classList.add('page-game');
  if (window.currentUser) {
    (0,_notifications_js__WEBPACK_IMPORTED_MODULE_4__.initNotifications)();
    (0,_delivery_delivery_js__WEBPACK_IMPORTED_MODULE_6__.initDeliveryEvents)();
    (0,_inventory_inventory_js__WEBPACK_IMPORTED_MODULE_7__.initInventoryEvents)();
    (0,_utils_timer_js__WEBPACK_IMPORTED_MODULE_5__.initBuildingTimers)();
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

/***/ "./assets/scripts/Game/inventory/inventory.js"
/*!****************************************************!*\
  !*** ./assets/scripts/Game/inventory/inventory.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initInventoryEvents: () => (/* binding */ initInventoryEvents)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _buildings_building_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buildings/building.js */ "./assets/scripts/Game/buildings/building.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/debug.js */ "./assets/scripts/utils/debug.js");









// ==========================
// INIT — remplace initInventoryMercure
// ==========================
function initInventoryEvents() {
  if (!window.currentUser) {
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_7__.debugWarn)('inventory', 'Aucun utilisateur connecté');
    return;
  }
  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_7__.debugLog)('inventory', 'initInventoryEvents appelé');
  document.addEventListener('game:event', function (e) {
    var data = e.detail;
    if (data.type !== 'inventory_update') return;
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_7__.debugLog)('inventory', 'Inventaire mis à jour:', data);
    handleInventoryUpdate(data);
  });
}

// ==========================
// HANDLE UPDATE
// ==========================
function handleInventoryUpdate(data) {
  var _data$resources;
  updateNavbarResources((_data$resources = data.resources) !== null && _data$resources !== void 0 ? _data$resources : data);
  var popup = document.querySelector('.building-popup');
  if (popup) {
    (0,_buildings_building_js__WEBPACK_IMPORTED_MODULE_6__.refreshBuildingPopup)(parseInt(popup.dataset.buildingId));
  }

  // Garder l'event custom pour les autres composants qui écoutent déjà
  window.dispatchEvent(new CustomEvent('inventoryUpdated', {
    detail: data
  }));
}

// ==========================
// NAVBAR
// ==========================
function updateNavbarResources(resources) {
  if (!resources) return;
  document.querySelectorAll('.resource-item').forEach(function (item) {
    var code = item.dataset.resourceCode;
    if (resources[code] !== undefined) {
      var qtyElement = item.querySelector('.resource-qty');
      if (qtyElement) {
        qtyElement.textContent = resources[code];
      }
    }
  });
}

// ==========================
// UPGRADE REQUIREMENTS
// ==========================
function checkUpgradeRequirements(popup, resourceCode, quantity) {
  var requiredElement = popup.querySelector("[data-required-".concat(resourceCode, "]"));
  if (!requiredElement) return;
  var required = parseInt(requiredElement.getAttribute("data-required-".concat(resourceCode)) || '0');
  requiredElement.classList.toggle('text-success', quantity >= required);
  requiredElement.classList.toggle('text-danger', quantity < required);
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
  return "\n        <div class=\"deposit-popup\">\n            <h3>".concat(deposit.type || 'Dépôt de resource', "</h3>\n        </div>\n    ");
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
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.json.parse.js */ "./node_modules/core-js/modules/esnext.json.parse.js");
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__);








function initNotifications() {
  document.body.addEventListener('htmx:afterSwap', function (e) {
    var events = document.querySelectorAll('[data-event]');
    events.forEach(function (el) {
      try {
        var event = JSON.parse(el.dataset.event);
        document.dispatchEvent(new CustomEvent('game:event', {
          detail: event
        }));
      } catch (err) {
        console.error('Erreur parsing event:', err);
      } finally {
        el.remove();
      }
    });
  });
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

/***/ "./assets/scripts/Game/utils/timer.js"
/*!********************************************!*\
  !*** ./assets/scripts/Game/utils/timer.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   initBuildingTimers: () => (/* binding */ initBuildingTimers)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__);









function initBuildingTimers() {
  function updateTimers() {
    document.querySelectorAll('.delivery-timer-wrapper').forEach(function (el) {
      var scheduledAt = el.dataset.scheduledAt;
      var timerEl = el.querySelector('.delivery-timer');
      if (!timerEl) return;
      if (!scheduledAt) {
        timerEl.textContent = 'Aucune livraison prévue';
        return;
      }
      var now = Date.now();
      var scheduled = new Date(scheduledAt).getTime();
      var diffSec = Math.round((scheduled - now) / 1000);
      if (diffSec > 0) {
        // Livraison pas encore partie
        var mins = Math.floor(diffSec / 60);
        var secs = diffSec % 60;
        timerEl.innerHTML = "Prochain d\xE9part dans : <strong>".concat(mins, "min ").concat(secs, "s</strong>");
      } else {
        // En transit
        var elapsed = Math.abs(diffSec);
        var _mins = Math.floor(elapsed / 60);
        var _secs = elapsed % 60;
        timerEl.innerHTML = "Convoi en route depuis : <strong>".concat(_mins, "min ").concat(_secs, "s</strong>");
      }
    });
  }

  // Mise à jour chaque seconde
  updateTimers();
  setInterval(updateTimers, 1000);
}
function formatDate(isoString) {
  return new Date(isoString).toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    hour: '2-digit',
    minute: '2-digit'
  });
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_leaflet_dist_leaflet_css-node_modules_core-js_internals_add-to-unscopabl-de41ae","vendors-node_modules_leaflet_dist_leaflet-src_js-node_modules_leaflet_dist_images_marker-icon-ce41c2"], () => (__webpack_exec__("./assets/scripts/Game/game-main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFDTCxDOzs7Ozs7Ozs7Ozs7OztBQzVETyxJQUFNOFIsUUFBUSxHQUFHO0VBQ3BCSyxPQUFPLEVBQUUsU0FBUztFQUNsQkMsU0FBUyxFQUFFLFdBQVc7RUFDdEIxVixRQUFRLEVBQUUsVUFBVTtFQUNwQnpGLFNBQVMsRUFBRSxXQUFXO0VBQ3RCbVIsTUFBTSxFQUFFLFFBQVE7RUFDaEJpSyxPQUFPLEVBQUUsU0FBUztFQUNsQkMsS0FBSyxFQUFFO0FBQ1gsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9MYXllcnMvZ3JpZExheWVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvYXBpLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvYnVpbGRpbmdzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9idWlsZGluZ3MvYnVpbGRNb2RlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvYnVpbGRpbmdzL2J1aWxkaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvZGVsaXZlcnkvZGVsaXZlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9nYW1lLW1haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9pbnZlbnRvcnkvaW52ZW50b3J5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwL2RlcG9zaXRzL2RlcG9zaXRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9yb2Fkcy9pbnZhbGlkYXRlQ2h1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvcm9hZHMvcm9hZFV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwL3JvYWRzL3JvYWRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwL3JvYWRzL3JvYWRzU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9ub3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvdWkvZHJhd09uTWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvdXRpbHMvYWRtaW5fY2xpcGJvYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvdXRpbHMvY2h1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91dGlscy9ncHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91dGlscy9zbmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvdXRpbHMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvTGVhZmxldFdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvdXRpbHMvY2FjaGVVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy91dGlscy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy91dGlscy90eXBlTWFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2cgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcbmltcG9ydCB7IENIVU5LX1NJWkUgfSBmcm9tICcuLi91dGlscy9jaHVuay5qcyc7XHJcbmltcG9ydCB7IGdldE1hcCwgaXNHcmlkTGF5ZXJBY3RpdmUgfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBncmlkTGF5ZXIgPSBMLmxheWVyR3JvdXAoKTtcclxuXHJcbmNvbnN0IHZpc2libGVDaHVua3MgPSBuZXcgTWFwKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdyaWRMYXllcigpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgaWYgKCFpc0dyaWRMYXllckFjdGl2ZSgpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgem9vbSA9IG1hcC5nZXRab29tKCk7XHJcbiAgICBpZiAoem9vbSA8IDE0KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgYm91bmRzID0gbWFwLmdldEJvdW5kcygpO1xyXG5cclxuICAgIGNvbnN0IG1pbkxhdCA9IE1hdGguZmxvb3IoYm91bmRzLmdldFNvdXRoKCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1heExhdCA9IE1hdGguY2VpbChib3VuZHMuZ2V0Tm9ydGgoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWluTG5nID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0V2VzdCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtYXhMbmcgPSBNYXRoLmNlaWwoYm91bmRzLmdldEVhc3QoKSAvIENIVU5LX1NJWkUpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Zpc2libGUgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IG1pbkxhdDsgaSA8IG1heExhdDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IG1pbkxuZzsgaiA8IG1heExuZzsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGAke2l9XyR7an1gO1xyXG4gICAgICAgICAgICBuZXdWaXNpYmxlLmFkZChpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmlzaWJsZUNodW5rcy5oYXMoaWQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhdCA9IGkgKiBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICBjb25zdCBsbmcgPSBqICogQ0hVTktfU0laRTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBMLnJlY3RhbmdsZShbXHJcbiAgICAgICAgICAgICAgICBbbGF0LCBsbmddLFxyXG4gICAgICAgICAgICAgICAgW2xhdCArIENIVU5LX1NJWkUsIGxuZyArIENIVU5LX1NJWkVdXHJcbiAgICAgICAgICAgIF0sIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiAxLFxyXG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuMTVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZWN0Lm9uKCdtb3VzZW92ZXInLCAoKSA9PiByZWN0LnNldFN0eWxlKHsgZmlsbE9wYWNpdHk6IDAuMyB9KSk7XHJcbiAgICAgICAgICAgIHJlY3Qub24oJ21vdXNlb3V0JywgKCkgPT4gcmVjdC5zZXRTdHlsZSh7IGZpbGxPcGFjaXR5OiAwLjE1IH0pKTtcclxuXHJcbiAgICAgICAgICAgIGdyaWRMYXllci5hZGRMYXllcihyZWN0KTtcclxuXHJcbiAgICAgICAgICAgIHZpc2libGVDaHVua3Muc2V0KGlkLCByZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g8J+nuSByZW1vdmUgY2V1eCBob3JzIMOpY3JhblxyXG4gICAgZm9yIChjb25zdCBbaWQsIHJlY3RdIG9mIHZpc2libGVDaHVua3MuZW50cmllcygpKSB7XHJcbiAgICAgICAgaWYgKCFuZXdWaXNpYmxlLmhhcyhpZCkpIHtcclxuICAgICAgICAgICAgZ3JpZExheWVyLnJlbW92ZUxheWVyKHJlY3QpO1xyXG4gICAgICAgICAgICB2aXNpYmxlQ2h1bmtzLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwiQ2h1bmtzIHZpc2libGVzOlwiLCB2aXNpYmxlQ2h1bmtzLnNpemUpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDSFVOSyBDT0xPUlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2h1bmtDb2xvcihpZCwgY29sb3IpIHtcclxuICAgIGlmICghaXNHcmlkTGF5ZXJBY3RpdmUoKSkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICBjb25zdCByZWN0ID0gdmlzaWJsZUNodW5rcy5nZXQoaWQpO1xyXG4gICAgaWYgKCFyZWN0KSByZXR1cm47XHJcblxyXG4gICAgcmVjdC5zZXRTdHlsZSh7XHJcbiAgICAgICAgY29sb3IsXHJcbiAgICAgICAgZmlsbE9wYWNpdHk6IDAuMlxyXG4gICAgfSk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRSZXF1ZXN0KGxhdCwgbG5nLCB0eXBlSWQpIHtcclxuICAgIHJldHVybiBmZXRjaCgnL2FwaS9idWlsZCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGxhdDogbGF0LCBsbmc6IGxuZywgdHlwZV9pZDogdHlwZUlkIH0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1aWxkaW5ncygpIHtcclxuICAgIHJldHVybiBmZXRjaCgnL2FwaS9tYXAtZGF0YScpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVpbGRpbmdDb3N0cyhidWlsZGluZ1R5cGVJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAvYXBpL2J1aWxkaW5nLXR5cGVzLyR7YnVpbGRpbmdUeXBlSWR9L2Nvc3RzYClcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGdyYWRlQnVpbGRpbmcoYnVpbGRpbmdJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAvYXBpL2J1aWxkaW5nLyR7YnVpbGRpbmdJZH0vdXBncmFkZWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVcGdyYWRlSW5mbyhidWlsZGluZ0lkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYC9hcGkvYnVpbGRpbmcvJHtidWlsZGluZ0lkfS91cGdyYWRlLWluZm9gKTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZmx5VG8sIGdldE1hcCB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5pbXBvcnQgeyByb2Fkc1N0YXRlLCBnZXRBbGxMb2FkZWRSb2FkcyB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2Fkc1N0YXRlLmpzJztcclxuaW1wb3J0IHsgZ2V0QnVpbGRpbmdJbWFnZSB9IGZyb20gJy4vYnVpbGRpbmcuanMnO1xyXG5pbXBvcnQgeyBDSFVOS19TSVpFIH0gZnJvbSAnLi4vdXRpbHMvY2h1bmsuanMnO1xyXG5pbXBvcnQgeyBzYWZlTG9hZENodW5rLCBsb2FkVmlzaWJsZVJvYWRDaHVua3MgfSBmcm9tICcuLi9tYXAvcm9hZHMvcm9hZHMuanMnO1xyXG5pbXBvcnQgeyBmaW5kQ2xvc2VzdFBvaW50T25Sb2FkLCBmaW5kQ2xvc2VzdFNlZ21lbnQgfSBmcm9tICcuLi9tYXAvcm9hZHMvcm9hZFV0aWxzLmpzJztcclxuaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4uL25vdGlmaWNhdGlvbnMuanMnO1xyXG5pbXBvcnQgeyBnZXRBZG1pbkNvb3JkcyB9IGZyb20gJy4uL3V0aWxzL2FkbWluX2NsaXBib2FyZC5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcbmltcG9ydCB7IGRyYXdCYXNlQ2lyY2xlLCByZW1vdmVCYXNlQ2lyY2xlIH0gZnJvbSAnLi4vdWkvZHJhd09uTWFwLmpzJztcclxuaW1wb3J0IHsgcmVmcmVzaFNpZGViYXIgfSBmcm9tICcuL2J1aWxkTW9kZS5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDwn6egIFNUQVRFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmxldCBiYXNlTWFya2VyID0gbnVsbDtcclxubGV0IGJhc2VDaXJjbGUgPSBudWxsO1xyXG5sZXQgYmFzZVBvc2l0aW9uID0gbnVsbDtcclxubGV0IGJhc2VDcmVhdGVkID0gZmFsc2U7XHJcbmxldCBwbGFjaW5nQmFzZSA9IGZhbHNlO1xyXG5cclxubGV0IHByZXZpZXdNYXJrZXIgPSBudWxsO1xyXG5sZXQgcHJldmlld0NpcmNsZSA9IG51bGw7XHJcbmxldCBwcmV2aWV3U25hcExhdExuZyA9IG51bGw7XHJcbmxldCBwcmV2aWV3TGluZSA9IG51bGw7XHJcbmxldCBoaWdobGlnaHRlZFNlZ21lbnQgPSBudWxsO1xyXG5cclxubGV0IGN1cnJlbnRQbGF5ZXJGYWN0aW9uID0gJ2RlZmF1bHQnO1xyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNFVCBQTEFZRVIgRkFDVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFBsYXllckZhY3Rpb24oZmFjdGlvbikge1xyXG4gICAgY3VycmVudFBsYXllckZhY3Rpb24gPSAoZmFjdGlvbiB8fCAnZGVmYXVsdCcpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVCBQTEFZRVIgRkFDVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gY3VycmVudFBsYXllckZhY3Rpb247XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVQgVUlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCYXNlVUkoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgY29uc3QgYmFzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNlQnRuJyk7XHJcblxyXG4gICAgYmFzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgbW9kZSA9IGJhc2VCdG4uZGF0YXNldC5tb2RlO1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIENSRUFURSBCQVNFIE1PREUgXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBpZiAobW9kZSA9PT0gJ2NyZWF0ZScpIHtcclxuICAgICAgICAgICAgaWYgKGJhc2VDcmVhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkJhc2UgZMOpasOgIGNyw6nDqWUgIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGxhY2luZ0Jhc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7XHJcblxyXG4gICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwiQ2xpcXVlIHN1ciBsYSBjYXJ0ZSBwb3VyIHBsYWNlciB0YSBiYXNlXCIsICdpbmZvJyk7XHJcbiAgICAgICAgICAgIGxvYWRWaXNpYmxlUm9hZENodW5rcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBSRVRVUk4gQkFTRSBNT0RFXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBpZiAobW9kZSA9PT0gJ3JldHVybicpIHtcclxuICAgICAgICAgICAgaWYgKCFiYXNlUG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQXVjdW5lIGJhc2UgIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmx5VG8oYmFzZVBvc2l0aW9uWzBdLCBiYXNlUG9zaXRpb25bMV0sIDE2KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIENMSUNLIE1BUFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcC5vbignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghcGxhY2luZ0Jhc2UgfHwgYmFzZUNyZWF0ZWQpIHJldHVybjtcclxuICAgICAgICBpZiAoIXByZXZpZXdTbmFwTGF0TG5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IHByZXZpZXdTbmFwTGF0TG5nO1xyXG5cclxuICAgICAgICBpZiAoIWlzQmFzZVBsYWNlbWVudFZhbGlkKGxhdCwgbG5nKSkge1xyXG4gICAgICAgICAgICBhbGVydChcIuKdjCBUcm9wIHByb2NoZSBkJ3VuZSBiYXNlICFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFudXBQcmV2aWV3KG1hcCk7XHJcbiAgICAgICAgY3JlYXRlQmFzZShsYXQsIGxuZyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBNT1VTRSBNT1ZFIChwcmV2aWV3IHNuYXAgcm9hZClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBtYXAub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghcGxhY2luZ0Jhc2UpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9hZHMgPSBnZXRBbGxMb2FkZWRSb2FkcygpO1xyXG5cclxuICAgICAgICBpZiAoIXJvYWRzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBmaW5kQ2xvc2VzdFBvaW50T25Sb2FkKGUubGF0bG5nLCByb2Fkcyk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQucG9pbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgcHJldmlld1NuYXBMYXRMbmcgPSByZXN1bHQucG9pbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBpc0Jhc2VQbGFjZW1lbnRWYWxpZChyZXN1bHQucG9pbnQubGF0LCByZXN1bHQucG9pbnQubG5nKTtcclxuXHJcbiAgICAgICAgY2xlYW51cFByZXZpZXcobWFwKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBpc1ZhbGlkID8gJ2dyZWVuJyA6ICdyZWQnO1xyXG5cclxuICAgICAgICBwcmV2aWV3Q2lyY2xlID0gTC5jaXJjbGUocmVzdWx0LnBvaW50LCB7XHJcbiAgICAgICAgICAgIHJhZGl1czogNjAwLFxyXG4gICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgd2VpZ2h0OiAyLFxyXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMFxyXG4gICAgICAgIH0pLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgICAgIHByZXZpZXdNYXJrZXIgPSBMLm1hcmtlcihyZXN1bHQucG9pbnQpLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgICAgIHByZXZpZXdMaW5lID0gTC5wb2x5bGluZShbZS5sYXRsbmcsIHJlc3VsdC5wb2ludF0sIHtcclxuICAgICAgICAgICAgY29sb3I6ICdjeWFuJyxcclxuICAgICAgICAgICAgd2VpZ2h0OiAyLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgICAgICAgIGRhc2hBcnJheTogJzUsIDUnXHJcbiAgICAgICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IGZpbmRDbG9zZXN0U2VnbWVudChlLmxhdGxuZywgcm9hZHMpO1xyXG5cclxuICAgICAgICBpZiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICBoaWdobGlnaHRlZFNlZ21lbnQgPSBMLnBvbHlsaW5lKHNlZ21lbnQsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAneWVsbG93JyxcclxuICAgICAgICAgICAgICAgIHdlaWdodDogNixcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOFxyXG4gICAgICAgICAgICB9KS5hZGRUbyhtYXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBVUERBVEUgVklTVUFMIEJBU0UgQU5EIE9USEVSIEJBU0VcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBtYXAub24oJ3pvb21lbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlQmFzZURpc3BsYXkoKTtcclxuICAgICAgICB1cGRhdGVPdGhlckJhc2VzKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUEFUSEZJTkRJTkcgREVCVUcgRk9SIEFETUlOIC0gQ0xJQ0sgVE8gR0VUIENPT1JESU5BVEVTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVBZG1pbkNvb3JkaW5hdGVQaWNrZXIoKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIHNob3dOb3RpZmljYXRpb24oXCJNb2RlIEFkbWluIGFjdGl2w6kgOiBjbGlxdWV6IHN1ciBsYSBjYXJ0ZVwiLCAnaW5mbycpO1xyXG4gICAgICAgIFxyXG4gICAgbWFwLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZ2V0QWRtaW5Db29yZHMoZS5sYXRsbmcubGF0LCBlLmxhdGxuZy5sbmcpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5lbmFibGVBZG1pbkNvb3JkaW5hdGVQaWNrZXIgPSBlbmFibGVBZG1pbkNvb3JkaW5hdGVQaWNrZXI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDwn6e5IENMRUFOIFBSRVZJRVdcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gY2xlYW51cFByZXZpZXcoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgcHJldmlld01hcmtlciAmJiBtYXAucmVtb3ZlTGF5ZXIocHJldmlld01hcmtlcik7XHJcbiAgICBwcmV2aWV3Q2lyY2xlICYmIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3Q2lyY2xlKTtcclxuICAgIHByZXZpZXdMaW5lICYmIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3TGluZSk7XHJcbiAgICBoaWdobGlnaHRlZFNlZ21lbnQgJiYgbWFwLnJlbW92ZUxheWVyKGhpZ2hsaWdodGVkU2VnbWVudCk7XHJcblxyXG4gICAgcHJldmlld01hcmtlciA9IG51bGw7XHJcbiAgICBwcmV2aWV3Q2lyY2xlID0gbnVsbDtcclxuICAgIHByZXZpZXdMaW5lID0gbnVsbDtcclxuICAgIGhpZ2hsaWdodGVkU2VnbWVudCA9IG51bGw7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGlzQmFzZVBsYWNlbWVudFZhbGlkKGxhdCwgbG5nKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgcmV0dXJuIG90aGVyQmFzZXMuZXZlcnkoYmFzZSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3QgPSBtYXAuZGlzdGFuY2UoXHJcbiAgICAgICAgICAgIFtsYXQsIGxuZ10sXHJcbiAgICAgICAgICAgIFtiYXNlLmxhdCwgYmFzZS5sbmddXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRpc3QgPj0gMTEwMDtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDUkVBVEUgQkFTRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBjcmVhdGVCYXNlKGxhdCwgbG5nKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgcGxhY2luZ0Jhc2UgPSBmYWxzZTtcclxuICAgIGJhc2VQb3NpdGlvbiA9IFtsYXQsIGxuZ107XHJcblxyXG4gICAgZmx5VG8obGF0LCBsbmcpO1xyXG5cclxuICAgIGJhc2VDaXJjbGUgPSBkcmF3QmFzZUNpcmNsZSgncGxheWVyX2Jhc2UnLCBsYXQsIGxuZywgY3VycmVudFBsYXllckZhY3Rpb24sIHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGJhc2VUeXBlSWQgPSAxO1xyXG4gICAgZmV0Y2goJy9hcGkvYnVpbGQnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBsYXQsXHJcbiAgICAgICAgICAgIGxuZyxcclxuICAgICAgICAgICAgdHlwZV9pZDogYmFzZVR5cGVJZFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAoIXJlcy5vaykgcmV0dXJuIHJlcy5qc29uKCkudGhlbihlcnIgPT4geyB0aHJvdyBuZXcgRXJyb3IoZXJyLmVycm9yIHx8IFwiQVBJIGVycm9yXCIpIH0pO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFNpZGViYXIoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSw6ktaW5pdGlhbGlzZXIgbCdVSSBkZSBiYXNlIHBvdXIgcsOpLWF0dGFjaGVyIGxlcyBsaXN0ZW5lcnMgYXV4IG5vdXZlYXV4IGJvdXRvbnNcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4vYmFzZS5qcycpLnRoZW4oKHsgaW5pdEJhc2VVSSB9KSA9PiBpbml0QmFzZVVJKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbilcclxuICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2Jhc2VzJywgXCJFcnJldXIgY3LDqWF0aW9uIGJhc2VcIiwgZXJyKTtcclxuICAgICAgICByZW1vdmVCYXNlKCk7XHJcbiAgICAgICAgYWxlcnQoXCJFcnJldXIgY3LDqWF0aW9uIGJhc2UgOiBcIiArIGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnJztcclxuICAgIHVwZGF0ZUJhc2VEaXNwbGF5KCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJFTU9WRSBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHJlbW92ZUJhc2UoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgYmFzZU1hcmtlciAmJiBtYXAucmVtb3ZlTGF5ZXIoYmFzZU1hcmtlcik7XHJcbiAgICBiYXNlQ2lyY2xlICYmIG1hcC5yZW1vdmVMYXllcihiYXNlQ2lyY2xlKTtcclxuXHJcbiAgICBiYXNlTWFya2VyID0gbnVsbDtcclxuICAgIGJhc2VDaXJjbGUgPSBudWxsO1xyXG4gICAgYmFzZVBvc2l0aW9uID0gbnVsbDtcclxuICAgIGJhc2VDcmVhdGVkID0gZmFsc2U7XHJcbiAgICBwbGFjaW5nQmFzZSA9IGZhbHNlO1xyXG5cclxuICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnJztcclxufVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBMT0FEIE9USEVSIEJBU0VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxubGV0IG90aGVyQmFzZXMgPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkT3RoZXJCYXNlKGxhdCwgbG5nLCBwc2V1ZG8sIGZhY3Rpb24pIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShsYXQpIHx8ICFOdW1iZXIuaXNGaW5pdGUobG5nKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGlzUGxheWVyQmFzZSA9IGZhY3Rpb24gPT09IGN1cnJlbnRQbGF5ZXJGYWN0aW9uO1xyXG5cclxuICAgIC8vIFV0aWxpc2VyIGRyYXdCYXNlQ2lyY2xlIGRlIGRyYXdPbk1hcC5qc1xyXG4gICAgY29uc3QgY2lyY2xlID0gZHJhd0Jhc2VDaXJjbGUoYG90aGVyXyR7bGF0fV8ke2xuZ31gLCBsYXQsIGxuZywgZmFjdGlvbiwgaXNQbGF5ZXJCYXNlKTtcclxuXHJcbiAgICBjb25zdCBpY29uID0gY3JlYXRlQmFzZUljb24obWFwLmdldFpvb20oKSwgZmFjdGlvbik7XHJcblxyXG4gICAgbGV0IG1hcmtlciA9IG51bGw7XHJcblxyXG4gICAgaWYgKGljb24pIHtcclxuICAgICAgICBtYXJrZXIgPSBMLm1hcmtlcihbbGF0LCBsbmddLCB7IGljb24gfSlcclxuICAgICAgICAgICAgLmFkZFRvKG1hcClcclxuICAgICAgICAgICAgLmJpbmRQb3B1cChg8J+Ple+4jyBCYXNlIGRlICR7cHNldWRvfWApO1xyXG4gICAgfVxyXG5cclxuICAgIG90aGVyQmFzZXMucHVzaCh7IGxhdCwgbG5nLCBwc2V1ZG8sIG1hcmtlciwgY2lyY2xlLCBmYWN0aW9uIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVUERBVEUgT1RIRVIgQkFTRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiB1cGRhdGVPdGhlckJhc2VzKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgY29uc3Qgem9vbSA9IG1hcC5nZXRab29tKCk7XHJcblxyXG4gICAgb3RoZXJCYXNlcy5mb3JFYWNoKGJhc2UgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBpY29uID0gY3JlYXRlQmFzZUljb24oem9vbSwgYmFzZS5mYWN0aW9uKTtcclxuXHJcbiAgICAgICAgaWYgKCFpY29uKSB7XHJcbiAgICAgICAgICAgIGlmIChiYXNlLm1hcmtlcikgbWFwLnJlbW92ZUxheWVyKGJhc2UubWFya2VyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFiYXNlLm1hcmtlcikge1xyXG4gICAgICAgICAgICBiYXNlLm1hcmtlciA9IEwubWFya2VyKFtiYXNlLmxhdCwgYmFzZS5sbmddLCB7IGljb24gfSlcclxuICAgICAgICAgICAgICAgIC5hZGRUbyhtYXApXHJcbiAgICAgICAgICAgICAgICAuYmluZFBvcHVwKGDwn4+V77iPIEJhc2UgZGUgJHtiYXNlLnBzZXVkb31gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXAuaGFzTGF5ZXIoYmFzZS5tYXJrZXIpKSBiYXNlLm1hcmtlci5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBiYXNlLm1hcmtlci5zZXRJY29uKGljb24pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExPQUQgRlJPTSBTRVJWRVJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCYXNlRnJvbVNlcnZlcihsYXQsIGxuZykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShsbmcpKSByZXR1cm47XHJcblxyXG4gICAgYmFzZVBvc2l0aW9uID0gW2xhdCwgbG5nXTtcclxuICAgIGJhc2VDcmVhdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBVdGlsaXNlciBkcmF3QmFzZUNpcmNsZSBkZSBkcmF3T25NYXAuanMgKG5vdHJlIGJhc2UgPSBpc1BsYXllckJhc2UgPSB0cnVlKVxyXG4gICAgYmFzZUNpcmNsZSA9IGRyYXdCYXNlQ2lyY2xlKCdwbGF5ZXJfYmFzZScsIGxhdCwgbG5nLCBjdXJyZW50UGxheWVyRmFjdGlvbiwgdHJ1ZSk7XHJcblxyXG4gICAgdXBkYXRlQmFzZURpc3BsYXkoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVVBEQVRFIEJBU0UgRElTUExBWVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiB1cGRhdGVCYXNlRGlzcGxheSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAoIWJhc2VQb3NpdGlvbikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbihtYXAuZ2V0Wm9vbSgpLCBjdXJyZW50UGxheWVyRmFjdGlvbik7XHJcblxyXG4gICAgaWYgKCFpY29uKSB7XHJcbiAgICAgICAgaWYgKGJhc2VNYXJrZXIpIG1hcC5yZW1vdmVMYXllcihiYXNlTWFya2VyKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFiYXNlTWFya2VyKSB7XHJcbiAgICAgICAgYmFzZU1hcmtlciA9IEwubWFya2VyKGJhc2VQb3NpdGlvbiwgeyBpY29uIH0pLmFkZFRvKG1hcCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghbWFwLmhhc0xheWVyKGJhc2VNYXJrZXIpKSBiYXNlTWFya2VyLmFkZFRvKG1hcCk7XHJcbiAgICAgICAgYmFzZU1hcmtlci5zZXRJY29uKGljb24pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDUkVBVEUgQkFTRSBJQ09OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGNyZWF0ZUJhc2VJY29uKHpvb20sIGZhY3Rpb24pIHtcclxuXHJcbiAgICBpZiAoem9vbSA8IDEzKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBzaXplID0gZmFjdGlvbiAhPT0gJ25vbWFkZXMnID8gKHpvb20gPiAxNSA/IDEwMCA6IDcwKSA6ICh6b29tID4gMTUgPyA3NSA6IDYwKTtcclxuXHJcbiAgICAvLyBUb3Vqb3VycyB1dGlsaXNlciBsJ2ljw7RuZSBkZSBsYSBmYWN0aW9uIChsZSBmYWxsYmFjayBBcGFjaGUgZ8OocmUgbGVzIDQwNClcclxuICAgIC8vIFNpIGwnaWPDtG5lIG4nZXhpc3RlIHBhcywgQXBhY2hlIHJlZGlyaWdlIHZlcnMgZGVmYXVsdCBhdXRvbWF0aXF1ZW1lbnRcclxuICAgIGNvbnN0IGljb25VcmwgPSBnZXRCdWlsZGluZ0ltYWdlKGZhY3Rpb24sICdiYXNlJyk7XHJcblxyXG4gICAgcmV0dXJuIEwuaWNvbih7XHJcbiAgICAgICAgaWNvblVybDogaWNvblVybCxcclxuICAgICAgICBpY29uU2l6ZTogW3NpemUsIHNpemVdLFxyXG4gICAgICAgIGljb25BbmNob3I6IFtzaXplIC8gMiwgc2l6ZSAvIDJdLFxyXG4gICAgICAgIHBvcHVwQW5jaG9yOiBbMCwgLXNpemUgLyAyXVxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5pbXBvcnQgeyBnZXRCdWlsZGluZ0Nvc3RzLCBidWlsZFJlcXVlc3QgfSBmcm9tICcuLi9hcGkuanMnO1xyXG5pbXBvcnQgeyBnZXRCdWlsZGluZ0ltYWdlIH0gZnJvbSAnLi9idWlsZGluZy5qcyc7XHJcbmltcG9ydCB7IHNob3dOb3RpZmljYXRpb24gfSBmcm9tICcuLi9ub3RpZmljYXRpb25zLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEJVSUxEIE1PREUgU1RBVEVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxubGV0IHNlbGVjdGVkQnVpbGRpbmdUeXBlID0gbnVsbDtcclxubGV0IHByZXZpZXdCdWlsZGluZ01hcmtlciA9IG51bGw7XHJcblxyXG4vKipcclxuICogSW5pdGlhbGlzZSBsZSBtb2RlIGNvbnN0cnVjdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCdWlsZE1vZGUoKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICAvLyBVdGlsaXNlciBsYSBkw6lsw6lnYXRpb24gZCfDqXbDqW5lbWVudHMgcG91ciBsZXMgYm91dG9ucyBkeW5hbWlxdWVzXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnRuID0gZS50YXJnZXQuY2xvc2VzdCgnLmJ1aWxkLWl0ZW0nKTtcclxuICAgICAgICBpZiAoIWJ0bikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB0eXBlSWQgPSBidG4uZGF0YXNldC50eXBlSWQ7XHJcbiAgICAgICAgaWYgKCF0eXBlSWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gU8OpbGVjdGlvbm5lciBsZSB0eXBlIGRlIGLDonRpbWVudFxyXG4gICAgICAgIGF3YWl0IHNlbGVjdEJ1aWxkaW5nVHlwZSh0eXBlSWQsIGJ0bik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbGljayBzdXIgbGEgY2FydGUgcG91ciBjb25zdHJ1aXJlXHJcbiAgICBtYXAub24oJ2NsaWNrJywgb25NYXBDbGljayk7XHJcblxyXG4gICAgLy8gTW91c2UgbW92ZSBwb3VyIHByw6l2aXN1YWxpc2VyXHJcbiAgICBtYXAub24oJ21vdXNlbW92ZScsIG9uTWFwTW91c2VNb3ZlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFPDqWxlY3Rpb25uZSB1biB0eXBlIGRlIGLDonRpbWVudCDDoCBjb25zdHJ1aXJlXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBzZWxlY3RCdWlsZGluZ1R5cGUodHlwZUlkLCBidXR0b24pIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIC8vIETDqXPDqWxlY3Rpb25uZXIgcHLDqWPDqWRlbW1lbnRcclxuICAgIGNsZWFyQnVpbGRpbmdTZWxlY3Rpb24oKTtcclxuXHJcbiAgICAvLyBHw6lyZXIgbGUgY2FzIHNww6ljaWFsIGRlIGxhIGJhc2UgKGJvdXRvbiAjYmFzZUJ0bilcclxuICAgIGlmIChidXR0b24uaWQgPT09ICdiYXNlQnRuJyAmJiB0eXBlSWQgPT0gMSkge1xyXG4gICAgICAgIC8vIExhIGJhc2UgZXN0IGfDqXLDqWUgcGFyIGJhc2UuanMsIG9uIG5lIGZhaXQgcmllbiBpY2lcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0dHJlIGVuIMOpdmlkZW5jZSBsZSBib3V0b24gc8OpbGVjdGlvbm7DqVxyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcblxyXG4gICAgLy8gUsOpY3Vww6lyZXIgbGVzIGNvw7t0c1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QnVpbGRpbmdDb3N0cyh0eXBlSWQpO1xyXG4gICAgICAgIHNlbGVjdGVkQnVpbGRpbmdUeXBlID0ge1xyXG4gICAgICAgICAgICBpZDogdHlwZUlkLFxyXG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgIGNvc3RzOiBkYXRhLmNvc3RzLFxyXG4gICAgICAgICAgICBidXR0b246IGJ1dHRvblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNob3dOb3RpZmljYXRpb24oYFPDqWxlY3Rpb25uw6k6ICR7ZGF0YS5uYW1lfS4gQ2xpcXVlIHN1ciBsYSBjYXJ0ZSBwb3VyIGNvbnN0cnVpcmUuYCwgJ2luZm8nKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyBjb8O7dHNcIiwgZSk7XHJcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbihcIkVycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyBjb8O7dHNcIiwgJ2Vycm9yJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBOZXR0b2llIGxhIHPDqWxlY3Rpb24gYWN0dWVsbGVcclxuICovXHJcbmZ1bmN0aW9uIGNsZWFyQnVpbGRpbmdTZWxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAocHJldmlld0J1aWxkaW5nTWFya2VyKSB7XHJcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdCdWlsZGluZ01hcmtlcik7XHJcbiAgICAgICAgcHJldmlld0J1aWxkaW5nTWFya2VyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RlZEJ1aWxkaW5nVHlwZSA9IG51bGw7XHJcblxyXG4gICAgLy8gUmV0aXJlciBsYSBjbGFzc2Ugc2VsZWN0ZWQgZGUgdG91cyBsZXMgYm91dG9uc1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1aWxkLWl0ZW0nKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdlc3Rpb24gZHUgY2xpY2sgc3VyIGxhIGNhcnRlXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBvbk1hcENsaWNrKGUpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghc2VsZWN0ZWRCdWlsZGluZ1R5cGUpIHJldHVybjtcclxuICAgIGlmICghcHJldmlld0J1aWxkaW5nTWFya2VyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbGF0ID0gZS5sYXRsbmcubGF0O1xyXG4gICAgY29uc3QgbG5nID0gZS5sYXRsbmcubG5nO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBidWlsZFJlcXVlc3QobGF0LCBsbmcsIHNlbGVjdGVkQnVpbGRpbmdUeXBlLmlkKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgZGVidWdMb2coJ2J1aWxkaW5ncycsIGAke3NlbGVjdGVkQnVpbGRpbmdUeXBlLm5hbWV9IGNvbnN0cnVpdCBhdmVjIHN1Y2PDqHMgIWApO1xyXG4gICAgICAgICAgICAvLyBOZXR0b3llclxyXG4gICAgICAgICAgICBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0J1aWxkaW5nTWFya2VyKTtcclxuICAgICAgICAgICAgcHJldmlld0J1aWxkaW5nTWFya2VyID0gbnVsbDtcclxuICAgICAgICAgICAgY2xlYXJCdWlsZGluZ1NlbGVjdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmFmcmHDrmNoaXIgbGEgc2lkZWJhciBzaSBuw6ljZXNzYWlyZVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZWZyZXNoU2lkZWJhcikge1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFNpZGViYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIGBFcnJldXI6ICR7ZGF0YS5lcnJvcn1gKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgbG9ycyBkZSBsYSBjb25zdHJ1Y3Rpb25cIiwgZSk7XHJcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbihcIkVycmV1ciByw6lzZWF1IGxvcnMgZGUgbGEgY29uc3RydWN0aW9uXCIsICdlcnJvcicpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogUHLDqXZpc3VhbGlzYXRpb24gZGUgbGEgcG9zaXRpb24gZGUgY29uc3RydWN0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBvbk1hcE1vdXNlTW92ZShlKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAoIXNlbGVjdGVkQnVpbGRpbmdUeXBlKSB7XHJcbiAgICAgICAgLy8gTmV0dG95ZXIgbGVzIG1hcmtlcnMgZGUgcHLDqXZpc3VhbGlzYXRpb25cclxuICAgICAgICBpZiAocHJldmlld0J1aWxkaW5nTWFya2VyKSB7XHJcbiAgICAgICAgICAgIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3QnVpbGRpbmdNYXJrZXIpO1xyXG4gICAgICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWpvdXRlciB1biBtYXJrZXIgZGUgcHLDqXZpc3VhbGlzYXRpb25cclxuICAgIGlmICghcHJldmlld0J1aWxkaW5nTWFya2VyKSB7XHJcbiAgICAgICAgcHJldmlld0J1aWxkaW5nTWFya2VyID0gTC5tYXJrZXIoW2UubGF0bG5nLmxhdCwgZS5sYXRsbmcubG5nXSkuYWRkVG8obWFwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJldmlld0J1aWxkaW5nTWFya2VyLnNldExhdExuZyhlLmxhdGxuZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBY3RpdmUgbGUgbW9kZSBjb25zdHJ1Y3Rpb24gcG91ciB1biB0eXBlIGRlIGLDonRpbWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlQnVpbGRNb2RlKHR5cGVJZCkge1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdHlwZS1pZD1cIiR7dHlwZUlkfVwiXWApO1xyXG4gICAgaWYgKGJ0bikge1xyXG4gICAgICAgIGJ0bi5jbGljaygpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRMOpc2FjdGl2ZSBsZSBtb2RlIGNvbnN0cnVjdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGVCdWlsZE1vZGUoKSB7XHJcbiAgICBjbGVhckJ1aWxkaW5nU2VsZWN0aW9uKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWw6lyaWZpZSBzaSBsZSBtb2RlIGNvbnN0cnVjdGlvbiBlc3QgYWN0aWZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0J1aWxkTW9kZUFjdGl2ZSgpIHtcclxuICAgIHJldHVybiBzZWxlY3RlZEJ1aWxkaW5nVHlwZSAhPT0gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJhZnJhw65jaGl0IGxlIGNvbnRlbnUgZGUgbGEgc2lkZWJhclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hTaWRlYmFyKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvc2lkZWJhcicpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTaWRlYmFyID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJyNzaWRlQmFyJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV3U2lkZWJhcikge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGVCYXInKT8ucmVwbGFjZVdpdGgobmV3U2lkZWJhcik7XHJcbiAgICAgICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKCdTaWRlYmFyIGFjdHVhbGlzw6llJywgJ2luZm8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGR1IHJhZnJhw65jaGlzc2VtZW50IGRlIGxhIHNpZGViYXJcIiwgZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5pbXBvcnQgeyBnZXRCdWlsZGluZ0Nvc3RzLCB1cGdyYWRlQnVpbGRpbmcsIGdldFVwZ3JhZGVJbmZvIH0gZnJvbSAnLi4vYXBpLmpzJztcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFBsYXllckZhY3Rpb24gfSBmcm9tICcuL2Jhc2UuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5cclxuLy8gQ2FjaGUgZGVzIGluZm9ybWF0aW9ucyBkZSBiw6J0aW1lbnRzXHJcbmxldCBidWlsZGluZ01hcmtlcnMgPSBuZXcgTWFwKCk7XHJcblxyXG4vLyBDYWNoZSBkZXMgcG9wdXBzIGTDqWrDoCBjaGFyZ8Opc1xyXG5sZXQgcG9wdXBDb250ZW50TG9hZGVkID0gbmV3IFNldCgpO1xyXG5cclxuLy8gSUQgZHUgam91ZXVyIGFjdGlmIChpbml0aWFsaXPDqSBkZXB1aXMgbCdBUEkpXHJcbmxldCBjdXJyZW50UGxheWVySWQgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIETDqWZpbml0IGwnSUQgZHUgam91ZXVyIGFjdGlmXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpZCAtIEwnSUQgZHUgam91ZXVyIGNvbm5lY3TDqVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRQbGF5ZXJJZChpZCkge1xyXG4gICAgY3VycmVudFBsYXllcklkID0gaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGFyZ2UgbGVzIGLDonRpbWVudHMgc3VyIGxhIGNhcnRlIGF2ZWMgbGV1cnMgcG9wdXBzIGludGVyYWN0aWZzXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGJ1aWxkaW5ncyAtIExpc3RlIGRlcyBiw6J0aW1lbnRzIMOgIGFmZmljaGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEJ1aWxkaW5nc0Zyb21EYXRhKGJ1aWxkaW5ncykge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFtYXApIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIk1hcCBub3QgaW5pdGlhbGl6ZWRcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYnVpbGRpbmdzIHx8ICFBcnJheS5pc0FycmF5KGJ1aWxkaW5ncykpIHtcclxuICAgICAgICBkZWJ1Z1dhcm4oJ2J1aWxkaW5ncycsIFwibG9hZEJ1aWxkaW5nc0Zyb21EYXRhOiBpbnZhbGlkIGJ1aWxkaW5ncyBkYXRhXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZGluZ3MuZm9yRWFjaChiID0+IHtcclxuICAgICAgICAvLyBJZ25vcmVyIGxlcyBiYXNlcyAtIGVsbGVzIHNvbnQgZ8OpcsOpZXMgcGFyIGJhc2UuanNcclxuICAgICAgICBpZiAoYi5jb2RlID09PSAnYmFzZScgfHwgYi50eXBlPy50b0xvd2VyQ2FzZSgpID09PSAnYmFzZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoYi5sYXQpIHx8ICFOdW1iZXIuaXNGaW5pdGUoYi5sbmcpKSB7XHJcbiAgICAgICAgICAgIGRlYnVnV2FybignYnVpbGRpbmdzJywgXCLinYwgQnVpbGRpbmcgaWdub3LDqSAoY29vcmQgaW52YWxpZGUpXCIsIGIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVdGlsaXNlciBsYSBmYWN0aW9uIGR1IGLDonRpbWVudCAob3UgZmFsbGJhY2sgc3VyIGxhIGZhY3Rpb24gZHUgam91ZXVyKVxyXG4gICAgICAgIGNvbnN0IGJ1aWxkaW5nRmFjdGlvbiA9IGIuZmFjdGlvbiB8fCBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBDcsOpZXIgbCdpY8O0bmUgYXZlYyBsJ2ltYWdlIGR1IGLDonRpbWVudFxyXG4gICAgICAgIGNvbnN0IGljb24gPSBjcmVhdGVCdWlsZGluZ0ljb24oYi5jb2RlLCBidWlsZGluZ0ZhY3Rpb24pO1xyXG5cclxuICAgICAgICAvLyBTdG9ja2VyIGxlcyBkb25uw6llcyBkdSBidWlsZGluZyBwb3VyIGFjY8OocyB1bHTDqXJpZXVyXHJcbiAgICAgICAgY29uc3QgYnVpbGRpbmdEYXRhID0ge1xyXG4gICAgICAgICAgICBpZDogYi5pZCxcclxuICAgICAgICAgICAgdHlwZTogYi50eXBlLFxyXG4gICAgICAgICAgICBsZXZlbDogYi5sZXZlbCxcclxuICAgICAgICAgICAgY29kZTogYi5jb2RlLFxyXG4gICAgICAgICAgICBmYWN0aW9uOiBidWlsZGluZ0ZhY3Rpb24sXHJcbiAgICAgICAgICAgIG93bmVySWQ6IGIub3duZXJJZCxcclxuICAgICAgICAgICAgcHJvZHVjdGlvbjogYi5wcm9kdWN0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgIHJlc291cmNlX3R5cGU6IGIucmVzb3VyY2VfdHlwZSB8fCBudWxsLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIENyw6llciBsZSBtYXJrZXIgYXZlYyBwb3B1cCB2aWRlIChjaGFyZ8OpIGF1IG1vbWVudCBkZSBsJ291dmVydHVyZSlcclxuICAgICAgICBjb25zdCBtYXJrZXIgPSBMLm1hcmtlcihbYi5sYXQsIGIubG5nXSwgeyBpY29uIH0pXHJcbiAgICAgICAgICAgIC5hZGRUbyhtYXApXHJcbiAgICAgICAgICAgIC5iaW5kUG9wdXAoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XHJcblxyXG4gICAgICAgIGJ1aWxkaW5nTWFya2Vycy5zZXQoYi5pZCwgeyBtYXJrZXIsIGRhdGE6IGJ1aWxkaW5nRGF0YSB9KTtcclxuXHJcbiAgICAgICAgLy8gw4ljb3V0ZXIgbCdvdXZlcnR1cmUgZGUgbGEgcG9wdXAgcG91ciBjaGFyZ2VyIGxlIGNvbnRlbnVcclxuICAgICAgICBtYXJrZXIub24oJ3BvcHVwb3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGIuaWQgJiYgaXNPd25CdWlsZGluZyhidWlsZGluZ0RhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkVXBncmFkZUluZm9Bc3luYyhiLmlkLCBtYXJrZXIsIGJ1aWxkaW5nRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogVsOpcmlmaWUgc2kgbGUgYsOidGltZW50IGFwcGFydGllbnQgYXUgam91ZXVyIGFjdGlmXHJcbiAqL1xyXG5mdW5jdGlvbiBpc093bkJ1aWxkaW5nKGJ1aWxkaW5nKSB7XHJcbiAgICByZXR1cm4gYnVpbGRpbmcub3duZXJJZCA9PT0gY3VycmVudFBsYXllcklkO1xyXG59XHJcblxyXG4vKipcclxuICogQ3LDqWUgdW4gcG9wdXAgc2ltcGxlIChzeW5jaHJvbmUpXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZykge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGRpbmctcG9wdXBcIj5cclxuICAgICAgICAgICAgPGgzPiR7YnVpbGRpbmcudHlwZSB8fCAnQsOidGltZW50J308L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoYXJnZSBsZXMgaW5mb3MgZCdhbcOpbGlvcmF0aW9uIGVuIGFycmnDqHJlLXBsYW5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRVcGdyYWRlSW5mb0FzeW5jKGJ1aWxkaW5nSWQsIG1hcmtlciwgYnVpbGRpbmdEYXRhKSB7XHJcbiAgICAvLyBOZSBwYXMgY2hhcmdlciBsZXMgaW5mb3MgZCdhbcOpbGlvcmF0aW9uIHBvdXIgbGVzIGLDonRpbWVudHMgZW5uZW1pc1xyXG4gICAgaWYgKCFpc093bkJ1aWxkaW5nKGJ1aWxkaW5nRGF0YSkpIHtcclxuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nRGF0YSkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJ1aWxkaW5nSWQpIHtcclxuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nRGF0YSkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyDDiXZpdGVyIGRlIHJlY2hhcmdlciBzaSBkw6lqw6AgY2hhcmfDqVxyXG4gICAgaWYgKHBvcHVwQ29udGVudExvYWRlZC5oYXMoYnVpbGRpbmdJZCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwb3B1cENvbnRlbnRMb2FkZWQuYWRkKGJ1aWxkaW5nSWQpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gQ2hhcmdlciBkaXJlY3RlbWVudCBsZSBjb250ZW51IGR1IHBvcHVwXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvYnVpbGRpbmdzLyR7YnVpbGRpbmdJZH0vcG9wdXAtY29udGVudGApO1xyXG5cclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICBkZWJ1Z1dhcm4oJ2J1aWxkaW5ncycsIGBFcnJldXIgQVBJIHBvcHVwLWNvbnRlbnQgKGJ1aWxkaW5nICR7YnVpbGRpbmdJZH0pOmAsIHJlcy5zdGF0dXMpO1xyXG4gICAgICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nRGF0YSkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVzLnRleHQoKTtcclxuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGh0bWwpO1xyXG4gICAgICAgIGJ1aWxkaW5nTWFya2Vycy5zZXQoYnVpbGRpbmdJZCwgeyBtYXJrZXIsIGRhdGE6IGJ1aWxkaW5nRGF0YSB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGR1IHBvcHVwXCIsIGUpO1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGFyZ2UgbGVzIGLDonRpbWVudHMgZGVwdWlzIGwnQVBJIChmb25jdGlvbiBkZSBjb21wYXRpYmlsaXTDqSlcclxuICogQGRlcHJlY2F0ZWQgVXRpbGlzZXIgbG9hZEJ1aWxkaW5nc0Zyb21EYXRhKGRhdGEpIMOgIGxhIHBsYWNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEJ1aWxkaW5ncygpIHtcclxuICAgIGZldGNoKCcvYXBpL21hcC1kYXRhJylcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgbG9hZEJ1aWxkaW5nc0Zyb21EYXRhKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGNoYXJnZW1lbnQgYsOidGltZW50c1wiLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ3LDqWUgdW5lIGljw7RuZSAobWFya2VyKSBwb3VyIHVuIGLDonRpbWVudCBhdmVjIHNvbiBpbWFnZSBzcMOpY2lmaXF1ZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGJ1aWxkaW5nQ29kZSAtIExlIGNvZGUgZHUgYsOidGltZW50IChleDogXCJiYXNlXCIsIFwiaXJvbl9taW5lXCIpLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZmFjdGlvbiAtIExhIGZhY3Rpb24gZHUgYsOidGltZW50IChvcHRpb25uZWwsIGZhbGxiYWNrIHN1ciBsZSBqb3VldXIgYWN0dWVsKS5cclxuICogQHJldHVybnMge0wuSWNvbn0gTCdpY8O0bmUgTGVhZmxldCBwZXJzb25uYWxpc8OpZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdWlsZGluZ0ljb24oYnVpbGRpbmdDb2RlLCBmYWN0aW9uID0gbnVsbCkge1xyXG4gICAgY29uc3QgYWN0dWFsRmFjdGlvbiA9IGZhY3Rpb24gfHwgZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKTtcclxuICAgIGNvbnN0IHNpemUgPSA3MDsgLy8gVGFpbGxlIHBhciBkw6lmYXV0IGRlcyBpY8O0bmVzXHJcblxyXG4gICAgcmV0dXJuIEwuaWNvbih7XHJcbiAgICAgICAgaWNvblVybDogZ2V0QnVpbGRpbmdJbWFnZShhY3R1YWxGYWN0aW9uLCBidWlsZGluZ0NvZGUpLFxyXG4gICAgICAgIGljb25TaXplOiBbc2l6ZSwgc2l6ZV0sXHJcbiAgICAgICAgaWNvbkFuY2hvcjogW3NpemUgLyAyLCBzaXplIC8gMl0sXHJcbiAgICAgICAgcG9wdXBBbmNob3I6IFswLCAtc2l6ZSAvIDJdXHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldG91cm5lIGR5bmFtaXF1ZW1lbnQgbGUgY2hlbWluIGRlIGwnaW1hZ2UgYXZlYyBmYWxsYmFjayB2ZXJzIGRlZmF1bHQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmYWN0aW9uIC0gTGUgY29kZSBvdSBub20gZGUgbGEgZmFjdGlvbiAoZXg6IFwiRW1waXJlXCIsIFwiQ2VuZHJlc1wiKS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGJ1aWxkaW5nIC0gTGUgY29kZSBkdSBiw6J0aW1lbnQgKGV4OiBcImJhc2VcIiwgXCJpcm9uX21pbmVcIikuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IExlIGNoZW1pbiBkZSBsJ2ljw7RuZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWlsZGluZ0ltYWdlKGZhY3Rpb24sIGJ1aWxkaW5nKSB7XHJcbiAgICAvLyBOb3JtYWxpc2VyIGxlIG5vbSBkdSBidWlsZGluZyBwb3VyIGwnaW1hZ2UgKHJlbXBsYWNlciBlc3BhY2VzIGV0IGNhcmFjdMOocmVzIHNww6ljaWF1eClcclxuICAgIGNvbnN0IGJ1aWxkaW5nU2x1ZyA9IGJ1aWxkaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnXycpLnJlcGxhY2UoL1teYS16MC05X10vZywgJycpO1xyXG4gICAgY29uc3QgZmFjdGlvblNsdWcgPSAoZmFjdGlvbiB8fCAnZGVmYXVsdCcpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgLy8gVG91am91cnMgdXRpbGlzZXIgbCdpY8O0bmUgZGUgbGEgZmFjdGlvbiBlbiBwcmVtaWVyXHJcbiAgICAvLyBMZSBzZXJ2ZXVyIG91IGxlIG5hdmlnYXRldXIgZ8OpcmVyYSBsZSBmYWxsYmFjayBzaSBsJ2ljw7RuZSBuJ2V4aXN0ZSBwYXNcclxuICAgIC8vIFNpIGxhIGZhY3Rpb24gZXN0ICdkZWZhdWx0JywgdXRpbGlzZXIgbCdpY8O0bmUgZGVmYXVsdCBkaXJlY3RlbWVudFxyXG4gICAgaWYgKGZhY3Rpb25TbHVnID09PSAnZGVmYXVsdCcpIHtcclxuICAgICAgICByZXR1cm4gYC9hc3NldHMvaW1hZ2VzL2J1aWxkaW5ncy9kZWZhdWx0LyR7YnVpbGRpbmdTbHVnfS5wbmdgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgL2Fzc2V0cy9pbWFnZXMvYnVpbGRpbmdzLyR7ZmFjdGlvblNsdWd9LyR7YnVpbGRpbmdTbHVnfS5wbmdgO1xyXG59XHJcblxyXG4vKipcclxuICogQW3DqWxpb3JlIHVuIGLDonRpbWVudFxyXG4gKi9cclxud2luZG93LnVwZ3JhZGVCdWlsZGluZyA9IGFzeW5jIGZ1bmN0aW9uKGJ1aWxkaW5nSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB1cGdyYWRlQnVpbGRpbmcoYnVpbGRpbmdJZCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIC8vIEludmFsaWRlciBsZSBjYWNoZSBwb3VyIGZvcmNlciBsZSByZWNoYXJnZW1lbnRcclxuICAgICAgICAgICAgcG9wdXBDb250ZW50TG9hZGVkLmRlbGV0ZShidWlsZGluZ0lkKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE1ldHRyZSDDoCBqb3VyIGxlIG1hcnF1ZXVyXHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gYnVpbGRpbmdNYXJrZXJzLmdldChidWlsZGluZ0lkKTtcclxuICAgICAgICAgICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5kYXRhLmxldmVsID0gZGF0YS5uZXdMZXZlbDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IGVudHJ5Lm1hcmtlcjtcclxuICAgICAgICAgICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoZW50cnkuZGF0YSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlY2hhcmdlciBsZXMgaW5mb3MgZCdhbcOpbGlvcmF0aW9uXHJcbiAgICAgICAgICAgICAgICBsb2FkVXBncmFkZUluZm9Bc3luYyhidWlsZGluZ0lkLCBtYXJrZXIsIGVudHJ5LmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFsZXJ0KCdCw6J0aW1lbnQgYW3DqWxpb3LDqSBhdmVjIHN1Y2PDqHMgIScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyOiBcIiArIChkYXRhLmVycm9yIHx8IFwiSW1wb3NzaWJsZSBkJ2Ftw6lsaW9yZXIgbGUgYsOidGltZW50XCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgbG9ycyBkZSBsJ2Ftw6lsaW9yYXRpb25cIiwgZSk7XHJcbiAgICAgICAgYWxlcnQoXCJFcnJldXIgcsOpc2VhdSBsb3JzIGRlIGwnYW3DqWxpb3JhdGlvblwiKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXRvdXJuZSBsZXMgaW5mb3JtYXRpb25zIHN1ciBsZXMgY2/Du3RzIGRlIGNvbnN0cnVjdGlvbiBkJ3VuIHR5cGUgZGUgYsOidGltZW50XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QnVpbGRpbmdUeXBlQ29zdHMoYnVpbGRpbmdUeXBlSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCdWlsZGluZ0Nvc3RzKGJ1aWxkaW5nVHlwZUlkKTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGNvw7t0c1wiLCBlKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFbDqXJpZmllIHNpIGxlIGpvdWV1ciBwZXV0IGNvbnN0cnVpcmUgdW4gYsOidGltZW50XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FuQnVpbGRCdWlsZGluZyhidWlsZGluZ1R5cGVJZCkge1xyXG4gICAgY29uc3QgY29zdHMgPSBhd2FpdCBnZXRCdWlsZGluZ1R5cGVDb3N0cyhidWlsZGluZ1R5cGVJZCk7XHJcbiAgICBpZiAoIWNvc3RzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wbGF5ZXItcmVzb3VyY2VzJyk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IHJlc291cmNlcyA9IHt9O1xyXG4gICAgZGF0YS5yZXNvdXJjZXMuZm9yRWFjaChyID0+IHtcclxuICAgICAgICByZXNvdXJjZXNbci50eXBlXSA9IHIucXVhbnRpdHk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IFtyZXNvdXJjZSwgYW1vdW50XSBvZiBPYmplY3QuZW50cmllcyhjb3N0cy5jb3N0cykpIHtcclxuICAgICAgICBpZiAoKHJlc291cmNlc1tyZXNvdXJjZV0gfHwgMCkgPCBhbW91bnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hCdWlsZGluZ1BvcHVwKGJ1aWxkaW5nSWQpIHtcclxuICAgIGNvbnN0IGVudHJ5ID0gYnVpbGRpbmdNYXJrZXJzLmdldChidWlsZGluZ0lkKTtcclxuXHJcbiAgICBpZiAoIWVudHJ5KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9wdGlvbm5lbCA6IHVuaXF1ZW1lbnQgc2kgbGUgcG9wdXAgZXN0IG91dmVydFxyXG4gICAgaWYgKCFlbnRyeS5tYXJrZXIuaXNQb3B1cE9wZW4oKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBsb2FkVXBncmFkZUluZm9Bc3luYyhcclxuICAgICAgICBidWlsZGluZ0lkLFxyXG4gICAgICAgIGVudHJ5Lm1hcmtlcixcclxuICAgICAgICBlbnRyeS5kYXRhXHJcbiAgICApO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcclxuaW1wb3J0IHsgZHJhd1JvYWRTZWdtZW50IH0gZnJvbSAnLi4vdWkvZHJhd09uTWFwLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uL3V0aWxzL3RpbWVyLmpzJztcclxuXHJcbi8vIFN0YXRlXHJcbmNvbnN0IGFjdGl2ZURlbGl2ZXJpZXMgPSBuZXcgTWFwKCk7XHJcbmxldCBkZWxpdmVyeUxheWVyID0gbnVsbDtcclxubGV0IGFuaW1hdGlvbkZyYW1lID0gbnVsbDtcclxuY29uc3QgcGVuZGluZ0V2ZW50cyA9IFtdO1xyXG5cclxuY29uc3QgdHJ1Y2tJY29uID0gTC5kaXZJY29uKHtcclxuICAgIGNsYXNzTmFtZTogJycsXHJcbiAgICBodG1sOiAnPGRpdiBzdHlsZT1cImZvbnQtc2l6ZToxOHB4XCI+8J+amjwvZGl2PicsXHJcbiAgICBpY29uU2l6ZTogWzIwLCAyMF0sXHJcbiAgICBpY29uQW5jaG9yOiBbMTAsIDEwXVxyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVRcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXREZWxpdmVyeUV2ZW50cygpIHtcclxuICAgIGluaXREZWxpdmVyeUxheWVycygpO1xyXG4gICAgbG9hZERlbGl2ZXJpZXMoKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnYW1lOmV2ZW50JywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gZS5kZXRhaWw7XHJcbiAgICAgICAgaWYgKGRhdGEudHlwZSAhPT0gJ2RlbGl2ZXJ5X3VwZGF0ZScpIHJldHVybjtcclxuXHJcbiAgICAgICAgaGFuZGxlRGVsaXZlcnlFdmVudCh7XHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5SWQ6ICAgIGRhdGEuZGVsaXZlcnlJZCxcclxuICAgICAgICAgICAgYnVpbGRpbmdJZDogICAgZGF0YS5idWlsZGluZ0lkLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICAgICAgICBkYXRhLnN0YXR1cyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6ICAgICAgZGF0YS5wcm9ncmVzcyxcclxuICAgICAgICAgICAgd2F5cG9pbnRzOiAgICAgZGF0YS53YXlwb2ludHMsXHJcbiAgICAgICAgICAgIHJlc291cmNlOiAgICAgIGRhdGEucmVzb3VyY2VDb2RlLFxyXG4gICAgICAgICAgICByZXNvdXJjZUxhYmVsOiBkYXRhLnJlc291cmNlTGFiZWwsXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiAgICAgIGRhdGEucXVhbnRpdHksXHJcbiAgICAgICAgICAgIGVzdGltYXRlZFRpbWU6IGRhdGEuZHVyYXRpb24sXHJcbiAgICAgICAgICAgIHNjaGVkdWxlZEF0OiAgIGRhdGEuc2NoZWR1bGVkQXQsXHJcbiAgICAgICAgICAgIGZhY3Rpb246ICAgICAgIGRhdGEuZmFjdGlvbiA/PyAnZGVmYXVsdCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5JVCBMQVlFUlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXREZWxpdmVyeUxheWVycygpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXAgfHwgZGVsaXZlcnlMYXllcikgcmV0dXJuO1xyXG4gICAgZGVsaXZlcnlMYXllciA9IEwubGF5ZXJHcm91cCgpLmFkZFRvKG1hcCk7XHJcbiAgICBzdGFydEFuaW1hdGlvbigpO1xyXG4gICAgcGVuZGluZ0V2ZW50cy5mb3JFYWNoKHByb2Nlc3NEZWxpdmVyeUV2ZW50KTtcclxuICAgIHBlbmRpbmdFdmVudHMubGVuZ3RoID0gMDtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ0hBUkdFUiBsZXMgbGl2cmFpc29ucyBJTl9UUkFOU0lUIGRlcHVpcyBsJ0FQSVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZERlbGl2ZXJpZXMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZGVsaXZlcmllcy9pbi10cmFuc2l0Jyk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGRlbGl2ZXJpZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGRlbGl2ZXJpZXMuZm9yRWFjaChkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgZGVsaXZlcnlJZDogICAgZC5kZWxpdmVyeUlkLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdJZDogICAgZC5idWlsZGluZ0lkLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAgICAgICAgJ2luX3RyYW5zaXQnLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6ICAgICAgZC5wcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgIHNjaGVkdWxlZEF0OiAgIGQuc2NoZWR1bGVkQXQsXHJcbiAgICAgICAgICAgICAgICBlc3RpbWF0ZWRUaW1lOiBkLmVzdGltYXRlZFRpbWUsXHJcbiAgICAgICAgICAgICAgICB3YXlwb2ludHM6ICAgICBkLndheXBvaW50cyxcclxuICAgICAgICAgICAgICAgIHJlc291cmNlOiAgICAgIGQucmVzb3VyY2UsXHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZUxhYmVsOiBkLnJlc291cmNlTGFiZWwsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogICAgICBkLnF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgZmFjdGlvbjogICAgICAgZC5mYWN0aW9uIHx8ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGVidWdMb2coJ2RlbGl2ZXJ5JywgJ0xvYWRpbmcgZGVsaXZlcnkgZnJvbSBBUEk6JywgZGVsaXZlcnlEYXRhKTtcclxuICAgICAgICAgICAgaGFuZGxlRGVsaXZlcnlFdmVudChkZWxpdmVyeURhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2RlbGl2ZXJ5JywgJ0ZhaWxlZCB0byBsb2FkIGRlbGl2ZXJpZXM6JywgZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEhBTkRMRSBFVkVOVFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRGVsaXZlcnlFdmVudChkYXRhKSB7XHJcbiAgICBpZiAoIWRlbGl2ZXJ5TGF5ZXIpIHtcclxuICAgICAgICBwZW5kaW5nRXZlbnRzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHJvY2Vzc0RlbGl2ZXJ5RXZlbnQoZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NEZWxpdmVyeUV2ZW50KGRhdGEpIHtcclxuICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ2RlbGl2ZXJlZCcpIHtcclxuICAgICAgICByZW1vdmVEZWxpdmVyeShkYXRhLmRlbGl2ZXJ5SWQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ2luX3RyYW5zaXQnKSB7XHJcbiAgICAgICAgdXBzZXJ0RGVsaXZlcnkoZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwc2VydERlbGl2ZXJ5KGRhdGEpIHtcclxuICAgIGNvbnN0IGtleSA9IGRhdGEuZGVsaXZlcnlJZDtcclxuICAgIGlmICgha2V5KSB7IGNvbnNvbGUud2FybignRGVsaXZlcnkgc2FucyBJRCcsIGRhdGEpOyByZXR1cm47IH1cclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHdheXBvaW50cyA9IGRhdGEud2F5cG9pbnRzO1xyXG4gICAgaWYgKHR5cGVvZiB3YXlwb2ludHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdHJ5IHsgd2F5cG9pbnRzID0gSlNPTi5wYXJzZSh3YXlwb2ludHMpOyB9IGNhdGNoIHsgcmV0dXJuOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkod2F5cG9pbnRzKSB8fCB3YXlwb2ludHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbGF0bG5ncyA9IHdheXBvaW50cy5tYXAod3AgPT4gW3dwLmxhdCwgd3AubG5nXSk7XHJcbiAgICBjb25zdCBmYWN0aW9uID0gZGF0YS5mYWN0aW9uIHx8ICdkZWZhdWx0JztcclxuXHJcbiAgICBpZiAoYWN0aXZlRGVsaXZlcmllcy5oYXMoa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gYWN0aXZlRGVsaXZlcmllcy5nZXQoa2V5KTtcclxuICAgICAgICBkZWxpdmVyeS53YXlwb2ludHMgICAgICAgICAgPSBsYXRsbmdzO1xyXG4gICAgICAgIGRlbGl2ZXJ5LnByb2dyZXNzICAgICAgICAgICA9IGRhdGEucHJvZ3Jlc3MgPz8gZGVsaXZlcnkucHJvZ3Jlc3M7XHJcbiAgICAgICAgZGVsaXZlcnkuZXN0aW1hdGVkVGltZSAgICAgID0gZGF0YS5lc3RpbWF0ZWRUaW1lO1xyXG4gICAgICAgIGRlbGl2ZXJ5LnNjaGVkdWxlZEF0ICAgICAgICA9IGRhdGEuc2NoZWR1bGVkQXQgPz8gZGVsaXZlcnkuc2NoZWR1bGVkQXQ7XHJcbiAgICAgICAgZGVsaXZlcnkubGFzdFNlcnZlclByb2dyZXNzID0gZGF0YS5wcm9ncmVzcyA/PyAwO1xyXG4gICAgICAgIGRlbGl2ZXJ5Lmxhc3RTZXJ2ZXJUaW1lICAgICA9IERhdGUubm93KCk7XHJcbiAgICAgICAgZGVsaXZlcnkuZmFjdGlvbiAgICAgICAgICAgID0gZmFjdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcG9seWxpbmUgPSBkcmF3Um9hZFNlZ21lbnQoYGRlbGl2ZXJ5LSR7a2V5fWAsIGxhdGxuZ3MsIGZhY3Rpb24pO1xyXG5cclxuICAgICAgICAvLyBGb3JtYXRlciBsJ2hldXJlIGR1IGTDqXBhcnQgcHLDqXZ1XHJcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVkVGltZSA9IGRhdGEuc2NoZWR1bGVkQXQgPyBmb3JtYXREYXRlKGRhdGEuc2NoZWR1bGVkQXQpIDogJ0luY29ubnVlJztcclxuXHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gTC5tYXJrZXIobGF0bG5nc1swXSwgeyBpY29uOiB0cnVja0ljb24gfSlcclxuICAgICAgICAgICAgLmFkZFRvKGRlbGl2ZXJ5TGF5ZXIpXHJcbiAgICAgICAgICAgIC5iaW5kUG9wdXAoYFxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5DYW1pb24gbsKwJHtrZXl9PC9zdHJvbmc+PGJyPlxyXG4gICAgICAgICAgICAgICAgVHJhbnNwb3J0ZSA6ICR7ZGF0YS5xdWFudGl0eSA/PyAnJ30gdW5pdMOpcyBkZSA8c3Ryb25nPiR7ZGF0YS5yZXNvdXJjZUxhYmVsID8/ICcnfTwvc3Ryb25nPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVsaXZlcnktcHJvZ3Jlc3MtJHtrZXl9XCI+UHJvZ3Jlc3Npb24gOiAke2RhdGEucHJvZ3Jlc3MgPz8gMH0lPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgYCk7XHJcblxyXG4gICAgICAgIGFjdGl2ZURlbGl2ZXJpZXMuc2V0KGtleSwge1xyXG4gICAgICAgICAgICBtYXJrZXIsXHJcbiAgICAgICAgICAgIHBvbHlsaW5lLFxyXG4gICAgICAgICAgICB3YXlwb2ludHM6ICAgICAgICAgIGxhdGxuZ3MsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAgICAgICAgICAgZGF0YS5wcm9ncmVzcyA/PyAwLFxyXG4gICAgICAgICAgICBlc3RpbWF0ZWRUaW1lOiAgICAgIGRhdGEuZXN0aW1hdGVkVGltZSA/PyAzNjAwLFxyXG4gICAgICAgICAgICBzY2hlZHVsZWRBdDogICAgICAgIGRhdGEuc2NoZWR1bGVkQXQgPz8gbnVsbCxcclxuICAgICAgICAgICAgbGFzdFNlcnZlclByb2dyZXNzOiBkYXRhLnByb2dyZXNzID8/IDAsXHJcbiAgICAgICAgICAgIGxhc3RTZXJ2ZXJUaW1lOiAgICAgRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgcmVzb3VyY2U6ICAgICAgICAgICBkYXRhLnJlc291cmNlLFxyXG4gICAgICAgICAgICByZXNvdXJjZUxhYmVsOiAgICAgIGRhdGEucmVzb3VyY2VMYWJlbCxcclxuICAgICAgICAgICAgcXVhbnRpdHk6ICAgICAgICAgICBkYXRhLnF1YW50aXR5LFxyXG4gICAgICAgICAgICBmYWN0aW9uLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVEZWxpdmVyeShrZXkpIHtcclxuICAgIGNvbnN0IGRlbGl2ZXJ5ID0gYWN0aXZlRGVsaXZlcmllcy5nZXQoa2V5KTtcclxuICAgIGlmICghZGVsaXZlcnkpIHJldHVybjtcclxuICAgIGRlbGl2ZXJ5Lm1hcmtlci5yZW1vdmUoKTtcclxuICAgIGRlbGl2ZXJ5LnBvbHlsaW5lLnJlbW92ZSgpO1xyXG4gICAgYWN0aXZlRGVsaXZlcmllcy5kZWxldGUoa2V5KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQU5JTUFUSU9OIExPQ0FMRSAocmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcclxuICAgIGlmIChhbmltYXRpb25GcmFtZSkgcmV0dXJuO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgYWN0aXZlRGVsaXZlcmllcy5mb3JFYWNoKChkZWxpdmVyeSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbnRlcnBvbGF0ZWRQcm9ncmVzcztcclxuXHJcbiAgICAgICAgICAgIGlmIChkZWxpdmVyeS5zY2hlZHVsZWRBdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gcsOpc2lzdGFudCBhdSByZWxvYWQgZGUgcGFnZVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoZGVsaXZlcnkuc2NoZWR1bGVkQXQpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgICA9IChub3cgLSBzdGFydFRpbWUpIC8gMTAwMDtcclxuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZFByb2dyZXNzID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgubWF4KDAsIChlbGFwc2VkIC8gZGVsaXZlcnkuZXN0aW1hdGVkVGltZSkgKiAxMDApXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gZmFsbGJhY2sgc2kgcGFzIGRlIHNjaGVkdWxlZEF0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGFwc2VkU2luY2VTZXJ2ZXIgPSAobm93IC0gZGVsaXZlcnkubGFzdFNlcnZlclRpbWUpIC8gMTAwMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzUGVyU2Vjb25kICA9IDEwMCAvIGRlbGl2ZXJ5LmVzdGltYXRlZFRpbWU7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRQcm9ncmVzcyA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBkZWxpdmVyeS5sYXN0U2VydmVyUHJvZ3Jlc3MgKyAoZWxhcHNlZFNpbmNlU2VydmVyICogcHJvZ3Jlc3NQZXJTZWNvbmQpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBpbnRlcnBvbGF0ZUFsb25nUm91dGUoZGVsaXZlcnkud2F5cG9pbnRzLCBpbnRlcnBvbGF0ZWRQcm9ncmVzcyAvIDEwMCk7XHJcbiAgICAgICAgICAgIGlmIChwb3MpIGRlbGl2ZXJ5Lm1hcmtlci5zZXRMYXRMbmcocG9zKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRlbGl2ZXJ5LXByb2dyZXNzLSR7a2V5fWApO1xyXG4gICAgICAgICAgICBpZiAoZWwpIGVsLnRleHRDb250ZW50ID0gYFByb2dyZXNzaW9uIDogJHtNYXRoLnJvdW5kKGludGVycG9sYXRlZFByb2dyZXNzKX0lYDtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnRlcnBvbGF0ZWRQcm9ncmVzcyA+PSAxMDApIHJlbW92ZURlbGl2ZXJ5KGtleSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJTlRFUlBPTEFUSU9OIHN1ciBsYSBwb2x5bGlnbmVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBbG9uZ1JvdXRlKGxhdGxuZ3MsIHQpIHtcclxuICAgIGlmICghbGF0bG5ncyB8fCBsYXRsbmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAodCA8PSAwKSByZXR1cm4gbGF0bG5nc1swXTtcclxuICAgIGlmICh0ID49IDEpIHJldHVybiBsYXRsbmdzW2xhdGxuZ3MubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgbGV0IHRvdGFsRGlzdCA9IDA7XHJcbiAgICBjb25zdCBzZWdtZW50cyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsYXRsbmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZCA9IGhhdmVyc2luZShsYXRsbmdzW2kgLSAxXSwgbGF0bG5nc1tpXSk7XHJcbiAgICAgICAgc2VnbWVudHMucHVzaChkKTtcclxuICAgICAgICB0b3RhbERpc3QgKz0gZDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGFyZ2V0ID0gdG90YWxEaXN0ICogdDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGFyZ2V0IDw9IHNlZ21lbnRzW2ldKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHUgPSB0YXJnZXQgLyBzZWdtZW50c1tpXTtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIGxhdGxuZ3NbaV1bMF0gKyB1ICogKGxhdGxuZ3NbaSArIDFdWzBdIC0gbGF0bG5nc1tpXVswXSksXHJcbiAgICAgICAgICAgICAgICBsYXRsbmdzW2ldWzFdICsgdSAqIChsYXRsbmdzW2kgKyAxXVsxXSAtIGxhdGxuZ3NbaV1bMV0pLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YXJnZXQgLT0gc2VnbWVudHNbaV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxhdGxuZ3NbbGF0bG5ncy5sZW5ndGggLSAxXTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGF2ZXJzaW5lKGEsIGIpIHtcclxuICAgIGNvbnN0IFIgPSA2MzcxMDAwO1xyXG4gICAgY29uc3QgZExhdCA9IChiWzBdIC0gYVswXSkgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgY29uc3QgZExuZyA9IChiWzFdIC0gYVsxXSkgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgY29uc3QgeCA9IE1hdGguc2luKGRMYXQgLyAyKSAqKiAyXHJcbiAgICAgICAgICAgICsgTWF0aC5jb3MoYVswXSAqIE1hdGguUEkgLyAxODApICogTWF0aC5jb3MoYlswXSAqIE1hdGguUEkgLyAxODApXHJcbiAgICAgICAgICAgICogTWF0aC5zaW4oZExuZyAvIDIpICoqIDI7XHJcbiAgICByZXR1cm4gUiAqIDIgKiBNYXRoLmF0YW4yKE1hdGguc3FydCh4KSwgTWF0aC5zcXJ0KDEgLSB4KSk7XHJcbn0iLCJpbXBvcnQgeyBpbml0TWFwLCBsb2FkV29ybGQgfSBmcm9tICcuL21hcC9tYXAuanMnO1xyXG5pbXBvcnQgeyBpbml0R1BTIH0gZnJvbSAnLi91dGlscy9ncHMuanMnO1xyXG5pbXBvcnQgeyBpbml0QmFzZVVJIH0gZnJvbSAnLi9idWlsZGluZ3MvYmFzZS5qcyc7XHJcbmltcG9ydCB7IGluaXRCdWlsZE1vZGUgfSBmcm9tICcuL2J1aWxkaW5ncy9idWlsZE1vZGUuanMnO1xyXG5pbXBvcnQgeyBpbml0Tm90aWZpY2F0aW9ucyB9IGZyb20gJy4vbm90aWZpY2F0aW9ucy5qcyc7XHJcbmltcG9ydCB7IGluaXRCdWlsZGluZ1RpbWVycyB9IGZyb20gJy4vdXRpbHMvdGltZXIuanMnO1xyXG5pbXBvcnQgeyBpbml0RGVsaXZlcnlFdmVudHMgfSBmcm9tICcuL2RlbGl2ZXJ5L2RlbGl2ZXJ5LmpzJztcclxuaW1wb3J0IHsgaW5pdEludmVudG9yeUV2ZW50cyB9IGZyb20gJy4vaW52ZW50b3J5L2ludmVudG9yeS5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cclxuICAgIGVuYWJsZUxlYWZsZXREZWJ1ZyhmYWxzZSk7XHJcblxyXG4gICAgaW5pdE1hcCg0Ni41Mzk3MiwgMi40MzAyOCk7XHJcblxyXG4gICAgaW5pdEJhc2VVSSgpO1xyXG4gICAgaW5pdEJ1aWxkTW9kZSgpO1xyXG4gICAgbG9hZFdvcmxkKCk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdwYWdlLWdhbWUnKTtcclxuXHJcbiAgICBpZiAod2luZG93LmN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgaW5pdE5vdGlmaWNhdGlvbnMoKTtcclxuICAgICAgICBpbml0RGVsaXZlcnlFdmVudHMoKTtcclxuICAgICAgICBpbml0SW52ZW50b3J5RXZlbnRzKCk7XHJcbiAgICAgICAgaW5pdEJ1aWxkaW5nVGltZXJzKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUxlYWZsZXREZWJ1ZyhkZWJ1ZyA9IGZhbHNlKSB7XHJcblxyXG4gICAgaWYgKCFkZWJ1ZykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG9yaWdpbmFsTWFya2VyID0gTC5tYXJrZXI7XHJcbiAgICBjb25zdCBvcmlnaW5hbENpcmNsZSA9IEwuY2lyY2xlO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxQb2x5bGluZSA9IEwucG9seWxpbmU7XHJcblxyXG4gICAgTC5tYXJrZXIgPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+nqCBNQVJLRVIgQ0FMTDpcIiwgYXJncyk7XHJcbiAgICAgICAgY29uc29sZS50cmFjZShcIk1BUktFUiBTVEFDS1wiKTtcclxuICAgICAgICByZXR1cm4gb3JpZ2luYWxNYXJrZXIuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEwuY2lyY2xlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfp6ggQ0lSQ0xFIENBTEw6XCIsIGFyZ3MpO1xyXG4gICAgICAgIGNvbnNvbGUudHJhY2UoXCJDSVJDTEUgU1RBQ0tcIik7XHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQ2lyY2xlLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBMLnBvbHlsaW5lID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfp6ggUE9MWUxJTkUgQ0FMTDpcIiwgYXJncyk7XHJcbiAgICAgICAgY29uc29sZS50cmFjZShcIlBPTFlMSU5FIFNUQUNLXCIpO1xyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFBvbHlsaW5lLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7IHJlZnJlc2hCdWlsZGluZ1BvcHVwIH0gZnJvbSAnLi4vYnVpbGRpbmdzL2J1aWxkaW5nLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVQg4oCUIHJlbXBsYWNlIGluaXRJbnZlbnRvcnlNZXJjdXJlXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0SW52ZW50b3J5RXZlbnRzKCkge1xyXG4gICAgaWYgKCF3aW5kb3cuY3VycmVudFVzZXIpIHtcclxuICAgICAgICBkZWJ1Z1dhcm4oJ2ludmVudG9yeScsICdBdWN1biB1dGlsaXNhdGV1ciBjb25uZWN0w6knKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZGVidWdMb2coJ2ludmVudG9yeScsICdpbml0SW52ZW50b3J5RXZlbnRzIGFwcGVsw6knKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnYW1lOmV2ZW50JywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gZS5kZXRhaWw7XHJcbiAgICAgICAgaWYgKGRhdGEudHlwZSAhPT0gJ2ludmVudG9yeV91cGRhdGUnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGRlYnVnTG9nKCdpbnZlbnRvcnknLCAnSW52ZW50YWlyZSBtaXMgw6Agam91cjonLCBkYXRhKTtcclxuICAgICAgICBoYW5kbGVJbnZlbnRvcnlVcGRhdGUoZGF0YSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSEFORExFIFVQREFURVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBoYW5kbGVJbnZlbnRvcnlVcGRhdGUoZGF0YSkge1xyXG4gICAgdXBkYXRlTmF2YmFyUmVzb3VyY2VzKGRhdGEucmVzb3VyY2VzID8/IGRhdGEpO1xyXG5cclxuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1aWxkaW5nLXBvcHVwJyk7XHJcbiAgICBpZiAocG9wdXApIHtcclxuICAgICAgICByZWZyZXNoQnVpbGRpbmdQb3B1cChwYXJzZUludChwb3B1cC5kYXRhc2V0LmJ1aWxkaW5nSWQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHYXJkZXIgbCdldmVudCBjdXN0b20gcG91ciBsZXMgYXV0cmVzIGNvbXBvc2FudHMgcXVpIMOpY291dGVudCBkw6lqw6BcclxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW52ZW50b3J5VXBkYXRlZCcsIHsgZGV0YWlsOiBkYXRhIH0pKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTkFWQkFSXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHVwZGF0ZU5hdmJhclJlc291cmNlcyhyZXNvdXJjZXMpIHtcclxuICAgIGlmICghcmVzb3VyY2VzKSByZXR1cm47XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc291cmNlLWl0ZW0nKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBpdGVtLmRhdGFzZXQucmVzb3VyY2VDb2RlO1xyXG4gICAgICAgIGlmIChyZXNvdXJjZXNbY29kZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBxdHlFbGVtZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcucmVzb3VyY2UtcXR5Jyk7XHJcbiAgICAgICAgICAgIGlmIChxdHlFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBxdHlFbGVtZW50LnRleHRDb250ZW50ID0gcmVzb3VyY2VzW2NvZGVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVQR1JBREUgUkVRVUlSRU1FTlRTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGNoZWNrVXBncmFkZVJlcXVpcmVtZW50cyhwb3B1cCwgcmVzb3VyY2VDb2RlLCBxdWFudGl0eSkge1xyXG4gICAgY29uc3QgcmVxdWlyZWRFbGVtZW50ID0gcG9wdXAucXVlcnlTZWxlY3RvcihgW2RhdGEtcmVxdWlyZWQtJHtyZXNvdXJjZUNvZGV9XWApO1xyXG4gICAgaWYgKCFyZXF1aXJlZEVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCByZXF1aXJlZCA9IHBhcnNlSW50KFxyXG4gICAgICAgIHJlcXVpcmVkRWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtcmVxdWlyZWQtJHtyZXNvdXJjZUNvZGV9YCkgfHwgJzAnXHJcbiAgICApO1xyXG5cclxuICAgIHJlcXVpcmVkRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCd0ZXh0LXN1Y2Nlc3MnLCBxdWFudGl0eSA+PSByZXF1aXJlZCk7XHJcbiAgICByZXF1aXJlZEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgndGV4dC1kYW5nZXInLCAgcXVhbnRpdHkgPCByZXF1aXJlZCk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG5jb25zdCBkZXBvc2l0TWFya2VycyA9IG5ldyBNYXAoKTtcclxuXHJcbi8vIENhY2hlIGRlcyBwb3B1cHMgZMOpasOgIGNoYXJnw6lzXHJcbmNvbnN0IHBvcHVwQ29udGVudExvYWRlZCA9IG5ldyBTZXQoKTtcclxuXHJcbi8vIENhY2hlIGRlcyB0eXBlcyBkZSByZXNzb3VyY2VzXHJcbmxldCBidWlsZGluZ1R5cGVzQ2FjaGUgPSBudWxsO1xyXG5sZXQgcmVzb3VyY2VUeXBlc0NhY2hlID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBDaGFyZ2UgbGVzIHR5cGVzIGRlIHJlc3NvdXJjZXMgZGVwdWlzIGwnQVBJXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBsb2FkQnVpbGRpbmdUeXBlcygpIHtcclxuICAgIGlmIChidWlsZGluZ1R5cGVzQ2FjaGUpIHJldHVybiBidWlsZGluZ1R5cGVzQ2FjaGU7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2J1aWxkaW5nLXR5cGVzYCk7XHJcbiAgICAgICAgYnVpbGRpbmdUeXBlc0NhY2hlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBidWlsZGluZ1R5cGVzQ2FjaGU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIHR5cGVzIGRlIHJlc3NvdXJjZXNcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkUmVzb3VyY2VUeXBlcygpIHtcclxuICAgIGlmIChyZXNvdXJjZVR5cGVzQ2FjaGUpIHJldHVybiByZXNvdXJjZVR5cGVzQ2FjaGU7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3Jlc291cmNlLXR5cGVzYCk7XHJcbiAgICAgICAgcmVzb3VyY2VUeXBlc0NhY2hlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiByZXNvdXJjZVR5cGVzQ2FjaGU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIHR5cGVzIGRlIHJlc3NvdXJjZXNcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBNYXBwaW5nIGRlcyBjb3VsZXVycyBwYXIgZMOpZmF1dFxyXG5jb25zdCBERUZBVUxUX0NPTE9SUyA9IHtcclxuICAgICdpcm9uJzogJyM3ZjhjOGQnLFxyXG4gICAgJ29pbCc6ICcjZjFjNDBmJyxcclxuICAgICdjb2FsJzogJyMyYzNlNTAnLFxyXG4gICAgJ3J1YmJlcic6ICcjMjdhZTYwJyxcclxuICAgICdiYXV4aXRlJzogJyNlNjdlMjInLFxyXG4gICAgJ3JhcmVfZWFydGgnOiAnIzhlNDRhZCdcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXRvdXJuZSBsYSBjb3VsZXVyIHBvdXIgdW4gdHlwZSBkZSByZXNzb3VyY2UgKHN5bmNocm9uZSAtIHV0aWxpc2UgbGUgY2FjaGUpXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZXNvdXJjZUNvbG9yKHR5cGUpIHtcclxuICAgIGlmIChyZXNvdXJjZVR5cGVzQ2FjaGUpIHJldHVybiAocmVzb3VyY2VUeXBlc0NhY2hlICYmIHJlc291cmNlVHlwZXNDYWNoZVt0eXBlXT8uY29sb3IpIHx8IERFRkFVTFRfQ09MT1JTW3R5cGVdIHx8ICcjZmZmZmZmJztcclxuXHJcbiAgICBsb2FkUmVzb3VyY2VUeXBlcygpO1xyXG5cclxuICAgIHJldHVybiAocmVzb3VyY2VUeXBlc0NhY2hlICYmIHJlc291cmNlVHlwZXNDYWNoZVt0eXBlXT8uY29sb3IpIHx8IERFRkFVTFRfQ09MT1JTW3R5cGVdIHx8ICcjZmZmZmZmJztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyb3V2ZSBsZSB0eXBlIGRlIGLDonRpbWVudCAobWluZSkgcG91ciB1bmUgcmVzc291cmNlIGRvbm7DqWVcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZShyZXNvdXJjZVR5cGUpIHtcclxuICAgIGNvbnN0IGJ1aWxkaW5nVHlwZXMgPSBhd2FpdCBsb2FkQnVpbGRpbmdUeXBlcygpO1xyXG5cclxuICAgIC8vIENoZXJjaGVyIHVuIGLDonRpbWVudCBxdWkgcHJvZHVpdCBjZXR0ZSByZXNzb3VyY2UgKHByb2R1Y3Rpb25fcmF0ZSA+IDApXHJcbiAgICBjb25zdCBidWlsZGluZ1R5cGUgPSBidWlsZGluZ1R5cGVzLmZpbmQoYnQgPT4ge1xyXG4gICAgICAgIHJldHVybiAoYnQucmVzb3VyY2VfdHlwZSA9PT0gcmVzb3VyY2VUeXBlIHx8IGJ0LnJlc291cmNlVHlwZT8uY29kZSA9PT0gcmVzb3VyY2VUeXBlKSAmJiBidC5wcm9kdWN0aW9uX3JhdGUgPiAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJ1aWxkaW5nVHlwZT8uaWQgfHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlcG9zaXRMYXllcnMgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXNlIGxlcyBjb3VjaGVzIGRlIGTDqXDDtHRzIGR5bmFtaXF1ZW1lbnRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0RGVwb3NpdExheWVycyhtYXAsIGNvbnRyb2wpIHtcclxuICAgIGNvbnN0IHJlc291cmNlVHlwZXMgPSBhd2FpdCBsb2FkUmVzb3VyY2VUeXBlcygpO1xyXG5cclxuICAgIC8vIENyw6llciB1bmUgY291Y2hlIHBvdXIgY2hhcXVlIHR5cGUgZGUgcmVzc291cmNlIChzZXVsZW1lbnQgc2kgY29sb3IgZXhpc3RlKVxyXG4gICAgcmVzb3VyY2VUeXBlcy5mb3JFYWNoKHJ0ID0+IHtcclxuICAgICAgICBpZiAocnQuY29sb3IgJiYgcnQuY29sb3IubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBkZXBvc2l0TGF5ZXJzW3J0LmNvZGVdID0gTC5sYXllckdyb3VwKCk7XHJcbiAgICAgICAgICAgIGNvbnRyb2wuYWRkT3ZlcmxheShkZXBvc2l0TGF5ZXJzW3J0LmNvZGVdLCBgUmVzc291cmNlOiAke3J0LmxhYmVsfWApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZERlcG9zaXRzRm9yQ2h1bmsoY2h1bmtJZCwgbWFwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvZGVwb3NpdHMvJHtjaHVua0lkfWApO1xyXG4gICAgICAgIGNvbnN0IGRlcG9zaXRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoZGVwb3NpdHMsIG1hcCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiRXJyZXVyIGNoYXJnZW1lbnQgZMOpcMO0dHM6XCIsIGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb3JtYXRlIGxlcyBjb8O7dHMgc291cyBmb3JtZSBkZSBjaGHDrm5lIGxpc2libGVcclxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvc3RzIC0gRXg6IFt7Y29kZTogXCJpcm9uX2luZ290XCIsIGxhYmVsOiBcIkZlclwiLCBxdWFudGl0eTogMjV9XSBvdSB7aXJvbl9pbmdvdDogMjV9XHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gRXg6IFwiMjUgRmVyLCAxNSBDYW91dGNob3VjXCJcclxuICovXHJcbmZ1bmN0aW9uIGZvcm1hdENvc3RzKGNvc3RzKSB7XHJcbiAgICBpZiAoIWNvc3RzKSByZXR1cm4gJ04vQSc7XHJcblxyXG4gICAgLy8gTm91dmVhdSBmb3JtYXQ6IGFycmF5IGQnb2JqZXRzIGF2ZWMgY29kZSwgbGFiZWwsIHF1YW50aXR5XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb3N0cykpIHtcclxuICAgICAgICByZXR1cm4gY29zdHMubWFwKGMgPT4gYCR7Yy5xdWFudGl0eX0gJHtjLmxhYmVsfWApLmpvaW4oJywgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQW5jaWVuIGZvcm1hdDogb2JqZXQge2NvZGU6IHF1YW50aXR5fVxyXG4gICAgaWYgKHR5cGVvZiBjb3N0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY29zdHMpXHJcbiAgICAgICAgICAgIC5tYXAoKFtyZXNvdXJjZSwgYW1vdW50XSkgPT4gYCR7YW1vdW50fSAke3Jlc291cmNlfWApXHJcbiAgICAgICAgICAgIC5qb2luKCcsICcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnTi9BJztcclxufVxyXG5cclxuLyoqXHJcbiAqIFbDqXJpZmllIHNpIGxlIGpvdWV1ciBhIGFzc2V6IGRlIHJlc3NvdXJjZXMgcG91ciB1biBkw6lww7R0XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBjaGVja0NhbkNsYWltKGRlcG9zaXQpIHtcclxuICAgIGNvbnN0IGNvc3RzID0gZGVwb3NpdC5jb3N0cztcclxuICAgIGlmICghY29zdHMgfHwgT2JqZWN0LmtleXMoY29zdHMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIC8vIFBvdXIgY2hhcXVlIGNvw7t0LCB2w6lyaWZpZXIgc2kgbGUgam91ZXVyIGEgYXNzZXpcclxuICAgIGZvciAoY29uc3QgW3Jlc291cmNlLCBhbW91bnRdIG9mIE9iamVjdC5lbnRyaWVzKGNvc3RzKSkge1xyXG4gICAgICAgIC8vIEljaSBvbiBwb3VycmFpdCBmYWlyZSB1biBhcHBlbCBBUEkgdmVycyAvYXBpL3BsYXllci1yZXNvdXJjZXNcclxuICAgICAgICAvLyBvdSB1dGlsaXNlciBsZXMgZG9ubsOpZXMgZMOpasOgIGNoYXJnw6llc1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcGxheWVyLXJlc291cmNlcycpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyUmVzb3VyY2VzID0ge307XHJcbiAgICAgICAgZGF0YS5yZXNvdXJjZXMuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgcGxheWVyUmVzb3VyY2VzW3IudHlwZV0gPSByLnF1YW50aXR5O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBoYXMgPSBwbGF5ZXJSZXNvdXJjZXNbcmVzb3VyY2VdID8/IDA7XHJcbiAgICAgICAgaWYgKGhhcyA8IGFtb3VudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcsOpZSB1biBwb3B1cCBzaW1wbGUgKHN5bmNocm9uZSlcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVNpbXBsZVBvcHVwKGRlcG9zaXQpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRlcG9zaXQtcG9wdXBcIj5cclxuICAgICAgICAgICAgPGgzPiR7ZGVwb3NpdC50eXBlIHx8ICdEw6lww7R0IGRlIHJlc291cmNlJ308L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoYXJnZSBsZXMgaW5mb3MgZGVzIGTDqXDDtHRzIGVuIGFycmnDqHJlLXBsYW5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWREZXBvc2l0SW5mb0FzeW5jKGRlcG9zaXRzSUQsIG1hcmtlciwgZGVwb3NpdERhdGEpIHtcclxuICAgIC8vIMOJdml0ZXIgZGUgcmVjaGFyZ2VyIHNpIGTDqWrDoCBjaGFyZ8OpXHJcbiAgICBpZiAocG9wdXBDb250ZW50TG9hZGVkLmhhcyhkZXBvc2l0c0lEKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBvcHVwQ29udGVudExvYWRlZC5hZGQoZGVwb3NpdHNJRCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBDaGFyZ2VyIGRpcmVjdGVtZW50IGxlIGNvbnRlbnUgZHUgcG9wdXBcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9kZXBvc2l0LyR7ZGVwb3NpdHNJRH0vcG9wdXAtY29udGVudGApO1xyXG5cclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICBkZWJ1Z1dhcm4oJ2RlcG9zaXRzJywgYEVycmV1ciBBUEkgcG9wdXAtY29udGVudCAoZGVwb3NpdCAke2RlcG9zaXRzSUR9KTpgLCByZXMuc3RhdHVzKTtcclxuICAgICAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChkZXBvc2l0RGF0YSkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVzLnRleHQoKTtcclxuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGh0bWwpO1xyXG4gICAgICAgIGRlcG9zaXRNYXJrZXJzLnNldChkZXBvc2l0c0lELCB7IG1hcmtlciwgZGF0YTogZGVwb3NpdERhdGEgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGR1IHBvcHVwXCIsIGUpO1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoZGVwb3NpdERhdGEpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbmR1IGRlcyBkw6lww7R0cyBzdXIgbGEgY2FydGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGRlcG9zaXRzLCBtYXApIHtcclxuICAgIGRlcG9zaXRzLmZvckVhY2goZGVwb3NpdCA9PiB7XHJcbiAgICAgICAgaWYgKGRlcG9zaXRNYXJrZXJzLmhhcyhkZXBvc2l0LmlkKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB0eXBlID0gZGVwb3NpdC5yZXNvdXJjZV90eXBlO1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gZGVwb3NpdExheWVyc1t0eXBlXTtcclxuXHJcbiAgICAgICAgaWYgKCFsYXllcikge1xyXG4gICAgICAgICAgICBkZWJ1Z1dhcm4oJ2RlcG9zaXRzJywgYFBhcyBkZSBsYXllciBwb3VyIGxlIHR5cGU6ICR7dHlwZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBnZXRSZXNvdXJjZUNvbG9yKHR5cGUpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXJrZXIgPSBMLmNpcmNsZU1hcmtlcihbZGVwb3NpdC5sYXRpdHVkZSwgZGVwb3NpdC5sb25naXR1ZGVdLCB7XHJcbiAgICAgICAgICAgIHJhZGl1czogOCxcclxuICAgICAgICAgICAgZmlsbENvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICAgICAgICB3ZWlnaHQ6IDEsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjhcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hZGRUbyhsYXllcilcclxuICAgICAgICAuYmluZFBvcHVwKGNyZWF0ZVNpbXBsZVBvcHVwKGRlcG9zaXQpKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhcmdlciBsZSBjb250ZW51IGRlIGxhIHBvcHVwIHVuaXF1ZW1lbnQgcXVhbmQgZWxsZSBlc3Qgb3V2ZXJ0ZVxyXG4gICAgICAgIGlmIChkZXBvc2l0LmlkKSB7XHJcbiAgICAgICAgICAgIG1hcmtlci5vbigncG9wdXBvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9hZERlcG9zaXRJbmZvQXN5bmMoZGVwb3NpdC5pZCwgbWFya2VyLCBkZXBvc2l0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQZXJtZXQgZCdleHBsb2l0ZXIgdW4gZMOpcMO0dCBkZXB1aXMgbGEgcG9wdXBcclxuICovXHJcbndpbmRvdy5jbGFpbURlcG9zaXQgPSBhc3luYyBmdW5jdGlvbihpZCwgcmVzb3VyY2VUeXBlKSB7XHJcbiAgICAvLyBUcm91dmVyIGxlIHR5cGUgZGUgYsOidGltZW50IGFwcHJvcHJpw6lcclxuICAgIGNvbnN0IGJ1aWxkaW5nVHlwZUlkID0gYXdhaXQgZmluZEJ1aWxkaW5nVHlwZUZvclJlc291cmNlKHJlc291cmNlVHlwZSk7XHJcblxyXG4gICAgaWYgKCFidWlsZGluZ1R5cGVJZCkge1xyXG4gICAgICAgIHJldHVybiBhbGVydChgSW1wb3NzaWJsZSBkZSB0cm91dmVyIHVuIGLDonRpbWVudCBwb3VyIGV4dHJhaXJlIGxlICR7cmVzb3VyY2VUeXBlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnN0cnVpcmUgZGlyZWN0ZW1lbnQgbGUgYsOidGltZW50IHN1ciBsZXMgY29vcmRvbm7DqWVzIGR1IGTDqXDDtHRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9idWlsZCcsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBsYXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsbmc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0eXBlX2lkOiBidWlsZGluZ1R5cGVJZCxcclxuICAgICAgICAgICAgICAgIGRlcG9zaXRfaWQ6IGlkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICBsZXQgZGF0YTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKHBhcnNlRXJyb3IpIHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIlLDqXBvbnNlIG5vbi1KU09OIHJlw6d1ZTpcIiwgcmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUsOpcG9uc2UgaW52YWxpZGUgZHUgc2VydmV1clwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZygnZGVwb3NpdHMnLCAnRMOpcMO0dCBleHBsb2l0w6kgYXZlYyBzdWNjw6hzICEgQsOidGltZW50IGNyw6nDqS4nKTtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1cjogXCIgKyAoZGF0YS5lcnJvciB8fCBcIkltcG9zc2libGUgZCdleHBsb2l0ZXIgY2UgZMOpcMO0dFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJFcnJldXIgbG9ycyBkZSBsJ2V4cGxvaXRhdGlvblwiLCBlKTtcclxuICAgICAgICBhbGVydChcIkVycmV1ciByw6lzZWF1IGxvcnMgZGUgbCdleHBsb2l0YXRpb246IFwiICsgZS5tZXNzYWdlKTtcclxuICAgIH1cclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuXHJcbmltcG9ydCB7IGdyaWRMYXllciwgaW5pdEdyaWRMYXllciB9IGZyb20gJy4uL0xheWVycy9ncmlkTGF5ZXIuanMnO1xyXG5pbXBvcnQgeyBsb2FkVmlzaWJsZVJvYWRDaHVua3MgfSBmcm9tICcuL3JvYWRzL3JvYWRzLmpzJztcclxuaW1wb3J0IHsgcm9hZHNTdGF0ZSB9IGZyb20gJy4vcm9hZHMvcm9hZHNTdGF0ZS5qcyc7XHJcblxyXG5pbXBvcnQgeyBsb2FkQmFzZUZyb21TZXJ2ZXIsIGxvYWRPdGhlckJhc2UsIHNldEN1cnJlbnRQbGF5ZXJGYWN0aW9uIH0gZnJvbSAnLi4vYnVpbGRpbmdzL2Jhc2UuanMnO1xyXG5pbXBvcnQgeyBsb2FkQnVpbGRpbmdzRnJvbURhdGEsIHNldEN1cnJlbnRQbGF5ZXJJZCB9IGZyb20gJy4uL2J1aWxkaW5ncy9idWlsZGluZy5qcyc7XHJcblxyXG5pbXBvcnQgeyBpbml0RGVwb3NpdExheWVycywgZGVwb3NpdExheWVycyB9IGZyb20gJy4vZGVwb3NpdHMvZGVwb3NpdHMuanMnO1xyXG5cclxuaW1wb3J0IG1hcmtlckljb24gZnJvbSAnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi5wbmcnO1xyXG5pbXBvcnQgbWFya2VyU2hhZG93IGZyb20gJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5cclxuTC5NYXJrZXIucHJvdG90eXBlLm9wdGlvbnMuaWNvbiA9IEwuaWNvbih7XHJcbiAgICBpY29uVXJsOiBtYXJrZXJJY29uLFxyXG4gICAgc2hhZG93VXJsOiBtYXJrZXJTaGFkb3csXHJcbn0pO1xyXG5cclxubGV0IG1hcEluc3RhbmNlID0gbnVsbDtcclxubGV0IG1vdmVUaW1lb3V0ID0gbnVsbDtcclxubGV0IGlzQ2h1bmtNb2RlID0gZmFsc2U7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1hcChsYXQsIGxuZykge1xyXG5cclxuICAgIG1hcEluc3RhbmNlID0gTC5tYXAoJ21hcCcpLnNldFZpZXcoW2xhdCwgbG5nXSwgNyk7XHJcblxyXG4gICAgTC50aWxlTGF5ZXIoJ2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJywge1xyXG4gICAgICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IE9wZW5TdHJlZXRNYXAnXHJcbiAgICB9KS5hZGRUbyhtYXBJbnN0YW5jZSk7XHJcblxyXG4gICAgLy8gw4l2w6luZW1lbnQgcGVyc29ubmFsaXPDqSBwb3VyIHNpZ25hbGVyIHF1ZSBsYSBjYXJ0ZSBlc3QgcHLDqnRlXHJcbiAgICBtYXBJbnN0YW5jZS5maXJlKCdtYXBSZWFkeScpO1xyXG5cclxuICAgIGNvbnN0IGxheWVyc0NvbnRyb2wgPSBMLmNvbnRyb2wubGF5ZXJzKG51bGwsIHtcclxuICAgICAgICBcIkNodW5rIEdyaWRcIjogZ3JpZExheWVyXHJcbiAgICB9KS5hZGRUbyhtYXBJbnN0YW5jZSk7XHJcblxyXG4gICAgaW5pdERlcG9zaXRMYXllcnMobWFwSW5zdGFuY2UsIGxheWVyc0NvbnRyb2wpO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQ0VOVFJBTCBDSFVOSyBDT05UUk9MTEVSXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBtYXBJbnN0YW5jZS5vbignbW92ZWVuZCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFpc0NodW5rTW9kZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChtYXBJbnN0YW5jZS5nZXRab29tKCkgPCAxNCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQobW92ZVRpbWVvdXQpO1xyXG5cclxuICAgICAgICBtb3ZlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpbml0R3JpZExheWVyKCk7XHJcbiAgICAgICAgICAgIGxvYWRWaXNpYmxlUm9hZENodW5rcygpO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXBJbnN0YW5jZS5vbignb3ZlcmxheWFkZCcsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUubGF5ZXIgPT09IGdyaWRMYXllcikge1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZyhcImdyaWRcIiwgXCJHcmlkIE9OXCIpO1xyXG5cclxuICAgICAgICAgICAgaW5pdEdyaWRMYXllcigpO1xyXG4gICAgICAgICAgICBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXBJbnN0YW5jZS5vbignb3ZlcmxheXJlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUubGF5ZXIgPT09IGdyaWRMYXllcikge1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZyhcImdyaWRcIiwgXCJHcmlkIE9GRlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEVWRU5UU1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBtYXBJbnN0YW5jZS5vbignem9vbWVuZCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3Qgem9vbSA9IG1hcEluc3RhbmNlLmdldFpvb20oKTtcclxuXHJcbiAgICAgICAgaWYgKHpvb20gPj0gMTQpIHtcclxuICAgICAgICAgICAgZW50ZXJDaHVua01vZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBleGl0Q2h1bmtNb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0dyaWRMYXllckFjdGl2ZSgpIHtcclxuICAgIHJldHVybiBtYXBJbnN0YW5jZT8uaGFzTGF5ZXIoZ3JpZExheWVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcCgpIHtcclxuICAgIHJldHVybiBtYXBJbnN0YW5jZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZseVRvKGxhdCwgbG5nLCB6b29tID0gMTMpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgbWFwLmZseVRvKFtsYXQsIGxuZ10sIHpvb20sIHtcclxuICAgICAgICBhbmltYXRlOiB0cnVlLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxLjVcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cclxuLy8gV09STEQgTE9BREVSIChDb25jZW50cmF0ZXVyIGQnYXBwZWxzIEFQSSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkV29ybGQoKSB7XHJcblxyXG4gICAgZmV0Y2goJy9hcGkvd29ybGQtc3RhdGUnKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgJHtyZXMuc3RhdHVzfTogJHtyZXMuc3RhdHVzVGV4dH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAvLyBWw6lyaWZpZXIgc2kgbGEgcsOpcG9uc2UgZXN0IHZhbGlkZVxyXG4gICAgICAgICAgICBpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVzcG9uc2UgZm9ybWF0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENoYXJnZXIgbGVzIGJhc2VzIHZpYSBiYXNlLmpzIEQnQUJPUkQgcG91ciBjb25uYcOudHJlIGxhIGZhY3Rpb24gZHUgam91ZXVyXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnBsYXllcnMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBoYXNDZW50ZXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGEucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBwbGF5ZXI6XCIsIHBsYXllci5wc2V1ZG8sIFwiRmFjdGlvbjpcIiwgcGxheWVyLmZhY3Rpb24sIFwiSXNNZTpcIiwgcGxheWVyLmlzTWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLmlzTWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBsYXllckZhY3Rpb24ocGxheWVyLmZhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkQmFzZUZyb21TZXJ2ZXIocGxheWVyLmxhdCwgcGxheWVyLmxuZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciBmYWN0aW9uIHNldCB0bzpcIiwgcGxheWVyLmZhY3Rpb24gLCBcIlBsYXllciBiYXNlIGxvYWRlZCBhdDpcIiwgcGxheWVyLmxhdCwgcGxheWVyLmxuZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0NlbnRlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHlUbyhwbGF5ZXIubGF0LCBwbGF5ZXIubG5nLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDZW50ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRPdGhlckJhc2UocGxheWVyLmxhdCwgcGxheWVyLmxuZywgcGxheWVyLnBzZXVkbywgcGxheWVyLmZhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIETDqWZpbmlyIGwnSUQgZHUgam91ZXVyIGFjdGlmXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmN1cnJlbnRQbGF5ZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFBsYXllcklkKGRhdGEuY3VycmVudFBsYXllcklkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2hhcmdlciBsZXMgYsOidGltZW50cyBhcHLDqHMgYXZvaXIgZMOpZmluaSBsYSBmYWN0aW9uIGR1IGpvdWV1clxyXG4gICAgICAgICAgICBsb2FkQnVpbGRpbmdzRnJvbURhdGEoZGF0YS5idWlsZGluZ3MpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoJ21hcCcsIFwiRXJyZXVyIGxvYWQgd29ybGRcIiwgZXJyKTtcclxuICAgICAgICAgICAgLy8gTmUgcGFzIHJlZGlyaWdlciBhdXRvbWF0aXF1ZW1lbnQsIGxhaXNzZXogbGUgc3lzdMOobWUgZGUgbG9naW4gZ8OpcmVyIGxhIHJlZGlyZWN0aW9uXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVudGVyQ2h1bmtNb2RlKCkge1xyXG4gICAgaWYgKGlzQ2h1bmtNb2RlKSByZXR1cm47XHJcblxyXG4gICAgaXNDaHVua01vZGUgPSB0cnVlO1xyXG5cclxuICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwiRU5URVIgQ0hVTksgTU9ERVwiKTtcclxuXHJcbiAgICBpbml0R3JpZExheWVyKCk7XHJcbiAgICBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXhpdENodW5rTW9kZSgpIHtcclxuICAgIGlmICghaXNDaHVua01vZGUpIHJldHVybjtcclxuXHJcbiAgICBpc0NodW5rTW9kZSA9IGZhbHNlO1xyXG5cclxuICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwiRVhJVCBDSFVOSyBNT0RFXCIpO1xyXG5cclxuICAgIGlmIChtYXBJbnN0YW5jZS5oYXNMYXllcihncmlkTGF5ZXIpKSB7XHJcbiAgICAgICAgbWFwSW5zdGFuY2UucmVtb3ZlTGF5ZXIoZ3JpZExheWVyKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHJvYWRzU3RhdGUgfSBmcm9tICcuL3JvYWRzU3RhdGUuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkYXRlQ2h1bmsoaWQpIHtcclxuICAgIGRlYnVnTG9nKFwiY2FjaGVcIiwgXCLwn6e5IGludmFsaWRhdGUgY2h1bms6XCIsIGlkKTtcclxuICAgIFxyXG4gICAgZGVsZXRlIHJvYWRzU3RhdGUuY2h1bmtzW2lkXTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjaHVua18ke2lkfWApO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAuanMnO1xyXG5cclxuLyoqXHJcbiAqIFRyb3V2ZSBsZSBwb2ludCBsZSBwbHVzIHByb2NoZSBzdXIgdG91dGVzIGxlcyByb3V0ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ2xvc2VzdFBvaW50T25Sb2FkKGxhdGxuZywgcm9hZHMpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGxldCBiZXN0UG9pbnQgPSBudWxsO1xyXG4gICAgbGV0IGJlc3REaXN0YW5jZSA9IEluZmluaXR5O1xyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkcykpIHJldHVybiB7IHBvaW50OiBudWxsLCBkaXN0YW5jZTogSW5maW5pdHkgfTtcclxuXHJcbiAgICByb2Fkcy5mb3JFYWNoKHJvYWQgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZC5wb2ludHMpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHJvYWQucG9pbnRzLmxlbmd0aCA8IDIpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2FkLnBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFSYXcgPSByb2FkLnBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgYlJhdyA9IHJvYWQucG9pbnRzW2kgKyAxXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYVJhdyB8fCAhYlJhdykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQlJPS0VOIFJPQUQgU0VHTUVOVDpcIiwgcm9hZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhUmF3Lmxlbmd0aCA8IDIgfHwgYlJhdy5sZW5ndGggPCAyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBMLmxhdExuZyhhUmF3WzBdLCBhUmF3WzFdKTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IEwubGF0TG5nKGJSYXdbMF0sIGJSYXdbMV0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdGVkID0gcHJvamVjdFBvaW50T25TZWdtZW50KGxhdGxuZywgYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBtYXAuZGlzdGFuY2UobGF0bG5nLCBwcm9qZWN0ZWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3QgPCBiZXN0RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0YW5jZSA9IGRpc3Q7XHJcbiAgICAgICAgICAgICAgICBiZXN0UG9pbnQgPSBwcm9qZWN0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBvaW50OiBiZXN0UG9pbnQsXHJcbiAgICAgICAgZGlzdGFuY2U6IGJlc3REaXN0YW5jZVxyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyb3V2ZSBsZSBzZWdtZW50IGxlIHBsdXMgcHJvY2hlIChwb3VyIGhpZ2hsaWdodCB2aXN1ZWwpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZENsb3Nlc3RTZWdtZW50KGxhdGxuZywgcm9hZHMpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGxldCBiZXN0U2VnbWVudCA9IG51bGw7XHJcbiAgICBsZXQgYmVzdERpc3RhbmNlID0gSW5maW5pdHk7XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWRzKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcm9hZHMuZm9yRWFjaChyb2FkID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWQucG9pbnRzKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvYWQucG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYVJhdyA9IHJvYWQucG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiUmF3ID0gcm9hZC5wb2ludHNbaSArIDFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFhUmF3IHx8ICFiUmF3KSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKGFSYXcubGVuZ3RoIDwgMiB8fCBiUmF3Lmxlbmd0aCA8IDIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYSA9IEwubGF0TG5nKGFSYXdbMF0sIGFSYXdbMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gTC5sYXRMbmcoYlJhd1swXSwgYlJhd1sxXSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtaWQgPSBMLmxhdExuZyhcclxuICAgICAgICAgICAgICAgIChhLmxhdCArIGIubGF0KSAvIDIsXHJcbiAgICAgICAgICAgICAgICAoYS5sbmcgKyBiLmxuZykgLyAyXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gbWFwLmRpc3RhbmNlKGxhdGxuZywgbWlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0IDwgYmVzdERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0RGlzdGFuY2UgPSBkaXN0O1xyXG4gICAgICAgICAgICAgICAgYmVzdFNlZ21lbnQgPSBbYSwgYl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYmVzdFNlZ21lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9qZWN0aW9uIGQndW4gcG9pbnQgc3VyIHVuIHNlZ21lbnQgKEEtQilcclxuICogbWF0aCBzdGFibGUgcG91ciBzbmFwIHJvdXRlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RQb2ludE9uU2VnbWVudChwLCBhLCBiKSB7XHJcblxyXG4gICAgY29uc3QgQSA9IFthLmxhdCwgYS5sbmddO1xyXG4gICAgY29uc3QgQiA9IFtiLmxhdCwgYi5sbmddO1xyXG4gICAgY29uc3QgUCA9IFtwLmxhdCwgcC5sbmddO1xyXG5cclxuICAgIGNvbnN0IEFCID0gW0JbMF0gLSBBWzBdLCBCWzFdIC0gQVsxXV07XHJcbiAgICBjb25zdCBBUCA9IFtQWzBdIC0gQVswXSwgUFsxXSAtIEFbMV1dO1xyXG5cclxuICAgIGNvbnN0IGFiMiA9IEFCWzBdICogQUJbMF0gKyBBQlsxXSAqIEFCWzFdO1xyXG5cclxuICAgIGlmIChhYjIgPT09IDApIHJldHVybiBhO1xyXG5cclxuICAgIGxldCB0ID0gKEFQWzBdICogQUJbMF0gKyBBUFsxXSAqIEFCWzFdKSAvIGFiMjtcclxuXHJcbiAgICB0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdCkpO1xyXG5cclxuICAgIHJldHVybiBMLmxhdExuZyhcclxuICAgICAgICBBWzBdICsgQUJbMF0gKiB0LFxyXG4gICAgICAgIEFbMV0gKyBBQlsxXSAqIHRcclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXN0YW5jZSBwb2ludCAtPiBzZWdtZW50ICh1dGlsZSB2YWxpZGF0aW9uIGZ1dHVyZSlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZVRvU2VnbWVudChwLCBhLCBiKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0ZWQgPSBwcm9qZWN0UG9pbnRPblNlZ21lbnQocCwgYSwgYik7XHJcbiAgICByZXR1cm4gbWFwLmRpc3RhbmNlKHAsIHByb2plY3RlZCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBzaW1wbGUgZGVidWcgcm9hZHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z1JvYWRzKHJvYWRzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlJPQURTIERFQlVHOlwiLCByb2Fkcy5sZW5ndGgsIHJvYWRzKTtcclxufSIsImltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC5qcyc7XHJcbmltcG9ydCB7IENIVU5LX1NJWkUgfSBmcm9tICcuLi8uLi91dGlscy9jaHVuay5qcyc7XHJcbmltcG9ydCB7IHNldENodW5rQ29sb3IgfSBmcm9tICcuLi8uLi9MYXllcnMvZ3JpZExheWVyLmpzJztcclxuaW1wb3J0IHsgaW52YWxpZGF0ZUNodW5rIH0gZnJvbSAnLi9pbnZhbGlkYXRlQ2h1bmsuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5pbXBvcnQgeyByb2Fkc1N0YXRlIH0gZnJvbSAnLi9yb2Fkc1N0YXRlLmpzJztcclxuaW1wb3J0IHsgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YSB9IGZyb20gJy4uL2RlcG9zaXRzL2RlcG9zaXRzLmpzJztcclxuaW1wb3J0IHsgZ2V0Q2FjaGVLZXkgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWNoZVV0aWxzLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExPQUQgQ09OVFJPTFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBsb2FkaW5nUXVldWUgPSBuZXcgU2V0KCk7XHJcbmNvbnN0IE1BWF9DT05DVVJSRU5UID0gNDtcclxubGV0IGFjdGl2ZVJlcXVlc3RzID0gMDtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENIVU5LIElEXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGdldENodW5rSWQobGF0LCBsbmcpIHtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGxhdCAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IobG5nIC8gQ0hVTktfU0laRSk7XHJcbiAgICByZXR1cm4gYCR7eH1fJHt5fWA7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIE1BSU4gTE9BRCBWSVNJQkxFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFtYXAgfHwgbWFwLmdldFpvb20oKSA8IDE0KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgYm91bmRzID0gbWFwLmdldEJvdW5kcygpO1xyXG5cclxuICAgIGNvbnN0IHZpc2libGVDaHVua3MgPSBnZXRWaXNpYmxlQ2h1bmtzKGJvdW5kcyk7XHJcblxyXG4gICAgY29uc3QgY2h1bmtzVG9Mb2FkID0gdmlzaWJsZUNodW5rcy5maWx0ZXIoXHJcbiAgICAgICAgY2h1bmtJZCA9PiAhcm9hZHNTdGF0ZS5sb2FkZWRDaHVua3MuaGFzKGNodW5rSWQpXHJcbiAgICApO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBWRVJJRklDQVRJT04gQ0FDSEUgTE9DQUxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBmaW5hbENodW5rc1RvTG9hZCA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBjaHVua3NUb0xvYWQpIHtcclxuICAgICAgICBjb25zdCBjYWNoZUtleSA9IGdldENhY2hlS2V5KGNodW5rSWQpO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNhY2hlS2V5KTtcclxuICAgICAgICBpZiAoY2FjaGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGNhY2hlZCk7XHJcbiAgICAgICAgICAgIC8vIFbDqXJpZmllciBzaSBsZSBjYWNoZSBlc3QgdmlldXggKGV4OiBwbHVzIGRlIDFoKVxyXG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIGRhdGEudHMgPCAzNjAwMDAwKSB7IFxyXG4gICAgICAgICAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBkYXRhLmhhc1JvYWRzID8gJ2xvYWRlZCcgOiAnZW1wdHknLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvYWRzOiBkYXRhLnJvYWRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogZGF0YS5idWlsZGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwb3NpdHM6IGRhdGEuZGVwb3NpdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzUm9hZHM6IGRhdGEuaGFzUm9hZHNcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5hZGQoY2h1bmtJZCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsIGRhdGEuaGFzUm9hZHMgPyAnYmx1ZScgOiAnIzQ0NCcpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShkYXRhLmRlcG9zaXRzIHx8IFtdLCBtYXApO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxDaHVua3NUb0xvYWQucHVzaChjaHVua0lkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gRVRBVCBMT0FESU5HXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBmaW5hbENodW5rc1RvTG9hZCkge1xyXG5cclxuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGluZycsXHJcbiAgICAgICAgICAgIHJvYWRzOiBbXSxcclxuICAgICAgICAgICAgYnVpbGRpbmdzOiBbXSxcclxuICAgICAgICAgICAgZGVwb3NpdHM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnb3JhbmdlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmllbiDDoCBjaGFyZ2VyXHJcbiAgICBpZiAoZmluYWxDaHVua3NUb0xvYWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmVmcmVzaENodW5rQ29sb3JzKHZpc2libGVDaHVua3MpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCBbcm9hZHNSZXNwb25zZSwgYnVpbGRpbmdzUmVzcG9uc2UsIGRlcG9zaXRzUmVzcG9uc2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9jaHVua3MvYnVsaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogZmluYWxDaHVua3NUb0xvYWQgfSlcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2J1aWxkaW5ncy92aXNpYmxlJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2h1bmtzOiBmaW5hbENodW5rc1RvTG9hZCB9KVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvZGVwb3NpdHMvYnVsaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogZmluYWxDaHVua3NUb0xvYWQgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgaWYgKCFyb2Fkc1Jlc3BvbnNlLm9rIHx8ICFidWlsZGluZ3NSZXNwb25zZS5vayB8fCAhZGVwb3NpdHNSZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiQVBJIGVycm9yXCIpO1xyXG5cclxuICAgICAgICBjb25zdCByb2Fkc0RhdGEgPSBhd2FpdCByb2Fkc1Jlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBidWlsZGluZ3NEYXRhID0gYXdhaXQgYnVpbGRpbmdzUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGRlcG9zaXRzRGF0YSA9IGF3YWl0IGRlcG9zaXRzUmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAvLyBDcsOpZXIgdW4gaW5kZXggcG91ciBtYXBwZXIgbGVzIGLDonRpbWVudHMgcGFyIGNodW5rSWQgcmFwaWRlbWVudFxyXG4gICAgICAgIGNvbnN0IGJ1aWxkaW5nc0J5Q2h1bmsgPSB7fTtcclxuICAgICAgICBidWlsZGluZ3NEYXRhLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNJZCA9IE1hdGguZmxvb3IoYi5sYXQgKiAxMDApICsgJ18nICsgTWF0aC5mbG9vcihiLmxuZyAqIDEwMCk7XHJcbiAgICAgICAgICAgIGlmICghYnVpbGRpbmdzQnlDaHVua1tjSWRdKSBidWlsZGluZ3NCeUNodW5rW2NJZF0gPSBbXTtcclxuICAgICAgICAgICAgYnVpbGRpbmdzQnlDaHVua1tjSWRdLnB1c2goYik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gVFJBSVRFTUVOVCBDSFVOS1NcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgZmluYWxDaHVua3NUb0xvYWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2h1bmtEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgcm9hZHM6IHJvYWRzRGF0YVtjaHVua0lkXT8ucm9hZHMgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6IGJ1aWxkaW5nc0RhdGFbY2h1bmtJZF0/LmJ1aWxkaW5ncyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGRlcG9zaXRzOiBkZXBvc2l0c0RhdGFbY2h1bmtJZF0gfHwgW11cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhhc1JvYWRzID0gY2h1bmtEYXRhLnJvYWRzICYmIGNodW5rRGF0YS5yb2Fkcy5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGhhc1JvYWRzID8gJ2xvYWRlZCcgOiAnZW1wdHknLFxyXG4gICAgICAgICAgICAgICAgcm9hZHM6IGNodW5rRGF0YS5yb2FkcyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogY2h1bmtEYXRhLmJ1aWxkaW5ncyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGRlcG9zaXRzOiBjaHVua0RhdGEuZGVwb3NpdHMgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBoYXNSb2Fkc1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcm9hZHNTdGF0ZS5sb2FkZWRDaHVua3MuYWRkKGNodW5rSWQpO1xyXG5cclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gQ0FDSEVcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBnZXRDYWNoZUtleShjaHVua0lkKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICAgIGNhY2hlS2V5LFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICByb2FkczogY2h1bmtEYXRhLnJvYWRzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBjaHVua0RhdGEuYnVpbGRpbmdzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVwb3NpdHM6IGNodW5rRGF0YS5kZXBvc2l0cyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGhhc1JvYWRzLFxyXG4gICAgICAgICAgICAgICAgdHM6IERhdGUubm93KClcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gRFJBVyBST0FEU1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgICAgLy8gY2h1bmtEYXRhLnJvYWRzLmZvckVhY2gocm9hZCA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBkcmF3Um9hZChyb2FkKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBEUkFXIEJVSUxESU5HU1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBjaHVua0RhdGEuYnVpbGRpbmdzLmZvckVhY2goYnVpbGRpbmcgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgZHJhd0J1aWxkaW5nKGJ1aWxkaW5nKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBDT1VMRVVSIENIVU5LXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIHNldENodW5rQ29sb3IoXHJcbiAgICAgICAgICAgICAgICBjaHVua0lkLFxyXG4gICAgICAgICAgICAgICAgaGFzUm9hZHMgPyAnYmx1ZScgOiAnIzQ0NCdcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoY2h1bmtEYXRhLmRlcG9zaXRzLCBtYXApO1xyXG5cclxuICAgICAgICAgICAgZGVidWdMb2coXCJyb2Fkc1wiLCBgQ2h1bmsgJHtjaHVua0lkfSBsb2FkZWQgKCR7Y2h1bmtEYXRhLnJvYWRzLmxlbmd0aH0gcm9hZHMsICR7Y2h1bmtEYXRhLmJ1aWxkaW5ncy5sZW5ndGh9IGJ1aWxkaW5ncywgJHtjaHVua0RhdGEuZGVwb3NpdHMubGVuZ3RofSBkZXBvc2l0cylgKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICBkZWJ1Z0Vycm9yKFwicm9hZHNcIiwgXCJFcnJldXIgY2hhcmdlbWVudCBjaHVua3MgYnVsazpcIiwgZXJyb3IpO1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIEVUQVQgRVJSRVVSXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjaHVua0lkIG9mIGZpbmFsQ2h1bmtzVG9Mb2FkKSB7XHJcbiAgICAgICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuXHJcbiAgICAgICAgICAgICAgICByb2FkczogW10sXHJcblxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBbXSxcclxuICAgICAgICAgICAgICAgIGRlcG9zaXRzOiBbXVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAncmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUZSRVNIIFZJU1VFTCBGSU5BTFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICByZWZyZXNoQ2h1bmtDb2xvcnModmlzaWJsZUNodW5rcyk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJFRlJFU0ggQ0hVTksgQ09MT1JTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHJlZnJlc2hDaHVua0NvbG9ycyh2aXNpYmxlQ2h1bmtzKSB7XHJcblxyXG4gICAgZm9yIChjb25zdCBjaHVua0lkIG9mIHZpc2libGVDaHVua3MpIHtcclxuXHJcbiAgICAgICAgY29uc3QgY2h1bmsgPSByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXTtcclxuICAgICAgICBpZiAoIWNodW5rKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGNodW5rLnN0YXR1cykge1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbG9hZGVkJzpcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdibHVlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdlbXB0eSc6XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnIzQ0NCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbG9hZGluZyc6XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnb3JhbmdlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAncmVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ3llbGxvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUkVGUkVTSCBDSFVOS1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaENodW5rKGxhdCwgbG5nKSB7XHJcbiAgICBjb25zdCBjaHVua0lkID0gZ2V0Q2h1bmtJZChsYXQsIGxuZyk7XHJcblxyXG4gICAgaW52YWxpZGF0ZUNodW5rKGNodW5rSWQpO1xyXG5cclxuICAgIHJvYWRzU3RhdGUubG9hZGVkQ2h1bmtzLmRlbGV0ZShjaHVua0lkKTtcclxuXHJcbiAgICBhd2FpdCBmZXRjaFNpbmdsZUNodW5rKGNodW5rSWQpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGRVRDSCBTSU5HTEUgQ0hVTktcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hTaW5nbGVDaHVuayhjaHVua0lkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG4gICAgICAgICAgICBzdGF0dXM6ICdsb2FkaW5nJyxcclxuICAgICAgICAgICAgcm9hZHM6IFtdLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IFtdLFxyXG4gICAgICAgICAgICBkZXBvc2l0czogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTtcclxuXHJcbiAgICAgICAgY29uc3QgW3JvYWRzUmVzLCBidWlsZGluZ3NSZXMsIGRlcG9zaXRzUmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvY2h1bmtzL2J1bGsnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IFtjaHVua0lkXSB9KVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvYnVpbGRpbmdzL3Zpc2libGUnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IFtjaHVua0lkXSB9KVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvZGVwb3NpdHMvYnVsaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogW2NodW5rSWRdIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGlmICghcm9hZHNSZXMub2sgfHwgIWJ1aWxkaW5nc1Jlcy5vayB8fCAhZGVwb3NpdHNSZXMub2spIFxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBUEkgZXJyb3JcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvYWRzRGF0YSAgICAgPSBhd2FpdCByb2Fkc1Jlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgYnVpbGRpbmdzRGF0YSA9IGF3YWl0IGJ1aWxkaW5nc1Jlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgZGVwb3NpdHNEYXRhICA9IGF3YWl0IGRlcG9zaXRzUmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2h1bmtEZXBvc2l0cyA9IGRlcG9zaXRzRGF0YVtjaHVua0lkXSB8fCBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgY2h1bmtEYXRhID0ge1xyXG4gICAgICAgICAgICByb2FkczogICAgIHJvYWRzRGF0YVtjaHVua0lkXT8ucm9hZHMgICAgIHx8IFtdLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IGJ1aWxkaW5nc0RhdGFbY2h1bmtJZF0/LmJ1aWxkaW5ncyB8fCBbXSxcclxuICAgICAgICAgICAgZGVwb3NpdHM6ICBjaHVua0RlcG9zaXRzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFzUm9hZHMgPSBjaHVua0RhdGEucm9hZHMubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogaGFzUm9hZHMgPyAnbG9hZGVkJyA6ICdlbXB0eScsXHJcbiAgICAgICAgICAgIHJvYWRzOiAgICAgY2h1bmtEYXRhLnJvYWRzLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IGNodW5rRGF0YS5idWlsZGluZ3MsXHJcbiAgICAgICAgICAgIGRlcG9zaXRzOiAgY2h1bmtEYXRhLmRlcG9zaXRzLFxyXG4gICAgICAgICAgICBoYXNSb2Fkc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gZ2V0Q2FjaGVLZXkoY2h1bmtJZCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY2FjaGVLZXksIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgcm9hZHM6ICAgICBjaHVua0RhdGEucm9hZHMsXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogY2h1bmtEYXRhLmJ1aWxkaW5ncyxcclxuICAgICAgICAgICAgZGVwb3NpdHM6ICBjaHVua0RhdGEuZGVwb3NpdHMsXHJcbiAgICAgICAgICAgIGhhc1JvYWRzLFxyXG4gICAgICAgICAgICB0czogRGF0ZS5ub3coKVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCBoYXNSb2FkcyA/ICdibHVlJyA6ICcjNDQ0Jyk7XHJcbiAgICAgICAgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShjaHVua0RhdGEuZGVwb3NpdHMsIGdldE1hcCgpKTtcclxuXHJcbiAgICAgICAgZGVidWdMb2coXCJyb2Fkc1wiLCBcIltDSFVOSyBSRUZSRVNIXVwiLCBjaHVua0lkLCBjaHVua0RhdGEucm9hZHMubGVuZ3RoKTtcclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICAgICAgcm9hZHM6IFtdLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IFtdLFxyXG4gICAgICAgICAgICBkZXBvc2l0czogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdyZWQnKTtcclxuICAgICAgICBkZWJ1Z0Vycm9yKFwicm9hZHNcIiwgXCJbQ0hVTksgUkVGUkVTSCBFUlJPUl1cIiwgY2h1bmtJZCwgZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZpc2libGVDaHVua3MoYm91bmRzKSB7XHJcblxyXG4gICAgY29uc3QgbWluWCA9IE1hdGguZmxvb3IoYm91bmRzLmdldFNvdXRoKCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1heFggPSBNYXRoLmZsb29yKGJvdW5kcy5nZXROb3J0aCgpIC8gQ0hVTktfU0laRSk7XHJcblxyXG4gICAgY29uc3QgbWluWSA9IE1hdGguZmxvb3IoYm91bmRzLmdldFdlc3QoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWF4WSA9IE1hdGguZmxvb3IoYm91bmRzLmdldEVhc3QoKSAvIENIVU5LX1NJWkUpO1xyXG5cclxuICAgIGNvbnN0IGNodW5rSWQgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCB4ID0gbWluWDsgeCA8PSBtYXhYOyB4KyspIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gbWluWTsgeSA8PSBtYXhZOyB5KyspIHtcclxuICAgICAgICAgICAgY2h1bmtJZC5wdXNoKGAke3h9XyR7eX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNodW5rSWQ7XHJcbn0iLCJleHBvcnQgY29uc3Qgcm9hZHNTdGF0ZSA9IHtcclxuICAgIGNodW5rczoge30sXHJcbiAgICBsb2FkZWRDaHVua3M6IG5ldyBTZXQoKSxcclxuICAgIHJvYWRzUmVhZHk6IGZhbHNlLFxyXG4gICAgZHJhd25Sb2FkczogW10sXHJcbiAgICB2aXNpYmxlQ2h1bmtzOiBuZXcgU2V0KCksXHJcbiAgICBcclxuICAgIHJvYWRMYXllcnM6IHt9LFxyXG5cclxuICAgIGJ1aWxkaW5nTGF5ZXJzOiB7fVxyXG59O1xyXG5cclxubGV0IGNhY2hlZFJvYWRzID0gW107XHJcbmxldCBjYWNoZURpcnR5ID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXJrUm9hZENhY2hlRGlydHkoKSB7XHJcbiAgICBjYWNoZURpcnR5ID0gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbExvYWRlZFJvYWRzKCkge1xyXG5cclxuICAgIGlmICghcm9hZHNTdGF0ZT8uY2h1bmtzKSByZXR1cm4gW107XHJcblxyXG4gICAgaWYgKCFjYWNoZURpcnR5KSByZXR1cm4gY2FjaGVkUm9hZHM7XHJcblxyXG4gICAgY2FjaGVkUm9hZHMgPSBPYmplY3QudmFsdWVzKHJvYWRzU3RhdGUuY2h1bmtzKVxyXG4gICAgICAgIC5maWx0ZXIoYyA9PiBjPy5zdGF0dXMgPT09ICdsb2FkZWQnICYmIEFycmF5LmlzQXJyYXkoYy5yb2FkcykpXHJcbiAgICAgICAgLmZsYXRNYXAoYyA9PiBjLnJvYWRzKTtcclxuXHJcbiAgICBjYWNoZURpcnR5ID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIGNhY2hlZFJvYWRzO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGluaXROb3RpZmljYXRpb25zKClcclxue1xyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdodG14OmFmdGVyU3dhcCcsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZXZlbnRdJyk7XHJcbiAgICAgICAgZXZlbnRzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBKU09OLnBhcnNlKGVsLmRhdGFzZXQuZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2dhbWU6ZXZlbnQnLCB7IGRldGFpbDogZXZlbnQgfSkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBwYXJzaW5nIGV2ZW50OicsIGVycik7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBlbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHR5cGUgPSAnaW5mbycpIHtcclxuXHJcbiAgICBjb25zdCBub3RpZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbm90aWYuY2xhc3NOYW1lID0gYG5vdGlmIG5vdGlmLSR7dHlwZX1gO1xyXG4gICAgbm90aWYudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm90aWYpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG5vdGlmLnJlbW92ZSgpO1xyXG4gICAgfSwgMzAwMCk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UGxheWVyRmFjdGlvbiB9IGZyb20gJy4uL2J1aWxkaW5ncy9iYXNlLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNUQVRFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGJhc2VDaXJjbGVzID0gbmV3IE1hcCgpOyAvLyBiYXNlSWQgLT4gY2lyY2xlIGxheWVyXHJcbmNvbnN0IHJvYWRTZWdtZW50cyA9IG5ldyBNYXAoKTsgLy8gcm9hZElkIC0+IHBvbHlsaW5lIGxheWVyXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGQUNUSU9OIENPTE9SU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBGQUNUSU9OX0NPTE9SUyA9IHtcclxuICAgICdkZWZhdWx0JzogJyMyN2FlNjAnLCAgLy8gdmVydCBwYXIgZMOpZmF1dFxyXG4gICAgJ2VtcGlyZSc6ICcjZTc0YzNjJywgICAvLyByb3VnZVxyXG4gICAgJ2NlbmRyZXMnOiAnIzM0OThkYicsICAgIC8vIGJsZXVcclxuICAgICdub21hZGVzJzogJyNmMzljMTInLCAgLy8gb3JhbmdlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRGYWN0aW9uQ29sb3IoZmFjdGlvbikge1xyXG4gICAgcmV0dXJuIEZBQ1RJT05fQ09MT1JTW2ZhY3Rpb24/LnRvTG93ZXJDYXNlKCldIHx8IEZBQ1RJT05fQ09MT1JTWydkZWZhdWx0J107XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEJBU0UgQ0lSQ0xFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3QmFzZUNpcmNsZShiYXNlSWQsIGxhdCwgbG5nLCBmYWN0aW9uLCBpc1BsYXllckJhc2UgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckZhY3Rpb24gPSBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xyXG4gICAgY29uc3QgY29sb3IgPSBpc1BsYXllckJhc2VcclxuICAgICAgICA/ICcjMjdhZTYwJyAgLy8gdmVydCBwb3VyIG5vdHJlIGJhc2VcclxuICAgICAgICA6IGdldEZhY3Rpb25Db2xvcihmYWN0aW9uKTtcclxuXHJcbiAgICAvLyBTdXBwcmltZXIgbCdhbmNpZW4gY2VyY2xlIHNpIGV4aXN0ZVxyXG4gICAgaWYgKGJhc2VDaXJjbGVzLmhhcyhiYXNlSWQpKSB7XHJcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKGJhc2VDaXJjbGVzLmdldChiYXNlSWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaXJjbGUgPSBMLmNpcmNsZShbbGF0LCBsbmddLCB7XHJcbiAgICAgICAgcmFkaXVzOiA1MDAsXHJcbiAgICAgICAgY29sb3I6IGNvbG9yLFxyXG4gICAgICAgIHdlaWdodDogMixcclxuICAgICAgICBmaWxsT3BhY2l0eTogMFxyXG4gICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICBiYXNlQ2lyY2xlcy5zZXQoYmFzZUlkLCBjaXJjbGUpO1xyXG4gICAgcmV0dXJuIGNpcmNsZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJhc2VDaXJjbGUoYmFzZUlkKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgaWYgKGJhc2VDaXJjbGVzLmhhcyhiYXNlSWQpKSB7XHJcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKGJhc2VDaXJjbGVzLmdldChiYXNlSWQpKTtcclxuICAgICAgICBiYXNlQ2lyY2xlcy5kZWxldGUoYmFzZUlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQWxsQmFzZUNpcmNsZXMoKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgYmFzZUNpcmNsZXMuZm9yRWFjaChjaXJjbGUgPT4gbWFwLnJlbW92ZUxheWVyKGNpcmNsZSkpO1xyXG4gICAgYmFzZUNpcmNsZXMuY2xlYXIoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUk9BRCBTRUdNRU5UU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd1JvYWRTZWdtZW50KHJvYWRJZCwgY29vcmRzLCBmYWN0aW9uKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwIHx8ICFjb29yZHMgfHwgY29vcmRzLmxlbmd0aCA8IDIpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJGYWN0aW9uID0gZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKTtcclxuICAgIGNvbnN0IGNvbG9yID0gZmFjdGlvbiA9PT0gcGxheWVyRmFjdGlvblxyXG4gICAgICAgID8gJyMyN2FlNjAnICAvLyB2ZXJ0IHBvdXIgbm9zIHJvdXRlc1xyXG4gICAgICAgIDogZ2V0RmFjdGlvbkNvbG9yKGZhY3Rpb24pO1xyXG5cclxuICAgIC8vIFN1cHByaW1lciBsJ2FuY2llbiBzZWdtZW50IHNpIGV4aXN0ZVxyXG4gICAgaWYgKHJvYWRTZWdtZW50cy5oYXMocm9hZElkKSkge1xyXG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihyb2FkU2VnbWVudHMuZ2V0KHJvYWRJZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvbHlsaW5lID0gTC5wb2x5bGluZShjb29yZHMsIHtcclxuICAgICAgICBjb2xvcjogY29sb3IsXHJcbiAgICAgICAgd2VpZ2h0OiAzLFxyXG4gICAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgICBkYXNoQXJyYXk6ICc4LDgnXHJcbiAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgIHJvYWRTZWdtZW50cy5zZXQocm9hZElkLCBwb2x5bGluZSk7XHJcbiAgICByZXR1cm4gcG9seWxpbmU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVSb2FkU2VnbWVudChyb2FkSWQpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBpZiAocm9hZFNlZ21lbnRzLmhhcyhyb2FkSWQpKSB7XHJcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKHJvYWRTZWdtZW50cy5nZXQocm9hZElkKSk7XHJcbiAgICAgICAgcm9hZFNlZ21lbnRzLmRlbGV0ZShyb2FkSWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJBbGxSb2FkU2VnbWVudHMoKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgcm9hZFNlZ21lbnRzLmZvckVhY2gocG9seWxpbmUgPT4gbWFwLnJlbW92ZUxheWVyKHBvbHlsaW5lKSk7XHJcbiAgICByb2FkU2VnbWVudHMuY2xlYXIoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVVBEQVRFIEZVTkNUSU9OU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQmFzZUNpcmNsZXMoYmFzZXMpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJGYWN0aW9uID0gZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKTtcclxuXHJcbiAgICBiYXNlcy5mb3JFYWNoKGJhc2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzUGxheWVyQmFzZSA9IGJhc2UuZmFjdGlvbiA9PT0gcGxheWVyRmFjdGlvbjtcclxuICAgICAgICBkcmF3QmFzZUNpcmNsZShiYXNlLmlkLCBiYXNlLmxhdCwgYmFzZS5sbmcsIGJhc2UuZmFjdGlvbiwgaXNQbGF5ZXJCYXNlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUm9hZFNlZ21lbnRzKHJvYWRzKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcGxheWVyRmFjdGlvbiA9IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XHJcblxyXG4gICAgcm9hZHMuZm9yRWFjaChyb2FkID0+IHtcclxuICAgICAgICBjb25zdCBpc1BsYXllclJvYWQgPSByb2FkLmZhY3Rpb24gPT09IHBsYXllckZhY3Rpb247XHJcbiAgICAgICAgZHJhd1JvYWRTZWdtZW50KHJvYWQuaWQsIHJvYWQuY29vcmRzLCByb2FkLmZhY3Rpb24pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVUSUxJVFlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFJvYWRTZWdtZW50Q29sb3Iocm9hZElkLCBjb2xvcikge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChyb2FkU2VnbWVudHMuaGFzKHJvYWRJZCkpIHtcclxuICAgICAgICByb2FkU2VnbWVudHMuZ2V0KHJvYWRJZCkuc2V0U3R5bGUoeyBjb2xvciB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHNob3dOb3RpZmljYXRpb24gfSBmcm9tICcuLi9ub3RpZmljYXRpb25zLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBBVEhGSU5ESU5HIERFQlVHIC0gQ0xJQ0sgVE8gR0VUIENPT1JESU5BVEVTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBZG1pbkNvb3JkcyhsYXQsIGxuZykge1xyXG4gICAgaWYgKGxhdCA9PT0gdW5kZWZpbmVkIHx8IGxuZyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZm9ybWF0ID0gYCR7bGF0LnRvRml4ZWQoNil9LCR7bG5nLnRvRml4ZWQoNil9YDtcclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGZvcm1hdCk7XHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKFwiRm9ybWF0IGNvbGxhYmxlIGFkbWluIGNvcGnDqSA6IFwiICsgZm9ybWF0LCAnc3VjY2VzcycpO1xyXG59IiwiaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IHJlZnJlc2hDaHVuayB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2Fkcy5qcyc7XHJcbmltcG9ydCB7IGludmFsaWRhdGVDaHVuayB9IGZyb20gJy4uL21hcC9yb2Fkcy9pbnZhbGlkYXRlQ2h1bmsuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgc25hcFRvQ2h1bmsgfSBmcm9tICcuL3NuYXAuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIVU5LX1NJWkUgPSAwLjAxO1xyXG5leHBvcnQgY29uc3QgQ0hVTktfUkFESVVTID0gMTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXF1ZXN0QXBpUm9hZHNBbmRDaHVua3NCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7XHJcbiAgICBhbGVydChcIkNsaXF1ZSBzdXIgbGEgY2FydGUgcG91ciBmYWlyZSB1bmUgcmVxdWV0ZSBhcGkgcG91ciBham91dGVyIHVuIGNodW5rIGRlIHJvdXRlcyAoMC4wMcKwIHggMC4wMcKwKS5cIik7XHJcblxyXG4gICAgbWFwLm9uY2UoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBsYXQsIGxuZyB9ID0gZS5sYXRsbmc7XHJcblxyXG4gICAgICAgIGNvbnN0IHNuYXBwZWQgPSBzbmFwVG9DaHVuayhsYXQsIGxuZyk7XHJcblxyXG4gICAgICAgIGRlYnVnTG9nKFwibmV0d29ya1wiLCBcIvCfk6EgYWRkaW5nIHJvYWRzIGNodW5rOlwiLCBzbmFwcGVkLmNodW5rSWQpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS9hZGQtcm9hZHMtY2h1bmsnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhdDogc25hcHBlZC5sYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBzbmFwcGVkLmxuZ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZWZyZXNoQ2h1bmsoc25hcHBlZC5sYXQsIHNuYXBwZWQubG5nKTtcclxuXHJcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwi8J+UhCBjaHVuayByZWZyZXNoZWQ6XCIsIHNuYXBwZWQuY2h1bmtJZCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBkZWJ1Z0Vycm9yKFwibmV0d29ya1wiLCBcImZhaWxlZCB0byBhZGQgcm9hZHMgY2h1bmtcIiwgZXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnJztcclxuICAgIH0pO1xyXG59KTsiLCJpbXBvcnQgeyBmbHlUbyB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRHUFMoZGVmYXVsdExhdCwgZGVmYXVsdExuZykge1xyXG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xyXG4gICAgICAgIGxldCBncHNGb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbihcclxuICAgICAgICAgICAgKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBncHNGb3VuZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZmx5VG8oXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHt9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFncHNGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgZmx5VG8oZGVmYXVsdExhdCwgZGVmYXVsdExuZywgNyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA1NTAwKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENIVU5LX1NJWkUgfSBmcm9tICcuL2NodW5rLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzbmFwVG9DaHVuayhsYXQsIGxuZykge1xyXG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IobGF0IC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihsbmcgLyBDSFVOS19TSVpFKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhdDogeCAqIENIVU5LX1NJWkUsXHJcbiAgICAgICAgbG5nOiB5ICogQ0hVTktfU0laRSxcclxuICAgICAgICBjaHVua0lkOiBgJHt4fV8ke3l9YFxyXG4gICAgfTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBpbml0QnVpbGRpbmdUaW1lcnMoKSB7XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVUaW1lcnMoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGl2ZXJ5LXRpbWVyLXdyYXBwZXInKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2NoZWR1bGVkQXQgPSBlbC5kYXRhc2V0LnNjaGVkdWxlZEF0O1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lckVsICAgICA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5kZWxpdmVyeS10aW1lcicpO1xyXG4gICAgICAgICAgICBpZiAoIXRpbWVyRWwpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICghc2NoZWR1bGVkQXQpIHtcclxuICAgICAgICAgICAgICAgIHRpbWVyRWwudGV4dENvbnRlbnQgPSAnQXVjdW5lIGxpdnJhaXNvbiBwcsOpdnVlJztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgbm93ICAgICAgID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY29uc3Qgc2NoZWR1bGVkID0gbmV3IERhdGUoc2NoZWR1bGVkQXQpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY29uc3QgZGlmZlNlYyAgID0gTWF0aC5yb3VuZCgoc2NoZWR1bGVkIC0gbm93KSAvIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpZmZTZWMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMaXZyYWlzb24gcGFzIGVuY29yZSBwYXJ0aWVcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnMgPSBNYXRoLmZsb29yKGRpZmZTZWMgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNzID0gZGlmZlNlYyAlIDYwO1xyXG4gICAgICAgICAgICAgICAgdGltZXJFbC5pbm5lckhUTUwgPSBgUHJvY2hhaW4gZMOpcGFydCBkYW5zIDogPHN0cm9uZz4ke21pbnN9bWluICR7c2Vjc31zPC9zdHJvbmc+YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEVuIHRyYW5zaXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBNYXRoLmFicyhkaWZmU2VjKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnMgICAgPSBNYXRoLmZsb29yKGVsYXBzZWQgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNzICAgID0gZWxhcHNlZCAlIDYwO1xyXG4gICAgICAgICAgICAgICAgdGltZXJFbC5pbm5lckhUTUwgPSBgQ29udm9pIGVuIHJvdXRlIGRlcHVpcyA6IDxzdHJvbmc+JHttaW5zfW1pbiAke3NlY3N9czwvc3Ryb25nPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNaXNlIMOgIGpvdXIgY2hhcXVlIHNlY29uZGVcclxuICAgIHVwZGF0ZVRpbWVycygpO1xyXG4gICAgc2V0SW50ZXJ2YWwodXBkYXRlVGltZXJzLCAxMDAwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoaXNvU3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoaXNvU3RyaW5nKS50b0xvY2FsZVN0cmluZygnZnItRlInLCB7XHJcbiAgICAgICAgdGltZVpvbmU6ICdFdXJvcGUvUGFyaXMnLFxyXG4gICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnbGVhZmxldCc7XHJcbmltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJztcclxuXHJcbmRlbGV0ZSBMLkljb24uRGVmYXVsdC5wcm90b3R5cGUuX2dldEljb25Vcmw7XHJcbkwuSWNvbi5EZWZhdWx0Lm1lcmdlT3B0aW9ucyh7XHJcbiAgICBpY29uUmV0aW5hVXJsOiByZXF1aXJlKCdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1pY29uLTJ4LnBuZycpLFxyXG4gICAgaWNvblVybDogcmVxdWlyZSgnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi5wbmcnKSxcclxuICAgIHNoYWRvd1VybDogcmVxdWlyZSgnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItc2hhZG93LnBuZycpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEw7IiwiY29uc3QgQ0FDSEVfVkVSU0lPTiA9ICd2MSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FjaGVLZXkoY2h1bmtJZCkge1xyXG4gICAgcmV0dXJuIGAke0NBQ0hFX1ZFUlNJT059X2NodW5rXyR7Y2h1bmtJZH1gO1xyXG59IiwiaW1wb3J0IHsgVFlQRV9NQVAgfSBmcm9tICcuL3R5cGVNYXAuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFQlVHID0ge1xyXG4gICAgZW5hYmxlZDogd2luZG93LkFQUF9ERUJVRyA/PyBmYWxzZSxcclxuXHJcbiAgICBtZXJjdXJlOiB0cnVlLFxyXG4gICAgaW52ZW50b3J5OiB0cnVlLFxyXG4gICAgZGVsaXZlcnk6IHRydWUsXHJcbiAgICBidWlsZGluZ3M6IHRydWUsXHJcblxyXG4gICAgY2h1bmtzOiB0cnVlLFxyXG4gICAgbmV0d29yazogdHJ1ZSxcclxuICAgIGNhY2hlOiB0cnVlLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gY2FuTG9nKHR5cGUpIHtcclxuICAgIGlmICghREVCVUcuZW5hYmxlZCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBrZXkgPSBUWVBFX01BUD8uW3R5cGVdIHx8IHR5cGU7XHJcblxyXG4gICAgcmV0dXJuIERFQlVHW2tleV0gIT09IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdMb2codHlwZSwgLi4uYXJncykge1xyXG4gICAgaWYgKCFjYW5Mb2codHlwZSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYFske1RZUEVfTUFQPy5bdHlwZV0gfHwgdHlwZX1dYCxcclxuICAgICAgICAuLi5hcmdzXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdXYXJuKHR5cGUsIC4uLmFyZ3MpIHtcclxuICAgIGlmICghY2FuTG9nKHR5cGUpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBgWyR7VFlQRV9NQVA/Llt0eXBlXSB8fCB0eXBlfV1gLFxyXG4gICAgICAgIC4uLmFyZ3NcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z0Vycm9yKHR5cGUsIC4uLmFyZ3MpIHtcclxuICAgIGlmICghY2FuTG9nKHR5cGUpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgYFske1RZUEVfTUFQPy5bdHlwZV0gfHwgdHlwZX1dYCxcclxuICAgICAgICAuLi5hcmdzXHJcbiAgICApO1xyXG59IiwiZXhwb3J0IGNvbnN0IFRZUEVfTUFQID0ge1xyXG4gICAgbWVyY3VyZTogJ01FUkNVUkUnLFxyXG4gICAgaW52ZW50b3J5OiAnSU5WRU5UT1JZJyxcclxuICAgIGRlbGl2ZXJ5OiAnREVMSVZFUlknLFxyXG4gICAgYnVpbGRpbmdzOiAnQlVJTERJTkdTJyxcclxuICAgIGNodW5rczogJ0NIVU5LUycsXHJcbiAgICBuZXR3b3JrOiAnTkVUV09SSycsXHJcbiAgICBjYWNoZTogJ0NBQ0hFJyxcclxufTsiXSwibmFtZXMiOlsiTCIsImRlYnVnTG9nIiwiQ0hVTktfU0laRSIsImdldE1hcCIsImlzR3JpZExheWVyQWN0aXZlIiwiZ3JpZExheWVyIiwibGF5ZXJHcm91cCIsInZpc2libGVDaHVua3MiLCJNYXAiLCJpbml0R3JpZExheWVyIiwibWFwIiwiem9vbSIsImdldFpvb20iLCJib3VuZHMiLCJnZXRCb3VuZHMiLCJtaW5MYXQiLCJNYXRoIiwiZmxvb3IiLCJnZXRTb3V0aCIsIm1heExhdCIsImNlaWwiLCJnZXROb3J0aCIsIm1pbkxuZyIsImdldFdlc3QiLCJtYXhMbmciLCJnZXRFYXN0IiwibmV3VmlzaWJsZSIsIlNldCIsImkiLCJfbG9vcCIsImlkIiwiY29uY2F0IiwiaiIsImFkZCIsImhhcyIsImxhdCIsImxuZyIsInJlY3QiLCJyZWN0YW5nbGUiLCJjb2xvciIsIndlaWdodCIsImZpbGxPcGFjaXR5Iiwib24iLCJzZXRTdHlsZSIsImFkZExheWVyIiwic2V0IiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJlbnRyaWVzIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJfc3RlcCR2YWx1ZSIsIl9zbGljZWRUb0FycmF5IiwidmFsdWUiLCJyZW1vdmVMYXllciIsImVyciIsImUiLCJmIiwic2l6ZSIsInNldENodW5rQ29sb3IiLCJnZXQiLCJidWlsZFJlcXVlc3QiLCJ0eXBlSWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGVfaWQiLCJnZXRCdWlsZGluZ3MiLCJ0aGVuIiwicmVzIiwianNvbiIsImdldEJ1aWxkaW5nQ29zdHMiLCJidWlsZGluZ1R5cGVJZCIsInVwZ3JhZGVCdWlsZGluZyIsImJ1aWxkaW5nSWQiLCJnZXRVcGdyYWRlSW5mbyIsImZseVRvIiwicm9hZHNTdGF0ZSIsImdldEFsbExvYWRlZFJvYWRzIiwiZ2V0QnVpbGRpbmdJbWFnZSIsInNhZmVMb2FkQ2h1bmsiLCJsb2FkVmlzaWJsZVJvYWRDaHVua3MiLCJmaW5kQ2xvc2VzdFBvaW50T25Sb2FkIiwiZmluZENsb3Nlc3RTZWdtZW50Iiwic2hvd05vdGlmaWNhdGlvbiIsImdldEFkbWluQ29vcmRzIiwiZGVidWdXYXJuIiwiZGVidWdFcnJvciIsImRyYXdCYXNlQ2lyY2xlIiwicmVtb3ZlQmFzZUNpcmNsZSIsInJlZnJlc2hTaWRlYmFyIiwiYmFzZU1hcmtlciIsImJhc2VDaXJjbGUiLCJiYXNlUG9zaXRpb24iLCJiYXNlQ3JlYXRlZCIsInBsYWNpbmdCYXNlIiwicHJldmlld01hcmtlciIsInByZXZpZXdDaXJjbGUiLCJwcmV2aWV3U25hcExhdExuZyIsInByZXZpZXdMaW5lIiwiaGlnaGxpZ2h0ZWRTZWdtZW50IiwiY3VycmVudFBsYXllckZhY3Rpb24iLCJzZXRDdXJyZW50UGxheWVyRmFjdGlvbiIsImZhY3Rpb24iLCJ0b0xvd2VyQ2FzZSIsImdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uIiwiaW5pdEJhc2VVSSIsImJhc2VCdG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vZGUiLCJkYXRhc2V0IiwiYWxlcnQiLCJnZXRDb250YWluZXIiLCJzdHlsZSIsImN1cnNvciIsIl9wcmV2aWV3U25hcExhdExuZyIsImlzQmFzZVBsYWNlbWVudFZhbGlkIiwiY2xlYW51cFByZXZpZXciLCJjcmVhdGVCYXNlIiwicm9hZHMiLCJsZW5ndGgiLCJyZXN1bHQiLCJsYXRsbmciLCJwb2ludCIsImlzVmFsaWQiLCJjaXJjbGUiLCJyYWRpdXMiLCJhZGRUbyIsIm1hcmtlciIsInBvbHlsaW5lIiwib3BhY2l0eSIsImRhc2hBcnJheSIsInNlZ21lbnQiLCJ1cGRhdGVCYXNlRGlzcGxheSIsInVwZGF0ZU90aGVyQmFzZXMiLCJlbmFibGVBZG1pbkNvb3JkaW5hdGVQaWNrZXIiLCJ3aW5kb3ciLCJvdGhlckJhc2VzIiwiZXZlcnkiLCJiYXNlIiwiZGlzdCIsImRpc3RhbmNlIiwiYmFzZVR5cGVJZCIsIm9rIiwiRXJyb3IiLCJlcnJvciIsIl9yZWYiLCJyZW1vdmVCYXNlIiwibWVzc2FnZSIsImxvYWRPdGhlckJhc2UiLCJwc2V1ZG8iLCJOdW1iZXIiLCJpc0Zpbml0ZSIsImlzUGxheWVyQmFzZSIsImljb24iLCJjcmVhdGVCYXNlSWNvbiIsImJpbmRQb3B1cCIsInB1c2giLCJmb3JFYWNoIiwiaGFzTGF5ZXIiLCJzZXRJY29uIiwibG9hZEJhc2VGcm9tU2VydmVyIiwiaWNvblVybCIsImljb25TaXplIiwiaWNvbkFuY2hvciIsInBvcHVwQW5jaG9yIiwidCIsInIiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93Iiwic2VsZWN0ZWRCdWlsZGluZ1R5cGUiLCJwcmV2aWV3QnVpbGRpbmdNYXJrZXIiLCJpbml0QnVpbGRNb2RlIiwiX2NhbGxlZSIsImJ0biIsIl9jb250ZXh0IiwidGFyZ2V0IiwiY2xvc2VzdCIsInNlbGVjdEJ1aWxkaW5nVHlwZSIsIl94Iiwib25NYXBDbGljayIsIm9uTWFwTW91c2VNb3ZlIiwiX3gyIiwiX3gzIiwiX3NlbGVjdEJ1aWxkaW5nVHlwZSIsIl9jYWxsZWUyIiwiYnV0dG9uIiwiZGF0YSIsIl90IiwiX2NvbnRleHQyIiwiY2xlYXJCdWlsZGluZ1NlbGVjdGlvbiIsImNsYXNzTGlzdCIsIm5hbWUiLCJjb3N0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmUiLCJfeDQiLCJfb25NYXBDbGljayIsIl9jYWxsZWUzIiwicmVzcG9uc2UiLCJfdDIiLCJfY29udGV4dDMiLCJzZXRMYXRMbmciLCJhY3RpdmF0ZUJ1aWxkTW9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGljayIsImRlYWN0aXZhdGVCdWlsZE1vZGUiLCJpc0J1aWxkTW9kZUFjdGl2ZSIsIl9yZWZyZXNoU2lkZWJhciIsIl9jYWxsZWU0IiwiaHRtbCIsInBhcnNlciIsImRvYyIsIm5ld1NpZGViYXIiLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCJfdDMiLCJfY29udGV4dDQiLCJ0ZXh0IiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwicmVwbGFjZVdpdGgiLCJidWlsZGluZ01hcmtlcnMiLCJwb3B1cENvbnRlbnRMb2FkZWQiLCJjdXJyZW50UGxheWVySWQiLCJzZXRDdXJyZW50UGxheWVySWQiLCJsb2FkQnVpbGRpbmdzRnJvbURhdGEiLCJidWlsZGluZ3MiLCJBcnJheSIsImlzQXJyYXkiLCJiIiwiX2IkdHlwZSIsImNvZGUiLCJ0eXBlIiwiYnVpbGRpbmdGYWN0aW9uIiwiY3JlYXRlQnVpbGRpbmdJY29uIiwiYnVpbGRpbmdEYXRhIiwibGV2ZWwiLCJvd25lcklkIiwicHJvZHVjdGlvbiIsInJlc291cmNlX3R5cGUiLCJjcmVhdGVTaW1wbGVQb3B1cCIsImlzT3duQnVpbGRpbmciLCJsb2FkVXBncmFkZUluZm9Bc3luYyIsImJ1aWxkaW5nIiwiX2xvYWRVcGdyYWRlSW5mb0FzeW5jIiwic2V0UG9wdXBDb250ZW50Iiwic3RhdHVzIiwibG9hZEJ1aWxkaW5ncyIsImJ1aWxkaW5nQ29kZSIsInVuZGVmaW5lZCIsImFjdHVhbEZhY3Rpb24iLCJidWlsZGluZ1NsdWciLCJyZXBsYWNlIiwiZmFjdGlvblNsdWciLCJlbnRyeSIsIm5ld0xldmVsIiwiZ2V0QnVpbGRpbmdUeXBlQ29zdHMiLCJfeDUiLCJfZ2V0QnVpbGRpbmdUeXBlQ29zdHMiLCJjYW5CdWlsZEJ1aWxkaW5nIiwiX3g2IiwiX2NhbkJ1aWxkQnVpbGRpbmciLCJyZXNvdXJjZXMiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsInJlc291cmNlIiwiYW1vdW50IiwicXVhbnRpdHkiLCJyZWZyZXNoQnVpbGRpbmdQb3B1cCIsIl94NyIsIl9yZWZyZXNoQnVpbGRpbmdQb3B1cCIsIl9jYWxsZWU1IiwiX2NvbnRleHQ1IiwiaXNQb3B1cE9wZW4iLCJkcmF3Um9hZFNlZ21lbnQiLCJmb3JtYXREYXRlIiwiYWN0aXZlRGVsaXZlcmllcyIsImRlbGl2ZXJ5TGF5ZXIiLCJhbmltYXRpb25GcmFtZSIsInBlbmRpbmdFdmVudHMiLCJ0cnVja0ljb24iLCJkaXZJY29uIiwiY2xhc3NOYW1lIiwiaW5pdERlbGl2ZXJ5RXZlbnRzIiwiaW5pdERlbGl2ZXJ5TGF5ZXJzIiwibG9hZERlbGl2ZXJpZXMiLCJfZGF0YSRmYWN0aW9uIiwiZGV0YWlsIiwiaGFuZGxlRGVsaXZlcnlFdmVudCIsImRlbGl2ZXJ5SWQiLCJwcm9ncmVzcyIsIndheXBvaW50cyIsInJlc291cmNlQ29kZSIsInJlc291cmNlTGFiZWwiLCJlc3RpbWF0ZWRUaW1lIiwiZHVyYXRpb24iLCJzY2hlZHVsZWRBdCIsInN0YXJ0QW5pbWF0aW9uIiwicHJvY2Vzc0RlbGl2ZXJ5RXZlbnQiLCJfbG9hZERlbGl2ZXJpZXMiLCJkZWxpdmVyaWVzIiwiZGVsaXZlcnlEYXRhIiwicmVtb3ZlRGVsaXZlcnkiLCJ1cHNlcnREZWxpdmVyeSIsImtleSIsImNvbnNvbGUiLCJ3YXJuIiwicGFyc2UiLCJfdW51c2VkIiwibGF0bG5ncyIsIndwIiwiX2RhdGEkcHJvZ3Jlc3MiLCJfZGF0YSRzY2hlZHVsZWRBdCIsIl9kYXRhJHByb2dyZXNzMiIsImRlbGl2ZXJ5IiwibGFzdFNlcnZlclByb2dyZXNzIiwibGFzdFNlcnZlclRpbWUiLCJEYXRlIiwibm93IiwiX2RhdGEkcXVhbnRpdHkiLCJfZGF0YSRyZXNvdXJjZUxhYmVsIiwiX2RhdGEkcHJvZ3Jlc3MzIiwiX2RhdGEkcHJvZ3Jlc3M0IiwiX2RhdGEkZXN0aW1hdGVkVGltZSIsIl9kYXRhJHNjaGVkdWxlZEF0MiIsIl9kYXRhJHByb2dyZXNzNSIsInNjaGVkdWxlZFRpbWUiLCJhbmltYXRlIiwiaW50ZXJwb2xhdGVkUHJvZ3Jlc3MiLCJzdGFydFRpbWUiLCJnZXRUaW1lIiwiZWxhcHNlZCIsIm1pbiIsIm1heCIsImVsYXBzZWRTaW5jZVNlcnZlciIsInByb2dyZXNzUGVyU2Vjb25kIiwicG9zIiwiaW50ZXJwb2xhdGVBbG9uZ1JvdXRlIiwiZWwiLCJ0ZXh0Q29udGVudCIsInJvdW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidG90YWxEaXN0Iiwic2VnbWVudHMiLCJoYXZlcnNpbmUiLCJSIiwiZExhdCIsIlBJIiwiZExuZyIsIngiLCJwb3ciLCJzaW4iLCJjb3MiLCJhdGFuMiIsInNxcnQiLCJpbml0TWFwIiwibG9hZFdvcmxkIiwiaW5pdEdQUyIsImluaXROb3RpZmljYXRpb25zIiwiaW5pdEJ1aWxkaW5nVGltZXJzIiwiaW5pdEludmVudG9yeUV2ZW50cyIsImVuYWJsZUxlYWZsZXREZWJ1ZyIsImN1cnJlbnRVc2VyIiwiZGVidWciLCJvcmlnaW5hbE1hcmtlciIsIm9yaWdpbmFsQ2lyY2xlIiwib3JpZ2luYWxQb2x5bGluZSIsIl9sZW4iLCJhcmdzIiwiX2tleSIsImxvZyIsInRyYWNlIiwiX2xlbjIiLCJfa2V5MiIsIl9sZW4zIiwiX2tleTMiLCJoYW5kbGVJbnZlbnRvcnlVcGRhdGUiLCJfZGF0YSRyZXNvdXJjZXMiLCJ1cGRhdGVOYXZiYXJSZXNvdXJjZXMiLCJwb3B1cCIsInBhcnNlSW50IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiaXRlbSIsInF0eUVsZW1lbnQiLCJjaGVja1VwZ3JhZGVSZXF1aXJlbWVudHMiLCJyZXF1aXJlZEVsZW1lbnQiLCJyZXF1aXJlZCIsImdldEF0dHJpYnV0ZSIsInRvZ2dsZSIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsImZyb20iLCJ0ZXN0IiwibmV4dCIsIl90eXBlb2YiLCJkZXBvc2l0TWFya2VycyIsImJ1aWxkaW5nVHlwZXNDYWNoZSIsInJlc291cmNlVHlwZXNDYWNoZSIsImxvYWRCdWlsZGluZ1R5cGVzIiwiX2xvYWRCdWlsZGluZ1R5cGVzIiwibG9hZFJlc291cmNlVHlwZXMiLCJfbG9hZFJlc291cmNlVHlwZXMiLCJfdDQiLCJERUZBVUxUX0NPTE9SUyIsImdldFJlc291cmNlQ29sb3IiLCJfcmVzb3VyY2VUeXBlc0NhY2hlJHQiLCJfcmVzb3VyY2VUeXBlc0NhY2hlJHQyIiwiZmluZEJ1aWxkaW5nVHlwZUZvclJlc291cmNlIiwiX2ZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZSIsInJlc291cmNlVHlwZSIsImJ1aWxkaW5nVHlwZXMiLCJidWlsZGluZ1R5cGUiLCJmaW5kIiwiYnQiLCJfYnQkcmVzb3VyY2VUeXBlIiwicHJvZHVjdGlvbl9yYXRlIiwiZGVwb3NpdExheWVycyIsImluaXREZXBvc2l0TGF5ZXJzIiwiX2luaXREZXBvc2l0TGF5ZXJzIiwiY29udHJvbCIsInJlc291cmNlVHlwZXMiLCJydCIsImFkZE92ZXJsYXkiLCJsYWJlbCIsImxvYWREZXBvc2l0c0ZvckNodW5rIiwiX2xvYWREZXBvc2l0c0ZvckNodW5rIiwiX2NhbGxlZTYiLCJjaHVua0lkIiwiZGVwb3NpdHMiLCJfdDUiLCJfY29udGV4dDYiLCJyZW5kZXJEZXBvc2l0c0Zyb21EYXRhIiwiZm9ybWF0Q29zdHMiLCJqb2luIiwiX3JlZjIiLCJjaGVja0NhbkNsYWltIiwiX2NoZWNrQ2FuQ2xhaW0iLCJfY2FsbGVlNyIsImRlcG9zaXQiLCJfcmV0IiwiX2NvbnRleHQ4Iiwia2V5cyIsIl9wbGF5ZXJSZXNvdXJjZXMkcmVzbyIsInBsYXllclJlc291cmNlcyIsIl9jb250ZXh0NyIsIl9yZWdlbmVyYXRvclZhbHVlcyIsImxvYWREZXBvc2l0SW5mb0FzeW5jIiwiX3g4IiwiX3g5IiwiX2xvYWREZXBvc2l0SW5mb0FzeW5jIiwiX2NhbGxlZTgiLCJkZXBvc2l0c0lEIiwiZGVwb3NpdERhdGEiLCJfdDYiLCJfY29udGV4dDkiLCJsYXllciIsImNpcmNsZU1hcmtlciIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZmlsbENvbG9yIiwiY2xhaW1EZXBvc2l0IiwiX3JlZjMiLCJyZXNwb25zZVRleHQiLCJkZXBvc2l0X2lkIiwibG9jYXRpb24iLCJyZWxvYWQiLCJfeDAiLCJfeDEiLCJtYXJrZXJJY29uIiwibWFya2VyU2hhZG93IiwiTWFya2VyIiwib3B0aW9ucyIsInNoYWRvd1VybCIsIm1hcEluc3RhbmNlIiwibW92ZVRpbWVvdXQiLCJpc0NodW5rTW9kZSIsInNldFZpZXciLCJ0aWxlTGF5ZXIiLCJhdHRyaWJ1dGlvbiIsImZpcmUiLCJsYXllcnNDb250cm9sIiwibGF5ZXJzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImVudGVyQ2h1bmtNb2RlIiwiZXhpdENodW5rTW9kZSIsIl9tYXBJbnN0YW5jZSIsInN0YXR1c1RleHQiLCJwbGF5ZXJzIiwiaGFzQ2VudGVyZWQiLCJwbGF5ZXIiLCJpc01lIiwiaW52YWxpZGF0ZUNodW5rIiwiY2h1bmtzIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImJlc3RQb2ludCIsImJlc3REaXN0YW5jZSIsIkluZmluaXR5Iiwicm9hZCIsInBvaW50cyIsImFSYXciLCJiUmF3IiwibGF0TG5nIiwicHJvamVjdGVkIiwicHJvamVjdFBvaW50T25TZWdtZW50IiwiYmVzdFNlZ21lbnQiLCJtaWQiLCJBIiwiQiIsIlAiLCJBQiIsIkFQIiwiYWIyIiwiZGlzdGFuY2VUb1NlZ21lbnQiLCJkZWJ1Z1JvYWRzIiwiX24iLCJGIiwiZ2V0Q2FjaGVLZXkiLCJsb2FkaW5nUXVldWUiLCJNQVhfQ09OQ1VSUkVOVCIsImFjdGl2ZVJlcXVlc3RzIiwiZ2V0Q2h1bmtJZCIsIl9sb2FkVmlzaWJsZVJvYWRDaHVua3MiLCJjaHVua3NUb0xvYWQiLCJmaW5hbENodW5rc1RvTG9hZCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJfY2h1bmtJZDMiLCJfY2FjaGVLZXkiLCJjYWNoZWQiLCJfZmluYWxDaHVua3NUb0xvYWQiLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwyIiwicm9hZHNSZXNwb25zZSIsImJ1aWxkaW5nc1Jlc3BvbnNlIiwiZGVwb3NpdHNSZXNwb25zZSIsInJvYWRzRGF0YSIsImJ1aWxkaW5nc0RhdGEiLCJkZXBvc2l0c0RhdGEiLCJidWlsZGluZ3NCeUNodW5rIiwiX2kyIiwiX2ZpbmFsQ2h1bmtzVG9Mb2FkMiIsIl9yb2Fkc0RhdGEkX2NodW5rSWQiLCJfYnVpbGRpbmdzRGF0YSRfY2h1bmsiLCJfY2h1bmtJZCIsImNodW5rRGF0YSIsImhhc1JvYWRzIiwiY2FjaGVLZXkiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiX2NodW5rSWQyIiwiZ2V0VmlzaWJsZUNodW5rcyIsImZpbHRlciIsImxvYWRlZENodW5rcyIsImdldEl0ZW0iLCJ0cyIsInJlZnJlc2hDaHVua0NvbG9ycyIsImFsbCIsImNJZCIsInNldEl0ZW0iLCJjaHVuayIsInJlZnJlc2hDaHVuayIsIl9yZWZyZXNoQ2h1bmsiLCJmZXRjaFNpbmdsZUNodW5rIiwiX2ZldGNoU2luZ2xlQ2h1bmsiLCJfcm9hZHNEYXRhJGNodW5rSWQiLCJfYnVpbGRpbmdzRGF0YSRjaHVua0kiLCJfeWllbGQkUHJvbWlzZSRhbGwzIiwiX3lpZWxkJFByb21pc2UkYWxsNCIsInJvYWRzUmVzIiwiYnVpbGRpbmdzUmVzIiwiZGVwb3NpdHNSZXMiLCJjaHVua0RlcG9zaXRzIiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsInJvYWRzUmVhZHkiLCJkcmF3blJvYWRzIiwicm9hZExheWVycyIsImJ1aWxkaW5nTGF5ZXJzIiwiY2FjaGVkUm9hZHMiLCJjYWNoZURpcnR5IiwibWFya1JvYWRDYWNoZURpcnR5IiwidmFsdWVzIiwiZmxhdE1hcCIsImV2ZW50cyIsImV2ZW50Iiwibm90aWYiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJiYXNlQ2lyY2xlcyIsInJvYWRTZWdtZW50cyIsIkZBQ1RJT05fQ09MT1JTIiwiZ2V0RmFjdGlvbkNvbG9yIiwiYmFzZUlkIiwicGxheWVyRmFjdGlvbiIsImNsZWFyQWxsQmFzZUNpcmNsZXMiLCJjbGVhciIsInJvYWRJZCIsImNvb3JkcyIsInJlbW92ZVJvYWRTZWdtZW50IiwiY2xlYXJBbGxSb2FkU2VnbWVudHMiLCJ1cGRhdGVCYXNlQ2lyY2xlcyIsImJhc2VzIiwidXBkYXRlUm9hZFNlZ21lbnRzIiwiaXNQbGF5ZXJSb2FkIiwic2V0Um9hZFNlZ21lbnRDb2xvciIsImZvcm1hdCIsInRvRml4ZWQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzbmFwVG9DaHVuayIsIkNIVU5LX1JBRElVUyIsIm9uY2UiLCJfZSRsYXRsbmciLCJzbmFwcGVkIiwiZGVmYXVsdExhdCIsImRlZmF1bHRMbmciLCJnZW9sb2NhdGlvbiIsImdwc0ZvdW5kIiwid2F0Y2hQb3NpdGlvbiIsInBvc2l0aW9uIiwidGltZW91dCIsInVwZGF0ZVRpbWVycyIsInRpbWVyRWwiLCJzY2hlZHVsZWQiLCJkaWZmU2VjIiwibWlucyIsInNlY3MiLCJpbm5lckhUTUwiLCJhYnMiLCJzZXRJbnRlcnZhbCIsImlzb1N0cmluZyIsInRvTG9jYWxlU3RyaW5nIiwidGltZVpvbmUiLCJob3VyIiwibWludXRlIiwiSWNvbiIsIkRlZmF1bHQiLCJfZ2V0SWNvblVybCIsIm1lcmdlT3B0aW9ucyIsImljb25SZXRpbmFVcmwiLCJyZXF1aXJlIiwiQ0FDSEVfVkVSU0lPTiIsIlRZUEVfTUFQIiwiREVCVUciLCJlbmFibGVkIiwiX3dpbmRvdyRBUFBfREVCVUciLCJBUFBfREVCVUciLCJtZXJjdXJlIiwiaW52ZW50b3J5IiwibmV0d29yayIsImNhY2hlIiwiY2FuTG9nIiwiX2NvbnNvbGUiLCJfY29uc29sZTIiLCJfY29uc29sZTMiXSwic291cmNlUm9vdCI6IiJ9