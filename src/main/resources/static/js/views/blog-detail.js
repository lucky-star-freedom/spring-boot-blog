/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'mustache',
    'text!../templates/blog-detail.html',
    'common'
], function ($, _, Backbone, Mustache, blogsTemplate, Common) {
    'use strict';

    var BlogDetailView = Backbone.View.extend({

        el: '#blog-detail',

        // The DOM events specific to an item.
        events: {
            'click #delete-btn': 'deleteBlog'
        },

        // The BlogDetailView listens for changes to its model, re-rendering. Since there's
        // a one-to-one correspondence between a **Blog** and a **BlogDetailView** in this
        // app, we set a direct reference on the model for convenience.
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        // Re-render the titles of the blog item.
        render: function () {
            this.$el.html(Mustache.render(blogsTemplate, this.model.toJSON()));
        },

        deleteBlog: function () {
            this.listenTo(this.model, 'sync', this.syncProc);
            this.listenTo(this.model, 'error', this.errorProc);

            this.model.destroy({wait: true});
        },

        errorProc: function () {
            console.log("errorProc");
        },

        syncProc: function () {
            console.log("syncProc");
            window.location.href = "/blogs";
        }
    });

    return BlogDetailView;
});
