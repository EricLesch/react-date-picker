'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ERA_DATES = undefined;

var _ERA_DATES;

var _eras = require('./eras');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var meijiEra = new Date(1868, 9, 8);
var taishoEra = new Date(1912, 7, 12);
var showaEra = new Date(1926, 12, 25);
var heiseiEra = new Date(1989, 1, 8);

var ERA_DATES = exports.ERA_DATES = (_ERA_DATES = {}, _defineProperty(_ERA_DATES, _eras.ERAS.MEIJI_ERA, meijiEra), _defineProperty(_ERA_DATES, _eras.ERAS.TAISHO_ERA, taishoEra), _defineProperty(_ERA_DATES, _eras.ERAS.SHOWA_ERA, showaEra), _defineProperty(_ERA_DATES, _eras.ERAS.HEISEI_ERA, heiseiEra), _ERA_DATES);