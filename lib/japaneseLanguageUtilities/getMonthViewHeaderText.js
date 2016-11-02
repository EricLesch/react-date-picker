'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMonthViewHeaderText = undefined;

var _languages = require('./enumerations/languages');

var _calendarTypes = require('./enumerations/calendarTypes');

var _toMoment = require('../toMoment');

var _toMoment2 = _interopRequireDefault(_toMoment);

var _getJapaneseImperialYear = require('./getJapaneseImperialYear');

var _getEnglishImperialYear = require('./getEnglishImperialYear');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMonthViewHeaderText = exports.getMonthViewHeaderText = function getMonthViewHeaderText(momentDate, props) {
    var headerText, date, yearText, month;

    var calendar = props.calendar,
        currentLanguage = props.currentLanguage;


    if (currentLanguage === _languages.LANGUAGES.JAPANESE_LANGUAGE) {
        if (calendar === _calendarTypes.CALENDAR_TYPES.IMPERIAL) {
            yearText = (0, _getJapaneseImperialYear.getJapaneseImperialYear)(momentDate.toDate());
            month = momentDate.format('MMMM');
            headerText = month + ' ' + yearText;
        } else if (calendar === _calendarTypes.CALENDAR_TYPES.GREGORIAN) {
            date = (0, _toMoment2.default)(momentDate, null, { locale: props.locale }).toDate();
            headerText = date.toLocaleDateString(props.calendar, props.calendarHeaderFormat);
        }
    } else if (currentLanguage === _languages.LANGUAGES.ENGLISH_LANGUAGE) {
        if (props.calendar === _calendarTypes.CALENDAR_TYPES.IMPERIAL) {
            yearText = (0, _getEnglishImperialYear.getEnglishImperialYear)(momentDate.toDate());
            month = momentDate.format('MMMM');
            headerText = month + ' ' + yearText;
        } else {
            headerText = (0, _toMoment2.default)(momentDate, null, { locale: props.locale }).format('MMMM') + ' ' + (0, _toMoment2.default)(momentDate, null, { locale: props.locale }).format('YYYY');
        }
    }

    return headerText;
};