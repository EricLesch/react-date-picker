'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEra = undefined;

var _eras = require('./eras');

var _eraDates = require('./eraDates');

var getEra = exports.getEra = function getEra(date) {
    if (date >= _eraDates.ERA_DATES[_eras.ERAS.HEISEI_ERA]) {
        return _eras.ERAS.HEISEI_ERA;
    } else if (date >= _eraDates.ERA_DATES[_eras.ERAS.SHOWA_ERA]) {
        return _eras.ERAS.SHOWA_ERA;
    } else if (date >= _eraDates.ERA_DATES[_eras.ERAS.TAISHO_ERA]) {
        return _eras.ERAS.TAISHO_ERA;
    } else if (date >= _eraDates.ERA_DATES[_eras.ERAS.MEIJI_ERA]) {
        return _eras.ERAS.MEIJI_ERA;
    } else {
        return "";
    }
};