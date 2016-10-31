'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getImperialYear = undefined;

var _calendarTypes = require('./enumerations/calendarTypes');

var getImperialYear = exports.getImperialYear = function getImperialYear(date) {
    if (date._isAMomentObject) {
        date = date.toDate();
    }
    var numericString = date.toLocaleString(_calendarTypes.CALENDAR_TYPES.IMPERIAL, { year: 'numeric' });
    return numericString.match(/\d+/)[0];
};