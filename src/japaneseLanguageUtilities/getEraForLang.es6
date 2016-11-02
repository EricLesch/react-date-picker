import {ERA_SYMBOLS} from './enumerations/eraSymbols';
import {getEra} from './enumerations/getEra';

export const getEraForLang = (lang, date) => {
    try {
        return ERA_SYMBOLS[lang][getEra(date)];
    } catch(e) {
        debugger;
    }
};