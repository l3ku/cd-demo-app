/**
 * @file This module contains all acceptance tests. The Zombie testing framework is
 * used in the implementation of acceptance tests.
 */

var http = require('http');
var Browser = require('zombie');

/**
 * Test that the home page is displayed correctly, and contains the text
 * "Hello World!".
 */
describe('The home page is displayed correctly', function () {
    before(function(done) {
        this.browser = new Browser({ site: 'http://localhost/' });
        this.browser.visit('/', done);
    });

    // Actual assertions
    it('Should be sucessful', function () {
        this.browser.assert.success();
    });

    it('Must have the correct HTML title', function () {
        this.browser.assert.text('title', 'CD Demo App');
    });

    it('Should have a correct h1 page title', function () {
        this.browser.assert.text('h1.page-title', 'Continuous Delivery Demo Application');
    });

    it('Should have the correct description', function () {
        this.browser.assert.text('p.page-description', 'This is a demo app that I use in the Continuous Delivery pipeline in my Bachelor\'s thesis.');
    });

    it('Should have the correct small text', function () {
        this.browser.assert.text('small.page-ps', 'P.S. Check the GitHub repo for details');
    });

    it('The small text should have the correct GitHub link', function () {
        this.browser.assert.link('small.page-ps a.github-link', 'GitHub repo', 'https://github.com/l3ku/cd-demo-app');
    });
});
