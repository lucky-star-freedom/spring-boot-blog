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
            'click .edit': 'edit'
        },

        // The BlogView listens for changes to its model, re-rendering. Since there's
        // a one-to-one correspondence between a **Blog** and a **BlogView** in this
        // app, we set a direct reference on the model for convenience.
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        // Re-render the titles of the blog item.
        render: function () {
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
        }
    });

    return BlogView;
});
