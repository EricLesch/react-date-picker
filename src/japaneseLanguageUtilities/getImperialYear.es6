import {CALENDAR_TYPES} from './enumerations/calendarTypes';

export const getImperialYear = (date) => {
    if (date._isAMomentObject) {
        date = date.toDate();
    }
    var numericString = date.toLocaleString(CALENDAR_TYPES.IMPERIAL, {year: 'numeric'});
    return numericString.match(/\d+/)[0];
};
