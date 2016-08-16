/*global define*/
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var Blog = Backbone.Model.extend({

        // ajax url
        urlRoot: 'api/blogs',

        idAttribute: 'id',

        // Default attributes for the blog
        defaults: {
            title: '',
            content: ''
        },

        initialize: function () {
            this.listenTo(this, 'invalid', this.invalidProc);
        },

        invalidProc: function (model, error) {
            console.log(error);
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
