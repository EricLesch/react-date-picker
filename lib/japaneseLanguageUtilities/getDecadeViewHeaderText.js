'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDecadeViewHeaderText = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _languages = require('./enumerations/languages');

var _calendarTypes = require('./enumerations/calendarTypes');

var _getEra = require('./enumerations/getEra');

var _getImperialYear = require('./getImperialYear');

var _eraSymbols = require('./enumerations/eraSymbols');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDecadeViewHeaderText = exports.getDecadeViewHeaderText = function getDecadeViewHeaderText(date, props) {
    debugger;
    var startingYear, endingYear, startingDateString, endingDateString;
    var currentLanguage = props.currentLanguage;

    var year = (0, _moment2.default)(date).get('year');
    var offset = year % 10;

    date = (0, _moment2.default)(date).subtract(offset + 1, 'years');

    year = (0, _moment2.default)(date).get('year');

    // year = year - offset - 1;

    var headerText;
    if (currentLanguage === _languages.LANGUAGES.JAPANESE_LANGUAGE) {
        startingYear = year;
        endingYear = year + 11;
        if (props.calendar === _calendarTypes.CALENDAR_TYPES.IMPERIAL) {
            startingDateString = (0, _moment2.default)().year(startingYear).toDate().toLocaleDateString(_calendarTypes.CALENDAR_TYPES.IMPERIAL, { year: 'numeric' });
            endingDateString = (0, _moment2.default)().year(endingYear).toDate().toLocaleDateString(_calendarTypes.CALENDAR_TYPES.IMPERIAL, { year: 'numeric' });
        } else if (props.calendar === _calendarTypes.CALENDAR_TYPES.GREGORIAN) {
            startingDateString = (0, _moment2.default)().year(startingYear).toDate().toLocaleDateString(_calendarTypes.CALENDAR_TYPES.GREGORIAN, { year: 'numeric' });
            endingDateString = (0, _moment2.default)().year(endingYear).toDate().toLocaleDateString(_calendarTypes.CALENDAR_TYPES.GREGORIAN, { year: 'numeric' });
        }
        headerText = startingDateString + ' - ' + endingDateString;
    } else if (currentLanguage === _languages.LANGUAGES.ENGLISH_LANGUAGE) {
        if (props.calendar === _calendarTypes.CALENDAR_TYPES.GREGORIAN) {
            headerText = year + ' - ' + (year + 11);
        } else if (props.calendar === _calendarTypes.CALENDAR_TYPES.IMPERIAL) {
            startingYear = (0, _moment2.default)(date);
            endingYear = (0, _moment2.default)(date).add(11, 'years');

            var startingEra = _eraSymbols.ERA_SYMBOLS[currentLanguage][(0, _getEra.getEra)(startingYear)];
            var startingImperialYear = (0, _getImperialYear.getImperialYear)(startingYear);

            var endingEra = _eraSymbols.ERA_SYMBOLS[currentLanguage][(0, _getEra.getEra)(endingYear)];
            var endingImperialYear = (0, _getImperialYear.getImperialYear)(endingYear);

            headerText = '' + startingEra + startingImperialYear + ' - ' + endingEra + endingImperialYear;
        }
    }

    return headerText;
};