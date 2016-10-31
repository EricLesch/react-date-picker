import {ERAS} from './eras';

var meijiEra = new Date(1868, 9, 8);
var taishoEra = new Date(1912, 7, 12);
var showaEra = new Date(1926, 12, 25);
var heiseiEra = new Date(1989, 1, 8);

export const ERA_DATES = {
    [ERAS.MEIJI_ERA]: meijiEra,
    [ERAS.TAISHO_ERA]: taishoEra,
    [ERAS.SHOWA_ERA]: showaEra,
    [ERAS.HEISEI_ERA]: heiseiEra
};