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
/* harmony export */   refreshGridColors: () => (/* binding */ refreshGridColors),
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
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../utils/debug.js */ "./assets/scripts/utils/debug.js");
/* harmony import */ var _utils_chunk_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../utils/chunk.js */ "./assets/scripts/Game/utils/chunk.js");
/* harmony import */ var _map_map_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../map/map.js */ "./assets/scripts/Game/map/map.js");
/* harmony import */ var _map_roads_roadsState_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../map/roads/roadsState.js */ "./assets/scripts/Game/map/roads/roadsState.js");
/* harmony import */ var _map_roads_zoneSync_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../map/roads/zoneSync.js */ "./assets/scripts/Game/map/roads/zoneSync.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



































var gridLayer = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_29__["default"].layerGroup();
var visibleChunks = new Map();
function initGridLayer() {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_32__.getMap)();
  if (!map) return;
  if (!(0,_map_map_js__WEBPACK_IMPORTED_MODULE_32__.isGridLayerActive)()) return;
  var zoom = map.getZoom();
  if (zoom < 14) return;
  var bounds = map.getBounds();
  var minLat = Math.floor(bounds.getSouth() / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_31__.CHUNK_SIZE);
  var maxLat = Math.ceil(bounds.getNorth() / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_31__.CHUNK_SIZE);
  var minLng = Math.floor(bounds.getWest() / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_31__.CHUNK_SIZE);
  var maxLng = Math.ceil(bounds.getEast() / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_31__.CHUNK_SIZE);
  var newVisible = new Set();
  for (var i = minLat; i < maxLat; i++) {
    var _loop = function _loop() {
      var id = "".concat(i, "_").concat(j);
      newVisible.add(id);
      if (visibleChunks.has(id)) return 1; // continue
      var lat = i * _utils_chunk_js__WEBPACK_IMPORTED_MODULE_31__.CHUNK_SIZE;
      var lng = j * _utils_chunk_js__WEBPACK_IMPORTED_MODULE_31__.CHUNK_SIZE;
      var rect = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_29__["default"].rectangle([[lat, lng], [lat + _utils_chunk_js__WEBPACK_IMPORTED_MODULE_31__.CHUNK_SIZE, lng + _utils_chunk_js__WEBPACK_IMPORTED_MODULE_31__.CHUNK_SIZE]], {
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
  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_30__.debugLog)("chunks", "Chunks visibles:", visibleChunks.size);
}

// ==========================
// CHUNK COLOR
// ==========================
function setChunkColor(id, color) {
  if (!(0,_map_map_js__WEBPACK_IMPORTED_MODULE_32__.isGridLayerActive)()) return;
  var rect = visibleChunks.get(id);
  if (!rect) return;
  rect.setStyle({
    color: color,
    fillOpacity: 0.2
  });
}

/**
 * Re-colore toutes les cellules visibles selon leur état.
 *
 * Rouge   = zone PAS EN BASE (jamais fetchée)
 * Orange  = en base mais pas encore chargée dans ce viewport
 * Bleu    = chargée avec au moins une route
 * Gris    = chargée mais vide
 */
function refreshGridColors() {
  if (!(0,_map_map_js__WEBPACK_IMPORTED_MODULE_32__.isGridLayerActive)()) return;
  var _iterator2 = _createForOfIteratorHelper(visibleChunks.entries()),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
        bboxKey = _step2$value[0],
        rect = _step2$value[1];
      var color = 'orange';
      var fillOpacity = 0.15;
      var weight = 1;
      var dashArray = undefined;
      if (_map_roads_zoneSync_js__WEBPACK_IMPORTED_MODULE_34__.knownBboxKeys.has(bboxKey)) {
        // Zone en base : regarde si elle est chargée dans ce viewport
        var chunk = _map_roads_roadsState_js__WEBPACK_IMPORTED_MODULE_33__.roadsState.chunks[bboxKey];
        if (chunk) {
          color = chunk.hasRoads ? 'blue' : '#444';
          fillOpacity = 0.2;
        } else {
          color = '#8f8'; // en base mais pas chargé : vert pâle
          fillOpacity = 0.1;
        }
      } else {
        // Zone PAS en base : rouge bien visible avec pointillés
        color = '#e44';
        weight = 2;
        fillOpacity = 0.25;
        dashArray = '4, 3';
      }
      rect.setStyle({
        color: color,
        fillOpacity: fillOpacity,
        weight: weight,
        dashArray: dashArray
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
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
/* harmony import */ var _map_roads_roads_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../map/roads/roads.js */ "./assets/scripts/Game/map/roads/roads.js");
/* harmony import */ var _map_roads_roadUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../map/roads/roadUtils.js */ "./assets/scripts/Game/map/roads/roadUtils.js");
/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../notifications.js */ "./assets/scripts/Game/notifications.js");
/* harmony import */ var _utils_admin_clipboard_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/admin_clipboard.js */ "./assets/scripts/Game/utils/admin_clipboard.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../utils/debug.js */ "./assets/scripts/utils/debug.js");
/* harmony import */ var _ui_drawOnMap_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../ui/drawOnMap.js */ "./assets/scripts/Game/ui/drawOnMap.js");
/* harmony import */ var _buildMode_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./buildMode.js */ "./assets/scripts/Game/buildings/buildMode.js");


























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
      (0,_notifications_js__WEBPACK_IMPORTED_MODULE_20__.showNotification)("Clique sur la carte pour placer ta base", 'info');
      (0,_map_roads_roads_js__WEBPACK_IMPORTED_MODULE_18__.loadVisibleRoadChunks)();
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
    var result = (0,_map_roads_roadUtils_js__WEBPACK_IMPORTED_MODULE_19__.findClosestPointOnRoad)(e.latlng, roads);
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
    var segment = (0,_map_roads_roadUtils_js__WEBPACK_IMPORTED_MODULE_19__.findClosestSegment)(e.latlng, roads);
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
  (0,_notifications_js__WEBPACK_IMPORTED_MODULE_20__.showNotification)("Mode Admin activé : cliquez sur la carte", 'info');
  map.on('click', function (e) {
    (0,_utils_admin_clipboard_js__WEBPACK_IMPORTED_MODULE_21__.getAdminCoords)(e.latlng.lat, e.latlng.lng);
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
  baseCircle = (0,_ui_drawOnMap_js__WEBPACK_IMPORTED_MODULE_23__.drawBaseCircle)('player_base', lat, lng, currentPlayerFaction, true);
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
    (0,_buildMode_js__WEBPACK_IMPORTED_MODULE_24__.refreshSidebar)().then(function () {
      // Ré-initialiser l'UI de base pour ré-attacher les listeners aux nouveaux boutons
      Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./base.js */ "./assets/scripts/Game/buildings/base.js")).then(function (_ref) {
        var initBaseUI = _ref.initBaseUI;
        return initBaseUI();
      });
    });
  })["catch"](function (err) {
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_22__.debugError)('bases', "Erreur création base", err);
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
  var circle = (0,_ui_drawOnMap_js__WEBPACK_IMPORTED_MODULE_23__.drawBaseCircle)("other_".concat(lat, "_").concat(lng), lat, lng, faction, isPlayerBase);
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
  baseCircle = (0,_ui_drawOnMap_js__WEBPACK_IMPORTED_MODULE_23__.drawBaseCircle)('player_base', lat, lng, currentPlayerFaction, true);
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
/* harmony export */   getCurrentPlayerId: () => (/* binding */ getCurrentPlayerId),
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

// ID du jouactif (utilisé pour filtrer les bâtiments "à moi")
var currentPlayerId = null;

/**
 * Définit l'ID du joueur actif.
 */
function setCurrentPlayerId(id) {
  currentPlayerId = id;
}

/**
 * Retourne l'ID du joueur actif.
 */
function getCurrentPlayerId() {
  return currentPlayerId;
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
/* harmony import */ var _roads_zoneDebugPanel_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./roads/zoneDebugPanel.js */ "./assets/scripts/Game/map/roads/zoneDebugPanel.js");
/* harmony import */ var _roads_zoneSync_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./roads/zoneSync.js */ "./assets/scripts/Game/map/roads/zoneSync.js");
/* harmony import */ var _roads_roadsLayer_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./roads/roadsLayer.js */ "./assets/scripts/Game/map/roads/roadsLayer.js");
/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png");
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../utils/debug.js */ "./assets/scripts/utils/debug.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
























function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }














_LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_24__["default"].Marker.prototype.options.icon = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_24__["default"].icon({
  iconUrl: leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_35__,
  shadowUrl: leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_36__
});
var mapInstance = null;
var moveTimeout = null;
var isChunkMode = false;
function initMap(_x, _x2) {
  return _initMap.apply(this, arguments);
}
function _initMap() {
  _initMap = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(lat, lng) {
    var isAdmin, baseOverlays, layersControl;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          mapInstance = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_24__["default"].map('map').setView([lat, lng], 7);
          _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_24__["default"].tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap'
          }).addTo(mapInstance);

          // Événement personnalisé pour signaler que la carte est prête
          mapInstance.fire('mapReady');

          // Les couches admin (routes possédées + chunk grid) ne sont visibles que pour les admins
          isAdmin = window.IS_ADMIN === true;
          if (isAdmin) {
            _roads_roadsLayer_js__WEBPACK_IMPORTED_MODULE_34__.roadsLayer.addTo(mapInstance);
          }

          // Couches de base : dépôts (visibles pour tout le monde) + chunk grid (admin seulement)
          baseOverlays = {};
          if (isAdmin) {
            baseOverlays["Chunk Grid"] = _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__.gridLayer;
          }
          layersControl = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_24__["default"].control.layers(null, baseOverlays).addTo(mapInstance); // Initialise les couches de dépôts (visibles pour tout le monde)
          _context2.n = 1;
          return (0,_deposits_deposits_js__WEBPACK_IMPORTED_MODULE_30__.initDepositLayers)(mapInstance, layersControl);
        case 1:
          // Ajoute la couche routes possédées (admin seulement)
          if (isAdmin) {
            layersControl.addOverlay(_roads_roadsLayer_js__WEBPACK_IMPORTED_MODULE_34__.roadsLayer, "Routes possédées");
          }

          // Panneau de debug des zones
          (0,_roads_zoneDebugPanel_js__WEBPACK_IMPORTED_MODULE_32__.initZoneDebugPanel)();

          // Charge la liste des zones en base pour l'overlay "non fetché"
          (0,_roads_zoneSync_js__WEBPACK_IMPORTED_MODULE_33__.syncKnownZones)().then(/*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(count) {
              var _yield$import, refreshGridColors;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_37__.debugLog)("zones", "".concat(count, " zones synchronis\xE9es depuis la base"));
                    // Re-colore le grid si déjà initialisé
                    _context.n = 1;
                    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../Layers/gridLayer.js */ "./assets/scripts/Game/Layers/gridLayer.js"));
                  case 1:
                    _yield$import = _context.v;
                    refreshGridColors = _yield$import.refreshGridColors;
                    refreshGridColors();
                  case 2:
                    return _context.a(2);
                }
              }, _callee);
            }));
            return function (_x3) {
              return _ref.apply(this, arguments);
            };
          }());

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
              (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_37__.debugLog)("grid", "Grid ON");
              (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__.initGridLayer)();
              (0,_roads_roads_js__WEBPACK_IMPORTED_MODULE_26__.loadVisibleRoadChunks)();
            }
          });
          mapInstance.on('overlayremove', function (e) {
            if (e.layer === _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__.gridLayer) {
              (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_37__.debugLog)("grid", "Grid OFF");
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
          return _context2.a(2);
      }
    }, _callee2);
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
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_37__.debugError)('map', "Erreur load world", err);
    // Ne pas rediriger automatiquement, laissez le système de login gérer la redirection
  });
}
function enterChunkMode() {
  if (isChunkMode) return;
  isChunkMode = true;
  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_37__.debugLog)("chunks", "ENTER CHUNK MODE");
  (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__.initGridLayer)();
  (0,_roads_roads_js__WEBPACK_IMPORTED_MODULE_26__.loadVisibleRoadChunks)();
}
function exitChunkMode() {
  if (!isChunkMode) return;
  isChunkMode = false;
  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_37__.debugLog)("chunks", "EXIT CHUNK MODE");
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
/* harmony export */   refreshChunk: () => (/* binding */ refreshChunk),
/* harmony export */   refreshChunks: () => (/* binding */ refreshChunks)
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
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_13__);
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
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.number.is-nan.js */ "./node_modules/core-js/modules/es.number.is-nan.js");
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_23__);
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
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/esnext.iterator.some.js */ "./node_modules/core-js/modules/esnext.iterator.some.js");
/* harmony import */ var core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_some_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/esnext.json.parse.js */ "./node_modules/core-js/modules/esnext.json.parse.js");
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_39__);
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
/* harmony import */ var _roadsLayer_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./roadsLayer.js */ "./assets/scripts/Game/map/roads/roadsLayer.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }









































function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }










// ==========================
// SAFE JSON PARSE
// ==========================
// Parse le JSON d'une réponse en renvoyant TOUJOURS du JSON valide.
// Si le corps n'est du JSON (page d'erreur HTML, 500, 404, vide),
// le texte brut est loggé pour diagnostic et un objet par défaut
// est retourné pour éviter le crash "JSON.parse: unexpected character".
function safeJson(_x, _x2) {
  return _safeJson.apply(this, arguments);
} // ==========================
// MAIN LOAD VISIBLE
// ==========================
function _safeJson() {
  _safeJson = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(response, defaultData) {
    var text, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.n = 1;
          return response.text();
        case 1:
          text = _context.v;
          _context.p = 2;
          return _context.a(2, JSON.parse(text));
        case 3:
          _context.p = 3;
          _t = _context.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_45__.debugError)("roads", "[SAFE_JSON] R\xE9ponse non-JSON (status ".concat(response.status, " ").concat(response.url, "):"), text.slice(0, 500));
          return _context.a(2, defaultData);
      }
    }, _callee, null, [[2, 3]]);
  }));
  return _safeJson.apply(this, arguments);
}
function loadVisibleRoadChunks() {
  return _loadVisibleRoadChunks.apply(this, arguments);
}

// ==========================
// REFRESH CHUNK
// ==========================
function _loadVisibleRoadChunks() {
  _loadVisibleRoadChunks = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var map, bounds, visibleChunks, chunksToLoad, finalChunksToLoad, _iterator2, _step2, _chunkId, data, _i, _finalChunksToLoad, chunkId, visibleBounds, _yield$Promise$all, _yield$Promise$all2, roadsResponse, buildingsResponse, depositsResponse, roadsData, buildingsData, depositsData, allRoads, allBuildings, allDeposits, _loop, _i2, _finalChunksToLoad2, _iterator3, _step3, _t2, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          map = (0,_map_js__WEBPACK_IMPORTED_MODULE_41__.getMap)();
          if (!(!map || map.getZoom() < 14)) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2);
        case 1:
          bounds = map.getBounds();
          visibleChunks = getVisibleChunks(bounds);
          chunksToLoad = visibleChunks.filter(function (chunkId) {
            return !_roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.loadedChunks.has(chunkId);
          });
          finalChunksToLoad = [];
          _iterator2 = _createForOfIteratorHelper(chunksToLoad);
          _context3.p = 2;
          _iterator2.s();
        case 3:
          if ((_step2 = _iterator2.n()).done) {
            _context3.n = 6;
            break;
          }
          _chunkId = _step2.value;
          data = (0,_chunkCache_js__WEBPACK_IMPORTED_MODULE_48__.getCachedChunk)(_chunkId);
          if (!data) {
            _context3.n = 4;
            break;
          }
          _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.chunks[_chunkId] = {
            status: data.hasRoads ? 'loaded' : 'empty',
            roads: data.roads,
            buildings: data.buildings,
            deposits: data.deposits,
            hasRoads: data.hasRoads
          };
          _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.loadedChunks.add(_chunkId);
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_43__.setChunkColor)(_chunkId, data.hasRoads ? 'blue' : '#444');
          (0,_deposits_deposits_js__WEBPACK_IMPORTED_MODULE_47__.renderDepositsFromData)(data.deposits || [], map);
          return _context3.a(3, 5);
        case 4:
          finalChunksToLoad.push(_chunkId);
        case 5:
          _context3.n = 3;
          break;
        case 6:
          _context3.n = 8;
          break;
        case 7:
          _context3.p = 7;
          _t2 = _context3.v;
          _iterator2.e(_t2);
        case 8:
          _context3.p = 8;
          _iterator2.f();
          return _context3.f(8);
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
            _context3.n = 10;
            break;
          }
          refreshChunkColors(visibleChunks);
          return _context3.a(2);
        case 10:
          // La bbox englobante des chunks visibles
          visibleBounds = {
            south: bounds.getSouth(),
            west: bounds.getWest(),
            north: bounds.getNorth(),
            east: bounds.getEast()
          };
          _context3.p = 11;
          _context3.n = 12;
          return Promise.all([fetch('/api/chunks/bulk', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(visibleBounds)
          }), fetch('/api/buildings/visible', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(visibleBounds)
          }), fetch('/api/deposits/bulk', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(visibleBounds)
          })]);
        case 12:
          _yield$Promise$all = _context3.v;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
          roadsResponse = _yield$Promise$all2[0];
          buildingsResponse = _yield$Promise$all2[1];
          depositsResponse = _yield$Promise$all2[2];
          _context3.n = 13;
          return safeJson(roadsResponse, {
            roads: []
          });
        case 13:
          roadsData = _context3.v;
          _context3.n = 14;
          return safeJson(buildingsResponse, {
            buildings: []
          });
        case 14:
          buildingsData = _context3.v;
          _context3.n = 15;
          return safeJson(depositsResponse, {
            deposits: []
          });
        case 15:
          depositsData = _context3.v;
          // Nouveau format : tableaux plats dans $.roads, $.buildings, $.deposits
          allRoads = roadsData.roads || [];
          allBuildings = buildingsData.buildings || [];
          allDeposits = depositsData.deposits || []; // Distribue les routes dans les cellules visibles (une route peut toucher plusieurs cellules)
          _loop = /*#__PURE__*/_regenerator().m(function _loop() {
            var chunkId, _chunkId$split, _chunkId$split2, cxStr, cyStr, cx, cy, cellSouth, cellWest, cellNorth, cellEast, cellRoads, isEmpty, status;
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.n) {
                case 0:
                  chunkId = _finalChunksToLoad2[_i2];
                  _chunkId$split = chunkId.split('_'), _chunkId$split2 = _slicedToArray(_chunkId$split, 2), cxStr = _chunkId$split2[0], cyStr = _chunkId$split2[1]; // Le chunkId est "latMin_lngMin" où latMin/lngMin sont des floats (ex: "45.16_0.76").
                  // Utiliser parseFloat / CHUNK_SIZE pour obtenir l'entier de grille (ex: 4516, 76).
                  cx = Math.round(parseFloat(cxStr) / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE);
                  cy = Math.round(parseFloat(cyStr) / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE);
                  if (!(Number.isNaN(cx) || Number.isNaN(cy))) {
                    _context2.n = 1;
                    break;
                  }
                  return _context2.a(2, 1);
                case 1:
                  // Normaliser la bbox avec toFixed(8) pour éviter les erreurs de précision floats
                  cellSouth = Number((cx * _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE).toFixed(8));
                  cellWest = Number((cy * _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE).toFixed(8));
                  cellNorth = Number((cellSouth + _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE).toFixed(8));
                  cellEast = Number((cellWest + _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE).toFixed(8));
                  cellRoads = allRoads.filter(function (road) {
                    return Array.isArray(road.points) && road.points.some(function (pt) {
                      return pt[0] >= cellSouth && pt[0] <= cellNorth && pt[1] >= cellWest && pt[1] <= cellEast;
                    });
                  });
                  isEmpty = allRoads.length === 0 && allBuildings.length === 0 && allDeposits.length === 0;
                  status = isEmpty ? 'empty' : 'loaded';
                  _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.chunks[chunkId] = {
                    status: status,
                    roads: cellRoads,
                    buildings: allBuildings,
                    deposits: allDeposits,
                    hasRoads: cellRoads.length > 0
                  };
                  _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.loadedChunks.add(chunkId);
                  (0,_chunkCache_js__WEBPACK_IMPORTED_MODULE_48__.setCachedChunk)(chunkId, {
                    roads: cellRoads,
                    buildings: allBuildings,
                    deposits: allDeposits,
                    hasRoads: cellRoads.length > 0
                  });
                  (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_43__.setChunkColor)(chunkId, isEmpty ? '#444' : 'blue');
                  (0,_deposits_deposits_js__WEBPACK_IMPORTED_MODULE_47__.renderDepositsFromData)(allDeposits, map);

                  // Dessine les routes possédées sur la carte (seules les routes de CE chunk)
                  (0,_roadsLayer_js__WEBPACK_IMPORTED_MODULE_49__.drawOwnedRoads)(cellRoads);
                  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_45__.debugLog)("roads", "[LOAD] ".concat(chunkId, ": ").concat(status, " (").concat(cellRoads.length, " routes ici, ").concat(allRoads.length, " total)"));
                case 2:
                  return _context2.a(2);
              }
            }, _loop);
          });
          _i2 = 0, _finalChunksToLoad2 = finalChunksToLoad;
        case 16:
          if (!(_i2 < _finalChunksToLoad2.length)) {
            _context3.n = 19;
            break;
          }
          return _context3.d(_regeneratorValues(_loop()), 17);
        case 17:
          if (!_context3.v) {
            _context3.n = 18;
            break;
          }
          return _context3.a(3, 18);
        case 18:
          _i2++;
          _context3.n = 16;
          break;
        case 19:
          _context3.n = 21;
          break;
        case 20:
          _context3.p = 20;
          _t3 = _context3.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_45__.debugError)("roads", "Erreur chargement chunks bulk:", _t3);
          _iterator3 = _createForOfIteratorHelper(finalChunksToLoad);
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              chunkId = _step3.value;
              _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.chunks[chunkId] = {
                status: 'error',
                roads: [],
                buildings: [],
                deposits: []
              };
              (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_43__.setChunkColor)(chunkId, 'red');
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        case 21:
          refreshChunkColors(visibleChunks);
        case 22:
          return _context3.a(2);
      }
    }, _callee2, null, [[11, 20], [2, 7, 8, 9]]);
  }));
  return _loadVisibleRoadChunks.apply(this, arguments);
}
function refreshChunk(_x3) {
  return _refreshChunk.apply(this, arguments);
}

// ==========================
// REFRESH MULTIPLE CHUNKS
// ==========================
function _refreshChunk() {
  _refreshChunk = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(chunkId) {
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          (0,_invalidateChunk_js__WEBPACK_IMPORTED_MODULE_44__.invalidateChunk)(chunkId);
          (0,_chunkCache_js__WEBPACK_IMPORTED_MODULE_48__.invalidateChunkCache)(chunkId);
          _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.loadedChunks["delete"](chunkId);
          _context4.n = 1;
          return fetchSingleChunk(chunkId);
        case 1:
          return _context4.a(2);
      }
    }, _callee3);
  }));
  return _refreshChunk.apply(this, arguments);
}
function refreshChunks(_x4) {
  return _refreshChunks.apply(this, arguments);
}

// ==========================
// FETCH SINGLE CHUNK
// ==========================
function _refreshChunks() {
  _refreshChunks = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(chunkIds) {
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          if (!(!Array.isArray(chunkIds) || chunkIds.length === 0)) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2);
        case 1:
          _context5.n = 2;
          return Promise.all(chunkIds.map(function (id) {
            return refreshChunk(id);
          }));
        case 2:
          return _context5.a(2);
      }
    }, _callee4);
  }));
  return _refreshChunks.apply(this, arguments);
}
function fetchSingleChunk(_x5) {
  return _fetchSingleChunk.apply(this, arguments);
} // ==========================
// REFRESH CHUNK COLORS
// ==========================
function _fetchSingleChunk() {
  _fetchSingleChunk = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(chunkId) {
    var _chunkId$split3, _chunkId$split4, cxStr, cyStr, cx, cy, cellSouth, cellWest, cellNorth, cellEast, _yield$Promise$all3, _yield$Promise$all4, roadsRes, buildingsRes, depositsRes, roadsData, buildingsData, depositsData, allRoads, allBuildings, allDeposits, cellRoads, isEmpty, status, _t4;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.chunks[chunkId] = {
            status: 'loading',
            roads: [],
            buildings: [],
            deposits: []
          };
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_43__.setChunkColor)(chunkId, 'orange');

          // Déduire une bbox du chunkId "latMin_lngMin" (ex: "45.16_0.76")
          // Utiliser parseFloat / CHUNK_SIZE pour obtenir l'entier de grille (ex: 4516, 76).
          _chunkId$split3 = chunkId.split('_'), _chunkId$split4 = _slicedToArray(_chunkId$split3, 2), cxStr = _chunkId$split4[0], cyStr = _chunkId$split4[1];
          cx = Math.round(parseFloat(cxStr) / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE);
          cy = Math.round(parseFloat(cyStr) / _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE);
          cellSouth = Number((cx * _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE).toFixed(8));
          cellWest = Number((cy * _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE).toFixed(8));
          cellNorth = Number((cellSouth + _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE).toFixed(8));
          cellEast = Number((cellWest + _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE).toFixed(8));
          _context6.n = 1;
          return Promise.all([fetch('/api/chunks/bulk', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              south: cellSouth,
              west: cellWest,
              north: cellNorth,
              east: cellEast
            })
          }), fetch('/api/buildings/visible', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              south: cellSouth,
              west: cellWest,
              north: cellNorth,
              east: cellEast
            })
          }), fetch('/api/deposits/bulk', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              south: cellSouth,
              west: cellWest,
              north: cellNorth,
              east: cellEast
            })
          })]);
        case 1:
          _yield$Promise$all3 = _context6.v;
          _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 3);
          roadsRes = _yield$Promise$all4[0];
          buildingsRes = _yield$Promise$all4[1];
          depositsRes = _yield$Promise$all4[2];
          _context6.n = 2;
          return safeJson(roadsRes, {
            roads: []
          });
        case 2:
          roadsData = _context6.v;
          _context6.n = 3;
          return safeJson(buildingsRes, {
            buildings: []
          });
        case 3:
          buildingsData = _context6.v;
          _context6.n = 4;
          return safeJson(depositsRes, {
            deposits: []
          });
        case 4:
          depositsData = _context6.v;
          allRoads = roadsData.roads || [];
          allBuildings = buildingsData.buildings || [];
          allDeposits = depositsData.deposits || []; // Filtre les routes qui intersectent CE chunk
          cellRoads = allRoads.filter(function (road) {
            return Array.isArray(road.points) && road.points.some(function (pt) {
              return pt[0] >= cellSouth && pt[0] <= cellNorth && pt[1] >= cellWest && pt[1] <= cellEast;
            });
          }); // Un chunk est "loaded" (bleu) dès que la zone a été fetchée avec succès,
          // même si les routes sont stockées dans des chunks voisins.
          // Le statut "empty" (gris) n'apparaît que si l'API confirme qu'il n'y a
          // strictement aucune route dans la bbox du chunk.
          isEmpty = allRoads.length === 0 && allBuildings.length === 0 && allDeposits.length === 0;
          status = isEmpty ? 'empty' : 'loaded';
          _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.chunks[chunkId] = {
            status: status,
            roads: cellRoads,
            buildings: allBuildings,
            deposits: allDeposits,
            hasRoads: cellRoads.length > 0
          };
          (0,_chunkCache_js__WEBPACK_IMPORTED_MODULE_48__.setCachedChunk)(chunkId, {
            roads: cellRoads,
            buildings: allBuildings,
            deposits: allDeposits,
            hasRoads: cellRoads.length > 0
          });
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_43__.setChunkColor)(chunkId, isEmpty ? '#444' : 'blue');
          (0,_deposits_deposits_js__WEBPACK_IMPORTED_MODULE_47__.renderDepositsFromData)(allDeposits, (0,_map_js__WEBPACK_IMPORTED_MODULE_41__.getMap)());
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_45__.debugLog)("roads", "[CHUNK REFRESH] ".concat(chunkId, ": ").concat(status, " (").concat(cellRoads.length, " routes ici, ").concat(allRoads.length, " total dans la bbox)"));
          _context6.n = 6;
          break;
        case 5:
          _context6.p = 5;
          _t4 = _context6.v;
          _roadsState_js__WEBPACK_IMPORTED_MODULE_46__.roadsState.chunks[chunkId] = {
            status: 'error',
            roads: [],
            buildings: [],
            deposits: []
          };
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_43__.setChunkColor)(chunkId, 'red');
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_45__.debugError)("roads", "[CHUNK REFRESH ERROR]", chunkId, _t4);
        case 6:
          return _context6.a(2);
      }
    }, _callee5, null, [[0, 5]]);
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
      // Format cohérent avec snapToChunk : "latMin_lngMin" (floats, ex: "45.16_0.76")
      var latMin = Number((x * _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE).toFixed(8));
      var lngMin = Number((y * _utils_chunk_js__WEBPACK_IMPORTED_MODULE_42__.CHUNK_SIZE).toFixed(8));
      chunks.push("".concat(latMin, "_").concat(lngMin));
    }
  }
  return chunks;
}

/***/ },

/***/ "./assets/scripts/Game/map/roads/roadsLayer.js"
/*!*****************************************************!*\
  !*** ./assets/scripts/Game/map/roads/roadsLayer.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearOwnedRoads: () => (/* binding */ clearOwnedRoads),
/* harmony export */   drawOwnedRoads: () => (/* binding */ drawOwnedRoads),
/* harmony export */   getOwnedRoadsCount: () => (/* binding */ getOwnedRoadsCount),
/* harmony export */   roadsLayer: () => (/* binding */ roadsLayer)
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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../map.js */ "./assets/scripts/Game/map/map.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../utils/debug.js */ "./assets/scripts/utils/debug.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

































// Couche Leaflet contenant les routes possédées (polylignes bleues)
// Visible uniquement par les admins
var roadsLayer = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_29__["default"].layerGroup();

// Set des IDs déjà dessinés (pour éviter les doublons)
var drawnRoadIds = new Set();

/**
 * Dessine sur la carte toutes les routes qui ne le sont pas encore.
 * @param {Array} roads - tableau de { id, points, type }
 */
function drawOwnedRoads(roads) {
  if (!Array.isArray(roads) || roads.length === 0) return;
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_30__.getMap)();
  if (!map) return;
  var added = 0;
  var _iterator = _createForOfIteratorHelper(roads),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var road = _step.value;
      if (!road || drawnRoadIds.has(road.id)) continue;
      if (!Array.isArray(road.points) || road.points.length < 2) continue;

      // Convertit les points [lat, lng] en tableau pour Leaflet
      var latlngs = road.points.map(function (pt) {
        return [pt[0], pt[1]];
      });

      // Couleur selon le type de route
      var color = getRoadColor(road.type);
      var polyline = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_29__["default"].polyline(latlngs, {
        color: color,
        weight: 3,
        opacity: 0.8
      });
      polyline.addTo(roadsLayer);
      drawnRoadIds.add(road.id);
      added++;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (added > 0) {
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_31__.debugLog)("roadsLayer", "".concat(added, " routes dessin\xE9es (").concat(drawnRoadIds.size, " total)"));
  }
}

/**
 * Efface toutes les routes dessinées (pour un rechargement complet).
 */
function clearOwnedRoads() {
  roadsLayer.clearLayers();
  drawnRoadIds.clear();
  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_31__.debugLog)("roadsLayer", "Routes effacées");
}

/**
 * Retourne la couleur selon le type de route OSM.
 */
function getRoadColor(type) {
  var colors = {
    motorway: '#e74c3c',
    trunk: '#e67e22',
    primary: '#f1c40f',
    secondary: '#2ecc71',
    tertiary: '#1abc9c',
    residential: '#3498db',
    service: '#9b59b6',
    unclassified: '#95a5a6',
    ferry: '#00CED1' // cyan foncé pour les lignes maritimes
  };
  return colors[type] || '#2980b9'; // bleu par défaut
}

/**
 * Compte le nombre de routes possédées.
 */
function getOwnedRoadsCount() {
  return drawnRoadIds.size;
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

/***/ "./assets/scripts/Game/map/roads/zoneDebugPanel.js"
/*!*********************************************************!*\
  !*** ./assets/scripts/Game/map/roads/zoneDebugPanel.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initZoneDebugPanel: () => (/* binding */ initZoneDebugPanel),
/* harmony export */   refreshPanel: () => (/* binding */ refreshPanel)
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
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../utils/debug.js */ "./assets/scripts/utils/debug.js");
/* harmony import */ var _zoneSync_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./zoneSync.js */ "./assets/scripts/Game/map/roads/zoneSync.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../map.js */ "./assets/scripts/Game/map/map.js");
/* harmony import */ var _utils_chunk_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../utils/chunk.js */ "./assets/scripts/Game/utils/chunk.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }


























function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var panel = null;
var isPanelOpen = false;
var toggleBtn = null;
function initZoneDebugPanel() {
  // Bouton toggle (toujours visible)
  toggleBtn = document.createElement('button');
  toggleBtn.id = 'zone-debug-toggle';
  toggleBtn.textContent = '📍 Zones';
  toggleBtn.style.cssText = "\n        position: fixed;\n        bottom: 10px;\n        right: 10px;\n        z-index: 1000;\n        background: #333;\n        color: #eee;\n        border: 1px solid #666;\n        border-radius: 4px;\n        padding: 4px 10px;\n        cursor: pointer;\n        font-family: monospace;\n        font-size: 11px;\n    ";
  toggleBtn.onclick = togglePanel;
  document.body.appendChild(toggleBtn);

  // Panel (caché par défaut)
  panel = document.createElement('div');
  panel.id = 'zone-debug-panel';
  panel.style.cssText = "\n        position: fixed;\n        bottom: 40px;\n        right: 10px;\n        width: 280px;\n        max-height: 300px;\n        background: rgba(0, 0, 0, 0.9);\n        color: #eee;\n        font-family: monospace;\n        font-size: 11px;\n        z-index: 1000;\n        border-radius: 6px;\n        overflow: hidden;\n        display: none;\n        flex-direction: column;\n    ";
  document.body.appendChild(panel);
}
function togglePanel() {
  isPanelOpen = !isPanelOpen;
  panel.style.display = isPanelOpen ? 'flex' : 'none';
  toggleBtn.style.background = isPanelOpen ? '#555' : '#333';
  if (isPanelOpen) refreshPanel();
}
function refreshPanel() {
  return _refreshPanel.apply(this, arguments);
}
function _refreshPanel() {
  _refreshPanel = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return (0,_zoneSync_js__WEBPACK_IMPORTED_MODULE_27__.syncKnownZones)();
        case 1:
          renderPanel();
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_26__.debugLog)("zones", "".concat((0,_zoneSync_js__WEBPACK_IMPORTED_MODULE_27__.getZoneStats)().total, " zones en base"));
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _refreshPanel.apply(this, arguments);
}
function renderPanel() {
  if (!panel) return;
  var stats = (0,_zoneSync_js__WEBPACK_IMPORTED_MODULE_27__.getZoneStats)();
  var zones = stats.zones;
  var withRoads = zones.filter(function (z) {
    return z.updatedAt;
  }).length;
  var without = zones.length - withRoads;
  panel.innerHTML = "\n        <div style=\"padding: 6px 8px; background: #222; font-weight: bold; display: flex; justify-content: space-between; align-items: center;\">\n            <span>\uD83D\uDCCD Zones en base</span>\n            <span style=\"display: flex; gap: 8px; align-items: center;\">\n                <span style=\"color: #8f8; font-size: 10px;\">".concat(zones.length, "</span>\n                <button id=\"zone-refresh-btn\" style=\"background: #444; border: 1px solid #666; color: #eee; border-radius: 3px; padding: 2px 6px; cursor: pointer; font-size: 10px;\">\uD83D\uDD04</button>\n            </span>\n        </div>\n        <div style=\"padding: 4px 8px; background: #1a1a1a; color: #aaa; border-bottom: 1px solid #333; font-size: 10px;\">\n            <span style=\"color: #6af\">\u25CF ").concat(withRoads, " g\xE9n\xE9r\xE9es</span>\n            &nbsp;|&nbsp;\n            <span style=\"color: #888\">\u25CF ").concat(without, " vides</span>\n            &nbsp;|&nbsp;\n            <span style=\"color: #e44\">\u25CF rouge = \xE0 g\xE9n\xE9rer</span>\n        </div>\n        <div id=\"zone-list\" style=\"overflow-y: auto; max-height: 220px; padding: 2px;\">\n            ").concat(zones.length === 0 ? '<div style="padding: 8px; color: #666; text-align: center;">Aucune zone en base</div>' : '', "\n            ").concat(zones.map(function (zone) {
    return "\n                <div class=\"zone-row\" data-id=\"".concat(zone.id, "\"\n                     style=\"padding: 3px 8px; cursor: pointer; border-bottom: 1px solid #2a2a2a; display: flex; justify-content: space-between; font-size: 10px;\"\n                     onmouseover=\"this.style.background='#333'\"\n                     onmouseout=\"this.style.background='transparent'\">\n                    <span>").concat(zone.latMin, ",").concat(zone.lngMin, "</span>\n                    <span style=\"color: ").concat(zone.updatedAt ? '#6f6' : '#888', "\">\n                        ").concat(zone.updatedAt ? '✓' : '·', "\n                    </span>\n                </div>\n            ");
  }).join(''), "\n        </div>\n        <div style=\"padding: 4px 8px; background: #1a1a1a; color: #666; font-size: 9px; border-top: 1px solid #333;\">\n            clic = naviguer \xB7 double-clic = g\xE9n\xE9rer\n        </div>\n    ");
  var refreshBtn = document.getElementById('zone-refresh-btn');
  if (refreshBtn) refreshBtn.onclick = function (e) {
    e.stopPropagation();
    refreshPanel();
  };
  panel.querySelectorAll('.zone-row').forEach(function (row) {
    row.onclick = function () {
      var id = parseInt(row.dataset.id);
      var zone = zones.find(function (z) {
        return z.id === id;
      });
      if (zone) {
        // Clic simple : fly vers le coin supérieur gauche de la zone
        var lat = Number(zone.latMin);
        var lng = Number(zone.lngMin);
        (0,_map_js__WEBPACK_IMPORTED_MODULE_28__.flyTo)(lat + 0.005, lng + 0.005, 16);
        (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_26__.debugLog)("zones", "flyTo zone ".concat(zone.latMin, ",").concat(zone.lngMin));
      }
    };
    row.ondblclick = function () {
      var id = parseInt(row.dataset.id);
      var zone = zones.find(function (z) {
        return z.id === id;
      });
      if (zone) {
        // Double-clic : relancer la génération pour cette zone
        var lat = Number(zone.latMin) + 0.005;
        var lng = Number(zone.lngMin) + 0.005;
        (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_26__.debugLog)("zones", "R\xE9g\xE9n\xE9ration zone ".concat(zone.latMin, ",").concat(zone.lngMin));
        (0,_utils_chunk_js__WEBPACK_IMPORTED_MODULE_29__.addRoadsChunk)(lat, lng, 200);
      }
    };
  });
}


/***/ },

/***/ "./assets/scripts/Game/map/roads/zoneSync.js"
/*!***************************************************!*\
  !*** ./assets/scripts/Game/map/roads/zoneSync.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addKnownBboxKey: () => (/* binding */ addKnownBboxKey),
/* harmony export */   getZoneStats: () => (/* binding */ getZoneStats),
/* harmony export */   knownBboxKeys: () => (/* binding */ knownBboxKeys),
/* harmony export */   knownZones: () => (/* binding */ knownZones),
/* harmony export */   syncKnownZones: () => (/* binding */ syncKnownZones)
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
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../utils/debug.js */ "./assets/scripts/utils/debug.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



































// Set des bboxKeys des zones connues en base (chargé au démarrage).
var knownBboxKeys = new Set();

// Détails des zones (pour le panneau de debug).
var knownZones = [];

/**
 * Charge la liste des zones depuis l'API et met à jour knownBboxKeys.
 */
function syncKnownZones() {
  return _syncKnownZones.apply(this, arguments);
}

/**
 * Ajoute une bboxKey locale (après une génération réussie).
 */
function _syncKnownZones() {
  _syncKnownZones = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var response, data, _iterator, _step, key, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return fetch('/api/zones/status');
        case 1:
          response = _context.v;
          if (response.ok) {
            _context.n = 2;
            break;
          }
          throw new Error('API error');
        case 2:
          _context.n = 3;
          return response.json();
        case 3:
          data = _context.v;
          knownBboxKeys.clear();
          if (data.bboxKeys) {
            _iterator = _createForOfIteratorHelper(data.bboxKeys);
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                key = _step.value;
                knownBboxKeys.add(key);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          // Met à jour knownZones (pour le panneau)
          knownZones.length = 0;
          if (data.zones) {
            knownZones.push.apply(knownZones, _toConsumableArray(data.zones));
          }
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_33__.debugLog)("zones", "".concat(knownBboxKeys.size, " zones connues en base"));
          return _context.a(2, knownBboxKeys.size);
        case 4:
          _context.p = 4;
          _t = _context.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_33__.debugError)("zones", "Erreur sync zones:", _t);
          return _context.a(2, 0);
      }
    }, _callee, null, [[0, 4]]);
  }));
  return _syncKnownZones.apply(this, arguments);
}
function addKnownBboxKey(bboxKey) {
  knownBboxKeys.add(bboxKey);
}

/**
 * Retourne des stats sur les zones.
 */
function getZoneStats() {
  return {
    total: knownBboxKeys.size,
    zones: knownZones
  };
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
/* harmony export */   CHUNK_SIZE: () => (/* binding */ CHUNK_SIZE),
/* harmony export */   DEFAULT_ROAD_RADIUS: () => (/* binding */ DEFAULT_ROAD_RADIUS),
/* harmony export */   addRoadsChunk: () => (/* binding */ addRoadsChunk),
/* harmony export */   showToast: () => (/* binding */ showToast)
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
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _map_map_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../map/map.js */ "./assets/scripts/Game/map/map.js");
/* harmony import */ var _map_roads_roads_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../map/roads/roads.js */ "./assets/scripts/Game/map/roads/roads.js");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../utils/debug.js */ "./assets/scripts/utils/debug.js");
/* harmony import */ var _snap_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./snap.js */ "./assets/scripts/Game/utils/snap.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }







































function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var CHUNK_SIZE = 0.01;
var CHUNK_RADIUS = 1;
var DEFAULT_ROAD_RADIUS = 200;
var isPending = false;

/**
 * Ajoute des routes par clic sur la carte.
 * Si des routes existent déjà dans la zone, ne fait rien.
 * Sinon, récupère les routes depuis Overpass et les crée.
 */
function addRoadsChunk(_x, _x2) {
  return _addRoadsChunk.apply(this, arguments);
}

/**
 * Calcule la liste des chunkIds à rafraîchir après une génération.
 */
function _addRoadsChunk() {
  _addRoadsChunk = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(lat, lng) {
    var radius,
      map,
      response,
      data,
      chunkIds,
      _args2 = arguments,
      _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          radius = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : DEFAULT_ROAD_RADIUS;
          if (!isPending) {
            _context2.n = 1;
            break;
          }
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_41__.debugWarn)("chunks", "Generation already in progress, ignoring click");
          return _context2.a(2, null);
        case 1:
          map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_39__.getMap)();
          if (map) map.getContainer().style.cursor = 'wait';
          _context2.p = 2;
          _context2.n = 3;
          return fetch('/api/add-roads-chunk', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              lat: lat,
              lng: lng,
              radius: radius
            })
          });
        case 3:
          response = _context2.v;
          if (response.ok) {
            _context2.n = 4;
            break;
          }
          throw new Error("API error: ".concat(response.status));
        case 4:
          _context2.n = 5;
          return response.json();
        case 5:
          data = _context2.v;
          // Feedback visuel
          showGenerationFeedback(data);

          // Refresh tous les chunks affectés
          chunkIds = computeAffectedChunkIds(lat, lng, data);
          _context2.n = 6;
          return Promise.all(chunkIds.map(function (id) {
            return (0,_map_roads_roads_js__WEBPACK_IMPORTED_MODULE_40__.refreshChunk)(id);
          }));
        case 6:
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_41__.debugLog)("chunks", "Roads: ".concat(data.roads_created, " created, already_populated=").concat(data.already_populated));
          return _context2.a(2, data);
        case 7:
          _context2.p = 7;
          _t = _context2.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_41__.debugError)("chunks", "Failed to add roads chunk:", _t);
          showToast("Erreur: " + _t.message, "error");
          return _context2.a(2, null);
        case 8:
          _context2.p = 8;
          isPending = false;
          if (map) map.getContainer().style.cursor = '';
          return _context2.f(8);
        case 9:
          return _context2.a(2);
      }
    }, _callee2, null, [[2, 7, 8, 9]]);
  }));
  return _addRoadsChunk.apply(this, arguments);
}
function computeAffectedChunkIds(lat, lng, data) {
  var ids = new Set();

  // Chunk du clic
  var clickSnap = (0,_snap_js__WEBPACK_IMPORTED_MODULE_42__.snapToChunk)(lat, lng);
  ids.add(clickSnap.bboxKey);

  // Chunks des routes retournées
  if (data.roads && Array.isArray(data.roads)) {
    var _iterator = _createForOfIteratorHelper(data.roads),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var road = _step.value;
        if (!Array.isArray(road.points)) continue;
        var _iterator2 = _createForOfIteratorHelper(road.points),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 2),
              ptLat = _step2$value[0],
              ptLng = _step2$value[1];
            var snap = (0,_snap_js__WEBPACK_IMPORTED_MODULE_42__.snapToChunk)(ptLat, ptLng);
            ids.add(snap.bboxKey);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return _toConsumableArray(ids);
}

/**
 * Affiche un feedback visuel selon le résultat de la génération.
 */
function showGenerationFeedback(data) {
  if (data.roads_created > 0) {
    showToast("".concat(data.roads_created, " route(s) ajout\xE9e(s)"), "success");
  } else {
    showToast("Toutes les routes sont déjà présentes", "info");
  }
}

/**
 * Affiche un toast d'information.
 */
function showToast(message) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";
  var event = new CustomEvent('toast', {
    detail: {
      message: message,
      type: type
    }
  });
  document.dispatchEvent(event);
  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_41__.debugLog)("toast", "[".concat(type, "] ").concat(message));
}
document.getElementById('requestApiRoadsAndChunksBtn').addEventListener('click', function () {
  var map = (0,_map_map_js__WEBPACK_IMPORTED_MODULE_39__.getMap)();
  map.getContainer().style.cursor = 'crosshair';
  showToast("Cliquez sur la carte pour ajouter les routes", "info");
  map.once('click', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var _e$latlng, lat, lng;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _e$latlng = e.latlng, lat = _e$latlng.lat, lng = _e$latlng.lng;
            (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_41__.debugLog)("network", "📡 adding roads chunk at:", lat, lng);
            _context.n = 1;
            return addRoadsChunk(lat, lng, DEFAULT_ROAD_RADIUS);
          case 1:
            map.getContainer().style.cursor = '';
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function (_x3) {
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





/**
 * Retourne la bounding box (grille CHUNK_SIZE × CHUNK_SIZE) pour un point GPS.
 *
 * Utilise Math.floor(lat / CHUNK_SIZE) — la même formule que le backend
 * (CoordinateService::getBoundingBox), pour garantir la cohérence front/back.
 *
 * @returns {{ latMin: number, lngMin: number, latMax: number, lngMax: number, bboxKey: string }}
 */
function snapToChunk(lat, lng) {
  var x = Math.floor(lat / _chunk_js__WEBPACK_IMPORTED_MODULE_3__.CHUNK_SIZE);
  var y = Math.floor(lng / _chunk_js__WEBPACK_IMPORTED_MODULE_3__.CHUNK_SIZE);
  var latMin = Number((x * _chunk_js__WEBPACK_IMPORTED_MODULE_3__.CHUNK_SIZE).toFixed(8));
  var lngMin = Number((y * _chunk_js__WEBPACK_IMPORTED_MODULE_3__.CHUNK_SIZE).toFixed(8));
  var latMax = Number(((x + 1) * _chunk_js__WEBPACK_IMPORTED_MODULE_3__.CHUNK_SIZE).toFixed(8));
  var lngMax = Number(((y + 1) * _chunk_js__WEBPACK_IMPORTED_MODULE_3__.CHUNK_SIZE).toFixed(8));
  return {
    latMin: latMin,
    lngMin: lngMin,
    latMax: latMax,
    lngMax: lngMax,
    bboxKey: "".concat(latMin, "_").concat(lngMin)
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_leaflet_dist_leaflet_css-node_modules_core-js_internals_add-to-unscopabl-467c3d","vendors-node_modules_leaflet_dist_leaflet-src_js-node_modules_leaflet_dist_images_marker-icon-7813c6"], () => (__webpack_exec__("./assets/scripts/Game/game-main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVUEsQ0FBQzZMLElBQUksRUFBVztFQUFBLElBQUFxa0IsU0FBQTtFQUN0QyxJQUFJLENBQUNKLE1BQU0sQ0FBQ2prQixJQUFJLENBQUMsRUFBRTtJQUNmO0VBQ0o7RUFBQyxTQUFBZ0osS0FBQSxHQUFBbk4sU0FBQSxDQUFBdkYsTUFBQSxFQUgrQnNTLElBQUksT0FBQWpKLEtBQUEsQ0FBQXFKLEtBQUEsT0FBQUEsS0FBQSxXQUFBQyxLQUFBLE1BQUFBLEtBQUEsR0FBQUQsS0FBQSxFQUFBQyxLQUFBO0lBQUpMLElBQUksQ0FBQUssS0FBQSxRQUFBcE4sU0FBQSxDQUFBb04sS0FBQTtFQUFBO0VBS3BDLENBQUFvYixTQUFBLEdBQUF4ZixPQUFPLEVBQUMvTSxLQUFLLENBQUFnRSxLQUFBLENBQUF1b0IsU0FBQSxPQUFBdjBCLE1BQUEsQ0FDTCxDQUFBMHpCLGlEQUFRLGFBQVJBLGlEQUFRLHVCQUFSQSxpREFBUSxDQUFHeGpCLElBQUksQ0FBQyxLQUFJQSxJQUFJLFFBQUFsUSxNQUFBLENBQ3pCOFksSUFBSSxDQUNYLENBQUM7QUFDTCxDOzs7Ozs7Ozs7Ozs7OztBQzVETyxJQUFNNGEsUUFBUSxHQUFHO0VBQ3BCSyxPQUFPLEVBQUUsU0FBUztFQUNsQkMsU0FBUyxFQUFFLFdBQVc7RUFDdEJ4ZSxRQUFRLEVBQUUsVUFBVTtFQUNwQjVGLFNBQVMsRUFBRSxXQUFXO0VBQ3RCcE4sTUFBTSxFQUFFLFFBQVE7RUFDaEJ5eEIsT0FBTyxFQUFFLFNBQVM7RUFDbEJDLEtBQUssRUFBRTtBQUNYLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvTGF5ZXJzL2dyaWRMYXllci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2J1aWxkaW5ncy9iYXNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvYnVpbGRpbmdzL2J1aWxkTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2J1aWxkaW5ncy9idWlsZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2RlbGl2ZXJ5L2RlbGl2ZXJ5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvZ2FtZS1tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvaW52ZW50b3J5L2ludmVudG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9kZXBvc2l0cy9kZXBvc2l0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9mb2dPZldhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvcm9hZHMvY2h1bmtDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9yb2Fkcy9pbnZhbGlkYXRlQ2h1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvcm9hZHMvcm9hZFV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwL3JvYWRzL3JvYWRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwL3JvYWRzL3JvYWRzTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvcm9hZHMvcm9hZHNTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9yb2Fkcy96b25lRGVidWdQYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9yb2Fkcy96b25lU3luYy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL25vdGlmaWNhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91aS9kcmF3T25NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91dGlscy9hZG1pbl9jbGlwYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91dGlscy9jaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3V0aWxzL2dwcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3V0aWxzL3NuYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS91dGlscy90aW1lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9MZWFmbGV0V3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy91dGlscy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy91dGlscy90eXBlTWFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2cgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcbmltcG9ydCB7IENIVU5LX1NJWkUgfSBmcm9tICcuLi91dGlscy9jaHVuay5qcyc7XHJcbmltcG9ydCB7IGdldE1hcCwgaXNHcmlkTGF5ZXJBY3RpdmUgfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcclxuaW1wb3J0IHsgcm9hZHNTdGF0ZSB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2Fkc1N0YXRlLmpzJztcclxuaW1wb3J0IHsga25vd25CYm94S2V5cyB9IGZyb20gJy4uL21hcC9yb2Fkcy96b25lU3luYy5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ3JpZExheWVyID0gTC5sYXllckdyb3VwKCk7XHJcblxyXG5jb25zdCB2aXNpYmxlQ2h1bmtzID0gbmV3IE1hcCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRHcmlkTGF5ZXIoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGlmICghaXNHcmlkTGF5ZXJBY3RpdmUoKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHpvb20gPSBtYXAuZ2V0Wm9vbSgpO1xyXG4gICAgaWYgKHpvb20gPCAxNCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGJvdW5kcyA9IG1hcC5nZXRCb3VuZHMoKTtcclxuXHJcbiAgICBjb25zdCBtaW5MYXQgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRTb3V0aCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtYXhMYXQgPSBNYXRoLmNlaWwoYm91bmRzLmdldE5vcnRoKCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1pbkxuZyA9IE1hdGguZmxvb3IoYm91bmRzLmdldFdlc3QoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWF4TG5nID0gTWF0aC5jZWlsKGJvdW5kcy5nZXRFYXN0KCkgLyBDSFVOS19TSVpFKTtcclxuXHJcbiAgICBjb25zdCBuZXdWaXNpYmxlID0gbmV3IFNldCgpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBtaW5MYXQ7IGkgPCBtYXhMYXQ7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSBtaW5Mbmc7IGogPCBtYXhMbmc7IGorKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaWQgPSBgJHtpfV8ke2p9YDtcclxuICAgICAgICAgICAgbmV3VmlzaWJsZS5hZGQoaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZpc2libGVDaHVua3MuaGFzKGlkKSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsYXQgPSBpICogQ0hVTktfU0laRTtcclxuICAgICAgICAgICAgY29uc3QgbG5nID0gaiAqIENIVU5LX1NJWkU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZWN0ID0gTC5yZWN0YW5nbGUoW1xyXG4gICAgICAgICAgICAgICAgW2xhdCwgbG5nXSxcclxuICAgICAgICAgICAgICAgIFtsYXQgKyBDSFVOS19TSVpFLCBsbmcgKyBDSFVOS19TSVpFXVxyXG4gICAgICAgICAgICBdLCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJvcmFuZ2VcIixcclxuICAgICAgICAgICAgICAgIHdlaWdodDogMSxcclxuICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjE1XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVjdC5vbignbW91c2VvdmVyJywgKCkgPT4gcmVjdC5zZXRTdHlsZSh7IGZpbGxPcGFjaXR5OiAwLjMgfSkpO1xyXG4gICAgICAgICAgICByZWN0Lm9uKCdtb3VzZW91dCcsICgpID0+IHJlY3Quc2V0U3R5bGUoeyBmaWxsT3BhY2l0eTogMC4xNSB9KSk7XHJcblxyXG4gICAgICAgICAgICBncmlkTGF5ZXIuYWRkTGF5ZXIocmVjdCk7XHJcblxyXG4gICAgICAgICAgICB2aXNpYmxlQ2h1bmtzLnNldChpZCwgcmVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIPCfp7kgcmVtb3ZlIGNldXggaG9ycyDDqWNyYW5cclxuICAgIGZvciAoY29uc3QgW2lkLCByZWN0XSBvZiB2aXNpYmxlQ2h1bmtzLmVudHJpZXMoKSkge1xyXG4gICAgICAgIGlmICghbmV3VmlzaWJsZS5oYXMoaWQpKSB7XHJcbiAgICAgICAgICAgIGdyaWRMYXllci5yZW1vdmVMYXllcihyZWN0KTtcclxuICAgICAgICAgICAgdmlzaWJsZUNodW5rcy5kZWxldGUoaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWJ1Z0xvZyhcImNodW5rc1wiLCBcIkNodW5rcyB2aXNpYmxlczpcIiwgdmlzaWJsZUNodW5rcy5zaXplKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ0hVTksgQ09MT1JcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENodW5rQ29sb3IoaWQsIGNvbG9yKSB7XHJcbiAgICBpZiAoIWlzR3JpZExheWVyQWN0aXZlKCkpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCByZWN0ID0gdmlzaWJsZUNodW5rcy5nZXQoaWQpO1xyXG4gICAgaWYgKCFyZWN0KSByZXR1cm47XHJcblxyXG4gICAgcmVjdC5zZXRTdHlsZSh7XHJcbiAgICAgICAgY29sb3IsXHJcbiAgICAgICAgZmlsbE9wYWNpdHk6IDAuMlxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZS1jb2xvcmUgdG91dGVzIGxlcyBjZWxsdWxlcyB2aXNpYmxlcyBzZWxvbiBsZXVyIMOpdGF0LlxyXG4gKlxyXG4gKiBSb3VnZSAgID0gem9uZSBQQVMgRU4gQkFTRSAoamFtYWlzIGZldGNow6llKVxyXG4gKiBPcmFuZ2UgID0gZW4gYmFzZSBtYWlzIHBhcyBlbmNvcmUgY2hhcmfDqWUgZGFucyBjZSB2aWV3cG9ydFxyXG4gKiBCbGV1ICAgID0gY2hhcmfDqWUgYXZlYyBhdSBtb2lucyB1bmUgcm91dGVcclxuICogR3JpcyAgICA9IGNoYXJnw6llIG1haXMgdmlkZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hHcmlkQ29sb3JzKCkge1xyXG4gICAgaWYgKCFpc0dyaWRMYXllckFjdGl2ZSgpKSByZXR1cm47XHJcblxyXG4gICAgZm9yIChjb25zdCBbYmJveEtleSwgcmVjdF0gb2YgdmlzaWJsZUNodW5rcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICBsZXQgY29sb3IgPSAnb3JhbmdlJztcclxuICAgICAgICBsZXQgZmlsbE9wYWNpdHkgPSAwLjE1O1xyXG4gICAgICAgIGxldCB3ZWlnaHQgPSAxO1xyXG4gICAgICAgIGxldCBkYXNoQXJyYXkgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmIChrbm93bkJib3hLZXlzLmhhcyhiYm94S2V5KSkge1xyXG4gICAgICAgICAgICAvLyBab25lIGVuIGJhc2UgOiByZWdhcmRlIHNpIGVsbGUgZXN0IGNoYXJnw6llIGRhbnMgY2Ugdmlld3BvcnRcclxuICAgICAgICAgICAgY29uc3QgY2h1bmsgPSByb2Fkc1N0YXRlLmNodW5rc1tiYm94S2V5XTtcclxuICAgICAgICAgICAgaWYgKGNodW5rKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IGNodW5rLmhhc1JvYWRzID8gJ2JsdWUnIDogJyM0NDQnO1xyXG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHkgPSAwLjI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9ICcjOGY4JzsgLy8gZW4gYmFzZSBtYWlzIHBhcyBjaGFyZ8OpIDogdmVydCBww6JsZVxyXG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHkgPSAwLjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBab25lIFBBUyBlbiBiYXNlIDogcm91Z2UgYmllbiB2aXNpYmxlIGF2ZWMgcG9pbnRpbGzDqXNcclxuICAgICAgICAgICAgY29sb3IgPSAnI2U0NCc7XHJcbiAgICAgICAgICAgIHdlaWdodCA9IDI7XHJcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5ID0gMC4yNTtcclxuICAgICAgICAgICAgZGFzaEFycmF5ID0gJzQsIDMnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVjdC5zZXRTdHlsZSh7IGNvbG9yLCBmaWxsT3BhY2l0eSwgd2VpZ2h0LCBkYXNoQXJyYXkgfSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRSZXF1ZXN0KGxhdCwgbG5nLCB0eXBlSWQpIHtcclxuICAgIHJldHVybiBmZXRjaCgnL2FwaS9idWlsZCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGxhdDogbGF0LCBsbmc6IGxuZywgdHlwZV9pZDogdHlwZUlkIH0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1aWxkaW5ncygpIHtcclxuICAgIHJldHVybiBmZXRjaCgnL2FwaS9tYXAtZGF0YScpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVpbGRpbmdDb3N0cyhidWlsZGluZ1R5cGVJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAvYXBpL2J1aWxkaW5nLXR5cGVzLyR7YnVpbGRpbmdUeXBlSWR9L2Nvc3RzYClcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGdyYWRlQnVpbGRpbmcoYnVpbGRpbmdJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAvYXBpL2J1aWxkaW5nLyR7YnVpbGRpbmdJZH0vdXBncmFkZWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVcGdyYWRlSW5mbyhidWlsZGluZ0lkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYC9hcGkvYnVpbGRpbmcvJHtidWlsZGluZ0lkfS91cGdyYWRlLWluZm9gKTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZmx5VG8sIGdldE1hcCB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5pbXBvcnQgeyByb2Fkc1N0YXRlLCBnZXRBbGxMb2FkZWRSb2FkcyB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2Fkc1N0YXRlLmpzJztcclxuaW1wb3J0IHsgZ2V0QnVpbGRpbmdJbWFnZSB9IGZyb20gJy4vYnVpbGRpbmcuanMnO1xyXG5pbXBvcnQgeyBsb2FkVmlzaWJsZVJvYWRDaHVua3MgfSBmcm9tICcuLi9tYXAvcm9hZHMvcm9hZHMuanMnO1xyXG5pbXBvcnQgeyBmaW5kQ2xvc2VzdFBvaW50T25Sb2FkLCBmaW5kQ2xvc2VzdFNlZ21lbnQgfSBmcm9tICcuLi9tYXAvcm9hZHMvcm9hZFV0aWxzLmpzJztcclxuaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4uL25vdGlmaWNhdGlvbnMuanMnO1xyXG5pbXBvcnQgeyBnZXRBZG1pbkNvb3JkcyB9IGZyb20gJy4uL3V0aWxzL2FkbWluX2NsaXBib2FyZC5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcbmltcG9ydCB7IGRyYXdCYXNlQ2lyY2xlLCByZW1vdmVCYXNlQ2lyY2xlIH0gZnJvbSAnLi4vdWkvZHJhd09uTWFwLmpzJztcclxuaW1wb3J0IHsgcmVmcmVzaFNpZGViYXIgfSBmcm9tICcuL2J1aWxkTW9kZS5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDwn6egIFNUQVRFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmxldCBiYXNlTWFya2VyID0gbnVsbDtcclxubGV0IGJhc2VDaXJjbGUgPSBudWxsO1xyXG5sZXQgYmFzZVBvc2l0aW9uID0gbnVsbDtcclxubGV0IGJhc2VDcmVhdGVkID0gZmFsc2U7XHJcbmxldCBwbGFjaW5nQmFzZSA9IGZhbHNlO1xyXG5cclxubGV0IHByZXZpZXdNYXJrZXIgPSBudWxsO1xyXG5sZXQgcHJldmlld0NpcmNsZSA9IG51bGw7XHJcbmxldCBwcmV2aWV3U25hcExhdExuZyA9IG51bGw7XHJcbmxldCBwcmV2aWV3TGluZSA9IG51bGw7XHJcbmxldCBoaWdobGlnaHRlZFNlZ21lbnQgPSBudWxsO1xyXG5cclxubGV0IGN1cnJlbnRQbGF5ZXJGYWN0aW9uID0gJ2RlZmF1bHQnO1xyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNFVCBQTEFZRVIgRkFDVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFBsYXllckZhY3Rpb24oZmFjdGlvbikge1xyXG4gICAgY3VycmVudFBsYXllckZhY3Rpb24gPSAoZmFjdGlvbiB8fCAnZGVmYXVsdCcpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVCBQTEFZRVIgRkFDVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gY3VycmVudFBsYXllckZhY3Rpb247XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVQgVUlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCYXNlVUkoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgY29uc3QgYmFzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNlQnRuJyk7XHJcblxyXG4gICAgYmFzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgbW9kZSA9IGJhc2VCdG4uZGF0YXNldC5tb2RlO1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIENSRUFURSBCQVNFIE1PREUgXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBpZiAobW9kZSA9PT0gJ2NyZWF0ZScpIHtcclxuICAgICAgICAgICAgaWYgKGJhc2VDcmVhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkJhc2UgZMOpasOgIGNyw6nDqWUgIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGxhY2luZ0Jhc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7XHJcblxyXG4gICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwiQ2xpcXVlIHN1ciBsYSBjYXJ0ZSBwb3VyIHBsYWNlciB0YSBiYXNlXCIsICdpbmZvJyk7XHJcbiAgICAgICAgICAgIGxvYWRWaXNpYmxlUm9hZENodW5rcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBSRVRVUk4gQkFTRSBNT0RFXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBpZiAobW9kZSA9PT0gJ3JldHVybicpIHtcclxuICAgICAgICAgICAgaWYgKCFiYXNlUG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQXVjdW5lIGJhc2UgIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmx5VG8oYmFzZVBvc2l0aW9uWzBdLCBiYXNlUG9zaXRpb25bMV0sIDE2KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIENMSUNLIE1BUFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcC5vbignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghcGxhY2luZ0Jhc2UgfHwgYmFzZUNyZWF0ZWQpIHJldHVybjtcclxuICAgICAgICBpZiAoIXByZXZpZXdTbmFwTGF0TG5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IHByZXZpZXdTbmFwTGF0TG5nO1xyXG5cclxuICAgICAgICBpZiAoIWlzQmFzZVBsYWNlbWVudFZhbGlkKGxhdCwgbG5nKSkge1xyXG4gICAgICAgICAgICBhbGVydChcIuKdjCBUcm9wIHByb2NoZSBkJ3VuZSBiYXNlICFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFudXBQcmV2aWV3KG1hcCk7XHJcbiAgICAgICAgY3JlYXRlQmFzZShsYXQsIGxuZyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBNT1VTRSBNT1ZFIChwcmV2aWV3IHNuYXAgcm9hZClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBtYXAub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghcGxhY2luZ0Jhc2UpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9hZHMgPSBnZXRBbGxMb2FkZWRSb2FkcygpO1xyXG5cclxuICAgICAgICBpZiAoIXJvYWRzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBmaW5kQ2xvc2VzdFBvaW50T25Sb2FkKGUubGF0bG5nLCByb2Fkcyk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQucG9pbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgcHJldmlld1NuYXBMYXRMbmcgPSByZXN1bHQucG9pbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBpc0Jhc2VQbGFjZW1lbnRWYWxpZChyZXN1bHQucG9pbnQubGF0LCByZXN1bHQucG9pbnQubG5nKTtcclxuXHJcbiAgICAgICAgY2xlYW51cFByZXZpZXcobWFwKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBpc1ZhbGlkID8gJ2dyZWVuJyA6ICdyZWQnO1xyXG5cclxuICAgICAgICBwcmV2aWV3Q2lyY2xlID0gTC5jaXJjbGUocmVzdWx0LnBvaW50LCB7XHJcbiAgICAgICAgICAgIHJhZGl1czogNjAwLFxyXG4gICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgd2VpZ2h0OiAyLFxyXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMFxyXG4gICAgICAgIH0pLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgICAgIHByZXZpZXdNYXJrZXIgPSBMLm1hcmtlcihyZXN1bHQucG9pbnQpLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgICAgIHByZXZpZXdMaW5lID0gTC5wb2x5bGluZShbZS5sYXRsbmcsIHJlc3VsdC5wb2ludF0sIHtcclxuICAgICAgICAgICAgY29sb3I6ICdjeWFuJyxcclxuICAgICAgICAgICAgd2VpZ2h0OiAyLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgICAgICAgIGRhc2hBcnJheTogJzUsIDUnXHJcbiAgICAgICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IGZpbmRDbG9zZXN0U2VnbWVudChlLmxhdGxuZywgcm9hZHMpO1xyXG5cclxuICAgICAgICBpZiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICBoaWdobGlnaHRlZFNlZ21lbnQgPSBMLnBvbHlsaW5lKHNlZ21lbnQsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAneWVsbG93JyxcclxuICAgICAgICAgICAgICAgIHdlaWdodDogNixcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOFxyXG4gICAgICAgICAgICB9KS5hZGRUbyhtYXApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBVUERBVEUgVklTVUFMIEJBU0UgQU5EIE9USEVSIEJBU0VcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBtYXAub24oJ3pvb21lbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlQmFzZURpc3BsYXkoKTtcclxuICAgICAgICB1cGRhdGVPdGhlckJhc2VzKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUEFUSEZJTkRJTkcgREVCVUcgRk9SIEFETUlOIC0gQ0xJQ0sgVE8gR0VUIENPT1JESU5BVEVTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVBZG1pbkNvb3JkaW5hdGVQaWNrZXIoKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIHNob3dOb3RpZmljYXRpb24oXCJNb2RlIEFkbWluIGFjdGl2w6kgOiBjbGlxdWV6IHN1ciBsYSBjYXJ0ZVwiLCAnaW5mbycpO1xyXG4gICAgICAgIFxyXG4gICAgbWFwLm9uKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZ2V0QWRtaW5Db29yZHMoZS5sYXRsbmcubGF0LCBlLmxhdGxuZy5sbmcpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbndpbmRvdy5lbmFibGVBZG1pbkNvb3JkaW5hdGVQaWNrZXIgPSBlbmFibGVBZG1pbkNvb3JkaW5hdGVQaWNrZXI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDwn6e5IENMRUFOIFBSRVZJRVdcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gY2xlYW51cFByZXZpZXcoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgcHJldmlld01hcmtlciAmJiBtYXAucmVtb3ZlTGF5ZXIocHJldmlld01hcmtlcik7XHJcbiAgICBwcmV2aWV3Q2lyY2xlICYmIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3Q2lyY2xlKTtcclxuICAgIHByZXZpZXdMaW5lICYmIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3TGluZSk7XHJcbiAgICBoaWdobGlnaHRlZFNlZ21lbnQgJiYgbWFwLnJlbW92ZUxheWVyKGhpZ2hsaWdodGVkU2VnbWVudCk7XHJcblxyXG4gICAgcHJldmlld01hcmtlciA9IG51bGw7XHJcbiAgICBwcmV2aWV3Q2lyY2xlID0gbnVsbDtcclxuICAgIHByZXZpZXdMaW5lID0gbnVsbDtcclxuICAgIGhpZ2hsaWdodGVkU2VnbWVudCA9IG51bGw7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGlzQmFzZVBsYWNlbWVudFZhbGlkKGxhdCwgbG5nKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgcmV0dXJuIG90aGVyQmFzZXMuZXZlcnkoYmFzZSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3QgPSBtYXAuZGlzdGFuY2UoXHJcbiAgICAgICAgICAgIFtsYXQsIGxuZ10sXHJcbiAgICAgICAgICAgIFtiYXNlLmxhdCwgYmFzZS5sbmddXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRpc3QgPj0gMTEwMDtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDUkVBVEUgQkFTRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBjcmVhdGVCYXNlKGxhdCwgbG5nKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgcGxhY2luZ0Jhc2UgPSBmYWxzZTtcclxuICAgIGJhc2VQb3NpdGlvbiA9IFtsYXQsIGxuZ107XHJcblxyXG4gICAgZmx5VG8obGF0LCBsbmcpO1xyXG5cclxuICAgIGJhc2VDaXJjbGUgPSBkcmF3QmFzZUNpcmNsZSgncGxheWVyX2Jhc2UnLCBsYXQsIGxuZywgY3VycmVudFBsYXllckZhY3Rpb24sIHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGJhc2VUeXBlSWQgPSAxO1xyXG4gICAgZmV0Y2goJy9hcGkvYnVpbGQnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBsYXQsXHJcbiAgICAgICAgICAgIGxuZyxcclxuICAgICAgICAgICAgdHlwZV9pZDogYmFzZVR5cGVJZFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAoIXJlcy5vaykgcmV0dXJuIHJlcy5qc29uKCkudGhlbihlcnIgPT4geyB0aHJvdyBuZXcgRXJyb3IoZXJyLmVycm9yIHx8IFwiQVBJIGVycm9yXCIpIH0pO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFNpZGViYXIoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSw6ktaW5pdGlhbGlzZXIgbCdVSSBkZSBiYXNlIHBvdXIgcsOpLWF0dGFjaGVyIGxlcyBsaXN0ZW5lcnMgYXV4IG5vdXZlYXV4IGJvdXRvbnNcclxuICAgICAgICAgICAgICAgICAgICBpbXBvcnQoJy4vYmFzZS5qcycpLnRoZW4oKHsgaW5pdEJhc2VVSSB9KSA9PiBpbml0QmFzZVVJKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbilcclxuICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2Jhc2VzJywgXCJFcnJldXIgY3LDqWF0aW9uIGJhc2VcIiwgZXJyKTtcclxuICAgICAgICByZW1vdmVCYXNlKCk7XHJcbiAgICAgICAgYWxlcnQoXCJFcnJldXIgY3LDqWF0aW9uIGJhc2UgOiBcIiArIGVyci5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnJztcclxuICAgIHVwZGF0ZUJhc2VEaXNwbGF5KCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJFTU9WRSBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHJlbW92ZUJhc2UoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgYmFzZU1hcmtlciAmJiBtYXAucmVtb3ZlTGF5ZXIoYmFzZU1hcmtlcik7XHJcbiAgICBiYXNlQ2lyY2xlICYmIG1hcC5yZW1vdmVMYXllcihiYXNlQ2lyY2xlKTtcclxuXHJcbiAgICBiYXNlTWFya2VyID0gbnVsbDtcclxuICAgIGJhc2VDaXJjbGUgPSBudWxsO1xyXG4gICAgYmFzZVBvc2l0aW9uID0gbnVsbDtcclxuICAgIGJhc2VDcmVhdGVkID0gZmFsc2U7XHJcbiAgICBwbGFjaW5nQmFzZSA9IGZhbHNlO1xyXG5cclxuICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnJztcclxufVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBMT0FEIE9USEVSIEJBU0VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxubGV0IG90aGVyQmFzZXMgPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkT3RoZXJCYXNlKGxhdCwgbG5nLCBwc2V1ZG8sIGZhY3Rpb24pIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShsYXQpIHx8ICFOdW1iZXIuaXNGaW5pdGUobG5nKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGlzUGxheWVyQmFzZSA9IGZhY3Rpb24gPT09IGN1cnJlbnRQbGF5ZXJGYWN0aW9uO1xyXG5cclxuICAgIC8vIFV0aWxpc2VyIGRyYXdCYXNlQ2lyY2xlIGRlIGRyYXdPbk1hcC5qc1xyXG4gICAgY29uc3QgY2lyY2xlID0gZHJhd0Jhc2VDaXJjbGUoYG90aGVyXyR7bGF0fV8ke2xuZ31gLCBsYXQsIGxuZywgZmFjdGlvbiwgaXNQbGF5ZXJCYXNlKTtcclxuXHJcbiAgICBjb25zdCBpY29uID0gY3JlYXRlQmFzZUljb24obWFwLmdldFpvb20oKSwgZmFjdGlvbik7XHJcblxyXG4gICAgbGV0IG1hcmtlciA9IG51bGw7XHJcblxyXG4gICAgaWYgKGljb24pIHtcclxuICAgICAgICBtYXJrZXIgPSBMLm1hcmtlcihbbGF0LCBsbmddLCB7IGljb24gfSlcclxuICAgICAgICAgICAgLmFkZFRvKG1hcClcclxuICAgICAgICAgICAgLmJpbmRQb3B1cChg8J+Ple+4jyBCYXNlIGRlICR7cHNldWRvfWApO1xyXG4gICAgfVxyXG5cclxuICAgIG90aGVyQmFzZXMucHVzaCh7IGxhdCwgbG5nLCBwc2V1ZG8sIG1hcmtlciwgY2lyY2xlLCBmYWN0aW9uIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVUERBVEUgT1RIRVIgQkFTRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiB1cGRhdGVPdGhlckJhc2VzKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgY29uc3Qgem9vbSA9IG1hcC5nZXRab29tKCk7XHJcblxyXG4gICAgb3RoZXJCYXNlcy5mb3JFYWNoKGJhc2UgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBpY29uID0gY3JlYXRlQmFzZUljb24oem9vbSwgYmFzZS5mYWN0aW9uKTtcclxuXHJcbiAgICAgICAgaWYgKCFpY29uKSB7XHJcbiAgICAgICAgICAgIGlmIChiYXNlLm1hcmtlcikgbWFwLnJlbW92ZUxheWVyKGJhc2UubWFya2VyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFiYXNlLm1hcmtlcikge1xyXG4gICAgICAgICAgICBiYXNlLm1hcmtlciA9IEwubWFya2VyKFtiYXNlLmxhdCwgYmFzZS5sbmddLCB7IGljb24gfSlcclxuICAgICAgICAgICAgICAgIC5hZGRUbyhtYXApXHJcbiAgICAgICAgICAgICAgICAuYmluZFBvcHVwKGDwn4+V77iPIEJhc2UgZGUgJHtiYXNlLnBzZXVkb31gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXAuaGFzTGF5ZXIoYmFzZS5tYXJrZXIpKSBiYXNlLm1hcmtlci5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBiYXNlLm1hcmtlci5zZXRJY29uKGljb24pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExPQUQgRlJPTSBTRVJWRVJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCYXNlRnJvbVNlcnZlcihsYXQsIGxuZykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShsbmcpKSByZXR1cm47XHJcblxyXG4gICAgYmFzZVBvc2l0aW9uID0gW2xhdCwgbG5nXTtcclxuICAgIGJhc2VDcmVhdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBVdGlsaXNlciBkcmF3QmFzZUNpcmNsZSBkZSBkcmF3T25NYXAuanMgKG5vdHJlIGJhc2UgPSBpc1BsYXllckJhc2UgPSB0cnVlKVxyXG4gICAgYmFzZUNpcmNsZSA9IGRyYXdCYXNlQ2lyY2xlKCdwbGF5ZXJfYmFzZScsIGxhdCwgbG5nLCBjdXJyZW50UGxheWVyRmFjdGlvbiwgdHJ1ZSk7XHJcblxyXG4gICAgdXBkYXRlQmFzZURpc3BsYXkoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVVBEQVRFIEJBU0UgRElTUExBWVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiB1cGRhdGVCYXNlRGlzcGxheSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAoIWJhc2VQb3NpdGlvbikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbihtYXAuZ2V0Wm9vbSgpLCBjdXJyZW50UGxheWVyRmFjdGlvbik7XHJcblxyXG4gICAgaWYgKCFpY29uKSB7XHJcbiAgICAgICAgaWYgKGJhc2VNYXJrZXIpIG1hcC5yZW1vdmVMYXllcihiYXNlTWFya2VyKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFiYXNlTWFya2VyKSB7XHJcbiAgICAgICAgYmFzZU1hcmtlciA9IEwubWFya2VyKGJhc2VQb3NpdGlvbiwgeyBpY29uIH0pLmFkZFRvKG1hcCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghbWFwLmhhc0xheWVyKGJhc2VNYXJrZXIpKSBiYXNlTWFya2VyLmFkZFRvKG1hcCk7XHJcbiAgICAgICAgYmFzZU1hcmtlci5zZXRJY29uKGljb24pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDUkVBVEUgQkFTRSBJQ09OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGNyZWF0ZUJhc2VJY29uKHpvb20sIGZhY3Rpb24pIHtcclxuXHJcbiAgICBpZiAoem9vbSA8IDEzKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBzaXplID0gZmFjdGlvbiAhPT0gJ25vbWFkZXMnID8gKHpvb20gPiAxNSA/IDEwMCA6IDcwKSA6ICh6b29tID4gMTUgPyA3NSA6IDYwKTtcclxuXHJcbiAgICAvLyBUb3Vqb3VycyB1dGlsaXNlciBsJ2ljw7RuZSBkZSBsYSBmYWN0aW9uIChsZSBmYWxsYmFjayBBcGFjaGUgZ8OocmUgbGVzIDQwNClcclxuICAgIC8vIFNpIGwnaWPDtG5lIG4nZXhpc3RlIHBhcywgQXBhY2hlIHJlZGlyaWdlIHZlcnMgZGVmYXVsdCBhdXRvbWF0aXF1ZW1lbnRcclxuICAgIGNvbnN0IGljb25VcmwgPSBnZXRCdWlsZGluZ0ltYWdlKGZhY3Rpb24sICdiYXNlJyk7XHJcblxyXG4gICAgcmV0dXJuIEwuaWNvbih7XHJcbiAgICAgICAgaWNvblVybDogaWNvblVybCxcclxuICAgICAgICBpY29uU2l6ZTogW3NpemUsIHNpemVdLFxyXG4gICAgICAgIGljb25BbmNob3I6IFtzaXplIC8gMiwgc2l6ZSAvIDJdLFxyXG4gICAgICAgIHBvcHVwQW5jaG9yOiBbMCwgLXNpemUgLyAyXVxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5pbXBvcnQgeyBnZXRCdWlsZGluZ0Nvc3RzLCBidWlsZFJlcXVlc3QgfSBmcm9tICcuLi9hcGkuanMnO1xyXG5pbXBvcnQgeyBnZXRCdWlsZGluZ0ltYWdlIH0gZnJvbSAnLi9idWlsZGluZy5qcyc7XHJcbmltcG9ydCB7IHNob3dOb3RpZmljYXRpb24gfSBmcm9tICcuLi9ub3RpZmljYXRpb25zLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEJVSUxEIE1PREUgU1RBVEVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxubGV0IHNlbGVjdGVkQnVpbGRpbmdUeXBlID0gbnVsbDtcclxubGV0IHByZXZpZXdCdWlsZGluZ01hcmtlciA9IG51bGw7XHJcblxyXG4vKipcclxuICogSW5pdGlhbGlzZSBsZSBtb2RlIGNvbnN0cnVjdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCdWlsZE1vZGUoKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICAvLyBVdGlsaXNlciBsYSBkw6lsw6lnYXRpb24gZCfDqXbDqW5lbWVudHMgcG91ciBsZXMgYm91dG9ucyBkeW5hbWlxdWVzXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnRuID0gZS50YXJnZXQuY2xvc2VzdCgnLmJ1aWxkLWl0ZW0nKTtcclxuICAgICAgICBpZiAoIWJ0bikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB0eXBlSWQgPSBidG4uZGF0YXNldC50eXBlSWQ7XHJcbiAgICAgICAgaWYgKCF0eXBlSWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gU8OpbGVjdGlvbm5lciBsZSB0eXBlIGRlIGLDonRpbWVudFxyXG4gICAgICAgIGF3YWl0IHNlbGVjdEJ1aWxkaW5nVHlwZSh0eXBlSWQsIGJ0bik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbGljayBzdXIgbGEgY2FydGUgcG91ciBjb25zdHJ1aXJlXHJcbiAgICBtYXAub24oJ2NsaWNrJywgb25NYXBDbGljayk7XHJcblxyXG4gICAgLy8gTW91c2UgbW92ZSBwb3VyIHByw6l2aXN1YWxpc2VyXHJcbiAgICBtYXAub24oJ21vdXNlbW92ZScsIG9uTWFwTW91c2VNb3ZlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFPDqWxlY3Rpb25uZSB1biB0eXBlIGRlIGLDonRpbWVudCDDoCBjb25zdHJ1aXJlXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBzZWxlY3RCdWlsZGluZ1R5cGUodHlwZUlkLCBidXR0b24pIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIC8vIETDqXPDqWxlY3Rpb25uZXIgcHLDqWPDqWRlbW1lbnRcclxuICAgIGNsZWFyQnVpbGRpbmdTZWxlY3Rpb24oKTtcclxuXHJcbiAgICAvLyBHw6lyZXIgbGUgY2FzIHNww6ljaWFsIGRlIGxhIGJhc2UgKGJvdXRvbiAjYmFzZUJ0bilcclxuICAgIGlmIChidXR0b24uaWQgPT09ICdiYXNlQnRuJyAmJiB0eXBlSWQgPT0gMSkge1xyXG4gICAgICAgIC8vIExhIGJhc2UgZXN0IGfDqXLDqWUgcGFyIGJhc2UuanMsIG9uIG5lIGZhaXQgcmllbiBpY2lcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWV0dHJlIGVuIMOpdmlkZW5jZSBsZSBib3V0b24gc8OpbGVjdGlvbm7DqVxyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcblxyXG4gICAgLy8gUsOpY3Vww6lyZXIgbGVzIGNvw7t0c1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0QnVpbGRpbmdDb3N0cyh0eXBlSWQpO1xyXG4gICAgICAgIHNlbGVjdGVkQnVpbGRpbmdUeXBlID0ge1xyXG4gICAgICAgICAgICBpZDogdHlwZUlkLFxyXG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgIGNvc3RzOiBkYXRhLmNvc3RzLFxyXG4gICAgICAgICAgICBidXR0b246IGJ1dHRvblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNob3dOb3RpZmljYXRpb24oYFPDqWxlY3Rpb25uw6k6ICR7ZGF0YS5uYW1lfS4gQ2xpcXVlIHN1ciBsYSBjYXJ0ZSBwb3VyIGNvbnN0cnVpcmUuYCwgJ2luZm8nKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyBjb8O7dHNcIiwgZSk7XHJcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbihcIkVycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyBjb8O7dHNcIiwgJ2Vycm9yJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBOZXR0b2llIGxhIHPDqWxlY3Rpb24gYWN0dWVsbGVcclxuICovXHJcbmZ1bmN0aW9uIGNsZWFyQnVpbGRpbmdTZWxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAocHJldmlld0J1aWxkaW5nTWFya2VyKSB7XHJcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdCdWlsZGluZ01hcmtlcik7XHJcbiAgICAgICAgcHJldmlld0J1aWxkaW5nTWFya2VyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RlZEJ1aWxkaW5nVHlwZSA9IG51bGw7XHJcblxyXG4gICAgLy8gUmV0aXJlciBsYSBjbGFzc2Ugc2VsZWN0ZWQgZGUgdG91cyBsZXMgYm91dG9uc1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1aWxkLWl0ZW0nKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdlc3Rpb24gZHUgY2xpY2sgc3VyIGxhIGNhcnRlXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBvbk1hcENsaWNrKGUpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghc2VsZWN0ZWRCdWlsZGluZ1R5cGUpIHJldHVybjtcclxuICAgIGlmICghcHJldmlld0J1aWxkaW5nTWFya2VyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbGF0ID0gZS5sYXRsbmcubGF0O1xyXG4gICAgY29uc3QgbG5nID0gZS5sYXRsbmcubG5nO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBidWlsZFJlcXVlc3QobGF0LCBsbmcsIHNlbGVjdGVkQnVpbGRpbmdUeXBlLmlkKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgZGVidWdMb2coJ2J1aWxkaW5ncycsIGAke3NlbGVjdGVkQnVpbGRpbmdUeXBlLm5hbWV9IGNvbnN0cnVpdCBhdmVjIHN1Y2PDqHMgIWApO1xyXG4gICAgICAgICAgICAvLyBOZXR0b3llclxyXG4gICAgICAgICAgICBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0J1aWxkaW5nTWFya2VyKTtcclxuICAgICAgICAgICAgcHJldmlld0J1aWxkaW5nTWFya2VyID0gbnVsbDtcclxuICAgICAgICAgICAgY2xlYXJCdWlsZGluZ1NlbGVjdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmFmcmHDrmNoaXIgbGEgc2lkZWJhciBzaSBuw6ljZXNzYWlyZVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZWZyZXNoU2lkZWJhcikge1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFNpZGViYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIGBFcnJldXI6ICR7ZGF0YS5lcnJvcn1gKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgbG9ycyBkZSBsYSBjb25zdHJ1Y3Rpb25cIiwgZSk7XHJcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbihcIkVycmV1ciByw6lzZWF1IGxvcnMgZGUgbGEgY29uc3RydWN0aW9uXCIsICdlcnJvcicpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogUHLDqXZpc3VhbGlzYXRpb24gZGUgbGEgcG9zaXRpb24gZGUgY29uc3RydWN0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBvbk1hcE1vdXNlTW92ZShlKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAoIXNlbGVjdGVkQnVpbGRpbmdUeXBlKSB7XHJcbiAgICAgICAgLy8gTmV0dG95ZXIgbGVzIG1hcmtlcnMgZGUgcHLDqXZpc3VhbGlzYXRpb25cclxuICAgICAgICBpZiAocHJldmlld0J1aWxkaW5nTWFya2VyKSB7XHJcbiAgICAgICAgICAgIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3QnVpbGRpbmdNYXJrZXIpO1xyXG4gICAgICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWpvdXRlciB1biBtYXJrZXIgZGUgcHLDqXZpc3VhbGlzYXRpb25cclxuICAgIGlmICghcHJldmlld0J1aWxkaW5nTWFya2VyKSB7XHJcbiAgICAgICAgcHJldmlld0J1aWxkaW5nTWFya2VyID0gTC5tYXJrZXIoW2UubGF0bG5nLmxhdCwgZS5sYXRsbmcubG5nXSkuYWRkVG8obWFwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJldmlld0J1aWxkaW5nTWFya2VyLnNldExhdExuZyhlLmxhdGxuZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBY3RpdmUgbGUgbW9kZSBjb25zdHJ1Y3Rpb24gcG91ciB1biB0eXBlIGRlIGLDonRpbWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlQnVpbGRNb2RlKHR5cGVJZCkge1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdHlwZS1pZD1cIiR7dHlwZUlkfVwiXWApO1xyXG4gICAgaWYgKGJ0bikge1xyXG4gICAgICAgIGJ0bi5jbGljaygpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRMOpc2FjdGl2ZSBsZSBtb2RlIGNvbnN0cnVjdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGVCdWlsZE1vZGUoKSB7XHJcbiAgICBjbGVhckJ1aWxkaW5nU2VsZWN0aW9uKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWw6lyaWZpZSBzaSBsZSBtb2RlIGNvbnN0cnVjdGlvbiBlc3QgYWN0aWZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0J1aWxkTW9kZUFjdGl2ZSgpIHtcclxuICAgIHJldHVybiBzZWxlY3RlZEJ1aWxkaW5nVHlwZSAhPT0gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJhZnJhw65jaGl0IGxlIGNvbnRlbnUgZGUgbGEgc2lkZWJhclxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hTaWRlYmFyKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvc2lkZWJhcicpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTaWRlYmFyID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJyNzaWRlQmFyJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV3U2lkZWJhcikge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGVCYXInKT8ucmVwbGFjZVdpdGgobmV3U2lkZWJhcik7XHJcbiAgICAgICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKCdTaWRlYmFyIGFjdHVhbGlzw6llJywgJ2luZm8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGR1IHJhZnJhw65jaGlzc2VtZW50IGRlIGxhIHNpZGViYXJcIiwgZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5pbXBvcnQgeyBnZXRCdWlsZGluZ0Nvc3RzLCB1cGdyYWRlQnVpbGRpbmcsIGdldFVwZ3JhZGVJbmZvIH0gZnJvbSAnLi4vYXBpLmpzJztcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFBsYXllckZhY3Rpb24gfSBmcm9tICcuL2Jhc2UuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5cclxuLy8gQ2FjaGUgZGVzIGluZm9ybWF0aW9ucyBkZSBiw6J0aW1lbnRzXHJcbmxldCBidWlsZGluZ01hcmtlcnMgPSBuZXcgTWFwKCk7XHJcblxyXG4vLyBDYWNoZSBkZXMgcG9wdXBzIGTDqWrDoCBjaGFyZ8Opc1xyXG5sZXQgcG9wdXBDb250ZW50TG9hZGVkID0gbmV3IFNldCgpO1xyXG5cclxuLy8gSUQgZHUgam91YWN0aWYgKHV0aWxpc8OpIHBvdXIgZmlsdHJlciBsZXMgYsOidGltZW50cyBcIsOgIG1vaVwiKVxyXG5sZXQgY3VycmVudFBsYXllcklkID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBEw6lmaW5pdCBsJ0lEIGR1IGpvdWV1ciBhY3RpZi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50UGxheWVySWQoaWQpIHtcclxuICAgIGN1cnJlbnRQbGF5ZXJJZCA9IGlkO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0b3VybmUgbCdJRCBkdSBqb3VldXIgYWN0aWYuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXllcklkKCkge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXJJZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoYXJnZSBsZXMgYsOidGltZW50cyBzdXIgbGEgY2FydGUgYXZlYyBsZXVycyBwb3B1cHMgaW50ZXJhY3RpZnNcclxuICogQHBhcmFtIHtBcnJheX0gYnVpbGRpbmdzIC0gTGlzdGUgZGVzIGLDonRpbWVudHMgw6AgYWZmaWNoZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQnVpbGRpbmdzRnJvbURhdGEoYnVpbGRpbmdzKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAoIW1hcCkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiTWFwIG5vdCBpbml0aWFsaXplZFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFidWlsZGluZ3MgfHwgIUFycmF5LmlzQXJyYXkoYnVpbGRpbmdzKSkge1xyXG4gICAgICAgIGRlYnVnV2FybignYnVpbGRpbmdzJywgXCJsb2FkQnVpbGRpbmdzRnJvbURhdGE6IGludmFsaWQgYnVpbGRpbmdzIGRhdGFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkaW5ncy5mb3JFYWNoKGIgPT4ge1xyXG4gICAgICAgIC8vIElnbm9yZXIgbGVzIGJhc2VzIC0gZWxsZXMgc29udCBnw6lyw6llcyBwYXIgYmFzZS5qc1xyXG4gICAgICAgIGlmIChiLmNvZGUgPT09ICdiYXNlJyB8fCBiLnR5cGU/LnRvTG93ZXJDYXNlKCkgPT09ICdiYXNlJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShiLmxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShiLmxuZykpIHtcclxuICAgICAgICAgICAgZGVidWdXYXJuKCdidWlsZGluZ3MnLCBcIuKdjCBCdWlsZGluZyBpZ25vcsOpIChjb29yZCBpbnZhbGlkZSlcIiwgYik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFV0aWxpc2VyIGxhIGZhY3Rpb24gZHUgYsOidGltZW50IChvdSBmYWxsYmFjayBzdXIgbGEgZmFjdGlvbiBkdSBqb3VldXIpXHJcbiAgICAgICAgY29uc3QgYnVpbGRpbmdGYWN0aW9uID0gYi5mYWN0aW9uIHx8IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIENyw6llciBsJ2ljw7RuZSBhdmVjIGwnaW1hZ2UgZHUgYsOidGltZW50XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGNyZWF0ZUJ1aWxkaW5nSWNvbihiLmNvZGUsIGJ1aWxkaW5nRmFjdGlvbik7XHJcblxyXG4gICAgICAgIC8vIFN0b2NrZXIgbGVzIGRvbm7DqWVzIGR1IGJ1aWxkaW5nIHBvdXIgYWNjw6hzIHVsdMOpcmlldXJcclxuICAgICAgICBjb25zdCBidWlsZGluZ0RhdGEgPSB7XHJcbiAgICAgICAgICAgIGlkOiBiLmlkLFxyXG4gICAgICAgICAgICB0eXBlOiBiLnR5cGUsXHJcbiAgICAgICAgICAgIGxldmVsOiBiLmxldmVsLFxyXG4gICAgICAgICAgICBjb2RlOiBiLmNvZGUsXHJcbiAgICAgICAgICAgIGZhY3Rpb246IGJ1aWxkaW5nRmFjdGlvbixcclxuICAgICAgICAgICAgb3duZXJJZDogYi5vd25lcklkLFxyXG4gICAgICAgICAgICBpc01pbmU6IEJvb2xlYW4oYi5pc01pbmUpLFxyXG4gICAgICAgICAgICBwcm9kdWN0aW9uOiBiLnByb2R1Y3Rpb24gfHwgbnVsbCxcclxuICAgICAgICAgICAgcmVzb3VyY2VfdHlwZTogYi5yZXNvdXJjZV90eXBlIHx8IG51bGwsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQ3LDqWVyIGxlIG1hcmtlciBhdmVjIHBvcHVwIHZpZGUgKGNoYXJnw6kgYXUgbW9tZW50IGRlIGwnb3V2ZXJ0dXJlKVxyXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IEwubWFya2VyKFtiLmxhdCwgYi5sbmddLCB7IGljb24gfSlcclxuICAgICAgICAgICAgLmFkZFRvKG1hcClcclxuICAgICAgICAgICAgLmJpbmRQb3B1cChjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZ0RhdGEpKTtcclxuXHJcbiAgICAgICAgYnVpbGRpbmdNYXJrZXJzLnNldChiLmlkLCB7IG1hcmtlciwgZGF0YTogYnVpbGRpbmdEYXRhIH0pO1xyXG5cclxuICAgICAgICAvLyDDiWNvdXRlciBsJ291dmVydHVyZSBkZSBsYSBwb3B1cCBwb3VyIGNoYXJnZXIgbGUgY29udGVudVxyXG4gICAgICAgIG1hcmtlci5vbigncG9wdXBvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVQb3B1cE9wZW4oYnVpbGRpbmdEYXRhLCBtYXJrZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDZW50cmFsaXNlIGxhIGxvZ2lxdWUgcG9wdXBcclxuICovXHJcbmZ1bmN0aW9uIGhhbmRsZVBvcHVwT3BlbihidWlsZGluZ0RhdGEsIG1hcmtlcikge1xyXG4gICAgaWYgKCFidWlsZGluZ0RhdGE/LmlkKSByZXR1cm47XHJcblxyXG4gICAgaWYgKCFpc093bkJ1aWxkaW5nKGJ1aWxkaW5nRGF0YSkpIHtcclxuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nRGF0YSkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbG9hZFVwZ3JhZGVJbmZvQXN5bmMoYnVpbGRpbmdEYXRhLmlkLCBtYXJrZXIsIGJ1aWxkaW5nRGF0YSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWw6lyaWZpZSBzaSBsZSBiw6J0aW1lbnQgYXBwYXJ0aWVudCBhdSBqb3VldXIgYWN0aWZcclxuICovXHJcbmZ1bmN0aW9uIGlzT3duQnVpbGRpbmcoYnVpbGRpbmcpIHtcclxuICAgIHJldHVybiBidWlsZGluZy5pc01pbmUgPT09IHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcsOpZSB1biBwb3B1cCBzaW1wbGUgKHN5bmNocm9uZSlcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGluZy1wb3B1cFwiPlxyXG4gICAgICAgICAgICA8aDM+JHtidWlsZGluZy50eXBlIHx8ICdCw6J0aW1lbnQnfTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hhcmdlIGxlcyBpbmZvcyBkJ2Ftw6lsaW9yYXRpb24gZW4gYXJyacOocmUtcGxhblxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbG9hZFVwZ3JhZGVJbmZvQXN5bmMoYnVpbGRpbmdJZCwgbWFya2VyLCBidWlsZGluZ0RhdGEpIHtcclxuICAgIC8vIE5lIHBhcyBjaGFyZ2VyIGxlcyBpbmZvcyBkJ2Ftw6lsaW9yYXRpb24gcG91ciBsZXMgYsOidGltZW50cyBlbm5lbWlzXHJcbiAgICBpZiAoIWlzT3duQnVpbGRpbmcoYnVpbGRpbmdEYXRhKSkge1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYnVpbGRpbmdJZCkge1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIMOJdml0ZXIgZGUgcmVjaGFyZ2VyIHNpIGTDqWrDoCBjaGFyZ8OpXHJcbiAgICBpZiAocG9wdXBDb250ZW50TG9hZGVkLmhhcyhidWlsZGluZ0lkKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBvcHVwQ29udGVudExvYWRlZC5hZGQoYnVpbGRpbmdJZCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBDaGFyZ2VyIGRpcmVjdGVtZW50IGxlIGNvbnRlbnUgZHUgcG9wdXBcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9idWlsZGluZ3MvJHtidWlsZGluZ0lkfS9wb3B1cC1jb250ZW50YCk7XHJcblxyXG4gICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICAgIGRlYnVnV2FybignYnVpbGRpbmdzJywgYEVycmV1ciBBUEkgcG9wdXAtY29udGVudCAoYnVpbGRpbmcgJHtidWlsZGluZ0lkfSk6YCwgcmVzLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXMudGV4dCgpO1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoaHRtbCk7XHJcbiAgICAgICAgYnVpbGRpbmdNYXJrZXJzLnNldChidWlsZGluZ0lkLCB7IG1hcmtlciwgZGF0YTogYnVpbGRpbmdEYXRhIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZHUgcG9wdXBcIiwgZSk7XHJcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZ0RhdGEpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENoYXJnZSBsZXMgYsOidGltZW50cyBkZXB1aXMgbCdBUEkgKGZvbmN0aW9uIGRlIGNvbXBhdGliaWxpdMOpKVxyXG4gKiBAZGVwcmVjYXRlZCBVdGlsaXNlciBsb2FkQnVpbGRpbmdzRnJvbURhdGEoZGF0YSkgw6AgbGEgcGxhY2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQnVpbGRpbmdzKCkge1xyXG4gICAgZmV0Y2goJy9hcGkvbWFwLWRhdGEnKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBsb2FkQnVpbGRpbmdzRnJvbURhdGEoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgY2hhcmdlbWVudCBiw6J0aW1lbnRzXCIsIGVycik7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcsOpZSB1bmUgaWPDtG5lIChtYXJrZXIpIHBvdXIgdW4gYsOidGltZW50IGF2ZWMgc29uIGltYWdlIHNww6ljaWZpcXVlLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYnVpbGRpbmdDb2RlIC0gTGUgY29kZSBkdSBiw6J0aW1lbnQgKGV4OiBcImJhc2VcIiwgXCJpcm9uX21pbmVcIikuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmYWN0aW9uIC0gTGEgZmFjdGlvbiBkdSBiw6J0aW1lbnQgKG9wdGlvbm5lbCwgZmFsbGJhY2sgc3VyIGxlIGpvdWV1ciBhY3R1ZWwpLlxyXG4gKiBAcmV0dXJucyB7TC5JY29ufSBMJ2ljw7RuZSBMZWFmbGV0IHBlcnNvbm5hbGlzw6llLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1aWxkaW5nSWNvbihidWlsZGluZ0NvZGUsIGZhY3Rpb24gPSBudWxsKSB7XHJcbiAgICBjb25zdCBhY3R1YWxGYWN0aW9uID0gZmFjdGlvbiB8fCBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xyXG4gICAgY29uc3Qgc2l6ZSA9IDcwOyAvLyBUYWlsbGUgcGFyIGTDqWZhdXQgZGVzIGljw7RuZXNcclxuXHJcbiAgICByZXR1cm4gTC5pY29uKHtcclxuICAgICAgICBpY29uVXJsOiBnZXRCdWlsZGluZ0ltYWdlKGFjdHVhbEZhY3Rpb24sIGJ1aWxkaW5nQ29kZSksXHJcbiAgICAgICAgaWNvblNpemU6IFtzaXplLCBzaXplXSxcclxuICAgICAgICBpY29uQW5jaG9yOiBbc2l6ZSAvIDIsIHNpemUgLyAyXSxcclxuICAgICAgICBwb3B1cEFuY2hvcjogWzAsIC1zaXplIC8gMl1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0b3VybmUgZHluYW1pcXVlbWVudCBsZSBjaGVtaW4gZGUgbCdpbWFnZSBhdmVjIGZhbGxiYWNrIHZlcnMgZGVmYXVsdC5cclxuICogQHBhcmFtIHtzdHJpbmd9IGZhY3Rpb24gLSBMZSBjb2RlIG91IG5vbSBkZSBsYSBmYWN0aW9uIChleDogXCJFbXBpcmVcIiwgXCJDZW5kcmVzXCIpLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYnVpbGRpbmcgLSBMZSBjb2RlIGR1IGLDonRpbWVudCAoZXg6IFwiYmFzZVwiLCBcImlyb25fbWluZVwiKS5cclxuICogQHJldHVybnMge3N0cmluZ30gTGUgY2hlbWluIGRlIGwnaWPDtG5lLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1aWxkaW5nSW1hZ2UoZmFjdGlvbiwgYnVpbGRpbmcpIHtcclxuICAgIC8vIE5vcm1hbGlzZXIgbGUgbm9tIGR1IGJ1aWxkaW5nIHBvdXIgbCdpbWFnZSAocmVtcGxhY2VyIGVzcGFjZXMgZXQgY2FyYWN0w6hyZXMgc3DDqWNpYXV4KVxyXG4gICAgY29uc3QgYnVpbGRpbmdTbHVnID0gYnVpbGRpbmcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICdfJykucmVwbGFjZSgvW15hLXowLTlfXS9nLCAnJyk7XHJcbiAgICBjb25zdCBmYWN0aW9uU2x1ZyA9IChmYWN0aW9uIHx8ICdkZWZhdWx0JykudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAvLyBUb3Vqb3VycyB1dGlsaXNlciBsJ2ljw7RuZSBkZSBsYSBmYWN0aW9uIGVuIHByZW1pZXJcclxuICAgIC8vIExlIHNlcnZldXIgb3UgbGUgbmF2aWdhdGV1ciBnw6lyZXJhIGxlIGZhbGxiYWNrIHNpIGwnaWPDtG5lIG4nZXhpc3RlIHBhc1xyXG4gICAgLy8gU2kgbGEgZmFjdGlvbiBlc3QgJ2RlZmF1bHQnLCB1dGlsaXNlciBsJ2ljw7RuZSBkZWZhdWx0IGRpcmVjdGVtZW50XHJcbiAgICBpZiAoZmFjdGlvblNsdWcgPT09ICdkZWZhdWx0Jykge1xyXG4gICAgICAgIHJldHVybiBgL2Fzc2V0cy9pbWFnZXMvYnVpbGRpbmdzL2RlZmF1bHQvJHtidWlsZGluZ1NsdWd9LnBuZ2A7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAvYXNzZXRzL2ltYWdlcy9idWlsZGluZ3MvJHtmYWN0aW9uU2x1Z30vJHtidWlsZGluZ1NsdWd9LnBuZ2A7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbcOpbGlvcmUgdW4gYsOidGltZW50XHJcbiAqL1xyXG53aW5kb3cudXBncmFkZUJ1aWxkaW5nID0gYXN5bmMgZnVuY3Rpb24oYnVpbGRpbmdJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVwZ3JhZGVCdWlsZGluZyhidWlsZGluZ0lkKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgLy8gSW52YWxpZGVyIGxlIGNhY2hlIHBvdXIgZm9yY2VyIGxlIHJlY2hhcmdlbWVudFxyXG4gICAgICAgICAgICBwb3B1cENvbnRlbnRMb2FkZWQuZGVsZXRlKGJ1aWxkaW5nSWQpO1xyXG5cclxuICAgICAgICAgICAgLy8gTWV0dHJlIMOgIGpvdXIgbGUgbWFycXVldXJcclxuICAgICAgICAgICAgY29uc3QgZW50cnkgPSBidWlsZGluZ01hcmtlcnMuZ2V0KGJ1aWxkaW5nSWQpO1xyXG4gICAgICAgICAgICBpZiAoZW50cnkpIHtcclxuICAgICAgICAgICAgICAgIGVudHJ5LmRhdGEubGV2ZWwgPSBkYXRhLm5ld0xldmVsO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFya2VyID0gZW50cnkubWFya2VyO1xyXG4gICAgICAgICAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChlbnRyeS5kYXRhKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVjaGFyZ2VyIGxlcyBpbmZvcyBkJ2Ftw6lsaW9yYXRpb25cclxuICAgICAgICAgICAgICAgIGxvYWRVcGdyYWRlSW5mb0FzeW5jKGJ1aWxkaW5nSWQsIG1hcmtlciwgZW50cnkuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWxlcnQoJ0LDonRpbWVudCBhbcOpbGlvcsOpIGF2ZWMgc3VjY8OocyAhJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJFcnJldXI6IFwiICsgKGRhdGEuZXJyb3IgfHwgXCJJbXBvc3NpYmxlIGQnYW3DqWxpb3JlciBsZSBiw6J0aW1lbnRcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGRlIGwnYW3DqWxpb3JhdGlvblwiLCBlKTtcclxuICAgICAgICBhbGVydChcIkVycmV1ciByw6lzZWF1IGxvcnMgZGUgbCdhbcOpbGlvcmF0aW9uXCIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldG91cm5lIGxlcyBpbmZvcm1hdGlvbnMgc3VyIGxlcyBjb8O7dHMgZGUgY29uc3RydWN0aW9uIGQndW4gdHlwZSBkZSBiw6J0aW1lbnRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCdWlsZGluZ1R5cGVDb3N0cyhidWlsZGluZ1R5cGVJZCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJ1aWxkaW5nQ29zdHMoYnVpbGRpbmdUeXBlSWQpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZXMgY2/Du3RzXCIsIGUpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVsOpcmlmaWUgc2kgbGUgam91ZXVyIHBldXQgY29uc3RydWlyZSB1biBiw6J0aW1lbnRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYW5CdWlsZEJ1aWxkaW5nKGJ1aWxkaW5nVHlwZUlkKSB7XHJcbiAgICBjb25zdCBjb3N0cyA9IGF3YWl0IGdldEJ1aWxkaW5nVHlwZUNvc3RzKGJ1aWxkaW5nVHlwZUlkKTtcclxuICAgIGlmICghY29zdHMpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3BsYXllci1yZXNvdXJjZXMnKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgcmVzb3VyY2VzID0ge307XHJcbiAgICBkYXRhLnJlc291cmNlcy5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAgIHJlc291cmNlc1tyLnR5cGVdID0gci5xdWFudGl0eTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAoY29uc3QgW3Jlc291cmNlLCBhbW91bnRdIG9mIE9iamVjdC5lbnRyaWVzKGNvc3RzLmNvc3RzKSkge1xyXG4gICAgICAgIGlmICgocmVzb3VyY2VzW3Jlc291cmNlXSB8fCAwKSA8IGFtb3VudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaEJ1aWxkaW5nUG9wdXAoYnVpbGRpbmdJZCkge1xyXG4gICAgY29uc3QgZW50cnkgPSBidWlsZGluZ01hcmtlcnMuZ2V0KGJ1aWxkaW5nSWQpO1xyXG5cclxuICAgIGlmICghZW50cnkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT3B0aW9ubmVsIDogdW5pcXVlbWVudCBzaSBsZSBwb3B1cCBlc3Qgb3V2ZXJ0XHJcbiAgICBpZiAoIWVudHJ5Lm1hcmtlci5pc1BvcHVwT3BlbigpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGxvYWRVcGdyYWRlSW5mb0FzeW5jKFxyXG4gICAgICAgIGJ1aWxkaW5nSWQsXHJcbiAgICAgICAgZW50cnkubWFya2VyLFxyXG4gICAgICAgIGVudHJ5LmRhdGFcclxuICAgICk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5pbXBvcnQgeyBkcmF3Um9hZFNlZ21lbnQgfSBmcm9tICcuLi91aS9kcmF3T25NYXAuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnLi4vdXRpbHMvdGltZXIuanMnO1xyXG5cclxuLy8gU3RhdGVcclxuY29uc3QgYWN0aXZlRGVsaXZlcmllcyA9IG5ldyBNYXAoKTtcclxubGV0IGRlbGl2ZXJ5TGF5ZXIgPSBudWxsO1xyXG5sZXQgYW5pbWF0aW9uRnJhbWUgPSBudWxsO1xyXG5jb25zdCBwZW5kaW5nRXZlbnRzID0gW107XHJcblxyXG5jb25zdCB0cnVja0ljb24gPSBMLmRpdkljb24oe1xyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIGh0bWw6ICc8ZGl2IHN0eWxlPVwiZm9udC1zaXplOjE4cHhcIj7wn5qaPC9kaXY+JyxcclxuICAgIGljb25TaXplOiBbMjAsIDIwXSxcclxuICAgIGljb25BbmNob3I6IFsxMCwgMTBdXHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5JVFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdERlbGl2ZXJ5RXZlbnRzKCkge1xyXG4gICAgaW5pdERlbGl2ZXJ5TGF5ZXJzKCk7XHJcbiAgICBsb2FkRGVsaXZlcmllcygpO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2dhbWU6ZXZlbnQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBlLmRldGFpbDtcclxuICAgICAgICBpZiAoZGF0YS50eXBlICE9PSAnZGVsaXZlcnlfdXBkYXRlJykgcmV0dXJuO1xyXG5cclxuICAgICAgICBoYW5kbGVEZWxpdmVyeUV2ZW50KHtcclxuICAgICAgICAgICAgZGVsaXZlcnlJZDogICAgZGF0YS5kZWxpdmVyeUlkLFxyXG4gICAgICAgICAgICBidWlsZGluZ0lkOiAgICBkYXRhLmJ1aWxkaW5nSWQsXHJcbiAgICAgICAgICAgIHN0YXR1czogICAgICAgIGRhdGEuc3RhdHVzLFxyXG4gICAgICAgICAgICBwcm9ncmVzczogICAgICBkYXRhLnByb2dyZXNzLFxyXG4gICAgICAgICAgICB3YXlwb2ludHM6ICAgICBkYXRhLndheXBvaW50cyxcclxuICAgICAgICAgICAgcmVzb3VyY2U6ICAgICAgZGF0YS5yZXNvdXJjZUNvZGUsXHJcbiAgICAgICAgICAgIHJlc291cmNlTGFiZWw6IGRhdGEucmVzb3VyY2VMYWJlbCxcclxuICAgICAgICAgICAgcXVhbnRpdHk6ICAgICAgZGF0YS5xdWFudGl0eSxcclxuICAgICAgICAgICAgZXN0aW1hdGVkVGltZTogZGF0YS5kdXJhdGlvbixcclxuICAgICAgICAgICAgc2NoZWR1bGVkQXQ6ICAgZGF0YS5zY2hlZHVsZWRBdCxcclxuICAgICAgICAgICAgZmFjdGlvbjogICAgICAgZGF0YS5mYWN0aW9uID8/ICdkZWZhdWx0JyxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJTklUIExBWUVSU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdERlbGl2ZXJ5TGF5ZXJzKCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGlmICghZGVsaXZlcnlMYXllciB8fCBkZWxpdmVyeUxheWVyLl9tYXAgIT09IG1hcCkge1xyXG5cclxuICAgICAgICBpZiAoZGVsaXZlcnlMYXllcikge1xyXG4gICAgICAgICAgICBkZWxpdmVyeUxheWVyLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVsaXZlcnlMYXllciA9IEwubGF5ZXJHcm91cCgpLmFkZFRvKG1hcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsaXZlcnlMYXllciA9IEwubGF5ZXJHcm91cCgpLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgc3RhcnRBbmltYXRpb24oKTtcclxuICAgIFxyXG4gICAgcGVuZGluZ0V2ZW50cy5mb3JFYWNoKHByb2Nlc3NEZWxpdmVyeUV2ZW50KTtcclxuICAgIHBlbmRpbmdFdmVudHMubGVuZ3RoID0gMDtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ0hBUkdFUiBsZXMgbGl2cmFpc29ucyBJTl9UUkFOU0lUIGRlcHVpcyBsJ0FQSVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZERlbGl2ZXJpZXMoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZGVsaXZlcmllcy9pbi10cmFuc2l0Jyk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGRlbGl2ZXJpZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGRlbGl2ZXJpZXMuZm9yRWFjaChkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGVsaXZlcnlEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgZGVsaXZlcnlJZDogICAgZC5kZWxpdmVyeUlkLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdJZDogICAgZC5idWlsZGluZ0lkLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAgICAgICAgJ2luX3RyYW5zaXQnLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6ICAgICAgZC5wcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgIHNjaGVkdWxlZEF0OiAgIGQuc2NoZWR1bGVkQXQsXHJcbiAgICAgICAgICAgICAgICBlc3RpbWF0ZWRUaW1lOiBkLmVzdGltYXRlZFRpbWUsXHJcbiAgICAgICAgICAgICAgICB3YXlwb2ludHM6ICAgICBkLndheXBvaW50cyxcclxuICAgICAgICAgICAgICAgIHJlc291cmNlOiAgICAgIGQucmVzb3VyY2UsXHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZUxhYmVsOiBkLnJlc291cmNlTGFiZWwsXHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogICAgICBkLnF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgZmFjdGlvbjogICAgICAgZC5mYWN0aW9uIHx8ICdkZWZhdWx0JyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGVidWdMb2coJ2RlbGl2ZXJ5JywgJ0xvYWRpbmcgZGVsaXZlcnkgZnJvbSBBUEk6JywgZGVsaXZlcnlEYXRhKTtcclxuICAgICAgICAgICAgaGFuZGxlRGVsaXZlcnlFdmVudChkZWxpdmVyeURhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2RlbGl2ZXJ5JywgJ0ZhaWxlZCB0byBsb2FkIGRlbGl2ZXJpZXM6JywgZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEhBTkRMRSBFVkVOVFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRGVsaXZlcnlFdmVudChkYXRhKSB7XHJcbiAgICBpZiAoIWRlbGl2ZXJ5TGF5ZXIpIHtcclxuICAgICAgICBwZW5kaW5nRXZlbnRzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcHJvY2Vzc0RlbGl2ZXJ5RXZlbnQoZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NEZWxpdmVyeUV2ZW50KGRhdGEpIHtcclxuICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ2RlbGl2ZXJlZCcpIHtcclxuICAgICAgICByZW1vdmVEZWxpdmVyeShkYXRhLmRlbGl2ZXJ5SWQpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ2luX3RyYW5zaXQnKSB7XHJcbiAgICAgICAgdXBzZXJ0RGVsaXZlcnkoZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwc2VydERlbGl2ZXJ5KGRhdGEpIHtcclxuICAgIGNvbnN0IGtleSA9IGRhdGEuZGVsaXZlcnlJZDtcclxuICAgIGlmICgha2V5KSB7IGNvbnNvbGUud2FybignRGVsaXZlcnkgc2FucyBJRCcsIGRhdGEpOyByZXR1cm47IH1cclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHdheXBvaW50cyA9IGRhdGEud2F5cG9pbnRzO1xyXG4gICAgaWYgKHR5cGVvZiB3YXlwb2ludHMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdHJ5IHsgd2F5cG9pbnRzID0gSlNPTi5wYXJzZSh3YXlwb2ludHMpOyB9IGNhdGNoIHsgcmV0dXJuOyB9XHJcbiAgICB9XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkod2F5cG9pbnRzKSB8fCB3YXlwb2ludHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbGF0bG5ncyA9IHdheXBvaW50cy5tYXAod3AgPT4gW3dwLmxhdCwgd3AubG5nXSk7XHJcbiAgICBjb25zdCBmYWN0aW9uID0gZGF0YS5mYWN0aW9uIHx8ICdkZWZhdWx0JztcclxuXHJcbiAgICBpZiAoYWN0aXZlRGVsaXZlcmllcy5oYXMoa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IGRlbGl2ZXJ5ID0gYWN0aXZlRGVsaXZlcmllcy5nZXQoa2V5KTtcclxuICAgICAgICBkZWxpdmVyeS53YXlwb2ludHMgICAgICAgICAgPSBsYXRsbmdzO1xyXG4gICAgICAgIGRlbGl2ZXJ5LnByb2dyZXNzICAgICAgICAgICA9IGRhdGEucHJvZ3Jlc3MgPz8gZGVsaXZlcnkucHJvZ3Jlc3M7XHJcbiAgICAgICAgZGVsaXZlcnkuZXN0aW1hdGVkVGltZSAgICAgID0gZGF0YS5lc3RpbWF0ZWRUaW1lO1xyXG4gICAgICAgIGRlbGl2ZXJ5LnNjaGVkdWxlZEF0ICAgICAgICA9IGRhdGEuc2NoZWR1bGVkQXQgPz8gZGVsaXZlcnkuc2NoZWR1bGVkQXQ7XHJcbiAgICAgICAgZGVsaXZlcnkubGFzdFNlcnZlclByb2dyZXNzID0gZGF0YS5wcm9ncmVzcyA/PyAwO1xyXG4gICAgICAgIGRlbGl2ZXJ5Lmxhc3RTZXJ2ZXJUaW1lICAgICA9IERhdGUubm93KCk7XHJcbiAgICAgICAgZGVsaXZlcnkuZmFjdGlvbiAgICAgICAgICAgID0gZmFjdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcG9seWxpbmUgPSBkcmF3Um9hZFNlZ21lbnQoYGRlbGl2ZXJ5LSR7a2V5fWAsIGxhdGxuZ3MsIGZhY3Rpb24pO1xyXG5cclxuICAgICAgICAvLyBGb3JtYXRlciBsJ2hldXJlIGR1IGTDqXBhcnQgcHLDqXZ1XHJcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVkVGltZSA9IGRhdGEuc2NoZWR1bGVkQXQgPyBmb3JtYXREYXRlKGRhdGEuc2NoZWR1bGVkQXQpIDogJ0luY29ubnVlJztcclxuXHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gTC5tYXJrZXIobGF0bG5nc1swXSwgeyBpY29uOiB0cnVja0ljb24gfSlcclxuICAgICAgICAgICAgLmFkZFRvKGRlbGl2ZXJ5TGF5ZXIpXHJcbiAgICAgICAgICAgIC5iaW5kUG9wdXAoYFxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5DYW1pb24gbsKwJHtrZXl9PC9zdHJvbmc+PGJyPlxyXG4gICAgICAgICAgICAgICAgVHJhbnNwb3J0ZSA6ICR7ZGF0YS5xdWFudGl0eSA/PyAnJ30gdW5pdMOpcyBkZSA8c3Ryb25nPiR7ZGF0YS5yZXNvdXJjZUxhYmVsID8/ICcnfTwvc3Ryb25nPjxicj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVsaXZlcnktcHJvZ3Jlc3MtJHtrZXl9XCI+UHJvZ3Jlc3Npb24gOiAke2RhdGEucHJvZ3Jlc3MgPz8gMH0lPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgYCk7XHJcblxyXG4gICAgICAgIGFjdGl2ZURlbGl2ZXJpZXMuc2V0KGtleSwge1xyXG4gICAgICAgICAgICBtYXJrZXIsXHJcbiAgICAgICAgICAgIHBvbHlsaW5lLFxyXG4gICAgICAgICAgICB3YXlwb2ludHM6ICAgICAgICAgIGxhdGxuZ3MsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAgICAgICAgICAgZGF0YS5wcm9ncmVzcyA/PyAwLFxyXG4gICAgICAgICAgICBlc3RpbWF0ZWRUaW1lOiAgICAgIGRhdGEuZXN0aW1hdGVkVGltZSA/PyAzNjAwLFxyXG4gICAgICAgICAgICBzY2hlZHVsZWRBdDogICAgICAgIGRhdGEuc2NoZWR1bGVkQXQgPz8gbnVsbCxcclxuICAgICAgICAgICAgbGFzdFNlcnZlclByb2dyZXNzOiBkYXRhLnByb2dyZXNzID8/IDAsXHJcbiAgICAgICAgICAgIGxhc3RTZXJ2ZXJUaW1lOiAgICAgRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgcmVzb3VyY2U6ICAgICAgICAgICBkYXRhLnJlc291cmNlLFxyXG4gICAgICAgICAgICByZXNvdXJjZUxhYmVsOiAgICAgIGRhdGEucmVzb3VyY2VMYWJlbCxcclxuICAgICAgICAgICAgcXVhbnRpdHk6ICAgICAgICAgICBkYXRhLnF1YW50aXR5LFxyXG4gICAgICAgICAgICBmYWN0aW9uLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVEZWxpdmVyeShrZXkpIHtcclxuICAgIGNvbnN0IGRlbGl2ZXJ5ID0gYWN0aXZlRGVsaXZlcmllcy5nZXQoa2V5KTtcclxuICAgIGlmICghZGVsaXZlcnkpIHJldHVybjtcclxuICAgIGRlbGl2ZXJ5Lm1hcmtlci5yZW1vdmUoKTtcclxuICAgIGRlbGl2ZXJ5LnBvbHlsaW5lLnJlbW92ZSgpO1xyXG4gICAgYWN0aXZlRGVsaXZlcmllcy5kZWxldGUoa2V5KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQU5JTUFUSU9OIExPQ0FMRSAocmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBzdGFydEFuaW1hdGlvbigpIHtcclxuICAgIGlmIChhbmltYXRpb25GcmFtZSkgcmV0dXJuO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgYWN0aXZlRGVsaXZlcmllcy5mb3JFYWNoKChkZWxpdmVyeSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbnRlcnBvbGF0ZWRQcm9ncmVzcztcclxuXHJcbiAgICAgICAgICAgIGlmIChkZWxpdmVyeS5zY2hlZHVsZWRBdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gcsOpc2lzdGFudCBhdSByZWxvYWQgZGUgcGFnZVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoZGVsaXZlcnkuc2NoZWR1bGVkQXQpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgICA9IChub3cgLSBzdGFydFRpbWUpIC8gMTAwMDtcclxuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZFByb2dyZXNzID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIE1hdGgubWF4KDAsIChlbGFwc2VkIC8gZGVsaXZlcnkuZXN0aW1hdGVkVGltZSkgKiAxMDApXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gZmFsbGJhY2sgc2kgcGFzIGRlIHNjaGVkdWxlZEF0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGFwc2VkU2luY2VTZXJ2ZXIgPSAobm93IC0gZGVsaXZlcnkubGFzdFNlcnZlclRpbWUpIC8gMTAwMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzUGVyU2Vjb25kICA9IDEwMCAvIGRlbGl2ZXJ5LmVzdGltYXRlZFRpbWU7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRQcm9ncmVzcyA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICAgICAgICAgICBkZWxpdmVyeS5sYXN0U2VydmVyUHJvZ3Jlc3MgKyAoZWxhcHNlZFNpbmNlU2VydmVyICogcHJvZ3Jlc3NQZXJTZWNvbmQpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBpbnRlcnBvbGF0ZUFsb25nUm91dGUoZGVsaXZlcnkud2F5cG9pbnRzLCBpbnRlcnBvbGF0ZWRQcm9ncmVzcyAvIDEwMCk7XHJcbiAgICAgICAgICAgIGlmIChwb3MpIGRlbGl2ZXJ5Lm1hcmtlci5zZXRMYXRMbmcocG9zKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRlbGl2ZXJ5LXByb2dyZXNzLSR7a2V5fWApO1xyXG4gICAgICAgICAgICBpZiAoZWwpIGVsLnRleHRDb250ZW50ID0gYFByb2dyZXNzaW9uIDogJHtNYXRoLnJvdW5kKGludGVycG9sYXRlZFByb2dyZXNzKX0lYDtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnRlcnBvbGF0ZWRQcm9ncmVzcyA+PSAxMDApIHJlbW92ZURlbGl2ZXJ5KGtleSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJTlRFUlBPTEFUSU9OIHN1ciBsYSBwb2x5bGlnbmVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBbG9uZ1JvdXRlKGxhdGxuZ3MsIHQpIHtcclxuICAgIGlmICghbGF0bG5ncyB8fCBsYXRsbmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAodCA8PSAwKSByZXR1cm4gbGF0bG5nc1swXTtcclxuICAgIGlmICh0ID49IDEpIHJldHVybiBsYXRsbmdzW2xhdGxuZ3MubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgbGV0IHRvdGFsRGlzdCA9IDA7XHJcbiAgICBjb25zdCBzZWdtZW50cyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsYXRsbmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZCA9IGhhdmVyc2luZShsYXRsbmdzW2kgLSAxXSwgbGF0bG5nc1tpXSk7XHJcbiAgICAgICAgc2VnbWVudHMucHVzaChkKTtcclxuICAgICAgICB0b3RhbERpc3QgKz0gZDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGFyZ2V0ID0gdG90YWxEaXN0ICogdDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGFyZ2V0IDw9IHNlZ21lbnRzW2ldKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHUgPSB0YXJnZXQgLyBzZWdtZW50c1tpXTtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIGxhdGxuZ3NbaV1bMF0gKyB1ICogKGxhdGxuZ3NbaSArIDFdWzBdIC0gbGF0bG5nc1tpXVswXSksXHJcbiAgICAgICAgICAgICAgICBsYXRsbmdzW2ldWzFdICsgdSAqIChsYXRsbmdzW2kgKyAxXVsxXSAtIGxhdGxuZ3NbaV1bMV0pLFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YXJnZXQgLT0gc2VnbWVudHNbaV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxhdGxuZ3NbbGF0bG5ncy5sZW5ndGggLSAxXTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGF2ZXJzaW5lKGEsIGIpIHtcclxuICAgIGNvbnN0IFIgPSA2MzcxMDAwO1xyXG4gICAgY29uc3QgZExhdCA9IChiWzBdIC0gYVswXSkgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgY29uc3QgZExuZyA9IChiWzFdIC0gYVsxXSkgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgY29uc3QgeCA9IE1hdGguc2luKGRMYXQgLyAyKSAqKiAyXHJcbiAgICAgICAgICAgICsgTWF0aC5jb3MoYVswXSAqIE1hdGguUEkgLyAxODApICogTWF0aC5jb3MoYlswXSAqIE1hdGguUEkgLyAxODApXHJcbiAgICAgICAgICAgICogTWF0aC5zaW4oZExuZyAvIDIpICoqIDI7XHJcbiAgICByZXR1cm4gUiAqIDIgKiBNYXRoLmF0YW4yKE1hdGguc3FydCh4KSwgTWF0aC5zcXJ0KDEgLSB4KSk7XHJcbn0iLCJpbXBvcnQgeyBpbml0TWFwLCBsb2FkV29ybGQgfSBmcm9tICcuL21hcC9tYXAuanMnO1xyXG5pbXBvcnQgeyBpbml0R1BTIH0gZnJvbSAnLi91dGlscy9ncHMuanMnO1xyXG5pbXBvcnQgeyBpbml0QmFzZVVJIH0gZnJvbSAnLi9idWlsZGluZ3MvYmFzZS5qcyc7XHJcbmltcG9ydCB7IGluaXRCdWlsZE1vZGUgfSBmcm9tICcuL2J1aWxkaW5ncy9idWlsZE1vZGUuanMnO1xyXG5pbXBvcnQgeyBpbml0Tm90aWZpY2F0aW9ucyB9IGZyb20gJy4vbm90aWZpY2F0aW9ucy5qcyc7XHJcbmltcG9ydCB7IGluaXRCdWlsZGluZ1RpbWVycyB9IGZyb20gJy4vdXRpbHMvdGltZXIuanMnO1xyXG5pbXBvcnQgeyBpbml0RGVsaXZlcnlFdmVudHMgfSBmcm9tICcuL2RlbGl2ZXJ5L2RlbGl2ZXJ5LmpzJztcclxuaW1wb3J0IHsgaW5pdEludmVudG9yeUV2ZW50cyB9IGZyb20gJy4vaW52ZW50b3J5L2ludmVudG9yeS5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nIH0gZnJvbSAnLi4vdXRpbHMvZGVidWcuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHJcbiAgICBlbmFibGVMZWFmbGV0RGVidWcoZmFsc2UpO1xyXG5cclxuICAgIGluaXRNYXAoNDYuNTM5NzIsIDIuNDMwMjgpO1xyXG5cclxuICAgIGluaXRCYXNlVUkoKTtcclxuICAgIGluaXRCdWlsZE1vZGUoKTtcclxuICAgIGxvYWRXb3JsZCgpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncGFnZS1nYW1lJyk7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5jdXJyZW50VXNlcikge1xyXG4gICAgICAgIGluaXROb3RpZmljYXRpb25zKCk7XHJcbiAgICAgICAgaW5pdERlbGl2ZXJ5RXZlbnRzKCk7XHJcbiAgICAgICAgaW5pdEludmVudG9yeUV2ZW50cygpO1xyXG4gICAgICAgIGluaXRCdWlsZGluZ1RpbWVycygpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVMZWFmbGV0RGVidWcoZGVidWcgPSBmYWxzZSkge1xyXG5cclxuICAgIGlmICghZGVidWcpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBvcmlnaW5hbE1hcmtlciA9IEwubWFya2VyO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxDaXJjbGUgPSBMLmNpcmNsZTtcclxuICAgIGNvbnN0IG9yaWdpbmFsUG9seWxpbmUgPSBMLnBvbHlsaW5lO1xyXG5cclxuICAgIEwubWFya2VyID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgICBkZWJ1Z0xvZyhcImxlYWZsZXRcIiwgXCLwn6eoIE1BUktFUiBDQUxMOlwiLCBhcmdzKTtcclxuICAgICAgICBkZWJ1Z0xvZyhcImxlYWZsZXRcIiwgXCJNQVJLRVIgU1RBQ0tcIik7XHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsTWFya2VyLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBMLmNpcmNsZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XHJcbiAgICAgICAgZGVidWdMb2coXCJsZWFmbGV0XCIsIFwi8J+nqCBDSVJDTEUgQ0FMTDpcIiwgYXJncyk7XHJcbiAgICAgICAgZGVidWdMb2coXCJsZWFmbGV0XCIsIFwiQ0lSQ0xFIFNUQUNLXCIpO1xyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbENpcmNsZS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgTC5wb2x5bGluZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XHJcbiAgICAgICAgZGVidWdMb2coXCJsZWFmbGV0XCIsIFwi8J+nqCBQT0xZTElORSBDQUxMOlwiLCBhcmdzKTtcclxuICAgICAgICBkZWJ1Z0xvZyhcImxlYWZsZXRcIiwgXCJQT0xZTElORSBTVEFDS1wiKTtcclxuICAgICAgICByZXR1cm4gb3JpZ2luYWxQb2x5bGluZS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgeyByZWZyZXNoQnVpbGRpbmdQb3B1cCB9IGZyb20gJy4uL2J1aWxkaW5ncy9idWlsZGluZy5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJTklUIOKAlCByZW1wbGFjZSBpbml0SW52ZW50b3J5TWVyY3VyZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEludmVudG9yeUV2ZW50cygpIHtcclxuICAgIGlmICghd2luZG93LmN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgZGVidWdXYXJuKCdpbnZlbnRvcnknLCAnQXVjdW4gdXRpbGlzYXRldXIgY29ubmVjdMOpJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYnVnTG9nKCdpbnZlbnRvcnknLCAnaW5pdEludmVudG9yeUV2ZW50cyBhcHBlbMOpJyk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ2FtZTpldmVudCcsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGUuZGV0YWlsO1xyXG4gICAgICAgIGlmIChkYXRhLnR5cGUgIT09ICdpbnZlbnRvcnlfdXBkYXRlJykgcmV0dXJuO1xyXG5cclxuICAgICAgICBkZWJ1Z0xvZygnaW52ZW50b3J5JywgJ0ludmVudGFpcmUgbWlzIMOgIGpvdXI6JywgZGF0YSk7XHJcbiAgICAgICAgaGFuZGxlSW52ZW50b3J5VXBkYXRlKGRhdGEpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEhBTkRMRSBVUERBVEVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaGFuZGxlSW52ZW50b3J5VXBkYXRlKGRhdGEpIHtcclxuICAgIHVwZGF0ZU5hdmJhclJlc291cmNlcyhkYXRhLnJlc291cmNlcyA/PyBkYXRhKTtcclxuXHJcbiAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idWlsZGluZy1wb3B1cCcpO1xyXG4gICAgaWYgKHBvcHVwKSB7XHJcbiAgICAgICAgcmVmcmVzaEJ1aWxkaW5nUG9wdXAocGFyc2VJbnQocG9wdXAuZGF0YXNldC5idWlsZGluZ0lkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2FyZGVyIGwnZXZlbnQgY3VzdG9tIHBvdXIgbGVzIGF1dHJlcyBjb21wb3NhbnRzIHF1aSDDqWNvdXRlbnQgZMOpasOgXHJcbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2ludmVudG9yeVVwZGF0ZWQnLCB7IGRldGFpbDogZGF0YSB9KSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIE5BVkJBUlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiB1cGRhdGVOYXZiYXJSZXNvdXJjZXMocmVzb3VyY2VzKSB7XHJcbiAgICBpZiAoIXJlc291cmNlcykgcmV0dXJuO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNvdXJjZS1pdGVtJykuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBjb2RlID0gaXRlbS5kYXRhc2V0LnJlc291cmNlQ29kZTtcclxuICAgICAgICBpZiAocmVzb3VyY2VzW2NvZGVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgcXR5RWxlbWVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLnJlc291cmNlLXF0eScpO1xyXG4gICAgICAgICAgICBpZiAocXR5RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcXR5RWxlbWVudC50ZXh0Q29udGVudCA9IHJlc291cmNlc1tjb2RlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVUEdSQURFIFJFUVVJUkVNRU5UU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBjaGVja1VwZ3JhZGVSZXF1aXJlbWVudHMocG9wdXAsIHJlc291cmNlQ29kZSwgcXVhbnRpdHkpIHtcclxuICAgIGNvbnN0IHJlcXVpcmVkRWxlbWVudCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJlcXVpcmVkLSR7cmVzb3VyY2VDb2RlfV1gKTtcclxuICAgIGlmICghcmVxdWlyZWRFbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVxdWlyZWQgPSBwYXJzZUludChcclxuICAgICAgICByZXF1aXJlZEVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLXJlcXVpcmVkLSR7cmVzb3VyY2VDb2RlfWApIHx8ICcwJ1xyXG4gICAgKTtcclxuXHJcbiAgICByZXF1aXJlZEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgndGV4dC1zdWNjZXNzJywgcXVhbnRpdHkgPj0gcmVxdWlyZWQpO1xyXG4gICAgcmVxdWlyZWRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3RleHQtZGFuZ2VyJywgIHF1YW50aXR5IDwgcmVxdWlyZWQpO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5cclxuY29uc3QgZGVwb3NpdE1hcmtlcnMgPSBuZXcgTWFwKCk7XHJcblxyXG4vLyBDYWNoZSBkZXMgcG9wdXBzIGTDqWrDoCBjaGFyZ8Opc1xyXG5jb25zdCBwb3B1cENvbnRlbnRMb2FkZWQgPSBuZXcgU2V0KCk7XHJcblxyXG4vLyBDYWNoZSBkZXMgdHlwZXMgZGUgcmVzc291cmNlc1xyXG5sZXQgYnVpbGRpbmdUeXBlc0NhY2hlID0gbnVsbDtcclxubGV0IHJlc291cmNlVHlwZXNDYWNoZSA9IG51bGw7XHJcblxyXG4vKipcclxuICogQ2hhcmdlIGxlcyB0eXBlcyBkZSByZXNzb3VyY2VzIGRlcHVpcyBsJ0FQSVxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbG9hZEJ1aWxkaW5nVHlwZXMoKSB7XHJcbiAgICBpZiAoYnVpbGRpbmdUeXBlc0NhY2hlKSByZXR1cm4gYnVpbGRpbmdUeXBlc0NhY2hlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9idWlsZGluZy10eXBlc2ApO1xyXG4gICAgICAgIGJ1aWxkaW5nVHlwZXNDYWNoZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gYnVpbGRpbmdUeXBlc0NhY2hlO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGRlcyB0eXBlcyBkZSByZXNzb3VyY2VzXCIsIGUpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZFJlc291cmNlVHlwZXMoKSB7XHJcbiAgICBpZiAocmVzb3VyY2VUeXBlc0NhY2hlKSByZXR1cm4gcmVzb3VyY2VUeXBlc0NhY2hlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9yZXNvdXJjZS10eXBlc2ApO1xyXG4gICAgICAgIHJlc291cmNlVHlwZXNDYWNoZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gcmVzb3VyY2VUeXBlc0NhY2hlO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGRlcyB0eXBlcyBkZSByZXNzb3VyY2VzXCIsIGUpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gTWFwcGluZyBkZXMgY291bGV1cnMgcGFyIGTDqWZhdXRcclxuY29uc3QgREVGQVVMVF9DT0xPUlMgPSB7XHJcbiAgICAnaXJvbic6ICcjN2Y4YzhkJyxcclxuICAgICdvaWwnOiAnI2YxYzQwZicsXHJcbiAgICAnY29hbCc6ICcjMmMzZTUwJyxcclxuICAgICdydWJiZXInOiAnIzI3YWU2MCcsXHJcbiAgICAnYmF1eGl0ZSc6ICcjZTY3ZTIyJyxcclxuICAgICdyYXJlX2VhcnRoJzogJyM4ZTQ0YWQnXHJcbn07XHJcblxyXG4vKipcclxuICogUmV0b3VybmUgbGEgY291bGV1ciBwb3VyIHVuIHR5cGUgZGUgcmVzc291cmNlIChzeW5jaHJvbmUgLSB1dGlsaXNlIGxlIGNhY2hlKVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UmVzb3VyY2VDb2xvcih0eXBlKSB7XHJcbiAgICBpZiAocmVzb3VyY2VUeXBlc0NhY2hlKSByZXR1cm4gKHJlc291cmNlVHlwZXNDYWNoZSAmJiByZXNvdXJjZVR5cGVzQ2FjaGVbdHlwZV0/LmNvbG9yKSB8fCBERUZBVUxUX0NPTE9SU1t0eXBlXSB8fCAnI2ZmZmZmZic7XHJcblxyXG4gICAgbG9hZFJlc291cmNlVHlwZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKHJlc291cmNlVHlwZXNDYWNoZSAmJiByZXNvdXJjZVR5cGVzQ2FjaGVbdHlwZV0/LmNvbG9yKSB8fCBERUZBVUxUX0NPTE9SU1t0eXBlXSB8fCAnI2ZmZmZmZic7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcm91dmUgbGUgdHlwZSBkZSBiw6J0aW1lbnQgKG1pbmUpIHBvdXIgdW5lIHJlc3NvdXJjZSBkb25uw6llXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBmaW5kQnVpbGRpbmdUeXBlRm9yUmVzb3VyY2UocmVzb3VyY2VUeXBlKSB7XHJcbiAgICBjb25zdCBidWlsZGluZ1R5cGVzID0gYXdhaXQgbG9hZEJ1aWxkaW5nVHlwZXMoKTtcclxuXHJcbiAgICAvLyBDaGVyY2hlciB1biBiw6J0aW1lbnQgcXVpIHByb2R1aXQgY2V0dGUgcmVzc291cmNlIChwcm9kdWN0aW9uX3JhdGUgPiAwKVxyXG4gICAgY29uc3QgYnVpbGRpbmdUeXBlID0gYnVpbGRpbmdUeXBlcy5maW5kKGJ0ID0+IHtcclxuICAgICAgICByZXR1cm4gKGJ0LnJlc291cmNlX3R5cGUgPT09IHJlc291cmNlVHlwZSB8fCBidC5yZXNvdXJjZVR5cGU/LmNvZGUgPT09IHJlc291cmNlVHlwZSkgJiYgYnQucHJvZHVjdGlvbl9yYXRlID4gMDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBidWlsZGluZ1R5cGU/LmlkIHx8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZXBvc2l0TGF5ZXJzID0ge307XHJcblxyXG4vKipcclxuICogSW5pdGlhbGlzZSBsZXMgY291Y2hlcyBkZSBkw6lww7R0cyBkeW5hbWlxdWVtZW50XHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdERlcG9zaXRMYXllcnMobWFwLCBjb250cm9sKSB7XHJcbiAgICBjb25zdCByZXNvdXJjZVR5cGVzID0gYXdhaXQgbG9hZFJlc291cmNlVHlwZXMoKTtcclxuXHJcbiAgICAvLyBDcsOpZXIgdW5lIGNvdWNoZSBwb3VyIGNoYXF1ZSB0eXBlIGRlIHJlc3NvdXJjZSAoc2V1bGVtZW50IHNpIGNvbG9yIGV4aXN0ZSlcclxuICAgIHJlc291cmNlVHlwZXMuZm9yRWFjaChydCA9PiB7XHJcbiAgICAgICAgaWYgKHJ0LmNvbG9yICYmIHJ0LmNvbG9yLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZGVwb3NpdExheWVyc1tydC5jb2RlXSA9IEwubGF5ZXJHcm91cCgpO1xyXG4gICAgICAgICAgICBjb250cm9sLmFkZE92ZXJsYXkoZGVwb3NpdExheWVyc1tydC5jb2RlXSwgYFJlc3NvdXJjZTogJHtydC5sYWJlbH1gKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWREZXBvc2l0c0ZvckNodW5rKGNodW5rSWQsIG1hcCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2RlcG9zaXRzLyR7Y2h1bmtJZH1gKTtcclxuICAgICAgICBjb25zdCBkZXBvc2l0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGRlcG9zaXRzLCBtYXApO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1ciBjaGFyZ2VtZW50IGTDqXDDtHRzOlwiLCBlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRm9ybWF0ZSBsZXMgY2/Du3RzIHNvdXMgZm9ybWUgZGUgY2hhw65uZSBsaXNpYmxlXHJcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb3N0cyAtIEV4OiBbe2NvZGU6IFwiaXJvbl9pbmdvdFwiLCBsYWJlbDogXCJGZXJcIiwgcXVhbnRpdHk6IDI1fV0gb3Uge2lyb25faW5nb3Q6IDI1fVxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAtIEV4OiBcIjI1IEZlciwgMTUgQ2FvdXRjaG91Y1wiXHJcbiAqL1xyXG5mdW5jdGlvbiBmb3JtYXRDb3N0cyhjb3N0cykge1xyXG4gICAgaWYgKCFjb3N0cykgcmV0dXJuICdOL0EnO1xyXG5cclxuICAgIC8vIE5vdXZlYXUgZm9ybWF0OiBhcnJheSBkJ29iamV0cyBhdmVjIGNvZGUsIGxhYmVsLCBxdWFudGl0eVxyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29zdHMpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvc3RzLm1hcChjID0+IGAke2MucXVhbnRpdHl9ICR7Yy5sYWJlbH1gKS5qb2luKCcsICcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFuY2llbiBmb3JtYXQ6IG9iamV0IHtjb2RlOiBxdWFudGl0eX1cclxuICAgIGlmICh0eXBlb2YgY29zdHMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGNvc3RzKVxyXG4gICAgICAgICAgICAubWFwKChbcmVzb3VyY2UsIGFtb3VudF0pID0+IGAke2Ftb3VudH0gJHtyZXNvdXJjZX1gKVxyXG4gICAgICAgICAgICAuam9pbignLCAnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJ04vQSc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWw6lyaWZpZSBzaSBsZSBqb3VldXIgYSBhc3NleiBkZSByZXNzb3VyY2VzIHBvdXIgdW4gZMOpcMO0dFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tDYW5DbGFpbShkZXBvc2l0KSB7XHJcbiAgICBjb25zdCBjb3N0cyA9IGRlcG9zaXQuY29zdHM7XHJcbiAgICBpZiAoIWNvc3RzIHx8IE9iamVjdC5rZXlzKGNvc3RzKS5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAvLyBQb3VyIGNoYXF1ZSBjb8O7dCwgdsOpcmlmaWVyIHNpIGxlIGpvdWV1ciBhIGFzc2V6XHJcbiAgICBmb3IgKGNvbnN0IFtyZXNvdXJjZSwgYW1vdW50XSBvZiBPYmplY3QuZW50cmllcyhjb3N0cykpIHtcclxuICAgICAgICAvLyBJY2kgb24gcG91cnJhaXQgZmFpcmUgdW4gYXBwZWwgQVBJIHZlcnMgL2FwaS9wbGF5ZXItcmVzb3VyY2VzXHJcbiAgICAgICAgLy8gb3UgdXRpbGlzZXIgbGVzIGRvbm7DqWVzIGTDqWrDoCBjaGFyZ8OpZXNcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3BsYXllci1yZXNvdXJjZXMnKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllclJlc291cmNlcyA9IHt9O1xyXG4gICAgICAgIGRhdGEucmVzb3VyY2VzLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllclJlc291cmNlc1tyLnR5cGVdID0gci5xdWFudGl0eTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFzID0gcGxheWVyUmVzb3VyY2VzW3Jlc291cmNlXSA/PyAwO1xyXG4gICAgICAgIGlmIChoYXMgPCBhbW91bnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICogQ3LDqWUgdW4gcG9wdXAgc2ltcGxlIChzeW5jaHJvbmUpXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTaW1wbGVQb3B1cChkZXBvc2l0KSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXBvc2l0LXBvcHVwXCI+XHJcbiAgICAgICAgICAgIDxoMz4ke2RlcG9zaXQudHlwZSB8fCAnRMOpcMO0dCBkZSByZXNvdXJjZSd9PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGFyZ2UgbGVzIGluZm9zIGRlcyBkw6lww7R0cyBlbiBhcnJpw6hyZS1wbGFuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBsb2FkRGVwb3NpdEluZm9Bc3luYyhkZXBvc2l0c0lELCBtYXJrZXIsIGRlcG9zaXREYXRhKSB7XHJcbiAgICAvLyDDiXZpdGVyIGRlIHJlY2hhcmdlciBzaSBkw6lqw6AgY2hhcmfDqVxyXG4gICAgaWYgKHBvcHVwQ29udGVudExvYWRlZC5oYXMoZGVwb3NpdHNJRCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwb3B1cENvbnRlbnRMb2FkZWQuYWRkKGRlcG9zaXRzSUQpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gQ2hhcmdlciBkaXJlY3RlbWVudCBsZSBjb250ZW51IGR1IHBvcHVwXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvZGVwb3NpdC8ke2RlcG9zaXRzSUR9L3BvcHVwLWNvbnRlbnRgKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICAgICAgZGVidWdXYXJuKCdkZXBvc2l0cycsIGBFcnJldXIgQVBJIHBvcHVwLWNvbnRlbnQgKGRlcG9zaXQgJHtkZXBvc2l0c0lEfSk6YCwgcmVzLnN0YXR1cyk7XHJcbiAgICAgICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoZGVwb3NpdERhdGEpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlcy50ZXh0KCk7XHJcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChodG1sKTtcclxuICAgICAgICBkZXBvc2l0TWFya2Vycy5zZXQoZGVwb3NpdHNJRCwgeyBtYXJrZXIsIGRhdGE6IGRlcG9zaXREYXRhIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSBwb3B1cFwiLCBlKTtcclxuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGRlcG9zaXREYXRhKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW5kdSBkZXMgZMOpcMO0dHMgc3VyIGxhIGNhcnRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShkZXBvc2l0cywgbWFwKSB7XHJcbiAgICBkZXBvc2l0cy5mb3JFYWNoKGRlcG9zaXQgPT4ge1xyXG4gICAgICAgIGlmIChkZXBvc2l0TWFya2Vycy5oYXMoZGVwb3NpdC5pZCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGRlcG9zaXQucmVzb3VyY2VfdHlwZTtcclxuICAgICAgICBjb25zdCBsYXllciA9IGRlcG9zaXRMYXllcnNbdHlwZV07XHJcblxyXG4gICAgICAgIGlmICghbGF5ZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBnZXRSZXNvdXJjZUNvbG9yKHR5cGUpO1xyXG5cclxuICAgICAgICBjb25zdCBtYXJrZXIgPSBMLmNpcmNsZU1hcmtlcihbZGVwb3NpdC5sYXRpdHVkZSwgZGVwb3NpdC5sb25naXR1ZGVdLCB7XHJcbiAgICAgICAgICAgIHJhZGl1czogOCxcclxuICAgICAgICAgICAgZmlsbENvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICAgICAgICB3ZWlnaHQ6IDEsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjhcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5hZGRUbyhsYXllcilcclxuICAgICAgICAuYmluZFBvcHVwKGNyZWF0ZVNpbXBsZVBvcHVwKGRlcG9zaXQpKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhcmdlciBsZSBjb250ZW51IGRlIGxhIHBvcHVwIHVuaXF1ZW1lbnQgcXVhbmQgZWxsZSBlc3Qgb3V2ZXJ0ZVxyXG4gICAgICAgIGlmIChkZXBvc2l0LmlkKSB7XHJcbiAgICAgICAgICAgIG1hcmtlci5vbigncG9wdXBvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9hZERlcG9zaXRJbmZvQXN5bmMoZGVwb3NpdC5pZCwgbWFya2VyLCBkZXBvc2l0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQZXJtZXQgZCdleHBsb2l0ZXIgdW4gZMOpcMO0dCBkZXB1aXMgbGEgcG9wdXBcclxuICovXHJcbndpbmRvdy5jbGFpbURlcG9zaXQgPSBhc3luYyBmdW5jdGlvbihpZCwgcmVzb3VyY2VUeXBlKSB7XHJcbiAgICAvLyBUcm91dmVyIGxlIHR5cGUgZGUgYsOidGltZW50IGFwcHJvcHJpw6lcclxuICAgIGNvbnN0IGJ1aWxkaW5nVHlwZUlkID0gYXdhaXQgZmluZEJ1aWxkaW5nVHlwZUZvclJlc291cmNlKHJlc291cmNlVHlwZSk7XHJcblxyXG4gICAgaWYgKCFidWlsZGluZ1R5cGVJZCkge1xyXG4gICAgICAgIHJldHVybiBhbGVydChgSW1wb3NzaWJsZSBkZSB0cm91dmVyIHVuIGLDonRpbWVudCBwb3VyIGV4dHJhaXJlIGxlICR7cmVzb3VyY2VUeXBlfWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbnN0cnVpcmUgZGlyZWN0ZW1lbnQgbGUgYsOidGltZW50IHN1ciBsZXMgY29vcmRvbm7DqWVzIGR1IGTDqXDDtHRcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9idWlsZCcsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBsYXQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsbmc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0eXBlX2lkOiBidWlsZGluZ1R5cGVJZCxcclxuICAgICAgICAgICAgICAgIGRlcG9zaXRfaWQ6IGlkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICBsZXQgZGF0YTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH0gY2F0Y2ggKHBhcnNlRXJyb3IpIHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIlLDqXBvbnNlIG5vbi1KU09OIHJlw6d1ZTpcIiwgcmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUsOpcG9uc2UgaW52YWxpZGUgZHUgc2VydmV1clwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZygnZGVwb3NpdHMnLCAnRMOpcMO0dCBleHBsb2l0w6kgYXZlYyBzdWNjw6hzICEgQsOidGltZW50IGNyw6nDqS4nKTtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1cjogXCIgKyAoZGF0YS5lcnJvciB8fCBcIkltcG9zc2libGUgZCdleHBsb2l0ZXIgY2UgZMOpcMO0dFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJFcnJldXIgbG9ycyBkZSBsJ2V4cGxvaXRhdGlvblwiLCBlKTtcclxuICAgICAgICBhbGVydChcIkVycmV1ciByw6lzZWF1IGxvcnMgZGUgbCdleHBsb2l0YXRpb246IFwiICsgZS5tZXNzYWdlKTtcclxuICAgIH1cclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcblxubGV0IGZvZ0xheWVyID0gbnVsbDtcbmxldCB2aXNpb25Tb3VyY2VzID0gW107XG5sZXQgZm9nTW9kZSA9ICdkaXNhYmxlZCc7XG5sZXQgbWFwSW5zdGFuY2UgPSBudWxsO1xuXG5jbGFzcyBGb2dPZldhciB7XG4gICAgY29uc3RydWN0b3IobWFwKSB7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuaW5pdENhbnZhcygpO1xuICAgICAgICB0aGlzLnZpc2lvblNvdXJjZXMgPSBbXTtcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdENhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnpJbmRleCA9ICc1MDAnO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMubWFwLmdldENvbnRhaW5lcigpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGlmICghY3R4KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbnZhcyBjb250ZXh0IHVuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3R4O1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubWFwLm9uKCdtb3ZlIHpvb20gcmVzaXplIG1vdmVlbmQgem9vbWVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcih0aGlzLnZpc2lvblNvdXJjZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNpemUoKSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLm1hcC5nZXRTaXplKCk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gc2l6ZS54O1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBzaXplLnk7XG5cbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSBgJHtzaXplLnh9cHhgO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHtzaXplLnl9cHhgO1xuICAgIH1cblxuICAgIHVwZGF0ZVNvdXJjZXMoc291cmNlcykge1xuICAgICAgICB0aGlzLnZpc2lvblNvdXJjZXMgPSBzb3VyY2VzO1xuICAgICAgICB0aGlzLnJlbmRlcihzb3VyY2VzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoc291cmNlcykge1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5tYXAuZ2V0U2l6ZSgpO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcblxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHNpemUueCwgc2l6ZS55KTtcblxuICAgICAgICAvLyBCcm91aWxsYXJkXG4gICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwwLDAsMC43NSknO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgc2l6ZS54LCBzaXplLnkpO1xuXG4gICAgICAgIC8vIETDqWNvdXBlIGRlcyB6b25lcyB2aXNpYmxlc1xuICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW91dCc7XG5cbiAgICAgICAgZm9yIChjb25zdCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgICAgICAgICAgY29uc3QgY2VudGVyID0gTC5sYXRMbmcoc291cmNlLmxhdCwgc291cmNlLmxuZyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gdGhpcy5tYXAubGF0TG5nVG9Db250YWluZXJQb2ludChjZW50ZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBlZGdlID0gTC5sYXRMbmcoc291cmNlLmxhdCwgc291cmNlLmxuZyArIHNvdXJjZS5yYWRpdXMpO1xuXG4gICAgICAgICAgICBjb25zdCByYWRpdXNQeCA9IHBvaW50LmRpc3RhbmNlVG8odGhpcy5tYXAubGF0TG5nVG9Db250YWluZXJQb2ludChlZGdlKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHBvaW50LngsIHBvaW50LnksIDAsIHBvaW50LngsIHBvaW50LnksIHJhZGl1c1B4KTtcblxuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDAsMCwwLDEpJyk7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMCwwLDAsMCknKTtcblxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuXG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHguYXJjKHBvaW50LngsIHBvaW50LnksIHJhZGl1c1B4LCAwLCBNYXRoLlBJICogMik7XG5cbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgICAgIC8vIERlYnVnXG4gICAgICAgICAgICBpZiAoZm9nTW9kZSA9PT0gJ2RlYnVnJykge1xuICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5hcmMocG9pbnQueCwgcG9pbnQueSwgcmFkaXVzUHgsIDAsIE1hdGguUEkgKiAyKTtcblxuICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdsaW1lJztcbiAgICAgICAgICAgICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2Rlc3RpbmF0aW9uLW91dCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB9XG59XG5cbmxldCBmb2dJbnN0YW5jZSA9IG51bGw7XG5cbi8qKlxuICogSW5pdGlhbGlzZSBsZSBicm91aWxsYXJkIGRlIGd1ZXJyZVxuICogQHBhcmFtIHtzdHJpbmd9IG1vZGUgLSBNb2RlIGRlIGJyb3VpbGxhcmQgKCdlbmFibGVkJywgJ2Rpc2FibGVkJywgJ2RlYnVnJylcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZXMgLSBTb3VyY2VzIGRlIHZpc2lvblxuICogQHBhcmFtIHtPYmplY3R9IG1hcCAtIEluc3RhbmNlIExlYWZsZXRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRGb2dPZldhcihtb2RlLCBzb3VyY2VzLCBtYXApIHtcbiAgICBmb2dNb2RlID0gbW9kZSB8fCAnZGlzYWJsZWQnO1xuXG4gICAgaWYgKCFmb2dJbnN0YW5jZSAmJiBmb2dNb2RlICE9PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgIGZvZ0luc3RhbmNlID0gbmV3IEZvZ09mV2FyKG1hcCk7XG4gICAgfVxuXG4gICAgaWYgKCFmb2dJbnN0YW5jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZvZ01vZGUgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgZm9nSW5zdGFuY2UuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb2dJbnN0YW5jZS5jYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZm9nSW5zdGFuY2UudXBkYXRlU291cmNlcyhzb3VyY2VzKTtcbn1cblxuLyoqXG4gKiBWw6lyaWZpZSBzaSB1biBwb2ludCBlc3QgdmlzaWJsZVxuICogQHBhcmFtIHtudW1iZXJ9IGxhdFxuICogQHBhcmFtIHtudW1iZXJ9IGxuZ1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BvaW50VmlzaWJsZShsYXQsIGxuZykge1xuICAgIGlmIChmb2dNb2RlID09PSAnZGlzYWJsZWQnIHx8IGZvZ01vZGUgPT09ICdkZWJ1ZycpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3Qgc291cmNlcyA9IGZvZ0luc3RhbmNlPy52aXNpb25Tb3VyY2VzIHx8IFtdO1xuICAgIHJldHVybiBzb3VyY2VzLnNvbWUoc291cmNlID0+IHtcbiAgICAgICAgY29uc3QgZHggPSBsYXQgLSBzb3VyY2UubGF0O1xuICAgICAgICBjb25zdCBkeSA9IGxuZyAtIHNvdXJjZS5sbmc7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlIDw9IHNvdXJjZS5yYWRpdXM7XG4gICAgfSk7XG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5cclxuaW1wb3J0IHsgZ3JpZExheWVyLCBpbml0R3JpZExheWVyIH0gZnJvbSAnLi4vTGF5ZXJzL2dyaWRMYXllci5qcyc7XHJcbmltcG9ydCB7IGxvYWRWaXNpYmxlUm9hZENodW5rcyB9IGZyb20gJy4vcm9hZHMvcm9hZHMuanMnO1xyXG5pbXBvcnQgeyByb2Fkc1N0YXRlIH0gZnJvbSAnLi9yb2Fkcy9yb2Fkc1N0YXRlLmpzJztcclxuXHJcbmltcG9ydCB7IGxvYWRCYXNlRnJvbVNlcnZlciwgbG9hZE90aGVyQmFzZSwgc2V0Q3VycmVudFBsYXllckZhY3Rpb24gfSBmcm9tICcuLi9idWlsZGluZ3MvYmFzZS5qcyc7XHJcbmltcG9ydCB7IGxvYWRCdWlsZGluZ3NGcm9tRGF0YSwgc2V0Q3VycmVudFBsYXllcklkIH0gZnJvbSAnLi4vYnVpbGRpbmdzL2J1aWxkaW5nLmpzJztcclxuXHJcbmltcG9ydCB7IGluaXREZXBvc2l0TGF5ZXJzLCBkZXBvc2l0TGF5ZXJzIH0gZnJvbSAnLi9kZXBvc2l0cy9kZXBvc2l0cy5qcyc7XHJcbmltcG9ydCB7IGluaXRGb2dPZldhciB9IGZyb20gJy4vZm9nT2ZXYXIuanMnO1xyXG5pbXBvcnQgeyBpbml0Wm9uZURlYnVnUGFuZWwgfSBmcm9tICcuL3JvYWRzL3pvbmVEZWJ1Z1BhbmVsLmpzJztcclxuaW1wb3J0IHsgc3luY0tub3duWm9uZXMgfSBmcm9tICcuL3JvYWRzL3pvbmVTeW5jLmpzJztcclxuaW1wb3J0IHsgcm9hZHNMYXllciB9IGZyb20gJy4vcm9hZHMvcm9hZHNMYXllci5qcyc7XHJcblxyXG5pbXBvcnQgbWFya2VySWNvbiBmcm9tICdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1pY29uLnBuZyc7XHJcbmltcG9ydCBtYXJrZXJTaGFkb3cgZnJvbSAnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItc2hhZG93LnBuZyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG5MLk1hcmtlci5wcm90b3R5cGUub3B0aW9ucy5pY29uID0gTC5pY29uKHtcclxuICAgIGljb25Vcmw6IG1hcmtlckljb24sXHJcbiAgICBzaGFkb3dVcmw6IG1hcmtlclNoYWRvdyxcclxufSk7XHJcblxyXG5sZXQgbWFwSW5zdGFuY2UgPSBudWxsO1xyXG5sZXQgbW92ZVRpbWVvdXQgPSBudWxsO1xyXG5sZXQgaXNDaHVua01vZGUgPSBmYWxzZTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0TWFwKGxhdCwgbG5nKSB7XHJcblxyXG4gICAgbWFwSW5zdGFuY2UgPSBMLm1hcCgnbWFwJykuc2V0VmlldyhbbGF0LCBsbmddLCA3KTtcclxuXHJcbiAgICBMLnRpbGVMYXllcignaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnLCB7XHJcbiAgICAgICAgYXR0cmlidXRpb246ICcmY29weTsgT3BlblN0cmVldE1hcCdcclxuICAgIH0pLmFkZFRvKG1hcEluc3RhbmNlKTtcclxuXHJcbiAgICAvLyDDiXbDqW5lbWVudCBwZXJzb25uYWxpc8OpIHBvdXIgc2lnbmFsZXIgcXVlIGxhIGNhcnRlIGVzdCBwcsOqdGVcclxuICAgIG1hcEluc3RhbmNlLmZpcmUoJ21hcFJlYWR5Jyk7XHJcblxyXG4gICAgLy8gTGVzIGNvdWNoZXMgYWRtaW4gKHJvdXRlcyBwb3Nzw6lkw6llcyArIGNodW5rIGdyaWQpIG5lIHNvbnQgdmlzaWJsZXMgcXVlIHBvdXIgbGVzIGFkbWluc1xyXG4gICAgY29uc3QgaXNBZG1pbiA9IHdpbmRvdy5JU19BRE1JTiA9PT0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoaXNBZG1pbikge1xyXG4gICAgICAgIHJvYWRzTGF5ZXIuYWRkVG8obWFwSW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvdWNoZXMgZGUgYmFzZSA6IGTDqXDDtHRzICh2aXNpYmxlcyBwb3VyIHRvdXQgbGUgbW9uZGUpICsgY2h1bmsgZ3JpZCAoYWRtaW4gc2V1bGVtZW50KVxyXG4gICAgY29uc3QgYmFzZU92ZXJsYXlzID0ge307XHJcblxyXG4gICAgaWYgKGlzQWRtaW4pIHtcclxuICAgICAgICBiYXNlT3ZlcmxheXNbXCJDaHVuayBHcmlkXCJdID0gZ3JpZExheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxheWVyc0NvbnRyb2wgPSBMLmNvbnRyb2wubGF5ZXJzKG51bGwsIGJhc2VPdmVybGF5cykuYWRkVG8obWFwSW5zdGFuY2UpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpc2UgbGVzIGNvdWNoZXMgZGUgZMOpcMO0dHMgKHZpc2libGVzIHBvdXIgdG91dCBsZSBtb25kZSlcclxuICAgIGF3YWl0IGluaXREZXBvc2l0TGF5ZXJzKG1hcEluc3RhbmNlLCBsYXllcnNDb250cm9sKTtcclxuXHJcbiAgICAvLyBBam91dGUgbGEgY291Y2hlIHJvdXRlcyBwb3Nzw6lkw6llcyAoYWRtaW4gc2V1bGVtZW50KVxyXG4gICAgaWYgKGlzQWRtaW4pIHtcclxuICAgICAgICBsYXllcnNDb250cm9sLmFkZE92ZXJsYXkocm9hZHNMYXllciwgXCJSb3V0ZXMgcG9zc8OpZMOpZXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFubmVhdSBkZSBkZWJ1ZyBkZXMgem9uZXNcclxuICAgIGluaXRab25lRGVidWdQYW5lbCgpO1xyXG5cclxuICAgIC8vIENoYXJnZSBsYSBsaXN0ZSBkZXMgem9uZXMgZW4gYmFzZSBwb3VyIGwnb3ZlcmxheSBcIm5vbiBmZXRjaMOpXCJcclxuICAgIHN5bmNLbm93blpvbmVzKCkudGhlbihhc3luYyAoY291bnQpID0+IHtcclxuICAgICAgICBkZWJ1Z0xvZyhcInpvbmVzXCIsIGAke2NvdW50fSB6b25lcyBzeW5jaHJvbmlzw6llcyBkZXB1aXMgbGEgYmFzZWApO1xyXG4gICAgICAgIC8vIFJlLWNvbG9yZSBsZSBncmlkIHNpIGTDqWrDoCBpbml0aWFsaXPDqVxyXG4gICAgICAgIGNvbnN0IHsgcmVmcmVzaEdyaWRDb2xvcnMgfSA9IGF3YWl0IGltcG9ydCgnLi4vTGF5ZXJzL2dyaWRMYXllci5qcycpO1xyXG4gICAgICAgIHJlZnJlc2hHcmlkQ29sb3JzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIENFTlRSQUwgQ0hVTksgQ09OVFJPTExFUlxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgbWFwSW5zdGFuY2Uub24oJ21vdmVlbmQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghaXNDaHVua01vZGUpIHJldHVybjtcclxuICAgICAgICBpZiAobWFwSW5zdGFuY2UuZ2V0Wm9vbSgpIDwgMTQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KG1vdmVUaW1lb3V0KTtcclxuXHJcbiAgICAgICAgbW92ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaW5pdEdyaWRMYXllcigpO1xyXG4gICAgICAgICAgICBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKTtcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwSW5zdGFuY2Uub24oJ292ZXJsYXlhZGQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmxheWVyID09PSBncmlkTGF5ZXIpIHtcclxuICAgICAgICAgICAgZGVidWdMb2coXCJncmlkXCIsIFwiR3JpZCBPTlwiKTtcclxuXHJcbiAgICAgICAgICAgIGluaXRHcmlkTGF5ZXIoKTtcclxuICAgICAgICAgICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwSW5zdGFuY2Uub24oJ292ZXJsYXlyZW1vdmUnLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmxheWVyID09PSBncmlkTGF5ZXIpIHtcclxuICAgICAgICAgICAgZGVidWdMb2coXCJncmlkXCIsIFwiR3JpZCBPRkZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBFVkVOVFNcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbWFwSW5zdGFuY2Uub24oJ3pvb21lbmQnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHpvb20gPSBtYXBJbnN0YW5jZS5nZXRab29tKCk7XHJcblxyXG4gICAgICAgIGlmICh6b29tID49IDE0KSB7XHJcbiAgICAgICAgICAgIGVudGVyQ2h1bmtNb2RlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXhpdENodW5rTW9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNHcmlkTGF5ZXJBY3RpdmUoKSB7XHJcbiAgICByZXR1cm4gbWFwSW5zdGFuY2U/Lmhhc0xheWVyKGdyaWRMYXllcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXAoKSB7XHJcbiAgICByZXR1cm4gbWFwSW5zdGFuY2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbHlUbyhsYXQsIGxuZywgem9vbSA9IDEzKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIG1hcC5mbHlUbyhbbGF0LCBsbmddLCB6b29tLCB7XHJcbiAgICAgICAgYW5pbWF0ZTogdHJ1ZSxcclxuICAgICAgICBkdXJhdGlvbjogMS41XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFdPUkxEIExPQURFUiAoQ29uY2VudHJhdGV1ciBkJ2FwcGVscyBBUEkpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFdvcmxkKCkge1xyXG5cclxuICAgIGZldGNoKCcvYXBpL3dvcmxkLXN0YXRlJylcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQICR7cmVzLnN0YXR1c306ICR7cmVzLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgLy8gVsOpcmlmaWVyIHNpIGxhIHLDqXBvbnNlIGVzdCB2YWxpZGVcclxuICAgICAgICAgICAgaWYgKCFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlc3BvbnNlIGZvcm1hdCcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFyZ2VyIGxlcyBiYXNlcyB2aWEgYmFzZS5qcyBEJ0FCT1JEIHBvdXIgY29ubmHDrnRyZSBsYSBmYWN0aW9uIGR1IGpvdWV1clxyXG4gICAgICAgICAgICBpZiAoZGF0YS5wbGF5ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFzQ2VudGVyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuaXNNZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGxheWVyRmFjdGlvbihwbGF5ZXIuZmFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRCYXNlRnJvbVNlcnZlcihwbGF5ZXIubGF0LCBwbGF5ZXIubG5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzQ2VudGVyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZseVRvKHBsYXllci5sYXQsIHBsYXllci5sbmcsIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NlbnRlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZE90aGVyQmFzZShwbGF5ZXIubGF0LCBwbGF5ZXIubG5nLCBwbGF5ZXIucHNldWRvLCBwbGF5ZXIuZmFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRMOpZmluaXIgbCdJRCBkdSBqb3VldXIgYWN0aWZcclxuICAgICAgICAgICAgaWYgKGRhdGEuY3VycmVudFBsYXllcklkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGxheWVySWQoZGF0YS5jdXJyZW50UGxheWVySWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGFyZ2VyIGxlcyBiw6J0aW1lbnRzIGFwcsOocyBhdm9pciBkw6lmaW5pIGxhIGZhY3Rpb24gZHUgam91ZXVyXHJcbiAgICAgICAgICAgIGxvYWRCdWlsZGluZ3NGcm9tRGF0YShkYXRhLmJ1aWxkaW5ncyk7XHJcblxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXNlciBsZSBGb2cgb2YgV2FyXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmZvZ01vZGUgJiYgZGF0YS52aXNpb25Tb3VyY2VzKSB7XHJcbiAgICAgICAgICAgICAgICBpbml0Rm9nT2ZXYXIoZGF0YS5mb2dNb2RlLCBkYXRhLnZpc2lvblNvdXJjZXMsIG1hcEluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIGRlYnVnRXJyb3IoJ21hcCcsIFwiRXJyZXVyIGxvYWQgd29ybGRcIiwgZXJyKTtcclxuICAgICAgICAgICAgLy8gTmUgcGFzIHJlZGlyaWdlciBhdXRvbWF0aXF1ZW1lbnQsIGxhaXNzZXogbGUgc3lzdMOobWUgZGUgbG9naW4gZ8OpcmVyIGxhIHJlZGlyZWN0aW9uXHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVudGVyQ2h1bmtNb2RlKCkge1xyXG4gICAgaWYgKGlzQ2h1bmtNb2RlKSByZXR1cm47XHJcblxyXG4gICAgaXNDaHVua01vZGUgPSB0cnVlO1xyXG5cclxuICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwiRU5URVIgQ0hVTksgTU9ERVwiKTtcclxuXHJcbiAgICBpbml0R3JpZExheWVyKCk7XHJcbiAgICBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXhpdENodW5rTW9kZSgpIHtcclxuICAgIGlmICghaXNDaHVua01vZGUpIHJldHVybjtcclxuXHJcbiAgICBpc0NodW5rTW9kZSA9IGZhbHNlO1xyXG5cclxuICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwiRVhJVCBDSFVOSyBNT0RFXCIpO1xyXG5cclxuICAgIGlmIChtYXBJbnN0YW5jZS5oYXNMYXllcihncmlkTGF5ZXIpKSB7XHJcbiAgICAgICAgbWFwSW5zdGFuY2UucmVtb3ZlTGF5ZXIoZ3JpZExheWVyKTtcclxuICAgIH1cclxufSIsImNvbnN0IGNodW5rQ2FjaGUgPSBuZXcgTWFwKCk7XHJcbmNvbnN0IENBQ0hFX1RUTCA9IDM2MDAwMDA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FjaGVkQ2h1bmsoaWQpIHtcclxuICAgIGNvbnN0IGNhY2hlZCA9IGNodW5rQ2FjaGUuZ2V0KGlkKTtcclxuXHJcbiAgICBpZiAoIWNhY2hlZCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChEYXRlLm5vdygpIC0gY2FjaGVkLnRzID4gQ0FDSEVfVFRMKSB7XHJcbiAgICAgICAgY2h1bmtDYWNoZS5kZWxldGUoaWQpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYWNoZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDYWNoZWRDaHVuayhpZCwgZGF0YSkge1xyXG4gICAgY2h1bmtDYWNoZS5zZXQoaWQsIHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIHRzOiBEYXRlLm5vdygpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRhdGVDaHVua0NhY2hlKGlkKSB7XHJcbiAgICBjaHVua0NhY2hlLmRlbGV0ZShpZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNodW5rQ2FjaGUoKSB7XHJcbiAgICBjaHVua0NhY2hlLmNsZWFyKCk7XHJcbn0iLCJpbXBvcnQgeyByb2Fkc1N0YXRlIH0gZnJvbSAnLi9yb2Fkc1N0YXRlLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2cgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcbmltcG9ydCB7IGludmFsaWRhdGVDaHVua0NhY2hlIH0gZnJvbSAnLi9jaHVua0NhY2hlLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkYXRlQ2h1bmsoaWQpIHtcclxuICAgIGRlYnVnTG9nKFwiY2FjaGVcIiwgXCLwn6e5IGludmFsaWRhdGUgY2h1bms6XCIsIGlkKTtcclxuXHJcbiAgICBkZWxldGUgcm9hZHNTdGF0ZS5jaHVua3NbaWRdO1xyXG4gICAgaW52YWxpZGF0ZUNodW5rQ2FjaGUoaWQpO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuXHJcbi8qKlxyXG4gKiBUcm91dmUgbGUgcG9pbnQgbGUgcGx1cyBwcm9jaGUgc3VyIHRvdXRlcyBsZXMgcm91dGVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZENsb3Nlc3RQb2ludE9uUm9hZChsYXRsbmcsIHJvYWRzKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBsZXQgYmVzdFBvaW50ID0gbnVsbDtcclxuICAgIGxldCBiZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZHMpKSByZXR1cm4geyBwb2ludDogbnVsbCwgZGlzdGFuY2U6IEluZmluaXR5IH07XHJcblxyXG4gICAgcm9hZHMuZm9yRWFjaChyb2FkID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWQucG9pbnRzKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChyb2FkLnBvaW50cy5sZW5ndGggPCAyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9hZC5wb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhUmF3ID0gcm9hZC5wb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGJSYXcgPSByb2FkLnBvaW50c1tpICsgMV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFSYXcgfHwgIWJSYXcpIHtcclxuICAgICAgICAgICAgICAgIGRlYnVnV2FybihcInJvYWRzXCIsIFwiQlJPS0VOIFJPQUQgU0VHTUVOVDpcIiwgcm9hZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChhUmF3Lmxlbmd0aCA8IDIgfHwgYlJhdy5sZW5ndGggPCAyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBMLmxhdExuZyhhUmF3WzBdLCBhUmF3WzFdKTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IEwubGF0TG5nKGJSYXdbMF0sIGJSYXdbMV0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdGVkID0gcHJvamVjdFBvaW50T25TZWdtZW50KGxhdGxuZywgYSwgYik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBtYXAuZGlzdGFuY2UobGF0bG5nLCBwcm9qZWN0ZWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3QgPCBiZXN0RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0YW5jZSA9IGRpc3Q7XHJcbiAgICAgICAgICAgICAgICBiZXN0UG9pbnQgPSBwcm9qZWN0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBvaW50OiBiZXN0UG9pbnQsXHJcbiAgICAgICAgZGlzdGFuY2U6IGJlc3REaXN0YW5jZVxyXG4gICAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyb3V2ZSBsZSBzZWdtZW50IGxlIHBsdXMgcHJvY2hlIChwb3VyIGhpZ2hsaWdodCB2aXN1ZWwpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZENsb3Nlc3RTZWdtZW50KGxhdGxuZywgcm9hZHMpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGxldCBiZXN0U2VnbWVudCA9IG51bGw7XHJcbiAgICBsZXQgYmVzdERpc3RhbmNlID0gSW5maW5pdHk7XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWRzKSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcm9hZHMuZm9yRWFjaChyb2FkID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWQucG9pbnRzKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvYWQucG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYVJhdyA9IHJvYWQucG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiUmF3ID0gcm9hZC5wb2ludHNbaSArIDFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFhUmF3IHx8ICFiUmF3KSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKGFSYXcubGVuZ3RoIDwgMiB8fCBiUmF3Lmxlbmd0aCA8IDIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYSA9IEwubGF0TG5nKGFSYXdbMF0sIGFSYXdbMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gTC5sYXRMbmcoYlJhd1swXSwgYlJhd1sxXSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtaWQgPSBMLmxhdExuZyhcclxuICAgICAgICAgICAgICAgIChhLmxhdCArIGIubGF0KSAvIDIsXHJcbiAgICAgICAgICAgICAgICAoYS5sbmcgKyBiLmxuZykgLyAyXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gbWFwLmRpc3RhbmNlKGxhdGxuZywgbWlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0IDwgYmVzdERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0RGlzdGFuY2UgPSBkaXN0O1xyXG4gICAgICAgICAgICAgICAgYmVzdFNlZ21lbnQgPSBbYSwgYl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYmVzdFNlZ21lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9qZWN0aW9uIGQndW4gcG9pbnQgc3VyIHVuIHNlZ21lbnQgKEEtQilcclxuICogbWF0aCBzdGFibGUgcG91ciBzbmFwIHJvdXRlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RQb2ludE9uU2VnbWVudChwLCBhLCBiKSB7XHJcblxyXG4gICAgY29uc3QgQSA9IFthLmxhdCwgYS5sbmddO1xyXG4gICAgY29uc3QgQiA9IFtiLmxhdCwgYi5sbmddO1xyXG4gICAgY29uc3QgUCA9IFtwLmxhdCwgcC5sbmddO1xyXG5cclxuICAgIGNvbnN0IEFCID0gW0JbMF0gLSBBWzBdLCBCWzFdIC0gQVsxXV07XHJcbiAgICBjb25zdCBBUCA9IFtQWzBdIC0gQVswXSwgUFsxXSAtIEFbMV1dO1xyXG5cclxuICAgIGNvbnN0IGFiMiA9IEFCWzBdICogQUJbMF0gKyBBQlsxXSAqIEFCWzFdO1xyXG5cclxuICAgIGlmIChhYjIgPT09IDApIHJldHVybiBhO1xyXG5cclxuICAgIGxldCB0ID0gKEFQWzBdICogQUJbMF0gKyBBUFsxXSAqIEFCWzFdKSAvIGFiMjtcclxuXHJcbiAgICB0ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdCkpO1xyXG5cclxuICAgIHJldHVybiBMLmxhdExuZyhcclxuICAgICAgICBBWzBdICsgQUJbMF0gKiB0LFxyXG4gICAgICAgIEFbMV0gKyBBQlsxXSAqIHRcclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXN0YW5jZSBwb2ludCAtPiBzZWdtZW50ICh1dGlsZSB2YWxpZGF0aW9uIGZ1dHVyZSlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZVRvU2VnbWVudChwLCBhLCBiKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0ZWQgPSBwcm9qZWN0UG9pbnRPblNlZ21lbnQocCwgYSwgYik7XHJcbiAgICByZXR1cm4gbWFwLmRpc3RhbmNlKHAsIHByb2plY3RlZCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBzaW1wbGUgZGVidWcgcm9hZHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z1JvYWRzKHJvYWRzKSB7XHJcbiAgICBkZWJ1Z0xvZyhcInJvYWRzXCIsIFwiUk9BRFMgREVCVUc6XCIsIHJvYWRzLmxlbmd0aCwgcm9hZHMpO1xyXG59IiwiaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwLmpzJztcbmltcG9ydCB7IENIVU5LX1NJWkUgfSBmcm9tICcuLi8uLi91dGlscy9jaHVuay5qcyc7XG5pbXBvcnQgeyBzZXRDaHVua0NvbG9yIH0gZnJvbSAnLi4vLi4vTGF5ZXJzL2dyaWRMYXllci5qcyc7XG5pbXBvcnQgeyBpbnZhbGlkYXRlQ2h1bmsgfSBmcm9tICcuL2ludmFsaWRhdGVDaHVuay5qcyc7XG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVidWcuanMnO1xuaW1wb3J0IHsgcm9hZHNTdGF0ZSB9IGZyb20gJy4vcm9hZHNTdGF0ZS5qcyc7XG5pbXBvcnQgeyByZW5kZXJEZXBvc2l0c0Zyb21EYXRhIH0gZnJvbSAnLi4vZGVwb3NpdHMvZGVwb3NpdHMuanMnO1xuaW1wb3J0IHsgZ2V0Q2FjaGVkQ2h1bmssIHNldENhY2hlZENodW5rLCBpbnZhbGlkYXRlQ2h1bmtDYWNoZSB9IGZyb20gJy4vY2h1bmtDYWNoZS5qcyc7XG5pbXBvcnQgeyBkcmF3T3duZWRSb2FkcyB9IGZyb20gJy4vcm9hZHNMYXllci5qcyc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTQUZFIEpTT04gUEFSU0Vcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQYXJzZSBsZSBKU09OIGQndW5lIHLDqXBvbnNlIGVuIHJlbnZveWFudCBUT1VKT1VSUyBkdSBKU09OIHZhbGlkZS5cbi8vIFNpIGxlIGNvcnBzIG4nZXN0IGR1IEpTT04gKHBhZ2UgZCdlcnJldXIgSFRNTCwgNTAwLCA0MDQsIHZpZGUpLFxuLy8gbGUgdGV4dGUgYnJ1dCBlc3QgbG9nZ8OpIHBvdXIgZGlhZ25vc3RpYyBldCB1biBvYmpldCBwYXIgZMOpZmF1dFxuLy8gZXN0IHJldG91cm7DqSBwb3VyIMOpdml0ZXIgbGUgY3Jhc2ggXCJKU09OLnBhcnNlOiB1bmV4cGVjdGVkIGNoYXJhY3RlclwiLlxuYXN5bmMgZnVuY3Rpb24gc2FmZUpzb24ocmVzcG9uc2UsIGRlZmF1bHREYXRhKSB7XG4gICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGRlYnVnRXJyb3IoXCJyb2Fkc1wiLCBgW1NBRkVfSlNPTl0gUsOpcG9uc2Ugbm9uLUpTT04gKHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS51cmx9KTpgLFxuICAgICAgICAgICAgdGV4dC5zbGljZSgwLCA1MDApKTtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHREYXRhO1xuICAgIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1BSU4gTE9BRCBWSVNJQkxFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRWaXNpYmxlUm9hZENodW5rcygpIHtcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcbiAgICBpZiAoIW1hcCB8fCBtYXAuZ2V0Wm9vbSgpIDwgMTQpIHJldHVybjtcblxuICAgIGNvbnN0IGJvdW5kcyAgICAgICAgPSBtYXAuZ2V0Qm91bmRzKCk7XG4gICAgY29uc3QgdmlzaWJsZUNodW5rcyA9IGdldFZpc2libGVDaHVua3MoYm91bmRzKTtcbiAgICBjb25zdCBjaHVua3NUb0xvYWQgID0gdmlzaWJsZUNodW5rcy5maWx0ZXIoY2h1bmtJZCA9PiAhcm9hZHNTdGF0ZS5sb2FkZWRDaHVua3MuaGFzKGNodW5rSWQpKTtcblxuICAgIGNvbnN0IGZpbmFsQ2h1bmtzVG9Mb2FkID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgY2h1bmtzVG9Mb2FkKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXRDYWNoZWRDaHVuayhjaHVua0lkKTtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xuICAgICAgICAgICAgICAgIHN0YXR1czogICBkYXRhLmhhc1JvYWRzID8gJ2xvYWRlZCcgOiAnZW1wdHknLFxuICAgICAgICAgICAgICAgIHJvYWRzOiAgICBkYXRhLnJvYWRzLFxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogZGF0YS5idWlsZGluZ3MsXG4gICAgICAgICAgICAgICAgZGVwb3NpdHM6IGRhdGEuZGVwb3NpdHMsXG4gICAgICAgICAgICAgICAgaGFzUm9hZHM6IGRhdGEuaGFzUm9hZHNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5hZGQoY2h1bmtJZCk7XG4gICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsIGRhdGEuaGFzUm9hZHMgPyAnYmx1ZScgOiAnIzQ0NCcpO1xuICAgICAgICAgICAgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShkYXRhLmRlcG9zaXRzIHx8IFtdLCBtYXApO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxDaHVua3NUb0xvYWQucHVzaChjaHVua0lkKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgZmluYWxDaHVua3NUb0xvYWQpIHtcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7IHN0YXR1czogJ2xvYWRpbmcnLCByb2FkczogW10sIGJ1aWxkaW5nczogW10sIGRlcG9zaXRzOiBbXSB9O1xuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTtcbiAgICB9XG5cbiAgICBpZiAoZmluYWxDaHVua3NUb0xvYWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlZnJlc2hDaHVua0NvbG9ycyh2aXNpYmxlQ2h1bmtzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIExhIGJib3ggZW5nbG9iYW50ZSBkZXMgY2h1bmtzIHZpc2libGVzXG4gICAgY29uc3QgdmlzaWJsZUJvdW5kcyA9IHtcbiAgICAgICAgc291dGg6IGJvdW5kcy5nZXRTb3V0aCgpLFxuICAgICAgICB3ZXN0OiAgYm91bmRzLmdldFdlc3QoKSxcbiAgICAgICAgbm9ydGg6IGJvdW5kcy5nZXROb3J0aCgpLFxuICAgICAgICBlYXN0OiAgYm91bmRzLmdldEVhc3QoKSxcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgW3JvYWRzUmVzcG9uc2UsIGJ1aWxkaW5nc1Jlc3BvbnNlLCBkZXBvc2l0c1Jlc3BvbnNlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2NodW5rcy9idWxrJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZpc2libGVCb3VuZHMpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9idWlsZGluZ3MvdmlzaWJsZScsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2aXNpYmxlQm91bmRzKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvZGVwb3NpdHMvYnVsaycsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2aXNpYmxlQm91bmRzKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdKTtcblxuICAgICAgICAvLyBPbiBwYXJzZSBlbiB0b2zDqXJhbnQgdW5lIHLDqXBvbnNlIG5vbi1KU09OIChwYWdlIGQnZXJyZXVyIEhUTUwgNTAwLzQwNOKApilcbiAgICAgICAgLy8gcG91ciDDqXZpdGVyIFwiSlNPTi5wYXJzZTogdW5leHBlY3RlZCBjaGFyYWN0ZXJcIiBldCBsb2dnZXIgbGUgY29ycHMgYnJ1dC5cbiAgICAgICAgY29uc3Qgcm9hZHNEYXRhICAgICA9IGF3YWl0IHNhZmVKc29uKHJvYWRzUmVzcG9uc2UsIHsgcm9hZHM6IFtdIH0pO1xuICAgICAgICBjb25zdCBidWlsZGluZ3NEYXRhID0gYXdhaXQgc2FmZUpzb24oYnVpbGRpbmdzUmVzcG9uc2UsIHsgYnVpbGRpbmdzOiBbXSB9KTtcbiAgICAgICAgY29uc3QgZGVwb3NpdHNEYXRhICA9IGF3YWl0IHNhZmVKc29uKGRlcG9zaXRzUmVzcG9uc2UsIHsgZGVwb3NpdHM6IFtdIH0pO1xuXG4gICAgICAgIC8vIE5vdXZlYXUgZm9ybWF0IDogdGFibGVhdXggcGxhdHMgZGFucyAkLnJvYWRzLCAkLmJ1aWxkaW5ncywgJC5kZXBvc2l0c1xuICAgICAgICBjb25zdCBhbGxSb2FkcyAgICAgPSByb2Fkc0RhdGEucm9hZHMgfHwgW107XG4gICAgICAgIGNvbnN0IGFsbEJ1aWxkaW5ncyA9IGJ1aWxkaW5nc0RhdGEuYnVpbGRpbmdzIHx8IFtdO1xuICAgICAgICBjb25zdCBhbGxEZXBvc2l0cyAgPSBkZXBvc2l0c0RhdGEuZGVwb3NpdHMgfHwgW107XG5cbiAgICAgICAgLy8gRGlzdHJpYnVlIGxlcyByb3V0ZXMgZGFucyBsZXMgY2VsbHVsZXMgdmlzaWJsZXMgKHVuZSByb3V0ZSBwZXV0IHRvdWNoZXIgcGx1c2lldXJzIGNlbGx1bGVzKVxuICAgICAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgZmluYWxDaHVua3NUb0xvYWQpIHtcbiAgICAgICAgICAgIGNvbnN0IFtjeFN0ciwgY3lTdHJdID0gY2h1bmtJZC5zcGxpdCgnXycpO1xuICAgICAgICAgICAgLy8gTGUgY2h1bmtJZCBlc3QgXCJsYXRNaW5fbG5nTWluXCIgb8O5IGxhdE1pbi9sbmdNaW4gc29udCBkZXMgZmxvYXRzIChleDogXCI0NS4xNl8wLjc2XCIpLlxuICAgICAgICAgICAgLy8gVXRpbGlzZXIgcGFyc2VGbG9hdCAvIENIVU5LX1NJWkUgcG91ciBvYnRlbmlyIGwnZW50aWVyIGRlIGdyaWxsZSAoZXg6IDQ1MTYsIDc2KS5cbiAgICAgICAgICAgIGNvbnN0IGN4ID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGN4U3RyKSAvIENIVU5LX1NJWkUpO1xuICAgICAgICAgICAgY29uc3QgY3kgPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoY3lTdHIpIC8gQ0hVTktfU0laRSk7XG4gICAgICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKGN4KSB8fCBOdW1iZXIuaXNOYU4oY3kpKSBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gTm9ybWFsaXNlciBsYSBiYm94IGF2ZWMgdG9GaXhlZCg4KSBwb3VyIMOpdml0ZXIgbGVzIGVycmV1cnMgZGUgcHLDqWNpc2lvbiBmbG9hdHNcbiAgICAgICAgICAgIGNvbnN0IGNlbGxTb3V0aCA9IE51bWJlcigoY3ggKiBDSFVOS19TSVpFKS50b0ZpeGVkKDgpKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxXZXN0ICA9IE51bWJlcigoY3kgKiBDSFVOS19TSVpFKS50b0ZpeGVkKDgpKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxOb3J0aCA9IE51bWJlcigoY2VsbFNvdXRoICsgQ0hVTktfU0laRSkudG9GaXhlZCg4KSk7XG4gICAgICAgICAgICBjb25zdCBjZWxsRWFzdCAgPSBOdW1iZXIoKGNlbGxXZXN0ICsgQ0hVTktfU0laRSkudG9GaXhlZCg4KSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxSb2FkcyA9IGFsbFJvYWRzLmZpbHRlcihyb2FkID0+XG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShyb2FkLnBvaW50cykgJiYgcm9hZC5wb2ludHMuc29tZShwdCA9PlxuICAgICAgICAgICAgICAgICAgICBwdFswXSA+PSBjZWxsU291dGggJiYgcHRbMF0gPD0gY2VsbE5vcnRoICYmXG4gICAgICAgICAgICAgICAgICAgIHB0WzFdID49IGNlbGxXZXN0ICAmJiBwdFsxXSA8PSBjZWxsRWFzdFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzRW1wdHkgPSBhbGxSb2Fkcy5sZW5ndGggPT09IDAgJiYgYWxsQnVpbGRpbmdzLmxlbmd0aCA9PT0gMCAmJiBhbGxEZXBvc2l0cy5sZW5ndGggPT09IDA7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBpc0VtcHR5ID8gJ2VtcHR5JyA6ICdsb2FkZWQnO1xuXG4gICAgICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcbiAgICAgICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICAgICAgcm9hZHM6ICAgICBjZWxsUm9hZHMsXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBhbGxCdWlsZGluZ3MsXG4gICAgICAgICAgICAgICAgZGVwb3NpdHM6ICBhbGxEZXBvc2l0cyxcbiAgICAgICAgICAgICAgICBoYXNSb2FkczogIGNlbGxSb2Fkcy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcm9hZHNTdGF0ZS5sb2FkZWRDaHVua3MuYWRkKGNodW5rSWQpO1xuICAgICAgICAgICAgc2V0Q2FjaGVkQ2h1bmsoY2h1bmtJZCwgeyByb2FkczogY2VsbFJvYWRzLCBidWlsZGluZ3M6IGFsbEJ1aWxkaW5ncywgZGVwb3NpdHM6IGFsbERlcG9zaXRzLCBoYXNSb2FkczogY2VsbFJvYWRzLmxlbmd0aCA+IDAgfSk7XG5cbiAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgaXNFbXB0eSA/ICcjNDQ0JyA6ICdibHVlJyk7XG4gICAgICAgICAgICByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGFsbERlcG9zaXRzLCBtYXApO1xuXG4gICAgICAgICAgICAvLyBEZXNzaW5lIGxlcyByb3V0ZXMgcG9zc8OpZMOpZXMgc3VyIGxhIGNhcnRlIChzZXVsZXMgbGVzIHJvdXRlcyBkZSBDRSBjaHVuaylcbiAgICAgICAgICAgIGRyYXdPd25lZFJvYWRzKGNlbGxSb2Fkcyk7XG5cbiAgICAgICAgICAgIGRlYnVnTG9nKFwicm9hZHNcIiwgYFtMT0FEXSAke2NodW5rSWR9OiAke3N0YXR1c30gKCR7Y2VsbFJvYWRzLmxlbmd0aH0gcm91dGVzIGljaSwgJHthbGxSb2Fkcy5sZW5ndGh9IHRvdGFsKWApO1xuICAgICAgICB9XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBkZWJ1Z0Vycm9yKFwicm9hZHNcIiwgXCJFcnJldXIgY2hhcmdlbWVudCBjaHVua3MgYnVsazpcIiwgZXJyb3IpO1xuICAgICAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgZmluYWxDaHVua3NUb0xvYWQpIHtcbiAgICAgICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0geyBzdGF0dXM6ICdlcnJvcicsIHJvYWRzOiBbXSwgYnVpbGRpbmdzOiBbXSwgZGVwb3NpdHM6IFtdIH07XG4gICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdyZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZnJlc2hDaHVua0NvbG9ycyh2aXNpYmxlQ2h1bmtzKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFRlJFU0ggQ0hVTktcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaENodW5rKGNodW5rSWQpIHtcbiAgICBpbnZhbGlkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gICAgaW52YWxpZGF0ZUNodW5rQ2FjaGUoY2h1bmtJZCk7XG5cbiAgICByb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5kZWxldGUoY2h1bmtJZCk7XG5cbiAgICBhd2FpdCBmZXRjaFNpbmdsZUNodW5rKGNodW5rSWQpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVGUkVTSCBNVUxUSVBMRSBDSFVOS1Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaENodW5rcyhjaHVua0lkcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjaHVua0lkcykgfHwgY2h1bmtJZHMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoY2h1bmtJZHMubWFwKGlkID0+IHJlZnJlc2hDaHVuayhpZCkpKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZFVENIIFNJTkdMRSBDSFVOS1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbmFzeW5jIGZ1bmN0aW9uIGZldGNoU2luZ2xlQ2h1bmsoY2h1bmtJZCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0geyBzdGF0dXM6ICdsb2FkaW5nJywgcm9hZHM6IFtdLCBidWlsZGluZ3M6IFtdLCBkZXBvc2l0czogW10gfTtcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnb3JhbmdlJyk7XG5cbiAgICAgICAgLy8gRMOpZHVpcmUgdW5lIGJib3ggZHUgY2h1bmtJZCBcImxhdE1pbl9sbmdNaW5cIiAoZXg6IFwiNDUuMTZfMC43NlwiKVxuICAgICAgICAvLyBVdGlsaXNlciBwYXJzZUZsb2F0IC8gQ0hVTktfU0laRSBwb3VyIG9idGVuaXIgbCdlbnRpZXIgZGUgZ3JpbGxlIChleDogNDUxNiwgNzYpLlxuICAgICAgICBjb25zdCBbY3hTdHIsIGN5U3RyXSA9IGNodW5rSWQuc3BsaXQoJ18nKTtcbiAgICAgICAgY29uc3QgY3ggPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoY3hTdHIpIC8gQ0hVTktfU0laRSk7XG4gICAgICAgIGNvbnN0IGN5ID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGN5U3RyKSAvIENIVU5LX1NJWkUpO1xuICAgICAgICBjb25zdCBjZWxsU291dGggPSBOdW1iZXIoKGN4ICogQ0hVTktfU0laRSkudG9GaXhlZCg4KSk7XG4gICAgICAgIGNvbnN0IGNlbGxXZXN0ICA9IE51bWJlcigoY3kgKiBDSFVOS19TSVpFKS50b0ZpeGVkKDgpKTtcbiAgICAgICAgY29uc3QgY2VsbE5vcnRoID0gTnVtYmVyKChjZWxsU291dGggKyBDSFVOS19TSVpFKS50b0ZpeGVkKDgpKTtcbiAgICAgICAgY29uc3QgY2VsbEVhc3QgID0gTnVtYmVyKChjZWxsV2VzdCArIENIVU5LX1NJWkUpLnRvRml4ZWQoOCkpO1xuXG4gICAgICAgIGNvbnN0IFtyb2Fkc1JlcywgYnVpbGRpbmdzUmVzLCBkZXBvc2l0c1Jlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9jaHVua3MvYnVsaycsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHNvdXRoOiBjZWxsU291dGgsIHdlc3Q6IGNlbGxXZXN0LCBub3J0aDogY2VsbE5vcnRoLCBlYXN0OiBjZWxsRWFzdCB9KSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvYnVpbGRpbmdzL3Zpc2libGUnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBzb3V0aDogY2VsbFNvdXRoLCB3ZXN0OiBjZWxsV2VzdCwgbm9ydGg6IGNlbGxOb3J0aCwgZWFzdDogY2VsbEVhc3QgfSksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2RlcG9zaXRzL2J1bGsnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBzb3V0aDogY2VsbFNvdXRoLCB3ZXN0OiBjZWxsV2VzdCwgbm9ydGg6IGNlbGxOb3J0aCwgZWFzdDogY2VsbEVhc3QgfSksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgY29uc3Qgcm9hZHNEYXRhICAgICA9IGF3YWl0IHNhZmVKc29uKHJvYWRzUmVzLCB7IHJvYWRzOiBbXSB9KTtcbiAgICAgICAgY29uc3QgYnVpbGRpbmdzRGF0YSA9IGF3YWl0IHNhZmVKc29uKGJ1aWxkaW5nc1JlcywgeyBidWlsZGluZ3M6IFtdIH0pO1xuICAgICAgICBjb25zdCBkZXBvc2l0c0RhdGEgID0gYXdhaXQgc2FmZUpzb24oZGVwb3NpdHNSZXMsIHsgZGVwb3NpdHM6IFtdIH0pO1xuXG4gICAgICAgIGNvbnN0IGFsbFJvYWRzICAgICA9IHJvYWRzRGF0YS5yb2FkcyB8fCBbXTtcbiAgICAgICAgY29uc3QgYWxsQnVpbGRpbmdzID0gYnVpbGRpbmdzRGF0YS5idWlsZGluZ3MgfHwgW107XG4gICAgICAgIGNvbnN0IGFsbERlcG9zaXRzICA9IGRlcG9zaXRzRGF0YS5kZXBvc2l0cyB8fCBbXTtcblxuICAgICAgICAvLyBGaWx0cmUgbGVzIHJvdXRlcyBxdWkgaW50ZXJzZWN0ZW50IENFIGNodW5rXG4gICAgICAgIGNvbnN0IGNlbGxSb2FkcyA9IGFsbFJvYWRzLmZpbHRlcihyb2FkID0+XG4gICAgICAgICAgICBBcnJheS5pc0FycmF5KHJvYWQucG9pbnRzKSAmJiByb2FkLnBvaW50cy5zb21lKHB0ID0+XG4gICAgICAgICAgICAgICAgcHRbMF0gPj0gY2VsbFNvdXRoICYmIHB0WzBdIDw9IGNlbGxOb3J0aCAmJlxuICAgICAgICAgICAgICAgIHB0WzFdID49IGNlbGxXZXN0ICAmJiBwdFsxXSA8PSBjZWxsRWFzdFxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFVuIGNodW5rIGVzdCBcImxvYWRlZFwiIChibGV1KSBkw6hzIHF1ZSBsYSB6b25lIGEgw6l0w6kgZmV0Y2jDqWUgYXZlYyBzdWNjw6hzLFxuICAgICAgICAvLyBtw6ptZSBzaSBsZXMgcm91dGVzIHNvbnQgc3RvY2vDqWVzIGRhbnMgZGVzIGNodW5rcyB2b2lzaW5zLlxuICAgICAgICAvLyBMZSBzdGF0dXQgXCJlbXB0eVwiIChncmlzKSBuJ2FwcGFyYcOudCBxdWUgc2kgbCdBUEkgY29uZmlybWUgcXUnaWwgbid5IGFcbiAgICAgICAgLy8gc3RyaWN0ZW1lbnQgYXVjdW5lIHJvdXRlIGRhbnMgbGEgYmJveCBkdSBjaHVuay5cbiAgICAgICAgY29uc3QgaXNFbXB0eSA9IGFsbFJvYWRzLmxlbmd0aCA9PT0gMCAmJiBhbGxCdWlsZGluZ3MubGVuZ3RoID09PSAwICYmIGFsbERlcG9zaXRzLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gaXNFbXB0eSA/ICdlbXB0eScgOiAnbG9hZGVkJztcblxuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHsgc3RhdHVzLCByb2FkczogY2VsbFJvYWRzLCBidWlsZGluZ3M6IGFsbEJ1aWxkaW5ncywgZGVwb3NpdHM6IGFsbERlcG9zaXRzLCBoYXNSb2FkczogY2VsbFJvYWRzLmxlbmd0aCA+IDAgfTtcbiAgICAgICAgc2V0Q2FjaGVkQ2h1bmsoY2h1bmtJZCwgeyByb2FkczogY2VsbFJvYWRzLCBidWlsZGluZ3M6IGFsbEJ1aWxkaW5ncywgZGVwb3NpdHM6IGFsbERlcG9zaXRzLCBoYXNSb2FkczogY2VsbFJvYWRzLmxlbmd0aCA+IDAgfSk7XG5cbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCBpc0VtcHR5ID8gJyM0NDQnIDogJ2JsdWUnKTtcbiAgICAgICAgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShhbGxEZXBvc2l0cywgZ2V0TWFwKCkpO1xuXG4gICAgICAgIGRlYnVnTG9nKFwicm9hZHNcIiwgYFtDSFVOSyBSRUZSRVNIXSAke2NodW5rSWR9OiAke3N0YXR1c30gKCR7Y2VsbFJvYWRzLmxlbmd0aH0gcm91dGVzIGljaSwgJHthbGxSb2Fkcy5sZW5ndGh9IHRvdGFsIGRhbnMgbGEgYmJveClgKTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7IHN0YXR1czogJ2Vycm9yJywgcm9hZHM6IFtdLCBidWlsZGluZ3M6IFtdLCBkZXBvc2l0czogW10gfTtcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAncmVkJyk7XG4gICAgICAgIGRlYnVnRXJyb3IoXCJyb2Fkc1wiLCBcIltDSFVOSyBSRUZSRVNIIEVSUk9SXVwiLCBjaHVua0lkLCBlKTtcbiAgICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRUZSRVNIIENIVU5LIENPTE9SU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIHJlZnJlc2hDaHVua0NvbG9ycyh2aXNpYmxlQ2h1bmtzKSB7XG4gICAgZm9yIChjb25zdCBjaHVua0lkIG9mIHZpc2libGVDaHVua3MpIHtcbiAgICAgICAgY29uc3QgY2h1bmsgPSByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXTtcbiAgICAgICAgaWYgKCFjaHVuaykgeyBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTsgY29udGludWU7IH1cblxuICAgICAgICBjb25zdCBjb2xvcnMgPSB7IGxvYWRlZDogJ2JsdWUnLCBlbXB0eTogJyM0NDQnLCBsb2FkaW5nOiAnb3JhbmdlJywgZXJyb3I6ICdyZWQnIH07XG4gICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgY29sb3JzW2NodW5rLnN0YXR1c10gPz8gJ3llbGxvdycpO1xuICAgIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZJU0lCTEUgQ0hVTktTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gZ2V0VmlzaWJsZUNodW5rcyhib3VuZHMpIHtcbiAgICBjb25zdCBtaW5YID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0U291dGgoKSAvIENIVU5LX1NJWkUpO1xuICAgIGNvbnN0IG1heFggPSBNYXRoLmZsb29yKGJvdW5kcy5nZXROb3J0aCgpIC8gQ0hVTktfU0laRSk7XG4gICAgY29uc3QgbWluWSA9IE1hdGguZmxvb3IoYm91bmRzLmdldFdlc3QoKSAgLyBDSFVOS19TSVpFKTtcbiAgICBjb25zdCBtYXhZID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0RWFzdCgpICAvIENIVU5LX1NJWkUpO1xuXG4gICAgY29uc3QgY2h1bmtzID0gW107XG4gICAgZm9yIChsZXQgeCA9IG1pblg7IHggPD0gbWF4WDsgeCsrKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSBtaW5ZOyB5IDw9IG1heFk7IHkrKykge1xuICAgICAgICAgICAgLy8gRm9ybWF0IGNvaMOpcmVudCBhdmVjIHNuYXBUb0NodW5rIDogXCJsYXRNaW5fbG5nTWluXCIgKGZsb2F0cywgZXg6IFwiNDUuMTZfMC43NlwiKVxuICAgICAgICAgICAgY29uc3QgbGF0TWluID0gTnVtYmVyKCh4ICogQ0hVTktfU0laRSkudG9GaXhlZCg4KSk7XG4gICAgICAgICAgICBjb25zdCBsbmdNaW4gPSBOdW1iZXIoKHkgKiBDSFVOS19TSVpFKS50b0ZpeGVkKDgpKTtcbiAgICAgICAgICAgIGNodW5rcy5wdXNoKGAke2xhdE1pbn1fJHtsbmdNaW59YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNodW5rcztcbn1cbiIsImltcG9ydCBMIGZyb20gJy4uLy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcbmltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC5qcyc7XG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVidWcuanMnO1xuXG4vLyBDb3VjaGUgTGVhZmxldCBjb250ZW5hbnQgbGVzIHJvdXRlcyBwb3Nzw6lkw6llcyAocG9seWxpZ25lcyBibGV1ZXMpXG4vLyBWaXNpYmxlIHVuaXF1ZW1lbnQgcGFyIGxlcyBhZG1pbnNcbmV4cG9ydCBjb25zdCByb2Fkc0xheWVyID0gTC5sYXllckdyb3VwKCk7XG5cbi8vIFNldCBkZXMgSURzIGTDqWrDoCBkZXNzaW7DqXMgKHBvdXIgw6l2aXRlciBsZXMgZG91YmxvbnMpXG5jb25zdCBkcmF3blJvYWRJZHMgPSBuZXcgU2V0KCk7XG5cbi8qKlxuICogRGVzc2luZSBzdXIgbGEgY2FydGUgdG91dGVzIGxlcyByb3V0ZXMgcXVpIG5lIGxlIHNvbnQgcGFzIGVuY29yZS5cbiAqIEBwYXJhbSB7QXJyYXl9IHJvYWRzIC0gdGFibGVhdSBkZSB7IGlkLCBwb2ludHMsIHR5cGUgfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZHJhd093bmVkUm9hZHMocm9hZHMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZHMpIHx8IHJvYWRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XG4gICAgaWYgKCFtYXApIHJldHVybjtcblxuICAgIGxldCBhZGRlZCA9IDA7XG5cbiAgICBmb3IgKGNvbnN0IHJvYWQgb2Ygcm9hZHMpIHtcbiAgICAgICAgaWYgKCFyb2FkIHx8IGRyYXduUm9hZElkcy5oYXMocm9hZC5pZCkpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZC5wb2ludHMpIHx8IHJvYWQucG9pbnRzLmxlbmd0aCA8IDIpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIENvbnZlcnRpdCBsZXMgcG9pbnRzIFtsYXQsIGxuZ10gZW4gdGFibGVhdSBwb3VyIExlYWZsZXRcbiAgICAgICAgY29uc3QgbGF0bG5ncyA9IHJvYWQucG9pbnRzLm1hcChwdCA9PiBbcHRbMF0sIHB0WzFdXSk7XG5cbiAgICAgICAgLy8gQ291bGV1ciBzZWxvbiBsZSB0eXBlIGRlIHJvdXRlXG4gICAgICAgIGNvbnN0IGNvbG9yID0gZ2V0Um9hZENvbG9yKHJvYWQudHlwZSk7XG5cbiAgICAgICAgY29uc3QgcG9seWxpbmUgPSBMLnBvbHlsaW5lKGxhdGxuZ3MsIHtcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgd2VpZ2h0OiAzLFxuICAgICAgICAgICAgb3BhY2l0eTogMC44LFxuICAgICAgICB9KTtcblxuICAgICAgICBwb2x5bGluZS5hZGRUbyhyb2Fkc0xheWVyKTtcbiAgICAgICAgZHJhd25Sb2FkSWRzLmFkZChyb2FkLmlkKTtcbiAgICAgICAgYWRkZWQrKztcbiAgICB9XG5cbiAgICBpZiAoYWRkZWQgPiAwKSB7XG4gICAgICAgIGRlYnVnTG9nKFwicm9hZHNMYXllclwiLCBgJHthZGRlZH0gcm91dGVzIGRlc3NpbsOpZXMgKCR7ZHJhd25Sb2FkSWRzLnNpemV9IHRvdGFsKWApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBFZmZhY2UgdG91dGVzIGxlcyByb3V0ZXMgZGVzc2luw6llcyAocG91ciB1biByZWNoYXJnZW1lbnQgY29tcGxldCkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhck93bmVkUm9hZHMoKSB7XG4gICAgcm9hZHNMYXllci5jbGVhckxheWVycygpO1xuICAgIGRyYXduUm9hZElkcy5jbGVhcigpO1xuICAgIGRlYnVnTG9nKFwicm9hZHNMYXllclwiLCBcIlJvdXRlcyBlZmZhY8OpZXNcIik7XG59XG5cbi8qKlxuICogUmV0b3VybmUgbGEgY291bGV1ciBzZWxvbiBsZSB0eXBlIGRlIHJvdXRlIE9TTS5cbiAqL1xuZnVuY3Rpb24gZ2V0Um9hZENvbG9yKHR5cGUpIHtcbiAgICBjb25zdCBjb2xvcnMgPSB7XG4gICAgICAgIG1vdG9yd2F5OiAnI2U3NGMzYycsXG4gICAgICAgIHRydW5rOiAnI2U2N2UyMicsXG4gICAgICAgIHByaW1hcnk6ICcjZjFjNDBmJyxcbiAgICAgICAgc2Vjb25kYXJ5OiAnIzJlY2M3MScsXG4gICAgICAgIHRlcnRpYXJ5OiAnIzFhYmM5YycsXG4gICAgICAgIHJlc2lkZW50aWFsOiAnIzM0OThkYicsXG4gICAgICAgIHNlcnZpY2U6ICcjOWI1OWI2JyxcbiAgICAgICAgdW5jbGFzc2lmaWVkOiAnIzk1YTVhNicsXG4gICAgICAgIGZlcnJ5OiAnIzAwQ0VEMScsICAgICAgICAvLyBjeWFuIGZvbmPDqSBwb3VyIGxlcyBsaWduZXMgbWFyaXRpbWVzXG4gICAgfTtcbiAgICByZXR1cm4gY29sb3JzW3R5cGVdIHx8ICcjMjk4MGI5JzsgLy8gYmxldSBwYXIgZMOpZmF1dFxufVxuXG4vKipcbiAqIENvbXB0ZSBsZSBub21icmUgZGUgcm91dGVzIHBvc3PDqWTDqWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3duZWRSb2Fkc0NvdW50KCkge1xuICAgIHJldHVybiBkcmF3blJvYWRJZHMuc2l6ZTtcbn1cbiIsImV4cG9ydCBjb25zdCByb2Fkc1N0YXRlID0ge1xyXG4gICAgY2h1bmtzOiB7fSxcclxuICAgIGxvYWRlZENodW5rczogbmV3IFNldCgpLFxyXG4gICAgcm9hZHNSZWFkeTogZmFsc2UsXHJcbiAgICBkcmF3blJvYWRzOiBbXSxcclxuICAgIHZpc2libGVDaHVua3M6IG5ldyBTZXQoKSxcclxuICAgIFxyXG4gICAgcm9hZExheWVyczoge30sXHJcblxyXG4gICAgYnVpbGRpbmdMYXllcnM6IHt9XHJcbn07XHJcblxyXG5sZXQgY2FjaGVkUm9hZHMgPSBbXTtcclxubGV0IGNhY2hlRGlydHkgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtSb2FkQ2FjaGVEaXJ0eSgpIHtcclxuICAgIGNhY2hlRGlydHkgPSB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsTG9hZGVkUm9hZHMoKSB7XHJcblxyXG4gICAgaWYgKCFyb2Fkc1N0YXRlPy5jaHVua3MpIHJldHVybiBbXTtcclxuXHJcbiAgICBpZiAoIWNhY2hlRGlydHkpIHJldHVybiBjYWNoZWRSb2FkcztcclxuXHJcbiAgICBjYWNoZWRSb2FkcyA9IE9iamVjdC52YWx1ZXMocm9hZHNTdGF0ZS5jaHVua3MpXHJcbiAgICAgICAgLmZpbHRlcihjID0+IGM/LnN0YXR1cyA9PT0gJ2xvYWRlZCcgJiYgQXJyYXkuaXNBcnJheShjLnJvYWRzKSlcclxuICAgICAgICAuZmxhdE1hcChjID0+IGMucm9hZHMpO1xyXG5cclxuICAgIGNhY2hlRGlydHkgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gY2FjaGVkUm9hZHM7XHJcbn0iLCJpbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcbmltcG9ydCB7IGtub3duWm9uZXMsIGdldFpvbmVTdGF0cywgc3luY0tub3duWm9uZXMgfSBmcm9tICcuL3pvbmVTeW5jLmpzJztcbmltcG9ydCB7IGZseVRvIH0gZnJvbSAnLi4vbWFwLmpzJztcbmltcG9ydCB7IGFkZFJvYWRzQ2h1bmsgfSBmcm9tICcuLi8uLi91dGlscy9jaHVuay5qcyc7XG5cbmxldCBwYW5lbCA9IG51bGw7XG5sZXQgaXNQYW5lbE9wZW4gPSBmYWxzZTtcbmxldCB0b2dnbGVCdG4gPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFpvbmVEZWJ1Z1BhbmVsKCkge1xuICAgIC8vIEJvdXRvbiB0b2dnbGUgKHRvdWpvdXJzIHZpc2libGUpXG4gICAgdG9nZ2xlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9nZ2xlQnRuLmlkID0gJ3pvbmUtZGVidWctdG9nZ2xlJztcbiAgICB0b2dnbGVCdG4udGV4dENvbnRlbnQgPSAn8J+TjSBab25lcyc7XG4gICAgdG9nZ2xlQnRuLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgYmFja2dyb3VuZDogIzMzMztcbiAgICAgICAgY29sb3I6ICNlZWU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGA7XG4gICAgdG9nZ2xlQnRuLm9uY2xpY2sgPSB0b2dnbGVQYW5lbDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvZ2dsZUJ0bik7XG5cbiAgICAvLyBQYW5lbCAoY2FjaMOpIHBhciBkw6lmYXV0KVxuICAgIHBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFuZWwuaWQgPSAnem9uZS1kZWJ1Zy1wYW5lbCc7XG4gICAgcGFuZWwuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB3aWR0aDogMjgwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgICAgIGNvbG9yOiAjZWVlO1xuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBgO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFuZWwpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVQYW5lbCgpIHtcbiAgICBpc1BhbmVsT3BlbiA9ICFpc1BhbmVsT3BlbjtcbiAgICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gaXNQYW5lbE9wZW4gPyAnZmxleCcgOiAnbm9uZSc7XG4gICAgdG9nZ2xlQnRuLnN0eWxlLmJhY2tncm91bmQgPSBpc1BhbmVsT3BlbiA/ICcjNTU1JyA6ICcjMzMzJztcbiAgICBpZiAoaXNQYW5lbE9wZW4pIHJlZnJlc2hQYW5lbCgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZWZyZXNoUGFuZWwoKSB7XG4gICAgYXdhaXQgc3luY0tub3duWm9uZXMoKTtcbiAgICByZW5kZXJQYW5lbCgpO1xuICAgIGRlYnVnTG9nKFwiem9uZXNcIiwgYCR7Z2V0Wm9uZVN0YXRzKCkudG90YWx9IHpvbmVzIGVuIGJhc2VgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGFuZWwoKSB7XG4gICAgaWYgKCFwYW5lbCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc3RhdHMgPSBnZXRab25lU3RhdHMoKTtcbiAgICBjb25zdCB6b25lcyA9IHN0YXRzLnpvbmVzO1xuICAgIGNvbnN0IHdpdGhSb2FkcyA9IHpvbmVzLmZpbHRlcih6ID0+IHoudXBkYXRlZEF0KS5sZW5ndGg7XG4gICAgY29uc3Qgd2l0aG91dCA9IHpvbmVzLmxlbmd0aCAtIHdpdGhSb2FkcztcblxuICAgIHBhbmVsLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDZweCA4cHg7IGJhY2tncm91bmQ6ICMyMjI7IGZvbnQtd2VpZ2h0OiBib2xkOyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG4gICAgICAgICAgICA8c3Bhbj7wn5ONIFpvbmVzIGVuIGJhc2U8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGdhcDogOHB4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6ICM4Zjg7IGZvbnQtc2l6ZTogMTBweDtcIj4ke3pvbmVzLmxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInpvbmUtcmVmcmVzaC1idG5cIiBzdHlsZT1cImJhY2tncm91bmQ6ICM0NDQ7IGJvcmRlcjogMXB4IHNvbGlkICM2NjY7IGNvbG9yOiAjZWVlOyBib3JkZXItcmFkaXVzOiAzcHg7IHBhZGRpbmc6IDJweCA2cHg7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1zaXplOiAxMHB4O1wiPvCflIQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nOiA0cHggOHB4OyBiYWNrZ3JvdW5kOiAjMWExYTFhOyBjb2xvcjogI2FhYTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7IGZvbnQtc2l6ZTogMTBweDtcIj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6ICM2YWZcIj7il48gJHt3aXRoUm9hZHN9IGfDqW7DqXLDqWVzPC9zcGFuPlxuICAgICAgICAgICAgJm5ic3A7fCZuYnNwO1xuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogIzg4OFwiPuKXjyAke3dpdGhvdXR9IHZpZGVzPC9zcGFuPlxuICAgICAgICAgICAgJm5ic3A7fCZuYnNwO1xuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogI2U0NFwiPuKXjyByb3VnZSA9IMOgIGfDqW7DqXJlcjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJ6b25lLWxpc3RcIiBzdHlsZT1cIm92ZXJmbG93LXk6IGF1dG87IG1heC1oZWlnaHQ6IDIyMHB4OyBwYWRkaW5nOiAycHg7XCI+XG4gICAgICAgICAgICAke3pvbmVzLmxlbmd0aCA9PT0gMCA/ICc8ZGl2IHN0eWxlPVwicGFkZGluZzogOHB4OyBjb2xvcjogIzY2NjsgdGV4dC1hbGlnbjogY2VudGVyO1wiPkF1Y3VuZSB6b25lIGVuIGJhc2U8L2Rpdj4nIDogJyd9XG4gICAgICAgICAgICAke3pvbmVzLm1hcCh6b25lID0+IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiem9uZS1yb3dcIiBkYXRhLWlkPVwiJHt6b25lLmlkfVwiXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT1cInBhZGRpbmc6IDNweCA4cHg7IGN1cnNvcjogcG9pbnRlcjsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyYTJhMmE7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZm9udC1zaXplOiAxMHB4O1wiXG4gICAgICAgICAgICAgICAgICAgICBvbm1vdXNlb3Zlcj1cInRoaXMuc3R5bGUuYmFja2dyb3VuZD0nIzMzMydcIlxuICAgICAgICAgICAgICAgICAgICAgb25tb3VzZW91dD1cInRoaXMuc3R5bGUuYmFja2dyb3VuZD0ndHJhbnNwYXJlbnQnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPiR7em9uZS5sYXRNaW59LCR7em9uZS5sbmdNaW59PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiAke3pvbmUudXBkYXRlZEF0ID8gJyM2ZjYnIDogJyM4ODgnfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt6b25lLnVwZGF0ZWRBdCA/ICfinJMnIDogJ8K3J31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYCkuam9pbignJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogNHB4IDhweDsgYmFja2dyb3VuZDogIzFhMWExYTsgY29sb3I6ICM2NjY7IGZvbnQtc2l6ZTogOXB4OyBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMztcIj5cbiAgICAgICAgICAgIGNsaWMgPSBuYXZpZ3VlciDCtyBkb3VibGUtY2xpYyA9IGfDqW7DqXJlclxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29uc3QgcmVmcmVzaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6b25lLXJlZnJlc2gtYnRuJyk7XG4gICAgaWYgKHJlZnJlc2hCdG4pIHJlZnJlc2hCdG4ub25jbGljayA9IChlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IHJlZnJlc2hQYW5lbCgpOyB9O1xuXG4gICAgcGFuZWwucXVlcnlTZWxlY3RvckFsbCgnLnpvbmUtcm93JykuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICByb3cub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQocm93LmRhdGFzZXQuaWQpO1xuICAgICAgICAgICAgY29uc3Qgem9uZSA9IHpvbmVzLmZpbmQoeiA9PiB6LmlkID09PSBpZCk7XG4gICAgICAgICAgICBpZiAoem9uZSkge1xuICAgICAgICAgICAgICAgIC8vIENsaWMgc2ltcGxlIDogZmx5IHZlcnMgbGUgY29pbiBzdXDDqXJpZXVyIGdhdWNoZSBkZSBsYSB6b25lXG4gICAgICAgICAgICAgICAgY29uc3QgbGF0ID0gTnVtYmVyKHpvbmUubGF0TWluKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsbmcgPSBOdW1iZXIoem9uZS5sbmdNaW4pO1xuICAgICAgICAgICAgICAgIGZseVRvKGxhdCArIDAuMDA1LCBsbmcgKyAwLjAwNSwgMTYpO1xuICAgICAgICAgICAgICAgIGRlYnVnTG9nKFwiem9uZXNcIiwgYGZseVRvIHpvbmUgJHt6b25lLmxhdE1pbn0sJHt6b25lLmxuZ01pbn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByb3cub25kYmxjbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQocm93LmRhdGFzZXQuaWQpO1xuICAgICAgICAgICAgY29uc3Qgem9uZSA9IHpvbmVzLmZpbmQoeiA9PiB6LmlkID09PSBpZCk7XG4gICAgICAgICAgICBpZiAoem9uZSkge1xuICAgICAgICAgICAgICAgIC8vIERvdWJsZS1jbGljIDogcmVsYW5jZXIgbGEgZ8OpbsOpcmF0aW9uIHBvdXIgY2V0dGUgem9uZVxuICAgICAgICAgICAgICAgIGNvbnN0IGxhdCA9IE51bWJlcih6b25lLmxhdE1pbikgKyAwLjAwNTtcbiAgICAgICAgICAgICAgICBjb25zdCBsbmcgPSBOdW1iZXIoem9uZS5sbmdNaW4pICsgMC4wMDU7XG4gICAgICAgICAgICAgICAgZGVidWdMb2coXCJ6b25lc1wiLCBgUsOpZ8OpbsOpcmF0aW9uIHpvbmUgJHt6b25lLmxhdE1pbn0sJHt6b25lLmxuZ01pbn1gKTtcbiAgICAgICAgICAgICAgICBhZGRSb2Fkc0NodW5rKGxhdCwgbG5nLCAyMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyByZWZyZXNoUGFuZWwgfTtcbiIsImltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVidWcuanMnO1xuXG4vLyBTZXQgZGVzIGJib3hLZXlzIGRlcyB6b25lcyBjb25udWVzIGVuIGJhc2UgKGNoYXJnw6kgYXUgZMOpbWFycmFnZSkuXG5leHBvcnQgY29uc3Qga25vd25CYm94S2V5cyA9IG5ldyBTZXQoKTtcblxuLy8gRMOpdGFpbHMgZGVzIHpvbmVzIChwb3VyIGxlIHBhbm5lYXUgZGUgZGVidWcpLlxuZXhwb3J0IGNvbnN0IGtub3duWm9uZXMgPSBbXTtcblxuLyoqXG4gKiBDaGFyZ2UgbGEgbGlzdGUgZGVzIHpvbmVzIGRlcHVpcyBsJ0FQSSBldCBtZXQgw6Agam91ciBrbm93bkJib3hLZXlzLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3luY0tub3duWm9uZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS96b25lcy9zdGF0dXMnKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGtub3duQmJveEtleXMuY2xlYXIoKTtcbiAgICAgICAgaWYgKGRhdGEuYmJveEtleXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGRhdGEuYmJveEtleXMpIHtcbiAgICAgICAgICAgICAgICBrbm93bkJib3hLZXlzLmFkZChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWV0IMOgIGpvdXIga25vd25ab25lcyAocG91ciBsZSBwYW5uZWF1KVxuICAgICAgICBrbm93blpvbmVzLmxlbmd0aCA9IDA7XG4gICAgICAgIGlmIChkYXRhLnpvbmVzKSB7XG4gICAgICAgICAgICBrbm93blpvbmVzLnB1c2goLi4uZGF0YS56b25lcyk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWJ1Z0xvZyhcInpvbmVzXCIsIGAke2tub3duQmJveEtleXMuc2l6ZX0gem9uZXMgY29ubnVlcyBlbiBiYXNlYCk7XG4gICAgICAgIHJldHVybiBrbm93bkJib3hLZXlzLnNpemU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBkZWJ1Z0Vycm9yKFwiem9uZXNcIiwgXCJFcnJldXIgc3luYyB6b25lczpcIiwgZSk7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBam91dGUgdW5lIGJib3hLZXkgbG9jYWxlIChhcHLDqHMgdW5lIGfDqW7DqXJhdGlvbiByw6l1c3NpZSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRLbm93bkJib3hLZXkoYmJveEtleSkge1xuICAgIGtub3duQmJveEtleXMuYWRkKGJib3hLZXkpO1xufVxuXG4vKipcbiAqIFJldG91cm5lIGRlcyBzdGF0cyBzdXIgbGVzIHpvbmVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Wm9uZVN0YXRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvdGFsOiBrbm93bkJib3hLZXlzLnNpemUsXG4gICAgICAgIHpvbmVzOiBrbm93blpvbmVzLFxuICAgIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaW5pdE5vdGlmaWNhdGlvbnMoKVxyXG57XHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YWZ0ZXJTd2FwJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1ldmVudF0nKTtcclxuICAgICAgICBldmVudHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IEpTT04ucGFyc2UoZWwuZGF0YXNldC5ldmVudCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnZ2FtZTpldmVudCcsIHsgZGV0YWlsOiBldmVudCB9KSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIHBhcnNpbmcgZXZlbnQ6JywgZXJyKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIGVsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSwgdHlwZSA9ICdpbmZvJykge1xyXG5cclxuICAgIGNvbnN0IG5vdGlmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBub3RpZi5jbGFzc05hbWUgPSBgbm90aWYgbm90aWYtJHt0eXBlfWA7XHJcbiAgICBub3RpZi50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub3RpZik7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbm90aWYucmVtb3ZlKCk7XHJcbiAgICB9LCAzMDAwKTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uIH0gZnJvbSAnLi4vYnVpbGRpbmdzL2Jhc2UuanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU1RBVEVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgYmFzZUNpcmNsZXMgPSBuZXcgTWFwKCk7IC8vIGJhc2VJZCAtPiBjaXJjbGUgbGF5ZXJcclxuY29uc3Qgcm9hZFNlZ21lbnRzID0gbmV3IE1hcCgpOyAvLyByb2FkSWQgLT4gcG9seWxpbmUgbGF5ZXJcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZBQ1RJT04gQ09MT1JTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IEZBQ1RJT05fQ09MT1JTID0ge1xyXG4gICAgJ2RlZmF1bHQnOiAnIzI3YWU2MCcsICAvLyB2ZXJ0IHBhciBkw6lmYXV0XHJcbiAgICAnZW1waXJlJzogJyNlNzRjM2MnLCAgIC8vIHJvdWdlXHJcbiAgICAnY2VuZHJlcyc6ICcjMzQ5OGRiJywgICAgLy8gYmxldVxyXG4gICAgJ25vbWFkZXMnOiAnI2YzOWMxMicsICAvLyBvcmFuZ2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldEZhY3Rpb25Db2xvcihmYWN0aW9uKSB7XHJcbiAgICByZXR1cm4gRkFDVElPTl9DT0xPUlNbZmFjdGlvbj8udG9Mb3dlckNhc2UoKV0gfHwgRkFDVElPTl9DT0xPUlNbJ2RlZmF1bHQnXTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQkFTRSBDSVJDTEVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdCYXNlQ2lyY2xlKGJhc2VJZCwgbGF0LCBsbmcsIGZhY3Rpb24sIGlzUGxheWVyQmFzZSA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcGxheWVyRmFjdGlvbiA9IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XHJcbiAgICBjb25zdCBjb2xvciA9IGlzUGxheWVyQmFzZVxyXG4gICAgICAgID8gJyMyN2FlNjAnICAvLyB2ZXJ0IHBvdXIgbm90cmUgYmFzZVxyXG4gICAgICAgIDogZ2V0RmFjdGlvbkNvbG9yKGZhY3Rpb24pO1xyXG5cclxuICAgIC8vIFN1cHByaW1lciBsJ2FuY2llbiBjZXJjbGUgc2kgZXhpc3RlXHJcbiAgICBpZiAoYmFzZUNpcmNsZXMuaGFzKGJhc2VJZCkpIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIoYmFzZUNpcmNsZXMuZ2V0KGJhc2VJZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNpcmNsZSA9IEwuY2lyY2xlKFtsYXQsIGxuZ10sIHtcclxuICAgICAgICByYWRpdXM6IDUwMCxcclxuICAgICAgICBjb2xvcjogY29sb3IsXHJcbiAgICAgICAgd2VpZ2h0OiAyLFxyXG4gICAgICAgIGZpbGxPcGFjaXR5OiAwXHJcbiAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgIGJhc2VDaXJjbGVzLnNldChiYXNlSWQsIGNpcmNsZSk7XHJcbiAgICByZXR1cm4gY2lyY2xlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQmFzZUNpcmNsZShiYXNlSWQpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBpZiAoYmFzZUNpcmNsZXMuaGFzKGJhc2VJZCkpIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIoYmFzZUNpcmNsZXMuZ2V0KGJhc2VJZCkpO1xyXG4gICAgICAgIGJhc2VDaXJjbGVzLmRlbGV0ZShiYXNlSWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJBbGxCYXNlQ2lyY2xlcygpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBiYXNlQ2lyY2xlcy5mb3JFYWNoKGNpcmNsZSA9PiBtYXAucmVtb3ZlTGF5ZXIoY2lyY2xlKSk7XHJcbiAgICBiYXNlQ2lyY2xlcy5jbGVhcigpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBST0FEIFNFR01FTlRTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3Um9hZFNlZ21lbnQocm9hZElkLCBjb29yZHMsIGZhY3Rpb24pIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXAgfHwgIWNvb3JkcyB8fCBjb29yZHMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckZhY3Rpb24gPSBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xyXG4gICAgY29uc3QgY29sb3IgPSBmYWN0aW9uID09PSBwbGF5ZXJGYWN0aW9uXHJcbiAgICAgICAgPyAnIzI3YWU2MCcgIC8vIHZlcnQgcG91ciBub3Mgcm91dGVzXHJcbiAgICAgICAgOiBnZXRGYWN0aW9uQ29sb3IoZmFjdGlvbik7XHJcblxyXG4gICAgLy8gU3VwcHJpbWVyIGwnYW5jaWVuIHNlZ21lbnQgc2kgZXhpc3RlXHJcbiAgICBpZiAocm9hZFNlZ21lbnRzLmhhcyhyb2FkSWQpKSB7XHJcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKHJvYWRTZWdtZW50cy5nZXQocm9hZElkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9seWxpbmUgPSBMLnBvbHlsaW5lKGNvb3Jkcywge1xyXG4gICAgICAgIGNvbG9yOiBjb2xvcixcclxuICAgICAgICB3ZWlnaHQ6IDMsXHJcbiAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgIGRhc2hBcnJheTogJzgsOCdcclxuICAgIH0pLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgcm9hZFNlZ21lbnRzLnNldChyb2FkSWQsIHBvbHlsaW5lKTtcclxuICAgIHJldHVybiBwb2x5bGluZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJvYWRTZWdtZW50KHJvYWRJZCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChyb2FkU2VnbWVudHMuaGFzKHJvYWRJZCkpIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIocm9hZFNlZ21lbnRzLmdldChyb2FkSWQpKTtcclxuICAgICAgICByb2FkU2VnbWVudHMuZGVsZXRlKHJvYWRJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFsbFJvYWRTZWdtZW50cygpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICByb2FkU2VnbWVudHMuZm9yRWFjaChwb2x5bGluZSA9PiBtYXAucmVtb3ZlTGF5ZXIocG9seWxpbmUpKTtcclxuICAgIHJvYWRTZWdtZW50cy5jbGVhcigpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVUERBVEUgRlVOQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVCYXNlQ2lyY2xlcyhiYXNlcykge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckZhY3Rpb24gPSBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xyXG5cclxuICAgIGJhc2VzLmZvckVhY2goYmFzZSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNQbGF5ZXJCYXNlID0gYmFzZS5mYWN0aW9uID09PSBwbGF5ZXJGYWN0aW9uO1xyXG4gICAgICAgIGRyYXdCYXNlQ2lyY2xlKGJhc2UuaWQsIGJhc2UubGF0LCBiYXNlLmxuZywgYmFzZS5mYWN0aW9uLCBpc1BsYXllckJhc2UpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSb2FkU2VnbWVudHMocm9hZHMpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJGYWN0aW9uID0gZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKTtcclxuXHJcbiAgICByb2Fkcy5mb3JFYWNoKHJvYWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzUGxheWVyUm9hZCA9IHJvYWQuZmFjdGlvbiA9PT0gcGxheWVyRmFjdGlvbjtcclxuICAgICAgICBkcmF3Um9hZFNlZ21lbnQocm9hZC5pZCwgcm9hZC5jb29yZHMsIHJvYWQuZmFjdGlvbik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVVRJTElUWVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Um9hZFNlZ21lbnRDb2xvcihyb2FkSWQsIGNvbG9yKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHJvYWRTZWdtZW50cy5oYXMocm9hZElkKSkge1xyXG4gICAgICAgIHJvYWRTZWdtZW50cy5nZXQocm9hZElkKS5zZXRTdHlsZSh7IGNvbG9yIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4uL25vdGlmaWNhdGlvbnMuanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUEFUSEZJTkRJTkcgREVCVUcgLSBDTElDSyBUTyBHRVQgQ09PUkRJTkFURVNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkbWluQ29vcmRzKGxhdCwgbG5nKSB7XHJcbiAgICBpZiAobGF0ID09PSB1bmRlZmluZWQgfHwgbG5nID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBmb3JtYXQgPSBgJHtsYXQudG9GaXhlZCg2KX0sJHtsbmcudG9GaXhlZCg2KX1gO1xyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZm9ybWF0KTtcclxuICAgIHNob3dOb3RpZmljYXRpb24oXCJGb3JtYXQgY29sbGFibGUgYWRtaW4gY29wacOpIDogXCIgKyBmb3JtYXQsICdzdWNjZXNzJyk7XHJcbn0iLCJpbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcbmltcG9ydCB7IHJlZnJlc2hDaHVuayB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2Fkcy5qcyc7XG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdFcnJvciwgZGVidWdXYXJuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xuaW1wb3J0IHsgc25hcFRvQ2h1bmsgfSBmcm9tICcuL3NuYXAuanMnO1xuXG5leHBvcnQgY29uc3QgQ0hVTktfU0laRSA9IDAuMDE7XG5leHBvcnQgY29uc3QgQ0hVTktfUkFESVVTID0gMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1JPQURfUkFESVVTID0gMjAwO1xuXG5sZXQgaXNQZW5kaW5nID0gZmFsc2U7XG5cbi8qKlxuICogQWpvdXRlIGRlcyByb3V0ZXMgcGFyIGNsaWMgc3VyIGxhIGNhcnRlLlxuICogU2kgZGVzIHJvdXRlcyBleGlzdGVudCBkw6lqw6AgZGFucyBsYSB6b25lLCBuZSBmYWl0IHJpZW4uXG4gKiBTaW5vbiwgcsOpY3Vww6hyZSBsZXMgcm91dGVzIGRlcHVpcyBPdmVycGFzcyBldCBsZXMgY3LDqWUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRSb2Fkc0NodW5rKGxhdCwgbG5nLCByYWRpdXMgPSBERUZBVUxUX1JPQURfUkFESVVTKSB7XG4gICAgaWYgKGlzUGVuZGluZykge1xuICAgICAgICBkZWJ1Z1dhcm4oXCJjaHVua3NcIiwgXCJHZW5lcmF0aW9uIGFscmVhZHkgaW4gcHJvZ3Jlc3MsIGlnbm9yaW5nIGNsaWNrXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcbiAgICBpZiAobWFwKSBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ3dhaXQnO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9hZGQtcm9hZHMtY2h1bmsnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBsYXQsIGxuZywgcmFkaXVzIH0pLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFQSSBlcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIC8vIEZlZWRiYWNrIHZpc3VlbFxuICAgICAgICBzaG93R2VuZXJhdGlvbkZlZWRiYWNrKGRhdGEpO1xuXG4gICAgICAgIC8vIFJlZnJlc2ggdG91cyBsZXMgY2h1bmtzIGFmZmVjdMOpc1xuICAgICAgICBjb25zdCBjaHVua0lkcyA9IGNvbXB1dGVBZmZlY3RlZENodW5rSWRzKGxhdCwgbG5nLCBkYXRhKTtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoY2h1bmtJZHMubWFwKGlkID0+IHJlZnJlc2hDaHVuayhpZCkpKTtcblxuICAgICAgICBkZWJ1Z0xvZyhcImNodW5rc1wiLCBgUm9hZHM6ICR7ZGF0YS5yb2Fkc19jcmVhdGVkfSBjcmVhdGVkLCBhbHJlYWR5X3BvcHVsYXRlZD0ke2RhdGEuYWxyZWFkeV9wb3B1bGF0ZWR9YCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBkZWJ1Z0Vycm9yKFwiY2h1bmtzXCIsIFwiRmFpbGVkIHRvIGFkZCByb2FkcyBjaHVuazpcIiwgZXJyKTtcbiAgICAgICAgc2hvd1RvYXN0KFwiRXJyZXVyOiBcIiArIGVyci5tZXNzYWdlLCBcImVycm9yXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBpc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKG1hcCkgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxlIGxhIGxpc3RlIGRlcyBjaHVua0lkcyDDoCByYWZyYcOuY2hpciBhcHLDqHMgdW5lIGfDqW7DqXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gY29tcHV0ZUFmZmVjdGVkQ2h1bmtJZHMobGF0LCBsbmcsIGRhdGEpIHtcbiAgICBjb25zdCBpZHMgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyBDaHVuayBkdSBjbGljXG4gICAgY29uc3QgY2xpY2tTbmFwID0gc25hcFRvQ2h1bmsobGF0LCBsbmcpO1xuICAgIGlkcy5hZGQoY2xpY2tTbmFwLmJib3hLZXkpO1xuXG4gICAgLy8gQ2h1bmtzIGRlcyByb3V0ZXMgcmV0b3VybsOpZXNcbiAgICBpZiAoZGF0YS5yb2FkcyAmJiBBcnJheS5pc0FycmF5KGRhdGEucm9hZHMpKSB7XG4gICAgICAgIGZvciAoY29uc3Qgcm9hZCBvZiBkYXRhLnJvYWRzKSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZC5wb2ludHMpKSBjb250aW51ZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3B0TGF0LCBwdExuZ10gb2Ygcm9hZC5wb2ludHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbmFwID0gc25hcFRvQ2h1bmsocHRMYXQsIHB0TG5nKTtcbiAgICAgICAgICAgICAgICBpZHMuYWRkKHNuYXAuYmJveEtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gWy4uLmlkc107XG59XG5cbi8qKlxuICogQWZmaWNoZSB1biBmZWVkYmFjayB2aXN1ZWwgc2Vsb24gbGUgcsOpc3VsdGF0IGRlIGxhIGfDqW7DqXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2hvd0dlbmVyYXRpb25GZWVkYmFjayhkYXRhKSB7XG4gICAgaWYgKGRhdGEucm9hZHNfY3JlYXRlZCA+IDApIHtcbiAgICAgICAgc2hvd1RvYXN0KGAke2RhdGEucm9hZHNfY3JlYXRlZH0gcm91dGUocykgYWpvdXTDqWUocylgLCBcInN1Y2Nlc3NcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd1RvYXN0KFwiVG91dGVzIGxlcyByb3V0ZXMgc29udCBkw6lqw6AgcHLDqXNlbnRlc1wiLCBcImluZm9cIik7XG4gICAgfVxufVxuXG4vKipcbiAqIEFmZmljaGUgdW4gdG9hc3QgZCdpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dUb2FzdChtZXNzYWdlLCB0eXBlID0gXCJpbmZvXCIpIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgndG9hc3QnLCB7IGRldGFpbDogeyBtZXNzYWdlLCB0eXBlIH0gfSk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgZGVidWdMb2coXCJ0b2FzdFwiLCBgWyR7dHlwZX1dICR7bWVzc2FnZX1gKTtcbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcXVlc3RBcGlSb2Fkc0FuZENodW5rc0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XG5cbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7XG4gICAgc2hvd1RvYXN0KFwiQ2xpcXVleiBzdXIgbGEgY2FydGUgcG91ciBham91dGVyIGxlcyByb3V0ZXNcIiwgXCJpbmZvXCIpO1xuXG4gICAgbWFwLm9uY2UoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcblxuICAgICAgICBjb25zdCB7IGxhdCwgbG5nIH0gPSBlLmxhdGxuZztcblxuICAgICAgICBkZWJ1Z0xvZyhcIm5ldHdvcmtcIiwgXCLwn5OhIGFkZGluZyByb2FkcyBjaHVuayBhdDpcIiwgbGF0LCBsbmcpO1xuXG4gICAgICAgIGF3YWl0IGFkZFJvYWRzQ2h1bmsobGF0LCBsbmcsIERFRkFVTFRfUk9BRF9SQURJVVMpO1xuXG4gICAgICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnJztcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgZmx5VG8gfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R1BTKGRlZmF1bHRMYXQsIGRlZmF1bHRMbmcpIHtcclxuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgICAgICBsZXQgZ3BzRm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oXHJcbiAgICAgICAgICAgIChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ3BzRm91bmQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGZseVRvKFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGltZW91dDogNTAwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZ3BzRm91bmQpIHtcclxuICAgICAgICAgICAgICAgIGZseVRvKGRlZmF1bHRMYXQsIGRlZmF1bHRMbmcsIDcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTUwMCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDSFVOS19TSVpFIH0gZnJvbSAnLi9jaHVuay5qcyc7XG5cbi8qKlxuICogUmV0b3VybmUgbGEgYm91bmRpbmcgYm94IChncmlsbGUgQ0hVTktfU0laRSDDlyBDSFVOS19TSVpFKSBwb3VyIHVuIHBvaW50IEdQUy5cbiAqXG4gKiBVdGlsaXNlIE1hdGguZmxvb3IobGF0IC8gQ0hVTktfU0laRSkg4oCUIGxhIG3Dqm1lIGZvcm11bGUgcXVlIGxlIGJhY2tlbmRcbiAqIChDb29yZGluYXRlU2VydmljZTo6Z2V0Qm91bmRpbmdCb3gpLCBwb3VyIGdhcmFudGlyIGxhIGNvaMOpcmVuY2UgZnJvbnQvYmFjay5cbiAqXG4gKiBAcmV0dXJucyB7eyBsYXRNaW46IG51bWJlciwgbG5nTWluOiBudW1iZXIsIGxhdE1heDogbnVtYmVyLCBsbmdNYXg6IG51bWJlciwgYmJveEtleTogc3RyaW5nIH19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbmFwVG9DaHVuayhsYXQsIGxuZykge1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGxhdCAvIENIVU5LX1NJWkUpO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGxuZyAvIENIVU5LX1NJWkUpO1xuXG4gICAgY29uc3QgbGF0TWluID0gTnVtYmVyKCh4ICogQ0hVTktfU0laRSkudG9GaXhlZCg4KSk7XG4gICAgY29uc3QgbG5nTWluID0gTnVtYmVyKCh5ICogQ0hVTktfU0laRSkudG9GaXhlZCg4KSk7XG4gICAgY29uc3QgbGF0TWF4ID0gTnVtYmVyKCgoeCArIDEpICogQ0hVTktfU0laRSkudG9GaXhlZCg4KSk7XG4gICAgY29uc3QgbG5nTWF4ID0gTnVtYmVyKCgoeSArIDEpICogQ0hVTktfU0laRSkudG9GaXhlZCg4KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsYXRNaW4sXG4gICAgICAgIGxuZ01pbixcbiAgICAgICAgbGF0TWF4LFxuICAgICAgICBsbmdNYXgsXG4gICAgICAgIGJib3hLZXk6IGAke2xhdE1pbn1fJHtsbmdNaW59YCxcbiAgICB9O1xufVxuIiwibGV0IHRpbWVySW50ZXJ2YWwgPSBudWxsO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCdWlsZGluZ1RpbWVycygpIHtcclxuXHJcbiAgICBpZiAodGltZXJJbnRlcnZhbCkgcmV0dXJuOyAvLyDDqXZpdGUgZG91YmxvbnNcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVUaW1lcnMoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGl2ZXJ5LXRpbWVyLXdyYXBwZXInKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2NoZWR1bGVkQXQgPSBlbC5kYXRhc2V0LnNjaGVkdWxlZEF0O1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lckVsID0gZWwucXVlcnlTZWxlY3RvcignLmRlbGl2ZXJ5LXRpbWVyJyk7XHJcbiAgICAgICAgICAgIGlmICghdGltZXJFbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFzY2hlZHVsZWRBdCkge1xyXG4gICAgICAgICAgICAgICAgdGltZXJFbC50ZXh0Q29udGVudCA9ICdBdWN1bmUgbGl2cmFpc29uIHByw6l2dWUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25zdCBzY2hlZHVsZWQgPSBuZXcgRGF0ZShzY2hlZHVsZWRBdCkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzTmFOKHNjaGVkdWxlZCkpIHtcclxuICAgICAgICAgICAgICAgIHRpbWVyRWwudGV4dENvbnRlbnQgPSAnRGF0ZSBpbnZhbGlkZSc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmZTZWMgPSBNYXRoLmZsb29yKChzY2hlZHVsZWQgLSBub3cpIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlmZlNlYyA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnMgPSBNYXRoLmZsb29yKGRpZmZTZWMgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNzID0gZGlmZlNlYyAlIDYwO1xyXG4gICAgICAgICAgICAgICAgdGltZXJFbC5pbm5lckhUTUwgPSBgUHJvY2hhaW4gZMOpcGFydCBkYW5zIDogPHN0cm9uZz4ke21pbnN9bWluICR7c2Vjc31zPC9zdHJvbmc+YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBNYXRoLmFicyhkaWZmU2VjKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnMgPSBNYXRoLmZsb29yKGVsYXBzZWQgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNzID0gZWxhcHNlZCAlIDYwO1xyXG4gICAgICAgICAgICAgICAgdGltZXJFbC5pbm5lckhUTUwgPSBgQ29udm9pIGVuIHJvdXRlIGRlcHVpcyA6IDxzdHJvbmc+JHttaW5zfW1pbiAke3NlY3N9czwvc3Ryb25nPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUaW1lcnMoKTtcclxuICAgIHRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lcnMsIDEwMDApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShpc29TdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShpc29TdHJpbmcpLnRvTG9jYWxlU3RyaW5nKCdmci1GUicsIHtcclxuICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9QYXJpcycsXHJcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICdsZWFmbGV0JztcclxuaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnO1xyXG5cclxuZGVsZXRlIEwuSWNvbi5EZWZhdWx0LnByb3RvdHlwZS5fZ2V0SWNvblVybDtcclxuTC5JY29uLkRlZmF1bHQubWVyZ2VPcHRpb25zKHtcclxuICAgIGljb25SZXRpbmFVcmw6IHJlcXVpcmUoJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24tMngucG5nJyksXHJcbiAgICBpY29uVXJsOiByZXF1aXJlKCdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1pY29uLnBuZycpLFxyXG4gICAgc2hhZG93VXJsOiByZXF1aXJlKCdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1zaGFkb3cucG5nJyksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTDsiLCJpbXBvcnQgeyBUWVBFX01BUCB9IGZyb20gJy4vdHlwZU1hcC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgREVCVUcgPSB7XHJcbiAgICBlbmFibGVkOiB3aW5kb3cuQVBQX0RFQlVHID8/IGZhbHNlLFxyXG5cclxuICAgIG1lcmN1cmU6IHRydWUsXHJcbiAgICBpbnZlbnRvcnk6IHRydWUsXHJcbiAgICBkZWxpdmVyeTogdHJ1ZSxcclxuICAgIGJ1aWxkaW5nczogdHJ1ZSxcclxuXHJcbiAgICBjaHVua3M6IHRydWUsXHJcbiAgICBuZXR3b3JrOiB0cnVlLFxyXG4gICAgY2FjaGU6IHRydWUsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjYW5Mb2codHlwZSkge1xyXG4gICAgaWYgKCFERUJVRy5lbmFibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleSA9IFRZUEVfTUFQPy5bdHlwZV0gfHwgdHlwZTtcclxuXHJcbiAgICByZXR1cm4gREVCVUdba2V5XSAhPT0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z0xvZyh0eXBlLCAuLi5hcmdzKSB7XHJcbiAgICBpZiAoIWNhbkxvZyh0eXBlKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgWyR7VFlQRV9NQVA/Llt0eXBlXSB8fCB0eXBlfV1gLFxyXG4gICAgICAgIC4uLmFyZ3NcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z1dhcm4odHlwZSwgLi4uYXJncykge1xyXG4gICAgaWYgKCFjYW5Mb2codHlwZSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGBbJHtUWVBFX01BUD8uW3R5cGVdIHx8IHR5cGV9XWAsXHJcbiAgICAgICAgLi4uYXJnc1xyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnRXJyb3IodHlwZSwgLi4uYXJncykge1xyXG4gICAgaWYgKCFjYW5Mb2codHlwZSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICBgWyR7VFlQRV9NQVA/Llt0eXBlXSB8fCB0eXBlfV1gLFxyXG4gICAgICAgIC4uLmFyZ3NcclxuICAgICk7XHJcbn0iLCJleHBvcnQgY29uc3QgVFlQRV9NQVAgPSB7XHJcbiAgICBtZXJjdXJlOiAnTUVSQ1VSRScsXHJcbiAgICBpbnZlbnRvcnk6ICdJTlZFTlRPUlknLFxyXG4gICAgZGVsaXZlcnk6ICdERUxJVkVSWScsXHJcbiAgICBidWlsZGluZ3M6ICdCVUlMRElOR1MnLFxyXG4gICAgY2h1bmtzOiAnQ0hVTktTJyxcclxuICAgIG5ldHdvcms6ICdORVRXT1JLJyxcclxuICAgIGNhY2hlOiAnQ0FDSEUnLFxyXG59OyJdLCJuYW1lcyI6WyJMIiwiZGVidWdMb2ciLCJDSFVOS19TSVpFIiwiZ2V0TWFwIiwiaXNHcmlkTGF5ZXJBY3RpdmUiLCJyb2Fkc1N0YXRlIiwia25vd25CYm94S2V5cyIsImdyaWRMYXllciIsImxheWVyR3JvdXAiLCJ2aXNpYmxlQ2h1bmtzIiwiTWFwIiwiaW5pdEdyaWRMYXllciIsIm1hcCIsInpvb20iLCJnZXRab29tIiwiYm91bmRzIiwiZ2V0Qm91bmRzIiwibWluTGF0IiwiTWF0aCIsImZsb29yIiwiZ2V0U291dGgiLCJtYXhMYXQiLCJjZWlsIiwiZ2V0Tm9ydGgiLCJtaW5MbmciLCJnZXRXZXN0IiwibWF4TG5nIiwiZ2V0RWFzdCIsIm5ld1Zpc2libGUiLCJTZXQiLCJpIiwiX2xvb3AiLCJpZCIsImNvbmNhdCIsImoiLCJhZGQiLCJoYXMiLCJsYXQiLCJsbmciLCJyZWN0IiwicmVjdGFuZ2xlIiwiY29sb3IiLCJ3ZWlnaHQiLCJmaWxsT3BhY2l0eSIsIm9uIiwic2V0U3R5bGUiLCJhZGRMYXllciIsInNldCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiZW50cmllcyIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiX3N0ZXAkdmFsdWUiLCJfc2xpY2VkVG9BcnJheSIsInZhbHVlIiwicmVtb3ZlTGF5ZXIiLCJlcnIiLCJlIiwiZiIsInNpemUiLCJzZXRDaHVua0NvbG9yIiwiZ2V0IiwicmVmcmVzaEdyaWRDb2xvcnMiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX3N0ZXAyJHZhbHVlIiwiYmJveEtleSIsImRhc2hBcnJheSIsInVuZGVmaW5lZCIsImNodW5rIiwiY2h1bmtzIiwiaGFzUm9hZHMiLCJidWlsZFJlcXVlc3QiLCJ0eXBlSWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGVfaWQiLCJnZXRCdWlsZGluZ3MiLCJ0aGVuIiwicmVzIiwianNvbiIsImdldEJ1aWxkaW5nQ29zdHMiLCJidWlsZGluZ1R5cGVJZCIsInVwZ3JhZGVCdWlsZGluZyIsImJ1aWxkaW5nSWQiLCJnZXRVcGdyYWRlSW5mbyIsImZseVRvIiwiZ2V0QWxsTG9hZGVkUm9hZHMiLCJnZXRCdWlsZGluZ0ltYWdlIiwibG9hZFZpc2libGVSb2FkQ2h1bmtzIiwiZmluZENsb3Nlc3RQb2ludE9uUm9hZCIsImZpbmRDbG9zZXN0U2VnbWVudCIsInNob3dOb3RpZmljYXRpb24iLCJnZXRBZG1pbkNvb3JkcyIsImRlYnVnV2FybiIsImRlYnVnRXJyb3IiLCJkcmF3QmFzZUNpcmNsZSIsInJlbW92ZUJhc2VDaXJjbGUiLCJyZWZyZXNoU2lkZWJhciIsImJhc2VNYXJrZXIiLCJiYXNlQ2lyY2xlIiwiYmFzZVBvc2l0aW9uIiwiYmFzZUNyZWF0ZWQiLCJwbGFjaW5nQmFzZSIsInByZXZpZXdNYXJrZXIiLCJwcmV2aWV3Q2lyY2xlIiwicHJldmlld1NuYXBMYXRMbmciLCJwcmV2aWV3TGluZSIsImhpZ2hsaWdodGVkU2VnbWVudCIsImN1cnJlbnRQbGF5ZXJGYWN0aW9uIiwic2V0Q3VycmVudFBsYXllckZhY3Rpb24iLCJmYWN0aW9uIiwidG9Mb3dlckNhc2UiLCJnZXRDdXJyZW50UGxheWVyRmFjdGlvbiIsImluaXRCYXNlVUkiLCJiYXNlQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2RlIiwiZGF0YXNldCIsImFsZXJ0IiwiZ2V0Q29udGFpbmVyIiwic3R5bGUiLCJjdXJzb3IiLCJfcHJldmlld1NuYXBMYXRMbmciLCJpc0Jhc2VQbGFjZW1lbnRWYWxpZCIsImNsZWFudXBQcmV2aWV3IiwiY3JlYXRlQmFzZSIsInJvYWRzIiwibGVuZ3RoIiwicmVzdWx0IiwibGF0bG5nIiwicG9pbnQiLCJpc1ZhbGlkIiwiY2lyY2xlIiwicmFkaXVzIiwiYWRkVG8iLCJtYXJrZXIiLCJwb2x5bGluZSIsIm9wYWNpdHkiLCJzZWdtZW50IiwidXBkYXRlQmFzZURpc3BsYXkiLCJ1cGRhdGVPdGhlckJhc2VzIiwiZW5hYmxlQWRtaW5Db29yZGluYXRlUGlja2VyIiwid2luZG93Iiwib3RoZXJCYXNlcyIsImV2ZXJ5IiwiYmFzZSIsImRpc3QiLCJkaXN0YW5jZSIsImJhc2VUeXBlSWQiLCJvayIsIkVycm9yIiwiZXJyb3IiLCJfcmVmIiwicmVtb3ZlQmFzZSIsIm1lc3NhZ2UiLCJsb2FkT3RoZXJCYXNlIiwicHNldWRvIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJpc1BsYXllckJhc2UiLCJpY29uIiwiY3JlYXRlQmFzZUljb24iLCJiaW5kUG9wdXAiLCJwdXNoIiwiZm9yRWFjaCIsImhhc0xheWVyIiwic2V0SWNvbiIsImxvYWRCYXNlRnJvbVNlcnZlciIsImljb25VcmwiLCJpY29uU2l6ZSIsImljb25BbmNob3IiLCJwb3B1cEFuY2hvciIsInQiLCJyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInNlbGVjdGVkQnVpbGRpbmdUeXBlIiwicHJldmlld0J1aWxkaW5nTWFya2VyIiwiaW5pdEJ1aWxkTW9kZSIsIl9jYWxsZWUiLCJidG4iLCJfY29udGV4dCIsInRhcmdldCIsImNsb3Nlc3QiLCJzZWxlY3RCdWlsZGluZ1R5cGUiLCJfeCIsIm9uTWFwQ2xpY2siLCJvbk1hcE1vdXNlTW92ZSIsIl94MiIsIl94MyIsIl9zZWxlY3RCdWlsZGluZ1R5cGUiLCJfY2FsbGVlMiIsImJ1dHRvbiIsImRhdGEiLCJfdCIsIl9jb250ZXh0MiIsImNsZWFyQnVpbGRpbmdTZWxlY3Rpb24iLCJjbGFzc0xpc3QiLCJuYW1lIiwiY29zdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlIiwiX3g0IiwiX29uTWFwQ2xpY2siLCJfY2FsbGVlMyIsInJlc3BvbnNlIiwiX3QyIiwiX2NvbnRleHQzIiwic2V0TGF0TG5nIiwiYWN0aXZhdGVCdWlsZE1vZGUiLCJxdWVyeVNlbGVjdG9yIiwiY2xpY2siLCJkZWFjdGl2YXRlQnVpbGRNb2RlIiwiaXNCdWlsZE1vZGVBY3RpdmUiLCJfcmVmcmVzaFNpZGViYXIiLCJfY2FsbGVlNCIsImh0bWwiLCJwYXJzZXIiLCJkb2MiLCJuZXdTaWRlYmFyIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwiX3QzIiwiX2NvbnRleHQ0IiwidGV4dCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInJlcGxhY2VXaXRoIiwiYnVpbGRpbmdNYXJrZXJzIiwicG9wdXBDb250ZW50TG9hZGVkIiwiY3VycmVudFBsYXllcklkIiwic2V0Q3VycmVudFBsYXllcklkIiwiZ2V0Q3VycmVudFBsYXllcklkIiwibG9hZEJ1aWxkaW5nc0Zyb21EYXRhIiwiYnVpbGRpbmdzIiwiQXJyYXkiLCJpc0FycmF5IiwiYiIsIl9iJHR5cGUiLCJjb2RlIiwidHlwZSIsImJ1aWxkaW5nRmFjdGlvbiIsImNyZWF0ZUJ1aWxkaW5nSWNvbiIsImJ1aWxkaW5nRGF0YSIsImxldmVsIiwib3duZXJJZCIsImlzTWluZSIsIkJvb2xlYW4iLCJwcm9kdWN0aW9uIiwicmVzb3VyY2VfdHlwZSIsImNyZWF0ZVNpbXBsZVBvcHVwIiwiaGFuZGxlUG9wdXBPcGVuIiwiaXNPd25CdWlsZGluZyIsInNldFBvcHVwQ29udGVudCIsImxvYWRVcGdyYWRlSW5mb0FzeW5jIiwiYnVpbGRpbmciLCJfbG9hZFVwZ3JhZGVJbmZvQXN5bmMiLCJzdGF0dXMiLCJsb2FkQnVpbGRpbmdzIiwiYnVpbGRpbmdDb2RlIiwiYWN0dWFsRmFjdGlvbiIsImJ1aWxkaW5nU2x1ZyIsInJlcGxhY2UiLCJmYWN0aW9uU2x1ZyIsImVudHJ5IiwibmV3TGV2ZWwiLCJnZXRCdWlsZGluZ1R5cGVDb3N0cyIsIl94NSIsIl9nZXRCdWlsZGluZ1R5cGVDb3N0cyIsImNhbkJ1aWxkQnVpbGRpbmciLCJfeDYiLCJfY2FuQnVpbGRCdWlsZGluZyIsInJlc291cmNlcyIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwicmVzb3VyY2UiLCJhbW91bnQiLCJxdWFudGl0eSIsInJlZnJlc2hCdWlsZGluZ1BvcHVwIiwiX3g3IiwiX3JlZnJlc2hCdWlsZGluZ1BvcHVwIiwiX2NhbGxlZTUiLCJfY29udGV4dDUiLCJpc1BvcHVwT3BlbiIsImRyYXdSb2FkU2VnbWVudCIsImZvcm1hdERhdGUiLCJhY3RpdmVEZWxpdmVyaWVzIiwiZGVsaXZlcnlMYXllciIsImFuaW1hdGlvbkZyYW1lIiwicGVuZGluZ0V2ZW50cyIsInRydWNrSWNvbiIsImRpdkljb24iLCJjbGFzc05hbWUiLCJpbml0RGVsaXZlcnlFdmVudHMiLCJpbml0RGVsaXZlcnlMYXllcnMiLCJsb2FkRGVsaXZlcmllcyIsIl9kYXRhJGZhY3Rpb24iLCJkZXRhaWwiLCJoYW5kbGVEZWxpdmVyeUV2ZW50IiwiZGVsaXZlcnlJZCIsInByb2dyZXNzIiwid2F5cG9pbnRzIiwicmVzb3VyY2VDb2RlIiwicmVzb3VyY2VMYWJlbCIsImVzdGltYXRlZFRpbWUiLCJkdXJhdGlvbiIsInNjaGVkdWxlZEF0IiwiX21hcCIsInN0YXJ0QW5pbWF0aW9uIiwicHJvY2Vzc0RlbGl2ZXJ5RXZlbnQiLCJfbG9hZERlbGl2ZXJpZXMiLCJkZWxpdmVyaWVzIiwiZGVsaXZlcnlEYXRhIiwicmVtb3ZlRGVsaXZlcnkiLCJ1cHNlcnREZWxpdmVyeSIsImtleSIsImNvbnNvbGUiLCJ3YXJuIiwicGFyc2UiLCJfdW51c2VkIiwibGF0bG5ncyIsIndwIiwiX2RhdGEkcHJvZ3Jlc3MiLCJfZGF0YSRzY2hlZHVsZWRBdCIsIl9kYXRhJHByb2dyZXNzMiIsImRlbGl2ZXJ5IiwibGFzdFNlcnZlclByb2dyZXNzIiwibGFzdFNlcnZlclRpbWUiLCJEYXRlIiwibm93IiwiX2RhdGEkcXVhbnRpdHkiLCJfZGF0YSRyZXNvdXJjZUxhYmVsIiwiX2RhdGEkcHJvZ3Jlc3MzIiwiX2RhdGEkcHJvZ3Jlc3M0IiwiX2RhdGEkZXN0aW1hdGVkVGltZSIsIl9kYXRhJHNjaGVkdWxlZEF0MiIsIl9kYXRhJHByb2dyZXNzNSIsInNjaGVkdWxlZFRpbWUiLCJhbmltYXRlIiwiaW50ZXJwb2xhdGVkUHJvZ3Jlc3MiLCJzdGFydFRpbWUiLCJnZXRUaW1lIiwiZWxhcHNlZCIsIm1pbiIsIm1heCIsImVsYXBzZWRTaW5jZVNlcnZlciIsInByb2dyZXNzUGVyU2Vjb25kIiwicG9zIiwiaW50ZXJwb2xhdGVBbG9uZ1JvdXRlIiwiZWwiLCJ0ZXh0Q29udGVudCIsInJvdW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidG90YWxEaXN0Iiwic2VnbWVudHMiLCJoYXZlcnNpbmUiLCJSIiwiZExhdCIsIlBJIiwiZExuZyIsIngiLCJwb3ciLCJzaW4iLCJjb3MiLCJhdGFuMiIsInNxcnQiLCJpbml0TWFwIiwibG9hZFdvcmxkIiwiaW5pdEdQUyIsImluaXROb3RpZmljYXRpb25zIiwiaW5pdEJ1aWxkaW5nVGltZXJzIiwiaW5pdEludmVudG9yeUV2ZW50cyIsImVuYWJsZUxlYWZsZXREZWJ1ZyIsImN1cnJlbnRVc2VyIiwiZGVidWciLCJvcmlnaW5hbE1hcmtlciIsIm9yaWdpbmFsQ2lyY2xlIiwib3JpZ2luYWxQb2x5bGluZSIsIl9sZW4iLCJhcmdzIiwiX2tleSIsIl9sZW4yIiwiX2tleTIiLCJfbGVuMyIsIl9rZXkzIiwiaGFuZGxlSW52ZW50b3J5VXBkYXRlIiwiX2RhdGEkcmVzb3VyY2VzIiwidXBkYXRlTmF2YmFyUmVzb3VyY2VzIiwicG9wdXAiLCJwYXJzZUludCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIml0ZW0iLCJxdHlFbGVtZW50IiwiY2hlY2tVcGdyYWRlUmVxdWlyZW1lbnRzIiwicmVxdWlyZWRFbGVtZW50IiwicmVxdWlyZWQiLCJnZXRBdHRyaWJ1dGUiLCJ0b2dnbGUiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJfdHlwZW9mIiwiZGVwb3NpdE1hcmtlcnMiLCJidWlsZGluZ1R5cGVzQ2FjaGUiLCJyZXNvdXJjZVR5cGVzQ2FjaGUiLCJsb2FkQnVpbGRpbmdUeXBlcyIsIl9sb2FkQnVpbGRpbmdUeXBlcyIsImxvYWRSZXNvdXJjZVR5cGVzIiwiX2xvYWRSZXNvdXJjZVR5cGVzIiwiX3Q0IiwiREVGQVVMVF9DT0xPUlMiLCJnZXRSZXNvdXJjZUNvbG9yIiwiX3Jlc291cmNlVHlwZXNDYWNoZSR0IiwiX3Jlc291cmNlVHlwZXNDYWNoZSR0MiIsImZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZSIsIl9maW5kQnVpbGRpbmdUeXBlRm9yUmVzb3VyY2UiLCJyZXNvdXJjZVR5cGUiLCJidWlsZGluZ1R5cGVzIiwiYnVpbGRpbmdUeXBlIiwiZmluZCIsImJ0IiwiX2J0JHJlc291cmNlVHlwZSIsInByb2R1Y3Rpb25fcmF0ZSIsImRlcG9zaXRMYXllcnMiLCJpbml0RGVwb3NpdExheWVycyIsIl9pbml0RGVwb3NpdExheWVycyIsImNvbnRyb2wiLCJyZXNvdXJjZVR5cGVzIiwicnQiLCJhZGRPdmVybGF5IiwibGFiZWwiLCJsb2FkRGVwb3NpdHNGb3JDaHVuayIsIl9sb2FkRGVwb3NpdHNGb3JDaHVuayIsIl9jYWxsZWU2IiwiY2h1bmtJZCIsImRlcG9zaXRzIiwiX3Q1IiwiX2NvbnRleHQ2IiwicmVuZGVyRGVwb3NpdHNGcm9tRGF0YSIsImZvcm1hdENvc3RzIiwiam9pbiIsIl9yZWYyIiwiY2hlY2tDYW5DbGFpbSIsIl9jaGVja0NhbkNsYWltIiwiX2NhbGxlZTciLCJkZXBvc2l0IiwiX3JldCIsIl9jb250ZXh0OCIsImtleXMiLCJfcGxheWVyUmVzb3VyY2VzJHJlc28iLCJwbGF5ZXJSZXNvdXJjZXMiLCJfY29udGV4dDciLCJfcmVnZW5lcmF0b3JWYWx1ZXMiLCJsb2FkRGVwb3NpdEluZm9Bc3luYyIsIl94OCIsIl94OSIsIl9sb2FkRGVwb3NpdEluZm9Bc3luYyIsIl9jYWxsZWU4IiwiZGVwb3NpdHNJRCIsImRlcG9zaXREYXRhIiwiX3Q2IiwiX2NvbnRleHQ5IiwibGF5ZXIiLCJjaXJjbGVNYXJrZXIiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImZpbGxDb2xvciIsImNsYWltRGVwb3NpdCIsIl9yZWYzIiwicmVzcG9uc2VUZXh0IiwiZGVwb3NpdF9pZCIsImxvY2F0aW9uIiwicmVsb2FkIiwiX3gwIiwiX3gxIiwiZm9nTGF5ZXIiLCJ2aXNpb25Tb3VyY2VzIiwiZm9nTW9kZSIsIm1hcEluc3RhbmNlIiwiRm9nT2ZXYXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiaW5pdENhbnZhcyIsInJlc2l6ZSIsImJpbmRFdmVudHMiLCJfY3JlYXRlQ2xhc3MiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJwb2ludGVyRXZlbnRzIiwiekluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImdldENvbnRleHQiLCJfdGhpcyIsInJlbmRlciIsImdldFNpemUiLCJ1cGRhdGVTb3VyY2VzIiwic291cmNlcyIsImNsZWFyUmVjdCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic291cmNlIiwiY2VudGVyIiwibGF0TG5nIiwibGF0TG5nVG9Db250YWluZXJQb2ludCIsImVkZ2UiLCJyYWRpdXNQeCIsImRpc3RhbmNlVG8iLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZm9nSW5zdGFuY2UiLCJpbml0Rm9nT2ZXYXIiLCJkaXNwbGF5IiwiaXNQb2ludFZpc2libGUiLCJfZm9nSW5zdGFuY2UiLCJzb21lIiwiZHgiLCJkeSIsImluaXRab25lRGVidWdQYW5lbCIsInN5bmNLbm93blpvbmVzIiwicm9hZHNMYXllciIsIm1hcmtlckljb24iLCJtYXJrZXJTaGFkb3ciLCJNYXJrZXIiLCJvcHRpb25zIiwic2hhZG93VXJsIiwibW92ZVRpbWVvdXQiLCJpc0NodW5rTW9kZSIsIl9pbml0TWFwIiwiaXNBZG1pbiIsImJhc2VPdmVybGF5cyIsImxheWVyc0NvbnRyb2wiLCJzZXRWaWV3IiwidGlsZUxheWVyIiwiYXR0cmlidXRpb24iLCJmaXJlIiwiSVNfQURNSU4iLCJsYXllcnMiLCJjb3VudCIsIl95aWVsZCRpbXBvcnQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZW50ZXJDaHVua01vZGUiLCJleGl0Q2h1bmtNb2RlIiwiX21hcEluc3RhbmNlIiwic3RhdHVzVGV4dCIsInBsYXllcnMiLCJoYXNDZW50ZXJlZCIsInBsYXllciIsImlzTWUiLCJjaHVua0NhY2hlIiwiQ0FDSEVfVFRMIiwiZ2V0Q2FjaGVkQ2h1bmsiLCJjYWNoZWQiLCJ0cyIsInNldENhY2hlZENodW5rIiwiX29iamVjdFNwcmVhZCIsImludmFsaWRhdGVDaHVua0NhY2hlIiwiY2xlYXJDaHVua0NhY2hlIiwiY2xlYXIiLCJpbnZhbGlkYXRlQ2h1bmsiLCJiZXN0UG9pbnQiLCJiZXN0RGlzdGFuY2UiLCJJbmZpbml0eSIsInJvYWQiLCJwb2ludHMiLCJhUmF3IiwiYlJhdyIsInByb2plY3RlZCIsInByb2plY3RQb2ludE9uU2VnbWVudCIsImJlc3RTZWdtZW50IiwibWlkIiwiQSIsIkIiLCJQIiwiQUIiLCJBUCIsImFiMiIsImRpc3RhbmNlVG9TZWdtZW50IiwiZGVidWdSb2FkcyIsIl9uIiwiRiIsImRyYXdPd25lZFJvYWRzIiwic2FmZUpzb24iLCJfc2FmZUpzb24iLCJkZWZhdWx0RGF0YSIsInVybCIsIl9sb2FkVmlzaWJsZVJvYWRDaHVua3MiLCJjaHVua3NUb0xvYWQiLCJmaW5hbENodW5rc1RvTG9hZCIsIl9jaHVua0lkIiwiX2ZpbmFsQ2h1bmtzVG9Mb2FkIiwidmlzaWJsZUJvdW5kcyIsIl95aWVsZCRQcm9taXNlJGFsbCIsIl95aWVsZCRQcm9taXNlJGFsbDIiLCJyb2Fkc1Jlc3BvbnNlIiwiYnVpbGRpbmdzUmVzcG9uc2UiLCJkZXBvc2l0c1Jlc3BvbnNlIiwicm9hZHNEYXRhIiwiYnVpbGRpbmdzRGF0YSIsImRlcG9zaXRzRGF0YSIsImFsbFJvYWRzIiwiYWxsQnVpbGRpbmdzIiwiYWxsRGVwb3NpdHMiLCJfaTIiLCJfZmluYWxDaHVua3NUb0xvYWQyIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsImdldFZpc2libGVDaHVua3MiLCJmaWx0ZXIiLCJsb2FkZWRDaHVua3MiLCJyZWZyZXNoQ2h1bmtDb2xvcnMiLCJzb3V0aCIsIndlc3QiLCJub3J0aCIsImVhc3QiLCJhbGwiLCJfY2h1bmtJZCRzcGxpdCIsIl9jaHVua0lkJHNwbGl0MiIsImN4U3RyIiwiY3lTdHIiLCJjeCIsImN5IiwiY2VsbFNvdXRoIiwiY2VsbFdlc3QiLCJjZWxsTm9ydGgiLCJjZWxsRWFzdCIsImNlbGxSb2FkcyIsImlzRW1wdHkiLCJzcGxpdCIsInBhcnNlRmxvYXQiLCJpc05hTiIsInRvRml4ZWQiLCJwdCIsInJlZnJlc2hDaHVuayIsIl9yZWZyZXNoQ2h1bmsiLCJmZXRjaFNpbmdsZUNodW5rIiwicmVmcmVzaENodW5rcyIsIl9yZWZyZXNoQ2h1bmtzIiwiY2h1bmtJZHMiLCJfZmV0Y2hTaW5nbGVDaHVuayIsIl9jaHVua0lkJHNwbGl0MyIsIl9jaHVua0lkJHNwbGl0NCIsIl95aWVsZCRQcm9taXNlJGFsbDMiLCJfeWllbGQkUHJvbWlzZSRhbGw0Iiwicm9hZHNSZXMiLCJidWlsZGluZ3NSZXMiLCJkZXBvc2l0c1JlcyIsIl9jb2xvcnMkY2h1bmskc3RhdHVzIiwiY29sb3JzIiwibG9hZGVkIiwiZW1wdHkiLCJsb2FkaW5nIiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsImxhdE1pbiIsImxuZ01pbiIsImRyYXduUm9hZElkcyIsImFkZGVkIiwiZ2V0Um9hZENvbG9yIiwiY2xlYXJPd25lZFJvYWRzIiwiY2xlYXJMYXllcnMiLCJtb3RvcndheSIsInRydW5rIiwicHJpbWFyeSIsInNlY29uZGFyeSIsInRlcnRpYXJ5IiwicmVzaWRlbnRpYWwiLCJzZXJ2aWNlIiwidW5jbGFzc2lmaWVkIiwiZmVycnkiLCJnZXRPd25lZFJvYWRzQ291bnQiLCJyb2Fkc1JlYWR5IiwiZHJhd25Sb2FkcyIsInJvYWRMYXllcnMiLCJidWlsZGluZ0xheWVycyIsImNhY2hlZFJvYWRzIiwiY2FjaGVEaXJ0eSIsIm1hcmtSb2FkQ2FjaGVEaXJ0eSIsInZhbHVlcyIsImZsYXRNYXAiLCJrbm93blpvbmVzIiwiZ2V0Wm9uZVN0YXRzIiwiYWRkUm9hZHNDaHVuayIsInBhbmVsIiwiaXNQYW5lbE9wZW4iLCJ0b2dnbGVCdG4iLCJjc3NUZXh0Iiwib25jbGljayIsInRvZ2dsZVBhbmVsIiwiYmFja2dyb3VuZCIsInJlZnJlc2hQYW5lbCIsIl9yZWZyZXNoUGFuZWwiLCJyZW5kZXJQYW5lbCIsInRvdGFsIiwic3RhdHMiLCJ6b25lcyIsIndpdGhSb2FkcyIsInoiLCJ1cGRhdGVkQXQiLCJ3aXRob3V0IiwiaW5uZXJIVE1MIiwiem9uZSIsInJlZnJlc2hCdG4iLCJzdG9wUHJvcGFnYXRpb24iLCJyb3ciLCJvbmRibGNsaWNrIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIl9zeW5jS25vd25ab25lcyIsImJib3hLZXlzIiwiYWRkS25vd25CYm94S2V5IiwiZXZlbnRzIiwiZXZlbnQiLCJub3RpZiIsImJhc2VDaXJjbGVzIiwicm9hZFNlZ21lbnRzIiwiRkFDVElPTl9DT0xPUlMiLCJnZXRGYWN0aW9uQ29sb3IiLCJiYXNlSWQiLCJwbGF5ZXJGYWN0aW9uIiwiY2xlYXJBbGxCYXNlQ2lyY2xlcyIsInJvYWRJZCIsImNvb3JkcyIsInJlbW92ZVJvYWRTZWdtZW50IiwiY2xlYXJBbGxSb2FkU2VnbWVudHMiLCJ1cGRhdGVCYXNlQ2lyY2xlcyIsImJhc2VzIiwidXBkYXRlUm9hZFNlZ21lbnRzIiwiaXNQbGF5ZXJSb2FkIiwic2V0Um9hZFNlZ21lbnRDb2xvciIsImZvcm1hdCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNuYXBUb0NodW5rIiwiQ0hVTktfUkFESVVTIiwiREVGQVVMVF9ST0FEX1JBRElVUyIsImlzUGVuZGluZyIsIl9hZGRSb2Fkc0NodW5rIiwiX2FyZ3MyIiwic2hvd0dlbmVyYXRpb25GZWVkYmFjayIsImNvbXB1dGVBZmZlY3RlZENodW5rSWRzIiwicm9hZHNfY3JlYXRlZCIsImFscmVhZHlfcG9wdWxhdGVkIiwic2hvd1RvYXN0IiwiaWRzIiwiY2xpY2tTbmFwIiwicHRMYXQiLCJwdExuZyIsInNuYXAiLCJvbmNlIiwiX2UkbGF0bG5nIiwiZGVmYXVsdExhdCIsImRlZmF1bHRMbmciLCJnZW9sb2NhdGlvbiIsImdwc0ZvdW5kIiwid2F0Y2hQb3NpdGlvbiIsInRpbWVvdXQiLCJsYXRNYXgiLCJsbmdNYXgiLCJ0aW1lckludGVydmFsIiwidXBkYXRlVGltZXJzIiwidGltZXJFbCIsInNjaGVkdWxlZCIsImRpZmZTZWMiLCJtaW5zIiwic2VjcyIsImFicyIsInNldEludGVydmFsIiwiaXNvU3RyaW5nIiwidG9Mb2NhbGVTdHJpbmciLCJ0aW1lWm9uZSIsImhvdXIiLCJtaW51dGUiLCJJY29uIiwiRGVmYXVsdCIsIl9nZXRJY29uVXJsIiwibWVyZ2VPcHRpb25zIiwiaWNvblJldGluYVVybCIsInJlcXVpcmUiLCJUWVBFX01BUCIsIkRFQlVHIiwiZW5hYmxlZCIsIl93aW5kb3ckQVBQX0RFQlVHIiwiQVBQX0RFQlVHIiwibWVyY3VyZSIsImludmVudG9yeSIsIm5ldHdvcmsiLCJjYWNoZSIsImNhbkxvZyIsIl9jb25zb2xlIiwibG9nIiwiX2NvbnNvbGUyIiwiX2NvbnNvbGUzIl0sInNvdXJjZVJvb3QiOiIifQ==