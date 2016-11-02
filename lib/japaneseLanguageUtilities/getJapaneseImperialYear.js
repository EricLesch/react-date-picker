'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getJapaneseImperialYear = undefined;

var _getImperialYear = require('./getImperialYear');

var _getEraForLang = require('./getEraForLang');

var _languages = require('./enumerations/languages');

var getJapaneseImperialYear = exports.getJapaneseImperialYear = function getJapaneseImperialYear(date) {
    var imperialYear = parseInt((0, _getImperialYear.getImperialYear)(date), 10);
    var eraSymbol = (0, _getEraForLang.getEraForLang)(_languages.LANGUAGES.JAPANESE_LANGUAGE, date);
    var result;
    if (imperialYear === 1) {
        result = eraSymbol + '\u5143';
    } else {
        result = '' + eraSymbol + imperialYear;
    }
    return result;
};