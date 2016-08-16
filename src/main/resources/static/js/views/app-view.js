/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'collections/blogs',
    'views/blog-view',
    'common'
], function ($, _, Backbone, Blogs, BlogView, Common) {
    'use strict';

    // Our overall **AppView** is the top-level piece of UI.
    var AppView = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: '#blogapp',

        // Delegated events for creating new items, and clearing completed ones.
        events: {
            'click #new-blog': 'createNewBlog'
        },

        // At initialization we bind to the relevant events on the `Blogs`
        // collection, when items are added or changed. Kick things off by
        // loading any preexisting blogs that might be saved in *back end*.
        initialize: function () {
            this.$blogList = this.$('#blog-list');
            this.$inputTitle = this.$('#blog-title');
            this.$inputContent = this.$('#blog-content');

            this.listenTo(Blogs, 'add', this.addOne);
            this.listenTo(Blogs, 'reset', this.addAll);
            this.listenTo(Blogs, 'sync', this.syncProc);
            this.listenTo(Blogs, 'error', this.errorProc);
            this.listenTo(Blogs, 'invalid', this.invalidProc);
            this.listenTo(Blogs, 'all', _.debounce(this.render, 0));

            Blogs.fetch();
        },

        // Re-rendering the App just means refreshing the statistics -- the rest
        // of the app doesn't change.
        render: function () {

        },

        // Add a single blog item to the list by creating a view for it, and
        // appending its element to the `<ul>`.
        addOne: function (blog) {
            var view = new BlogView({model: blog});
            this.$blogList.append(view.render().el);
        },

        // Add all items in the **Blogs** collection at once.
        addAll: function () {
            this.$blogList.empty();
            Blogs.each(this.addOne, this);
        },

        // Generate the attributes for a new Blog item.
        newAttributes: function () {
            return {
                title: this.$inputTitle.val().trim(),
                content: this.$inputContent.val().trim()
            };
        },

        // If you hit return in the main input field, create new **Blog** model,
        createNewBlog: function () {
            Blogs.create(this.newAttributes(), {wait: true, validate:true});
        },

        errorProc: function () {
            console.log("errorProc");
        },

        syncProc: function () {
            console.log("syncProc");
            this.$inputTitle.val('');
            this.$inputContent.val('');
        },

        invalidProc: function (collection, error) {
            console.log(error);
        }
    });

    return AppView;
});
