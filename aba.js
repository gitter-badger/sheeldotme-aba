var digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('');

/**
 *
 * @param {string} duosexagesimalNumber
 * @returns {number} decimalNumber
 */
module.exports.toDecimal = function toDecimal(duosexagesimalNumber) {

  /* Enforce prerequisites */

  if (typeof duosexagesimalNumber !== 'string') return null;

  /* Convert the number from base 62 to base 10 */

  var decimalNumber = 0;

  for (var i = 0; i < duosexagesimalNumber.length; i++) {
    var exponent = duosexagesimalNumber.length - i - 1;
    var index = digits.indexOf(duosexagesimalNumber[i]);

    if (index === -1) return null;

    decimalNumber += (index) * Math.pow(digits.length, exponent);
  }

  /* Return null if decimal number is so large that precision is lost */

  if (decimalNumber >= 9007199254740992) return null;

  return decimalNumber;
};

/**
 *
 * @param {number} decimalNumber
 * @returns {string} duosexagesimalNumber
 */
module.exports.fromDecimal = function fromDecimal(decimalNumber) {

  /* Enforce prerequisites */

  if (typeof decimalNumber !== 'number') return null;
  if (decimalNumber % 1 !== 0) return null;
  if (decimalNumber >= 9007199254740992) return null;

  /* Convert the number from base 10 to base 62 */

  var buffer = [];

  do {
    buffer.push(digits[Math.round(decimalNumber % digits.length)]);
    decimalNumber = Math.floor(decimalNumber / digits.length);
  } while (decimalNumber >= 1);

  return buffer.reverse().join('');
};