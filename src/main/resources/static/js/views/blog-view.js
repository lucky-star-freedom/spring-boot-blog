/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'mustache',
    'text!templates/blogs.html',
    'common'
], function ($, _, Backbone, Mustache, blogsTemplate, Common) {
    'use strict';

    var BlogView = Backbone.View.extend({

        tagName: 'li',

        // The DOM events specific to an item.
        events: {
            'click .destroy': 'clear',
            'click .view': 'consoleOutput'
        },

        // The BlogView listens for changes to its model, re-rendering. Since there's
        // a one-to-one correspondence between a **Blog** and a **BlogView** in this
        // app, we set a direct reference on the model for convenience.
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        // Re-render the titles of the todo item.
        render: function () {
            this.$el.html(Mustache.render(blogsTemplate, this.model.toJSON()));

            return this;
        },

        // Remove the item, destroy the model from *back end* and delete its view.
        clear: function () {
            this.model.destroy({wait: true});
        },

        consoleOutput: function () {
        }
    });

    return BlogView;
});
