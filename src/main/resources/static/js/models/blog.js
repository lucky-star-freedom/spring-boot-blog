/*global define*/
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var Blog = Backbone.Model.extend({

        // ajax url
        // Specify a urlRoot if you're using a model outside of a collection,
        // to enable the default url function to generate URLs based on the model id.
        // "[urlRoot]/id"
        urlRoot: 'api/blogs',

        // A model's unique identifier is stored under the id attribute.
        idAttribute: 'id',

        // Default attributes for the blog
        defaults: {
            title: '',
            content: ''
        },

        validate: function (attrs) {
            for (var key in attrs) {
                if (attrs[key] === '') {
                    return key + ' can not be null';
                }
            }
        }
    });

    return Blog;
});
