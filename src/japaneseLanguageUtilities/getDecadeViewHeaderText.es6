import moment from 'moment';

import {LANGUAGES} from './enumerations/languages';
import {CALENDAR_TYPES} from './enumerations/calendarTypes';
import {getEra} from './enumerations/getEra';
import {getImperialYear} from './getImperialYear';
import {ERA_SYMBOLS} from './enumerations/eraSymbols';

export const getDecadeViewHeaderText = (date, props) => {
    debugger;
    var startingYear, endingYear, startingDateString, endingDateString;
    var currentLanguage = props.currentLanguage;

    var year = moment(date).get('year');
    var offset = year % 10;

    date = moment(date).subtract(offset + 1, 'years');

    year = moment(date).get('year');

    var headerText;
    if(currentLanguage === LANGUAGES.JAPANESE_LANGUAGE) {
        startingYear = year;
        endingYear = year + 11;
        if (props.calendar === CALENDAR_TYPES.IMPERIAL) {
            startingDateString = moment().year(startingYear).toDate().toLocaleDateString(CALENDAR_TYPES.IMPERIAL, {year: 'numeric'});
            endingDateString = moment().year(endingYear).toDate().toLocaleDateString(CALENDAR_TYPES.IMPERIAL, {year: 'numeric'});
        } else if (props.calendar === CALENDAR_TYPES.GREGORIAN){
            startingDateString = moment().year(startingYear).toDate().toLocaleDateString(CALENDAR_TYPES.GREGORIAN, {year: 'numeric'});
            endingDateString = moment().year(endingYear).toDate().toLocaleDateString(CALENDAR_TYPES.GREGORIAN, {year: 'numeric'});
        }
        headerText = `${startingDateString} - ${endingDateString}`;
    }
    else if (currentLanguage === LANGUAGES.ENGLISH_LANGUAGE) {
        if (props.calendar === CALENDAR_TYPES.GREGORIAN)  {
            headerText = `${year} - ${(year + 11)}`;
        } else if (props.calendar === CALENDAR_TYPES.IMPERIAL) {
            startingYear = moment(date);
            endingYear = moment(date).add(11, 'years');

            var startingEra = ERA_SYMBOLS[currentLanguage][getEra(startingYear)];
            var startingImperialYear = getImperialYear(startingYear);

            var endingEra = ERA_SYMBOLS[currentLanguage][getEra(endingYear)];
            var endingImperialYear = getImperialYear(endingYear);

            headerText = `${startingEra}${startingImperialYear} - ${endingEra}${endingImperialYear}`;
        }
    }

    return headerText;
};