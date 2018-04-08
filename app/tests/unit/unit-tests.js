/**
 * @file This module contains all the unit tests of the application. Unit tests are
 * implemented with the NodeUnit unit test library.
 */

var nodeUnit = require('nodeunit');

/**
 * Test the home page with a unit test. TODO: Currently this is only provided
 * for demonstration purposes.
 *
 * @param {object} test - Test object passed by nodeunit test library.
 */
exports.testHome = function (test) {
    test.expect(1);
    test.ok(true, 'This test always passes');
    test.done();
};
