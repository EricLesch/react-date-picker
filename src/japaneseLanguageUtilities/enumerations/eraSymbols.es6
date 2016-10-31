import {ERAS} from './eras';
import { LANGUAGES } from './languages';

export const ERA_SYMBOLS = {
    [LANGUAGES.ENGLISH_LANGUAGE]: {
        [ERAS.HEISEI_ERA]: 'H',
        [ERAS.MEIJI_ERA]: 'M',
        [ERAS.SHOWA_ERA]: 'S',
        [ERAS.TAISHO_ERA]: 'T'
    },
    [LANGUAGES.JAPANESE_LANGUAGE]: {
        [ERAS.HEISEI_ERA]: '平成',
        [ERAS.MEIJI_ERA]: '明治',
        [ERAS.SHOWA_ERA]: '昭和',
        [ERAS.TAISHO_ERA]: '平成'
    }
};