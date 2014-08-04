var aba = require('./aba');

var assert = require("assert")

describe('aba', function () {

  describe('#toDecimal()', function () {
    it('should return null if no arguments passed', function () {
      assert.equal(aba.toDecimal(), null);
    });
    it('should return null if argument is not a string', function () {
      assert.equal(aba.toDecimal({}), null);
    });
    it('should return null if null is passed', function () {
      assert.equal(aba.toDecimal(null), null);
    });
    it('should return null if argument is a string but not alphanumeric', function () {
      assert.equal(aba.toDecimal('a!'), null);
    });
    it('should return null when the decimal value will be too large', function () {
      assert.equal(aba.toDecimal('fFgnDxSe8'), null);
    });
    it('should return correct decimal values', function () {
      assert.equal(aba.toDecimal('0'), 0);
      assert.equal(aba.toDecimal('5'), 5);
      assert.equal(aba.toDecimal('A'), 10);
      assert.equal(aba.toDecimal('a'), 36);
      assert.equal(aba.toDecimal('10'), 62);
      assert.equal(aba.toDecimal('1c'), 100);
      assert.equal(aba.toDecimal('fFgnDxSe7'), 9007199254740991);
    });
  });

  describe('#fromDecimal()', function () {
    it('should return null if no arguments passed', function () {
      assert.equal(aba.fromDecimal(Math.pow(2, 53)), null);
    })
    it('should return null if argument is not a number', function () {
      assert.equal(aba.fromDecimal({}), null);
    })
    it('should return null if argument is not a whole number', function () {
      assert.equal(aba.fromDecimal(3.14), null);
    });
    it('should return null if null is passed', function () {
      assert.equal(aba.fromDecimal(null), null);
    });
    it('should return null when the decimal value is too large', function () {
      assert.equal(aba.fromDecimal(9007199254740992), null);
    });
    it('should return correct duosexagesimal values', function () {
      assert.equal(aba.fromDecimal(0), '0');
      assert.equal(aba.fromDecimal(5), '5');
      assert.equal(aba.fromDecimal(10), 'A');
      assert.equal(aba.fromDecimal(36), 'a');
      assert.equal(aba.fromDecimal(62), '10');
      assert.equal(aba.fromDecimal(100), '1c');
      assert.equal(aba.fromDecimal(9007199254740991), 'fFgnDxSe7');
    });
  });
})