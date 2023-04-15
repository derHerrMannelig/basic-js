const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  } else if (Array.isArray(sampleActivity) === true) {
    return false;
  } else if (sampleActivity == undefined) {
    return false;
  } else if (sampleActivity === Infinity) {
    return false;
  } else if (sampleActivity !== sampleActivity.replace(/[abcdefghijklmnopqrstuvwxyz \n\t\r]/gi, 'THISISNOTVALID')) {
    return false;
  } else if (Number(sampleActivity) <= 0) {
    return false;
  } else {
    const A = Number(sampleActivity);
    const K = 0.693 / HALF_LIFE_PERIOD;
    const T = Math.log(MODERN_ACTIVITY / A) / K;
    if (T < 0) {
      return false;
    } else {
      return Math.ceil(T);
    }
  }

}

module.exports = {
  dateSample
};
