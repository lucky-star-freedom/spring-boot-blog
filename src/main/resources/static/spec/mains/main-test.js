/**
 * Created by luzy.fnst on 2016/10/11.
 */
/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        mustache: {
            exports: 'Mustache'
        },
        'jasmine': {
            exports: 'window.jasmineRequire'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'window.jasmineRequire'
        },
        'boot': {
            deps: ['jasmine', 'jasmine-html'],
            exports: 'window.jasmineRequire'
        }
    },
    paths: {
        jquery: '/vendor/jquery/jquery',
        underscore: '/vendor/underscore/underscore',
        backbone: '/vendor/backbone/backbone',
        mustache: '/vendor/mustache/mustache',
        text: '/vendor/requirejs-text/text',
        moment: '/vendor/moment/moment',
        jasmine: '/vendor/jasmine/jasmine',
        "jasmine-html": '/vendor/jasmine/jasmine-html',
        boot: '/vendor/jasmine/boot',
        sinon : '/vendor/sinon/sinon',
        common: '/js/utils/common'
    }
});

var specs = [
    '/spec/models/blog.spec.js'
];

require(['boot'], function () {
    require(specs, function () {
        window.onload();
    });
});
