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
/* harmony import */ var _worldExpansionProgressPanel_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./worldExpansionProgressPanel.js */ "./assets/scripts/Game/map/worldExpansionProgressPanel.js");
/* harmony import */ var _roads_zoneSync_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./roads/zoneSync.js */ "./assets/scripts/Game/map/roads/zoneSync.js");
/* harmony import */ var _roads_roadsLayer_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./roads/roadsLayer.js */ "./assets/scripts/Game/map/roads/roadsLayer.js");
/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png");
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png");
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../utils/debug.js */ "./assets/scripts/utils/debug.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
























function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }















_LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_24__["default"].Marker.prototype.options.icon = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_24__["default"].icon({
  iconUrl: leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_36__,
  shadowUrl: leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_37__
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
            _roads_roadsLayer_js__WEBPACK_IMPORTED_MODULE_35__.roadsLayer.addTo(mapInstance);
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
            layersControl.addOverlay(_roads_roadsLayer_js__WEBPACK_IMPORTED_MODULE_35__.roadsLayer, "Routes possédées");
          }

          // Panneau de debug des zones
          (0,_roads_zoneDebugPanel_js__WEBPACK_IMPORTED_MODULE_32__.initZoneDebugPanel)();

          // Panneau de progression de l'expansion (admin seulement)
          if (isAdmin) {
            (0,_worldExpansionProgressPanel_js__WEBPACK_IMPORTED_MODULE_33__.initWorldExpansionProgressPanel)();
          }

          // Charge la liste des zones en base pour l'overlay "non fetché"
          (0,_roads_zoneSync_js__WEBPACK_IMPORTED_MODULE_34__.syncKnownZones)().then(/*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(count) {
              var _yield$import, refreshGridColors;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_38__.debugLog)("zones", "".concat(count, " zones synchronis\xE9es depuis la base"));
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
              (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_38__.debugLog)("grid", "Grid ON");
              (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__.initGridLayer)();
              (0,_roads_roads_js__WEBPACK_IMPORTED_MODULE_26__.loadVisibleRoadChunks)();
            }
          });
          mapInstance.on('overlayremove', function (e) {
            if (e.layer === _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__.gridLayer) {
              (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_38__.debugLog)("grid", "Grid OFF");
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
    (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_38__.debugError)('map', "Erreur load world", err);
    // Ne pas rediriger automatiquement, laissez le système de login gérer la redirection
  });
}
function enterChunkMode() {
  if (isChunkMode) return;
  isChunkMode = true;
  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_38__.debugLog)("chunks", "ENTER CHUNK MODE");
  (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_25__.initGridLayer)();
  (0,_roads_roads_js__WEBPACK_IMPORTED_MODULE_26__.loadVisibleRoadChunks)();
}
function exitChunkMode() {
  if (!isChunkMode) return;
  isChunkMode = false;
  (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_38__.debugLog)("chunks", "EXIT CHUNK MODE");
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

/***/ "./assets/scripts/Game/map/worldExpansionProgressPanel.js"
/*!****************************************************************!*\
  !*** ./assets/scripts/Game/map/worldExpansionProgressPanel.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initWorldExpansionProgressPanel: () => (/* binding */ initWorldExpansionProgressPanel),
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
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__);
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
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_debug_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/debug.js */ "./assets/scripts/utils/debug.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
















var panel = null;
var isPanelOpen = false;
var toggleBtn = null;
var pollInterval = null;
function initWorldExpansionProgressPanel() {
  // Bouton toggle
  toggleBtn = document.createElement('button');
  toggleBtn.id = 'expansion-progress-toggle';
  toggleBtn.textContent = '🌍 Expansion';
  toggleBtn.style.cssText = "\n        position: fixed;\n        bottom: 10px;\n        right: 100px;\n        z-index: 1000;\n        background: #333;\n        color: #eee;\n        border: 1px solid #666;\n        border-radius: 4px;\n        padding: 4px 10px;\n        cursor: pointer;\n        font-family: monospace;\n        font-size: 11px;\n    ";
  toggleBtn.onclick = togglePanel;
  document.body.appendChild(toggleBtn);

  // Panel
  panel = document.createElement('div');
  panel.id = 'expansion-progress-panel';
  panel.style.cssText = "\n        position: fixed;\n        bottom: 40px;\n        right: 100px;\n        width: 240px;\n        max-height: 220px;\n        background: rgba(0, 0, 0, 0.9);\n        color: #eee;\n        font-family: monospace;\n        font-size: 11px;\n        z-index: 1000;\n        border-radius: 6px;\n        overflow: hidden;\n        display: none;\n        flex-direction: column;\n    ";
  document.body.appendChild(panel);
}
function togglePanel() {
  isPanelOpen = !isPanelOpen;
  panel.style.display = isPanelOpen ? 'flex' : 'none';
  toggleBtn.style.background = isPanelOpen ? '#555' : '#333';
  if (isPanelOpen) {
    refreshPanel();
    pollInterval = setInterval(refreshPanel, 5000);
  } else {
    clearInterval(pollInterval);
    pollInterval = null;
  }
}
function refreshPanel() {
  return _refreshPanel.apply(this, arguments);
}
function _refreshPanel() {
  _refreshPanel = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var response, stats, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return fetch('/api/world-expansion/status');
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
          stats = _context.v;
          renderPanel(stats);
          _context.n = 5;
          break;
        case 4:
          _context.p = 4;
          _t = _context.v;
          (0,_utils_debug_js__WEBPACK_IMPORTED_MODULE_15__.debugError)("expansion", "Erreur refresh:", _t);
        case 5:
          return _context.a(2);
      }
    }, _callee, null, [[0, 4]]);
  }));
  return _refreshPanel.apply(this, arguments);
}
function renderPanel(stats) {
  if (!panel) return;
  var total = (stats.populated || 0) + (stats.empty || 0) + (stats.frontier || 0);
  var progress = total > 0 ? (stats.populated / total * 100).toFixed(1) : 0;
  panel.innerHTML = "\n        <div style=\"padding: 6px 8px; background: #222; font-weight: bold; display: flex; justify-content: space-between; align-items: center;\">\n            <span>\uD83C\uDF0D Expansion</span>\n            <button id=\"expansion-refresh-btn\" style=\"background: #444; border: 1px solid #666; color: #eee; border-radius: 3px; padding: 2px 6px; cursor: pointer; font-size: 10px;\">\uD83D\uDD04</button>\n        </div>\n        <div style=\"padding: 4px 8px; background: #1a1a1a; border-bottom: 1px solid #333;\">\n            <div style=\"background: #333; border-radius: 3px; height: 8px; overflow: hidden; margin-bottom: 4px;\">\n                <div style=\"background: #4a4; height: 100%; width: ".concat(progress, "%; transition: width 0.3s;\"></div>\n            </div>\n            <span style=\"color: #8f8\">").concat(progress, "%</span>\n        </div>\n        <div style=\"padding: 4px 8px; background: #1a1a1a; color: #aaa; border-bottom: 1px solid #333; font-size: 10px;\">\n            <span style=\"color: #6af\">\u25CF ").concat(stats.populated || 0, " peupl\xE9s</span>\n            &nbsp;|&nbsp;\n            <span style=\"color: #e44\">\u25CF ").concat(stats.empty || 0, " vides</span>\n            &nbsp;|&nbsp;\n            <span style=\"color: #fa0\">\u25CF ").concat(stats.frontier || 0, " fronti\xE8re</span>\n        </div>\n        <div style=\"padding: 4px 8px; background: #1a1a1a; color: #666; font-size: 9px; border-top: 1px solid #333;\">\n            Fronti\xE8re = chunks en attente de g\xE9n\xE9ration\n        </div>\n    ");
  var refreshBtn = document.getElementById('expansion-refresh-btn');
  if (refreshBtn) {
    refreshBtn.onclick = function (e) {
      e.stopPropagation();
      refreshPanel();
    };
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBbFEsTUFBQSxDQUN6QjhZLElBQUksQ0FDWCxDQUFDO0FBQ0wsQzs7Ozs7Ozs7Ozs7Ozs7QUM1RE8sSUFBTWliLFFBQVEsR0FBRztFQUNwQkssT0FBTyxFQUFFLFNBQVM7RUFDbEJDLFNBQVMsRUFBRSxXQUFXO0VBQ3RCN2UsUUFBUSxFQUFFLFVBQVU7RUFDcEI1RixTQUFTLEVBQUUsV0FBVztFQUN0QnBOLE1BQU0sRUFBRSxRQUFRO0VBQ2hCOHhCLE9BQU8sRUFBRSxTQUFTO0VBQ2xCQyxLQUFLLEVBQUU7QUFDWCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL0xheWVycy9ncmlkTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9idWlsZGluZ3MvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2J1aWxkaW5ncy9idWlsZE1vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9idWlsZGluZ3MvYnVpbGRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9kZWxpdmVyeS9kZWxpdmVyeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2dhbWUtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2ludmVudG9yeS9pbnZlbnRvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvZGVwb3NpdHMvZGVwb3NpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvZm9nT2ZXYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvbWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwL3JvYWRzL2NodW5rQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvcm9hZHMvaW52YWxpZGF0ZUNodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwL3JvYWRzL3JvYWRVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9yb2Fkcy9yb2Fkcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC9yb2Fkcy9yb2Fkc0xheWVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwL3JvYWRzL3JvYWRzU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvcm9hZHMvem9uZURlYnVnUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvcm9hZHMvem9uZVN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAvd29ybGRFeHBhbnNpb25Qcm9ncmVzc1BhbmVsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3VpL2RyYXdPbk1hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3V0aWxzL2FkbWluX2NsaXBib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3V0aWxzL2NodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvdXRpbHMvZ3BzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvdXRpbHMvc25hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL3V0aWxzL3RpbWVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0xlYWZsZXRXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3V0aWxzL2RlYnVnLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3V0aWxzL3R5cGVNYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4uL3V0aWxzL2NodW5rLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwLCBpc0dyaWRMYXllckFjdGl2ZSB9IGZyb20gJy4uL21hcC9tYXAuanMnO1xyXG5pbXBvcnQgeyByb2Fkc1N0YXRlIH0gZnJvbSAnLi4vbWFwL3JvYWRzL3JvYWRzU3RhdGUuanMnO1xyXG5pbXBvcnQgeyBrbm93bkJib3hLZXlzIH0gZnJvbSAnLi4vbWFwL3JvYWRzL3pvbmVTeW5jLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBncmlkTGF5ZXIgPSBMLmxheWVyR3JvdXAoKTtcclxuXHJcbmNvbnN0IHZpc2libGVDaHVua3MgPSBuZXcgTWFwKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdyaWRMYXllcigpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgaWYgKCFpc0dyaWRMYXllckFjdGl2ZSgpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgem9vbSA9IG1hcC5nZXRab29tKCk7XHJcbiAgICBpZiAoem9vbSA8IDE0KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgYm91bmRzID0gbWFwLmdldEJvdW5kcygpO1xyXG5cclxuICAgIGNvbnN0IG1pbkxhdCA9IE1hdGguZmxvb3IoYm91bmRzLmdldFNvdXRoKCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1heExhdCA9IE1hdGguY2VpbChib3VuZHMuZ2V0Tm9ydGgoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWluTG5nID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0V2VzdCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtYXhMbmcgPSBNYXRoLmNlaWwoYm91bmRzLmdldEVhc3QoKSAvIENIVU5LX1NJWkUpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Zpc2libGUgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IG1pbkxhdDsgaSA8IG1heExhdDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IG1pbkxuZzsgaiA8IG1heExuZzsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGAke2l9XyR7an1gO1xyXG4gICAgICAgICAgICBuZXdWaXNpYmxlLmFkZChpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmlzaWJsZUNodW5rcy5oYXMoaWQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhdCA9IGkgKiBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICBjb25zdCBsbmcgPSBqICogQ0hVTktfU0laRTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBMLnJlY3RhbmdsZShbXHJcbiAgICAgICAgICAgICAgICBbbGF0LCBsbmddLFxyXG4gICAgICAgICAgICAgICAgW2xhdCArIENIVU5LX1NJWkUsIGxuZyArIENIVU5LX1NJWkVdXHJcbiAgICAgICAgICAgIF0sIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiAxLFxyXG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuMTVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZWN0Lm9uKCdtb3VzZW92ZXInLCAoKSA9PiByZWN0LnNldFN0eWxlKHsgZmlsbE9wYWNpdHk6IDAuMyB9KSk7XHJcbiAgICAgICAgICAgIHJlY3Qub24oJ21vdXNlb3V0JywgKCkgPT4gcmVjdC5zZXRTdHlsZSh7IGZpbGxPcGFjaXR5OiAwLjE1IH0pKTtcclxuXHJcbiAgICAgICAgICAgIGdyaWRMYXllci5hZGRMYXllcihyZWN0KTtcclxuXHJcbiAgICAgICAgICAgIHZpc2libGVDaHVua3Muc2V0KGlkLCByZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g8J+nuSByZW1vdmUgY2V1eCBob3JzIMOpY3JhblxyXG4gICAgZm9yIChjb25zdCBbaWQsIHJlY3RdIG9mIHZpc2libGVDaHVua3MuZW50cmllcygpKSB7XHJcbiAgICAgICAgaWYgKCFuZXdWaXNpYmxlLmhhcyhpZCkpIHtcclxuICAgICAgICAgICAgZ3JpZExheWVyLnJlbW92ZUxheWVyKHJlY3QpO1xyXG4gICAgICAgICAgICB2aXNpYmxlQ2h1bmtzLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwiQ2h1bmtzIHZpc2libGVzOlwiLCB2aXNpYmxlQ2h1bmtzLnNpemUpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDSFVOSyBDT0xPUlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2h1bmtDb2xvcihpZCwgY29sb3IpIHtcclxuICAgIGlmICghaXNHcmlkTGF5ZXJBY3RpdmUoKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHJlY3QgPSB2aXNpYmxlQ2h1bmtzLmdldChpZCk7XHJcbiAgICBpZiAoIXJlY3QpIHJldHVybjtcclxuXHJcbiAgICByZWN0LnNldFN0eWxlKHtcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBmaWxsT3BhY2l0eTogMC4yXHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlLWNvbG9yZSB0b3V0ZXMgbGVzIGNlbGx1bGVzIHZpc2libGVzIHNlbG9uIGxldXIgw6l0YXQuXHJcbiAqXHJcbiAqIFJvdWdlICAgPSB6b25lIFBBUyBFTiBCQVNFIChqYW1haXMgZmV0Y2jDqWUpXHJcbiAqIE9yYW5nZSAgPSBlbiBiYXNlIG1haXMgcGFzIGVuY29yZSBjaGFyZ8OpZSBkYW5zIGNlIHZpZXdwb3J0XHJcbiAqIEJsZXUgICAgPSBjaGFyZ8OpZSBhdmVjIGF1IG1vaW5zIHVuZSByb3V0ZVxyXG4gKiBHcmlzICAgID0gY2hhcmfDqWUgbWFpcyB2aWRlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaEdyaWRDb2xvcnMoKSB7XHJcbiAgICBpZiAoIWlzR3JpZExheWVyQWN0aXZlKCkpIHJldHVybjtcclxuXHJcbiAgICBmb3IgKGNvbnN0IFtiYm94S2V5LCByZWN0XSBvZiB2aXNpYmxlQ2h1bmtzLmVudHJpZXMoKSkge1xyXG4gICAgICAgIGxldCBjb2xvciA9ICdvcmFuZ2UnO1xyXG4gICAgICAgIGxldCBmaWxsT3BhY2l0eSA9IDAuMTU7XHJcbiAgICAgICAgbGV0IHdlaWdodCA9IDE7XHJcbiAgICAgICAgbGV0IGRhc2hBcnJheSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYgKGtub3duQmJveEtleXMuaGFzKGJib3hLZXkpKSB7XHJcbiAgICAgICAgICAgIC8vIFpvbmUgZW4gYmFzZSA6IHJlZ2FyZGUgc2kgZWxsZSBlc3QgY2hhcmfDqWUgZGFucyBjZSB2aWV3cG9ydFxyXG4gICAgICAgICAgICBjb25zdCBjaHVuayA9IHJvYWRzU3RhdGUuY2h1bmtzW2Jib3hLZXldO1xyXG4gICAgICAgICAgICBpZiAoY2h1bmspIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gY2h1bmsuaGFzUm9hZHMgPyAnYmx1ZScgOiAnIzQ0NCc7XHJcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eSA9IDAuMjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gJyM4ZjgnOyAvLyBlbiBiYXNlIG1haXMgcGFzIGNoYXJnw6kgOiB2ZXJ0IHDDomxlXHJcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eSA9IDAuMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFpvbmUgUEFTIGVuIGJhc2UgOiByb3VnZSBiaWVuIHZpc2libGUgYXZlYyBwb2ludGlsbMOpc1xyXG4gICAgICAgICAgICBjb2xvciA9ICcjZTQ0JztcclxuICAgICAgICAgICAgd2VpZ2h0ID0gMjtcclxuICAgICAgICAgICAgZmlsbE9wYWNpdHkgPSAwLjI1O1xyXG4gICAgICAgICAgICBkYXNoQXJyYXkgPSAnNCwgMyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWN0LnNldFN0eWxlKHsgY29sb3IsIGZpbGxPcGFjaXR5LCB3ZWlnaHQsIGRhc2hBcnJheSB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBidWlsZFJlcXVlc3QobGF0LCBsbmcsIHR5cGVJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL2J1aWxkJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbGF0OiBsYXQsIGxuZzogbG5nLCB0eXBlX2lkOiB0eXBlSWQgfSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVpbGRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL21hcC1kYXRhJylcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWlsZGluZ0Nvc3RzKGJ1aWxkaW5nVHlwZUlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYC9hcGkvYnVpbGRpbmctdHlwZXMvJHtidWlsZGluZ1R5cGVJZH0vY29zdHNgKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZ3JhZGVCdWlsZGluZyhidWlsZGluZ0lkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYC9hcGkvYnVpbGRpbmcvJHtidWlsZGluZ0lkfS91cGdyYWRlYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVwZ3JhZGVJbmZvKGJ1aWxkaW5nSWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgL2FwaS9idWlsZGluZy8ke2J1aWxkaW5nSWR9L3VwZ3JhZGUtaW5mb2ApO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBmbHlUbywgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IHJvYWRzU3RhdGUsIGdldEFsbExvYWRlZFJvYWRzIH0gZnJvbSAnLi4vbWFwL3JvYWRzL3JvYWRzU3RhdGUuanMnO1xyXG5pbXBvcnQgeyBnZXRCdWlsZGluZ0ltYWdlIH0gZnJvbSAnLi9idWlsZGluZy5qcyc7XHJcbmltcG9ydCB7IGxvYWRWaXNpYmxlUm9hZENodW5rcyB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2Fkcy5qcyc7XHJcbmltcG9ydCB7IGZpbmRDbG9zZXN0UG9pbnRPblJvYWQsIGZpbmRDbG9zZXN0U2VnbWVudCB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2FkVXRpbHMuanMnO1xyXG5pbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vbm90aWZpY2F0aW9ucy5qcyc7XHJcbmltcG9ydCB7IGdldEFkbWluQ29vcmRzIH0gZnJvbSAnLi4vdXRpbHMvYWRtaW5fY2xpcGJvYXJkLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgZHJhd0Jhc2VDaXJjbGUsIHJlbW92ZUJhc2VDaXJjbGUgfSBmcm9tICcuLi91aS9kcmF3T25NYXAuanMnO1xyXG5pbXBvcnQgeyByZWZyZXNoU2lkZWJhciB9IGZyb20gJy4vYnVpbGRNb2RlLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIPCfp6AgU1RBVEVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxubGV0IGJhc2VNYXJrZXIgPSBudWxsO1xyXG5sZXQgYmFzZUNpcmNsZSA9IG51bGw7XHJcbmxldCBiYXNlUG9zaXRpb24gPSBudWxsO1xyXG5sZXQgYmFzZUNyZWF0ZWQgPSBmYWxzZTtcclxubGV0IHBsYWNpbmdCYXNlID0gZmFsc2U7XHJcblxyXG5sZXQgcHJldmlld01hcmtlciA9IG51bGw7XHJcbmxldCBwcmV2aWV3Q2lyY2xlID0gbnVsbDtcclxubGV0IHByZXZpZXdTbmFwTGF0TG5nID0gbnVsbDtcclxubGV0IHByZXZpZXdMaW5lID0gbnVsbDtcclxubGV0IGhpZ2hsaWdodGVkU2VnbWVudCA9IG51bGw7XHJcblxyXG5sZXQgY3VycmVudFBsYXllckZhY3Rpb24gPSAnZGVmYXVsdCc7XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0VUIFBMQVlFUiBGQUNUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50UGxheWVyRmFjdGlvbihmYWN0aW9uKSB7XHJcbiAgICBjdXJyZW50UGxheWVyRmFjdGlvbiA9IChmYWN0aW9uIHx8ICdkZWZhdWx0JykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUIFBMQVlFUiBGQUNUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpIHtcclxuICAgIHJldHVybiBjdXJyZW50UGxheWVyRmFjdGlvbjtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5JVCBVSVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJhc2VVSSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBjb25zdCBiYXNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2VCdG4nKTtcclxuXHJcbiAgICBiYXNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBtb2RlID0gYmFzZUJ0bi5kYXRhc2V0Lm1vZGU7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gQ1JFQVRFIEJBU0UgTU9ERSBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGlmIChtb2RlID09PSAnY3JlYXRlJykge1xyXG4gICAgICAgICAgICBpZiAoYmFzZUNyZWF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQmFzZSBkw6lqw6AgY3LDqcOpZSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwbGFjaW5nQmFzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnY3Jvc3NoYWlyJztcclxuXHJcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oXCJDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgcGxhY2VyIHRhIGJhc2VcIiwgJ2luZm8nKTtcclxuICAgICAgICAgICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFJFVFVSTiBCQVNFIE1PREVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGlmIChtb2RlID09PSAncmV0dXJuJykge1xyXG4gICAgICAgICAgICBpZiAoIWJhc2VQb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBdWN1bmUgYmFzZSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmbHlUbyhiYXNlUG9zaXRpb25bMF0sIGJhc2VQb3NpdGlvblsxXSwgMTYpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQ0xJQ0sgTUFQXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbWFwLm9uKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFwbGFjaW5nQmFzZSB8fCBiYXNlQ3JlYXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghcHJldmlld1NuYXBMYXRMbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgeyBsYXQsIGxuZyB9ID0gcHJldmlld1NuYXBMYXRMbmc7XHJcblxyXG4gICAgICAgIGlmICghaXNCYXNlUGxhY2VtZW50VmFsaWQobGF0LCBsbmcpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi4p2MIFRyb3AgcHJvY2hlIGQndW5lIGJhc2UgIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYW51cFByZXZpZXcobWFwKTtcclxuICAgICAgICBjcmVhdGVCYXNlKGxhdCwgbG5nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE1PVVNFIE1PVkUgKHByZXZpZXcgc25hcCByb2FkKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcC5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFwbGFjaW5nQmFzZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByb2FkcyA9IGdldEFsbExvYWRlZFJvYWRzKCk7XHJcblxyXG4gICAgICAgIGlmICghcm9hZHMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbmRDbG9zZXN0UG9pbnRPblJvYWQoZS5sYXRsbmcsIHJvYWRzKTtcclxuICAgICAgICBpZiAoIXJlc3VsdC5wb2ludCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBwcmV2aWV3U25hcExhdExuZyA9IHJlc3VsdC5wb2ludDtcclxuXHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGlzQmFzZVBsYWNlbWVudFZhbGlkKHJlc3VsdC5wb2ludC5sYXQsIHJlc3VsdC5wb2ludC5sbmcpO1xyXG5cclxuICAgICAgICBjbGVhbnVwUHJldmlldyhtYXApO1xyXG5cclxuICAgICAgICBjb25zdCBjb2xvciA9IGlzVmFsaWQgPyAnZ3JlZW4nIDogJ3JlZCc7XHJcblxyXG4gICAgICAgIHByZXZpZXdDaXJjbGUgPSBMLmNpcmNsZShyZXN1bHQucG9pbnQsIHtcclxuICAgICAgICAgICAgcmFkaXVzOiA2MDAsXHJcbiAgICAgICAgICAgIGNvbG9yLFxyXG4gICAgICAgICAgICB3ZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwXHJcbiAgICAgICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICAgICAgcHJldmlld01hcmtlciA9IEwubWFya2VyKHJlc3VsdC5wb2ludCkuYWRkVG8obWFwKTtcclxuXHJcbiAgICAgICAgcHJldmlld0xpbmUgPSBMLnBvbHlsaW5lKFtlLmxhdGxuZywgcmVzdWx0LnBvaW50XSwge1xyXG4gICAgICAgICAgICBjb2xvcjogJ2N5YW4nLFxyXG4gICAgICAgICAgICB3ZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgICAgICAgZGFzaEFycmF5OiAnNSwgNSdcclxuICAgICAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBjb25zdCBzZWdtZW50ID0gZmluZENsb3Nlc3RTZWdtZW50KGUubGF0bG5nLCByb2Fkcyk7XHJcblxyXG4gICAgICAgIGlmIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkU2VnbWVudCA9IEwucG9seWxpbmUoc2VnbWVudCwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiA2LFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44XHJcbiAgICAgICAgICAgIH0pLmFkZFRvKG1hcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFVQREFURSBWSVNVQUwgQkFTRSBBTkQgT1RIRVIgQkFTRVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcC5vbignem9vbWVuZCcsICgpID0+IHtcclxuICAgICAgICB1cGRhdGVCYXNlRGlzcGxheSgpO1xyXG4gICAgICAgIHVwZGF0ZU90aGVyQmFzZXMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQQVRIRklORElORyBERUJVRyBGT1IgQURNSU4gLSBDTElDSyBUTyBHRVQgQ09PUkRJTkFURVNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlcigpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgc2hvd05vdGlmaWNhdGlvbihcIk1vZGUgQWRtaW4gYWN0aXbDqSA6IGNsaXF1ZXogc3VyIGxhIGNhcnRlXCIsICdpbmZvJyk7XHJcbiAgICAgICAgXHJcbiAgICBtYXAub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBnZXRBZG1pbkNvb3JkcyhlLmxhdGxuZy5sYXQsIGUubGF0bG5nLmxuZyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LmVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlciA9IGVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlcjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIPCfp7kgQ0xFQU4gUFJFVklFV1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBjbGVhbnVwUHJldmlldygpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBwcmV2aWV3TWFya2VyICYmIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3TWFya2VyKTtcclxuICAgIHByZXZpZXdDaXJjbGUgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdDaXJjbGUpO1xyXG4gICAgcHJldmlld0xpbmUgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdMaW5lKTtcclxuICAgIGhpZ2hsaWdodGVkU2VnbWVudCAmJiBtYXAucmVtb3ZlTGF5ZXIoaGlnaGxpZ2h0ZWRTZWdtZW50KTtcclxuXHJcbiAgICBwcmV2aWV3TWFya2VyID0gbnVsbDtcclxuICAgIHByZXZpZXdDaXJjbGUgPSBudWxsO1xyXG4gICAgcHJldmlld0xpbmUgPSBudWxsO1xyXG4gICAgaGlnaGxpZ2h0ZWRTZWdtZW50ID0gbnVsbDtcclxuXHJcbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJyc7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaXNCYXNlUGxhY2VtZW50VmFsaWQobGF0LCBsbmcpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICByZXR1cm4gb3RoZXJCYXNlcy5ldmVyeShiYXNlID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdCA9IG1hcC5kaXN0YW5jZShcclxuICAgICAgICAgICAgW2xhdCwgbG5nXSxcclxuICAgICAgICAgICAgW2Jhc2UubGF0LCBiYXNlLmxuZ11cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlzdCA+PSAxMTAwO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENSRUFURSBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGNyZWF0ZUJhc2UobGF0LCBsbmcpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBwbGFjaW5nQmFzZSA9IGZhbHNlO1xyXG4gICAgYmFzZVBvc2l0aW9uID0gW2xhdCwgbG5nXTtcclxuXHJcbiAgICBmbHlUbyhsYXQsIGxuZyk7XHJcblxyXG4gICAgYmFzZUNpcmNsZSA9IGRyYXdCYXNlQ2lyY2xlKCdwbGF5ZXJfYmFzZScsIGxhdCwgbG5nLCBjdXJyZW50UGxheWVyRmFjdGlvbiwgdHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgYmFzZVR5cGVJZCA9IDE7XHJcbiAgICBmZXRjaCgnL2FwaS9idWlsZCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGxhdCxcclxuICAgICAgICAgICAgbG5nLFxyXG4gICAgICAgICAgICB0eXBlX2lkOiBiYXNlVHlwZUlkXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmICghcmVzLm9rKSByZXR1cm4gcmVzLmpzb24oKS50aGVuKGVyciA9PiB7IHRocm93IG5ldyBFcnJvcihlcnIuZXJyb3IgfHwgXCJBUEkgZXJyb3JcIikgfSk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoU2lkZWJhcigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFLDqS1pbml0aWFsaXNlciBsJ1VJIGRlIGJhc2UgcG91ciByw6ktYXR0YWNoZXIgbGVzIGxpc3RlbmVycyBhdXggbm91dmVhdXggYm91dG9uc1xyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgnLi9iYXNlLmpzJykudGhlbigoeyBpbml0QmFzZVVJIH0pID0+IGluaXRCYXNlVUkoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuKVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYmFzZXMnLCBcIkVycmV1ciBjcsOpYXRpb24gYmFzZVwiLCBlcnIpO1xyXG4gICAgICAgIHJlbW92ZUJhc2UoKTtcclxuICAgICAgICBhbGVydChcIkVycmV1ciBjcsOpYXRpb24gYmFzZSA6IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG4gICAgdXBkYXRlQmFzZURpc3BsYXkoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUkVNT1ZFIEJBU0VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gcmVtb3ZlQmFzZSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBiYXNlTWFya2VyICYmIG1hcC5yZW1vdmVMYXllcihiYXNlTWFya2VyKTtcclxuICAgIGJhc2VDaXJjbGUgJiYgbWFwLnJlbW92ZUxheWVyKGJhc2VDaXJjbGUpO1xyXG5cclxuICAgIGJhc2VNYXJrZXIgPSBudWxsO1xyXG4gICAgYmFzZUNpcmNsZSA9IG51bGw7XHJcbiAgICBiYXNlUG9zaXRpb24gPSBudWxsO1xyXG4gICAgYmFzZUNyZWF0ZWQgPSBmYWxzZTtcclxuICAgIHBsYWNpbmdCYXNlID0gZmFsc2U7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG59XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExPQUQgT1RIRVIgQkFTRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5sZXQgb3RoZXJCYXNlcyA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRPdGhlckJhc2UobGF0LCBsbmcsIHBzZXVkbywgZmFjdGlvbikge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShsbmcpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaXNQbGF5ZXJCYXNlID0gZmFjdGlvbiA9PT0gY3VycmVudFBsYXllckZhY3Rpb247XHJcblxyXG4gICAgLy8gVXRpbGlzZXIgZHJhd0Jhc2VDaXJjbGUgZGUgZHJhd09uTWFwLmpzXHJcbiAgICBjb25zdCBjaXJjbGUgPSBkcmF3QmFzZUNpcmNsZShgb3RoZXJfJHtsYXR9XyR7bG5nfWAsIGxhdCwgbG5nLCBmYWN0aW9uLCBpc1BsYXllckJhc2UpO1xyXG5cclxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbihtYXAuZ2V0Wm9vbSgpLCBmYWN0aW9uKTtcclxuXHJcbiAgICBsZXQgbWFya2VyID0gbnVsbDtcclxuXHJcbiAgICBpZiAoaWNvbikge1xyXG4gICAgICAgIG1hcmtlciA9IEwubWFya2VyKFtsYXQsIGxuZ10sIHsgaWNvbiB9KVxyXG4gICAgICAgICAgICAuYWRkVG8obWFwKVxyXG4gICAgICAgICAgICAuYmluZFBvcHVwKGDwn4+V77iPIEJhc2UgZGUgJHtwc2V1ZG99YCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3RoZXJCYXNlcy5wdXNoKHsgbGF0LCBsbmcsIHBzZXVkbywgbWFya2VyLCBjaXJjbGUsIGZhY3Rpb24gfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVQREFURSBPVEhFUiBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHVwZGF0ZU90aGVyQmFzZXMoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBjb25zdCB6b29tID0gbWFwLmdldFpvb20oKTtcclxuXHJcbiAgICBvdGhlckJhc2VzLmZvckVhY2goYmFzZSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbih6b29tLCBiYXNlLmZhY3Rpb24pO1xyXG5cclxuICAgICAgICBpZiAoIWljb24pIHtcclxuICAgICAgICAgICAgaWYgKGJhc2UubWFya2VyKSBtYXAucmVtb3ZlTGF5ZXIoYmFzZS5tYXJrZXIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWJhc2UubWFya2VyKSB7XHJcbiAgICAgICAgICAgIGJhc2UubWFya2VyID0gTC5tYXJrZXIoW2Jhc2UubGF0LCBiYXNlLmxuZ10sIHsgaWNvbiB9KVxyXG4gICAgICAgICAgICAgICAgLmFkZFRvKG1hcClcclxuICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAoYPCfj5XvuI8gQmFzZSBkZSAke2Jhc2UucHNldWRvfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hcC5oYXNMYXllcihiYXNlLm1hcmtlcikpIGJhc2UubWFya2VyLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgICAgIGJhc2UubWFya2VyLnNldEljb24oaWNvbik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTE9BRCBGUk9NIFNFUlZFUlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEJhc2VGcm9tU2VydmVyKGxhdCwgbG5nKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobGF0KSB8fCAhTnVtYmVyLmlzRmluaXRlKGxuZykpIHJldHVybjtcclxuXHJcbiAgICBiYXNlUG9zaXRpb24gPSBbbGF0LCBsbmddO1xyXG4gICAgYmFzZUNyZWF0ZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIFV0aWxpc2VyIGRyYXdCYXNlQ2lyY2xlIGRlIGRyYXdPbk1hcC5qcyAobm90cmUgYmFzZSA9IGlzUGxheWVyQmFzZSA9IHRydWUpXHJcbiAgICBiYXNlQ2lyY2xlID0gZHJhd0Jhc2VDaXJjbGUoJ3BsYXllcl9iYXNlJywgbGF0LCBsbmcsIGN1cnJlbnRQbGF5ZXJGYWN0aW9uLCB0cnVlKTtcclxuXHJcbiAgICB1cGRhdGVCYXNlRGlzcGxheSgpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVUERBVEUgQkFTRSBESVNQTEFZXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHVwZGF0ZUJhc2VEaXNwbGF5KCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghYmFzZVBvc2l0aW9uKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgaWNvbiA9IGNyZWF0ZUJhc2VJY29uKG1hcC5nZXRab29tKCksIGN1cnJlbnRQbGF5ZXJGYWN0aW9uKTtcclxuXHJcbiAgICBpZiAoIWljb24pIHtcclxuICAgICAgICBpZiAoYmFzZU1hcmtlcikgbWFwLnJlbW92ZUxheWVyKGJhc2VNYXJrZXIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJhc2VNYXJrZXIpIHtcclxuICAgICAgICBiYXNlTWFya2VyID0gTC5tYXJrZXIoYmFzZVBvc2l0aW9uLCB7IGljb24gfSkuYWRkVG8obWFwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFtYXAuaGFzTGF5ZXIoYmFzZU1hcmtlcikpIGJhc2VNYXJrZXIuYWRkVG8obWFwKTtcclxuICAgICAgICBiYXNlTWFya2VyLnNldEljb24oaWNvbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENSRUFURSBCQVNFIElDT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gY3JlYXRlQmFzZUljb24oem9vbSwgZmFjdGlvbikge1xyXG5cclxuICAgIGlmICh6b29tIDwgMTMpIHJldHVybiBudWxsO1xyXG5cclxuICAgIGNvbnN0IHNpemUgPSBmYWN0aW9uICE9PSAnbm9tYWRlcycgPyAoem9vbSA+IDE1ID8gMTAwIDogNzApIDogKHpvb20gPiAxNSA/IDc1IDogNjApO1xyXG5cclxuICAgIC8vIFRvdWpvdXJzIHV0aWxpc2VyIGwnaWPDtG5lIGRlIGxhIGZhY3Rpb24gKGxlIGZhbGxiYWNrIEFwYWNoZSBnw6hyZSBsZXMgNDA0KVxyXG4gICAgLy8gU2kgbCdpY8O0bmUgbidleGlzdGUgcGFzLCBBcGFjaGUgcmVkaXJpZ2UgdmVycyBkZWZhdWx0IGF1dG9tYXRpcXVlbWVudFxyXG4gICAgY29uc3QgaWNvblVybCA9IGdldEJ1aWxkaW5nSW1hZ2UoZmFjdGlvbiwgJ2Jhc2UnKTtcclxuXHJcbiAgICByZXR1cm4gTC5pY29uKHtcclxuICAgICAgICBpY29uVXJsOiBpY29uVXJsLFxyXG4gICAgICAgIGljb25TaXplOiBbc2l6ZSwgc2l6ZV0sXHJcbiAgICAgICAgaWNvbkFuY2hvcjogW3NpemUgLyAyLCBzaXplIC8gMl0sXHJcbiAgICAgICAgcG9wdXBBbmNob3I6IFswLCAtc2l6ZSAvIDJdXHJcbiAgICB9KTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IGdldEJ1aWxkaW5nQ29zdHMsIGJ1aWxkUmVxdWVzdCB9IGZyb20gJy4uL2FwaS5qcyc7XHJcbmltcG9ydCB7IGdldEJ1aWxkaW5nSW1hZ2UgfSBmcm9tICcuL2J1aWxkaW5nLmpzJztcclxuaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4uL25vdGlmaWNhdGlvbnMuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdXYXJuLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQlVJTEQgTU9ERSBTVEFURVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5sZXQgc2VsZWN0ZWRCdWlsZGluZ1R5cGUgPSBudWxsO1xyXG5sZXQgcHJldmlld0J1aWxkaW5nTWFya2VyID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXNlIGxlIG1vZGUgY29uc3RydWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJ1aWxkTW9kZSgpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIC8vIFV0aWxpc2VyIGxhIGTDqWzDqWdhdGlvbiBkJ8OpdsOpbmVtZW50cyBwb3VyIGxlcyBib3V0b25zIGR5bmFtaXF1ZXNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldC5jbG9zZXN0KCcuYnVpbGQtaXRlbScpO1xyXG4gICAgICAgIGlmICghYnRuKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHR5cGVJZCA9IGJ0bi5kYXRhc2V0LnR5cGVJZDtcclxuICAgICAgICBpZiAoIXR5cGVJZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBTw6lsZWN0aW9ubmVyIGxlIHR5cGUgZGUgYsOidGltZW50XHJcbiAgICAgICAgYXdhaXQgc2VsZWN0QnVpbGRpbmdUeXBlKHR5cGVJZCwgYnRuKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENsaWNrIHN1ciBsYSBjYXJ0ZSBwb3VyIGNvbnN0cnVpcmVcclxuICAgIG1hcC5vbignY2xpY2snLCBvbk1hcENsaWNrKTtcclxuXHJcbiAgICAvLyBNb3VzZSBtb3ZlIHBvdXIgcHLDqXZpc3VhbGlzZXJcclxuICAgIG1hcC5vbignbW91c2Vtb3ZlJywgb25NYXBNb3VzZU1vdmUpO1xyXG59XHJcblxyXG4vKipcclxuICogU8OpbGVjdGlvbm5lIHVuIHR5cGUgZGUgYsOidGltZW50IMOgIGNvbnN0cnVpcmVcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdEJ1aWxkaW5nVHlwZSh0eXBlSWQsIGJ1dHRvbikge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgLy8gRMOpc8OpbGVjdGlvbm5lciBwcsOpY8OpZGVtbWVudFxyXG4gICAgY2xlYXJCdWlsZGluZ1NlbGVjdGlvbigpO1xyXG5cclxuICAgIC8vIEfDqXJlciBsZSBjYXMgc3DDqWNpYWwgZGUgbGEgYmFzZSAoYm91dG9uICNiYXNlQnRuKVxyXG4gICAgaWYgKGJ1dHRvbi5pZCA9PT0gJ2Jhc2VCdG4nICYmIHR5cGVJZCA9PSAxKSB7XHJcbiAgICAgICAgLy8gTGEgYmFzZSBlc3QgZ8OpcsOpZSBwYXIgYmFzZS5qcywgb24gbmUgZmFpdCByaWVuIGljaVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXR0cmUgZW4gw6l2aWRlbmNlIGxlIGJvdXRvbiBzw6lsZWN0aW9ubsOpXHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuXHJcbiAgICAvLyBSw6ljdXDDqXJlciBsZXMgY2/Du3RzXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRCdWlsZGluZ0Nvc3RzKHR5cGVJZCk7XHJcbiAgICAgICAgc2VsZWN0ZWRCdWlsZGluZ1R5cGUgPSB7XHJcbiAgICAgICAgICAgIGlkOiB0eXBlSWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgY29zdHM6IGRhdGEuY29zdHMsXHJcbiAgICAgICAgICAgIGJ1dHRvbjogYnV0dG9uXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbihgU8OpbGVjdGlvbm7DqTogJHtkYXRhLm5hbWV9LiBDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgY29uc3RydWlyZS5gLCAnaW5mbycpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGNvw7t0c1wiLCBlKTtcclxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGNvw7t0c1wiLCAnZXJyb3InKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIE5ldHRvaWUgbGEgc8OpbGVjdGlvbiBhY3R1ZWxsZVxyXG4gKi9cclxuZnVuY3Rpb24gY2xlYXJCdWlsZGluZ1NlbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmIChwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0J1aWxkaW5nTWFya2VyKTtcclxuICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdGVkQnVpbGRpbmdUeXBlID0gbnVsbDtcclxuXHJcbiAgICAvLyBSZXRpcmVyIGxhIGNsYXNzZSBzZWxlY3RlZCBkZSB0b3VzIGxlcyBib3V0b25zXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnVpbGQtaXRlbScpLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogR2VzdGlvbiBkdSBjbGljayBzdXIgbGEgY2FydGVcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIG9uTWFwQ2xpY2soZSkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFzZWxlY3RlZEJ1aWxkaW5nVHlwZSkgcmV0dXJuO1xyXG4gICAgaWYgKCFwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBsYXQgPSBlLmxhdGxuZy5sYXQ7XHJcbiAgICBjb25zdCBsbmcgPSBlLmxhdGxuZy5sbmc7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJ1aWxkUmVxdWVzdChsYXQsIGxuZywgc2VsZWN0ZWRCdWlsZGluZ1R5cGUuaWQpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZygnYnVpbGRpbmdzJywgYCR7c2VsZWN0ZWRCdWlsZGluZ1R5cGUubmFtZX0gY29uc3RydWl0IGF2ZWMgc3VjY8OocyAhYCk7XHJcbiAgICAgICAgICAgIC8vIE5ldHRveWVyXHJcbiAgICAgICAgICAgIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3QnVpbGRpbmdNYXJrZXIpO1xyXG4gICAgICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBjbGVhckJ1aWxkaW5nU2VsZWN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSYWZyYcOuY2hpciBsYSBzaWRlYmFyIHNpIG7DqWNlc3NhaXJlXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnJlZnJlc2hTaWRlYmFyKSB7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoU2lkZWJhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgYEVycmV1cjogJHtkYXRhLmVycm9yfWApO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGRlIGxhIGNvbnN0cnVjdGlvblwiLCBlKTtcclxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwiRXJyZXVyIHLDqXNlYXUgbG9ycyBkZSBsYSBjb25zdHJ1Y3Rpb25cIiwgJ2Vycm9yJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcsOpdmlzdWFsaXNhdGlvbiBkZSBsYSBwb3NpdGlvbiBkZSBjb25zdHJ1Y3Rpb25cclxuICovXHJcbmZ1bmN0aW9uIG9uTWFwTW91c2VNb3ZlKGUpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghc2VsZWN0ZWRCdWlsZGluZ1R5cGUpIHtcclxuICAgICAgICAvLyBOZXR0b3llciBsZXMgbWFya2VycyBkZSBwcsOpdmlzdWFsaXNhdGlvblxyXG4gICAgICAgIGlmIChwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHtcclxuICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdCdWlsZGluZ01hcmtlcik7XHJcbiAgICAgICAgICAgIHByZXZpZXdCdWlsZGluZ01hcmtlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBam91dGVyIHVuIG1hcmtlciBkZSBwcsOpdmlzdWFsaXNhdGlvblxyXG4gICAgaWYgKCFwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHtcclxuICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBMLm1hcmtlcihbZS5sYXRsbmcubGF0LCBlLmxhdGxuZy5sbmddKS5hZGRUbyhtYXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIuc2V0TGF0TG5nKGUubGF0bG5nKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFjdGl2ZSBsZSBtb2RlIGNvbnN0cnVjdGlvbiBwb3VyIHVuIHR5cGUgZGUgYsOidGltZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVCdWlsZE1vZGUodHlwZUlkKSB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10eXBlLWlkPVwiJHt0eXBlSWR9XCJdYCk7XHJcbiAgICBpZiAoYnRuKSB7XHJcbiAgICAgICAgYnRuLmNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEw6lzYWN0aXZlIGxlIG1vZGUgY29uc3RydWN0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZUJ1aWxkTW9kZSgpIHtcclxuICAgIGNsZWFyQnVpbGRpbmdTZWxlY3Rpb24oKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFbDqXJpZmllIHNpIGxlIG1vZGUgY29uc3RydWN0aW9uIGVzdCBhY3RpZlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQnVpbGRNb2RlQWN0aXZlKCkge1xyXG4gICAgcmV0dXJuIHNlbGVjdGVkQnVpbGRpbmdUeXBlICE9PSBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogUmFmcmHDrmNoaXQgbGUgY29udGVudSBkZSBsYSBzaWRlYmFyXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFNpZGViYXIoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9zaWRlYmFyJyk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgICAgICAgICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCAndGV4dC9odG1sJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NpZGViYXIgPSBkb2MucXVlcnlTZWxlY3RvcignI3NpZGVCYXInKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdTaWRlYmFyKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZUJhcicpPy5yZXBsYWNlV2l0aChuZXdTaWRlYmFyKTtcclxuICAgICAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oJ1NpZGViYXIgYWN0dWFsaXPDqWUnLCAnaW5mbycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGxvcnMgZHUgcmFmcmHDrmNoaXNzZW1lbnQgZGUgbGEgc2lkZWJhclwiLCBlKTtcclxuICAgIH1cclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IGdldEJ1aWxkaW5nQ29zdHMsIHVwZ3JhZGVCdWlsZGluZywgZ2V0VXBncmFkZUluZm8gfSBmcm9tICcuLi9hcGkuanMnO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50UGxheWVyRmFjdGlvbiB9IGZyb20gJy4vYmFzZS5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG4vLyBDYWNoZSBkZXMgaW5mb3JtYXRpb25zIGRlIGLDonRpbWVudHNcclxubGV0IGJ1aWxkaW5nTWFya2VycyA9IG5ldyBNYXAoKTtcclxuXHJcbi8vIENhY2hlIGRlcyBwb3B1cHMgZMOpasOgIGNoYXJnw6lzXHJcbmxldCBwb3B1cENvbnRlbnRMb2FkZWQgPSBuZXcgU2V0KCk7XHJcblxyXG4vLyBJRCBkdSBqb3VhY3RpZiAodXRpbGlzw6kgcG91ciBmaWx0cmVyIGxlcyBiw6J0aW1lbnRzIFwiw6AgbW9pXCIpXHJcbmxldCBjdXJyZW50UGxheWVySWQgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIETDqWZpbml0IGwnSUQgZHUgam91ZXVyIGFjdGlmLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRQbGF5ZXJJZChpZCkge1xyXG4gICAgY3VycmVudFBsYXllcklkID0gaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXRvdXJuZSBsJ0lEIGR1IGpvdWV1ciBhY3RpZi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UGxheWVySWQoKSB7XHJcbiAgICByZXR1cm4gY3VycmVudFBsYXllcklkO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hhcmdlIGxlcyBiw6J0aW1lbnRzIHN1ciBsYSBjYXJ0ZSBhdmVjIGxldXJzIHBvcHVwcyBpbnRlcmFjdGlmc1xyXG4gKiBAcGFyYW0ge0FycmF5fSBidWlsZGluZ3MgLSBMaXN0ZSBkZXMgYsOidGltZW50cyDDoCBhZmZpY2hlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCdWlsZGluZ3NGcm9tRGF0YShidWlsZGluZ3MpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghbWFwKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignYnVpbGRpbmdzJywgXCJNYXAgbm90IGluaXRpYWxpemVkXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJ1aWxkaW5ncyB8fCAhQXJyYXkuaXNBcnJheShidWlsZGluZ3MpKSB7XHJcbiAgICAgICAgZGVidWdXYXJuKCdidWlsZGluZ3MnLCBcImxvYWRCdWlsZGluZ3NGcm9tRGF0YTogaW52YWxpZCBidWlsZGluZ3MgZGF0YVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRpbmdzLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgLy8gSWdub3JlciBsZXMgYmFzZXMgLSBlbGxlcyBzb250IGfDqXLDqWVzIHBhciBiYXNlLmpzXHJcbiAgICAgICAgaWYgKGIuY29kZSA9PT0gJ2Jhc2UnIHx8IGIudHlwZT8udG9Mb3dlckNhc2UoKSA9PT0gJ2Jhc2UnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGIubGF0KSB8fCAhTnVtYmVyLmlzRmluaXRlKGIubG5nKSkge1xyXG4gICAgICAgICAgICBkZWJ1Z1dhcm4oJ2J1aWxkaW5ncycsIFwi4p2MIEJ1aWxkaW5nIGlnbm9yw6kgKGNvb3JkIGludmFsaWRlKVwiLCBiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXRpbGlzZXIgbGEgZmFjdGlvbiBkdSBiw6J0aW1lbnQgKG91IGZhbGxiYWNrIHN1ciBsYSBmYWN0aW9uIGR1IGpvdWV1cilcclxuICAgICAgICBjb25zdCBidWlsZGluZ0ZhY3Rpb24gPSBiLmZhY3Rpb24gfHwgZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKTtcclxuXHJcbiAgICAgICAgLy8gQ3LDqWVyIGwnaWPDtG5lIGF2ZWMgbCdpbWFnZSBkdSBiw6J0aW1lbnRcclxuICAgICAgICBjb25zdCBpY29uID0gY3JlYXRlQnVpbGRpbmdJY29uKGIuY29kZSwgYnVpbGRpbmdGYWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gU3RvY2tlciBsZXMgZG9ubsOpZXMgZHUgYnVpbGRpbmcgcG91ciBhY2PDqHMgdWx0w6lyaWV1clxyXG4gICAgICAgIGNvbnN0IGJ1aWxkaW5nRGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6IGIuaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IGIudHlwZSxcclxuICAgICAgICAgICAgbGV2ZWw6IGIubGV2ZWwsXHJcbiAgICAgICAgICAgIGNvZGU6IGIuY29kZSxcclxuICAgICAgICAgICAgZmFjdGlvbjogYnVpbGRpbmdGYWN0aW9uLFxyXG4gICAgICAgICAgICBvd25lcklkOiBiLm93bmVySWQsXHJcbiAgICAgICAgICAgIGlzTWluZTogQm9vbGVhbihiLmlzTWluZSksXHJcbiAgICAgICAgICAgIHByb2R1Y3Rpb246IGIucHJvZHVjdGlvbiB8fCBudWxsLFxyXG4gICAgICAgICAgICByZXNvdXJjZV90eXBlOiBiLnJlc291cmNlX3R5cGUgfHwgbnVsbCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBDcsOpZXIgbGUgbWFya2VyIGF2ZWMgcG9wdXAgdmlkZSAoY2hhcmfDqSBhdSBtb21lbnQgZGUgbCdvdXZlcnR1cmUpXHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gTC5tYXJrZXIoW2IubGF0LCBiLmxuZ10sIHsgaWNvbiB9KVxyXG4gICAgICAgICAgICAuYWRkVG8obWFwKVxyXG4gICAgICAgICAgICAuYmluZFBvcHVwKGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nRGF0YSkpO1xyXG5cclxuICAgICAgICBidWlsZGluZ01hcmtlcnMuc2V0KGIuaWQsIHsgbWFya2VyLCBkYXRhOiBidWlsZGluZ0RhdGEgfSk7XHJcblxyXG4gICAgICAgIC8vIMOJY291dGVyIGwnb3V2ZXJ0dXJlIGRlIGxhIHBvcHVwIHBvdXIgY2hhcmdlciBsZSBjb250ZW51XHJcbiAgICAgICAgbWFya2VyLm9uKCdwb3B1cG9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZVBvcHVwT3BlbihidWlsZGluZ0RhdGEsIG1hcmtlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENlbnRyYWxpc2UgbGEgbG9naXF1ZSBwb3B1cFxyXG4gKi9cclxuZnVuY3Rpb24gaGFuZGxlUG9wdXBPcGVuKGJ1aWxkaW5nRGF0YSwgbWFya2VyKSB7XHJcbiAgICBpZiAoIWJ1aWxkaW5nRGF0YT8uaWQpIHJldHVybjtcclxuXHJcbiAgICBpZiAoIWlzT3duQnVpbGRpbmcoYnVpbGRpbmdEYXRhKSkge1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsb2FkVXBncmFkZUluZm9Bc3luYyhidWlsZGluZ0RhdGEuaWQsIG1hcmtlciwgYnVpbGRpbmdEYXRhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFbDqXJpZmllIHNpIGxlIGLDonRpbWVudCBhcHBhcnRpZW50IGF1IGpvdWV1ciBhY3RpZlxyXG4gKi9cclxuZnVuY3Rpb24gaXNPd25CdWlsZGluZyhidWlsZGluZykge1xyXG4gICAgcmV0dXJuIGJ1aWxkaW5nLmlzTWluZSA9PT0gdHJ1ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyw6llIHVuIHBvcHVwIHNpbXBsZSAoc3luY2hyb25lKVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmcpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1aWxkaW5nLXBvcHVwXCI+XHJcbiAgICAgICAgICAgIDxoMz4ke2J1aWxkaW5nLnR5cGUgfHwgJ0LDonRpbWVudCd9PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGFyZ2UgbGVzIGluZm9zIGQnYW3DqWxpb3JhdGlvbiBlbiBhcnJpw6hyZS1wbGFuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBsb2FkVXBncmFkZUluZm9Bc3luYyhidWlsZGluZ0lkLCBtYXJrZXIsIGJ1aWxkaW5nRGF0YSkge1xyXG4gICAgLy8gTmUgcGFzIGNoYXJnZXIgbGVzIGluZm9zIGQnYW3DqWxpb3JhdGlvbiBwb3VyIGxlcyBiw6J0aW1lbnRzIGVubmVtaXNcclxuICAgIGlmICghaXNPd25CdWlsZGluZyhidWlsZGluZ0RhdGEpKSB7XHJcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZ0RhdGEpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFidWlsZGluZ0lkKSB7XHJcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZ0RhdGEpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gw4l2aXRlciBkZSByZWNoYXJnZXIgc2kgZMOpasOgIGNoYXJnw6lcclxuICAgIGlmIChwb3B1cENvbnRlbnRMb2FkZWQuaGFzKGJ1aWxkaW5nSWQpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcG9wdXBDb250ZW50TG9hZGVkLmFkZChidWlsZGluZ0lkKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIENoYXJnZXIgZGlyZWN0ZW1lbnQgbGUgY29udGVudSBkdSBwb3B1cFxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2J1aWxkaW5ncy8ke2J1aWxkaW5nSWR9L3BvcHVwLWNvbnRlbnRgKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICAgICAgZGVidWdXYXJuKCdidWlsZGluZ3MnLCBgRXJyZXVyIEFQSSBwb3B1cC1jb250ZW50IChidWlsZGluZyAke2J1aWxkaW5nSWR9KTpgLCByZXMuc3RhdHVzKTtcclxuICAgICAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZ0RhdGEpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlcy50ZXh0KCk7XHJcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChodG1sKTtcclxuICAgICAgICBidWlsZGluZ01hcmtlcnMuc2V0KGJ1aWxkaW5nSWQsIHsgbWFya2VyLCBkYXRhOiBidWlsZGluZ0RhdGEgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGxvcnMgZHUgY2hhcmdlbWVudCBkdSBwb3B1cFwiLCBlKTtcclxuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nRGF0YSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2hhcmdlIGxlcyBiw6J0aW1lbnRzIGRlcHVpcyBsJ0FQSSAoZm9uY3Rpb24gZGUgY29tcGF0aWJpbGl0w6kpXHJcbiAqIEBkZXByZWNhdGVkIFV0aWxpc2VyIGxvYWRCdWlsZGluZ3NGcm9tRGF0YShkYXRhKSDDoCBsYSBwbGFjZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCdWlsZGluZ3MoKSB7XHJcbiAgICBmZXRjaCgnL2FwaS9tYXAtZGF0YScpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRCdWlsZGluZ3NGcm9tRGF0YShkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBjaGFyZ2VtZW50IGLDonRpbWVudHNcIiwgZXJyKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyw6llIHVuZSBpY8O0bmUgKG1hcmtlcikgcG91ciB1biBiw6J0aW1lbnQgYXZlYyBzb24gaW1hZ2Ugc3DDqWNpZmlxdWUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBidWlsZGluZ0NvZGUgLSBMZSBjb2RlIGR1IGLDonRpbWVudCAoZXg6IFwiYmFzZVwiLCBcImlyb25fbWluZVwiKS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGZhY3Rpb24gLSBMYSBmYWN0aW9uIGR1IGLDonRpbWVudCAob3B0aW9ubmVsLCBmYWxsYmFjayBzdXIgbGUgam91ZXVyIGFjdHVlbCkuXHJcbiAqIEByZXR1cm5zIHtMLkljb259IEwnaWPDtG5lIExlYWZsZXQgcGVyc29ubmFsaXPDqWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnVpbGRpbmdJY29uKGJ1aWxkaW5nQ29kZSwgZmFjdGlvbiA9IG51bGwpIHtcclxuICAgIGNvbnN0IGFjdHVhbEZhY3Rpb24gPSBmYWN0aW9uIHx8IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XHJcbiAgICBjb25zdCBzaXplID0gNzA7IC8vIFRhaWxsZSBwYXIgZMOpZmF1dCBkZXMgaWPDtG5lc1xyXG5cclxuICAgIHJldHVybiBMLmljb24oe1xyXG4gICAgICAgIGljb25Vcmw6IGdldEJ1aWxkaW5nSW1hZ2UoYWN0dWFsRmFjdGlvbiwgYnVpbGRpbmdDb2RlKSxcclxuICAgICAgICBpY29uU2l6ZTogW3NpemUsIHNpemVdLFxyXG4gICAgICAgIGljb25BbmNob3I6IFtzaXplIC8gMiwgc2l6ZSAvIDJdLFxyXG4gICAgICAgIHBvcHVwQW5jaG9yOiBbMCwgLXNpemUgLyAyXVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXRvdXJuZSBkeW5hbWlxdWVtZW50IGxlIGNoZW1pbiBkZSBsJ2ltYWdlIGF2ZWMgZmFsbGJhY2sgdmVycyBkZWZhdWx0LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZmFjdGlvbiAtIExlIGNvZGUgb3Ugbm9tIGRlIGxhIGZhY3Rpb24gKGV4OiBcIkVtcGlyZVwiLCBcIkNlbmRyZXNcIikuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBidWlsZGluZyAtIExlIGNvZGUgZHUgYsOidGltZW50IChleDogXCJiYXNlXCIsIFwiaXJvbl9taW5lXCIpLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBMZSBjaGVtaW4gZGUgbCdpY8O0bmUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVpbGRpbmdJbWFnZShmYWN0aW9uLCBidWlsZGluZykge1xyXG4gICAgLy8gTm9ybWFsaXNlciBsZSBub20gZHUgYnVpbGRpbmcgcG91ciBsJ2ltYWdlIChyZW1wbGFjZXIgZXNwYWNlcyBldCBjYXJhY3TDqHJlcyBzcMOpY2lhdXgpXHJcbiAgICBjb25zdCBidWlsZGluZ1NsdWcgPSBidWlsZGluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJ18nKS5yZXBsYWNlKC9bXmEtejAtOV9dL2csICcnKTtcclxuICAgIGNvbnN0IGZhY3Rpb25TbHVnID0gKGZhY3Rpb24gfHwgJ2RlZmF1bHQnKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIC8vIFRvdWpvdXJzIHV0aWxpc2VyIGwnaWPDtG5lIGRlIGxhIGZhY3Rpb24gZW4gcHJlbWllclxyXG4gICAgLy8gTGUgc2VydmV1ciBvdSBsZSBuYXZpZ2F0ZXVyIGfDqXJlcmEgbGUgZmFsbGJhY2sgc2kgbCdpY8O0bmUgbidleGlzdGUgcGFzXHJcbiAgICAvLyBTaSBsYSBmYWN0aW9uIGVzdCAnZGVmYXVsdCcsIHV0aWxpc2VyIGwnaWPDtG5lIGRlZmF1bHQgZGlyZWN0ZW1lbnRcclxuICAgIGlmIChmYWN0aW9uU2x1ZyA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgICAgcmV0dXJuIGAvYXNzZXRzL2ltYWdlcy9idWlsZGluZ3MvZGVmYXVsdC8ke2J1aWxkaW5nU2x1Z30ucG5nYDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYC9hc3NldHMvaW1hZ2VzL2J1aWxkaW5ncy8ke2ZhY3Rpb25TbHVnfS8ke2J1aWxkaW5nU2x1Z30ucG5nYDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFtw6lsaW9yZSB1biBiw6J0aW1lbnRcclxuICovXHJcbndpbmRvdy51cGdyYWRlQnVpbGRpbmcgPSBhc3luYyBmdW5jdGlvbihidWlsZGluZ0lkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdXBncmFkZUJ1aWxkaW5nKGJ1aWxkaW5nSWQpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAvLyBJbnZhbGlkZXIgbGUgY2FjaGUgcG91ciBmb3JjZXIgbGUgcmVjaGFyZ2VtZW50XHJcbiAgICAgICAgICAgIHBvcHVwQ29udGVudExvYWRlZC5kZWxldGUoYnVpbGRpbmdJZCk7XHJcblxyXG4gICAgICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsZSBtYXJxdWV1clxyXG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IGJ1aWxkaW5nTWFya2Vycy5nZXQoYnVpbGRpbmdJZCk7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgICAgICAgICAgZW50cnkuZGF0YS5sZXZlbCA9IGRhdGEubmV3TGV2ZWw7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBlbnRyeS5tYXJrZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGVudHJ5LmRhdGEpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZWNoYXJnZXIgbGVzIGluZm9zIGQnYW3DqWxpb3JhdGlvblxyXG4gICAgICAgICAgICAgICAgbG9hZFVwZ3JhZGVJbmZvQXN5bmMoYnVpbGRpbmdJZCwgbWFya2VyLCBlbnRyeS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGVydCgnQsOidGltZW50IGFtw6lsaW9yw6kgYXZlYyBzdWNjw6hzICEnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChcIkVycmV1cjogXCIgKyAoZGF0YS5lcnJvciB8fCBcIkltcG9zc2libGUgZCdhbcOpbGlvcmVyIGxlIGLDonRpbWVudFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2J1aWxkaW5ncycsIFwiRXJyZXVyIGxvcnMgZGUgbCdhbcOpbGlvcmF0aW9uXCIsIGUpO1xyXG4gICAgICAgIGFsZXJ0KFwiRXJyZXVyIHLDqXNlYXUgbG9ycyBkZSBsJ2Ftw6lsaW9yYXRpb25cIik7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0b3VybmUgbGVzIGluZm9ybWF0aW9ucyBzdXIgbGVzIGNvw7t0cyBkZSBjb25zdHJ1Y3Rpb24gZCd1biB0eXBlIGRlIGLDonRpbWVudFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJ1aWxkaW5nVHlwZUNvc3RzKGJ1aWxkaW5nVHlwZUlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QnVpbGRpbmdDb3N0cyhidWlsZGluZ1R5cGVJZCk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdidWlsZGluZ3MnLCBcIkVycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyBjb8O7dHNcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBWw6lyaWZpZSBzaSBsZSBqb3VldXIgcGV1dCBjb25zdHJ1aXJlIHVuIGLDonRpbWVudFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbkJ1aWxkQnVpbGRpbmcoYnVpbGRpbmdUeXBlSWQpIHtcclxuICAgIGNvbnN0IGNvc3RzID0gYXdhaXQgZ2V0QnVpbGRpbmdUeXBlQ29zdHMoYnVpbGRpbmdUeXBlSWQpO1xyXG4gICAgaWYgKCFjb3N0cykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcGxheWVyLXJlc291cmNlcycpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCByZXNvdXJjZXMgPSB7fTtcclxuICAgIGRhdGEucmVzb3VyY2VzLmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgcmVzb3VyY2VzW3IudHlwZV0gPSByLnF1YW50aXR5O1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBbcmVzb3VyY2UsIGFtb3VudF0gb2YgT2JqZWN0LmVudHJpZXMoY29zdHMuY29zdHMpKSB7XHJcbiAgICAgICAgaWYgKChyZXNvdXJjZXNbcmVzb3VyY2VdIHx8IDApIDwgYW1vdW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoQnVpbGRpbmdQb3B1cChidWlsZGluZ0lkKSB7XHJcbiAgICBjb25zdCBlbnRyeSA9IGJ1aWxkaW5nTWFya2Vycy5nZXQoYnVpbGRpbmdJZCk7XHJcblxyXG4gICAgaWYgKCFlbnRyeSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPcHRpb25uZWwgOiB1bmlxdWVtZW50IHNpIGxlIHBvcHVwIGVzdCBvdXZlcnRcclxuICAgIGlmICghZW50cnkubWFya2VyLmlzUG9wdXBPcGVuKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgbG9hZFVwZ3JhZGVJbmZvQXN5bmMoXHJcbiAgICAgICAgYnVpbGRpbmdJZCxcclxuICAgICAgICBlbnRyeS5tYXJrZXIsXHJcbiAgICAgICAgZW50cnkuZGF0YVxyXG4gICAgKTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IGRyYXdSb2FkU2VnbWVudCB9IGZyb20gJy4uL3VpL2RyYXdPbk1hcC5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICcuLi91dGlscy90aW1lci5qcyc7XHJcblxyXG4vLyBTdGF0ZVxyXG5jb25zdCBhY3RpdmVEZWxpdmVyaWVzID0gbmV3IE1hcCgpO1xyXG5sZXQgZGVsaXZlcnlMYXllciA9IG51bGw7XHJcbmxldCBhbmltYXRpb25GcmFtZSA9IG51bGw7XHJcbmNvbnN0IHBlbmRpbmdFdmVudHMgPSBbXTtcclxuXHJcbmNvbnN0IHRydWNrSWNvbiA9IEwuZGl2SWNvbih7XHJcbiAgICBjbGFzc05hbWU6ICcnLFxyXG4gICAgaHRtbDogJzxkaXYgc3R5bGU9XCJmb250LXNpemU6MThweFwiPvCfmpo8L2Rpdj4nLFxyXG4gICAgaWNvblNpemU6IFsyMCwgMjBdLFxyXG4gICAgaWNvbkFuY2hvcjogWzEwLCAxMF1cclxufSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJTklUXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0RGVsaXZlcnlFdmVudHMoKSB7XHJcbiAgICBpbml0RGVsaXZlcnlMYXllcnMoKTtcclxuICAgIGxvYWREZWxpdmVyaWVzKCk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZ2FtZTpldmVudCcsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGUuZGV0YWlsO1xyXG4gICAgICAgIGlmIChkYXRhLnR5cGUgIT09ICdkZWxpdmVyeV91cGRhdGUnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGhhbmRsZURlbGl2ZXJ5RXZlbnQoe1xyXG4gICAgICAgICAgICBkZWxpdmVyeUlkOiAgICBkYXRhLmRlbGl2ZXJ5SWQsXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nSWQ6ICAgIGRhdGEuYnVpbGRpbmdJZCxcclxuICAgICAgICAgICAgc3RhdHVzOiAgICAgICAgZGF0YS5zdGF0dXMsXHJcbiAgICAgICAgICAgIHByb2dyZXNzOiAgICAgIGRhdGEucHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgIHdheXBvaW50czogICAgIGRhdGEud2F5cG9pbnRzLFxyXG4gICAgICAgICAgICByZXNvdXJjZTogICAgICBkYXRhLnJlc291cmNlQ29kZSxcclxuICAgICAgICAgICAgcmVzb3VyY2VMYWJlbDogZGF0YS5yZXNvdXJjZUxhYmVsLFxyXG4gICAgICAgICAgICBxdWFudGl0eTogICAgICBkYXRhLnF1YW50aXR5LFxyXG4gICAgICAgICAgICBlc3RpbWF0ZWRUaW1lOiBkYXRhLmR1cmF0aW9uLFxyXG4gICAgICAgICAgICBzY2hlZHVsZWRBdDogICBkYXRhLnNjaGVkdWxlZEF0LFxyXG4gICAgICAgICAgICBmYWN0aW9uOiAgICAgICBkYXRhLmZhY3Rpb24gPz8gJ2RlZmF1bHQnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVQgTEFZRVJTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0RGVsaXZlcnlMYXllcnMoKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgaWYgKCFkZWxpdmVyeUxheWVyIHx8IGRlbGl2ZXJ5TGF5ZXIuX21hcCAhPT0gbWFwKSB7XHJcblxyXG4gICAgICAgIGlmIChkZWxpdmVyeUxheWVyKSB7XHJcbiAgICAgICAgICAgIGRlbGl2ZXJ5TGF5ZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWxpdmVyeUxheWVyID0gTC5sYXllckdyb3VwKCkuYWRkVG8obWFwKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxpdmVyeUxheWVyID0gTC5sYXllckdyb3VwKCkuYWRkVG8obWFwKTtcclxuXHJcbiAgICBzdGFydEFuaW1hdGlvbigpO1xyXG4gICAgXHJcbiAgICBwZW5kaW5nRXZlbnRzLmZvckVhY2gocHJvY2Vzc0RlbGl2ZXJ5RXZlbnQpO1xyXG4gICAgcGVuZGluZ0V2ZW50cy5sZW5ndGggPSAwO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDSEFSR0VSIGxlcyBsaXZyYWlzb25zIElOX1RSQU5TSVQgZGVwdWlzIGwnQVBJXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRGVsaXZlcmllcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9kZWxpdmVyaWVzL2luLXRyYW5zaXQnKTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSByZXR1cm47XHJcbiAgICAgICAgY29uc3QgZGVsaXZlcmllcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgZGVsaXZlcmllcy5mb3JFYWNoKGQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkZWxpdmVyeURhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBkZWxpdmVyeUlkOiAgICBkLmRlbGl2ZXJ5SWQsXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ0lkOiAgICBkLmJ1aWxkaW5nSWQsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICAgICAgICAnaW5fdHJhbnNpdCcsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzczogICAgICBkLnByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgc2NoZWR1bGVkQXQ6ICAgZC5zY2hlZHVsZWRBdCxcclxuICAgICAgICAgICAgICAgIGVzdGltYXRlZFRpbWU6IGQuZXN0aW1hdGVkVGltZSxcclxuICAgICAgICAgICAgICAgIHdheXBvaW50czogICAgIGQud2F5cG9pbnRzLFxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2U6ICAgICAgZC5yZXNvdXJjZSxcclxuICAgICAgICAgICAgICAgIHJlc291cmNlTGFiZWw6IGQucmVzb3VyY2VMYWJlbCxcclxuICAgICAgICAgICAgICAgIHF1YW50aXR5OiAgICAgIGQucXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICBmYWN0aW9uOiAgICAgICBkLmZhY3Rpb24gfHwgJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZygnZGVsaXZlcnknLCAnTG9hZGluZyBkZWxpdmVyeSBmcm9tIEFQSTonLCBkZWxpdmVyeURhdGEpO1xyXG4gICAgICAgICAgICBoYW5kbGVEZWxpdmVyeUV2ZW50KGRlbGl2ZXJ5RGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignZGVsaXZlcnknLCAnRmFpbGVkIHRvIGxvYWQgZGVsaXZlcmllczonLCBlKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSEFORExFIEVWRU5UXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVEZWxpdmVyeUV2ZW50KGRhdGEpIHtcclxuICAgIGlmICghZGVsaXZlcnlMYXllcikge1xyXG4gICAgICAgIHBlbmRpbmdFdmVudHMucHVzaChkYXRhKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwcm9jZXNzRGVsaXZlcnlFdmVudChkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0RlbGl2ZXJ5RXZlbnQoZGF0YSkge1xyXG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSAnZGVsaXZlcmVkJykge1xyXG4gICAgICAgIHJlbW92ZURlbGl2ZXJ5KGRhdGEuZGVsaXZlcnlJZCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEuc3RhdHVzID09PSAnaW5fdHJhbnNpdCcpIHtcclxuICAgICAgICB1cHNlcnREZWxpdmVyeShkYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBzZXJ0RGVsaXZlcnkoZGF0YSkge1xyXG4gICAgY29uc3Qga2V5ID0gZGF0YS5kZWxpdmVyeUlkO1xyXG4gICAgaWYgKCFrZXkpIHsgY29uc29sZS53YXJuKCdEZWxpdmVyeSBzYW5zIElEJywgZGF0YSk7IHJldHVybjsgfVxyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBsZXQgd2F5cG9pbnRzID0gZGF0YS53YXlwb2ludHM7XHJcbiAgICBpZiAodHlwZW9mIHdheXBvaW50cyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0cnkgeyB3YXlwb2ludHMgPSBKU09OLnBhcnNlKHdheXBvaW50cyk7IH0gY2F0Y2ggeyByZXR1cm47IH1cclxuICAgIH1cclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh3YXlwb2ludHMpIHx8IHdheXBvaW50cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBsYXRsbmdzID0gd2F5cG9pbnRzLm1hcCh3cCA9PiBbd3AubGF0LCB3cC5sbmddKTtcclxuICAgIGNvbnN0IGZhY3Rpb24gPSBkYXRhLmZhY3Rpb24gfHwgJ2RlZmF1bHQnO1xyXG5cclxuICAgIGlmIChhY3RpdmVEZWxpdmVyaWVzLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgY29uc3QgZGVsaXZlcnkgPSBhY3RpdmVEZWxpdmVyaWVzLmdldChrZXkpO1xyXG4gICAgICAgIGRlbGl2ZXJ5LndheXBvaW50cyAgICAgICAgICA9IGxhdGxuZ3M7XHJcbiAgICAgICAgZGVsaXZlcnkucHJvZ3Jlc3MgICAgICAgICAgID0gZGF0YS5wcm9ncmVzcyA/PyBkZWxpdmVyeS5wcm9ncmVzcztcclxuICAgICAgICBkZWxpdmVyeS5lc3RpbWF0ZWRUaW1lICAgICAgPSBkYXRhLmVzdGltYXRlZFRpbWU7XHJcbiAgICAgICAgZGVsaXZlcnkuc2NoZWR1bGVkQXQgICAgICAgID0gZGF0YS5zY2hlZHVsZWRBdCA/PyBkZWxpdmVyeS5zY2hlZHVsZWRBdDtcclxuICAgICAgICBkZWxpdmVyeS5sYXN0U2VydmVyUHJvZ3Jlc3MgPSBkYXRhLnByb2dyZXNzID8/IDA7XHJcbiAgICAgICAgZGVsaXZlcnkubGFzdFNlcnZlclRpbWUgICAgID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBkZWxpdmVyeS5mYWN0aW9uICAgICAgICAgICAgPSBmYWN0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwb2x5bGluZSA9IGRyYXdSb2FkU2VnbWVudChgZGVsaXZlcnktJHtrZXl9YCwgbGF0bG5ncywgZmFjdGlvbik7XHJcblxyXG4gICAgICAgIC8vIEZvcm1hdGVyIGwnaGV1cmUgZHUgZMOpcGFydCBwcsOpdnVcclxuICAgICAgICBjb25zdCBzY2hlZHVsZWRUaW1lID0gZGF0YS5zY2hlZHVsZWRBdCA/IGZvcm1hdERhdGUoZGF0YS5zY2hlZHVsZWRBdCkgOiAnSW5jb25udWUnO1xyXG5cclxuICAgICAgICBjb25zdCBtYXJrZXIgPSBMLm1hcmtlcihsYXRsbmdzWzBdLCB7IGljb246IHRydWNrSWNvbiB9KVxyXG4gICAgICAgICAgICAuYWRkVG8oZGVsaXZlcnlMYXllcilcclxuICAgICAgICAgICAgLmJpbmRQb3B1cChgXHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkNhbWlvbiBuwrAke2tleX08L3N0cm9uZz48YnI+XHJcbiAgICAgICAgICAgICAgICBUcmFuc3BvcnRlIDogJHtkYXRhLnF1YW50aXR5ID8/ICcnfSB1bml0w6lzIGRlIDxzdHJvbmc+JHtkYXRhLnJlc291cmNlTGFiZWwgPz8gJyd9PC9zdHJvbmc+PGJyPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWxpdmVyeS1wcm9ncmVzcy0ke2tleX1cIj5Qcm9ncmVzc2lvbiA6ICR7ZGF0YS5wcm9ncmVzcyA/PyAwfSU8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICBgKTtcclxuXHJcbiAgICAgICAgYWN0aXZlRGVsaXZlcmllcy5zZXQoa2V5LCB7XHJcbiAgICAgICAgICAgIG1hcmtlcixcclxuICAgICAgICAgICAgcG9seWxpbmUsXHJcbiAgICAgICAgICAgIHdheXBvaW50czogICAgICAgICAgbGF0bG5ncyxcclxuICAgICAgICAgICAgcHJvZ3Jlc3M6ICAgICAgICAgICBkYXRhLnByb2dyZXNzID8/IDAsXHJcbiAgICAgICAgICAgIGVzdGltYXRlZFRpbWU6ICAgICAgZGF0YS5lc3RpbWF0ZWRUaW1lID8/IDM2MDAsXHJcbiAgICAgICAgICAgIHNjaGVkdWxlZEF0OiAgICAgICAgZGF0YS5zY2hlZHVsZWRBdCA/PyBudWxsLFxyXG4gICAgICAgICAgICBsYXN0U2VydmVyUHJvZ3Jlc3M6IGRhdGEucHJvZ3Jlc3MgPz8gMCxcclxuICAgICAgICAgICAgbGFzdFNlcnZlclRpbWU6ICAgICBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICByZXNvdXJjZTogICAgICAgICAgIGRhdGEucmVzb3VyY2UsXHJcbiAgICAgICAgICAgIHJlc291cmNlTGFiZWw6ICAgICAgZGF0YS5yZXNvdXJjZUxhYmVsLFxyXG4gICAgICAgICAgICBxdWFudGl0eTogICAgICAgICAgIGRhdGEucXVhbnRpdHksXHJcbiAgICAgICAgICAgIGZhY3Rpb24sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZURlbGl2ZXJ5KGtleSkge1xyXG4gICAgY29uc3QgZGVsaXZlcnkgPSBhY3RpdmVEZWxpdmVyaWVzLmdldChrZXkpO1xyXG4gICAgaWYgKCFkZWxpdmVyeSkgcmV0dXJuO1xyXG4gICAgZGVsaXZlcnkubWFya2VyLnJlbW92ZSgpO1xyXG4gICAgZGVsaXZlcnkucG9seWxpbmUucmVtb3ZlKCk7XHJcbiAgICBhY3RpdmVEZWxpdmVyaWVzLmRlbGV0ZShrZXkpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBBTklNQVRJT04gTE9DQUxFIChyZXF1ZXN0QW5pbWF0aW9uRnJhbWUpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xyXG4gICAgaWYgKGFuaW1hdGlvbkZyYW1lKSByZXR1cm47XHJcblxyXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICBhY3RpdmVEZWxpdmVyaWVzLmZvckVhY2goKGRlbGl2ZXJ5LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGludGVycG9sYXRlZFByb2dyZXNzO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRlbGl2ZXJ5LnNjaGVkdWxlZEF0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyByw6lzaXN0YW50IGF1IHJlbG9hZCBkZSBwYWdlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShkZWxpdmVyeS5zY2hlZHVsZWRBdCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxhcHNlZCAgID0gKG5vdyAtIHN0YXJ0VGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkUHJvZ3Jlc3MgPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoMCwgKGVsYXBzZWQgLyBkZWxpdmVyeS5lc3RpbWF0ZWRUaW1lKSAqIDEwMClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmYWxsYmFjayBzaSBwYXMgZGUgc2NoZWR1bGVkQXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWRTaW5jZVNlcnZlciA9IChub3cgLSBkZWxpdmVyeS5sYXN0U2VydmVyVGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NQZXJTZWNvbmQgID0gMTAwIC8gZGVsaXZlcnkuZXN0aW1hdGVkVGltZTtcclxuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZFByb2dyZXNzID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGl2ZXJ5Lmxhc3RTZXJ2ZXJQcm9ncmVzcyArIChlbGFwc2VkU2luY2VTZXJ2ZXIgKiBwcm9ncmVzc1BlclNlY29uZClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IGludGVycG9sYXRlQWxvbmdSb3V0ZShkZWxpdmVyeS53YXlwb2ludHMsIGludGVycG9sYXRlZFByb2dyZXNzIC8gMTAwKTtcclxuICAgICAgICAgICAgaWYgKHBvcykgZGVsaXZlcnkubWFya2VyLnNldExhdExuZyhwb3MpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGVsaXZlcnktcHJvZ3Jlc3MtJHtrZXl9YCk7XHJcbiAgICAgICAgICAgIGlmIChlbCkgZWwudGV4dENvbnRlbnQgPSBgUHJvZ3Jlc3Npb24gOiAke01hdGgucm91bmQoaW50ZXJwb2xhdGVkUHJvZ3Jlc3MpfSVgO1xyXG5cclxuICAgICAgICAgICAgaWYgKGludGVycG9sYXRlZFByb2dyZXNzID49IDEwMCkgcmVtb3ZlRGVsaXZlcnkoa2V5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOVEVSUE9MQVRJT04gc3VyIGxhIHBvbHlsaWduZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFsb25nUm91dGUobGF0bG5ncywgdCkge1xyXG4gICAgaWYgKCFsYXRsbmdzIHx8IGxhdGxuZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcclxuICAgIGlmICh0IDw9IDApIHJldHVybiBsYXRsbmdzWzBdO1xyXG4gICAgaWYgKHQgPj0gMSkgcmV0dXJuIGxhdGxuZ3NbbGF0bG5ncy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBsZXQgdG90YWxEaXN0ID0gMDtcclxuICAgIGNvbnN0IHNlZ21lbnRzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxhdGxuZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBkID0gaGF2ZXJzaW5lKGxhdGxuZ3NbaSAtIDFdLCBsYXRsbmdzW2ldKTtcclxuICAgICAgICBzZWdtZW50cy5wdXNoKGQpO1xyXG4gICAgICAgIHRvdGFsRGlzdCArPSBkO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0YXJnZXQgPSB0b3RhbERpc3QgKiB0O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0YXJnZXQgPD0gc2VnbWVudHNbaV0pIHtcclxuICAgICAgICAgICAgY29uc3QgdSA9IHRhcmdldCAvIHNlZ21lbnRzW2ldO1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgbGF0bG5nc1tpXVswXSArIHUgKiAobGF0bG5nc1tpICsgMV1bMF0gLSBsYXRsbmdzW2ldWzBdKSxcclxuICAgICAgICAgICAgICAgIGxhdGxuZ3NbaV1bMV0gKyB1ICogKGxhdGxuZ3NbaSArIDFdWzFdIC0gbGF0bG5nc1tpXVsxXSksXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhcmdldCAtPSBzZWdtZW50c1tpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGF0bG5nc1tsYXRsbmdzLmxlbmd0aCAtIDFdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXZlcnNpbmUoYSwgYikge1xyXG4gICAgY29uc3QgUiA9IDYzNzEwMDA7XHJcbiAgICBjb25zdCBkTGF0ID0gKGJbMF0gLSBhWzBdKSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICBjb25zdCBkTG5nID0gKGJbMV0gLSBhWzFdKSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5zaW4oZExhdCAvIDIpICoqIDJcclxuICAgICAgICAgICAgKyBNYXRoLmNvcyhhWzBdICogTWF0aC5QSSAvIDE4MCkgKiBNYXRoLmNvcyhiWzBdICogTWF0aC5QSSAvIDE4MClcclxuICAgICAgICAgICAgKiBNYXRoLnNpbihkTG5nIC8gMikgKiogMjtcclxuICAgIHJldHVybiBSICogMiAqIE1hdGguYXRhbjIoTWF0aC5zcXJ0KHgpLCBNYXRoLnNxcnQoMSAtIHgpKTtcclxufSIsImltcG9ydCB7IGluaXRNYXAsIGxvYWRXb3JsZCB9IGZyb20gJy4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IGluaXRHUFMgfSBmcm9tICcuL3V0aWxzL2dwcy5qcyc7XHJcbmltcG9ydCB7IGluaXRCYXNlVUkgfSBmcm9tICcuL2J1aWxkaW5ncy9iYXNlLmpzJztcclxuaW1wb3J0IHsgaW5pdEJ1aWxkTW9kZSB9IGZyb20gJy4vYnVpbGRpbmdzL2J1aWxkTW9kZS5qcyc7XHJcbmltcG9ydCB7IGluaXROb3RpZmljYXRpb25zIH0gZnJvbSAnLi9ub3RpZmljYXRpb25zLmpzJztcclxuaW1wb3J0IHsgaW5pdEJ1aWxkaW5nVGltZXJzIH0gZnJvbSAnLi91dGlscy90aW1lci5qcyc7XHJcbmltcG9ydCB7IGluaXREZWxpdmVyeUV2ZW50cyB9IGZyb20gJy4vZGVsaXZlcnkvZGVsaXZlcnkuanMnO1xyXG5pbXBvcnQgeyBpbml0SW52ZW50b3J5RXZlbnRzIH0gZnJvbSAnLi9pbnZlbnRvcnkvaW52ZW50b3J5LmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2cgfSBmcm9tICcuLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cclxuICAgIGVuYWJsZUxlYWZsZXREZWJ1ZyhmYWxzZSk7XHJcblxyXG4gICAgaW5pdE1hcCg0Ni41Mzk3MiwgMi40MzAyOCk7XHJcblxyXG4gICAgaW5pdEJhc2VVSSgpO1xyXG4gICAgaW5pdEJ1aWxkTW9kZSgpO1xyXG4gICAgbG9hZFdvcmxkKCk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdwYWdlLWdhbWUnKTtcclxuXHJcbiAgICBpZiAod2luZG93LmN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICAgaW5pdE5vdGlmaWNhdGlvbnMoKTtcclxuICAgICAgICBpbml0RGVsaXZlcnlFdmVudHMoKTtcclxuICAgICAgICBpbml0SW52ZW50b3J5RXZlbnRzKCk7XHJcbiAgICAgICAgaW5pdEJ1aWxkaW5nVGltZXJzKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUxlYWZsZXREZWJ1ZyhkZWJ1ZyA9IGZhbHNlKSB7XHJcblxyXG4gICAgaWYgKCFkZWJ1ZykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG9yaWdpbmFsTWFya2VyID0gTC5tYXJrZXI7XHJcbiAgICBjb25zdCBvcmlnaW5hbENpcmNsZSA9IEwuY2lyY2xlO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxQb2x5bGluZSA9IEwucG9seWxpbmU7XHJcblxyXG4gICAgTC5tYXJrZXIgPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgIGRlYnVnTG9nKFwibGVhZmxldFwiLCBcIvCfp6ggTUFSS0VSIENBTEw6XCIsIGFyZ3MpO1xyXG4gICAgICAgIGRlYnVnTG9nKFwibGVhZmxldFwiLCBcIk1BUktFUiBTVEFDS1wiKTtcclxuICAgICAgICByZXR1cm4gb3JpZ2luYWxNYXJrZXIuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEwuY2lyY2xlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgICBkZWJ1Z0xvZyhcImxlYWZsZXRcIiwgXCLwn6eoIENJUkNMRSBDQUxMOlwiLCBhcmdzKTtcclxuICAgICAgICBkZWJ1Z0xvZyhcImxlYWZsZXRcIiwgXCJDSVJDTEUgU1RBQ0tcIik7XHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsQ2lyY2xlLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBMLnBvbHlsaW5lID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcclxuICAgICAgICBkZWJ1Z0xvZyhcImxlYWZsZXRcIiwgXCLwn6eoIFBPTFlMSU5FIENBTEw6XCIsIGFyZ3MpO1xyXG4gICAgICAgIGRlYnVnTG9nKFwibGVhZmxldFwiLCBcIlBPTFlMSU5FIFNUQUNLXCIpO1xyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFBvbHlsaW5lLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7IHJlZnJlc2hCdWlsZGluZ1BvcHVwIH0gZnJvbSAnLi4vYnVpbGRpbmdzL2J1aWxkaW5nLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVQg4oCUIHJlbXBsYWNlIGluaXRJbnZlbnRvcnlNZXJjdXJlXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0SW52ZW50b3J5RXZlbnRzKCkge1xyXG4gICAgaWYgKCF3aW5kb3cuY3VycmVudFVzZXIpIHtcclxuICAgICAgICBkZWJ1Z1dhcm4oJ2ludmVudG9yeScsICdBdWN1biB1dGlsaXNhdGV1ciBjb25uZWN0w6knKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZGVidWdMb2coJ2ludmVudG9yeScsICdpbml0SW52ZW50b3J5RXZlbnRzIGFwcGVsw6knKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdnYW1lOmV2ZW50JywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gZS5kZXRhaWw7XHJcbiAgICAgICAgaWYgKGRhdGEudHlwZSAhPT0gJ2ludmVudG9yeV91cGRhdGUnKSByZXR1cm47XHJcblxyXG4gICAgICAgIGRlYnVnTG9nKCdpbnZlbnRvcnknLCAnSW52ZW50YWlyZSBtaXMgw6Agam91cjonLCBkYXRhKTtcclxuICAgICAgICBoYW5kbGVJbnZlbnRvcnlVcGRhdGUoZGF0YSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSEFORExFIFVQREFURVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBoYW5kbGVJbnZlbnRvcnlVcGRhdGUoZGF0YSkge1xyXG4gICAgdXBkYXRlTmF2YmFyUmVzb3VyY2VzKGRhdGEucmVzb3VyY2VzID8/IGRhdGEpO1xyXG5cclxuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1aWxkaW5nLXBvcHVwJyk7XHJcbiAgICBpZiAocG9wdXApIHtcclxuICAgICAgICByZWZyZXNoQnVpbGRpbmdQb3B1cChwYXJzZUludChwb3B1cC5kYXRhc2V0LmJ1aWxkaW5nSWQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHYXJkZXIgbCdldmVudCBjdXN0b20gcG91ciBsZXMgYXV0cmVzIGNvbXBvc2FudHMgcXVpIMOpY291dGVudCBkw6lqw6BcclxuICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnaW52ZW50b3J5VXBkYXRlZCcsIHsgZGV0YWlsOiBkYXRhIH0pKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTkFWQkFSXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHVwZGF0ZU5hdmJhclJlc291cmNlcyhyZXNvdXJjZXMpIHtcclxuICAgIGlmICghcmVzb3VyY2VzKSByZXR1cm47XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc291cmNlLWl0ZW0nKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBpdGVtLmRhdGFzZXQucmVzb3VyY2VDb2RlO1xyXG4gICAgICAgIGlmIChyZXNvdXJjZXNbY29kZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBxdHlFbGVtZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcucmVzb3VyY2UtcXR5Jyk7XHJcbiAgICAgICAgICAgIGlmIChxdHlFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBxdHlFbGVtZW50LnRleHRDb250ZW50ID0gcmVzb3VyY2VzW2NvZGVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVQR1JBREUgUkVRVUlSRU1FTlRTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGNoZWNrVXBncmFkZVJlcXVpcmVtZW50cyhwb3B1cCwgcmVzb3VyY2VDb2RlLCBxdWFudGl0eSkge1xyXG4gICAgY29uc3QgcmVxdWlyZWRFbGVtZW50ID0gcG9wdXAucXVlcnlTZWxlY3RvcihgW2RhdGEtcmVxdWlyZWQtJHtyZXNvdXJjZUNvZGV9XWApO1xyXG4gICAgaWYgKCFyZXF1aXJlZEVsZW1lbnQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCByZXF1aXJlZCA9IHBhcnNlSW50KFxyXG4gICAgICAgIHJlcXVpcmVkRWxlbWVudC5nZXRBdHRyaWJ1dGUoYGRhdGEtcmVxdWlyZWQtJHtyZXNvdXJjZUNvZGV9YCkgfHwgJzAnXHJcbiAgICApO1xyXG5cclxuICAgIHJlcXVpcmVkRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCd0ZXh0LXN1Y2Nlc3MnLCBxdWFudGl0eSA+PSByZXF1aXJlZCk7XHJcbiAgICByZXF1aXJlZEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgndGV4dC1kYW5nZXInLCAgcXVhbnRpdHkgPCByZXF1aXJlZCk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWJ1Zy5qcyc7XHJcblxyXG5jb25zdCBkZXBvc2l0TWFya2VycyA9IG5ldyBNYXAoKTtcclxuXHJcbi8vIENhY2hlIGRlcyBwb3B1cHMgZMOpasOgIGNoYXJnw6lzXHJcbmNvbnN0IHBvcHVwQ29udGVudExvYWRlZCA9IG5ldyBTZXQoKTtcclxuXHJcbi8vIENhY2hlIGRlcyB0eXBlcyBkZSByZXNzb3VyY2VzXHJcbmxldCBidWlsZGluZ1R5cGVzQ2FjaGUgPSBudWxsO1xyXG5sZXQgcmVzb3VyY2VUeXBlc0NhY2hlID0gbnVsbDtcclxuXHJcbi8qKlxyXG4gKiBDaGFyZ2UgbGVzIHR5cGVzIGRlIHJlc3NvdXJjZXMgZGVwdWlzIGwnQVBJXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBsb2FkQnVpbGRpbmdUeXBlcygpIHtcclxuICAgIGlmIChidWlsZGluZ1R5cGVzQ2FjaGUpIHJldHVybiBidWlsZGluZ1R5cGVzQ2FjaGU7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2J1aWxkaW5nLXR5cGVzYCk7XHJcbiAgICAgICAgYnVpbGRpbmdUeXBlc0NhY2hlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBidWlsZGluZ1R5cGVzQ2FjaGU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIHR5cGVzIGRlIHJlc3NvdXJjZXNcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkUmVzb3VyY2VUeXBlcygpIHtcclxuICAgIGlmIChyZXNvdXJjZVR5cGVzQ2FjaGUpIHJldHVybiByZXNvdXJjZVR5cGVzQ2FjaGU7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3Jlc291cmNlLXR5cGVzYCk7XHJcbiAgICAgICAgcmVzb3VyY2VUeXBlc0NhY2hlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiByZXNvdXJjZVR5cGVzQ2FjaGU7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIHR5cGVzIGRlIHJlc3NvdXJjZXNcIiwgZSk7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBNYXBwaW5nIGRlcyBjb3VsZXVycyBwYXIgZMOpZmF1dFxyXG5jb25zdCBERUZBVUxUX0NPTE9SUyA9IHtcclxuICAgICdpcm9uJzogJyM3ZjhjOGQnLFxyXG4gICAgJ29pbCc6ICcjZjFjNDBmJyxcclxuICAgICdjb2FsJzogJyMyYzNlNTAnLFxyXG4gICAgJ3J1YmJlcic6ICcjMjdhZTYwJyxcclxuICAgICdiYXV4aXRlJzogJyNlNjdlMjInLFxyXG4gICAgJ3JhcmVfZWFydGgnOiAnIzhlNDRhZCdcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXRvdXJuZSBsYSBjb3VsZXVyIHBvdXIgdW4gdHlwZSBkZSByZXNzb3VyY2UgKHN5bmNocm9uZSAtIHV0aWxpc2UgbGUgY2FjaGUpXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZXNvdXJjZUNvbG9yKHR5cGUpIHtcclxuICAgIGlmIChyZXNvdXJjZVR5cGVzQ2FjaGUpIHJldHVybiAocmVzb3VyY2VUeXBlc0NhY2hlICYmIHJlc291cmNlVHlwZXNDYWNoZVt0eXBlXT8uY29sb3IpIHx8IERFRkFVTFRfQ09MT1JTW3R5cGVdIHx8ICcjZmZmZmZmJztcclxuXHJcbiAgICBsb2FkUmVzb3VyY2VUeXBlcygpO1xyXG5cclxuICAgIHJldHVybiAocmVzb3VyY2VUeXBlc0NhY2hlICYmIHJlc291cmNlVHlwZXNDYWNoZVt0eXBlXT8uY29sb3IpIHx8IERFRkFVTFRfQ09MT1JTW3R5cGVdIHx8ICcjZmZmZmZmJztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyb3V2ZSBsZSB0eXBlIGRlIGLDonRpbWVudCAobWluZSkgcG91ciB1bmUgcmVzc291cmNlIGRvbm7DqWVcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZShyZXNvdXJjZVR5cGUpIHtcclxuICAgIGNvbnN0IGJ1aWxkaW5nVHlwZXMgPSBhd2FpdCBsb2FkQnVpbGRpbmdUeXBlcygpO1xyXG5cclxuICAgIC8vIENoZXJjaGVyIHVuIGLDonRpbWVudCBxdWkgcHJvZHVpdCBjZXR0ZSByZXNzb3VyY2UgKHByb2R1Y3Rpb25fcmF0ZSA+IDApXHJcbiAgICBjb25zdCBidWlsZGluZ1R5cGUgPSBidWlsZGluZ1R5cGVzLmZpbmQoYnQgPT4ge1xyXG4gICAgICAgIHJldHVybiAoYnQucmVzb3VyY2VfdHlwZSA9PT0gcmVzb3VyY2VUeXBlIHx8IGJ0LnJlc291cmNlVHlwZT8uY29kZSA9PT0gcmVzb3VyY2VUeXBlKSAmJiBidC5wcm9kdWN0aW9uX3JhdGUgPiAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJ1aWxkaW5nVHlwZT8uaWQgfHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlcG9zaXRMYXllcnMgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXNlIGxlcyBjb3VjaGVzIGRlIGTDqXDDtHRzIGR5bmFtaXF1ZW1lbnRcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0RGVwb3NpdExheWVycyhtYXAsIGNvbnRyb2wpIHtcclxuICAgIGNvbnN0IHJlc291cmNlVHlwZXMgPSBhd2FpdCBsb2FkUmVzb3VyY2VUeXBlcygpO1xyXG5cclxuICAgIC8vIENyw6llciB1bmUgY291Y2hlIHBvdXIgY2hhcXVlIHR5cGUgZGUgcmVzc291cmNlIChzZXVsZW1lbnQgc2kgY29sb3IgZXhpc3RlKVxyXG4gICAgcmVzb3VyY2VUeXBlcy5mb3JFYWNoKHJ0ID0+IHtcclxuICAgICAgICBpZiAocnQuY29sb3IgJiYgcnQuY29sb3IubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBkZXBvc2l0TGF5ZXJzW3J0LmNvZGVdID0gTC5sYXllckdyb3VwKCk7XHJcbiAgICAgICAgICAgIGNvbnRyb2wuYWRkT3ZlcmxheShkZXBvc2l0TGF5ZXJzW3J0LmNvZGVdLCBgUmVzc291cmNlOiAke3J0LmxhYmVsfWApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZERlcG9zaXRzRm9yQ2h1bmsoY2h1bmtJZCwgbWFwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvZGVwb3NpdHMvJHtjaHVua0lkfWApO1xyXG4gICAgICAgIGNvbnN0IGRlcG9zaXRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoZGVwb3NpdHMsIG1hcCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiRXJyZXVyIGNoYXJnZW1lbnQgZMOpcMO0dHM6XCIsIGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb3JtYXRlIGxlcyBjb8O7dHMgc291cyBmb3JtZSBkZSBjaGHDrm5lIGxpc2libGVcclxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvc3RzIC0gRXg6IFt7Y29kZTogXCJpcm9uX2luZ290XCIsIGxhYmVsOiBcIkZlclwiLCBxdWFudGl0eTogMjV9XSBvdSB7aXJvbl9pbmdvdDogMjV9XHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gRXg6IFwiMjUgRmVyLCAxNSBDYW91dGNob3VjXCJcclxuICovXHJcbmZ1bmN0aW9uIGZvcm1hdENvc3RzKGNvc3RzKSB7XHJcbiAgICBpZiAoIWNvc3RzKSByZXR1cm4gJ04vQSc7XHJcblxyXG4gICAgLy8gTm91dmVhdSBmb3JtYXQ6IGFycmF5IGQnb2JqZXRzIGF2ZWMgY29kZSwgbGFiZWwsIHF1YW50aXR5XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb3N0cykpIHtcclxuICAgICAgICByZXR1cm4gY29zdHMubWFwKGMgPT4gYCR7Yy5xdWFudGl0eX0gJHtjLmxhYmVsfWApLmpvaW4oJywgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQW5jaWVuIGZvcm1hdDogb2JqZXQge2NvZGU6IHF1YW50aXR5fVxyXG4gICAgaWYgKHR5cGVvZiBjb3N0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY29zdHMpXHJcbiAgICAgICAgICAgIC5tYXAoKFtyZXNvdXJjZSwgYW1vdW50XSkgPT4gYCR7YW1vdW50fSAke3Jlc291cmNlfWApXHJcbiAgICAgICAgICAgIC5qb2luKCcsICcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAnTi9BJztcclxufVxyXG5cclxuLyoqXHJcbiAqIFbDqXJpZmllIHNpIGxlIGpvdWV1ciBhIGFzc2V6IGRlIHJlc3NvdXJjZXMgcG91ciB1biBkw6lww7R0XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBjaGVja0NhbkNsYWltKGRlcG9zaXQpIHtcclxuICAgIGNvbnN0IGNvc3RzID0gZGVwb3NpdC5jb3N0cztcclxuICAgIGlmICghY29zdHMgfHwgT2JqZWN0LmtleXMoY29zdHMpLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIC8vIFBvdXIgY2hhcXVlIGNvw7t0LCB2w6lyaWZpZXIgc2kgbGUgam91ZXVyIGEgYXNzZXpcclxuICAgIGZvciAoY29uc3QgW3Jlc291cmNlLCBhbW91bnRdIG9mIE9iamVjdC5lbnRyaWVzKGNvc3RzKSkge1xyXG4gICAgICAgIC8vIEljaSBvbiBwb3VycmFpdCBmYWlyZSB1biBhcHBlbCBBUEkgdmVycyAvYXBpL3BsYXllci1yZXNvdXJjZXNcclxuICAgICAgICAvLyBvdSB1dGlsaXNlciBsZXMgZG9ubsOpZXMgZMOpasOgIGNoYXJnw6llc1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcGxheWVyLXJlc291cmNlcycpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyUmVzb3VyY2VzID0ge307XHJcbiAgICAgICAgZGF0YS5yZXNvdXJjZXMuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgcGxheWVyUmVzb3VyY2VzW3IudHlwZV0gPSByLnF1YW50aXR5O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBoYXMgPSBwbGF5ZXJSZXNvdXJjZXNbcmVzb3VyY2VdID8/IDA7XHJcbiAgICAgICAgaWYgKGhhcyA8IGFtb3VudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcsOpZSB1biBwb3B1cCBzaW1wbGUgKHN5bmNocm9uZSlcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVNpbXBsZVBvcHVwKGRlcG9zaXQpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRlcG9zaXQtcG9wdXBcIj5cclxuICAgICAgICAgICAgPGgzPiR7ZGVwb3NpdC50eXBlIHx8ICdEw6lww7R0IGRlIHJlc291cmNlJ308L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoYXJnZSBsZXMgaW5mb3MgZGVzIGTDqXDDtHRzIGVuIGFycmnDqHJlLXBsYW5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWREZXBvc2l0SW5mb0FzeW5jKGRlcG9zaXRzSUQsIG1hcmtlciwgZGVwb3NpdERhdGEpIHtcclxuICAgIC8vIMOJdml0ZXIgZGUgcmVjaGFyZ2VyIHNpIGTDqWrDoCBjaGFyZ8OpXHJcbiAgICBpZiAocG9wdXBDb250ZW50TG9hZGVkLmhhcyhkZXBvc2l0c0lEKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBvcHVwQ29udGVudExvYWRlZC5hZGQoZGVwb3NpdHNJRCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBDaGFyZ2VyIGRpcmVjdGVtZW50IGxlIGNvbnRlbnUgZHUgcG9wdXBcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9kZXBvc2l0LyR7ZGVwb3NpdHNJRH0vcG9wdXAtY29udGVudGApO1xyXG5cclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICBkZWJ1Z1dhcm4oJ2RlcG9zaXRzJywgYEVycmV1ciBBUEkgcG9wdXAtY29udGVudCAoZGVwb3NpdCAke2RlcG9zaXRzSUR9KTpgLCByZXMuc3RhdHVzKTtcclxuICAgICAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChkZXBvc2l0RGF0YSkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVzLnRleHQoKTtcclxuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGh0bWwpO1xyXG4gICAgICAgIGRlcG9zaXRNYXJrZXJzLnNldChkZXBvc2l0c0lELCB7IG1hcmtlciwgZGF0YTogZGVwb3NpdERhdGEgfSk7XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRlYnVnRXJyb3IoJ2RlcG9zaXRzJywgXCJFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGR1IHBvcHVwXCIsIGUpO1xyXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoZGVwb3NpdERhdGEpKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbmR1IGRlcyBkw6lww7R0cyBzdXIgbGEgY2FydGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGRlcG9zaXRzLCBtYXApIHtcclxuICAgIGRlcG9zaXRzLmZvckVhY2goZGVwb3NpdCA9PiB7XHJcbiAgICAgICAgaWYgKGRlcG9zaXRNYXJrZXJzLmhhcyhkZXBvc2l0LmlkKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB0eXBlID0gZGVwb3NpdC5yZXNvdXJjZV90eXBlO1xyXG4gICAgICAgIGNvbnN0IGxheWVyID0gZGVwb3NpdExheWVyc1t0eXBlXTtcclxuXHJcbiAgICAgICAgaWYgKCFsYXllcikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjb2xvciA9IGdldFJlc291cmNlQ29sb3IodHlwZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IEwuY2lyY2xlTWFya2VyKFtkZXBvc2l0LmxhdGl0dWRlLCBkZXBvc2l0LmxvbmdpdHVkZV0sIHtcclxuICAgICAgICAgICAgcmFkaXVzOiA4LFxyXG4gICAgICAgICAgICBmaWxsQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgICAgICAgIHdlaWdodDogMSxcclxuICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuOFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmFkZFRvKGxheWVyKVxyXG4gICAgICAgIC5iaW5kUG9wdXAoY3JlYXRlU2ltcGxlUG9wdXAoZGVwb3NpdCkpO1xyXG5cclxuICAgICAgICAvLyBDaGFyZ2VyIGxlIGNvbnRlbnUgZGUgbGEgcG9wdXAgdW5pcXVlbWVudCBxdWFuZCBlbGxlIGVzdCBvdXZlcnRlXHJcbiAgICAgICAgaWYgKGRlcG9zaXQuaWQpIHtcclxuICAgICAgICAgICAgbWFya2VyLm9uKCdwb3B1cG9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkRGVwb3NpdEluZm9Bc3luYyhkZXBvc2l0LmlkLCBtYXJrZXIsIGRlcG9zaXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBlcm1ldCBkJ2V4cGxvaXRlciB1biBkw6lww7R0IGRlcHVpcyBsYSBwb3B1cFxyXG4gKi9cclxud2luZG93LmNsYWltRGVwb3NpdCA9IGFzeW5jIGZ1bmN0aW9uKGlkLCByZXNvdXJjZVR5cGUpIHtcclxuICAgIC8vIFRyb3V2ZXIgbGUgdHlwZSBkZSBiw6J0aW1lbnQgYXBwcm9wcmnDqVxyXG4gICAgY29uc3QgYnVpbGRpbmdUeXBlSWQgPSBhd2FpdCBmaW5kQnVpbGRpbmdUeXBlRm9yUmVzb3VyY2UocmVzb3VyY2VUeXBlKTtcclxuXHJcbiAgICBpZiAoIWJ1aWxkaW5nVHlwZUlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KGBJbXBvc3NpYmxlIGRlIHRyb3V2ZXIgdW4gYsOidGltZW50IHBvdXIgZXh0cmFpcmUgbGUgJHtyZXNvdXJjZVR5cGV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29uc3RydWlyZSBkaXJlY3RlbWVudCBsZSBiw6J0aW1lbnQgc3VyIGxlcyBjb29yZG9ubsOpZXMgZHUgZMOpcMO0dFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2J1aWxkJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGxhdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxuZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIHR5cGVfaWQ6IGJ1aWxkaW5nVHlwZUlkLFxyXG4gICAgICAgICAgICAgICAgZGVwb3NpdF9pZDogaWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgIGxldCBkYXRhO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgfSBjYXRjaCAocGFyc2VFcnJvcikge1xyXG4gICAgICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiUsOpcG9uc2Ugbm9uLUpTT04gcmXDp3VlOlwiLCByZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSw6lwb25zZSBpbnZhbGlkZSBkdSBzZXJ2ZXVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGRlYnVnTG9nKCdkZXBvc2l0cycsICdEw6lww7R0IGV4cGxvaXTDqSBhdmVjIHN1Y2PDqHMgISBCw6J0aW1lbnQgY3LDqcOpLicpO1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkZWJ1Z0Vycm9yKCdkZXBvc2l0cycsIFwiRXJyZXVyOiBcIiArIChkYXRhLmVycm9yIHx8IFwiSW1wb3NzaWJsZSBkJ2V4cGxvaXRlciBjZSBkw6lww7R0XCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGVidWdFcnJvcignZGVwb3NpdHMnLCBcIkVycmV1ciBsb3JzIGRlIGwnZXhwbG9pdGF0aW9uXCIsIGUpO1xyXG4gICAgICAgIGFsZXJ0KFwiRXJyZXVyIHLDqXNlYXUgbG9ycyBkZSBsJ2V4cGxvaXRhdGlvbjogXCIgKyBlLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xuXG5sZXQgZm9nTGF5ZXIgPSBudWxsO1xubGV0IHZpc2lvblNvdXJjZXMgPSBbXTtcbmxldCBmb2dNb2RlID0gJ2Rpc2FibGVkJztcbmxldCBtYXBJbnN0YW5jZSA9IG51bGw7XG5cbmNsYXNzIEZvZ09mV2FyIHtcbiAgICBjb25zdHJ1Y3RvcihtYXApIHtcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5pbml0Q2FudmFzKCk7XG4gICAgICAgIHRoaXMudmlzaW9uU291cmNlcyA9IFtdO1xuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0Q2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuekluZGV4ID0gJzUwMCc7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5tYXAuZ2V0Q29udGFpbmVyKCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgaWYgKCFjdHgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2FudmFzIGNvbnRleHQgdW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjdHg7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5tYXAub24oJ21vdmUgem9vbSByZXNpemUgbW92ZWVuZCB6b29tZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKHRoaXMudmlzaW9uU291cmNlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMubWFwLmdldFNpemUoKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBzaXplLng7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHNpemUueTtcblxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IGAke3NpemUueH1weGA7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke3NpemUueX1weGA7XG4gICAgfVxuXG4gICAgdXBkYXRlU291cmNlcyhzb3VyY2VzKSB7XG4gICAgICAgIHRoaXMudmlzaW9uU291cmNlcyA9IHNvdXJjZXM7XG4gICAgICAgIHRoaXMucmVuZGVyKHNvdXJjZXMpO1xuICAgIH1cblxuICAgIHJlbmRlcihzb3VyY2VzKSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLm1hcC5nZXRTaXplKCk7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgc2l6ZS54LCBzaXplLnkpO1xuXG4gICAgICAgIC8vIEJyb3VpbGxhcmRcbiAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwwLjc1KSc7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBzaXplLngsIHNpemUueSk7XG5cbiAgICAgICAgLy8gRMOpY291cGUgZGVzIHpvbmVzIHZpc2libGVzXG4gICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcblxuICAgICAgICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgICAgICAgICBjb25zdCBjZW50ZXIgPSBMLmxhdExuZyhzb3VyY2UubGF0LCBzb3VyY2UubG5nKTtcblxuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSB0aGlzLm1hcC5sYXRMbmdUb0NvbnRhaW5lclBvaW50KGNlbnRlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGVkZ2UgPSBMLmxhdExuZyhzb3VyY2UubGF0LCBzb3VyY2UubG5nICsgc291cmNlLnJhZGl1cyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJhZGl1c1B4ID0gcG9pbnQuZGlzdGFuY2VUbyh0aGlzLm1hcC5sYXRMbmdUb0NvbnRhaW5lclBvaW50KGVkZ2UpKTtcblxuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQocG9pbnQueCwgcG9pbnQueSwgMCwgcG9pbnQueCwgcG9pbnQueSwgcmFkaXVzUHgpO1xuXG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMCwwLDAsMSknKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgwLDAsMCwwKScpO1xuXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG5cbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5hcmMocG9pbnQueCwgcG9pbnQueSwgcmFkaXVzUHgsIDAsIE1hdGguUEkgKiAyKTtcblxuICAgICAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICAgICAgLy8gRGVidWdcbiAgICAgICAgICAgIGlmIChmb2dNb2RlID09PSAnZGVidWcnKSB7XG4gICAgICAgICAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG5cbiAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LmFyYyhwb2ludC54LCBwb2ludC55LCByYWRpdXNQeCwgMCwgTWF0aC5QSSAqIDIpO1xuXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2xpbWUnO1xuICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH1cbn1cblxubGV0IGZvZ0luc3RhbmNlID0gbnVsbDtcblxuLyoqXG4gKiBJbml0aWFsaXNlIGxlIGJyb3VpbGxhcmQgZGUgZ3VlcnJlXG4gKiBAcGFyYW0ge3N0cmluZ30gbW9kZSAtIE1vZGUgZGUgYnJvdWlsbGFyZCAoJ2VuYWJsZWQnLCAnZGlzYWJsZWQnLCAnZGVidWcnKVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlcyAtIFNvdXJjZXMgZGUgdmlzaW9uXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIC0gSW5zdGFuY2UgTGVhZmxldFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdEZvZ09mV2FyKG1vZGUsIHNvdXJjZXMsIG1hcCkge1xuICAgIGZvZ01vZGUgPSBtb2RlIHx8ICdkaXNhYmxlZCc7XG5cbiAgICBpZiAoIWZvZ0luc3RhbmNlICYmIGZvZ01vZGUgIT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgZm9nSW5zdGFuY2UgPSBuZXcgRm9nT2ZXYXIobWFwKTtcbiAgICB9XG5cbiAgICBpZiAoIWZvZ0luc3RhbmNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZm9nTW9kZSA9PT0gJ2Rpc2FibGVkJykge1xuICAgICAgICBmb2dJbnN0YW5jZS5jYW52YXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvZ0luc3RhbmNlLmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBmb2dJbnN0YW5jZS51cGRhdGVTb3VyY2VzKHNvdXJjZXMpO1xufVxuXG4vKipcbiAqIFbDqXJpZmllIHNpIHVuIHBvaW50IGVzdCB2aXNpYmxlXG4gKiBAcGFyYW0ge251bWJlcn0gbGF0XG4gKiBAcGFyYW0ge251bWJlcn0gbG5nXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUG9pbnRWaXNpYmxlKGxhdCwgbG5nKSB7XG4gICAgaWYgKGZvZ01vZGUgPT09ICdkaXNhYmxlZCcgfHwgZm9nTW9kZSA9PT0gJ2RlYnVnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzb3VyY2VzID0gZm9nSW5zdGFuY2U/LnZpc2lvblNvdXJjZXMgfHwgW107XG4gICAgcmV0dXJuIHNvdXJjZXMuc29tZShzb3VyY2UgPT4ge1xuICAgICAgICBjb25zdCBkeCA9IGxhdCAtIHNvdXJjZS5sYXQ7XG4gICAgICAgIGNvbnN0IGR5ID0gbG5nIC0gc291cmNlLmxuZztcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICByZXR1cm4gZGlzdGFuY2UgPD0gc291cmNlLnJhZGl1cztcbiAgICB9KTtcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcblxyXG5pbXBvcnQgeyBncmlkTGF5ZXIsIGluaXRHcmlkTGF5ZXIgfSBmcm9tICcuLi9MYXllcnMvZ3JpZExheWVyLmpzJztcclxuaW1wb3J0IHsgbG9hZFZpc2libGVSb2FkQ2h1bmtzIH0gZnJvbSAnLi9yb2Fkcy9yb2Fkcy5qcyc7XHJcbmltcG9ydCB7IHJvYWRzU3RhdGUgfSBmcm9tICcuL3JvYWRzL3JvYWRzU3RhdGUuanMnO1xyXG5cclxuaW1wb3J0IHsgbG9hZEJhc2VGcm9tU2VydmVyLCBsb2FkT3RoZXJCYXNlLCBzZXRDdXJyZW50UGxheWVyRmFjdGlvbiB9IGZyb20gJy4uL2J1aWxkaW5ncy9iYXNlLmpzJztcclxuaW1wb3J0IHsgbG9hZEJ1aWxkaW5nc0Zyb21EYXRhLCBzZXRDdXJyZW50UGxheWVySWQgfSBmcm9tICcuLi9idWlsZGluZ3MvYnVpbGRpbmcuanMnO1xyXG5cclxuaW1wb3J0IHsgaW5pdERlcG9zaXRMYXllcnMsIGRlcG9zaXRMYXllcnMgfSBmcm9tICcuL2RlcG9zaXRzL2RlcG9zaXRzLmpzJztcclxuaW1wb3J0IHsgaW5pdEZvZ09mV2FyIH0gZnJvbSAnLi9mb2dPZldhci5qcyc7XHJcbmltcG9ydCB7IGluaXRab25lRGVidWdQYW5lbCB9IGZyb20gJy4vcm9hZHMvem9uZURlYnVnUGFuZWwuanMnO1xyXG5pbXBvcnQgeyBpbml0V29ybGRFeHBhbnNpb25Qcm9ncmVzc1BhbmVsIH0gZnJvbSAnLi93b3JsZEV4cGFuc2lvblByb2dyZXNzUGFuZWwuanMnO1xyXG5pbXBvcnQgeyBzeW5jS25vd25ab25lcyB9IGZyb20gJy4vcm9hZHMvem9uZVN5bmMuanMnO1xyXG5pbXBvcnQgeyByb2Fkc0xheWVyIH0gZnJvbSAnLi9yb2Fkcy9yb2Fkc0xheWVyLmpzJztcclxuXHJcbmltcG9ydCBtYXJrZXJJY29uIGZyb20gJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24ucG5nJztcclxuaW1wb3J0IG1hcmtlclNoYWRvdyBmcm9tICdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1zaGFkb3cucG5nJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnV2FybiwgZGVidWdFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuXHJcbkwuTWFya2VyLnByb3RvdHlwZS5vcHRpb25zLmljb24gPSBMLmljb24oe1xyXG4gICAgaWNvblVybDogbWFya2VySWNvbixcclxuICAgIHNoYWRvd1VybDogbWFya2VyU2hhZG93LFxyXG59KTtcclxuXHJcbmxldCBtYXBJbnN0YW5jZSA9IG51bGw7XHJcbmxldCBtb3ZlVGltZW91dCA9IG51bGw7XHJcbmxldCBpc0NodW5rTW9kZSA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRNYXAobGF0LCBsbmcpIHtcclxuXHJcbiAgICBtYXBJbnN0YW5jZSA9IEwubWFwKCdtYXAnKS5zZXRWaWV3KFtsYXQsIGxuZ10sIDcpO1xyXG5cclxuICAgIEwudGlsZUxheWVyKCdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsIHtcclxuICAgICAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyBPcGVuU3RyZWV0TWFwJ1xyXG4gICAgfSkuYWRkVG8obWFwSW5zdGFuY2UpO1xyXG5cclxuICAgIC8vIMOJdsOpbmVtZW50IHBlcnNvbm5hbGlzw6kgcG91ciBzaWduYWxlciBxdWUgbGEgY2FydGUgZXN0IHByw6p0ZVxyXG4gICAgbWFwSW5zdGFuY2UuZmlyZSgnbWFwUmVhZHknKTtcclxuXHJcbiAgICAvLyBMZXMgY291Y2hlcyBhZG1pbiAocm91dGVzIHBvc3PDqWTDqWVzICsgY2h1bmsgZ3JpZCkgbmUgc29udCB2aXNpYmxlcyBxdWUgcG91ciBsZXMgYWRtaW5zXHJcbiAgICBjb25zdCBpc0FkbWluID0gd2luZG93LklTX0FETUlOID09PSB0cnVlO1xyXG5cclxuICAgIGlmIChpc0FkbWluKSB7XHJcbiAgICAgICAgcm9hZHNMYXllci5hZGRUbyhtYXBJbnN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ291Y2hlcyBkZSBiYXNlIDogZMOpcMO0dHMgKHZpc2libGVzIHBvdXIgdG91dCBsZSBtb25kZSkgKyBjaHVuayBncmlkIChhZG1pbiBzZXVsZW1lbnQpXHJcbiAgICBjb25zdCBiYXNlT3ZlcmxheXMgPSB7fTtcclxuXHJcbiAgICBpZiAoaXNBZG1pbikge1xyXG4gICAgICAgIGJhc2VPdmVybGF5c1tcIkNodW5rIEdyaWRcIl0gPSBncmlkTGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGF5ZXJzQ29udHJvbCA9IEwuY29udHJvbC5sYXllcnMobnVsbCwgYmFzZU92ZXJsYXlzKS5hZGRUbyhtYXBJbnN0YW5jZSk7XHJcblxyXG4gICAgLy8gSW5pdGlhbGlzZSBsZXMgY291Y2hlcyBkZSBkw6lww7R0cyAodmlzaWJsZXMgcG91ciB0b3V0IGxlIG1vbmRlKVxyXG4gICAgYXdhaXQgaW5pdERlcG9zaXRMYXllcnMobWFwSW5zdGFuY2UsIGxheWVyc0NvbnRyb2wpO1xyXG5cclxuICAgIC8vIEFqb3V0ZSBsYSBjb3VjaGUgcm91dGVzIHBvc3PDqWTDqWVzIChhZG1pbiBzZXVsZW1lbnQpXHJcbiAgICBpZiAoaXNBZG1pbikge1xyXG4gICAgICAgIGxheWVyc0NvbnRyb2wuYWRkT3ZlcmxheShyb2Fkc0xheWVyLCBcIlJvdXRlcyBwb3Nzw6lkw6llc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYW5uZWF1IGRlIGRlYnVnIGRlcyB6b25lc1xyXG4gICAgaW5pdFpvbmVEZWJ1Z1BhbmVsKCk7XHJcblxyXG4gICAgLy8gUGFubmVhdSBkZSBwcm9ncmVzc2lvbiBkZSBsJ2V4cGFuc2lvbiAoYWRtaW4gc2V1bGVtZW50KVxyXG4gICAgaWYgKGlzQWRtaW4pIHtcclxuICAgICAgICBpbml0V29ybGRFeHBhbnNpb25Qcm9ncmVzc1BhbmVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hhcmdlIGxhIGxpc3RlIGRlcyB6b25lcyBlbiBiYXNlIHBvdXIgbCdvdmVybGF5IFwibm9uIGZldGNow6lcIlxyXG4gICAgc3luY0tub3duWm9uZXMoKS50aGVuKGFzeW5jIChjb3VudCkgPT4ge1xyXG4gICAgICAgIGRlYnVnTG9nKFwiem9uZXNcIiwgYCR7Y291bnR9IHpvbmVzIHN5bmNocm9uaXPDqWVzIGRlcHVpcyBsYSBiYXNlYCk7XHJcbiAgICAgICAgLy8gUmUtY29sb3JlIGxlIGdyaWQgc2kgZMOpasOgIGluaXRpYWxpc8OpXHJcbiAgICAgICAgY29uc3QgeyByZWZyZXNoR3JpZENvbG9ycyB9ID0gYXdhaXQgaW1wb3J0KCcuLi9MYXllcnMvZ3JpZExheWVyLmpzJyk7XHJcbiAgICAgICAgcmVmcmVzaEdyaWRDb2xvcnMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQ0VOVFJBTCBDSFVOSyBDT05UUk9MTEVSXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBtYXBJbnN0YW5jZS5vbignbW92ZWVuZCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFpc0NodW5rTW9kZSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChtYXBJbnN0YW5jZS5nZXRab29tKCkgPCAxNCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjbGVhclRpbWVvdXQobW92ZVRpbWVvdXQpO1xyXG5cclxuICAgICAgICBtb3ZlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpbml0R3JpZExheWVyKCk7XHJcbiAgICAgICAgICAgIGxvYWRWaXNpYmxlUm9hZENodW5rcygpO1xyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXBJbnN0YW5jZS5vbignb3ZlcmxheWFkZCcsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUubGF5ZXIgPT09IGdyaWRMYXllcikge1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZyhcImdyaWRcIiwgXCJHcmlkIE9OXCIpO1xyXG5cclxuICAgICAgICAgICAgaW5pdEdyaWRMYXllcigpO1xyXG4gICAgICAgICAgICBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXBJbnN0YW5jZS5vbignb3ZlcmxheXJlbW92ZScsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUubGF5ZXIgPT09IGdyaWRMYXllcikge1xyXG4gICAgICAgICAgICBkZWJ1Z0xvZyhcImdyaWRcIiwgXCJHcmlkIE9GRlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEVWRU5UU1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBtYXBJbnN0YW5jZS5vbignem9vbWVuZCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3Qgem9vbSA9IG1hcEluc3RhbmNlLmdldFpvb20oKTtcclxuXHJcbiAgICAgICAgaWYgKHpvb20gPj0gMTQpIHtcclxuICAgICAgICAgICAgZW50ZXJDaHVua01vZGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBleGl0Q2h1bmtNb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0dyaWRMYXllckFjdGl2ZSgpIHtcclxuICAgIHJldHVybiBtYXBJbnN0YW5jZT8uaGFzTGF5ZXIoZ3JpZExheWVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcCgpIHtcclxuICAgIHJldHVybiBtYXBJbnN0YW5jZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZseVRvKGxhdCwgbG5nLCB6b29tID0gMTMpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgbWFwLmZseVRvKFtsYXQsIGxuZ10sIHpvb20sIHtcclxuICAgICAgICBhbmltYXRlOiB0cnVlLFxyXG4gICAgICAgIGR1cmF0aW9uOiAxLjVcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cclxuLy8gV09STEQgTE9BREVSIChDb25jZW50cmF0ZXVyIGQnYXBwZWxzIEFQSSlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkV29ybGQoKSB7XHJcblxyXG4gICAgZmV0Y2goJy9hcGkvd29ybGQtc3RhdGUnKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgJHtyZXMuc3RhdHVzfTogJHtyZXMuc3RhdHVzVGV4dH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAvLyBWw6lyaWZpZXIgc2kgbGEgcsOpcG9uc2UgZXN0IHZhbGlkZVxyXG4gICAgICAgICAgICBpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVzcG9uc2UgZm9ybWF0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENoYXJnZXIgbGVzIGJhc2VzIHZpYSBiYXNlLmpzIEQnQUJPUkQgcG91ciBjb25uYcOudHJlIGxhIGZhY3Rpb24gZHUgam91ZXVyXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnBsYXllcnMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBoYXNDZW50ZXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGEucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5pc01lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKHBsYXllci5mYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZEJhc2VGcm9tU2VydmVyKHBsYXllci5sYXQsIHBsYXllci5sbmcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNDZW50ZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx5VG8ocGxheWVyLmxhdCwgcGxheWVyLmxuZywgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2VudGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsb2FkT3RoZXJCYXNlKHBsYXllci5sYXQsIHBsYXllci5sbmcsIHBsYXllci5wc2V1ZG8sIHBsYXllci5mYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBEw6lmaW5pciBsJ0lEIGR1IGpvdWV1ciBhY3RpZlxyXG4gICAgICAgICAgICBpZiAoZGF0YS5jdXJyZW50UGxheWVySWQpIHtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQbGF5ZXJJZChkYXRhLmN1cnJlbnRQbGF5ZXJJZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENoYXJnZXIgbGVzIGLDonRpbWVudHMgYXByw6hzIGF2b2lyIGTDqWZpbmkgbGEgZmFjdGlvbiBkdSBqb3VldXJcclxuICAgICAgICAgICAgbG9hZEJ1aWxkaW5nc0Zyb21EYXRhKGRhdGEuYnVpbGRpbmdzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEluaXRpYWxpc2VyIGxlIEZvZyBvZiBXYXJcclxuICAgICAgICAgICAgaWYgKGRhdGEuZm9nTW9kZSAmJiBkYXRhLnZpc2lvblNvdXJjZXMpIHtcclxuICAgICAgICAgICAgICAgIGluaXRGb2dPZldhcihkYXRhLmZvZ01vZGUsIGRhdGEudmlzaW9uU291cmNlcywgbWFwSW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcignbWFwJywgXCJFcnJldXIgbG9hZCB3b3JsZFwiLCBlcnIpO1xyXG4gICAgICAgICAgICAvLyBOZSBwYXMgcmVkaXJpZ2VyIGF1dG9tYXRpcXVlbWVudCwgbGFpc3NleiBsZSBzeXN0w6htZSBkZSBsb2dpbiBnw6lyZXIgbGEgcmVkaXJlY3Rpb25cclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW50ZXJDaHVua01vZGUoKSB7XHJcbiAgICBpZiAoaXNDaHVua01vZGUpIHJldHVybjtcclxuXHJcbiAgICBpc0NodW5rTW9kZSA9IHRydWU7XHJcblxyXG4gICAgZGVidWdMb2coXCJjaHVua3NcIiwgXCJFTlRFUiBDSFVOSyBNT0RFXCIpO1xyXG5cclxuICAgIGluaXRHcmlkTGF5ZXIoKTtcclxuICAgIGxvYWRWaXNpYmxlUm9hZENodW5rcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleGl0Q2h1bmtNb2RlKCkge1xyXG4gICAgaWYgKCFpc0NodW5rTW9kZSkgcmV0dXJuO1xyXG5cclxuICAgIGlzQ2h1bmtNb2RlID0gZmFsc2U7XHJcblxyXG4gICAgZGVidWdMb2coXCJjaHVua3NcIiwgXCJFWElUIENIVU5LIE1PREVcIik7XHJcblxyXG4gICAgaWYgKG1hcEluc3RhbmNlLmhhc0xheWVyKGdyaWRMYXllcikpIHtcclxuICAgICAgICBtYXBJbnN0YW5jZS5yZW1vdmVMYXllcihncmlkTGF5ZXIpO1xyXG4gICAgfVxyXG59IiwiY29uc3QgY2h1bmtDYWNoZSA9IG5ldyBNYXAoKTtcclxuY29uc3QgQ0FDSEVfVFRMID0gMzYwMDAwMDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDYWNoZWRDaHVuayhpZCkge1xyXG4gICAgY29uc3QgY2FjaGVkID0gY2h1bmtDYWNoZS5nZXQoaWQpO1xyXG5cclxuICAgIGlmICghY2FjaGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKERhdGUubm93KCkgLSBjYWNoZWQudHMgPiBDQUNIRV9UVEwpIHtcclxuICAgICAgICBjaHVua0NhY2hlLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhY2hlZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENhY2hlZENodW5rKGlkLCBkYXRhKSB7XHJcbiAgICBjaHVua0NhY2hlLnNldChpZCwge1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgdHM6IERhdGUubm93KClcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZGF0ZUNodW5rQ2FjaGUoaWQpIHtcclxuICAgIGNodW5rQ2FjaGUuZGVsZXRlKGlkKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQ2h1bmtDYWNoZSgpIHtcclxuICAgIGNodW5rQ2FjaGUuY2xlYXIoKTtcclxufSIsImltcG9ydCB7IHJvYWRzU3RhdGUgfSBmcm9tICcuL3JvYWRzU3RhdGUuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgaW52YWxpZGF0ZUNodW5rQ2FjaGUgfSBmcm9tICcuL2NodW5rQ2FjaGUuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRhdGVDaHVuayhpZCkge1xyXG4gICAgZGVidWdMb2coXCJjYWNoZVwiLCBcIvCfp7kgaW52YWxpZGF0ZSBjaHVuazpcIiwgaWQpO1xyXG5cclxuICAgIGRlbGV0ZSByb2Fkc1N0YXRlLmNodW5rc1tpZF07XHJcbiAgICBpbnZhbGlkYXRlQ2h1bmtDYWNoZShpZCk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVidWcuanMnO1xyXG5cclxuLyoqXHJcbiAqIFRyb3V2ZSBsZSBwb2ludCBsZSBwbHVzIHByb2NoZSBzdXIgdG91dGVzIGxlcyByb3V0ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ2xvc2VzdFBvaW50T25Sb2FkKGxhdGxuZywgcm9hZHMpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGxldCBiZXN0UG9pbnQgPSBudWxsO1xyXG4gICAgbGV0IGJlc3REaXN0YW5jZSA9IEluZmluaXR5O1xyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkcykpIHJldHVybiB7IHBvaW50OiBudWxsLCBkaXN0YW5jZTogSW5maW5pdHkgfTtcclxuXHJcbiAgICByb2Fkcy5mb3JFYWNoKHJvYWQgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZC5wb2ludHMpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHJvYWQucG9pbnRzLmxlbmd0aCA8IDIpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2FkLnBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFSYXcgPSByb2FkLnBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgYlJhdyA9IHJvYWQucG9pbnRzW2kgKyAxXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYVJhdyB8fCAhYlJhdykge1xyXG4gICAgICAgICAgICAgICAgZGVidWdXYXJuKFwicm9hZHNcIiwgXCJCUk9LRU4gUk9BRCBTRUdNRU5UOlwiLCByb2FkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFSYXcubGVuZ3RoIDwgMiB8fCBiUmF3Lmxlbmd0aCA8IDIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYSA9IEwubGF0TG5nKGFSYXdbMF0sIGFSYXdbMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gTC5sYXRMbmcoYlJhd1swXSwgYlJhd1sxXSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ZWQgPSBwcm9qZWN0UG9pbnRPblNlZ21lbnQobGF0bG5nLCBhLCBiKTtcclxuICAgICAgICAgICAgY29uc3QgZGlzdCA9IG1hcC5kaXN0YW5jZShsYXRsbmcsIHByb2plY3RlZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlzdCA8IGJlc3REaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgYmVzdERpc3RhbmNlID0gZGlzdDtcclxuICAgICAgICAgICAgICAgIGJlc3RQb2ludCA9IHByb2plY3RlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcG9pbnQ6IGJlc3RQb2ludCxcclxuICAgICAgICBkaXN0YW5jZTogYmVzdERpc3RhbmNlXHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVHJvdXZlIGxlIHNlZ21lbnQgbGUgcGx1cyBwcm9jaGUgKHBvdXIgaGlnaGxpZ2h0IHZpc3VlbClcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ2xvc2VzdFNlZ21lbnQobGF0bG5nLCByb2Fkcykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgbGV0IGJlc3RTZWdtZW50ID0gbnVsbDtcclxuICAgIGxldCBiZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZHMpKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByb2Fkcy5mb3JFYWNoKHJvYWQgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZC5wb2ludHMpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9hZC5wb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhUmF3ID0gcm9hZC5wb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGJSYXcgPSByb2FkLnBvaW50c1tpICsgMV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFSYXcgfHwgIWJSYXcpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoYVJhdy5sZW5ndGggPCAyIHx8IGJSYXcubGVuZ3RoIDwgMikgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhID0gTC5sYXRMbmcoYVJhd1swXSwgYVJhd1sxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBMLmxhdExuZyhiUmF3WzBdLCBiUmF3WzFdKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1pZCA9IEwubGF0TG5nKFxyXG4gICAgICAgICAgICAgICAgKGEubGF0ICsgYi5sYXQpIC8gMixcclxuICAgICAgICAgICAgICAgIChhLmxuZyArIGIubG5nKSAvIDJcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBtYXAuZGlzdGFuY2UobGF0bG5nLCBtaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3QgPCBiZXN0RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0YW5jZSA9IGRpc3Q7XHJcbiAgICAgICAgICAgICAgICBiZXN0U2VnbWVudCA9IFthLCBiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBiZXN0U2VnbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFByb2plY3Rpb24gZCd1biBwb2ludCBzdXIgdW4gc2VnbWVudCAoQS1CKVxyXG4gKiBtYXRoIHN0YWJsZSBwb3VyIHNuYXAgcm91dGVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFBvaW50T25TZWdtZW50KHAsIGEsIGIpIHtcclxuXHJcbiAgICBjb25zdCBBID0gW2EubGF0LCBhLmxuZ107XHJcbiAgICBjb25zdCBCID0gW2IubGF0LCBiLmxuZ107XHJcbiAgICBjb25zdCBQID0gW3AubGF0LCBwLmxuZ107XHJcblxyXG4gICAgY29uc3QgQUIgPSBbQlswXSAtIEFbMF0sIEJbMV0gLSBBWzFdXTtcclxuICAgIGNvbnN0IEFQID0gW1BbMF0gLSBBWzBdLCBQWzFdIC0gQVsxXV07XHJcblxyXG4gICAgY29uc3QgYWIyID0gQUJbMF0gKiBBQlswXSArIEFCWzFdICogQUJbMV07XHJcblxyXG4gICAgaWYgKGFiMiA9PT0gMCkgcmV0dXJuIGE7XHJcblxyXG4gICAgbGV0IHQgPSAoQVBbMF0gKiBBQlswXSArIEFQWzFdICogQUJbMV0pIC8gYWIyO1xyXG5cclxuICAgIHQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0KSk7XHJcblxyXG4gICAgcmV0dXJuIEwubGF0TG5nKFxyXG4gICAgICAgIEFbMF0gKyBBQlswXSAqIHQsXHJcbiAgICAgICAgQVsxXSArIEFCWzFdICogdFxyXG4gICAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3RhbmNlIHBvaW50IC0+IHNlZ21lbnQgKHV0aWxlIHZhbGlkYXRpb24gZnV0dXJlKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlVG9TZWdtZW50KHAsIGEsIGIpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RlZCA9IHByb2plY3RQb2ludE9uU2VnbWVudChwLCBhLCBiKTtcclxuICAgIHJldHVybiBtYXAuZGlzdGFuY2UocCwgcHJvamVjdGVkKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIHNpbXBsZSBkZWJ1ZyByb2Fkc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnUm9hZHMocm9hZHMpIHtcclxuICAgIGRlYnVnTG9nKFwicm9hZHNcIiwgXCJST0FEUyBERUJVRzpcIiwgcm9hZHMubGVuZ3RoLCByb2Fkcyk7XHJcbn0iLCJpbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAuanMnO1xuaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4uLy4uL3V0aWxzL2NodW5rLmpzJztcbmltcG9ydCB7IHNldENodW5rQ29sb3IgfSBmcm9tICcuLi8uLi9MYXllcnMvZ3JpZExheWVyLmpzJztcbmltcG9ydCB7IGludmFsaWRhdGVDaHVuayB9IGZyb20gJy4vaW52YWxpZGF0ZUNodW5rLmpzJztcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4sIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWJ1Zy5qcyc7XG5pbXBvcnQgeyByb2Fkc1N0YXRlIH0gZnJvbSAnLi9yb2Fkc1N0YXRlLmpzJztcbmltcG9ydCB7IHJlbmRlckRlcG9zaXRzRnJvbURhdGEgfSBmcm9tICcuLi9kZXBvc2l0cy9kZXBvc2l0cy5qcyc7XG5pbXBvcnQgeyBnZXRDYWNoZWRDaHVuaywgc2V0Q2FjaGVkQ2h1bmssIGludmFsaWRhdGVDaHVua0NhY2hlIH0gZnJvbSAnLi9jaHVua0NhY2hlLmpzJztcbmltcG9ydCB7IGRyYXdPd25lZFJvYWRzIH0gZnJvbSAnLi9yb2Fkc0xheWVyLmpzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNBRkUgSlNPTiBQQVJTRVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBhcnNlIGxlIEpTT04gZCd1bmUgcsOpcG9uc2UgZW4gcmVudm95YW50IFRPVUpPVVJTIGR1IEpTT04gdmFsaWRlLlxuLy8gU2kgbGUgY29ycHMgbidlc3QgZHUgSlNPTiAocGFnZSBkJ2VycmV1ciBIVE1MLCA1MDAsIDQwNCwgdmlkZSksXG4vLyBsZSB0ZXh0ZSBicnV0IGVzdCBsb2dnw6kgcG91ciBkaWFnbm9zdGljIGV0IHVuIG9iamV0IHBhciBkw6lmYXV0XG4vLyBlc3QgcmV0b3VybsOpIHBvdXIgw6l2aXRlciBsZSBjcmFzaCBcIkpTT04ucGFyc2U6IHVuZXhwZWN0ZWQgY2hhcmFjdGVyXCIuXG5hc3luYyBmdW5jdGlvbiBzYWZlSnNvbihyZXNwb25zZSwgZGVmYXVsdERhdGEpIHtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRleHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZGVidWdFcnJvcihcInJvYWRzXCIsIGBbU0FGRV9KU09OXSBSw6lwb25zZSBub24tSlNPTiAoc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnVybH0pOmAsXG4gICAgICAgICAgICB0ZXh0LnNsaWNlKDAsIDUwMCkpO1xuICAgICAgICByZXR1cm4gZGVmYXVsdERhdGE7XG4gICAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTUFJTiBMT0FEIFZJU0lCTEVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFZpc2libGVSb2FkQ2h1bmtzKCkge1xuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xuICAgIGlmICghbWFwIHx8IG1hcC5nZXRab29tKCkgPCAxNCkgcmV0dXJuO1xuXG4gICAgY29uc3QgYm91bmRzICAgICAgICA9IG1hcC5nZXRCb3VuZHMoKTtcbiAgICBjb25zdCB2aXNpYmxlQ2h1bmtzID0gZ2V0VmlzaWJsZUNodW5rcyhib3VuZHMpO1xuICAgIGNvbnN0IGNodW5rc1RvTG9hZCAgPSB2aXNpYmxlQ2h1bmtzLmZpbHRlcihjaHVua0lkID0+ICFyb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5oYXMoY2h1bmtJZCkpO1xuXG4gICAgY29uc3QgZmluYWxDaHVua3NUb0xvYWQgPSBbXTtcblxuICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBjaHVua3NUb0xvYWQpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGdldENhY2hlZENodW5rKGNodW5rSWQpO1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAgIGRhdGEuaGFzUm9hZHMgPyAnbG9hZGVkJyA6ICdlbXB0eScsXG4gICAgICAgICAgICAgICAgcm9hZHM6ICAgIGRhdGEucm9hZHMsXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBkYXRhLmJ1aWxkaW5ncyxcbiAgICAgICAgICAgICAgICBkZXBvc2l0czogZGF0YS5kZXBvc2l0cyxcbiAgICAgICAgICAgICAgICBoYXNSb2FkczogZGF0YS5oYXNSb2Fkc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJvYWRzU3RhdGUubG9hZGVkQ2h1bmtzLmFkZChjaHVua0lkKTtcbiAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgZGF0YS5oYXNSb2FkcyA/ICdibHVlJyA6ICcjNDQ0Jyk7XG4gICAgICAgICAgICByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGRhdGEuZGVwb3NpdHMgfHwgW10sIG1hcCk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbENodW5rc1RvTG9hZC5wdXNoKGNodW5rSWQpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBmaW5hbENodW5rc1RvTG9hZCkge1xuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHsgc3RhdHVzOiAnbG9hZGluZycsIHJvYWRzOiBbXSwgYnVpbGRpbmdzOiBbXSwgZGVwb3NpdHM6IFtdIH07XG4gICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ29yYW5nZScpO1xuICAgIH1cblxuICAgIGlmIChmaW5hbENodW5rc1RvTG9hZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVmcmVzaENodW5rQ29sb3JzKHZpc2libGVDaHVua3MpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gTGEgYmJveCBlbmdsb2JhbnRlIGRlcyBjaHVua3MgdmlzaWJsZXNcbiAgICBjb25zdCB2aXNpYmxlQm91bmRzID0ge1xuICAgICAgICBzb3V0aDogYm91bmRzLmdldFNvdXRoKCksXG4gICAgICAgIHdlc3Q6ICBib3VuZHMuZ2V0V2VzdCgpLFxuICAgICAgICBub3J0aDogYm91bmRzLmdldE5vcnRoKCksXG4gICAgICAgIGVhc3Q6ICBib3VuZHMuZ2V0RWFzdCgpLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBbcm9hZHNSZXNwb25zZSwgYnVpbGRpbmdzUmVzcG9uc2UsIGRlcG9zaXRzUmVzcG9uc2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZmV0Y2goJy9hcGkvY2h1bmtzL2J1bGsnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmlzaWJsZUJvdW5kcyksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2J1aWxkaW5ncy92aXNpYmxlJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZpc2libGVCb3VuZHMpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9kZXBvc2l0cy9idWxrJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZpc2libGVCb3VuZHMpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0pO1xuXG4gICAgICAgIC8vIE9uIHBhcnNlIGVuIHRvbMOpcmFudCB1bmUgcsOpcG9uc2Ugbm9uLUpTT04gKHBhZ2UgZCdlcnJldXIgSFRNTCA1MDAvNDA04oCmKVxuICAgICAgICAvLyBwb3VyIMOpdml0ZXIgXCJKU09OLnBhcnNlOiB1bmV4cGVjdGVkIGNoYXJhY3RlclwiIGV0IGxvZ2dlciBsZSBjb3JwcyBicnV0LlxuICAgICAgICBjb25zdCByb2Fkc0RhdGEgICAgID0gYXdhaXQgc2FmZUpzb24ocm9hZHNSZXNwb25zZSwgeyByb2FkczogW10gfSk7XG4gICAgICAgIGNvbnN0IGJ1aWxkaW5nc0RhdGEgPSBhd2FpdCBzYWZlSnNvbihidWlsZGluZ3NSZXNwb25zZSwgeyBidWlsZGluZ3M6IFtdIH0pO1xuICAgICAgICBjb25zdCBkZXBvc2l0c0RhdGEgID0gYXdhaXQgc2FmZUpzb24oZGVwb3NpdHNSZXNwb25zZSwgeyBkZXBvc2l0czogW10gfSk7XG5cbiAgICAgICAgLy8gTm91dmVhdSBmb3JtYXQgOiB0YWJsZWF1eCBwbGF0cyBkYW5zICQucm9hZHMsICQuYnVpbGRpbmdzLCAkLmRlcG9zaXRzXG4gICAgICAgIGNvbnN0IGFsbFJvYWRzICAgICA9IHJvYWRzRGF0YS5yb2FkcyB8fCBbXTtcbiAgICAgICAgY29uc3QgYWxsQnVpbGRpbmdzID0gYnVpbGRpbmdzRGF0YS5idWlsZGluZ3MgfHwgW107XG4gICAgICAgIGNvbnN0IGFsbERlcG9zaXRzICA9IGRlcG9zaXRzRGF0YS5kZXBvc2l0cyB8fCBbXTtcblxuICAgICAgICAvLyBEaXN0cmlidWUgbGVzIHJvdXRlcyBkYW5zIGxlcyBjZWxsdWxlcyB2aXNpYmxlcyAodW5lIHJvdXRlIHBldXQgdG91Y2hlciBwbHVzaWV1cnMgY2VsbHVsZXMpXG4gICAgICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBmaW5hbENodW5rc1RvTG9hZCkge1xuICAgICAgICAgICAgY29uc3QgW2N4U3RyLCBjeVN0cl0gPSBjaHVua0lkLnNwbGl0KCdfJyk7XG4gICAgICAgICAgICAvLyBMZSBjaHVua0lkIGVzdCBcImxhdE1pbl9sbmdNaW5cIiBvw7kgbGF0TWluL2xuZ01pbiBzb250IGRlcyBmbG9hdHMgKGV4OiBcIjQ1LjE2XzAuNzZcIikuXG4gICAgICAgICAgICAvLyBVdGlsaXNlciBwYXJzZUZsb2F0IC8gQ0hVTktfU0laRSBwb3VyIG9idGVuaXIgbCdlbnRpZXIgZGUgZ3JpbGxlIChleDogNDUxNiwgNzYpLlxuICAgICAgICAgICAgY29uc3QgY3ggPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoY3hTdHIpIC8gQ0hVTktfU0laRSk7XG4gICAgICAgICAgICBjb25zdCBjeSA9IE1hdGgucm91bmQocGFyc2VGbG9hdChjeVN0cikgLyBDSFVOS19TSVpFKTtcbiAgICAgICAgICAgIGlmIChOdW1iZXIuaXNOYU4oY3gpIHx8IE51bWJlci5pc05hTihjeSkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBOb3JtYWxpc2VyIGxhIGJib3ggYXZlYyB0b0ZpeGVkKDgpIHBvdXIgw6l2aXRlciBsZXMgZXJyZXVycyBkZSBwcsOpY2lzaW9uIGZsb2F0c1xuICAgICAgICAgICAgY29uc3QgY2VsbFNvdXRoID0gTnVtYmVyKChjeCAqIENIVU5LX1NJWkUpLnRvRml4ZWQoOCkpO1xuICAgICAgICAgICAgY29uc3QgY2VsbFdlc3QgID0gTnVtYmVyKChjeSAqIENIVU5LX1NJWkUpLnRvRml4ZWQoOCkpO1xuICAgICAgICAgICAgY29uc3QgY2VsbE5vcnRoID0gTnVtYmVyKChjZWxsU291dGggKyBDSFVOS19TSVpFKS50b0ZpeGVkKDgpKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxFYXN0ICA9IE51bWJlcigoY2VsbFdlc3QgKyBDSFVOS19TSVpFKS50b0ZpeGVkKDgpKTtcblxuICAgICAgICAgICAgY29uc3QgY2VsbFJvYWRzID0gYWxsUm9hZHMuZmlsdGVyKHJvYWQgPT5cbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHJvYWQucG9pbnRzKSAmJiByb2FkLnBvaW50cy5zb21lKHB0ID0+XG4gICAgICAgICAgICAgICAgICAgIHB0WzBdID49IGNlbGxTb3V0aCAmJiBwdFswXSA8PSBjZWxsTm9ydGggJiZcbiAgICAgICAgICAgICAgICAgICAgcHRbMV0gPj0gY2VsbFdlc3QgICYmIHB0WzFdIDw9IGNlbGxFYXN0XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgaXNFbXB0eSA9IGFsbFJvYWRzLmxlbmd0aCA9PT0gMCAmJiBhbGxCdWlsZGluZ3MubGVuZ3RoID09PSAwICYmIGFsbERlcG9zaXRzLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGlzRW1wdHkgPyAnZW1wdHknIDogJ2xvYWRlZCc7XG5cbiAgICAgICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xuICAgICAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgICAgICByb2FkczogICAgIGNlbGxSb2FkcyxcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6IGFsbEJ1aWxkaW5ncyxcbiAgICAgICAgICAgICAgICBkZXBvc2l0czogIGFsbERlcG9zaXRzLFxuICAgICAgICAgICAgICAgIGhhc1JvYWRzOiAgY2VsbFJvYWRzLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5hZGQoY2h1bmtJZCk7XG4gICAgICAgICAgICBzZXRDYWNoZWRDaHVuayhjaHVua0lkLCB7IHJvYWRzOiBjZWxsUm9hZHMsIGJ1aWxkaW5nczogYWxsQnVpbGRpbmdzLCBkZXBvc2l0czogYWxsRGVwb3NpdHMsIGhhc1JvYWRzOiBjZWxsUm9hZHMubGVuZ3RoID4gMCB9KTtcblxuICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCBpc0VtcHR5ID8gJyM0NDQnIDogJ2JsdWUnKTtcbiAgICAgICAgICAgIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoYWxsRGVwb3NpdHMsIG1hcCk7XG5cbiAgICAgICAgICAgIC8vIERlc3NpbmUgbGVzIHJvdXRlcyBwb3Nzw6lkw6llcyBzdXIgbGEgY2FydGUgKHNldWxlcyBsZXMgcm91dGVzIGRlIENFIGNodW5rKVxuICAgICAgICAgICAgZHJhd093bmVkUm9hZHMoY2VsbFJvYWRzKTtcblxuICAgICAgICAgICAgZGVidWdMb2coXCJyb2Fkc1wiLCBgW0xPQURdICR7Y2h1bmtJZH06ICR7c3RhdHVzfSAoJHtjZWxsUm9hZHMubGVuZ3RofSByb3V0ZXMgaWNpLCAke2FsbFJvYWRzLmxlbmd0aH0gdG90YWwpYCk7XG4gICAgICAgIH1cblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGRlYnVnRXJyb3IoXCJyb2Fkc1wiLCBcIkVycmV1ciBjaGFyZ2VtZW50IGNodW5rcyBidWxrOlwiLCBlcnJvcik7XG4gICAgICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBmaW5hbENodW5rc1RvTG9hZCkge1xuICAgICAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7IHN0YXR1czogJ2Vycm9yJywgcm9hZHM6IFtdLCBidWlsZGluZ3M6IFtdLCBkZXBvc2l0czogW10gfTtcbiAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ3JlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVmcmVzaENodW5rQ29sb3JzKHZpc2libGVDaHVua3MpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVGUkVTSCBDSFVOS1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoQ2h1bmsoY2h1bmtJZCkge1xuICAgIGludmFsaWRhdGVDaHVuayhjaHVua0lkKTtcbiAgICBpbnZhbGlkYXRlQ2h1bmtDYWNoZShjaHVua0lkKTtcblxuICAgIHJvYWRzU3RhdGUubG9hZGVkQ2h1bmtzLmRlbGV0ZShjaHVua0lkKTtcblxuICAgIGF3YWl0IGZldGNoU2luZ2xlQ2h1bmsoY2h1bmtJZCk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRUZSRVNIIE1VTFRJUExFIENIVU5LU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoQ2h1bmtzKGNodW5rSWRzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNodW5rSWRzKSB8fCBjaHVua0lkcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChjaHVua0lkcy5tYXAoaWQgPT4gcmVmcmVzaENodW5rKGlkKSkpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRkVUQ0ggU0lOR0xFIENIVU5LXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hTaW5nbGVDaHVuayhjaHVua0lkKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7IHN0YXR1czogJ2xvYWRpbmcnLCByb2FkczogW10sIGJ1aWxkaW5nczogW10sIGRlcG9zaXRzOiBbXSB9O1xuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTtcblxuICAgICAgICAvLyBEw6lkdWlyZSB1bmUgYmJveCBkdSBjaHVua0lkIFwibGF0TWluX2xuZ01pblwiIChleDogXCI0NS4xNl8wLjc2XCIpXG4gICAgICAgIC8vIFV0aWxpc2VyIHBhcnNlRmxvYXQgLyBDSFVOS19TSVpFIHBvdXIgb2J0ZW5pciBsJ2VudGllciBkZSBncmlsbGUgKGV4OiA0NTE2LCA3NikuXG4gICAgICAgIGNvbnN0IFtjeFN0ciwgY3lTdHJdID0gY2h1bmtJZC5zcGxpdCgnXycpO1xuICAgICAgICBjb25zdCBjeCA9IE1hdGgucm91bmQocGFyc2VGbG9hdChjeFN0cikgLyBDSFVOS19TSVpFKTtcbiAgICAgICAgY29uc3QgY3kgPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoY3lTdHIpIC8gQ0hVTktfU0laRSk7XG4gICAgICAgIGNvbnN0IGNlbGxTb3V0aCA9IE51bWJlcigoY3ggKiBDSFVOS19TSVpFKS50b0ZpeGVkKDgpKTtcbiAgICAgICAgY29uc3QgY2VsbFdlc3QgID0gTnVtYmVyKChjeSAqIENIVU5LX1NJWkUpLnRvRml4ZWQoOCkpO1xuICAgICAgICBjb25zdCBjZWxsTm9ydGggPSBOdW1iZXIoKGNlbGxTb3V0aCArIENIVU5LX1NJWkUpLnRvRml4ZWQoOCkpO1xuICAgICAgICBjb25zdCBjZWxsRWFzdCAgPSBOdW1iZXIoKGNlbGxXZXN0ICsgQ0hVTktfU0laRSkudG9GaXhlZCg4KSk7XG5cbiAgICAgICAgY29uc3QgW3JvYWRzUmVzLCBidWlsZGluZ3NSZXMsIGRlcG9zaXRzUmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2NodW5rcy9idWxrJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc291dGg6IGNlbGxTb3V0aCwgd2VzdDogY2VsbFdlc3QsIG5vcnRoOiBjZWxsTm9ydGgsIGVhc3Q6IGNlbGxFYXN0IH0pLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9idWlsZGluZ3MvdmlzaWJsZScsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHNvdXRoOiBjZWxsU291dGgsIHdlc3Q6IGNlbGxXZXN0LCBub3J0aDogY2VsbE5vcnRoLCBlYXN0OiBjZWxsRWFzdCB9KSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvZGVwb3NpdHMvYnVsaycsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHNvdXRoOiBjZWxsU291dGgsIHdlc3Q6IGNlbGxXZXN0LCBub3J0aDogY2VsbE5vcnRoLCBlYXN0OiBjZWxsRWFzdCB9KSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdKTtcblxuICAgICAgICBjb25zdCByb2Fkc0RhdGEgICAgID0gYXdhaXQgc2FmZUpzb24ocm9hZHNSZXMsIHsgcm9hZHM6IFtdIH0pO1xuICAgICAgICBjb25zdCBidWlsZGluZ3NEYXRhID0gYXdhaXQgc2FmZUpzb24oYnVpbGRpbmdzUmVzLCB7IGJ1aWxkaW5nczogW10gfSk7XG4gICAgICAgIGNvbnN0IGRlcG9zaXRzRGF0YSAgPSBhd2FpdCBzYWZlSnNvbihkZXBvc2l0c1JlcywgeyBkZXBvc2l0czogW10gfSk7XG5cbiAgICAgICAgY29uc3QgYWxsUm9hZHMgICAgID0gcm9hZHNEYXRhLnJvYWRzIHx8IFtdO1xuICAgICAgICBjb25zdCBhbGxCdWlsZGluZ3MgPSBidWlsZGluZ3NEYXRhLmJ1aWxkaW5ncyB8fCBbXTtcbiAgICAgICAgY29uc3QgYWxsRGVwb3NpdHMgID0gZGVwb3NpdHNEYXRhLmRlcG9zaXRzIHx8IFtdO1xuXG4gICAgICAgIC8vIEZpbHRyZSBsZXMgcm91dGVzIHF1aSBpbnRlcnNlY3RlbnQgQ0UgY2h1bmtcbiAgICAgICAgY29uc3QgY2VsbFJvYWRzID0gYWxsUm9hZHMuZmlsdGVyKHJvYWQgPT5cbiAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocm9hZC5wb2ludHMpICYmIHJvYWQucG9pbnRzLnNvbWUocHQgPT5cbiAgICAgICAgICAgICAgICBwdFswXSA+PSBjZWxsU291dGggJiYgcHRbMF0gPD0gY2VsbE5vcnRoICYmXG4gICAgICAgICAgICAgICAgcHRbMV0gPj0gY2VsbFdlc3QgICYmIHB0WzFdIDw9IGNlbGxFYXN0XG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gVW4gY2h1bmsgZXN0IFwibG9hZGVkXCIgKGJsZXUpIGTDqHMgcXVlIGxhIHpvbmUgYSDDqXTDqSBmZXRjaMOpZSBhdmVjIHN1Y2PDqHMsXG4gICAgICAgIC8vIG3Dqm1lIHNpIGxlcyByb3V0ZXMgc29udCBzdG9ja8OpZXMgZGFucyBkZXMgY2h1bmtzIHZvaXNpbnMuXG4gICAgICAgIC8vIExlIHN0YXR1dCBcImVtcHR5XCIgKGdyaXMpIG4nYXBwYXJhw650IHF1ZSBzaSBsJ0FQSSBjb25maXJtZSBxdSdpbCBuJ3kgYVxuICAgICAgICAvLyBzdHJpY3RlbWVudCBhdWN1bmUgcm91dGUgZGFucyBsYSBiYm94IGR1IGNodW5rLlxuICAgICAgICBjb25zdCBpc0VtcHR5ID0gYWxsUm9hZHMubGVuZ3RoID09PSAwICYmIGFsbEJ1aWxkaW5ncy5sZW5ndGggPT09IDAgJiYgYWxsRGVwb3NpdHMubGVuZ3RoID09PSAwO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBpc0VtcHR5ID8gJ2VtcHR5JyA6ICdsb2FkZWQnO1xuXG4gICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0geyBzdGF0dXMsIHJvYWRzOiBjZWxsUm9hZHMsIGJ1aWxkaW5nczogYWxsQnVpbGRpbmdzLCBkZXBvc2l0czogYWxsRGVwb3NpdHMsIGhhc1JvYWRzOiBjZWxsUm9hZHMubGVuZ3RoID4gMCB9O1xuICAgICAgICBzZXRDYWNoZWRDaHVuayhjaHVua0lkLCB7IHJvYWRzOiBjZWxsUm9hZHMsIGJ1aWxkaW5nczogYWxsQnVpbGRpbmdzLCBkZXBvc2l0czogYWxsRGVwb3NpdHMsIGhhc1JvYWRzOiBjZWxsUm9hZHMubGVuZ3RoID4gMCB9KTtcblxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsIGlzRW1wdHkgPyAnIzQ0NCcgOiAnYmx1ZScpO1xuICAgICAgICByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGFsbERlcG9zaXRzLCBnZXRNYXAoKSk7XG5cbiAgICAgICAgZGVidWdMb2coXCJyb2Fkc1wiLCBgW0NIVU5LIFJFRlJFU0hdICR7Y2h1bmtJZH06ICR7c3RhdHVzfSAoJHtjZWxsUm9hZHMubGVuZ3RofSByb3V0ZXMgaWNpLCAke2FsbFJvYWRzLmxlbmd0aH0gdG90YWwgZGFucyBsYSBiYm94KWApO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHsgc3RhdHVzOiAnZXJyb3InLCByb2FkczogW10sIGJ1aWxkaW5nczogW10sIGRlcG9zaXRzOiBbXSB9O1xuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdyZWQnKTtcbiAgICAgICAgZGVidWdFcnJvcihcInJvYWRzXCIsIFwiW0NIVU5LIFJFRlJFU0ggRVJST1JdXCIsIGNodW5rSWQsIGUpO1xuICAgIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFRlJFU0ggQ0hVTksgQ09MT1JTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gcmVmcmVzaENodW5rQ29sb3JzKHZpc2libGVDaHVua3MpIHtcbiAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgdmlzaWJsZUNodW5rcykge1xuICAgICAgICBjb25zdCBjaHVuayA9IHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdO1xuICAgICAgICBpZiAoIWNodW5rKSB7IHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ29yYW5nZScpOyBjb250aW51ZTsgfVxuXG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IHsgbG9hZGVkOiAnYmx1ZScsIGVtcHR5OiAnIzQ0NCcsIGxvYWRpbmc6ICdvcmFuZ2UnLCBlcnJvcjogJ3JlZCcgfTtcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCBjb2xvcnNbY2h1bmsuc3RhdHVzXSA/PyAneWVsbG93Jyk7XG4gICAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVklTSUJMRSBDSFVOS1Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBnZXRWaXNpYmxlQ2h1bmtzKGJvdW5kcykge1xuICAgIGNvbnN0IG1pblggPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRTb3V0aCgpIC8gQ0hVTktfU0laRSk7XG4gICAgY29uc3QgbWF4WCA9IE1hdGguZmxvb3IoYm91bmRzLmdldE5vcnRoKCkgLyBDSFVOS19TSVpFKTtcbiAgICBjb25zdCBtaW5ZID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0V2VzdCgpICAvIENIVU5LX1NJWkUpO1xuICAgIGNvbnN0IG1heFkgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRFYXN0KCkgIC8gQ0hVTktfU0laRSk7XG5cbiAgICBjb25zdCBjaHVua3MgPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gbWluWDsgeCA8PSBtYXhYOyB4KyspIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgeSsrKSB7XG4gICAgICAgICAgICAvLyBGb3JtYXQgY29ow6lyZW50IGF2ZWMgc25hcFRvQ2h1bmsgOiBcImxhdE1pbl9sbmdNaW5cIiAoZmxvYXRzLCBleDogXCI0NS4xNl8wLjc2XCIpXG4gICAgICAgICAgICBjb25zdCBsYXRNaW4gPSBOdW1iZXIoKHggKiBDSFVOS19TSVpFKS50b0ZpeGVkKDgpKTtcbiAgICAgICAgICAgIGNvbnN0IGxuZ01pbiA9IE51bWJlcigoeSAqIENIVU5LX1NJWkUpLnRvRml4ZWQoOCkpO1xuICAgICAgICAgICAgY2h1bmtzLnB1c2goYCR7bGF0TWlufV8ke2xuZ01pbn1gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2h1bmtzO1xufVxuIiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vLi4vTGVhZmxldFdyYXBwZXIuanMnO1xuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwLmpzJztcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z1dhcm4gfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWJ1Zy5qcyc7XG5cbi8vIENvdWNoZSBMZWFmbGV0IGNvbnRlbmFudCBsZXMgcm91dGVzIHBvc3PDqWTDqWVzIChwb2x5bGlnbmVzIGJsZXVlcylcbi8vIFZpc2libGUgdW5pcXVlbWVudCBwYXIgbGVzIGFkbWluc1xuZXhwb3J0IGNvbnN0IHJvYWRzTGF5ZXIgPSBMLmxheWVyR3JvdXAoKTtcblxuLy8gU2V0IGRlcyBJRHMgZMOpasOgIGRlc3NpbsOpcyAocG91ciDDqXZpdGVyIGxlcyBkb3VibG9ucylcbmNvbnN0IGRyYXduUm9hZElkcyA9IG5ldyBTZXQoKTtcblxuLyoqXG4gKiBEZXNzaW5lIHN1ciBsYSBjYXJ0ZSB0b3V0ZXMgbGVzIHJvdXRlcyBxdWkgbmUgbGUgc29udCBwYXMgZW5jb3JlLlxuICogQHBhcmFtIHtBcnJheX0gcm9hZHMgLSB0YWJsZWF1IGRlIHsgaWQsIHBvaW50cywgdHlwZSB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkcmF3T3duZWRSb2Fkcyhyb2Fkcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkcykgfHwgcm9hZHMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xuXG4gICAgbGV0IGFkZGVkID0gMDtcblxuICAgIGZvciAoY29uc3Qgcm9hZCBvZiByb2Fkcykge1xuICAgICAgICBpZiAoIXJvYWQgfHwgZHJhd25Sb2FkSWRzLmhhcyhyb2FkLmlkKSkgY29udGludWU7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkLnBvaW50cykgfHwgcm9hZC5wb2ludHMubGVuZ3RoIDwgMikgY29udGludWU7XG5cbiAgICAgICAgLy8gQ29udmVydGl0IGxlcyBwb2ludHMgW2xhdCwgbG5nXSBlbiB0YWJsZWF1IHBvdXIgTGVhZmxldFxuICAgICAgICBjb25zdCBsYXRsbmdzID0gcm9hZC5wb2ludHMubWFwKHB0ID0+IFtwdFswXSwgcHRbMV1dKTtcblxuICAgICAgICAvLyBDb3VsZXVyIHNlbG9uIGxlIHR5cGUgZGUgcm91dGVcbiAgICAgICAgY29uc3QgY29sb3IgPSBnZXRSb2FkQ29sb3Iocm9hZC50eXBlKTtcblxuICAgICAgICBjb25zdCBwb2x5bGluZSA9IEwucG9seWxpbmUobGF0bG5ncywge1xuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICB3ZWlnaHQ6IDMsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjgsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBvbHlsaW5lLmFkZFRvKHJvYWRzTGF5ZXIpO1xuICAgICAgICBkcmF3blJvYWRJZHMuYWRkKHJvYWQuaWQpO1xuICAgICAgICBhZGRlZCsrO1xuICAgIH1cblxuICAgIGlmIChhZGRlZCA+IDApIHtcbiAgICAgICAgZGVidWdMb2coXCJyb2Fkc0xheWVyXCIsIGAke2FkZGVkfSByb3V0ZXMgZGVzc2luw6llcyAoJHtkcmF3blJvYWRJZHMuc2l6ZX0gdG90YWwpYCk7XG4gICAgfVxufVxuXG4vKipcbiAqIEVmZmFjZSB0b3V0ZXMgbGVzIHJvdXRlcyBkZXNzaW7DqWVzIChwb3VyIHVuIHJlY2hhcmdlbWVudCBjb21wbGV0KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyT3duZWRSb2FkcygpIHtcbiAgICByb2Fkc0xheWVyLmNsZWFyTGF5ZXJzKCk7XG4gICAgZHJhd25Sb2FkSWRzLmNsZWFyKCk7XG4gICAgZGVidWdMb2coXCJyb2Fkc0xheWVyXCIsIFwiUm91dGVzIGVmZmFjw6llc1wiKTtcbn1cblxuLyoqXG4gKiBSZXRvdXJuZSBsYSBjb3VsZXVyIHNlbG9uIGxlIHR5cGUgZGUgcm91dGUgT1NNLlxuICovXG5mdW5jdGlvbiBnZXRSb2FkQ29sb3IodHlwZSkge1xuICAgIGNvbnN0IGNvbG9ycyA9IHtcbiAgICAgICAgbW90b3J3YXk6ICcjZTc0YzNjJyxcbiAgICAgICAgdHJ1bms6ICcjZTY3ZTIyJyxcbiAgICAgICAgcHJpbWFyeTogJyNmMWM0MGYnLFxuICAgICAgICBzZWNvbmRhcnk6ICcjMmVjYzcxJyxcbiAgICAgICAgdGVydGlhcnk6ICcjMWFiYzljJyxcbiAgICAgICAgcmVzaWRlbnRpYWw6ICcjMzQ5OGRiJyxcbiAgICAgICAgc2VydmljZTogJyM5YjU5YjYnLFxuICAgICAgICB1bmNsYXNzaWZpZWQ6ICcjOTVhNWE2JyxcbiAgICAgICAgZmVycnk6ICcjMDBDRUQxJywgICAgICAgIC8vIGN5YW4gZm9uY8OpIHBvdXIgbGVzIGxpZ25lcyBtYXJpdGltZXNcbiAgICB9O1xuICAgIHJldHVybiBjb2xvcnNbdHlwZV0gfHwgJyMyOTgwYjknOyAvLyBibGV1IHBhciBkw6lmYXV0XG59XG5cbi8qKlxuICogQ29tcHRlIGxlIG5vbWJyZSBkZSByb3V0ZXMgcG9zc8OpZMOpZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPd25lZFJvYWRzQ291bnQoKSB7XG4gICAgcmV0dXJuIGRyYXduUm9hZElkcy5zaXplO1xufVxuIiwiZXhwb3J0IGNvbnN0IHJvYWRzU3RhdGUgPSB7XHJcbiAgICBjaHVua3M6IHt9LFxyXG4gICAgbG9hZGVkQ2h1bmtzOiBuZXcgU2V0KCksXHJcbiAgICByb2Fkc1JlYWR5OiBmYWxzZSxcclxuICAgIGRyYXduUm9hZHM6IFtdLFxyXG4gICAgdmlzaWJsZUNodW5rczogbmV3IFNldCgpLFxyXG4gICAgXHJcbiAgICByb2FkTGF5ZXJzOiB7fSxcclxuXHJcbiAgICBidWlsZGluZ0xheWVyczoge31cclxufTtcclxuXHJcbmxldCBjYWNoZWRSb2FkcyA9IFtdO1xyXG5sZXQgY2FjaGVEaXJ0eSA9IHRydWU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFya1JvYWRDYWNoZURpcnR5KCkge1xyXG4gICAgY2FjaGVEaXJ0eSA9IHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxMb2FkZWRSb2FkcygpIHtcclxuXHJcbiAgICBpZiAoIXJvYWRzU3RhdGU/LmNodW5rcykgcmV0dXJuIFtdO1xyXG5cclxuICAgIGlmICghY2FjaGVEaXJ0eSkgcmV0dXJuIGNhY2hlZFJvYWRzO1xyXG5cclxuICAgIGNhY2hlZFJvYWRzID0gT2JqZWN0LnZhbHVlcyhyb2Fkc1N0YXRlLmNodW5rcylcclxuICAgICAgICAuZmlsdGVyKGMgPT4gYz8uc3RhdHVzID09PSAnbG9hZGVkJyAmJiBBcnJheS5pc0FycmF5KGMucm9hZHMpKVxyXG4gICAgICAgIC5mbGF0TWFwKGMgPT4gYy5yb2Fkcyk7XHJcblxyXG4gICAgY2FjaGVEaXJ0eSA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBjYWNoZWRSb2FkcztcclxufSIsImltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGVidWcuanMnO1xuaW1wb3J0IHsga25vd25ab25lcywgZ2V0Wm9uZVN0YXRzLCBzeW5jS25vd25ab25lcyB9IGZyb20gJy4vem9uZVN5bmMuanMnO1xuaW1wb3J0IHsgZmx5VG8gfSBmcm9tICcuLi9tYXAuanMnO1xuaW1wb3J0IHsgYWRkUm9hZHNDaHVuayB9IGZyb20gJy4uLy4uL3V0aWxzL2NodW5rLmpzJztcblxubGV0IHBhbmVsID0gbnVsbDtcbmxldCBpc1BhbmVsT3BlbiA9IGZhbHNlO1xubGV0IHRvZ2dsZUJ0biA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0Wm9uZURlYnVnUGFuZWwoKSB7XG4gICAgLy8gQm91dG9uIHRvZ2dsZSAodG91am91cnMgdmlzaWJsZSlcbiAgICB0b2dnbGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2dnbGVCdG4uaWQgPSAnem9uZS1kZWJ1Zy10b2dnbGUnO1xuICAgIHRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICfwn5ONIFpvbmVzJztcbiAgICB0b2dnbGVCdG4uc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgICAgICBjb2xvcjogI2VlZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgYDtcbiAgICB0b2dnbGVCdG4ub25jbGljayA9IHRvZ2dsZVBhbmVsO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9nZ2xlQnRuKTtcblxuICAgIC8vIFBhbmVsIChjYWNow6kgcGFyIGTDqWZhdXQpXG4gICAgcGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYW5lbC5pZCA9ICd6b25lLWRlYnVnLXBhbmVsJztcbiAgICBwYW5lbC5zdHlsZS5jc3NUZXh0ID0gYFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgICAgICAgY29sb3I6ICNlZWU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGA7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYW5lbCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVBhbmVsKCkge1xuICAgIGlzUGFuZWxPcGVuID0gIWlzUGFuZWxPcGVuO1xuICAgIHBhbmVsLnN0eWxlLmRpc3BsYXkgPSBpc1BhbmVsT3BlbiA/ICdmbGV4JyA6ICdub25lJztcbiAgICB0b2dnbGVCdG4uc3R5bGUuYmFja2dyb3VuZCA9IGlzUGFuZWxPcGVuID8gJyM1NTUnIDogJyMzMzMnO1xuICAgIGlmIChpc1BhbmVsT3BlbikgcmVmcmVzaFBhbmVsKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hQYW5lbCgpIHtcbiAgICBhd2FpdCBzeW5jS25vd25ab25lcygpO1xuICAgIHJlbmRlclBhbmVsKCk7XG4gICAgZGVidWdMb2coXCJ6b25lc1wiLCBgJHtnZXRab25lU3RhdHMoKS50b3RhbH0gem9uZXMgZW4gYmFzZWApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQYW5lbCgpIHtcbiAgICBpZiAoIXBhbmVsKSByZXR1cm47XG5cbiAgICBjb25zdCBzdGF0cyA9IGdldFpvbmVTdGF0cygpO1xuICAgIGNvbnN0IHpvbmVzID0gc3RhdHMuem9uZXM7XG4gICAgY29uc3Qgd2l0aFJvYWRzID0gem9uZXMuZmlsdGVyKHogPT4gei51cGRhdGVkQXQpLmxlbmd0aDtcbiAgICBjb25zdCB3aXRob3V0ID0gem9uZXMubGVuZ3RoIC0gd2l0aFJvYWRzO1xuXG4gICAgcGFuZWwuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogNnB4IDhweDsgYmFja2dyb3VuZDogIzIyMjsgZm9udC13ZWlnaHQ6IGJvbGQ7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgIDxzcGFuPvCfk40gWm9uZXMgZW4gYmFzZTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZGlzcGxheTogZmxleDsgZ2FwOiA4cHg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogIzhmODsgZm9udC1zaXplOiAxMHB4O1wiPiR7em9uZXMubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiem9uZS1yZWZyZXNoLWJ0blwiIHN0eWxlPVwiYmFja2dyb3VuZDogIzQ0NDsgYm9yZGVyOiAxcHggc29saWQgIzY2NjsgY29sb3I6ICNlZWU7IGJvcmRlci1yYWRpdXM6IDNweDsgcGFkZGluZzogMnB4IDZweDsgY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDEwcHg7XCI+8J+UhDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDRweCA4cHg7IGJhY2tncm91bmQ6ICMxYTFhMWE7IGNvbG9yOiAjYWFhOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzsgZm9udC1zaXplOiAxMHB4O1wiPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogIzZhZlwiPuKXjyAke3dpdGhSb2Fkc30gZ8OpbsOpcsOpZXM8L3NwYW4+XG4gICAgICAgICAgICAmbmJzcDt8Jm5ic3A7XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiAjODg4XCI+4pePICR7d2l0aG91dH0gdmlkZXM8L3NwYW4+XG4gICAgICAgICAgICAmbmJzcDt8Jm5ic3A7XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiAjZTQ0XCI+4pePIHJvdWdlID0gw6AgZ8OpbsOpcmVyPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInpvbmUtbGlzdFwiIHN0eWxlPVwib3ZlcmZsb3cteTogYXV0bzsgbWF4LWhlaWdodDogMjIwcHg7IHBhZGRpbmc6IDJweDtcIj5cbiAgICAgICAgICAgICR7em9uZXMubGVuZ3RoID09PSAwID8gJzxkaXYgc3R5bGU9XCJwYWRkaW5nOiA4cHg7IGNvbG9yOiAjNjY2OyB0ZXh0LWFsaWduOiBjZW50ZXI7XCI+QXVjdW5lIHpvbmUgZW4gYmFzZTwvZGl2PicgOiAnJ31cbiAgICAgICAgICAgICR7em9uZXMubWFwKHpvbmUgPT4gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ6b25lLXJvd1wiIGRhdGEtaWQ9XCIke3pvbmUuaWR9XCJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwicGFkZGluZzogM3B4IDhweDsgY3Vyc29yOiBwb2ludGVyOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJhMmEyYTsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBmb250LXNpemU6IDEwcHg7XCJcbiAgICAgICAgICAgICAgICAgICAgIG9ubW91c2VvdmVyPVwidGhpcy5zdHlsZS5iYWNrZ3JvdW5kPScjMzMzJ1wiXG4gICAgICAgICAgICAgICAgICAgICBvbm1vdXNlb3V0PVwidGhpcy5zdHlsZS5iYWNrZ3JvdW5kPSd0cmFuc3BhcmVudCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHt6b25lLmxhdE1pbn0sJHt6b25lLmxuZ01pbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6ICR7em9uZS51cGRhdGVkQXQgPyAnIzZmNicgOiAnIzg4OCd9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3pvbmUudXBkYXRlZEF0ID8gJ+KckycgOiAnwrcnfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgKS5qb2luKCcnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nOiA0cHggOHB4OyBiYWNrZ3JvdW5kOiAjMWExYTFhOyBjb2xvcjogIzY2NjsgZm9udC1zaXplOiA5cHg7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzO1wiPlxuICAgICAgICAgICAgY2xpYyA9IG5hdmlndWVyIMK3IGRvdWJsZS1jbGljID0gZ8OpbsOpcmVyXG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBjb25zdCByZWZyZXNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3pvbmUtcmVmcmVzaC1idG4nKTtcbiAgICBpZiAocmVmcmVzaEJ0bikgcmVmcmVzaEJ0bi5vbmNsaWNrID0gKGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgcmVmcmVzaFBhbmVsKCk7IH07XG5cbiAgICBwYW5lbC5xdWVyeVNlbGVjdG9yQWxsKCcuem9uZS1yb3cnKS5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgIHJvdy5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludChyb3cuZGF0YXNldC5pZCk7XG4gICAgICAgICAgICBjb25zdCB6b25lID0gem9uZXMuZmluZCh6ID0+IHouaWQgPT09IGlkKTtcbiAgICAgICAgICAgIGlmICh6b25lKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xpYyBzaW1wbGUgOiBmbHkgdmVycyBsZSBjb2luIHN1cMOpcmlldXIgZ2F1Y2hlIGRlIGxhIHpvbmVcbiAgICAgICAgICAgICAgICBjb25zdCBsYXQgPSBOdW1iZXIoem9uZS5sYXRNaW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxuZyA9IE51bWJlcih6b25lLmxuZ01pbik7XG4gICAgICAgICAgICAgICAgZmx5VG8obGF0ICsgMC4wMDUsIGxuZyArIDAuMDA1LCAxNik7XG4gICAgICAgICAgICAgICAgZGVidWdMb2coXCJ6b25lc1wiLCBgZmx5VG8gem9uZSAke3pvbmUubGF0TWlufSwke3pvbmUubG5nTWlufWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJvdy5vbmRibGNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludChyb3cuZGF0YXNldC5pZCk7XG4gICAgICAgICAgICBjb25zdCB6b25lID0gem9uZXMuZmluZCh6ID0+IHouaWQgPT09IGlkKTtcbiAgICAgICAgICAgIGlmICh6b25lKSB7XG4gICAgICAgICAgICAgICAgLy8gRG91YmxlLWNsaWMgOiByZWxhbmNlciBsYSBnw6luw6lyYXRpb24gcG91ciBjZXR0ZSB6b25lXG4gICAgICAgICAgICAgICAgY29uc3QgbGF0ID0gTnVtYmVyKHpvbmUubGF0TWluKSArIDAuMDA1O1xuICAgICAgICAgICAgICAgIGNvbnN0IGxuZyA9IE51bWJlcih6b25lLmxuZ01pbikgKyAwLjAwNTtcbiAgICAgICAgICAgICAgICBkZWJ1Z0xvZyhcInpvbmVzXCIsIGBSw6lnw6luw6lyYXRpb24gem9uZSAke3pvbmUubGF0TWlufSwke3pvbmUubG5nTWlufWApO1xuICAgICAgICAgICAgICAgIGFkZFJvYWRzQ2h1bmsobGF0LCBsbmcsIDIwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IHJlZnJlc2hQYW5lbCB9O1xuIiwiaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnRXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kZWJ1Zy5qcyc7XG5cbi8vIFNldCBkZXMgYmJveEtleXMgZGVzIHpvbmVzIGNvbm51ZXMgZW4gYmFzZSAoY2hhcmfDqSBhdSBkw6ltYXJyYWdlKS5cbmV4cG9ydCBjb25zdCBrbm93bkJib3hLZXlzID0gbmV3IFNldCgpO1xuXG4vLyBEw6l0YWlscyBkZXMgem9uZXMgKHBvdXIgbGUgcGFubmVhdSBkZSBkZWJ1ZykuXG5leHBvcnQgY29uc3Qga25vd25ab25lcyA9IFtdO1xuXG4vKipcbiAqIENoYXJnZSBsYSBsaXN0ZSBkZXMgem9uZXMgZGVwdWlzIGwnQVBJIGV0IG1ldCDDoCBqb3VyIGtub3duQmJveEtleXMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzeW5jS25vd25ab25lcygpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3pvbmVzL3N0YXR1cycpO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAga25vd25CYm94S2V5cy5jbGVhcigpO1xuICAgICAgICBpZiAoZGF0YS5iYm94S2V5cykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZGF0YS5iYm94S2V5cykge1xuICAgICAgICAgICAgICAgIGtub3duQmJveEtleXMuYWRkKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNZXQgw6Agam91ciBrbm93blpvbmVzIChwb3VyIGxlIHBhbm5lYXUpXG4gICAgICAgIGtub3duWm9uZXMubGVuZ3RoID0gMDtcbiAgICAgICAgaWYgKGRhdGEuem9uZXMpIHtcbiAgICAgICAgICAgIGtub3duWm9uZXMucHVzaCguLi5kYXRhLnpvbmVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlYnVnTG9nKFwiem9uZXNcIiwgYCR7a25vd25CYm94S2V5cy5zaXplfSB6b25lcyBjb25udWVzIGVuIGJhc2VgKTtcbiAgICAgICAgcmV0dXJuIGtub3duQmJveEtleXMuc2l6ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGRlYnVnRXJyb3IoXCJ6b25lc1wiLCBcIkVycmV1ciBzeW5jIHpvbmVzOlwiLCBlKTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuXG4vKipcbiAqIEFqb3V0ZSB1bmUgYmJveEtleSBsb2NhbGUgKGFwcsOocyB1bmUgZ8OpbsOpcmF0aW9uIHLDqXVzc2llKS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEtub3duQmJveEtleShiYm94S2V5KSB7XG4gICAga25vd25CYm94S2V5cy5hZGQoYmJveEtleSk7XG59XG5cbi8qKlxuICogUmV0b3VybmUgZGVzIHN0YXRzIHN1ciBsZXMgem9uZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRab25lU3RhdHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG90YWw6IGtub3duQmJveEtleXMuc2l6ZSxcbiAgICAgICAgem9uZXM6IGtub3duWm9uZXMsXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xuXG5sZXQgcGFuZWwgPSBudWxsO1xubGV0IGlzUGFuZWxPcGVuID0gZmFsc2U7XG5sZXQgdG9nZ2xlQnRuID0gbnVsbDtcbmxldCBwb2xsSW50ZXJ2YWwgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFdvcmxkRXhwYW5zaW9uUHJvZ3Jlc3NQYW5lbCgpIHtcbiAgICAvLyBCb3V0b24gdG9nZ2xlXG4gICAgdG9nZ2xlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9nZ2xlQnRuLmlkID0gJ2V4cGFuc2lvbi1wcm9ncmVzcy10b2dnbGUnO1xuICAgIHRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9ICfwn4yNIEV4cGFuc2lvbic7XG4gICAgdG9nZ2xlQnRuLnN0eWxlLmNzc1RleHQgPSBgXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICByaWdodDogMTAwcHg7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgICAgIGNvbG9yOiAjZWVlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBgO1xuICAgIHRvZ2dsZUJ0bi5vbmNsaWNrID0gdG9nZ2xlUGFuZWw7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b2dnbGVCdG4pO1xuXG4gICAgLy8gUGFuZWxcbiAgICBwYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhbmVsLmlkID0gJ2V4cGFuc2lvbi1wcm9ncmVzcy1wYW5lbCc7XG4gICAgcGFuZWwuc3R5bGUuY3NzVGV4dCA9IGBcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgIHJpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAyMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICAgICAgICBjb2xvcjogI2VlZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhbmVsKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUGFuZWwoKSB7XG4gICAgaXNQYW5lbE9wZW4gPSAhaXNQYW5lbE9wZW47XG4gICAgcGFuZWwuc3R5bGUuZGlzcGxheSA9IGlzUGFuZWxPcGVuID8gJ2ZsZXgnIDogJ25vbmUnO1xuICAgIHRvZ2dsZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gaXNQYW5lbE9wZW4gPyAnIzU1NScgOiAnIzMzMyc7XG5cbiAgICBpZiAoaXNQYW5lbE9wZW4pIHtcbiAgICAgICAgcmVmcmVzaFBhbmVsKCk7XG4gICAgICAgIHBvbGxJbnRlcnZhbCA9IHNldEludGVydmFsKHJlZnJlc2hQYW5lbCwgNTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChwb2xsSW50ZXJ2YWwpO1xuICAgICAgICBwb2xsSW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFBhbmVsKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvd29ybGQtZXhwYW5zaW9uL3N0YXR1cycpO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICBjb25zdCBzdGF0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmVuZGVyUGFuZWwoc3RhdHMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZGVidWdFcnJvcihcImV4cGFuc2lvblwiLCBcIkVycmV1ciByZWZyZXNoOlwiLCBlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBhbmVsKHN0YXRzKSB7XG4gICAgaWYgKCFwYW5lbCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdG90YWwgPSAoc3RhdHMucG9wdWxhdGVkIHx8IDApICsgKHN0YXRzLmVtcHR5IHx8IDApICsgKHN0YXRzLmZyb250aWVyIHx8IDApO1xuICAgIGNvbnN0IHByb2dyZXNzID0gdG90YWwgPiAwID8gKChzdGF0cy5wb3B1bGF0ZWQgLyB0b3RhbCkgKiAxMDApLnRvRml4ZWQoMSkgOiAwO1xuXG4gICAgcGFuZWwuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogNnB4IDhweDsgYmFja2dyb3VuZDogIzIyMjsgZm9udC13ZWlnaHQ6IGJvbGQ7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgICAgICAgIDxzcGFuPvCfjI0gRXhwYW5zaW9uPC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImV4cGFuc2lvbi1yZWZyZXNoLWJ0blwiIHN0eWxlPVwiYmFja2dyb3VuZDogIzQ0NDsgYm9yZGVyOiAxcHggc29saWQgIzY2NjsgY29sb3I6ICNlZWU7IGJvcmRlci1yYWRpdXM6IDNweDsgcGFkZGluZzogMnB4IDZweDsgY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDEwcHg7XCI+8J+UhDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDRweCA4cHg7IGJhY2tncm91bmQ6ICMxYTFhMWE7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1wiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6ICMzMzM7IGJvcmRlci1yYWRpdXM6IDNweDsgaGVpZ2h0OiA4cHg7IG92ZXJmbG93OiBoaWRkZW47IG1hcmdpbi1ib3R0b206IDRweDtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogIzRhNDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogJHtwcm9ncmVzc30lOyB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiAjOGY4XCI+JHtwcm9ncmVzc30lPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDRweCA4cHg7IGJhY2tncm91bmQ6ICMxYTFhMWE7IGNvbG9yOiAjYWFhOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzsgZm9udC1zaXplOiAxMHB4O1wiPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogIzZhZlwiPuKXjyAke3N0YXRzLnBvcHVsYXRlZCB8fCAwfSBwZXVwbMOpczwvc3Bhbj5cbiAgICAgICAgICAgICZuYnNwO3wmbmJzcDtcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6ICNlNDRcIj7il48gJHtzdGF0cy5lbXB0eSB8fCAwfSB2aWRlczwvc3Bhbj5cbiAgICAgICAgICAgICZuYnNwO3wmbmJzcDtcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6ICNmYTBcIj7il48gJHtzdGF0cy5mcm9udGllciB8fCAwfSBmcm9udGnDqHJlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDRweCA4cHg7IGJhY2tncm91bmQ6ICMxYTFhMWE7IGNvbG9yOiAjNjY2OyBmb250LXNpemU6IDlweDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzM7XCI+XG4gICAgICAgICAgICBGcm9udGnDqHJlID0gY2h1bmtzIGVuIGF0dGVudGUgZGUgZ8OpbsOpcmF0aW9uXG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBjb25zdCByZWZyZXNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cGFuc2lvbi1yZWZyZXNoLWJ0bicpO1xuICAgIGlmIChyZWZyZXNoQnRuKSB7XG4gICAgICAgIHJlZnJlc2hCdG4ub25jbGljayA9IChlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IHJlZnJlc2hQYW5lbCgpOyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IHsgcmVmcmVzaFBhbmVsIH07XG4iLCJleHBvcnQgZnVuY3Rpb24gaW5pdE5vdGlmaWNhdGlvbnMoKVxyXG57XHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2h0bXg6YWZ0ZXJTd2FwJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1ldmVudF0nKTtcclxuICAgICAgICBldmVudHMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IEpTT04ucGFyc2UoZWwuZGF0YXNldC5ldmVudCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnZ2FtZTpldmVudCcsIHsgZGV0YWlsOiBldmVudCB9KSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIHBhcnNpbmcgZXZlbnQ6JywgZXJyKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIGVsLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSwgdHlwZSA9ICdpbmZvJykge1xyXG5cclxuICAgIGNvbnN0IG5vdGlmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBub3RpZi5jbGFzc05hbWUgPSBgbm90aWYgbm90aWYtJHt0eXBlfWA7XHJcbiAgICBub3RpZi50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub3RpZik7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbm90aWYucmVtb3ZlKCk7XHJcbiAgICB9LCAzMDAwKTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwL21hcC5qcyc7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uIH0gZnJvbSAnLi4vYnVpbGRpbmdzL2Jhc2UuanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU1RBVEVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgYmFzZUNpcmNsZXMgPSBuZXcgTWFwKCk7IC8vIGJhc2VJZCAtPiBjaXJjbGUgbGF5ZXJcclxuY29uc3Qgcm9hZFNlZ21lbnRzID0gbmV3IE1hcCgpOyAvLyByb2FkSWQgLT4gcG9seWxpbmUgbGF5ZXJcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZBQ1RJT04gQ09MT1JTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IEZBQ1RJT05fQ09MT1JTID0ge1xyXG4gICAgJ2RlZmF1bHQnOiAnIzI3YWU2MCcsICAvLyB2ZXJ0IHBhciBkw6lmYXV0XHJcbiAgICAnZW1waXJlJzogJyNlNzRjM2MnLCAgIC8vIHJvdWdlXHJcbiAgICAnY2VuZHJlcyc6ICcjMzQ5OGRiJywgICAgLy8gYmxldVxyXG4gICAgJ25vbWFkZXMnOiAnI2YzOWMxMicsICAvLyBvcmFuZ2VcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldEZhY3Rpb25Db2xvcihmYWN0aW9uKSB7XHJcbiAgICByZXR1cm4gRkFDVElPTl9DT0xPUlNbZmFjdGlvbj8udG9Mb3dlckNhc2UoKV0gfHwgRkFDVElPTl9DT0xPUlNbJ2RlZmF1bHQnXTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQkFTRSBDSVJDTEVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdCYXNlQ2lyY2xlKGJhc2VJZCwgbGF0LCBsbmcsIGZhY3Rpb24sIGlzUGxheWVyQmFzZSA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcGxheWVyRmFjdGlvbiA9IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XHJcbiAgICBjb25zdCBjb2xvciA9IGlzUGxheWVyQmFzZVxyXG4gICAgICAgID8gJyMyN2FlNjAnICAvLyB2ZXJ0IHBvdXIgbm90cmUgYmFzZVxyXG4gICAgICAgIDogZ2V0RmFjdGlvbkNvbG9yKGZhY3Rpb24pO1xyXG5cclxuICAgIC8vIFN1cHByaW1lciBsJ2FuY2llbiBjZXJjbGUgc2kgZXhpc3RlXHJcbiAgICBpZiAoYmFzZUNpcmNsZXMuaGFzKGJhc2VJZCkpIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIoYmFzZUNpcmNsZXMuZ2V0KGJhc2VJZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNpcmNsZSA9IEwuY2lyY2xlKFtsYXQsIGxuZ10sIHtcclxuICAgICAgICByYWRpdXM6IDUwMCxcclxuICAgICAgICBjb2xvcjogY29sb3IsXHJcbiAgICAgICAgd2VpZ2h0OiAyLFxyXG4gICAgICAgIGZpbGxPcGFjaXR5OiAwXHJcbiAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgIGJhc2VDaXJjbGVzLnNldChiYXNlSWQsIGNpcmNsZSk7XHJcbiAgICByZXR1cm4gY2lyY2xlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQmFzZUNpcmNsZShiYXNlSWQpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBpZiAoYmFzZUNpcmNsZXMuaGFzKGJhc2VJZCkpIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIoYmFzZUNpcmNsZXMuZ2V0KGJhc2VJZCkpO1xyXG4gICAgICAgIGJhc2VDaXJjbGVzLmRlbGV0ZShiYXNlSWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJBbGxCYXNlQ2lyY2xlcygpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBiYXNlQ2lyY2xlcy5mb3JFYWNoKGNpcmNsZSA9PiBtYXAucmVtb3ZlTGF5ZXIoY2lyY2xlKSk7XHJcbiAgICBiYXNlQ2lyY2xlcy5jbGVhcigpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBST0FEIFNFR01FTlRTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBkcmF3Um9hZFNlZ21lbnQocm9hZElkLCBjb29yZHMsIGZhY3Rpb24pIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXAgfHwgIWNvb3JkcyB8fCBjb29yZHMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckZhY3Rpb24gPSBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xyXG4gICAgY29uc3QgY29sb3IgPSBmYWN0aW9uID09PSBwbGF5ZXJGYWN0aW9uXHJcbiAgICAgICAgPyAnIzI3YWU2MCcgIC8vIHZlcnQgcG91ciBub3Mgcm91dGVzXHJcbiAgICAgICAgOiBnZXRGYWN0aW9uQ29sb3IoZmFjdGlvbik7XHJcblxyXG4gICAgLy8gU3VwcHJpbWVyIGwnYW5jaWVuIHNlZ21lbnQgc2kgZXhpc3RlXHJcbiAgICBpZiAocm9hZFNlZ21lbnRzLmhhcyhyb2FkSWQpKSB7XHJcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKHJvYWRTZWdtZW50cy5nZXQocm9hZElkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9seWxpbmUgPSBMLnBvbHlsaW5lKGNvb3Jkcywge1xyXG4gICAgICAgIGNvbG9yOiBjb2xvcixcclxuICAgICAgICB3ZWlnaHQ6IDMsXHJcbiAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgIGRhc2hBcnJheTogJzgsOCdcclxuICAgIH0pLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgcm9hZFNlZ21lbnRzLnNldChyb2FkSWQsIHBvbHlsaW5lKTtcclxuICAgIHJldHVybiBwb2x5bGluZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVJvYWRTZWdtZW50KHJvYWRJZCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGlmIChyb2FkU2VnbWVudHMuaGFzKHJvYWRJZCkpIHtcclxuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIocm9hZFNlZ21lbnRzLmdldChyb2FkSWQpKTtcclxuICAgICAgICByb2FkU2VnbWVudHMuZGVsZXRlKHJvYWRJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFsbFJvYWRTZWdtZW50cygpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICByb2FkU2VnbWVudHMuZm9yRWFjaChwb2x5bGluZSA9PiBtYXAucmVtb3ZlTGF5ZXIocG9seWxpbmUpKTtcclxuICAgIHJvYWRTZWdtZW50cy5jbGVhcigpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVUERBVEUgRlVOQ1RJT05TXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVCYXNlQ2lyY2xlcyhiYXNlcykge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckZhY3Rpb24gPSBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpO1xyXG5cclxuICAgIGJhc2VzLmZvckVhY2goYmFzZSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNQbGF5ZXJCYXNlID0gYmFzZS5mYWN0aW9uID09PSBwbGF5ZXJGYWN0aW9uO1xyXG4gICAgICAgIGRyYXdCYXNlQ2lyY2xlKGJhc2UuaWQsIGJhc2UubGF0LCBiYXNlLmxuZywgYmFzZS5mYWN0aW9uLCBpc1BsYXllckJhc2UpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSb2FkU2VnbWVudHMocm9hZHMpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJGYWN0aW9uID0gZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKTtcclxuXHJcbiAgICByb2Fkcy5mb3JFYWNoKHJvYWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzUGxheWVyUm9hZCA9IHJvYWQuZmFjdGlvbiA9PT0gcGxheWVyRmFjdGlvbjtcclxuICAgICAgICBkcmF3Um9hZFNlZ21lbnQocm9hZC5pZCwgcm9hZC5jb29yZHMsIHJvYWQuZmFjdGlvbik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVVRJTElUWVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Um9hZFNlZ21lbnRDb2xvcihyb2FkSWQsIGNvbG9yKSB7XHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHJvYWRTZWdtZW50cy5oYXMocm9hZElkKSkge1xyXG4gICAgICAgIHJvYWRTZWdtZW50cy5nZXQocm9hZElkKS5zZXRTdHlsZSh7IGNvbG9yIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4uL25vdGlmaWNhdGlvbnMuanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUEFUSEZJTkRJTkcgREVCVUcgLSBDTElDSyBUTyBHRVQgQ09PUkRJTkFURVNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkbWluQ29vcmRzKGxhdCwgbG5nKSB7XHJcbiAgICBpZiAobGF0ID09PSB1bmRlZmluZWQgfHwgbG5nID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBmb3JtYXQgPSBgJHtsYXQudG9GaXhlZCg2KX0sJHtsbmcudG9GaXhlZCg2KX1gO1xyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZm9ybWF0KTtcclxuICAgIHNob3dOb3RpZmljYXRpb24oXCJGb3JtYXQgY29sbGFibGUgYWRtaW4gY29wacOpIDogXCIgKyBmb3JtYXQsICdzdWNjZXNzJyk7XHJcbn0iLCJpbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcbmltcG9ydCB7IHJlZnJlc2hDaHVuayB9IGZyb20gJy4uL21hcC9yb2Fkcy9yb2Fkcy5qcyc7XG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdFcnJvciwgZGVidWdXYXJuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVidWcuanMnO1xuaW1wb3J0IHsgc25hcFRvQ2h1bmsgfSBmcm9tICcuL3NuYXAuanMnO1xuXG5leHBvcnQgY29uc3QgQ0hVTktfU0laRSA9IDAuMDE7XG5leHBvcnQgY29uc3QgQ0hVTktfUkFESVVTID0gMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1JPQURfUkFESVVTID0gMjAwO1xuXG5sZXQgaXNQZW5kaW5nID0gZmFsc2U7XG5cbi8qKlxuICogQWpvdXRlIGRlcyByb3V0ZXMgcGFyIGNsaWMgc3VyIGxhIGNhcnRlLlxuICogU2kgZGVzIHJvdXRlcyBleGlzdGVudCBkw6lqw6AgZGFucyBsYSB6b25lLCBuZSBmYWl0IHJpZW4uXG4gKiBTaW5vbiwgcsOpY3Vww6hyZSBsZXMgcm91dGVzIGRlcHVpcyBPdmVycGFzcyBldCBsZXMgY3LDqWUuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRSb2Fkc0NodW5rKGxhdCwgbG5nLCByYWRpdXMgPSBERUZBVUxUX1JPQURfUkFESVVTKSB7XG4gICAgaWYgKGlzUGVuZGluZykge1xuICAgICAgICBkZWJ1Z1dhcm4oXCJjaHVua3NcIiwgXCJHZW5lcmF0aW9uIGFscmVhZHkgaW4gcHJvZ3Jlc3MsIGlnbm9yaW5nIGNsaWNrXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcbiAgICBpZiAobWFwKSBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ3dhaXQnO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9hZGQtcm9hZHMtY2h1bmsnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBsYXQsIGxuZywgcmFkaXVzIH0pLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFQSSBlcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIC8vIEZlZWRiYWNrIHZpc3VlbFxuICAgICAgICBzaG93R2VuZXJhdGlvbkZlZWRiYWNrKGRhdGEpO1xuXG4gICAgICAgIC8vIFJlZnJlc2ggdG91cyBsZXMgY2h1bmtzIGFmZmVjdMOpc1xuICAgICAgICBjb25zdCBjaHVua0lkcyA9IGNvbXB1dGVBZmZlY3RlZENodW5rSWRzKGxhdCwgbG5nLCBkYXRhKTtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoY2h1bmtJZHMubWFwKGlkID0+IHJlZnJlc2hDaHVuayhpZCkpKTtcblxuICAgICAgICBkZWJ1Z0xvZyhcImNodW5rc1wiLCBgUm9hZHM6ICR7ZGF0YS5yb2Fkc19jcmVhdGVkfSBjcmVhdGVkLCBhbHJlYWR5X3BvcHVsYXRlZD0ke2RhdGEuYWxyZWFkeV9wb3B1bGF0ZWR9YCk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBkZWJ1Z0Vycm9yKFwiY2h1bmtzXCIsIFwiRmFpbGVkIHRvIGFkZCByb2FkcyBjaHVuazpcIiwgZXJyKTtcbiAgICAgICAgc2hvd1RvYXN0KFwiRXJyZXVyOiBcIiArIGVyci5tZXNzYWdlLCBcImVycm9yXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBpc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKG1hcCkgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxlIGxhIGxpc3RlIGRlcyBjaHVua0lkcyDDoCByYWZyYcOuY2hpciBhcHLDqHMgdW5lIGfDqW7DqXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gY29tcHV0ZUFmZmVjdGVkQ2h1bmtJZHMobGF0LCBsbmcsIGRhdGEpIHtcbiAgICBjb25zdCBpZHMgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyBDaHVuayBkdSBjbGljXG4gICAgY29uc3QgY2xpY2tTbmFwID0gc25hcFRvQ2h1bmsobGF0LCBsbmcpO1xuICAgIGlkcy5hZGQoY2xpY2tTbmFwLmJib3hLZXkpO1xuXG4gICAgLy8gQ2h1bmtzIGRlcyByb3V0ZXMgcmV0b3VybsOpZXNcbiAgICBpZiAoZGF0YS5yb2FkcyAmJiBBcnJheS5pc0FycmF5KGRhdGEucm9hZHMpKSB7XG4gICAgICAgIGZvciAoY29uc3Qgcm9hZCBvZiBkYXRhLnJvYWRzKSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZC5wb2ludHMpKSBjb250aW51ZTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3B0TGF0LCBwdExuZ10gb2Ygcm9hZC5wb2ludHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbmFwID0gc25hcFRvQ2h1bmsocHRMYXQsIHB0TG5nKTtcbiAgICAgICAgICAgICAgICBpZHMuYWRkKHNuYXAuYmJveEtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gWy4uLmlkc107XG59XG5cbi8qKlxuICogQWZmaWNoZSB1biBmZWVkYmFjayB2aXN1ZWwgc2Vsb24gbGUgcsOpc3VsdGF0IGRlIGxhIGfDqW7DqXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2hvd0dlbmVyYXRpb25GZWVkYmFjayhkYXRhKSB7XG4gICAgaWYgKGRhdGEucm9hZHNfY3JlYXRlZCA+IDApIHtcbiAgICAgICAgc2hvd1RvYXN0KGAke2RhdGEucm9hZHNfY3JlYXRlZH0gcm91dGUocykgYWpvdXTDqWUocylgLCBcInN1Y2Nlc3NcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd1RvYXN0KFwiVG91dGVzIGxlcyByb3V0ZXMgc29udCBkw6lqw6AgcHLDqXNlbnRlc1wiLCBcImluZm9cIik7XG4gICAgfVxufVxuXG4vKipcbiAqIEFmZmljaGUgdW4gdG9hc3QgZCdpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dUb2FzdChtZXNzYWdlLCB0eXBlID0gXCJpbmZvXCIpIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgndG9hc3QnLCB7IGRldGFpbDogeyBtZXNzYWdlLCB0eXBlIH0gfSk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgZGVidWdMb2coXCJ0b2FzdFwiLCBgWyR7dHlwZX1dICR7bWVzc2FnZX1gKTtcbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcXVlc3RBcGlSb2Fkc0FuZENodW5rc0J0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XG5cbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7XG4gICAgc2hvd1RvYXN0KFwiQ2xpcXVleiBzdXIgbGEgY2FydGUgcG91ciBham91dGVyIGxlcyByb3V0ZXNcIiwgXCJpbmZvXCIpO1xuXG4gICAgbWFwLm9uY2UoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcblxuICAgICAgICBjb25zdCB7IGxhdCwgbG5nIH0gPSBlLmxhdGxuZztcblxuICAgICAgICBkZWJ1Z0xvZyhcIm5ldHdvcmtcIiwgXCLwn5OhIGFkZGluZyByb2FkcyBjaHVuayBhdDpcIiwgbGF0LCBsbmcpO1xuXG4gICAgICAgIGF3YWl0IGFkZFJvYWRzQ2h1bmsobGF0LCBsbmcsIERFRkFVTFRfUk9BRF9SQURJVVMpO1xuXG4gICAgICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnJztcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgZmx5VG8gfSBmcm9tICcuLi9tYXAvbWFwLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R1BTKGRlZmF1bHRMYXQsIGRlZmF1bHRMbmcpIHtcclxuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgICAgICBsZXQgZ3BzRm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oXHJcbiAgICAgICAgICAgIChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ3BzRm91bmQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGZseVRvKFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGltZW91dDogNTAwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZ3BzRm91bmQpIHtcclxuICAgICAgICAgICAgICAgIGZseVRvKGRlZmF1bHRMYXQsIGRlZmF1bHRMbmcsIDcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTUwMCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDSFVOS19TSVpFIH0gZnJvbSAnLi9jaHVuay5qcyc7XG5cbi8qKlxuICogUmV0b3VybmUgbGEgYm91bmRpbmcgYm94IChncmlsbGUgQ0hVTktfU0laRSDDlyBDSFVOS19TSVpFKSBwb3VyIHVuIHBvaW50IEdQUy5cbiAqXG4gKiBVdGlsaXNlIE1hdGguZmxvb3IobGF0IC8gQ0hVTktfU0laRSkg4oCUIGxhIG3Dqm1lIGZvcm11bGUgcXVlIGxlIGJhY2tlbmRcbiAqIChDb29yZGluYXRlU2VydmljZTo6Z2V0Qm91bmRpbmdCb3gpLCBwb3VyIGdhcmFudGlyIGxhIGNvaMOpcmVuY2UgZnJvbnQvYmFjay5cbiAqXG4gKiBAcmV0dXJucyB7eyBsYXRNaW46IG51bWJlciwgbG5nTWluOiBudW1iZXIsIGxhdE1heDogbnVtYmVyLCBsbmdNYXg6IG51bWJlciwgYmJveEtleTogc3RyaW5nIH19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzbmFwVG9DaHVuayhsYXQsIGxuZykge1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGxhdCAvIENIVU5LX1NJWkUpO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGxuZyAvIENIVU5LX1NJWkUpO1xuXG4gICAgY29uc3QgbGF0TWluID0gTnVtYmVyKCh4ICogQ0hVTktfU0laRSkudG9GaXhlZCg4KSk7XG4gICAgY29uc3QgbG5nTWluID0gTnVtYmVyKCh5ICogQ0hVTktfU0laRSkudG9GaXhlZCg4KSk7XG4gICAgY29uc3QgbGF0TWF4ID0gTnVtYmVyKCgoeCArIDEpICogQ0hVTktfU0laRSkudG9GaXhlZCg4KSk7XG4gICAgY29uc3QgbG5nTWF4ID0gTnVtYmVyKCgoeSArIDEpICogQ0hVTktfU0laRSkudG9GaXhlZCg4KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsYXRNaW4sXG4gICAgICAgIGxuZ01pbixcbiAgICAgICAgbGF0TWF4LFxuICAgICAgICBsbmdNYXgsXG4gICAgICAgIGJib3hLZXk6IGAke2xhdE1pbn1fJHtsbmdNaW59YCxcbiAgICB9O1xufVxuIiwibGV0IHRpbWVySW50ZXJ2YWwgPSBudWxsO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCdWlsZGluZ1RpbWVycygpIHtcclxuXHJcbiAgICBpZiAodGltZXJJbnRlcnZhbCkgcmV0dXJuOyAvLyDDqXZpdGUgZG91YmxvbnNcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVUaW1lcnMoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGl2ZXJ5LXRpbWVyLXdyYXBwZXInKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2NoZWR1bGVkQXQgPSBlbC5kYXRhc2V0LnNjaGVkdWxlZEF0O1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lckVsID0gZWwucXVlcnlTZWxlY3RvcignLmRlbGl2ZXJ5LXRpbWVyJyk7XHJcbiAgICAgICAgICAgIGlmICghdGltZXJFbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFzY2hlZHVsZWRBdCkge1xyXG4gICAgICAgICAgICAgICAgdGltZXJFbC50ZXh0Q29udGVudCA9ICdBdWN1bmUgbGl2cmFpc29uIHByw6l2dWUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBjb25zdCBzY2hlZHVsZWQgPSBuZXcgRGF0ZShzY2hlZHVsZWRBdCkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzTmFOKHNjaGVkdWxlZCkpIHtcclxuICAgICAgICAgICAgICAgIHRpbWVyRWwudGV4dENvbnRlbnQgPSAnRGF0ZSBpbnZhbGlkZSc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmZTZWMgPSBNYXRoLmZsb29yKChzY2hlZHVsZWQgLSBub3cpIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlmZlNlYyA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnMgPSBNYXRoLmZsb29yKGRpZmZTZWMgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNzID0gZGlmZlNlYyAlIDYwO1xyXG4gICAgICAgICAgICAgICAgdGltZXJFbC5pbm5lckhUTUwgPSBgUHJvY2hhaW4gZMOpcGFydCBkYW5zIDogPHN0cm9uZz4ke21pbnN9bWluICR7c2Vjc31zPC9zdHJvbmc+YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBNYXRoLmFicyhkaWZmU2VjKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnMgPSBNYXRoLmZsb29yKGVsYXBzZWQgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNzID0gZWxhcHNlZCAlIDYwO1xyXG4gICAgICAgICAgICAgICAgdGltZXJFbC5pbm5lckhUTUwgPSBgQ29udm9pIGVuIHJvdXRlIGRlcHVpcyA6IDxzdHJvbmc+JHttaW5zfW1pbiAke3NlY3N9czwvc3Ryb25nPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUaW1lcnMoKTtcclxuICAgIHRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh1cGRhdGVUaW1lcnMsIDEwMDApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShpc29TdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZShpc29TdHJpbmcpLnRvTG9jYWxlU3RyaW5nKCdmci1GUicsIHtcclxuICAgICAgICB0aW1lWm9uZTogJ0V1cm9wZS9QYXJpcycsXHJcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICdsZWFmbGV0JztcclxuaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnO1xyXG5cclxuZGVsZXRlIEwuSWNvbi5EZWZhdWx0LnByb3RvdHlwZS5fZ2V0SWNvblVybDtcclxuTC5JY29uLkRlZmF1bHQubWVyZ2VPcHRpb25zKHtcclxuICAgIGljb25SZXRpbmFVcmw6IHJlcXVpcmUoJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24tMngucG5nJyksXHJcbiAgICBpY29uVXJsOiByZXF1aXJlKCdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1pY29uLnBuZycpLFxyXG4gICAgc2hhZG93VXJsOiByZXF1aXJlKCdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1zaGFkb3cucG5nJyksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTDsiLCJpbXBvcnQgeyBUWVBFX01BUCB9IGZyb20gJy4vdHlwZU1hcC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgREVCVUcgPSB7XHJcbiAgICBlbmFibGVkOiB3aW5kb3cuQVBQX0RFQlVHID8/IGZhbHNlLFxyXG5cclxuICAgIG1lcmN1cmU6IHRydWUsXHJcbiAgICBpbnZlbnRvcnk6IHRydWUsXHJcbiAgICBkZWxpdmVyeTogdHJ1ZSxcclxuICAgIGJ1aWxkaW5nczogdHJ1ZSxcclxuXHJcbiAgICBjaHVua3M6IHRydWUsXHJcbiAgICBuZXR3b3JrOiB0cnVlLFxyXG4gICAgY2FjaGU6IHRydWUsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjYW5Mb2codHlwZSkge1xyXG4gICAgaWYgKCFERUJVRy5lbmFibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleSA9IFRZUEVfTUFQPy5bdHlwZV0gfHwgdHlwZTtcclxuXHJcbiAgICByZXR1cm4gREVCVUdba2V5XSAhPT0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z0xvZyh0eXBlLCAuLi5hcmdzKSB7XHJcbiAgICBpZiAoIWNhbkxvZyh0eXBlKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBgWyR7VFlQRV9NQVA/Llt0eXBlXSB8fCB0eXBlfV1gLFxyXG4gICAgICAgIC4uLmFyZ3NcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z1dhcm4odHlwZSwgLi4uYXJncykge1xyXG4gICAgaWYgKCFjYW5Mb2codHlwZSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGBbJHtUWVBFX01BUD8uW3R5cGVdIHx8IHR5cGV9XWAsXHJcbiAgICAgICAgLi4uYXJnc1xyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnRXJyb3IodHlwZSwgLi4uYXJncykge1xyXG4gICAgaWYgKCFjYW5Mb2codHlwZSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICBgWyR7VFlQRV9NQVA/Llt0eXBlXSB8fCB0eXBlfV1gLFxyXG4gICAgICAgIC4uLmFyZ3NcclxuICAgICk7XHJcbn0iLCJleHBvcnQgY29uc3QgVFlQRV9NQVAgPSB7XHJcbiAgICBtZXJjdXJlOiAnTUVSQ1VSRScsXHJcbiAgICBpbnZlbnRvcnk6ICdJTlZFTlRPUlknLFxyXG4gICAgZGVsaXZlcnk6ICdERUxJVkVSWScsXHJcbiAgICBidWlsZGluZ3M6ICdCVUlMRElOR1MnLFxyXG4gICAgY2h1bmtzOiAnQ0hVTktTJyxcclxuICAgIG5ldHdvcms6ICdORVRXT1JLJyxcclxuICAgIGNhY2hlOiAnQ0FDSEUnLFxyXG59OyJdLCJuYW1lcyI6WyJMIiwiZGVidWdMb2ciLCJDSFVOS19TSVpFIiwiZ2V0TWFwIiwiaXNHcmlkTGF5ZXJBY3RpdmUiLCJyb2Fkc1N0YXRlIiwia25vd25CYm94S2V5cyIsImdyaWRMYXllciIsImxheWVyR3JvdXAiLCJ2aXNpYmxlQ2h1bmtzIiwiTWFwIiwiaW5pdEdyaWRMYXllciIsIm1hcCIsInpvb20iLCJnZXRab29tIiwiYm91bmRzIiwiZ2V0Qm91bmRzIiwibWluTGF0IiwiTWF0aCIsImZsb29yIiwiZ2V0U291dGgiLCJtYXhMYXQiLCJjZWlsIiwiZ2V0Tm9ydGgiLCJtaW5MbmciLCJnZXRXZXN0IiwibWF4TG5nIiwiZ2V0RWFzdCIsIm5ld1Zpc2libGUiLCJTZXQiLCJpIiwiX2xvb3AiLCJpZCIsImNvbmNhdCIsImoiLCJhZGQiLCJoYXMiLCJsYXQiLCJsbmciLCJyZWN0IiwicmVjdGFuZ2xlIiwiY29sb3IiLCJ3ZWlnaHQiLCJmaWxsT3BhY2l0eSIsIm9uIiwic2V0U3R5bGUiLCJhZGRMYXllciIsInNldCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiZW50cmllcyIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiX3N0ZXAkdmFsdWUiLCJfc2xpY2VkVG9BcnJheSIsInZhbHVlIiwicmVtb3ZlTGF5ZXIiLCJlcnIiLCJlIiwiZiIsInNpemUiLCJzZXRDaHVua0NvbG9yIiwiZ2V0IiwicmVmcmVzaEdyaWRDb2xvcnMiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX3N0ZXAyJHZhbHVlIiwiYmJveEtleSIsImRhc2hBcnJheSIsInVuZGVmaW5lZCIsImNodW5rIiwiY2h1bmtzIiwiaGFzUm9hZHMiLCJidWlsZFJlcXVlc3QiLCJ0eXBlSWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGVfaWQiLCJnZXRCdWlsZGluZ3MiLCJ0aGVuIiwicmVzIiwianNvbiIsImdldEJ1aWxkaW5nQ29zdHMiLCJidWlsZGluZ1R5cGVJZCIsInVwZ3JhZGVCdWlsZGluZyIsImJ1aWxkaW5nSWQiLCJnZXRVcGdyYWRlSW5mbyIsImZseVRvIiwiZ2V0QWxsTG9hZGVkUm9hZHMiLCJnZXRCdWlsZGluZ0ltYWdlIiwibG9hZFZpc2libGVSb2FkQ2h1bmtzIiwiZmluZENsb3Nlc3RQb2ludE9uUm9hZCIsImZpbmRDbG9zZXN0U2VnbWVudCIsInNob3dOb3RpZmljYXRpb24iLCJnZXRBZG1pbkNvb3JkcyIsImRlYnVnV2FybiIsImRlYnVnRXJyb3IiLCJkcmF3QmFzZUNpcmNsZSIsInJlbW92ZUJhc2VDaXJjbGUiLCJyZWZyZXNoU2lkZWJhciIsImJhc2VNYXJrZXIiLCJiYXNlQ2lyY2xlIiwiYmFzZVBvc2l0aW9uIiwiYmFzZUNyZWF0ZWQiLCJwbGFjaW5nQmFzZSIsInByZXZpZXdNYXJrZXIiLCJwcmV2aWV3Q2lyY2xlIiwicHJldmlld1NuYXBMYXRMbmciLCJwcmV2aWV3TGluZSIsImhpZ2hsaWdodGVkU2VnbWVudCIsImN1cnJlbnRQbGF5ZXJGYWN0aW9uIiwic2V0Q3VycmVudFBsYXllckZhY3Rpb24iLCJmYWN0aW9uIiwidG9Mb3dlckNhc2UiLCJnZXRDdXJyZW50UGxheWVyRmFjdGlvbiIsImluaXRCYXNlVUkiLCJiYXNlQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2RlIiwiZGF0YXNldCIsImFsZXJ0IiwiZ2V0Q29udGFpbmVyIiwic3R5bGUiLCJjdXJzb3IiLCJfcHJldmlld1NuYXBMYXRMbmciLCJpc0Jhc2VQbGFjZW1lbnRWYWxpZCIsImNsZWFudXBQcmV2aWV3IiwiY3JlYXRlQmFzZSIsInJvYWRzIiwibGVuZ3RoIiwicmVzdWx0IiwibGF0bG5nIiwicG9pbnQiLCJpc1ZhbGlkIiwiY2lyY2xlIiwicmFkaXVzIiwiYWRkVG8iLCJtYXJrZXIiLCJwb2x5bGluZSIsIm9wYWNpdHkiLCJzZWdtZW50IiwidXBkYXRlQmFzZURpc3BsYXkiLCJ1cGRhdGVPdGhlckJhc2VzIiwiZW5hYmxlQWRtaW5Db29yZGluYXRlUGlja2VyIiwid2luZG93Iiwib3RoZXJCYXNlcyIsImV2ZXJ5IiwiYmFzZSIsImRpc3QiLCJkaXN0YW5jZSIsImJhc2VUeXBlSWQiLCJvayIsIkVycm9yIiwiZXJyb3IiLCJfcmVmIiwicmVtb3ZlQmFzZSIsIm1lc3NhZ2UiLCJsb2FkT3RoZXJCYXNlIiwicHNldWRvIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJpc1BsYXllckJhc2UiLCJpY29uIiwiY3JlYXRlQmFzZUljb24iLCJiaW5kUG9wdXAiLCJwdXNoIiwiZm9yRWFjaCIsImhhc0xheWVyIiwic2V0SWNvbiIsImxvYWRCYXNlRnJvbVNlcnZlciIsImljb25VcmwiLCJpY29uU2l6ZSIsImljb25BbmNob3IiLCJwb3B1cEFuY2hvciIsInQiLCJyIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsInNlbGVjdGVkQnVpbGRpbmdUeXBlIiwicHJldmlld0J1aWxkaW5nTWFya2VyIiwiaW5pdEJ1aWxkTW9kZSIsIl9jYWxsZWUiLCJidG4iLCJfY29udGV4dCIsInRhcmdldCIsImNsb3Nlc3QiLCJzZWxlY3RCdWlsZGluZ1R5cGUiLCJfeCIsIm9uTWFwQ2xpY2siLCJvbk1hcE1vdXNlTW92ZSIsIl94MiIsIl94MyIsIl9zZWxlY3RCdWlsZGluZ1R5cGUiLCJfY2FsbGVlMiIsImJ1dHRvbiIsImRhdGEiLCJfdCIsIl9jb250ZXh0MiIsImNsZWFyQnVpbGRpbmdTZWxlY3Rpb24iLCJjbGFzc0xpc3QiLCJuYW1lIiwiY29zdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlIiwiX3g0IiwiX29uTWFwQ2xpY2siLCJfY2FsbGVlMyIsInJlc3BvbnNlIiwiX3QyIiwiX2NvbnRleHQzIiwic2V0TGF0TG5nIiwiYWN0aXZhdGVCdWlsZE1vZGUiLCJxdWVyeVNlbGVjdG9yIiwiY2xpY2siLCJkZWFjdGl2YXRlQnVpbGRNb2RlIiwiaXNCdWlsZE1vZGVBY3RpdmUiLCJfcmVmcmVzaFNpZGViYXIiLCJfY2FsbGVlNCIsImh0bWwiLCJwYXJzZXIiLCJkb2MiLCJuZXdTaWRlYmFyIiwiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwiX3QzIiwiX2NvbnRleHQ0IiwidGV4dCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInJlcGxhY2VXaXRoIiwiYnVpbGRpbmdNYXJrZXJzIiwicG9wdXBDb250ZW50TG9hZGVkIiwiY3VycmVudFBsYXllcklkIiwic2V0Q3VycmVudFBsYXllcklkIiwiZ2V0Q3VycmVudFBsYXllcklkIiwibG9hZEJ1aWxkaW5nc0Zyb21EYXRhIiwiYnVpbGRpbmdzIiwiQXJyYXkiLCJpc0FycmF5IiwiYiIsIl9iJHR5cGUiLCJjb2RlIiwidHlwZSIsImJ1aWxkaW5nRmFjdGlvbiIsImNyZWF0ZUJ1aWxkaW5nSWNvbiIsImJ1aWxkaW5nRGF0YSIsImxldmVsIiwib3duZXJJZCIsImlzTWluZSIsIkJvb2xlYW4iLCJwcm9kdWN0aW9uIiwicmVzb3VyY2VfdHlwZSIsImNyZWF0ZVNpbXBsZVBvcHVwIiwiaGFuZGxlUG9wdXBPcGVuIiwiaXNPd25CdWlsZGluZyIsInNldFBvcHVwQ29udGVudCIsImxvYWRVcGdyYWRlSW5mb0FzeW5jIiwiYnVpbGRpbmciLCJfbG9hZFVwZ3JhZGVJbmZvQXN5bmMiLCJzdGF0dXMiLCJsb2FkQnVpbGRpbmdzIiwiYnVpbGRpbmdDb2RlIiwiYWN0dWFsRmFjdGlvbiIsImJ1aWxkaW5nU2x1ZyIsInJlcGxhY2UiLCJmYWN0aW9uU2x1ZyIsImVudHJ5IiwibmV3TGV2ZWwiLCJnZXRCdWlsZGluZ1R5cGVDb3N0cyIsIl94NSIsIl9nZXRCdWlsZGluZ1R5cGVDb3N0cyIsImNhbkJ1aWxkQnVpbGRpbmciLCJfeDYiLCJfY2FuQnVpbGRCdWlsZGluZyIsInJlc291cmNlcyIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwicmVzb3VyY2UiLCJhbW91bnQiLCJxdWFudGl0eSIsInJlZnJlc2hCdWlsZGluZ1BvcHVwIiwiX3g3IiwiX3JlZnJlc2hCdWlsZGluZ1BvcHVwIiwiX2NhbGxlZTUiLCJfY29udGV4dDUiLCJpc1BvcHVwT3BlbiIsImRyYXdSb2FkU2VnbWVudCIsImZvcm1hdERhdGUiLCJhY3RpdmVEZWxpdmVyaWVzIiwiZGVsaXZlcnlMYXllciIsImFuaW1hdGlvbkZyYW1lIiwicGVuZGluZ0V2ZW50cyIsInRydWNrSWNvbiIsImRpdkljb24iLCJjbGFzc05hbWUiLCJpbml0RGVsaXZlcnlFdmVudHMiLCJpbml0RGVsaXZlcnlMYXllcnMiLCJsb2FkRGVsaXZlcmllcyIsIl9kYXRhJGZhY3Rpb24iLCJkZXRhaWwiLCJoYW5kbGVEZWxpdmVyeUV2ZW50IiwiZGVsaXZlcnlJZCIsInByb2dyZXNzIiwid2F5cG9pbnRzIiwicmVzb3VyY2VDb2RlIiwicmVzb3VyY2VMYWJlbCIsImVzdGltYXRlZFRpbWUiLCJkdXJhdGlvbiIsInNjaGVkdWxlZEF0IiwiX21hcCIsInN0YXJ0QW5pbWF0aW9uIiwicHJvY2Vzc0RlbGl2ZXJ5RXZlbnQiLCJfbG9hZERlbGl2ZXJpZXMiLCJkZWxpdmVyaWVzIiwiZGVsaXZlcnlEYXRhIiwicmVtb3ZlRGVsaXZlcnkiLCJ1cHNlcnREZWxpdmVyeSIsImtleSIsImNvbnNvbGUiLCJ3YXJuIiwicGFyc2UiLCJfdW51c2VkIiwibGF0bG5ncyIsIndwIiwiX2RhdGEkcHJvZ3Jlc3MiLCJfZGF0YSRzY2hlZHVsZWRBdCIsIl9kYXRhJHByb2dyZXNzMiIsImRlbGl2ZXJ5IiwibGFzdFNlcnZlclByb2dyZXNzIiwibGFzdFNlcnZlclRpbWUiLCJEYXRlIiwibm93IiwiX2RhdGEkcXVhbnRpdHkiLCJfZGF0YSRyZXNvdXJjZUxhYmVsIiwiX2RhdGEkcHJvZ3Jlc3MzIiwiX2RhdGEkcHJvZ3Jlc3M0IiwiX2RhdGEkZXN0aW1hdGVkVGltZSIsIl9kYXRhJHNjaGVkdWxlZEF0MiIsIl9kYXRhJHByb2dyZXNzNSIsInNjaGVkdWxlZFRpbWUiLCJhbmltYXRlIiwiaW50ZXJwb2xhdGVkUHJvZ3Jlc3MiLCJzdGFydFRpbWUiLCJnZXRUaW1lIiwiZWxhcHNlZCIsIm1pbiIsIm1heCIsImVsYXBzZWRTaW5jZVNlcnZlciIsInByb2dyZXNzUGVyU2Vjb25kIiwicG9zIiwiaW50ZXJwb2xhdGVBbG9uZ1JvdXRlIiwiZWwiLCJ0ZXh0Q29udGVudCIsInJvdW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidG90YWxEaXN0Iiwic2VnbWVudHMiLCJoYXZlcnNpbmUiLCJSIiwiZExhdCIsIlBJIiwiZExuZyIsIngiLCJwb3ciLCJzaW4iLCJjb3MiLCJhdGFuMiIsInNxcnQiLCJpbml0TWFwIiwibG9hZFdvcmxkIiwiaW5pdEdQUyIsImluaXROb3RpZmljYXRpb25zIiwiaW5pdEJ1aWxkaW5nVGltZXJzIiwiaW5pdEludmVudG9yeUV2ZW50cyIsImVuYWJsZUxlYWZsZXREZWJ1ZyIsImN1cnJlbnRVc2VyIiwiZGVidWciLCJvcmlnaW5hbE1hcmtlciIsIm9yaWdpbmFsQ2lyY2xlIiwib3JpZ2luYWxQb2x5bGluZSIsIl9sZW4iLCJhcmdzIiwiX2tleSIsIl9sZW4yIiwiX2tleTIiLCJfbGVuMyIsIl9rZXkzIiwiaGFuZGxlSW52ZW50b3J5VXBkYXRlIiwiX2RhdGEkcmVzb3VyY2VzIiwidXBkYXRlTmF2YmFyUmVzb3VyY2VzIiwicG9wdXAiLCJwYXJzZUludCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsIml0ZW0iLCJxdHlFbGVtZW50IiwiY2hlY2tVcGdyYWRlUmVxdWlyZW1lbnRzIiwicmVxdWlyZWRFbGVtZW50IiwicmVxdWlyZWQiLCJnZXRBdHRyaWJ1dGUiLCJ0b2dnbGUiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJmcm9tIiwidGVzdCIsIm5leHQiLCJfdHlwZW9mIiwiZGVwb3NpdE1hcmtlcnMiLCJidWlsZGluZ1R5cGVzQ2FjaGUiLCJyZXNvdXJjZVR5cGVzQ2FjaGUiLCJsb2FkQnVpbGRpbmdUeXBlcyIsIl9sb2FkQnVpbGRpbmdUeXBlcyIsImxvYWRSZXNvdXJjZVR5cGVzIiwiX2xvYWRSZXNvdXJjZVR5cGVzIiwiX3Q0IiwiREVGQVVMVF9DT0xPUlMiLCJnZXRSZXNvdXJjZUNvbG9yIiwiX3Jlc291cmNlVHlwZXNDYWNoZSR0IiwiX3Jlc291cmNlVHlwZXNDYWNoZSR0MiIsImZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZSIsIl9maW5kQnVpbGRpbmdUeXBlRm9yUmVzb3VyY2UiLCJyZXNvdXJjZVR5cGUiLCJidWlsZGluZ1R5cGVzIiwiYnVpbGRpbmdUeXBlIiwiZmluZCIsImJ0IiwiX2J0JHJlc291cmNlVHlwZSIsInByb2R1Y3Rpb25fcmF0ZSIsImRlcG9zaXRMYXllcnMiLCJpbml0RGVwb3NpdExheWVycyIsIl9pbml0RGVwb3NpdExheWVycyIsImNvbnRyb2wiLCJyZXNvdXJjZVR5cGVzIiwicnQiLCJhZGRPdmVybGF5IiwibGFiZWwiLCJsb2FkRGVwb3NpdHNGb3JDaHVuayIsIl9sb2FkRGVwb3NpdHNGb3JDaHVuayIsIl9jYWxsZWU2IiwiY2h1bmtJZCIsImRlcG9zaXRzIiwiX3Q1IiwiX2NvbnRleHQ2IiwicmVuZGVyRGVwb3NpdHNGcm9tRGF0YSIsImZvcm1hdENvc3RzIiwiam9pbiIsIl9yZWYyIiwiY2hlY2tDYW5DbGFpbSIsIl9jaGVja0NhbkNsYWltIiwiX2NhbGxlZTciLCJkZXBvc2l0IiwiX3JldCIsIl9jb250ZXh0OCIsImtleXMiLCJfcGxheWVyUmVzb3VyY2VzJHJlc28iLCJwbGF5ZXJSZXNvdXJjZXMiLCJfY29udGV4dDciLCJfcmVnZW5lcmF0b3JWYWx1ZXMiLCJsb2FkRGVwb3NpdEluZm9Bc3luYyIsIl94OCIsIl94OSIsIl9sb2FkRGVwb3NpdEluZm9Bc3luYyIsIl9jYWxsZWU4IiwiZGVwb3NpdHNJRCIsImRlcG9zaXREYXRhIiwiX3Q2IiwiX2NvbnRleHQ5IiwibGF5ZXIiLCJjaXJjbGVNYXJrZXIiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImZpbGxDb2xvciIsImNsYWltRGVwb3NpdCIsIl9yZWYzIiwicmVzcG9uc2VUZXh0IiwiZGVwb3NpdF9pZCIsImxvY2F0aW9uIiwicmVsb2FkIiwiX3gwIiwiX3gxIiwiZm9nTGF5ZXIiLCJ2aXNpb25Tb3VyY2VzIiwiZm9nTW9kZSIsIm1hcEluc3RhbmNlIiwiRm9nT2ZXYXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJjYW52YXMiLCJjcmVhdGVFbGVtZW50IiwiY3R4IiwiaW5pdENhbnZhcyIsInJlc2l6ZSIsImJpbmRFdmVudHMiLCJfY3JlYXRlQ2xhc3MiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJwb2ludGVyRXZlbnRzIiwiekluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJjb250YWluZXIiLCJhcHBlbmRDaGlsZCIsImdldENvbnRleHQiLCJfdGhpcyIsInJlbmRlciIsImdldFNpemUiLCJ1cGRhdGVTb3VyY2VzIiwic291cmNlcyIsImNsZWFyUmVjdCIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic291cmNlIiwiY2VudGVyIiwibGF0TG5nIiwibGF0TG5nVG9Db250YWluZXJQb2ludCIsImVkZ2UiLCJyYWRpdXNQeCIsImRpc3RhbmNlVG8iLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZm9nSW5zdGFuY2UiLCJpbml0Rm9nT2ZXYXIiLCJkaXNwbGF5IiwiaXNQb2ludFZpc2libGUiLCJfZm9nSW5zdGFuY2UiLCJzb21lIiwiZHgiLCJkeSIsImluaXRab25lRGVidWdQYW5lbCIsImluaXRXb3JsZEV4cGFuc2lvblByb2dyZXNzUGFuZWwiLCJzeW5jS25vd25ab25lcyIsInJvYWRzTGF5ZXIiLCJtYXJrZXJJY29uIiwibWFya2VyU2hhZG93IiwiTWFya2VyIiwib3B0aW9ucyIsInNoYWRvd1VybCIsIm1vdmVUaW1lb3V0IiwiaXNDaHVua01vZGUiLCJfaW5pdE1hcCIsImlzQWRtaW4iLCJiYXNlT3ZlcmxheXMiLCJsYXllcnNDb250cm9sIiwic2V0VmlldyIsInRpbGVMYXllciIsImF0dHJpYnV0aW9uIiwiZmlyZSIsIklTX0FETUlOIiwibGF5ZXJzIiwiY291bnQiLCJfeWllbGQkaW1wb3J0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImVudGVyQ2h1bmtNb2RlIiwiZXhpdENodW5rTW9kZSIsIl9tYXBJbnN0YW5jZSIsInN0YXR1c1RleHQiLCJwbGF5ZXJzIiwiaGFzQ2VudGVyZWQiLCJwbGF5ZXIiLCJpc01lIiwiY2h1bmtDYWNoZSIsIkNBQ0hFX1RUTCIsImdldENhY2hlZENodW5rIiwiY2FjaGVkIiwidHMiLCJzZXRDYWNoZWRDaHVuayIsIl9vYmplY3RTcHJlYWQiLCJpbnZhbGlkYXRlQ2h1bmtDYWNoZSIsImNsZWFyQ2h1bmtDYWNoZSIsImNsZWFyIiwiaW52YWxpZGF0ZUNodW5rIiwiYmVzdFBvaW50IiwiYmVzdERpc3RhbmNlIiwiSW5maW5pdHkiLCJyb2FkIiwicG9pbnRzIiwiYVJhdyIsImJSYXciLCJwcm9qZWN0ZWQiLCJwcm9qZWN0UG9pbnRPblNlZ21lbnQiLCJiZXN0U2VnbWVudCIsIm1pZCIsIkEiLCJCIiwiUCIsIkFCIiwiQVAiLCJhYjIiLCJkaXN0YW5jZVRvU2VnbWVudCIsImRlYnVnUm9hZHMiLCJfbiIsIkYiLCJkcmF3T3duZWRSb2FkcyIsInNhZmVKc29uIiwiX3NhZmVKc29uIiwiZGVmYXVsdERhdGEiLCJ1cmwiLCJfbG9hZFZpc2libGVSb2FkQ2h1bmtzIiwiY2h1bmtzVG9Mb2FkIiwiZmluYWxDaHVua3NUb0xvYWQiLCJfY2h1bmtJZCIsIl9maW5hbENodW5rc1RvTG9hZCIsInZpc2libGVCb3VuZHMiLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJfeWllbGQkUHJvbWlzZSRhbGwyIiwicm9hZHNSZXNwb25zZSIsImJ1aWxkaW5nc1Jlc3BvbnNlIiwiZGVwb3NpdHNSZXNwb25zZSIsInJvYWRzRGF0YSIsImJ1aWxkaW5nc0RhdGEiLCJkZXBvc2l0c0RhdGEiLCJhbGxSb2FkcyIsImFsbEJ1aWxkaW5ncyIsImFsbERlcG9zaXRzIiwiX2kyIiwiX2ZpbmFsQ2h1bmtzVG9Mb2FkMiIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJnZXRWaXNpYmxlQ2h1bmtzIiwiZmlsdGVyIiwibG9hZGVkQ2h1bmtzIiwicmVmcmVzaENodW5rQ29sb3JzIiwic291dGgiLCJ3ZXN0Iiwibm9ydGgiLCJlYXN0IiwiYWxsIiwiX2NodW5rSWQkc3BsaXQiLCJfY2h1bmtJZCRzcGxpdDIiLCJjeFN0ciIsImN5U3RyIiwiY3giLCJjeSIsImNlbGxTb3V0aCIsImNlbGxXZXN0IiwiY2VsbE5vcnRoIiwiY2VsbEVhc3QiLCJjZWxsUm9hZHMiLCJpc0VtcHR5Iiwic3BsaXQiLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCJ0b0ZpeGVkIiwicHQiLCJyZWZyZXNoQ2h1bmsiLCJfcmVmcmVzaENodW5rIiwiZmV0Y2hTaW5nbGVDaHVuayIsInJlZnJlc2hDaHVua3MiLCJfcmVmcmVzaENodW5rcyIsImNodW5rSWRzIiwiX2ZldGNoU2luZ2xlQ2h1bmsiLCJfY2h1bmtJZCRzcGxpdDMiLCJfY2h1bmtJZCRzcGxpdDQiLCJfeWllbGQkUHJvbWlzZSRhbGwzIiwiX3lpZWxkJFByb21pc2UkYWxsNCIsInJvYWRzUmVzIiwiYnVpbGRpbmdzUmVzIiwiZGVwb3NpdHNSZXMiLCJfY29sb3JzJGNodW5rJHN0YXR1cyIsImNvbG9ycyIsImxvYWRlZCIsImVtcHR5IiwibG9hZGluZyIsIm1pblgiLCJtYXhYIiwibWluWSIsIm1heFkiLCJsYXRNaW4iLCJsbmdNaW4iLCJkcmF3blJvYWRJZHMiLCJhZGRlZCIsImdldFJvYWRDb2xvciIsImNsZWFyT3duZWRSb2FkcyIsImNsZWFyTGF5ZXJzIiwibW90b3J3YXkiLCJ0cnVuayIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0ZXJ0aWFyeSIsInJlc2lkZW50aWFsIiwic2VydmljZSIsInVuY2xhc3NpZmllZCIsImZlcnJ5IiwiZ2V0T3duZWRSb2Fkc0NvdW50Iiwicm9hZHNSZWFkeSIsImRyYXduUm9hZHMiLCJyb2FkTGF5ZXJzIiwiYnVpbGRpbmdMYXllcnMiLCJjYWNoZWRSb2FkcyIsImNhY2hlRGlydHkiLCJtYXJrUm9hZENhY2hlRGlydHkiLCJ2YWx1ZXMiLCJmbGF0TWFwIiwia25vd25ab25lcyIsImdldFpvbmVTdGF0cyIsImFkZFJvYWRzQ2h1bmsiLCJwYW5lbCIsImlzUGFuZWxPcGVuIiwidG9nZ2xlQnRuIiwiY3NzVGV4dCIsIm9uY2xpY2siLCJ0b2dnbGVQYW5lbCIsImJhY2tncm91bmQiLCJyZWZyZXNoUGFuZWwiLCJfcmVmcmVzaFBhbmVsIiwicmVuZGVyUGFuZWwiLCJ0b3RhbCIsInN0YXRzIiwiem9uZXMiLCJ3aXRoUm9hZHMiLCJ6IiwidXBkYXRlZEF0Iiwid2l0aG91dCIsImlubmVySFRNTCIsInpvbmUiLCJyZWZyZXNoQnRuIiwic3RvcFByb3BhZ2F0aW9uIiwicm93Iiwib25kYmxjbGljayIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJfc3luY0tub3duWm9uZXMiLCJiYm94S2V5cyIsImFkZEtub3duQmJveEtleSIsInBvbGxJbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInBvcHVsYXRlZCIsImZyb250aWVyIiwiZXZlbnRzIiwiZXZlbnQiLCJub3RpZiIsImJhc2VDaXJjbGVzIiwicm9hZFNlZ21lbnRzIiwiRkFDVElPTl9DT0xPUlMiLCJnZXRGYWN0aW9uQ29sb3IiLCJiYXNlSWQiLCJwbGF5ZXJGYWN0aW9uIiwiY2xlYXJBbGxCYXNlQ2lyY2xlcyIsInJvYWRJZCIsImNvb3JkcyIsInJlbW92ZVJvYWRTZWdtZW50IiwiY2xlYXJBbGxSb2FkU2VnbWVudHMiLCJ1cGRhdGVCYXNlQ2lyY2xlcyIsImJhc2VzIiwidXBkYXRlUm9hZFNlZ21lbnRzIiwiaXNQbGF5ZXJSb2FkIiwic2V0Um9hZFNlZ21lbnRDb2xvciIsImZvcm1hdCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNuYXBUb0NodW5rIiwiQ0hVTktfUkFESVVTIiwiREVGQVVMVF9ST0FEX1JBRElVUyIsImlzUGVuZGluZyIsIl9hZGRSb2Fkc0NodW5rIiwiX2FyZ3MyIiwic2hvd0dlbmVyYXRpb25GZWVkYmFjayIsImNvbXB1dGVBZmZlY3RlZENodW5rSWRzIiwicm9hZHNfY3JlYXRlZCIsImFscmVhZHlfcG9wdWxhdGVkIiwic2hvd1RvYXN0IiwiaWRzIiwiY2xpY2tTbmFwIiwicHRMYXQiLCJwdExuZyIsInNuYXAiLCJvbmNlIiwiX2UkbGF0bG5nIiwiZGVmYXVsdExhdCIsImRlZmF1bHRMbmciLCJnZW9sb2NhdGlvbiIsImdwc0ZvdW5kIiwid2F0Y2hQb3NpdGlvbiIsInRpbWVvdXQiLCJsYXRNYXgiLCJsbmdNYXgiLCJ0aW1lckludGVydmFsIiwidXBkYXRlVGltZXJzIiwidGltZXJFbCIsInNjaGVkdWxlZCIsImRpZmZTZWMiLCJtaW5zIiwic2VjcyIsImFicyIsImlzb1N0cmluZyIsInRvTG9jYWxlU3RyaW5nIiwidGltZVpvbmUiLCJob3VyIiwibWludXRlIiwiSWNvbiIsIkRlZmF1bHQiLCJfZ2V0SWNvblVybCIsIm1lcmdlT3B0aW9ucyIsImljb25SZXRpbmFVcmwiLCJyZXF1aXJlIiwiVFlQRV9NQVAiLCJERUJVRyIsImVuYWJsZWQiLCJfd2luZG93JEFQUF9ERUJVRyIsIkFQUF9ERUJVRyIsIm1lcmN1cmUiLCJpbnZlbnRvcnkiLCJuZXR3b3JrIiwiY2FjaGUiLCJjYW5Mb2ciLCJfY29uc29sZSIsImxvZyIsIl9jb25zb2xlMiIsIl9jb25zb2xlMyJdLCJzb3VyY2VSb290IjoiIn0=