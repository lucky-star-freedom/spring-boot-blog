/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'mustache',
    'text!templates/blog-detail.html',
    'common'
], function ($, _, Backbone, Mustache, blogsTemplate, Common) {
    'use strict';

    var BlogDetailView = Backbone.View.extend({

        el: '#blog-detail',

        // The DOM events specific to an item.
        events: {
        },

        // The BlogDetailView listens for changes to its model, re-rendering. Since there's
        // a one-to-one correspondence between a **Blog** and a **BlogDetailView** in this
        // app, we set a direct reference on the model for convenience.
        initialize: function () {
            this.render();
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        // Re-render the titles of the blog item.
        render: function () {
            this.$el.html(Mustache.render(blogsTemplate, this.model.toJSON()));

            return this;
        }
    });

    return BlogDetailView;
});
