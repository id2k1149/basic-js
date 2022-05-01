const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */


function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return [];

  arr_result = [];
  discard_arr = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  for (let i = 0; i < arr.length; i++) {
    
    if (discard_arr.includes(arr[i])) {
      switch (arr[i]) {
        case '--discard-next':
          if (i == arr.length - 1) continue;
          if (arr[i+2] == '--double-prev' || arr[i+2] == '--discard-prev') {
            i ++
          }
          i++;
          continue;

        case '--discard-prev':
          if (i == 0) continue;
          arr_result.pop();
          continue;
          
        case '--double-next':
          if (i == arr.length - 1) continue;
          if (arr[i+2] == '--discard-prev') {
            arr_result.push(arr[i + 1]);
            i += 2;
            continue;
          }
          arr_result.push(arr[i + 1]);
          continue;
          
        case '--double-prev':
          if (i == 0) continue;
          arr_result.push(arr[i - 1]);
          continue;
      }

    } else {
      arr_result.push(arr[i]);
    }

  }

  return arr_result;
}

module.exports = {
  transform
};
