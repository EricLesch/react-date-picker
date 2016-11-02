import {getImperialYear} from './getImperialYear';
import {getEraForLang} from './getEraForLang';
import {LANGUAGES} from './enumerations/languages'

export const getJapaneseImperialYear = (date) => {
    var imperialYear = parseInt(getImperialYear(date), 10);
    var eraSymbol = getEraForLang(LANGUAGES.JAPANESE_LANGUAGE, date);
    var result;
    if (imperialYear === 1) {
        result = `${eraSymbol}元`;
    } else {
        result = `${eraSymbol}${imperialYear}`;
    }
    return result;
};