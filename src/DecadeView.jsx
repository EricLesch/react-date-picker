'use strict';

var React  = require('react');
var moment = require('moment');
var assign = require('object-assign');

var FORMAT   = require('./utils/format');
var asConfig = require('./utils/asConfig');
var toMoment = require('./toMoment');
var onEnter  = require('./onEnter');

import {CALENDAR_TYPES} from './japaneseLanguageUtilities/enumerations/calendarTypes';
import {LANGUAGES} from './japaneseLanguageUtilities/enumerations/languages';

import {getDecadeViewHeaderText} from './japaneseLanguageUtilities/getDecadeViewHeaderText';
import {getEnglishImperialYear} from './japaneseLanguageUtilities/getEnglishImperialYear';
import {getJapaneseImperialYear} from './japaneseLanguageUtilities/getJapaneseImperialYear';


var TODAY;

function emptyFn(){}

var DecadeView = React.createClass({

    displayName: 'DecadeView',

    getDefaultProps: function() {
        return asConfig();
    },

    /**
     * Returns all the years in the decade of the given value
     *
     * @param  {Moment/Date/Number} value
     * @return {Moment[]}
     */
    getYearsInDecade: function(value){
        var year = moment(value).get('year');
        var offset = year % 10;

        var startDate = moment(value).endOf('year').subtract(offset + 1, 'years');

        // year = year - offset - 1;

        var results = [];
        var i = 0;

        for (; i < 12; i++){
            results.push(moment(startDate));
            startDate.add(1, 'year');
        }

        return results;
    },

    render: function() {

        TODAY = +moment().startOf('day');

        var props = assign({}, this.props);

        var viewMoment = props.viewMoment = moment(this.props.viewDate);

        if (props.date){
            props.moment = moment(props.date).startOf('year');
        }

        var yearsInView = this.getYearsInDecade(viewMoment);

        return (
            <table className="dp-table dp-decade-view">
                <tbody>
                    {this.renderYears(props, yearsInView)}
                </tbody>
            </table>
        )
    },

    /**
     * Render the given array of days
     * @param  {Moment[]} days
     * @return {React.DOM}
     */
    renderYears: function(props, days) {
        var nodes      = days.map(function(date, index, arr){
            return this.renderYear(props, date, index, arr)
        }, this)
        var len        = days.length;
        var buckets    = [];
        var bucketsLen = Math.ceil(len / 4);

        var i = 0;

        for ( ; i < bucketsLen; i++){
            buckets.push(nodes.slice(i * 4, (i + 1) * 4));
        }

        return buckets.map(function(bucket, i){
            return <tr key={"row" + i} >{bucket}</tr>
        })
    },

    renderYear: function(props, date, index, arr) {
        var imperialYear, era;
        var yearText = FORMAT.year(date, props.yearFormat);
        date = moment(date).endOf('year');
        var currentLanguage = props.currentLanguage;
        var classes = ["dp-cell dp-year"];

        var dateTimestamp = +date;

        if (dateTimestamp == props.moment){
            classes.push('dp-value');
        }

        if (!index){
            classes.push('dp-prev');
        }

        if (index == arr.length - 1){
            classes.push('dp-next');
        }

        var onClick = this.handleClick.bind(this, props, date);

        var text;

        if (currentLanguage === LANGUAGES.JAPANESE_LANGUAGE) {
            if (props.calendar === CALENDAR_TYPES.IMPERIAL) {
                text = getJapaneseImperialYear(date);
            } else if (props.calendar === CALENDAR_TYPES.GREGORIAN) {
                text =  yearText;
            }
        } else if (currentLanguage === LANGUAGES.ENGLISH_LANGUAGE) {
            if (props.calendar === CALENDAR_TYPES.IMPERIAL) {
                text = getEnglishImperialYear(date);
            } else if (props.calendar === CALENDAR_TYPES.GREGORIAN) {
               text =  yearText;
            }
        }

        return (
            <td
                role="link"
                tabIndex="1"
                key={yearText}
                className={classes.join(' ')}
                onClick={onClick}
                onKeyUp={onEnter(onClick)}
            >
                {text}
            </td>
        )
    },

    handleClick: function(props, date, event) {
        event.target.value = date;
        (props.onSelect || emptyFn)(date, event)
    }
});

DecadeView.getHeaderText = getDecadeViewHeaderText;

module.exports = DecadeView;
