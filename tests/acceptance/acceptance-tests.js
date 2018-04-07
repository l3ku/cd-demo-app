/**
 * @file This module contains all acceptance tests. The Zombie testing framework is
 * used in the implementation of acceptance tests.
 */

var http = require('http');
var Browser = require('zombie');
var index = require('./../../index');
var testServerPort = 8124;

/**
 * Test that the home page is displayed correctly, and contains the text
 * "Hello World!".
 */
describe('The home page is displayed correctly', function () {
  // Create web server before tests
    before(function(done) {
        this.server = http.createServer(index).listen(testServerPort);
        this.browser = new Browser({ site: 'http://localhost:' + testServerPort });
        this.browser.visit('/', done);
    });

    // Actual assertions
    it('Should be sucessful', function () {
        this.browser.assert.success();
    });

    it('Must have the correct page title', function () {
        this.browser.assert.text('title', 'Home Page');
    });

    it('Should read "Hello World!" on the home page', function () {
        this.browser.assert.text('article.hello-world', 'Hello World!');
    });
});
