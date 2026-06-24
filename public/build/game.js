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
    }).addTo(deliveryLayer).bindPopup("\n                <strong>Camion n\xB0".concat(key, "</strong><br>\n                Transporte : ").concat((_data$quantity = data.quantity) !== null && _data$quantity !== void 0 ? _data$quantity : '', " unit\xE9s de <strong>").concat((_data$resourceLabel = data.resourceLabel) !== null && _data$resourceLabel !== void 0 ? _data$resourceLabel : '', "</strong><br>\n                <span class=\"delivery-progress-").concat(key, "\">Progression : ").concat((_data$progress3 = data.progress) !== null && _data$progress3 !== void 0 ? _data$progress3 : 0, "%</span><br>\n                <small class=\"text-muted\">D\xE9part pr\xE9vu : ").concat(scheduledTime, "</small>\n            "));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTFQLE1BQUEsQ0FDekJtWSxJQUFJLENBQ1gsQ0FBQztBQUNMLEM7Ozs7Ozs7Ozs7Ozs7O0FDNURPLElBQU04UixRQUFRLEdBQUc7RUFDcEJLLE9BQU8sRUFBRSxTQUFTO0VBQ2xCQyxTQUFTLEVBQUUsV0FBVztFQUN0QjFWLFFBQVEsRUFBRSxVQUFVO0VBQ3BCekYsU0FBUyxFQUFFLFdBQVc7RUFDdEJtUixNQUFNLEVBQUUsUUFBUTtFQUNoQmlLLE9BQU8sRUFBRSxTQUFTO0VBQ2xCQyxLQUFLLEVBQUU7QUFDWCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL0xheWVycy9ncmlkTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9idWlsZGluZ3MvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2J1aWxkaW5ncy9idWlsZE1vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9idWlsZGluZ3MvYnVpbGRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9kZWxpdmVyeS9kZWxpdmVyeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2dhbWUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2ludmVudG9yeS9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvZGVwb3NpdHMvZGVwb3NpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwL3JvYWRzL2ludmFsaWRhdGVDaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9yb2Fkcy9yb2FkVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvcm9hZHMvcm9hZHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvcm9hZHMvcm9hZHNTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91aS9kcmF3T25NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91dGlscy9hZG1pbl9jbGlwYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91dGlscy9jaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3V0aWxzL2dwcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3V0aWxzL3NuYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91dGlscy90aW1lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9MZWFmbGV0V3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy91dGlscy9jYWNoZVV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3V0aWxzL2RlYnVnLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3V0aWxzL3R5cGVNYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4uL3V0aWxzL2NodW5rLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwLCBpc0dyaWRMYXllckFjdGl2ZSB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyaWRMYXllciA9IEwubGF5ZXJHcm91cCgpO1xyXG5cclxuY29uc3QgdmlzaWJsZUNodW5rcyA9IG5ldyBNYXAoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R3JpZExheWVyKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBpZiAoIWlzR3JpZExheWVyQWN0aXZlKCkpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB6b29tID0gbWFwLmdldFpvb20oKTtcclxuICAgIGlmICh6b29tIDwgMTQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBib3VuZHMgPSBtYXAuZ2V0Qm91bmRzKCk7XHJcblxyXG4gICAgY29uc3QgbWluTGF0ID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0U291dGgoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWF4TGF0ID0gTWF0aC5jZWlsKGJvdW5kcy5nZXROb3J0aCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtaW5MbmcgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRXZXN0KCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1heExuZyA9IE1hdGguY2VpbChib3VuZHMuZ2V0RWFzdCgpIC8gQ0hVTktfU0laRSk7XHJcblxyXG4gICAgY29uc3QgbmV3VmlzaWJsZSA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gbWluTGF0OyBpIDwgbWF4TGF0OyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gbWluTG5nOyBqIDwgbWF4TG5nOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYCR7aX1fJHtqfWA7XHJcbiAgICAgICAgICAgIG5ld1Zpc2libGUuYWRkKGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlQ2h1bmtzLmhhcyhpZCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGF0ID0gaSAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgICAgIGNvbnN0IGxuZyA9IGogKiBDSFVOS19TSVpFO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IEwucmVjdGFuZ2xlKFtcclxuICAgICAgICAgICAgICAgIFtsYXQsIGxuZ10sXHJcbiAgICAgICAgICAgICAgICBbbGF0ICsgQ0hVTktfU0laRSwgbG5nICsgQ0hVTktfU0laRV1cclxuICAgICAgICAgICAgXSwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IDEsXHJcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogMC4xNVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlY3Qub24oJ21vdXNlb3ZlcicsICgpID0+IHJlY3Quc2V0U3R5bGUoeyBmaWxsT3BhY2l0eTogMC4zIH0pKTtcclxuICAgICAgICAgICAgcmVjdC5vbignbW91c2VvdXQnLCAoKSA9PiByZWN0LnNldFN0eWxlKHsgZmlsbE9wYWNpdHk6IDAuMTUgfSkpO1xyXG5cclxuICAgICAgICAgICAgZ3JpZExheWVyLmFkZExheWVyKHJlY3QpO1xyXG5cclxuICAgICAgICAgICAgdmlzaWJsZUNodW5rcy5zZXQoaWQsIHJlY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDwn6e5IHJlbW92ZSBjZXV4IGhvcnMgw6ljcmFuXHJcbiAgICBmb3IgKGNvbnN0IFtpZCwgcmVjdF0gb2YgdmlzaWJsZUNodW5rcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICBpZiAoIW5ld1Zpc2libGUuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICBncmlkTGF5ZXIucmVtb3ZlTGF5ZXIocmVjdCk7XHJcbiAgICAgICAgICAgIHZpc2libGVDaHVua3MuZGVsZXRlKGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVidWdMb2coXCJjaHVua3NcIiwgXCJDaHVua3MgdmlzaWJsZXM6XCIsIHZpc2libGVDaHVua3Muc2l6ZSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENIVU5LIENPTE9SXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDaHVua0NvbG9yKGlkLCBjb2xvcikge1xyXG4gICAgaWYgKCFpc0dyaWRMYXllckFjdGl2ZSgpKSByZXR1cm47XHJcbiAgICBcclxuICAgIGNvbnN0IHJlY3QgPSB2aXNpYmxlQ2h1bmtzLmdldChpZCk7XHJcbiAgICBpZiAoIXJlY3QpIHJldHVybjtcclxuXHJcbiAgICByZWN0LnNldFN0eWxlKHtcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBmaWxsT3BhY2l0eTogMC4yXHJcbiAgICB9KTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBidWlsZFJlcXVlc3QobGF0LCBsbmcsIHR5cGVJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL2J1aWxkJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbGF0OiBsYXQsIGxuZzogbG5nLCB0eXBlX2lkOiB0eXBlSWQgfSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVpbGRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL21hcC1kYXRhJylcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWlsZGluZ0Nvc3RzKGJ1aWxkaW5nVHlwZUlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYC9hcGkvYnVpbGRpbmctdHlwZXMvJHtidWlsZGluZ1R5cGVJZH0vY29zdHNgKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZ3JhZGVCdWlsZGluZyhidWlsZGluZ0lkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYC9hcGkvYnVpbGRpbmcvJHtidWlsZGluZ0lkfS91cGdyYWRlYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVwZ3JhZGVJbmZvKGJ1aWxkaW5nSWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgL2FwaS9idWlsZGluZy8ke2J1aWxkaW5nSWR9L3VwZ3JhZGUtaW5mb2ApO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBmbHlUbywgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IHJvYWRzU3RhdGUsIGdldEFsbExvYWRlZFJvYWRzIH0gZnJvbSAnLi4vbWFwL3JvYWRzL3JvYWRzU3RhdGUuanMnO1xyXG5pbXBvcnQgeyBnZXRCdWlsZGluZ0ltYWdlIH0gZnJvbSAnLi9idWlsZGluZy5qcyc7XHJcbmltcG9ydCB7IENIVU5LX1NJWkUgfSBmcm9tICcuLi91dGlscy9jaHVuay5qcyc7XHJcbmltcG9ydCB7IHNhZmVMb2FkQ2h1bmssIGxvYWRWaXNpYmxlUm9hZENodW5rcyB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2Fkcy5qcyc7XHJcbmltcG9ydCB7IGZpbmRDbG9zZXN0UG9pbnRPblJvYWQsIGZpbmRDbG9zZXN0U2VnbWVudCB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2FkVXRpbHMuanMnO1xyXG5pbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vbm90aWZpY2F0aW9ucy5qcyc7XHJcbmltcG9ydCB7IGdldEFkbWluQ29vcmRzIH0gZnJvbSAnLi4vdXRpbHMvYWRtaW5fY2xpcGJvYXJkLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgZHJhd0Jhc2VDaXJjbGUsIHJlbW92ZUJhc2VDaXJjbGUgfSBmcm9tICcuLi91aS9kcmF3T25NYXAuanMnO1xyXG5pbXBvcnQgeyByZWZyZXNoU2lkZWJhciB9IGZyb20gJy4vYnVpbGRNb2RlLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIPCfp6AgU1RBVEVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxubGV0IGJhc2VNYXJrZXIgPSBudWxsO1xyXG5sZXQgYmFzZUNpcmNsZSA9IG51bGw7XHJcbmxldCBiYXNlUG9zaXRpb24gPSBudWxsO1xyXG5sZXQgYmFzZUNyZWF0ZWQgPSBmYWxzZTtcclxubGV0IHBsYWNpbmdCYXNlID0gZmFsc2U7XHJcblxyXG5sZXQgcHJldmlld01hcmtlciA9IG51bGw7XHJcbmxldCBwcmV2aWV3Q2lyY2xlID0gbnVsbDtcclxubGV0IHByZXZpZXdTbmFwTGF0TG5nID0gbnVsbDtcclxubGV0IHByZXZpZXdMaW5lID0gbnVsbDtcclxubGV0IGhpZ2hsaWdodGVkU2VnbWVudCA9IG51bGw7XHJcblxyXG5sZXQgY3VycmVudFBsYXllckZhY3Rpb24gPSAnZGVmYXVsdCc7XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0VUIFBMQVlFUiBGQUNUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50UGxheWVyRmFjdGlvbihmYWN0aW9uKSB7XHJcbiAgICBjdXJyZW50UGxheWVyRmFjdGlvbiA9IChmYWN0aW9uIHx8ICdkZWZhdWx0JykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUIFBMQVlFUiBGQUNUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpIHtcclxuICAgIHJldHVybiBjdXJyZW50UGxheWVyRmFjdGlvbjtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5JVCBVSVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJhc2VVSSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBjb25zdCBiYXNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2VCdG4nKTtcclxuXHJcbiAgICBiYXNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBtb2RlID0gYmFzZUJ0bi5kYXRhc2V0Lm1vZGU7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gQ1JFQVRFIEJBU0UgTU9ERSBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGlmIChtb2RlID09PSAnY3JlYXRlJykge1xyXG4gICAgICAgICAgICBpZiAoYmFzZUNyZWF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQmFzZSBkw6lqw6AgY3LDqcOpZSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwbGFjaW5nQmFzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnY3Jvc3NoYWlyJztcclxuXHJcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oXCJDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgcGxhY2VyIHRhIGJhc2VcIiwgJ2luZm8nKTtcclxuICAgICAgICAgICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFJFVFVSTiBCQVNFIE1PREVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGlmIChtb2RlID09PSAncmV0dXJuJykge1xyXG4gICAgICAgICAgICBpZiAoIWJhc2VQb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBdWN1bmUgYmFzZSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmbHlUbyhiYXNlUG9zaXRpb25bMF0sIGJhc2VQb3NpdGlvblsxXSwgMTYpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQ0xJQ0sgTUFQXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbWFwLm9uKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFwbGFjaW5nQmFzZSB8fCBiYXNlQ3JlYXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghcHJldmlld1NuYXBMYXRMbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgeyBsYXQsIGxuZyB9ID0gcHJldmlld1NuYXBMYXRMbmc7XHJcblxyXG4gICAgICAgIGlmICghaXNCYXNlUGxhY2VtZW50VmFsaWQobGF0LCBsbmcpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi4p2MIFRyb3AgcHJvY2hlIGQndW5lIGJhc2UgIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYW51cFByZXZpZXcobWFwKTtcclxuICAgICAgICBjcmVhdGVCYXNlKGxhdCwgbG5nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE1PVVNFIE1PVkUgKHByZXZpZXcgc25hcCByb2FkKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcC5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFwbGFjaW5nQmFzZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByb2FkcyA9IGdldEFsbExvYWRlZFJvYWRzKCk7XHJcblxyXG4gICAgICAgIGlmICghcm9hZHMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbmRDbG9zZXN0UG9pbnRPblJvYWQoZS5sYXRsbmcsIHJvYWRzKTtcclxuICAgICAgICBpZiAoIXJlc3VsdC5wb2ludCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBwcmV2aWV3U25hcExhdExuZyA9IHJlc3VsdC5wb2ludDtcclxuXHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGlzQmFzZVBsYWNlbWVudFZhbGlkKHJlc3VsdC5wb2ludC5sYXQsIHJlc3VsdC5wb2ludC5sbmcpO1xyXG5cclxuICAgICAgICBjbGVhbnVwUHJldmlldyhtYXApO1xyXG5cclxuICAgICAgICBjb25zdCBjb2xvciA9IGlzVmFsaWQgPyAnZ3JlZW4nIDogJ3JlZCc7XHJcblxyXG4gICAgICAgIHByZXZpZXdDaXJjbGUgPSBMLmNpcmNsZShyZXN1bHQucG9pbnQsIHtcclxuICAgICAgICAgICAgcmFkaXVzOiA2MDAsXHJcbiAgICAgICAgICAgIGNvbG9yLFxyXG4gICAgICAgICAgICB3ZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwXHJcbiAgICAgICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICAgICAgcHJldmlld01hcmtlciA9IEwubWFya2VyKHJlc3VsdC5wb2ludCkuYWRkVG8obWFwKTtcclxuXHJcbiAgICAgICAgcHJldmlld0xpbmUgPSBMLnBvbHlsaW5lKFtlLmxhdGxuZywgcmVzdWx0LnBvaW50XSwge1xyXG4gICAgICAgICAgICBjb2xvcjogJ2N5YW4nLFxyXG4gICAgICAgICAgICB3ZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgICAgICAgZGFzaEFycmF5OiAnNSwgNSdcclxuICAgICAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBjb25zdCBzZWdtZW50ID0gZmluZENsb3Nlc3RTZWdtZW50KGUubGF0bG5nLCByb2Fkcyk7XHJcblxyXG4gICAgICAgIGlmIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkU2VnbWVudCA9IEwucG9seWxpbmUoc2VnbWVudCwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiA2LFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44XHJcbiAgICAgICAgICAgIH0pLmFkZFRvKG1hcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFVQREFURSBWSVNVQUwgQkFTRSBBTkQgT1RIRVIgQkFTRVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcC5vbignem9vbWVuZCcsICgpID0+IHtcclxuICAgICAgICB1cGRhdGVCYXNlRGlzcGxheSgpO1xyXG4gICAgICAgIHVwZGF0ZU90aGVyQmFzZXMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQQVRIRklORElORyBERUJVRyBGT1IgQURNSU4gLSBDTElDSyBUTyBHRVQgQ09PUkRJTkFURVNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlcigpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgc2hvd05vdGlmaWNhdGlvbihcIk1vZGUgQWRtaW4gYWN0aXbDqSA6IGNsaXF1ZXogc3VyIGxhIGNhcnRlXCIsICdpbmZvJyk7XHJcbiAgICAgICAgXHJcbiAgICBtYXAub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBnZXRBZG1pbkNvb3JkcyhlLmxhdGxuZy5sYXQsIGUubGF0bG5nLmxuZyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LmVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlciA9IGVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlcjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIPCfp7kgQ0xFQU4gUFJFVklFV1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBjbGVhbnVwUHJldmlldygpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBwcmV2aWV3TWFya2VyICYmIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3TWFya2VyKTtcclxuICAgIHByZXZpZXdDaXJjbGUgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdDaXJjbGUpO1xyXG4gICAgcHJldmlld0xpbmUgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdMaW5lKTtcclxuICAgIGhpZ2hsaWdodGVkU2VnbWVudCAmJiBtYXAucmVtb3ZlTGF5ZXIoaGlnaGxpZ2h0ZWRTZWdtZW50KTtcclxuXHJcbiAgICBwcmV2aWV3TWFya2VyID0gbnVsbDtcclxuICAgIHByZXZpZXdDaXJjbGUgPSBudWxsO1xyXG4gICAgcHJldmlld0xpbmUgPSBudWxsO1xyXG4gICAgaGlnaGxpZ2h0ZWRTZWdtZW50ID0gbnVsbDtcclxuXHJcbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJyc7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaXNCYXNlUGxhY2VtZW50VmFsaWQobGF0LCBsbmcpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICByZXR1cm4gb3RoZXJCYXNlcy5ldmVyeShiYXNlID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdCA9IG1hcC5kaXN0YW5jZShcclxuICAgICAgICAgICAgW2xhdCwgbG5nXSxcclxuICAgICAgICAgICAgW2Jhc2UubGF0LCBiYXNlLmxuZ11cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlzdCA+PSAxMTAwO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENSRUFURSBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGNyZWF0ZUJhc2UobGF0LCBsbmcpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBwbGFjaW5nQmFzZSA9IGZhbHNlO1xyXG4gICAgYmFzZVBvc2l0aW9uID0gW2xhdCwgbG5nXTtcclxuXHJcbiAgICBmbHlUbyhsYXQsIGxuZyk7XHJcblxyXG4gICAgYmFzZUNpcmNsZSA9IGRyYXdCYXNlQ2lyY2xlKCdwbGF5ZXJfYmFzZScsIGxhdCwgbG5nLCBjdXJyZW50UGxheWVyRmFjdGlvbiwgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgYmFzZVR5cGVJZCA9IDE7XHJcbiAgICBmZXRjaCgnL2FwaS9idWlsZCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGxhdCxcclxuICAgICAgICAgICAgbG5nLFxyXG4gICAgICAgICAgICB0eXBlX2lkOiBiYXNlVHlwZUlkXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmICghcmVzLm9rKSByZXR1cm4gcmVzLmpzb24oKS50aGVuKGVyciA9PiB7IHRocm93IG5ldyBFcnJvcihlcnIuZXJyb3IgfHwgXCJBUEkgZXJyb3JcIikgfSk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoU2lkZWJhcigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFLDqS1pbml0aWFsaXNlciBsJ1VJIGRlIGJhc2UgcG91ciByw6ktYXR0YWNoZXIgbGVzIGxpc3RlbmVycyBhdXggbm91dmVhdXggYm91dG9uc1xyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9iYXNlLmpzJykudGhlbigoeyBpbml0QmFzZVVJIH0pID0+IGluaXRCYXNlVUkoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuKVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYmFzZXMnLCBcIkVycmV1ciBjcsOpYXRpb24gYmFzZVwiLCBlcnIpO1xyXG4gICAgICAgIHJlbW92ZUJhc2UoKTtcclxuICAgICAgICBhbGVydChcIkVycmV1ciBjcsOpYXRpb24gYmFzZSA6IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG4gICAgdXBkYXRlQmFzZURpc3BsYXkoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUkVNT1ZFIEJBU0VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gcmVtb3ZlQmFzZSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBiYXNlTWFya2VyICYmIG1hcC5yZW1vdmVMYXllcihiYXNlTWFya2VyKTtcclxuICAgIGJhc2VDaXJjbGUgJiYgbWFwLnJlbW92ZUxheWVyKGJhc2VDaXJjbGUpO1xyXG5cclxuICAgIGJhc2VNYXJrZXIgPSBudWxsO1xyXG4gICAgYmFzZUNpcmNsZSA9IG51bGw7XHJcbiAgICBiYXNlUG9zaXRpb24gPSBudWxsO1xyXG4gICAgYmFzZUNyZWF0ZWQgPSBmYWxzZTtcclxuICAgIHBsYWNpbmdCYXNlID0gZmFsc2U7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG59XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExPQUQgT1RIRVIgQkFTRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5sZXQgb3RoZXJCYXNlcyA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRPdGhlckJhc2UobGF0LCBsbmcsIHBzZXVkbywgZmFjdGlvbikge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShsbmcpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaXNQbGF5ZXJCYXNlID0gZmFjdGlvbiA9PT0gY3VycmVudFBsYXllckZhY3Rpb247XHJcblxyXG4gICAgLy8gVXRpbGlzZXIgZHJhd0Jhc2VDaXJjbGUgZGUgZHJhd09uTWFwLmpzXHJcbiAgICBjb25zdCBjaXJjbGUgPSBkcmF3QmFzZUNpcmNsZShgb3RoZXJfJHtsYXR9XyR7bG5nfWAsIGxhdCwgbG5nLCBmYWN0aW9uLCBpc1BsYXllckJhc2UpO1xyXG5cclxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbihtYXAuZ2V0Wm9vbSgpLCBmYWN0aW9uKTtcclxuXHJcbiAgICBsZXQgbWFya2VyID0gbnVsbDtcclxuXHJcbiAgICBpZiAoaWNvbikge1xyXG4gICAgICAgIG1hcmtlciA9IEwubWFya2VyKFtsYXQsIGxuZ10sIHsgaWNvbiB9KVxyXG4gICAgICAgICAgICAuYWRkVG8obWFwKVxyXG4gICAgICAgICAgICAuYmluZFBvcHVwKGDwn4+V77iPIEJhc2UgZGUgJHtwc2V1ZG99YCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3RoZXJCYXNlcy5wdXNoKHsgbGF0LCBsbmcsIHBzZXVkbywgbWFya2VyLCBjaXJjbGUsIGZhY3Rpb24gfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVQREFURSBPVEhFUiBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHVwZGF0ZU90aGVyQmFzZXMoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBjb25zdCB6b29tID0gbWFwLmdldFpvb20oKTtcclxuXHJcbiAgICBvdGhlckJhc2VzLmZvckVhY2goYmFzZSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbih6b29tLCBiYXNlLmZhY3Rpb24pO1xyXG5cclxuICAgICAgICBpZiAoIWljb24pIHtcclxuICAgICAgICAgICAgaWYgKGJhc2UubWFya2VyKSBtYXAucmVtb3ZlTGF5ZXIoYmFzZS5tYXJrZXIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWJhc2UubWFya2VyKSB7XHJcbiAgICAgICAgICAgIGJhc2UubWFya2VyID0gTC5tYXJrZXIoW2Jhc2UubGF0LCBiYXNlLmxuZ10sIHsgaWNvbiB9KVxyXG4gICAgICAgICAgICAgICAgLmFkZFRvKG1hcClcclxuICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAoYPCfj5XvuI8gQmFzZSBkZSAke2Jhc2UucHNldWRvfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hcC5oYXNMYXllcihiYXNlLm1hcmtlcikpIGJhc2UubWFya2VyLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgICAgIGJhc2UubWFya2VyLnNldEljb24oaWNvbik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTE9BRCBGUk9NIFNFUlZFUlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEJhc2VGcm9tU2VydmVyKGxhdCwgbG5nKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobGF0KSB8fCAhTnVtYmVyLmlzRmluaXRlKGxuZykpIHJldHVybjtcclxuXHJcbiAgICBiYXNlUG9zaXRpb24gPSBbbGF0LCBsbmddO1xyXG4gICAgYmFzZUNyZWF0ZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIFV0aWxpc2VyIGRyYXdCYXNlQ2lyY2xlIGRlIGRyYXdPbk1hcC5qcyAobm90cmUgYmFzZSA9IGlzUGxheWVyQmFzZSA9IHRydWUpXHJcbiAgICBiYXNlQ2lyY2xlID0gZHJhd0Jhc2VDaXJjbGUoJ3BsYXllcl9iYXNlJywgbGF0LCBsbmcsIGN1cnJlbnRQbGF5ZXJGYWN0aW9uLCB0cnVlKTtcclxuXHJcbiAgICB1cGRhdGVCYXNlRGlzcGxheSgpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVUERBVEUgQkFTRSBESVNQTEFZXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHVwZGF0ZUJhc2VEaXNwbGF5KCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghYmFzZVBvc2l0aW9uKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUJhc2VJY29uKG1hcC5nZXRab29tKCksIGN1cnJlbnRQbGF5ZXJGYWN0aW9uKTtcclxuXHJcbiAgICBpZiAoIWljb24pIHtcclxuICAgICAgICBpZiAoYmFzZU1hcmtlcikgbWFwLnJlbW92ZUxheWVyKGJhc2VNYXJrZXIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJhc2VNYXJrZXIpIHtcclxuICAgICAgICBiYXNlTWFya2VyID0gTC5tYXJrZXIoYmFzZVBvc2l0aW9uLCB7IGljb24gfSkuYWRkVG8obWFwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFtYXAuaGFzTGF5ZXIoYmFzZU1hcmtlcikpIGJhc2VNYXJrZXIuYWRkVG8obWFwKTtcclxuICAgICAgICBiYXNlTWFya2VyLnNldEljb24oaWNvbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENSRUFURSBCQVNFIElDT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gY3JlYXRlQmFzZUljb24oem9vbSwgZmFjdGlvbikge1xyXG5cclxuICAgIGlmICh6b29tIDwgMTMpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IHNpemUgPSBmYWN0aW9uICE9PSAnbm9tYWRlcycgPyAoem9vbSA+IDE1ID8gMTAwIDogNzApIDogKHpvb20gPiAxNSA/IDc1IDogNjApO1xyXG5cclxuICAgIC8vIFRvdWpvdXJzIHV0aWxpc2VyIGwnaWPDtG5lIGRlIGxhIGZhY3Rpb24gKGxlIGZhbGxiYWNrIEFwYWNoZSBnw6hyZSBsZXMgNDA0KVxyXG4gICAgLy8gU2kgbCdpY8O0bmUgbidleGlzdGUgcGFzLCBBcGFjaGUgcmVkaXJpZ2UgdmVycyBkZWZhdWx0IGF1dG9tYXRpcXVlbWVudFxyXG4gICAgY29uc3QgaWNvblVybCA9IGdldEJ1aWxkaW5nSW1hZ2UoZmFjdGlvbiwgJ2Jhc2UnKTtcclxuXHJcbiAgICByZXR1cm4gTC5pY29uKHtcclxuICAgICAgICBpY29uVXJsOiBpY29uVXJsLFxyXG4gICAgICAgIGljb25TaXplOiBbc2l6ZSwgc2l6ZV0sXHJcbiAgICAgICAgaWNvbkFuY2hvcjogW3NpemUgLyAyLCBzaXplIC8gMl0sXHJcbiAgICAgICAgcG9wdXBBbmNob3I6IFswLCAtc2l6ZSAvIDJdXHJcbiAgICB9KTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IGdldEJ1aWxkaW5nQ29zdHMsIGJ1aWxkUmVxdWVzdCB9IGZyb20gJy4uL2FwaS5qcyc7XHJcbmltcG9ydCB7IGdldEJ1aWxkaW5nSW1hZ2UgfSBmcm9tICcuL2J1aWxkaW5nLmpzJztcclxuaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4uL25vdGlmaWNhdGlvbnMuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQlVJTEQgTU9ERSBTVEFURVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5sZXQgc2VsZWN0ZWRCdWlsZGluZ1R5cGUgPSBudWxsO1xyXG5sZXQgcHJldmlld0J1aWxkaW5nTWFya2VyID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXNlIGxlIG1vZGUgY29uc3RydWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJ1aWxkTW9kZSgpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIC8vIFV0aWxpc2VyIGxhIGTDqWzDqWdhdGlvbiBkJ8OpdsOpbmVtZW50cyBwb3VyIGxlcyBib3V0b25zIGR5bmFtaXF1ZXNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldC5jbG9zZXN0KCcuYnVpbGQtaXRlbScpO1xyXG4gICAgICAgIGlmICghYnRuKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHR5cGVJZCA9IGJ0bi5kYXRhc2V0LnR5cGVJZDtcclxuICAgICAgICBpZiAoIXR5cGVJZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBTw6lsZWN0aW9ubmVyIGxlIHR5cGUgZGUgYsOidGltZW50XHJcbiAgICAgICAgYXdhaXQgc2VsZWN0QnVpbGRpbmdUeXBlKHR5cGVJZCwgYnRuKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsaWNrIHN1ciBsYSBjYXJ0ZSBwb3VyIGNvbnN0cnVpcmVcclxuICAgIG1hcC5vbignY2xpY2snLCBvbk1hcENsaWNrKTtcclxuXHJcbiAgICAvLyBNb3VzZSBtb3ZlIHBvdXIgcHLDqXZpc3VhbGlzZXJcclxuICAgIG1hcC5vbignbW91c2Vtb3ZlJywgb25NYXBNb3VzZU1vdmUpO1xyXG59XHJcblxyXG4vKipcclxuICogU8OpbGVjdGlvbm5lIHVuIHR5cGUgZGUgYsOidGltZW50IMOgIGNvbnN0cnVpcmVcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdEJ1aWxkaW5nVHlwZSh0eXBlSWQsIGJ1dHRvbikge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgLy8gRMOpc8OpbGVjdGlvbm5lciBwcsOpY8OpZGVtbWVudFxyXG4gICAgY2xlYXJCdWlsZGluZ1NlbGVjdGlvbigpO1xyXG5cclxuICAgIC8vIEfDqXJlciBsZSBjYXMgc3DDqWNpYWwgZGUgbGEgYmFzZSAoYm91dG9uICNiYXNlQnRuKVxyXG4gICAgaWYgKGJ1dHRvbi5pZCA9PT0gJ2Jhc2VCdG4nICYmIHR5cGVJZCA9PSAxKSB7XHJcbiAgICAgICAgLy8gTGEgYmFzZSBlc3QgZ8OpcsOpZSBwYXIgYmFzZS5qcywgb24gbmUgZmFpdCByaWVuIGljaVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXR0cmUgZW4gw6l2aWRlbmNlIGxlIGJvdXRvbiBzw6lsZWN0aW9ubsOpXHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAvLyBSw6ljdXDDqXJlciBsZXMgY2/Du3RzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRCdWlsZGluZ0Nvc3RzKHR5cGVJZCk7XHJcbiAgICAgICAgc2VsZWN0ZWRCdWlsZGluZ1R5cGUgPSB7XHJcbiAgICAgICAgICAgIGlkOiB0eXBlSWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgY29zdHM6IGRhdGEuY29zdHMsXHJcbiAgICAgICAgICAgIGJ1dHRvbjogYnV0dG9uXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbihgU8OpbGVjdGlvbm7DqTogJHtkYXRhLm5hbWV9LiBDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgY29uc3RydWlyZS5gLCAnaW5mbycpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGNvw7t0c1wiLCBlKTtcclxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGNvw7t0c1wiLCAnZXJyb3InKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE5ldHRvaWUgbGEgc8OpbGVjdGlvbiBhY3R1ZWxsZVxyXG4gKi9cclxuZnVuY3Rpb24gY2xlYXJCdWlsZGluZ1NlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmIChwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0J1aWxkaW5nTWFya2VyKTtcclxuICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdGVkQnVpbGRpbmdUeXBlID0gbnVsbDtcclxuXHJcbiAgICAvLyBSZXRpcmVyIGxhIGNsYXNzZSBzZWxlY3RlZCBkZSB0b3VzIGxlcyBib3V0b25zXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnVpbGQtaXRlbScpLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogR2VzdGlvbiBkdSBjbGljayBzdXIgbGEgY2FydGVcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIG9uTWFwQ2xpY2soZSkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFzZWxlY3RlZEJ1aWxkaW5nVHlwZSkgcmV0dXJuO1xyXG4gICAgaWYgKCFwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBsYXQgPSBlLmxhdGxuZy5sYXQ7XHJcbiAgICBjb25zdCBsbmcgPSBlLmxhdGxuZy5sbmc7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJ1aWxkUmVxdWVzdChsYXQsIGxuZywgc2VsZWN0ZWRCdWlsZGluZ1R5cGUuaWQpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZygnYnVpbGRpbmdzJywgYCR7c2VsZWN0ZWRCdWlsZGluZ1R5cGUubmFtZX0gY29uc3RydWl0IGF2ZWMgc3VjY8OocyAhYCk7XHJcbiAgICAgICAgICAgIC8vIE5ldHRveWVyXHJcbiAgICAgICAgICAgIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3QnVpbGRpbmdNYXJrZXIpO1xyXG4gICAgICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBjbGVhckJ1aWxkaW5nU2VsZWN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSYWZyYcOuY2hpciBsYSBzaWRlYmFyIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnJlZnJlc2hTaWRlYmFyKSB7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoU2lkZWJhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgYEVycmV1cjogJHtkYXRhLmVycm9yfWApO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGRlIGxhIGNvbnN0cnVjdGlvblwiLCBlKTtcclxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwiRXJyZXVyIHLDqXNlYXUgbG9ycyBkZSBsYSBjb25zdHJ1Y3Rpb25cIiwgJ2Vycm9yJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcsOpdmlzdWFsaXNhdGlvbiBkZSBsYSBwb3NpdGlvbiBkZSBjb25zdHJ1Y3Rpb25cclxuICovXHJcbmZ1bmN0aW9uIG9uTWFwTW91c2VNb3ZlKGUpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghc2VsZWN0ZWRCdWlsZGluZ1R5cGUpIHtcclxuICAgICAgICAvLyBOZXR0b3llciBsZXMgbWFya2VycyBkZSBwcsOpdmlzdWFsaXNhdGlvblxyXG4gICAgICAgIGlmIChwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHtcclxuICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdCdWlsZGluZ01hcmtlcik7XHJcbiAgICAgICAgICAgIHByZXZpZXdCdWlsZGluZ01hcmtlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBam91dGVyIHVuIG1hcmtlciBkZSBwcsOpdmlzdWFsaXNhdGlvblxyXG4gICAgaWYgKCFwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHtcclxuICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBMLm1hcmtlcihbZS5sYXRsbmcubGF0LCBlLmxhdGxuZy5sbmddKS5hZGRUbyhtYXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIuc2V0TGF0TG5nKGUubGF0bG5nKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFjdGl2ZSBsZSBtb2RlIGNvbnN0cnVjdGlvbiBwb3VyIHVuIHR5cGUgZGUgYsOidGltZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVCdWlsZE1vZGUodHlwZUlkKSB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10eXBlLWlkPVwiJHt0eXBlSWR9XCJdYCk7XHJcbiAgICBpZiAoYnRuKSB7XHJcbiAgICAgICAgYnRuLmNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEw6lzYWN0aXZlIGxlIG1vZGUgY29uc3RydWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZUJ1aWxkTW9kZSgpIHtcclxuICAgIGNsZWFyQnVpbGRpbmdTZWxlY3Rpb24oKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFbDqXJpZmllIHNpIGxlIG1vZGUgY29uc3RydWN0aW9uIGVzdCBhY3RpZlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQnVpbGRNb2RlQWN0aXZlKCkge1xyXG4gICAgcmV0dXJuIHNlbGVjdGVkQnVpbGRpbmdUeXBlICE9PSBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogUmFmcmHDrmNoaXQgbGUgY29udGVudSBkZSBsYSBzaWRlYmFyXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFNpZGViYXIoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9zaWRlYmFyJyk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NpZGViYXIgPSBkb2MucXVlcnlTZWxlY3RvcignI3NpZGVCYXInKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdTaWRlYmFyKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZUJhcicpPy5yZXBsYWNlV2l0aChuZXdTaWRlYmFyKTtcclxuICAgICAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oJ1NpZGViYXIgYWN0dWFsaXPDqWUnLCAnaW5mbycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGxvcnMgZHUgcmFmcmHDrmNoaXNzZW1lbnQgZGUgbGEgc2lkZWJhclwiLCBlKTtcclxuICAgIH1cclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IGdldEJ1aWxkaW5nQ29zdHMsIHVwZ3JhZGVCdWlsZGluZywgZ2V0VXBncmFkZUluZm8gfSBmcm9tICcuLi9hcGkuanMnO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UGxheWVyRmFjdGlvbiB9IGZyb20gJy4vYmFzZS5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG4vLyBDYWNoZSBkZXMgaW5mb3JtYXRpb25zIGRlIGLDonRpbWVudHNcclxubGV0IGJ1aWxkaW5nTWFya2VycyA9IG5ldyBNYXAoKTtcclxuXHJcbi8vIENhY2hlIGRlcyBwb3B1cHMgZMOpasOgIGNoYXJnw6lzXHJcbmxldCBwb3B1cENvbnRlbnRMb2FkZWQgPSBuZXcgU2V0KCk7XHJcblxyXG4vLyBJRCBkdSBqb3VldXIgYWN0aWYgKGluaXRpYWxpc8OpIGRlcHVpcyBsJ0FQSSlcclxubGV0IGN1cnJlbnRQbGF5ZXJJZCA9IG51bGw7XHJcblxyXG4vKipcclxuICogRMOpZmluaXQgbCdJRCBkdSBqb3VldXIgYWN0aWZcclxuICogQHBhcmFtIHtudW1iZXJ9IGlkIC0gTCdJRCBkdSBqb3VldXIgY29ubmVjdMOpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFBsYXllcklkKGlkKSB7XHJcbiAgICBjdXJyZW50UGxheWVySWQgPSBpZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoYXJnZSBsZXMgYsOidGltZW50cyBzdXIgbGEgY2FydGUgYXZlYyBsZXVycyBwb3B1cHMgaW50ZXJhY3RpZnNcclxuICogQHBhcmFtIHtBcnJheX0gYnVpbGRpbmdzIC0gTGlzdGUgZGVzIGLDonRpbWVudHMgw6AgYWZmaWNoZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQnVpbGRpbmdzRnJvbURhdGEoYnVpbGRpbmdzKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAoIW1hcCkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiTWFwIG5vdCBpbml0aWFsaXplZFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFidWlsZGluZ3MgfHwgIUFycmF5LmlzQXJyYXkoYnVpbGRpbmdzKSkge1xyXG4gICAgICAgIGRlYnVnV2FybignYnVpbGRpbmdzJywgXCJsb2FkQnVpbGRpbmdzRnJvbURhdGE6IGludmFsaWQgYnVpbGRpbmdzIGRhdGFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkaW5ncy5mb3JFYWNoKGIgPT4ge1xyXG4gICAgICAgIC8vIElnbm9yZXIgbGVzIGJhc2VzIC0gZWxsZXMgc29udCBnw6lyw6llcyBwYXIgYmFzZS5qc1xyXG4gICAgICAgIGlmIChiLmNvZGUgPT09ICdiYXNlJyB8fCBiLnR5cGU/LnRvTG93ZXJDYXNlKCkgPT09ICdiYXNlJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShiLmxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShiLmxuZykpIHtcclxuICAgICAgICAgICAgZGVidWdXYXJuKCdidWlsZGluZ3MnLCBcIuKdjCBCdWlsZGluZyBpZ25vcsOpIChjb29yZCBpbnZhbGlkZSlcIiwgYik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFV0aWxpc2VyIGxhIGZhY3Rpb24gZHUgYsOidGltZW50IChvdSBmYWxsYmFjayBzdXIgbGEgZmFjdGlvbiBkdSBqb3VldXIpXHJcbiAgICAgICAgY29uc3QgYnVpbGRpbmdGYWN0aW9uID0gYi5mYWN0aW9uIHx8IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIENyw6llciBsJ2ljw7RuZSBhdmVjIGwnaW1hZ2UgZHUgYsOidGltZW50XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGNyZWF0ZUJ1aWxkaW5nSWNvbihiLmNvZGUsIGJ1aWxkaW5nRmFjdGlvbik7XHJcblxyXG4gICAgICAgIC8vIFN0b2NrZXIgbGVzIGRvbm7DqWVzIGR1IGJ1aWxkaW5nIHBvdXIgYWNjw6hzIHVsdMOpcmlldXJcclxuICAgICAgICBjb25zdCBidWlsZGluZ0RhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBiLmlkLFxyXG4gICAgICAgICAgICB0eXBlOiBiLnR5cGUsXHJcbiAgICAgICAgICAgIGxldmVsOiBiLmxldmVsLFxyXG4gICAgICAgICAgICBjb2RlOiBiLmNvZGUsXHJcbiAgICAgICAgICAgIGZhY3Rpb246IGJ1aWxkaW5nRmFjdGlvbixcclxuICAgICAgICAgICAgb3duZXJJZDogYi5vd25lcklkLFxyXG4gICAgICAgICAgICBwcm9kdWN0aW9uOiBiLnByb2R1Y3Rpb24gfHwgbnVsbCxcclxuICAgICAgICAgICAgcmVzb3VyY2VfdHlwZTogYi5yZXNvdXJjZV90eXBlIHx8IG51bGwsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQ3LDqWVyIGxlIG1hcmtlciBhdmVjIHBvcHVwIHZpZGUgKGNoYXJnw6kgYXUgbW9tZW50IGRlIGwnb3V2ZXJ0dXJlKVxyXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IEwubWFya2VyKFtiLmxhdCwgYi5sbmddLCB7IGljb24gfSlcclxuICAgICAgICAgICAgLmFkZFRvKG1hcClcclxuICAgICAgICAgICAgLmJpbmRQb3B1cChjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZ0RhdGEpKTtcclxuXHJcbiAgICAgICAgYnVpbGRpbmdNYXJrZXJzLnNldChiLmlkLCB7IG1hcmtlciwgZGF0YTogYnVpbGRpbmdEYXRhIH0pO1xyXG5cclxuICAgICAgICAvLyDDiWNvdXRlciBsJ291dmVydHVyZSBkZSBsYSBwb3B1cCBwb3VyIGNoYXJnZXIgbGUgY29udGVudVxyXG4gICAgICAgIG1hcmtlci5vbigncG9wdXBvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYi5pZCAmJiBpc093bkJ1aWxkaW5nKGJ1aWxkaW5nRGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRVcGdyYWRlSW5mb0FzeW5jKGIuaWQsIG1hcmtlciwgYnVpbGRpbmdEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWw6lyaWZpZSBzaSBsZSBiw6J0aW1lbnQgYXBwYXJ0aWVudCBhdSBqb3VldXIgYWN0aWZcclxuICovXHJcbmZ1bmN0aW9uIGlzT3duQnVpbGRpbmcoYnVpbGRpbmcpIHtcclxuICAgIHJldHVybiBidWlsZGluZy5vd25lcklkID09PSBjdXJyZW50UGxheWVySWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcsOpZSB1biBwb3B1cCBzaW1wbGUgKHN5bmNocm9uZSlcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGluZy1wb3B1cFwiPlxyXG4gICAgICAgICAgICA8aDM+JHtidWlsZGluZy50eXBlIHx8ICdCw6J0aW1lbnQnfTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hhcmdlIGxlcyBpbmZvcyBkJ2Ftw6lsaW9yYXRpb24gZW4gYXJyacOocmUtcGxhblxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbG9hZFVwZ3JhZGVJbmZvQXN5bmMoYnVpbGRpbmdJZCwgbWFya2VyLCBidWlsZGluZ0RhdGEpIHtcclxuICAgIC8vIE5lIHBhcyBjaGFyZ2VyIGxlcyBpbmZvcyBkJ2Ftw6lsaW9yYXRpb24gcG91ciBsZXMgYsOidGltZW50cyBlbm5lbWlzXHJcbiAgICBpZiAoIWlzT3duQnVpbGRpbmcoYnVpbGRpbmdEYXRhKSkge1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYnVpbGRpbmdJZCkge1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIMOJdml0ZXIgZGUgcmVjaGFyZ2VyIHNpIGTDqWrDoCBjaGFyZ8OpXHJcbiAgICBpZiAocG9wdXBDb250ZW50TG9hZGVkLmhhcyhidWlsZGluZ0lkKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBvcHVwQ29udGVudExvYWRlZC5hZGQoYnVpbGRpbmdJZCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBDaGFyZ2VyIGRpcmVjdGVtZW50IGxlIGNvbnRlbnUgZHUgcG9wdXBcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9idWlsZGluZ3MvJHtidWlsZGluZ0lkfS9wb3B1cC1jb250ZW50YCk7XHJcblxyXG4gICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICAgIGRlYnVnV2FybignYnVpbGRpbmdzJywgYEVycmV1ciBBUEkgcG9wdXAtY29udGVudCAoYnVpbGRpbmcgJHtidWlsZGluZ0lkfSk6YCwgcmVzLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXMudGV4dCgpO1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoaHRtbCk7XHJcbiAgICAgICAgYnVpbGRpbmdNYXJrZXJzLnNldChidWlsZGluZ0lkLCB7IG1hcmtlciwgZGF0YTogYnVpbGRpbmdEYXRhIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZHUgcG9wdXBcIiwgZSk7XHJcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZ0RhdGEpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoYXJnZSBsZXMgYsOidGltZW50cyBkZXB1aXMgbCdBUEkgKGZvbmN0aW9uIGRlIGNvbXBhdGliaWxpdMOpKVxyXG4gKiBAZGVwcmVjYXRlZCBVdGlsaXNlciBsb2FkQnVpbGRpbmdzRnJvbURhdGEoZGF0YSkgw6AgbGEgcGxhY2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQnVpbGRpbmdzKCkge1xyXG4gICAgZmV0Y2goJy9hcGkvbWFwLWRhdGEnKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBsb2FkQnVpbGRpbmdzRnJvbURhdGEoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgY2hhcmdlbWVudCBiw6J0aW1lbnRzXCIsIGVycik7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcsOpZSB1bmUgaWPDtG5lIChtYXJrZXIpIHBvdXIgdW4gYsOidGltZW50IGF2ZWMgc29uIGltYWdlIHNww6ljaWZpcXVlLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYnVpbGRpbmdDb2RlIC0gTGUgY29kZSBkdSBiw6J0aW1lbnQgKGV4OiBcImJhc2VcIiwgXCJpcm9uX21pbmVcIikuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmYWN0aW9uIC0gTGEgZmFjdGlvbiBkdSBiw6J0aW1lbnQgKG9wdGlvbm5lbCwgZmFsbGJhY2sgc3VyIGxlIGpvdWV1ciBhY3R1ZWwpLlxyXG4gKiBAcmV0dXJucyB7TC5JY29ufSBMJ2ljw7RuZSBMZWFmbGV0IHBlcnNvbm5hbGlzw6llLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1aWxkaW5nSWNvbihidWlsZGluZ0NvZGUsIGZhY3Rpb24gPSBudWxsKSB7XHJcbiAgICBjb25zdCBhY3R1YWxGYWN0aW9uID0gZmFjdGlvbiB8fCBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xyXG4gICAgY29uc3Qgc2l6ZSA9IDcwOyAvLyBUYWlsbGUgcGFyIGTDqWZhdXQgZGVzIGljw7RuZXNcclxuXHJcbiAgICByZXR1cm4gTC5pY29uKHtcclxuICAgICAgICBpY29uVXJsOiBnZXRCdWlsZGluZ0ltYWdlKGFjdHVhbEZhY3Rpb24sIGJ1aWxkaW5nQ29kZSksXHJcbiAgICAgICAgaWNvblNpemU6IFtzaXplLCBzaXplXSxcclxuICAgICAgICBpY29uQW5jaG9yOiBbc2l6ZSAvIDIsIHNpemUgLyAyXSxcclxuICAgICAgICBwb3B1cEFuY2hvcjogWzAsIC1zaXplIC8gMl1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0b3VybmUgZHluYW1pcXVlbWVudCBsZSBjaGVtaW4gZGUgbCdpbWFnZSBhdmVjIGZhbGxiYWNrIHZlcnMgZGVmYXVsdC5cclxuICogQHBhcmFtIHtzdHJpbmd9IGZhY3Rpb24gLSBMZSBjb2RlIG91IG5vbSBkZSBsYSBmYWN0aW9uIChleDogXCJFbXBpcmVcIiwgXCJDZW5kcmVzXCIpLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYnVpbGRpbmcgLSBMZSBjb2RlIGR1IGLDonRpbWVudCAoZXg6IFwiYmFzZVwiLCBcImlyb25fbWluZVwiKS5cclxuICogQHJldHVybnMge3N0cmluZ30gTGUgY2hlbWluIGRlIGwnaWPDtG5lLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1aWxkaW5nSW1hZ2UoZmFjdGlvbiwgYnVpbGRpbmcpIHtcclxuICAgIC8vIE5vcm1hbGlzZXIgbGUgbm9tIGR1IGJ1aWxkaW5nIHBvdXIgbCdpbWFnZSAocmVtcGxhY2VyIGVzcGFjZXMgZXQgY2FyYWN0w6hyZXMgc3DDqWNpYXV4KVxyXG4gICAgY29uc3QgYnVpbGRpbmdTbHVnID0gYnVpbGRpbmcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICdfJykucmVwbGFjZSgvW15hLXowLTlfXS9nLCAnJyk7XHJcbiAgICBjb25zdCBmYWN0aW9uU2x1ZyA9IChmYWN0aW9uIHx8ICdkZWZhdWx0JykudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAvLyBUb3Vqb3VycyB1dGlsaXNlciBsJ2ljw7RuZSBkZSBsYSBmYWN0aW9uIGVuIHByZW1pZXJcclxuICAgIC8vIExlIHNlcnZldXIgb3UgbGUgbmF2aWdhdGV1ciBnw6lyZXJhIGxlIGZhbGxiYWNrIHNpIGwnaWPDtG5lIG4nZXhpc3RlIHBhc1xyXG4gICAgLy8gU2kgbGEgZmFjdGlvbiBlc3QgJ2RlZmF1bHQnLCB1dGlsaXNlciBsJ2ljw7RuZSBkZWZhdWx0IGRpcmVjdGVtZW50XHJcbiAgICBpZiAoZmFjdGlvblNsdWcgPT09ICdkZWZhdWx0Jykge1xyXG4gICAgICAgIHJldHVybiBgL2Fzc2V0cy9pbWFnZXMvYnVpbGRpbmdzL2RlZmF1bHQvJHtidWlsZGluZ1NsdWd9LnBuZ2A7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAvYXNzZXRzL2ltYWdlcy9idWlsZGluZ3MvJHtmYWN0aW9uU2x1Z30vJHtidWlsZGluZ1NsdWd9LnBuZ2A7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbcOpbGlvcmUgdW4gYsOidGltZW50XHJcbiAqL1xyXG53aW5kb3cudXBncmFkZUJ1aWxkaW5nID0gYXN5bmMgZnVuY3Rpb24oYnVpbGRpbmdJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVwZ3JhZGVCdWlsZGluZyhidWlsZGluZ0lkKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgLy8gSW52YWxpZGVyIGxlIGNhY2hlIHBvdXIgZm9yY2VyIGxlIHJlY2hhcmdlbWVudFxyXG4gICAgICAgICAgICBwb3B1cENvbnRlbnRMb2FkZWQuZGVsZXRlKGJ1aWxkaW5nSWQpO1xyXG5cclxuICAgICAgICAgICAgLy8gTWV0dHJlIMOgIGpvdXIgbGUgbWFycXVldXJcclxuICAgICAgICAgICAgY29uc3QgZW50cnkgPSBidWlsZGluZ01hcmtlcnMuZ2V0KGJ1aWxkaW5nSWQpO1xyXG4gICAgICAgICAgICBpZiAoZW50cnkpIHtcclxuICAgICAgICAgICAgICAgIGVudHJ5LmRhdGEubGV2ZWwgPSBkYXRhLm5ld0xldmVsO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFya2VyID0gZW50cnkubWFya2VyO1xyXG4gICAgICAgICAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChlbnRyeS5kYXRhKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVjaGFyZ2VyIGxlcyBpbmZvcyBkJ2Ftw6lsaW9yYXRpb25cclxuICAgICAgICAgICAgICAgIGxvYWRVcGdyYWRlSW5mb0FzeW5jKGJ1aWxkaW5nSWQsIG1hcmtlciwgZW50cnkuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWxlcnQoJ0LDonRpbWVudCBhbcOpbGlvcsOpIGF2ZWMgc3VjY8OocyAhJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJFcnJldXI6IFwiICsgKGRhdGEuZXJyb3IgfHwgXCJJbXBvc3NpYmxlIGQnYW3DqWxpb3JlciBsZSBiw6J0aW1lbnRcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGRlIGwnYW3DqWxpb3JhdGlvblwiLCBlKTtcclxuICAgICAgICBhbGVydChcIkVycmV1ciByw6lzZWF1IGxvcnMgZGUgbCdhbcOpbGlvcmF0aW9uXCIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldG91cm5lIGxlcyBpbmZvcm1hdGlvbnMgc3VyIGxlcyBjb8O7dHMgZGUgY29uc3RydWN0aW9uIGQndW4gdHlwZSBkZSBiw6J0aW1lbnRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCdWlsZGluZ1R5cGVDb3N0cyhidWlsZGluZ1R5cGVJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJ1aWxkaW5nQ29zdHMoYnVpbGRpbmdUeXBlSWQpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZXMgY2/Du3RzXCIsIGUpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVsOpcmlmaWUgc2kgbGUgam91ZXVyIHBldXQgY29uc3RydWlyZSB1biBiw6J0aW1lbnRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYW5CdWlsZEJ1aWxkaW5nKGJ1aWxkaW5nVHlwZUlkKSB7XHJcbiAgICBjb25zdCBjb3N0cyA9IGF3YWl0IGdldEJ1aWxkaW5nVHlwZUNvc3RzKGJ1aWxkaW5nVHlwZUlkKTtcclxuICAgIGlmICghY29zdHMpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3BsYXllci1yZXNvdXJjZXMnKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgcmVzb3VyY2VzID0ge307XHJcbiAgICBkYXRhLnJlc291cmNlcy5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAgIHJlc291cmNlc1tyLnR5cGVdID0gci5xdWFudGl0eTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAoY29uc3QgW3Jlc291cmNlLCBhbW91bnRdIG9mIE9iamVjdC5lbnRyaWVzKGNvc3RzLmNvc3RzKSkge1xyXG4gICAgICAgIGlmICgocmVzb3VyY2VzW3Jlc291cmNlXSB8fCAwKSA8IGFtb3VudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaEJ1aWxkaW5nUG9wdXAoYnVpbGRpbmdJZCkge1xyXG4gICAgY29uc3QgZW50cnkgPSBidWlsZGluZ01hcmtlcnMuZ2V0KGJ1aWxkaW5nSWQpO1xyXG5cclxuICAgIGlmICghZW50cnkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3B0aW9ubmVsIDogdW5pcXVlbWVudCBzaSBsZSBwb3B1cCBlc3Qgb3V2ZXJ0XHJcbiAgICBpZiAoIWVudHJ5Lm1hcmtlci5pc1BvcHVwT3BlbigpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGxvYWRVcGdyYWRlSW5mb0FzeW5jKFxyXG4gICAgICAgIGJ1aWxkaW5nSWQsXHJcbiAgICAgICAgZW50cnkubWFya2VyLFxyXG4gICAgICAgIGVudHJ5LmRhdGFcclxuICAgICk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5pbXBvcnQgeyBkcmF3Um9hZFNlZ21lbnQgfSBmcm9tICcuLi91aS9kcmF3T25NYXAuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnLi4vdXRpbHMvdGltZXIuanMnO1xyXG5cclxuLy8gU3RhdGVcclxuY29uc3QgYWN0aXZlRGVsaXZlcmllcyA9IG5ldyBNYXAoKTtcclxubGV0IGRlbGl2ZXJ5TGF5ZXIgPSBudWxsO1xyXG5sZXQgYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xyXG5jb25zdCBwZW5kaW5nRXZlbnRzID0gW107XHJcblxyXG5jb25zdCB0cnVja0ljb24gPSBMLmRpdkljb24oe1xyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIGh0bWw6ICc8ZGl2IHN0eWxlPVwiZm9udC1zaXplOjE4cHhcIj7wn5qaPC9kaXY+JyxcclxuICAgIGljb25TaXplOiBbMjAsIDIwXSxcclxuICAgIGljb25BbmNob3I6IFsxMCwgMTBdXHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5JVFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdERlbGl2ZXJ5RXZlbnRzKCkge1xyXG4gICAgaW5pdERlbGl2ZXJ5TGF5ZXJzKCk7XHJcbiAgICBsb2FkRGVsaXZlcmllcygpO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2dhbWU6ZXZlbnQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBlLmRldGFpbDtcclxuICAgICAgICBpZiAoZGF0YS50eXBlICE9PSAnZGVsaXZlcnlfdXBkYXRlJykgcmV0dXJuO1xyXG5cclxuICAgICAgICBoYW5kbGVEZWxpdmVyeUV2ZW50KHtcclxuICAgICAgICAgICAgZGVsaXZlcnlJZDogICAgZGF0YS5kZWxpdmVyeUlkLFxyXG4gICAgICAgICAgICBidWlsZGluZ0lkOiAgICBkYXRhLmJ1aWxkaW5nSWQsXHJcbiAgICAgICAgICAgIHN0YXR1czogICAgICAgIGRhdGEuc3RhdHVzLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogICAgICBkYXRhLnByb2dyZXNzLFxyXG4gICAgICAgICAgICB3YXlwb2ludHM6ICAgICBkYXRhLndheXBvaW50cyxcclxuICAgICAgICAgICAgcmVzb3VyY2U6ICAgICAgZGF0YS5yZXNvdXJjZUNvZGUsXHJcbiAgICAgICAgICAgIHJlc291cmNlTGFiZWw6IGRhdGEucmVzb3VyY2VMYWJlbCxcclxuICAgICAgICAgICAgcXVhbnRpdHk6ICAgICAgZGF0YS5xdWFudGl0eSxcclxuICAgICAgICAgICAgZXN0aW1hdGVkVGltZTogZGF0YS5kdXJhdGlvbixcclxuICAgICAgICAgICAgc2NoZWR1bGVkQXQ6ICAgZGF0YS5zY2hlZHVsZWRBdCxcclxuICAgICAgICAgICAgZmFjdGlvbjogICAgICAgZGF0YS5mYWN0aW9uID8/ICdkZWZhdWx0JyxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJTklUIExBWUVSU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdERlbGl2ZXJ5TGF5ZXJzKCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCB8fCBkZWxpdmVyeUxheWVyKSByZXR1cm47XHJcbiAgICBkZWxpdmVyeUxheWVyID0gTC5sYXllckdyb3VwKCkuYWRkVG8obWFwKTtcclxuICAgIHN0YXJ0QW5pbWF0aW9uKCk7XHJcbiAgICBwZW5kaW5nRXZlbnRzLmZvckVhY2gocHJvY2Vzc0RlbGl2ZXJ5RXZlbnQpO1xyXG4gICAgcGVuZGluZ0V2ZW50cy5sZW5ndGggPSAwO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDSEFSR0VSIGxlcyBsaXZyYWlzb25zIElOX1RSQU5TSVQgZGVwdWlzIGwnQVBJXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRGVsaXZlcmllcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9kZWxpdmVyaWVzL2luLXRyYW5zaXQnKTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgZGVsaXZlcmllcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgZGVsaXZlcmllcy5mb3JFYWNoKGQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkZWxpdmVyeURhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBkZWxpdmVyeUlkOiAgICBkLmRlbGl2ZXJ5SWQsXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ0lkOiAgICBkLmJ1aWxkaW5nSWQsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICAgICAgICAnaW5fdHJhbnNpdCcsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogICAgICBkLnByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgc2NoZWR1bGVkQXQ6ICAgZC5zY2hlZHVsZWRBdCxcclxuICAgICAgICAgICAgICAgIGVzdGltYXRlZFRpbWU6IGQuZXN0aW1hdGVkVGltZSxcclxuICAgICAgICAgICAgICAgIHdheXBvaW50czogICAgIGQud2F5cG9pbnRzLFxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2U6ICAgICAgZC5yZXNvdXJjZSxcclxuICAgICAgICAgICAgICAgIHJlc291cmNlTGFiZWw6IGQucmVzb3VyY2VMYWJlbCxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAgICAgIGQucXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICBmYWN0aW9uOiAgICAgICBkLmZhY3Rpb24gfHwgJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZygnZGVsaXZlcnknLCAnTG9hZGluZyBkZWxpdmVyeSBmcm9tIEFQSTonLCBkZWxpdmVyeURhdGEpO1xyXG4gICAgICAgICAgICBoYW5kbGVEZWxpdmVyeUV2ZW50KGRlbGl2ZXJ5RGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignZGVsaXZlcnknLCAnRmFpbGVkIHRvIGxvYWQgZGVsaXZlcmllczonLCBlKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSEFORExFIEVWRU5UXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVEZWxpdmVyeUV2ZW50KGRhdGEpIHtcclxuICAgIGlmICghZGVsaXZlcnlMYXllcikge1xyXG4gICAgICAgIHBlbmRpbmdFdmVudHMucHVzaChkYXRhKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwcm9jZXNzRGVsaXZlcnlFdmVudChkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0RlbGl2ZXJ5RXZlbnQoZGF0YSkge1xyXG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSAnZGVsaXZlcmVkJykge1xyXG4gICAgICAgIHJlbW92ZURlbGl2ZXJ5KGRhdGEuZGVsaXZlcnlJZCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSAnaW5fdHJhbnNpdCcpIHtcclxuICAgICAgICB1cHNlcnREZWxpdmVyeShkYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBzZXJ0RGVsaXZlcnkoZGF0YSkge1xyXG4gICAgY29uc3Qga2V5ID0gZGF0YS5kZWxpdmVyeUlkO1xyXG4gICAgaWYgKCFrZXkpIHsgY29uc29sZS53YXJuKCdEZWxpdmVyeSBzYW5zIElEJywgZGF0YSk7IHJldHVybjsgfVxyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBsZXQgd2F5cG9pbnRzID0gZGF0YS53YXlwb2ludHM7XHJcbiAgICBpZiAodHlwZW9mIHdheXBvaW50cyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0cnkgeyB3YXlwb2ludHMgPSBKU09OLnBhcnNlKHdheXBvaW50cyk7IH0gY2F0Y2ggeyByZXR1cm47IH1cclxuICAgIH1cclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh3YXlwb2ludHMpIHx8IHdheXBvaW50cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBsYXRsbmdzID0gd2F5cG9pbnRzLm1hcCh3cCA9PiBbd3AubGF0LCB3cC5sbmddKTtcclxuICAgIGNvbnN0IGZhY3Rpb24gPSBkYXRhLmZhY3Rpb24gfHwgJ2RlZmF1bHQnO1xyXG5cclxuICAgIGlmIChhY3RpdmVEZWxpdmVyaWVzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBhY3RpdmVEZWxpdmVyaWVzLmdldChrZXkpO1xyXG4gICAgICAgIGRlbGl2ZXJ5LndheXBvaW50cyAgICAgICAgICA9IGxhdGxuZ3M7XHJcbiAgICAgICAgZGVsaXZlcnkucHJvZ3Jlc3MgICAgICAgICAgID0gZGF0YS5wcm9ncmVzcyA/PyBkZWxpdmVyeS5wcm9ncmVzcztcclxuICAgICAgICBkZWxpdmVyeS5lc3RpbWF0ZWRUaW1lICAgICAgPSBkYXRhLmVzdGltYXRlZFRpbWU7XHJcbiAgICAgICAgZGVsaXZlcnkuc2NoZWR1bGVkQXQgICAgICAgID0gZGF0YS5zY2hlZHVsZWRBdCA/PyBkZWxpdmVyeS5zY2hlZHVsZWRBdDtcclxuICAgICAgICBkZWxpdmVyeS5sYXN0U2VydmVyUHJvZ3Jlc3MgPSBkYXRhLnByb2dyZXNzID8/IDA7XHJcbiAgICAgICAgZGVsaXZlcnkubGFzdFNlcnZlclRpbWUgICAgID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBkZWxpdmVyeS5mYWN0aW9uICAgICAgICAgICAgPSBmYWN0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwb2x5bGluZSA9IGRyYXdSb2FkU2VnbWVudChgZGVsaXZlcnktJHtrZXl9YCwgbGF0bG5ncywgZmFjdGlvbik7XHJcblxyXG4gICAgICAgIC8vIEZvcm1hdGVyIGwnaGV1cmUgZHUgZMOpcGFydCBwcsOpdnVcclxuICAgICAgICBjb25zdCBzY2hlZHVsZWRUaW1lID0gZGF0YS5zY2hlZHVsZWRBdCA/IGZvcm1hdERhdGUoZGF0YS5zY2hlZHVsZWRBdCkgOiAnSW5jb25udWUnO1xyXG5cclxuICAgICAgICBjb25zdCBtYXJrZXIgPSBMLm1hcmtlcihsYXRsbmdzWzBdLCB7IGljb246IHRydWNrSWNvbiB9KVxyXG4gICAgICAgICAgICAuYWRkVG8oZGVsaXZlcnlMYXllcilcclxuICAgICAgICAgICAgLmJpbmRQb3B1cChgXHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkNhbWlvbiBuwrAke2tleX08L3N0cm9uZz48YnI+XHJcbiAgICAgICAgICAgICAgICBUcmFuc3BvcnRlIDogJHtkYXRhLnF1YW50aXR5ID8/ICcnfSB1bml0w6lzIGRlIDxzdHJvbmc+JHtkYXRhLnJlc291cmNlTGFiZWwgPz8gJyd9PC9zdHJvbmc+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWxpdmVyeS1wcm9ncmVzcy0ke2tleX1cIj5Qcm9ncmVzc2lvbiA6ICR7ZGF0YS5wcm9ncmVzcyA/PyAwfSU8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPkTDqXBhcnQgcHLDqXZ1IDogJHtzY2hlZHVsZWRUaW1lfTwvc21hbGw+XHJcbiAgICAgICAgICAgIGApO1xyXG5cclxuICAgICAgICBhY3RpdmVEZWxpdmVyaWVzLnNldChrZXksIHtcclxuICAgICAgICAgICAgbWFya2VyLFxyXG4gICAgICAgICAgICBwb2x5bGluZSxcclxuICAgICAgICAgICAgd2F5cG9pbnRzOiAgICAgICAgICBsYXRsbmdzLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogICAgICAgICAgIGRhdGEucHJvZ3Jlc3MgPz8gMCxcclxuICAgICAgICAgICAgZXN0aW1hdGVkVGltZTogICAgICBkYXRhLmVzdGltYXRlZFRpbWUgPz8gMzYwMCxcclxuICAgICAgICAgICAgc2NoZWR1bGVkQXQ6ICAgICAgICBkYXRhLnNjaGVkdWxlZEF0ID8/IG51bGwsXHJcbiAgICAgICAgICAgIGxhc3RTZXJ2ZXJQcm9ncmVzczogZGF0YS5wcm9ncmVzcyA/PyAwLFxyXG4gICAgICAgICAgICBsYXN0U2VydmVyVGltZTogICAgIERhdGUubm93KCksXHJcbiAgICAgICAgICAgIHJlc291cmNlOiAgICAgICAgICAgZGF0YS5yZXNvdXJjZSxcclxuICAgICAgICAgICAgcmVzb3VyY2VMYWJlbDogICAgICBkYXRhLnJlc291cmNlTGFiZWwsXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiAgICAgICAgICAgZGF0YS5xdWFudGl0eSxcclxuICAgICAgICAgICAgZmFjdGlvbixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRGVsaXZlcnkoa2V5KSB7XHJcbiAgICBjb25zdCBkZWxpdmVyeSA9IGFjdGl2ZURlbGl2ZXJpZXMuZ2V0KGtleSk7XHJcbiAgICBpZiAoIWRlbGl2ZXJ5KSByZXR1cm47XHJcbiAgICBkZWxpdmVyeS5tYXJrZXIucmVtb3ZlKCk7XHJcbiAgICBkZWxpdmVyeS5wb2x5bGluZS5yZW1vdmUoKTtcclxuICAgIGFjdGl2ZURlbGl2ZXJpZXMuZGVsZXRlKGtleSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEFOSU1BVElPTiBMT0NBTEUgKHJlcXVlc3RBbmltYXRpb25GcmFtZSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XHJcbiAgICBpZiAoYW5pbWF0aW9uRnJhbWUpIHJldHVybjtcclxuXHJcbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgIGFjdGl2ZURlbGl2ZXJpZXMuZm9yRWFjaCgoZGVsaXZlcnksIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW50ZXJwb2xhdGVkUHJvZ3Jlc3M7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGVsaXZlcnkuc2NoZWR1bGVkQXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHLDqXNpc3RhbnQgYXUgcmVsb2FkIGRlIHBhZ2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKGRlbGl2ZXJ5LnNjaGVkdWxlZEF0KS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGFwc2VkICAgPSAobm93IC0gc3RhcnRUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRQcm9ncmVzcyA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLm1heCgwLCAoZWxhcHNlZCAvIGRlbGl2ZXJ5LmVzdGltYXRlZFRpbWUpICogMTAwKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrIHNpIHBhcyBkZSBzY2hlZHVsZWRBdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxhcHNlZFNpbmNlU2VydmVyID0gKG5vdyAtIGRlbGl2ZXJ5Lmxhc3RTZXJ2ZXJUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzc1BlclNlY29uZCAgPSAxMDAgLyBkZWxpdmVyeS5lc3RpbWF0ZWRUaW1lO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkUHJvZ3Jlc3MgPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnkubGFzdFNlcnZlclByb2dyZXNzICsgKGVsYXBzZWRTaW5jZVNlcnZlciAqIHByb2dyZXNzUGVyU2Vjb25kKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zID0gaW50ZXJwb2xhdGVBbG9uZ1JvdXRlKGRlbGl2ZXJ5LndheXBvaW50cywgaW50ZXJwb2xhdGVkUHJvZ3Jlc3MgLyAxMDApO1xyXG4gICAgICAgICAgICBpZiAocG9zKSBkZWxpdmVyeS5tYXJrZXIuc2V0TGF0TG5nKHBvcyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZWxpdmVyeS1wcm9ncmVzcy0ke2tleX1gKTtcclxuICAgICAgICAgICAgaWYgKGVsKSBlbC50ZXh0Q29udGVudCA9IGBQcm9ncmVzc2lvbiA6ICR7TWF0aC5yb3VuZChpbnRlcnBvbGF0ZWRQcm9ncmVzcyl9JWA7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW50ZXJwb2xhdGVkUHJvZ3Jlc3MgPj0gMTAwKSByZW1vdmVEZWxpdmVyeShrZXkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5URVJQT0xBVElPTiBzdXIgbGEgcG9seWxpZ25lXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGludGVycG9sYXRlQWxvbmdSb3V0ZShsYXRsbmdzLCB0KSB7XHJcbiAgICBpZiAoIWxhdGxuZ3MgfHwgbGF0bG5ncy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG4gICAgaWYgKHQgPD0gMCkgcmV0dXJuIGxhdGxuZ3NbMF07XHJcbiAgICBpZiAodCA+PSAxKSByZXR1cm4gbGF0bG5nc1tsYXRsbmdzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgIGxldCB0b3RhbERpc3QgPSAwO1xyXG4gICAgY29uc3Qgc2VnbWVudHMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGF0bG5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmUobGF0bG5nc1tpIC0gMV0sIGxhdGxuZ3NbaV0pO1xyXG4gICAgICAgIHNlZ21lbnRzLnB1c2goZCk7XHJcbiAgICAgICAgdG90YWxEaXN0ICs9IGQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRhcmdldCA9IHRvdGFsRGlzdCAqIHQ7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRhcmdldCA8PSBzZWdtZW50c1tpXSkge1xyXG4gICAgICAgICAgICBjb25zdCB1ID0gdGFyZ2V0IC8gc2VnbWVudHNbaV07XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBsYXRsbmdzW2ldWzBdICsgdSAqIChsYXRsbmdzW2kgKyAxXVswXSAtIGxhdGxuZ3NbaV1bMF0pLFxyXG4gICAgICAgICAgICAgICAgbGF0bG5nc1tpXVsxXSArIHUgKiAobGF0bG5nc1tpICsgMV1bMV0gLSBsYXRsbmdzW2ldWzFdKSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFyZ2V0IC09IHNlZ21lbnRzW2ldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsYXRsbmdzW2xhdGxuZ3MubGVuZ3RoIC0gMV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhdmVyc2luZShhLCBiKSB7XHJcbiAgICBjb25zdCBSID0gNjM3MTAwMDtcclxuICAgIGNvbnN0IGRMYXQgPSAoYlswXSAtIGFbMF0pICogTWF0aC5QSSAvIDE4MDtcclxuICAgIGNvbnN0IGRMbmcgPSAoYlsxXSAtIGFbMV0pICogTWF0aC5QSSAvIDE4MDtcclxuICAgIGNvbnN0IHggPSBNYXRoLnNpbihkTGF0IC8gMikgKiogMlxyXG4gICAgICAgICAgICArIE1hdGguY29zKGFbMF0gKiBNYXRoLlBJIC8gMTgwKSAqIE1hdGguY29zKGJbMF0gKiBNYXRoLlBJIC8gMTgwKVxyXG4gICAgICAgICAgICAqIE1hdGguc2luKGRMbmcgLyAyKSAqKiAyO1xyXG4gICAgcmV0dXJuIFIgKiAyICogTWF0aC5hdGFuMihNYXRoLnNxcnQoeCksIE1hdGguc3FydCgxIC0geCkpO1xyXG59IiwiaW1wb3J0IHsgaW5pdE1hcCwgbG9hZFdvcmxkIH0gZnJvbSAnLi9tYXAvbWFwLmpzJztcclxuaW1wb3J0IHsgaW5pdEdQUyB9IGZyb20gJy4vdXRpbHMvZ3BzLmpzJztcclxuaW1wb3J0IHsgaW5pdEJhc2VVSSB9IGZyb20gJy4vYnVpbGRpbmdzL2Jhc2UuanMnO1xyXG5pbXBvcnQgeyBpbml0QnVpbGRNb2RlIH0gZnJvbSAnLi9idWlsZGluZ3MvYnVpbGRNb2RlLmpzJztcclxuaW1wb3J0IHsgaW5pdE5vdGlmaWNhdGlvbnMgfSBmcm9tICcuL25vdGlmaWNhdGlvbnMuanMnO1xyXG5pbXBvcnQgeyBpbml0QnVpbGRpbmdUaW1lcnMgfSBmcm9tICcuL3V0aWxzL3RpbWVyLmpzJztcclxuaW1wb3J0IHsgaW5pdERlbGl2ZXJ5RXZlbnRzIH0gZnJvbSAnLi9kZWxpdmVyeS9kZWxpdmVyeS5qcyc7XHJcbmltcG9ydCB7IGluaXRJbnZlbnRvcnlFdmVudHMgfSBmcm9tICcuL2ludmVudG9yeS9pbnZlbnRvcnkuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHJcbiAgICBlbmFibGVMZWFmbGV0RGVidWcoZmFsc2UpO1xyXG5cclxuICAgIGluaXRNYXAoNDYuNTM5NzIsIDIuNDMwMjgpO1xyXG5cclxuICAgIGluaXRCYXNlVUkoKTtcclxuICAgIGluaXRCdWlsZE1vZGUoKTtcclxuICAgIGxvYWRXb3JsZCgpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncGFnZS1nYW1lJyk7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5jdXJyZW50VXNlcikge1xyXG4gICAgICAgIGluaXROb3RpZmljYXRpb25zKCk7XHJcbiAgICAgICAgaW5pdERlbGl2ZXJ5RXZlbnRzKCk7XHJcbiAgICAgICAgaW5pdEludmVudG9yeUV2ZW50cygpO1xyXG4gICAgICAgIGluaXRCdWlsZGluZ1RpbWVycygpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVMZWFmbGV0RGVidWcoZGVidWcgPSBmYWxzZSkge1xyXG5cclxuICAgIGlmICghZGVidWcpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBvcmlnaW5hbE1hcmtlciA9IEwubWFya2VyO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxDaXJjbGUgPSBMLmNpcmNsZTtcclxuICAgIGNvbnN0IG9yaWdpbmFsUG9seWxpbmUgPSBMLnBvbHlsaW5lO1xyXG5cclxuICAgIEwubWFya2VyID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfp6ggTUFSS0VSIENBTEw6XCIsIGFyZ3MpO1xyXG4gICAgICAgIGNvbnNvbGUudHJhY2UoXCJNQVJLRVIgU1RBQ0tcIik7XHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsTWFya2VyLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBMLmNpcmNsZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn6eoIENJUkNMRSBDQUxMOlwiLCBhcmdzKTtcclxuICAgICAgICBjb25zb2xlLnRyYWNlKFwiQ0lSQ0xFIFNUQUNLXCIpO1xyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbENpcmNsZS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgTC5wb2x5bGluZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn6eoIFBPTFlMSU5FIENBTEw6XCIsIGFyZ3MpO1xyXG4gICAgICAgIGNvbnNvbGUudHJhY2UoXCJQT0xZTElORSBTVEFDS1wiKTtcclxuICAgICAgICByZXR1cm4gb3JpZ2luYWxQb2x5bGluZS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgeyByZWZyZXNoQnVpbGRpbmdQb3B1cCB9IGZyb20gJy4uL2J1aWxkaW5ncy9idWlsZGluZy5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJTklUIOKAlCByZW1wbGFjZSBpbml0SW52ZW50b3J5TWVyY3VyZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEludmVudG9yeUV2ZW50cygpIHtcclxuICAgIGlmICghd2luZG93LmN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgZGVidWdXYXJuKCdpbnZlbnRvcnknLCAnQXVjdW4gdXRpbGlzYXRldXIgY29ubmVjdMOpJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYnVnTG9nKCdpbnZlbnRvcnknLCAnaW5pdEludmVudG9yeUV2ZW50cyBhcHBlbMOpJyk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ2FtZTpldmVudCcsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGUuZGV0YWlsO1xyXG4gICAgICAgIGlmIChkYXRhLnR5cGUgIT09ICdpbnZlbnRvcnlfdXBkYXRlJykgcmV0dXJuO1xyXG5cclxuICAgICAgICBkZWJ1Z0xvZygnaW52ZW50b3J5JywgJ0ludmVudGFpcmUgbWlzIMOgIGpvdXI6JywgZGF0YSk7XHJcbiAgICAgICAgaGFuZGxlSW52ZW50b3J5VXBkYXRlKGRhdGEpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEhBTkRMRSBVUERBVEVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaGFuZGxlSW52ZW50b3J5VXBkYXRlKGRhdGEpIHtcclxuICAgIHVwZGF0ZU5hdmJhclJlc291cmNlcyhkYXRhLnJlc291cmNlcyA/PyBkYXRhKTtcclxuXHJcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idWlsZGluZy1wb3B1cCcpO1xyXG4gICAgaWYgKHBvcHVwKSB7XHJcbiAgICAgICAgcmVmcmVzaEJ1aWxkaW5nUG9wdXAocGFyc2VJbnQocG9wdXAuZGF0YXNldC5idWlsZGluZ0lkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2FyZGVyIGwnZXZlbnQgY3VzdG9tIHBvdXIgbGVzIGF1dHJlcyBjb21wb3NhbnRzIHF1aSDDqWNvdXRlbnQgZMOpasOgXHJcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2ludmVudG9yeVVwZGF0ZWQnLCB7IGRldGFpbDogZGF0YSB9KSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIE5BVkJBUlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiB1cGRhdGVOYXZiYXJSZXNvdXJjZXMocmVzb3VyY2VzKSB7XHJcbiAgICBpZiAoIXJlc291cmNlcykgcmV0dXJuO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNvdXJjZS1pdGVtJykuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBjb2RlID0gaXRlbS5kYXRhc2V0LnJlc291cmNlQ29kZTtcclxuICAgICAgICBpZiAocmVzb3VyY2VzW2NvZGVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgcXR5RWxlbWVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnJlc291cmNlLXF0eScpO1xyXG4gICAgICAgICAgICBpZiAocXR5RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcXR5RWxlbWVudC50ZXh0Q29udGVudCA9IHJlc291cmNlc1tjb2RlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVUEdSQURFIFJFUVVJUkVNRU5UU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBjaGVja1VwZ3JhZGVSZXF1aXJlbWVudHMocG9wdXAsIHJlc291cmNlQ29kZSwgcXVhbnRpdHkpIHtcclxuICAgIGNvbnN0IHJlcXVpcmVkRWxlbWVudCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJlcXVpcmVkLSR7cmVzb3VyY2VDb2RlfV1gKTtcclxuICAgIGlmICghcmVxdWlyZWRFbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVxdWlyZWQgPSBwYXJzZUludChcclxuICAgICAgICByZXF1aXJlZEVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLXJlcXVpcmVkLSR7cmVzb3VyY2VDb2RlfWApIHx8ICcwJ1xyXG4gICAgKTtcclxuXHJcbiAgICByZXF1aXJlZEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgndGV4dC1zdWNjZXNzJywgcXVhbnRpdHkgPj0gcmVxdWlyZWQpO1xyXG4gICAgcmVxdWlyZWRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3RleHQtZGFuZ2VyJywgIHF1YW50aXR5IDwgcmVxdWlyZWQpO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5cclxuY29uc3QgZGVwb3NpdE1hcmtlcnMgPSBuZXcgTWFwKCk7XHJcblxyXG4vLyBDYWNoZSBkZXMgcG9wdXBzIGTDqWrDoCBjaGFyZ8Opc1xyXG5jb25zdCBwb3B1cENvbnRlbnRMb2FkZWQgPSBuZXcgU2V0KCk7XHJcblxyXG4vLyBDYWNoZSBkZXMgdHlwZXMgZGUgcmVzc291cmNlc1xyXG5sZXQgYnVpbGRpbmdUeXBlc0NhY2hlID0gbnVsbDtcclxubGV0IHJlc291cmNlVHlwZXNDYWNoZSA9IG51bGw7XHJcblxyXG4vKipcclxuICogQ2hhcmdlIGxlcyB0eXBlcyBkZSByZXNzb3VyY2VzIGRlcHVpcyBsJ0FQSVxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbG9hZEJ1aWxkaW5nVHlwZXMoKSB7XHJcbiAgICBpZiAoYnVpbGRpbmdUeXBlc0NhY2hlKSByZXR1cm4gYnVpbGRpbmdUeXBlc0NhY2hlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9idWlsZGluZy10eXBlc2ApO1xyXG4gICAgICAgIGJ1aWxkaW5nVHlwZXNDYWNoZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gYnVpbGRpbmdUeXBlc0NhY2hlO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGRlcyB0eXBlcyBkZSByZXNzb3VyY2VzXCIsIGUpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZFJlc291cmNlVHlwZXMoKSB7XHJcbiAgICBpZiAocmVzb3VyY2VUeXBlc0NhY2hlKSByZXR1cm4gcmVzb3VyY2VUeXBlc0NhY2hlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9yZXNvdXJjZS10eXBlc2ApO1xyXG4gICAgICAgIHJlc291cmNlVHlwZXNDYWNoZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gcmVzb3VyY2VUeXBlc0NhY2hlO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGRlcyB0eXBlcyBkZSByZXNzb3VyY2VzXCIsIGUpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gTWFwcGluZyBkZXMgY291bGV1cnMgcGFyIGTDqWZhdXRcclxuY29uc3QgREVGQVVMVF9DT0xPUlMgPSB7XHJcbiAgICAnaXJvbic6ICcjN2Y4YzhkJyxcclxuICAgICdvaWwnOiAnI2YxYzQwZicsXHJcbiAgICAnY29hbCc6ICcjMmMzZTUwJyxcclxuICAgICdydWJiZXInOiAnIzI3YWU2MCcsXHJcbiAgICAnYmF1eGl0ZSc6ICcjZTY3ZTIyJyxcclxuICAgICdyYXJlX2VhcnRoJzogJyM4ZTQ0YWQnXHJcbn07XHJcblxyXG4vKipcclxuICogUmV0b3VybmUgbGEgY291bGV1ciBwb3VyIHVuIHR5cGUgZGUgcmVzc291cmNlIChzeW5jaHJvbmUgLSB1dGlsaXNlIGxlIGNhY2hlKVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UmVzb3VyY2VDb2xvcih0eXBlKSB7XHJcbiAgICBpZiAocmVzb3VyY2VUeXBlc0NhY2hlKSByZXR1cm4gKHJlc291cmNlVHlwZXNDYWNoZSAmJiByZXNvdXJjZVR5cGVzQ2FjaGVbdHlwZV0/LmNvbG9yKSB8fCBERUZBVUxUX0NPTE9SU1t0eXBlXSB8fCAnI2ZmZmZmZic7XHJcblxyXG4gICAgbG9hZFJlc291cmNlVHlwZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKHJlc291cmNlVHlwZXNDYWNoZSAmJiByZXNvdXJjZVR5cGVzQ2FjaGVbdHlwZV0/LmNvbG9yKSB8fCBERUZBVUxUX0NPTE9SU1t0eXBlXSB8fCAnI2ZmZmZmZic7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcm91dmUgbGUgdHlwZSBkZSBiw6J0aW1lbnQgKG1pbmUpIHBvdXIgdW5lIHJlc3NvdXJjZSBkb25uw6llXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBmaW5kQnVpbGRpbmdUeXBlRm9yUmVzb3VyY2UocmVzb3VyY2VUeXBlKSB7XHJcbiAgICBjb25zdCBidWlsZGluZ1R5cGVzID0gYXdhaXQgbG9hZEJ1aWxkaW5nVHlwZXMoKTtcclxuXHJcbiAgICAvLyBDaGVyY2hlciB1biBiw6J0aW1lbnQgcXVpIHByb2R1aXQgY2V0dGUgcmVzc291cmNlIChwcm9kdWN0aW9uX3JhdGUgPiAwKVxyXG4gICAgY29uc3QgYnVpbGRpbmdUeXBlID0gYnVpbGRpbmdUeXBlcy5maW5kKGJ0ID0+IHtcclxuICAgICAgICByZXR1cm4gKGJ0LnJlc291cmNlX3R5cGUgPT09IHJlc291cmNlVHlwZSB8fCBidC5yZXNvdXJjZVR5cGU/LmNvZGUgPT09IHJlc291cmNlVHlwZSkgJiYgYnQucHJvZHVjdGlvbl9yYXRlID4gMDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBidWlsZGluZ1R5cGU/LmlkIHx8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZXBvc2l0TGF5ZXJzID0ge307XHJcblxyXG4vKipcclxuICogSW5pdGlhbGlzZSBsZXMgY291Y2hlcyBkZSBkw6lww7R0cyBkeW5hbWlxdWVtZW50XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdERlcG9zaXRMYXllcnMobWFwLCBjb250cm9sKSB7XHJcbiAgICBjb25zdCByZXNvdXJjZVR5cGVzID0gYXdhaXQgbG9hZFJlc291cmNlVHlwZXMoKTtcclxuXHJcbiAgICAvLyBDcsOpZXIgdW5lIGNvdWNoZSBwb3VyIGNoYXF1ZSB0eXBlIGRlIHJlc3NvdXJjZSAoc2V1bGVtZW50IHNpIGNvbG9yIGV4aXN0ZSlcclxuICAgIHJlc291cmNlVHlwZXMuZm9yRWFjaChydCA9PiB7XHJcbiAgICAgICAgaWYgKHJ0LmNvbG9yICYmIHJ0LmNvbG9yLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZGVwb3NpdExheWVyc1tydC5jb2RlXSA9IEwubGF5ZXJHcm91cCgpO1xyXG4gICAgICAgICAgICBjb250cm9sLmFkZE92ZXJsYXkoZGVwb3NpdExheWVyc1tydC5jb2RlXSwgYFJlc3NvdXJjZTogJHtydC5sYWJlbH1gKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWREZXBvc2l0c0ZvckNodW5rKGNodW5rSWQsIG1hcCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2RlcG9zaXRzLyR7Y2h1bmtJZH1gKTtcclxuICAgICAgICBjb25zdCBkZXBvc2l0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGRlcG9zaXRzLCBtYXApO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1ciBjaGFyZ2VtZW50IGTDqXDDtHRzOlwiLCBlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRm9ybWF0ZSBsZXMgY2/Du3RzIHNvdXMgZm9ybWUgZGUgY2hhw65uZSBsaXNpYmxlXHJcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb3N0cyAtIEV4OiBbe2NvZGU6IFwiaXJvbl9pbmdvdFwiLCBsYWJlbDogXCJGZXJcIiwgcXVhbnRpdHk6IDI1fV0gb3Uge2lyb25faW5nb3Q6IDI1fVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIEV4OiBcIjI1IEZlciwgMTUgQ2FvdXRjaG91Y1wiXHJcbiAqL1xyXG5mdW5jdGlvbiBmb3JtYXRDb3N0cyhjb3N0cykge1xyXG4gICAgaWYgKCFjb3N0cykgcmV0dXJuICdOL0EnO1xyXG5cclxuICAgIC8vIE5vdXZlYXUgZm9ybWF0OiBhcnJheSBkJ29iamV0cyBhdmVjIGNvZGUsIGxhYmVsLCBxdWFudGl0eVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29zdHMpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvc3RzLm1hcChjID0+IGAke2MucXVhbnRpdHl9ICR7Yy5sYWJlbH1gKS5qb2luKCcsICcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFuY2llbiBmb3JtYXQ6IG9iamV0IHtjb2RlOiBxdWFudGl0eX1cclxuICAgIGlmICh0eXBlb2YgY29zdHMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGNvc3RzKVxyXG4gICAgICAgICAgICAubWFwKChbcmVzb3VyY2UsIGFtb3VudF0pID0+IGAke2Ftb3VudH0gJHtyZXNvdXJjZX1gKVxyXG4gICAgICAgICAgICAuam9pbignLCAnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJ04vQSc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWw6lyaWZpZSBzaSBsZSBqb3VldXIgYSBhc3NleiBkZSByZXNzb3VyY2VzIHBvdXIgdW4gZMOpcMO0dFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tDYW5DbGFpbShkZXBvc2l0KSB7XHJcbiAgICBjb25zdCBjb3N0cyA9IGRlcG9zaXQuY29zdHM7XHJcbiAgICBpZiAoIWNvc3RzIHx8IE9iamVjdC5rZXlzKGNvc3RzKS5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAvLyBQb3VyIGNoYXF1ZSBjb8O7dCwgdsOpcmlmaWVyIHNpIGxlIGpvdWV1ciBhIGFzc2V6XHJcbiAgICBmb3IgKGNvbnN0IFtyZXNvdXJjZSwgYW1vdW50XSBvZiBPYmplY3QuZW50cmllcyhjb3N0cykpIHtcclxuICAgICAgICAvLyBJY2kgb24gcG91cnJhaXQgZmFpcmUgdW4gYXBwZWwgQVBJIHZlcnMgL2FwaS9wbGF5ZXItcmVzb3VyY2VzXHJcbiAgICAgICAgLy8gb3UgdXRpbGlzZXIgbGVzIGRvbm7DqWVzIGTDqWrDoCBjaGFyZ8OpZXNcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3BsYXllci1yZXNvdXJjZXMnKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllclJlc291cmNlcyA9IHt9O1xyXG4gICAgICAgIGRhdGEucmVzb3VyY2VzLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllclJlc291cmNlc1tyLnR5cGVdID0gci5xdWFudGl0eTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFzID0gcGxheWVyUmVzb3VyY2VzW3Jlc291cmNlXSA/PyAwO1xyXG4gICAgICAgIGlmIChoYXMgPCBhbW91bnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICogQ3LDqWUgdW4gcG9wdXAgc2ltcGxlIChzeW5jaHJvbmUpXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTaW1wbGVQb3B1cChkZXBvc2l0KSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXBvc2l0LXBvcHVwXCI+XHJcbiAgICAgICAgICAgIDxoMz4ke2RlcG9zaXQudHlwZSB8fCAnRMOpcMO0dCBkZSByZXNvdXJjZSd9PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGFyZ2UgbGVzIGluZm9zIGRlcyBkw6lww7R0cyBlbiBhcnJpw6hyZS1wbGFuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBsb2FkRGVwb3NpdEluZm9Bc3luYyhkZXBvc2l0c0lELCBtYXJrZXIsIGRlcG9zaXREYXRhKSB7XHJcbiAgICAvLyDDiXZpdGVyIGRlIHJlY2hhcmdlciBzaSBkw6lqw6AgY2hhcmfDqVxyXG4gICAgaWYgKHBvcHVwQ29udGVudExvYWRlZC5oYXMoZGVwb3NpdHNJRCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwb3B1cENvbnRlbnRMb2FkZWQuYWRkKGRlcG9zaXRzSUQpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gQ2hhcmdlciBkaXJlY3RlbWVudCBsZSBjb250ZW51IGR1IHBvcHVwXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvZGVwb3NpdC8ke2RlcG9zaXRzSUR9L3BvcHVwLWNvbnRlbnRgKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICAgICAgZGVidWdXYXJuKCdkZXBvc2l0cycsIGBFcnJldXIgQVBJIHBvcHVwLWNvbnRlbnQgKGRlcG9zaXQgJHtkZXBvc2l0c0lEfSk6YCwgcmVzLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoZGVwb3NpdERhdGEpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlcy50ZXh0KCk7XHJcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChodG1sKTtcclxuICAgICAgICBkZXBvc2l0TWFya2Vycy5zZXQoZGVwb3NpdHNJRCwgeyBtYXJrZXIsIGRhdGE6IGRlcG9zaXREYXRhIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSBwb3B1cFwiLCBlKTtcclxuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGRlcG9zaXREYXRhKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW5kdSBkZXMgZMOpcMO0dHMgc3VyIGxhIGNhcnRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShkZXBvc2l0cywgbWFwKSB7XHJcbiAgICBkZXBvc2l0cy5mb3JFYWNoKGRlcG9zaXQgPT4ge1xyXG4gICAgICAgIGlmIChkZXBvc2l0TWFya2Vycy5oYXMoZGVwb3NpdC5pZCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGRlcG9zaXQucmVzb3VyY2VfdHlwZTtcclxuICAgICAgICBjb25zdCBsYXllciA9IGRlcG9zaXRMYXllcnNbdHlwZV07XHJcblxyXG4gICAgICAgIGlmICghbGF5ZXIpIHtcclxuICAgICAgICAgICAgZGVidWdXYXJuKCdkZXBvc2l0cycsIGBQYXMgZGUgbGF5ZXIgcG91ciBsZSB0eXBlOiAke3R5cGV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gZ2V0UmVzb3VyY2VDb2xvcih0eXBlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gTC5jaXJjbGVNYXJrZXIoW2RlcG9zaXQubGF0aXR1ZGUsIGRlcG9zaXQubG9uZ2l0dWRlXSwge1xyXG4gICAgICAgICAgICByYWRpdXM6IDgsXHJcbiAgICAgICAgICAgIGZpbGxDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgICAgICAgICAgd2VpZ2h0OiAxLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMC44XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYWRkVG8obGF5ZXIpXHJcbiAgICAgICAgLmJpbmRQb3B1cChjcmVhdGVTaW1wbGVQb3B1cChkZXBvc2l0KSk7XHJcblxyXG4gICAgICAgIC8vIENoYXJnZXIgbGUgY29udGVudSBkZSBsYSBwb3B1cCB1bmlxdWVtZW50IHF1YW5kIGVsbGUgZXN0IG91dmVydGVcclxuICAgICAgICBpZiAoZGVwb3NpdC5pZCkge1xyXG4gICAgICAgICAgICBtYXJrZXIub24oJ3BvcHVwb3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxvYWREZXBvc2l0SW5mb0FzeW5jKGRlcG9zaXQuaWQsIG1hcmtlciwgZGVwb3NpdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogUGVybWV0IGQnZXhwbG9pdGVyIHVuIGTDqXDDtHQgZGVwdWlzIGxhIHBvcHVwXHJcbiAqL1xyXG53aW5kb3cuY2xhaW1EZXBvc2l0ID0gYXN5bmMgZnVuY3Rpb24oaWQsIHJlc291cmNlVHlwZSkge1xyXG4gICAgLy8gVHJvdXZlciBsZSB0eXBlIGRlIGLDonRpbWVudCBhcHByb3ByacOpXHJcbiAgICBjb25zdCBidWlsZGluZ1R5cGVJZCA9IGF3YWl0IGZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZShyZXNvdXJjZVR5cGUpO1xyXG5cclxuICAgIGlmICghYnVpbGRpbmdUeXBlSWQpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoYEltcG9zc2libGUgZGUgdHJvdXZlciB1biBiw6J0aW1lbnQgcG91ciBleHRyYWlyZSBsZSAke3Jlc291cmNlVHlwZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb25zdHJ1aXJlIGRpcmVjdGVtZW50IGxlIGLDonRpbWVudCBzdXIgbGVzIGNvb3Jkb25uw6llcyBkdSBkw6lww7R0XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYnVpbGQnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgbGF0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbG5nOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdHlwZV9pZDogYnVpbGRpbmdUeXBlSWQsXHJcbiAgICAgICAgICAgICAgICBkZXBvc2l0X2lkOiBpZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZVRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgbGV0IGRhdGE7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9IGNhdGNoIChwYXJzZUVycm9yKSB7XHJcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJSw6lwb25zZSBub24tSlNPTiByZcOndWU6XCIsIHJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlLDqXBvbnNlIGludmFsaWRlIGR1IHNlcnZldXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgZGVidWdMb2coJ2RlcG9zaXRzJywgJ0TDqXDDtHQgZXhwbG9pdMOpIGF2ZWMgc3VjY8OocyAhIELDonRpbWVudCBjcsOpw6kuJyk7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJFcnJldXI6IFwiICsgKGRhdGEuZXJyb3IgfHwgXCJJbXBvc3NpYmxlIGQnZXhwbG9pdGVyIGNlIGTDqXDDtHRcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiRXJyZXVyIGxvcnMgZGUgbCdleHBsb2l0YXRpb25cIiwgZSk7XHJcbiAgICAgICAgYWxlcnQoXCJFcnJldXIgcsOpc2VhdSBsb3JzIGRlIGwnZXhwbG9pdGF0aW9uOiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcblxyXG5pbXBvcnQgeyBncmlkTGF5ZXIsIGluaXRHcmlkTGF5ZXIgfSBmcm9tICcuLi9MYXllcnMvZ3JpZExheWVyLmpzJztcclxuaW1wb3J0IHsgbG9hZFZpc2libGVSb2FkQ2h1bmtzIH0gZnJvbSAnLi9yb2Fkcy9yb2Fkcy5qcyc7XHJcbmltcG9ydCB7IHJvYWRzU3RhdGUgfSBmcm9tICcuL3JvYWRzL3JvYWRzU3RhdGUuanMnO1xyXG5cclxuaW1wb3J0IHsgbG9hZEJhc2VGcm9tU2VydmVyLCBsb2FkT3RoZXJCYXNlLCBzZXRDdXJyZW50UGxheWVyRmFjdGlvbiB9IGZyb20gJy4uL2J1aWxkaW5ncy9iYXNlLmpzJztcclxuaW1wb3J0IHsgbG9hZEJ1aWxkaW5nc0Zyb21EYXRhLCBzZXRDdXJyZW50UGxheWVySWQgfSBmcm9tICcuLi9idWlsZGluZ3MvYnVpbGRpbmcuanMnO1xyXG5cclxuaW1wb3J0IHsgaW5pdERlcG9zaXRMYXllcnMsIGRlcG9zaXRMYXllcnMgfSBmcm9tICcuL2RlcG9zaXRzL2RlcG9zaXRzLmpzJztcclxuXHJcbmltcG9ydCBtYXJrZXJJY29uIGZyb20gJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24ucG5nJztcclxuaW1wb3J0IG1hcmtlclNoYWRvdyBmcm9tICdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1zaGFkb3cucG5nJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuXHJcbkwuTWFya2VyLnByb3RvdHlwZS5vcHRpb25zLmljb24gPSBMLmljb24oe1xyXG4gICAgaWNvblVybDogbWFya2VySWNvbixcclxuICAgIHNoYWRvd1VybDogbWFya2VyU2hhZG93LFxyXG59KTtcclxuXHJcbmxldCBtYXBJbnN0YW5jZSA9IG51bGw7XHJcbmxldCBtb3ZlVGltZW91dCA9IG51bGw7XHJcbmxldCBpc0NodW5rTW9kZSA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRNYXAobGF0LCBsbmcpIHtcclxuXHJcbiAgICBtYXBJbnN0YW5jZSA9IEwubWFwKCdtYXAnKS5zZXRWaWV3KFtsYXQsIGxuZ10sIDcpO1xyXG5cclxuICAgIEwudGlsZUxheWVyKCdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsIHtcclxuICAgICAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyBPcGVuU3RyZWV0TWFwJ1xyXG4gICAgfSkuYWRkVG8obWFwSW5zdGFuY2UpO1xyXG5cclxuICAgIC8vIMOJdsOpbmVtZW50IHBlcnNvbm5hbGlzw6kgcG91ciBzaWduYWxlciBxdWUgbGEgY2FydGUgZXN0IHByw6p0ZVxyXG4gICAgbWFwSW5zdGFuY2UuZmlyZSgnbWFwUmVhZHknKTtcclxuXHJcbiAgICBjb25zdCBsYXllcnNDb250cm9sID0gTC5jb250cm9sLmxheWVycyhudWxsLCB7XHJcbiAgICAgICAgXCJDaHVuayBHcmlkXCI6IGdyaWRMYXllclxyXG4gICAgfSkuYWRkVG8obWFwSW5zdGFuY2UpO1xyXG5cclxuICAgIGluaXREZXBvc2l0TGF5ZXJzKG1hcEluc3RhbmNlLCBsYXllcnNDb250cm9sKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIENFTlRSQUwgQ0hVTksgQ09OVFJPTExFUlxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgbWFwSW5zdGFuY2Uub24oJ21vdmVlbmQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghaXNDaHVua01vZGUpIHJldHVybjtcclxuICAgICAgICBpZiAobWFwSW5zdGFuY2UuZ2V0Wm9vbSgpIDwgMTQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KG1vdmVUaW1lb3V0KTtcclxuXHJcbiAgICAgICAgbW92ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaW5pdEdyaWRMYXllcigpO1xyXG4gICAgICAgICAgICBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwSW5zdGFuY2Uub24oJ292ZXJsYXlhZGQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmxheWVyID09PSBncmlkTGF5ZXIpIHtcclxuICAgICAgICAgICAgZGVidWdMb2coXCJncmlkXCIsIFwiR3JpZCBPTlwiKTtcclxuXHJcbiAgICAgICAgICAgIGluaXRHcmlkTGF5ZXIoKTtcclxuICAgICAgICAgICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwSW5zdGFuY2Uub24oJ292ZXJsYXlyZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmxheWVyID09PSBncmlkTGF5ZXIpIHtcclxuICAgICAgICAgICAgZGVidWdMb2coXCJncmlkXCIsIFwiR3JpZCBPRkZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBFVkVOVFNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbWFwSW5zdGFuY2Uub24oJ3pvb21lbmQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHpvb20gPSBtYXBJbnN0YW5jZS5nZXRab29tKCk7XHJcblxyXG4gICAgICAgIGlmICh6b29tID49IDE0KSB7XHJcbiAgICAgICAgICAgIGVudGVyQ2h1bmtNb2RlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXhpdENodW5rTW9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNHcmlkTGF5ZXJBY3RpdmUoKSB7XHJcbiAgICByZXR1cm4gbWFwSW5zdGFuY2U/Lmhhc0xheWVyKGdyaWRMYXllcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXAoKSB7XHJcbiAgICByZXR1cm4gbWFwSW5zdGFuY2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbHlUbyhsYXQsIGxuZywgem9vbSA9IDEzKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIG1hcC5mbHlUbyhbbGF0LCBsbmddLCB6b29tLCB7XHJcbiAgICAgICAgYW5pbWF0ZTogdHJ1ZSxcclxuICAgICAgICBkdXJhdGlvbjogMS41XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFdPUkxEIExPQURFUiAoQ29uY2VudHJhdGV1ciBkJ2FwcGVscyBBUEkpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFdvcmxkKCkge1xyXG5cclxuICAgIGZldGNoKCcvYXBpL3dvcmxkLXN0YXRlJylcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQICR7cmVzLnN0YXR1c306ICR7cmVzLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgLy8gVsOpcmlmaWVyIHNpIGxhIHLDqXBvbnNlIGVzdCB2YWxpZGVcclxuICAgICAgICAgICAgaWYgKCFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlc3BvbnNlIGZvcm1hdCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFyZ2VyIGxlcyBiYXNlcyB2aWEgYmFzZS5qcyBEJ0FCT1JEIHBvdXIgY29ubmHDrnRyZSBsYSBmYWN0aW9uIGR1IGpvdWV1clxyXG4gICAgICAgICAgICBpZiAoZGF0YS5wbGF5ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFzQ2VudGVyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgcGxheWVyOlwiLCBwbGF5ZXIucHNldWRvLCBcIkZhY3Rpb246XCIsIHBsYXllci5mYWN0aW9uLCBcIklzTWU6XCIsIHBsYXllci5pc01lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5pc01lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKHBsYXllci5mYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZEJhc2VGcm9tU2VydmVyKHBsYXllci5sYXQsIHBsYXllci5sbmcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXIgZmFjdGlvbiBzZXQgdG86XCIsIHBsYXllci5mYWN0aW9uICwgXCJQbGF5ZXIgYmFzZSBsb2FkZWQgYXQ6XCIsIHBsYXllci5sYXQsIHBsYXllci5sbmcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNDZW50ZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx5VG8ocGxheWVyLmxhdCwgcGxheWVyLmxuZywgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2VudGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsb2FkT3RoZXJCYXNlKHBsYXllci5sYXQsIHBsYXllci5sbmcsIHBsYXllci5wc2V1ZG8sIHBsYXllci5mYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBEw6lmaW5pciBsJ0lEIGR1IGpvdWV1ciBhY3RpZlxyXG4gICAgICAgICAgICBpZiAoZGF0YS5jdXJyZW50UGxheWVySWQpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQbGF5ZXJJZChkYXRhLmN1cnJlbnRQbGF5ZXJJZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENoYXJnZXIgbGVzIGLDonRpbWVudHMgYXByw6hzIGF2b2lyIGTDqWZpbmkgbGEgZmFjdGlvbiBkdSBqb3VldXJcclxuICAgICAgICAgICAgbG9hZEJ1aWxkaW5nc0Zyb21EYXRhKGRhdGEuYnVpbGRpbmdzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBkZWJ1Z0Vycm9yKCdtYXAnLCBcIkVycmV1ciBsb2FkIHdvcmxkXCIsIGVycik7XHJcbiAgICAgICAgICAgIC8vIE5lIHBhcyByZWRpcmlnZXIgYXV0b21hdGlxdWVtZW50LCBsYWlzc2V6IGxlIHN5c3TDqG1lIGRlIGxvZ2luIGfDqXJlciBsYSByZWRpcmVjdGlvblxyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbnRlckNodW5rTW9kZSgpIHtcclxuICAgIGlmIChpc0NodW5rTW9kZSkgcmV0dXJuO1xyXG5cclxuICAgIGlzQ2h1bmtNb2RlID0gdHJ1ZTtcclxuXHJcbiAgICBkZWJ1Z0xvZyhcImNodW5rc1wiLCBcIkVOVEVSIENIVU5LIE1PREVcIik7XHJcblxyXG4gICAgaW5pdEdyaWRMYXllcigpO1xyXG4gICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4aXRDaHVua01vZGUoKSB7XHJcbiAgICBpZiAoIWlzQ2h1bmtNb2RlKSByZXR1cm47XHJcblxyXG4gICAgaXNDaHVua01vZGUgPSBmYWxzZTtcclxuXHJcbiAgICBkZWJ1Z0xvZyhcImNodW5rc1wiLCBcIkVYSVQgQ0hVTksgTU9ERVwiKTtcclxuXHJcbiAgICBpZiAobWFwSW5zdGFuY2UuaGFzTGF5ZXIoZ3JpZExheWVyKSkge1xyXG4gICAgICAgIG1hcEluc3RhbmNlLnJlbW92ZUxheWVyKGdyaWRMYXllcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyByb2Fkc1N0YXRlIH0gZnJvbSAnLi9yb2Fkc1N0YXRlLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2cgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZGF0ZUNodW5rKGlkKSB7XHJcbiAgICBkZWJ1Z0xvZyhcImNhY2hlXCIsIFwi8J+nuSBpbnZhbGlkYXRlIGNodW5rOlwiLCBpZCk7XHJcbiAgICBcclxuICAgIGRlbGV0ZSByb2Fkc1N0YXRlLmNodW5rc1tpZF07XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY2h1bmtfJHtpZH1gKTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwLmpzJztcclxuXHJcbi8qKlxyXG4gKiBUcm91dmUgbGUgcG9pbnQgbGUgcGx1cyBwcm9jaGUgc3VyIHRvdXRlcyBsZXMgcm91dGVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZENsb3Nlc3RQb2ludE9uUm9hZChsYXRsbmcsIHJvYWRzKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBsZXQgYmVzdFBvaW50ID0gbnVsbDtcclxuICAgIGxldCBiZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZHMpKSByZXR1cm4geyBwb2ludDogbnVsbCwgZGlzdGFuY2U6IEluZmluaXR5IH07XHJcblxyXG4gICAgcm9hZHMuZm9yRWFjaChyb2FkID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWQucG9pbnRzKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChyb2FkLnBvaW50cy5sZW5ndGggPCAyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9hZC5wb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhUmF3ID0gcm9hZC5wb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGJSYXcgPSByb2FkLnBvaW50c1tpICsgMV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFSYXcgfHwgIWJSYXcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkJST0tFTiBST0FEIFNFR01FTlQ6XCIsIHJvYWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYVJhdy5sZW5ndGggPCAyIHx8IGJSYXcubGVuZ3RoIDwgMikgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhID0gTC5sYXRMbmcoYVJhd1swXSwgYVJhd1sxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBMLmxhdExuZyhiUmF3WzBdLCBiUmF3WzFdKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RlZCA9IHByb2plY3RQb2ludE9uU2VnbWVudChsYXRsbmcsIGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gbWFwLmRpc3RhbmNlKGxhdGxuZywgcHJvamVjdGVkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0IDwgYmVzdERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0RGlzdGFuY2UgPSBkaXN0O1xyXG4gICAgICAgICAgICAgICAgYmVzdFBvaW50ID0gcHJvamVjdGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwb2ludDogYmVzdFBvaW50LFxyXG4gICAgICAgIGRpc3RhbmNlOiBiZXN0RGlzdGFuY2VcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcm91dmUgbGUgc2VnbWVudCBsZSBwbHVzIHByb2NoZSAocG91ciBoaWdobGlnaHQgdmlzdWVsKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDbG9zZXN0U2VnbWVudChsYXRsbmcsIHJvYWRzKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBsZXQgYmVzdFNlZ21lbnQgPSBudWxsO1xyXG4gICAgbGV0IGJlc3REaXN0YW5jZSA9IEluZmluaXR5O1xyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkcykpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJvYWRzLmZvckVhY2gocm9hZCA9PiB7XHJcblxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkLnBvaW50cykpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2FkLnBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFSYXcgPSByb2FkLnBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgYlJhdyA9IHJvYWQucG9pbnRzW2kgKyAxXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYVJhdyB8fCAhYlJhdykgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChhUmF3Lmxlbmd0aCA8IDIgfHwgYlJhdy5sZW5ndGggPCAyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBMLmxhdExuZyhhUmF3WzBdLCBhUmF3WzFdKTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IEwubGF0TG5nKGJSYXdbMF0sIGJSYXdbMV0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWlkID0gTC5sYXRMbmcoXHJcbiAgICAgICAgICAgICAgICAoYS5sYXQgKyBiLmxhdCkgLyAyLFxyXG4gICAgICAgICAgICAgICAgKGEubG5nICsgYi5sbmcpIC8gMlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlzdCA9IG1hcC5kaXN0YW5jZShsYXRsbmcsIG1pZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlzdCA8IGJlc3REaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgYmVzdERpc3RhbmNlID0gZGlzdDtcclxuICAgICAgICAgICAgICAgIGJlc3RTZWdtZW50ID0gW2EsIGJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJlc3RTZWdtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogUHJvamVjdGlvbiBkJ3VuIHBvaW50IHN1ciB1biBzZWdtZW50IChBLUIpXHJcbiAqIG1hdGggc3RhYmxlIHBvdXIgc25hcCByb3V0ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0UG9pbnRPblNlZ21lbnQocCwgYSwgYikge1xyXG5cclxuICAgIGNvbnN0IEEgPSBbYS5sYXQsIGEubG5nXTtcclxuICAgIGNvbnN0IEIgPSBbYi5sYXQsIGIubG5nXTtcclxuICAgIGNvbnN0IFAgPSBbcC5sYXQsIHAubG5nXTtcclxuXHJcbiAgICBjb25zdCBBQiA9IFtCWzBdIC0gQVswXSwgQlsxXSAtIEFbMV1dO1xyXG4gICAgY29uc3QgQVAgPSBbUFswXSAtIEFbMF0sIFBbMV0gLSBBWzFdXTtcclxuXHJcbiAgICBjb25zdCBhYjIgPSBBQlswXSAqIEFCWzBdICsgQUJbMV0gKiBBQlsxXTtcclxuXHJcbiAgICBpZiAoYWIyID09PSAwKSByZXR1cm4gYTtcclxuXHJcbiAgICBsZXQgdCA9IChBUFswXSAqIEFCWzBdICsgQVBbMV0gKiBBQlsxXSkgLyBhYjI7XHJcblxyXG4gICAgdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHQpKTtcclxuXHJcbiAgICByZXR1cm4gTC5sYXRMbmcoXHJcbiAgICAgICAgQVswXSArIEFCWzBdICogdCxcclxuICAgICAgICBBWzFdICsgQUJbMV0gKiB0XHJcbiAgICApO1xyXG59XHJcblxyXG4vKipcclxuICogRGlzdGFuY2UgcG9pbnQgLT4gc2VnbWVudCAodXRpbGUgdmFsaWRhdGlvbiBmdXR1cmUpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2VUb1NlZ21lbnQocCwgYSwgYikge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdGVkID0gcHJvamVjdFBvaW50T25TZWdtZW50KHAsIGEsIGIpO1xyXG4gICAgcmV0dXJuIG1hcC5kaXN0YW5jZShwLCBwcm9qZWN0ZWQpO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgc2ltcGxlIGRlYnVnIHJvYWRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdSb2Fkcyhyb2Fkcykge1xyXG4gICAgY29uc29sZS5sb2coXCJST0FEUyBERUJVRzpcIiwgcm9hZHMubGVuZ3RoLCByb2Fkcyk7XHJcbn0iLCJpbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAuanMnO1xyXG5pbXBvcnQgeyBDSFVOS19TSVpFIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2h1bmsuanMnO1xyXG5pbXBvcnQgeyBzZXRDaHVua0NvbG9yIH0gZnJvbSAnLi4vLi4vTGF5ZXJzL2dyaWRMYXllci5qcyc7XHJcbmltcG9ydCB7IGludmFsaWRhdGVDaHVuayB9IGZyb20gJy4vaW52YWxpZGF0ZUNodW5rLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgcm9hZHNTdGF0ZSB9IGZyb20gJy4vcm9hZHNTdGF0ZS5qcyc7XHJcbmltcG9ydCB7IHJlbmRlckRlcG9zaXRzRnJvbURhdGEgfSBmcm9tICcuLi9kZXBvc2l0cy9kZXBvc2l0cy5qcyc7XHJcbmltcG9ydCB7IGdldENhY2hlS2V5IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FjaGVVdGlscy5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBMT0FEIENPTlRST0xcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgbG9hZGluZ1F1ZXVlID0gbmV3IFNldCgpO1xyXG5jb25zdCBNQVhfQ09OQ1VSUkVOVCA9IDQ7XHJcbmxldCBhY3RpdmVSZXF1ZXN0cyA9IDA7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDSFVOSyBJRFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBnZXRDaHVua0lkKGxhdCwgbG5nKSB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihsYXQgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGxuZyAvIENIVU5LX1NJWkUpO1xyXG4gICAgcmV0dXJuIGAke3h9XyR7eX1gO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBNQUlOIExPQUQgVklTSUJMRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFZpc2libGVSb2FkQ2h1bmtzKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghbWFwIHx8IG1hcC5nZXRab29tKCkgPCAxNCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGJvdW5kcyA9IG1hcC5nZXRCb3VuZHMoKTtcclxuXHJcbiAgICBjb25zdCB2aXNpYmxlQ2h1bmtzID0gZ2V0VmlzaWJsZUNodW5rcyhib3VuZHMpO1xyXG5cclxuICAgIGNvbnN0IGNodW5rc1RvTG9hZCA9IHZpc2libGVDaHVua3MuZmlsdGVyKFxyXG4gICAgICAgIGNodW5rSWQgPT4gIXJvYWRzU3RhdGUubG9hZGVkQ2h1bmtzLmhhcyhjaHVua0lkKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gVkVSSUZJQ0FUSU9OIENBQ0hFIExPQ0FMXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgZmluYWxDaHVua3NUb0xvYWQgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgY2h1bmtzVG9Mb2FkKSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBnZXRDYWNoZUtleShjaHVua0lkKTtcclxuICAgICAgICBjb25zdCBjYWNoZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjYWNoZUtleSk7XHJcbiAgICAgICAgaWYgKGNhY2hlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShjYWNoZWQpO1xyXG4gICAgICAgICAgICAvLyBWw6lyaWZpZXIgc2kgbGUgY2FjaGUgZXN0IHZpZXV4IChleDogcGx1cyBkZSAxaClcclxuICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSBkYXRhLnRzIDwgMzYwMDAwMCkgeyBcclxuICAgICAgICAgICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogZGF0YS5oYXNSb2FkcyA/ICdsb2FkZWQnIDogJ2VtcHR5JyxcclxuICAgICAgICAgICAgICAgICAgICByb2FkczogZGF0YS5yb2FkcyxcclxuICAgICAgICAgICAgICAgICAgICBidWlsZGluZ3M6IGRhdGEuYnVpbGRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcG9zaXRzOiBkYXRhLmRlcG9zaXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1JvYWRzOiBkYXRhLmhhc1JvYWRzXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcm9hZHNTdGF0ZS5sb2FkZWRDaHVua3MuYWRkKGNodW5rSWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCBkYXRhLmhhc1JvYWRzID8gJ2JsdWUnIDogJyM0NDQnKTtcclxuICAgICAgICAgICAgICAgIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoZGF0YS5kZXBvc2l0cyB8fCBbXSwgbWFwKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsQ2h1bmtzVG9Mb2FkLnB1c2goY2h1bmtJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEVUQVQgTE9BRElOR1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgZmluYWxDaHVua3NUb0xvYWQpIHtcclxuXHJcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgICByb2FkczogW10sXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogW10sXHJcbiAgICAgICAgICAgIGRlcG9zaXRzOiBbXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ29yYW5nZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJpZW4gw6AgY2hhcmdlclxyXG4gICAgaWYgKGZpbmFsQ2h1bmtzVG9Mb2FkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJlZnJlc2hDaHVua0NvbG9ycyh2aXNpYmxlQ2h1bmtzKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgW3JvYWRzUmVzcG9uc2UsIGJ1aWxkaW5nc1Jlc3BvbnNlLCBkZXBvc2l0c1Jlc3BvbnNlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvY2h1bmtzL2J1bGsnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IGZpbmFsQ2h1bmtzVG9Mb2FkIH0pXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9idWlsZGluZ3MvdmlzaWJsZScsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogZmluYWxDaHVua3NUb0xvYWQgfSlcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2RlcG9zaXRzL2J1bGsnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IGZpbmFsQ2h1bmtzVG9Mb2FkIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGlmICghcm9hZHNSZXNwb25zZS5vayB8fCAhYnVpbGRpbmdzUmVzcG9uc2Uub2sgfHwgIWRlcG9zaXRzUmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkFQSSBlcnJvclwiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9hZHNEYXRhID0gYXdhaXQgcm9hZHNSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgYnVpbGRpbmdzRGF0YSA9IGF3YWl0IGJ1aWxkaW5nc1Jlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBkZXBvc2l0c0RhdGEgPSBhd2FpdCBkZXBvc2l0c1Jlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgLy8gQ3LDqWVyIHVuIGluZGV4IHBvdXIgbWFwcGVyIGxlcyBiw6J0aW1lbnRzIHBhciBjaHVua0lkIHJhcGlkZW1lbnRcclxuICAgICAgICBjb25zdCBidWlsZGluZ3NCeUNodW5rID0ge307XHJcbiAgICAgICAgYnVpbGRpbmdzRGF0YS5mb3JFYWNoKGIgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjSWQgPSBNYXRoLmZsb29yKGIubGF0ICogMTAwKSArICdfJyArIE1hdGguZmxvb3IoYi5sbmcgKiAxMDApO1xyXG4gICAgICAgICAgICBpZiAoIWJ1aWxkaW5nc0J5Q2h1bmtbY0lkXSkgYnVpbGRpbmdzQnlDaHVua1tjSWRdID0gW107XHJcbiAgICAgICAgICAgIGJ1aWxkaW5nc0J5Q2h1bmtbY0lkXS5wdXNoKGIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFRSQUlURU1FTlQgQ0hVTktTXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjaHVua0lkIG9mIGZpbmFsQ2h1bmtzVG9Mb2FkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNodW5rRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIHJvYWRzOiByb2Fkc0RhdGFbY2h1bmtJZF0/LnJvYWRzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBidWlsZGluZ3NEYXRhW2NodW5rSWRdPy5idWlsZGluZ3MgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBkZXBvc2l0czogZGVwb3NpdHNEYXRhW2NodW5rSWRdIHx8IFtdXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoYXNSb2FkcyA9IGNodW5rRGF0YS5yb2FkcyAmJiBjaHVua0RhdGEucm9hZHMubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBoYXNSb2FkcyA/ICdsb2FkZWQnIDogJ2VtcHR5JyxcclxuICAgICAgICAgICAgICAgIHJvYWRzOiBjaHVua0RhdGEucm9hZHMgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6IGNodW5rRGF0YS5idWlsZGluZ3MgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBkZXBvc2l0czogY2h1bmtEYXRhLmRlcG9zaXRzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgaGFzUm9hZHNcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJvYWRzU3RhdGUubG9hZGVkQ2h1bmtzLmFkZChjaHVua0lkKTtcclxuXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIENBQ0hFXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gZ2V0Q2FjaGVLZXkoY2h1bmtJZCk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICAgICBjYWNoZUtleSxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgcm9hZHM6IGNodW5rRGF0YS5yb2FkcyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogY2h1bmtEYXRhLmJ1aWxkaW5ncyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGRlcG9zaXRzOiBjaHVua0RhdGEuZGVwb3NpdHMgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBoYXNSb2FkcyxcclxuICAgICAgICAgICAgICAgIHRzOiBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIERSQVcgUk9BRFNcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgICAgIC8vIGNodW5rRGF0YS5yb2Fkcy5mb3JFYWNoKHJvYWQgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgZHJhd1JvYWQocm9hZCk7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gRFJBVyBCVUlMRElOR1NcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gY2h1bmtEYXRhLmJ1aWxkaW5ncy5mb3JFYWNoKGJ1aWxkaW5nID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGRyYXdCdWlsZGluZyhidWlsZGluZyk7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gQ09VTEVVUiBDSFVOS1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICBzZXRDaHVua0NvbG9yKFxyXG4gICAgICAgICAgICAgICAgY2h1bmtJZCxcclxuICAgICAgICAgICAgICAgIGhhc1JvYWRzID8gJ2JsdWUnIDogJyM0NDQnXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGNodW5rRGF0YS5kZXBvc2l0cywgbWFwKTtcclxuXHJcbiAgICAgICAgICAgIGRlYnVnTG9nKFwicm9hZHNcIiwgYENodW5rICR7Y2h1bmtJZH0gbG9hZGVkICgke2NodW5rRGF0YS5yb2Fkcy5sZW5ndGh9IHJvYWRzLCAke2NodW5rRGF0YS5idWlsZGluZ3MubGVuZ3RofSBidWlsZGluZ3MsICR7Y2h1bmtEYXRhLmRlcG9zaXRzLmxlbmd0aH0gZGVwb3NpdHMpYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgZGVidWdFcnJvcihcInJvYWRzXCIsIFwiRXJyZXVyIGNoYXJnZW1lbnQgY2h1bmtzIGJ1bGs6XCIsIGVycm9yKTtcclxuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBFVEFUIEVSUkVVUlxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBmaW5hbENodW5rc1RvTG9hZCkge1xyXG4gICAgICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcclxuXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXHJcblxyXG4gICAgICAgICAgICAgICAgcm9hZHM6IFtdLFxyXG5cclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogW10sXHJcbiAgICAgICAgICAgICAgICBkZXBvc2l0czogW11cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ3JlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gUkVGUkVTSCBWSVNVRUwgRklOQUxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgcmVmcmVzaENodW5rQ29sb3JzKHZpc2libGVDaHVua3MpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSRUZSRVNIIENIVU5LIENPTE9SU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiByZWZyZXNoQ2h1bmtDb2xvcnModmlzaWJsZUNodW5rcykge1xyXG5cclxuICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiB2aXNpYmxlQ2h1bmtzKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNodW5rID0gcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF07XHJcbiAgICAgICAgaWYgKCFjaHVuaykge1xyXG5cclxuICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnb3JhbmdlJyk7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChjaHVuay5zdGF0dXMpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2xvYWRlZCc6XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnYmx1ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnZW1wdHknOlxyXG5cclxuICAgICAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJyM0NDQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2xvYWRpbmcnOlxyXG5cclxuICAgICAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ29yYW5nZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxyXG5cclxuICAgICAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ3JlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICd5ZWxsb3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJFRlJFU0ggQ0hVTktcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hDaHVuayhsYXQsIGxuZykge1xyXG4gICAgY29uc3QgY2h1bmtJZCA9IGdldENodW5rSWQobGF0LCBsbmcpO1xyXG5cclxuICAgIGludmFsaWRhdGVDaHVuayhjaHVua0lkKTtcclxuXHJcbiAgICByb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5kZWxldGUoY2h1bmtJZCk7XHJcblxyXG4gICAgYXdhaXQgZmV0Y2hTaW5nbGVDaHVuayhjaHVua0lkKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRkVUQ0ggU0lOR0xFIENIVU5LXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoU2luZ2xlQ2h1bmsoY2h1bmtJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGluZycsXHJcbiAgICAgICAgICAgIHJvYWRzOiBbXSxcclxuICAgICAgICAgICAgYnVpbGRpbmdzOiBbXSxcclxuICAgICAgICAgICAgZGVwb3NpdHM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnb3JhbmdlJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IFtyb2Fkc1JlcywgYnVpbGRpbmdzUmVzLCBkZXBvc2l0c1Jlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2NodW5rcy9idWxrJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2h1bmtzOiBbY2h1bmtJZF0gfSlcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2J1aWxkaW5ncy92aXNpYmxlJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2h1bmtzOiBbY2h1bmtJZF0gfSlcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2RlcG9zaXRzL2J1bGsnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IFtjaHVua0lkXSB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBpZiAoIXJvYWRzUmVzLm9rIHx8ICFidWlsZGluZ3NSZXMub2sgfHwgIWRlcG9zaXRzUmVzLm9rKSBcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQVBJIGVycm9yXCIpO1xyXG5cclxuICAgICAgICBjb25zdCByb2Fkc0RhdGEgICAgID0gYXdhaXQgcm9hZHNSZXMuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGJ1aWxkaW5nc0RhdGEgPSBhd2FpdCBidWlsZGluZ3NSZXMuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGRlcG9zaXRzRGF0YSAgPSBhd2FpdCBkZXBvc2l0c1Jlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNodW5rRGVwb3NpdHMgPSBkZXBvc2l0c0RhdGFbY2h1bmtJZF0gfHwgW107XHJcblxyXG4gICAgICAgIGNvbnN0IGNodW5rRGF0YSA9IHtcclxuICAgICAgICAgICAgcm9hZHM6ICAgICByb2Fkc0RhdGFbY2h1bmtJZF0/LnJvYWRzICAgICB8fCBbXSxcclxuICAgICAgICAgICAgYnVpbGRpbmdzOiBidWlsZGluZ3NEYXRhW2NodW5rSWRdPy5idWlsZGluZ3MgfHwgW10sXHJcbiAgICAgICAgICAgIGRlcG9zaXRzOiAgY2h1bmtEZXBvc2l0c1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc1JvYWRzID0gY2h1bmtEYXRhLnJvYWRzLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG4gICAgICAgICAgICBzdGF0dXM6IGhhc1JvYWRzID8gJ2xvYWRlZCcgOiAnZW1wdHknLFxyXG4gICAgICAgICAgICByb2FkczogICAgIGNodW5rRGF0YS5yb2FkcyxcclxuICAgICAgICAgICAgYnVpbGRpbmdzOiBjaHVua0RhdGEuYnVpbGRpbmdzLFxyXG4gICAgICAgICAgICBkZXBvc2l0czogIGNodW5rRGF0YS5kZXBvc2l0cyxcclxuICAgICAgICAgICAgaGFzUm9hZHNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBjYWNoZUtleSA9IGdldENhY2hlS2V5KGNodW5rSWQpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGNhY2hlS2V5LCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHJvYWRzOiAgICAgY2h1bmtEYXRhLnJvYWRzLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IGNodW5rRGF0YS5idWlsZGluZ3MsXHJcbiAgICAgICAgICAgIGRlcG9zaXRzOiAgY2h1bmtEYXRhLmRlcG9zaXRzLFxyXG4gICAgICAgICAgICBoYXNSb2FkcyxcclxuICAgICAgICAgICAgdHM6IERhdGUubm93KClcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgaGFzUm9hZHMgPyAnYmx1ZScgOiAnIzQ0NCcpO1xyXG4gICAgICAgIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoY2h1bmtEYXRhLmRlcG9zaXRzLCBnZXRNYXAoKSk7XHJcblxyXG4gICAgICAgIGRlYnVnTG9nKFwicm9hZHNcIiwgXCJbQ0hVTksgUkVGUkVTSF1cIiwgY2h1bmtJZCwgY2h1bmtEYXRhLnJvYWRzLmxlbmd0aCk7XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG4gICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHJvYWRzOiBbXSxcclxuICAgICAgICAgICAgYnVpbGRpbmdzOiBbXSxcclxuICAgICAgICAgICAgZGVwb3NpdHM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAncmVkJyk7XHJcbiAgICAgICAgZGVidWdFcnJvcihcInJvYWRzXCIsIFwiW0NIVU5LIFJFRlJFU0ggRVJST1JdXCIsIGNodW5rSWQsIGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWaXNpYmxlQ2h1bmtzKGJvdW5kcykge1xyXG5cclxuICAgIGNvbnN0IG1pblggPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRTb3V0aCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtYXhYID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0Tm9ydGgoKSAvIENIVU5LX1NJWkUpO1xyXG5cclxuICAgIGNvbnN0IG1pblkgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRXZXN0KCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1heFkgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRFYXN0KCkgLyBDSFVOS19TSVpFKTtcclxuXHJcbiAgICBjb25zdCBjaHVua0lkID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgeCA9IG1pblg7IHggPD0gbWF4WDsgeCsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgeSsrKSB7XHJcbiAgICAgICAgICAgIGNodW5rSWQucHVzaChgJHt4fV8ke3l9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjaHVua0lkO1xyXG59IiwiZXhwb3J0IGNvbnN0IHJvYWRzU3RhdGUgPSB7XHJcbiAgICBjaHVua3M6IHt9LFxyXG4gICAgbG9hZGVkQ2h1bmtzOiBuZXcgU2V0KCksXHJcbiAgICByb2Fkc1JlYWR5OiBmYWxzZSxcclxuICAgIGRyYXduUm9hZHM6IFtdLFxyXG4gICAgdmlzaWJsZUNodW5rczogbmV3IFNldCgpLFxyXG4gICAgXHJcbiAgICByb2FkTGF5ZXJzOiB7fSxcclxuXHJcbiAgICBidWlsZGluZ0xheWVyczoge31cclxufTtcclxuXHJcbmxldCBjYWNoZWRSb2FkcyA9IFtdO1xyXG5sZXQgY2FjaGVEaXJ0eSA9IHRydWU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFya1JvYWRDYWNoZURpcnR5KCkge1xyXG4gICAgY2FjaGVEaXJ0eSA9IHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxMb2FkZWRSb2FkcygpIHtcclxuXHJcbiAgICBpZiAoIXJvYWRzU3RhdGU/LmNodW5rcykgcmV0dXJuIFtdO1xyXG5cclxuICAgIGlmICghY2FjaGVEaXJ0eSkgcmV0dXJuIGNhY2hlZFJvYWRzO1xyXG5cclxuICAgIGNhY2hlZFJvYWRzID0gT2JqZWN0LnZhbHVlcyhyb2Fkc1N0YXRlLmNodW5rcylcclxuICAgICAgICAuZmlsdGVyKGMgPT4gYz8uc3RhdHVzID09PSAnbG9hZGVkJyAmJiBBcnJheS5pc0FycmF5KGMucm9hZHMpKVxyXG4gICAgICAgIC5mbGF0TWFwKGMgPT4gYy5yb2Fkcyk7XHJcblxyXG4gICAgY2FjaGVEaXJ0eSA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBjYWNoZWRSb2FkcztcclxufSIsImV4cG9ydCBmdW5jdGlvbiBpbml0Tm90aWZpY2F0aW9ucygpXHJcbntcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignaHRteDphZnRlclN3YXAnLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWV2ZW50XScpO1xyXG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gSlNPTi5wYXJzZShlbC5kYXRhc2V0LmV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdnYW1lOmV2ZW50JywgeyBkZXRhaWw6IGV2ZW50IH0pKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgcGFyc2luZyBldmVudDonLCBlcnIpO1xyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgZWwucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbihtZXNzYWdlLCB0eXBlID0gJ2luZm8nKSB7XHJcblxyXG4gICAgY29uc3Qgbm90aWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5vdGlmLmNsYXNzTmFtZSA9IGBub3RpZiBub3RpZi0ke3R5cGV9YDtcclxuICAgIG5vdGlmLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vdGlmKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBub3RpZi5yZW1vdmUoKTtcclxuICAgIH0sIDMwMDApO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFBsYXllckZhY3Rpb24gfSBmcm9tICcuLi9idWlsZGluZ3MvYmFzZS5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTVEFURVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBiYXNlQ2lyY2xlcyA9IG5ldyBNYXAoKTsgLy8gYmFzZUlkIC0+IGNpcmNsZSBsYXllclxyXG5jb25zdCByb2FkU2VnbWVudHMgPSBuZXcgTWFwKCk7IC8vIHJvYWRJZCAtPiBwb2x5bGluZSBsYXllclxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRkFDVElPTiBDT0xPUlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgRkFDVElPTl9DT0xPUlMgPSB7XHJcbiAgICAnZGVmYXVsdCc6ICcjMjdhZTYwJywgIC8vIHZlcnQgcGFyIGTDqWZhdXRcclxuICAgICdlbXBpcmUnOiAnI2U3NGMzYycsICAgLy8gcm91Z2VcclxuICAgICdjZW5kcmVzJzogJyMzNDk4ZGInLCAgICAvLyBibGV1XHJcbiAgICAnbm9tYWRlcyc6ICcjZjM5YzEyJywgIC8vIG9yYW5nZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0RmFjdGlvbkNvbG9yKGZhY3Rpb24pIHtcclxuICAgIHJldHVybiBGQUNUSU9OX0NPTE9SU1tmYWN0aW9uPy50b0xvd2VyQ2FzZSgpXSB8fCBGQUNUSU9OX0NPTE9SU1snZGVmYXVsdCddO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBCQVNFIENJUkNMRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd0Jhc2VDaXJjbGUoYmFzZUlkLCBsYXQsIGxuZywgZmFjdGlvbiwgaXNQbGF5ZXJCYXNlID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJGYWN0aW9uID0gZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKTtcclxuICAgIGNvbnN0IGNvbG9yID0gaXNQbGF5ZXJCYXNlXHJcbiAgICAgICAgPyAnIzI3YWU2MCcgIC8vIHZlcnQgcG91ciBub3RyZSBiYXNlXHJcbiAgICAgICAgOiBnZXRGYWN0aW9uQ29sb3IoZmFjdGlvbik7XHJcblxyXG4gICAgLy8gU3VwcHJpbWVyIGwnYW5jaWVuIGNlcmNsZSBzaSBleGlzdGVcclxuICAgIGlmIChiYXNlQ2lyY2xlcy5oYXMoYmFzZUlkKSkge1xyXG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihiYXNlQ2lyY2xlcy5nZXQoYmFzZUlkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2lyY2xlID0gTC5jaXJjbGUoW2xhdCwgbG5nXSwge1xyXG4gICAgICAgIHJhZGl1czogNTAwLFxyXG4gICAgICAgIGNvbG9yOiBjb2xvcixcclxuICAgICAgICB3ZWlnaHQ6IDIsXHJcbiAgICAgICAgZmlsbE9wYWNpdHk6IDBcclxuICAgIH0pLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgYmFzZUNpcmNsZXMuc2V0KGJhc2VJZCwgY2lyY2xlKTtcclxuICAgIHJldHVybiBjaXJjbGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCYXNlQ2lyY2xlKGJhc2VJZCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChiYXNlQ2lyY2xlcy5oYXMoYmFzZUlkKSkge1xyXG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihiYXNlQ2lyY2xlcy5nZXQoYmFzZUlkKSk7XHJcbiAgICAgICAgYmFzZUNpcmNsZXMuZGVsZXRlKGJhc2VJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFsbEJhc2VDaXJjbGVzKCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGJhc2VDaXJjbGVzLmZvckVhY2goY2lyY2xlID0+IG1hcC5yZW1vdmVMYXllcihjaXJjbGUpKTtcclxuICAgIGJhc2VDaXJjbGVzLmNsZWFyKCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJPQUQgU0VHTUVOVFNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdSb2FkU2VnbWVudChyb2FkSWQsIGNvb3JkcywgZmFjdGlvbikge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCB8fCAhY29vcmRzIHx8IGNvb3Jkcy5sZW5ndGggPCAyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcGxheWVyRmFjdGlvbiA9IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XHJcbiAgICBjb25zdCBjb2xvciA9IGZhY3Rpb24gPT09IHBsYXllckZhY3Rpb25cclxuICAgICAgICA/ICcjMjdhZTYwJyAgLy8gdmVydCBwb3VyIG5vcyByb3V0ZXNcclxuICAgICAgICA6IGdldEZhY3Rpb25Db2xvcihmYWN0aW9uKTtcclxuXHJcbiAgICAvLyBTdXBwcmltZXIgbCdhbmNpZW4gc2VnbWVudCBzaSBleGlzdGVcclxuICAgIGlmIChyb2FkU2VnbWVudHMuaGFzKHJvYWRJZCkpIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIocm9hZFNlZ21lbnRzLmdldChyb2FkSWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb2x5bGluZSA9IEwucG9seWxpbmUoY29vcmRzLCB7XHJcbiAgICAgICAgY29sb3I6IGNvbG9yLFxyXG4gICAgICAgIHdlaWdodDogMyxcclxuICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgICAgZGFzaEFycmF5OiAnOCw4J1xyXG4gICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICByb2FkU2VnbWVudHMuc2V0KHJvYWRJZCwgcG9seWxpbmUpO1xyXG4gICAgcmV0dXJuIHBvbHlsaW5lO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUm9hZFNlZ21lbnQocm9hZElkKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHJvYWRTZWdtZW50cy5oYXMocm9hZElkKSkge1xyXG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihyb2FkU2VnbWVudHMuZ2V0KHJvYWRJZCkpO1xyXG4gICAgICAgIHJvYWRTZWdtZW50cy5kZWxldGUocm9hZElkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQWxsUm9hZFNlZ21lbnRzKCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIHJvYWRTZWdtZW50cy5mb3JFYWNoKHBvbHlsaW5lID0+IG1hcC5yZW1vdmVMYXllcihwb2x5bGluZSkpO1xyXG4gICAgcm9hZFNlZ21lbnRzLmNsZWFyKCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVQREFURSBGVU5DVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUJhc2VDaXJjbGVzKGJhc2VzKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcGxheWVyRmFjdGlvbiA9IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XHJcblxyXG4gICAgYmFzZXMuZm9yRWFjaChiYXNlID0+IHtcclxuICAgICAgICBjb25zdCBpc1BsYXllckJhc2UgPSBiYXNlLmZhY3Rpb24gPT09IHBsYXllckZhY3Rpb247XHJcbiAgICAgICAgZHJhd0Jhc2VDaXJjbGUoYmFzZS5pZCwgYmFzZS5sYXQsIGJhc2UubG5nLCBiYXNlLmZhY3Rpb24sIGlzUGxheWVyQmFzZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVJvYWRTZWdtZW50cyhyb2Fkcykge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckZhY3Rpb24gPSBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xyXG5cclxuICAgIHJvYWRzLmZvckVhY2gocm9hZCA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNQbGF5ZXJSb2FkID0gcm9hZC5mYWN0aW9uID09PSBwbGF5ZXJGYWN0aW9uO1xyXG4gICAgICAgIGRyYXdSb2FkU2VnbWVudChyb2FkLmlkLCByb2FkLmNvb3Jkcywgcm9hZC5mYWN0aW9uKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVVElMSVRZXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRSb2FkU2VnbWVudENvbG9yKHJvYWRJZCwgY29sb3IpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBpZiAocm9hZFNlZ21lbnRzLmhhcyhyb2FkSWQpKSB7XHJcbiAgICAgICAgcm9hZFNlZ21lbnRzLmdldChyb2FkSWQpLnNldFN0eWxlKHsgY29sb3IgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vbm90aWZpY2F0aW9ucy5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQQVRIRklORElORyBERUJVRyAtIENMSUNLIFRPIEdFVCBDT09SRElOQVRFU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWRtaW5Db29yZHMobGF0LCBsbmcpIHtcclxuICAgIGlmIChsYXQgPT09IHVuZGVmaW5lZCB8fCBsbmcgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdCA9IGAke2xhdC50b0ZpeGVkKDYpfSwke2xuZy50b0ZpeGVkKDYpfWA7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChmb3JtYXQpO1xyXG4gICAgc2hvd05vdGlmaWNhdGlvbihcIkZvcm1hdCBjb2xsYWJsZSBhZG1pbiBjb3Bpw6kgOiBcIiArIGZvcm1hdCwgJ3N1Y2Nlc3MnKTtcclxufSIsImltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5pbXBvcnQgeyByZWZyZXNoQ2h1bmsgfSBmcm9tICcuLi9tYXAvcm9hZHMvcm9hZHMuanMnO1xyXG5pbXBvcnQgeyBpbnZhbGlkYXRlQ2h1bmsgfSBmcm9tICcuLi9tYXAvcm9hZHMvaW52YWxpZGF0ZUNodW5rLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcbmltcG9ydCB7IHNuYXBUb0NodW5rIH0gZnJvbSAnLi9zbmFwLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSFVOS19TSVpFID0gMC4wMTtcclxuZXhwb3J0IGNvbnN0IENIVU5LX1JBRElVUyA9IDE7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVxdWVzdEFwaVJvYWRzQW5kQ2h1bmtzQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICdjcm9zc2hhaXInO1xyXG4gICAgYWxlcnQoXCJDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgZmFpcmUgdW5lIHJlcXVldGUgYXBpIHBvdXIgYWpvdXRlciB1biBjaHVuayBkZSByb3V0ZXMgKDAuMDHCsCB4IDAuMDHCsCkuXCIpO1xyXG5cclxuICAgIG1hcC5vbmNlKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IGUubGF0bG5nO1xyXG5cclxuICAgICAgICBjb25zdCBzbmFwcGVkID0gc25hcFRvQ2h1bmsobGF0LCBsbmcpO1xyXG5cclxuICAgICAgICBkZWJ1Z0xvZyhcIm5ldHdvcmtcIiwgXCLwn5OhIGFkZGluZyByb2FkcyBjaHVuazpcIiwgc25hcHBlZC5jaHVua0lkKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvYWRkLXJvYWRzLWNodW5rJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBsYXQ6IHNuYXBwZWQubGF0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxuZzogc25hcHBlZC5sbmdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVmcmVzaENodW5rKHNuYXBwZWQubGF0LCBzbmFwcGVkLmxuZyk7XHJcblxyXG4gICAgICAgICAgICBkZWJ1Z0xvZyhcImNodW5rc1wiLCBcIvCflIQgY2h1bmsgcmVmcmVzaGVkOlwiLCBzbmFwcGVkLmNodW5rSWQpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcihcIm5ldHdvcmtcIiwgXCJmYWlsZWQgdG8gYWRkIHJvYWRzIGNodW5rXCIsIGVycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJyc7XHJcbiAgICB9KTtcclxufSk7IiwiaW1wb3J0IHsgZmx5VG8gfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R1BTKGRlZmF1bHRMYXQsIGRlZmF1bHRMbmcpIHtcclxuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgICAgICBsZXQgZ3BzRm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oXHJcbiAgICAgICAgICAgIChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ3BzRm91bmQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGZseVRvKFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGltZW91dDogNTAwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZ3BzRm91bmQpIHtcclxuICAgICAgICAgICAgICAgIGZseVRvKGRlZmF1bHRMYXQsIGRlZmF1bHRMbmcsIDcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTUwMCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDSFVOS19TSVpFIH0gZnJvbSAnLi9jaHVuay5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc25hcFRvQ2h1bmsobGF0LCBsbmcpIHtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGxhdCAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IobG5nIC8gQ0hVTktfU0laRSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsYXQ6IHggKiBDSFVOS19TSVpFLFxyXG4gICAgICAgIGxuZzogeSAqIENIVU5LX1NJWkUsXHJcbiAgICAgICAgY2h1bmtJZDogYCR7eH1fJHt5fWBcclxuICAgIH07XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gaW5pdEJ1aWxkaW5nVGltZXJzKCkge1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlVGltZXJzKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxpdmVyeS10aW1lci13cmFwcGVyJykuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjaGVkdWxlZEF0ID0gZWwuZGF0YXNldC5zY2hlZHVsZWRBdDtcclxuICAgICAgICAgICAgY29uc3QgdGltZXJFbCAgICAgPSBlbC5xdWVyeVNlbGVjdG9yKCcuZGVsaXZlcnktdGltZXInKTtcclxuICAgICAgICAgICAgaWYgKCF0aW1lckVsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNjaGVkdWxlZEF0KSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lckVsLnRleHRDb250ZW50ID0gJ0F1Y3VuZSBsaXZyYWlzb24gcHLDqXZ1ZSc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5vdyAgICAgICA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjaGVkdWxlZCA9IG5ldyBEYXRlKHNjaGVkdWxlZEF0KS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmZTZWMgICA9IE1hdGgucm91bmQoKHNjaGVkdWxlZCAtIG5vdykgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaWZmU2VjID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTGl2cmFpc29uIHBhcyBlbmNvcmUgcGFydGllXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW5zID0gTWF0aC5mbG9vcihkaWZmU2VjIC8gNjApO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VjcyA9IGRpZmZTZWMgJSA2MDtcclxuICAgICAgICAgICAgICAgIHRpbWVyRWwuaW5uZXJIVE1MID0gYFByb2NoYWluIGTDqXBhcnQgZGFucyA6IDxzdHJvbmc+JHttaW5zfW1pbiAke3NlY3N9czwvc3Ryb25nPmA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFbiB0cmFuc2l0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gTWF0aC5hYnMoZGlmZlNlYyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW5zICAgID0gTWF0aC5mbG9vcihlbGFwc2VkIC8gNjApO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VjcyAgICA9IGVsYXBzZWQgJSA2MDtcclxuICAgICAgICAgICAgICAgIHRpbWVyRWwuaW5uZXJIVE1MID0gYENvbnZvaSBlbiByb3V0ZSBkZXB1aXMgOiA8c3Ryb25nPiR7bWluc31taW4gJHtzZWNzfXM8L3N0cm9uZz5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWlzZSDDoCBqb3VyIGNoYXF1ZSBzZWNvbmRlXHJcbiAgICB1cGRhdGVUaW1lcnMoKTtcclxuICAgIHNldEludGVydmFsKHVwZGF0ZVRpbWVycywgMTAwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGlzb1N0cmluZykge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGlzb1N0cmluZykudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJywge1xyXG4gICAgICAgIHRpbWVab25lOiAnRXVyb3BlL1BhcmlzJyxcclxuICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICB9KTtcclxufSIsImltcG9ydCBMIGZyb20gJ2xlYWZsZXQnO1xyXG5pbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyc7XHJcblxyXG5kZWxldGUgTC5JY29uLkRlZmF1bHQucHJvdG90eXBlLl9nZXRJY29uVXJsO1xyXG5MLkljb24uRGVmYXVsdC5tZXJnZU9wdGlvbnMoe1xyXG4gICAgaWNvblJldGluYVVybDogcmVxdWlyZSgnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi0yeC5wbmcnKSxcclxuICAgIGljb25Vcmw6IHJlcXVpcmUoJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24ucG5nJyksXHJcbiAgICBzaGFkb3dVcmw6IHJlcXVpcmUoJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMOyIsImNvbnN0IENBQ0hFX1ZFUlNJT04gPSAndjEnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENhY2hlS2V5KGNodW5rSWQpIHtcclxuICAgIHJldHVybiBgJHtDQUNIRV9WRVJTSU9OfV9jaHVua18ke2NodW5rSWR9YDtcclxufSIsImltcG9ydCB7IFRZUEVfTUFQIH0gZnJvbSAnLi90eXBlTWFwLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBERUJVRyA9IHtcclxuICAgIGVuYWJsZWQ6IHdpbmRvdy5BUFBfREVCVUcgPz8gZmFsc2UsXHJcblxyXG4gICAgbWVyY3VyZTogdHJ1ZSxcclxuICAgIGludmVudG9yeTogdHJ1ZSxcclxuICAgIGRlbGl2ZXJ5OiB0cnVlLFxyXG4gICAgYnVpbGRpbmdzOiB0cnVlLFxyXG5cclxuICAgIGNodW5rczogdHJ1ZSxcclxuICAgIG5ldHdvcms6IHRydWUsXHJcbiAgICBjYWNoZTogdHJ1ZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNhbkxvZyh0eXBlKSB7XHJcbiAgICBpZiAoIURFQlVHLmVuYWJsZWQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qga2V5ID0gVFlQRV9NQVA/Llt0eXBlXSB8fCB0eXBlO1xyXG5cclxuICAgIHJldHVybiBERUJVR1trZXldICE9PSBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnTG9nKHR5cGUsIC4uLmFyZ3MpIHtcclxuICAgIGlmICghY2FuTG9nKHR5cGUpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGBbJHtUWVBFX01BUD8uW3R5cGVdIHx8IHR5cGV9XWAsXHJcbiAgICAgICAgLi4uYXJnc1xyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnV2Fybih0eXBlLCAuLi5hcmdzKSB7XHJcbiAgICBpZiAoIWNhbkxvZyh0eXBlKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYFske1RZUEVfTUFQPy5bdHlwZV0gfHwgdHlwZX1dYCxcclxuICAgICAgICAuLi5hcmdzXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdFcnJvcih0eXBlLCAuLi5hcmdzKSB7XHJcbiAgICBpZiAoIWNhbkxvZyh0eXBlKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgIGBbJHtUWVBFX01BUD8uW3R5cGVdIHx8IHR5cGV9XWAsXHJcbiAgICAgICAgLi4uYXJnc1xyXG4gICAgKTtcclxufSIsImV4cG9ydCBjb25zdCBUWVBFX01BUCA9IHtcclxuICAgIG1lcmN1cmU6ICdNRVJDVVJFJyxcclxuICAgIGludmVudG9yeTogJ0lOVkVOVE9SWScsXHJcbiAgICBkZWxpdmVyeTogJ0RFTElWRVJZJyxcclxuICAgIGJ1aWxkaW5nczogJ0JVSUxESU5HUycsXHJcbiAgICBjaHVua3M6ICdDSFVOS1MnLFxyXG4gICAgbmV0d29yazogJ05FVFdPUksnLFxyXG4gICAgY2FjaGU6ICdDQUNIRScsXHJcbn07Il0sIm5hbWVzIjpbIkwiLCJkZWJ1Z0xvZyIsIkNIVU5LX1NJWkUiLCJnZXRNYXAiLCJpc0dyaWRMYXllckFjdGl2ZSIsImdyaWRMYXllciIsImxheWVyR3JvdXAiLCJ2aXNpYmxlQ2h1bmtzIiwiTWFwIiwiaW5pdEdyaWRMYXllciIsIm1hcCIsInpvb20iLCJnZXRab29tIiwiYm91bmRzIiwiZ2V0Qm91bmRzIiwibWluTGF0IiwiTWF0aCIsImZsb29yIiwiZ2V0U291dGgiLCJtYXhMYXQiLCJjZWlsIiwiZ2V0Tm9ydGgiLCJtaW5MbmciLCJnZXRXZXN0IiwibWF4TG5nIiwiZ2V0RWFzdCIsIm5ld1Zpc2libGUiLCJTZXQiLCJpIiwiX2xvb3AiLCJpZCIsImNvbmNhdCIsImoiLCJhZGQiLCJoYXMiLCJsYXQiLCJsbmciLCJyZWN0IiwicmVjdGFuZ2xlIiwiY29sb3IiLCJ3ZWlnaHQiLCJmaWxsT3BhY2l0eSIsIm9uIiwic2V0U3R5bGUiLCJhZGRMYXllciIsInNldCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiZW50cmllcyIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiX3N0ZXAkdmFsdWUiLCJfc2xpY2VkVG9BcnJheSIsInZhbHVlIiwicmVtb3ZlTGF5ZXIiLCJlcnIiLCJlIiwiZiIsInNpemUiLCJzZXRDaHVua0NvbG9yIiwiZ2V0IiwiYnVpbGRSZXF1ZXN0IiwidHlwZUlkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlX2lkIiwiZ2V0QnVpbGRpbmdzIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXRCdWlsZGluZ0Nvc3RzIiwiYnVpbGRpbmdUeXBlSWQiLCJ1cGdyYWRlQnVpbGRpbmciLCJidWlsZGluZ0lkIiwiZ2V0VXBncmFkZUluZm8iLCJmbHlUbyIsInJvYWRzU3RhdGUiLCJnZXRBbGxMb2FkZWRSb2FkcyIsImdldEJ1aWxkaW5nSW1hZ2UiLCJzYWZlTG9hZENodW5rIiwibG9hZFZpc2libGVSb2FkQ2h1bmtzIiwiZmluZENsb3Nlc3RQb2ludE9uUm9hZCIsImZpbmRDbG9zZXN0U2VnbWVudCIsInNob3dOb3RpZmljYXRpb24iLCJnZXRBZG1pbkNvb3JkcyIsImRlYnVnV2FybiIsImRlYnVnRXJyb3IiLCJkcmF3QmFzZUNpcmNsZSIsInJlbW92ZUJhc2VDaXJjbGUiLCJyZWZyZXNoU2lkZWJhciIsImJhc2VNYXJrZXIiLCJiYXNlQ2lyY2xlIiwiYmFzZVBvc2l0aW9uIiwiYmFzZUNyZWF0ZWQiLCJwbGFjaW5nQmFzZSIsInByZXZpZXdNYXJrZXIiLCJwcmV2aWV3Q2lyY2xlIiwicHJldmlld1NuYXBMYXRMbmciLCJwcmV2aWV3TGluZSIsImhpZ2hsaWdodGVkU2VnbWVudCIsImN1cnJlbnRQbGF5ZXJGYWN0aW9uIiwic2V0Q3VycmVudFBsYXllckZhY3Rpb24iLCJmYWN0aW9uIiwidG9Mb3dlckNhc2UiLCJnZXRDdXJyZW50UGxheWVyRmFjdGlvbiIsImluaXRCYXNlVUkiLCJiYXNlQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2RlIiwiZGF0YXNldCIsImFsZXJ0IiwiZ2V0Q29udGFpbmVyIiwic3R5bGUiLCJjdXJzb3IiLCJfcHJldmlld1NuYXBMYXRMbmciLCJpc0Jhc2VQbGFjZW1lbnRWYWxpZCIsImNsZWFudXBQcmV2aWV3IiwiY3JlYXRlQmFzZSIsInJvYWRzIiwibGVuZ3RoIiwicmVzdWx0IiwibGF0bG5nIiwicG9pbnQiLCJpc1ZhbGlkIiwiY2lyY2xlIiwicmFkaXVzIiwiYWRkVG8iLCJtYXJrZXIiLCJwb2x5bGluZSIsIm9wYWNpdHkiLCJkYXNoQXJyYXkiLCJzZWdtZW50IiwidXBkYXRlQmFzZURpc3BsYXkiLCJ1cGRhdGVPdGhlckJhc2VzIiwiZW5hYmxlQWRtaW5Db29yZGluYXRlUGlja2VyIiwid2luZG93Iiwib3RoZXJCYXNlcyIsImV2ZXJ5IiwiYmFzZSIsImRpc3QiLCJkaXN0YW5jZSIsImJhc2VUeXBlSWQiLCJvayIsIkVycm9yIiwiZXJyb3IiLCJfcmVmIiwicmVtb3ZlQmFzZSIsIm1lc3NhZ2UiLCJsb2FkT3RoZXJCYXNlIiwicHNldWRvIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJpc1BsYXllckJhc2UiLCJpY29uIiwiY3JlYXRlQmFzZUljb24iLCJiaW5kUG9wdXAiLCJwdXNoIiwiZm9yRWFjaCIsImhhc0xheWVyIiwic2V0SWNvbiIsImxvYWRCYXNlRnJvbVNlcnZlciIsImljb25VcmwiLCJpY29uU2l6ZSIsImljb25BbmNob3IiLCJwb3B1cEFuY2hvciIsInQiLCJyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInNlbGVjdGVkQnVpbGRpbmdUeXBlIiwicHJldmlld0J1aWxkaW5nTWFya2VyIiwiaW5pdEJ1aWxkTW9kZSIsIl9jYWxsZWUiLCJidG4iLCJfY29udGV4dCIsInRhcmdldCIsImNsb3Nlc3QiLCJzZWxlY3RCdWlsZGluZ1R5cGUiLCJfeCIsIm9uTWFwQ2xpY2siLCJvbk1hcE1vdXNlTW92ZSIsIl94MiIsIl94MyIsIl9zZWxlY3RCdWlsZGluZ1R5cGUiLCJfY2FsbGVlMiIsImJ1dHRvbiIsImRhdGEiLCJfdCIsIl9jb250ZXh0MiIsImNsZWFyQnVpbGRpbmdTZWxlY3Rpb24iLCJjbGFzc0xpc3QiLCJuYW1lIiwiY29zdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlIiwiX3g0IiwiX29uTWFwQ2xpY2siLCJfY2FsbGVlMyIsInJlc3BvbnNlIiwiX3QyIiwiX2NvbnRleHQzIiwic2V0TGF0TG5nIiwiYWN0aXZhdGVCdWlsZE1vZGUiLCJxdWVyeVNlbGVjdG9yIiwiY2xpY2siLCJkZWFjdGl2YXRlQnVpbGRNb2RlIiwiaXNCdWlsZE1vZGVBY3RpdmUiLCJfcmVmcmVzaFNpZGViYXIiLCJfY2FsbGVlNCIsImh0bWwiLCJwYXJzZXIiLCJkb2MiLCJuZXdTaWRlYmFyIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwiX3QzIiwiX2NvbnRleHQ0IiwidGV4dCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInJlcGxhY2VXaXRoIiwiYnVpbGRpbmdNYXJrZXJzIiwicG9wdXBDb250ZW50TG9hZGVkIiwiY3VycmVudFBsYXllcklkIiwic2V0Q3VycmVudFBsYXllcklkIiwibG9hZEJ1aWxkaW5nc0Zyb21EYXRhIiwiYnVpbGRpbmdzIiwiQXJyYXkiLCJpc0FycmF5IiwiYiIsIl9iJHR5cGUiLCJjb2RlIiwidHlwZSIsImJ1aWxkaW5nRmFjdGlvbiIsImNyZWF0ZUJ1aWxkaW5nSWNvbiIsImJ1aWxkaW5nRGF0YSIsImxldmVsIiwib3duZXJJZCIsInByb2R1Y3Rpb24iLCJyZXNvdXJjZV90eXBlIiwiY3JlYXRlU2ltcGxlUG9wdXAiLCJpc093bkJ1aWxkaW5nIiwibG9hZFVwZ3JhZGVJbmZvQXN5bmMiLCJidWlsZGluZyIsIl9sb2FkVXBncmFkZUluZm9Bc3luYyIsInNldFBvcHVwQ29udGVudCIsInN0YXR1cyIsImxvYWRCdWlsZGluZ3MiLCJidWlsZGluZ0NvZGUiLCJ1bmRlZmluZWQiLCJhY3R1YWxGYWN0aW9uIiwiYnVpbGRpbmdTbHVnIiwicmVwbGFjZSIsImZhY3Rpb25TbHVnIiwiZW50cnkiLCJuZXdMZXZlbCIsImdldEJ1aWxkaW5nVHlwZUNvc3RzIiwiX3g1IiwiX2dldEJ1aWxkaW5nVHlwZUNvc3RzIiwiY2FuQnVpbGRCdWlsZGluZyIsIl94NiIsIl9jYW5CdWlsZEJ1aWxkaW5nIiwicmVzb3VyY2VzIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJyZXNvdXJjZSIsImFtb3VudCIsInF1YW50aXR5IiwicmVmcmVzaEJ1aWxkaW5nUG9wdXAiLCJfeDciLCJfcmVmcmVzaEJ1aWxkaW5nUG9wdXAiLCJfY2FsbGVlNSIsIl9jb250ZXh0NSIsImlzUG9wdXBPcGVuIiwiZHJhd1JvYWRTZWdtZW50IiwiZm9ybWF0RGF0ZSIsImFjdGl2ZURlbGl2ZXJpZXMiLCJkZWxpdmVyeUxheWVyIiwiYW5pbWF0aW9uRnJhbWUiLCJwZW5kaW5nRXZlbnRzIiwidHJ1Y2tJY29uIiwiZGl2SWNvbiIsImNsYXNzTmFtZSIsImluaXREZWxpdmVyeUV2ZW50cyIsImluaXREZWxpdmVyeUxheWVycyIsImxvYWREZWxpdmVyaWVzIiwiX2RhdGEkZmFjdGlvbiIsImRldGFpbCIsImhhbmRsZURlbGl2ZXJ5RXZlbnQiLCJkZWxpdmVyeUlkIiwicHJvZ3Jlc3MiLCJ3YXlwb2ludHMiLCJyZXNvdXJjZUNvZGUiLCJyZXNvdXJjZUxhYmVsIiwiZXN0aW1hdGVkVGltZSIsImR1cmF0aW9uIiwic2NoZWR1bGVkQXQiLCJzdGFydEFuaW1hdGlvbiIsInByb2Nlc3NEZWxpdmVyeUV2ZW50IiwiX2xvYWREZWxpdmVyaWVzIiwiZGVsaXZlcmllcyIsImRlbGl2ZXJ5RGF0YSIsInJlbW92ZURlbGl2ZXJ5IiwidXBzZXJ0RGVsaXZlcnkiLCJrZXkiLCJjb25zb2xlIiwid2FybiIsInBhcnNlIiwiX3VudXNlZCIsImxhdGxuZ3MiLCJ3cCIsIl9kYXRhJHByb2dyZXNzIiwiX2RhdGEkc2NoZWR1bGVkQXQiLCJfZGF0YSRwcm9ncmVzczIiLCJkZWxpdmVyeSIsImxhc3RTZXJ2ZXJQcm9ncmVzcyIsImxhc3RTZXJ2ZXJUaW1lIiwiRGF0ZSIsIm5vdyIsIl9kYXRhJHF1YW50aXR5IiwiX2RhdGEkcmVzb3VyY2VMYWJlbCIsIl9kYXRhJHByb2dyZXNzMyIsIl9kYXRhJHByb2dyZXNzNCIsIl9kYXRhJGVzdGltYXRlZFRpbWUiLCJfZGF0YSRzY2hlZHVsZWRBdDIiLCJfZGF0YSRwcm9ncmVzczUiLCJzY2hlZHVsZWRUaW1lIiwiYW5pbWF0ZSIsImludGVycG9sYXRlZFByb2dyZXNzIiwic3RhcnRUaW1lIiwiZ2V0VGltZSIsImVsYXBzZWQiLCJtaW4iLCJtYXgiLCJlbGFwc2VkU2luY2VTZXJ2ZXIiLCJwcm9ncmVzc1BlclNlY29uZCIsInBvcyIsImludGVycG9sYXRlQWxvbmdSb3V0ZSIsImVsIiwidGV4dENvbnRlbnQiLCJyb3VuZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInRvdGFsRGlzdCIsInNlZ21lbnRzIiwiaGF2ZXJzaW5lIiwiUiIsImRMYXQiLCJQSSIsImRMbmciLCJ4IiwicG93Iiwic2luIiwiY29zIiwiYXRhbjIiLCJzcXJ0IiwiaW5pdE1hcCIsImxvYWRXb3JsZCIsImluaXRHUFMiLCJpbml0Tm90aWZpY2F0aW9ucyIsImluaXRCdWlsZGluZ1RpbWVycyIsImluaXRJbnZlbnRvcnlFdmVudHMiLCJlbmFibGVMZWFmbGV0RGVidWciLCJjdXJyZW50VXNlciIsImRlYnVnIiwib3JpZ2luYWxNYXJrZXIiLCJvcmlnaW5hbENpcmNsZSIsIm9yaWdpbmFsUG9seWxpbmUiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJsb2ciLCJ0cmFjZSIsIl9sZW4yIiwiX2tleTIiLCJfbGVuMyIsIl9rZXkzIiwiaGFuZGxlSW52ZW50b3J5VXBkYXRlIiwiX2RhdGEkcmVzb3VyY2VzIiwidXBkYXRlTmF2YmFyUmVzb3VyY2VzIiwicG9wdXAiLCJwYXJzZUludCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIml0ZW0iLCJxdHlFbGVtZW50IiwiY2hlY2tVcGdyYWRlUmVxdWlyZW1lbnRzIiwicmVxdWlyZWRFbGVtZW50IiwicmVxdWlyZWQiLCJnZXRBdHRyaWJ1dGUiLCJ0b2dnbGUiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJfdHlwZW9mIiwiZGVwb3NpdE1hcmtlcnMiLCJidWlsZGluZ1R5cGVzQ2FjaGUiLCJyZXNvdXJjZVR5cGVzQ2FjaGUiLCJsb2FkQnVpbGRpbmdUeXBlcyIsIl9sb2FkQnVpbGRpbmdUeXBlcyIsImxvYWRSZXNvdXJjZVR5cGVzIiwiX2xvYWRSZXNvdXJjZVR5cGVzIiwiX3Q0IiwiREVGQVVMVF9DT0xPUlMiLCJnZXRSZXNvdXJjZUNvbG9yIiwiX3Jlc291cmNlVHlwZXNDYWNoZSR0IiwiX3Jlc291cmNlVHlwZXNDYWNoZSR0MiIsImZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZSIsIl9maW5kQnVpbGRpbmdUeXBlRm9yUmVzb3VyY2UiLCJyZXNvdXJjZVR5cGUiLCJidWlsZGluZ1R5cGVzIiwiYnVpbGRpbmdUeXBlIiwiZmluZCIsImJ0IiwiX2J0JHJlc291cmNlVHlwZSIsInByb2R1Y3Rpb25fcmF0ZSIsImRlcG9zaXRMYXllcnMiLCJpbml0RGVwb3NpdExheWVycyIsIl9pbml0RGVwb3NpdExheWVycyIsImNvbnRyb2wiLCJyZXNvdXJjZVR5cGVzIiwicnQiLCJhZGRPdmVybGF5IiwibGFiZWwiLCJsb2FkRGVwb3NpdHNGb3JDaHVuayIsIl9sb2FkRGVwb3NpdHNGb3JDaHVuayIsIl9jYWxsZWU2IiwiY2h1bmtJZCIsImRlcG9zaXRzIiwiX3Q1IiwiX2NvbnRleHQ2IiwicmVuZGVyRGVwb3NpdHNGcm9tRGF0YSIsImZvcm1hdENvc3RzIiwiam9pbiIsIl9yZWYyIiwiY2hlY2tDYW5DbGFpbSIsIl9jaGVja0NhbkNsYWltIiwiX2NhbGxlZTciLCJkZXBvc2l0IiwiX3JldCIsIl9jb250ZXh0OCIsImtleXMiLCJfcGxheWVyUmVzb3VyY2VzJHJlc28iLCJwbGF5ZXJSZXNvdXJjZXMiLCJfY29udGV4dDciLCJfcmVnZW5lcmF0b3JWYWx1ZXMiLCJsb2FkRGVwb3NpdEluZm9Bc3luYyIsIl94OCIsIl94OSIsIl9sb2FkRGVwb3NpdEluZm9Bc3luYyIsIl9jYWxsZWU4IiwiZGVwb3NpdHNJRCIsImRlcG9zaXREYXRhIiwiX3Q2IiwiX2NvbnRleHQ5IiwibGF5ZXIiLCJjaXJjbGVNYXJrZXIiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImZpbGxDb2xvciIsImNsYWltRGVwb3NpdCIsIl9yZWYzIiwicmVzcG9uc2VUZXh0IiwiZGVwb3NpdF9pZCIsImxvY2F0aW9uIiwicmVsb2FkIiwiX3gwIiwiX3gxIiwibWFya2VySWNvbiIsIm1hcmtlclNoYWRvdyIsIk1hcmtlciIsIm9wdGlvbnMiLCJzaGFkb3dVcmwiLCJtYXBJbnN0YW5jZSIsIm1vdmVUaW1lb3V0IiwiaXNDaHVua01vZGUiLCJzZXRWaWV3IiwidGlsZUxheWVyIiwiYXR0cmlidXRpb24iLCJmaXJlIiwibGF5ZXJzQ29udHJvbCIsImxheWVycyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlbnRlckNodW5rTW9kZSIsImV4aXRDaHVua01vZGUiLCJfbWFwSW5zdGFuY2UiLCJzdGF0dXNUZXh0IiwicGxheWVycyIsImhhc0NlbnRlcmVkIiwicGxheWVyIiwiaXNNZSIsImludmFsaWRhdGVDaHVuayIsImNodW5rcyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJiZXN0UG9pbnQiLCJiZXN0RGlzdGFuY2UiLCJJbmZpbml0eSIsInJvYWQiLCJwb2ludHMiLCJhUmF3IiwiYlJhdyIsImxhdExuZyIsInByb2plY3RlZCIsInByb2plY3RQb2ludE9uU2VnbWVudCIsImJlc3RTZWdtZW50IiwibWlkIiwiQSIsIkIiLCJQIiwiQUIiLCJBUCIsImFiMiIsImRpc3RhbmNlVG9TZWdtZW50IiwiZGVidWdSb2FkcyIsIl9uIiwiRiIsImdldENhY2hlS2V5IiwibG9hZGluZ1F1ZXVlIiwiTUFYX0NPTkNVUlJFTlQiLCJhY3RpdmVSZXF1ZXN0cyIsImdldENodW5rSWQiLCJfbG9hZFZpc2libGVSb2FkQ2h1bmtzIiwiY2h1bmtzVG9Mb2FkIiwiZmluYWxDaHVua3NUb0xvYWQiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX2NodW5rSWQzIiwiX2NhY2hlS2V5IiwiY2FjaGVkIiwiX2ZpbmFsQ2h1bmtzVG9Mb2FkIiwiX3lpZWxkJFByb21pc2UkYWxsIiwiX3lpZWxkJFByb21pc2UkYWxsMiIsInJvYWRzUmVzcG9uc2UiLCJidWlsZGluZ3NSZXNwb25zZSIsImRlcG9zaXRzUmVzcG9uc2UiLCJyb2Fkc0RhdGEiLCJidWlsZGluZ3NEYXRhIiwiZGVwb3NpdHNEYXRhIiwiYnVpbGRpbmdzQnlDaHVuayIsIl9pMiIsIl9maW5hbENodW5rc1RvTG9hZDIiLCJfcm9hZHNEYXRhJF9jaHVua0lkIiwiX2J1aWxkaW5nc0RhdGEkX2NodW5rIiwiX2NodW5rSWQiLCJjaHVua0RhdGEiLCJoYXNSb2FkcyIsImNhY2hlS2V5IiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsIl9jaHVua0lkMiIsImdldFZpc2libGVDaHVua3MiLCJmaWx0ZXIiLCJsb2FkZWRDaHVua3MiLCJnZXRJdGVtIiwidHMiLCJyZWZyZXNoQ2h1bmtDb2xvcnMiLCJhbGwiLCJjSWQiLCJzZXRJdGVtIiwiY2h1bmsiLCJyZWZyZXNoQ2h1bmsiLCJfcmVmcmVzaENodW5rIiwiZmV0Y2hTaW5nbGVDaHVuayIsIl9mZXRjaFNpbmdsZUNodW5rIiwiX3JvYWRzRGF0YSRjaHVua0lkIiwiX2J1aWxkaW5nc0RhdGEkY2h1bmtJIiwiX3lpZWxkJFByb21pc2UkYWxsMyIsIl95aWVsZCRQcm9taXNlJGFsbDQiLCJyb2Fkc1JlcyIsImJ1aWxkaW5nc1JlcyIsImRlcG9zaXRzUmVzIiwiY2h1bmtEZXBvc2l0cyIsIm1pblgiLCJtYXhYIiwibWluWSIsIm1heFkiLCJyb2Fkc1JlYWR5IiwiZHJhd25Sb2FkcyIsInJvYWRMYXllcnMiLCJidWlsZGluZ0xheWVycyIsImNhY2hlZFJvYWRzIiwiY2FjaGVEaXJ0eSIsIm1hcmtSb2FkQ2FjaGVEaXJ0eSIsInZhbHVlcyIsImZsYXRNYXAiLCJldmVudHMiLCJldmVudCIsIm5vdGlmIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiYmFzZUNpcmNsZXMiLCJyb2FkU2VnbWVudHMiLCJGQUNUSU9OX0NPTE9SUyIsImdldEZhY3Rpb25Db2xvciIsImJhc2VJZCIsInBsYXllckZhY3Rpb24iLCJjbGVhckFsbEJhc2VDaXJjbGVzIiwiY2xlYXIiLCJyb2FkSWQiLCJjb29yZHMiLCJyZW1vdmVSb2FkU2VnbWVudCIsImNsZWFyQWxsUm9hZFNlZ21lbnRzIiwidXBkYXRlQmFzZUNpcmNsZXMiLCJiYXNlcyIsInVwZGF0ZVJvYWRTZWdtZW50cyIsImlzUGxheWVyUm9hZCIsInNldFJvYWRTZWdtZW50Q29sb3IiLCJmb3JtYXQiLCJ0b0ZpeGVkIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic25hcFRvQ2h1bmsiLCJDSFVOS19SQURJVVMiLCJvbmNlIiwiX2UkbGF0bG5nIiwic25hcHBlZCIsImRlZmF1bHRMYXQiLCJkZWZhdWx0TG5nIiwiZ2VvbG9jYXRpb24iLCJncHNGb3VuZCIsIndhdGNoUG9zaXRpb24iLCJwb3NpdGlvbiIsInRpbWVvdXQiLCJ1cGRhdGVUaW1lcnMiLCJ0aW1lckVsIiwic2NoZWR1bGVkIiwiZGlmZlNlYyIsIm1pbnMiLCJzZWNzIiwiaW5uZXJIVE1MIiwiYWJzIiwic2V0SW50ZXJ2YWwiLCJpc29TdHJpbmciLCJ0b0xvY2FsZVN0cmluZyIsInRpbWVab25lIiwiaG91ciIsIm1pbnV0ZSIsIkljb24iLCJEZWZhdWx0IiwiX2dldEljb25VcmwiLCJtZXJnZU9wdGlvbnMiLCJpY29uUmV0aW5hVXJsIiwicmVxdWlyZSIsIkNBQ0hFX1ZFUlNJT04iLCJUWVBFX01BUCIsIkRFQlVHIiwiZW5hYmxlZCIsIl93aW5kb3ckQVBQX0RFQlVHIiwiQVBQX0RFQlVHIiwibWVyY3VyZSIsImludmVudG9yeSIsIm5ldHdvcmsiLCJjYWNoZSIsImNhbkxvZyIsIl9jb25zb2xlIiwiX2NvbnNvbGUyIiwiX2NvbnNvbGUzIl0sInNvdXJjZVJvb3QiOiIifQ==