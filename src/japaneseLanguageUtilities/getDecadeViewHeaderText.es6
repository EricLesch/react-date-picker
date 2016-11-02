import moment from 'moment';

import {LANGUAGES} from './enumerations/languages';
import {CALENDAR_TYPES} from './enumerations/calendarTypes';
import {getEnglishImperialYear} from './getEnglishImperialYear';
import {getJapaneseImperialYear} from './getJapaneseImperialYear';

export const getDecadeViewHeaderText = (date, props) => {
    var startingYear, startingYearString, endingYearString;
    var currentLanguage = props.currentLanguage;

    var year = moment(date).get('year');
    var offset = year % 10;

    date = moment(date).endOf('year').subtract(offset + 1, 'years');

    var startingDate = date;
    var endingDate = moment(date).add(11, 'years').toDate();

    var headerText;
    if(currentLanguage === LANGUAGES.JAPANESE_LANGUAGE) {
        if (props.calendar === CALENDAR_TYPES.IMPERIAL) {
            startingYearString = getJapaneseImperialYear(startingDate);
            endingYearString = getJapaneseImperialYear(endingDate);
        } else if (props.calendar === CALENDAR_TYPES.GREGORIAN){
            startingYearString = moment(startingDate).toDate().toLocaleDateString(CALENDAR_TYPES.GREGORIAN, {year: 'numeric'});
            endingYearString = moment(endingDate).toDate().toLocaleDateString(CALENDAR_TYPES.GREGORIAN, {year: 'numeric'});
        }
        headerText = `${startingYearString} - ${endingYearString}`;
    }
    else if (currentLanguage === LANGUAGES.ENGLISH_LANGUAGE) {
        if (props.calendar === CALENDAR_TYPES.GREGORIAN)  {
            startingYear = moment(date).get('year');
            headerText = `${startingYear} - ${(startingYear + 11)}`;
        } else if (props.calendar === CALENDAR_TYPES.IMPERIAL) {

            startingYearString = getEnglishImperialYear(startingDate);
            endingYearString = getEnglishImperialYear(endingDate);

            headerText = `${startingYearString} - ${endingYearString}`;
        }
    }

    return headerText;
};