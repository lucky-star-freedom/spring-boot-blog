/**
 * Created by luzy.fnst on 2016/10/11.
 */
define([
    '/js/models/blog.js',
    'sinon'
], function (Blog, sinon) {
    'use strict';

    describe("blog model", function () {

        beforeEach(function () {
            this.blog = new Blog({
                title: "Catcher",
                content: "The Catcher in the Rye"
            });
            var collection = {
                url: "/collection"
            };
            this.blog.collection = collection;
        });

        describe("when instantiated", function () {

            it("should exhibit attributes", function () {
                expect(this.blog.get("title")).toEqual("Catcher");
                expect(this.blog.get("content")).toEqual("The Catcher in the Rye");
            });

        });

        describe("urls", function () {

            describe("when no id is set", function () {
                it("should return the urlRoot URL", function () {
                    expect(this.blog.url()).toEqual("/api/blogs");
                });
            });

            describe("when id is set", function () {
                it("should return the urlRoot URL and id", function () {
                    // this.blog.set({id: 1});
                    this.blog.set("id", 1);
                    expect(this.blog.url()).toEqual("/api/blogs/1");
                });
            });

        });

        describe("when saving", function () {

            beforeEach(function () {
                this.server = sinon.fakeServer.create();
                this.responseBody = '{"id":3,"title":"Catcher","content":"The Catcher in the Rye"}';
                this.server.respondWith(
                    "POST",
                    "/collection",
                    [
                        200,
                        {"Content-Type": "application/json"},
                        this.responseBody
                    ]
                );
                this.eventSpy = sinon.spy();
            });

            afterEach(function () {
                this.server.restore();
            });

            it("should make a save request to the server", function () {
                this.blog.save();
                expect(this.server.requests[0].method).toEqual("POST");
                expect(this.server.requests[0].url).toEqual("/api/blogs");
                expect(JSON.parse(this.server.requests[0].requestBody)).toEqual(this.blog.attributes);
            });

        });

    });
});






