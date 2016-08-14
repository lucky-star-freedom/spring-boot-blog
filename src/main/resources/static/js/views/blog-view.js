/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/blogs.html',
    'common'
], function ($, _, Backbone, blogsTemplate, Common) {
    'use strict';

    var BlogView = Backbone.View.extend({

        tagName: 'li',

        template: _.template(blogsTemplate),

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
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        },

        // Remove the item, destroy the model from *back end* and delete its view.
        clear: function () {
            this.model.destroy();
        },

        consoleOutput: function () {
            console.log("you are click view");
        }
    });

    return BlogView;
});
