const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  result = 0;
  
  s1_split = s1.split('');
  s2_split = s2.split('');

  s1_split.forEach(each => {
    if (s2_split.includes(each)) {
      result++;
      s2_split.splice(s2_split.indexOf(each), 1);
    }
  });

  return result;
      
} 

module.exports = {
  getCommonCharacterCount
};
