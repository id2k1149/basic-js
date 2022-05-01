const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (str == '') return '';
  result = '';
  count = 1;
  char = str[0];

  for (let i = 1; i < str.length; i++) {
    

    if (char == str[i]) {
      count++;
    } else {
      result += count + char;
      count = 1;
      char = str[i];

    }
  }

  if (count > 1) {
    result += count + char;
  } else {
    result += char;
  }

  return result.replace(/1/g, '');;

}

module.exports = {
  encodeLine
};


