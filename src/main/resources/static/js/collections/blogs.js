/*global define */
define([
    'underscore',
    'backbone',
    'models/blog'
], function (_, Backbone, Blog) {
    'use strict';

    var BlogsCollection = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: Blog,
        url: 'api/blogs'
    });

    return new BlogsCollection();
});
