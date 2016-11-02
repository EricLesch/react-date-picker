'use strict';

var _calendarTypes = require('./japaneseLanguageUtilities/enumerations/calendarTypes');

var _languages = require('./japaneseLanguageUtilities/enumerations/languages');

var _getDecadeViewHeaderText = require('./japaneseLanguageUtilities/getDecadeViewHeaderText');

var _getEnglishImperialYear = require('./japaneseLanguageUtilities/getEnglishImperialYear');

var _getJapaneseImperialYear = require('./japaneseLanguageUtilities/getJapaneseImperialYear');

var React = require('react');
var moment = require('moment');
var assign = require('object-assign');

var FORMAT = require('./utils/format');
var asConfig = require('./utils/asConfig');
var toMoment = require('./toMoment');
var onEnter = require('./onEnter');

var TODAY;

function emptyFn() {}

var DecadeView = React.createClass({

    displayName: 'DecadeView',

    getDefaultProps: function getDefaultProps() {
        return asConfig();
    },

    /**
     * Returns all the years in the decade of the given value
     *
     * @param  {Moment/Date/Number} value
     * @return {Moment[]}
     */
    getYearsInDecade: function getYearsInDecade(value) {
        var year = moment(value).get('year');
        var offset = year % 10;

        var startDate = moment(value).endOf('year').subtract(offset + 1, 'years');

        // year = year - offset - 1;

        var results = [];
        var i = 0;

        for (; i < 12; i++) {
            results.push(moment(startDate));
            startDate.add(1, 'year');
        }

        return results;
    },

    render: function render() {

        TODAY = +moment().startOf('day');

        var props = assign({}, this.props);

        var viewMoment = props.viewMoment = moment(this.props.viewDate);

        if (props.date) {
            props.moment = moment(props.date).startOf('year');
        }

        var yearsInView = this.getYearsInDecade(viewMoment);

        return React.createElement(
            'table',
            { className: 'dp-table dp-decade-view' },
            React.createElement(
                'tbody',
                null,
                this.renderYears(props, yearsInView)
            )
        );
    },

    /**
     * Render the given array of days
     * @param  {Moment[]} days
     * @return {React.DOM}
     */
    renderYears: function renderYears(props, days) {
        var nodes = days.map(function (date, index, arr) {
            return this.renderYear(props, date, index, arr);
        }, this);
        var len = days.length;
        var buckets = [];
        var bucketsLen = Math.ceil(len / 4);

        var i = 0;

        for (; i < bucketsLen; i++) {
            buckets.push(nodes.slice(i * 4, (i + 1) * 4));
        }

        return buckets.map(function (bucket, i) {
            return React.createElement(
                'tr',
                { key: "row" + i },
                bucket
            );
        });
    },

    renderYear: function renderYear(props, date, index, arr) {
        var imperialYear, era;
        var yearText = FORMAT.year(date, props.yearFormat);
        date = moment(date).endOf('year');
        var currentLanguage = props.currentLanguage;
        var classes = ["dp-cell dp-year"];

        var dateTimestamp = +date;

        if (dateTimestamp == props.moment) {
            classes.push('dp-value');
        }

        if (!index) {
            classes.push('dp-prev');
        }

        if (index == arr.length - 1) {
            classes.push('dp-next');
        }

        var onClick = this.handleClick.bind(this, props, date);

        var text;

        if (currentLanguage === _languages.LANGUAGES.JAPANESE_LANGUAGE) {
            if (props.calendar === _calendarTypes.CALENDAR_TYPES.IMPERIAL) {
                text = (0, _getJapaneseImperialYear.getJapaneseImperialYear)(date);
            } else if (props.calendar === _calendarTypes.CALENDAR_TYPES.GREGORIAN) {
                text = yearText;
            }
        } else if (currentLanguage === _languages.LANGUAGES.ENGLISH_LANGUAGE) {
            if (props.calendar === _calendarTypes.CALENDAR_TYPES.IMPERIAL) {
                text = (0, _getEnglishImperialYear.getEnglishImperialYear)(date);
            } else if (props.calendar === _calendarTypes.CALENDAR_TYPES.GREGORIAN) {
                text = yearText;
            }
        }

        return React.createElement(
            'td',
            {
                role: 'link',
                tabIndex: '1',
                key: yearText,
                className: classes.join(' '),
                onClick: onClick,
                onKeyUp: onEnter(onClick)
            },
            text
        );
    },

    handleClick: function handleClick(props, date, event) {
        event.target.value = date;
        (props.onSelect || emptyFn)(date, event);
    }
});

DecadeView.getHeaderText = _getDecadeViewHeaderText.getDecadeViewHeaderText;

module.exports = DecadeView;