/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/blogs',
    'mustache',
    'text!templates/blog-index.html',
    'common'
], function ($, _, Backbone, Blogs, Mustache, blogsTemplate, Common) {
    'use strict';

    // Our overall **BlogIndexView** is the top-level piece of UI.
    var BlogIndexView = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: '#blog-app',

        // Delegated events for creating new items, and clearing completed ones.
        events: {},

        // At initialization we bind to the relevant events on the `Blogs`
        // collection, when items are added or changed. Kick things off by
        // loading any preexisting blogs that might be saved in *back end*.
        initialize: function () {
            this.$blogList = this.$('#blog-list');

            this.listenTo(Blogs, 'add', this.addOne);
            this.listenTo(Blogs, 'reset', this.addAll);
            this.listenTo(Blogs, 'sync', this.syncProc);
            this.listenTo(Blogs, 'error', this.errorProc);
            this.listenTo(Blogs, 'all', _.debounce(this.render, 0));

            Blogs.fetch({reset: true});
        },

        // Re-rendering the App just means refreshing the statistics -- the rest
        // of the app doesn't change.
        render: function () {

        },

        toHTML: function (model) {
            return Mustache.render(blogsTemplate, model.toJSON());
        },

        // Add a single blog item to the list by creating a view for it
        addOne: function (blog) {
            this.$blogList.prepend(this.toHTML(blog));
        },

        // Add all items in the **Blogs** collection at once.
        addAll: function () {
            this.$blogList.empty();
            Blogs.each(this.addOne, this);
        },

        errorProc: function () {
            console.log("errorProc");
        },

        syncProc: function () {
            console.log("syncProc");
        }
    });

    return BlogIndexView;
});
