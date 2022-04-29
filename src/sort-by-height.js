const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

 function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  index_arr = [];
  short_arr = [];
  result_arr = [];
  count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      index_arr.push(i);
    } else {
      short_arr.push(arr[i]);
    }
  } 
  short_arr.sort(compareNumeric);

  for (let i = 0; i < arr.length; i++) {
    if (index_arr.includes(i) ) {
      result_arr.push(-1);
    } else {
      result_arr.push(short_arr[count++]);
    }
  }
  return result_arr;

}

module.exports = {
  sortByHeight
};
