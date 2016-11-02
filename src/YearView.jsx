'use strict';

var React = require('react');
var moment = require('moment');

var FORMAT = require('./utils/format');
var asConfig = require('./utils/asConfig');
var toMoment = require('./toMoment');
var onEnter = require('./onEnter');
var assign = require('object-assign');

import {CALENDAR_TYPES} from './japaneseLanguageUtilities/enumerations/calendarTypes';
import {LANGUAGES} from './japaneseLanguageUtilities/enumerations/languages';

import {getJapaneseImperialYear} from './japaneseLanguageUtilities/getJapaneseImperialYear';

var TODAY;

function emptyFn() {
}

var YearView = React.createClass({

    displayName: 'YearView',

    getDefaultProps: function () {
        return asConfig();
    },

    /**
     * Returns all the days in the specified month.
     *
     * @param  {Moment/Date/Number} value
     * @return {Moment[]}
     */
    getMonthsInYear: function (value) {
        var start = moment(value).startOf('year');
        var result = [];
        var i = 0;

        for (; i < 12; i++) {
            result.push(moment(start));
            start.add(1, 'month');
        }

        return result;
    },

    render: function () {
        TODAY = +moment().startOf('day');

        var props = assign({}, this.props);

        var viewMoment = props.viewMoment = moment(this.props.viewDate);

        if (props.date) {
            props.moment = moment(props.date).startOf('month');
        }

        var monthsInView = this.getMonthsInYear(viewMoment);

        return (
            <table className="dp-table dp-year-view">
                <tbody>
                {this.renderMonths(props, monthsInView)}
                </tbody>
            </table>
        )
    },

    /**
     * Render the given array of days
     * @param  {Moment[]} days
     * @return {React.DOM}
     */
    renderMonths: function (props, days) {
        var nodes = days.map(function (date) {
            return this.renderMonth(props, date);
        }, this);

        var len = days.length;
        var buckets = [];
        var bucketsLen = Math.ceil(len / 4);

        var i = 0;

        for (; i < bucketsLen; i++) {
            buckets.push(nodes.slice(i * 4, (i + 1) * 4));
        }

        return buckets.map(function (bucket, i) {
            return <tr key={"row" + i}>{bucket}</tr>;
        });
    },

    renderMonth: function (props, date) {
        var monthText = FORMAT.month(date, props.monthFormat);
        var classes = ["dp-cell dp-month"];

        var dateTimestamp = +date;

        if (dateTimestamp == props.moment) {
            classes.push('dp-value');
        }

        var onClick = this.handleClick.bind(this, props, date);

        return (
            <td
                tabIndex="1"
                role="link"
                key={monthText}
                className={classes.join(' ')}
                onClick={onClick}
                onKeyUp={onEnter(onClick)}
            >
                {monthText}
            </td>
        );
    },

    handleClick: function (props, date, event) {
        event.target.value = date;
        (props.onSelect || emptyFn)(date, event);
    }
});

YearView.getHeaderText = function (moment, props) {
    var currentLanguage = props.currentLanguage;
    var calendar = props.calendar;

    var date = moment.toDate();
    var yearView;

    yearView = 'headerText';

    if (currentLanguage === LANGUAGES.JAPANESE_LANGUAGE) {
        if (calendar === CALENDAR_TYPES.IMPERIAL) {
            yearView = getJapaneseImperialYear(date);
        } else if (calendar === CALENDAR_TYPES.GREGORIAN) {

        }
    } else if (currentLanguage === LANGUAGES.ENGLISH_LANGUAGE) {
        if (calendar === CALENDAR_TYPES.IMPERIAL) {
        } else if (calendar === CALENDAR_TYPES.GREGORIAN) {

        }
    }

    // if(moment.locale() === 'ja') {
    //     yearView = toMoment(moment, null, { locale: props.locale }).toDate().toLocaleDateString(props.calendar, {year: 'numeric'});
    // }
    // else if (props.calendar === CALENDAR_TYPES.IMPERIAL) {
    //     yearView = FORMAT.getYearText(toMoment(moment, null, { locale: props.locale }).format('YYYY'));
    // }
    // else {
    //     yearView = year +  ' - ' + (year + 11);
    // }

    return yearView;
};

module.exports = YearView;
