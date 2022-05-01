const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  n_toString = n.toString();
  result = parseInt(n_toString.slice(1));
  for (let i = 1; i < n_toString.length; i++) {
    n_sliced = n_toString.slice(0, i) + n_toString.slice(i + 1);
    if (parseInt(n_sliced) > result) {
      result = parseInt(n_sliced);
    }
  }
  return result;
}

module.exports = {
  deleteDigit
};
