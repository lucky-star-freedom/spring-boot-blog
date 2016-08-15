/*global define*/
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var Blog = Backbone.Model.extend({
        urlRoot: 'api',
        url: 'api/blogs',
        // Default attributes for the blog
        defaults: {
            title: '',
            content: ''
        }
    });

    return Blog;
});
