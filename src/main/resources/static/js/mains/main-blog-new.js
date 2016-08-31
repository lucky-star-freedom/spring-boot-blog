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
        }
    },
    paths: {
        jquery: '../../vendor/jquery/jquery',
        underscore: '../../vendor/underscore/underscore',
        backbone: '../../vendor/backbone/backbone',
        mustache: '../../vendor/mustache/mustache',
        text: '../../vendor/requirejs-text/text',
        simModule: '../../vendor/simditor/js/module',
        simUploader: '../../vendor/simditor/js/uploader',
        simHotkeys: '../../vendor/simditor/js/hotkeys',
        simditor: '../../vendor/simditor/js/simditor',
        moment: '/vendor/moment/moment',
        common: '../utils/common'
    }
});

require([
    '../models/blog',
    '../views/blog-new'
], function (Blog, AppView) {
    // Initialize blog
    var blog = new Blog();

    // Initialize the application view
    new AppView({model: blog});
});
