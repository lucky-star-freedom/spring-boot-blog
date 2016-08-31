/*global define*/
'use strict';

define([
    'jquery'
], function ($) {
    return {
        // What is the enter key constant?
        ENTER_KEY: 13,
        ESCAPE_KEY: 27,
        BLOG_PAGE_SIZE: 10,
        BLOG_HOMR_URL: '/blogs',
        getValue: function (name) {
            return $('input[name=' + name + ']').val();
        }
    };
});
