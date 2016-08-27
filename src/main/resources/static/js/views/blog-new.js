/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'simModule',
    'simUploader',
    'simHotkeys',
    'simditor',
    'common'
], function ($, _, Backbone, SimModule, SimUploader, SimHotkeys, Simditor, Common) {
    'use strict';

    // Our overall **BlogIndexView** is the top-level piece of UI.
    var BlogNewView = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: '#blog-new',

        // Delegated events for creating new items, and clearing completed ones.
        events: {
            'click #publish-btn': 'newBlog'
        },

        // The BlogNewView listens for changes to its model, re-rendering. Since there's
        // a one-to-one correspondence between a **Blog** and a **BlogNewView** in this
        // app, we set a direct reference on the model for convenience.
        initialize: function () {
            // Initialize simditor
            var toolbar = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent', 'alignment'];
            this.editor = new Simditor({
                textarea: $('#editor'),
                placeholder: '这里输入文字...',
                toolbar: toolbar,
                pasteImage: true,
                upload: location.search === '?upload' ? {
                    url: '/upload'
                } : false
            });

            this.listenTo(this.model, 'invalid', this.invalidProc);
            this.listenTo(this.model, 'all', _.debounce(this.render, 0));
        },

        // Re-rendering the App just means refreshing the statistics -- the rest
        // of the app doesn't change.
        render: function () {

        },

        newBlog: function () {
            this.listenTo(this.model, 'sync', this.syncProc);
            this.listenTo(this.model, 'error', this.errorProc);

            var title = 'backboneJS';
            var content = this.editor.getValue();
            this.model.save({title: title, content: content}, {wait: true});
            console.log(content);
        },

        errorProc: function () {
            console.log("errorProc");
        },

        syncProc: function () {
            console.log("syncProc");
            window.location.href = "/blogs";
        },

        invalidProc: function (model, error) {
            console.log(error);
        }
    });

    return BlogNewView;
});
