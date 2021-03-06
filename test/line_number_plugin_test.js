'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.line_number_plugin = {
  setUp: function(done) {
    done();
  },
  simple_test: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/file1');
    var expected = grunt.file.read('test/expected/file1');
    test.equal(actual, expected, 'Should replace "__LINE__" with the current line number.');

    test.done();
  }
};
