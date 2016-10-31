'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toJDateString = undefined;

var _eraSymbols = require('./enumerations/eraSymbols');

var _calendarTypes = require('./enumerations/calendarTypes');

var _languages = require('./enumerations/languages');

var _getEra = require('./enumerations/getEra');

var _getImperialYear = require('./getImperialYear');

var moment = require('moment');

var toJDateString = exports.toJDateString = function toJDateString(date, lang, calendarType) {
    if (calendarType === _calendarTypes.CALENDAR_TYPES.GREGORIAN) {
        return moment(date).format('YYYY/MM/DD');
    } else if (calendarType === _calendarTypes.CALENDAR_TYPES.IMPERIAL) {
        if (lang === _languages.LANGUAGES.ENGLISH_LANGUAGE) {
            var monthAndDay = moment(date).format('MM/DD');
            var imperialYear = (0, _getImperialYear.getImperialYear)(date);
            var era = _eraSymbols.ERA_SYMBOLS[lang][(0, _getEra.getEra)(date)];
            return '' + era + imperialYear + '/' + monthAndDay;
            // return ERA_SYMBOLS[lang][getEra(date)] + moment(date).format('YYYY/MM/DD');
        } else if (lang === _languages.LANGUAGES.JAPANESE_LANGUAGE) {
            return _eraSymbols.ERA_SYMBOLS[lang][(0, _getEra.getEra)(date)] + moment(date).format('YYYY年MM月DD日');
        }
    }
};