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






document.addEventListener('DOMContentLoaded', function () {
  enableLeafletDebug(false);
  (0,_map_map_js__WEBPACK_IMPORTED_MODULE_0__.initMap)(46.53972, 2.43028);
  (0,_buildings_base_js__WEBPACK_IMPORTED_MODULE_2__.initBaseUI)();
  (0,_buildings_buildMode_js__WEBPACK_IMPORTED_MODULE_3__.initBuildMode)();
  (0,_map_map_js__WEBPACK_IMPORTED_MODULE_0__.loadWorld)();
  document.body.classList.add('page-game');
  if (window.currentUser) {
    (0,_notifications_js__WEBPACK_IMPORTED_MODULE_4__.initNotifications)();
    initDeliveryEvents();
    initInventoryEvents();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLENBQUFtSSxLQUFBO0VBQUE7RUFLcEMsQ0FBQXNTLFNBQUEsR0FBQTVTLE9BQU8sRUFBQzVMLEtBQUssQ0FBQWdFLEtBQUEsQ0FBQXdhLFNBQUEsT0FBQWptQixNQUFBLENBQ0wsQ0FBQW1sQixpREFBUSxhQUFSQSxpREFBUSx1QkFBUkEsaURBQVEsQ0FBR3pWLElBQUksQ0FBQyxLQUFJQSxJQUFJLFFBQUExUCxNQUFBLENBQ3pCbVQsSUFBSSxDQUNYLENBQUM7QUFDTCxDOzs7Ozs7Ozs7Ozs7OztBQzVETyxJQUFNZ1MsUUFBUSxHQUFHO0VBQ3BCSyxPQUFPLEVBQUUsU0FBUztFQUNsQkMsU0FBUyxFQUFFLFdBQVc7RUFDdEJDLFFBQVEsRUFBRSxVQUFVO0VBQ3BCdFcsU0FBUyxFQUFFLFdBQVc7RUFDdEJ5TCxNQUFNLEVBQUUsUUFBUTtFQUNoQjhLLE9BQU8sRUFBRSxTQUFTO0VBQ2xCQyxLQUFLLEVBQUU7QUFDWCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL0xheWVycy9ncmlkTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9idWlsZGluZ3MvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2J1aWxkaW5ncy9idWlsZE1vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9idWlsZGluZ3MvYnVpbGRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9nYW1lLW1haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvZGVwb3NpdHMvZGVwb3NpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwL3JvYWRzL2ludmFsaWRhdGVDaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9yb2Fkcy9yb2FkVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvcm9hZHMvcm9hZHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvcm9hZHMvcm9hZHNTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91aS9kcmF3T25NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91dGlscy9hZG1pbl9jbGlwYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91dGlscy9jaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3V0aWxzL2dwcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3V0aWxzL3NuYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91dGlscy90aW1lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9MZWFmbGV0V3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy91dGlscy9jYWNoZVV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3V0aWxzL2RlYnVnLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3V0aWxzL3R5cGVNYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4uL3V0aWxzL2NodW5rLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwLCBpc0dyaWRMYXllckFjdGl2ZSB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyaWRMYXllciA9IEwubGF5ZXJHcm91cCgpO1xyXG5cclxuY29uc3QgdmlzaWJsZUNodW5rcyA9IG5ldyBNYXAoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R3JpZExheWVyKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBpZiAoIWlzR3JpZExheWVyQWN0aXZlKCkpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB6b29tID0gbWFwLmdldFpvb20oKTtcclxuICAgIGlmICh6b29tIDwgMTQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBib3VuZHMgPSBtYXAuZ2V0Qm91bmRzKCk7XHJcblxyXG4gICAgY29uc3QgbWluTGF0ID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0U291dGgoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWF4TGF0ID0gTWF0aC5jZWlsKGJvdW5kcy5nZXROb3J0aCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtaW5MbmcgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRXZXN0KCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1heExuZyA9IE1hdGguY2VpbChib3VuZHMuZ2V0RWFzdCgpIC8gQ0hVTktfU0laRSk7XHJcblxyXG4gICAgY29uc3QgbmV3VmlzaWJsZSA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gbWluTGF0OyBpIDwgbWF4TGF0OyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gbWluTG5nOyBqIDwgbWF4TG5nOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYCR7aX1fJHtqfWA7XHJcbiAgICAgICAgICAgIG5ld1Zpc2libGUuYWRkKGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlQ2h1bmtzLmhhcyhpZCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGF0ID0gaSAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgICAgIGNvbnN0IGxuZyA9IGogKiBDSFVOS19TSVpFO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IEwucmVjdGFuZ2xlKFtcclxuICAgICAgICAgICAgICAgIFtsYXQsIGxuZ10sXHJcbiAgICAgICAgICAgICAgICBbbGF0ICsgQ0hVTktfU0laRSwgbG5nICsgQ0hVTktfU0laRV1cclxuICAgICAgICAgICAgXSwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IDEsXHJcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogMC4xNVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlY3Qub24oJ21vdXNlb3ZlcicsICgpID0+IHJlY3Quc2V0U3R5bGUoeyBmaWxsT3BhY2l0eTogMC4zIH0pKTtcclxuICAgICAgICAgICAgcmVjdC5vbignbW91c2VvdXQnLCAoKSA9PiByZWN0LnNldFN0eWxlKHsgZmlsbE9wYWNpdHk6IDAuMTUgfSkpO1xyXG5cclxuICAgICAgICAgICAgZ3JpZExheWVyLmFkZExheWVyKHJlY3QpO1xyXG5cclxuICAgICAgICAgICAgdmlzaWJsZUNodW5rcy5zZXQoaWQsIHJlY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDwn6e5IHJlbW92ZSBjZXV4IGhvcnMgw6ljcmFuXHJcbiAgICBmb3IgKGNvbnN0IFtpZCwgcmVjdF0gb2YgdmlzaWJsZUNodW5rcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICBpZiAoIW5ld1Zpc2libGUuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICBncmlkTGF5ZXIucmVtb3ZlTGF5ZXIocmVjdCk7XHJcbiAgICAgICAgICAgIHZpc2libGVDaHVua3MuZGVsZXRlKGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVidWdMb2coXCJjaHVua3NcIiwgXCJDaHVua3MgdmlzaWJsZXM6XCIsIHZpc2libGVDaHVua3Muc2l6ZSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENIVU5LIENPTE9SXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDaHVua0NvbG9yKGlkLCBjb2xvcikge1xyXG4gICAgaWYgKCFpc0dyaWRMYXllckFjdGl2ZSgpKSByZXR1cm47XHJcbiAgICBcclxuICAgIGNvbnN0IHJlY3QgPSB2aXNpYmxlQ2h1bmtzLmdldChpZCk7XHJcbiAgICBpZiAoIXJlY3QpIHJldHVybjtcclxuXHJcbiAgICByZWN0LnNldFN0eWxlKHtcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBmaWxsT3BhY2l0eTogMC4yXHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBidWlsZFJlcXVlc3QobGF0LCBsbmcsIHR5cGVJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL2J1aWxkJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbGF0OiBsYXQsIGxuZzogbG5nLCB0eXBlX2lkOiB0eXBlSWQgfSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVpbGRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL21hcC1kYXRhJylcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWlsZGluZ0Nvc3RzKGJ1aWxkaW5nVHlwZUlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYC9hcGkvYnVpbGRpbmctdHlwZXMvJHtidWlsZGluZ1R5cGVJZH0vY29zdHNgKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZ3JhZGVCdWlsZGluZyhidWlsZGluZ0lkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYC9hcGkvYnVpbGRpbmcvJHtidWlsZGluZ0lkfS91cGdyYWRlYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVwZ3JhZGVJbmZvKGJ1aWxkaW5nSWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgL2FwaS9idWlsZGluZy8ke2J1aWxkaW5nSWR9L3VwZ3JhZGUtaW5mb2ApO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBmbHlUbywgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IHJvYWRzU3RhdGUsIGdldEFsbExvYWRlZFJvYWRzIH0gZnJvbSAnLi4vbWFwL3JvYWRzL3JvYWRzU3RhdGUuanMnO1xyXG5pbXBvcnQgeyBnZXRCdWlsZGluZ0ltYWdlIH0gZnJvbSAnLi9idWlsZGluZy5qcyc7XHJcbmltcG9ydCB7IENIVU5LX1NJWkUgfSBmcm9tICcuLi91dGlscy9jaHVuay5qcyc7XHJcbmltcG9ydCB7IHNhZmVMb2FkQ2h1bmssIGxvYWRWaXNpYmxlUm9hZENodW5rcyB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2Fkcy5qcyc7XHJcbmltcG9ydCB7IGZpbmRDbG9zZXN0UG9pbnRPblJvYWQsIGZpbmRDbG9zZXN0U2VnbWVudCB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2FkVXRpbHMuanMnO1xyXG5pbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vbm90aWZpY2F0aW9ucy5qcyc7XHJcbmltcG9ydCB7IGdldEFkbWluQ29vcmRzIH0gZnJvbSAnLi4vdXRpbHMvYWRtaW5fY2xpcGJvYXJkLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgZHJhd0Jhc2VDaXJjbGUsIHJlbW92ZUJhc2VDaXJjbGUgfSBmcm9tICcuLi91aS9kcmF3T25NYXAuanMnO1xyXG5pbXBvcnQgeyByZWZyZXNoU2lkZWJhciB9IGZyb20gJy4vYnVpbGRNb2RlLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIPCfp6AgU1RBVEVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxubGV0IGJhc2VNYXJrZXIgPSBudWxsO1xyXG5sZXQgYmFzZUNpcmNsZSA9IG51bGw7XHJcbmxldCBiYXNlUG9zaXRpb24gPSBudWxsO1xyXG5sZXQgYmFzZUNyZWF0ZWQgPSBmYWxzZTtcclxubGV0IHBsYWNpbmdCYXNlID0gZmFsc2U7XHJcblxyXG5sZXQgcHJldmlld01hcmtlciA9IG51bGw7XHJcbmxldCBwcmV2aWV3Q2lyY2xlID0gbnVsbDtcclxubGV0IHByZXZpZXdTbmFwTGF0TG5nID0gbnVsbDtcclxubGV0IHByZXZpZXdMaW5lID0gbnVsbDtcclxubGV0IGhpZ2hsaWdodGVkU2VnbWVudCA9IG51bGw7XHJcblxyXG5sZXQgY3VycmVudFBsYXllckZhY3Rpb24gPSAnZGVmYXVsdCc7XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0VUIFBMQVlFUiBGQUNUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50UGxheWVyRmFjdGlvbihmYWN0aW9uKSB7XHJcbiAgICBjdXJyZW50UGxheWVyRmFjdGlvbiA9IChmYWN0aW9uIHx8ICdkZWZhdWx0JykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUIFBMQVlFUiBGQUNUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpIHtcclxuICAgIHJldHVybiBjdXJyZW50UGxheWVyRmFjdGlvbjtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5JVCBVSVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJhc2VVSSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBjb25zdCBiYXNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2VCdG4nKTtcclxuXHJcbiAgICBiYXNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBtb2RlID0gYmFzZUJ0bi5kYXRhc2V0Lm1vZGU7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gQ1JFQVRFIEJBU0UgTU9ERSBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGlmIChtb2RlID09PSAnY3JlYXRlJykge1xyXG4gICAgICAgICAgICBpZiAoYmFzZUNyZWF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQmFzZSBkw6lqw6AgY3LDqcOpZSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwbGFjaW5nQmFzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnY3Jvc3NoYWlyJztcclxuXHJcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oXCJDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgcGxhY2VyIHRhIGJhc2VcIiwgJ2luZm8nKTtcclxuICAgICAgICAgICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFJFVFVSTiBCQVNFIE1PREVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGlmIChtb2RlID09PSAncmV0dXJuJykge1xyXG4gICAgICAgICAgICBpZiAoIWJhc2VQb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBdWN1bmUgYmFzZSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmbHlUbyhiYXNlUG9zaXRpb25bMF0sIGJhc2VQb3NpdGlvblsxXSwgMTYpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQ0xJQ0sgTUFQXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbWFwLm9uKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFwbGFjaW5nQmFzZSB8fCBiYXNlQ3JlYXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghcHJldmlld1NuYXBMYXRMbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgeyBsYXQsIGxuZyB9ID0gcHJldmlld1NuYXBMYXRMbmc7XHJcblxyXG4gICAgICAgIGlmICghaXNCYXNlUGxhY2VtZW50VmFsaWQobGF0LCBsbmcpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi4p2MIFRyb3AgcHJvY2hlIGQndW5lIGJhc2UgIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYW51cFByZXZpZXcobWFwKTtcclxuICAgICAgICBjcmVhdGVCYXNlKGxhdCwgbG5nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE1PVVNFIE1PVkUgKHByZXZpZXcgc25hcCByb2FkKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcC5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFwbGFjaW5nQmFzZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByb2FkcyA9IGdldEFsbExvYWRlZFJvYWRzKCk7XHJcblxyXG4gICAgICAgIGlmICghcm9hZHMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbmRDbG9zZXN0UG9pbnRPblJvYWQoZS5sYXRsbmcsIHJvYWRzKTtcclxuICAgICAgICBpZiAoIXJlc3VsdC5wb2ludCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBwcmV2aWV3U25hcExhdExuZyA9IHJlc3VsdC5wb2ludDtcclxuXHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGlzQmFzZVBsYWNlbWVudFZhbGlkKHJlc3VsdC5wb2ludC5sYXQsIHJlc3VsdC5wb2ludC5sbmcpO1xyXG5cclxuICAgICAgICBjbGVhbnVwUHJldmlldyhtYXApO1xyXG5cclxuICAgICAgICBjb25zdCBjb2xvciA9IGlzVmFsaWQgPyAnZ3JlZW4nIDogJ3JlZCc7XHJcblxyXG4gICAgICAgIHByZXZpZXdDaXJjbGUgPSBMLmNpcmNsZShyZXN1bHQucG9pbnQsIHtcclxuICAgICAgICAgICAgcmFkaXVzOiA2MDAsXHJcbiAgICAgICAgICAgIGNvbG9yLFxyXG4gICAgICAgICAgICB3ZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwXHJcbiAgICAgICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICAgICAgcHJldmlld01hcmtlciA9IEwubWFya2VyKHJlc3VsdC5wb2ludCkuYWRkVG8obWFwKTtcclxuXHJcbiAgICAgICAgcHJldmlld0xpbmUgPSBMLnBvbHlsaW5lKFtlLmxhdGxuZywgcmVzdWx0LnBvaW50XSwge1xyXG4gICAgICAgICAgICBjb2xvcjogJ2N5YW4nLFxyXG4gICAgICAgICAgICB3ZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgICAgICAgZGFzaEFycmF5OiAnNSwgNSdcclxuICAgICAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBjb25zdCBzZWdtZW50ID0gZmluZENsb3Nlc3RTZWdtZW50KGUubGF0bG5nLCByb2Fkcyk7XHJcblxyXG4gICAgICAgIGlmIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkU2VnbWVudCA9IEwucG9seWxpbmUoc2VnbWVudCwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiA2LFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44XHJcbiAgICAgICAgICAgIH0pLmFkZFRvKG1hcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFVQREFURSBWSVNVQUwgQkFTRSBBTkQgT1RIRVIgQkFTRVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcC5vbignem9vbWVuZCcsICgpID0+IHtcclxuICAgICAgICB1cGRhdGVCYXNlRGlzcGxheSgpO1xyXG4gICAgICAgIHVwZGF0ZU90aGVyQmFzZXMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQQVRIRklORElORyBERUJVRyBGT1IgQURNSU4gLSBDTElDSyBUTyBHRVQgQ09PUkRJTkFURVNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlcigpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgc2hvd05vdGlmaWNhdGlvbihcIk1vZGUgQWRtaW4gYWN0aXbDqSA6IGNsaXF1ZXogc3VyIGxhIGNhcnRlXCIsICdpbmZvJyk7XHJcbiAgICAgICAgXHJcbiAgICBtYXAub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBnZXRBZG1pbkNvb3JkcyhlLmxhdGxuZy5sYXQsIGUubGF0bG5nLmxuZyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LmVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlciA9IGVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlcjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIPCfp7kgQ0xFQU4gUFJFVklFV1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBjbGVhbnVwUHJldmlldygpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBwcmV2aWV3TWFya2VyICYmIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3TWFya2VyKTtcclxuICAgIHByZXZpZXdDaXJjbGUgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdDaXJjbGUpO1xyXG4gICAgcHJldmlld0xpbmUgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdMaW5lKTtcclxuICAgIGhpZ2hsaWdodGVkU2VnbWVudCAmJiBtYXAucmVtb3ZlTGF5ZXIoaGlnaGxpZ2h0ZWRTZWdtZW50KTtcclxuXHJcbiAgICBwcmV2aWV3TWFya2VyID0gbnVsbDtcclxuICAgIHByZXZpZXdDaXJjbGUgPSBudWxsO1xyXG4gICAgcHJldmlld0xpbmUgPSBudWxsO1xyXG4gICAgaGlnaGxpZ2h0ZWRTZWdtZW50ID0gbnVsbDtcclxuXHJcbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJyc7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaXNCYXNlUGxhY2VtZW50VmFsaWQobGF0LCBsbmcpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICByZXR1cm4gb3RoZXJCYXNlcy5ldmVyeShiYXNlID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdCA9IG1hcC5kaXN0YW5jZShcclxuICAgICAgICAgICAgW2xhdCwgbG5nXSxcclxuICAgICAgICAgICAgW2Jhc2UubGF0LCBiYXNlLmxuZ11cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlzdCA+PSAxMTAwO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENSRUFURSBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGNyZWF0ZUJhc2UobGF0LCBsbmcpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBwbGFjaW5nQmFzZSA9IGZhbHNlO1xyXG4gICAgYmFzZVBvc2l0aW9uID0gW2xhdCwgbG5nXTtcclxuXHJcbiAgICBmbHlUbyhsYXQsIGxuZyk7XHJcblxyXG4gICAgYmFzZUNpcmNsZSA9IGRyYXdCYXNlQ2lyY2xlKCdwbGF5ZXJfYmFzZScsIGxhdCwgbG5nLCBjdXJyZW50UGxheWVyRmFjdGlvbiwgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgYmFzZVR5cGVJZCA9IDE7XHJcbiAgICBmZXRjaCgnL2FwaS9idWlsZCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGxhdCxcclxuICAgICAgICAgICAgbG5nLFxyXG4gICAgICAgICAgICB0eXBlX2lkOiBiYXNlVHlwZUlkXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmICghcmVzLm9rKSByZXR1cm4gcmVzLmpzb24oKS50aGVuKGVyciA9PiB7IHRocm93IG5ldyBFcnJvcihlcnIuZXJyb3IgfHwgXCJBUEkgZXJyb3JcIikgfSk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoU2lkZWJhcigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFLDqS1pbml0aWFsaXNlciBsJ1VJIGRlIGJhc2UgcG91ciByw6ktYXR0YWNoZXIgbGVzIGxpc3RlbmVycyBhdXggbm91dmVhdXggYm91dG9uc1xyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9iYXNlLmpzJykudGhlbigoeyBpbml0QmFzZVVJIH0pID0+IGluaXRCYXNlVUkoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuKVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYmFzZXMnLCBcIkVycmV1ciBjcsOpYXRpb24gYmFzZVwiLCBlcnIpO1xyXG4gICAgICAgIHJlbW92ZUJhc2UoKTtcclxuICAgICAgICBhbGVydChcIkVycmV1ciBjcsOpYXRpb24gYmFzZSA6IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG4gICAgdXBkYXRlQmFzZURpc3BsYXkoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUkVNT1ZFIEJBU0VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gcmVtb3ZlQmFzZSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBiYXNlTWFya2VyICYmIG1hcC5yZW1vdmVMYXllcihiYXNlTWFya2VyKTtcclxuICAgIGJhc2VDaXJjbGUgJiYgbWFwLnJlbW92ZUxheWVyKGJhc2VDaXJjbGUpO1xyXG5cclxuICAgIGJhc2VNYXJrZXIgPSBudWxsO1xyXG4gICAgYmFzZUNpcmNsZSA9IG51bGw7XHJcbiAgICBiYXNlUG9zaXRpb24gPSBudWxsO1xyXG4gICAgYmFzZUNyZWF0ZWQgPSBmYWxzZTtcclxuICAgIHBsYWNpbmdCYXNlID0gZmFsc2U7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG59XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExPQUQgT1RIRVIgQkFTRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5sZXQgb3RoZXJCYXNlcyA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRPdGhlckJhc2UobGF0LCBsbmcsIHBzZXVkbywgZmFjdGlvbikge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShsbmcpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaXNQbGF5ZXJCYXNlID0gZmFjdGlvbiA9PT0gY3VycmVudFBsYXllckZhY3Rpb247XHJcblxyXG4gICAgLy8gVXRpbGlzZXIgZHJhd0Jhc2VDaXJjbGUgZGUgZHJhd09uTWFwLmpzXHJcbiAgICBjb25zdCBjaXJjbGUgPSBkcmF3QmFzZUNpcmNsZShgb3RoZXJfJHtsYXR9XyR7bG5nfWAsIGxhdCwgbG5nLCBmYWN0aW9uLCBpc1BsYXllckJhc2UpO1xyXG5cclxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbihtYXAuZ2V0Wm9vbSgpLCBmYWN0aW9uKTtcclxuXHJcbiAgICBsZXQgbWFya2VyID0gbnVsbDtcclxuXHJcbiAgICBpZiAoaWNvbikge1xyXG4gICAgICAgIG1hcmtlciA9IEwubWFya2VyKFtsYXQsIGxuZ10sIHsgaWNvbiB9KVxyXG4gICAgICAgICAgICAuYWRkVG8obWFwKVxyXG4gICAgICAgICAgICAuYmluZFBvcHVwKGDwn4+V77iPIEJhc2UgZGUgJHtwc2V1ZG99YCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3RoZXJCYXNlcy5wdXNoKHsgbGF0LCBsbmcsIHBzZXVkbywgbWFya2VyLCBjaXJjbGUsIGZhY3Rpb24gfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVQREFURSBPVEhFUiBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHVwZGF0ZU90aGVyQmFzZXMoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBjb25zdCB6b29tID0gbWFwLmdldFpvb20oKTtcclxuXHJcbiAgICBvdGhlckJhc2VzLmZvckVhY2goYmFzZSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbih6b29tLCBiYXNlLmZhY3Rpb24pO1xyXG5cclxuICAgICAgICBpZiAoIWljb24pIHtcclxuICAgICAgICAgICAgaWYgKGJhc2UubWFya2VyKSBtYXAucmVtb3ZlTGF5ZXIoYmFzZS5tYXJrZXIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWJhc2UubWFya2VyKSB7XHJcbiAgICAgICAgICAgIGJhc2UubWFya2VyID0gTC5tYXJrZXIoW2Jhc2UubGF0LCBiYXNlLmxuZ10sIHsgaWNvbiB9KVxyXG4gICAgICAgICAgICAgICAgLmFkZFRvKG1hcClcclxuICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAoYPCfj5XvuI8gQmFzZSBkZSAke2Jhc2UucHNldWRvfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hcC5oYXNMYXllcihiYXNlLm1hcmtlcikpIGJhc2UubWFya2VyLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgICAgIGJhc2UubWFya2VyLnNldEljb24oaWNvbik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTE9BRCBGUk9NIFNFUlZFUlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEJhc2VGcm9tU2VydmVyKGxhdCwgbG5nKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobGF0KSB8fCAhTnVtYmVyLmlzRmluaXRlKGxuZykpIHJldHVybjtcclxuXHJcbiAgICBiYXNlUG9zaXRpb24gPSBbbGF0LCBsbmddO1xyXG4gICAgYmFzZUNyZWF0ZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIFV0aWxpc2VyIGRyYXdCYXNlQ2lyY2xlIGRlIGRyYXdPbk1hcC5qcyAobm90cmUgYmFzZSA9IGlzUGxheWVyQmFzZSA9IHRydWUpXHJcbiAgICBiYXNlQ2lyY2xlID0gZHJhd0Jhc2VDaXJjbGUoJ3BsYXllcl9iYXNlJywgbGF0LCBsbmcsIGN1cnJlbnRQbGF5ZXJGYWN0aW9uLCB0cnVlKTtcclxuXHJcbiAgICB1cGRhdGVCYXNlRGlzcGxheSgpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVUERBVEUgQkFTRSBESVNQTEFZXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHVwZGF0ZUJhc2VEaXNwbGF5KCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghYmFzZVBvc2l0aW9uKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUJhc2VJY29uKG1hcC5nZXRab29tKCksIGN1cnJlbnRQbGF5ZXJGYWN0aW9uKTtcclxuXHJcbiAgICBpZiAoIWljb24pIHtcclxuICAgICAgICBpZiAoYmFzZU1hcmtlcikgbWFwLnJlbW92ZUxheWVyKGJhc2VNYXJrZXIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJhc2VNYXJrZXIpIHtcclxuICAgICAgICBiYXNlTWFya2VyID0gTC5tYXJrZXIoYmFzZVBvc2l0aW9uLCB7IGljb24gfSkuYWRkVG8obWFwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFtYXAuaGFzTGF5ZXIoYmFzZU1hcmtlcikpIGJhc2VNYXJrZXIuYWRkVG8obWFwKTtcclxuICAgICAgICBiYXNlTWFya2VyLnNldEljb24oaWNvbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENSRUFURSBCQVNFIElDT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gY3JlYXRlQmFzZUljb24oem9vbSwgZmFjdGlvbikge1xyXG5cclxuICAgIGlmICh6b29tIDwgMTMpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IHNpemUgPSBmYWN0aW9uICE9PSAnbm9tYWRlcycgPyAoem9vbSA+IDE1ID8gMTAwIDogNzApIDogKHpvb20gPiAxNSA/IDc1IDogNjApO1xyXG5cclxuICAgIC8vIFRvdWpvdXJzIHV0aWxpc2VyIGwnaWPDtG5lIGRlIGxhIGZhY3Rpb24gKGxlIGZhbGxiYWNrIEFwYWNoZSBnw6hyZSBsZXMgNDA0KVxyXG4gICAgLy8gU2kgbCdpY8O0bmUgbidleGlzdGUgcGFzLCBBcGFjaGUgcmVkaXJpZ2UgdmVycyBkZWZhdWx0IGF1dG9tYXRpcXVlbWVudFxyXG4gICAgY29uc3QgaWNvblVybCA9IGdldEJ1aWxkaW5nSW1hZ2UoZmFjdGlvbiwgJ2Jhc2UnKTtcclxuXHJcbiAgICByZXR1cm4gTC5pY29uKHtcclxuICAgICAgICBpY29uVXJsOiBpY29uVXJsLFxyXG4gICAgICAgIGljb25TaXplOiBbc2l6ZSwgc2l6ZV0sXHJcbiAgICAgICAgaWNvbkFuY2hvcjogW3NpemUgLyAyLCBzaXplIC8gMl0sXHJcbiAgICAgICAgcG9wdXBBbmNob3I6IFswLCAtc2l6ZSAvIDJdXHJcbiAgICB9KTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IGdldEJ1aWxkaW5nQ29zdHMsIGJ1aWxkUmVxdWVzdCB9IGZyb20gJy4uL2FwaS5qcyc7XHJcbmltcG9ydCB7IGdldEJ1aWxkaW5nSW1hZ2UgfSBmcm9tICcuL2J1aWxkaW5nLmpzJztcclxuaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4uL25vdGlmaWNhdGlvbnMuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQlVJTEQgTU9ERSBTVEFURVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5sZXQgc2VsZWN0ZWRCdWlsZGluZ1R5cGUgPSBudWxsO1xyXG5sZXQgcHJldmlld0J1aWxkaW5nTWFya2VyID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXNlIGxlIG1vZGUgY29uc3RydWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJ1aWxkTW9kZSgpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIC8vIFV0aWxpc2VyIGxhIGTDqWzDqWdhdGlvbiBkJ8OpdsOpbmVtZW50cyBwb3VyIGxlcyBib3V0b25zIGR5bmFtaXF1ZXNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldC5jbG9zZXN0KCcuYnVpbGQtaXRlbScpO1xyXG4gICAgICAgIGlmICghYnRuKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHR5cGVJZCA9IGJ0bi5kYXRhc2V0LnR5cGVJZDtcclxuICAgICAgICBpZiAoIXR5cGVJZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBTw6lsZWN0aW9ubmVyIGxlIHR5cGUgZGUgYsOidGltZW50XHJcbiAgICAgICAgYXdhaXQgc2VsZWN0QnVpbGRpbmdUeXBlKHR5cGVJZCwgYnRuKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsaWNrIHN1ciBsYSBjYXJ0ZSBwb3VyIGNvbnN0cnVpcmVcclxuICAgIG1hcC5vbignY2xpY2snLCBvbk1hcENsaWNrKTtcclxuXHJcbiAgICAvLyBNb3VzZSBtb3ZlIHBvdXIgcHLDqXZpc3VhbGlzZXJcclxuICAgIG1hcC5vbignbW91c2Vtb3ZlJywgb25NYXBNb3VzZU1vdmUpO1xyXG59XHJcblxyXG4vKipcclxuICogU8OpbGVjdGlvbm5lIHVuIHR5cGUgZGUgYsOidGltZW50IMOgIGNvbnN0cnVpcmVcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdEJ1aWxkaW5nVHlwZSh0eXBlSWQsIGJ1dHRvbikge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgLy8gRMOpc8OpbGVjdGlvbm5lciBwcsOpY8OpZGVtbWVudFxyXG4gICAgY2xlYXJCdWlsZGluZ1NlbGVjdGlvbigpO1xyXG5cclxuICAgIC8vIEfDqXJlciBsZSBjYXMgc3DDqWNpYWwgZGUgbGEgYmFzZSAoYm91dG9uICNiYXNlQnRuKVxyXG4gICAgaWYgKGJ1dHRvbi5pZCA9PT0gJ2Jhc2VCdG4nICYmIHR5cGVJZCA9PSAxKSB7XHJcbiAgICAgICAgLy8gTGEgYmFzZSBlc3QgZ8OpcsOpZSBwYXIgYmFzZS5qcywgb24gbmUgZmFpdCByaWVuIGljaVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXR0cmUgZW4gw6l2aWRlbmNlIGxlIGJvdXRvbiBzw6lsZWN0aW9ubsOpXHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAvLyBSw6ljdXDDqXJlciBsZXMgY2/Du3RzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRCdWlsZGluZ0Nvc3RzKHR5cGVJZCk7XHJcbiAgICAgICAgc2VsZWN0ZWRCdWlsZGluZ1R5cGUgPSB7XHJcbiAgICAgICAgICAgIGlkOiB0eXBlSWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgY29zdHM6IGRhdGEuY29zdHMsXHJcbiAgICAgICAgICAgIGJ1dHRvbjogYnV0dG9uXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbihgU8OpbGVjdGlvbm7DqTogJHtkYXRhLm5hbWV9LiBDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgY29uc3RydWlyZS5gLCAnaW5mbycpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGNvw7t0c1wiLCBlKTtcclxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGNvw7t0c1wiLCAnZXJyb3InKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE5ldHRvaWUgbGEgc8OpbGVjdGlvbiBhY3R1ZWxsZVxyXG4gKi9cclxuZnVuY3Rpb24gY2xlYXJCdWlsZGluZ1NlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmIChwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0J1aWxkaW5nTWFya2VyKTtcclxuICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdGVkQnVpbGRpbmdUeXBlID0gbnVsbDtcclxuXHJcbiAgICAvLyBSZXRpcmVyIGxhIGNsYXNzZSBzZWxlY3RlZCBkZSB0b3VzIGxlcyBib3V0b25zXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnVpbGQtaXRlbScpLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogR2VzdGlvbiBkdSBjbGljayBzdXIgbGEgY2FydGVcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIG9uTWFwQ2xpY2soZSkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFzZWxlY3RlZEJ1aWxkaW5nVHlwZSkgcmV0dXJuO1xyXG4gICAgaWYgKCFwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBsYXQgPSBlLmxhdGxuZy5sYXQ7XHJcbiAgICBjb25zdCBsbmcgPSBlLmxhdGxuZy5sbmc7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJ1aWxkUmVxdWVzdChsYXQsIGxuZywgc2VsZWN0ZWRCdWlsZGluZ1R5cGUuaWQpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZygnYnVpbGRpbmdzJywgYCR7c2VsZWN0ZWRCdWlsZGluZ1R5cGUubmFtZX0gY29uc3RydWl0IGF2ZWMgc3VjY8OocyAhYCk7XHJcbiAgICAgICAgICAgIC8vIE5ldHRveWVyXHJcbiAgICAgICAgICAgIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3QnVpbGRpbmdNYXJrZXIpO1xyXG4gICAgICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBjbGVhckJ1aWxkaW5nU2VsZWN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSYWZyYcOuY2hpciBsYSBzaWRlYmFyIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnJlZnJlc2hTaWRlYmFyKSB7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoU2lkZWJhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgYEVycmV1cjogJHtkYXRhLmVycm9yfWApO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGRlIGxhIGNvbnN0cnVjdGlvblwiLCBlKTtcclxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwiRXJyZXVyIHLDqXNlYXUgbG9ycyBkZSBsYSBjb25zdHJ1Y3Rpb25cIiwgJ2Vycm9yJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcsOpdmlzdWFsaXNhdGlvbiBkZSBsYSBwb3NpdGlvbiBkZSBjb25zdHJ1Y3Rpb25cclxuICovXHJcbmZ1bmN0aW9uIG9uTWFwTW91c2VNb3ZlKGUpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghc2VsZWN0ZWRCdWlsZGluZ1R5cGUpIHtcclxuICAgICAgICAvLyBOZXR0b3llciBsZXMgbWFya2VycyBkZSBwcsOpdmlzdWFsaXNhdGlvblxyXG4gICAgICAgIGlmIChwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHtcclxuICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdCdWlsZGluZ01hcmtlcik7XHJcbiAgICAgICAgICAgIHByZXZpZXdCdWlsZGluZ01hcmtlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBam91dGVyIHVuIG1hcmtlciBkZSBwcsOpdmlzdWFsaXNhdGlvblxyXG4gICAgaWYgKCFwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHtcclxuICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBMLm1hcmtlcihbZS5sYXRsbmcubGF0LCBlLmxhdGxuZy5sbmddKS5hZGRUbyhtYXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIuc2V0TGF0TG5nKGUubGF0bG5nKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFjdGl2ZSBsZSBtb2RlIGNvbnN0cnVjdGlvbiBwb3VyIHVuIHR5cGUgZGUgYsOidGltZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVCdWlsZE1vZGUodHlwZUlkKSB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10eXBlLWlkPVwiJHt0eXBlSWR9XCJdYCk7XHJcbiAgICBpZiAoYnRuKSB7XHJcbiAgICAgICAgYnRuLmNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEw6lzYWN0aXZlIGxlIG1vZGUgY29uc3RydWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZUJ1aWxkTW9kZSgpIHtcclxuICAgIGNsZWFyQnVpbGRpbmdTZWxlY3Rpb24oKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFbDqXJpZmllIHNpIGxlIG1vZGUgY29uc3RydWN0aW9uIGVzdCBhY3RpZlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQnVpbGRNb2RlQWN0aXZlKCkge1xyXG4gICAgcmV0dXJuIHNlbGVjdGVkQnVpbGRpbmdUeXBlICE9PSBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogUmFmcmHDrmNoaXQgbGUgY29udGVudSBkZSBsYSBzaWRlYmFyXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFNpZGViYXIoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9zaWRlYmFyJyk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NpZGViYXIgPSBkb2MucXVlcnlTZWxlY3RvcignI3NpZGVCYXInKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdTaWRlYmFyKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZUJhcicpPy5yZXBsYWNlV2l0aChuZXdTaWRlYmFyKTtcclxuICAgICAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oJ1NpZGViYXIgYWN0dWFsaXPDqWUnLCAnaW5mbycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGxvcnMgZHUgcmFmcmHDrmNoaXNzZW1lbnQgZGUgbGEgc2lkZWJhclwiLCBlKTtcclxuICAgIH1cclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IGdldEJ1aWxkaW5nQ29zdHMsIHVwZ3JhZGVCdWlsZGluZywgZ2V0VXBncmFkZUluZm8gfSBmcm9tICcuLi9hcGkuanMnO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UGxheWVyRmFjdGlvbiB9IGZyb20gJy4vYmFzZS5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG4vLyBDYWNoZSBkZXMgaW5mb3JtYXRpb25zIGRlIGLDonRpbWVudHNcclxubGV0IGJ1aWxkaW5nTWFya2VycyA9IG5ldyBNYXAoKTtcclxuXHJcbi8vIENhY2hlIGRlcyBwb3B1cHMgZMOpasOgIGNoYXJnw6lzXHJcbmxldCBwb3B1cENvbnRlbnRMb2FkZWQgPSBuZXcgU2V0KCk7XHJcblxyXG4vLyBJRCBkdSBqb3VldXIgYWN0aWYgKGluaXRpYWxpc8OpIGRlcHVpcyBsJ0FQSSlcclxubGV0IGN1cnJlbnRQbGF5ZXJJZCA9IG51bGw7XHJcblxyXG4vKipcclxuICogRMOpZmluaXQgbCdJRCBkdSBqb3VldXIgYWN0aWZcclxuICogQHBhcmFtIHtudW1iZXJ9IGlkIC0gTCdJRCBkdSBqb3VldXIgY29ubmVjdMOpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFBsYXllcklkKGlkKSB7XHJcbiAgICBjdXJyZW50UGxheWVySWQgPSBpZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoYXJnZSBsZXMgYsOidGltZW50cyBzdXIgbGEgY2FydGUgYXZlYyBsZXVycyBwb3B1cHMgaW50ZXJhY3RpZnNcclxuICogQHBhcmFtIHtBcnJheX0gYnVpbGRpbmdzIC0gTGlzdGUgZGVzIGLDonRpbWVudHMgw6AgYWZmaWNoZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQnVpbGRpbmdzRnJvbURhdGEoYnVpbGRpbmdzKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAoIW1hcCkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiTWFwIG5vdCBpbml0aWFsaXplZFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFidWlsZGluZ3MgfHwgIUFycmF5LmlzQXJyYXkoYnVpbGRpbmdzKSkge1xyXG4gICAgICAgIGRlYnVnV2FybignYnVpbGRpbmdzJywgXCJsb2FkQnVpbGRpbmdzRnJvbURhdGE6IGludmFsaWQgYnVpbGRpbmdzIGRhdGFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkaW5ncy5mb3JFYWNoKGIgPT4ge1xyXG4gICAgICAgIC8vIElnbm9yZXIgbGVzIGJhc2VzIC0gZWxsZXMgc29udCBnw6lyw6llcyBwYXIgYmFzZS5qc1xyXG4gICAgICAgIGlmIChiLmNvZGUgPT09ICdiYXNlJyB8fCBiLnR5cGU/LnRvTG93ZXJDYXNlKCkgPT09ICdiYXNlJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShiLmxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShiLmxuZykpIHtcclxuICAgICAgICAgICAgZGVidWdXYXJuKCdidWlsZGluZ3MnLCBcIuKdjCBCdWlsZGluZyBpZ25vcsOpIChjb29yZCBpbnZhbGlkZSlcIiwgYik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFV0aWxpc2VyIGxhIGZhY3Rpb24gZHUgYsOidGltZW50IChvdSBmYWxsYmFjayBzdXIgbGEgZmFjdGlvbiBkdSBqb3VldXIpXHJcbiAgICAgICAgY29uc3QgYnVpbGRpbmdGYWN0aW9uID0gYi5mYWN0aW9uIHx8IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIENyw6llciBsJ2ljw7RuZSBhdmVjIGwnaW1hZ2UgZHUgYsOidGltZW50XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGNyZWF0ZUJ1aWxkaW5nSWNvbihiLmNvZGUsIGJ1aWxkaW5nRmFjdGlvbik7XHJcblxyXG4gICAgICAgIC8vIFN0b2NrZXIgbGVzIGRvbm7DqWVzIGR1IGJ1aWxkaW5nIHBvdXIgYWNjw6hzIHVsdMOpcmlldXJcclxuICAgICAgICBjb25zdCBidWlsZGluZ0RhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBiLmlkLFxyXG4gICAgICAgICAgICB0eXBlOiBiLnR5cGUsXHJcbiAgICAgICAgICAgIGxldmVsOiBiLmxldmVsLFxyXG4gICAgICAgICAgICBjb2RlOiBiLmNvZGUsXHJcbiAgICAgICAgICAgIGZhY3Rpb246IGJ1aWxkaW5nRmFjdGlvbixcclxuICAgICAgICAgICAgb3duZXJJZDogYi5vd25lcklkLFxyXG4gICAgICAgICAgICBwcm9kdWN0aW9uOiBiLnByb2R1Y3Rpb24gfHwgbnVsbCxcclxuICAgICAgICAgICAgcmVzb3VyY2VfdHlwZTogYi5yZXNvdXJjZV90eXBlIHx8IG51bGwsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQ3LDqWVyIGxlIG1hcmtlciBhdmVjIHBvcHVwIHZpZGUgKGNoYXJnw6kgYXUgbW9tZW50IGRlIGwnb3V2ZXJ0dXJlKVxyXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IEwubWFya2VyKFtiLmxhdCwgYi5sbmddLCB7IGljb24gfSlcclxuICAgICAgICAgICAgLmFkZFRvKG1hcClcclxuICAgICAgICAgICAgLmJpbmRQb3B1cChjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZ0RhdGEpKTtcclxuXHJcbiAgICAgICAgYnVpbGRpbmdNYXJrZXJzLnNldChiLmlkLCB7IG1hcmtlciwgZGF0YTogYnVpbGRpbmdEYXRhIH0pO1xyXG5cclxuICAgICAgICAvLyDDiWNvdXRlciBsJ291dmVydHVyZSBkZSBsYSBwb3B1cCBwb3VyIGNoYXJnZXIgbGUgY29udGVudVxyXG4gICAgICAgIG1hcmtlci5vbigncG9wdXBvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYi5pZCAmJiBpc093bkJ1aWxkaW5nKGJ1aWxkaW5nRGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRVcGdyYWRlSW5mb0FzeW5jKGIuaWQsIG1hcmtlciwgYnVpbGRpbmdEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWw6lyaWZpZSBzaSBsZSBiw6J0aW1lbnQgYXBwYXJ0aWVudCBhdSBqb3VldXIgYWN0aWZcclxuICovXHJcbmZ1bmN0aW9uIGlzT3duQnVpbGRpbmcoYnVpbGRpbmcpIHtcclxuICAgIHJldHVybiBidWlsZGluZy5vd25lcklkID09PSBjdXJyZW50UGxheWVySWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcsOpZSB1biBwb3B1cCBzaW1wbGUgKHN5bmNocm9uZSlcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGluZy1wb3B1cFwiPlxyXG4gICAgICAgICAgICA8aDM+JHtidWlsZGluZy50eXBlIHx8ICdCw6J0aW1lbnQnfTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hhcmdlIGxlcyBpbmZvcyBkJ2Ftw6lsaW9yYXRpb24gZW4gYXJyacOocmUtcGxhblxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbG9hZFVwZ3JhZGVJbmZvQXN5bmMoYnVpbGRpbmdJZCwgbWFya2VyLCBidWlsZGluZ0RhdGEpIHtcclxuICAgIC8vIE5lIHBhcyBjaGFyZ2VyIGxlcyBpbmZvcyBkJ2Ftw6lsaW9yYXRpb24gcG91ciBsZXMgYsOidGltZW50cyBlbm5lbWlzXHJcbiAgICBpZiAoIWlzT3duQnVpbGRpbmcoYnVpbGRpbmdEYXRhKSkge1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYnVpbGRpbmdJZCkge1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIMOJdml0ZXIgZGUgcmVjaGFyZ2VyIHNpIGTDqWrDoCBjaGFyZ8OpXHJcbiAgICBpZiAocG9wdXBDb250ZW50TG9hZGVkLmhhcyhidWlsZGluZ0lkKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBvcHVwQ29udGVudExvYWRlZC5hZGQoYnVpbGRpbmdJZCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBDaGFyZ2VyIGRpcmVjdGVtZW50IGxlIGNvbnRlbnUgZHUgcG9wdXBcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9idWlsZGluZ3MvJHtidWlsZGluZ0lkfS9wb3B1cC1jb250ZW50YCk7XHJcblxyXG4gICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICAgIGRlYnVnV2FybignYnVpbGRpbmdzJywgYEVycmV1ciBBUEkgcG9wdXAtY29udGVudCAoYnVpbGRpbmcgJHtidWlsZGluZ0lkfSk6YCwgcmVzLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXMudGV4dCgpO1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoaHRtbCk7XHJcbiAgICAgICAgYnVpbGRpbmdNYXJrZXJzLnNldChidWlsZGluZ0lkLCB7IG1hcmtlciwgZGF0YTogYnVpbGRpbmdEYXRhIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZHUgcG9wdXBcIiwgZSk7XHJcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZ0RhdGEpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoYXJnZSBsZXMgYsOidGltZW50cyBkZXB1aXMgbCdBUEkgKGZvbmN0aW9uIGRlIGNvbXBhdGliaWxpdMOpKVxyXG4gKiBAZGVwcmVjYXRlZCBVdGlsaXNlciBsb2FkQnVpbGRpbmdzRnJvbURhdGEoZGF0YSkgw6AgbGEgcGxhY2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQnVpbGRpbmdzKCkge1xyXG4gICAgZmV0Y2goJy9hcGkvbWFwLWRhdGEnKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBsb2FkQnVpbGRpbmdzRnJvbURhdGEoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgY2hhcmdlbWVudCBiw6J0aW1lbnRzXCIsIGVycik7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcsOpZSB1bmUgaWPDtG5lIChtYXJrZXIpIHBvdXIgdW4gYsOidGltZW50IGF2ZWMgc29uIGltYWdlIHNww6ljaWZpcXVlLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYnVpbGRpbmdDb2RlIC0gTGUgY29kZSBkdSBiw6J0aW1lbnQgKGV4OiBcImJhc2VcIiwgXCJpcm9uX21pbmVcIikuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmYWN0aW9uIC0gTGEgZmFjdGlvbiBkdSBiw6J0aW1lbnQgKG9wdGlvbm5lbCwgZmFsbGJhY2sgc3VyIGxlIGpvdWV1ciBhY3R1ZWwpLlxyXG4gKiBAcmV0dXJucyB7TC5JY29ufSBMJ2ljw7RuZSBMZWFmbGV0IHBlcnNvbm5hbGlzw6llLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1aWxkaW5nSWNvbihidWlsZGluZ0NvZGUsIGZhY3Rpb24gPSBudWxsKSB7XHJcbiAgICBjb25zdCBhY3R1YWxGYWN0aW9uID0gZmFjdGlvbiB8fCBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xyXG4gICAgY29uc3Qgc2l6ZSA9IDcwOyAvLyBUYWlsbGUgcGFyIGTDqWZhdXQgZGVzIGljw7RuZXNcclxuXHJcbiAgICByZXR1cm4gTC5pY29uKHtcclxuICAgICAgICBpY29uVXJsOiBnZXRCdWlsZGluZ0ltYWdlKGFjdHVhbEZhY3Rpb24sIGJ1aWxkaW5nQ29kZSksXHJcbiAgICAgICAgaWNvblNpemU6IFtzaXplLCBzaXplXSxcclxuICAgICAgICBpY29uQW5jaG9yOiBbc2l6ZSAvIDIsIHNpemUgLyAyXSxcclxuICAgICAgICBwb3B1cEFuY2hvcjogWzAsIC1zaXplIC8gMl1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0b3VybmUgZHluYW1pcXVlbWVudCBsZSBjaGVtaW4gZGUgbCdpbWFnZSBhdmVjIGZhbGxiYWNrIHZlcnMgZGVmYXVsdC5cclxuICogQHBhcmFtIHtzdHJpbmd9IGZhY3Rpb24gLSBMZSBjb2RlIG91IG5vbSBkZSBsYSBmYWN0aW9uIChleDogXCJFbXBpcmVcIiwgXCJDZW5kcmVzXCIpLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYnVpbGRpbmcgLSBMZSBjb2RlIGR1IGLDonRpbWVudCAoZXg6IFwiYmFzZVwiLCBcImlyb25fbWluZVwiKS5cclxuICogQHJldHVybnMge3N0cmluZ30gTGUgY2hlbWluIGRlIGwnaWPDtG5lLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1aWxkaW5nSW1hZ2UoZmFjdGlvbiwgYnVpbGRpbmcpIHtcclxuICAgIC8vIE5vcm1hbGlzZXIgbGUgbm9tIGR1IGJ1aWxkaW5nIHBvdXIgbCdpbWFnZSAocmVtcGxhY2VyIGVzcGFjZXMgZXQgY2FyYWN0w6hyZXMgc3DDqWNpYXV4KVxyXG4gICAgY29uc3QgYnVpbGRpbmdTbHVnID0gYnVpbGRpbmcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICdfJykucmVwbGFjZSgvW15hLXowLTlfXS9nLCAnJyk7XHJcbiAgICBjb25zdCBmYWN0aW9uU2x1ZyA9IChmYWN0aW9uIHx8ICdkZWZhdWx0JykudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAvLyBUb3Vqb3VycyB1dGlsaXNlciBsJ2ljw7RuZSBkZSBsYSBmYWN0aW9uIGVuIHByZW1pZXJcclxuICAgIC8vIExlIHNlcnZldXIgb3UgbGUgbmF2aWdhdGV1ciBnw6lyZXJhIGxlIGZhbGxiYWNrIHNpIGwnaWPDtG5lIG4nZXhpc3RlIHBhc1xyXG4gICAgLy8gU2kgbGEgZmFjdGlvbiBlc3QgJ2RlZmF1bHQnLCB1dGlsaXNlciBsJ2ljw7RuZSBkZWZhdWx0IGRpcmVjdGVtZW50XHJcbiAgICBpZiAoZmFjdGlvblNsdWcgPT09ICdkZWZhdWx0Jykge1xyXG4gICAgICAgIHJldHVybiBgL2Fzc2V0cy9pbWFnZXMvYnVpbGRpbmdzL2RlZmF1bHQvJHtidWlsZGluZ1NsdWd9LnBuZ2A7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAvYXNzZXRzL2ltYWdlcy9idWlsZGluZ3MvJHtmYWN0aW9uU2x1Z30vJHtidWlsZGluZ1NsdWd9LnBuZ2A7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbcOpbGlvcmUgdW4gYsOidGltZW50XHJcbiAqL1xyXG53aW5kb3cudXBncmFkZUJ1aWxkaW5nID0gYXN5bmMgZnVuY3Rpb24oYnVpbGRpbmdJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVwZ3JhZGVCdWlsZGluZyhidWlsZGluZ0lkKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgLy8gSW52YWxpZGVyIGxlIGNhY2hlIHBvdXIgZm9yY2VyIGxlIHJlY2hhcmdlbWVudFxyXG4gICAgICAgICAgICBwb3B1cENvbnRlbnRMb2FkZWQuZGVsZXRlKGJ1aWxkaW5nSWQpO1xyXG5cclxuICAgICAgICAgICAgLy8gTWV0dHJlIMOgIGpvdXIgbGUgbWFycXVldXJcclxuICAgICAgICAgICAgY29uc3QgZW50cnkgPSBidWlsZGluZ01hcmtlcnMuZ2V0KGJ1aWxkaW5nSWQpO1xyXG4gICAgICAgICAgICBpZiAoZW50cnkpIHtcclxuICAgICAgICAgICAgICAgIGVudHJ5LmRhdGEubGV2ZWwgPSBkYXRhLm5ld0xldmVsO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFya2VyID0gZW50cnkubWFya2VyO1xyXG4gICAgICAgICAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChlbnRyeS5kYXRhKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVjaGFyZ2VyIGxlcyBpbmZvcyBkJ2Ftw6lsaW9yYXRpb25cclxuICAgICAgICAgICAgICAgIGxvYWRVcGdyYWRlSW5mb0FzeW5jKGJ1aWxkaW5nSWQsIG1hcmtlciwgZW50cnkuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWxlcnQoJ0LDonRpbWVudCBhbcOpbGlvcsOpIGF2ZWMgc3VjY8OocyAhJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJFcnJldXI6IFwiICsgKGRhdGEuZXJyb3IgfHwgXCJJbXBvc3NpYmxlIGQnYW3DqWxpb3JlciBsZSBiw6J0aW1lbnRcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGRlIGwnYW3DqWxpb3JhdGlvblwiLCBlKTtcclxuICAgICAgICBhbGVydChcIkVycmV1ciByw6lzZWF1IGxvcnMgZGUgbCdhbcOpbGlvcmF0aW9uXCIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldG91cm5lIGxlcyBpbmZvcm1hdGlvbnMgc3VyIGxlcyBjb8O7dHMgZGUgY29uc3RydWN0aW9uIGQndW4gdHlwZSBkZSBiw6J0aW1lbnRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCdWlsZGluZ1R5cGVDb3N0cyhidWlsZGluZ1R5cGVJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJ1aWxkaW5nQ29zdHMoYnVpbGRpbmdUeXBlSWQpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZXMgY2/Du3RzXCIsIGUpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVsOpcmlmaWUgc2kgbGUgam91ZXVyIHBldXQgY29uc3RydWlyZSB1biBiw6J0aW1lbnRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYW5CdWlsZEJ1aWxkaW5nKGJ1aWxkaW5nVHlwZUlkKSB7XHJcbiAgICBjb25zdCBjb3N0cyA9IGF3YWl0IGdldEJ1aWxkaW5nVHlwZUNvc3RzKGJ1aWxkaW5nVHlwZUlkKTtcclxuICAgIGlmICghY29zdHMpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3BsYXllci1yZXNvdXJjZXMnKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgcmVzb3VyY2VzID0ge307XHJcbiAgICBkYXRhLnJlc291cmNlcy5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAgIHJlc291cmNlc1tyLnR5cGVdID0gci5xdWFudGl0eTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAoY29uc3QgW3Jlc291cmNlLCBhbW91bnRdIG9mIE9iamVjdC5lbnRyaWVzKGNvc3RzLmNvc3RzKSkge1xyXG4gICAgICAgIGlmICgocmVzb3VyY2VzW3Jlc291cmNlXSB8fCAwKSA8IGFtb3VudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaEJ1aWxkaW5nUG9wdXAoYnVpbGRpbmdJZCkge1xyXG4gICAgY29uc3QgZW50cnkgPSBidWlsZGluZ01hcmtlcnMuZ2V0KGJ1aWxkaW5nSWQpO1xyXG5cclxuICAgIGlmICghZW50cnkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3B0aW9ubmVsIDogdW5pcXVlbWVudCBzaSBsZSBwb3B1cCBlc3Qgb3V2ZXJ0XHJcbiAgICBpZiAoIWVudHJ5Lm1hcmtlci5pc1BvcHVwT3BlbigpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGxvYWRVcGdyYWRlSW5mb0FzeW5jKFxyXG4gICAgICAgIGJ1aWxkaW5nSWQsXHJcbiAgICAgICAgZW50cnkubWFya2VyLFxyXG4gICAgICAgIGVudHJ5LmRhdGFcclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyBpbml0TWFwLCBsb2FkV29ybGQgfSBmcm9tICcuL21hcC9tYXAuanMnO1xyXG5pbXBvcnQgeyBpbml0R1BTIH0gZnJvbSAnLi91dGlscy9ncHMuanMnO1xyXG5pbXBvcnQgeyBpbml0QmFzZVVJIH0gZnJvbSAnLi9idWlsZGluZ3MvYmFzZS5qcyc7XHJcbmltcG9ydCB7IGluaXRCdWlsZE1vZGUgfSBmcm9tICcuL2J1aWxkaW5ncy9idWlsZE1vZGUuanMnO1xyXG5pbXBvcnQgeyBpbml0Tm90aWZpY2F0aW9ucyB9IGZyb20gJy4vbm90aWZpY2F0aW9ucy5qcyc7XHJcbmltcG9ydCB7IGluaXRCdWlsZGluZ1RpbWVycyB9IGZyb20gJy4vdXRpbHMvdGltZXIuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHJcbiAgICBlbmFibGVMZWFmbGV0RGVidWcoZmFsc2UpO1xyXG5cclxuICAgIGluaXRNYXAoNDYuNTM5NzIsIDIuNDMwMjgpO1xyXG5cclxuICAgIGluaXRCYXNlVUkoKTtcclxuICAgIGluaXRCdWlsZE1vZGUoKTtcclxuICAgIGxvYWRXb3JsZCgpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncGFnZS1nYW1lJyk7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5jdXJyZW50VXNlcikge1xyXG4gICAgICAgIGluaXROb3RpZmljYXRpb25zKCk7XHJcbiAgICAgICAgaW5pdERlbGl2ZXJ5RXZlbnRzKCk7XHJcbiAgICAgICAgaW5pdEludmVudG9yeUV2ZW50cygpO1xyXG4gICAgICAgIGluaXRCdWlsZGluZ1RpbWVycygpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVMZWFmbGV0RGVidWcoZGVidWcgPSBmYWxzZSkge1xyXG5cclxuICAgIGlmICghZGVidWcpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBvcmlnaW5hbE1hcmtlciA9IEwubWFya2VyO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxDaXJjbGUgPSBMLmNpcmNsZTtcclxuICAgIGNvbnN0IG9yaWdpbmFsUG9seWxpbmUgPSBMLnBvbHlsaW5lO1xyXG5cclxuICAgIEwubWFya2VyID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfp6ggTUFSS0VSIENBTEw6XCIsIGFyZ3MpO1xyXG4gICAgICAgIGNvbnNvbGUudHJhY2UoXCJNQVJLRVIgU1RBQ0tcIik7XHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsTWFya2VyLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBMLmNpcmNsZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn6eoIENJUkNMRSBDQUxMOlwiLCBhcmdzKTtcclxuICAgICAgICBjb25zb2xlLnRyYWNlKFwiQ0lSQ0xFIFNUQUNLXCIpO1xyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbENpcmNsZS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgTC5wb2x5bGluZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn6eoIFBPTFlMSU5FIENBTEw6XCIsIGFyZ3MpO1xyXG4gICAgICAgIGNvbnNvbGUudHJhY2UoXCJQT0xZTElORSBTVEFDS1wiKTtcclxuICAgICAgICByZXR1cm4gb3JpZ2luYWxQb2x5bGluZS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG5jb25zdCBkZXBvc2l0TWFya2VycyA9IG5ldyBNYXAoKTtcclxuXHJcbi8vIENhY2hlIGRlcyBwb3B1cHMgZMOpasOgIGNoYXJnw6lzXHJcbmNvbnN0IHBvcHVwQ29udGVudExvYWRlZCA9IG5ldyBTZXQoKTtcclxuXHJcbi8vIENhY2hlIGRlcyB0eXBlcyBkZSByZXNzb3VyY2VzXHJcbmxldCBidWlsZGluZ1R5cGVzQ2FjaGUgPSBudWxsO1xyXG5sZXQgcmVzb3VyY2VUeXBlc0NhY2hlID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBDaGFyZ2UgbGVzIHR5cGVzIGRlIHJlc3NvdXJjZXMgZGVwdWlzIGwnQVBJXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBsb2FkQnVpbGRpbmdUeXBlcygpIHtcclxuICAgIGlmIChidWlsZGluZ1R5cGVzQ2FjaGUpIHJldHVybiBidWlsZGluZ1R5cGVzQ2FjaGU7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2J1aWxkaW5nLXR5cGVzYCk7XHJcbiAgICAgICAgYnVpbGRpbmdUeXBlc0NhY2hlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBidWlsZGluZ1R5cGVzQ2FjaGU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIHR5cGVzIGRlIHJlc3NvdXJjZXNcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkUmVzb3VyY2VUeXBlcygpIHtcclxuICAgIGlmIChyZXNvdXJjZVR5cGVzQ2FjaGUpIHJldHVybiByZXNvdXJjZVR5cGVzQ2FjaGU7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3Jlc291cmNlLXR5cGVzYCk7XHJcbiAgICAgICAgcmVzb3VyY2VUeXBlc0NhY2hlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiByZXNvdXJjZVR5cGVzQ2FjaGU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIHR5cGVzIGRlIHJlc3NvdXJjZXNcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBNYXBwaW5nIGRlcyBjb3VsZXVycyBwYXIgZMOpZmF1dFxyXG5jb25zdCBERUZBVUxUX0NPTE9SUyA9IHtcclxuICAgICdpcm9uJzogJyM3ZjhjOGQnLFxyXG4gICAgJ29pbCc6ICcjZjFjNDBmJyxcclxuICAgICdjb2FsJzogJyMyYzNlNTAnLFxyXG4gICAgJ3J1YmJlcic6ICcjMjdhZTYwJyxcclxuICAgICdiYXV4aXRlJzogJyNlNjdlMjInLFxyXG4gICAgJ3JhcmVfZWFydGgnOiAnIzhlNDRhZCdcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXRvdXJuZSBsYSBjb3VsZXVyIHBvdXIgdW4gdHlwZSBkZSByZXNzb3VyY2UgKHN5bmNocm9uZSAtIHV0aWxpc2UgbGUgY2FjaGUpXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZXNvdXJjZUNvbG9yKHR5cGUpIHtcclxuICAgIGlmIChyZXNvdXJjZVR5cGVzQ2FjaGUpIHJldHVybiAocmVzb3VyY2VUeXBlc0NhY2hlICYmIHJlc291cmNlVHlwZXNDYWNoZVt0eXBlXT8uY29sb3IpIHx8IERFRkFVTFRfQ09MT1JTW3R5cGVdIHx8ICcjZmZmZmZmJztcclxuXHJcbiAgICBsb2FkUmVzb3VyY2VUeXBlcygpO1xyXG5cclxuICAgIHJldHVybiAocmVzb3VyY2VUeXBlc0NhY2hlICYmIHJlc291cmNlVHlwZXNDYWNoZVt0eXBlXT8uY29sb3IpIHx8IERFRkFVTFRfQ09MT1JTW3R5cGVdIHx8ICcjZmZmZmZmJztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyb3V2ZSBsZSB0eXBlIGRlIGLDonRpbWVudCAobWluZSkgcG91ciB1bmUgcmVzc291cmNlIGRvbm7DqWVcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZShyZXNvdXJjZVR5cGUpIHtcclxuICAgIGNvbnN0IGJ1aWxkaW5nVHlwZXMgPSBhd2FpdCBsb2FkQnVpbGRpbmdUeXBlcygpO1xyXG5cclxuICAgIC8vIENoZXJjaGVyIHVuIGLDonRpbWVudCBxdWkgcHJvZHVpdCBjZXR0ZSByZXNzb3VyY2UgKHByb2R1Y3Rpb25fcmF0ZSA+IDApXHJcbiAgICBjb25zdCBidWlsZGluZ1R5cGUgPSBidWlsZGluZ1R5cGVzLmZpbmQoYnQgPT4ge1xyXG4gICAgICAgIHJldHVybiAoYnQucmVzb3VyY2VfdHlwZSA9PT0gcmVzb3VyY2VUeXBlIHx8IGJ0LnJlc291cmNlVHlwZT8uY29kZSA9PT0gcmVzb3VyY2VUeXBlKSAmJiBidC5wcm9kdWN0aW9uX3JhdGUgPiAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJ1aWxkaW5nVHlwZT8uaWQgfHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlcG9zaXRMYXllcnMgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXNlIGxlcyBjb3VjaGVzIGRlIGTDqXDDtHRzIGR5bmFtaXF1ZW1lbnRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0RGVwb3NpdExheWVycyhtYXAsIGNvbnRyb2wpIHtcclxuICAgIGNvbnN0IHJlc291cmNlVHlwZXMgPSBhd2FpdCBsb2FkUmVzb3VyY2VUeXBlcygpO1xyXG5cclxuICAgIC8vIENyw6llciB1bmUgY291Y2hlIHBvdXIgY2hhcXVlIHR5cGUgZGUgcmVzc291cmNlIChzZXVsZW1lbnQgc2kgY29sb3IgZXhpc3RlKVxyXG4gICAgcmVzb3VyY2VUeXBlcy5mb3JFYWNoKHJ0ID0+IHtcclxuICAgICAgICBpZiAocnQuY29sb3IgJiYgcnQuY29sb3IubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBkZXBvc2l0TGF5ZXJzW3J0LmNvZGVdID0gTC5sYXllckdyb3VwKCk7XHJcbiAgICAgICAgICAgIGNvbnRyb2wuYWRkT3ZlcmxheShkZXBvc2l0TGF5ZXJzW3J0LmNvZGVdLCBgUmVzc291cmNlOiAke3J0LmxhYmVsfWApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZERlcG9zaXRzRm9yQ2h1bmsoY2h1bmtJZCwgbWFwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvZGVwb3NpdHMvJHtjaHVua0lkfWApO1xyXG4gICAgICAgIGNvbnN0IGRlcG9zaXRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoZGVwb3NpdHMsIG1hcCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiRXJyZXVyIGNoYXJnZW1lbnQgZMOpcMO0dHM6XCIsIGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb3JtYXRlIGxlcyBjb8O7dHMgc291cyBmb3JtZSBkZSBjaGHDrm5lIGxpc2libGVcclxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvc3RzIC0gRXg6IFt7Y29kZTogXCJpcm9uX2luZ290XCIsIGxhYmVsOiBcIkZlclwiLCBxdWFudGl0eTogMjV9XSBvdSB7aXJvbl9pbmdvdDogMjV9XHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gRXg6IFwiMjUgRmVyLCAxNSBDYW91dGNob3VjXCJcclxuICovXHJcbmZ1bmN0aW9uIGZvcm1hdENvc3RzKGNvc3RzKSB7XHJcbiAgICBpZiAoIWNvc3RzKSByZXR1cm4gJ04vQSc7XHJcblxyXG4gICAgLy8gTm91dmVhdSBmb3JtYXQ6IGFycmF5IGQnb2JqZXRzIGF2ZWMgY29kZSwgbGFiZWwsIHF1YW50aXR5XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb3N0cykpIHtcclxuICAgICAgICByZXR1cm4gY29zdHMubWFwKGMgPT4gYCR7Yy5xdWFudGl0eX0gJHtjLmxhYmVsfWApLmpvaW4oJywgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQW5jaWVuIGZvcm1hdDogb2JqZXQge2NvZGU6IHF1YW50aXR5fVxyXG4gICAgaWYgKHR5cGVvZiBjb3N0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY29zdHMpXHJcbiAgICAgICAgICAgIC5tYXAoKFtyZXNvdXJjZSwgYW1vdW50XSkgPT4gYCR7YW1vdW50fSAke3Jlc291cmNlfWApXHJcbiAgICAgICAgICAgIC5qb2luKCcsICcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnTi9BJztcclxufVxyXG5cclxuLyoqXHJcbiAqIFbDqXJpZmllIHNpIGxlIGpvdWV1ciBhIGFzc2V6IGRlIHJlc3NvdXJjZXMgcG91ciB1biBkw6lww7R0XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBjaGVja0NhbkNsYWltKGRlcG9zaXQpIHtcclxuICAgIGNvbnN0IGNvc3RzID0gZGVwb3NpdC5jb3N0cztcclxuICAgIGlmICghY29zdHMgfHwgT2JqZWN0LmtleXMoY29zdHMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIC8vIFBvdXIgY2hhcXVlIGNvw7t0LCB2w6lyaWZpZXIgc2kgbGUgam91ZXVyIGEgYXNzZXpcclxuICAgIGZvciAoY29uc3QgW3Jlc291cmNlLCBhbW91bnRdIG9mIE9iamVjdC5lbnRyaWVzKGNvc3RzKSkge1xyXG4gICAgICAgIC8vIEljaSBvbiBwb3VycmFpdCBmYWlyZSB1biBhcHBlbCBBUEkgdmVycyAvYXBpL3BsYXllci1yZXNvdXJjZXNcclxuICAgICAgICAvLyBvdSB1dGlsaXNlciBsZXMgZG9ubsOpZXMgZMOpasOgIGNoYXJnw6llc1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcGxheWVyLXJlc291cmNlcycpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyUmVzb3VyY2VzID0ge307XHJcbiAgICAgICAgZGF0YS5yZXNvdXJjZXMuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgcGxheWVyUmVzb3VyY2VzW3IudHlwZV0gPSByLnF1YW50aXR5O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBoYXMgPSBwbGF5ZXJSZXNvdXJjZXNbcmVzb3VyY2VdID8/IDA7XHJcbiAgICAgICAgaWYgKGhhcyA8IGFtb3VudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcsOpZSB1biBwb3B1cCBzaW1wbGUgKHN5bmNocm9uZSlcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVNpbXBsZVBvcHVwKGRlcG9zaXQpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRlcG9zaXQtcG9wdXBcIj5cclxuICAgICAgICAgICAgPGgzPiR7ZGVwb3NpdC50eXBlIHx8ICdEw6lww7R0IGRlIHJlc291cmNlJ308L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoYXJnZSBsZXMgaW5mb3MgZGVzIGTDqXDDtHRzIGVuIGFycmnDqHJlLXBsYW5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWREZXBvc2l0SW5mb0FzeW5jKGRlcG9zaXRzSUQsIG1hcmtlciwgZGVwb3NpdERhdGEpIHtcclxuICAgIC8vIMOJdml0ZXIgZGUgcmVjaGFyZ2VyIHNpIGTDqWrDoCBjaGFyZ8OpXHJcbiAgICBpZiAocG9wdXBDb250ZW50TG9hZGVkLmhhcyhkZXBvc2l0c0lEKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBvcHVwQ29udGVudExvYWRlZC5hZGQoZGVwb3NpdHNJRCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBDaGFyZ2VyIGRpcmVjdGVtZW50IGxlIGNvbnRlbnUgZHUgcG9wdXBcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9kZXBvc2l0LyR7ZGVwb3NpdHNJRH0vcG9wdXAtY29udGVudGApO1xyXG5cclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICBkZWJ1Z1dhcm4oJ2RlcG9zaXRzJywgYEVycmV1ciBBUEkgcG9wdXAtY29udGVudCAoZGVwb3NpdCAke2RlcG9zaXRzSUR9KTpgLCByZXMuc3RhdHVzKTtcclxuICAgICAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChkZXBvc2l0RGF0YSkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVzLnRleHQoKTtcclxuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGh0bWwpO1xyXG4gICAgICAgIGRlcG9zaXRNYXJrZXJzLnNldChkZXBvc2l0c0lELCB7IG1hcmtlciwgZGF0YTogZGVwb3NpdERhdGEgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGR1IHBvcHVwXCIsIGUpO1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoZGVwb3NpdERhdGEpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbmR1IGRlcyBkw6lww7R0cyBzdXIgbGEgY2FydGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGRlcG9zaXRzLCBtYXApIHtcclxuICAgIGRlcG9zaXRzLmZvckVhY2goZGVwb3NpdCA9PiB7XHJcbiAgICAgICAgaWYgKGRlcG9zaXRNYXJrZXJzLmhhcyhkZXBvc2l0LmlkKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB0eXBlID0gZGVwb3NpdC5yZXNvdXJjZV90eXBlO1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gZGVwb3NpdExheWVyc1t0eXBlXTtcclxuXHJcbiAgICAgICAgaWYgKCFsYXllcikge1xyXG4gICAgICAgICAgICBkZWJ1Z1dhcm4oJ2RlcG9zaXRzJywgYFBhcyBkZSBsYXllciBwb3VyIGxlIHR5cGU6ICR7dHlwZX1gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBnZXRSZXNvdXJjZUNvbG9yKHR5cGUpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXJrZXIgPSBMLmNpcmNsZU1hcmtlcihbZGVwb3NpdC5sYXRpdHVkZSwgZGVwb3NpdC5sb25naXR1ZGVdLCB7XHJcbiAgICAgICAgICAgIHJhZGl1czogOCxcclxuICAgICAgICAgICAgZmlsbENvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICAgICAgICB3ZWlnaHQ6IDEsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjhcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hZGRUbyhsYXllcilcclxuICAgICAgICAuYmluZFBvcHVwKGNyZWF0ZVNpbXBsZVBvcHVwKGRlcG9zaXQpKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhcmdlciBsZSBjb250ZW51IGRlIGxhIHBvcHVwIHVuaXF1ZW1lbnQgcXVhbmQgZWxsZSBlc3Qgb3V2ZXJ0ZVxyXG4gICAgICAgIGlmIChkZXBvc2l0LmlkKSB7XHJcbiAgICAgICAgICAgIG1hcmtlci5vbigncG9wdXBvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9hZERlcG9zaXRJbmZvQXN5bmMoZGVwb3NpdC5pZCwgbWFya2VyLCBkZXBvc2l0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQZXJtZXQgZCdleHBsb2l0ZXIgdW4gZMOpcMO0dCBkZXB1aXMgbGEgcG9wdXBcclxuICovXHJcbndpbmRvdy5jbGFpbURlcG9zaXQgPSBhc3luYyBmdW5jdGlvbihpZCwgcmVzb3VyY2VUeXBlKSB7XHJcbiAgICAvLyBUcm91dmVyIGxlIHR5cGUgZGUgYsOidGltZW50IGFwcHJvcHJpw6lcclxuICAgIGNvbnN0IGJ1aWxkaW5nVHlwZUlkID0gYXdhaXQgZmluZEJ1aWxkaW5nVHlwZUZvclJlc291cmNlKHJlc291cmNlVHlwZSk7XHJcblxyXG4gICAgaWYgKCFidWlsZGluZ1R5cGVJZCkge1xyXG4gICAgICAgIHJldHVybiBhbGVydChgSW1wb3NzaWJsZSBkZSB0cm91dmVyIHVuIGLDonRpbWVudCBwb3VyIGV4dHJhaXJlIGxlICR7cmVzb3VyY2VUeXBlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnN0cnVpcmUgZGlyZWN0ZW1lbnQgbGUgYsOidGltZW50IHN1ciBsZXMgY29vcmRvbm7DqWVzIGR1IGTDqXDDtHRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9idWlsZCcsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBsYXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsbmc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0eXBlX2lkOiBidWlsZGluZ1R5cGVJZCxcclxuICAgICAgICAgICAgICAgIGRlcG9zaXRfaWQ6IGlkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICBsZXQgZGF0YTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKHBhcnNlRXJyb3IpIHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIlLDqXBvbnNlIG5vbi1KU09OIHJlw6d1ZTpcIiwgcmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUsOpcG9uc2UgaW52YWxpZGUgZHUgc2VydmV1clwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZygnZGVwb3NpdHMnLCAnRMOpcMO0dCBleHBsb2l0w6kgYXZlYyBzdWNjw6hzICEgQsOidGltZW50IGNyw6nDqS4nKTtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1cjogXCIgKyAoZGF0YS5lcnJvciB8fCBcIkltcG9zc2libGUgZCdleHBsb2l0ZXIgY2UgZMOpcMO0dFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJFcnJldXIgbG9ycyBkZSBsJ2V4cGxvaXRhdGlvblwiLCBlKTtcclxuICAgICAgICBhbGVydChcIkVycmV1ciByw6lzZWF1IGxvcnMgZGUgbCdleHBsb2l0YXRpb246IFwiICsgZS5tZXNzYWdlKTtcclxuICAgIH1cclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuXHJcbmltcG9ydCB7IGdyaWRMYXllciwgaW5pdEdyaWRMYXllciB9IGZyb20gJy4uL0xheWVycy9ncmlkTGF5ZXIuanMnO1xyXG5pbXBvcnQgeyBsb2FkVmlzaWJsZVJvYWRDaHVua3MgfSBmcm9tICcuL3JvYWRzL3JvYWRzLmpzJztcclxuaW1wb3J0IHsgcm9hZHNTdGF0ZSB9IGZyb20gJy4vcm9hZHMvcm9hZHNTdGF0ZS5qcyc7XHJcblxyXG5pbXBvcnQgeyBsb2FkQmFzZUZyb21TZXJ2ZXIsIGxvYWRPdGhlckJhc2UsIHNldEN1cnJlbnRQbGF5ZXJGYWN0aW9uIH0gZnJvbSAnLi4vYnVpbGRpbmdzL2Jhc2UuanMnO1xyXG5pbXBvcnQgeyBsb2FkQnVpbGRpbmdzRnJvbURhdGEsIHNldEN1cnJlbnRQbGF5ZXJJZCB9IGZyb20gJy4uL2J1aWxkaW5ncy9idWlsZGluZy5qcyc7XHJcblxyXG5pbXBvcnQgeyBpbml0RGVwb3NpdExheWVycywgZGVwb3NpdExheWVycyB9IGZyb20gJy4vZGVwb3NpdHMvZGVwb3NpdHMuanMnO1xyXG5cclxuaW1wb3J0IG1hcmtlckljb24gZnJvbSAnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi5wbmcnO1xyXG5pbXBvcnQgbWFya2VyU2hhZG93IGZyb20gJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5cclxuTC5NYXJrZXIucHJvdG90eXBlLm9wdGlvbnMuaWNvbiA9IEwuaWNvbih7XHJcbiAgICBpY29uVXJsOiBtYXJrZXJJY29uLFxyXG4gICAgc2hhZG93VXJsOiBtYXJrZXJTaGFkb3csXHJcbn0pO1xyXG5cclxubGV0IG1hcEluc3RhbmNlID0gbnVsbDtcclxubGV0IG1vdmVUaW1lb3V0ID0gbnVsbDtcclxubGV0IGlzQ2h1bmtNb2RlID0gZmFsc2U7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1hcChsYXQsIGxuZykge1xyXG5cclxuICAgIG1hcEluc3RhbmNlID0gTC5tYXAoJ21hcCcpLnNldFZpZXcoW2xhdCwgbG5nXSwgNyk7XHJcblxyXG4gICAgTC50aWxlTGF5ZXIoJ2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJywge1xyXG4gICAgICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IE9wZW5TdHJlZXRNYXAnXHJcbiAgICB9KS5hZGRUbyhtYXBJbnN0YW5jZSk7XHJcblxyXG4gICAgLy8gw4l2w6luZW1lbnQgcGVyc29ubmFsaXPDqSBwb3VyIHNpZ25hbGVyIHF1ZSBsYSBjYXJ0ZSBlc3QgcHLDqnRlXHJcbiAgICBtYXBJbnN0YW5jZS5maXJlKCdtYXBSZWFkeScpO1xyXG5cclxuICAgIGNvbnN0IGxheWVyc0NvbnRyb2wgPSBMLmNvbnRyb2wubGF5ZXJzKG51bGwsIHtcclxuICAgICAgICBcIkNodW5rIEdyaWRcIjogZ3JpZExheWVyXHJcbiAgICB9KS5hZGRUbyhtYXBJbnN0YW5jZSk7XHJcblxyXG4gICAgaW5pdERlcG9zaXRMYXllcnMobWFwSW5zdGFuY2UsIGxheWVyc0NvbnRyb2wpO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQ0VOVFJBTCBDSFVOSyBDT05UUk9MTEVSXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBtYXBJbnN0YW5jZS5vbignbW92ZWVuZCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFpc0NodW5rTW9kZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChtYXBJbnN0YW5jZS5nZXRab29tKCkgPCAxNCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQobW92ZVRpbWVvdXQpO1xyXG5cclxuICAgICAgICBtb3ZlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpbml0R3JpZExheWVyKCk7XHJcbiAgICAgICAgICAgIGxvYWRWaXNpYmxlUm9hZENodW5rcygpO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXBJbnN0YW5jZS5vbignb3ZlcmxheWFkZCcsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUubGF5ZXIgPT09IGdyaWRMYXllcikge1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZyhcImdyaWRcIiwgXCJHcmlkIE9OXCIpO1xyXG5cclxuICAgICAgICAgICAgaW5pdEdyaWRMYXllcigpO1xyXG4gICAgICAgICAgICBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXBJbnN0YW5jZS5vbignb3ZlcmxheXJlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUubGF5ZXIgPT09IGdyaWRMYXllcikge1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZyhcImdyaWRcIiwgXCJHcmlkIE9GRlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEVWRU5UU1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBtYXBJbnN0YW5jZS5vbignem9vbWVuZCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3Qgem9vbSA9IG1hcEluc3RhbmNlLmdldFpvb20oKTtcclxuXHJcbiAgICAgICAgaWYgKHpvb20gPj0gMTQpIHtcclxuICAgICAgICAgICAgZW50ZXJDaHVua01vZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBleGl0Q2h1bmtNb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0dyaWRMYXllckFjdGl2ZSgpIHtcclxuICAgIHJldHVybiBtYXBJbnN0YW5jZT8uaGFzTGF5ZXIoZ3JpZExheWVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcCgpIHtcclxuICAgIHJldHVybiBtYXBJbnN0YW5jZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZseVRvKGxhdCwgbG5nLCB6b29tID0gMTMpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgbWFwLmZseVRvKFtsYXQsIGxuZ10sIHpvb20sIHtcclxuICAgICAgICBhbmltYXRlOiB0cnVlLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxLjVcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cclxuLy8gV09STEQgTE9BREVSIChDb25jZW50cmF0ZXVyIGQnYXBwZWxzIEFQSSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkV29ybGQoKSB7XHJcblxyXG4gICAgZmV0Y2goJy9hcGkvd29ybGQtc3RhdGUnKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgJHtyZXMuc3RhdHVzfTogJHtyZXMuc3RhdHVzVGV4dH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAvLyBWw6lyaWZpZXIgc2kgbGEgcsOpcG9uc2UgZXN0IHZhbGlkZVxyXG4gICAgICAgICAgICBpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVzcG9uc2UgZm9ybWF0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENoYXJnZXIgbGVzIGJhc2VzIHZpYSBiYXNlLmpzIEQnQUJPUkQgcG91ciBjb25uYcOudHJlIGxhIGZhY3Rpb24gZHUgam91ZXVyXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnBsYXllcnMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBoYXNDZW50ZXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGEucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyBwbGF5ZXI6XCIsIHBsYXllci5wc2V1ZG8sIFwiRmFjdGlvbjpcIiwgcGxheWVyLmZhY3Rpb24sIFwiSXNNZTpcIiwgcGxheWVyLmlzTWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLmlzTWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBsYXllckZhY3Rpb24ocGxheWVyLmZhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkQmFzZUZyb21TZXJ2ZXIocGxheWVyLmxhdCwgcGxheWVyLmxuZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciBmYWN0aW9uIHNldCB0bzpcIiwgcGxheWVyLmZhY3Rpb24gLCBcIlBsYXllciBiYXNlIGxvYWRlZCBhdDpcIiwgcGxheWVyLmxhdCwgcGxheWVyLmxuZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0NlbnRlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHlUbyhwbGF5ZXIubGF0LCBwbGF5ZXIubG5nLCAxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDZW50ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRPdGhlckJhc2UocGxheWVyLmxhdCwgcGxheWVyLmxuZywgcGxheWVyLnBzZXVkbywgcGxheWVyLmZhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIETDqWZpbmlyIGwnSUQgZHUgam91ZXVyIGFjdGlmXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmN1cnJlbnRQbGF5ZXJJZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFBsYXllcklkKGRhdGEuY3VycmVudFBsYXllcklkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2hhcmdlciBsZXMgYsOidGltZW50cyBhcHLDqHMgYXZvaXIgZMOpZmluaSBsYSBmYWN0aW9uIGR1IGpvdWV1clxyXG4gICAgICAgICAgICBsb2FkQnVpbGRpbmdzRnJvbURhdGEoZGF0YS5idWlsZGluZ3MpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoJ21hcCcsIFwiRXJyZXVyIGxvYWQgd29ybGRcIiwgZXJyKTtcclxuICAgICAgICAgICAgLy8gTmUgcGFzIHJlZGlyaWdlciBhdXRvbWF0aXF1ZW1lbnQsIGxhaXNzZXogbGUgc3lzdMOobWUgZGUgbG9naW4gZ8OpcmVyIGxhIHJlZGlyZWN0aW9uXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVudGVyQ2h1bmtNb2RlKCkge1xyXG4gICAgaWYgKGlzQ2h1bmtNb2RlKSByZXR1cm47XHJcblxyXG4gICAgaXNDaHVua01vZGUgPSB0cnVlO1xyXG5cclxuICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwiRU5URVIgQ0hVTksgTU9ERVwiKTtcclxuXHJcbiAgICBpbml0R3JpZExheWVyKCk7XHJcbiAgICBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXhpdENodW5rTW9kZSgpIHtcclxuICAgIGlmICghaXNDaHVua01vZGUpIHJldHVybjtcclxuXHJcbiAgICBpc0NodW5rTW9kZSA9IGZhbHNlO1xyXG5cclxuICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwiRVhJVCBDSFVOSyBNT0RFXCIpO1xyXG5cclxuICAgIGlmIChtYXBJbnN0YW5jZS5oYXNMYXllcihncmlkTGF5ZXIpKSB7XHJcbiAgICAgICAgbWFwSW5zdGFuY2UucmVtb3ZlTGF5ZXIoZ3JpZExheWVyKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHJvYWRzU3RhdGUgfSBmcm9tICcuL3JvYWRzU3RhdGUuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkYXRlQ2h1bmsoaWQpIHtcclxuICAgIGRlYnVnTG9nKFwiY2FjaGVcIiwgXCLwn6e5IGludmFsaWRhdGUgY2h1bms6XCIsIGlkKTtcclxuICAgIFxyXG4gICAgZGVsZXRlIHJvYWRzU3RhdGUuY2h1bmtzW2lkXTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBjaHVua18ke2lkfWApO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAuanMnO1xyXG5cclxuLyoqXHJcbiAqIFRyb3V2ZSBsZSBwb2ludCBsZSBwbHVzIHByb2NoZSBzdXIgdG91dGVzIGxlcyByb3V0ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ2xvc2VzdFBvaW50T25Sb2FkKGxhdGxuZywgcm9hZHMpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGxldCBiZXN0UG9pbnQgPSBudWxsO1xyXG4gICAgbGV0IGJlc3REaXN0YW5jZSA9IEluZmluaXR5O1xyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkcykpIHJldHVybiB7IHBvaW50OiBudWxsLCBkaXN0YW5jZTogSW5maW5pdHkgfTtcclxuXHJcbiAgICByb2Fkcy5mb3JFYWNoKHJvYWQgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZC5wb2ludHMpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHJvYWQucG9pbnRzLmxlbmd0aCA8IDIpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2FkLnBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFSYXcgPSByb2FkLnBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgYlJhdyA9IHJvYWQucG9pbnRzW2kgKyAxXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYVJhdyB8fCAhYlJhdykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiQlJPS0VOIFJPQUQgU0VHTUVOVDpcIiwgcm9hZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhUmF3Lmxlbmd0aCA8IDIgfHwgYlJhdy5sZW5ndGggPCAyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBMLmxhdExuZyhhUmF3WzBdLCBhUmF3WzFdKTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IEwubGF0TG5nKGJSYXdbMF0sIGJSYXdbMV0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdGVkID0gcHJvamVjdFBvaW50T25TZWdtZW50KGxhdGxuZywgYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBtYXAuZGlzdGFuY2UobGF0bG5nLCBwcm9qZWN0ZWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3QgPCBiZXN0RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0YW5jZSA9IGRpc3Q7XHJcbiAgICAgICAgICAgICAgICBiZXN0UG9pbnQgPSBwcm9qZWN0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBvaW50OiBiZXN0UG9pbnQsXHJcbiAgICAgICAgZGlzdGFuY2U6IGJlc3REaXN0YW5jZVxyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyb3V2ZSBsZSBzZWdtZW50IGxlIHBsdXMgcHJvY2hlIChwb3VyIGhpZ2hsaWdodCB2aXN1ZWwpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZENsb3Nlc3RTZWdtZW50KGxhdGxuZywgcm9hZHMpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGxldCBiZXN0U2VnbWVudCA9IG51bGw7XHJcbiAgICBsZXQgYmVzdERpc3RhbmNlID0gSW5maW5pdHk7XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWRzKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcm9hZHMuZm9yRWFjaChyb2FkID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWQucG9pbnRzKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvYWQucG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYVJhdyA9IHJvYWQucG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiUmF3ID0gcm9hZC5wb2ludHNbaSArIDFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFhUmF3IHx8ICFiUmF3KSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKGFSYXcubGVuZ3RoIDwgMiB8fCBiUmF3Lmxlbmd0aCA8IDIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYSA9IEwubGF0TG5nKGFSYXdbMF0sIGFSYXdbMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gTC5sYXRMbmcoYlJhd1swXSwgYlJhd1sxXSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtaWQgPSBMLmxhdExuZyhcclxuICAgICAgICAgICAgICAgIChhLmxhdCArIGIubGF0KSAvIDIsXHJcbiAgICAgICAgICAgICAgICAoYS5sbmcgKyBiLmxuZykgLyAyXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gbWFwLmRpc3RhbmNlKGxhdGxuZywgbWlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0IDwgYmVzdERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0RGlzdGFuY2UgPSBkaXN0O1xyXG4gICAgICAgICAgICAgICAgYmVzdFNlZ21lbnQgPSBbYSwgYl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYmVzdFNlZ21lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9qZWN0aW9uIGQndW4gcG9pbnQgc3VyIHVuIHNlZ21lbnQgKEEtQilcclxuICogbWF0aCBzdGFibGUgcG91ciBzbmFwIHJvdXRlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RQb2ludE9uU2VnbWVudChwLCBhLCBiKSB7XHJcblxyXG4gICAgY29uc3QgQSA9IFthLmxhdCwgYS5sbmddO1xyXG4gICAgY29uc3QgQiA9IFtiLmxhdCwgYi5sbmddO1xyXG4gICAgY29uc3QgUCA9IFtwLmxhdCwgcC5sbmddO1xyXG5cclxuICAgIGNvbnN0IEFCID0gW0JbMF0gLSBBWzBdLCBCWzFdIC0gQVsxXV07XHJcbiAgICBjb25zdCBBUCA9IFtQWzBdIC0gQVswXSwgUFsxXSAtIEFbMV1dO1xyXG5cclxuICAgIGNvbnN0IGFiMiA9IEFCWzBdICogQUJbMF0gKyBBQlsxXSAqIEFCWzFdO1xyXG5cclxuICAgIGlmIChhYjIgPT09IDApIHJldHVybiBhO1xyXG5cclxuICAgIGxldCB0ID0gKEFQWzBdICogQUJbMF0gKyBBUFsxXSAqIEFCWzFdKSAvIGFiMjtcclxuXHJcbiAgICB0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdCkpO1xyXG5cclxuICAgIHJldHVybiBMLmxhdExuZyhcclxuICAgICAgICBBWzBdICsgQUJbMF0gKiB0LFxyXG4gICAgICAgIEFbMV0gKyBBQlsxXSAqIHRcclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXN0YW5jZSBwb2ludCAtPiBzZWdtZW50ICh1dGlsZSB2YWxpZGF0aW9uIGZ1dHVyZSlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZVRvU2VnbWVudChwLCBhLCBiKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0ZWQgPSBwcm9qZWN0UG9pbnRPblNlZ21lbnQocCwgYSwgYik7XHJcbiAgICByZXR1cm4gbWFwLmRpc3RhbmNlKHAsIHByb2plY3RlZCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBzaW1wbGUgZGVidWcgcm9hZHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z1JvYWRzKHJvYWRzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlJPQURTIERFQlVHOlwiLCByb2Fkcy5sZW5ndGgsIHJvYWRzKTtcclxufSIsImltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC5qcyc7XHJcbmltcG9ydCB7IENIVU5LX1NJWkUgfSBmcm9tICcuLi8uLi91dGlscy9jaHVuay5qcyc7XHJcbmltcG9ydCB7IHNldENodW5rQ29sb3IgfSBmcm9tICcuLi8uLi9MYXllcnMvZ3JpZExheWVyLmpzJztcclxuaW1wb3J0IHsgaW52YWxpZGF0ZUNodW5rIH0gZnJvbSAnLi9pbnZhbGlkYXRlQ2h1bmsuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5pbXBvcnQgeyByb2Fkc1N0YXRlIH0gZnJvbSAnLi9yb2Fkc1N0YXRlLmpzJztcclxuaW1wb3J0IHsgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YSB9IGZyb20gJy4uL2RlcG9zaXRzL2RlcG9zaXRzLmpzJztcclxuaW1wb3J0IHsgZ2V0Q2FjaGVLZXkgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jYWNoZVV0aWxzLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExPQUQgQ09OVFJPTFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBsb2FkaW5nUXVldWUgPSBuZXcgU2V0KCk7XHJcbmNvbnN0IE1BWF9DT05DVVJSRU5UID0gNDtcclxubGV0IGFjdGl2ZVJlcXVlc3RzID0gMDtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENIVU5LIElEXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGdldENodW5rSWQobGF0LCBsbmcpIHtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGxhdCAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IobG5nIC8gQ0hVTktfU0laRSk7XHJcbiAgICByZXR1cm4gYCR7eH1fJHt5fWA7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIE1BSU4gTE9BRCBWSVNJQkxFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFtYXAgfHwgbWFwLmdldFpvb20oKSA8IDE0KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgYm91bmRzID0gbWFwLmdldEJvdW5kcygpO1xyXG5cclxuICAgIGNvbnN0IHZpc2libGVDaHVua3MgPSBnZXRWaXNpYmxlQ2h1bmtzKGJvdW5kcyk7XHJcblxyXG4gICAgY29uc3QgY2h1bmtzVG9Mb2FkID0gdmlzaWJsZUNodW5rcy5maWx0ZXIoXHJcbiAgICAgICAgY2h1bmtJZCA9PiAhcm9hZHNTdGF0ZS5sb2FkZWRDaHVua3MuaGFzKGNodW5rSWQpXHJcbiAgICApO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBWRVJJRklDQVRJT04gQ0FDSEUgTE9DQUxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBmaW5hbENodW5rc1RvTG9hZCA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBjaHVua3NUb0xvYWQpIHtcclxuICAgICAgICBjb25zdCBjYWNoZUtleSA9IGdldENhY2hlS2V5KGNodW5rSWQpO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNhY2hlS2V5KTtcclxuICAgICAgICBpZiAoY2FjaGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGNhY2hlZCk7XHJcbiAgICAgICAgICAgIC8vIFbDqXJpZmllciBzaSBsZSBjYWNoZSBlc3QgdmlldXggKGV4OiBwbHVzIGRlIDFoKVxyXG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIGRhdGEudHMgPCAzNjAwMDAwKSB7IFxyXG4gICAgICAgICAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBkYXRhLmhhc1JvYWRzID8gJ2xvYWRlZCcgOiAnZW1wdHknLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvYWRzOiBkYXRhLnJvYWRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogZGF0YS5idWlsZGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwb3NpdHM6IGRhdGEuZGVwb3NpdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzUm9hZHM6IGRhdGEuaGFzUm9hZHNcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5hZGQoY2h1bmtJZCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsIGRhdGEuaGFzUm9hZHMgPyAnYmx1ZScgOiAnIzQ0NCcpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShkYXRhLmRlcG9zaXRzIHx8IFtdLCBtYXApO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxDaHVua3NUb0xvYWQucHVzaChjaHVua0lkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gRVRBVCBMT0FESU5HXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBmaW5hbENodW5rc1RvTG9hZCkge1xyXG5cclxuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGluZycsXHJcbiAgICAgICAgICAgIHJvYWRzOiBbXSxcclxuICAgICAgICAgICAgYnVpbGRpbmdzOiBbXSxcclxuICAgICAgICAgICAgZGVwb3NpdHM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnb3JhbmdlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmllbiDDoCBjaGFyZ2VyXHJcbiAgICBpZiAoZmluYWxDaHVua3NUb0xvYWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmVmcmVzaENodW5rQ29sb3JzKHZpc2libGVDaHVua3MpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCBbcm9hZHNSZXNwb25zZSwgYnVpbGRpbmdzUmVzcG9uc2UsIGRlcG9zaXRzUmVzcG9uc2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9jaHVua3MvYnVsaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogZmluYWxDaHVua3NUb0xvYWQgfSlcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2J1aWxkaW5ncy92aXNpYmxlJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2h1bmtzOiBmaW5hbENodW5rc1RvTG9hZCB9KVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvZGVwb3NpdHMvYnVsaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogZmluYWxDaHVua3NUb0xvYWQgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgaWYgKCFyb2Fkc1Jlc3BvbnNlLm9rIHx8ICFidWlsZGluZ3NSZXNwb25zZS5vayB8fCAhZGVwb3NpdHNSZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiQVBJIGVycm9yXCIpO1xyXG5cclxuICAgICAgICBjb25zdCByb2Fkc0RhdGEgPSBhd2FpdCByb2Fkc1Jlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBidWlsZGluZ3NEYXRhID0gYXdhaXQgYnVpbGRpbmdzUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGRlcG9zaXRzRGF0YSA9IGF3YWl0IGRlcG9zaXRzUmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAvLyBDcsOpZXIgdW4gaW5kZXggcG91ciBtYXBwZXIgbGVzIGLDonRpbWVudHMgcGFyIGNodW5rSWQgcmFwaWRlbWVudFxyXG4gICAgICAgIGNvbnN0IGJ1aWxkaW5nc0J5Q2h1bmsgPSB7fTtcclxuICAgICAgICBidWlsZGluZ3NEYXRhLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNJZCA9IE1hdGguZmxvb3IoYi5sYXQgKiAxMDApICsgJ18nICsgTWF0aC5mbG9vcihiLmxuZyAqIDEwMCk7XHJcbiAgICAgICAgICAgIGlmICghYnVpbGRpbmdzQnlDaHVua1tjSWRdKSBidWlsZGluZ3NCeUNodW5rW2NJZF0gPSBbXTtcclxuICAgICAgICAgICAgYnVpbGRpbmdzQnlDaHVua1tjSWRdLnB1c2goYik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gVFJBSVRFTUVOVCBDSFVOS1NcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgZmluYWxDaHVua3NUb0xvYWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2h1bmtEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgcm9hZHM6IHJvYWRzRGF0YVtjaHVua0lkXT8ucm9hZHMgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6IGJ1aWxkaW5nc0RhdGFbY2h1bmtJZF0/LmJ1aWxkaW5ncyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGRlcG9zaXRzOiBkZXBvc2l0c0RhdGFbY2h1bmtJZF0gfHwgW11cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhhc1JvYWRzID0gY2h1bmtEYXRhLnJvYWRzICYmIGNodW5rRGF0YS5yb2Fkcy5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGhhc1JvYWRzID8gJ2xvYWRlZCcgOiAnZW1wdHknLFxyXG4gICAgICAgICAgICAgICAgcm9hZHM6IGNodW5rRGF0YS5yb2FkcyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogY2h1bmtEYXRhLmJ1aWxkaW5ncyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGRlcG9zaXRzOiBjaHVua0RhdGEuZGVwb3NpdHMgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBoYXNSb2Fkc1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcm9hZHNTdGF0ZS5sb2FkZWRDaHVua3MuYWRkKGNodW5rSWQpO1xyXG5cclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gQ0FDSEVcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBnZXRDYWNoZUtleShjaHVua0lkKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICAgIGNhY2hlS2V5LFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICByb2FkczogY2h1bmtEYXRhLnJvYWRzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBjaHVua0RhdGEuYnVpbGRpbmdzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVwb3NpdHM6IGNodW5rRGF0YS5kZXBvc2l0cyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGhhc1JvYWRzLFxyXG4gICAgICAgICAgICAgICAgdHM6IERhdGUubm93KClcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gRFJBVyBST0FEU1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgICAgLy8gY2h1bmtEYXRhLnJvYWRzLmZvckVhY2gocm9hZCA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBkcmF3Um9hZChyb2FkKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBEUkFXIEJVSUxESU5HU1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBjaHVua0RhdGEuYnVpbGRpbmdzLmZvckVhY2goYnVpbGRpbmcgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgZHJhd0J1aWxkaW5nKGJ1aWxkaW5nKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBDT1VMRVVSIENIVU5LXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIHNldENodW5rQ29sb3IoXHJcbiAgICAgICAgICAgICAgICBjaHVua0lkLFxyXG4gICAgICAgICAgICAgICAgaGFzUm9hZHMgPyAnYmx1ZScgOiAnIzQ0NCdcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoY2h1bmtEYXRhLmRlcG9zaXRzLCBtYXApO1xyXG5cclxuICAgICAgICAgICAgZGVidWdMb2coXCJyb2Fkc1wiLCBgQ2h1bmsgJHtjaHVua0lkfSBsb2FkZWQgKCR7Y2h1bmtEYXRhLnJvYWRzLmxlbmd0aH0gcm9hZHMsICR7Y2h1bmtEYXRhLmJ1aWxkaW5ncy5sZW5ndGh9IGJ1aWxkaW5ncywgJHtjaHVua0RhdGEuZGVwb3NpdHMubGVuZ3RofSBkZXBvc2l0cylgKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICBkZWJ1Z0Vycm9yKFwicm9hZHNcIiwgXCJFcnJldXIgY2hhcmdlbWVudCBjaHVua3MgYnVsazpcIiwgZXJyb3IpO1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIEVUQVQgRVJSRVVSXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjaHVua0lkIG9mIGZpbmFsQ2h1bmtzVG9Mb2FkKSB7XHJcbiAgICAgICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuXHJcbiAgICAgICAgICAgICAgICByb2FkczogW10sXHJcblxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBbXSxcclxuICAgICAgICAgICAgICAgIGRlcG9zaXRzOiBbXVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAncmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUZSRVNIIFZJU1VFTCBGSU5BTFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICByZWZyZXNoQ2h1bmtDb2xvcnModmlzaWJsZUNodW5rcyk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJFRlJFU0ggQ0hVTksgQ09MT1JTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHJlZnJlc2hDaHVua0NvbG9ycyh2aXNpYmxlQ2h1bmtzKSB7XHJcblxyXG4gICAgZm9yIChjb25zdCBjaHVua0lkIG9mIHZpc2libGVDaHVua3MpIHtcclxuXHJcbiAgICAgICAgY29uc3QgY2h1bmsgPSByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXTtcclxuICAgICAgICBpZiAoIWNodW5rKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGNodW5rLnN0YXR1cykge1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbG9hZGVkJzpcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdibHVlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdlbXB0eSc6XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnIzQ0NCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbG9hZGluZyc6XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnb3JhbmdlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAncmVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ3llbGxvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUkVGUkVTSCBDSFVOS1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaENodW5rKGxhdCwgbG5nKSB7XHJcbiAgICBjb25zdCBjaHVua0lkID0gZ2V0Q2h1bmtJZChsYXQsIGxuZyk7XHJcblxyXG4gICAgaW52YWxpZGF0ZUNodW5rKGNodW5rSWQpO1xyXG5cclxuICAgIHJvYWRzU3RhdGUubG9hZGVkQ2h1bmtzLmRlbGV0ZShjaHVua0lkKTtcclxuXHJcbiAgICBhd2FpdCBmZXRjaFNpbmdsZUNodW5rKGNodW5rSWQpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGRVRDSCBTSU5HTEUgQ0hVTktcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hTaW5nbGVDaHVuayhjaHVua0lkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG4gICAgICAgICAgICBzdGF0dXM6ICdsb2FkaW5nJyxcclxuICAgICAgICAgICAgcm9hZHM6IFtdLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IFtdLFxyXG4gICAgICAgICAgICBkZXBvc2l0czogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTtcclxuXHJcbiAgICAgICAgY29uc3QgW3JvYWRzUmVzLCBidWlsZGluZ3NSZXMsIGRlcG9zaXRzUmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvY2h1bmtzL2J1bGsnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IFtjaHVua0lkXSB9KVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvYnVpbGRpbmdzL3Zpc2libGUnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IFtjaHVua0lkXSB9KVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvZGVwb3NpdHMvYnVsaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogW2NodW5rSWRdIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGlmICghcm9hZHNSZXMub2sgfHwgIWJ1aWxkaW5nc1Jlcy5vayB8fCAhZGVwb3NpdHNSZXMub2spIFxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBUEkgZXJyb3JcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvYWRzRGF0YSAgICAgPSBhd2FpdCByb2Fkc1Jlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgYnVpbGRpbmdzRGF0YSA9IGF3YWl0IGJ1aWxkaW5nc1Jlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgZGVwb3NpdHNEYXRhICA9IGF3YWl0IGRlcG9zaXRzUmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2h1bmtEZXBvc2l0cyA9IGRlcG9zaXRzRGF0YVtjaHVua0lkXSB8fCBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgY2h1bmtEYXRhID0ge1xyXG4gICAgICAgICAgICByb2FkczogICAgIHJvYWRzRGF0YVtjaHVua0lkXT8ucm9hZHMgICAgIHx8IFtdLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IGJ1aWxkaW5nc0RhdGFbY2h1bmtJZF0/LmJ1aWxkaW5ncyB8fCBbXSxcclxuICAgICAgICAgICAgZGVwb3NpdHM6ICBjaHVua0RlcG9zaXRzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFzUm9hZHMgPSBjaHVua0RhdGEucm9hZHMubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogaGFzUm9hZHMgPyAnbG9hZGVkJyA6ICdlbXB0eScsXHJcbiAgICAgICAgICAgIHJvYWRzOiAgICAgY2h1bmtEYXRhLnJvYWRzLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IGNodW5rRGF0YS5idWlsZGluZ3MsXHJcbiAgICAgICAgICAgIGRlcG9zaXRzOiAgY2h1bmtEYXRhLmRlcG9zaXRzLFxyXG4gICAgICAgICAgICBoYXNSb2Fkc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gZ2V0Q2FjaGVLZXkoY2h1bmtJZCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY2FjaGVLZXksIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgcm9hZHM6ICAgICBjaHVua0RhdGEucm9hZHMsXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogY2h1bmtEYXRhLmJ1aWxkaW5ncyxcclxuICAgICAgICAgICAgZGVwb3NpdHM6ICBjaHVua0RhdGEuZGVwb3NpdHMsXHJcbiAgICAgICAgICAgIGhhc1JvYWRzLFxyXG4gICAgICAgICAgICB0czogRGF0ZS5ub3coKVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCBoYXNSb2FkcyA/ICdibHVlJyA6ICcjNDQ0Jyk7XHJcbiAgICAgICAgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShjaHVua0RhdGEuZGVwb3NpdHMsIGdldE1hcCgpKTtcclxuXHJcbiAgICAgICAgZGVidWdMb2coXCJyb2Fkc1wiLCBcIltDSFVOSyBSRUZSRVNIXVwiLCBjaHVua0lkLCBjaHVua0RhdGEucm9hZHMubGVuZ3RoKTtcclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICAgICAgcm9hZHM6IFtdLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IFtdLFxyXG4gICAgICAgICAgICBkZXBvc2l0czogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdyZWQnKTtcclxuICAgICAgICBkZWJ1Z0Vycm9yKFwicm9hZHNcIiwgXCJbQ0hVTksgUkVGUkVTSCBFUlJPUl1cIiwgY2h1bmtJZCwgZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZpc2libGVDaHVua3MoYm91bmRzKSB7XHJcblxyXG4gICAgY29uc3QgbWluWCA9IE1hdGguZmxvb3IoYm91bmRzLmdldFNvdXRoKCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1heFggPSBNYXRoLmZsb29yKGJvdW5kcy5nZXROb3J0aCgpIC8gQ0hVTktfU0laRSk7XHJcblxyXG4gICAgY29uc3QgbWluWSA9IE1hdGguZmxvb3IoYm91bmRzLmdldFdlc3QoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWF4WSA9IE1hdGguZmxvb3IoYm91bmRzLmdldEVhc3QoKSAvIENIVU5LX1NJWkUpO1xyXG5cclxuICAgIGNvbnN0IGNodW5rSWQgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCB4ID0gbWluWDsgeCA8PSBtYXhYOyB4KyspIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gbWluWTsgeSA8PSBtYXhZOyB5KyspIHtcclxuICAgICAgICAgICAgY2h1bmtJZC5wdXNoKGAke3h9XyR7eX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNodW5rSWQ7XHJcbn0iLCJleHBvcnQgY29uc3Qgcm9hZHNTdGF0ZSA9IHtcclxuICAgIGNodW5rczoge30sXHJcbiAgICBsb2FkZWRDaHVua3M6IG5ldyBTZXQoKSxcclxuICAgIHJvYWRzUmVhZHk6IGZhbHNlLFxyXG4gICAgZHJhd25Sb2FkczogW10sXHJcbiAgICB2aXNpYmxlQ2h1bmtzOiBuZXcgU2V0KCksXHJcbiAgICBcclxuICAgIHJvYWRMYXllcnM6IHt9LFxyXG5cclxuICAgIGJ1aWxkaW5nTGF5ZXJzOiB7fVxyXG59O1xyXG5cclxubGV0IGNhY2hlZFJvYWRzID0gW107XHJcbmxldCBjYWNoZURpcnR5ID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXJrUm9hZENhY2hlRGlydHkoKSB7XHJcbiAgICBjYWNoZURpcnR5ID0gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbExvYWRlZFJvYWRzKCkge1xyXG5cclxuICAgIGlmICghcm9hZHNTdGF0ZT8uY2h1bmtzKSByZXR1cm4gW107XHJcblxyXG4gICAgaWYgKCFjYWNoZURpcnR5KSByZXR1cm4gY2FjaGVkUm9hZHM7XHJcblxyXG4gICAgY2FjaGVkUm9hZHMgPSBPYmplY3QudmFsdWVzKHJvYWRzU3RhdGUuY2h1bmtzKVxyXG4gICAgICAgIC5maWx0ZXIoYyA9PiBjPy5zdGF0dXMgPT09ICdsb2FkZWQnICYmIEFycmF5LmlzQXJyYXkoYy5yb2FkcykpXHJcbiAgICAgICAgLmZsYXRNYXAoYyA9PiBjLnJvYWRzKTtcclxuXHJcbiAgICBjYWNoZURpcnR5ID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIGNhY2hlZFJvYWRzO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGluaXROb3RpZmljYXRpb25zKClcclxue1xyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdodG14OmFmdGVyU3dhcCcsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZXZlbnRdJyk7XHJcbiAgICAgICAgZXZlbnRzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBKU09OLnBhcnNlKGVsLmRhdGFzZXQuZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2dhbWU6ZXZlbnQnLCB7IGRldGFpbDogZXZlbnQgfSkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBwYXJzaW5nIGV2ZW50OicsIGVycik7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBlbC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHR5cGUgPSAnaW5mbycpIHtcclxuXHJcbiAgICBjb25zdCBub3RpZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbm90aWYuY2xhc3NOYW1lID0gYG5vdGlmIG5vdGlmLSR7dHlwZX1gO1xyXG4gICAgbm90aWYudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm90aWYpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG5vdGlmLnJlbW92ZSgpO1xyXG4gICAgfSwgMzAwMCk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UGxheWVyRmFjdGlvbiB9IGZyb20gJy4uL2J1aWxkaW5ncy9iYXNlLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNUQVRFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IGJhc2VDaXJjbGVzID0gbmV3IE1hcCgpOyAvLyBiYXNlSWQgLT4gY2lyY2xlIGxheWVyXHJcbmNvbnN0IHJvYWRTZWdtZW50cyA9IG5ldyBNYXAoKTsgLy8gcm9hZElkIC0+IHBvbHlsaW5lIGxheWVyXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGQUNUSU9OIENPTE9SU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBGQUNUSU9OX0NPTE9SUyA9IHtcclxuICAgICdkZWZhdWx0JzogJyMyN2FlNjAnLCAgLy8gdmVydCBwYXIgZMOpZmF1dFxyXG4gICAgJ2VtcGlyZSc6ICcjZTc0YzNjJywgICAvLyByb3VnZVxyXG4gICAgJ2NlbmRyZXMnOiAnIzM0OThkYicsICAgIC8vIGJsZXVcclxuICAgICdub21hZGVzJzogJyNmMzljMTInLCAgLy8gb3JhbmdlXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRGYWN0aW9uQ29sb3IoZmFjdGlvbikge1xyXG4gICAgcmV0dXJuIEZBQ1RJT05fQ09MT1JTW2ZhY3Rpb24/LnRvTG93ZXJDYXNlKCldIHx8IEZBQ1RJT05fQ09MT1JTWydkZWZhdWx0J107XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEJBU0UgQ0lSQ0xFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3QmFzZUNpcmNsZShiYXNlSWQsIGxhdCwgbG5nLCBmYWN0aW9uLCBpc1BsYXllckJhc2UgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckZhY3Rpb24gPSBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xyXG4gICAgY29uc3QgY29sb3IgPSBpc1BsYXllckJhc2VcclxuICAgICAgICA/ICcjMjdhZTYwJyAgLy8gdmVydCBwb3VyIG5vdHJlIGJhc2VcclxuICAgICAgICA6IGdldEZhY3Rpb25Db2xvcihmYWN0aW9uKTtcclxuXHJcbiAgICAvLyBTdXBwcmltZXIgbCdhbmNpZW4gY2VyY2xlIHNpIGV4aXN0ZVxyXG4gICAgaWYgKGJhc2VDaXJjbGVzLmhhcyhiYXNlSWQpKSB7XHJcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKGJhc2VDaXJjbGVzLmdldChiYXNlSWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaXJjbGUgPSBMLmNpcmNsZShbbGF0LCBsbmddLCB7XHJcbiAgICAgICAgcmFkaXVzOiA1MDAsXHJcbiAgICAgICAgY29sb3I6IGNvbG9yLFxyXG4gICAgICAgIHdlaWdodDogMixcclxuICAgICAgICBmaWxsT3BhY2l0eTogMFxyXG4gICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICBiYXNlQ2lyY2xlcy5zZXQoYmFzZUlkLCBjaXJjbGUpO1xyXG4gICAgcmV0dXJuIGNpcmNsZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJhc2VDaXJjbGUoYmFzZUlkKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgaWYgKGJhc2VDaXJjbGVzLmhhcyhiYXNlSWQpKSB7XHJcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKGJhc2VDaXJjbGVzLmdldChiYXNlSWQpKTtcclxuICAgICAgICBiYXNlQ2lyY2xlcy5kZWxldGUoYmFzZUlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQWxsQmFzZUNpcmNsZXMoKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgYmFzZUNpcmNsZXMuZm9yRWFjaChjaXJjbGUgPT4gbWFwLnJlbW92ZUxheWVyKGNpcmNsZSkpO1xyXG4gICAgYmFzZUNpcmNsZXMuY2xlYXIoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUk9BRCBTRUdNRU5UU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd1JvYWRTZWdtZW50KHJvYWRJZCwgY29vcmRzLCBmYWN0aW9uKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwIHx8ICFjb29yZHMgfHwgY29vcmRzLmxlbmd0aCA8IDIpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJGYWN0aW9uID0gZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKTtcclxuICAgIGNvbnN0IGNvbG9yID0gZmFjdGlvbiA9PT0gcGxheWVyRmFjdGlvblxyXG4gICAgICAgID8gJyMyN2FlNjAnICAvLyB2ZXJ0IHBvdXIgbm9zIHJvdXRlc1xyXG4gICAgICAgIDogZ2V0RmFjdGlvbkNvbG9yKGZhY3Rpb24pO1xyXG5cclxuICAgIC8vIFN1cHByaW1lciBsJ2FuY2llbiBzZWdtZW50IHNpIGV4aXN0ZVxyXG4gICAgaWYgKHJvYWRTZWdtZW50cy5oYXMocm9hZElkKSkge1xyXG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihyb2FkU2VnbWVudHMuZ2V0KHJvYWRJZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvbHlsaW5lID0gTC5wb2x5bGluZShjb29yZHMsIHtcclxuICAgICAgICBjb2xvcjogY29sb3IsXHJcbiAgICAgICAgd2VpZ2h0OiAzLFxyXG4gICAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgICBkYXNoQXJyYXk6ICc4LDgnXHJcbiAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgIHJvYWRTZWdtZW50cy5zZXQocm9hZElkLCBwb2x5bGluZSk7XHJcbiAgICByZXR1cm4gcG9seWxpbmU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVSb2FkU2VnbWVudChyb2FkSWQpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBpZiAocm9hZFNlZ21lbnRzLmhhcyhyb2FkSWQpKSB7XHJcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKHJvYWRTZWdtZW50cy5nZXQocm9hZElkKSk7XHJcbiAgICAgICAgcm9hZFNlZ21lbnRzLmRlbGV0ZShyb2FkSWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJBbGxSb2FkU2VnbWVudHMoKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgcm9hZFNlZ21lbnRzLmZvckVhY2gocG9seWxpbmUgPT4gbWFwLnJlbW92ZUxheWVyKHBvbHlsaW5lKSk7XHJcbiAgICByb2FkU2VnbWVudHMuY2xlYXIoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVVBEQVRFIEZVTkNUSU9OU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQmFzZUNpcmNsZXMoYmFzZXMpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJGYWN0aW9uID0gZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKTtcclxuXHJcbiAgICBiYXNlcy5mb3JFYWNoKGJhc2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzUGxheWVyQmFzZSA9IGJhc2UuZmFjdGlvbiA9PT0gcGxheWVyRmFjdGlvbjtcclxuICAgICAgICBkcmF3QmFzZUNpcmNsZShiYXNlLmlkLCBiYXNlLmxhdCwgYmFzZS5sbmcsIGJhc2UuZmFjdGlvbiwgaXNQbGF5ZXJCYXNlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUm9hZFNlZ21lbnRzKHJvYWRzKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcGxheWVyRmFjdGlvbiA9IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XHJcblxyXG4gICAgcm9hZHMuZm9yRWFjaChyb2FkID0+IHtcclxuICAgICAgICBjb25zdCBpc1BsYXllclJvYWQgPSByb2FkLmZhY3Rpb24gPT09IHBsYXllckZhY3Rpb247XHJcbiAgICAgICAgZHJhd1JvYWRTZWdtZW50KHJvYWQuaWQsIHJvYWQuY29vcmRzLCByb2FkLmZhY3Rpb24pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVUSUxJVFlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFJvYWRTZWdtZW50Q29sb3Iocm9hZElkLCBjb2xvcikge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChyb2FkU2VnbWVudHMuaGFzKHJvYWRJZCkpIHtcclxuICAgICAgICByb2FkU2VnbWVudHMuZ2V0KHJvYWRJZCkuc2V0U3R5bGUoeyBjb2xvciB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHNob3dOb3RpZmljYXRpb24gfSBmcm9tICcuLi9ub3RpZmljYXRpb25zLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBBVEhGSU5ESU5HIERFQlVHIC0gQ0xJQ0sgVE8gR0VUIENPT1JESU5BVEVTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBZG1pbkNvb3JkcyhsYXQsIGxuZykge1xyXG4gICAgaWYgKGxhdCA9PT0gdW5kZWZpbmVkIHx8IGxuZyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZm9ybWF0ID0gYCR7bGF0LnRvRml4ZWQoNil9LCR7bG5nLnRvRml4ZWQoNil9YDtcclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGZvcm1hdCk7XHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKFwiRm9ybWF0IGNvbGxhYmxlIGFkbWluIGNvcGnDqSA6IFwiICsgZm9ybWF0LCAnc3VjY2VzcycpO1xyXG59IiwiaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IHJlZnJlc2hDaHVuayB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2Fkcy5qcyc7XHJcbmltcG9ydCB7IGludmFsaWRhdGVDaHVuayB9IGZyb20gJy4uL21hcC9yb2Fkcy9pbnZhbGlkYXRlQ2h1bmsuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgc25hcFRvQ2h1bmsgfSBmcm9tICcuL3NuYXAuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIVU5LX1NJWkUgPSAwLjAxO1xyXG5leHBvcnQgY29uc3QgQ0hVTktfUkFESVVTID0gMTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXF1ZXN0QXBpUm9hZHNBbmRDaHVua3NCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7XHJcbiAgICBhbGVydChcIkNsaXF1ZSBzdXIgbGEgY2FydGUgcG91ciBmYWlyZSB1bmUgcmVxdWV0ZSBhcGkgcG91ciBham91dGVyIHVuIGNodW5rIGRlIHJvdXRlcyAoMC4wMcKwIHggMC4wMcKwKS5cIik7XHJcblxyXG4gICAgbWFwLm9uY2UoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBsYXQsIGxuZyB9ID0gZS5sYXRsbmc7XHJcblxyXG4gICAgICAgIGNvbnN0IHNuYXBwZWQgPSBzbmFwVG9DaHVuayhsYXQsIGxuZyk7XHJcblxyXG4gICAgICAgIGRlYnVnTG9nKFwibmV0d29ya1wiLCBcIvCfk6EgYWRkaW5nIHJvYWRzIGNodW5rOlwiLCBzbmFwcGVkLmNodW5rSWQpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS9hZGQtcm9hZHMtY2h1bmsnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhdDogc25hcHBlZC5sYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBzbmFwcGVkLmxuZ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZWZyZXNoQ2h1bmsoc25hcHBlZC5sYXQsIHNuYXBwZWQubG5nKTtcclxuXHJcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwi8J+UhCBjaHVuayByZWZyZXNoZWQ6XCIsIHNuYXBwZWQuY2h1bmtJZCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBkZWJ1Z0Vycm9yKFwibmV0d29ya1wiLCBcImZhaWxlZCB0byBhZGQgcm9hZHMgY2h1bmtcIiwgZXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnJztcclxuICAgIH0pO1xyXG59KTsiLCJpbXBvcnQgeyBmbHlUbyB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRHUFMoZGVmYXVsdExhdCwgZGVmYXVsdExuZykge1xyXG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xyXG4gICAgICAgIGxldCBncHNGb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbihcclxuICAgICAgICAgICAgKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBncHNGb3VuZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZmx5VG8oXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHt9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFncHNGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgZmx5VG8oZGVmYXVsdExhdCwgZGVmYXVsdExuZywgNyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA1NTAwKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENIVU5LX1NJWkUgfSBmcm9tICcuL2NodW5rLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzbmFwVG9DaHVuayhsYXQsIGxuZykge1xyXG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IobGF0IC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihsbmcgLyBDSFVOS19TSVpFKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhdDogeCAqIENIVU5LX1NJWkUsXHJcbiAgICAgICAgbG5nOiB5ICogQ0hVTktfU0laRSxcclxuICAgICAgICBjaHVua0lkOiBgJHt4fV8ke3l9YFxyXG4gICAgfTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBpbml0QnVpbGRpbmdUaW1lcnMoKSB7XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVUaW1lcnMoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGl2ZXJ5LXRpbWVyLXdyYXBwZXInKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2NoZWR1bGVkQXQgPSBlbC5kYXRhc2V0LnNjaGVkdWxlZEF0O1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lckVsICAgICA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5kZWxpdmVyeS10aW1lcicpO1xyXG4gICAgICAgICAgICBpZiAoIXRpbWVyRWwpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICghc2NoZWR1bGVkQXQpIHtcclxuICAgICAgICAgICAgICAgIHRpbWVyRWwudGV4dENvbnRlbnQgPSAnQXVjdW5lIGxpdnJhaXNvbiBwcsOpdnVlJztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgbm93ICAgICAgID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgY29uc3Qgc2NoZWR1bGVkID0gbmV3IERhdGUoc2NoZWR1bGVkQXQpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgY29uc3QgZGlmZlNlYyAgID0gTWF0aC5yb3VuZCgoc2NoZWR1bGVkIC0gbm93KSAvIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpZmZTZWMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBMaXZyYWlzb24gcGFzIGVuY29yZSBwYXJ0aWVcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnMgPSBNYXRoLmZsb29yKGRpZmZTZWMgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNzID0gZGlmZlNlYyAlIDYwO1xyXG4gICAgICAgICAgICAgICAgdGltZXJFbC5pbm5lckhUTUwgPSBgUHJvY2hhaW4gZMOpcGFydCBkYW5zIDogPHN0cm9uZz4ke21pbnN9bWluICR7c2Vjc31zPC9zdHJvbmc+YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIEVuIHRyYW5zaXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBNYXRoLmFicyhkaWZmU2VjKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnMgICAgPSBNYXRoLmZsb29yKGVsYXBzZWQgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNzICAgID0gZWxhcHNlZCAlIDYwO1xyXG4gICAgICAgICAgICAgICAgdGltZXJFbC5pbm5lckhUTUwgPSBgQ29udm9pIGVuIHJvdXRlIGRlcHVpcyA6IDxzdHJvbmc+JHttaW5zfW1pbiAke3NlY3N9czwvc3Ryb25nPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNaXNlIMOgIGpvdXIgY2hhcXVlIHNlY29uZGVcclxuICAgIHVwZGF0ZVRpbWVycygpO1xyXG4gICAgc2V0SW50ZXJ2YWwodXBkYXRlVGltZXJzLCAxMDAwKTtcclxufSIsImltcG9ydCBMIGZyb20gJ2xlYWZsZXQnO1xyXG5pbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyc7XHJcblxyXG5kZWxldGUgTC5JY29uLkRlZmF1bHQucHJvdG90eXBlLl9nZXRJY29uVXJsO1xyXG5MLkljb24uRGVmYXVsdC5tZXJnZU9wdGlvbnMoe1xyXG4gICAgaWNvblJldGluYVVybDogcmVxdWlyZSgnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi0yeC5wbmcnKSxcclxuICAgIGljb25Vcmw6IHJlcXVpcmUoJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24ucG5nJyksXHJcbiAgICBzaGFkb3dVcmw6IHJlcXVpcmUoJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMOyIsImNvbnN0IENBQ0hFX1ZFUlNJT04gPSAndjEnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENhY2hlS2V5KGNodW5rSWQpIHtcclxuICAgIHJldHVybiBgJHtDQUNIRV9WRVJTSU9OfV9jaHVua18ke2NodW5rSWR9YDtcclxufSIsImltcG9ydCB7IFRZUEVfTUFQIH0gZnJvbSAnLi90eXBlTWFwLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBERUJVRyA9IHtcclxuICAgIGVuYWJsZWQ6IHdpbmRvdy5BUFBfREVCVUcgPz8gZmFsc2UsXHJcblxyXG4gICAgbWVyY3VyZTogdHJ1ZSxcclxuICAgIGludmVudG9yeTogdHJ1ZSxcclxuICAgIGRlbGl2ZXJ5OiB0cnVlLFxyXG4gICAgYnVpbGRpbmdzOiB0cnVlLFxyXG5cclxuICAgIGNodW5rczogdHJ1ZSxcclxuICAgIG5ldHdvcms6IHRydWUsXHJcbiAgICBjYWNoZTogdHJ1ZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNhbkxvZyh0eXBlKSB7XHJcbiAgICBpZiAoIURFQlVHLmVuYWJsZWQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qga2V5ID0gVFlQRV9NQVA/Llt0eXBlXSB8fCB0eXBlO1xyXG5cclxuICAgIHJldHVybiBERUJVR1trZXldICE9PSBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnTG9nKHR5cGUsIC4uLmFyZ3MpIHtcclxuICAgIGlmICghY2FuTG9nKHR5cGUpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGBbJHtUWVBFX01BUD8uW3R5cGVdIHx8IHR5cGV9XWAsXHJcbiAgICAgICAgLi4uYXJnc1xyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnV2Fybih0eXBlLCAuLi5hcmdzKSB7XHJcbiAgICBpZiAoIWNhbkxvZyh0eXBlKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYFske1RZUEVfTUFQPy5bdHlwZV0gfHwgdHlwZX1dYCxcclxuICAgICAgICAuLi5hcmdzXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdFcnJvcih0eXBlLCAuLi5hcmdzKSB7XHJcbiAgICBpZiAoIWNhbkxvZyh0eXBlKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgIGBbJHtUWVBFX01BUD8uW3R5cGVdIHx8IHR5cGV9XWAsXHJcbiAgICAgICAgLi4uYXJnc1xyXG4gICAgKTtcclxufSIsImV4cG9ydCBjb25zdCBUWVBFX01BUCA9IHtcclxuICAgIG1lcmN1cmU6ICdNRVJDVVJFJyxcclxuICAgIGludmVudG9yeTogJ0lOVkVOVE9SWScsXHJcbiAgICBkZWxpdmVyeTogJ0RFTElWRVJZJyxcclxuICAgIGJ1aWxkaW5nczogJ0JVSUxESU5HUycsXHJcbiAgICBjaHVua3M6ICdDSFVOS1MnLFxyXG4gICAgbmV0d29yazogJ05FVFdPUksnLFxyXG4gICAgY2FjaGU6ICdDQUNIRScsXHJcbn07Il0sIm5hbWVzIjpbIkwiLCJkZWJ1Z0xvZyIsIkNIVU5LX1NJWkUiLCJnZXRNYXAiLCJpc0dyaWRMYXllckFjdGl2ZSIsImdyaWRMYXllciIsImxheWVyR3JvdXAiLCJ2aXNpYmxlQ2h1bmtzIiwiTWFwIiwiaW5pdEdyaWRMYXllciIsIm1hcCIsInpvb20iLCJnZXRab29tIiwiYm91bmRzIiwiZ2V0Qm91bmRzIiwibWluTGF0IiwiTWF0aCIsImZsb29yIiwiZ2V0U291dGgiLCJtYXhMYXQiLCJjZWlsIiwiZ2V0Tm9ydGgiLCJtaW5MbmciLCJnZXRXZXN0IiwibWF4TG5nIiwiZ2V0RWFzdCIsIm5ld1Zpc2libGUiLCJTZXQiLCJpIiwiX2xvb3AiLCJpZCIsImNvbmNhdCIsImoiLCJhZGQiLCJoYXMiLCJsYXQiLCJsbmciLCJyZWN0IiwicmVjdGFuZ2xlIiwiY29sb3IiLCJ3ZWlnaHQiLCJmaWxsT3BhY2l0eSIsIm9uIiwic2V0U3R5bGUiLCJhZGRMYXllciIsInNldCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiZW50cmllcyIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiX3N0ZXAkdmFsdWUiLCJfc2xpY2VkVG9BcnJheSIsInZhbHVlIiwicmVtb3ZlTGF5ZXIiLCJlcnIiLCJlIiwiZiIsInNpemUiLCJzZXRDaHVua0NvbG9yIiwiZ2V0IiwiYnVpbGRSZXF1ZXN0IiwidHlwZUlkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlX2lkIiwiZ2V0QnVpbGRpbmdzIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXRCdWlsZGluZ0Nvc3RzIiwiYnVpbGRpbmdUeXBlSWQiLCJ1cGdyYWRlQnVpbGRpbmciLCJidWlsZGluZ0lkIiwiZ2V0VXBncmFkZUluZm8iLCJmbHlUbyIsInJvYWRzU3RhdGUiLCJnZXRBbGxMb2FkZWRSb2FkcyIsImdldEJ1aWxkaW5nSW1hZ2UiLCJzYWZlTG9hZENodW5rIiwibG9hZFZpc2libGVSb2FkQ2h1bmtzIiwiZmluZENsb3Nlc3RQb2ludE9uUm9hZCIsImZpbmRDbG9zZXN0U2VnbWVudCIsInNob3dOb3RpZmljYXRpb24iLCJnZXRBZG1pbkNvb3JkcyIsImRlYnVnV2FybiIsImRlYnVnRXJyb3IiLCJkcmF3QmFzZUNpcmNsZSIsInJlbW92ZUJhc2VDaXJjbGUiLCJyZWZyZXNoU2lkZWJhciIsImJhc2VNYXJrZXIiLCJiYXNlQ2lyY2xlIiwiYmFzZVBvc2l0aW9uIiwiYmFzZUNyZWF0ZWQiLCJwbGFjaW5nQmFzZSIsInByZXZpZXdNYXJrZXIiLCJwcmV2aWV3Q2lyY2xlIiwicHJldmlld1NuYXBMYXRMbmciLCJwcmV2aWV3TGluZSIsImhpZ2hsaWdodGVkU2VnbWVudCIsImN1cnJlbnRQbGF5ZXJGYWN0aW9uIiwic2V0Q3VycmVudFBsYXllckZhY3Rpb24iLCJmYWN0aW9uIiwidG9Mb3dlckNhc2UiLCJnZXRDdXJyZW50UGxheWVyRmFjdGlvbiIsImluaXRCYXNlVUkiLCJiYXNlQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2RlIiwiZGF0YXNldCIsImFsZXJ0IiwiZ2V0Q29udGFpbmVyIiwic3R5bGUiLCJjdXJzb3IiLCJfcHJldmlld1NuYXBMYXRMbmciLCJpc0Jhc2VQbGFjZW1lbnRWYWxpZCIsImNsZWFudXBQcmV2aWV3IiwiY3JlYXRlQmFzZSIsInJvYWRzIiwibGVuZ3RoIiwicmVzdWx0IiwibGF0bG5nIiwicG9pbnQiLCJpc1ZhbGlkIiwiY2lyY2xlIiwicmFkaXVzIiwiYWRkVG8iLCJtYXJrZXIiLCJwb2x5bGluZSIsIm9wYWNpdHkiLCJkYXNoQXJyYXkiLCJzZWdtZW50IiwidXBkYXRlQmFzZURpc3BsYXkiLCJ1cGRhdGVPdGhlckJhc2VzIiwiZW5hYmxlQWRtaW5Db29yZGluYXRlUGlja2VyIiwid2luZG93Iiwib3RoZXJCYXNlcyIsImV2ZXJ5IiwiYmFzZSIsImRpc3QiLCJkaXN0YW5jZSIsImJhc2VUeXBlSWQiLCJvayIsIkVycm9yIiwiZXJyb3IiLCJfcmVmIiwicmVtb3ZlQmFzZSIsIm1lc3NhZ2UiLCJsb2FkT3RoZXJCYXNlIiwicHNldWRvIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJpc1BsYXllckJhc2UiLCJpY29uIiwiY3JlYXRlQmFzZUljb24iLCJiaW5kUG9wdXAiLCJwdXNoIiwiZm9yRWFjaCIsImhhc0xheWVyIiwic2V0SWNvbiIsImxvYWRCYXNlRnJvbVNlcnZlciIsImljb25VcmwiLCJpY29uU2l6ZSIsImljb25BbmNob3IiLCJwb3B1cEFuY2hvciIsInQiLCJyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInNlbGVjdGVkQnVpbGRpbmdUeXBlIiwicHJldmlld0J1aWxkaW5nTWFya2VyIiwiaW5pdEJ1aWxkTW9kZSIsIl9jYWxsZWUiLCJidG4iLCJfY29udGV4dCIsInRhcmdldCIsImNsb3Nlc3QiLCJzZWxlY3RCdWlsZGluZ1R5cGUiLCJfeCIsIm9uTWFwQ2xpY2siLCJvbk1hcE1vdXNlTW92ZSIsIl94MiIsIl94MyIsIl9zZWxlY3RCdWlsZGluZ1R5cGUiLCJfY2FsbGVlMiIsImJ1dHRvbiIsImRhdGEiLCJfdCIsIl9jb250ZXh0MiIsImNsZWFyQnVpbGRpbmdTZWxlY3Rpb24iLCJjbGFzc0xpc3QiLCJuYW1lIiwiY29zdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlIiwiX3g0IiwiX29uTWFwQ2xpY2siLCJfY2FsbGVlMyIsInJlc3BvbnNlIiwiX3QyIiwiX2NvbnRleHQzIiwic2V0TGF0TG5nIiwiYWN0aXZhdGVCdWlsZE1vZGUiLCJxdWVyeVNlbGVjdG9yIiwiY2xpY2siLCJkZWFjdGl2YXRlQnVpbGRNb2RlIiwiaXNCdWlsZE1vZGVBY3RpdmUiLCJfcmVmcmVzaFNpZGViYXIiLCJfY2FsbGVlNCIsImh0bWwiLCJwYXJzZXIiLCJkb2MiLCJuZXdTaWRlYmFyIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwiX3QzIiwiX2NvbnRleHQ0IiwidGV4dCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInJlcGxhY2VXaXRoIiwiYnVpbGRpbmdNYXJrZXJzIiwicG9wdXBDb250ZW50TG9hZGVkIiwiY3VycmVudFBsYXllcklkIiwic2V0Q3VycmVudFBsYXllcklkIiwibG9hZEJ1aWxkaW5nc0Zyb21EYXRhIiwiYnVpbGRpbmdzIiwiQXJyYXkiLCJpc0FycmF5IiwiYiIsIl9iJHR5cGUiLCJjb2RlIiwidHlwZSIsImJ1aWxkaW5nRmFjdGlvbiIsImNyZWF0ZUJ1aWxkaW5nSWNvbiIsImJ1aWxkaW5nRGF0YSIsImxldmVsIiwib3duZXJJZCIsInByb2R1Y3Rpb24iLCJyZXNvdXJjZV90eXBlIiwiY3JlYXRlU2ltcGxlUG9wdXAiLCJpc093bkJ1aWxkaW5nIiwibG9hZFVwZ3JhZGVJbmZvQXN5bmMiLCJidWlsZGluZyIsIl9sb2FkVXBncmFkZUluZm9Bc3luYyIsInNldFBvcHVwQ29udGVudCIsInN0YXR1cyIsImxvYWRCdWlsZGluZ3MiLCJidWlsZGluZ0NvZGUiLCJ1bmRlZmluZWQiLCJhY3R1YWxGYWN0aW9uIiwiYnVpbGRpbmdTbHVnIiwicmVwbGFjZSIsImZhY3Rpb25TbHVnIiwiZW50cnkiLCJuZXdMZXZlbCIsImdldEJ1aWxkaW5nVHlwZUNvc3RzIiwiX3g1IiwiX2dldEJ1aWxkaW5nVHlwZUNvc3RzIiwiY2FuQnVpbGRCdWlsZGluZyIsIl94NiIsIl9jYW5CdWlsZEJ1aWxkaW5nIiwicmVzb3VyY2VzIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJyZXNvdXJjZSIsImFtb3VudCIsInF1YW50aXR5IiwicmVmcmVzaEJ1aWxkaW5nUG9wdXAiLCJfeDciLCJfcmVmcmVzaEJ1aWxkaW5nUG9wdXAiLCJfY2FsbGVlNSIsIl9jb250ZXh0NSIsImlzUG9wdXBPcGVuIiwiaW5pdE1hcCIsImxvYWRXb3JsZCIsImluaXRHUFMiLCJpbml0Tm90aWZpY2F0aW9ucyIsImluaXRCdWlsZGluZ1RpbWVycyIsImVuYWJsZUxlYWZsZXREZWJ1ZyIsImN1cnJlbnRVc2VyIiwiaW5pdERlbGl2ZXJ5RXZlbnRzIiwiaW5pdEludmVudG9yeUV2ZW50cyIsImRlYnVnIiwib3JpZ2luYWxNYXJrZXIiLCJvcmlnaW5hbENpcmNsZSIsIm9yaWdpbmFsUG9seWxpbmUiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJjb25zb2xlIiwibG9nIiwidHJhY2UiLCJfbGVuMiIsIl9rZXkyIiwiX2xlbjMiLCJfa2V5MyIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsImZyb20iLCJ0ZXN0IiwibmV4dCIsIl90eXBlb2YiLCJkZXBvc2l0TWFya2VycyIsImJ1aWxkaW5nVHlwZXNDYWNoZSIsInJlc291cmNlVHlwZXNDYWNoZSIsImxvYWRCdWlsZGluZ1R5cGVzIiwiX2xvYWRCdWlsZGluZ1R5cGVzIiwibG9hZFJlc291cmNlVHlwZXMiLCJfbG9hZFJlc291cmNlVHlwZXMiLCJfdDQiLCJERUZBVUxUX0NPTE9SUyIsImdldFJlc291cmNlQ29sb3IiLCJfcmVzb3VyY2VUeXBlc0NhY2hlJHQiLCJfcmVzb3VyY2VUeXBlc0NhY2hlJHQyIiwiZmluZEJ1aWxkaW5nVHlwZUZvclJlc291cmNlIiwiX2ZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZSIsInJlc291cmNlVHlwZSIsImJ1aWxkaW5nVHlwZXMiLCJidWlsZGluZ1R5cGUiLCJmaW5kIiwiYnQiLCJfYnQkcmVzb3VyY2VUeXBlIiwicHJvZHVjdGlvbl9yYXRlIiwiZGVwb3NpdExheWVycyIsImluaXREZXBvc2l0TGF5ZXJzIiwiX2luaXREZXBvc2l0TGF5ZXJzIiwiY29udHJvbCIsInJlc291cmNlVHlwZXMiLCJydCIsImFkZE92ZXJsYXkiLCJsYWJlbCIsImxvYWREZXBvc2l0c0ZvckNodW5rIiwiX2xvYWREZXBvc2l0c0ZvckNodW5rIiwiX2NhbGxlZTYiLCJjaHVua0lkIiwiZGVwb3NpdHMiLCJfdDUiLCJfY29udGV4dDYiLCJyZW5kZXJEZXBvc2l0c0Zyb21EYXRhIiwiZm9ybWF0Q29zdHMiLCJqb2luIiwiX3JlZjIiLCJjaGVja0NhbkNsYWltIiwiX2NoZWNrQ2FuQ2xhaW0iLCJfY2FsbGVlNyIsImRlcG9zaXQiLCJfcmV0IiwiX2NvbnRleHQ4Iiwia2V5cyIsIl9wbGF5ZXJSZXNvdXJjZXMkcmVzbyIsInBsYXllclJlc291cmNlcyIsIl9jb250ZXh0NyIsIl9yZWdlbmVyYXRvclZhbHVlcyIsImxvYWREZXBvc2l0SW5mb0FzeW5jIiwiX3g4IiwiX3g5IiwiX2xvYWREZXBvc2l0SW5mb0FzeW5jIiwiX2NhbGxlZTgiLCJkZXBvc2l0c0lEIiwiZGVwb3NpdERhdGEiLCJfdDYiLCJfY29udGV4dDkiLCJsYXllciIsImNpcmNsZU1hcmtlciIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZmlsbENvbG9yIiwiY2xhaW1EZXBvc2l0IiwiX3JlZjMiLCJyZXNwb25zZVRleHQiLCJkZXBvc2l0X2lkIiwicGFyc2UiLCJsb2NhdGlvbiIsInJlbG9hZCIsIl94MCIsIl94MSIsIm1hcmtlckljb24iLCJtYXJrZXJTaGFkb3ciLCJNYXJrZXIiLCJvcHRpb25zIiwic2hhZG93VXJsIiwibWFwSW5zdGFuY2UiLCJtb3ZlVGltZW91dCIsImlzQ2h1bmtNb2RlIiwic2V0VmlldyIsInRpbGVMYXllciIsImF0dHJpYnV0aW9uIiwiZmlyZSIsImxheWVyc0NvbnRyb2wiLCJsYXllcnMiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZW50ZXJDaHVua01vZGUiLCJleGl0Q2h1bmtNb2RlIiwiX21hcEluc3RhbmNlIiwiYW5pbWF0ZSIsImR1cmF0aW9uIiwic3RhdHVzVGV4dCIsInBsYXllcnMiLCJoYXNDZW50ZXJlZCIsInBsYXllciIsImlzTWUiLCJpbnZhbGlkYXRlQ2h1bmsiLCJjaHVua3MiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiYmVzdFBvaW50IiwiYmVzdERpc3RhbmNlIiwiSW5maW5pdHkiLCJyb2FkIiwicG9pbnRzIiwiYVJhdyIsImJSYXciLCJ3YXJuIiwibGF0TG5nIiwicHJvamVjdGVkIiwicHJvamVjdFBvaW50T25TZWdtZW50IiwiYmVzdFNlZ21lbnQiLCJtaWQiLCJBIiwiQiIsIlAiLCJBQiIsIkFQIiwiYWIyIiwibWF4IiwibWluIiwiZGlzdGFuY2VUb1NlZ21lbnQiLCJkZWJ1Z1JvYWRzIiwiX24iLCJGIiwiZ2V0Q2FjaGVLZXkiLCJsb2FkaW5nUXVldWUiLCJNQVhfQ09OQ1VSUkVOVCIsImFjdGl2ZVJlcXVlc3RzIiwiZ2V0Q2h1bmtJZCIsIngiLCJfbG9hZFZpc2libGVSb2FkQ2h1bmtzIiwiY2h1bmtzVG9Mb2FkIiwiZmluYWxDaHVua3NUb0xvYWQiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX2NodW5rSWQzIiwiX2NhY2hlS2V5IiwiY2FjaGVkIiwiX2ZpbmFsQ2h1bmtzVG9Mb2FkIiwiX3lpZWxkJFByb21pc2UkYWxsIiwiX3lpZWxkJFByb21pc2UkYWxsMiIsInJvYWRzUmVzcG9uc2UiLCJidWlsZGluZ3NSZXNwb25zZSIsImRlcG9zaXRzUmVzcG9uc2UiLCJyb2Fkc0RhdGEiLCJidWlsZGluZ3NEYXRhIiwiZGVwb3NpdHNEYXRhIiwiYnVpbGRpbmdzQnlDaHVuayIsIl9pMiIsIl9maW5hbENodW5rc1RvTG9hZDIiLCJfcm9hZHNEYXRhJF9jaHVua0lkIiwiX2J1aWxkaW5nc0RhdGEkX2NodW5rIiwiX2NodW5rSWQiLCJjaHVua0RhdGEiLCJoYXNSb2FkcyIsImNhY2hlS2V5IiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsIl9jaHVua0lkMiIsImdldFZpc2libGVDaHVua3MiLCJmaWx0ZXIiLCJsb2FkZWRDaHVua3MiLCJnZXRJdGVtIiwiRGF0ZSIsIm5vdyIsInRzIiwicmVmcmVzaENodW5rQ29sb3JzIiwiYWxsIiwiY0lkIiwic2V0SXRlbSIsImNodW5rIiwicmVmcmVzaENodW5rIiwiX3JlZnJlc2hDaHVuayIsImZldGNoU2luZ2xlQ2h1bmsiLCJfZmV0Y2hTaW5nbGVDaHVuayIsIl9yb2Fkc0RhdGEkY2h1bmtJZCIsIl9idWlsZGluZ3NEYXRhJGNodW5rSSIsIl95aWVsZCRQcm9taXNlJGFsbDMiLCJfeWllbGQkUHJvbWlzZSRhbGw0Iiwicm9hZHNSZXMiLCJidWlsZGluZ3NSZXMiLCJkZXBvc2l0c1JlcyIsImNodW5rRGVwb3NpdHMiLCJtaW5YIiwibWF4WCIsIm1pblkiLCJtYXhZIiwicm9hZHNSZWFkeSIsImRyYXduUm9hZHMiLCJyb2FkTGF5ZXJzIiwiYnVpbGRpbmdMYXllcnMiLCJjYWNoZWRSb2FkcyIsImNhY2hlRGlydHkiLCJtYXJrUm9hZENhY2hlRGlydHkiLCJ2YWx1ZXMiLCJmbGF0TWFwIiwiZXZlbnRzIiwiZWwiLCJldmVudCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsIm5vdGlmIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJiYXNlQ2lyY2xlcyIsInJvYWRTZWdtZW50cyIsIkZBQ1RJT05fQ09MT1JTIiwiZ2V0RmFjdGlvbkNvbG9yIiwiYmFzZUlkIiwicGxheWVyRmFjdGlvbiIsImNsZWFyQWxsQmFzZUNpcmNsZXMiLCJjbGVhciIsImRyYXdSb2FkU2VnbWVudCIsInJvYWRJZCIsImNvb3JkcyIsInJlbW92ZVJvYWRTZWdtZW50IiwiY2xlYXJBbGxSb2FkU2VnbWVudHMiLCJ1cGRhdGVCYXNlQ2lyY2xlcyIsImJhc2VzIiwidXBkYXRlUm9hZFNlZ21lbnRzIiwiaXNQbGF5ZXJSb2FkIiwic2V0Um9hZFNlZ21lbnRDb2xvciIsImZvcm1hdCIsInRvRml4ZWQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzbmFwVG9DaHVuayIsIkNIVU5LX1JBRElVUyIsIm9uY2UiLCJfZSRsYXRsbmciLCJzbmFwcGVkIiwiZGVmYXVsdExhdCIsImRlZmF1bHRMbmciLCJnZW9sb2NhdGlvbiIsImdwc0ZvdW5kIiwid2F0Y2hQb3NpdGlvbiIsInBvc2l0aW9uIiwidGltZW91dCIsInVwZGF0ZVRpbWVycyIsInNjaGVkdWxlZEF0IiwidGltZXJFbCIsInNjaGVkdWxlZCIsImdldFRpbWUiLCJkaWZmU2VjIiwicm91bmQiLCJtaW5zIiwic2VjcyIsImlubmVySFRNTCIsImVsYXBzZWQiLCJhYnMiLCJzZXRJbnRlcnZhbCIsIkljb24iLCJEZWZhdWx0IiwiX2dldEljb25VcmwiLCJtZXJnZU9wdGlvbnMiLCJpY29uUmV0aW5hVXJsIiwicmVxdWlyZSIsIkNBQ0hFX1ZFUlNJT04iLCJUWVBFX01BUCIsIkRFQlVHIiwiZW5hYmxlZCIsIl93aW5kb3ckQVBQX0RFQlVHIiwiQVBQX0RFQlVHIiwibWVyY3VyZSIsImludmVudG9yeSIsImRlbGl2ZXJ5IiwibmV0d29yayIsImNhY2hlIiwiY2FuTG9nIiwia2V5IiwiX2NvbnNvbGUiLCJfY29uc29sZTIiLCJfY29uc29sZTMiXSwic291cmNlUm9vdCI6IiJ9