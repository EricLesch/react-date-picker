import {getImperialYear} from './getImperialYear';
import {getEraForLang} from './getEraForLang';
import {LANGUAGES} from './enumerations/languages';

export const getEnglishImperialYear = (date) => {
    var imperialYear = parseInt(getImperialYear(date), 10);
    var eraSymbol = getEraForLang(LANGUAGES.ENGLISH_LANGUAGE, date);
    return `${eraSymbol}${imperialYear}`;
};