import {LANGUAGES} from './enumerations/languages';
import {CALENDAR_TYPES} from './enumerations/calendarTypes';
import toMoment from '../toMoment';
import {getJapaneseImperialYear} from './getJapaneseImperialYear';
import {getEnglishImperialYear} from './getEnglishImperialYear';

export const getMonthViewHeaderText = (momentDate, props) => {
    var headerText, date, yearText, month;

    let {
        calendar,
        currentLanguage
    } = props;

    if (currentLanguage === LANGUAGES.JAPANESE_LANGUAGE) {
        if (calendar === CALENDAR_TYPES.IMPERIAL) {
            yearText = getJapaneseImperialYear(momentDate.toDate());
            month = momentDate.format('MMMM');
            headerText = `${yearText} ${month} `;
        } else if (calendar === CALENDAR_TYPES.GREGORIAN) {
            date = toMoment(momentDate, null, {locale: props.locale}).toDate();
            headerText = date.toLocaleDateString(props.calendar, props.calendarHeaderFormat);
        }
    } else if (currentLanguage === LANGUAGES.ENGLISH_LANGUAGE) {
        if (props.calendar === CALENDAR_TYPES.IMPERIAL) {
            yearText = getEnglishImperialYear(momentDate.toDate());
            month = momentDate.format('MM');
            headerText = `${yearText}/${month}`;
        } else if (calendar === CALENDAR_TYPES.GREGORIAN) {
            yearText = momentDate.format('YYYY');
            month = momentDate.format('MM');
            headerText = `${yearText}/${month}`;
        }
    }

    return headerText;
};