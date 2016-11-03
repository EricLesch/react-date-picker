import {ERA_SYMBOLS} from './enumerations/eraSymbols';
import {getEra} from './enumerations/getEra';

export const getEraForLang = (lang, date) => {
    return ERA_SYMBOLS[lang][getEra(date)];
};