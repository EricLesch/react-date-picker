'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toJDateString = undefined;

var _calendarTypes = require('./enumerations/calendarTypes');

var _languages = require('./enumerations/languages');

var _getEnglishImperialYear = require('./getEnglishImperialYear');

var _getJapaneseImperialYear = require('./getJapaneseImperialYear');

var moment = require('moment');

var toJDateString = exports.toJDateString = function toJDateString(date, lang, calendarType) {
    var imperialYearString, result, monthAndDay;

    if (lang === _languages.LANGUAGES.ENGLISH_LANGUAGE) {
        if (calendarType === _calendarTypes.CALENDAR_TYPES.GREGORIAN) {
            result = moment(date).format('YYYY/MM/DD');
        } else if (calendarType === _calendarTypes.CALENDAR_TYPES.IMPERIAL) {
            imperialYearString = (0, _getEnglishImperialYear.getEnglishImperialYear)(date);
            monthAndDay = moment(date).format('MM/DD');
            result = imperialYearString + '/' + monthAndDay;
        }
    } else if (lang === _languages.LANGUAGES.JAPANESE_LANGUAGE) {
        if (calendarType === _calendarTypes.CALENDAR_TYPES.GREGORIAN) {
            result = moment(date).format('YYYY年MM月DD日');
        } else if (calendarType === _calendarTypes.CALENDAR_TYPES.IMPERIAL) {
            imperialYearString = (0, _getJapaneseImperialYear.getJapaneseImperialYear)(date);
            monthAndDay = moment(date).format('年MM月DD日');
            result = '' + imperialYearString + monthAndDay;
        }
    }

    return result;
};