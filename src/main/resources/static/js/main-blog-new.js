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
        simModule: {
            deps: [
                'jquery'
            ],
            exports: 'SimModule'
        },
        simUploader: {
            deps: [
                'jquery'
            ],
            exports: 'SimUploader'
        },
        simHotkeys: {
            deps: [
                'jquery'
            ],
            exports: 'SimHotkeys'
        },
        simditor: {
            deps: [
                'jquery'
            ],
            exports: 'Simditor'
        }
    },
    paths: {
        jquery: '../vendor/jquery/jquery',
        underscore: '../vendor/underscore/underscore',
        backbone: '../vendor/backbone/backbone',
        mustache: '../vendor/mustache/mustache',
        text: '../vendor/requirejs-text/text',
        simModule: '../vendor/simditor/js/module',
        simUploader: '../vendor/simditor/js/uploader',
        simHotkeys: '../vendor/simditor/js/hotkeys',
        simditor: '../vendor/simditor/js/simditor'
    }
});

require([
    'models/blog',
    'views/blog-new',
    'common'
], function (Blog, AppView, Common) {
    // Initialize blog
    var blog = new Blog();

    // Initialize the application view
    new AppView({model: blog});
});
