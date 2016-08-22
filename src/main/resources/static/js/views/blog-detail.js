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

    var BlogDetailView = Backbone.View.extend({

        el: '#blog-detail',

        // The DOM events specific to an item.
        events: {
            'click .destroy': 'clear',
            'click .edit': 'edit'
        },

        // The BlogDetailView listens for changes to its model, re-rendering. Since there's
        // a one-to-one correspondence between a **Blog** and a **BlogDetailView** in this
        // app, we set a direct reference on the model for convenience.
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
            this.listenTo(this.model, 'invalid', this.invalidProc);
        },


        // Re-render the titles of the blog item.
        render: function () {
            // var blogId = Common.getValue("blogId");
            // console.log(blogId);
            this.$el.html(Mustache.render(blogsTemplate, this.model.toJSON()));

            this.$inputTitle = this.$('.blog-title');
            this.$inputContent = this.$('.blog-content');
            return this;
        },

        // Remove the item, destroy the model from *back end* and delete its view.
        clear: function () {
            this.model.destroy({wait: true});
        },

        edit: function () {
            var title = this.$inputTitle.val().trim();
            var content = this.$inputContent.val().trim();
            this.model.save({title: title, content: content}, {wait: true});
        },

        invalidProc: function (model, error) {
            console.log(error);
        }
    });

    return BlogDetailView;
});
