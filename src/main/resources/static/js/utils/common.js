/*global define*/
'use strict';

define([
    'jquery',
    'moment'
], function ($, moment) {
    return {
        // What is the enter key constant?
        ENTER_KEY: 13,
        ESCAPE_KEY: 27,
        BLOG_PAGE_SIZE: 10,
        BLOG_HOMR_URL: '/blogs',

        getHiddenValue: function (name) {
            return $('input[name=' + name + ']').val();
        },

        getDateString: function (time) {
            return moment(time).format('LL');
        },

        getTimeFromNow: function (time) {
            return moment(time).fromNow();
        }
    };
});
