import {ERAS} from './eras';

var meijiEra = new Date(1868, 8, 8);
var taishoEra = new Date(1912, 6, 12);
var showaEra = new Date(1926, 11, 25);
var heiseiEra = new Date(1989, 0, 8);

export const ERA_DATES = {
    [ERAS.MEIJI_ERA]: meijiEra,
    [ERAS.TAISHO_ERA]: taishoEra,
    [ERAS.SHOWA_ERA]: showaEra,
    [ERAS.HEISEI_ERA]: heiseiEra
};