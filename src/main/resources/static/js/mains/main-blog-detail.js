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
        moment: '/vendor/moment/moment',
        common: '../utils/common'
    }
});

require([
    '../models/blog',
    '../views/blog-detail',
    'common'
], function (Blog, AppView, Common) {
    // Fetch blog info by id
    var blog = new Blog({id: Common.getHiddenValue("blogId")});
    blog.fetch();

    // Initialize the application view
    new AppView({model: blog});
});
