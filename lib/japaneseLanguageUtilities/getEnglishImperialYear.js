'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEnglishImperialYear = undefined;

var _getImperialYear = require('./getImperialYear');

var _getEraForLang = require('./getEraForLang');

var _languages = require('./enumerations/languages');

var getEnglishImperialYear = exports.getEnglishImperialYear = function getEnglishImperialYear(date) {
    var imperialYear = parseInt((0, _getImperialYear.getImperialYear)(date), 10);
    var eraSymbol = (0, _getEraForLang.getEraForLang)(_languages.LANGUAGES.ENGLISH_LANGUAGE, date);
    return '' + eraSymbol + imperialYear;
};