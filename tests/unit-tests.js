/**
 * This module contains all the unit tests of the application. Unit tests are
 * implemented with the NodeUnit unit test framework.
 */
var nodeUnit = require('nodeunit');

exports.testHome = function (test) {
    test.expect(1);
    test.ok(true, 'This test always passes');
    test.done();
};
