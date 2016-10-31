var moment = require('moment');

import {ERA_SYMBOLS} from './enumerations/eraSymbols';
import {CALENDAR_TYPES} from './enumerations/calendarTypes';
import {LANGUAGES} from './enumerations/languages';
import {getEra} from './enumerations/getEra';
import {getImperialYear} from './getImperialYear';

export const toJDateString = (date, lang, calendarType) => {
    if (calendarType === CALENDAR_TYPES.GREGORIAN) {
        return moment(date).format('YYYY/MM/DD');
    } else if (calendarType === CALENDAR_TYPES.IMPERIAL) {
        if (lang === LANGUAGES.ENGLISH_LANGUAGE) {
            var monthAndDay = moment(date).format('MM/DD');
            var imperialYear = getImperialYear(date);
            var era = ERA_SYMBOLS[lang][getEra(date)];
            return `${era}${imperialYear}/${monthAndDay}`;
            // return ERA_SYMBOLS[lang][getEra(date)] + moment(date).format('YYYY/MM/DD');
        } else if (lang === LANGUAGES.JAPANESE_LANGUAGE) {
            return ERA_SYMBOLS[lang][getEra(date)] + moment(date).format('YYYY年MM月DD日');
        }
    }
};