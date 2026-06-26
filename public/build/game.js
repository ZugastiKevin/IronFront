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
// CHUNK ID
// ==========================
function getChunkId(lat, lng) {
  var x = Math.floor(lat / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE);
  var y = Math.floor(lng / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE);
  console.log("getChunkId", lat, lng, x, y);
  return "".concat(x, "_").concat(y);
}

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
          console.log("refreshChunk", lat, lng, chunkId);
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
function fetchSingleChunk(_x3) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlEQUFRLENBQUcxZSxJQUFJLENBQUMsS0FBSUEsSUFBSSxRQUFBeFAsTUFBQSxDQUN6QnFZLElBQUksQ0FDWCxDQUFDO0FBQ0wsQzs7Ozs7Ozs7Ozs7Ozs7QUM1RE8sSUFBTTZWLFFBQVEsR0FBRztFQUNwQkssT0FBTyxFQUFFLFNBQVM7RUFDbEJDLFNBQVMsRUFBRSxXQUFXO0VBQ3RCelosUUFBUSxFQUFFLFVBQVU7RUFDcEI3RixTQUFTLEVBQUUsV0FBVztFQUN0QnlWLE1BQU0sRUFBRSxRQUFRO0VBQ2hCOEosT0FBTyxFQUFFLFNBQVM7RUFDbEJDLEtBQUssRUFBRTtBQUNYLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvTGF5ZXJzL2dyaWRMYXllci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2J1aWxkaW5ncy9iYXNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvYnVpbGRpbmdzL2J1aWxkTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2J1aWxkaW5ncy9idWlsZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2RlbGl2ZXJ5L2RlbGl2ZXJ5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvZ2FtZS1tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvaW52ZW50b3J5L2ludmVudG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9kZXBvc2l0cy9kZXBvc2l0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9mb2dPZldhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvcm9hZHMvY2h1bmtDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9yb2Fkcy9pbnZhbGlkYXRlQ2h1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvcm9hZHMvcm9hZFV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwL3JvYWRzL3JvYWRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwL3JvYWRzL3JvYWRzU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9ub3RpZmljYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvdWkvZHJhd09uTWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvdXRpbHMvYWRtaW5fY2xpcGJvYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvdXRpbHMvY2h1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91dGlscy9ncHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91dGlscy9zbmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvdXRpbHMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvTGVhZmxldFdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvdXRpbHMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvdXRpbHMvdHlwZU1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5pbXBvcnQgeyBDSFVOS19TSVpFIH0gZnJvbSAnLi4vdXRpbHMvY2h1bmsuanMnO1xyXG5pbXBvcnQgeyBnZXRNYXAsIGlzR3JpZExheWVyQWN0aXZlIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ3JpZExheWVyID0gTC5sYXllckdyb3VwKCk7XHJcblxyXG5jb25zdCB2aXNpYmxlQ2h1bmtzID0gbmV3IE1hcCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRHcmlkTGF5ZXIoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGlmICghaXNHcmlkTGF5ZXJBY3RpdmUoKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHpvb20gPSBtYXAuZ2V0Wm9vbSgpO1xyXG4gICAgaWYgKHpvb20gPCAxNCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGJvdW5kcyA9IG1hcC5nZXRCb3VuZHMoKTtcclxuXHJcbiAgICBjb25zdCBtaW5MYXQgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRTb3V0aCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtYXhMYXQgPSBNYXRoLmNlaWwoYm91bmRzLmdldE5vcnRoKCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1pbkxuZyA9IE1hdGguZmxvb3IoYm91bmRzLmdldFdlc3QoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWF4TG5nID0gTWF0aC5jZWlsKGJvdW5kcy5nZXRFYXN0KCkgLyBDSFVOS19TSVpFKTtcclxuXHJcbiAgICBjb25zdCBuZXdWaXNpYmxlID0gbmV3IFNldCgpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBtaW5MYXQ7IGkgPCBtYXhMYXQ7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSBtaW5Mbmc7IGogPCBtYXhMbmc7IGorKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaWQgPSBgJHtpfV8ke2p9YDtcclxuICAgICAgICAgICAgbmV3VmlzaWJsZS5hZGQoaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZpc2libGVDaHVua3MuaGFzKGlkKSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsYXQgPSBpICogQ0hVTktfU0laRTtcclxuICAgICAgICAgICAgY29uc3QgbG5nID0gaiAqIENIVU5LX1NJWkU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZWN0ID0gTC5yZWN0YW5nbGUoW1xyXG4gICAgICAgICAgICAgICAgW2xhdCwgbG5nXSxcclxuICAgICAgICAgICAgICAgIFtsYXQgKyBDSFVOS19TSVpFLCBsbmcgKyBDSFVOS19TSVpFXVxyXG4gICAgICAgICAgICBdLCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJvcmFuZ2VcIixcclxuICAgICAgICAgICAgICAgIHdlaWdodDogMSxcclxuICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjE1XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVjdC5vbignbW91c2VvdmVyJywgKCkgPT4gcmVjdC5zZXRTdHlsZSh7IGZpbGxPcGFjaXR5OiAwLjMgfSkpO1xyXG4gICAgICAgICAgICByZWN0Lm9uKCdtb3VzZW91dCcsICgpID0+IHJlY3Quc2V0U3R5bGUoeyBmaWxsT3BhY2l0eTogMC4xNSB9KSk7XHJcblxyXG4gICAgICAgICAgICBncmlkTGF5ZXIuYWRkTGF5ZXIocmVjdCk7XHJcblxyXG4gICAgICAgICAgICB2aXNpYmxlQ2h1bmtzLnNldChpZCwgcmVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIPCfp7kgcmVtb3ZlIGNldXggaG9ycyDDqWNyYW5cclxuICAgIGZvciAoY29uc3QgW2lkLCByZWN0XSBvZiB2aXNpYmxlQ2h1bmtzLmVudHJpZXMoKSkge1xyXG4gICAgICAgIGlmICghbmV3VmlzaWJsZS5oYXMoaWQpKSB7XHJcbiAgICAgICAgICAgIGdyaWRMYXllci5yZW1vdmVMYXllcihyZWN0KTtcclxuICAgICAgICAgICAgdmlzaWJsZUNodW5rcy5kZWxldGUoaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWJ1Z0xvZyhcImNodW5rc1wiLCBcIkNodW5rcyB2aXNpYmxlczpcIiwgdmlzaWJsZUNodW5rcy5zaXplKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ0hVTksgQ09MT1JcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENodW5rQ29sb3IoaWQsIGNvbG9yKSB7XHJcbiAgICBpZiAoIWlzR3JpZExheWVyQWN0aXZlKCkpIHJldHVybjtcclxuICAgIFxyXG4gICAgY29uc3QgcmVjdCA9IHZpc2libGVDaHVua3MuZ2V0KGlkKTtcclxuICAgIGlmICghcmVjdCkgcmV0dXJuO1xyXG5cclxuICAgIHJlY3Quc2V0U3R5bGUoe1xyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGZpbGxPcGFjaXR5OiAwLjJcclxuICAgIH0pO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmVxdWVzdChsYXQsIGxuZywgdHlwZUlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJy9hcGkvYnVpbGQnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBsYXQ6IGxhdCwgbG5nOiBsbmcsIHR5cGVfaWQ6IHR5cGVJZCB9KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWlsZGluZ3MoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJy9hcGkvbWFwLWRhdGEnKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1aWxkaW5nQ29zdHMoYnVpbGRpbmdUeXBlSWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgL2FwaS9idWlsZGluZy10eXBlcy8ke2J1aWxkaW5nVHlwZUlkfS9jb3N0c2ApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBncmFkZUJ1aWxkaW5nKGJ1aWxkaW5nSWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgL2FwaS9idWlsZGluZy8ke2J1aWxkaW5nSWR9L3VwZ3JhZGVgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXBncmFkZUluZm8oYnVpbGRpbmdJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAvYXBpL2J1aWxkaW5nLyR7YnVpbGRpbmdJZH0vdXBncmFkZS1pbmZvYCk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGZseVRvLCBnZXRNYXAgfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcclxuaW1wb3J0IHsgcm9hZHNTdGF0ZSwgZ2V0QWxsTG9hZGVkUm9hZHMgfSBmcm9tICcuLi9tYXAvcm9hZHMvcm9hZHNTdGF0ZS5qcyc7XHJcbmltcG9ydCB7IGdldEJ1aWxkaW5nSW1hZ2UgfSBmcm9tICcuL2J1aWxkaW5nLmpzJztcclxuaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4uL3V0aWxzL2NodW5rLmpzJztcclxuaW1wb3J0IHsgc2FmZUxvYWRDaHVuaywgbG9hZFZpc2libGVSb2FkQ2h1bmtzIH0gZnJvbSAnLi4vbWFwL3JvYWRzL3JvYWRzLmpzJztcclxuaW1wb3J0IHsgZmluZENsb3Nlc3RQb2ludE9uUm9hZCwgZmluZENsb3Nlc3RTZWdtZW50IH0gZnJvbSAnLi4vbWFwL3JvYWRzL3JvYWRVdGlscy5qcyc7XHJcbmltcG9ydCB7IHNob3dOb3RpZmljYXRpb24gfSBmcm9tICcuLi9ub3RpZmljYXRpb25zLmpzJztcclxuaW1wb3J0IHsgZ2V0QWRtaW5Db29yZHMgfSBmcm9tICcuLi91dGlscy9hZG1pbl9jbGlwYm9hcmQuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5pbXBvcnQgeyBkcmF3QmFzZUNpcmNsZSwgcmVtb3ZlQmFzZUNpcmNsZSB9IGZyb20gJy4uL3VpL2RyYXdPbk1hcC5qcyc7XHJcbmltcG9ydCB7IHJlZnJlc2hTaWRlYmFyIH0gZnJvbSAnLi9idWlsZE1vZGUuanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g8J+noCBTVEFURVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5sZXQgYmFzZU1hcmtlciA9IG51bGw7XHJcbmxldCBiYXNlQ2lyY2xlID0gbnVsbDtcclxubGV0IGJhc2VQb3NpdGlvbiA9IG51bGw7XHJcbmxldCBiYXNlQ3JlYXRlZCA9IGZhbHNlO1xyXG5sZXQgcGxhY2luZ0Jhc2UgPSBmYWxzZTtcclxuXHJcbmxldCBwcmV2aWV3TWFya2VyID0gbnVsbDtcclxubGV0IHByZXZpZXdDaXJjbGUgPSBudWxsO1xyXG5sZXQgcHJldmlld1NuYXBMYXRMbmcgPSBudWxsO1xyXG5sZXQgcHJldmlld0xpbmUgPSBudWxsO1xyXG5sZXQgaGlnaGxpZ2h0ZWRTZWdtZW50ID0gbnVsbDtcclxuXHJcbmxldCBjdXJyZW50UGxheWVyRmFjdGlvbiA9ICdkZWZhdWx0JztcclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTRVQgUExBWUVSIEZBQ1RJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKGZhY3Rpb24pIHtcclxuICAgIGN1cnJlbnRQbGF5ZXJGYWN0aW9uID0gKGZhY3Rpb24gfHwgJ2RlZmF1bHQnKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBHRVQgUExBWUVSIEZBQ1RJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXJGYWN0aW9uO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJTklUIFVJXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0QmFzZVVJKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGNvbnN0IGJhc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFzZUJ0bicpO1xyXG5cclxuICAgIGJhc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vZGUgPSBiYXNlQnRuLmRhdGFzZXQubW9kZTtcclxuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBDUkVBVEUgQkFTRSBNT0RFIFxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgaWYgKG1vZGUgPT09ICdjcmVhdGUnKSB7XHJcbiAgICAgICAgICAgIGlmIChiYXNlQ3JlYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJCYXNlIGTDqWrDoCBjcsOpw6llICFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBsYWNpbmdCYXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICdjcm9zc2hhaXInO1xyXG5cclxuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbihcIkNsaXF1ZSBzdXIgbGEgY2FydGUgcG91ciBwbGFjZXIgdGEgYmFzZVwiLCAnaW5mbycpO1xyXG4gICAgICAgICAgICBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gUkVUVVJOIEJBU0UgTU9ERVxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgaWYgKG1vZGUgPT09ICdyZXR1cm4nKSB7XHJcbiAgICAgICAgICAgIGlmICghYmFzZVBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkF1Y3VuZSBiYXNlICFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZseVRvKGJhc2VQb3NpdGlvblswXSwgYmFzZVBvc2l0aW9uWzFdLCAxNik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBDTElDSyBNQVBcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBtYXAub24oJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIXBsYWNpbmdCYXNlIHx8IGJhc2VDcmVhdGVkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCFwcmV2aWV3U25hcExhdExuZykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB7IGxhdCwgbG5nIH0gPSBwcmV2aWV3U25hcExhdExuZztcclxuXHJcbiAgICAgICAgaWYgKCFpc0Jhc2VQbGFjZW1lbnRWYWxpZChsYXQsIGxuZykpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCLinYwgVHJvcCBwcm9jaGUgZCd1bmUgYmFzZSAhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhbnVwUHJldmlldyhtYXApO1xyXG4gICAgICAgIGNyZWF0ZUJhc2UobGF0LCBsbmcpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gTU9VU0UgTU9WRSAocHJldmlldyBzbmFwIHJvYWQpXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbWFwLm9uKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIXBsYWNpbmdCYXNlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJvYWRzID0gZ2V0QWxsTG9hZGVkUm9hZHMoKTtcclxuXHJcbiAgICAgICAgaWYgKCFyb2Fkcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZmluZENsb3Nlc3RQb2ludE9uUm9hZChlLmxhdGxuZywgcm9hZHMpO1xyXG4gICAgICAgIGlmICghcmVzdWx0LnBvaW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIHByZXZpZXdTbmFwTGF0TG5nID0gcmVzdWx0LnBvaW50O1xyXG5cclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gaXNCYXNlUGxhY2VtZW50VmFsaWQocmVzdWx0LnBvaW50LmxhdCwgcmVzdWx0LnBvaW50LmxuZyk7XHJcblxyXG4gICAgICAgIGNsZWFudXBQcmV2aWV3KG1hcCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gaXNWYWxpZCA/ICdncmVlbicgOiAncmVkJztcclxuXHJcbiAgICAgICAgcHJldmlld0NpcmNsZSA9IEwuY2lyY2xlKHJlc3VsdC5wb2ludCwge1xyXG4gICAgICAgICAgICByYWRpdXM6IDYwMCxcclxuICAgICAgICAgICAgY29sb3IsXHJcbiAgICAgICAgICAgIHdlaWdodDogMixcclxuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDBcclxuICAgICAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBwcmV2aWV3TWFya2VyID0gTC5tYXJrZXIocmVzdWx0LnBvaW50KS5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBwcmV2aWV3TGluZSA9IEwucG9seWxpbmUoW2UubGF0bG5nLCByZXN1bHQucG9pbnRdLCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnY3lhbicsXHJcbiAgICAgICAgICAgIHdlaWdodDogMixcclxuICAgICAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgICAgICBkYXNoQXJyYXk6ICc1LCA1J1xyXG4gICAgICAgIH0pLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlZ21lbnQgPSBmaW5kQ2xvc2VzdFNlZ21lbnQoZS5sYXRsbmcsIHJvYWRzKTtcclxuXHJcbiAgICAgICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWRTZWdtZW50ID0gTC5wb2x5bGluZShzZWdtZW50LCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3llbGxvdycsXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IDYsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjhcclxuICAgICAgICAgICAgfSkuYWRkVG8obWFwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gVVBEQVRFIFZJU1VBTCBCQVNFIEFORCBPVEhFUiBCQVNFXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbWFwLm9uKCd6b29tZW5kJywgKCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZUJhc2VEaXNwbGF5KCk7XHJcbiAgICAgICAgdXBkYXRlT3RoZXJCYXNlcygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBBVEhGSU5ESU5HIERFQlVHIEZPUiBBRE1JTiAtIENMSUNLIFRPIEdFVCBDT09SRElOQVRFU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlQWRtaW5Db29yZGluYXRlUGlja2VyKCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKFwiTW9kZSBBZG1pbiBhY3RpdsOpIDogY2xpcXVleiBzdXIgbGEgY2FydGVcIiwgJ2luZm8nKTtcclxuICAgICAgICBcclxuICAgIG1hcC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGdldEFkbWluQ29vcmRzKGUubGF0bG5nLmxhdCwgZS5sYXRsbmcubG5nKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG53aW5kb3cuZW5hYmxlQWRtaW5Db29yZGluYXRlUGlja2VyID0gZW5hYmxlQWRtaW5Db29yZGluYXRlUGlja2VyO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g8J+nuSBDTEVBTiBQUkVWSUVXXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGNsZWFudXBQcmV2aWV3KCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIHByZXZpZXdNYXJrZXIgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdNYXJrZXIpO1xyXG4gICAgcHJldmlld0NpcmNsZSAmJiBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0NpcmNsZSk7XHJcbiAgICBwcmV2aWV3TGluZSAmJiBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0xpbmUpO1xyXG4gICAgaGlnaGxpZ2h0ZWRTZWdtZW50ICYmIG1hcC5yZW1vdmVMYXllcihoaWdobGlnaHRlZFNlZ21lbnQpO1xyXG5cclxuICAgIHByZXZpZXdNYXJrZXIgPSBudWxsO1xyXG4gICAgcHJldmlld0NpcmNsZSA9IG51bGw7XHJcbiAgICBwcmV2aWV3TGluZSA9IG51bGw7XHJcbiAgICBoaWdobGlnaHRlZFNlZ21lbnQgPSBudWxsO1xyXG5cclxuICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnJztcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBpc0Jhc2VQbGFjZW1lbnRWYWxpZChsYXQsIGxuZykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIHJldHVybiBvdGhlckJhc2VzLmV2ZXJ5KGJhc2UgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBkaXN0ID0gbWFwLmRpc3RhbmNlKFxyXG4gICAgICAgICAgICBbbGF0LCBsbmddLFxyXG4gICAgICAgICAgICBbYmFzZS5sYXQsIGJhc2UubG5nXVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBkaXN0ID49IDExMDA7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ1JFQVRFIEJBU0VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gY3JlYXRlQmFzZShsYXQsIGxuZykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIHBsYWNpbmdCYXNlID0gZmFsc2U7XHJcbiAgICBiYXNlUG9zaXRpb24gPSBbbGF0LCBsbmddO1xyXG5cclxuICAgIGZseVRvKGxhdCwgbG5nKTtcclxuXHJcbiAgICBiYXNlQ2lyY2xlID0gZHJhd0Jhc2VDaXJjbGUoJ3BsYXllcl9iYXNlJywgbGF0LCBsbmcsIGN1cnJlbnRQbGF5ZXJGYWN0aW9uLCB0cnVlKTtcclxuXHJcbiAgICBjb25zdCBiYXNlVHlwZUlkID0gMTtcclxuICAgIGZldGNoKCcvYXBpL2J1aWxkJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbGF0LFxyXG4gICAgICAgICAgICBsbmcsXHJcbiAgICAgICAgICAgIHR5cGVfaWQ6IGJhc2VUeXBlSWRcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXMub2spIHJldHVybiByZXMuanNvbigpLnRoZW4oZXJyID0+IHsgdGhyb3cgbmV3IEVycm9yKGVyci5lcnJvciB8fCBcIkFQSSBlcnJvclwiKSB9KTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hTaWRlYmFyKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUsOpLWluaXRpYWxpc2VyIGwnVUkgZGUgYmFzZSBwb3VyIHLDqS1hdHRhY2hlciBsZXMgbGlzdGVuZXJzIGF1eCBub3V2ZWF1eCBib3V0b25zXHJcbiAgICAgICAgICAgICAgICAgICAgaW1wb3J0KCcuL2Jhc2UuanMnKS50aGVuKCh7IGluaXRCYXNlVUkgfSkgPT4gaW5pdEJhc2VVSSgpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4pXHJcbiAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdiYXNlcycsIFwiRXJyZXVyIGNyw6lhdGlvbiBiYXNlXCIsIGVycik7XHJcbiAgICAgICAgcmVtb3ZlQmFzZSgpO1xyXG4gICAgICAgIGFsZXJ0KFwiRXJyZXVyIGNyw6lhdGlvbiBiYXNlIDogXCIgKyBlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJyc7XHJcbiAgICB1cGRhdGVCYXNlRGlzcGxheSgpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSRU1PVkUgQkFTRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiByZW1vdmVCYXNlKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGJhc2VNYXJrZXIgJiYgbWFwLnJlbW92ZUxheWVyKGJhc2VNYXJrZXIpO1xyXG4gICAgYmFzZUNpcmNsZSAmJiBtYXAucmVtb3ZlTGF5ZXIoYmFzZUNpcmNsZSk7XHJcblxyXG4gICAgYmFzZU1hcmtlciA9IG51bGw7XHJcbiAgICBiYXNlQ2lyY2xlID0gbnVsbDtcclxuICAgIGJhc2VQb3NpdGlvbiA9IG51bGw7XHJcbiAgICBiYXNlQ3JlYXRlZCA9IGZhbHNlO1xyXG4gICAgcGxhY2luZ0Jhc2UgPSBmYWxzZTtcclxuXHJcbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJyc7XHJcbn1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTE9BRCBPVEhFUiBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmxldCBvdGhlckJhc2VzID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZE90aGVyQmFzZShsYXQsIGxuZywgcHNldWRvLCBmYWN0aW9uKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobGF0KSB8fCAhTnVtYmVyLmlzRmluaXRlKGxuZykpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBpc1BsYXllckJhc2UgPSBmYWN0aW9uID09PSBjdXJyZW50UGxheWVyRmFjdGlvbjtcclxuXHJcbiAgICAvLyBVdGlsaXNlciBkcmF3QmFzZUNpcmNsZSBkZSBkcmF3T25NYXAuanNcclxuICAgIGNvbnN0IGNpcmNsZSA9IGRyYXdCYXNlQ2lyY2xlKGBvdGhlcl8ke2xhdH1fJHtsbmd9YCwgbGF0LCBsbmcsIGZhY3Rpb24sIGlzUGxheWVyQmFzZSk7XHJcblxyXG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUJhc2VJY29uKG1hcC5nZXRab29tKCksIGZhY3Rpb24pO1xyXG5cclxuICAgIGxldCBtYXJrZXIgPSBudWxsO1xyXG5cclxuICAgIGlmIChpY29uKSB7XHJcbiAgICAgICAgbWFya2VyID0gTC5tYXJrZXIoW2xhdCwgbG5nXSwgeyBpY29uIH0pXHJcbiAgICAgICAgICAgIC5hZGRUbyhtYXApXHJcbiAgICAgICAgICAgIC5iaW5kUG9wdXAoYPCfj5XvuI8gQmFzZSBkZSAke3BzZXVkb31gKTtcclxuICAgIH1cclxuXHJcbiAgICBvdGhlckJhc2VzLnB1c2goeyBsYXQsIGxuZywgcHNldWRvLCBtYXJrZXIsIGNpcmNsZSwgZmFjdGlvbiB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVVBEQVRFIE9USEVSIEJBU0VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gdXBkYXRlT3RoZXJCYXNlcygpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGNvbnN0IHpvb20gPSBtYXAuZ2V0Wm9vbSgpO1xyXG5cclxuICAgIG90aGVyQmFzZXMuZm9yRWFjaChiYXNlID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGNyZWF0ZUJhc2VJY29uKHpvb20sIGJhc2UuZmFjdGlvbik7XHJcblxyXG4gICAgICAgIGlmICghaWNvbikge1xyXG4gICAgICAgICAgICBpZiAoYmFzZS5tYXJrZXIpIG1hcC5yZW1vdmVMYXllcihiYXNlLm1hcmtlcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghYmFzZS5tYXJrZXIpIHtcclxuICAgICAgICAgICAgYmFzZS5tYXJrZXIgPSBMLm1hcmtlcihbYmFzZS5sYXQsIGJhc2UubG5nXSwgeyBpY29uIH0pXHJcbiAgICAgICAgICAgICAgICAuYWRkVG8obWFwKVxyXG4gICAgICAgICAgICAgICAgLmJpbmRQb3B1cChg8J+Ple+4jyBCYXNlIGRlICR7YmFzZS5wc2V1ZG99YCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbWFwLmhhc0xheWVyKGJhc2UubWFya2VyKSkgYmFzZS5tYXJrZXIuYWRkVG8obWFwKTtcclxuXHJcbiAgICAgICAgYmFzZS5tYXJrZXIuc2V0SWNvbihpY29uKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBMT0FEIEZST00gU0VSVkVSXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQmFzZUZyb21TZXJ2ZXIobGF0LCBsbmcpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShsYXQpIHx8ICFOdW1iZXIuaXNGaW5pdGUobG5nKSkgcmV0dXJuO1xyXG5cclxuICAgIGJhc2VQb3NpdGlvbiA9IFtsYXQsIGxuZ107XHJcbiAgICBiYXNlQ3JlYXRlZCA9IHRydWU7XHJcblxyXG4gICAgLy8gVXRpbGlzZXIgZHJhd0Jhc2VDaXJjbGUgZGUgZHJhd09uTWFwLmpzIChub3RyZSBiYXNlID0gaXNQbGF5ZXJCYXNlID0gdHJ1ZSlcclxuICAgIGJhc2VDaXJjbGUgPSBkcmF3QmFzZUNpcmNsZSgncGxheWVyX2Jhc2UnLCBsYXQsIGxuZywgY3VycmVudFBsYXllckZhY3Rpb24sIHRydWUpO1xyXG5cclxuICAgIHVwZGF0ZUJhc2VEaXNwbGF5KCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVQREFURSBCQVNFIERJU1BMQVlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gdXBkYXRlQmFzZURpc3BsYXkoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFiYXNlUG9zaXRpb24pIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBpY29uID0gY3JlYXRlQmFzZUljb24obWFwLmdldFpvb20oKSwgY3VycmVudFBsYXllckZhY3Rpb24pO1xyXG5cclxuICAgIGlmICghaWNvbikge1xyXG4gICAgICAgIGlmIChiYXNlTWFya2VyKSBtYXAucmVtb3ZlTGF5ZXIoYmFzZU1hcmtlcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYmFzZU1hcmtlcikge1xyXG4gICAgICAgIGJhc2VNYXJrZXIgPSBMLm1hcmtlcihiYXNlUG9zaXRpb24sIHsgaWNvbiB9KS5hZGRUbyhtYXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIW1hcC5oYXNMYXllcihiYXNlTWFya2VyKSkgYmFzZU1hcmtlci5hZGRUbyhtYXApO1xyXG4gICAgICAgIGJhc2VNYXJrZXIuc2V0SWNvbihpY29uKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ1JFQVRFIEJBU0UgSUNPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBjcmVhdGVCYXNlSWNvbih6b29tLCBmYWN0aW9uKSB7XHJcblxyXG4gICAgaWYgKHpvb20gPCAxMykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3Qgc2l6ZSA9IGZhY3Rpb24gIT09ICdub21hZGVzJyA/ICh6b29tID4gMTUgPyAxMDAgOiA3MCkgOiAoem9vbSA+IDE1ID8gNzUgOiA2MCk7XHJcblxyXG4gICAgLy8gVG91am91cnMgdXRpbGlzZXIgbCdpY8O0bmUgZGUgbGEgZmFjdGlvbiAobGUgZmFsbGJhY2sgQXBhY2hlIGfDqHJlIGxlcyA0MDQpXHJcbiAgICAvLyBTaSBsJ2ljw7RuZSBuJ2V4aXN0ZSBwYXMsIEFwYWNoZSByZWRpcmlnZSB2ZXJzIGRlZmF1bHQgYXV0b21hdGlxdWVtZW50XHJcbiAgICBjb25zdCBpY29uVXJsID0gZ2V0QnVpbGRpbmdJbWFnZShmYWN0aW9uLCAnYmFzZScpO1xyXG5cclxuICAgIHJldHVybiBMLmljb24oe1xyXG4gICAgICAgIGljb25Vcmw6IGljb25VcmwsXHJcbiAgICAgICAgaWNvblNpemU6IFtzaXplLCBzaXplXSxcclxuICAgICAgICBpY29uQW5jaG9yOiBbc2l6ZSAvIDIsIHNpemUgLyAyXSxcclxuICAgICAgICBwb3B1cEFuY2hvcjogWzAsIC1zaXplIC8gMl1cclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcclxuaW1wb3J0IHsgZ2V0QnVpbGRpbmdDb3N0cywgYnVpbGRSZXF1ZXN0IH0gZnJvbSAnLi4vYXBpLmpzJztcclxuaW1wb3J0IHsgZ2V0QnVpbGRpbmdJbWFnZSB9IGZyb20gJy4vYnVpbGRpbmcuanMnO1xyXG5pbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vbm90aWZpY2F0aW9ucy5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBCVUlMRCBNT0RFIFNUQVRFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmxldCBzZWxlY3RlZEJ1aWxkaW5nVHlwZSA9IG51bGw7XHJcbmxldCBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpc2UgbGUgbW9kZSBjb25zdHJ1Y3Rpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0QnVpbGRNb2RlKCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgLy8gVXRpbGlzZXIgbGEgZMOpbMOpZ2F0aW9uIGQnw6l2w6luZW1lbnRzIHBvdXIgbGVzIGJvdXRvbnMgZHluYW1pcXVlc1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5idWlsZC1pdGVtJyk7XHJcbiAgICAgICAgaWYgKCFidG4pIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdHlwZUlkID0gYnRuLmRhdGFzZXQudHlwZUlkO1xyXG4gICAgICAgIGlmICghdHlwZUlkKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIFPDqWxlY3Rpb25uZXIgbGUgdHlwZSBkZSBiw6J0aW1lbnRcclxuICAgICAgICBhd2FpdCBzZWxlY3RCdWlsZGluZ1R5cGUodHlwZUlkLCBidG4pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2xpY2sgc3VyIGxhIGNhcnRlIHBvdXIgY29uc3RydWlyZVxyXG4gICAgbWFwLm9uKCdjbGljaycsIG9uTWFwQ2xpY2spO1xyXG5cclxuICAgIC8vIE1vdXNlIG1vdmUgcG91ciBwcsOpdmlzdWFsaXNlclxyXG4gICAgbWFwLm9uKCdtb3VzZW1vdmUnLCBvbk1hcE1vdXNlTW92ZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTw6lsZWN0aW9ubmUgdW4gdHlwZSBkZSBiw6J0aW1lbnQgw6AgY29uc3RydWlyZVxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gc2VsZWN0QnVpbGRpbmdUeXBlKHR5cGVJZCwgYnV0dG9uKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICAvLyBEw6lzw6lsZWN0aW9ubmVyIHByw6ljw6lkZW1tZW50XHJcbiAgICBjbGVhckJ1aWxkaW5nU2VsZWN0aW9uKCk7XHJcblxyXG4gICAgLy8gR8OpcmVyIGxlIGNhcyBzcMOpY2lhbCBkZSBsYSBiYXNlIChib3V0b24gI2Jhc2VCdG4pXHJcbiAgICBpZiAoYnV0dG9uLmlkID09PSAnYmFzZUJ0bicgJiYgdHlwZUlkID09IDEpIHtcclxuICAgICAgICAvLyBMYSBiYXNlIGVzdCBnw6lyw6llIHBhciBiYXNlLmpzLCBvbiBuZSBmYWl0IHJpZW4gaWNpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1ldHRyZSBlbiDDqXZpZGVuY2UgbGUgYm91dG9uIHPDqWxlY3Rpb25uw6lcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG5cclxuICAgIC8vIFLDqWN1cMOpcmVyIGxlcyBjb8O7dHNcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEJ1aWxkaW5nQ29zdHModHlwZUlkKTtcclxuICAgICAgICBzZWxlY3RlZEJ1aWxkaW5nVHlwZSA9IHtcclxuICAgICAgICAgICAgaWQ6IHR5cGVJZCxcclxuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICBjb3N0czogZGF0YS5jb3N0cyxcclxuICAgICAgICAgICAgYnV0dG9uOiBidXR0b25cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKGBTw6lsZWN0aW9ubsOpOiAke2RhdGEubmFtZX0uIENsaXF1ZSBzdXIgbGEgY2FydGUgcG91ciBjb25zdHJ1aXJlLmAsICdpbmZvJyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZXMgY2/Du3RzXCIsIGUpO1xyXG4gICAgICAgIHNob3dOb3RpZmljYXRpb24oXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZXMgY2/Du3RzXCIsICdlcnJvcicpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogTmV0dG9pZSBsYSBzw6lsZWN0aW9uIGFjdHVlbGxlXHJcbiAqL1xyXG5mdW5jdGlvbiBjbGVhckJ1aWxkaW5nU2VsZWN0aW9uKCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKHByZXZpZXdCdWlsZGluZ01hcmtlcikge1xyXG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3QnVpbGRpbmdNYXJrZXIpO1xyXG4gICAgICAgIHByZXZpZXdCdWlsZGluZ01hcmtlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0ZWRCdWlsZGluZ1R5cGUgPSBudWxsO1xyXG5cclxuICAgIC8vIFJldGlyZXIgbGEgY2xhc3NlIHNlbGVjdGVkIGRlIHRvdXMgbGVzIGJvdXRvbnNcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idWlsZC1pdGVtJykuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXN0aW9uIGR1IGNsaWNrIHN1ciBsYSBjYXJ0ZVxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gb25NYXBDbGljayhlKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAoIXNlbGVjdGVkQnVpbGRpbmdUeXBlKSByZXR1cm47XHJcbiAgICBpZiAoIXByZXZpZXdCdWlsZGluZ01hcmtlcikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGxhdCA9IGUubGF0bG5nLmxhdDtcclxuICAgIGNvbnN0IGxuZyA9IGUubGF0bG5nLmxuZztcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYnVpbGRSZXF1ZXN0KGxhdCwgbG5nLCBzZWxlY3RlZEJ1aWxkaW5nVHlwZS5pZCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGRlYnVnTG9nKCdidWlsZGluZ3MnLCBgJHtzZWxlY3RlZEJ1aWxkaW5nVHlwZS5uYW1lfSBjb25zdHJ1aXQgYXZlYyBzdWNjw6hzICFgKTtcclxuICAgICAgICAgICAgLy8gTmV0dG95ZXJcclxuICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdCdWlsZGluZ01hcmtlcik7XHJcbiAgICAgICAgICAgIHByZXZpZXdCdWlsZGluZ01hcmtlciA9IG51bGw7XHJcbiAgICAgICAgICAgIGNsZWFyQnVpbGRpbmdTZWxlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJhZnJhw65jaGlyIGxhIHNpZGViYXIgc2kgbsOpY2Vzc2FpcmVcclxuICAgICAgICAgICAgaWYgKGRhdGEucmVmcmVzaFNpZGViYXIpIHtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hTaWRlYmFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBgRXJyZXVyOiAke2RhdGEuZXJyb3J9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGxvcnMgZGUgbGEgY29uc3RydWN0aW9uXCIsIGUpO1xyXG4gICAgICAgIHNob3dOb3RpZmljYXRpb24oXCJFcnJldXIgcsOpc2VhdSBsb3JzIGRlIGxhIGNvbnN0cnVjdGlvblwiLCAnZXJyb3InKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFByw6l2aXN1YWxpc2F0aW9uIGRlIGxhIHBvc2l0aW9uIGRlIGNvbnN0cnVjdGlvblxyXG4gKi9cclxuZnVuY3Rpb24gb25NYXBNb3VzZU1vdmUoZSkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFzZWxlY3RlZEJ1aWxkaW5nVHlwZSkge1xyXG4gICAgICAgIC8vIE5ldHRveWVyIGxlcyBtYXJrZXJzIGRlIHByw6l2aXN1YWxpc2F0aW9uXHJcbiAgICAgICAgaWYgKHByZXZpZXdCdWlsZGluZ01hcmtlcikge1xyXG4gICAgICAgICAgICBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0J1aWxkaW5nTWFya2VyKTtcclxuICAgICAgICAgICAgcHJldmlld0J1aWxkaW5nTWFya2VyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFqb3V0ZXIgdW4gbWFya2VyIGRlIHByw6l2aXN1YWxpc2F0aW9uXHJcbiAgICBpZiAoIXByZXZpZXdCdWlsZGluZ01hcmtlcikge1xyXG4gICAgICAgIHByZXZpZXdCdWlsZGluZ01hcmtlciA9IEwubWFya2VyKFtlLmxhdGxuZy5sYXQsIGUubGF0bG5nLmxuZ10pLmFkZFRvKG1hcCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByZXZpZXdCdWlsZGluZ01hcmtlci5zZXRMYXRMbmcoZS5sYXRsbmcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQWN0aXZlIGxlIG1vZGUgY29uc3RydWN0aW9uIHBvdXIgdW4gdHlwZSBkZSBiw6J0aW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZUJ1aWxkTW9kZSh0eXBlSWQpIHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXR5cGUtaWQ9XCIke3R5cGVJZH1cIl1gKTtcclxuICAgIGlmIChidG4pIHtcclxuICAgICAgICBidG4uY2xpY2soKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIETDqXNhY3RpdmUgbGUgbW9kZSBjb25zdHJ1Y3Rpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWFjdGl2YXRlQnVpbGRNb2RlKCkge1xyXG4gICAgY2xlYXJCdWlsZGluZ1NlbGVjdGlvbigpO1xyXG59XHJcblxyXG4vKipcclxuICogVsOpcmlmaWUgc2kgbGUgbW9kZSBjb25zdHJ1Y3Rpb24gZXN0IGFjdGlmXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNCdWlsZE1vZGVBY3RpdmUoKSB7XHJcbiAgICByZXR1cm4gc2VsZWN0ZWRCdWlsZGluZ1R5cGUgIT09IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSYWZyYcOuY2hpdCBsZSBjb250ZW51IGRlIGxhIHNpZGViYXJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoU2lkZWJhcigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL3NpZGViYXInKTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4gICAgICAgICAgICBjb25zdCBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3U2lkZWJhciA9IGRvYy5xdWVyeVNlbGVjdG9yKCcjc2lkZUJhcicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5ld1NpZGViYXIpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlQmFyJyk/LnJlcGxhY2VXaXRoKG5ld1NpZGViYXIpO1xyXG4gICAgICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbignU2lkZWJhciBhY3R1YWxpc8OpZScsICdpbmZvJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgbG9ycyBkdSByYWZyYcOuY2hpc3NlbWVudCBkZSBsYSBzaWRlYmFyXCIsIGUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcclxuaW1wb3J0IHsgZ2V0QnVpbGRpbmdDb3N0cywgdXBncmFkZUJ1aWxkaW5nLCBnZXRVcGdyYWRlSW5mbyB9IGZyb20gJy4uL2FwaS5qcyc7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uIH0gZnJvbSAnLi9iYXNlLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuXHJcbi8vIENhY2hlIGRlcyBpbmZvcm1hdGlvbnMgZGUgYsOidGltZW50c1xyXG5sZXQgYnVpbGRpbmdNYXJrZXJzID0gbmV3IE1hcCgpO1xyXG5cclxuLy8gQ2FjaGUgZGVzIHBvcHVwcyBkw6lqw6AgY2hhcmfDqXNcclxubGV0IHBvcHVwQ29udGVudExvYWRlZCA9IG5ldyBTZXQoKTtcclxuXHJcbi8qKlxyXG4gKiBDaGFyZ2UgbGVzIGLDonRpbWVudHMgc3VyIGxhIGNhcnRlIGF2ZWMgbGV1cnMgcG9wdXBzIGludGVyYWN0aWZzXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGJ1aWxkaW5ncyAtIExpc3RlIGRlcyBiw6J0aW1lbnRzIMOgIGFmZmljaGVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEJ1aWxkaW5nc0Zyb21EYXRhKGJ1aWxkaW5ncykge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFtYXApIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIk1hcCBub3QgaW5pdGlhbGl6ZWRcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYnVpbGRpbmdzIHx8ICFBcnJheS5pc0FycmF5KGJ1aWxkaW5ncykpIHtcclxuICAgICAgICBkZWJ1Z1dhcm4oJ2J1aWxkaW5ncycsIFwibG9hZEJ1aWxkaW5nc0Zyb21EYXRhOiBpbnZhbGlkIGJ1aWxkaW5ncyBkYXRhXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZGluZ3MuZm9yRWFjaChiID0+IHtcclxuICAgICAgICAvLyBJZ25vcmVyIGxlcyBiYXNlcyAtIGVsbGVzIHNvbnQgZ8OpcsOpZXMgcGFyIGJhc2UuanNcclxuICAgICAgICBpZiAoYi5jb2RlID09PSAnYmFzZScgfHwgYi50eXBlPy50b0xvd2VyQ2FzZSgpID09PSAnYmFzZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoYi5sYXQpIHx8ICFOdW1iZXIuaXNGaW5pdGUoYi5sbmcpKSB7XHJcbiAgICAgICAgICAgIGRlYnVnV2FybignYnVpbGRpbmdzJywgXCLinYwgQnVpbGRpbmcgaWdub3LDqSAoY29vcmQgaW52YWxpZGUpXCIsIGIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVdGlsaXNlciBsYSBmYWN0aW9uIGR1IGLDonRpbWVudCAob3UgZmFsbGJhY2sgc3VyIGxhIGZhY3Rpb24gZHUgam91ZXVyKVxyXG4gICAgICAgIGNvbnN0IGJ1aWxkaW5nRmFjdGlvbiA9IGIuZmFjdGlvbiB8fCBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBDcsOpZXIgbCdpY8O0bmUgYXZlYyBsJ2ltYWdlIGR1IGLDonRpbWVudFxyXG4gICAgICAgIGNvbnN0IGljb24gPSBjcmVhdGVCdWlsZGluZ0ljb24oYi5jb2RlLCBidWlsZGluZ0ZhY3Rpb24pO1xyXG5cclxuICAgICAgICAvLyBTdG9ja2VyIGxlcyBkb25uw6llcyBkdSBidWlsZGluZyBwb3VyIGFjY8OocyB1bHTDqXJpZXVyXHJcbiAgICAgICAgY29uc3QgYnVpbGRpbmdEYXRhID0ge1xyXG4gICAgICAgICAgICBpZDogYi5pZCxcclxuICAgICAgICAgICAgdHlwZTogYi50eXBlLFxyXG4gICAgICAgICAgICBsZXZlbDogYi5sZXZlbCxcclxuICAgICAgICAgICAgY29kZTogYi5jb2RlLFxyXG4gICAgICAgICAgICBmYWN0aW9uOiBidWlsZGluZ0ZhY3Rpb24sXHJcbiAgICAgICAgICAgIG93bmVySWQ6IGIub3duZXJJZCxcclxuICAgICAgICAgICAgaXNNaW5lOiBCb29sZWFuKGIuaXNNaW5lKSxcclxuICAgICAgICAgICAgcHJvZHVjdGlvbjogYi5wcm9kdWN0aW9uIHx8IG51bGwsXHJcbiAgICAgICAgICAgIHJlc291cmNlX3R5cGU6IGIucmVzb3VyY2VfdHlwZSB8fCBudWxsLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIENyw6llciBsZSBtYXJrZXIgYXZlYyBwb3B1cCB2aWRlIChjaGFyZ8OpIGF1IG1vbWVudCBkZSBsJ291dmVydHVyZSlcclxuICAgICAgICBjb25zdCBtYXJrZXIgPSBMLm1hcmtlcihbYi5sYXQsIGIubG5nXSwgeyBpY29uIH0pXHJcbiAgICAgICAgICAgIC5hZGRUbyhtYXApXHJcbiAgICAgICAgICAgIC5iaW5kUG9wdXAoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XHJcblxyXG4gICAgICAgIGJ1aWxkaW5nTWFya2Vycy5zZXQoYi5pZCwgeyBtYXJrZXIsIGRhdGE6IGJ1aWxkaW5nRGF0YSB9KTtcclxuXHJcbiAgICAgICAgLy8gw4ljb3V0ZXIgbCdvdXZlcnR1cmUgZGUgbGEgcG9wdXAgcG91ciBjaGFyZ2VyIGxlIGNvbnRlbnVcclxuICAgICAgICBtYXJrZXIub24oJ3BvcHVwb3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlUG9wdXBPcGVuKGJ1aWxkaW5nRGF0YSwgbWFya2VyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ2VudHJhbGlzZSBsYSBsb2dpcXVlIHBvcHVwXHJcbiAqL1xyXG5mdW5jdGlvbiBoYW5kbGVQb3B1cE9wZW4oYnVpbGRpbmdEYXRhLCBtYXJrZXIpIHtcclxuICAgIGlmICghYnVpbGRpbmdEYXRhPy5pZCkgcmV0dXJuO1xyXG5cclxuICAgIGlmICghaXNPd25CdWlsZGluZyhidWlsZGluZ0RhdGEpKSB7XHJcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZ0RhdGEpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxvYWRVcGdyYWRlSW5mb0FzeW5jKGJ1aWxkaW5nRGF0YS5pZCwgbWFya2VyLCBidWlsZGluZ0RhdGEpO1xyXG59XHJcblxyXG4vKipcclxuICogVsOpcmlmaWUgc2kgbGUgYsOidGltZW50IGFwcGFydGllbnQgYXUgam91ZXVyIGFjdGlmXHJcbiAqL1xyXG5mdW5jdGlvbiBpc093bkJ1aWxkaW5nKGJ1aWxkaW5nKSB7XHJcbiAgICByZXR1cm4gYnVpbGRpbmcuaXNNaW5lID09PSB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICogQ3LDqWUgdW4gcG9wdXAgc2ltcGxlIChzeW5jaHJvbmUpXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZykge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGRpbmctcG9wdXBcIj5cclxuICAgICAgICAgICAgPGgzPiR7YnVpbGRpbmcudHlwZSB8fCAnQsOidGltZW50J308L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoYXJnZSBsZXMgaW5mb3MgZCdhbcOpbGlvcmF0aW9uIGVuIGFycmnDqHJlLXBsYW5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRVcGdyYWRlSW5mb0FzeW5jKGJ1aWxkaW5nSWQsIG1hcmtlciwgYnVpbGRpbmdEYXRhKSB7XHJcbiAgICAvLyBOZSBwYXMgY2hhcmdlciBsZXMgaW5mb3MgZCdhbcOpbGlvcmF0aW9uIHBvdXIgbGVzIGLDonRpbWVudHMgZW5uZW1pc1xyXG4gICAgaWYgKCFpc093bkJ1aWxkaW5nKGJ1aWxkaW5nRGF0YSkpIHtcclxuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nRGF0YSkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJ1aWxkaW5nSWQpIHtcclxuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nRGF0YSkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyDDiXZpdGVyIGRlIHJlY2hhcmdlciBzaSBkw6lqw6AgY2hhcmfDqVxyXG4gICAgaWYgKHBvcHVwQ29udGVudExvYWRlZC5oYXMoYnVpbGRpbmdJZCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwb3B1cENvbnRlbnRMb2FkZWQuYWRkKGJ1aWxkaW5nSWQpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gQ2hhcmdlciBkaXJlY3RlbWVudCBsZSBjb250ZW51IGR1IHBvcHVwXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvYnVpbGRpbmdzLyR7YnVpbGRpbmdJZH0vcG9wdXAtY29udGVudGApO1xyXG5cclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICBkZWJ1Z1dhcm4oJ2J1aWxkaW5ncycsIGBFcnJldXIgQVBJIHBvcHVwLWNvbnRlbnQgKGJ1aWxkaW5nICR7YnVpbGRpbmdJZH0pOmAsIHJlcy5zdGF0dXMpO1xyXG4gICAgICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nRGF0YSkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVzLnRleHQoKTtcclxuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGh0bWwpO1xyXG4gICAgICAgIGJ1aWxkaW5nTWFya2Vycy5zZXQoYnVpbGRpbmdJZCwgeyBtYXJrZXIsIGRhdGE6IGJ1aWxkaW5nRGF0YSB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGR1IHBvcHVwXCIsIGUpO1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGFyZ2UgbGVzIGLDonRpbWVudHMgZGVwdWlzIGwnQVBJIChmb25jdGlvbiBkZSBjb21wYXRpYmlsaXTDqSlcclxuICogQGRlcHJlY2F0ZWQgVXRpbGlzZXIgbG9hZEJ1aWxkaW5nc0Zyb21EYXRhKGRhdGEpIMOgIGxhIHBsYWNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEJ1aWxkaW5ncygpIHtcclxuICAgIGZldGNoKCcvYXBpL21hcC1kYXRhJylcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgbG9hZEJ1aWxkaW5nc0Zyb21EYXRhKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGNoYXJnZW1lbnQgYsOidGltZW50c1wiLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ3LDqWUgdW5lIGljw7RuZSAobWFya2VyKSBwb3VyIHVuIGLDonRpbWVudCBhdmVjIHNvbiBpbWFnZSBzcMOpY2lmaXF1ZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGJ1aWxkaW5nQ29kZSAtIExlIGNvZGUgZHUgYsOidGltZW50IChleDogXCJiYXNlXCIsIFwiaXJvbl9taW5lXCIpLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZmFjdGlvbiAtIExhIGZhY3Rpb24gZHUgYsOidGltZW50IChvcHRpb25uZWwsIGZhbGxiYWNrIHN1ciBsZSBqb3VldXIgYWN0dWVsKS5cclxuICogQHJldHVybnMge0wuSWNvbn0gTCdpY8O0bmUgTGVhZmxldCBwZXJzb25uYWxpc8OpZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdWlsZGluZ0ljb24oYnVpbGRpbmdDb2RlLCBmYWN0aW9uID0gbnVsbCkge1xyXG4gICAgY29uc3QgYWN0dWFsRmFjdGlvbiA9IGZhY3Rpb24gfHwgZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKTtcclxuICAgIGNvbnN0IHNpemUgPSA3MDsgLy8gVGFpbGxlIHBhciBkw6lmYXV0IGRlcyBpY8O0bmVzXHJcblxyXG4gICAgcmV0dXJuIEwuaWNvbih7XHJcbiAgICAgICAgaWNvblVybDogZ2V0QnVpbGRpbmdJbWFnZShhY3R1YWxGYWN0aW9uLCBidWlsZGluZ0NvZGUpLFxyXG4gICAgICAgIGljb25TaXplOiBbc2l6ZSwgc2l6ZV0sXHJcbiAgICAgICAgaWNvbkFuY2hvcjogW3NpemUgLyAyLCBzaXplIC8gMl0sXHJcbiAgICAgICAgcG9wdXBBbmNob3I6IFswLCAtc2l6ZSAvIDJdXHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldG91cm5lIGR5bmFtaXF1ZW1lbnQgbGUgY2hlbWluIGRlIGwnaW1hZ2UgYXZlYyBmYWxsYmFjayB2ZXJzIGRlZmF1bHQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmYWN0aW9uIC0gTGUgY29kZSBvdSBub20gZGUgbGEgZmFjdGlvbiAoZXg6IFwiRW1waXJlXCIsIFwiQ2VuZHJlc1wiKS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGJ1aWxkaW5nIC0gTGUgY29kZSBkdSBiw6J0aW1lbnQgKGV4OiBcImJhc2VcIiwgXCJpcm9uX21pbmVcIikuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IExlIGNoZW1pbiBkZSBsJ2ljw7RuZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWlsZGluZ0ltYWdlKGZhY3Rpb24sIGJ1aWxkaW5nKSB7XHJcbiAgICAvLyBOb3JtYWxpc2VyIGxlIG5vbSBkdSBidWlsZGluZyBwb3VyIGwnaW1hZ2UgKHJlbXBsYWNlciBlc3BhY2VzIGV0IGNhcmFjdMOocmVzIHNww6ljaWF1eClcclxuICAgIGNvbnN0IGJ1aWxkaW5nU2x1ZyA9IGJ1aWxkaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnXycpLnJlcGxhY2UoL1teYS16MC05X10vZywgJycpO1xyXG4gICAgY29uc3QgZmFjdGlvblNsdWcgPSAoZmFjdGlvbiB8fCAnZGVmYXVsdCcpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgLy8gVG91am91cnMgdXRpbGlzZXIgbCdpY8O0bmUgZGUgbGEgZmFjdGlvbiBlbiBwcmVtaWVyXHJcbiAgICAvLyBMZSBzZXJ2ZXVyIG91IGxlIG5hdmlnYXRldXIgZ8OpcmVyYSBsZSBmYWxsYmFjayBzaSBsJ2ljw7RuZSBuJ2V4aXN0ZSBwYXNcclxuICAgIC8vIFNpIGxhIGZhY3Rpb24gZXN0ICdkZWZhdWx0JywgdXRpbGlzZXIgbCdpY8O0bmUgZGVmYXVsdCBkaXJlY3RlbWVudFxyXG4gICAgaWYgKGZhY3Rpb25TbHVnID09PSAnZGVmYXVsdCcpIHtcclxuICAgICAgICByZXR1cm4gYC9hc3NldHMvaW1hZ2VzL2J1aWxkaW5ncy9kZWZhdWx0LyR7YnVpbGRpbmdTbHVnfS5wbmdgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgL2Fzc2V0cy9pbWFnZXMvYnVpbGRpbmdzLyR7ZmFjdGlvblNsdWd9LyR7YnVpbGRpbmdTbHVnfS5wbmdgO1xyXG59XHJcblxyXG4vKipcclxuICogQW3DqWxpb3JlIHVuIGLDonRpbWVudFxyXG4gKi9cclxud2luZG93LnVwZ3JhZGVCdWlsZGluZyA9IGFzeW5jIGZ1bmN0aW9uKGJ1aWxkaW5nSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB1cGdyYWRlQnVpbGRpbmcoYnVpbGRpbmdJZCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIC8vIEludmFsaWRlciBsZSBjYWNoZSBwb3VyIGZvcmNlciBsZSByZWNoYXJnZW1lbnRcclxuICAgICAgICAgICAgcG9wdXBDb250ZW50TG9hZGVkLmRlbGV0ZShidWlsZGluZ0lkKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE1ldHRyZSDDoCBqb3VyIGxlIG1hcnF1ZXVyXHJcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5ID0gYnVpbGRpbmdNYXJrZXJzLmdldChidWlsZGluZ0lkKTtcclxuICAgICAgICAgICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgICAgICAgICAgICBlbnRyeS5kYXRhLmxldmVsID0gZGF0YS5uZXdMZXZlbDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IGVudHJ5Lm1hcmtlcjtcclxuICAgICAgICAgICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoZW50cnkuZGF0YSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlY2hhcmdlciBsZXMgaW5mb3MgZCdhbcOpbGlvcmF0aW9uXHJcbiAgICAgICAgICAgICAgICBsb2FkVXBncmFkZUluZm9Bc3luYyhidWlsZGluZ0lkLCBtYXJrZXIsIGVudHJ5LmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFsZXJ0KCdCw6J0aW1lbnQgYW3DqWxpb3LDqSBhdmVjIHN1Y2PDqHMgIScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyOiBcIiArIChkYXRhLmVycm9yIHx8IFwiSW1wb3NzaWJsZSBkJ2Ftw6lsaW9yZXIgbGUgYsOidGltZW50XCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgbG9ycyBkZSBsJ2Ftw6lsaW9yYXRpb25cIiwgZSk7XHJcbiAgICAgICAgYWxlcnQoXCJFcnJldXIgcsOpc2VhdSBsb3JzIGRlIGwnYW3DqWxpb3JhdGlvblwiKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXRvdXJuZSBsZXMgaW5mb3JtYXRpb25zIHN1ciBsZXMgY2/Du3RzIGRlIGNvbnN0cnVjdGlvbiBkJ3VuIHR5cGUgZGUgYsOidGltZW50XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QnVpbGRpbmdUeXBlQ29zdHMoYnVpbGRpbmdUeXBlSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCdWlsZGluZ0Nvc3RzKGJ1aWxkaW5nVHlwZUlkKTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGNvw7t0c1wiLCBlKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFbDqXJpZmllIHNpIGxlIGpvdWV1ciBwZXV0IGNvbnN0cnVpcmUgdW4gYsOidGltZW50XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FuQnVpbGRCdWlsZGluZyhidWlsZGluZ1R5cGVJZCkge1xyXG4gICAgY29uc3QgY29zdHMgPSBhd2FpdCBnZXRCdWlsZGluZ1R5cGVDb3N0cyhidWlsZGluZ1R5cGVJZCk7XHJcbiAgICBpZiAoIWNvc3RzKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wbGF5ZXItcmVzb3VyY2VzJyk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IHJlc291cmNlcyA9IHt9O1xyXG4gICAgZGF0YS5yZXNvdXJjZXMuZm9yRWFjaChyID0+IHtcclxuICAgICAgICByZXNvdXJjZXNbci50eXBlXSA9IHIucXVhbnRpdHk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IFtyZXNvdXJjZSwgYW1vdW50XSBvZiBPYmplY3QuZW50cmllcyhjb3N0cy5jb3N0cykpIHtcclxuICAgICAgICBpZiAoKHJlc291cmNlc1tyZXNvdXJjZV0gfHwgMCkgPCBhbW91bnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hCdWlsZGluZ1BvcHVwKGJ1aWxkaW5nSWQpIHtcclxuICAgIGNvbnN0IGVudHJ5ID0gYnVpbGRpbmdNYXJrZXJzLmdldChidWlsZGluZ0lkKTtcclxuXHJcbiAgICBpZiAoIWVudHJ5KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9wdGlvbm5lbCA6IHVuaXF1ZW1lbnQgc2kgbGUgcG9wdXAgZXN0IG91dmVydFxyXG4gICAgaWYgKCFlbnRyeS5tYXJrZXIuaXNQb3B1cE9wZW4oKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBsb2FkVXBncmFkZUluZm9Bc3luYyhcclxuICAgICAgICBidWlsZGluZ0lkLFxyXG4gICAgICAgIGVudHJ5Lm1hcmtlcixcclxuICAgICAgICBlbnRyeS5kYXRhXHJcbiAgICApO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcclxuaW1wb3J0IHsgZHJhd1JvYWRTZWdtZW50IH0gZnJvbSAnLi4vdWkvZHJhd09uTWFwLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uL3V0aWxzL3RpbWVyLmpzJztcclxuXHJcbi8vIFN0YXRlXHJcbmNvbnN0IGFjdGl2ZURlbGl2ZXJpZXMgPSBuZXcgTWFwKCk7XHJcbmxldCBkZWxpdmVyeUxheWVyID0gbnVsbDtcclxubGV0IGFuaW1hdGlvbkZyYW1lID0gbnVsbDtcclxuY29uc3QgcGVuZGluZ0V2ZW50cyA9IFtdO1xyXG5cclxuY29uc3QgdHJ1Y2tJY29uID0gTC5kaXZJY29uKHtcclxuICAgIGNsYXNzTmFtZTogJycsXHJcbiAgICBodG1sOiAnPGRpdiBzdHlsZT1cImZvbnQtc2l6ZToxOHB4XCI+8J+amjwvZGl2PicsXHJcbiAgICBpY29uU2l6ZTogWzIwLCAyMF0sXHJcbiAgICBpY29uQW5jaG9yOiBbMTAsIDEwXVxyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVRcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXREZWxpdmVyeUV2ZW50cygpIHtcclxuICAgIGluaXREZWxpdmVyeUxheWVycygpO1xyXG4gICAgbG9hZERlbGl2ZXJpZXMoKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnYW1lOmV2ZW50JywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gZS5kZXRhaWw7XHJcbiAgICAgICAgaWYgKGRhdGEudHlwZSAhPT0gJ2RlbGl2ZXJ5X3VwZGF0ZScpIHJldHVybjtcclxuXHJcbiAgICAgICAgaGFuZGxlRGVsaXZlcnlFdmVudCh7XHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5SWQ6ICAgIGRhdGEuZGVsaXZlcnlJZCxcclxuICAgICAgICAgICAgYnVpbGRpbmdJZDogICAgZGF0YS5idWlsZGluZ0lkLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICAgICAgICBkYXRhLnN0YXR1cyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6ICAgICAgZGF0YS5wcm9ncmVzcyxcclxuICAgICAgICAgICAgd2F5cG9pbnRzOiAgICAgZGF0YS53YXlwb2ludHMsXHJcbiAgICAgICAgICAgIHJlc291cmNlOiAgICAgIGRhdGEucmVzb3VyY2VDb2RlLFxyXG4gICAgICAgICAgICByZXNvdXJjZUxhYmVsOiBkYXRhLnJlc291cmNlTGFiZWwsXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiAgICAgIGRhdGEucXVhbnRpdHksXHJcbiAgICAgICAgICAgIGVzdGltYXRlZFRpbWU6IGRhdGEuZHVyYXRpb24sXHJcbiAgICAgICAgICAgIHNjaGVkdWxlZEF0OiAgIGRhdGEuc2NoZWR1bGVkQXQsXHJcbiAgICAgICAgICAgIGZhY3Rpb246ICAgICAgIGRhdGEuZmFjdGlvbiA/PyAnZGVmYXVsdCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5JVCBMQVlFUlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXREZWxpdmVyeUxheWVycygpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBpZiAoIWRlbGl2ZXJ5TGF5ZXIgfHwgZGVsaXZlcnlMYXllci5fbWFwICE9PSBtYXApIHtcclxuXHJcbiAgICAgICAgaWYgKGRlbGl2ZXJ5TGF5ZXIpIHtcclxuICAgICAgICAgICAgZGVsaXZlcnlMYXllci5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlbGl2ZXJ5TGF5ZXIgPSBMLmxheWVyR3JvdXAoKS5hZGRUbyhtYXApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGl2ZXJ5TGF5ZXIgPSBMLmxheWVyR3JvdXAoKS5hZGRUbyhtYXApO1xyXG5cclxuICAgIHN0YXJ0QW5pbWF0aW9uKCk7XHJcbiAgICBcclxuICAgIHBlbmRpbmdFdmVudHMuZm9yRWFjaChwcm9jZXNzRGVsaXZlcnlFdmVudCk7XHJcbiAgICBwZW5kaW5nRXZlbnRzLmxlbmd0aCA9IDA7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENIQVJHRVIgbGVzIGxpdnJhaXNvbnMgSU5fVFJBTlNJVCBkZXB1aXMgbCdBUElcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWREZWxpdmVyaWVzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2RlbGl2ZXJpZXMvaW4tdHJhbnNpdCcpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHJldHVybjtcclxuICAgICAgICBjb25zdCBkZWxpdmVyaWVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBkZWxpdmVyaWVzLmZvckVhY2goZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5RGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGRlbGl2ZXJ5SWQ6ICAgIGQuZGVsaXZlcnlJZCxcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nSWQ6ICAgIGQuYnVpbGRpbmdJZCxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogICAgICAgICdpbl90cmFuc2l0JyxcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiAgICAgIGQucHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgICAgICBzY2hlZHVsZWRBdDogICBkLnNjaGVkdWxlZEF0LFxyXG4gICAgICAgICAgICAgICAgZXN0aW1hdGVkVGltZTogZC5lc3RpbWF0ZWRUaW1lLFxyXG4gICAgICAgICAgICAgICAgd2F5cG9pbnRzOiAgICAgZC53YXlwb2ludHMsXHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZTogICAgICBkLnJlc291cmNlLFxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VMYWJlbDogZC5yZXNvdXJjZUxhYmVsLFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6ICAgICAgZC5xdWFudGl0eSxcclxuICAgICAgICAgICAgICAgIGZhY3Rpb246ICAgICAgIGQuZmFjdGlvbiB8fCAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRlYnVnTG9nKCdkZWxpdmVyeScsICdMb2FkaW5nIGRlbGl2ZXJ5IGZyb20gQVBJOicsIGRlbGl2ZXJ5RGF0YSk7XHJcbiAgICAgICAgICAgIGhhbmRsZURlbGl2ZXJ5RXZlbnQoZGVsaXZlcnlEYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdkZWxpdmVyeScsICdGYWlsZWQgdG8gbG9hZCBkZWxpdmVyaWVzOicsIGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBIQU5ETEUgRVZFTlRcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZURlbGl2ZXJ5RXZlbnQoZGF0YSkge1xyXG4gICAgaWYgKCFkZWxpdmVyeUxheWVyKSB7XHJcbiAgICAgICAgcGVuZGluZ0V2ZW50cy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHByb2Nlc3NEZWxpdmVyeUV2ZW50KGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzRGVsaXZlcnlFdmVudChkYXRhKSB7XHJcbiAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdkZWxpdmVyZWQnKSB7XHJcbiAgICAgICAgcmVtb3ZlRGVsaXZlcnkoZGF0YS5kZWxpdmVyeUlkKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdpbl90cmFuc2l0Jykge1xyXG4gICAgICAgIHVwc2VydERlbGl2ZXJ5KGRhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cHNlcnREZWxpdmVyeShkYXRhKSB7XHJcbiAgICBjb25zdCBrZXkgPSBkYXRhLmRlbGl2ZXJ5SWQ7XHJcbiAgICBpZiAoIWtleSkgeyBjb25zb2xlLndhcm4oJ0RlbGl2ZXJ5IHNhbnMgSUQnLCBkYXRhKTsgcmV0dXJuOyB9XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCB3YXlwb2ludHMgPSBkYXRhLndheXBvaW50cztcclxuICAgIGlmICh0eXBlb2Ygd2F5cG9pbnRzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRyeSB7IHdheXBvaW50cyA9IEpTT04ucGFyc2Uod2F5cG9pbnRzKTsgfSBjYXRjaCB7IHJldHVybjsgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHdheXBvaW50cykgfHwgd2F5cG9pbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGxhdGxuZ3MgPSB3YXlwb2ludHMubWFwKHdwID0+IFt3cC5sYXQsIHdwLmxuZ10pO1xyXG4gICAgY29uc3QgZmFjdGlvbiA9IGRhdGEuZmFjdGlvbiB8fCAnZGVmYXVsdCc7XHJcblxyXG4gICAgaWYgKGFjdGl2ZURlbGl2ZXJpZXMuaGFzKGtleSkpIHtcclxuICAgICAgICBjb25zdCBkZWxpdmVyeSA9IGFjdGl2ZURlbGl2ZXJpZXMuZ2V0KGtleSk7XHJcbiAgICAgICAgZGVsaXZlcnkud2F5cG9pbnRzICAgICAgICAgID0gbGF0bG5ncztcclxuICAgICAgICBkZWxpdmVyeS5wcm9ncmVzcyAgICAgICAgICAgPSBkYXRhLnByb2dyZXNzID8/IGRlbGl2ZXJ5LnByb2dyZXNzO1xyXG4gICAgICAgIGRlbGl2ZXJ5LmVzdGltYXRlZFRpbWUgICAgICA9IGRhdGEuZXN0aW1hdGVkVGltZTtcclxuICAgICAgICBkZWxpdmVyeS5zY2hlZHVsZWRBdCAgICAgICAgPSBkYXRhLnNjaGVkdWxlZEF0ID8/IGRlbGl2ZXJ5LnNjaGVkdWxlZEF0O1xyXG4gICAgICAgIGRlbGl2ZXJ5Lmxhc3RTZXJ2ZXJQcm9ncmVzcyA9IGRhdGEucHJvZ3Jlc3MgPz8gMDtcclxuICAgICAgICBkZWxpdmVyeS5sYXN0U2VydmVyVGltZSAgICAgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGRlbGl2ZXJ5LmZhY3Rpb24gICAgICAgICAgICA9IGZhY3Rpb247XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHBvbHlsaW5lID0gZHJhd1JvYWRTZWdtZW50KGBkZWxpdmVyeS0ke2tleX1gLCBsYXRsbmdzLCBmYWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gRm9ybWF0ZXIgbCdoZXVyZSBkdSBkw6lwYXJ0IHByw6l2dVxyXG4gICAgICAgIGNvbnN0IHNjaGVkdWxlZFRpbWUgPSBkYXRhLnNjaGVkdWxlZEF0ID8gZm9ybWF0RGF0ZShkYXRhLnNjaGVkdWxlZEF0KSA6ICdJbmNvbm51ZSc7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IEwubWFya2VyKGxhdGxuZ3NbMF0sIHsgaWNvbjogdHJ1Y2tJY29uIH0pXHJcbiAgICAgICAgICAgIC5hZGRUbyhkZWxpdmVyeUxheWVyKVxyXG4gICAgICAgICAgICAuYmluZFBvcHVwKGBcclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Q2FtaW9uIG7CsCR7a2V5fTwvc3Ryb25nPjxicj5cclxuICAgICAgICAgICAgICAgIFRyYW5zcG9ydGUgOiAke2RhdGEucXVhbnRpdHkgPz8gJyd9IHVuaXTDqXMgZGUgPHN0cm9uZz4ke2RhdGEucmVzb3VyY2VMYWJlbCA/PyAnJ308L3N0cm9uZz48YnI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlbGl2ZXJ5LXByb2dyZXNzLSR7a2V5fVwiPlByb2dyZXNzaW9uIDogJHtkYXRhLnByb2dyZXNzID8/IDB9JTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgIGApO1xyXG5cclxuICAgICAgICBhY3RpdmVEZWxpdmVyaWVzLnNldChrZXksIHtcclxuICAgICAgICAgICAgbWFya2VyLFxyXG4gICAgICAgICAgICBwb2x5bGluZSxcclxuICAgICAgICAgICAgd2F5cG9pbnRzOiAgICAgICAgICBsYXRsbmdzLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogICAgICAgICAgIGRhdGEucHJvZ3Jlc3MgPz8gMCxcclxuICAgICAgICAgICAgZXN0aW1hdGVkVGltZTogICAgICBkYXRhLmVzdGltYXRlZFRpbWUgPz8gMzYwMCxcclxuICAgICAgICAgICAgc2NoZWR1bGVkQXQ6ICAgICAgICBkYXRhLnNjaGVkdWxlZEF0ID8/IG51bGwsXHJcbiAgICAgICAgICAgIGxhc3RTZXJ2ZXJQcm9ncmVzczogZGF0YS5wcm9ncmVzcyA/PyAwLFxyXG4gICAgICAgICAgICBsYXN0U2VydmVyVGltZTogICAgIERhdGUubm93KCksXHJcbiAgICAgICAgICAgIHJlc291cmNlOiAgICAgICAgICAgZGF0YS5yZXNvdXJjZSxcclxuICAgICAgICAgICAgcmVzb3VyY2VMYWJlbDogICAgICBkYXRhLnJlc291cmNlTGFiZWwsXHJcbiAgICAgICAgICAgIHF1YW50aXR5OiAgICAgICAgICAgZGF0YS5xdWFudGl0eSxcclxuICAgICAgICAgICAgZmFjdGlvbixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRGVsaXZlcnkoa2V5KSB7XHJcbiAgICBjb25zdCBkZWxpdmVyeSA9IGFjdGl2ZURlbGl2ZXJpZXMuZ2V0KGtleSk7XHJcbiAgICBpZiAoIWRlbGl2ZXJ5KSByZXR1cm47XHJcbiAgICBkZWxpdmVyeS5tYXJrZXIucmVtb3ZlKCk7XHJcbiAgICBkZWxpdmVyeS5wb2x5bGluZS5yZW1vdmUoKTtcclxuICAgIGFjdGl2ZURlbGl2ZXJpZXMuZGVsZXRlKGtleSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEFOSU1BVElPTiBMT0NBTEUgKHJlcXVlc3RBbmltYXRpb25GcmFtZSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gc3RhcnRBbmltYXRpb24oKSB7XHJcbiAgICBpZiAoYW5pbWF0aW9uRnJhbWUpIHJldHVybjtcclxuXHJcbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgIGFjdGl2ZURlbGl2ZXJpZXMuZm9yRWFjaCgoZGVsaXZlcnksIGtleSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW50ZXJwb2xhdGVkUHJvZ3Jlc3M7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGVsaXZlcnkuc2NoZWR1bGVkQXQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHLDqXNpc3RhbnQgYXUgcmVsb2FkIGRlIHBhZ2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKGRlbGl2ZXJ5LnNjaGVkdWxlZEF0KS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGFwc2VkICAgPSAobm93IC0gc3RhcnRUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRQcm9ncmVzcyA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBNYXRoLm1heCgwLCAoZWxhcHNlZCAvIGRlbGl2ZXJ5LmVzdGltYXRlZFRpbWUpICogMTAwKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrIHNpIHBhcyBkZSBzY2hlZHVsZWRBdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxhcHNlZFNpbmNlU2VydmVyID0gKG5vdyAtIGRlbGl2ZXJ5Lmxhc3RTZXJ2ZXJUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzc1BlclNlY29uZCAgPSAxMDAgLyBkZWxpdmVyeS5lc3RpbWF0ZWRUaW1lO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkUHJvZ3Jlc3MgPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnkubGFzdFNlcnZlclByb2dyZXNzICsgKGVsYXBzZWRTaW5jZVNlcnZlciAqIHByb2dyZXNzUGVyU2Vjb25kKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zID0gaW50ZXJwb2xhdGVBbG9uZ1JvdXRlKGRlbGl2ZXJ5LndheXBvaW50cywgaW50ZXJwb2xhdGVkUHJvZ3Jlc3MgLyAxMDApO1xyXG4gICAgICAgICAgICBpZiAocG9zKSBkZWxpdmVyeS5tYXJrZXIuc2V0TGF0TG5nKHBvcyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZWxpdmVyeS1wcm9ncmVzcy0ke2tleX1gKTtcclxuICAgICAgICAgICAgaWYgKGVsKSBlbC50ZXh0Q29udGVudCA9IGBQcm9ncmVzc2lvbiA6ICR7TWF0aC5yb3VuZChpbnRlcnBvbGF0ZWRQcm9ncmVzcyl9JWA7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW50ZXJwb2xhdGVkUHJvZ3Jlc3MgPj0gMTAwKSByZW1vdmVEZWxpdmVyeShrZXkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5URVJQT0xBVElPTiBzdXIgbGEgcG9seWxpZ25lXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGludGVycG9sYXRlQWxvbmdSb3V0ZShsYXRsbmdzLCB0KSB7XHJcbiAgICBpZiAoIWxhdGxuZ3MgfHwgbGF0bG5ncy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG4gICAgaWYgKHQgPD0gMCkgcmV0dXJuIGxhdGxuZ3NbMF07XHJcbiAgICBpZiAodCA+PSAxKSByZXR1cm4gbGF0bG5nc1tsYXRsbmdzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgIGxldCB0b3RhbERpc3QgPSAwO1xyXG4gICAgY29uc3Qgc2VnbWVudHMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGF0bG5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGQgPSBoYXZlcnNpbmUobGF0bG5nc1tpIC0gMV0sIGxhdGxuZ3NbaV0pO1xyXG4gICAgICAgIHNlZ21lbnRzLnB1c2goZCk7XHJcbiAgICAgICAgdG90YWxEaXN0ICs9IGQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRhcmdldCA9IHRvdGFsRGlzdCAqIHQ7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHRhcmdldCA8PSBzZWdtZW50c1tpXSkge1xyXG4gICAgICAgICAgICBjb25zdCB1ID0gdGFyZ2V0IC8gc2VnbWVudHNbaV07XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBsYXRsbmdzW2ldWzBdICsgdSAqIChsYXRsbmdzW2kgKyAxXVswXSAtIGxhdGxuZ3NbaV1bMF0pLFxyXG4gICAgICAgICAgICAgICAgbGF0bG5nc1tpXVsxXSArIHUgKiAobGF0bG5nc1tpICsgMV1bMV0gLSBsYXRsbmdzW2ldWzFdKSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFyZ2V0IC09IHNlZ21lbnRzW2ldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsYXRsbmdzW2xhdGxuZ3MubGVuZ3RoIC0gMV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhdmVyc2luZShhLCBiKSB7XHJcbiAgICBjb25zdCBSID0gNjM3MTAwMDtcclxuICAgIGNvbnN0IGRMYXQgPSAoYlswXSAtIGFbMF0pICogTWF0aC5QSSAvIDE4MDtcclxuICAgIGNvbnN0IGRMbmcgPSAoYlsxXSAtIGFbMV0pICogTWF0aC5QSSAvIDE4MDtcclxuICAgIGNvbnN0IHggPSBNYXRoLnNpbihkTGF0IC8gMikgKiogMlxyXG4gICAgICAgICAgICArIE1hdGguY29zKGFbMF0gKiBNYXRoLlBJIC8gMTgwKSAqIE1hdGguY29zKGJbMF0gKiBNYXRoLlBJIC8gMTgwKVxyXG4gICAgICAgICAgICAqIE1hdGguc2luKGRMbmcgLyAyKSAqKiAyO1xyXG4gICAgcmV0dXJuIFIgKiAyICogTWF0aC5hdGFuMihNYXRoLnNxcnQoeCksIE1hdGguc3FydCgxIC0geCkpO1xyXG59IiwiaW1wb3J0IHsgaW5pdE1hcCwgbG9hZFdvcmxkIH0gZnJvbSAnLi9tYXAvbWFwLmpzJztcclxuaW1wb3J0IHsgaW5pdEdQUyB9IGZyb20gJy4vdXRpbHMvZ3BzLmpzJztcclxuaW1wb3J0IHsgaW5pdEJhc2VVSSB9IGZyb20gJy4vYnVpbGRpbmdzL2Jhc2UuanMnO1xyXG5pbXBvcnQgeyBpbml0QnVpbGRNb2RlIH0gZnJvbSAnLi9idWlsZGluZ3MvYnVpbGRNb2RlLmpzJztcclxuaW1wb3J0IHsgaW5pdE5vdGlmaWNhdGlvbnMgfSBmcm9tICcuL25vdGlmaWNhdGlvbnMuanMnO1xyXG5pbXBvcnQgeyBpbml0QnVpbGRpbmdUaW1lcnMgfSBmcm9tICcuL3V0aWxzL3RpbWVyLmpzJztcclxuaW1wb3J0IHsgaW5pdERlbGl2ZXJ5RXZlbnRzIH0gZnJvbSAnLi9kZWxpdmVyeS9kZWxpdmVyeS5qcyc7XHJcbmltcG9ydCB7IGluaXRJbnZlbnRvcnlFdmVudHMgfSBmcm9tICcuL2ludmVudG9yeS9pbnZlbnRvcnkuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZyB9IGZyb20gJy4uL3V0aWxzL2RlYnVnLmpzJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblxyXG4gICAgZW5hYmxlTGVhZmxldERlYnVnKGZhbHNlKTtcclxuXHJcbiAgICBpbml0TWFwKDQ2LjUzOTcyLCAyLjQzMDI4KTtcclxuXHJcbiAgICBpbml0QmFzZVVJKCk7XHJcbiAgICBpbml0QnVpbGRNb2RlKCk7XHJcbiAgICBsb2FkV29ybGQoKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3BhZ2UtZ2FtZScpO1xyXG5cclxuICAgIGlmICh3aW5kb3cuY3VycmVudFVzZXIpIHtcclxuICAgICAgICBpbml0Tm90aWZpY2F0aW9ucygpO1xyXG4gICAgICAgIGluaXREZWxpdmVyeUV2ZW50cygpO1xyXG4gICAgICAgIGluaXRJbnZlbnRvcnlFdmVudHMoKTtcclxuICAgICAgICBpbml0QnVpbGRpbmdUaW1lcnMoKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTGVhZmxldERlYnVnKGRlYnVnID0gZmFsc2UpIHtcclxuXHJcbiAgICBpZiAoIWRlYnVnKSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgb3JpZ2luYWxNYXJrZXIgPSBMLm1hcmtlcjtcclxuICAgIGNvbnN0IG9yaWdpbmFsQ2lyY2xlID0gTC5jaXJjbGU7XHJcbiAgICBjb25zdCBvcmlnaW5hbFBvbHlsaW5lID0gTC5wb2x5bGluZTtcclxuXHJcbiAgICBMLm1hcmtlciA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XHJcbiAgICAgICAgZGVidWdMb2coXCJsZWFmbGV0XCIsIFwi8J+nqCBNQVJLRVIgQ0FMTDpcIiwgYXJncyk7XHJcbiAgICAgICAgZGVidWdMb2coXCJsZWFmbGV0XCIsIFwiTUFSS0VSIFNUQUNLXCIpO1xyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbE1hcmtlci5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgTC5jaXJjbGUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgIGRlYnVnTG9nKFwibGVhZmxldFwiLCBcIvCfp6ggQ0lSQ0xFIENBTEw6XCIsIGFyZ3MpO1xyXG4gICAgICAgIGRlYnVnTG9nKFwibGVhZmxldFwiLCBcIkNJUkNMRSBTVEFDS1wiKTtcclxuICAgICAgICByZXR1cm4gb3JpZ2luYWxDaXJjbGUuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEwucG9seWxpbmUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgIGRlYnVnTG9nKFwibGVhZmxldFwiLCBcIvCfp6ggUE9MWUxJTkUgQ0FMTDpcIiwgYXJncyk7XHJcbiAgICAgICAgZGVidWdMb2coXCJsZWFmbGV0XCIsIFwiUE9MWUxJTkUgU1RBQ0tcIik7XHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUG9seWxpbmUuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHsgcmVmcmVzaEJ1aWxkaW5nUG9wdXAgfSBmcm9tICcuLi9idWlsZGluZ3MvYnVpbGRpbmcuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5JVCDigJQgcmVtcGxhY2UgaW5pdEludmVudG9yeU1lcmN1cmVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRJbnZlbnRvcnlFdmVudHMoKSB7XHJcbiAgICBpZiAoIXdpbmRvdy5jdXJyZW50VXNlcikge1xyXG4gICAgICAgIGRlYnVnV2FybignaW52ZW50b3J5JywgJ0F1Y3VuIHV0aWxpc2F0ZXVyIGNvbm5lY3TDqScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBkZWJ1Z0xvZygnaW52ZW50b3J5JywgJ2luaXRJbnZlbnRvcnlFdmVudHMgYXBwZWzDqScpO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2dhbWU6ZXZlbnQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBlLmRldGFpbDtcclxuICAgICAgICBpZiAoZGF0YS50eXBlICE9PSAnaW52ZW50b3J5X3VwZGF0ZScpIHJldHVybjtcclxuXHJcbiAgICAgICAgZGVidWdMb2coJ2ludmVudG9yeScsICdJbnZlbnRhaXJlIG1pcyDDoCBqb3VyOicsIGRhdGEpO1xyXG4gICAgICAgIGhhbmRsZUludmVudG9yeVVwZGF0ZShkYXRhKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBIQU5ETEUgVVBEQVRFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGhhbmRsZUludmVudG9yeVVwZGF0ZShkYXRhKSB7XHJcbiAgICB1cGRhdGVOYXZiYXJSZXNvdXJjZXMoZGF0YS5yZXNvdXJjZXMgPz8gZGF0YSk7XHJcblxyXG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVpbGRpbmctcG9wdXAnKTtcclxuICAgIGlmIChwb3B1cCkge1xyXG4gICAgICAgIHJlZnJlc2hCdWlsZGluZ1BvcHVwKHBhcnNlSW50KHBvcHVwLmRhdGFzZXQuYnVpbGRpbmdJZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdhcmRlciBsJ2V2ZW50IGN1c3RvbSBwb3VyIGxlcyBhdXRyZXMgY29tcG9zYW50cyBxdWkgw6ljb3V0ZW50IGTDqWrDoFxyXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpbnZlbnRvcnlVcGRhdGVkJywgeyBkZXRhaWw6IGRhdGEgfSkpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBOQVZCQVJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gdXBkYXRlTmF2YmFyUmVzb3VyY2VzKHJlc291cmNlcykge1xyXG4gICAgaWYgKCFyZXNvdXJjZXMpIHJldHVybjtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzb3VyY2UtaXRlbScpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGl0ZW0uZGF0YXNldC5yZXNvdXJjZUNvZGU7XHJcbiAgICAgICAgaWYgKHJlc291cmNlc1tjb2RlXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHF0eUVsZW1lbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5yZXNvdXJjZS1xdHknKTtcclxuICAgICAgICAgICAgaWYgKHF0eUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHF0eUVsZW1lbnQudGV4dENvbnRlbnQgPSByZXNvdXJjZXNbY29kZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVVBHUkFERSBSRVFVSVJFTUVOVFNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gY2hlY2tVcGdyYWRlUmVxdWlyZW1lbnRzKHBvcHVwLCByZXNvdXJjZUNvZGUsIHF1YW50aXR5KSB7XHJcbiAgICBjb25zdCByZXF1aXJlZEVsZW1lbnQgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yZXF1aXJlZC0ke3Jlc291cmNlQ29kZX1dYCk7XHJcbiAgICBpZiAoIXJlcXVpcmVkRWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHJlcXVpcmVkID0gcGFyc2VJbnQoXHJcbiAgICAgICAgcmVxdWlyZWRFbGVtZW50LmdldEF0dHJpYnV0ZShgZGF0YS1yZXF1aXJlZC0ke3Jlc291cmNlQ29kZX1gKSB8fCAnMCdcclxuICAgICk7XHJcblxyXG4gICAgcmVxdWlyZWRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3RleHQtc3VjY2VzcycsIHF1YW50aXR5ID49IHJlcXVpcmVkKTtcclxuICAgIHJlcXVpcmVkRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCd0ZXh0LWRhbmdlcicsICBxdWFudGl0eSA8IHJlcXVpcmVkKTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuXHJcbmNvbnN0IGRlcG9zaXRNYXJrZXJzID0gbmV3IE1hcCgpO1xyXG5cclxuLy8gQ2FjaGUgZGVzIHBvcHVwcyBkw6lqw6AgY2hhcmfDqXNcclxuY29uc3QgcG9wdXBDb250ZW50TG9hZGVkID0gbmV3IFNldCgpO1xyXG5cclxuLy8gQ2FjaGUgZGVzIHR5cGVzIGRlIHJlc3NvdXJjZXNcclxubGV0IGJ1aWxkaW5nVHlwZXNDYWNoZSA9IG51bGw7XHJcbmxldCByZXNvdXJjZVR5cGVzQ2FjaGUgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIENoYXJnZSBsZXMgdHlwZXMgZGUgcmVzc291cmNlcyBkZXB1aXMgbCdBUElcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRCdWlsZGluZ1R5cGVzKCkge1xyXG4gICAgaWYgKGJ1aWxkaW5nVHlwZXNDYWNoZSkgcmV0dXJuIGJ1aWxkaW5nVHlwZXNDYWNoZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvYnVpbGRpbmctdHlwZXNgKTtcclxuICAgICAgICBidWlsZGluZ1R5cGVzQ2FjaGUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGJ1aWxkaW5nVHlwZXNDYWNoZTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkZXMgdHlwZXMgZGUgcmVzc291cmNlc1wiLCBlKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRSZXNvdXJjZVR5cGVzKCkge1xyXG4gICAgaWYgKHJlc291cmNlVHlwZXNDYWNoZSkgcmV0dXJuIHJlc291cmNlVHlwZXNDYWNoZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvcmVzb3VyY2UtdHlwZXNgKTtcclxuICAgICAgICByZXNvdXJjZVR5cGVzQ2FjaGUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc291cmNlVHlwZXNDYWNoZTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkZXMgdHlwZXMgZGUgcmVzc291cmNlc1wiLCBlKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIE1hcHBpbmcgZGVzIGNvdWxldXJzIHBhciBkw6lmYXV0XHJcbmNvbnN0IERFRkFVTFRfQ09MT1JTID0ge1xyXG4gICAgJ2lyb24nOiAnIzdmOGM4ZCcsXHJcbiAgICAnb2lsJzogJyNmMWM0MGYnLFxyXG4gICAgJ2NvYWwnOiAnIzJjM2U1MCcsXHJcbiAgICAncnViYmVyJzogJyMyN2FlNjAnLFxyXG4gICAgJ2JhdXhpdGUnOiAnI2U2N2UyMicsXHJcbiAgICAncmFyZV9lYXJ0aCc6ICcjOGU0NGFkJ1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldG91cm5lIGxhIGNvdWxldXIgcG91ciB1biB0eXBlIGRlIHJlc3NvdXJjZSAoc3luY2hyb25lIC0gdXRpbGlzZSBsZSBjYWNoZSlcclxuICovXHJcbmZ1bmN0aW9uIGdldFJlc291cmNlQ29sb3IodHlwZSkge1xyXG4gICAgaWYgKHJlc291cmNlVHlwZXNDYWNoZSkgcmV0dXJuIChyZXNvdXJjZVR5cGVzQ2FjaGUgJiYgcmVzb3VyY2VUeXBlc0NhY2hlW3R5cGVdPy5jb2xvcikgfHwgREVGQVVMVF9DT0xPUlNbdHlwZV0gfHwgJyNmZmZmZmYnO1xyXG5cclxuICAgIGxvYWRSZXNvdXJjZVR5cGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChyZXNvdXJjZVR5cGVzQ2FjaGUgJiYgcmVzb3VyY2VUeXBlc0NhY2hlW3R5cGVdPy5jb2xvcikgfHwgREVGQVVMVF9DT0xPUlNbdHlwZV0gfHwgJyNmZmZmZmYnO1xyXG59XHJcblxyXG4vKipcclxuICogVHJvdXZlIGxlIHR5cGUgZGUgYsOidGltZW50IChtaW5lKSBwb3VyIHVuZSByZXNzb3VyY2UgZG9ubsOpZVxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZmluZEJ1aWxkaW5nVHlwZUZvclJlc291cmNlKHJlc291cmNlVHlwZSkge1xyXG4gICAgY29uc3QgYnVpbGRpbmdUeXBlcyA9IGF3YWl0IGxvYWRCdWlsZGluZ1R5cGVzKCk7XHJcblxyXG4gICAgLy8gQ2hlcmNoZXIgdW4gYsOidGltZW50IHF1aSBwcm9kdWl0IGNldHRlIHJlc3NvdXJjZSAocHJvZHVjdGlvbl9yYXRlID4gMClcclxuICAgIGNvbnN0IGJ1aWxkaW5nVHlwZSA9IGJ1aWxkaW5nVHlwZXMuZmluZChidCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChidC5yZXNvdXJjZV90eXBlID09PSByZXNvdXJjZVR5cGUgfHwgYnQucmVzb3VyY2VUeXBlPy5jb2RlID09PSByZXNvdXJjZVR5cGUpICYmIGJ0LnByb2R1Y3Rpb25fcmF0ZSA+IDA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYnVpbGRpbmdUeXBlPy5pZCB8fCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVwb3NpdExheWVycyA9IHt9O1xyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpc2UgbGVzIGNvdWNoZXMgZGUgZMOpcMO0dHMgZHluYW1pcXVlbWVudFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXREZXBvc2l0TGF5ZXJzKG1hcCwgY29udHJvbCkge1xyXG4gICAgY29uc3QgcmVzb3VyY2VUeXBlcyA9IGF3YWl0IGxvYWRSZXNvdXJjZVR5cGVzKCk7XHJcblxyXG4gICAgLy8gQ3LDqWVyIHVuZSBjb3VjaGUgcG91ciBjaGFxdWUgdHlwZSBkZSByZXNzb3VyY2UgKHNldWxlbWVudCBzaSBjb2xvciBleGlzdGUpXHJcbiAgICByZXNvdXJjZVR5cGVzLmZvckVhY2gocnQgPT4ge1xyXG4gICAgICAgIGlmIChydC5jb2xvciAmJiBydC5jb2xvci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGRlcG9zaXRMYXllcnNbcnQuY29kZV0gPSBMLmxheWVyR3JvdXAoKTtcclxuICAgICAgICAgICAgY29udHJvbC5hZGRPdmVybGF5KGRlcG9zaXRMYXllcnNbcnQuY29kZV0sIGBSZXNzb3VyY2U6ICR7cnQubGFiZWx9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRGVwb3NpdHNGb3JDaHVuayhjaHVua0lkLCBtYXApIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9kZXBvc2l0cy8ke2NodW5rSWR9YCk7XHJcbiAgICAgICAgY29uc3QgZGVwb3NpdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShkZXBvc2l0cywgbWFwKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJFcnJldXIgY2hhcmdlbWVudCBkw6lww7R0czpcIiwgZXJyKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEZvcm1hdGUgbGVzIGNvw7t0cyBzb3VzIGZvcm1lIGRlIGNoYcOubmUgbGlzaWJsZVxyXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29zdHMgLSBFeDogW3tjb2RlOiBcImlyb25faW5nb3RcIiwgbGFiZWw6IFwiRmVyXCIsIHF1YW50aXR5OiAyNX1dIG91IHtpcm9uX2luZ290OiAyNX1cclxuICogQHJldHVybnMge3N0cmluZ30gLSBFeDogXCIyNSBGZXIsIDE1IENhb3V0Y2hvdWNcIlxyXG4gKi9cclxuZnVuY3Rpb24gZm9ybWF0Q29zdHMoY29zdHMpIHtcclxuICAgIGlmICghY29zdHMpIHJldHVybiAnTi9BJztcclxuXHJcbiAgICAvLyBOb3V2ZWF1IGZvcm1hdDogYXJyYXkgZCdvYmpldHMgYXZlYyBjb2RlLCBsYWJlbCwgcXVhbnRpdHlcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvc3RzKSkge1xyXG4gICAgICAgIHJldHVybiBjb3N0cy5tYXAoYyA9PiBgJHtjLnF1YW50aXR5fSAke2MubGFiZWx9YCkuam9pbignLCAnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBbmNpZW4gZm9ybWF0OiBvYmpldCB7Y29kZTogcXVhbnRpdHl9XHJcbiAgICBpZiAodHlwZW9mIGNvc3RzID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyhjb3N0cylcclxuICAgICAgICAgICAgLm1hcCgoW3Jlc291cmNlLCBhbW91bnRdKSA9PiBgJHthbW91bnR9ICR7cmVzb3VyY2V9YClcclxuICAgICAgICAgICAgLmpvaW4oJywgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICdOL0EnO1xyXG59XHJcblxyXG4vKipcclxuICogVsOpcmlmaWUgc2kgbGUgam91ZXVyIGEgYXNzZXogZGUgcmVzc291cmNlcyBwb3VyIHVuIGTDqXDDtHRcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrQ2FuQ2xhaW0oZGVwb3NpdCkge1xyXG4gICAgY29uc3QgY29zdHMgPSBkZXBvc2l0LmNvc3RzO1xyXG4gICAgaWYgKCFjb3N0cyB8fCBPYmplY3Qua2V5cyhjb3N0cykubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgLy8gUG91ciBjaGFxdWUgY2/Du3QsIHbDqXJpZmllciBzaSBsZSBqb3VldXIgYSBhc3NlelxyXG4gICAgZm9yIChjb25zdCBbcmVzb3VyY2UsIGFtb3VudF0gb2YgT2JqZWN0LmVudHJpZXMoY29zdHMpKSB7XHJcbiAgICAgICAgLy8gSWNpIG9uIHBvdXJyYWl0IGZhaXJlIHVuIGFwcGVsIEFQSSB2ZXJzIC9hcGkvcGxheWVyLXJlc291cmNlc1xyXG4gICAgICAgIC8vIG91IHV0aWxpc2VyIGxlcyBkb25uw6llcyBkw6lqw6AgY2hhcmfDqWVzXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wbGF5ZXItcmVzb3VyY2VzJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJSZXNvdXJjZXMgPSB7fTtcclxuICAgICAgICBkYXRhLnJlc291cmNlcy5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAgICAgICBwbGF5ZXJSZXNvdXJjZXNbci50eXBlXSA9IHIucXVhbnRpdHk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhcyA9IHBsYXllclJlc291cmNlc1tyZXNvdXJjZV0gPz8gMDtcclxuICAgICAgICBpZiAoaGFzIDwgYW1vdW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyw6llIHVuIHBvcHVwIHNpbXBsZSAoc3luY2hyb25lKVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlU2ltcGxlUG9wdXAoZGVwb3NpdCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVwb3NpdC1wb3B1cFwiPlxyXG4gICAgICAgICAgICA8aDM+JHtkZXBvc2l0LnR5cGUgfHwgJ0TDqXDDtHQgZGUgcmVzb3VyY2UnfTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hhcmdlIGxlcyBpbmZvcyBkZXMgZMOpcMO0dHMgZW4gYXJyacOocmUtcGxhblxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbG9hZERlcG9zaXRJbmZvQXN5bmMoZGVwb3NpdHNJRCwgbWFya2VyLCBkZXBvc2l0RGF0YSkge1xyXG4gICAgLy8gw4l2aXRlciBkZSByZWNoYXJnZXIgc2kgZMOpasOgIGNoYXJnw6lcclxuICAgIGlmIChwb3B1cENvbnRlbnRMb2FkZWQuaGFzKGRlcG9zaXRzSUQpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcG9wdXBDb250ZW50TG9hZGVkLmFkZChkZXBvc2l0c0lEKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIENoYXJnZXIgZGlyZWN0ZW1lbnQgbGUgY29udGVudSBkdSBwb3B1cFxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2RlcG9zaXQvJHtkZXBvc2l0c0lEfS9wb3B1cC1jb250ZW50YCk7XHJcblxyXG4gICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICAgIGRlYnVnV2FybignZGVwb3NpdHMnLCBgRXJyZXVyIEFQSSBwb3B1cC1jb250ZW50IChkZXBvc2l0ICR7ZGVwb3NpdHNJRH0pOmAsIHJlcy5zdGF0dXMpO1xyXG4gICAgICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGRlcG9zaXREYXRhKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXMudGV4dCgpO1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoaHRtbCk7XHJcbiAgICAgICAgZGVwb3NpdE1hcmtlcnMuc2V0KGRlcG9zaXRzSUQsIHsgbWFya2VyLCBkYXRhOiBkZXBvc2l0RGF0YSB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZHUgcG9wdXBcIiwgZSk7XHJcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChkZXBvc2l0RGF0YSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmVuZHUgZGVzIGTDqXDDtHRzIHN1ciBsYSBjYXJ0ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoZGVwb3NpdHMsIG1hcCkge1xyXG4gICAgZGVwb3NpdHMuZm9yRWFjaChkZXBvc2l0ID0+IHtcclxuICAgICAgICBpZiAoZGVwb3NpdE1hcmtlcnMuaGFzKGRlcG9zaXQuaWQpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBkZXBvc2l0LnJlc291cmNlX3R5cGU7XHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBkZXBvc2l0TGF5ZXJzW3R5cGVdO1xyXG5cclxuICAgICAgICBpZiAoIWxheWVyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gZ2V0UmVzb3VyY2VDb2xvcih0eXBlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gTC5jaXJjbGVNYXJrZXIoW2RlcG9zaXQubGF0aXR1ZGUsIGRlcG9zaXQubG9uZ2l0dWRlXSwge1xyXG4gICAgICAgICAgICByYWRpdXM6IDgsXHJcbiAgICAgICAgICAgIGZpbGxDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgICAgICAgICAgd2VpZ2h0OiAxLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMC44XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuYWRkVG8obGF5ZXIpXHJcbiAgICAgICAgLmJpbmRQb3B1cChjcmVhdGVTaW1wbGVQb3B1cChkZXBvc2l0KSk7XHJcblxyXG4gICAgICAgIC8vIENoYXJnZXIgbGUgY29udGVudSBkZSBsYSBwb3B1cCB1bmlxdWVtZW50IHF1YW5kIGVsbGUgZXN0IG91dmVydGVcclxuICAgICAgICBpZiAoZGVwb3NpdC5pZCkge1xyXG4gICAgICAgICAgICBtYXJrZXIub24oJ3BvcHVwb3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxvYWREZXBvc2l0SW5mb0FzeW5jKGRlcG9zaXQuaWQsIG1hcmtlciwgZGVwb3NpdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogUGVybWV0IGQnZXhwbG9pdGVyIHVuIGTDqXDDtHQgZGVwdWlzIGxhIHBvcHVwXHJcbiAqL1xyXG53aW5kb3cuY2xhaW1EZXBvc2l0ID0gYXN5bmMgZnVuY3Rpb24oaWQsIHJlc291cmNlVHlwZSkge1xyXG4gICAgLy8gVHJvdXZlciBsZSB0eXBlIGRlIGLDonRpbWVudCBhcHByb3ByacOpXHJcbiAgICBjb25zdCBidWlsZGluZ1R5cGVJZCA9IGF3YWl0IGZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZShyZXNvdXJjZVR5cGUpO1xyXG5cclxuICAgIGlmICghYnVpbGRpbmdUeXBlSWQpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoYEltcG9zc2libGUgZGUgdHJvdXZlciB1biBiw6J0aW1lbnQgcG91ciBleHRyYWlyZSBsZSAke3Jlc291cmNlVHlwZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb25zdHJ1aXJlIGRpcmVjdGVtZW50IGxlIGLDonRpbWVudCBzdXIgbGVzIGNvb3Jkb25uw6llcyBkdSBkw6lww7R0XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvYnVpbGQnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgbGF0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbG5nOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdHlwZV9pZDogYnVpbGRpbmdUeXBlSWQsXHJcbiAgICAgICAgICAgICAgICBkZXBvc2l0X2lkOiBpZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZVRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgbGV0IGRhdGE7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9IGNhdGNoIChwYXJzZUVycm9yKSB7XHJcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJSw6lwb25zZSBub24tSlNPTiByZcOndWU6XCIsIHJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlLDqXBvbnNlIGludmFsaWRlIGR1IHNlcnZldXJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgZGVidWdMb2coJ2RlcG9zaXRzJywgJ0TDqXDDtHQgZXhwbG9pdMOpIGF2ZWMgc3VjY8OocyAhIELDonRpbWVudCBjcsOpw6kuJyk7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJFcnJldXI6IFwiICsgKGRhdGEuZXJyb3IgfHwgXCJJbXBvc3NpYmxlIGQnZXhwbG9pdGVyIGNlIGTDqXDDtHRcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiRXJyZXVyIGxvcnMgZGUgbCdleHBsb2l0YXRpb25cIiwgZSk7XHJcbiAgICAgICAgYWxlcnQoXCJFcnJldXIgcsOpc2VhdSBsb3JzIGRlIGwnZXhwbG9pdGF0aW9uOiBcIiArIGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XG5cbmxldCBmb2dMYXllciA9IG51bGw7XG5sZXQgdmlzaW9uU291cmNlcyA9IFtdO1xubGV0IGZvZ01vZGUgPSAnZGlzYWJsZWQnO1xubGV0IG1hcEluc3RhbmNlID0gbnVsbDtcblxuY2xhc3MgRm9nT2ZXYXIge1xuICAgIGNvbnN0cnVjdG9yKG1hcCkge1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmluaXRDYW52YXMoKTtcbiAgICAgICAgdGhpcy52aXNpb25Tb3VyY2VzID0gW107XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXRDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS56SW5kZXggPSAnNTAwJztcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLm1hcC5nZXRDb250YWluZXIoKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBpZiAoIWN0eCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW52YXMgY29udGV4dCB1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGN0eDtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLm1hcC5vbignbW92ZSB6b29tIHJlc2l6ZSBtb3ZlZW5kIHpvb21lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIodGhpcy52aXNpb25Tb3VyY2VzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzaXplKCkge1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5tYXAuZ2V0U2l6ZSgpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHNpemUueDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gc2l6ZS55O1xuXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gYCR7c2l6ZS54fXB4YDtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZS55fXB4YDtcbiAgICB9XG5cbiAgICB1cGRhdGVTb3VyY2VzKHNvdXJjZXMpIHtcbiAgICAgICAgdGhpcy52aXNpb25Tb3VyY2VzID0gc291cmNlcztcbiAgICAgICAgdGhpcy5yZW5kZXIoc291cmNlcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHNvdXJjZXMpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMubWFwLmdldFNpemUoKTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBzaXplLngsIHNpemUueSk7XG5cbiAgICAgICAgLy8gQnJvdWlsbGFyZFxuICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuNzUpJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHNpemUueCwgc2l6ZS55KTtcblxuICAgICAgICAvLyBEw6ljb3VwZSBkZXMgem9uZXMgdmlzaWJsZXNcbiAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdXQnO1xuXG4gICAgICAgIGZvciAoY29uc3Qgc291cmNlIG9mIHNvdXJjZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNlbnRlciA9IEwubGF0TG5nKHNvdXJjZS5sYXQsIHNvdXJjZS5sbmcpO1xuXG4gICAgICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMubWFwLmxhdExuZ1RvQ29udGFpbmVyUG9pbnQoY2VudGVyKTtcblxuICAgICAgICAgICAgY29uc3QgZWRnZSA9IEwubGF0TG5nKHNvdXJjZS5sYXQsIHNvdXJjZS5sbmcgKyBzb3VyY2UucmFkaXVzKTtcblxuICAgICAgICAgICAgY29uc3QgcmFkaXVzUHggPSBwb2ludC5kaXN0YW5jZVRvKHRoaXMubWFwLmxhdExuZ1RvQ29udGFpbmVyUG9pbnQoZWRnZSkpO1xuXG4gICAgICAgICAgICBjb25zdCBncmFkaWVudCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChwb2ludC54LCBwb2ludC55LCAwLCBwb2ludC54LCBwb2ludC55LCByYWRpdXNQeCk7XG5cbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgwLDAsMCwxKScpO1xuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDAsMCwwLDApJyk7XG5cbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcblxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgY3R4LmFyYyhwb2ludC54LCBwb2ludC55LCByYWRpdXNQeCwgMCwgTWF0aC5QSSAqIDIpO1xuXG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgICAgICAvLyBEZWJ1Z1xuICAgICAgICAgICAgaWYgKGZvZ01vZGUgPT09ICdkZWJ1ZycpIHtcbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcblxuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHguYXJjKHBvaW50LngsIHBvaW50LnksIHJhZGl1c1B4LCAwLCBNYXRoLlBJICogMik7XG5cbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnbGltZSc7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdXQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfVxufVxuXG5sZXQgZm9nSW5zdGFuY2UgPSBudWxsO1xuXG4vKipcbiAqIEluaXRpYWxpc2UgbGUgYnJvdWlsbGFyZCBkZSBndWVycmVcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIC0gTW9kZSBkZSBicm91aWxsYXJkICgnZW5hYmxlZCcsICdkaXNhYmxlZCcsICdkZWJ1ZycpXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2VzIC0gU291cmNlcyBkZSB2aXNpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgLSBJbnN0YW5jZSBMZWFmbGV0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0Rm9nT2ZXYXIobW9kZSwgc291cmNlcywgbWFwKSB7XG4gICAgZm9nTW9kZSA9IG1vZGUgfHwgJ2Rpc2FibGVkJztcblxuICAgIGlmICghZm9nSW5zdGFuY2UgJiYgZm9nTW9kZSAhPT0gJ2Rpc2FibGVkJykge1xuICAgICAgICBmb2dJbnN0YW5jZSA9IG5ldyBGb2dPZldhcihtYXApO1xuICAgIH1cblxuICAgIGlmICghZm9nSW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChmb2dNb2RlID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgIGZvZ0luc3RhbmNlLmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9nSW5zdGFuY2UuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGZvZ0luc3RhbmNlLnVwZGF0ZVNvdXJjZXMoc291cmNlcyk7XG59XG5cbi8qKlxuICogVsOpcmlmaWUgc2kgdW4gcG9pbnQgZXN0IHZpc2libGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBsYXRcbiAqIEBwYXJhbSB7bnVtYmVyfSBsbmdcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQb2ludFZpc2libGUobGF0LCBsbmcpIHtcbiAgICBpZiAoZm9nTW9kZSA9PT0gJ2Rpc2FibGVkJyB8fCBmb2dNb2RlID09PSAnZGVidWcnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZXMgPSBmb2dJbnN0YW5jZT8udmlzaW9uU291cmNlcyB8fCBbXTtcbiAgICByZXR1cm4gc291cmNlcy5zb21lKHNvdXJjZSA9PiB7XG4gICAgICAgIGNvbnN0IGR4ID0gbGF0IC0gc291cmNlLmxhdDtcbiAgICAgICAgY29uc3QgZHkgPSBsbmcgLSBzb3VyY2UubG5nO1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZSA8PSBzb3VyY2UucmFkaXVzO1xuICAgIH0pO1xufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuXHJcbmltcG9ydCB7IGdyaWRMYXllciwgaW5pdEdyaWRMYXllciB9IGZyb20gJy4uL0xheWVycy9ncmlkTGF5ZXIuanMnO1xyXG5pbXBvcnQgeyBsb2FkVmlzaWJsZVJvYWRDaHVua3MgfSBmcm9tICcuL3JvYWRzL3JvYWRzLmpzJztcclxuaW1wb3J0IHsgcm9hZHNTdGF0ZSB9IGZyb20gJy4vcm9hZHMvcm9hZHNTdGF0ZS5qcyc7XHJcblxyXG5pbXBvcnQgeyBsb2FkQmFzZUZyb21TZXJ2ZXIsIGxvYWRPdGhlckJhc2UsIHNldEN1cnJlbnRQbGF5ZXJGYWN0aW9uIH0gZnJvbSAnLi4vYnVpbGRpbmdzL2Jhc2UuanMnO1xyXG5pbXBvcnQgeyBsb2FkQnVpbGRpbmdzRnJvbURhdGEsIHNldEN1cnJlbnRQbGF5ZXJJZCB9IGZyb20gJy4uL2J1aWxkaW5ncy9idWlsZGluZy5qcyc7XHJcblxyXG5pbXBvcnQgeyBpbml0RGVwb3NpdExheWVycywgZGVwb3NpdExheWVycyB9IGZyb20gJy4vZGVwb3NpdHMvZGVwb3NpdHMuanMnO1xyXG5pbXBvcnQgeyBpbml0Rm9nT2ZXYXIgfSBmcm9tICcuL2ZvZ09mV2FyLmpzJztcclxuXHJcbmltcG9ydCBtYXJrZXJJY29uIGZyb20gJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24ucG5nJztcclxuaW1wb3J0IG1hcmtlclNoYWRvdyBmcm9tICdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1zaGFkb3cucG5nJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuXHJcbkwuTWFya2VyLnByb3RvdHlwZS5vcHRpb25zLmljb24gPSBMLmljb24oe1xyXG4gICAgaWNvblVybDogbWFya2VySWNvbixcclxuICAgIHNoYWRvd1VybDogbWFya2VyU2hhZG93LFxyXG59KTtcclxuXHJcbmxldCBtYXBJbnN0YW5jZSA9IG51bGw7XHJcbmxldCBtb3ZlVGltZW91dCA9IG51bGw7XHJcbmxldCBpc0NodW5rTW9kZSA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRNYXAobGF0LCBsbmcpIHtcclxuXHJcbiAgICBtYXBJbnN0YW5jZSA9IEwubWFwKCdtYXAnKS5zZXRWaWV3KFtsYXQsIGxuZ10sIDcpO1xyXG5cclxuICAgIEwudGlsZUxheWVyKCdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsIHtcclxuICAgICAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyBPcGVuU3RyZWV0TWFwJ1xyXG4gICAgfSkuYWRkVG8obWFwSW5zdGFuY2UpO1xyXG5cclxuICAgIC8vIMOJdsOpbmVtZW50IHBlcnNvbm5hbGlzw6kgcG91ciBzaWduYWxlciBxdWUgbGEgY2FydGUgZXN0IHByw6p0ZVxyXG4gICAgbWFwSW5zdGFuY2UuZmlyZSgnbWFwUmVhZHknKTtcclxuXHJcbiAgICBjb25zdCBsYXllcnNDb250cm9sID0gTC5jb250cm9sLmxheWVycyhudWxsLCB7XHJcbiAgICAgICAgXCJDaHVuayBHcmlkXCI6IGdyaWRMYXllclxyXG4gICAgfSkuYWRkVG8obWFwSW5zdGFuY2UpO1xyXG5cclxuICAgIGF3YWl0IGluaXREZXBvc2l0TGF5ZXJzKG1hcEluc3RhbmNlLCBsYXllcnNDb250cm9sKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIENFTlRSQUwgQ0hVTksgQ09OVFJPTExFUlxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgbWFwSW5zdGFuY2Uub24oJ21vdmVlbmQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghaXNDaHVua01vZGUpIHJldHVybjtcclxuICAgICAgICBpZiAobWFwSW5zdGFuY2UuZ2V0Wm9vbSgpIDwgMTQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KG1vdmVUaW1lb3V0KTtcclxuXHJcbiAgICAgICAgbW92ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaW5pdEdyaWRMYXllcigpO1xyXG4gICAgICAgICAgICBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwSW5zdGFuY2Uub24oJ292ZXJsYXlhZGQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmxheWVyID09PSBncmlkTGF5ZXIpIHtcclxuICAgICAgICAgICAgZGVidWdMb2coXCJncmlkXCIsIFwiR3JpZCBPTlwiKTtcclxuXHJcbiAgICAgICAgICAgIGluaXRHcmlkTGF5ZXIoKTtcclxuICAgICAgICAgICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwSW5zdGFuY2Uub24oJ292ZXJsYXlyZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmxheWVyID09PSBncmlkTGF5ZXIpIHtcclxuICAgICAgICAgICAgZGVidWdMb2coXCJncmlkXCIsIFwiR3JpZCBPRkZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBFVkVOVFNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbWFwSW5zdGFuY2Uub24oJ3pvb21lbmQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHpvb20gPSBtYXBJbnN0YW5jZS5nZXRab29tKCk7XHJcblxyXG4gICAgICAgIGlmICh6b29tID49IDE0KSB7XHJcbiAgICAgICAgICAgIGVudGVyQ2h1bmtNb2RlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXhpdENodW5rTW9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNHcmlkTGF5ZXJBY3RpdmUoKSB7XHJcbiAgICByZXR1cm4gbWFwSW5zdGFuY2U/Lmhhc0xheWVyKGdyaWRMYXllcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXAoKSB7XHJcbiAgICByZXR1cm4gbWFwSW5zdGFuY2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbHlUbyhsYXQsIGxuZywgem9vbSA9IDEzKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIG1hcC5mbHlUbyhbbGF0LCBsbmddLCB6b29tLCB7XHJcbiAgICAgICAgYW5pbWF0ZTogdHJ1ZSxcclxuICAgICAgICBkdXJhdGlvbjogMS41XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFdPUkxEIExPQURFUiAoQ29uY2VudHJhdGV1ciBkJ2FwcGVscyBBUEkpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFdvcmxkKCkge1xyXG5cclxuICAgIGZldGNoKCcvYXBpL3dvcmxkLXN0YXRlJylcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQICR7cmVzLnN0YXR1c306ICR7cmVzLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgLy8gVsOpcmlmaWVyIHNpIGxhIHLDqXBvbnNlIGVzdCB2YWxpZGVcclxuICAgICAgICAgICAgaWYgKCFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlc3BvbnNlIGZvcm1hdCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFyZ2VyIGxlcyBiYXNlcyB2aWEgYmFzZS5qcyBEJ0FCT1JEIHBvdXIgY29ubmHDrnRyZSBsYSBmYWN0aW9uIGR1IGpvdWV1clxyXG4gICAgICAgICAgICBpZiAoZGF0YS5wbGF5ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFzQ2VudGVyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuaXNNZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGxheWVyRmFjdGlvbihwbGF5ZXIuZmFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRCYXNlRnJvbVNlcnZlcihwbGF5ZXIubGF0LCBwbGF5ZXIubG5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzQ2VudGVyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZseVRvKHBsYXllci5sYXQsIHBsYXllci5sbmcsIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NlbnRlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZE90aGVyQmFzZShwbGF5ZXIubGF0LCBwbGF5ZXIubG5nLCBwbGF5ZXIucHNldWRvLCBwbGF5ZXIuZmFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRMOpZmluaXIgbCdJRCBkdSBqb3VldXIgYWN0aWZcclxuICAgICAgICAgICAgaWYgKGRhdGEuY3VycmVudFBsYXllcklkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGxheWVySWQoZGF0YS5jdXJyZW50UGxheWVySWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFyZ2VyIGxlcyBiw6J0aW1lbnRzIGFwcsOocyBhdm9pciBkw6lmaW5pIGxhIGZhY3Rpb24gZHUgam91ZXVyXHJcbiAgICAgICAgICAgIGxvYWRCdWlsZGluZ3NGcm9tRGF0YShkYXRhLmJ1aWxkaW5ncyk7XHJcblxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlciBsZSBGb2cgb2YgV2FyXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmZvZ01vZGUgJiYgZGF0YS52aXNpb25Tb3VyY2VzKSB7XHJcbiAgICAgICAgICAgICAgICBpbml0Rm9nT2ZXYXIoZGF0YS5mb2dNb2RlLCBkYXRhLnZpc2lvblNvdXJjZXMsIG1hcEluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoJ21hcCcsIFwiRXJyZXVyIGxvYWQgd29ybGRcIiwgZXJyKTtcclxuICAgICAgICAgICAgLy8gTmUgcGFzIHJlZGlyaWdlciBhdXRvbWF0aXF1ZW1lbnQsIGxhaXNzZXogbGUgc3lzdMOobWUgZGUgbG9naW4gZ8OpcmVyIGxhIHJlZGlyZWN0aW9uXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVudGVyQ2h1bmtNb2RlKCkge1xyXG4gICAgaWYgKGlzQ2h1bmtNb2RlKSByZXR1cm47XHJcblxyXG4gICAgaXNDaHVua01vZGUgPSB0cnVlO1xyXG5cclxuICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwiRU5URVIgQ0hVTksgTU9ERVwiKTtcclxuXHJcbiAgICBpbml0R3JpZExheWVyKCk7XHJcbiAgICBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXhpdENodW5rTW9kZSgpIHtcclxuICAgIGlmICghaXNDaHVua01vZGUpIHJldHVybjtcclxuXHJcbiAgICBpc0NodW5rTW9kZSA9IGZhbHNlO1xyXG5cclxuICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwiRVhJVCBDSFVOSyBNT0RFXCIpO1xyXG5cclxuICAgIGlmIChtYXBJbnN0YW5jZS5oYXNMYXllcihncmlkTGF5ZXIpKSB7XHJcbiAgICAgICAgbWFwSW5zdGFuY2UucmVtb3ZlTGF5ZXIoZ3JpZExheWVyKTtcclxuICAgIH1cclxufSIsImNvbnN0IGNodW5rQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbmNvbnN0IENBQ0hFX1RUTCA9IDM2MDAwMDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FjaGVkQ2h1bmsoaWQpIHtcclxuICAgIGNvbnN0IGNhY2hlZCA9IGNodW5rQ2FjaGUuZ2V0KGlkKTtcclxuXHJcbiAgICBpZiAoIWNhY2hlZCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChEYXRlLm5vdygpIC0gY2FjaGVkLnRzID4gQ0FDSEVfVFRMKSB7XHJcbiAgICAgICAgY2h1bmtDYWNoZS5kZWxldGUoaWQpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYWNoZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDYWNoZWRDaHVuayhpZCwgZGF0YSkge1xyXG4gICAgY2h1bmtDYWNoZS5zZXQoaWQsIHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIHRzOiBEYXRlLm5vdygpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRhdGVDaHVua0NhY2hlKGlkKSB7XHJcbiAgICBjaHVua0NhY2hlLmRlbGV0ZShpZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNodW5rQ2FjaGUoKSB7XHJcbiAgICBjaHVua0NhY2hlLmNsZWFyKCk7XHJcbn0iLCJpbXBvcnQgeyByb2Fkc1N0YXRlIH0gZnJvbSAnLi9yb2Fkc1N0YXRlLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2cgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcbmltcG9ydCB7IGludmFsaWRhdGVDaHVua0NhY2hlIH0gZnJvbSAnLi9jaHVua0NhY2hlLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkYXRlQ2h1bmsoaWQpIHtcclxuICAgIGRlYnVnTG9nKFwiY2FjaGVcIiwgXCLwn6e5IGludmFsaWRhdGUgY2h1bms6XCIsIGlkKTtcclxuXHJcbiAgICBkZWxldGUgcm9hZHNTdGF0ZS5jaHVua3NbaWRdO1xyXG4gICAgaW52YWxpZGF0ZUNodW5rQ2FjaGUoaWQpO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuXHJcbi8qKlxyXG4gKiBUcm91dmUgbGUgcG9pbnQgbGUgcGx1cyBwcm9jaGUgc3VyIHRvdXRlcyBsZXMgcm91dGVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZENsb3Nlc3RQb2ludE9uUm9hZChsYXRsbmcsIHJvYWRzKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBsZXQgYmVzdFBvaW50ID0gbnVsbDtcclxuICAgIGxldCBiZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZHMpKSByZXR1cm4geyBwb2ludDogbnVsbCwgZGlzdGFuY2U6IEluZmluaXR5IH07XHJcblxyXG4gICAgcm9hZHMuZm9yRWFjaChyb2FkID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWQucG9pbnRzKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChyb2FkLnBvaW50cy5sZW5ndGggPCAyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9hZC5wb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhUmF3ID0gcm9hZC5wb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGJSYXcgPSByb2FkLnBvaW50c1tpICsgMV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFSYXcgfHwgIWJSYXcpIHtcclxuICAgICAgICAgICAgICAgIGRlYnVnV2FybihcInJvYWRzXCIsIFwiQlJPS0VOIFJPQUQgU0VHTUVOVDpcIiwgcm9hZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhUmF3Lmxlbmd0aCA8IDIgfHwgYlJhdy5sZW5ndGggPCAyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBMLmxhdExuZyhhUmF3WzBdLCBhUmF3WzFdKTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IEwubGF0TG5nKGJSYXdbMF0sIGJSYXdbMV0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdGVkID0gcHJvamVjdFBvaW50T25TZWdtZW50KGxhdGxuZywgYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBtYXAuZGlzdGFuY2UobGF0bG5nLCBwcm9qZWN0ZWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3QgPCBiZXN0RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0YW5jZSA9IGRpc3Q7XHJcbiAgICAgICAgICAgICAgICBiZXN0UG9pbnQgPSBwcm9qZWN0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBvaW50OiBiZXN0UG9pbnQsXHJcbiAgICAgICAgZGlzdGFuY2U6IGJlc3REaXN0YW5jZVxyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyb3V2ZSBsZSBzZWdtZW50IGxlIHBsdXMgcHJvY2hlIChwb3VyIGhpZ2hsaWdodCB2aXN1ZWwpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZENsb3Nlc3RTZWdtZW50KGxhdGxuZywgcm9hZHMpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGxldCBiZXN0U2VnbWVudCA9IG51bGw7XHJcbiAgICBsZXQgYmVzdERpc3RhbmNlID0gSW5maW5pdHk7XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWRzKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcm9hZHMuZm9yRWFjaChyb2FkID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWQucG9pbnRzKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvYWQucG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYVJhdyA9IHJvYWQucG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiUmF3ID0gcm9hZC5wb2ludHNbaSArIDFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFhUmF3IHx8ICFiUmF3KSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKGFSYXcubGVuZ3RoIDwgMiB8fCBiUmF3Lmxlbmd0aCA8IDIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYSA9IEwubGF0TG5nKGFSYXdbMF0sIGFSYXdbMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gTC5sYXRMbmcoYlJhd1swXSwgYlJhd1sxXSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtaWQgPSBMLmxhdExuZyhcclxuICAgICAgICAgICAgICAgIChhLmxhdCArIGIubGF0KSAvIDIsXHJcbiAgICAgICAgICAgICAgICAoYS5sbmcgKyBiLmxuZykgLyAyXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gbWFwLmRpc3RhbmNlKGxhdGxuZywgbWlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0IDwgYmVzdERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0RGlzdGFuY2UgPSBkaXN0O1xyXG4gICAgICAgICAgICAgICAgYmVzdFNlZ21lbnQgPSBbYSwgYl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYmVzdFNlZ21lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9qZWN0aW9uIGQndW4gcG9pbnQgc3VyIHVuIHNlZ21lbnQgKEEtQilcclxuICogbWF0aCBzdGFibGUgcG91ciBzbmFwIHJvdXRlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RQb2ludE9uU2VnbWVudChwLCBhLCBiKSB7XHJcblxyXG4gICAgY29uc3QgQSA9IFthLmxhdCwgYS5sbmddO1xyXG4gICAgY29uc3QgQiA9IFtiLmxhdCwgYi5sbmddO1xyXG4gICAgY29uc3QgUCA9IFtwLmxhdCwgcC5sbmddO1xyXG5cclxuICAgIGNvbnN0IEFCID0gW0JbMF0gLSBBWzBdLCBCWzFdIC0gQVsxXV07XHJcbiAgICBjb25zdCBBUCA9IFtQWzBdIC0gQVswXSwgUFsxXSAtIEFbMV1dO1xyXG5cclxuICAgIGNvbnN0IGFiMiA9IEFCWzBdICogQUJbMF0gKyBBQlsxXSAqIEFCWzFdO1xyXG5cclxuICAgIGlmIChhYjIgPT09IDApIHJldHVybiBhO1xyXG5cclxuICAgIGxldCB0ID0gKEFQWzBdICogQUJbMF0gKyBBUFsxXSAqIEFCWzFdKSAvIGFiMjtcclxuXHJcbiAgICB0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdCkpO1xyXG5cclxuICAgIHJldHVybiBMLmxhdExuZyhcclxuICAgICAgICBBWzBdICsgQUJbMF0gKiB0LFxyXG4gICAgICAgIEFbMV0gKyBBQlsxXSAqIHRcclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXN0YW5jZSBwb2ludCAtPiBzZWdtZW50ICh1dGlsZSB2YWxpZGF0aW9uIGZ1dHVyZSlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZVRvU2VnbWVudChwLCBhLCBiKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0ZWQgPSBwcm9qZWN0UG9pbnRPblNlZ21lbnQocCwgYSwgYik7XHJcbiAgICByZXR1cm4gbWFwLmRpc3RhbmNlKHAsIHByb2plY3RlZCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBzaW1wbGUgZGVidWcgcm9hZHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z1JvYWRzKHJvYWRzKSB7XHJcbiAgICBkZWJ1Z0xvZyhcInJvYWRzXCIsIFwiUk9BRFMgREVCVUc6XCIsIHJvYWRzLmxlbmd0aCwgcm9hZHMpO1xyXG59IiwiaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwLmpzJztcclxuaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4uLy4uL3V0aWxzL2NodW5rLmpzJztcclxuaW1wb3J0IHsgc2V0Q2h1bmtDb2xvciB9IGZyb20gJy4uLy4uL0xheWVycy9ncmlkTGF5ZXIuanMnO1xyXG5pbXBvcnQgeyBpbnZhbGlkYXRlQ2h1bmsgfSBmcm9tICcuL2ludmFsaWRhdGVDaHVuay5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcbmltcG9ydCB7IHJvYWRzU3RhdGUgfSBmcm9tICcuL3JvYWRzU3RhdGUuanMnO1xyXG5pbXBvcnQgeyByZW5kZXJEZXBvc2l0c0Zyb21EYXRhIH0gZnJvbSAnLi4vZGVwb3NpdHMvZGVwb3NpdHMuanMnO1xyXG5pbXBvcnQgeyBnZXRDYWNoZWRDaHVuaywgc2V0Q2FjaGVkQ2h1bmssIGludmFsaWRhdGVDaHVua0NhY2hlIH0gZnJvbSAnLi9jaHVua0NhY2hlLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENIVU5LIElEXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGdldENodW5rSWQobGF0LCBsbmcpIHtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGxhdCAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IobG5nIC8gQ0hVTktfU0laRSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJnZXRDaHVua0lkXCIsIGxhdCwgbG5nLCB4LCB5KTtcclxuXHJcbiAgICByZXR1cm4gYCR7eH1fJHt5fWA7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIE1BSU4gTE9BRCBWSVNJQkxFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwIHx8IG1hcC5nZXRab29tKCkgPCAxNCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGJvdW5kcyAgICAgICAgPSBtYXAuZ2V0Qm91bmRzKCk7XHJcbiAgICBjb25zdCB2aXNpYmxlQ2h1bmtzID0gZ2V0VmlzaWJsZUNodW5rcyhib3VuZHMpO1xyXG4gICAgY29uc3QgY2h1bmtzVG9Mb2FkICA9IHZpc2libGVDaHVua3MuZmlsdGVyKGNodW5rSWQgPT4gIXJvYWRzU3RhdGUubG9hZGVkQ2h1bmtzLmhhcyhjaHVua0lkKSk7XHJcblxyXG4gICAgY29uc3QgZmluYWxDaHVua3NUb0xvYWQgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgY2h1bmtzVG9Mb2FkKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGdldENhY2hlZENodW5rKGNodW5rSWQpO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAgIGRhdGEuaGFzUm9hZHMgPyAnbG9hZGVkJyA6ICdlbXB0eScsXHJcbiAgICAgICAgICAgICAgICByb2FkczogICAgZGF0YS5yb2FkcyxcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogZGF0YS5idWlsZGluZ3MsXHJcbiAgICAgICAgICAgICAgICBkZXBvc2l0czogZGF0YS5kZXBvc2l0cyxcclxuICAgICAgICAgICAgICAgIGhhc1JvYWRzOiBkYXRhLmhhc1JvYWRzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJvYWRzU3RhdGUubG9hZGVkQ2h1bmtzLmFkZChjaHVua0lkKTtcclxuICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCBkYXRhLmhhc1JvYWRzID8gJ2JsdWUnIDogJyM0NDQnKTtcclxuICAgICAgICAgICAgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShkYXRhLmRlcG9zaXRzIHx8IFtdLCBtYXApO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxDaHVua3NUb0xvYWQucHVzaChjaHVua0lkKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgZmluYWxDaHVua3NUb0xvYWQpIHtcclxuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHsgc3RhdHVzOiAnbG9hZGluZycsIHJvYWRzOiBbXSwgYnVpbGRpbmdzOiBbXSwgZGVwb3NpdHM6IFtdIH07XHJcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnb3JhbmdlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpbmFsQ2h1bmtzVG9Mb2FkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJlZnJlc2hDaHVua0NvbG9ycyh2aXNpYmxlQ2h1bmtzKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBbcm9hZHNSZXNwb25zZSwgYnVpbGRpbmdzUmVzcG9uc2UsIGRlcG9zaXRzUmVzcG9uc2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9jaHVua3MvYnVsaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogZmluYWxDaHVua3NUb0xvYWQgfSlcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2J1aWxkaW5ncy92aXNpYmxlJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2h1bmtzOiBmaW5hbENodW5rc1RvTG9hZCB9KVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvZGVwb3NpdHMvYnVsaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogZmluYWxDaHVua3NUb0xvYWQgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgaWYgKCFyb2Fkc1Jlc3BvbnNlLm9rIHx8ICFidWlsZGluZ3NSZXNwb25zZS5vayB8fCAhZGVwb3NpdHNSZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBUEkgZXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByb2Fkc0RhdGEgICAgID0gYXdhaXQgcm9hZHNSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgYnVpbGRpbmdzRGF0YSA9IGF3YWl0IGJ1aWxkaW5nc1Jlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBkZXBvc2l0c0RhdGEgID0gYXdhaXQgZGVwb3NpdHNSZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBmaW5hbENodW5rc1RvTG9hZCkge1xyXG4gICAgICAgICAgICBjb25zdCBjaHVua0RhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICByb2FkczogICAgIHJvYWRzRGF0YVtjaHVua0lkXT8ucm9hZHMgICAgIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBidWlsZGluZ3NEYXRhW2NodW5rSWRdPy5idWlsZGluZ3MgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBkZXBvc2l0czogIGRlcG9zaXRzRGF0YVtjaHVua0lkXSB8fCBbXVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFzUm9hZHMgPSBjaHVua0RhdGEucm9hZHMubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBoYXNSb2FkcyA/ICdsb2FkZWQnIDogJ2VtcHR5JyxcclxuICAgICAgICAgICAgICAgIC4uLmNodW5rRGF0YSxcclxuICAgICAgICAgICAgICAgIGhhc1JvYWRzXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5hZGQoY2h1bmtJZCk7XHJcbiAgICAgICAgICAgIHNldENhY2hlZENodW5rKGNodW5rSWQsIHsgLi4uY2h1bmtEYXRhLCBoYXNSb2FkcyB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgaGFzUm9hZHMgPyAnYmx1ZScgOiAnIzQ0NCcpO1xyXG4gICAgICAgICAgICByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGNodW5rRGF0YS5kZXBvc2l0cywgbWFwKTtcclxuXHJcbiAgICAgICAgICAgIGRlYnVnTG9nKFwicm9hZHNcIiwgYENodW5rICR7Y2h1bmtJZH0gY2hhcmfDqSAoJHtjaHVua0RhdGEucm9hZHMubGVuZ3RofSByb3V0ZXMsICR7Y2h1bmtEYXRhLmRlcG9zaXRzLmxlbmd0aH0gZMOpcMO0dHMpYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcihcInJvYWRzXCIsIFwiRXJyZXVyIGNoYXJnZW1lbnQgY2h1bmtzIGJ1bGs6XCIsIGVycm9yKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgZmluYWxDaHVua3NUb0xvYWQpIHtcclxuICAgICAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7IHN0YXR1czogJ2Vycm9yJywgcm9hZHM6IFtdLCBidWlsZGluZ3M6IFtdLCBkZXBvc2l0czogW10gfTtcclxuICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAncmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hDaHVua0NvbG9ycyh2aXNpYmxlQ2h1bmtzKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUkVGUkVTSCBDSFVOS1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaENodW5rKGxhdCwgbG5nKSB7XHJcbiAgICBjb25zdCBjaHVua0lkID0gZ2V0Q2h1bmtJZChsYXQsIGxuZyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJyZWZyZXNoQ2h1bmtcIiwgbGF0LCBsbmcsIGNodW5rSWQpO1xyXG5cclxuICAgIGludmFsaWRhdGVDaHVuayhjaHVua0lkKTtcclxuICAgIGludmFsaWRhdGVDaHVua0NhY2hlKGNodW5rSWQpO1xyXG5cclxuICAgIHJvYWRzU3RhdGUubG9hZGVkQ2h1bmtzLmRlbGV0ZShjaHVua0lkKTtcclxuXHJcbiAgICBhd2FpdCBmZXRjaFNpbmdsZUNodW5rKGNodW5rSWQpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGRVRDSCBTSU5HTEUgQ0hVTktcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hTaW5nbGVDaHVuayhjaHVua0lkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0geyBzdGF0dXM6ICdsb2FkaW5nJywgcm9hZHM6IFtdLCBidWlsZGluZ3M6IFtdLCBkZXBvc2l0czogW10gfTtcclxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTtcclxuXHJcbiAgICAgICAgY29uc3QgW3JvYWRzUmVzLCBidWlsZGluZ3NSZXMsIGRlcG9zaXRzUmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvY2h1bmtzL2J1bGsnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IFtjaHVua0lkXSB9KVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvYnVpbGRpbmdzL3Zpc2libGUnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IFtjaHVua0lkXSB9KVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvZGVwb3NpdHMvYnVsaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogW2NodW5rSWRdIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGlmICghcm9hZHNSZXMub2sgfHwgIWJ1aWxkaW5nc1Jlcy5vayB8fCAhZGVwb3NpdHNSZXMub2spIHRocm93IG5ldyBFcnJvcihcIkFQSSBlcnJvclwiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9hZHNEYXRhICAgICA9IGF3YWl0IHJvYWRzUmVzLmpzb24oKTtcclxuICAgICAgICBjb25zdCBidWlsZGluZ3NEYXRhID0gYXdhaXQgYnVpbGRpbmdzUmVzLmpzb24oKTtcclxuICAgICAgICBjb25zdCBkZXBvc2l0c0RhdGEgID0gYXdhaXQgZGVwb3NpdHNSZXMuanNvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBjaHVua0RhdGEgPSB7XHJcbiAgICAgICAgICAgIHJvYWRzOiAgICAgcm9hZHNEYXRhW2NodW5rSWRdPy5yb2FkcyAgICAgfHwgW10sXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogYnVpbGRpbmdzRGF0YVtjaHVua0lkXT8uYnVpbGRpbmdzIHx8IFtdLFxyXG4gICAgICAgICAgICBkZXBvc2l0czogIGRlcG9zaXRzRGF0YVtjaHVua0lkXSB8fCBbXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc1JvYWRzID0gY2h1bmtEYXRhLnJvYWRzLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0geyBzdGF0dXM6IGhhc1JvYWRzID8gJ2xvYWRlZCcgOiAnZW1wdHknLCAuLi5jaHVua0RhdGEsIGhhc1JvYWRzIH07XHJcbiAgICAgICAgc2V0Q2FjaGVkQ2h1bmsoY2h1bmtJZCwgeyAuLi5jaHVua0RhdGEsIGhhc1JvYWRzIH0pO1xyXG5cclxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsIGhhc1JvYWRzID8gJ2JsdWUnIDogJyM0NDQnKTtcclxuICAgICAgICByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGNodW5rRGF0YS5kZXBvc2l0cywgZ2V0TWFwKCkpO1xyXG5cclxuICAgICAgICBkZWJ1Z0xvZyhcInJvYWRzXCIsIFwiW0NIVU5LIFJFRlJFU0hdXCIsIGNodW5rSWQsIGNodW5rRGF0YS5yb2Fkcy5sZW5ndGgpO1xyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHsgc3RhdHVzOiAnZXJyb3InLCByb2FkczogW10sIGJ1aWxkaW5nczogW10sIGRlcG9zaXRzOiBbXSB9O1xyXG4gICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ3JlZCcpO1xyXG4gICAgICAgIGRlYnVnRXJyb3IoXCJyb2Fkc1wiLCBcIltDSFVOSyBSRUZSRVNIIEVSUk9SXVwiLCBjaHVua0lkLCBlKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUkVGUkVTSCBDSFVOSyBDT0xPUlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gcmVmcmVzaENodW5rQ29sb3JzKHZpc2libGVDaHVua3MpIHtcclxuICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiB2aXNpYmxlQ2h1bmtzKSB7XHJcbiAgICAgICAgY29uc3QgY2h1bmsgPSByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXTtcclxuICAgICAgICBpZiAoIWNodW5rKSB7IHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ29yYW5nZScpOyBjb250aW51ZTsgfVxyXG5cclxuICAgICAgICBjb25zdCBjb2xvcnMgPSB7IGxvYWRlZDogJ2JsdWUnLCBlbXB0eTogJyM0NDQnLCBsb2FkaW5nOiAnb3JhbmdlJywgZXJyb3I6ICdyZWQnIH07XHJcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCBjb2xvcnNbY2h1bmsuc3RhdHVzXSA/PyAneWVsbG93Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZJU0lCTEUgQ0hVTktTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGdldFZpc2libGVDaHVua3MoYm91bmRzKSB7XHJcbiAgICBjb25zdCBtaW5YID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0U291dGgoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWF4WCA9IE1hdGguZmxvb3IoYm91bmRzLmdldE5vcnRoKCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1pblkgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRXZXN0KCkgIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtYXhZID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0RWFzdCgpICAvIENIVU5LX1NJWkUpO1xyXG5cclxuICAgIGNvbnN0IGNodW5rcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgeCA9IG1pblg7IHggPD0gbWF4WDsgeCsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgeSsrKSB7XHJcbiAgICAgICAgICAgIGNodW5rcy5wdXNoKGAke3h9XyR7eX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2h1bmtzO1xyXG59IiwiZXhwb3J0IGNvbnN0IHJvYWRzU3RhdGUgPSB7XHJcbiAgICBjaHVua3M6IHt9LFxyXG4gICAgbG9hZGVkQ2h1bmtzOiBuZXcgU2V0KCksXHJcbiAgICByb2Fkc1JlYWR5OiBmYWxzZSxcclxuICAgIGRyYXduUm9hZHM6IFtdLFxyXG4gICAgdmlzaWJsZUNodW5rczogbmV3IFNldCgpLFxyXG4gICAgXHJcbiAgICByb2FkTGF5ZXJzOiB7fSxcclxuXHJcbiAgICBidWlsZGluZ0xheWVyczoge31cclxufTtcclxuXHJcbmxldCBjYWNoZWRSb2FkcyA9IFtdO1xyXG5sZXQgY2FjaGVEaXJ0eSA9IHRydWU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFya1JvYWRDYWNoZURpcnR5KCkge1xyXG4gICAgY2FjaGVEaXJ0eSA9IHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxMb2FkZWRSb2FkcygpIHtcclxuXHJcbiAgICBpZiAoIXJvYWRzU3RhdGU/LmNodW5rcykgcmV0dXJuIFtdO1xyXG5cclxuICAgIGlmICghY2FjaGVEaXJ0eSkgcmV0dXJuIGNhY2hlZFJvYWRzO1xyXG5cclxuICAgIGNhY2hlZFJvYWRzID0gT2JqZWN0LnZhbHVlcyhyb2Fkc1N0YXRlLmNodW5rcylcclxuICAgICAgICAuZmlsdGVyKGMgPT4gYz8uc3RhdHVzID09PSAnbG9hZGVkJyAmJiBBcnJheS5pc0FycmF5KGMucm9hZHMpKVxyXG4gICAgICAgIC5mbGF0TWFwKGMgPT4gYy5yb2Fkcyk7XHJcblxyXG4gICAgY2FjaGVEaXJ0eSA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBjYWNoZWRSb2FkcztcclxufSIsImV4cG9ydCBmdW5jdGlvbiBpbml0Tm90aWZpY2F0aW9ucygpXHJcbntcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignaHRteDphZnRlclN3YXAnLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWV2ZW50XScpO1xyXG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gSlNPTi5wYXJzZShlbC5kYXRhc2V0LmV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdnYW1lOmV2ZW50JywgeyBkZXRhaWw6IGV2ZW50IH0pKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgcGFyc2luZyBldmVudDonLCBlcnIpO1xyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgZWwucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbihtZXNzYWdlLCB0eXBlID0gJ2luZm8nKSB7XHJcblxyXG4gICAgY29uc3Qgbm90aWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5vdGlmLmNsYXNzTmFtZSA9IGBub3RpZiBub3RpZi0ke3R5cGV9YDtcclxuICAgIG5vdGlmLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vdGlmKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBub3RpZi5yZW1vdmUoKTtcclxuICAgIH0sIDMwMDApO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFBsYXllckZhY3Rpb24gfSBmcm9tICcuLi9idWlsZGluZ3MvYmFzZS5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTVEFURVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBiYXNlQ2lyY2xlcyA9IG5ldyBNYXAoKTsgLy8gYmFzZUlkIC0+IGNpcmNsZSBsYXllclxyXG5jb25zdCByb2FkU2VnbWVudHMgPSBuZXcgTWFwKCk7IC8vIHJvYWRJZCAtPiBwb2x5bGluZSBsYXllclxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRkFDVElPTiBDT0xPUlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgRkFDVElPTl9DT0xPUlMgPSB7XHJcbiAgICAnZGVmYXVsdCc6ICcjMjdhZTYwJywgIC8vIHZlcnQgcGFyIGTDqWZhdXRcclxuICAgICdlbXBpcmUnOiAnI2U3NGMzYycsICAgLy8gcm91Z2VcclxuICAgICdjZW5kcmVzJzogJyMzNDk4ZGInLCAgICAvLyBibGV1XHJcbiAgICAnbm9tYWRlcyc6ICcjZjM5YzEyJywgIC8vIG9yYW5nZVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0RmFjdGlvbkNvbG9yKGZhY3Rpb24pIHtcclxuICAgIHJldHVybiBGQUNUSU9OX0NPTE9SU1tmYWN0aW9uPy50b0xvd2VyQ2FzZSgpXSB8fCBGQUNUSU9OX0NPTE9SU1snZGVmYXVsdCddO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBCQVNFIENJUkNMRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd0Jhc2VDaXJjbGUoYmFzZUlkLCBsYXQsIGxuZywgZmFjdGlvbiwgaXNQbGF5ZXJCYXNlID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJGYWN0aW9uID0gZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKTtcclxuICAgIGNvbnN0IGNvbG9yID0gaXNQbGF5ZXJCYXNlXHJcbiAgICAgICAgPyAnIzI3YWU2MCcgIC8vIHZlcnQgcG91ciBub3RyZSBiYXNlXHJcbiAgICAgICAgOiBnZXRGYWN0aW9uQ29sb3IoZmFjdGlvbik7XHJcblxyXG4gICAgLy8gU3VwcHJpbWVyIGwnYW5jaWVuIGNlcmNsZSBzaSBleGlzdGVcclxuICAgIGlmIChiYXNlQ2lyY2xlcy5oYXMoYmFzZUlkKSkge1xyXG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihiYXNlQ2lyY2xlcy5nZXQoYmFzZUlkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2lyY2xlID0gTC5jaXJjbGUoW2xhdCwgbG5nXSwge1xyXG4gICAgICAgIHJhZGl1czogNTAwLFxyXG4gICAgICAgIGNvbG9yOiBjb2xvcixcclxuICAgICAgICB3ZWlnaHQ6IDIsXHJcbiAgICAgICAgZmlsbE9wYWNpdHk6IDBcclxuICAgIH0pLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgYmFzZUNpcmNsZXMuc2V0KGJhc2VJZCwgY2lyY2xlKTtcclxuICAgIHJldHVybiBjaXJjbGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCYXNlQ2lyY2xlKGJhc2VJZCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChiYXNlQ2lyY2xlcy5oYXMoYmFzZUlkKSkge1xyXG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihiYXNlQ2lyY2xlcy5nZXQoYmFzZUlkKSk7XHJcbiAgICAgICAgYmFzZUNpcmNsZXMuZGVsZXRlKGJhc2VJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFsbEJhc2VDaXJjbGVzKCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGJhc2VDaXJjbGVzLmZvckVhY2goY2lyY2xlID0+IG1hcC5yZW1vdmVMYXllcihjaXJjbGUpKTtcclxuICAgIGJhc2VDaXJjbGVzLmNsZWFyKCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJPQUQgU0VHTUVOVFNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdSb2FkU2VnbWVudChyb2FkSWQsIGNvb3JkcywgZmFjdGlvbikge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCB8fCAhY29vcmRzIHx8IGNvb3Jkcy5sZW5ndGggPCAyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcGxheWVyRmFjdGlvbiA9IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XHJcbiAgICBjb25zdCBjb2xvciA9IGZhY3Rpb24gPT09IHBsYXllckZhY3Rpb25cclxuICAgICAgICA/ICcjMjdhZTYwJyAgLy8gdmVydCBwb3VyIG5vcyByb3V0ZXNcclxuICAgICAgICA6IGdldEZhY3Rpb25Db2xvcihmYWN0aW9uKTtcclxuXHJcbiAgICAvLyBTdXBwcmltZXIgbCdhbmNpZW4gc2VnbWVudCBzaSBleGlzdGVcclxuICAgIGlmIChyb2FkU2VnbWVudHMuaGFzKHJvYWRJZCkpIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIocm9hZFNlZ21lbnRzLmdldChyb2FkSWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb2x5bGluZSA9IEwucG9seWxpbmUoY29vcmRzLCB7XHJcbiAgICAgICAgY29sb3I6IGNvbG9yLFxyXG4gICAgICAgIHdlaWdodDogMyxcclxuICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgICAgZGFzaEFycmF5OiAnOCw4J1xyXG4gICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICByb2FkU2VnbWVudHMuc2V0KHJvYWRJZCwgcG9seWxpbmUpO1xyXG4gICAgcmV0dXJuIHBvbHlsaW5lO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUm9hZFNlZ21lbnQocm9hZElkKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHJvYWRTZWdtZW50cy5oYXMocm9hZElkKSkge1xyXG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihyb2FkU2VnbWVudHMuZ2V0KHJvYWRJZCkpO1xyXG4gICAgICAgIHJvYWRTZWdtZW50cy5kZWxldGUocm9hZElkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQWxsUm9hZFNlZ21lbnRzKCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIHJvYWRTZWdtZW50cy5mb3JFYWNoKHBvbHlsaW5lID0+IG1hcC5yZW1vdmVMYXllcihwb2x5bGluZSkpO1xyXG4gICAgcm9hZFNlZ21lbnRzLmNsZWFyKCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVQREFURSBGVU5DVElPTlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUJhc2VDaXJjbGVzKGJhc2VzKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcGxheWVyRmFjdGlvbiA9IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XHJcblxyXG4gICAgYmFzZXMuZm9yRWFjaChiYXNlID0+IHtcclxuICAgICAgICBjb25zdCBpc1BsYXllckJhc2UgPSBiYXNlLmZhY3Rpb24gPT09IHBsYXllckZhY3Rpb247XHJcbiAgICAgICAgZHJhd0Jhc2VDaXJjbGUoYmFzZS5pZCwgYmFzZS5sYXQsIGJhc2UubG5nLCBiYXNlLmZhY3Rpb24sIGlzUGxheWVyQmFzZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVJvYWRTZWdtZW50cyhyb2Fkcykge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckZhY3Rpb24gPSBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xyXG5cclxuICAgIHJvYWRzLmZvckVhY2gocm9hZCA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNQbGF5ZXJSb2FkID0gcm9hZC5mYWN0aW9uID09PSBwbGF5ZXJGYWN0aW9uO1xyXG4gICAgICAgIGRyYXdSb2FkU2VnbWVudChyb2FkLmlkLCByb2FkLmNvb3Jkcywgcm9hZC5mYWN0aW9uKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVVElMSVRZXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRSb2FkU2VnbWVudENvbG9yKHJvYWRJZCwgY29sb3IpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBpZiAocm9hZFNlZ21lbnRzLmhhcyhyb2FkSWQpKSB7XHJcbiAgICAgICAgcm9hZFNlZ21lbnRzLmdldChyb2FkSWQpLnNldFN0eWxlKHsgY29sb3IgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vbm90aWZpY2F0aW9ucy5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQQVRIRklORElORyBERUJVRyAtIENMSUNLIFRPIEdFVCBDT09SRElOQVRFU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWRtaW5Db29yZHMobGF0LCBsbmcpIHtcclxuICAgIGlmIChsYXQgPT09IHVuZGVmaW5lZCB8fCBsbmcgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdCA9IGAke2xhdC50b0ZpeGVkKDYpfSwke2xuZy50b0ZpeGVkKDYpfWA7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChmb3JtYXQpO1xyXG4gICAgc2hvd05vdGlmaWNhdGlvbihcIkZvcm1hdCBjb2xsYWJsZSBhZG1pbiBjb3Bpw6kgOiBcIiArIGZvcm1hdCwgJ3N1Y2Nlc3MnKTtcclxufSIsImltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5pbXBvcnQgeyByZWZyZXNoQ2h1bmsgfSBmcm9tICcuLi9tYXAvcm9hZHMvcm9hZHMuanMnO1xyXG5pbXBvcnQgeyBpbnZhbGlkYXRlQ2h1bmsgfSBmcm9tICcuLi9tYXAvcm9hZHMvaW52YWxpZGF0ZUNodW5rLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcbmltcG9ydCB7IHNuYXBUb0NodW5rIH0gZnJvbSAnLi9zbmFwLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSFVOS19TSVpFID0gMC4wMTtcclxuZXhwb3J0IGNvbnN0IENIVU5LX1JBRElVUyA9IDE7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVxdWVzdEFwaVJvYWRzQW5kQ2h1bmtzQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICdjcm9zc2hhaXInO1xyXG4gICAgYWxlcnQoXCJDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgZmFpcmUgdW5lIHJlcXVldGUgYXBpIHBvdXIgYWpvdXRlciB1biBjaHVuayBkZSByb3V0ZXMgKDAuMDHCsCB4IDAuMDHCsCkuXCIpO1xyXG5cclxuICAgIG1hcC5vbmNlKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IGUubGF0bG5nO1xyXG5cclxuICAgICAgICBjb25zdCBzbmFwcGVkID0gc25hcFRvQ2h1bmsobGF0LCBsbmcpO1xyXG5cclxuICAgICAgICBkZWJ1Z0xvZyhcIm5ldHdvcmtcIiwgXCLwn5OhIGFkZGluZyByb2FkcyBjaHVuazpcIiwgc25hcHBlZC5jaHVua0lkKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvYWRkLXJvYWRzLWNodW5rJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBsYXQ6IHNuYXBwZWQubGF0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxuZzogc25hcHBlZC5sbmdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVmcmVzaENodW5rKHNuYXBwZWQubGF0LCBzbmFwcGVkLmxuZyk7XHJcblxyXG4gICAgICAgICAgICBkZWJ1Z0xvZyhcImNodW5rc1wiLCBcIvCflIQgY2h1bmsgcmVmcmVzaGVkOlwiLCBzbmFwcGVkLmNodW5rSWQpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcihcIm5ldHdvcmtcIiwgXCJmYWlsZWQgdG8gYWRkIHJvYWRzIGNodW5rXCIsIGVycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJyc7XHJcbiAgICB9KTtcclxufSk7IiwiaW1wb3J0IHsgZmx5VG8gfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R1BTKGRlZmF1bHRMYXQsIGRlZmF1bHRMbmcpIHtcclxuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgICAgICBsZXQgZ3BzRm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oXHJcbiAgICAgICAgICAgIChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ3BzRm91bmQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGZseVRvKFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGltZW91dDogNTAwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZ3BzRm91bmQpIHtcclxuICAgICAgICAgICAgICAgIGZseVRvKGRlZmF1bHRMYXQsIGRlZmF1bHRMbmcsIDcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTUwMCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDSFVOS19TSVpFIH0gZnJvbSAnLi9jaHVuay5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc25hcFRvQ2h1bmsobGF0LCBsbmcpIHtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGxhdCAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IobG5nIC8gQ0hVTktfU0laRSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsYXQ6IHggKiBDSFVOS19TSVpFLFxyXG4gICAgICAgIGxuZzogeSAqIENIVU5LX1NJWkUsXHJcbiAgICAgICAgY2h1bmtJZDogYCR7eH1fJHt5fWBcclxuICAgIH07XHJcbn0iLCJsZXQgdGltZXJJbnRlcnZhbCA9IG51bGw7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJ1aWxkaW5nVGltZXJzKCkge1xyXG5cclxuICAgIGlmICh0aW1lckludGVydmFsKSByZXR1cm47IC8vIMOpdml0ZSBkb3VibG9uc1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVycygpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsaXZlcnktdGltZXItd3JhcHBlcicpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzY2hlZHVsZWRBdCA9IGVsLmRhdGFzZXQuc2NoZWR1bGVkQXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyRWwgPSBlbC5xdWVyeVNlbGVjdG9yKCcuZGVsaXZlcnktdGltZXInKTtcclxuICAgICAgICAgICAgaWYgKCF0aW1lckVsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNjaGVkdWxlZEF0KSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lckVsLnRleHRDb250ZW50ID0gJ0F1Y3VuZSBsaXZyYWlzb24gcHLDqXZ1ZSc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjaGVkdWxlZCA9IG5ldyBEYXRlKHNjaGVkdWxlZEF0KS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNOYU4oc2NoZWR1bGVkKSkge1xyXG4gICAgICAgICAgICAgICAgdGltZXJFbC50ZXh0Q29udGVudCA9ICdEYXRlIGludmFsaWRlJztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlmZlNlYyA9IE1hdGguZmxvb3IoKHNjaGVkdWxlZCAtIG5vdykgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaWZmU2VjID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWlucyA9IE1hdGguZmxvb3IoZGlmZlNlYyAvIDYwKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlY3MgPSBkaWZmU2VjICUgNjA7XHJcbiAgICAgICAgICAgICAgICB0aW1lckVsLmlubmVySFRNTCA9IGBQcm9jaGFpbiBkw6lwYXJ0IGRhbnMgOiA8c3Ryb25nPiR7bWluc31taW4gJHtzZWNzfXM8L3N0cm9uZz5gO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IE1hdGguYWJzKGRpZmZTZWMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWlucyA9IE1hdGguZmxvb3IoZWxhcHNlZCAvIDYwKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlY3MgPSBlbGFwc2VkICUgNjA7XHJcbiAgICAgICAgICAgICAgICB0aW1lckVsLmlubmVySFRNTCA9IGBDb252b2kgZW4gcm91dGUgZGVwdWlzIDogPHN0cm9uZz4ke21pbnN9bWluICR7c2Vjc31zPC9zdHJvbmc+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRpbWVycygpO1xyXG4gICAgdGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKHVwZGF0ZVRpbWVycywgMTAwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGlzb1N0cmluZykge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGlzb1N0cmluZykudG9Mb2NhbGVTdHJpbmcoJ2ZyLUZSJywge1xyXG4gICAgICAgIHRpbWVab25lOiAnRXVyb3BlL1BhcmlzJyxcclxuICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICB9KTtcclxufSIsImltcG9ydCBMIGZyb20gJ2xlYWZsZXQnO1xyXG5pbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyc7XHJcblxyXG5kZWxldGUgTC5JY29uLkRlZmF1bHQucHJvdG90eXBlLl9nZXRJY29uVXJsO1xyXG5MLkljb24uRGVmYXVsdC5tZXJnZU9wdGlvbnMoe1xyXG4gICAgaWNvblJldGluYVVybDogcmVxdWlyZSgnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi0yeC5wbmcnKSxcclxuICAgIGljb25Vcmw6IHJlcXVpcmUoJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24ucG5nJyksXHJcbiAgICBzaGFkb3dVcmw6IHJlcXVpcmUoJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMOyIsImltcG9ydCB7IFRZUEVfTUFQIH0gZnJvbSAnLi90eXBlTWFwLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBERUJVRyA9IHtcclxuICAgIGVuYWJsZWQ6IHdpbmRvdy5BUFBfREVCVUcgPz8gZmFsc2UsXHJcblxyXG4gICAgbWVyY3VyZTogdHJ1ZSxcclxuICAgIGludmVudG9yeTogdHJ1ZSxcclxuICAgIGRlbGl2ZXJ5OiB0cnVlLFxyXG4gICAgYnVpbGRpbmdzOiB0cnVlLFxyXG5cclxuICAgIGNodW5rczogdHJ1ZSxcclxuICAgIG5ldHdvcms6IHRydWUsXHJcbiAgICBjYWNoZTogdHJ1ZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNhbkxvZyh0eXBlKSB7XHJcbiAgICBpZiAoIURFQlVHLmVuYWJsZWQpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qga2V5ID0gVFlQRV9NQVA/Llt0eXBlXSB8fCB0eXBlO1xyXG5cclxuICAgIHJldHVybiBERUJVR1trZXldICE9PSBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnTG9nKHR5cGUsIC4uLmFyZ3MpIHtcclxuICAgIGlmICghY2FuTG9nKHR5cGUpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGBbJHtUWVBFX01BUD8uW3R5cGVdIHx8IHR5cGV9XWAsXHJcbiAgICAgICAgLi4uYXJnc1xyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnV2Fybih0eXBlLCAuLi5hcmdzKSB7XHJcbiAgICBpZiAoIWNhbkxvZyh0eXBlKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYFske1RZUEVfTUFQPy5bdHlwZV0gfHwgdHlwZX1dYCxcclxuICAgICAgICAuLi5hcmdzXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdFcnJvcih0eXBlLCAuLi5hcmdzKSB7XHJcbiAgICBpZiAoIWNhbkxvZyh0eXBlKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgIGBbJHtUWVBFX01BUD8uW3R5cGVdIHx8IHR5cGV9XWAsXHJcbiAgICAgICAgLi4uYXJnc1xyXG4gICAgKTtcclxufSIsImV4cG9ydCBjb25zdCBUWVBFX01BUCA9IHtcclxuICAgIG1lcmN1cmU6ICdNRVJDVVJFJyxcclxuICAgIGludmVudG9yeTogJ0lOVkVOVE9SWScsXHJcbiAgICBkZWxpdmVyeTogJ0RFTElWRVJZJyxcclxuICAgIGJ1aWxkaW5nczogJ0JVSUxESU5HUycsXHJcbiAgICBjaHVua3M6ICdDSFVOS1MnLFxyXG4gICAgbmV0d29yazogJ05FVFdPUksnLFxyXG4gICAgY2FjaGU6ICdDQUNIRScsXHJcbn07Il0sIm5hbWVzIjpbIkwiLCJkZWJ1Z0xvZyIsIkNIVU5LX1NJWkUiLCJnZXRNYXAiLCJpc0dyaWRMYXllckFjdGl2ZSIsImdyaWRMYXllciIsImxheWVyR3JvdXAiLCJ2aXNpYmxlQ2h1bmtzIiwiTWFwIiwiaW5pdEdyaWRMYXllciIsIm1hcCIsInpvb20iLCJnZXRab29tIiwiYm91bmRzIiwiZ2V0Qm91bmRzIiwibWluTGF0IiwiTWF0aCIsImZsb29yIiwiZ2V0U291dGgiLCJtYXhMYXQiLCJjZWlsIiwiZ2V0Tm9ydGgiLCJtaW5MbmciLCJnZXRXZXN0IiwibWF4TG5nIiwiZ2V0RWFzdCIsIm5ld1Zpc2libGUiLCJTZXQiLCJpIiwiX2xvb3AiLCJpZCIsImNvbmNhdCIsImoiLCJhZGQiLCJoYXMiLCJsYXQiLCJsbmciLCJyZWN0IiwicmVjdGFuZ2xlIiwiY29sb3IiLCJ3ZWlnaHQiLCJmaWxsT3BhY2l0eSIsIm9uIiwic2V0U3R5bGUiLCJhZGRMYXllciIsInNldCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiZW50cmllcyIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiX3N0ZXAkdmFsdWUiLCJfc2xpY2VkVG9BcnJheSIsInZhbHVlIiwicmVtb3ZlTGF5ZXIiLCJlcnIiLCJlIiwiZiIsInNpemUiLCJzZXRDaHVua0NvbG9yIiwiZ2V0IiwiYnVpbGRSZXF1ZXN0IiwidHlwZUlkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlX2lkIiwiZ2V0QnVpbGRpbmdzIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXRCdWlsZGluZ0Nvc3RzIiwiYnVpbGRpbmdUeXBlSWQiLCJ1cGdyYWRlQnVpbGRpbmciLCJidWlsZGluZ0lkIiwiZ2V0VXBncmFkZUluZm8iLCJmbHlUbyIsInJvYWRzU3RhdGUiLCJnZXRBbGxMb2FkZWRSb2FkcyIsImdldEJ1aWxkaW5nSW1hZ2UiLCJzYWZlTG9hZENodW5rIiwibG9hZFZpc2libGVSb2FkQ2h1bmtzIiwiZmluZENsb3Nlc3RQb2ludE9uUm9hZCIsImZpbmRDbG9zZXN0U2VnbWVudCIsInNob3dOb3RpZmljYXRpb24iLCJnZXRBZG1pbkNvb3JkcyIsImRlYnVnV2FybiIsImRlYnVnRXJyb3IiLCJkcmF3QmFzZUNpcmNsZSIsInJlbW92ZUJhc2VDaXJjbGUiLCJyZWZyZXNoU2lkZWJhciIsImJhc2VNYXJrZXIiLCJiYXNlQ2lyY2xlIiwiYmFzZVBvc2l0aW9uIiwiYmFzZUNyZWF0ZWQiLCJwbGFjaW5nQmFzZSIsInByZXZpZXdNYXJrZXIiLCJwcmV2aWV3Q2lyY2xlIiwicHJldmlld1NuYXBMYXRMbmciLCJwcmV2aWV3TGluZSIsImhpZ2hsaWdodGVkU2VnbWVudCIsImN1cnJlbnRQbGF5ZXJGYWN0aW9uIiwic2V0Q3VycmVudFBsYXllckZhY3Rpb24iLCJmYWN0aW9uIiwidG9Mb3dlckNhc2UiLCJnZXRDdXJyZW50UGxheWVyRmFjdGlvbiIsImluaXRCYXNlVUkiLCJiYXNlQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2RlIiwiZGF0YXNldCIsImFsZXJ0IiwiZ2V0Q29udGFpbmVyIiwic3R5bGUiLCJjdXJzb3IiLCJfcHJldmlld1NuYXBMYXRMbmciLCJpc0Jhc2VQbGFjZW1lbnRWYWxpZCIsImNsZWFudXBQcmV2aWV3IiwiY3JlYXRlQmFzZSIsInJvYWRzIiwibGVuZ3RoIiwicmVzdWx0IiwibGF0bG5nIiwicG9pbnQiLCJpc1ZhbGlkIiwiY2lyY2xlIiwicmFkaXVzIiwiYWRkVG8iLCJtYXJrZXIiLCJwb2x5bGluZSIsIm9wYWNpdHkiLCJkYXNoQXJyYXkiLCJzZWdtZW50IiwidXBkYXRlQmFzZURpc3BsYXkiLCJ1cGRhdGVPdGhlckJhc2VzIiwiZW5hYmxlQWRtaW5Db29yZGluYXRlUGlja2VyIiwid2luZG93Iiwib3RoZXJCYXNlcyIsImV2ZXJ5IiwiYmFzZSIsImRpc3QiLCJkaXN0YW5jZSIsImJhc2VUeXBlSWQiLCJvayIsIkVycm9yIiwiZXJyb3IiLCJfcmVmIiwicmVtb3ZlQmFzZSIsIm1lc3NhZ2UiLCJsb2FkT3RoZXJCYXNlIiwicHNldWRvIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJpc1BsYXllckJhc2UiLCJpY29uIiwiY3JlYXRlQmFzZUljb24iLCJiaW5kUG9wdXAiLCJwdXNoIiwiZm9yRWFjaCIsImhhc0xheWVyIiwic2V0SWNvbiIsImxvYWRCYXNlRnJvbVNlcnZlciIsImljb25VcmwiLCJpY29uU2l6ZSIsImljb25BbmNob3IiLCJwb3B1cEFuY2hvciIsInQiLCJyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInNlbGVjdGVkQnVpbGRpbmdUeXBlIiwicHJldmlld0J1aWxkaW5nTWFya2VyIiwiaW5pdEJ1aWxkTW9kZSIsIl9jYWxsZWUiLCJidG4iLCJfY29udGV4dCIsInRhcmdldCIsImNsb3Nlc3QiLCJzZWxlY3RCdWlsZGluZ1R5cGUiLCJfeCIsIm9uTWFwQ2xpY2siLCJvbk1hcE1vdXNlTW92ZSIsIl94MiIsIl94MyIsIl9zZWxlY3RCdWlsZGluZ1R5cGUiLCJfY2FsbGVlMiIsImJ1dHRvbiIsImRhdGEiLCJfdCIsIl9jb250ZXh0MiIsImNsZWFyQnVpbGRpbmdTZWxlY3Rpb24iLCJjbGFzc0xpc3QiLCJuYW1lIiwiY29zdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlIiwiX3g0IiwiX29uTWFwQ2xpY2siLCJfY2FsbGVlMyIsInJlc3BvbnNlIiwiX3QyIiwiX2NvbnRleHQzIiwic2V0TGF0TG5nIiwiYWN0aXZhdGVCdWlsZE1vZGUiLCJxdWVyeVNlbGVjdG9yIiwiY2xpY2siLCJkZWFjdGl2YXRlQnVpbGRNb2RlIiwiaXNCdWlsZE1vZGVBY3RpdmUiLCJfcmVmcmVzaFNpZGViYXIiLCJfY2FsbGVlNCIsImh0bWwiLCJwYXJzZXIiLCJkb2MiLCJuZXdTaWRlYmFyIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwiX3QzIiwiX2NvbnRleHQ0IiwidGV4dCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInJlcGxhY2VXaXRoIiwiYnVpbGRpbmdNYXJrZXJzIiwicG9wdXBDb250ZW50TG9hZGVkIiwibG9hZEJ1aWxkaW5nc0Zyb21EYXRhIiwiYnVpbGRpbmdzIiwiQXJyYXkiLCJpc0FycmF5IiwiYiIsIl9iJHR5cGUiLCJjb2RlIiwidHlwZSIsImJ1aWxkaW5nRmFjdGlvbiIsImNyZWF0ZUJ1aWxkaW5nSWNvbiIsImJ1aWxkaW5nRGF0YSIsImxldmVsIiwib3duZXJJZCIsImlzTWluZSIsIkJvb2xlYW4iLCJwcm9kdWN0aW9uIiwicmVzb3VyY2VfdHlwZSIsImNyZWF0ZVNpbXBsZVBvcHVwIiwiaGFuZGxlUG9wdXBPcGVuIiwiaXNPd25CdWlsZGluZyIsInNldFBvcHVwQ29udGVudCIsImxvYWRVcGdyYWRlSW5mb0FzeW5jIiwiYnVpbGRpbmciLCJfbG9hZFVwZ3JhZGVJbmZvQXN5bmMiLCJzdGF0dXMiLCJsb2FkQnVpbGRpbmdzIiwiYnVpbGRpbmdDb2RlIiwidW5kZWZpbmVkIiwiYWN0dWFsRmFjdGlvbiIsImJ1aWxkaW5nU2x1ZyIsInJlcGxhY2UiLCJmYWN0aW9uU2x1ZyIsImVudHJ5IiwibmV3TGV2ZWwiLCJnZXRCdWlsZGluZ1R5cGVDb3N0cyIsIl94NSIsIl9nZXRCdWlsZGluZ1R5cGVDb3N0cyIsImNhbkJ1aWxkQnVpbGRpbmciLCJfeDYiLCJfY2FuQnVpbGRCdWlsZGluZyIsInJlc291cmNlcyIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwicmVzb3VyY2UiLCJhbW91bnQiLCJxdWFudGl0eSIsInJlZnJlc2hCdWlsZGluZ1BvcHVwIiwiX3g3IiwiX3JlZnJlc2hCdWlsZGluZ1BvcHVwIiwiX2NhbGxlZTUiLCJfY29udGV4dDUiLCJpc1BvcHVwT3BlbiIsImRyYXdSb2FkU2VnbWVudCIsImZvcm1hdERhdGUiLCJhY3RpdmVEZWxpdmVyaWVzIiwiZGVsaXZlcnlMYXllciIsImFuaW1hdGlvbkZyYW1lIiwicGVuZGluZ0V2ZW50cyIsInRydWNrSWNvbiIsImRpdkljb24iLCJjbGFzc05hbWUiLCJpbml0RGVsaXZlcnlFdmVudHMiLCJpbml0RGVsaXZlcnlMYXllcnMiLCJsb2FkRGVsaXZlcmllcyIsIl9kYXRhJGZhY3Rpb24iLCJkZXRhaWwiLCJoYW5kbGVEZWxpdmVyeUV2ZW50IiwiZGVsaXZlcnlJZCIsInByb2dyZXNzIiwid2F5cG9pbnRzIiwicmVzb3VyY2VDb2RlIiwicmVzb3VyY2VMYWJlbCIsImVzdGltYXRlZFRpbWUiLCJkdXJhdGlvbiIsInNjaGVkdWxlZEF0IiwiX21hcCIsInN0YXJ0QW5pbWF0aW9uIiwicHJvY2Vzc0RlbGl2ZXJ5RXZlbnQiLCJfbG9hZERlbGl2ZXJpZXMiLCJkZWxpdmVyaWVzIiwiZGVsaXZlcnlEYXRhIiwicmVtb3ZlRGVsaXZlcnkiLCJ1cHNlcnREZWxpdmVyeSIsImtleSIsImNvbnNvbGUiLCJ3YXJuIiwicGFyc2UiLCJfdW51c2VkIiwibGF0bG5ncyIsIndwIiwiX2RhdGEkcHJvZ3Jlc3MiLCJfZGF0YSRzY2hlZHVsZWRBdCIsIl9kYXRhJHByb2dyZXNzMiIsImRlbGl2ZXJ5IiwibGFzdFNlcnZlclByb2dyZXNzIiwibGFzdFNlcnZlclRpbWUiLCJEYXRlIiwibm93IiwiX2RhdGEkcXVhbnRpdHkiLCJfZGF0YSRyZXNvdXJjZUxhYmVsIiwiX2RhdGEkcHJvZ3Jlc3MzIiwiX2RhdGEkcHJvZ3Jlc3M0IiwiX2RhdGEkZXN0aW1hdGVkVGltZSIsIl9kYXRhJHNjaGVkdWxlZEF0MiIsIl9kYXRhJHByb2dyZXNzNSIsInNjaGVkdWxlZFRpbWUiLCJhbmltYXRlIiwiaW50ZXJwb2xhdGVkUHJvZ3Jlc3MiLCJzdGFydFRpbWUiLCJnZXRUaW1lIiwiZWxhcHNlZCIsIm1pbiIsIm1heCIsImVsYXBzZWRTaW5jZVNlcnZlciIsInByb2dyZXNzUGVyU2Vjb25kIiwicG9zIiwiaW50ZXJwb2xhdGVBbG9uZ1JvdXRlIiwiZWwiLCJ0ZXh0Q29udGVudCIsInJvdW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidG90YWxEaXN0Iiwic2VnbWVudHMiLCJoYXZlcnNpbmUiLCJSIiwiZExhdCIsIlBJIiwiZExuZyIsIngiLCJwb3ciLCJzaW4iLCJjb3MiLCJhdGFuMiIsInNxcnQiLCJpbml0TWFwIiwibG9hZFdvcmxkIiwiaW5pdEdQUyIsImluaXROb3RpZmljYXRpb25zIiwiaW5pdEJ1aWxkaW5nVGltZXJzIiwiaW5pdEludmVudG9yeUV2ZW50cyIsImVuYWJsZUxlYWZsZXREZWJ1ZyIsImN1cnJlbnRVc2VyIiwiZGVidWciLCJvcmlnaW5hbE1hcmtlciIsIm9yaWdpbmFsQ2lyY2xlIiwib3JpZ2luYWxQb2x5bGluZSIsIl9sZW4iLCJhcmdzIiwiX2tleSIsIl9sZW4yIiwiX2tleTIiLCJfbGVuMyIsIl9rZXkzIiwiaGFuZGxlSW52ZW50b3J5VXBkYXRlIiwiX2RhdGEkcmVzb3VyY2VzIiwidXBkYXRlTmF2YmFyUmVzb3VyY2VzIiwicG9wdXAiLCJwYXJzZUludCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIml0ZW0iLCJxdHlFbGVtZW50IiwiY2hlY2tVcGdyYWRlUmVxdWlyZW1lbnRzIiwicmVxdWlyZWRFbGVtZW50IiwicmVxdWlyZWQiLCJnZXRBdHRyaWJ1dGUiLCJ0b2dnbGUiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJfdHlwZW9mIiwiZGVwb3NpdE1hcmtlcnMiLCJidWlsZGluZ1R5cGVzQ2FjaGUiLCJyZXNvdXJjZVR5cGVzQ2FjaGUiLCJsb2FkQnVpbGRpbmdUeXBlcyIsIl9sb2FkQnVpbGRpbmdUeXBlcyIsImxvYWRSZXNvdXJjZVR5cGVzIiwiX2xvYWRSZXNvdXJjZVR5cGVzIiwiX3Q0IiwiREVGQVVMVF9DT0xPUlMiLCJnZXRSZXNvdXJjZUNvbG9yIiwiX3Jlc291cmNlVHlwZXNDYWNoZSR0IiwiX3Jlc291cmNlVHlwZXNDYWNoZSR0MiIsImZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZSIsIl9maW5kQnVpbGRpbmdUeXBlRm9yUmVzb3VyY2UiLCJyZXNvdXJjZVR5cGUiLCJidWlsZGluZ1R5cGVzIiwiYnVpbGRpbmdUeXBlIiwiZmluZCIsImJ0IiwiX2J0JHJlc291cmNlVHlwZSIsInByb2R1Y3Rpb25fcmF0ZSIsImRlcG9zaXRMYXllcnMiLCJpbml0RGVwb3NpdExheWVycyIsIl9pbml0RGVwb3NpdExheWVycyIsImNvbnRyb2wiLCJyZXNvdXJjZVR5cGVzIiwicnQiLCJhZGRPdmVybGF5IiwibGFiZWwiLCJsb2FkRGVwb3NpdHNGb3JDaHVuayIsIl9sb2FkRGVwb3NpdHNGb3JDaHVuayIsIl9jYWxsZWU2IiwiY2h1bmtJZCIsImRlcG9zaXRzIiwiX3Q1IiwiX2NvbnRleHQ2IiwicmVuZGVyRGVwb3NpdHNGcm9tRGF0YSIsImZvcm1hdENvc3RzIiwiam9pbiIsIl9yZWYyIiwiY2hlY2tDYW5DbGFpbSIsIl9jaGVja0NhbkNsYWltIiwiX2NhbGxlZTciLCJkZXBvc2l0IiwiX3JldCIsIl9jb250ZXh0OCIsImtleXMiLCJfcGxheWVyUmVzb3VyY2VzJHJlc28iLCJwbGF5ZXJSZXNvdXJjZXMiLCJfY29udGV4dDciLCJfcmVnZW5lcmF0b3JWYWx1ZXMiLCJsb2FkRGVwb3NpdEluZm9Bc3luYyIsIl94OCIsIl94OSIsIl9sb2FkRGVwb3NpdEluZm9Bc3luYyIsIl9jYWxsZWU4IiwiZGVwb3NpdHNJRCIsImRlcG9zaXREYXRhIiwiX3Q2IiwiX2NvbnRleHQ5IiwibGF5ZXIiLCJjaXJjbGVNYXJrZXIiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImZpbGxDb2xvciIsImNsYWltRGVwb3NpdCIsIl9yZWYzIiwicmVzcG9uc2VUZXh0IiwiZGVwb3NpdF9pZCIsImxvY2F0aW9uIiwicmVsb2FkIiwiX3gwIiwiX3gxIiwiZm9nTGF5ZXIiLCJ2aXNpb25Tb3VyY2VzIiwiZm9nTW9kZSIsIm1hcEluc3RhbmNlIiwiRm9nT2ZXYXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiaW5pdENhbnZhcyIsInJlc2l6ZSIsImJpbmRFdmVudHMiLCJfY3JlYXRlQ2xhc3MiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJwb2ludGVyRXZlbnRzIiwiekluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImdldENvbnRleHQiLCJfdGhpcyIsInJlbmRlciIsImdldFNpemUiLCJ1cGRhdGVTb3VyY2VzIiwic291cmNlcyIsImNsZWFyUmVjdCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic291cmNlIiwiY2VudGVyIiwibGF0TG5nIiwibGF0TG5nVG9Db250YWluZXJQb2ludCIsImVkZ2UiLCJyYWRpdXNQeCIsImRpc3RhbmNlVG8iLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZm9nSW5zdGFuY2UiLCJpbml0Rm9nT2ZXYXIiLCJkaXNwbGF5IiwiaXNQb2ludFZpc2libGUiLCJfZm9nSW5zdGFuY2UiLCJzb21lIiwiZHgiLCJkeSIsInNldEN1cnJlbnRQbGF5ZXJJZCIsIm1hcmtlckljb24iLCJtYXJrZXJTaGFkb3ciLCJNYXJrZXIiLCJvcHRpb25zIiwic2hhZG93VXJsIiwibW92ZVRpbWVvdXQiLCJpc0NodW5rTW9kZSIsIl9pbml0TWFwIiwibGF5ZXJzQ29udHJvbCIsInNldFZpZXciLCJ0aWxlTGF5ZXIiLCJhdHRyaWJ1dGlvbiIsImZpcmUiLCJsYXllcnMiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZW50ZXJDaHVua01vZGUiLCJleGl0Q2h1bmtNb2RlIiwiX21hcEluc3RhbmNlIiwic3RhdHVzVGV4dCIsInBsYXllcnMiLCJoYXNDZW50ZXJlZCIsInBsYXllciIsImlzTWUiLCJjdXJyZW50UGxheWVySWQiLCJjaHVua0NhY2hlIiwiQ0FDSEVfVFRMIiwiZ2V0Q2FjaGVkQ2h1bmsiLCJjYWNoZWQiLCJ0cyIsInNldENhY2hlZENodW5rIiwiX29iamVjdFNwcmVhZCIsImludmFsaWRhdGVDaHVua0NhY2hlIiwiY2xlYXJDaHVua0NhY2hlIiwiY2xlYXIiLCJpbnZhbGlkYXRlQ2h1bmsiLCJjaHVua3MiLCJiZXN0UG9pbnQiLCJiZXN0RGlzdGFuY2UiLCJJbmZpbml0eSIsInJvYWQiLCJwb2ludHMiLCJhUmF3IiwiYlJhdyIsInByb2plY3RlZCIsInByb2plY3RQb2ludE9uU2VnbWVudCIsImJlc3RTZWdtZW50IiwibWlkIiwiQSIsIkIiLCJQIiwiQUIiLCJBUCIsImFiMiIsImRpc3RhbmNlVG9TZWdtZW50IiwiZGVidWdSb2FkcyIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJfbiIsIkYiLCJnZXRDaHVua0lkIiwibG9nIiwiX2xvYWRWaXNpYmxlUm9hZENodW5rcyIsImNodW5rc1RvTG9hZCIsImZpbmFsQ2h1bmtzVG9Mb2FkIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9jaHVua0lkMyIsIl9maW5hbENodW5rc1RvTG9hZCIsIl95aWVsZCRQcm9taXNlJGFsbCIsIl95aWVsZCRQcm9taXNlJGFsbDIiLCJyb2Fkc1Jlc3BvbnNlIiwiYnVpbGRpbmdzUmVzcG9uc2UiLCJkZXBvc2l0c1Jlc3BvbnNlIiwicm9hZHNEYXRhIiwiYnVpbGRpbmdzRGF0YSIsImRlcG9zaXRzRGF0YSIsIl9pMiIsIl9maW5hbENodW5rc1RvTG9hZDIiLCJfcm9hZHNEYXRhJF9jaHVua0lkIiwiX2J1aWxkaW5nc0RhdGEkX2NodW5rIiwiX2NodW5rSWQiLCJjaHVua0RhdGEiLCJoYXNSb2FkcyIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJfY2h1bmtJZDIiLCJnZXRWaXNpYmxlQ2h1bmtzIiwibG9hZGVkQ2h1bmtzIiwicmVmcmVzaENodW5rQ29sb3JzIiwiYWxsIiwicmVmcmVzaENodW5rIiwiX3JlZnJlc2hDaHVuayIsImZldGNoU2luZ2xlQ2h1bmsiLCJfZmV0Y2hTaW5nbGVDaHVuayIsIl9yb2Fkc0RhdGEkY2h1bmtJZCIsIl9idWlsZGluZ3NEYXRhJGNodW5rSSIsIl95aWVsZCRQcm9taXNlJGFsbDMiLCJfeWllbGQkUHJvbWlzZSRhbGw0Iiwicm9hZHNSZXMiLCJidWlsZGluZ3NSZXMiLCJkZXBvc2l0c1JlcyIsIl9jb2xvcnMkY2h1bmskc3RhdHVzIiwiY2h1bmsiLCJjb2xvcnMiLCJsb2FkZWQiLCJlbXB0eSIsImxvYWRpbmciLCJtaW5YIiwibWF4WCIsIm1pblkiLCJtYXhZIiwicm9hZHNSZWFkeSIsImRyYXduUm9hZHMiLCJyb2FkTGF5ZXJzIiwiYnVpbGRpbmdMYXllcnMiLCJjYWNoZWRSb2FkcyIsImNhY2hlRGlydHkiLCJtYXJrUm9hZENhY2hlRGlydHkiLCJ2YWx1ZXMiLCJmbGF0TWFwIiwiZXZlbnRzIiwiZXZlbnQiLCJub3RpZiIsImJhc2VDaXJjbGVzIiwicm9hZFNlZ21lbnRzIiwiRkFDVElPTl9DT0xPUlMiLCJnZXRGYWN0aW9uQ29sb3IiLCJiYXNlSWQiLCJwbGF5ZXJGYWN0aW9uIiwiY2xlYXJBbGxCYXNlQ2lyY2xlcyIsInJvYWRJZCIsImNvb3JkcyIsInJlbW92ZVJvYWRTZWdtZW50IiwiY2xlYXJBbGxSb2FkU2VnbWVudHMiLCJ1cGRhdGVCYXNlQ2lyY2xlcyIsImJhc2VzIiwidXBkYXRlUm9hZFNlZ21lbnRzIiwiaXNQbGF5ZXJSb2FkIiwic2V0Um9hZFNlZ21lbnRDb2xvciIsImZvcm1hdCIsInRvRml4ZWQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzbmFwVG9DaHVuayIsIkNIVU5LX1JBRElVUyIsIm9uY2UiLCJfZSRsYXRsbmciLCJzbmFwcGVkIiwiZGVmYXVsdExhdCIsImRlZmF1bHRMbmciLCJnZW9sb2NhdGlvbiIsImdwc0ZvdW5kIiwid2F0Y2hQb3NpdGlvbiIsInRpbWVvdXQiLCJ0aW1lckludGVydmFsIiwidXBkYXRlVGltZXJzIiwidGltZXJFbCIsInNjaGVkdWxlZCIsImlzTmFOIiwiZGlmZlNlYyIsIm1pbnMiLCJzZWNzIiwiaW5uZXJIVE1MIiwiYWJzIiwic2V0SW50ZXJ2YWwiLCJpc29TdHJpbmciLCJ0b0xvY2FsZVN0cmluZyIsInRpbWVab25lIiwiaG91ciIsIm1pbnV0ZSIsIkljb24iLCJEZWZhdWx0IiwiX2dldEljb25VcmwiLCJtZXJnZU9wdGlvbnMiLCJpY29uUmV0aW5hVXJsIiwicmVxdWlyZSIsIlRZUEVfTUFQIiwiREVCVUciLCJlbmFibGVkIiwiX3dpbmRvdyRBUFBfREVCVUciLCJBUFBfREVCVUciLCJtZXJjdXJlIiwiaW52ZW50b3J5IiwibmV0d29yayIsImNhY2hlIiwiY2FuTG9nIiwiX2NvbnNvbGUiLCJfY29uc29sZTIiLCJfY29uc29sZTMiXSwic291cmNlUm9vdCI6IiJ9