'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMonthViewHeaderText = undefined;

var _languages = require('./enumerations/languages');

var _calendarTypes = require('./enumerations/calendarTypes');

var _eraSymbols = require('./enumerations/eraSymbols');

var _toMoment = require('../toMoment');

var _toMoment2 = _interopRequireDefault(_toMoment);

var _getEra = require('./enumerations/getEra');

var _getImperialYear = require('./getImperialYear');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMonthViewHeaderText = exports.getMonthViewHeaderText = function getMonthViewHeaderText(momentDate, props) {
    var headerText;

    var currentLanguage = props.currentLanguage;

    if (currentLanguage === _languages.LANGUAGES.JAPANESE_LANGUAGE) {
        var date = (0, _toMoment2.default)(momentDate, null, { locale: props.locale }).toDate();
        headerText = date.toLocaleDateString(props.calendar, props.calendarHeaderFormat);
    } else if (currentLanguage === _languages.LANGUAGES.ENGLISH_LANGUAGE) {
        if (props.calendar === _calendarTypes.CALENDAR_TYPES.IMPERIAL) {
            var era = _eraSymbols.ERA_SYMBOLS[currentLanguage][(0, _getEra.getEra)(momentDate)];
            var imperialYear = (0, _getImperialYear.getImperialYear)(momentDate);
            var month = momentDate.format('MMMM');
            headerText = month + ' ' + era + imperialYear;
        } else {
            headerText = (0, _toMoment2.default)(momentDate, null, { locale: props.locale }).format('MMMM') + ' ' + (0, _toMoment2.default)(momentDate, null, { locale: props.locale }).format('YYYY');
        }
    }

    return headerText;
};