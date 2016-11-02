import {ERAS} from './eras';
import {ERA_DATES} from './eraDates';

export const getEra = (date) => {
    if (date >= ERA_DATES[ERAS.HEISEI_ERA]) {
        return ERAS.HEISEI_ERA;
    } else if (date >= ERA_DATES[ERAS.SHOWA_ERA]) {
        return ERAS.SHOWA_ERA;
    } else if (date >= ERA_DATES[ERAS.TAISHO_ERA]) {
        return ERAS.TAISHO_ERA;
    } else if (date >= ERA_DATES[ERAS.MEIJI_ERA]) {
        return ERAS.MEIJI_ERA;
    } else {
        return "";
    }
};
