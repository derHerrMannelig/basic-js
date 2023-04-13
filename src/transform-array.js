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
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      let dn = arr[i + 1];
      trans.push(dn);
    } else if (arr[i] === '--double-prev') {
      let dp = arr[i - 1];
      trans.push(dp);
    } else if (arr[i] === '--discard-prev') {
      trans.pop();
    } else if (arr[i] === '--discard-next') {
      i++;
    } else {
      trans.push(arr[i]);
    }
  }
  return trans;
}

module.exports = {
  transform
};
