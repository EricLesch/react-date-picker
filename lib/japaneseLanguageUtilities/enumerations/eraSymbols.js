'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ERA_SYMBOLS = undefined;

var _LANGUAGES$ENGLISH_LA, _LANGUAGES$JAPANESE_L, _ERA_SYMBOLS;

var _eras = require('./eras');

var _languages = require('./languages');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ERA_SYMBOLS = exports.ERA_SYMBOLS = (_ERA_SYMBOLS = {}, _defineProperty(_ERA_SYMBOLS, _languages.LANGUAGES.ENGLISH_LANGUAGE, (_LANGUAGES$ENGLISH_LA = {}, _defineProperty(_LANGUAGES$ENGLISH_LA, _eras.ERAS.HEISEI_ERA, 'H'), _defineProperty(_LANGUAGES$ENGLISH_LA, _eras.ERAS.MEIJI_ERA, 'M'), _defineProperty(_LANGUAGES$ENGLISH_LA, _eras.ERAS.SHOWA_ERA, 'S'), _defineProperty(_LANGUAGES$ENGLISH_LA, _eras.ERAS.TAISHO_ERA, 'T'), _LANGUAGES$ENGLISH_LA)), _defineProperty(_ERA_SYMBOLS, _languages.LANGUAGES.JAPANESE_LANGUAGE, (_LANGUAGES$JAPANESE_L = {}, _defineProperty(_LANGUAGES$JAPANESE_L, _eras.ERAS.HEISEI_ERA, '平成'), _defineProperty(_LANGUAGES$JAPANESE_L, _eras.ERAS.MEIJI_ERA, '明治'), _defineProperty(_LANGUAGES$JAPANESE_L, _eras.ERAS.SHOWA_ERA, '昭和'), _defineProperty(_LANGUAGES$JAPANESE_L, _eras.ERAS.TAISHO_ERA, '平成'), _LANGUAGES$JAPANESE_L)), _ERA_SYMBOLS);