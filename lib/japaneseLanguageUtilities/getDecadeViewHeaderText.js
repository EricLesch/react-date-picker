'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDecadeViewHeaderText = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _languages = require('./enumerations/languages');

var _calendarTypes = require('./enumerations/calendarTypes');

var _getEnglishImperialYear = require('./getEnglishImperialYear');

var _getJapaneseImperialYear = require('./getJapaneseImperialYear');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDecadeViewHeaderText = exports.getDecadeViewHeaderText = function getDecadeViewHeaderText(date, props) {
    var startingYear, startingYearString, endingYearString;
    var currentLanguage = props.currentLanguage;

    var year = (0, _moment2.default)(date).get('year');
    var offset = year % 10;

    date = (0, _moment2.default)(date).endOf('year').subtract(offset + 1, 'years');

    var startingDate = date;
    var endingDate = (0, _moment2.default)(date).add(11, 'years').toDate();

    var headerText;
    if (currentLanguage === _languages.LANGUAGES.JAPANESE_LANGUAGE) {
        if (props.calendar === _calendarTypes.CALENDAR_TYPES.IMPERIAL) {
            startingYearString = (0, _getJapaneseImperialYear.getJapaneseImperialYear)(startingDate);
            endingYearString = (0, _getJapaneseImperialYear.getJapaneseImperialYear)(endingDate);
            headerText = startingYearString + '\u5E74- ' + endingYearString + '\u5E74';
        } else if (props.calendar === _calendarTypes.CALENDAR_TYPES.GREGORIAN) {
            startingYearString = (0, _moment2.default)(startingDate).toDate().toLocaleDateString(_calendarTypes.CALENDAR_TYPES.GREGORIAN, { year: 'numeric' });
            endingYearString = (0, _moment2.default)(endingDate).toDate().toLocaleDateString(_calendarTypes.CALENDAR_TYPES.GREGORIAN, { year: 'numeric' });
            headerText = startingYearString + ' - ' + endingYearString;
        }
    } else if (currentLanguage === _languages.LANGUAGES.ENGLISH_LANGUAGE) {
        if (props.calendar === _calendarTypes.CALENDAR_TYPES.GREGORIAN) {
            startingYear = (0, _moment2.default)(date).get('year');
            headerText = startingYear + ' - ' + (startingYear + 11);
        } else if (props.calendar === _calendarTypes.CALENDAR_TYPES.IMPERIAL) {

            startingYearString = (0, _getEnglishImperialYear.getEnglishImperialYear)(startingDate);
            endingYearString = (0, _getEnglishImperialYear.getEnglishImperialYear)(endingDate);

            headerText = startingYearString + ' - ' + endingYearString;
        }
    }

    return headerText;
};