var moment = require('moment');

import {CALENDAR_TYPES} from './enumerations/calendarTypes';
import {LANGUAGES} from './enumerations/languages';
import {getEnglishImperialYear} from './getEnglishImperialYear';
import {getJapaneseImperialYear} from './getJapaneseImperialYear';

export const toJDateString = (date, lang, calendarType) => {
    var imperialYearString, result, monthAndDay;

    if (calendarType === CALENDAR_TYPES.GREGORIAN) {
        result = moment(date).format('YYYY/MM/DD');
    } else if (calendarType === CALENDAR_TYPES.IMPERIAL) {
        if (lang === LANGUAGES.ENGLISH_LANGUAGE) {
            imperialYearString = getEnglishImperialYear(date);
            monthAndDay = moment(date).format('MM/DD');
            result = `${imperialYearString}/${monthAndDay}`;
        } else if (lang === LANGUAGES.JAPANESE_LANGUAGE) {
            imperialYearString = getJapaneseImperialYear(date);
            monthAndDay = moment(date).format('年MM月DD日');
            result = `${imperialYearString}${monthAndDay}`;
        }
    }
    return result;
};