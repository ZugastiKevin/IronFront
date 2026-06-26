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
/* harmony export */   refreshBuildingPopup: () => (/* binding */ refreshBuildingPopup)
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
      isMine: Boolean(b.isMine),
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
      handlePopupOpen(buildingData, marker);
    });
  });
}

/**
 * Centralise la logique popup
 */
function handlePopupOpen(buildingData, marker) {
  if (!(buildingData !== null && buildingData !== void 0 && buildingData.id)) return;
  if (!isOwnBuilding(buildingData)) {
    marker.setPopupContent(createSimplePopup(buildingData));
    return;
  }
  loadUpgradeInfoAsync(buildingData.id, marker, buildingData);
}

/**
 * Vérifie si le bâtiment appartient au joueur actif
 */
function isOwnBuilding(building) {
  return building.isMine === true;
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
  if (!map) return;
  if (!deliveryLayer || deliveryLayer._map !== map) {
    if (deliveryLayer) {
      deliveryLayer.remove();
    }
    deliveryLayer = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_29__["default"].layerGroup().addTo(map);
  }
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
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/debug.js */ "./assets/scripts/utils/debug.js");









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
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_8__.debugLog)("leaflet", "🧨 MARKER CALL:", args);
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_8__.debugLog)("leaflet", "MARKER STACK");
    return originalMarker.apply(this, args);
  };
  L.circle = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_8__.debugLog)("leaflet", "🧨 CIRCLE CALL:", args);
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_8__.debugLog)("leaflet", "CIRCLE STACK");
    return originalCircle.apply(this, args);
  };
  L.polyline = function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_8__.debugLog)("leaflet", "🧨 POLYLINE CALL:", args);
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_8__.debugLog)("leaflet", "POLYLINE STACK");
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
    if (!layer) return;
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

/***/ "./assets/scripts/Game/map/fogOfWar.js"
/*!*********************************************!*\
  !*** ./assets/scripts/Game/map/fogOfWar.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initFogOfWar: () => (/* binding */ initFogOfWar),
/* harmony export */   isPointVisible: () => (/* binding */ isPointVisible)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/esnext.iterator.some.js */ "./node_modules/core-js/modules/esnext.iterator.some.js");
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



























function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var fogLayer = null;
var visionSources = [];
var fogMode = 'disabled';
var mapInstance = null;
var FogOfWar = /*#__PURE__*/function () {
  function FogOfWar(map) {
    _classCallCheck(this, FogOfWar);
    this.map = map;
    this.canvas = document.createElement('canvas');
    this.ctx = this.initCanvas();
    this.visionSources = [];
    this.resize();
    this.bindEvents();
  }
  return _createClass(FogOfWar, [{
    key: "initCanvas",
    value: function initCanvas() {
      this.canvas.style.position = 'absolute';
      this.canvas.style.top = '0';
      this.canvas.style.left = '0';
      this.canvas.style.pointerEvents = 'none';
      this.canvas.style.zIndex = '500';
      this.canvas.style.width = '100%';
      this.canvas.style.height = '100%';
      var container = this.map.getContainer();
      container.appendChild(this.canvas);
      var ctx = this.canvas.getContext('2d');
      if (!ctx) {
        throw new Error('Canvas context unavailable');
      }
      return ctx;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;
      this.map.on('move zoom resize moveend zoomend', function () {
        _this.resize();
        _this.render(_this.visionSources);
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      var size = this.map.getSize();
      this.canvas.width = size.x;
      this.canvas.height = size.y;
      this.canvas.style.width = "".concat(size.x, "px");
      this.canvas.style.height = "".concat(size.y, "px");
    }
  }, {
    key: "updateSources",
    value: function updateSources(sources) {
      this.visionSources = sources;
      this.render(sources);
    }
  }, {
    key: "render",
    value: function render(sources) {
      var size = this.map.getSize();
      var ctx = this.ctx;
      ctx.clearRect(0, 0, size.x, size.y);

      // Brouillard
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(0,0,0,0.75)';
      ctx.fillRect(0, 0, size.x, size.y);

      // Découpe des zones visibles
      ctx.globalCompositeOperation = 'destination-out';
      var _iterator = _createForOfIteratorHelper(sources),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var source = _step.value;
          var center = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_27__["default"].latLng(source.lat, source.lng);
          var point = this.map.latLngToContainerPoint(center);
          var edge = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_27__["default"].latLng(source.lat, source.lng + source.radius);
          var radiusPx = point.distanceTo(this.map.latLngToContainerPoint(edge));
          var gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, radiusPx);
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
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      ctx.globalCompositeOperation = 'source-over';
    }
  }]);
}();
var fogInstance = null;

/**
 * Initialise le brouillard de guerre
 * @param {string} mode - Mode de brouillard ('enabled', 'disabled', 'debug')
 * @param {Array} sources - Sources de vision
 * @param {Object} map - Instance Leaflet
 */
function initFogOfWar(mode, sources, map) {
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
function isPointVisible(lat, lng) {
  var _fogInstance;
  if (fogMode === 'disabled' || fogMode === 'debug') {
    return true;
  }
  var sources = ((_fogInstance = fogInstance) === null || _fogInstance === void 0 ? void 0 : _fogInstance.visionSources) || [];
  return sources.some(function (source) {
    var dx = lat - source.lat;
    var dy = lng - source.lng;
    var distance = Math.sqrt(dx * dx + dy * dy);
    return distance <= source.radius;
  });
}

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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../Layers/gridLayer.js */ "./assets/scripts/Game/Layers/gridLayer.js");
/* harmony import */ var _roads_roads_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./roads/roads.js */ "./assets/scripts/Game/map/roads/roads.js");
/* harmony import */ var _roads_roadsState_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./roads/roadsState.js */ "./assets/scripts/Game/map/roads/roadsState.js");
/* harmony import */ var _buildings_base_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../buildings/base.js */ "./assets/scripts/Game/buildings/base.js");
/* harmony import */ var _buildings_building_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../buildings/building.js */ "./assets/scripts/Game/buildings/building.js");
/* harmony import */ var _deposits_deposits_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./deposits/deposits.js */ "./assets/scripts/Game/map/deposits/deposits.js");
/* harmony import */ var _fogOfWar_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./fogOfWar.js */ "./assets/scripts/Game/map/fogOfWar.js");
/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png");
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../utils/debug.js */ "./assets/scripts/utils/debug.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
























function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }











_LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_24__["default"].Marker.prototype.options.icon = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_24__["default"].icon({
  iconUrl: leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_32__,
  shadowUrl: leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_33__
});
var mapInstance = null;
var moveTimeout = null;
var isChunkMode = false;
function initMap(_x, _x2) {
  return _initMap.apply(this, arguments);
}
function _initMap() {
  _initMap = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(lat, lng) {
    var layersControl;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          mapInstance = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_24__["default"].map('map').setView([lat, lng], 7);
          _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_24__["default"].tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap'
          }).addTo(mapInstance);

          // Événement personnalisé pour signaler que la carte est prête
          mapInstance.fire('mapReady');
          layersControl = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_24__["default"].control.layers(null, {
            "Chunk Grid": _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__.gridLayer
          }).addTo(mapInstance);
          _context.n = 1;
          return (0,_deposits_deposits_js__WEBPACK_IMPORTED_MODULE_30__.initDepositLayers)(mapInstance, layersControl);
        case 1:
          // =====================
          // CENTRAL CHUNK CONTROLLER
          // =====================

          mapInstance.on('moveend', function () {
            if (!isChunkMode) return;
            if (mapInstance.getZoom() < 14) return;
            clearTimeout(moveTimeout);
            moveTimeout = setTimeout(function () {
              (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__.initGridLayer)();
              (0,_roads_roads_js__WEBPACK_IMPORTED_MODULE_26__.loadVisibleRoadChunks)();
            }, 300);
          });
          mapInstance.on('overlayadd', function (e) {
            if (e.layer === _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__.gridLayer) {
              (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_34__.debugLog)("grid", "Grid ON");
              (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__.initGridLayer)();
              (0,_roads_roads_js__WEBPACK_IMPORTED_MODULE_26__.loadVisibleRoadChunks)();
            }
          });
          mapInstance.on('overlayremove', function (e) {
            if (e.layer === _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__.gridLayer) {
              (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_34__.debugLog)("grid", "Grid OFF");
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
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _initMap.apply(this, arguments);
}
function isGridLayerActive() {
  var _mapInstance;
  return (_mapInstance = mapInstance) === null || _mapInstance === void 0 ? void 0 : _mapInstance.hasLayer(_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__.gridLayer);
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
        if (player.isMe) {
          (0,_buildings_base_js__WEBPACK_IMPORTED_MODULE_28__.setCurrentPlayerFaction)(player.faction);
          (0,_buildings_base_js__WEBPACK_IMPORTED_MODULE_28__.loadBaseFromServer)(player.lat, player.lng);
          if (!hasCentered) {
            flyTo(player.lat, player.lng, 16);
            hasCentered = true;
          }
          return;
        }
        (0,_buildings_base_js__WEBPACK_IMPORTED_MODULE_28__.loadOtherBase)(player.lat, player.lng, player.pseudo, player.faction);
      });
    }

    // Définir l'ID du joueur actif
    if (data.currentPlayerId) {
      (0,_buildings_building_js__WEBPACK_IMPORTED_MODULE_29__.setCurrentPlayerId)(data.currentPlayerId);
    }

    // Charger les bâtiments après avoir défini la faction du joueur
    (0,_buildings_building_js__WEBPACK_IMPORTED_MODULE_29__.loadBuildingsFromData)(data.buildings);

    // Initialiser le Fog of War
    if (data.fogMode && data.visionSources) {
      (0,_fogOfWar_js__WEBPACK_IMPORTED_MODULE_31__.initFogOfWar)(data.fogMode, data.visionSources, mapInstance);
    }
  })["catch"](function (err) {
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_34__.debugError)('map', "Erreur load world", err);
    // Ne pas rediriger automatiquement, laissez le système de login gérer la redirection
  });
}
function enterChunkMode() {
  if (isChunkMode) return;
  isChunkMode = true;
  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_34__.debugLog)("chunks", "ENTER CHUNK MODE");
  (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__.initGridLayer)();
  (0,_roads_roads_js__WEBPACK_IMPORTED_MODULE_26__.loadVisibleRoadChunks)();
}
function exitChunkMode() {
  if (!isChunkMode) return;
  isChunkMode = false;
  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_34__.debugLog)("chunks", "EXIT CHUNK MODE");
  if (mapInstance.hasLayer(_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__.gridLayer)) {
    mapInstance.removeLayer(_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__.gridLayer);
  }
}

/***/ },

/***/ "./assets/scripts/Game/map/roads/chunkCache.js"
/*!*****************************************************!*\
  !*** ./assets/scripts/Game/map/roads/chunkCache.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearChunkCache: () => (/* binding */ clearChunkCache),
/* harmony export */   getCachedChunk: () => (/* binding */ getCachedChunk),
/* harmony export */   invalidateChunkCache: () => (/* binding */ invalidateChunkCache),
/* harmony export */   setCachedChunk: () => (/* binding */ setCachedChunk)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


























var chunkCache = new Map();
var CACHE_TTL = 3600000;
function getCachedChunk(id) {
  var cached = chunkCache.get(id);
  if (!cached) {
    return null;
  }
  if (Date.now() - cached.ts > CACHE_TTL) {
    chunkCache["delete"](id);
    return null;
  }
  return cached;
}
function setCachedChunk(id, data) {
  chunkCache.set(id, _objectSpread(_objectSpread({}, data), {}, {
    ts: Date.now()
  }));
}
function invalidateChunkCache(id) {
  chunkCache["delete"](id);
}
function clearChunkCache() {
  chunkCache.clear();
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
/* harmony import */ var _chunkCache_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chunkCache.js */ "./assets/scripts/Game/map/roads/chunkCache.js");





function invalidateChunk(id) {
  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_3__.debugLog)("cache", "🧹 invalidate chunk:", id);
  delete _roadsState_js__WEBPACK_IMPORTED_MODULE_2__.roadsState.chunks[id];
  (0,_chunkCache_js__WEBPACK_IMPORTED_MODULE_4__.invalidateChunkCache)(id);
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
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/debug.js */ "./assets/scripts/utils/debug.js");










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
        debugWarn("roads", "BROKEN ROAD SEGMENT:", road);
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
  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_8__.debugLog)("roads", "ROADS DEBUG:", roads.length, roads);
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
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../map.js */ "./assets/scripts/Game/map/map.js");
/* harmony import */ var _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../utils/chunk.js */ "./assets/scripts/Game/utils/chunk.js");
/* harmony import */ var _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../Layers/gridLayer.js */ "./assets/scripts/Game/Layers/gridLayer.js");
/* harmony import */ var _invalidateChunk_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./invalidateChunk.js */ "./assets/scripts/Game/map/roads/invalidateChunk.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../utils/debug.js */ "./assets/scripts/utils/debug.js");
/* harmony import */ var _roadsState_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./roadsState.js */ "./assets/scripts/Game/map/roads/roadsState.js");
/* harmony import */ var _deposits_deposits_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../deposits/deposits.js */ "./assets/scripts/Game/map/deposits/deposits.js");
/* harmony import */ var _chunkCache_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./chunkCache.js */ "./assets/scripts/Game/map/roads/chunkCache.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
// MAIN LOAD VISIBLE
// ==========================
function loadVisibleRoadChunks() {
  return _loadVisibleRoadChunks.apply(this, arguments);
}

// ==========================
// REFRESH CHUNK
// ==========================
function _loadVisibleRoadChunks() {
  _loadVisibleRoadChunks = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var map, bounds, visibleChunks, chunksToLoad, finalChunksToLoad, _iterator2, _step2, _chunkId3, data, _i, _finalChunksToLoad, chunkId, _yield$Promise$all, _yield$Promise$all2, roadsResponse, buildingsResponse, depositsResponse, roadsData, buildingsData, depositsData, _i2, _finalChunksToLoad2, _roadsData$_chunkId, _buildingsData$_chunk, _chunkId, chunkData, hasRoads, _iterator3, _step3, _chunkId2, _t, _t2;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          map = (0,_map_js__WEBPACK_IMPORTED_MODULE_41__.getMap)();
          if (!(!map || map.getZoom() < 14)) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          bounds = map.getBounds();
          visibleChunks = getVisibleChunks(bounds);
          chunksToLoad = visibleChunks.filter(function (chunkId) {
            return !_roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.loadedChunks.has(chunkId);
          });
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
          data = (0,_chunkCache_js__WEBPACK_IMPORTED_MODULE_48__.getCachedChunk)(_chunkId3);
          if (!data) {
            _context.n = 4;
            break;
          }
          _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.chunks[_chunkId3] = {
            status: data.hasRoads ? 'loaded' : 'empty',
            roads: data.roads,
            buildings: data.buildings,
            deposits: data.deposits,
            hasRoads: data.hasRoads
          };
          _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.loadedChunks.add(_chunkId3);
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_43__.setChunkColor)(_chunkId3, data.hasRoads ? 'blue' : '#444');
          (0,_deposits_deposits_js__WEBPACK_IMPORTED_MODULE_47__.renderDepositsFromData)(data.deposits || [], map);
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
          for (_i = 0, _finalChunksToLoad = finalChunksToLoad; _i < _finalChunksToLoad.length; _i++) {
            chunkId = _finalChunksToLoad[_i];
            _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.chunks[chunkId] = {
              status: 'loading',
              roads: [],
              buildings: [],
              deposits: []
            };
            (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_43__.setChunkColor)(chunkId, 'orange');
          }
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
          for (_i2 = 0, _finalChunksToLoad2 = finalChunksToLoad; _i2 < _finalChunksToLoad2.length; _i2++) {
            _chunkId = _finalChunksToLoad2[_i2];
            chunkData = {
              roads: ((_roadsData$_chunkId = roadsData[_chunkId]) === null || _roadsData$_chunkId === void 0 ? void 0 : _roadsData$_chunkId.roads) || [],
              buildings: ((_buildingsData$_chunk = buildingsData[_chunkId]) === null || _buildingsData$_chunk === void 0 ? void 0 : _buildingsData$_chunk.buildings) || [],
              deposits: depositsData[_chunkId] || []
            };
            hasRoads = chunkData.roads.length > 0;
            _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.chunks[_chunkId] = _objectSpread(_objectSpread({
              status: hasRoads ? 'loaded' : 'empty'
            }, chunkData), {}, {
              hasRoads: hasRoads
            });
            _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.loadedChunks.add(_chunkId);
            (0,_chunkCache_js__WEBPACK_IMPORTED_MODULE_48__.setCachedChunk)(_chunkId, _objectSpread(_objectSpread({}, chunkData), {}, {
              hasRoads: hasRoads
            }));
            (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_43__.setChunkColor)(_chunkId, hasRoads ? 'blue' : '#444');
            (0,_deposits_deposits_js__WEBPACK_IMPORTED_MODULE_47__.renderDepositsFromData)(chunkData.deposits, map);
            (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_45__.debugLog)("roads", "Chunk ".concat(_chunkId, " charg\xE9 (").concat(chunkData.roads.length, " routes, ").concat(chunkData.deposits.length, " d\xE9p\xF4ts)"));
          }
          _context.n = 17;
          break;
        case 16:
          _context.p = 16;
          _t2 = _context.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_45__.debugError)("roads", "Erreur chargement chunks bulk:", _t2);
          _iterator3 = _createForOfIteratorHelper(finalChunksToLoad);
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              _chunkId2 = _step3.value;
              _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.chunks[_chunkId2] = {
                status: 'error',
                roads: [],
                buildings: [],
                deposits: []
              };
              (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_43__.setChunkColor)(_chunkId2, 'red');
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        case 17:
          refreshChunkColors(visibleChunks);
        case 18:
          return _context.a(2);
      }
    }, _callee, null, [[10, 16], [2, 7, 8, 9]]);
  }));
  return _loadVisibleRoadChunks.apply(this, arguments);
}
function refreshChunk(_x) {
  return _refreshChunk.apply(this, arguments);
}

// ==========================
// FETCH SINGLE CHUNK
// ==========================
function _refreshChunk() {
  _refreshChunk = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(chunkId) {
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          (0,_invalidateChunk_js__WEBPACK_IMPORTED_MODULE_44__.invalidateChunk)(chunkId);
          (0,_chunkCache_js__WEBPACK_IMPORTED_MODULE_48__.invalidateChunkCache)(chunkId);
          _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.loadedChunks["delete"](chunkId);
          _context2.n = 1;
          return fetchSingleChunk(chunkId);
        case 1:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return _refreshChunk.apply(this, arguments);
}
function fetchSingleChunk(_x2) {
  return _fetchSingleChunk.apply(this, arguments);
} // ==========================
// REFRESH CHUNK COLORS
// ==========================
function _fetchSingleChunk() {
  _fetchSingleChunk = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(chunkId) {
    var _roadsData$chunkId, _buildingsData$chunkI, _yield$Promise$all3, _yield$Promise$all4, roadsRes, buildingsRes, depositsRes, roadsData, buildingsData, depositsData, chunkData, hasRoads, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.chunks[chunkId] = {
            status: 'loading',
            roads: [],
            buildings: [],
            deposits: []
          };
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_43__.setChunkColor)(chunkId, 'orange');
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
          chunkData = {
            roads: ((_roadsData$chunkId = roadsData[chunkId]) === null || _roadsData$chunkId === void 0 ? void 0 : _roadsData$chunkId.roads) || [],
            buildings: ((_buildingsData$chunkI = buildingsData[chunkId]) === null || _buildingsData$chunkI === void 0 ? void 0 : _buildingsData$chunkI.buildings) || [],
            deposits: depositsData[chunkId] || []
          };
          hasRoads = chunkData.roads.length > 0;
          _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.chunks[chunkId] = _objectSpread(_objectSpread({
            status: hasRoads ? 'loaded' : 'empty'
          }, chunkData), {}, {
            hasRoads: hasRoads
          });
          (0,_chunkCache_js__WEBPACK_IMPORTED_MODULE_48__.setCachedChunk)(chunkId, _objectSpread(_objectSpread({}, chunkData), {}, {
            hasRoads: hasRoads
          }));
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_43__.setChunkColor)(chunkId, hasRoads ? 'blue' : '#444');
          (0,_deposits_deposits_js__WEBPACK_IMPORTED_MODULE_47__.renderDepositsFromData)(chunkData.deposits, (0,_map_js__WEBPACK_IMPORTED_MODULE_41__.getMap)());
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_45__.debugLog)("roads", "[CHUNK REFRESH]", chunkId, chunkData.roads.length);
          _context3.n = 7;
          break;
        case 6:
          _context3.p = 6;
          _t3 = _context3.v;
          _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.chunks[chunkId] = {
            status: 'error',
            roads: [],
            buildings: [],
            deposits: []
          };
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_43__.setChunkColor)(chunkId, 'red');
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_45__.debugError)("roads", "[CHUNK REFRESH ERROR]", chunkId, _t3);
        case 7:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 6]]);
  }));
  return _fetchSingleChunk.apply(this, arguments);
}
function refreshChunkColors(visibleChunks) {
  var _iterator = _createForOfIteratorHelper(visibleChunks),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _colors$chunk$status;
      var chunkId = _step.value;
      var chunk = _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.chunks[chunkId];
      if (!chunk) {
        (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_43__.setChunkColor)(chunkId, 'orange');
        continue;
      }
      var colors = {
        loaded: 'blue',
        empty: '#444',
        loading: 'orange',
        error: 'red'
      };
      (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_43__.setChunkColor)(chunkId, (_colors$chunk$status = colors[chunk.status]) !== null && _colors$chunk$status !== void 0 ? _colors$chunk$status : 'yellow');
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

// ==========================
// VISIBLE CHUNKS
// ==========================
function getVisibleChunks(bounds) {
  var minX = Math.floor(bounds.getSouth() / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE);
  var maxX = Math.floor(bounds.getNorth() / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE);
  var minY = Math.floor(bounds.getWest() / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE);
  var maxY = Math.floor(bounds.getEast() / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE);
  var chunks = [];
  for (var x = minX; x <= maxX; x++) {
    for (var y = minY; y <= maxY; y++) {
      chunks.push("".concat(x, "_").concat(y));
    }
  }
  return chunks;
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
                lng: snapped.lng,
                chunkId: snapped.chunkId
              })
            });
          case 2:
            (0,_map_roads_roads_js__WEBPACK_IMPORTED_MODULE_15__.refreshChunk)(snapped.chunkId);
            (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_17__.debugLog)("chunks", "snap result:", snapped);
            (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_17__.debugLog)("chunks", "raw:", {
              lat: lat,
              lng: lng,
              x: lat / 0.01,
              y: lng / 0.01
            });
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
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chunk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk.js */ "./assets/scripts/Game/utils/chunk.js");




function snapToChunk(lat, lng) {
  var x = Math.floor(Math.round(lat * 100) / 1);
  var y = Math.floor(Math.round(lng * 100) / 1);
  return {
    lat: Number((x * _chunk_js__WEBPACK_IMPORTED_MODULE_3__.CHUNK_SIZE).toFixed(8)),
    lng: Number((y * _chunk_js__WEBPACK_IMPORTED_MODULE_3__.CHUNK_SIZE).toFixed(8)),
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









var timerInterval = null;
function initBuildingTimers() {
  if (timerInterval) return; // évite doublons

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
      if (isNaN(scheduled)) {
        timerEl.textContent = 'Date invalide';
        return;
      }
      var diffSec = Math.floor((scheduled - now) / 1000);
      if (diffSec > 0) {
        var mins = Math.floor(diffSec / 60);
        var secs = diffSec % 60;
        timerEl.innerHTML = "Prochain d\xE9part dans : <strong>".concat(mins, "min ").concat(secs, "s</strong>");
      } else {
        var elapsed = Math.abs(diffSec);
        var _mins = Math.floor(elapsed / 60);
        var _secs = elapsed % 60;
        timerEl.innerHTML = "Convoi en route depuis : <strong>".concat(_mins, "min ").concat(_secs, "s</strong>");
      }
    });
  }
  updateTimers();
  timerInterval = setInterval(updateTimers, 1000);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_leaflet_dist_leaflet_css-node_modules_core-js_internals_add-to-unscopabl-467c3d","vendors-node_modules_leaflet_dist_leaflet-src_js-node_modules_leaflet_dist_images_marker-icon-0aac6a"], () => (__webpack_exec__("./assets/scripts/Game/game-main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sRUFBRSxTQUFTO0VBQ2xCQyxTQUFTLEVBQUUsV0FBVztFQUN0QnZaLFFBQVEsRUFBRSxVQUFVO0VBQ3BCN0YsU0FBUyxFQUFFLFdBQVc7RUFDdEJ5VixNQUFNLEVBQUUsUUFBUTtFQUNoQjRKLE9BQU8sRUFBRSxTQUFTO0VBQ2xCQyxLQUFLLEVBQUU7QUFDWCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL0xheWVycy9ncmlkTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9idWlsZGluZ3MvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2J1aWxkaW5ncy9idWlsZE1vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9idWlsZGluZ3MvYnVpbGRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9kZWxpdmVyeS9kZWxpdmVyeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2dhbWUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2ludmVudG9yeS9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvZGVwb3NpdHMvZGVwb3NpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvZm9nT2ZXYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwL3JvYWRzL2NodW5rQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvcm9hZHMvaW52YWxpZGF0ZUNodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwL3JvYWRzL3JvYWRVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9yb2Fkcy9yb2Fkcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9yb2Fkcy9yb2Fkc1N0YXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3VpL2RyYXdPbk1hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3V0aWxzL2FkbWluX2NsaXBib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3V0aWxzL2NodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvdXRpbHMvZ3BzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvdXRpbHMvc25hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3V0aWxzL3RpbWVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0xlYWZsZXRXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3V0aWxzL2RlYnVnLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3V0aWxzL3R5cGVNYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4uL3V0aWxzL2NodW5rLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwLCBpc0dyaWRMYXllckFjdGl2ZSB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyaWRMYXllciA9IEwubGF5ZXJHcm91cCgpO1xyXG5cclxuY29uc3QgdmlzaWJsZUNodW5rcyA9IG5ldyBNYXAoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R3JpZExheWVyKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBpZiAoIWlzR3JpZExheWVyQWN0aXZlKCkpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB6b29tID0gbWFwLmdldFpvb20oKTtcclxuICAgIGlmICh6b29tIDwgMTQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBib3VuZHMgPSBtYXAuZ2V0Qm91bmRzKCk7XHJcblxyXG4gICAgY29uc3QgbWluTGF0ID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0U291dGgoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWF4TGF0ID0gTWF0aC5jZWlsKGJvdW5kcy5nZXROb3J0aCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtaW5MbmcgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRXZXN0KCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1heExuZyA9IE1hdGguY2VpbChib3VuZHMuZ2V0RWFzdCgpIC8gQ0hVTktfU0laRSk7XHJcblxyXG4gICAgY29uc3QgbmV3VmlzaWJsZSA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gbWluTGF0OyBpIDwgbWF4TGF0OyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gbWluTG5nOyBqIDwgbWF4TG5nOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYCR7aX1fJHtqfWA7XHJcbiAgICAgICAgICAgIG5ld1Zpc2libGUuYWRkKGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlQ2h1bmtzLmhhcyhpZCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGF0ID0gaSAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgICAgIGNvbnN0IGxuZyA9IGogKiBDSFVOS19TSVpFO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IEwucmVjdGFuZ2xlKFtcclxuICAgICAgICAgICAgICAgIFtsYXQsIGxuZ10sXHJcbiAgICAgICAgICAgICAgICBbbGF0ICsgQ0hVTktfU0laRSwgbG5nICsgQ0hVTktfU0laRV1cclxuICAgICAgICAgICAgXSwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IDEsXHJcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogMC4xNVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlY3Qub24oJ21vdXNlb3ZlcicsICgpID0+IHJlY3Quc2V0U3R5bGUoeyBmaWxsT3BhY2l0eTogMC4zIH0pKTtcclxuICAgICAgICAgICAgcmVjdC5vbignbW91c2VvdXQnLCAoKSA9PiByZWN0LnNldFN0eWxlKHsgZmlsbE9wYWNpdHk6IDAuMTUgfSkpO1xyXG5cclxuICAgICAgICAgICAgZ3JpZExheWVyLmFkZExheWVyKHJlY3QpO1xyXG5cclxuICAgICAgICAgICAgdmlzaWJsZUNodW5rcy5zZXQoaWQsIHJlY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDwn6e5IHJlbW92ZSBjZXV4IGhvcnMgw6ljcmFuXHJcbiAgICBmb3IgKGNvbnN0IFtpZCwgcmVjdF0gb2YgdmlzaWJsZUNodW5rcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICBpZiAoIW5ld1Zpc2libGUuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICBncmlkTGF5ZXIucmVtb3ZlTGF5ZXIocmVjdCk7XHJcbiAgICAgICAgICAgIHZpc2libGVDaHVua3MuZGVsZXRlKGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVidWdMb2coXCJjaHVua3NcIiwgXCJDaHVua3MgdmlzaWJsZXM6XCIsIHZpc2libGVDaHVua3Muc2l6ZSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENIVU5LIENPTE9SXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDaHVua0NvbG9yKGlkLCBjb2xvcikge1xyXG4gICAgaWYgKCFpc0dyaWRMYXllckFjdGl2ZSgpKSByZXR1cm47XHJcbiAgICBcclxuICAgIGNvbnN0IHJlY3QgPSB2aXNpYmxlQ2h1bmtzLmdldChpZCk7XHJcbiAgICBpZiAoIXJlY3QpIHJldHVybjtcclxuXHJcbiAgICByZWN0LnNldFN0eWxlKHtcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBmaWxsT3BhY2l0eTogMC4yXHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBidWlsZFJlcXVlc3QobGF0LCBsbmcsIHR5cGVJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL2J1aWxkJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbGF0OiBsYXQsIGxuZzogbG5nLCB0eXBlX2lkOiB0eXBlSWQgfSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVpbGRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL21hcC1kYXRhJylcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWlsZGluZ0Nvc3RzKGJ1aWxkaW5nVHlwZUlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYC9hcGkvYnVpbGRpbmctdHlwZXMvJHtidWlsZGluZ1R5cGVJZH0vY29zdHNgKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZ3JhZGVCdWlsZGluZyhidWlsZGluZ0lkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYC9hcGkvYnVpbGRpbmcvJHtidWlsZGluZ0lkfS91cGdyYWRlYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVwZ3JhZGVJbmZvKGJ1aWxkaW5nSWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgL2FwaS9idWlsZGluZy8ke2J1aWxkaW5nSWR9L3VwZ3JhZGUtaW5mb2ApO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBmbHlUbywgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IHJvYWRzU3RhdGUsIGdldEFsbExvYWRlZFJvYWRzIH0gZnJvbSAnLi4vbWFwL3JvYWRzL3JvYWRzU3RhdGUuanMnO1xyXG5pbXBvcnQgeyBnZXRCdWlsZGluZ0ltYWdlIH0gZnJvbSAnLi9idWlsZGluZy5qcyc7XHJcbmltcG9ydCB7IENIVU5LX1NJWkUgfSBmcm9tICcuLi91dGlscy9jaHVuay5qcyc7XHJcbmltcG9ydCB7IHNhZmVMb2FkQ2h1bmssIGxvYWRWaXNpYmxlUm9hZENodW5rcyB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2Fkcy5qcyc7XHJcbmltcG9ydCB7IGZpbmRDbG9zZXN0UG9pbnRPblJvYWQsIGZpbmRDbG9zZXN0U2VnbWVudCB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2FkVXRpbHMuanMnO1xyXG5pbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vbm90aWZpY2F0aW9ucy5qcyc7XHJcbmltcG9ydCB7IGdldEFkbWluQ29vcmRzIH0gZnJvbSAnLi4vdXRpbHMvYWRtaW5fY2xpcGJvYXJkLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgZHJhd0Jhc2VDaXJjbGUsIHJlbW92ZUJhc2VDaXJjbGUgfSBmcm9tICcuLi91aS9kcmF3T25NYXAuanMnO1xyXG5pbXBvcnQgeyByZWZyZXNoU2lkZWJhciB9IGZyb20gJy4vYnVpbGRNb2RlLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIPCfp6AgU1RBVEVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxubGV0IGJhc2VNYXJrZXIgPSBudWxsO1xyXG5sZXQgYmFzZUNpcmNsZSA9IG51bGw7XHJcbmxldCBiYXNlUG9zaXRpb24gPSBudWxsO1xyXG5sZXQgYmFzZUNyZWF0ZWQgPSBmYWxzZTtcclxubGV0IHBsYWNpbmdCYXNlID0gZmFsc2U7XHJcblxyXG5sZXQgcHJldmlld01hcmtlciA9IG51bGw7XHJcbmxldCBwcmV2aWV3Q2lyY2xlID0gbnVsbDtcclxubGV0IHByZXZpZXdTbmFwTGF0TG5nID0gbnVsbDtcclxubGV0IHByZXZpZXdMaW5lID0gbnVsbDtcclxubGV0IGhpZ2hsaWdodGVkU2VnbWVudCA9IG51bGw7XHJcblxyXG5sZXQgY3VycmVudFBsYXllckZhY3Rpb24gPSAnZGVmYXVsdCc7XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0VUIFBMQVlFUiBGQUNUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50UGxheWVyRmFjdGlvbihmYWN0aW9uKSB7XHJcbiAgICBjdXJyZW50UGxheWVyRmFjdGlvbiA9IChmYWN0aW9uIHx8ICdkZWZhdWx0JykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUIFBMQVlFUiBGQUNUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpIHtcclxuICAgIHJldHVybiBjdXJyZW50UGxheWVyRmFjdGlvbjtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5JVCBVSVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJhc2VVSSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBjb25zdCBiYXNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2VCdG4nKTtcclxuXHJcbiAgICBiYXNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBtb2RlID0gYmFzZUJ0bi5kYXRhc2V0Lm1vZGU7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gQ1JFQVRFIEJBU0UgTU9ERSBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGlmIChtb2RlID09PSAnY3JlYXRlJykge1xyXG4gICAgICAgICAgICBpZiAoYmFzZUNyZWF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQmFzZSBkw6lqw6AgY3LDqcOpZSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwbGFjaW5nQmFzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnY3Jvc3NoYWlyJztcclxuXHJcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oXCJDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgcGxhY2VyIHRhIGJhc2VcIiwgJ2luZm8nKTtcclxuICAgICAgICAgICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFJFVFVSTiBCQVNFIE1PREVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGlmIChtb2RlID09PSAncmV0dXJuJykge1xyXG4gICAgICAgICAgICBpZiAoIWJhc2VQb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBdWN1bmUgYmFzZSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmbHlUbyhiYXNlUG9zaXRpb25bMF0sIGJhc2VQb3NpdGlvblsxXSwgMTYpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQ0xJQ0sgTUFQXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbWFwLm9uKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFwbGFjaW5nQmFzZSB8fCBiYXNlQ3JlYXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghcHJldmlld1NuYXBMYXRMbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgeyBsYXQsIGxuZyB9ID0gcHJldmlld1NuYXBMYXRMbmc7XHJcblxyXG4gICAgICAgIGlmICghaXNCYXNlUGxhY2VtZW50VmFsaWQobGF0LCBsbmcpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi4p2MIFRyb3AgcHJvY2hlIGQndW5lIGJhc2UgIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYW51cFByZXZpZXcobWFwKTtcclxuICAgICAgICBjcmVhdGVCYXNlKGxhdCwgbG5nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE1PVVNFIE1PVkUgKHByZXZpZXcgc25hcCByb2FkKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcC5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFwbGFjaW5nQmFzZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByb2FkcyA9IGdldEFsbExvYWRlZFJvYWRzKCk7XHJcblxyXG4gICAgICAgIGlmICghcm9hZHMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbmRDbG9zZXN0UG9pbnRPblJvYWQoZS5sYXRsbmcsIHJvYWRzKTtcclxuICAgICAgICBpZiAoIXJlc3VsdC5wb2ludCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBwcmV2aWV3U25hcExhdExuZyA9IHJlc3VsdC5wb2ludDtcclxuXHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGlzQmFzZVBsYWNlbWVudFZhbGlkKHJlc3VsdC5wb2ludC5sYXQsIHJlc3VsdC5wb2ludC5sbmcpO1xyXG5cclxuICAgICAgICBjbGVhbnVwUHJldmlldyhtYXApO1xyXG5cclxuICAgICAgICBjb25zdCBjb2xvciA9IGlzVmFsaWQgPyAnZ3JlZW4nIDogJ3JlZCc7XHJcblxyXG4gICAgICAgIHByZXZpZXdDaXJjbGUgPSBMLmNpcmNsZShyZXN1bHQucG9pbnQsIHtcclxuICAgICAgICAgICAgcmFkaXVzOiA2MDAsXHJcbiAgICAgICAgICAgIGNvbG9yLFxyXG4gICAgICAgICAgICB3ZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwXHJcbiAgICAgICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICAgICAgcHJldmlld01hcmtlciA9IEwubWFya2VyKHJlc3VsdC5wb2ludCkuYWRkVG8obWFwKTtcclxuXHJcbiAgICAgICAgcHJldmlld0xpbmUgPSBMLnBvbHlsaW5lKFtlLmxhdGxuZywgcmVzdWx0LnBvaW50XSwge1xyXG4gICAgICAgICAgICBjb2xvcjogJ2N5YW4nLFxyXG4gICAgICAgICAgICB3ZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgICAgICAgZGFzaEFycmF5OiAnNSwgNSdcclxuICAgICAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBjb25zdCBzZWdtZW50ID0gZmluZENsb3Nlc3RTZWdtZW50KGUubGF0bG5nLCByb2Fkcyk7XHJcblxyXG4gICAgICAgIGlmIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkU2VnbWVudCA9IEwucG9seWxpbmUoc2VnbWVudCwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiA2LFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44XHJcbiAgICAgICAgICAgIH0pLmFkZFRvKG1hcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFVQREFURSBWSVNVQUwgQkFTRSBBTkQgT1RIRVIgQkFTRVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcC5vbignem9vbWVuZCcsICgpID0+IHtcclxuICAgICAgICB1cGRhdGVCYXNlRGlzcGxheSgpO1xyXG4gICAgICAgIHVwZGF0ZU90aGVyQmFzZXMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQQVRIRklORElORyBERUJVRyBGT1IgQURNSU4gLSBDTElDSyBUTyBHRVQgQ09PUkRJTkFURVNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlcigpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgc2hvd05vdGlmaWNhdGlvbihcIk1vZGUgQWRtaW4gYWN0aXbDqSA6IGNsaXF1ZXogc3VyIGxhIGNhcnRlXCIsICdpbmZvJyk7XHJcbiAgICAgICAgXHJcbiAgICBtYXAub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBnZXRBZG1pbkNvb3JkcyhlLmxhdGxuZy5sYXQsIGUubGF0bG5nLmxuZyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LmVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlciA9IGVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlcjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIPCfp7kgQ0xFQU4gUFJFVklFV1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBjbGVhbnVwUHJldmlldygpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBwcmV2aWV3TWFya2VyICYmIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3TWFya2VyKTtcclxuICAgIHByZXZpZXdDaXJjbGUgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdDaXJjbGUpO1xyXG4gICAgcHJldmlld0xpbmUgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdMaW5lKTtcclxuICAgIGhpZ2hsaWdodGVkU2VnbWVudCAmJiBtYXAucmVtb3ZlTGF5ZXIoaGlnaGxpZ2h0ZWRTZWdtZW50KTtcclxuXHJcbiAgICBwcmV2aWV3TWFya2VyID0gbnVsbDtcclxuICAgIHByZXZpZXdDaXJjbGUgPSBudWxsO1xyXG4gICAgcHJldmlld0xpbmUgPSBudWxsO1xyXG4gICAgaGlnaGxpZ2h0ZWRTZWdtZW50ID0gbnVsbDtcclxuXHJcbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJyc7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaXNCYXNlUGxhY2VtZW50VmFsaWQobGF0LCBsbmcpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICByZXR1cm4gb3RoZXJCYXNlcy5ldmVyeShiYXNlID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdCA9IG1hcC5kaXN0YW5jZShcclxuICAgICAgICAgICAgW2xhdCwgbG5nXSxcclxuICAgICAgICAgICAgW2Jhc2UubGF0LCBiYXNlLmxuZ11cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlzdCA+PSAxMTAwO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENSRUFURSBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGNyZWF0ZUJhc2UobGF0LCBsbmcpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBwbGFjaW5nQmFzZSA9IGZhbHNlO1xyXG4gICAgYmFzZVBvc2l0aW9uID0gW2xhdCwgbG5nXTtcclxuXHJcbiAgICBmbHlUbyhsYXQsIGxuZyk7XHJcblxyXG4gICAgYmFzZUNpcmNsZSA9IGRyYXdCYXNlQ2lyY2xlKCdwbGF5ZXJfYmFzZScsIGxhdCwgbG5nLCBjdXJyZW50UGxheWVyRmFjdGlvbiwgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgYmFzZVR5cGVJZCA9IDE7XHJcbiAgICBmZXRjaCgnL2FwaS9idWlsZCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGxhdCxcclxuICAgICAgICAgICAgbG5nLFxyXG4gICAgICAgICAgICB0eXBlX2lkOiBiYXNlVHlwZUlkXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmICghcmVzLm9rKSByZXR1cm4gcmVzLmpzb24oKS50aGVuKGVyciA9PiB7IHRocm93IG5ldyBFcnJvcihlcnIuZXJyb3IgfHwgXCJBUEkgZXJyb3JcIikgfSk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoU2lkZWJhcigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFLDqS1pbml0aWFsaXNlciBsJ1VJIGRlIGJhc2UgcG91ciByw6ktYXR0YWNoZXIgbGVzIGxpc3RlbmVycyBhdXggbm91dmVhdXggYm91dG9uc1xyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9iYXNlLmpzJykudGhlbigoeyBpbml0QmFzZVVJIH0pID0+IGluaXRCYXNlVUkoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuKVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYmFzZXMnLCBcIkVycmV1ciBjcsOpYXRpb24gYmFzZVwiLCBlcnIpO1xyXG4gICAgICAgIHJlbW92ZUJhc2UoKTtcclxuICAgICAgICBhbGVydChcIkVycmV1ciBjcsOpYXRpb24gYmFzZSA6IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG4gICAgdXBkYXRlQmFzZURpc3BsYXkoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUkVNT1ZFIEJBU0VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gcmVtb3ZlQmFzZSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBiYXNlTWFya2VyICYmIG1hcC5yZW1vdmVMYXllcihiYXNlTWFya2VyKTtcclxuICAgIGJhc2VDaXJjbGUgJiYgbWFwLnJlbW92ZUxheWVyKGJhc2VDaXJjbGUpO1xyXG5cclxuICAgIGJhc2VNYXJrZXIgPSBudWxsO1xyXG4gICAgYmFzZUNpcmNsZSA9IG51bGw7XHJcbiAgICBiYXNlUG9zaXRpb24gPSBudWxsO1xyXG4gICAgYmFzZUNyZWF0ZWQgPSBmYWxzZTtcclxuICAgIHBsYWNpbmdCYXNlID0gZmFsc2U7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG59XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExPQUQgT1RIRVIgQkFTRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5sZXQgb3RoZXJCYXNlcyA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRPdGhlckJhc2UobGF0LCBsbmcsIHBzZXVkbywgZmFjdGlvbikge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShsbmcpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaXNQbGF5ZXJCYXNlID0gZmFjdGlvbiA9PT0gY3VycmVudFBsYXllckZhY3Rpb247XHJcblxyXG4gICAgLy8gVXRpbGlzZXIgZHJhd0Jhc2VDaXJjbGUgZGUgZHJhd09uTWFwLmpzXHJcbiAgICBjb25zdCBjaXJjbGUgPSBkcmF3QmFzZUNpcmNsZShgb3RoZXJfJHtsYXR9XyR7bG5nfWAsIGxhdCwgbG5nLCBmYWN0aW9uLCBpc1BsYXllckJhc2UpO1xyXG5cclxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbihtYXAuZ2V0Wm9vbSgpLCBmYWN0aW9uKTtcclxuXHJcbiAgICBsZXQgbWFya2VyID0gbnVsbDtcclxuXHJcbiAgICBpZiAoaWNvbikge1xyXG4gICAgICAgIG1hcmtlciA9IEwubWFya2VyKFtsYXQsIGxuZ10sIHsgaWNvbiB9KVxyXG4gICAgICAgICAgICAuYWRkVG8obWFwKVxyXG4gICAgICAgICAgICAuYmluZFBvcHVwKGDwn4+V77iPIEJhc2UgZGUgJHtwc2V1ZG99YCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3RoZXJCYXNlcy5wdXNoKHsgbGF0LCBsbmcsIHBzZXVkbywgbWFya2VyLCBjaXJjbGUsIGZhY3Rpb24gfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVQREFURSBPVEhFUiBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHVwZGF0ZU90aGVyQmFzZXMoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBjb25zdCB6b29tID0gbWFwLmdldFpvb20oKTtcclxuXHJcbiAgICBvdGhlckJhc2VzLmZvckVhY2goYmFzZSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbih6b29tLCBiYXNlLmZhY3Rpb24pO1xyXG5cclxuICAgICAgICBpZiAoIWljb24pIHtcclxuICAgICAgICAgICAgaWYgKGJhc2UubWFya2VyKSBtYXAucmVtb3ZlTGF5ZXIoYmFzZS5tYXJrZXIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWJhc2UubWFya2VyKSB7XHJcbiAgICAgICAgICAgIGJhc2UubWFya2VyID0gTC5tYXJrZXIoW2Jhc2UubGF0LCBiYXNlLmxuZ10sIHsgaWNvbiB9KVxyXG4gICAgICAgICAgICAgICAgLmFkZFRvKG1hcClcclxuICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAoYPCfj5XvuI8gQmFzZSBkZSAke2Jhc2UucHNldWRvfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hcC5oYXNMYXllcihiYXNlLm1hcmtlcikpIGJhc2UubWFya2VyLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgICAgIGJhc2UubWFya2VyLnNldEljb24oaWNvbik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTE9BRCBGUk9NIFNFUlZFUlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEJhc2VGcm9tU2VydmVyKGxhdCwgbG5nKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobGF0KSB8fCAhTnVtYmVyLmlzRmluaXRlKGxuZykpIHJldHVybjtcclxuXHJcbiAgICBiYXNlUG9zaXRpb24gPSBbbGF0LCBsbmddO1xyXG4gICAgYmFzZUNyZWF0ZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIFV0aWxpc2VyIGRyYXdCYXNlQ2lyY2xlIGRlIGRyYXdPbk1hcC5qcyAobm90cmUgYmFzZSA9IGlzUGxheWVyQmFzZSA9IHRydWUpXHJcbiAgICBiYXNlQ2lyY2xlID0gZHJhd0Jhc2VDaXJjbGUoJ3BsYXllcl9iYXNlJywgbGF0LCBsbmcsIGN1cnJlbnRQbGF5ZXJGYWN0aW9uLCB0cnVlKTtcclxuXHJcbiAgICB1cGRhdGVCYXNlRGlzcGxheSgpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVUERBVEUgQkFTRSBESVNQTEFZXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHVwZGF0ZUJhc2VEaXNwbGF5KCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghYmFzZVBvc2l0aW9uKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUJhc2VJY29uKG1hcC5nZXRab29tKCksIGN1cnJlbnRQbGF5ZXJGYWN0aW9uKTtcclxuXHJcbiAgICBpZiAoIWljb24pIHtcclxuICAgICAgICBpZiAoYmFzZU1hcmtlcikgbWFwLnJlbW92ZUxheWVyKGJhc2VNYXJrZXIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJhc2VNYXJrZXIpIHtcclxuICAgICAgICBiYXNlTWFya2VyID0gTC5tYXJrZXIoYmFzZVBvc2l0aW9uLCB7IGljb24gfSkuYWRkVG8obWFwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFtYXAuaGFzTGF5ZXIoYmFzZU1hcmtlcikpIGJhc2VNYXJrZXIuYWRkVG8obWFwKTtcclxuICAgICAgICBiYXNlTWFya2VyLnNldEljb24oaWNvbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENSRUFURSBCQVNFIElDT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gY3JlYXRlQmFzZUljb24oem9vbSwgZmFjdGlvbikge1xyXG5cclxuICAgIGlmICh6b29tIDwgMTMpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IHNpemUgPSBmYWN0aW9uICE9PSAnbm9tYWRlcycgPyAoem9vbSA+IDE1ID8gMTAwIDogNzApIDogKHpvb20gPiAxNSA/IDc1IDogNjApO1xyXG5cclxuICAgIC8vIFRvdWpvdXJzIHV0aWxpc2VyIGwnaWPDtG5lIGRlIGxhIGZhY3Rpb24gKGxlIGZhbGxiYWNrIEFwYWNoZSBnw6hyZSBsZXMgNDA0KVxyXG4gICAgLy8gU2kgbCdpY8O0bmUgbidleGlzdGUgcGFzLCBBcGFjaGUgcmVkaXJpZ2UgdmVycyBkZWZhdWx0IGF1dG9tYXRpcXVlbWVudFxyXG4gICAgY29uc3QgaWNvblVybCA9IGdldEJ1aWxkaW5nSW1hZ2UoZmFjdGlvbiwgJ2Jhc2UnKTtcclxuXHJcbiAgICByZXR1cm4gTC5pY29uKHtcclxuICAgICAgICBpY29uVXJsOiBpY29uVXJsLFxyXG4gICAgICAgIGljb25TaXplOiBbc2l6ZSwgc2l6ZV0sXHJcbiAgICAgICAgaWNvbkFuY2hvcjogW3NpemUgLyAyLCBzaXplIC8gMl0sXHJcbiAgICAgICAgcG9wdXBBbmNob3I6IFswLCAtc2l6ZSAvIDJdXHJcbiAgICB9KTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IGdldEJ1aWxkaW5nQ29zdHMsIGJ1aWxkUmVxdWVzdCB9IGZyb20gJy4uL2FwaS5qcyc7XHJcbmltcG9ydCB7IGdldEJ1aWxkaW5nSW1hZ2UgfSBmcm9tICcuL2J1aWxkaW5nLmpzJztcclxuaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4uL25vdGlmaWNhdGlvbnMuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQlVJTEQgTU9ERSBTVEFURVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5sZXQgc2VsZWN0ZWRCdWlsZGluZ1R5cGUgPSBudWxsO1xyXG5sZXQgcHJldmlld0J1aWxkaW5nTWFya2VyID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXNlIGxlIG1vZGUgY29uc3RydWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJ1aWxkTW9kZSgpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIC8vIFV0aWxpc2VyIGxhIGTDqWzDqWdhdGlvbiBkJ8OpdsOpbmVtZW50cyBwb3VyIGxlcyBib3V0b25zIGR5bmFtaXF1ZXNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldC5jbG9zZXN0KCcuYnVpbGQtaXRlbScpO1xyXG4gICAgICAgIGlmICghYnRuKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHR5cGVJZCA9IGJ0bi5kYXRhc2V0LnR5cGVJZDtcclxuICAgICAgICBpZiAoIXR5cGVJZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBTw6lsZWN0aW9ubmVyIGxlIHR5cGUgZGUgYsOidGltZW50XHJcbiAgICAgICAgYXdhaXQgc2VsZWN0QnVpbGRpbmdUeXBlKHR5cGVJZCwgYnRuKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsaWNrIHN1ciBsYSBjYXJ0ZSBwb3VyIGNvbnN0cnVpcmVcclxuICAgIG1hcC5vbignY2xpY2snLCBvbk1hcENsaWNrKTtcclxuXHJcbiAgICAvLyBNb3VzZSBtb3ZlIHBvdXIgcHLDqXZpc3VhbGlzZXJcclxuICAgIG1hcC5vbignbW91c2Vtb3ZlJywgb25NYXBNb3VzZU1vdmUpO1xyXG59XHJcblxyXG4vKipcclxuICogU8OpbGVjdGlvbm5lIHVuIHR5cGUgZGUgYsOidGltZW50IMOgIGNvbnN0cnVpcmVcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdEJ1aWxkaW5nVHlwZSh0eXBlSWQsIGJ1dHRvbikge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgLy8gRMOpc8OpbGVjdGlvbm5lciBwcsOpY8OpZGVtbWVudFxyXG4gICAgY2xlYXJCdWlsZGluZ1NlbGVjdGlvbigpO1xyXG5cclxuICAgIC8vIEfDqXJlciBsZSBjYXMgc3DDqWNpYWwgZGUgbGEgYmFzZSAoYm91dG9uICNiYXNlQnRuKVxyXG4gICAgaWYgKGJ1dHRvbi5pZCA9PT0gJ2Jhc2VCdG4nICYmIHR5cGVJZCA9PSAxKSB7XHJcbiAgICAgICAgLy8gTGEgYmFzZSBlc3QgZ8OpcsOpZSBwYXIgYmFzZS5qcywgb24gbmUgZmFpdCByaWVuIGljaVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXR0cmUgZW4gw6l2aWRlbmNlIGxlIGJvdXRvbiBzw6lsZWN0aW9ubsOpXHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAvLyBSw6ljdXDDqXJlciBsZXMgY2/Du3RzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRCdWlsZGluZ0Nvc3RzKHR5cGVJZCk7XHJcbiAgICAgICAgc2VsZWN0ZWRCdWlsZGluZ1R5cGUgPSB7XHJcbiAgICAgICAgICAgIGlkOiB0eXBlSWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgY29zdHM6IGRhdGEuY29zdHMsXHJcbiAgICAgICAgICAgIGJ1dHRvbjogYnV0dG9uXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbihgU8OpbGVjdGlvbm7DqTogJHtkYXRhLm5hbWV9LiBDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgY29uc3RydWlyZS5gLCAnaW5mbycpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGNvw7t0c1wiLCBlKTtcclxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGNvw7t0c1wiLCAnZXJyb3InKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE5ldHRvaWUgbGEgc8OpbGVjdGlvbiBhY3R1ZWxsZVxyXG4gKi9cclxuZnVuY3Rpb24gY2xlYXJCdWlsZGluZ1NlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmIChwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0J1aWxkaW5nTWFya2VyKTtcclxuICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdGVkQnVpbGRpbmdUeXBlID0gbnVsbDtcclxuXHJcbiAgICAvLyBSZXRpcmVyIGxhIGNsYXNzZSBzZWxlY3RlZCBkZSB0b3VzIGxlcyBib3V0b25zXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnVpbGQtaXRlbScpLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogR2VzdGlvbiBkdSBjbGljayBzdXIgbGEgY2FydGVcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIG9uTWFwQ2xpY2soZSkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFzZWxlY3RlZEJ1aWxkaW5nVHlwZSkgcmV0dXJuO1xyXG4gICAgaWYgKCFwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBsYXQgPSBlLmxhdGxuZy5sYXQ7XHJcbiAgICBjb25zdCBsbmcgPSBlLmxhdGxuZy5sbmc7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJ1aWxkUmVxdWVzdChsYXQsIGxuZywgc2VsZWN0ZWRCdWlsZGluZ1R5cGUuaWQpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZygnYnVpbGRpbmdzJywgYCR7c2VsZWN0ZWRCdWlsZGluZ1R5cGUubmFtZX0gY29uc3RydWl0IGF2ZWMgc3VjY8OocyAhYCk7XHJcbiAgICAgICAgICAgIC8vIE5ldHRveWVyXHJcbiAgICAgICAgICAgIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3QnVpbGRpbmdNYXJrZXIpO1xyXG4gICAgICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBjbGVhckJ1aWxkaW5nU2VsZWN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSYWZyYcOuY2hpciBsYSBzaWRlYmFyIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnJlZnJlc2hTaWRlYmFyKSB7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoU2lkZWJhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgYEVycmV1cjogJHtkYXRhLmVycm9yfWApO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGRlIGxhIGNvbnN0cnVjdGlvblwiLCBlKTtcclxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwiRXJyZXVyIHLDqXNlYXUgbG9ycyBkZSBsYSBjb25zdHJ1Y3Rpb25cIiwgJ2Vycm9yJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcsOpdmlzdWFsaXNhdGlvbiBkZSBsYSBwb3NpdGlvbiBkZSBjb25zdHJ1Y3Rpb25cclxuICovXHJcbmZ1bmN0aW9uIG9uTWFwTW91c2VNb3ZlKGUpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghc2VsZWN0ZWRCdWlsZGluZ1R5cGUpIHtcclxuICAgICAgICAvLyBOZXR0b3llciBsZXMgbWFya2VycyBkZSBwcsOpdmlzdWFsaXNhdGlvblxyXG4gICAgICAgIGlmIChwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHtcclxuICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdCdWlsZGluZ01hcmtlcik7XHJcbiAgICAgICAgICAgIHByZXZpZXdCdWlsZGluZ01hcmtlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBam91dGVyIHVuIG1hcmtlciBkZSBwcsOpdmlzdWFsaXNhdGlvblxyXG4gICAgaWYgKCFwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHtcclxuICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBMLm1hcmtlcihbZS5sYXRsbmcubGF0LCBlLmxhdGxuZy5sbmddKS5hZGRUbyhtYXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIuc2V0TGF0TG5nKGUubGF0bG5nKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFjdGl2ZSBsZSBtb2RlIGNvbnN0cnVjdGlvbiBwb3VyIHVuIHR5cGUgZGUgYsOidGltZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVCdWlsZE1vZGUodHlwZUlkKSB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10eXBlLWlkPVwiJHt0eXBlSWR9XCJdYCk7XHJcbiAgICBpZiAoYnRuKSB7XHJcbiAgICAgICAgYnRuLmNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEw6lzYWN0aXZlIGxlIG1vZGUgY29uc3RydWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZUJ1aWxkTW9kZSgpIHtcclxuICAgIGNsZWFyQnVpbGRpbmdTZWxlY3Rpb24oKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFbDqXJpZmllIHNpIGxlIG1vZGUgY29uc3RydWN0aW9uIGVzdCBhY3RpZlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQnVpbGRNb2RlQWN0aXZlKCkge1xyXG4gICAgcmV0dXJuIHNlbGVjdGVkQnVpbGRpbmdUeXBlICE9PSBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogUmFmcmHDrmNoaXQgbGUgY29udGVudSBkZSBsYSBzaWRlYmFyXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFNpZGViYXIoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9zaWRlYmFyJyk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NpZGViYXIgPSBkb2MucXVlcnlTZWxlY3RvcignI3NpZGVCYXInKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdTaWRlYmFyKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZUJhcicpPy5yZXBsYWNlV2l0aChuZXdTaWRlYmFyKTtcclxuICAgICAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oJ1NpZGViYXIgYWN0dWFsaXPDqWUnLCAnaW5mbycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGxvcnMgZHUgcmFmcmHDrmNoaXNzZW1lbnQgZGUgbGEgc2lkZWJhclwiLCBlKTtcclxuICAgIH1cclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IGdldEJ1aWxkaW5nQ29zdHMsIHVwZ3JhZGVCdWlsZGluZywgZ2V0VXBncmFkZUluZm8gfSBmcm9tICcuLi9hcGkuanMnO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UGxheWVyRmFjdGlvbiB9IGZyb20gJy4vYmFzZS5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG4vLyBDYWNoZSBkZXMgaW5mb3JtYXRpb25zIGRlIGLDonRpbWVudHNcclxubGV0IGJ1aWxkaW5nTWFya2VycyA9IG5ldyBNYXAoKTtcclxuXHJcbi8vIENhY2hlIGRlcyBwb3B1cHMgZMOpasOgIGNoYXJnw6lzXHJcbmxldCBwb3B1cENvbnRlbnRMb2FkZWQgPSBuZXcgU2V0KCk7XHJcblxyXG4vKipcclxuICogQ2hhcmdlIGxlcyBiw6J0aW1lbnRzIHN1ciBsYSBjYXJ0ZSBhdmVjIGxldXJzIHBvcHVwcyBpbnRlcmFjdGlmc1xyXG4gKiBAcGFyYW0ge0FycmF5fSBidWlsZGluZ3MgLSBMaXN0ZSBkZXMgYsOidGltZW50cyDDoCBhZmZpY2hlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCdWlsZGluZ3NGcm9tRGF0YShidWlsZGluZ3MpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghbWFwKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJNYXAgbm90IGluaXRpYWxpemVkXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJ1aWxkaW5ncyB8fCAhQXJyYXkuaXNBcnJheShidWlsZGluZ3MpKSB7XHJcbiAgICAgICAgZGVidWdXYXJuKCdidWlsZGluZ3MnLCBcImxvYWRCdWlsZGluZ3NGcm9tRGF0YTogaW52YWxpZCBidWlsZGluZ3MgZGF0YVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRpbmdzLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgLy8gSWdub3JlciBsZXMgYmFzZXMgLSBlbGxlcyBzb250IGfDqXLDqWVzIHBhciBiYXNlLmpzXHJcbiAgICAgICAgaWYgKGIuY29kZSA9PT0gJ2Jhc2UnIHx8IGIudHlwZT8udG9Mb3dlckNhc2UoKSA9PT0gJ2Jhc2UnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGIubGF0KSB8fCAhTnVtYmVyLmlzRmluaXRlKGIubG5nKSkge1xyXG4gICAgICAgICAgICBkZWJ1Z1dhcm4oJ2J1aWxkaW5ncycsIFwi4p2MIEJ1aWxkaW5nIGlnbm9yw6kgKGNvb3JkIGludmFsaWRlKVwiLCBiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXRpbGlzZXIgbGEgZmFjdGlvbiBkdSBiw6J0aW1lbnQgKG91IGZhbGxiYWNrIHN1ciBsYSBmYWN0aW9uIGR1IGpvdWV1cilcclxuICAgICAgICBjb25zdCBidWlsZGluZ0ZhY3Rpb24gPSBiLmZhY3Rpb24gfHwgZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKTtcclxuXHJcbiAgICAgICAgLy8gQ3LDqWVyIGwnaWPDtG5lIGF2ZWMgbCdpbWFnZSBkdSBiw6J0aW1lbnRcclxuICAgICAgICBjb25zdCBpY29uID0gY3JlYXRlQnVpbGRpbmdJY29uKGIuY29kZSwgYnVpbGRpbmdGYWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gU3RvY2tlciBsZXMgZG9ubsOpZXMgZHUgYnVpbGRpbmcgcG91ciBhY2PDqHMgdWx0w6lyaWV1clxyXG4gICAgICAgIGNvbnN0IGJ1aWxkaW5nRGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6IGIuaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IGIudHlwZSxcclxuICAgICAgICAgICAgbGV2ZWw6IGIubGV2ZWwsXHJcbiAgICAgICAgICAgIGNvZGU6IGIuY29kZSxcclxuICAgICAgICAgICAgZmFjdGlvbjogYnVpbGRpbmdGYWN0aW9uLFxyXG4gICAgICAgICAgICBvd25lcklkOiBiLm93bmVySWQsXHJcbiAgICAgICAgICAgIGlzTWluZTogQm9vbGVhbihiLmlzTWluZSksXHJcbiAgICAgICAgICAgIHByb2R1Y3Rpb246IGIucHJvZHVjdGlvbiB8fCBudWxsLFxyXG4gICAgICAgICAgICByZXNvdXJjZV90eXBlOiBiLnJlc291cmNlX3R5cGUgfHwgbnVsbCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBDcsOpZXIgbGUgbWFya2VyIGF2ZWMgcG9wdXAgdmlkZSAoY2hhcmfDqSBhdSBtb21lbnQgZGUgbCdvdXZlcnR1cmUpXHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gTC5tYXJrZXIoW2IubGF0LCBiLmxuZ10sIHsgaWNvbiB9KVxyXG4gICAgICAgICAgICAuYWRkVG8obWFwKVxyXG4gICAgICAgICAgICAuYmluZFBvcHVwKGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nRGF0YSkpO1xyXG5cclxuICAgICAgICBidWlsZGluZ01hcmtlcnMuc2V0KGIuaWQsIHsgbWFya2VyLCBkYXRhOiBidWlsZGluZ0RhdGEgfSk7XHJcblxyXG4gICAgICAgIC8vIMOJY291dGVyIGwnb3V2ZXJ0dXJlIGRlIGxhIHBvcHVwIHBvdXIgY2hhcmdlciBsZSBjb250ZW51XHJcbiAgICAgICAgbWFya2VyLm9uKCdwb3B1cG9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZVBvcHVwT3BlbihidWlsZGluZ0RhdGEsIG1hcmtlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENlbnRyYWxpc2UgbGEgbG9naXF1ZSBwb3B1cFxyXG4gKi9cclxuZnVuY3Rpb24gaGFuZGxlUG9wdXBPcGVuKGJ1aWxkaW5nRGF0YSwgbWFya2VyKSB7XHJcbiAgICBpZiAoIWJ1aWxkaW5nRGF0YT8uaWQpIHJldHVybjtcclxuXHJcbiAgICBpZiAoIWlzT3duQnVpbGRpbmcoYnVpbGRpbmdEYXRhKSkge1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsb2FkVXBncmFkZUluZm9Bc3luYyhidWlsZGluZ0RhdGEuaWQsIG1hcmtlciwgYnVpbGRpbmdEYXRhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFbDqXJpZmllIHNpIGxlIGLDonRpbWVudCBhcHBhcnRpZW50IGF1IGpvdWV1ciBhY3RpZlxyXG4gKi9cclxuZnVuY3Rpb24gaXNPd25CdWlsZGluZyhidWlsZGluZykge1xyXG4gICAgcmV0dXJuIGJ1aWxkaW5nLmlzTWluZSA9PT0gdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyw6llIHVuIHBvcHVwIHNpbXBsZSAoc3luY2hyb25lKVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmcpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkaW5nLXBvcHVwXCI+XHJcbiAgICAgICAgICAgIDxoMz4ke2J1aWxkaW5nLnR5cGUgfHwgJ0LDonRpbWVudCd9PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGFyZ2UgbGVzIGluZm9zIGQnYW3DqWxpb3JhdGlvbiBlbiBhcnJpw6hyZS1wbGFuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBsb2FkVXBncmFkZUluZm9Bc3luYyhidWlsZGluZ0lkLCBtYXJrZXIsIGJ1aWxkaW5nRGF0YSkge1xyXG4gICAgLy8gTmUgcGFzIGNoYXJnZXIgbGVzIGluZm9zIGQnYW3DqWxpb3JhdGlvbiBwb3VyIGxlcyBiw6J0aW1lbnRzIGVubmVtaXNcclxuICAgIGlmICghaXNPd25CdWlsZGluZyhidWlsZGluZ0RhdGEpKSB7XHJcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZ0RhdGEpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFidWlsZGluZ0lkKSB7XHJcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZ0RhdGEpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gw4l2aXRlciBkZSByZWNoYXJnZXIgc2kgZMOpasOgIGNoYXJnw6lcclxuICAgIGlmIChwb3B1cENvbnRlbnRMb2FkZWQuaGFzKGJ1aWxkaW5nSWQpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcG9wdXBDb250ZW50TG9hZGVkLmFkZChidWlsZGluZ0lkKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIENoYXJnZXIgZGlyZWN0ZW1lbnQgbGUgY29udGVudSBkdSBwb3B1cFxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2J1aWxkaW5ncy8ke2J1aWxkaW5nSWR9L3BvcHVwLWNvbnRlbnRgKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICAgICAgZGVidWdXYXJuKCdidWlsZGluZ3MnLCBgRXJyZXVyIEFQSSBwb3B1cC1jb250ZW50IChidWlsZGluZyAke2J1aWxkaW5nSWR9KTpgLCByZXMuc3RhdHVzKTtcclxuICAgICAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZ0RhdGEpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlcy50ZXh0KCk7XHJcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChodG1sKTtcclxuICAgICAgICBidWlsZGluZ01hcmtlcnMuc2V0KGJ1aWxkaW5nSWQsIHsgbWFya2VyLCBkYXRhOiBidWlsZGluZ0RhdGEgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSBwb3B1cFwiLCBlKTtcclxuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nRGF0YSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2hhcmdlIGxlcyBiw6J0aW1lbnRzIGRlcHVpcyBsJ0FQSSAoZm9uY3Rpb24gZGUgY29tcGF0aWJpbGl0w6kpXHJcbiAqIEBkZXByZWNhdGVkIFV0aWxpc2VyIGxvYWRCdWlsZGluZ3NGcm9tRGF0YShkYXRhKSDDoCBsYSBwbGFjZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCdWlsZGluZ3MoKSB7XHJcbiAgICBmZXRjaCgnL2FwaS9tYXAtZGF0YScpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRCdWlsZGluZ3NGcm9tRGF0YShkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBjaGFyZ2VtZW50IGLDonRpbWVudHNcIiwgZXJyKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyw6llIHVuZSBpY8O0bmUgKG1hcmtlcikgcG91ciB1biBiw6J0aW1lbnQgYXZlYyBzb24gaW1hZ2Ugc3DDqWNpZmlxdWUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBidWlsZGluZ0NvZGUgLSBMZSBjb2RlIGR1IGLDonRpbWVudCAoZXg6IFwiYmFzZVwiLCBcImlyb25fbWluZVwiKS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGZhY3Rpb24gLSBMYSBmYWN0aW9uIGR1IGLDonRpbWVudCAob3B0aW9ubmVsLCBmYWxsYmFjayBzdXIgbGUgam91ZXVyIGFjdHVlbCkuXHJcbiAqIEByZXR1cm5zIHtMLkljb259IEwnaWPDtG5lIExlYWZsZXQgcGVyc29ubmFsaXPDqWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnVpbGRpbmdJY29uKGJ1aWxkaW5nQ29kZSwgZmFjdGlvbiA9IG51bGwpIHtcclxuICAgIGNvbnN0IGFjdHVhbEZhY3Rpb24gPSBmYWN0aW9uIHx8IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XHJcbiAgICBjb25zdCBzaXplID0gNzA7IC8vIFRhaWxsZSBwYXIgZMOpZmF1dCBkZXMgaWPDtG5lc1xyXG5cclxuICAgIHJldHVybiBMLmljb24oe1xyXG4gICAgICAgIGljb25Vcmw6IGdldEJ1aWxkaW5nSW1hZ2UoYWN0dWFsRmFjdGlvbiwgYnVpbGRpbmdDb2RlKSxcclxuICAgICAgICBpY29uU2l6ZTogW3NpemUsIHNpemVdLFxyXG4gICAgICAgIGljb25BbmNob3I6IFtzaXplIC8gMiwgc2l6ZSAvIDJdLFxyXG4gICAgICAgIHBvcHVwQW5jaG9yOiBbMCwgLXNpemUgLyAyXVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXRvdXJuZSBkeW5hbWlxdWVtZW50IGxlIGNoZW1pbiBkZSBsJ2ltYWdlIGF2ZWMgZmFsbGJhY2sgdmVycyBkZWZhdWx0LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZmFjdGlvbiAtIExlIGNvZGUgb3Ugbm9tIGRlIGxhIGZhY3Rpb24gKGV4OiBcIkVtcGlyZVwiLCBcIkNlbmRyZXNcIikuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBidWlsZGluZyAtIExlIGNvZGUgZHUgYsOidGltZW50IChleDogXCJiYXNlXCIsIFwiaXJvbl9taW5lXCIpLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBMZSBjaGVtaW4gZGUgbCdpY8O0bmUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVpbGRpbmdJbWFnZShmYWN0aW9uLCBidWlsZGluZykge1xyXG4gICAgLy8gTm9ybWFsaXNlciBsZSBub20gZHUgYnVpbGRpbmcgcG91ciBsJ2ltYWdlIChyZW1wbGFjZXIgZXNwYWNlcyBldCBjYXJhY3TDqHJlcyBzcMOpY2lhdXgpXHJcbiAgICBjb25zdCBidWlsZGluZ1NsdWcgPSBidWlsZGluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJ18nKS5yZXBsYWNlKC9bXmEtejAtOV9dL2csICcnKTtcclxuICAgIGNvbnN0IGZhY3Rpb25TbHVnID0gKGZhY3Rpb24gfHwgJ2RlZmF1bHQnKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIC8vIFRvdWpvdXJzIHV0aWxpc2VyIGwnaWPDtG5lIGRlIGxhIGZhY3Rpb24gZW4gcHJlbWllclxyXG4gICAgLy8gTGUgc2VydmV1ciBvdSBsZSBuYXZpZ2F0ZXVyIGfDqXJlcmEgbGUgZmFsbGJhY2sgc2kgbCdpY8O0bmUgbidleGlzdGUgcGFzXHJcbiAgICAvLyBTaSBsYSBmYWN0aW9uIGVzdCAnZGVmYXVsdCcsIHV0aWxpc2VyIGwnaWPDtG5lIGRlZmF1bHQgZGlyZWN0ZW1lbnRcclxuICAgIGlmIChmYWN0aW9uU2x1ZyA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgICAgcmV0dXJuIGAvYXNzZXRzL2ltYWdlcy9idWlsZGluZ3MvZGVmYXVsdC8ke2J1aWxkaW5nU2x1Z30ucG5nYDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYC9hc3NldHMvaW1hZ2VzL2J1aWxkaW5ncy8ke2ZhY3Rpb25TbHVnfS8ke2J1aWxkaW5nU2x1Z30ucG5nYDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFtw6lsaW9yZSB1biBiw6J0aW1lbnRcclxuICovXHJcbndpbmRvdy51cGdyYWRlQnVpbGRpbmcgPSBhc3luYyBmdW5jdGlvbihidWlsZGluZ0lkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdXBncmFkZUJ1aWxkaW5nKGJ1aWxkaW5nSWQpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAvLyBJbnZhbGlkZXIgbGUgY2FjaGUgcG91ciBmb3JjZXIgbGUgcmVjaGFyZ2VtZW50XHJcbiAgICAgICAgICAgIHBvcHVwQ29udGVudExvYWRlZC5kZWxldGUoYnVpbGRpbmdJZCk7XHJcblxyXG4gICAgICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsZSBtYXJxdWV1clxyXG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IGJ1aWxkaW5nTWFya2Vycy5nZXQoYnVpbGRpbmdJZCk7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgICAgICAgICAgZW50cnkuZGF0YS5sZXZlbCA9IGRhdGEubmV3TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBlbnRyeS5tYXJrZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGVudHJ5LmRhdGEpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZWNoYXJnZXIgbGVzIGluZm9zIGQnYW3DqWxpb3JhdGlvblxyXG4gICAgICAgICAgICAgICAgbG9hZFVwZ3JhZGVJbmZvQXN5bmMoYnVpbGRpbmdJZCwgbWFya2VyLCBlbnRyeS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGVydCgnQsOidGltZW50IGFtw6lsaW9yw6kgYXZlYyBzdWNjw6hzICEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChcIkVycmV1cjogXCIgKyAoZGF0YS5lcnJvciB8fCBcIkltcG9zc2libGUgZCdhbcOpbGlvcmVyIGxlIGLDonRpbWVudFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGxvcnMgZGUgbCdhbcOpbGlvcmF0aW9uXCIsIGUpO1xyXG4gICAgICAgIGFsZXJ0KFwiRXJyZXVyIHLDqXNlYXUgbG9ycyBkZSBsJ2Ftw6lsaW9yYXRpb25cIik7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0b3VybmUgbGVzIGluZm9ybWF0aW9ucyBzdXIgbGVzIGNvw7t0cyBkZSBjb25zdHJ1Y3Rpb24gZCd1biB0eXBlIGRlIGLDonRpbWVudFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJ1aWxkaW5nVHlwZUNvc3RzKGJ1aWxkaW5nVHlwZUlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QnVpbGRpbmdDb3N0cyhidWlsZGluZ1R5cGVJZCk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyBjb8O7dHNcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWw6lyaWZpZSBzaSBsZSBqb3VldXIgcGV1dCBjb25zdHJ1aXJlIHVuIGLDonRpbWVudFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbkJ1aWxkQnVpbGRpbmcoYnVpbGRpbmdUeXBlSWQpIHtcclxuICAgIGNvbnN0IGNvc3RzID0gYXdhaXQgZ2V0QnVpbGRpbmdUeXBlQ29zdHMoYnVpbGRpbmdUeXBlSWQpO1xyXG4gICAgaWYgKCFjb3N0cykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcGxheWVyLXJlc291cmNlcycpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCByZXNvdXJjZXMgPSB7fTtcclxuICAgIGRhdGEucmVzb3VyY2VzLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgcmVzb3VyY2VzW3IudHlwZV0gPSByLnF1YW50aXR5O1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBbcmVzb3VyY2UsIGFtb3VudF0gb2YgT2JqZWN0LmVudHJpZXMoY29zdHMuY29zdHMpKSB7XHJcbiAgICAgICAgaWYgKChyZXNvdXJjZXNbcmVzb3VyY2VdIHx8IDApIDwgYW1vdW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoQnVpbGRpbmdQb3B1cChidWlsZGluZ0lkKSB7XHJcbiAgICBjb25zdCBlbnRyeSA9IGJ1aWxkaW5nTWFya2Vycy5nZXQoYnVpbGRpbmdJZCk7XHJcblxyXG4gICAgaWYgKCFlbnRyeSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPcHRpb25uZWwgOiB1bmlxdWVtZW50IHNpIGxlIHBvcHVwIGVzdCBvdXZlcnRcclxuICAgIGlmICghZW50cnkubWFya2VyLmlzUG9wdXBPcGVuKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgbG9hZFVwZ3JhZGVJbmZvQXN5bmMoXHJcbiAgICAgICAgYnVpbGRpbmdJZCxcclxuICAgICAgICBlbnRyeS5tYXJrZXIsXHJcbiAgICAgICAgZW50cnkuZGF0YVxyXG4gICAgKTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IGRyYXdSb2FkU2VnbWVudCB9IGZyb20gJy4uL3VpL2RyYXdPbk1hcC5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICcuLi91dGlscy90aW1lci5qcyc7XHJcblxyXG4vLyBTdGF0ZVxyXG5jb25zdCBhY3RpdmVEZWxpdmVyaWVzID0gbmV3IE1hcCgpO1xyXG5sZXQgZGVsaXZlcnlMYXllciA9IG51bGw7XHJcbmxldCBhbmltYXRpb25GcmFtZSA9IG51bGw7XHJcbmNvbnN0IHBlbmRpbmdFdmVudHMgPSBbXTtcclxuXHJcbmNvbnN0IHRydWNrSWNvbiA9IEwuZGl2SWNvbih7XHJcbiAgICBjbGFzc05hbWU6ICcnLFxyXG4gICAgaHRtbDogJzxkaXYgc3R5bGU9XCJmb250LXNpemU6MThweFwiPvCfmpo8L2Rpdj4nLFxyXG4gICAgaWNvblNpemU6IFsyMCwgMjBdLFxyXG4gICAgaWNvbkFuY2hvcjogWzEwLCAxMF1cclxufSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJTklUXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0RGVsaXZlcnlFdmVudHMoKSB7XHJcbiAgICBpbml0RGVsaXZlcnlMYXllcnMoKTtcclxuICAgIGxvYWREZWxpdmVyaWVzKCk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ2FtZTpldmVudCcsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGUuZGV0YWlsO1xyXG4gICAgICAgIGlmIChkYXRhLnR5cGUgIT09ICdkZWxpdmVyeV91cGRhdGUnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGhhbmRsZURlbGl2ZXJ5RXZlbnQoe1xyXG4gICAgICAgICAgICBkZWxpdmVyeUlkOiAgICBkYXRhLmRlbGl2ZXJ5SWQsXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nSWQ6ICAgIGRhdGEuYnVpbGRpbmdJZCxcclxuICAgICAgICAgICAgc3RhdHVzOiAgICAgICAgZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAgICAgIGRhdGEucHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgIHdheXBvaW50czogICAgIGRhdGEud2F5cG9pbnRzLFxyXG4gICAgICAgICAgICByZXNvdXJjZTogICAgICBkYXRhLnJlc291cmNlQ29kZSxcclxuICAgICAgICAgICAgcmVzb3VyY2VMYWJlbDogZGF0YS5yZXNvdXJjZUxhYmVsLFxyXG4gICAgICAgICAgICBxdWFudGl0eTogICAgICBkYXRhLnF1YW50aXR5LFxyXG4gICAgICAgICAgICBlc3RpbWF0ZWRUaW1lOiBkYXRhLmR1cmF0aW9uLFxyXG4gICAgICAgICAgICBzY2hlZHVsZWRBdDogICBkYXRhLnNjaGVkdWxlZEF0LFxyXG4gICAgICAgICAgICBmYWN0aW9uOiAgICAgICBkYXRhLmZhY3Rpb24gPz8gJ2RlZmF1bHQnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVQgTEFZRVJTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0RGVsaXZlcnlMYXllcnMoKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgaWYgKCFkZWxpdmVyeUxheWVyIHx8IGRlbGl2ZXJ5TGF5ZXIuX21hcCAhPT0gbWFwKSB7XHJcblxyXG4gICAgICAgIGlmIChkZWxpdmVyeUxheWVyKSB7XHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5TGF5ZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWxpdmVyeUxheWVyID0gTC5sYXllckdyb3VwKCkuYWRkVG8obWFwKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxpdmVyeUxheWVyID0gTC5sYXllckdyb3VwKCkuYWRkVG8obWFwKTtcclxuXHJcbiAgICBzdGFydEFuaW1hdGlvbigpO1xyXG4gICAgXHJcbiAgICBwZW5kaW5nRXZlbnRzLmZvckVhY2gocHJvY2Vzc0RlbGl2ZXJ5RXZlbnQpO1xyXG4gICAgcGVuZGluZ0V2ZW50cy5sZW5ndGggPSAwO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDSEFSR0VSIGxlcyBsaXZyYWlzb25zIElOX1RSQU5TSVQgZGVwdWlzIGwnQVBJXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRGVsaXZlcmllcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9kZWxpdmVyaWVzL2luLXRyYW5zaXQnKTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgZGVsaXZlcmllcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgZGVsaXZlcmllcy5mb3JFYWNoKGQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkZWxpdmVyeURhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBkZWxpdmVyeUlkOiAgICBkLmRlbGl2ZXJ5SWQsXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ0lkOiAgICBkLmJ1aWxkaW5nSWQsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICAgICAgICAnaW5fdHJhbnNpdCcsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogICAgICBkLnByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgc2NoZWR1bGVkQXQ6ICAgZC5zY2hlZHVsZWRBdCxcclxuICAgICAgICAgICAgICAgIGVzdGltYXRlZFRpbWU6IGQuZXN0aW1hdGVkVGltZSxcclxuICAgICAgICAgICAgICAgIHdheXBvaW50czogICAgIGQud2F5cG9pbnRzLFxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2U6ICAgICAgZC5yZXNvdXJjZSxcclxuICAgICAgICAgICAgICAgIHJlc291cmNlTGFiZWw6IGQucmVzb3VyY2VMYWJlbCxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAgICAgIGQucXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICBmYWN0aW9uOiAgICAgICBkLmZhY3Rpb24gfHwgJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZygnZGVsaXZlcnknLCAnTG9hZGluZyBkZWxpdmVyeSBmcm9tIEFQSTonLCBkZWxpdmVyeURhdGEpO1xyXG4gICAgICAgICAgICBoYW5kbGVEZWxpdmVyeUV2ZW50KGRlbGl2ZXJ5RGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignZGVsaXZlcnknLCAnRmFpbGVkIHRvIGxvYWQgZGVsaXZlcmllczonLCBlKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSEFORExFIEVWRU5UXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVEZWxpdmVyeUV2ZW50KGRhdGEpIHtcclxuICAgIGlmICghZGVsaXZlcnlMYXllcikge1xyXG4gICAgICAgIHBlbmRpbmdFdmVudHMucHVzaChkYXRhKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwcm9jZXNzRGVsaXZlcnlFdmVudChkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0RlbGl2ZXJ5RXZlbnQoZGF0YSkge1xyXG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSAnZGVsaXZlcmVkJykge1xyXG4gICAgICAgIHJlbW92ZURlbGl2ZXJ5KGRhdGEuZGVsaXZlcnlJZCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSAnaW5fdHJhbnNpdCcpIHtcclxuICAgICAgICB1cHNlcnREZWxpdmVyeShkYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBzZXJ0RGVsaXZlcnkoZGF0YSkge1xyXG4gICAgY29uc3Qga2V5ID0gZGF0YS5kZWxpdmVyeUlkO1xyXG4gICAgaWYgKCFrZXkpIHsgY29uc29sZS53YXJuKCdEZWxpdmVyeSBzYW5zIElEJywgZGF0YSk7IHJldHVybjsgfVxyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBsZXQgd2F5cG9pbnRzID0gZGF0YS53YXlwb2ludHM7XHJcbiAgICBpZiAodHlwZW9mIHdheXBvaW50cyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0cnkgeyB3YXlwb2ludHMgPSBKU09OLnBhcnNlKHdheXBvaW50cyk7IH0gY2F0Y2ggeyByZXR1cm47IH1cclxuICAgIH1cclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh3YXlwb2ludHMpIHx8IHdheXBvaW50cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBsYXRsbmdzID0gd2F5cG9pbnRzLm1hcCh3cCA9PiBbd3AubGF0LCB3cC5sbmddKTtcclxuICAgIGNvbnN0IGZhY3Rpb24gPSBkYXRhLmZhY3Rpb24gfHwgJ2RlZmF1bHQnO1xyXG5cclxuICAgIGlmIChhY3RpdmVEZWxpdmVyaWVzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBhY3RpdmVEZWxpdmVyaWVzLmdldChrZXkpO1xyXG4gICAgICAgIGRlbGl2ZXJ5LndheXBvaW50cyAgICAgICAgICA9IGxhdGxuZ3M7XHJcbiAgICAgICAgZGVsaXZlcnkucHJvZ3Jlc3MgICAgICAgICAgID0gZGF0YS5wcm9ncmVzcyA/PyBkZWxpdmVyeS5wcm9ncmVzcztcclxuICAgICAgICBkZWxpdmVyeS5lc3RpbWF0ZWRUaW1lICAgICAgPSBkYXRhLmVzdGltYXRlZFRpbWU7XHJcbiAgICAgICAgZGVsaXZlcnkuc2NoZWR1bGVkQXQgICAgICAgID0gZGF0YS5zY2hlZHVsZWRBdCA/PyBkZWxpdmVyeS5zY2hlZHVsZWRBdDtcclxuICAgICAgICBkZWxpdmVyeS5sYXN0U2VydmVyUHJvZ3Jlc3MgPSBkYXRhLnByb2dyZXNzID8/IDA7XHJcbiAgICAgICAgZGVsaXZlcnkubGFzdFNlcnZlclRpbWUgICAgID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBkZWxpdmVyeS5mYWN0aW9uICAgICAgICAgICAgPSBmYWN0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwb2x5bGluZSA9IGRyYXdSb2FkU2VnbWVudChgZGVsaXZlcnktJHtrZXl9YCwgbGF0bG5ncywgZmFjdGlvbik7XHJcblxyXG4gICAgICAgIC8vIEZvcm1hdGVyIGwnaGV1cmUgZHUgZMOpcGFydCBwcsOpdnVcclxuICAgICAgICBjb25zdCBzY2hlZHVsZWRUaW1lID0gZGF0YS5zY2hlZHVsZWRBdCA/IGZvcm1hdERhdGUoZGF0YS5zY2hlZHVsZWRBdCkgOiAnSW5jb25udWUnO1xyXG5cclxuICAgICAgICBjb25zdCBtYXJrZXIgPSBMLm1hcmtlcihsYXRsbmdzWzBdLCB7IGljb246IHRydWNrSWNvbiB9KVxyXG4gICAgICAgICAgICAuYWRkVG8oZGVsaXZlcnlMYXllcilcclxuICAgICAgICAgICAgLmJpbmRQb3B1cChgXHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkNhbWlvbiBuwrAke2tleX08L3N0cm9uZz48YnI+XHJcbiAgICAgICAgICAgICAgICBUcmFuc3BvcnRlIDogJHtkYXRhLnF1YW50aXR5ID8/ICcnfSB1bml0w6lzIGRlIDxzdHJvbmc+JHtkYXRhLnJlc291cmNlTGFiZWwgPz8gJyd9PC9zdHJvbmc+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWxpdmVyeS1wcm9ncmVzcy0ke2tleX1cIj5Qcm9ncmVzc2lvbiA6ICR7ZGF0YS5wcm9ncmVzcyA/PyAwfSU8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICBgKTtcclxuXHJcbiAgICAgICAgYWN0aXZlRGVsaXZlcmllcy5zZXQoa2V5LCB7XHJcbiAgICAgICAgICAgIG1hcmtlcixcclxuICAgICAgICAgICAgcG9seWxpbmUsXHJcbiAgICAgICAgICAgIHdheXBvaW50czogICAgICAgICAgbGF0bG5ncyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6ICAgICAgICAgICBkYXRhLnByb2dyZXNzID8/IDAsXHJcbiAgICAgICAgICAgIGVzdGltYXRlZFRpbWU6ICAgICAgZGF0YS5lc3RpbWF0ZWRUaW1lID8/IDM2MDAsXHJcbiAgICAgICAgICAgIHNjaGVkdWxlZEF0OiAgICAgICAgZGF0YS5zY2hlZHVsZWRBdCA/PyBudWxsLFxyXG4gICAgICAgICAgICBsYXN0U2VydmVyUHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3MgPz8gMCxcclxuICAgICAgICAgICAgbGFzdFNlcnZlclRpbWU6ICAgICBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICByZXNvdXJjZTogICAgICAgICAgIGRhdGEucmVzb3VyY2UsXHJcbiAgICAgICAgICAgIHJlc291cmNlTGFiZWw6ICAgICAgZGF0YS5yZXNvdXJjZUxhYmVsLFxyXG4gICAgICAgICAgICBxdWFudGl0eTogICAgICAgICAgIGRhdGEucXVhbnRpdHksXHJcbiAgICAgICAgICAgIGZhY3Rpb24sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZURlbGl2ZXJ5KGtleSkge1xyXG4gICAgY29uc3QgZGVsaXZlcnkgPSBhY3RpdmVEZWxpdmVyaWVzLmdldChrZXkpO1xyXG4gICAgaWYgKCFkZWxpdmVyeSkgcmV0dXJuO1xyXG4gICAgZGVsaXZlcnkubWFya2VyLnJlbW92ZSgpO1xyXG4gICAgZGVsaXZlcnkucG9seWxpbmUucmVtb3ZlKCk7XHJcbiAgICBhY3RpdmVEZWxpdmVyaWVzLmRlbGV0ZShrZXkpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBBTklNQVRJT04gTE9DQUxFIChyZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xyXG4gICAgaWYgKGFuaW1hdGlvbkZyYW1lKSByZXR1cm47XHJcblxyXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICBhY3RpdmVEZWxpdmVyaWVzLmZvckVhY2goKGRlbGl2ZXJ5LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGludGVycG9sYXRlZFByb2dyZXNzO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRlbGl2ZXJ5LnNjaGVkdWxlZEF0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyByw6lzaXN0YW50IGF1IHJlbG9hZCBkZSBwYWdlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShkZWxpdmVyeS5zY2hlZHVsZWRBdCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxhcHNlZCAgID0gKG5vdyAtIHN0YXJ0VGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkUHJvZ3Jlc3MgPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoMCwgKGVsYXBzZWQgLyBkZWxpdmVyeS5lc3RpbWF0ZWRUaW1lKSAqIDEwMClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmYWxsYmFjayBzaSBwYXMgZGUgc2NoZWR1bGVkQXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWRTaW5jZVNlcnZlciA9IChub3cgLSBkZWxpdmVyeS5sYXN0U2VydmVyVGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NQZXJTZWNvbmQgID0gMTAwIC8gZGVsaXZlcnkuZXN0aW1hdGVkVGltZTtcclxuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZFByb2dyZXNzID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJ5Lmxhc3RTZXJ2ZXJQcm9ncmVzcyArIChlbGFwc2VkU2luY2VTZXJ2ZXIgKiBwcm9ncmVzc1BlclNlY29uZClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGludGVycG9sYXRlQWxvbmdSb3V0ZShkZWxpdmVyeS53YXlwb2ludHMsIGludGVycG9sYXRlZFByb2dyZXNzIC8gMTAwKTtcclxuICAgICAgICAgICAgaWYgKHBvcykgZGVsaXZlcnkubWFya2VyLnNldExhdExuZyhwb3MpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGVsaXZlcnktcHJvZ3Jlc3MtJHtrZXl9YCk7XHJcbiAgICAgICAgICAgIGlmIChlbCkgZWwudGV4dENvbnRlbnQgPSBgUHJvZ3Jlc3Npb24gOiAke01hdGgucm91bmQoaW50ZXJwb2xhdGVkUHJvZ3Jlc3MpfSVgO1xyXG5cclxuICAgICAgICAgICAgaWYgKGludGVycG9sYXRlZFByb2dyZXNzID49IDEwMCkgcmVtb3ZlRGVsaXZlcnkoa2V5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOVEVSUE9MQVRJT04gc3VyIGxhIHBvbHlsaWduZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFsb25nUm91dGUobGF0bG5ncywgdCkge1xyXG4gICAgaWYgKCFsYXRsbmdzIHx8IGxhdGxuZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICh0IDw9IDApIHJldHVybiBsYXRsbmdzWzBdO1xyXG4gICAgaWYgKHQgPj0gMSkgcmV0dXJuIGxhdGxuZ3NbbGF0bG5ncy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBsZXQgdG90YWxEaXN0ID0gMDtcclxuICAgIGNvbnN0IHNlZ21lbnRzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxhdGxuZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBkID0gaGF2ZXJzaW5lKGxhdGxuZ3NbaSAtIDFdLCBsYXRsbmdzW2ldKTtcclxuICAgICAgICBzZWdtZW50cy5wdXNoKGQpO1xyXG4gICAgICAgIHRvdGFsRGlzdCArPSBkO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0YXJnZXQgPSB0b3RhbERpc3QgKiB0O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0YXJnZXQgPD0gc2VnbWVudHNbaV0pIHtcclxuICAgICAgICAgICAgY29uc3QgdSA9IHRhcmdldCAvIHNlZ21lbnRzW2ldO1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgbGF0bG5nc1tpXVswXSArIHUgKiAobGF0bG5nc1tpICsgMV1bMF0gLSBsYXRsbmdzW2ldWzBdKSxcclxuICAgICAgICAgICAgICAgIGxhdGxuZ3NbaV1bMV0gKyB1ICogKGxhdGxuZ3NbaSArIDFdWzFdIC0gbGF0bG5nc1tpXVsxXSksXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhcmdldCAtPSBzZWdtZW50c1tpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGF0bG5nc1tsYXRsbmdzLmxlbmd0aCAtIDFdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXZlcnNpbmUoYSwgYikge1xyXG4gICAgY29uc3QgUiA9IDYzNzEwMDA7XHJcbiAgICBjb25zdCBkTGF0ID0gKGJbMF0gLSBhWzBdKSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICBjb25zdCBkTG5nID0gKGJbMV0gLSBhWzFdKSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5zaW4oZExhdCAvIDIpICoqIDJcclxuICAgICAgICAgICAgKyBNYXRoLmNvcyhhWzBdICogTWF0aC5QSSAvIDE4MCkgKiBNYXRoLmNvcyhiWzBdICogTWF0aC5QSSAvIDE4MClcclxuICAgICAgICAgICAgKiBNYXRoLnNpbihkTG5nIC8gMikgKiogMjtcclxuICAgIHJldHVybiBSICogMiAqIE1hdGguYXRhbjIoTWF0aC5zcXJ0KHgpLCBNYXRoLnNxcnQoMSAtIHgpKTtcclxufSIsImltcG9ydCB7IGluaXRNYXAsIGxvYWRXb3JsZCB9IGZyb20gJy4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IGluaXRHUFMgfSBmcm9tICcuL3V0aWxzL2dwcy5qcyc7XHJcbmltcG9ydCB7IGluaXRCYXNlVUkgfSBmcm9tICcuL2J1aWxkaW5ncy9iYXNlLmpzJztcclxuaW1wb3J0IHsgaW5pdEJ1aWxkTW9kZSB9IGZyb20gJy4vYnVpbGRpbmdzL2J1aWxkTW9kZS5qcyc7XHJcbmltcG9ydCB7IGluaXROb3RpZmljYXRpb25zIH0gZnJvbSAnLi9ub3RpZmljYXRpb25zLmpzJztcclxuaW1wb3J0IHsgaW5pdEJ1aWxkaW5nVGltZXJzIH0gZnJvbSAnLi91dGlscy90aW1lci5qcyc7XHJcbmltcG9ydCB7IGluaXREZWxpdmVyeUV2ZW50cyB9IGZyb20gJy4vZGVsaXZlcnkvZGVsaXZlcnkuanMnO1xyXG5pbXBvcnQgeyBpbml0SW52ZW50b3J5RXZlbnRzIH0gZnJvbSAnLi9pbnZlbnRvcnkvaW52ZW50b3J5LmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2cgfSBmcm9tICcuLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cclxuICAgIGVuYWJsZUxlYWZsZXREZWJ1ZyhmYWxzZSk7XHJcblxyXG4gICAgaW5pdE1hcCg0Ni41Mzk3MiwgMi40MzAyOCk7XHJcblxyXG4gICAgaW5pdEJhc2VVSSgpO1xyXG4gICAgaW5pdEJ1aWxkTW9kZSgpO1xyXG4gICAgbG9hZFdvcmxkKCk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdwYWdlLWdhbWUnKTtcclxuXHJcbiAgICBpZiAod2luZG93LmN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgaW5pdE5vdGlmaWNhdGlvbnMoKTtcclxuICAgICAgICBpbml0RGVsaXZlcnlFdmVudHMoKTtcclxuICAgICAgICBpbml0SW52ZW50b3J5RXZlbnRzKCk7XHJcbiAgICAgICAgaW5pdEJ1aWxkaW5nVGltZXJzKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUxlYWZsZXREZWJ1ZyhkZWJ1ZyA9IGZhbHNlKSB7XHJcblxyXG4gICAgaWYgKCFkZWJ1ZykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG9yaWdpbmFsTWFya2VyID0gTC5tYXJrZXI7XHJcbiAgICBjb25zdCBvcmlnaW5hbENpcmNsZSA9IEwuY2lyY2xlO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxQb2x5bGluZSA9IEwucG9seWxpbmU7XHJcblxyXG4gICAgTC5tYXJrZXIgPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgIGRlYnVnTG9nKFwibGVhZmxldFwiLCBcIvCfp6ggTUFSS0VSIENBTEw6XCIsIGFyZ3MpO1xyXG4gICAgICAgIGRlYnVnTG9nKFwibGVhZmxldFwiLCBcIk1BUktFUiBTVEFDS1wiKTtcclxuICAgICAgICByZXR1cm4gb3JpZ2luYWxNYXJrZXIuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEwuY2lyY2xlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgICBkZWJ1Z0xvZyhcImxlYWZsZXRcIiwgXCLwn6eoIENJUkNMRSBDQUxMOlwiLCBhcmdzKTtcclxuICAgICAgICBkZWJ1Z0xvZyhcImxlYWZsZXRcIiwgXCJDSVJDTEUgU1RBQ0tcIik7XHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQ2lyY2xlLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBMLnBvbHlsaW5lID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgICBkZWJ1Z0xvZyhcImxlYWZsZXRcIiwgXCLwn6eoIFBPTFlMSU5FIENBTEw6XCIsIGFyZ3MpO1xyXG4gICAgICAgIGRlYnVnTG9nKFwibGVhZmxldFwiLCBcIlBPTFlMSU5FIFNUQUNLXCIpO1xyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFBvbHlsaW5lLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7IHJlZnJlc2hCdWlsZGluZ1BvcHVwIH0gZnJvbSAnLi4vYnVpbGRpbmdzL2J1aWxkaW5nLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVQg4oCUIHJlbXBsYWNlIGluaXRJbnZlbnRvcnlNZXJjdXJlXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0SW52ZW50b3J5RXZlbnRzKCkge1xyXG4gICAgaWYgKCF3aW5kb3cuY3VycmVudFVzZXIpIHtcclxuICAgICAgICBkZWJ1Z1dhcm4oJ2ludmVudG9yeScsICdBdWN1biB1dGlsaXNhdGV1ciBjb25uZWN0w6knKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZGVidWdMb2coJ2ludmVudG9yeScsICdpbml0SW52ZW50b3J5RXZlbnRzIGFwcGVsw6knKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnYW1lOmV2ZW50JywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gZS5kZXRhaWw7XHJcbiAgICAgICAgaWYgKGRhdGEudHlwZSAhPT0gJ2ludmVudG9yeV91cGRhdGUnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGRlYnVnTG9nKCdpbnZlbnRvcnknLCAnSW52ZW50YWlyZSBtaXMgw6Agam91cjonLCBkYXRhKTtcclxuICAgICAgICBoYW5kbGVJbnZlbnRvcnlVcGRhdGUoZGF0YSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSEFORExFIFVQREFURVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBoYW5kbGVJbnZlbnRvcnlVcGRhdGUoZGF0YSkge1xyXG4gICAgdXBkYXRlTmF2YmFyUmVzb3VyY2VzKGRhdGEucmVzb3VyY2VzID8/IGRhdGEpO1xyXG5cclxuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1aWxkaW5nLXBvcHVwJyk7XHJcbiAgICBpZiAocG9wdXApIHtcclxuICAgICAgICByZWZyZXNoQnVpbGRpbmdQb3B1cChwYXJzZUludChwb3B1cC5kYXRhc2V0LmJ1aWxkaW5nSWQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHYXJkZXIgbCdldmVudCBjdXN0b20gcG91ciBsZXMgYXV0cmVzIGNvbXBvc2FudHMgcXVpIMOpY291dGVudCBkw6lqw6BcclxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW52ZW50b3J5VXBkYXRlZCcsIHsgZGV0YWlsOiBkYXRhIH0pKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTkFWQkFSXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHVwZGF0ZU5hdmJhclJlc291cmNlcyhyZXNvdXJjZXMpIHtcclxuICAgIGlmICghcmVzb3VyY2VzKSByZXR1cm47XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc291cmNlLWl0ZW0nKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBpdGVtLmRhdGFzZXQucmVzb3VyY2VDb2RlO1xyXG4gICAgICAgIGlmIChyZXNvdXJjZXNbY29kZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBxdHlFbGVtZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcucmVzb3VyY2UtcXR5Jyk7XHJcbiAgICAgICAgICAgIGlmIChxdHlFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBxdHlFbGVtZW50LnRleHRDb250ZW50ID0gcmVzb3VyY2VzW2NvZGVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVQR1JBREUgUkVRVUlSRU1FTlRTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGNoZWNrVXBncmFkZVJlcXVpcmVtZW50cyhwb3B1cCwgcmVzb3VyY2VDb2RlLCBxdWFudGl0eSkge1xyXG4gICAgY29uc3QgcmVxdWlyZWRFbGVtZW50ID0gcG9wdXAucXVlcnlTZWxlY3RvcihgW2RhdGEtcmVxdWlyZWQtJHtyZXNvdXJjZUNvZGV9XWApO1xyXG4gICAgaWYgKCFyZXF1aXJlZEVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCByZXF1aXJlZCA9IHBhcnNlSW50KFxyXG4gICAgICAgIHJlcXVpcmVkRWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtcmVxdWlyZWQtJHtyZXNvdXJjZUNvZGV9YCkgfHwgJzAnXHJcbiAgICApO1xyXG5cclxuICAgIHJlcXVpcmVkRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCd0ZXh0LXN1Y2Nlc3MnLCBxdWFudGl0eSA+PSByZXF1aXJlZCk7XHJcbiAgICByZXF1aXJlZEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgndGV4dC1kYW5nZXInLCAgcXVhbnRpdHkgPCByZXF1aXJlZCk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG5jb25zdCBkZXBvc2l0TWFya2VycyA9IG5ldyBNYXAoKTtcclxuXHJcbi8vIENhY2hlIGRlcyBwb3B1cHMgZMOpasOgIGNoYXJnw6lzXHJcbmNvbnN0IHBvcHVwQ29udGVudExvYWRlZCA9IG5ldyBTZXQoKTtcclxuXHJcbi8vIENhY2hlIGRlcyB0eXBlcyBkZSByZXNzb3VyY2VzXHJcbmxldCBidWlsZGluZ1R5cGVzQ2FjaGUgPSBudWxsO1xyXG5sZXQgcmVzb3VyY2VUeXBlc0NhY2hlID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBDaGFyZ2UgbGVzIHR5cGVzIGRlIHJlc3NvdXJjZXMgZGVwdWlzIGwnQVBJXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBsb2FkQnVpbGRpbmdUeXBlcygpIHtcclxuICAgIGlmIChidWlsZGluZ1R5cGVzQ2FjaGUpIHJldHVybiBidWlsZGluZ1R5cGVzQ2FjaGU7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2J1aWxkaW5nLXR5cGVzYCk7XHJcbiAgICAgICAgYnVpbGRpbmdUeXBlc0NhY2hlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBidWlsZGluZ1R5cGVzQ2FjaGU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIHR5cGVzIGRlIHJlc3NvdXJjZXNcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkUmVzb3VyY2VUeXBlcygpIHtcclxuICAgIGlmIChyZXNvdXJjZVR5cGVzQ2FjaGUpIHJldHVybiByZXNvdXJjZVR5cGVzQ2FjaGU7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3Jlc291cmNlLXR5cGVzYCk7XHJcbiAgICAgICAgcmVzb3VyY2VUeXBlc0NhY2hlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiByZXNvdXJjZVR5cGVzQ2FjaGU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIHR5cGVzIGRlIHJlc3NvdXJjZXNcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBNYXBwaW5nIGRlcyBjb3VsZXVycyBwYXIgZMOpZmF1dFxyXG5jb25zdCBERUZBVUxUX0NPTE9SUyA9IHtcclxuICAgICdpcm9uJzogJyM3ZjhjOGQnLFxyXG4gICAgJ29pbCc6ICcjZjFjNDBmJyxcclxuICAgICdjb2FsJzogJyMyYzNlNTAnLFxyXG4gICAgJ3J1YmJlcic6ICcjMjdhZTYwJyxcclxuICAgICdiYXV4aXRlJzogJyNlNjdlMjInLFxyXG4gICAgJ3JhcmVfZWFydGgnOiAnIzhlNDRhZCdcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXRvdXJuZSBsYSBjb3VsZXVyIHBvdXIgdW4gdHlwZSBkZSByZXNzb3VyY2UgKHN5bmNocm9uZSAtIHV0aWxpc2UgbGUgY2FjaGUpXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZXNvdXJjZUNvbG9yKHR5cGUpIHtcclxuICAgIGlmIChyZXNvdXJjZVR5cGVzQ2FjaGUpIHJldHVybiAocmVzb3VyY2VUeXBlc0NhY2hlICYmIHJlc291cmNlVHlwZXNDYWNoZVt0eXBlXT8uY29sb3IpIHx8IERFRkFVTFRfQ09MT1JTW3R5cGVdIHx8ICcjZmZmZmZmJztcclxuXHJcbiAgICBsb2FkUmVzb3VyY2VUeXBlcygpO1xyXG5cclxuICAgIHJldHVybiAocmVzb3VyY2VUeXBlc0NhY2hlICYmIHJlc291cmNlVHlwZXNDYWNoZVt0eXBlXT8uY29sb3IpIHx8IERFRkFVTFRfQ09MT1JTW3R5cGVdIHx8ICcjZmZmZmZmJztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyb3V2ZSBsZSB0eXBlIGRlIGLDonRpbWVudCAobWluZSkgcG91ciB1bmUgcmVzc291cmNlIGRvbm7DqWVcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZShyZXNvdXJjZVR5cGUpIHtcclxuICAgIGNvbnN0IGJ1aWxkaW5nVHlwZXMgPSBhd2FpdCBsb2FkQnVpbGRpbmdUeXBlcygpO1xyXG5cclxuICAgIC8vIENoZXJjaGVyIHVuIGLDonRpbWVudCBxdWkgcHJvZHVpdCBjZXR0ZSByZXNzb3VyY2UgKHByb2R1Y3Rpb25fcmF0ZSA+IDApXHJcbiAgICBjb25zdCBidWlsZGluZ1R5cGUgPSBidWlsZGluZ1R5cGVzLmZpbmQoYnQgPT4ge1xyXG4gICAgICAgIHJldHVybiAoYnQucmVzb3VyY2VfdHlwZSA9PT0gcmVzb3VyY2VUeXBlIHx8IGJ0LnJlc291cmNlVHlwZT8uY29kZSA9PT0gcmVzb3VyY2VUeXBlKSAmJiBidC5wcm9kdWN0aW9uX3JhdGUgPiAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJ1aWxkaW5nVHlwZT8uaWQgfHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlcG9zaXRMYXllcnMgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXNlIGxlcyBjb3VjaGVzIGRlIGTDqXDDtHRzIGR5bmFtaXF1ZW1lbnRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0RGVwb3NpdExheWVycyhtYXAsIGNvbnRyb2wpIHtcclxuICAgIGNvbnN0IHJlc291cmNlVHlwZXMgPSBhd2FpdCBsb2FkUmVzb3VyY2VUeXBlcygpO1xyXG5cclxuICAgIC8vIENyw6llciB1bmUgY291Y2hlIHBvdXIgY2hhcXVlIHR5cGUgZGUgcmVzc291cmNlIChzZXVsZW1lbnQgc2kgY29sb3IgZXhpc3RlKVxyXG4gICAgcmVzb3VyY2VUeXBlcy5mb3JFYWNoKHJ0ID0+IHtcclxuICAgICAgICBpZiAocnQuY29sb3IgJiYgcnQuY29sb3IubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBkZXBvc2l0TGF5ZXJzW3J0LmNvZGVdID0gTC5sYXllckdyb3VwKCk7XHJcbiAgICAgICAgICAgIGNvbnRyb2wuYWRkT3ZlcmxheShkZXBvc2l0TGF5ZXJzW3J0LmNvZGVdLCBgUmVzc291cmNlOiAke3J0LmxhYmVsfWApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZERlcG9zaXRzRm9yQ2h1bmsoY2h1bmtJZCwgbWFwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvZGVwb3NpdHMvJHtjaHVua0lkfWApO1xyXG4gICAgICAgIGNvbnN0IGRlcG9zaXRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoZGVwb3NpdHMsIG1hcCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiRXJyZXVyIGNoYXJnZW1lbnQgZMOpcMO0dHM6XCIsIGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb3JtYXRlIGxlcyBjb8O7dHMgc291cyBmb3JtZSBkZSBjaGHDrm5lIGxpc2libGVcclxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvc3RzIC0gRXg6IFt7Y29kZTogXCJpcm9uX2luZ290XCIsIGxhYmVsOiBcIkZlclwiLCBxdWFudGl0eTogMjV9XSBvdSB7aXJvbl9pbmdvdDogMjV9XHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gRXg6IFwiMjUgRmVyLCAxNSBDYW91dGNob3VjXCJcclxuICovXHJcbmZ1bmN0aW9uIGZvcm1hdENvc3RzKGNvc3RzKSB7XHJcbiAgICBpZiAoIWNvc3RzKSByZXR1cm4gJ04vQSc7XHJcblxyXG4gICAgLy8gTm91dmVhdSBmb3JtYXQ6IGFycmF5IGQnb2JqZXRzIGF2ZWMgY29kZSwgbGFiZWwsIHF1YW50aXR5XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb3N0cykpIHtcclxuICAgICAgICByZXR1cm4gY29zdHMubWFwKGMgPT4gYCR7Yy5xdWFudGl0eX0gJHtjLmxhYmVsfWApLmpvaW4oJywgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQW5jaWVuIGZvcm1hdDogb2JqZXQge2NvZGU6IHF1YW50aXR5fVxyXG4gICAgaWYgKHR5cGVvZiBjb3N0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY29zdHMpXHJcbiAgICAgICAgICAgIC5tYXAoKFtyZXNvdXJjZSwgYW1vdW50XSkgPT4gYCR7YW1vdW50fSAke3Jlc291cmNlfWApXHJcbiAgICAgICAgICAgIC5qb2luKCcsICcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnTi9BJztcclxufVxyXG5cclxuLyoqXHJcbiAqIFbDqXJpZmllIHNpIGxlIGpvdWV1ciBhIGFzc2V6IGRlIHJlc3NvdXJjZXMgcG91ciB1biBkw6lww7R0XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBjaGVja0NhbkNsYWltKGRlcG9zaXQpIHtcclxuICAgIGNvbnN0IGNvc3RzID0gZGVwb3NpdC5jb3N0cztcclxuICAgIGlmICghY29zdHMgfHwgT2JqZWN0LmtleXMoY29zdHMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIC8vIFBvdXIgY2hhcXVlIGNvw7t0LCB2w6lyaWZpZXIgc2kgbGUgam91ZXVyIGEgYXNzZXpcclxuICAgIGZvciAoY29uc3QgW3Jlc291cmNlLCBhbW91bnRdIG9mIE9iamVjdC5lbnRyaWVzKGNvc3RzKSkge1xyXG4gICAgICAgIC8vIEljaSBvbiBwb3VycmFpdCBmYWlyZSB1biBhcHBlbCBBUEkgdmVycyAvYXBpL3BsYXllci1yZXNvdXJjZXNcclxuICAgICAgICAvLyBvdSB1dGlsaXNlciBsZXMgZG9ubsOpZXMgZMOpasOgIGNoYXJnw6llc1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcGxheWVyLXJlc291cmNlcycpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyUmVzb3VyY2VzID0ge307XHJcbiAgICAgICAgZGF0YS5yZXNvdXJjZXMuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgcGxheWVyUmVzb3VyY2VzW3IudHlwZV0gPSByLnF1YW50aXR5O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBoYXMgPSBwbGF5ZXJSZXNvdXJjZXNbcmVzb3VyY2VdID8/IDA7XHJcbiAgICAgICAgaWYgKGhhcyA8IGFtb3VudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcsOpZSB1biBwb3B1cCBzaW1wbGUgKHN5bmNocm9uZSlcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVNpbXBsZVBvcHVwKGRlcG9zaXQpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRlcG9zaXQtcG9wdXBcIj5cclxuICAgICAgICAgICAgPGgzPiR7ZGVwb3NpdC50eXBlIHx8ICdEw6lww7R0IGRlIHJlc291cmNlJ308L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoYXJnZSBsZXMgaW5mb3MgZGVzIGTDqXDDtHRzIGVuIGFycmnDqHJlLXBsYW5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWREZXBvc2l0SW5mb0FzeW5jKGRlcG9zaXRzSUQsIG1hcmtlciwgZGVwb3NpdERhdGEpIHtcclxuICAgIC8vIMOJdml0ZXIgZGUgcmVjaGFyZ2VyIHNpIGTDqWrDoCBjaGFyZ8OpXHJcbiAgICBpZiAocG9wdXBDb250ZW50TG9hZGVkLmhhcyhkZXBvc2l0c0lEKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBvcHVwQ29udGVudExvYWRlZC5hZGQoZGVwb3NpdHNJRCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBDaGFyZ2VyIGRpcmVjdGVtZW50IGxlIGNvbnRlbnUgZHUgcG9wdXBcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9kZXBvc2l0LyR7ZGVwb3NpdHNJRH0vcG9wdXAtY29udGVudGApO1xyXG5cclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICBkZWJ1Z1dhcm4oJ2RlcG9zaXRzJywgYEVycmV1ciBBUEkgcG9wdXAtY29udGVudCAoZGVwb3NpdCAke2RlcG9zaXRzSUR9KTpgLCByZXMuc3RhdHVzKTtcclxuICAgICAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChkZXBvc2l0RGF0YSkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVzLnRleHQoKTtcclxuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGh0bWwpO1xyXG4gICAgICAgIGRlcG9zaXRNYXJrZXJzLnNldChkZXBvc2l0c0lELCB7IG1hcmtlciwgZGF0YTogZGVwb3NpdERhdGEgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGR1IHBvcHVwXCIsIGUpO1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoZGVwb3NpdERhdGEpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbmR1IGRlcyBkw6lww7R0cyBzdXIgbGEgY2FydGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGRlcG9zaXRzLCBtYXApIHtcclxuICAgIGRlcG9zaXRzLmZvckVhY2goZGVwb3NpdCA9PiB7XHJcbiAgICAgICAgaWYgKGRlcG9zaXRNYXJrZXJzLmhhcyhkZXBvc2l0LmlkKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB0eXBlID0gZGVwb3NpdC5yZXNvdXJjZV90eXBlO1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gZGVwb3NpdExheWVyc1t0eXBlXTtcclxuXHJcbiAgICAgICAgaWYgKCFsYXllcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjb2xvciA9IGdldFJlc291cmNlQ29sb3IodHlwZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IEwuY2lyY2xlTWFya2VyKFtkZXBvc2l0LmxhdGl0dWRlLCBkZXBvc2l0LmxvbmdpdHVkZV0sIHtcclxuICAgICAgICAgICAgcmFkaXVzOiA4LFxyXG4gICAgICAgICAgICBmaWxsQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgICAgICAgIHdlaWdodDogMSxcclxuICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuOFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmFkZFRvKGxheWVyKVxyXG4gICAgICAgIC5iaW5kUG9wdXAoY3JlYXRlU2ltcGxlUG9wdXAoZGVwb3NpdCkpO1xyXG5cclxuICAgICAgICAvLyBDaGFyZ2VyIGxlIGNvbnRlbnUgZGUgbGEgcG9wdXAgdW5pcXVlbWVudCBxdWFuZCBlbGxlIGVzdCBvdXZlcnRlXHJcbiAgICAgICAgaWYgKGRlcG9zaXQuaWQpIHtcclxuICAgICAgICAgICAgbWFya2VyLm9uKCdwb3B1cG9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkRGVwb3NpdEluZm9Bc3luYyhkZXBvc2l0LmlkLCBtYXJrZXIsIGRlcG9zaXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBlcm1ldCBkJ2V4cGxvaXRlciB1biBkw6lww7R0IGRlcHVpcyBsYSBwb3B1cFxyXG4gKi9cclxud2luZG93LmNsYWltRGVwb3NpdCA9IGFzeW5jIGZ1bmN0aW9uKGlkLCByZXNvdXJjZVR5cGUpIHtcclxuICAgIC8vIFRyb3V2ZXIgbGUgdHlwZSBkZSBiw6J0aW1lbnQgYXBwcm9wcmnDqVxyXG4gICAgY29uc3QgYnVpbGRpbmdUeXBlSWQgPSBhd2FpdCBmaW5kQnVpbGRpbmdUeXBlRm9yUmVzb3VyY2UocmVzb3VyY2VUeXBlKTtcclxuXHJcbiAgICBpZiAoIWJ1aWxkaW5nVHlwZUlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KGBJbXBvc3NpYmxlIGRlIHRyb3V2ZXIgdW4gYsOidGltZW50IHBvdXIgZXh0cmFpcmUgbGUgJHtyZXNvdXJjZVR5cGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29uc3RydWlyZSBkaXJlY3RlbWVudCBsZSBiw6J0aW1lbnQgc3VyIGxlcyBjb29yZG9ubsOpZXMgZHUgZMOpcMO0dFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2J1aWxkJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGxhdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxuZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIHR5cGVfaWQ6IGJ1aWxkaW5nVHlwZUlkLFxyXG4gICAgICAgICAgICAgICAgZGVwb3NpdF9pZDogaWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgIGxldCBkYXRhO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgfSBjYXRjaCAocGFyc2VFcnJvcikge1xyXG4gICAgICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiUsOpcG9uc2Ugbm9uLUpTT04gcmXDp3VlOlwiLCByZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSw6lwb25zZSBpbnZhbGlkZSBkdSBzZXJ2ZXVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGRlYnVnTG9nKCdkZXBvc2l0cycsICdEw6lww7R0IGV4cGxvaXTDqSBhdmVjIHN1Y2PDqHMgISBCw6J0aW1lbnQgY3LDqcOpLicpO1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiRXJyZXVyOiBcIiArIChkYXRhLmVycm9yIHx8IFwiSW1wb3NzaWJsZSBkJ2V4cGxvaXRlciBjZSBkw6lww7R0XCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1ciBsb3JzIGRlIGwnZXhwbG9pdGF0aW9uXCIsIGUpO1xyXG4gICAgICAgIGFsZXJ0KFwiRXJyZXVyIHLDqXNlYXUgbG9ycyBkZSBsJ2V4cGxvaXRhdGlvbjogXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xuXG5sZXQgZm9nTGF5ZXIgPSBudWxsO1xubGV0IHZpc2lvblNvdXJjZXMgPSBbXTtcbmxldCBmb2dNb2RlID0gJ2Rpc2FibGVkJztcbmxldCBtYXBJbnN0YW5jZSA9IG51bGw7XG5cbmNsYXNzIEZvZ09mV2FyIHtcbiAgICBjb25zdHJ1Y3RvcihtYXApIHtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5pbml0Q2FudmFzKCk7XG4gICAgICAgIHRoaXMudmlzaW9uU291cmNlcyA9IFtdO1xuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0Q2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuekluZGV4ID0gJzUwMCc7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5tYXAuZ2V0Q29udGFpbmVyKCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgaWYgKCFjdHgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FudmFzIGNvbnRleHQgdW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjdHg7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5tYXAub24oJ21vdmUgem9vbSByZXNpemUgbW92ZWVuZCB6b29tZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKHRoaXMudmlzaW9uU291cmNlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMubWFwLmdldFNpemUoKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBzaXplLng7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHNpemUueTtcblxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IGAke3NpemUueH1weGA7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke3NpemUueX1weGA7XG4gICAgfVxuXG4gICAgdXBkYXRlU291cmNlcyhzb3VyY2VzKSB7XG4gICAgICAgIHRoaXMudmlzaW9uU291cmNlcyA9IHNvdXJjZXM7XG4gICAgICAgIHRoaXMucmVuZGVyKHNvdXJjZXMpO1xuICAgIH1cblxuICAgIHJlbmRlcihzb3VyY2VzKSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLm1hcC5nZXRTaXplKCk7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgc2l6ZS54LCBzaXplLnkpO1xuXG4gICAgICAgIC8vIEJyb3VpbGxhcmRcbiAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjc1KSc7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzaXplLngsIHNpemUueSk7XG5cbiAgICAgICAgLy8gRMOpY291cGUgZGVzIHpvbmVzIHZpc2libGVzXG4gICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcblxuICAgICAgICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXIgPSBMLmxhdExuZyhzb3VyY2UubGF0LCBzb3VyY2UubG5nKTtcblxuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSB0aGlzLm1hcC5sYXRMbmdUb0NvbnRhaW5lclBvaW50KGNlbnRlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGVkZ2UgPSBMLmxhdExuZyhzb3VyY2UubGF0LCBzb3VyY2UubG5nICsgc291cmNlLnJhZGl1cyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJhZGl1c1B4ID0gcG9pbnQuZGlzdGFuY2VUbyh0aGlzLm1hcC5sYXRMbmdUb0NvbnRhaW5lclBvaW50KGVkZ2UpKTtcblxuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQocG9pbnQueCwgcG9pbnQueSwgMCwgcG9pbnQueCwgcG9pbnQueSwgcmFkaXVzUHgpO1xuXG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMCwwLDAsMSknKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgwLDAsMCwwKScpO1xuXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMocG9pbnQueCwgcG9pbnQueSwgcmFkaXVzUHgsIDAsIE1hdGguUEkgKiAyKTtcblxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgLy8gRGVidWdcbiAgICAgICAgICAgIGlmIChmb2dNb2RlID09PSAnZGVidWcnKSB7XG4gICAgICAgICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG5cbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LmFyYyhwb2ludC54LCBwb2ludC55LCByYWRpdXNQeCwgMCwgTWF0aC5QSSAqIDIpO1xuXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2xpbWUnO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH1cbn1cblxubGV0IGZvZ0luc3RhbmNlID0gbnVsbDtcblxuLyoqXG4gKiBJbml0aWFsaXNlIGxlIGJyb3VpbGxhcmQgZGUgZ3VlcnJlXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kZSAtIE1vZGUgZGUgYnJvdWlsbGFyZCAoJ2VuYWJsZWQnLCAnZGlzYWJsZWQnLCAnZGVidWcnKVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlcyAtIFNvdXJjZXMgZGUgdmlzaW9uXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIC0gSW5zdGFuY2UgTGVhZmxldFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdEZvZ09mV2FyKG1vZGUsIHNvdXJjZXMsIG1hcCkge1xuICAgIGZvZ01vZGUgPSBtb2RlIHx8ICdkaXNhYmxlZCc7XG5cbiAgICBpZiAoIWZvZ0luc3RhbmNlICYmIGZvZ01vZGUgIT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgZm9nSW5zdGFuY2UgPSBuZXcgRm9nT2ZXYXIobWFwKTtcbiAgICB9XG5cbiAgICBpZiAoIWZvZ0luc3RhbmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZm9nTW9kZSA9PT0gJ2Rpc2FibGVkJykge1xuICAgICAgICBmb2dJbnN0YW5jZS5jYW52YXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvZ0luc3RhbmNlLmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBmb2dJbnN0YW5jZS51cGRhdGVTb3VyY2VzKHNvdXJjZXMpO1xufVxuXG4vKipcbiAqIFbDqXJpZmllIHNpIHVuIHBvaW50IGVzdCB2aXNpYmxlXG4gKiBAcGFyYW0ge251bWJlcn0gbGF0XG4gKiBAcGFyYW0ge251bWJlcn0gbG5nXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUG9pbnRWaXNpYmxlKGxhdCwgbG5nKSB7XG4gICAgaWYgKGZvZ01vZGUgPT09ICdkaXNhYmxlZCcgfHwgZm9nTW9kZSA9PT0gJ2RlYnVnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2VzID0gZm9nSW5zdGFuY2U/LnZpc2lvblNvdXJjZXMgfHwgW107XG4gICAgcmV0dXJuIHNvdXJjZXMuc29tZShzb3VyY2UgPT4ge1xuICAgICAgICBjb25zdCBkeCA9IGxhdCAtIHNvdXJjZS5sYXQ7XG4gICAgICAgIGNvbnN0IGR5ID0gbG5nIC0gc291cmNlLmxuZztcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICByZXR1cm4gZGlzdGFuY2UgPD0gc291cmNlLnJhZGl1cztcbiAgICB9KTtcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcblxyXG5pbXBvcnQgeyBncmlkTGF5ZXIsIGluaXRHcmlkTGF5ZXIgfSBmcm9tICcuLi9MYXllcnMvZ3JpZExheWVyLmpzJztcclxuaW1wb3J0IHsgbG9hZFZpc2libGVSb2FkQ2h1bmtzIH0gZnJvbSAnLi9yb2Fkcy9yb2Fkcy5qcyc7XHJcbmltcG9ydCB7IHJvYWRzU3RhdGUgfSBmcm9tICcuL3JvYWRzL3JvYWRzU3RhdGUuanMnO1xyXG5cclxuaW1wb3J0IHsgbG9hZEJhc2VGcm9tU2VydmVyLCBsb2FkT3RoZXJCYXNlLCBzZXRDdXJyZW50UGxheWVyRmFjdGlvbiB9IGZyb20gJy4uL2J1aWxkaW5ncy9iYXNlLmpzJztcclxuaW1wb3J0IHsgbG9hZEJ1aWxkaW5nc0Zyb21EYXRhLCBzZXRDdXJyZW50UGxheWVySWQgfSBmcm9tICcuLi9idWlsZGluZ3MvYnVpbGRpbmcuanMnO1xyXG5cclxuaW1wb3J0IHsgaW5pdERlcG9zaXRMYXllcnMsIGRlcG9zaXRMYXllcnMgfSBmcm9tICcuL2RlcG9zaXRzL2RlcG9zaXRzLmpzJztcclxuaW1wb3J0IHsgaW5pdEZvZ09mV2FyIH0gZnJvbSAnLi9mb2dPZldhci5qcyc7XHJcblxyXG5pbXBvcnQgbWFya2VySWNvbiBmcm9tICdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1pY29uLnBuZyc7XHJcbmltcG9ydCBtYXJrZXJTaGFkb3cgZnJvbSAnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItc2hhZG93LnBuZyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG5MLk1hcmtlci5wcm90b3R5cGUub3B0aW9ucy5pY29uID0gTC5pY29uKHtcclxuICAgIGljb25Vcmw6IG1hcmtlckljb24sXHJcbiAgICBzaGFkb3dVcmw6IG1hcmtlclNoYWRvdyxcclxufSk7XHJcblxyXG5sZXQgbWFwSW5zdGFuY2UgPSBudWxsO1xyXG5sZXQgbW92ZVRpbWVvdXQgPSBudWxsO1xyXG5sZXQgaXNDaHVua01vZGUgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0TWFwKGxhdCwgbG5nKSB7XHJcblxyXG4gICAgbWFwSW5zdGFuY2UgPSBMLm1hcCgnbWFwJykuc2V0VmlldyhbbGF0LCBsbmddLCA3KTtcclxuXHJcbiAgICBMLnRpbGVMYXllcignaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnLCB7XHJcbiAgICAgICAgYXR0cmlidXRpb246ICcmY29weTsgT3BlblN0cmVldE1hcCdcclxuICAgIH0pLmFkZFRvKG1hcEluc3RhbmNlKTtcclxuXHJcbiAgICAvLyDDiXbDqW5lbWVudCBwZXJzb25uYWxpc8OpIHBvdXIgc2lnbmFsZXIgcXVlIGxhIGNhcnRlIGVzdCBwcsOqdGVcclxuICAgIG1hcEluc3RhbmNlLmZpcmUoJ21hcFJlYWR5Jyk7XHJcblxyXG4gICAgY29uc3QgbGF5ZXJzQ29udHJvbCA9IEwuY29udHJvbC5sYXllcnMobnVsbCwge1xyXG4gICAgICAgIFwiQ2h1bmsgR3JpZFwiOiBncmlkTGF5ZXJcclxuICAgIH0pLmFkZFRvKG1hcEluc3RhbmNlKTtcclxuXHJcbiAgICBhd2FpdCBpbml0RGVwb3NpdExheWVycyhtYXBJbnN0YW5jZSwgbGF5ZXJzQ29udHJvbCk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBDRU5UUkFMIENIVU5LIENPTlRST0xMRVJcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIG1hcEluc3RhbmNlLm9uKCdtb3ZlZW5kJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIWlzQ2h1bmtNb2RlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKG1hcEluc3RhbmNlLmdldFpvb20oKSA8IDE0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dChtb3ZlVGltZW91dCk7XHJcblxyXG4gICAgICAgIG1vdmVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGluaXRHcmlkTGF5ZXIoKTtcclxuICAgICAgICAgICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1hcEluc3RhbmNlLm9uKCdvdmVybGF5YWRkJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5sYXllciA9PT0gZ3JpZExheWVyKSB7XHJcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiZ3JpZFwiLCBcIkdyaWQgT05cIik7XHJcblxyXG4gICAgICAgICAgICBpbml0R3JpZExheWVyKCk7XHJcbiAgICAgICAgICAgIGxvYWRWaXNpYmxlUm9hZENodW5rcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG1hcEluc3RhbmNlLm9uKCdvdmVybGF5cmVtb3ZlJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5sYXllciA9PT0gZ3JpZExheWVyKSB7XHJcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiZ3JpZFwiLCBcIkdyaWQgT0ZGXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gRVZFTlRTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcEluc3RhbmNlLm9uKCd6b29tZW5kJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB6b29tID0gbWFwSW5zdGFuY2UuZ2V0Wm9vbSgpO1xyXG5cclxuICAgICAgICBpZiAoem9vbSA+PSAxNCkge1xyXG4gICAgICAgICAgICBlbnRlckNodW5rTW9kZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV4aXRDaHVua01vZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzR3JpZExheWVyQWN0aXZlKCkge1xyXG4gICAgcmV0dXJuIG1hcEluc3RhbmNlPy5oYXNMYXllcihncmlkTGF5ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFwKCkge1xyXG4gICAgcmV0dXJuIG1hcEluc3RhbmNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmx5VG8obGF0LCBsbmcsIHpvb20gPSAxMykge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBtYXAuZmx5VG8oW2xhdCwgbG5nXSwgem9vbSwge1xyXG4gICAgICAgIGFuaW1hdGU6IHRydWUsXHJcbiAgICAgICAgZHVyYXRpb246IDEuNVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBXT1JMRCBMT0FERVIgKENvbmNlbnRyYXRldXIgZCdhcHBlbHMgQVBJKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRXb3JsZCgpIHtcclxuXHJcbiAgICBmZXRjaCgnL2FwaS93b3JsZC1zdGF0ZScpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCAke3Jlcy5zdGF0dXN9OiAke3Jlcy5zdGF0dXNUZXh0fWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFbDqXJpZmllciBzaSBsYSByw6lwb25zZSBlc3QgdmFsaWRlXHJcbiAgICAgICAgICAgIGlmICghZGF0YSB8fCB0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZXNwb25zZSBmb3JtYXQnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2hhcmdlciBsZXMgYmFzZXMgdmlhIGJhc2UuanMgRCdBQk9SRCBwb3VyIGNvbm5hw650cmUgbGEgZmFjdGlvbiBkdSBqb3VldXJcclxuICAgICAgICAgICAgaWYgKGRhdGEucGxheWVycykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhhc0NlbnRlcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YS5wbGF5ZXJzLmZvckVhY2gocGxheWVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLmlzTWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBsYXllckZhY3Rpb24ocGxheWVyLmZhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkQmFzZUZyb21TZXJ2ZXIocGxheWVyLmxhdCwgcGxheWVyLmxuZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0NlbnRlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHlUbyhwbGF5ZXIubGF0LCBwbGF5ZXIubG5nLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDZW50ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRPdGhlckJhc2UocGxheWVyLmxhdCwgcGxheWVyLmxuZywgcGxheWVyLnBzZXVkbywgcGxheWVyLmZhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIETDqWZpbmlyIGwnSUQgZHUgam91ZXVyIGFjdGlmXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmN1cnJlbnRQbGF5ZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFBsYXllcklkKGRhdGEuY3VycmVudFBsYXllcklkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2hhcmdlciBsZXMgYsOidGltZW50cyBhcHLDqHMgYXZvaXIgZMOpZmluaSBsYSBmYWN0aW9uIGR1IGpvdWV1clxyXG4gICAgICAgICAgICBsb2FkQnVpbGRpbmdzRnJvbURhdGEoZGF0YS5idWlsZGluZ3MpO1xyXG5cclxuICAgICAgICAgICAgLy8gSW5pdGlhbGlzZXIgbGUgRm9nIG9mIFdhclxyXG4gICAgICAgICAgICBpZiAoZGF0YS5mb2dNb2RlICYmIGRhdGEudmlzaW9uU291cmNlcykge1xyXG4gICAgICAgICAgICAgICAgaW5pdEZvZ09mV2FyKGRhdGEuZm9nTW9kZSwgZGF0YS52aXNpb25Tb3VyY2VzLCBtYXBJbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBkZWJ1Z0Vycm9yKCdtYXAnLCBcIkVycmV1ciBsb2FkIHdvcmxkXCIsIGVycik7XHJcbiAgICAgICAgICAgIC8vIE5lIHBhcyByZWRpcmlnZXIgYXV0b21hdGlxdWVtZW50LCBsYWlzc2V6IGxlIHN5c3TDqG1lIGRlIGxvZ2luIGfDqXJlciBsYSByZWRpcmVjdGlvblxyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbnRlckNodW5rTW9kZSgpIHtcclxuICAgIGlmIChpc0NodW5rTW9kZSkgcmV0dXJuO1xyXG5cclxuICAgIGlzQ2h1bmtNb2RlID0gdHJ1ZTtcclxuXHJcbiAgICBkZWJ1Z0xvZyhcImNodW5rc1wiLCBcIkVOVEVSIENIVU5LIE1PREVcIik7XHJcblxyXG4gICAgaW5pdEdyaWRMYXllcigpO1xyXG4gICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4aXRDaHVua01vZGUoKSB7XHJcbiAgICBpZiAoIWlzQ2h1bmtNb2RlKSByZXR1cm47XHJcblxyXG4gICAgaXNDaHVua01vZGUgPSBmYWxzZTtcclxuXHJcbiAgICBkZWJ1Z0xvZyhcImNodW5rc1wiLCBcIkVYSVQgQ0hVTksgTU9ERVwiKTtcclxuXHJcbiAgICBpZiAobWFwSW5zdGFuY2UuaGFzTGF5ZXIoZ3JpZExheWVyKSkge1xyXG4gICAgICAgIG1hcEluc3RhbmNlLnJlbW92ZUxheWVyKGdyaWRMYXllcik7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBjaHVua0NhY2hlID0gbmV3IE1hcCgpO1xyXG5jb25zdCBDQUNIRV9UVEwgPSAzNjAwMDAwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENhY2hlZENodW5rKGlkKSB7XHJcbiAgICBjb25zdCBjYWNoZWQgPSBjaHVua0NhY2hlLmdldChpZCk7XHJcblxyXG4gICAgaWYgKCFjYWNoZWQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoRGF0ZS5ub3coKSAtIGNhY2hlZC50cyA+IENBQ0hFX1RUTCkge1xyXG4gICAgICAgIGNodW5rQ2FjaGUuZGVsZXRlKGlkKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FjaGVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2FjaGVkQ2h1bmsoaWQsIGRhdGEpIHtcclxuICAgIGNodW5rQ2FjaGUuc2V0KGlkLCB7XHJcbiAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICB0czogRGF0ZS5ub3coKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkYXRlQ2h1bmtDYWNoZShpZCkge1xyXG4gICAgY2h1bmtDYWNoZS5kZWxldGUoaWQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDaHVua0NhY2hlKCkge1xyXG4gICAgY2h1bmtDYWNoZS5jbGVhcigpO1xyXG59IiwiaW1wb3J0IHsgcm9hZHNTdGF0ZSB9IGZyb20gJy4vcm9hZHNTdGF0ZS5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5pbXBvcnQgeyBpbnZhbGlkYXRlQ2h1bmtDYWNoZSB9IGZyb20gJy4vY2h1bmtDYWNoZS5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZGF0ZUNodW5rKGlkKSB7XHJcbiAgICBkZWJ1Z0xvZyhcImNhY2hlXCIsIFwi8J+nuSBpbnZhbGlkYXRlIGNodW5rOlwiLCBpZCk7XHJcblxyXG4gICAgZGVsZXRlIHJvYWRzU3RhdGUuY2h1bmtzW2lkXTtcclxuICAgIGludmFsaWRhdGVDaHVua0NhY2hlKGlkKTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2cgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG4vKipcclxuICogVHJvdXZlIGxlIHBvaW50IGxlIHBsdXMgcHJvY2hlIHN1ciB0b3V0ZXMgbGVzIHJvdXRlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDbG9zZXN0UG9pbnRPblJvYWQobGF0bG5nLCByb2Fkcykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgbGV0IGJlc3RQb2ludCA9IG51bGw7XHJcbiAgICBsZXQgYmVzdERpc3RhbmNlID0gSW5maW5pdHk7XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWRzKSkgcmV0dXJuIHsgcG9pbnQ6IG51bGwsIGRpc3RhbmNlOiBJbmZpbml0eSB9O1xyXG5cclxuICAgIHJvYWRzLmZvckVhY2gocm9hZCA9PiB7XHJcblxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkLnBvaW50cykpIHJldHVybjtcclxuICAgICAgICBpZiAocm9hZC5wb2ludHMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvYWQucG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYVJhdyA9IHJvYWQucG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiUmF3ID0gcm9hZC5wb2ludHNbaSArIDFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFhUmF3IHx8ICFiUmF3KSB7XHJcbiAgICAgICAgICAgICAgICBkZWJ1Z1dhcm4oXCJyb2Fkc1wiLCBcIkJST0tFTiBST0FEIFNFR01FTlQ6XCIsIHJvYWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYVJhdy5sZW5ndGggPCAyIHx8IGJSYXcubGVuZ3RoIDwgMikgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhID0gTC5sYXRMbmcoYVJhd1swXSwgYVJhd1sxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBMLmxhdExuZyhiUmF3WzBdLCBiUmF3WzFdKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RlZCA9IHByb2plY3RQb2ludE9uU2VnbWVudChsYXRsbmcsIGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gbWFwLmRpc3RhbmNlKGxhdGxuZywgcHJvamVjdGVkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0IDwgYmVzdERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0RGlzdGFuY2UgPSBkaXN0O1xyXG4gICAgICAgICAgICAgICAgYmVzdFBvaW50ID0gcHJvamVjdGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwb2ludDogYmVzdFBvaW50LFxyXG4gICAgICAgIGRpc3RhbmNlOiBiZXN0RGlzdGFuY2VcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcm91dmUgbGUgc2VnbWVudCBsZSBwbHVzIHByb2NoZSAocG91ciBoaWdobGlnaHQgdmlzdWVsKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDbG9zZXN0U2VnbWVudChsYXRsbmcsIHJvYWRzKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBsZXQgYmVzdFNlZ21lbnQgPSBudWxsO1xyXG4gICAgbGV0IGJlc3REaXN0YW5jZSA9IEluZmluaXR5O1xyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkcykpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJvYWRzLmZvckVhY2gocm9hZCA9PiB7XHJcblxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkLnBvaW50cykpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2FkLnBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFSYXcgPSByb2FkLnBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgYlJhdyA9IHJvYWQucG9pbnRzW2kgKyAxXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYVJhdyB8fCAhYlJhdykgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChhUmF3Lmxlbmd0aCA8IDIgfHwgYlJhdy5sZW5ndGggPCAyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBMLmxhdExuZyhhUmF3WzBdLCBhUmF3WzFdKTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IEwubGF0TG5nKGJSYXdbMF0sIGJSYXdbMV0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWlkID0gTC5sYXRMbmcoXHJcbiAgICAgICAgICAgICAgICAoYS5sYXQgKyBiLmxhdCkgLyAyLFxyXG4gICAgICAgICAgICAgICAgKGEubG5nICsgYi5sbmcpIC8gMlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlzdCA9IG1hcC5kaXN0YW5jZShsYXRsbmcsIG1pZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlzdCA8IGJlc3REaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgYmVzdERpc3RhbmNlID0gZGlzdDtcclxuICAgICAgICAgICAgICAgIGJlc3RTZWdtZW50ID0gW2EsIGJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJlc3RTZWdtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogUHJvamVjdGlvbiBkJ3VuIHBvaW50IHN1ciB1biBzZWdtZW50IChBLUIpXHJcbiAqIG1hdGggc3RhYmxlIHBvdXIgc25hcCByb3V0ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0UG9pbnRPblNlZ21lbnQocCwgYSwgYikge1xyXG5cclxuICAgIGNvbnN0IEEgPSBbYS5sYXQsIGEubG5nXTtcclxuICAgIGNvbnN0IEIgPSBbYi5sYXQsIGIubG5nXTtcclxuICAgIGNvbnN0IFAgPSBbcC5sYXQsIHAubG5nXTtcclxuXHJcbiAgICBjb25zdCBBQiA9IFtCWzBdIC0gQVswXSwgQlsxXSAtIEFbMV1dO1xyXG4gICAgY29uc3QgQVAgPSBbUFswXSAtIEFbMF0sIFBbMV0gLSBBWzFdXTtcclxuXHJcbiAgICBjb25zdCBhYjIgPSBBQlswXSAqIEFCWzBdICsgQUJbMV0gKiBBQlsxXTtcclxuXHJcbiAgICBpZiAoYWIyID09PSAwKSByZXR1cm4gYTtcclxuXHJcbiAgICBsZXQgdCA9IChBUFswXSAqIEFCWzBdICsgQVBbMV0gKiBBQlsxXSkgLyBhYjI7XHJcblxyXG4gICAgdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHQpKTtcclxuXHJcbiAgICByZXR1cm4gTC5sYXRMbmcoXHJcbiAgICAgICAgQVswXSArIEFCWzBdICogdCxcclxuICAgICAgICBBWzFdICsgQUJbMV0gKiB0XHJcbiAgICApO1xyXG59XHJcblxyXG4vKipcclxuICogRGlzdGFuY2UgcG9pbnQgLT4gc2VnbWVudCAodXRpbGUgdmFsaWRhdGlvbiBmdXR1cmUpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2VUb1NlZ21lbnQocCwgYSwgYikge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdGVkID0gcHJvamVjdFBvaW50T25TZWdtZW50KHAsIGEsIGIpO1xyXG4gICAgcmV0dXJuIG1hcC5kaXN0YW5jZShwLCBwcm9qZWN0ZWQpO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgc2ltcGxlIGRlYnVnIHJvYWRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdSb2Fkcyhyb2Fkcykge1xyXG4gICAgZGVidWdMb2coXCJyb2Fkc1wiLCBcIlJPQURTIERFQlVHOlwiLCByb2Fkcy5sZW5ndGgsIHJvYWRzKTtcclxufSIsImltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC5qcyc7XHJcbmltcG9ydCB7IENIVU5LX1NJWkUgfSBmcm9tICcuLi8uLi91dGlscy9jaHVuay5qcyc7XHJcbmltcG9ydCB7IHNldENodW5rQ29sb3IgfSBmcm9tICcuLi8uLi9MYXllcnMvZ3JpZExheWVyLmpzJztcclxuaW1wb3J0IHsgaW52YWxpZGF0ZUNodW5rIH0gZnJvbSAnLi9pbnZhbGlkYXRlQ2h1bmsuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5pbXBvcnQgeyByb2Fkc1N0YXRlIH0gZnJvbSAnLi9yb2Fkc1N0YXRlLmpzJztcclxuaW1wb3J0IHsgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YSB9IGZyb20gJy4uL2RlcG9zaXRzL2RlcG9zaXRzLmpzJztcclxuaW1wb3J0IHsgZ2V0Q2FjaGVkQ2h1bmssIHNldENhY2hlZENodW5rLCBpbnZhbGlkYXRlQ2h1bmtDYWNoZSB9IGZyb20gJy4vY2h1bmtDYWNoZS5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBNQUlOIExPQUQgVklTSUJMRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFZpc2libGVSb2FkQ2h1bmtzKCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCB8fCBtYXAuZ2V0Wm9vbSgpIDwgMTQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBib3VuZHMgICAgICAgID0gbWFwLmdldEJvdW5kcygpO1xyXG4gICAgY29uc3QgdmlzaWJsZUNodW5rcyA9IGdldFZpc2libGVDaHVua3MoYm91bmRzKTtcclxuICAgIGNvbnN0IGNodW5rc1RvTG9hZCAgPSB2aXNpYmxlQ2h1bmtzLmZpbHRlcihjaHVua0lkID0+ICFyb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5oYXMoY2h1bmtJZCkpO1xyXG5cclxuICAgIGNvbnN0IGZpbmFsQ2h1bmtzVG9Mb2FkID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBjaHVua0lkIG9mIGNodW5rc1RvTG9hZCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXRDYWNoZWRDaHVuayhjaHVua0lkKTtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogICBkYXRhLmhhc1JvYWRzID8gJ2xvYWRlZCcgOiAnZW1wdHknLFxyXG4gICAgICAgICAgICAgICAgcm9hZHM6ICAgIGRhdGEucm9hZHMsXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6IGRhdGEuYnVpbGRpbmdzLFxyXG4gICAgICAgICAgICAgICAgZGVwb3NpdHM6IGRhdGEuZGVwb3NpdHMsXHJcbiAgICAgICAgICAgICAgICBoYXNSb2FkczogZGF0YS5oYXNSb2Fkc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5hZGQoY2h1bmtJZCk7XHJcbiAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgZGF0YS5oYXNSb2FkcyA/ICdibHVlJyA6ICcjNDQ0Jyk7XHJcbiAgICAgICAgICAgIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoZGF0YS5kZXBvc2l0cyB8fCBbXSwgbWFwKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsQ2h1bmtzVG9Mb2FkLnB1c2goY2h1bmtJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBjaHVua0lkIG9mIGZpbmFsQ2h1bmtzVG9Mb2FkKSB7XHJcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7IHN0YXR1czogJ2xvYWRpbmcnLCByb2FkczogW10sIGJ1aWxkaW5nczogW10sIGRlcG9zaXRzOiBbXSB9O1xyXG4gICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ29yYW5nZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaW5hbENodW5rc1RvTG9hZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZWZyZXNoQ2h1bmtDb2xvcnModmlzaWJsZUNodW5rcyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgW3JvYWRzUmVzcG9uc2UsIGJ1aWxkaW5nc1Jlc3BvbnNlLCBkZXBvc2l0c1Jlc3BvbnNlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvY2h1bmtzL2J1bGsnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IGZpbmFsQ2h1bmtzVG9Mb2FkIH0pXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9idWlsZGluZ3MvdmlzaWJsZScsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogZmluYWxDaHVua3NUb0xvYWQgfSlcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2RlcG9zaXRzL2J1bGsnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IGZpbmFsQ2h1bmtzVG9Mb2FkIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGlmICghcm9hZHNSZXNwb25zZS5vayB8fCAhYnVpbGRpbmdzUmVzcG9uc2Uub2sgfHwgIWRlcG9zaXRzUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQVBJIGVycm9yXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgcm9hZHNEYXRhICAgICA9IGF3YWl0IHJvYWRzUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGJ1aWxkaW5nc0RhdGEgPSBhd2FpdCBidWlsZGluZ3NSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgZGVwb3NpdHNEYXRhICA9IGF3YWl0IGRlcG9zaXRzUmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgZmluYWxDaHVua3NUb0xvYWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2h1bmtEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgcm9hZHM6ICAgICByb2Fkc0RhdGFbY2h1bmtJZF0/LnJvYWRzICAgICB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogYnVpbGRpbmdzRGF0YVtjaHVua0lkXT8uYnVpbGRpbmdzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVwb3NpdHM6ICBkZXBvc2l0c0RhdGFbY2h1bmtJZF0gfHwgW11cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhhc1JvYWRzID0gY2h1bmtEYXRhLnJvYWRzLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1czogaGFzUm9hZHMgPyAnbG9hZGVkJyA6ICdlbXB0eScsXHJcbiAgICAgICAgICAgICAgICAuLi5jaHVua0RhdGEsXHJcbiAgICAgICAgICAgICAgICBoYXNSb2Fkc1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcm9hZHNTdGF0ZS5sb2FkZWRDaHVua3MuYWRkKGNodW5rSWQpO1xyXG4gICAgICAgICAgICBzZXRDYWNoZWRDaHVuayhjaHVua0lkLCB7IC4uLmNodW5rRGF0YSwgaGFzUm9hZHMgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsIGhhc1JvYWRzID8gJ2JsdWUnIDogJyM0NDQnKTtcclxuICAgICAgICAgICAgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShjaHVua0RhdGEuZGVwb3NpdHMsIG1hcCk7XHJcblxyXG4gICAgICAgICAgICBkZWJ1Z0xvZyhcInJvYWRzXCIsIGBDaHVuayAke2NodW5rSWR9IGNoYXJnw6kgKCR7Y2h1bmtEYXRhLnJvYWRzLmxlbmd0aH0gcm91dGVzLCAke2NodW5rRGF0YS5kZXBvc2l0cy5sZW5ndGh9IGTDqXDDtHRzKWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoXCJyb2Fkc1wiLCBcIkVycmV1ciBjaGFyZ2VtZW50IGNodW5rcyBidWxrOlwiLCBlcnJvcik7XHJcbiAgICAgICAgZm9yIChjb25zdCBjaHVua0lkIG9mIGZpbmFsQ2h1bmtzVG9Mb2FkKSB7XHJcbiAgICAgICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0geyBzdGF0dXM6ICdlcnJvcicsIHJvYWRzOiBbXSwgYnVpbGRpbmdzOiBbXSwgZGVwb3NpdHM6IFtdIH07XHJcbiAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ3JlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoQ2h1bmtDb2xvcnModmlzaWJsZUNodW5rcyk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJFRlJFU0ggQ0hVTktcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hDaHVuayhjaHVua0lkKSB7XHJcbiAgICBpbnZhbGlkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcbiAgICBpbnZhbGlkYXRlQ2h1bmtDYWNoZShjaHVua0lkKTtcclxuXHJcbiAgICByb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5kZWxldGUoY2h1bmtJZCk7XHJcblxyXG4gICAgYXdhaXQgZmV0Y2hTaW5nbGVDaHVuayhjaHVua0lkKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRkVUQ0ggU0lOR0xFIENIVU5LXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoU2luZ2xlQ2h1bmsoY2h1bmtJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHsgc3RhdHVzOiAnbG9hZGluZycsIHJvYWRzOiBbXSwgYnVpbGRpbmdzOiBbXSwgZGVwb3NpdHM6IFtdIH07XHJcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnb3JhbmdlJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtyb2Fkc1JlcywgYnVpbGRpbmdzUmVzLCBkZXBvc2l0c1Jlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2NodW5rcy9idWxrJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2h1bmtzOiBbY2h1bmtJZF0gfSlcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2J1aWxkaW5ncy92aXNpYmxlJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2h1bmtzOiBbY2h1bmtJZF0gfSlcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2RlcG9zaXRzL2J1bGsnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IFtjaHVua0lkXSB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBpZiAoIXJvYWRzUmVzLm9rIHx8ICFidWlsZGluZ3NSZXMub2sgfHwgIWRlcG9zaXRzUmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJBUEkgZXJyb3JcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvYWRzRGF0YSAgICAgPSBhd2FpdCByb2Fkc1Jlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgYnVpbGRpbmdzRGF0YSA9IGF3YWl0IGJ1aWxkaW5nc1Jlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgZGVwb3NpdHNEYXRhICA9IGF3YWl0IGRlcG9zaXRzUmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2h1bmtEYXRhID0ge1xyXG4gICAgICAgICAgICByb2FkczogICAgIHJvYWRzRGF0YVtjaHVua0lkXT8ucm9hZHMgICAgIHx8IFtdLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IGJ1aWxkaW5nc0RhdGFbY2h1bmtJZF0/LmJ1aWxkaW5ncyB8fCBbXSxcclxuICAgICAgICAgICAgZGVwb3NpdHM6ICBkZXBvc2l0c0RhdGFbY2h1bmtJZF0gfHwgW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBoYXNSb2FkcyA9IGNodW5rRGF0YS5yb2Fkcy5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHsgc3RhdHVzOiBoYXNSb2FkcyA/ICdsb2FkZWQnIDogJ2VtcHR5JywgLi4uY2h1bmtEYXRhLCBoYXNSb2FkcyB9O1xyXG4gICAgICAgIHNldENhY2hlZENodW5rKGNodW5rSWQsIHsgLi4uY2h1bmtEYXRhLCBoYXNSb2FkcyB9KTtcclxuXHJcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCBoYXNSb2FkcyA/ICdibHVlJyA6ICcjNDQ0Jyk7XHJcbiAgICAgICAgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShjaHVua0RhdGEuZGVwb3NpdHMsIGdldE1hcCgpKTtcclxuXHJcbiAgICAgICAgZGVidWdMb2coXCJyb2Fkc1wiLCBcIltDSFVOSyBSRUZSRVNIXVwiLCBjaHVua0lkLCBjaHVua0RhdGEucm9hZHMubGVuZ3RoKTtcclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7IHN0YXR1czogJ2Vycm9yJywgcm9hZHM6IFtdLCBidWlsZGluZ3M6IFtdLCBkZXBvc2l0czogW10gfTtcclxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdyZWQnKTtcclxuICAgICAgICBkZWJ1Z0Vycm9yKFwicm9hZHNcIiwgXCJbQ0hVTksgUkVGUkVTSCBFUlJPUl1cIiwgY2h1bmtJZCwgZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJFRlJFU0ggQ0hVTksgQ09MT1JTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHJlZnJlc2hDaHVua0NvbG9ycyh2aXNpYmxlQ2h1bmtzKSB7XHJcbiAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgdmlzaWJsZUNodW5rcykge1xyXG4gICAgICAgIGNvbnN0IGNodW5rID0gcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF07XHJcbiAgICAgICAgaWYgKCFjaHVuaykgeyBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTsgY29udGludWU7IH1cclxuXHJcbiAgICAgICAgY29uc3QgY29sb3JzID0geyBsb2FkZWQ6ICdibHVlJywgZW1wdHk6ICcjNDQ0JywgbG9hZGluZzogJ29yYW5nZScsIGVycm9yOiAncmVkJyB9O1xyXG4gICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgY29sb3JzW2NodW5rLnN0YXR1c10gPz8gJ3llbGxvdycpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWSVNJQkxFIENIVU5LU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBnZXRWaXNpYmxlQ2h1bmtzKGJvdW5kcykge1xyXG4gICAgY29uc3QgbWluWCA9IE1hdGguZmxvb3IoYm91bmRzLmdldFNvdXRoKCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1heFggPSBNYXRoLmZsb29yKGJvdW5kcy5nZXROb3J0aCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtaW5ZID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0V2VzdCgpICAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWF4WSA9IE1hdGguZmxvb3IoYm91bmRzLmdldEVhc3QoKSAgLyBDSFVOS19TSVpFKTtcclxuXHJcbiAgICBjb25zdCBjaHVua3MgPSBbXTtcclxuICAgIGZvciAobGV0IHggPSBtaW5YOyB4IDw9IG1heFg7IHgrKykge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSBtaW5ZOyB5IDw9IG1heFk7IHkrKykge1xyXG4gICAgICAgICAgICBjaHVua3MucHVzaChgJHt4fV8ke3l9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNodW5rcztcclxufSIsImV4cG9ydCBjb25zdCByb2Fkc1N0YXRlID0ge1xyXG4gICAgY2h1bmtzOiB7fSxcclxuICAgIGxvYWRlZENodW5rczogbmV3IFNldCgpLFxyXG4gICAgcm9hZHNSZWFkeTogZmFsc2UsXHJcbiAgICBkcmF3blJvYWRzOiBbXSxcclxuICAgIHZpc2libGVDaHVua3M6IG5ldyBTZXQoKSxcclxuICAgIFxyXG4gICAgcm9hZExheWVyczoge30sXHJcblxyXG4gICAgYnVpbGRpbmdMYXllcnM6IHt9XHJcbn07XHJcblxyXG5sZXQgY2FjaGVkUm9hZHMgPSBbXTtcclxubGV0IGNhY2hlRGlydHkgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtSb2FkQ2FjaGVEaXJ0eSgpIHtcclxuICAgIGNhY2hlRGlydHkgPSB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsTG9hZGVkUm9hZHMoKSB7XHJcblxyXG4gICAgaWYgKCFyb2Fkc1N0YXRlPy5jaHVua3MpIHJldHVybiBbXTtcclxuXHJcbiAgICBpZiAoIWNhY2hlRGlydHkpIHJldHVybiBjYWNoZWRSb2FkcztcclxuXHJcbiAgICBjYWNoZWRSb2FkcyA9IE9iamVjdC52YWx1ZXMocm9hZHNTdGF0ZS5jaHVua3MpXHJcbiAgICAgICAgLmZpbHRlcihjID0+IGM/LnN0YXR1cyA9PT0gJ2xvYWRlZCcgJiYgQXJyYXkuaXNBcnJheShjLnJvYWRzKSlcclxuICAgICAgICAuZmxhdE1hcChjID0+IGMucm9hZHMpO1xyXG5cclxuICAgIGNhY2hlRGlydHkgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gY2FjaGVkUm9hZHM7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gaW5pdE5vdGlmaWNhdGlvbnMoKVxyXG57XHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YWZ0ZXJTd2FwJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1ldmVudF0nKTtcclxuICAgICAgICBldmVudHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IEpTT04ucGFyc2UoZWwuZGF0YXNldC5ldmVudCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnZ2FtZTpldmVudCcsIHsgZGV0YWlsOiBldmVudCB9KSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIHBhcnNpbmcgZXZlbnQ6JywgZXJyKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIGVsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSwgdHlwZSA9ICdpbmZvJykge1xyXG5cclxuICAgIGNvbnN0IG5vdGlmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBub3RpZi5jbGFzc05hbWUgPSBgbm90aWYgbm90aWYtJHt0eXBlfWA7XHJcbiAgICBub3RpZi50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub3RpZik7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbm90aWYucmVtb3ZlKCk7XHJcbiAgICB9LCAzMDAwKTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uIH0gZnJvbSAnLi4vYnVpbGRpbmdzL2Jhc2UuanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU1RBVEVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgYmFzZUNpcmNsZXMgPSBuZXcgTWFwKCk7IC8vIGJhc2VJZCAtPiBjaXJjbGUgbGF5ZXJcclxuY29uc3Qgcm9hZFNlZ21lbnRzID0gbmV3IE1hcCgpOyAvLyByb2FkSWQgLT4gcG9seWxpbmUgbGF5ZXJcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZBQ1RJT04gQ09MT1JTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IEZBQ1RJT05fQ09MT1JTID0ge1xyXG4gICAgJ2RlZmF1bHQnOiAnIzI3YWU2MCcsICAvLyB2ZXJ0IHBhciBkw6lmYXV0XHJcbiAgICAnZW1waXJlJzogJyNlNzRjM2MnLCAgIC8vIHJvdWdlXHJcbiAgICAnY2VuZHJlcyc6ICcjMzQ5OGRiJywgICAgLy8gYmxldVxyXG4gICAgJ25vbWFkZXMnOiAnI2YzOWMxMicsICAvLyBvcmFuZ2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldEZhY3Rpb25Db2xvcihmYWN0aW9uKSB7XHJcbiAgICByZXR1cm4gRkFDVElPTl9DT0xPUlNbZmFjdGlvbj8udG9Mb3dlckNhc2UoKV0gfHwgRkFDVElPTl9DT0xPUlNbJ2RlZmF1bHQnXTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQkFTRSBDSVJDTEVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdCYXNlQ2lyY2xlKGJhc2VJZCwgbGF0LCBsbmcsIGZhY3Rpb24sIGlzUGxheWVyQmFzZSA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcGxheWVyRmFjdGlvbiA9IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XHJcbiAgICBjb25zdCBjb2xvciA9IGlzUGxheWVyQmFzZVxyXG4gICAgICAgID8gJyMyN2FlNjAnICAvLyB2ZXJ0IHBvdXIgbm90cmUgYmFzZVxyXG4gICAgICAgIDogZ2V0RmFjdGlvbkNvbG9yKGZhY3Rpb24pO1xyXG5cclxuICAgIC8vIFN1cHByaW1lciBsJ2FuY2llbiBjZXJjbGUgc2kgZXhpc3RlXHJcbiAgICBpZiAoYmFzZUNpcmNsZXMuaGFzKGJhc2VJZCkpIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIoYmFzZUNpcmNsZXMuZ2V0KGJhc2VJZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNpcmNsZSA9IEwuY2lyY2xlKFtsYXQsIGxuZ10sIHtcclxuICAgICAgICByYWRpdXM6IDUwMCxcclxuICAgICAgICBjb2xvcjogY29sb3IsXHJcbiAgICAgICAgd2VpZ2h0OiAyLFxyXG4gICAgICAgIGZpbGxPcGFjaXR5OiAwXHJcbiAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgIGJhc2VDaXJjbGVzLnNldChiYXNlSWQsIGNpcmNsZSk7XHJcbiAgICByZXR1cm4gY2lyY2xlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQmFzZUNpcmNsZShiYXNlSWQpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBpZiAoYmFzZUNpcmNsZXMuaGFzKGJhc2VJZCkpIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIoYmFzZUNpcmNsZXMuZ2V0KGJhc2VJZCkpO1xyXG4gICAgICAgIGJhc2VDaXJjbGVzLmRlbGV0ZShiYXNlSWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJBbGxCYXNlQ2lyY2xlcygpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBiYXNlQ2lyY2xlcy5mb3JFYWNoKGNpcmNsZSA9PiBtYXAucmVtb3ZlTGF5ZXIoY2lyY2xlKSk7XHJcbiAgICBiYXNlQ2lyY2xlcy5jbGVhcigpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBST0FEIFNFR01FTlRTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3Um9hZFNlZ21lbnQocm9hZElkLCBjb29yZHMsIGZhY3Rpb24pIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXAgfHwgIWNvb3JkcyB8fCBjb29yZHMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckZhY3Rpb24gPSBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xyXG4gICAgY29uc3QgY29sb3IgPSBmYWN0aW9uID09PSBwbGF5ZXJGYWN0aW9uXHJcbiAgICAgICAgPyAnIzI3YWU2MCcgIC8vIHZlcnQgcG91ciBub3Mgcm91dGVzXHJcbiAgICAgICAgOiBnZXRGYWN0aW9uQ29sb3IoZmFjdGlvbik7XHJcblxyXG4gICAgLy8gU3VwcHJpbWVyIGwnYW5jaWVuIHNlZ21lbnQgc2kgZXhpc3RlXHJcbiAgICBpZiAocm9hZFNlZ21lbnRzLmhhcyhyb2FkSWQpKSB7XHJcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKHJvYWRTZWdtZW50cy5nZXQocm9hZElkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9seWxpbmUgPSBMLnBvbHlsaW5lKGNvb3Jkcywge1xyXG4gICAgICAgIGNvbG9yOiBjb2xvcixcclxuICAgICAgICB3ZWlnaHQ6IDMsXHJcbiAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgIGRhc2hBcnJheTogJzgsOCdcclxuICAgIH0pLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgcm9hZFNlZ21lbnRzLnNldChyb2FkSWQsIHBvbHlsaW5lKTtcclxuICAgIHJldHVybiBwb2x5bGluZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJvYWRTZWdtZW50KHJvYWRJZCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChyb2FkU2VnbWVudHMuaGFzKHJvYWRJZCkpIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIocm9hZFNlZ21lbnRzLmdldChyb2FkSWQpKTtcclxuICAgICAgICByb2FkU2VnbWVudHMuZGVsZXRlKHJvYWRJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFsbFJvYWRTZWdtZW50cygpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICByb2FkU2VnbWVudHMuZm9yRWFjaChwb2x5bGluZSA9PiBtYXAucmVtb3ZlTGF5ZXIocG9seWxpbmUpKTtcclxuICAgIHJvYWRTZWdtZW50cy5jbGVhcigpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVUERBVEUgRlVOQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVCYXNlQ2lyY2xlcyhiYXNlcykge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckZhY3Rpb24gPSBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xyXG5cclxuICAgIGJhc2VzLmZvckVhY2goYmFzZSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNQbGF5ZXJCYXNlID0gYmFzZS5mYWN0aW9uID09PSBwbGF5ZXJGYWN0aW9uO1xyXG4gICAgICAgIGRyYXdCYXNlQ2lyY2xlKGJhc2UuaWQsIGJhc2UubGF0LCBiYXNlLmxuZywgYmFzZS5mYWN0aW9uLCBpc1BsYXllckJhc2UpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSb2FkU2VnbWVudHMocm9hZHMpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJGYWN0aW9uID0gZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKTtcclxuXHJcbiAgICByb2Fkcy5mb3JFYWNoKHJvYWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzUGxheWVyUm9hZCA9IHJvYWQuZmFjdGlvbiA9PT0gcGxheWVyRmFjdGlvbjtcclxuICAgICAgICBkcmF3Um9hZFNlZ21lbnQocm9hZC5pZCwgcm9hZC5jb29yZHMsIHJvYWQuZmFjdGlvbik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVVRJTElUWVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Um9hZFNlZ21lbnRDb2xvcihyb2FkSWQsIGNvbG9yKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHJvYWRTZWdtZW50cy5oYXMocm9hZElkKSkge1xyXG4gICAgICAgIHJvYWRTZWdtZW50cy5nZXQocm9hZElkKS5zZXRTdHlsZSh7IGNvbG9yIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4uL25vdGlmaWNhdGlvbnMuanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUEFUSEZJTkRJTkcgREVCVUcgLSBDTElDSyBUTyBHRVQgQ09PUkRJTkFURVNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkbWluQ29vcmRzKGxhdCwgbG5nKSB7XHJcbiAgICBpZiAobGF0ID09PSB1bmRlZmluZWQgfHwgbG5nID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBmb3JtYXQgPSBgJHtsYXQudG9GaXhlZCg2KX0sJHtsbmcudG9GaXhlZCg2KX1gO1xyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZm9ybWF0KTtcclxuICAgIHNob3dOb3RpZmljYXRpb24oXCJGb3JtYXQgY29sbGFibGUgYWRtaW4gY29wacOpIDogXCIgKyBmb3JtYXQsICdzdWNjZXNzJyk7XHJcbn0iLCJpbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcclxuaW1wb3J0IHsgcmVmcmVzaENodW5rIH0gZnJvbSAnLi4vbWFwL3JvYWRzL3JvYWRzLmpzJztcclxuaW1wb3J0IHsgaW52YWxpZGF0ZUNodW5rIH0gZnJvbSAnLi4vbWFwL3JvYWRzL2ludmFsaWRhdGVDaHVuay5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5pbXBvcnQgeyBzbmFwVG9DaHVuayB9IGZyb20gJy4vc25hcC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hVTktfU0laRSA9IDAuMDE7XHJcbmV4cG9ydCBjb25zdCBDSFVOS19SQURJVVMgPSAxO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcXVlc3RBcGlSb2Fkc0FuZENodW5rc0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnY3Jvc3NoYWlyJztcclxuICAgIGFsZXJ0KFwiQ2xpcXVlIHN1ciBsYSBjYXJ0ZSBwb3VyIGZhaXJlIHVuZSByZXF1ZXRlIGFwaSBwb3VyIGFqb3V0ZXIgdW4gY2h1bmsgZGUgcm91dGVzICgwLjAxwrAgeCAwLjAxwrApLlwiKTtcclxuXHJcbiAgICBtYXAub25jZSgnY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB7IGxhdCwgbG5nIH0gPSBlLmxhdGxuZztcclxuXHJcbiAgICAgICAgY29uc3Qgc25hcHBlZCA9IHNuYXBUb0NodW5rKGxhdCwgbG5nKTtcclxuXHJcbiAgICAgICAgZGVidWdMb2coXCJuZXR3b3JrXCIsIFwi8J+ToSBhZGRpbmcgcm9hZHMgY2h1bms6XCIsIHNuYXBwZWQuY2h1bmtJZCk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKCcvYXBpL2FkZC1yb2Fkcy1jaHVuaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBzbmFwcGVkLmxhdCxcclxuICAgICAgICAgICAgICAgICAgICBsbmc6IHNuYXBwZWQubG5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNodW5rSWQ6IHNuYXBwZWQuY2h1bmtJZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZWZyZXNoQ2h1bmsoc25hcHBlZC5jaHVua0lkKTtcclxuXHJcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwic25hcCByZXN1bHQ6XCIsIHNuYXBwZWQpO1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZyhcImNodW5rc1wiLCBcInJhdzpcIiwgeyBsYXQsIGxuZywgeDogbGF0LzAuMDEsIHk6IGxuZy8wLjAxIH0pO1xyXG5cclxuICAgICAgICAgICAgZGVidWdMb2coXCJjaHVua3NcIiwgXCLwn5SEIGNodW5rIHJlZnJlc2hlZDpcIiwgc25hcHBlZC5jaHVua0lkKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoXCJuZXR3b3JrXCIsIFwiZmFpbGVkIHRvIGFkZCByb2FkcyBjaHVua1wiLCBlcnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG4gICAgfSk7XHJcbn0pOyIsImltcG9ydCB7IGZseVRvIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdQUyhkZWZhdWx0TGF0LCBkZWZhdWx0TG5nKSB7XHJcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICAgICAgbGV0IGdwc0ZvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxyXG4gICAgICAgICAgICAocG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGdwc0ZvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmbHlUbyhcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge30sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDUwMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWdwc0ZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBmbHlUbyhkZWZhdWx0TGF0LCBkZWZhdWx0TG5nLCA3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDU1MDApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4vY2h1bmsuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNuYXBUb0NodW5rKGxhdCwgbG5nKSB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJvdW5kKGxhdCAqIDEwMCkgLyAxKTtcclxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucm91bmQobG5nICogMTAwKSAvIDEpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGF0OiBOdW1iZXIoKHggKiBDSFVOS19TSVpFKS50b0ZpeGVkKDgpKSxcclxuICAgICAgICBsbmc6IE51bWJlcigoeSAqIENIVU5LX1NJWkUpLnRvRml4ZWQoOCkpLFxyXG4gICAgICAgIGNodW5rSWQ6IGAke3h9XyR7eX1gXHJcbiAgICB9O1xyXG59IiwibGV0IHRpbWVySW50ZXJ2YWwgPSBudWxsO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCdWlsZGluZ1RpbWVycygpIHtcclxuXHJcbiAgICBpZiAodGltZXJJbnRlcnZhbCkgcmV0dXJuOyAvLyDDqXZpdGUgZG91YmxvbnNcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVUaW1lcnMoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGl2ZXJ5LXRpbWVyLXdyYXBwZXInKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2NoZWR1bGVkQXQgPSBlbC5kYXRhc2V0LnNjaGVkdWxlZEF0O1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lckVsID0gZWwucXVlcnlTZWxlY3RvcignLmRlbGl2ZXJ5LXRpbWVyJyk7XHJcbiAgICAgICAgICAgIGlmICghdGltZXJFbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFzY2hlZHVsZWRBdCkge1xyXG4gICAgICAgICAgICAgICAgdGltZXJFbC50ZXh0Q29udGVudCA9ICdBdWN1bmUgbGl2cmFpc29uIHByw6l2dWUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25zdCBzY2hlZHVsZWQgPSBuZXcgRGF0ZShzY2hlZHVsZWRBdCkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzTmFOKHNjaGVkdWxlZCkpIHtcclxuICAgICAgICAgICAgICAgIHRpbWVyRWwudGV4dENvbnRlbnQgPSAnRGF0ZSBpbnZhbGlkZSc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmZTZWMgPSBNYXRoLmZsb29yKChzY2hlZHVsZWQgLSBub3cpIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlmZlNlYyA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnMgPSBNYXRoLmZsb29yKGRpZmZTZWMgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNzID0gZGlmZlNlYyAlIDYwO1xyXG4gICAgICAgICAgICAgICAgdGltZXJFbC5pbm5lckhUTUwgPSBgUHJvY2hhaW4gZMOpcGFydCBkYW5zIDogPHN0cm9uZz4ke21pbnN9bWluICR7c2Vjc31zPC9zdHJvbmc+YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBNYXRoLmFicyhkaWZmU2VjKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnMgPSBNYXRoLmZsb29yKGVsYXBzZWQgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNzID0gZWxhcHNlZCAlIDYwO1xyXG4gICAgICAgICAgICAgICAgdGltZXJFbC5pbm5lckhUTUwgPSBgQ29udm9pIGVuIHJvdXRlIGRlcHVpcyA6IDxzdHJvbmc+JHttaW5zfW1pbiAke3NlY3N9czwvc3Ryb25nPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUaW1lcnMoKTtcclxuICAgIHRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lcnMsIDEwMDApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShpc29TdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShpc29TdHJpbmcpLnRvTG9jYWxlU3RyaW5nKCdmci1GUicsIHtcclxuICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9QYXJpcycsXHJcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICdsZWFmbGV0JztcclxuaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnO1xyXG5cclxuZGVsZXRlIEwuSWNvbi5EZWZhdWx0LnByb3RvdHlwZS5fZ2V0SWNvblVybDtcclxuTC5JY29uLkRlZmF1bHQubWVyZ2VPcHRpb25zKHtcclxuICAgIGljb25SZXRpbmFVcmw6IHJlcXVpcmUoJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24tMngucG5nJyksXHJcbiAgICBpY29uVXJsOiByZXF1aXJlKCdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1pY29uLnBuZycpLFxyXG4gICAgc2hhZG93VXJsOiByZXF1aXJlKCdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1zaGFkb3cucG5nJyksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTDsiLCJpbXBvcnQgeyBUWVBFX01BUCB9IGZyb20gJy4vdHlwZU1hcC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgREVCVUcgPSB7XHJcbiAgICBlbmFibGVkOiB3aW5kb3cuQVBQX0RFQlVHID8/IGZhbHNlLFxyXG5cclxuICAgIG1lcmN1cmU6IHRydWUsXHJcbiAgICBpbnZlbnRvcnk6IHRydWUsXHJcbiAgICBkZWxpdmVyeTogdHJ1ZSxcclxuICAgIGJ1aWxkaW5nczogdHJ1ZSxcclxuXHJcbiAgICBjaHVua3M6IHRydWUsXHJcbiAgICBuZXR3b3JrOiB0cnVlLFxyXG4gICAgY2FjaGU6IHRydWUsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjYW5Mb2codHlwZSkge1xyXG4gICAgaWYgKCFERUJVRy5lbmFibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleSA9IFRZUEVfTUFQPy5bdHlwZV0gfHwgdHlwZTtcclxuXHJcbiAgICByZXR1cm4gREVCVUdba2V5XSAhPT0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z0xvZyh0eXBlLCAuLi5hcmdzKSB7XHJcbiAgICBpZiAoIWNhbkxvZyh0eXBlKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgWyR7VFlQRV9NQVA/Llt0eXBlXSB8fCB0eXBlfV1gLFxyXG4gICAgICAgIC4uLmFyZ3NcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z1dhcm4odHlwZSwgLi4uYXJncykge1xyXG4gICAgaWYgKCFjYW5Mb2codHlwZSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGBbJHtUWVBFX01BUD8uW3R5cGVdIHx8IHR5cGV9XWAsXHJcbiAgICAgICAgLi4uYXJnc1xyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnRXJyb3IodHlwZSwgLi4uYXJncykge1xyXG4gICAgaWYgKCFjYW5Mb2codHlwZSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICBgWyR7VFlQRV9NQVA/Llt0eXBlXSB8fCB0eXBlfV1gLFxyXG4gICAgICAgIC4uLmFyZ3NcclxuICAgICk7XHJcbn0iLCJleHBvcnQgY29uc3QgVFlQRV9NQVAgPSB7XHJcbiAgICBtZXJjdXJlOiAnTUVSQ1VSRScsXHJcbiAgICBpbnZlbnRvcnk6ICdJTlZFTlRPUlknLFxyXG4gICAgZGVsaXZlcnk6ICdERUxJVkVSWScsXHJcbiAgICBidWlsZGluZ3M6ICdCVUlMRElOR1MnLFxyXG4gICAgY2h1bmtzOiAnQ0hVTktTJyxcclxuICAgIG5ldHdvcms6ICdORVRXT1JLJyxcclxuICAgIGNhY2hlOiAnQ0FDSEUnLFxyXG59OyJdLCJuYW1lcyI6WyJMIiwiZGVidWdMb2ciLCJDSFVOS19TSVpFIiwiZ2V0TWFwIiwiaXNHcmlkTGF5ZXJBY3RpdmUiLCJncmlkTGF5ZXIiLCJsYXllckdyb3VwIiwidmlzaWJsZUNodW5rcyIsIk1hcCIsImluaXRHcmlkTGF5ZXIiLCJtYXAiLCJ6b29tIiwiZ2V0Wm9vbSIsImJvdW5kcyIsImdldEJvdW5kcyIsIm1pbkxhdCIsIk1hdGgiLCJmbG9vciIsImdldFNvdXRoIiwibWF4TGF0IiwiY2VpbCIsImdldE5vcnRoIiwibWluTG5nIiwiZ2V0V2VzdCIsIm1heExuZyIsImdldEVhc3QiLCJuZXdWaXNpYmxlIiwiU2V0IiwiaSIsIl9sb29wIiwiaWQiLCJjb25jYXQiLCJqIiwiYWRkIiwiaGFzIiwibGF0IiwibG5nIiwicmVjdCIsInJlY3RhbmdsZSIsImNvbG9yIiwid2VpZ2h0IiwiZmlsbE9wYWNpdHkiLCJvbiIsInNldFN0eWxlIiwiYWRkTGF5ZXIiLCJzZXQiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsImVudHJpZXMiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIl9zdGVwJHZhbHVlIiwiX3NsaWNlZFRvQXJyYXkiLCJ2YWx1ZSIsInJlbW92ZUxheWVyIiwiZXJyIiwiZSIsImYiLCJzaXplIiwic2V0Q2h1bmtDb2xvciIsImdldCIsImJ1aWxkUmVxdWVzdCIsInR5cGVJZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZV9pZCIsImdldEJ1aWxkaW5ncyIsInRoZW4iLCJyZXMiLCJqc29uIiwiZ2V0QnVpbGRpbmdDb3N0cyIsImJ1aWxkaW5nVHlwZUlkIiwidXBncmFkZUJ1aWxkaW5nIiwiYnVpbGRpbmdJZCIsImdldFVwZ3JhZGVJbmZvIiwiZmx5VG8iLCJyb2Fkc1N0YXRlIiwiZ2V0QWxsTG9hZGVkUm9hZHMiLCJnZXRCdWlsZGluZ0ltYWdlIiwic2FmZUxvYWRDaHVuayIsImxvYWRWaXNpYmxlUm9hZENodW5rcyIsImZpbmRDbG9zZXN0UG9pbnRPblJvYWQiLCJmaW5kQ2xvc2VzdFNlZ21lbnQiLCJzaG93Tm90aWZpY2F0aW9uIiwiZ2V0QWRtaW5Db29yZHMiLCJkZWJ1Z1dhcm4iLCJkZWJ1Z0Vycm9yIiwiZHJhd0Jhc2VDaXJjbGUiLCJyZW1vdmVCYXNlQ2lyY2xlIiwicmVmcmVzaFNpZGViYXIiLCJiYXNlTWFya2VyIiwiYmFzZUNpcmNsZSIsImJhc2VQb3NpdGlvbiIsImJhc2VDcmVhdGVkIiwicGxhY2luZ0Jhc2UiLCJwcmV2aWV3TWFya2VyIiwicHJldmlld0NpcmNsZSIsInByZXZpZXdTbmFwTGF0TG5nIiwicHJldmlld0xpbmUiLCJoaWdobGlnaHRlZFNlZ21lbnQiLCJjdXJyZW50UGxheWVyRmFjdGlvbiIsInNldEN1cnJlbnRQbGF5ZXJGYWN0aW9uIiwiZmFjdGlvbiIsInRvTG93ZXJDYXNlIiwiZ2V0Q3VycmVudFBsYXllckZhY3Rpb24iLCJpbml0QmFzZVVJIiwiYmFzZUJ0biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwibW9kZSIsImRhdGFzZXQiLCJhbGVydCIsImdldENvbnRhaW5lciIsInN0eWxlIiwiY3Vyc29yIiwiX3ByZXZpZXdTbmFwTGF0TG5nIiwiaXNCYXNlUGxhY2VtZW50VmFsaWQiLCJjbGVhbnVwUHJldmlldyIsImNyZWF0ZUJhc2UiLCJyb2FkcyIsImxlbmd0aCIsInJlc3VsdCIsImxhdGxuZyIsInBvaW50IiwiaXNWYWxpZCIsImNpcmNsZSIsInJhZGl1cyIsImFkZFRvIiwibWFya2VyIiwicG9seWxpbmUiLCJvcGFjaXR5IiwiZGFzaEFycmF5Iiwic2VnbWVudCIsInVwZGF0ZUJhc2VEaXNwbGF5IiwidXBkYXRlT3RoZXJCYXNlcyIsImVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlciIsIndpbmRvdyIsIm90aGVyQmFzZXMiLCJldmVyeSIsImJhc2UiLCJkaXN0IiwiZGlzdGFuY2UiLCJiYXNlVHlwZUlkIiwib2siLCJFcnJvciIsImVycm9yIiwiX3JlZiIsInJlbW92ZUJhc2UiLCJtZXNzYWdlIiwibG9hZE90aGVyQmFzZSIsInBzZXVkbyIsIk51bWJlciIsImlzRmluaXRlIiwiaXNQbGF5ZXJCYXNlIiwiaWNvbiIsImNyZWF0ZUJhc2VJY29uIiwiYmluZFBvcHVwIiwicHVzaCIsImZvckVhY2giLCJoYXNMYXllciIsInNldEljb24iLCJsb2FkQmFzZUZyb21TZXJ2ZXIiLCJpY29uVXJsIiwiaWNvblNpemUiLCJpY29uQW5jaG9yIiwicG9wdXBBbmNob3IiLCJ0IiwiciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJzZWxlY3RlZEJ1aWxkaW5nVHlwZSIsInByZXZpZXdCdWlsZGluZ01hcmtlciIsImluaXRCdWlsZE1vZGUiLCJfY2FsbGVlIiwiYnRuIiwiX2NvbnRleHQiLCJ0YXJnZXQiLCJjbG9zZXN0Iiwic2VsZWN0QnVpbGRpbmdUeXBlIiwiX3giLCJvbk1hcENsaWNrIiwib25NYXBNb3VzZU1vdmUiLCJfeDIiLCJfeDMiLCJfc2VsZWN0QnVpbGRpbmdUeXBlIiwiX2NhbGxlZTIiLCJidXR0b24iLCJkYXRhIiwiX3QiLCJfY29udGV4dDIiLCJjbGVhckJ1aWxkaW5nU2VsZWN0aW9uIiwiY2xhc3NMaXN0IiwibmFtZSIsImNvc3RzIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZSIsIl94NCIsIl9vbk1hcENsaWNrIiwiX2NhbGxlZTMiLCJyZXNwb25zZSIsIl90MiIsIl9jb250ZXh0MyIsInNldExhdExuZyIsImFjdGl2YXRlQnVpbGRNb2RlIiwicXVlcnlTZWxlY3RvciIsImNsaWNrIiwiZGVhY3RpdmF0ZUJ1aWxkTW9kZSIsImlzQnVpbGRNb2RlQWN0aXZlIiwiX3JlZnJlc2hTaWRlYmFyIiwiX2NhbGxlZTQiLCJodG1sIiwicGFyc2VyIiwiZG9jIiwibmV3U2lkZWJhciIsIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsIl90MyIsIl9jb250ZXh0NCIsInRleHQiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJyZXBsYWNlV2l0aCIsImJ1aWxkaW5nTWFya2VycyIsInBvcHVwQ29udGVudExvYWRlZCIsImxvYWRCdWlsZGluZ3NGcm9tRGF0YSIsImJ1aWxkaW5ncyIsIkFycmF5IiwiaXNBcnJheSIsImIiLCJfYiR0eXBlIiwiY29kZSIsInR5cGUiLCJidWlsZGluZ0ZhY3Rpb24iLCJjcmVhdGVCdWlsZGluZ0ljb24iLCJidWlsZGluZ0RhdGEiLCJsZXZlbCIsIm93bmVySWQiLCJpc01pbmUiLCJCb29sZWFuIiwicHJvZHVjdGlvbiIsInJlc291cmNlX3R5cGUiLCJjcmVhdGVTaW1wbGVQb3B1cCIsImhhbmRsZVBvcHVwT3BlbiIsImlzT3duQnVpbGRpbmciLCJzZXRQb3B1cENvbnRlbnQiLCJsb2FkVXBncmFkZUluZm9Bc3luYyIsImJ1aWxkaW5nIiwiX2xvYWRVcGdyYWRlSW5mb0FzeW5jIiwic3RhdHVzIiwibG9hZEJ1aWxkaW5ncyIsImJ1aWxkaW5nQ29kZSIsInVuZGVmaW5lZCIsImFjdHVhbEZhY3Rpb24iLCJidWlsZGluZ1NsdWciLCJyZXBsYWNlIiwiZmFjdGlvblNsdWciLCJlbnRyeSIsIm5ld0xldmVsIiwiZ2V0QnVpbGRpbmdUeXBlQ29zdHMiLCJfeDUiLCJfZ2V0QnVpbGRpbmdUeXBlQ29zdHMiLCJjYW5CdWlsZEJ1aWxkaW5nIiwiX3g2IiwiX2NhbkJ1aWxkQnVpbGRpbmciLCJyZXNvdXJjZXMiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsInJlc291cmNlIiwiYW1vdW50IiwicXVhbnRpdHkiLCJyZWZyZXNoQnVpbGRpbmdQb3B1cCIsIl94NyIsIl9yZWZyZXNoQnVpbGRpbmdQb3B1cCIsIl9jYWxsZWU1IiwiX2NvbnRleHQ1IiwiaXNQb3B1cE9wZW4iLCJkcmF3Um9hZFNlZ21lbnQiLCJmb3JtYXREYXRlIiwiYWN0aXZlRGVsaXZlcmllcyIsImRlbGl2ZXJ5TGF5ZXIiLCJhbmltYXRpb25GcmFtZSIsInBlbmRpbmdFdmVudHMiLCJ0cnVja0ljb24iLCJkaXZJY29uIiwiY2xhc3NOYW1lIiwiaW5pdERlbGl2ZXJ5RXZlbnRzIiwiaW5pdERlbGl2ZXJ5TGF5ZXJzIiwibG9hZERlbGl2ZXJpZXMiLCJfZGF0YSRmYWN0aW9uIiwiZGV0YWlsIiwiaGFuZGxlRGVsaXZlcnlFdmVudCIsImRlbGl2ZXJ5SWQiLCJwcm9ncmVzcyIsIndheXBvaW50cyIsInJlc291cmNlQ29kZSIsInJlc291cmNlTGFiZWwiLCJlc3RpbWF0ZWRUaW1lIiwiZHVyYXRpb24iLCJzY2hlZHVsZWRBdCIsIl9tYXAiLCJzdGFydEFuaW1hdGlvbiIsInByb2Nlc3NEZWxpdmVyeUV2ZW50IiwiX2xvYWREZWxpdmVyaWVzIiwiZGVsaXZlcmllcyIsImRlbGl2ZXJ5RGF0YSIsInJlbW92ZURlbGl2ZXJ5IiwidXBzZXJ0RGVsaXZlcnkiLCJrZXkiLCJjb25zb2xlIiwid2FybiIsInBhcnNlIiwiX3VudXNlZCIsImxhdGxuZ3MiLCJ3cCIsIl9kYXRhJHByb2dyZXNzIiwiX2RhdGEkc2NoZWR1bGVkQXQiLCJfZGF0YSRwcm9ncmVzczIiLCJkZWxpdmVyeSIsImxhc3RTZXJ2ZXJQcm9ncmVzcyIsImxhc3RTZXJ2ZXJUaW1lIiwiRGF0ZSIsIm5vdyIsIl9kYXRhJHF1YW50aXR5IiwiX2RhdGEkcmVzb3VyY2VMYWJlbCIsIl9kYXRhJHByb2dyZXNzMyIsIl9kYXRhJHByb2dyZXNzNCIsIl9kYXRhJGVzdGltYXRlZFRpbWUiLCJfZGF0YSRzY2hlZHVsZWRBdDIiLCJfZGF0YSRwcm9ncmVzczUiLCJzY2hlZHVsZWRUaW1lIiwiYW5pbWF0ZSIsImludGVycG9sYXRlZFByb2dyZXNzIiwic3RhcnRUaW1lIiwiZ2V0VGltZSIsImVsYXBzZWQiLCJtaW4iLCJtYXgiLCJlbGFwc2VkU2luY2VTZXJ2ZXIiLCJwcm9ncmVzc1BlclNlY29uZCIsInBvcyIsImludGVycG9sYXRlQWxvbmdSb3V0ZSIsImVsIiwidGV4dENvbnRlbnQiLCJyb3VuZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRvdGFsRGlzdCIsInNlZ21lbnRzIiwiaGF2ZXJzaW5lIiwiUiIsImRMYXQiLCJQSSIsImRMbmciLCJ4IiwicG93Iiwic2luIiwiY29zIiwiYXRhbjIiLCJzcXJ0IiwiaW5pdE1hcCIsImxvYWRXb3JsZCIsImluaXRHUFMiLCJpbml0Tm90aWZpY2F0aW9ucyIsImluaXRCdWlsZGluZ1RpbWVycyIsImluaXRJbnZlbnRvcnlFdmVudHMiLCJlbmFibGVMZWFmbGV0RGVidWciLCJjdXJyZW50VXNlciIsImRlYnVnIiwib3JpZ2luYWxNYXJrZXIiLCJvcmlnaW5hbENpcmNsZSIsIm9yaWdpbmFsUG9seWxpbmUiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJfbGVuMiIsIl9rZXkyIiwiX2xlbjMiLCJfa2V5MyIsImhhbmRsZUludmVudG9yeVVwZGF0ZSIsIl9kYXRhJHJlc291cmNlcyIsInVwZGF0ZU5hdmJhclJlc291cmNlcyIsInBvcHVwIiwicGFyc2VJbnQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJpdGVtIiwicXR5RWxlbWVudCIsImNoZWNrVXBncmFkZVJlcXVpcmVtZW50cyIsInJlcXVpcmVkRWxlbWVudCIsInJlcXVpcmVkIiwiZ2V0QXR0cmlidXRlIiwidG9nZ2xlIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwiZnJvbSIsInRlc3QiLCJuZXh0IiwiX3R5cGVvZiIsImRlcG9zaXRNYXJrZXJzIiwiYnVpbGRpbmdUeXBlc0NhY2hlIiwicmVzb3VyY2VUeXBlc0NhY2hlIiwibG9hZEJ1aWxkaW5nVHlwZXMiLCJfbG9hZEJ1aWxkaW5nVHlwZXMiLCJsb2FkUmVzb3VyY2VUeXBlcyIsIl9sb2FkUmVzb3VyY2VUeXBlcyIsIl90NCIsIkRFRkFVTFRfQ09MT1JTIiwiZ2V0UmVzb3VyY2VDb2xvciIsIl9yZXNvdXJjZVR5cGVzQ2FjaGUkdCIsIl9yZXNvdXJjZVR5cGVzQ2FjaGUkdDIiLCJmaW5kQnVpbGRpbmdUeXBlRm9yUmVzb3VyY2UiLCJfZmluZEJ1aWxkaW5nVHlwZUZvclJlc291cmNlIiwicmVzb3VyY2VUeXBlIiwiYnVpbGRpbmdUeXBlcyIsImJ1aWxkaW5nVHlwZSIsImZpbmQiLCJidCIsIl9idCRyZXNvdXJjZVR5cGUiLCJwcm9kdWN0aW9uX3JhdGUiLCJkZXBvc2l0TGF5ZXJzIiwiaW5pdERlcG9zaXRMYXllcnMiLCJfaW5pdERlcG9zaXRMYXllcnMiLCJjb250cm9sIiwicmVzb3VyY2VUeXBlcyIsInJ0IiwiYWRkT3ZlcmxheSIsImxhYmVsIiwibG9hZERlcG9zaXRzRm9yQ2h1bmsiLCJfbG9hZERlcG9zaXRzRm9yQ2h1bmsiLCJfY2FsbGVlNiIsImNodW5rSWQiLCJkZXBvc2l0cyIsIl90NSIsIl9jb250ZXh0NiIsInJlbmRlckRlcG9zaXRzRnJvbURhdGEiLCJmb3JtYXRDb3N0cyIsImpvaW4iLCJfcmVmMiIsImNoZWNrQ2FuQ2xhaW0iLCJfY2hlY2tDYW5DbGFpbSIsIl9jYWxsZWU3IiwiZGVwb3NpdCIsIl9yZXQiLCJfY29udGV4dDgiLCJrZXlzIiwiX3BsYXllclJlc291cmNlcyRyZXNvIiwicGxheWVyUmVzb3VyY2VzIiwiX2NvbnRleHQ3IiwiX3JlZ2VuZXJhdG9yVmFsdWVzIiwibG9hZERlcG9zaXRJbmZvQXN5bmMiLCJfeDgiLCJfeDkiLCJfbG9hZERlcG9zaXRJbmZvQXN5bmMiLCJfY2FsbGVlOCIsImRlcG9zaXRzSUQiLCJkZXBvc2l0RGF0YSIsIl90NiIsIl9jb250ZXh0OSIsImxheWVyIiwiY2lyY2xlTWFya2VyIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJmaWxsQ29sb3IiLCJjbGFpbURlcG9zaXQiLCJfcmVmMyIsInJlc3BvbnNlVGV4dCIsImRlcG9zaXRfaWQiLCJsb2NhdGlvbiIsInJlbG9hZCIsIl94MCIsIl94MSIsImZvZ0xheWVyIiwidmlzaW9uU291cmNlcyIsImZvZ01vZGUiLCJtYXBJbnN0YW5jZSIsIkZvZ09mV2FyIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImN0eCIsImluaXRDYW52YXMiLCJyZXNpemUiLCJiaW5kRXZlbnRzIiwiX2NyZWF0ZUNsYXNzIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwicG9pbnRlckV2ZW50cyIsInpJbmRleCIsIndpZHRoIiwiaGVpZ2h0IiwiY29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJnZXRDb250ZXh0IiwiX3RoaXMiLCJyZW5kZXIiLCJnZXRTaXplIiwidXBkYXRlU291cmNlcyIsInNvdXJjZXMiLCJjbGVhclJlY3QiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInNvdXJjZSIsImNlbnRlciIsImxhdExuZyIsImxhdExuZ1RvQ29udGFpbmVyUG9pbnQiLCJlZGdlIiwicmFkaXVzUHgiLCJkaXN0YW5jZVRvIiwiZ3JhZGllbnQiLCJjcmVhdGVSYWRpYWxHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsImJlZ2luUGF0aCIsImFyYyIsImZpbGwiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImZvZ0luc3RhbmNlIiwiaW5pdEZvZ09mV2FyIiwiZGlzcGxheSIsImlzUG9pbnRWaXNpYmxlIiwiX2ZvZ0luc3RhbmNlIiwic29tZSIsImR4IiwiZHkiLCJzZXRDdXJyZW50UGxheWVySWQiLCJtYXJrZXJJY29uIiwibWFya2VyU2hhZG93IiwiTWFya2VyIiwib3B0aW9ucyIsInNoYWRvd1VybCIsIm1vdmVUaW1lb3V0IiwiaXNDaHVua01vZGUiLCJfaW5pdE1hcCIsImxheWVyc0NvbnRyb2wiLCJzZXRWaWV3IiwidGlsZUxheWVyIiwiYXR0cmlidXRpb24iLCJmaXJlIiwibGF5ZXJzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImVudGVyQ2h1bmtNb2RlIiwiZXhpdENodW5rTW9kZSIsIl9tYXBJbnN0YW5jZSIsInN0YXR1c1RleHQiLCJwbGF5ZXJzIiwiaGFzQ2VudGVyZWQiLCJwbGF5ZXIiLCJpc01lIiwiY3VycmVudFBsYXllcklkIiwiY2h1bmtDYWNoZSIsIkNBQ0hFX1RUTCIsImdldENhY2hlZENodW5rIiwiY2FjaGVkIiwidHMiLCJzZXRDYWNoZWRDaHVuayIsIl9vYmplY3RTcHJlYWQiLCJpbnZhbGlkYXRlQ2h1bmtDYWNoZSIsImNsZWFyQ2h1bmtDYWNoZSIsImNsZWFyIiwiaW52YWxpZGF0ZUNodW5rIiwiY2h1bmtzIiwiYmVzdFBvaW50IiwiYmVzdERpc3RhbmNlIiwiSW5maW5pdHkiLCJyb2FkIiwicG9pbnRzIiwiYVJhdyIsImJSYXciLCJwcm9qZWN0ZWQiLCJwcm9qZWN0UG9pbnRPblNlZ21lbnQiLCJiZXN0U2VnbWVudCIsIm1pZCIsIkEiLCJCIiwiUCIsIkFCIiwiQVAiLCJhYjIiLCJkaXN0YW5jZVRvU2VnbWVudCIsImRlYnVnUm9hZHMiLCJvd25LZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZmlsdGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiX24iLCJGIiwiX2xvYWRWaXNpYmxlUm9hZENodW5rcyIsImNodW5rc1RvTG9hZCIsImZpbmFsQ2h1bmtzVG9Mb2FkIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9jaHVua0lkMyIsIl9maW5hbENodW5rc1RvTG9hZCIsIl95aWVsZCRQcm9taXNlJGFsbCIsIl95aWVsZCRQcm9taXNlJGFsbDIiLCJyb2Fkc1Jlc3BvbnNlIiwiYnVpbGRpbmdzUmVzcG9uc2UiLCJkZXBvc2l0c1Jlc3BvbnNlIiwicm9hZHNEYXRhIiwiYnVpbGRpbmdzRGF0YSIsImRlcG9zaXRzRGF0YSIsIl9pMiIsIl9maW5hbENodW5rc1RvTG9hZDIiLCJfcm9hZHNEYXRhJF9jaHVua0lkIiwiX2J1aWxkaW5nc0RhdGEkX2NodW5rIiwiX2NodW5rSWQiLCJjaHVua0RhdGEiLCJoYXNSb2FkcyIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJfY2h1bmtJZDIiLCJnZXRWaXNpYmxlQ2h1bmtzIiwibG9hZGVkQ2h1bmtzIiwicmVmcmVzaENodW5rQ29sb3JzIiwiYWxsIiwicmVmcmVzaENodW5rIiwiX3JlZnJlc2hDaHVuayIsImZldGNoU2luZ2xlQ2h1bmsiLCJfZmV0Y2hTaW5nbGVDaHVuayIsIl9yb2Fkc0RhdGEkY2h1bmtJZCIsIl9idWlsZGluZ3NEYXRhJGNodW5rSSIsIl95aWVsZCRQcm9taXNlJGFsbDMiLCJfeWllbGQkUHJvbWlzZSRhbGw0Iiwicm9hZHNSZXMiLCJidWlsZGluZ3NSZXMiLCJkZXBvc2l0c1JlcyIsIl9jb2xvcnMkY2h1bmskc3RhdHVzIiwiY2h1bmsiLCJjb2xvcnMiLCJsb2FkZWQiLCJlbXB0eSIsImxvYWRpbmciLCJtaW5YIiwibWF4WCIsIm1pblkiLCJtYXhZIiwicm9hZHNSZWFkeSIsImRyYXduUm9hZHMiLCJyb2FkTGF5ZXJzIiwiYnVpbGRpbmdMYXllcnMiLCJjYWNoZWRSb2FkcyIsImNhY2hlRGlydHkiLCJtYXJrUm9hZENhY2hlRGlydHkiLCJ2YWx1ZXMiLCJmbGF0TWFwIiwiZXZlbnRzIiwiZXZlbnQiLCJub3RpZiIsImJhc2VDaXJjbGVzIiwicm9hZFNlZ21lbnRzIiwiRkFDVElPTl9DT0xPUlMiLCJnZXRGYWN0aW9uQ29sb3IiLCJiYXNlSWQiLCJwbGF5ZXJGYWN0aW9uIiwiY2xlYXJBbGxCYXNlQ2lyY2xlcyIsInJvYWRJZCIsImNvb3JkcyIsInJlbW92ZVJvYWRTZWdtZW50IiwiY2xlYXJBbGxSb2FkU2VnbWVudHMiLCJ1cGRhdGVCYXNlQ2lyY2xlcyIsImJhc2VzIiwidXBkYXRlUm9hZFNlZ21lbnRzIiwiaXNQbGF5ZXJSb2FkIiwic2V0Um9hZFNlZ21lbnRDb2xvciIsImZvcm1hdCIsInRvRml4ZWQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzbmFwVG9DaHVuayIsIkNIVU5LX1JBRElVUyIsIm9uY2UiLCJfZSRsYXRsbmciLCJzbmFwcGVkIiwiZGVmYXVsdExhdCIsImRlZmF1bHRMbmciLCJnZW9sb2NhdGlvbiIsImdwc0ZvdW5kIiwid2F0Y2hQb3NpdGlvbiIsInRpbWVvdXQiLCJ0aW1lckludGVydmFsIiwidXBkYXRlVGltZXJzIiwidGltZXJFbCIsInNjaGVkdWxlZCIsImlzTmFOIiwiZGlmZlNlYyIsIm1pbnMiLCJzZWNzIiwiaW5uZXJIVE1MIiwiYWJzIiwic2V0SW50ZXJ2YWwiLCJpc29TdHJpbmciLCJ0b0xvY2FsZVN0cmluZyIsInRpbWVab25lIiwiaG91ciIsIm1pbnV0ZSIsIkljb24iLCJEZWZhdWx0IiwiX2dldEljb25VcmwiLCJtZXJnZU9wdGlvbnMiLCJpY29uUmV0aW5hVXJsIiwicmVxdWlyZSIsIlRZUEVfTUFQIiwiREVCVUciLCJlbmFibGVkIiwiX3dpbmRvdyRBUFBfREVCVUciLCJBUFBfREVCVUciLCJtZXJjdXJlIiwiaW52ZW50b3J5IiwibmV0d29yayIsImNhY2hlIiwiY2FuTG9nIiwiX2NvbnNvbGUiLCJsb2ciLCJfY29uc29sZTIiLCJfY29uc29sZTMiXSwic291cmNlUm9vdCI6IiJ9