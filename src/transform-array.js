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
  trans = [];
  if (Array.isArray(arr) === false) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--double-next') {
        if (arr[i + 1] !== undefined) {
          let dn = arr[i + 1];
          trans.push(dn);
        } else {
          continue;
        }
      } else if (arr[i] === '--double-prev') {
        if (arr[i - 1] !== undefined) {
          let dp = arr[i - 1];
          trans.push(dp);
        } else {
          continue;
        }
      } else if (arr[i] === '--discard-prev') {
        if (arr[i - 1] !== undefined) {
          trans.pop();
        } else {
          continue;
        }
      } else if (arr[i] === '--discard-next') {
        if (arr[i + 1] !== undefined) {
          i++;
        } else {
          continue;
        }
      } else {
        trans.push(arr[i]);
      }
    }
    return trans;
  }
}

module.exports = {
  transform
};
