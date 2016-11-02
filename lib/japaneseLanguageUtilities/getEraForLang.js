'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEraForLang = undefined;

var _eraSymbols = require('./enumerations/eraSymbols');

var _getEra = require('./enumerations/getEra');

var getEraForLang = exports.getEraForLang = function getEraForLang(lang, date) {
    try {
        return _eraSymbols.ERA_SYMBOLS[lang][(0, _getEra.getEra)(date)];
    } catch (e) {
        debugger;
    }
};