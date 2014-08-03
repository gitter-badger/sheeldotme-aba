var duosexagesimal = require('./aba');

var assert = require("assert")

describe('aba', function () {

  describe('#toDecimal()', function () {
    it('should return null if no arguments passed', function () {
      assert.equal(duosexagesimal.toDecimal(), null);
    });
    it('should return null if argument is not a string', function () {
      assert.equal(duosexagesimal.toDecimal({}), null);
    });
    it('should return null if null is passed', function () {
      assert.equal(duosexagesimal.toDecimal(null), null);
    });
    it('should return null if argument is a string but not alphanumeric', function () {
      assert.equal(duosexagesimal.toDecimal('a!'), null);
    });
    it('should return null when the decimal value will be too large', function () {
      assert.equal(duosexagesimal.toDecimal('fFgnDxSe8'), null);
    });
    it('should return correct decimal values', function () {
      assert.equal(duosexagesimal.toDecimal('0'), 0);
      assert.equal(duosexagesimal.toDecimal('5'), 5);
      assert.equal(duosexagesimal.toDecimal('A'), 10);
      assert.equal(duosexagesimal.toDecimal('a'), 36);
      assert.equal(duosexagesimal.toDecimal('10'), 62);
      assert.equal(duosexagesimal.toDecimal('1c'), 100);
    });
  });

  describe('#fromDecimal()', function () {
    it('should return null if no arguments passed', function () {
      assert.equal(duosexagesimal.fromDecimal(Math.pow(2, 53)), null);
    })
    it('should return null if argument is not a number', function () {
      assert.equal(duosexagesimal.fromDecimal({}), null);
    })
    it('should return null if argument is not a whole number', function () {
      assert.equal(duosexagesimal.fromDecimal(3.14), null);
    });
    it('should return null if null is passed', function () {
      assert.equal(duosexagesimal.fromDecimal(null), null);
    });
    it('should return correct duosexagesimal values', function () {
      assert.equal(duosexagesimal.fromDecimal(0), '0');
      assert.equal(duosexagesimal.fromDecimal(5), '5');
      assert.equal(duosexagesimal.fromDecimal(10), 'A');
      assert.equal(duosexagesimal.fromDecimal(36), 'a');
      assert.equal(duosexagesimal.fromDecimal(62), '10');
      assert.equal(duosexagesimal.fromDecimal(100), '1c');
    });
  });
})