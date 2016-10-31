import {LANGUAGES} from './enumerations/languages';
import {CALENDAR_TYPES } from './enumerations/calendarTypes';
import { ERA_SYMBOLS } from './enumerations/eraSymbols';
import toMoment from '../toMoment';
import {getEra} from './enumerations/getEra';
import {getImperialYear} from './getImperialYear';

export const getMonthViewHeaderText = (momentDate, props) => {
    var headerText;

    var currentLanguage = props.currentLanguage;

    if (currentLanguage === LANGUAGES.JAPANESE_LANGUAGE) {
        var date = toMoment(momentDate, null, {locale: props.locale}).toDate();
        headerText = date.toLocaleDateString(props.calendar, props.calendarHeaderFormat);
    } else if (currentLanguage === LANGUAGES.ENGLISH_LANGUAGE) {
        if (props.calendar === CALENDAR_TYPES.IMPERIAL) {
            var era = ERA_SYMBOLS[currentLanguage][getEra(momentDate)];
            var imperialYear = getImperialYear(momentDate);
            var month = momentDate.format('MMMM');
            headerText = `${month} ${era}${imperialYear}`;
        } else {
            headerText = toMoment(momentDate, null, {locale: props.locale}).format('MMMM') + ' ' + toMoment(momentDate, null, {locale: props.locale}).format('YYYY');
        }
    }

    return headerText;
};