const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if(n < 10) { 
    return n;
  }
  let array = n.toString();
   let arr2 = array.split('')
  .map(item => +item);
  let res = arr2.reduce((sum, cur) => sum + cur, 0);
  if(res >= 10) {
    return getSumOfDigits(res)
  } else {
     return res
  }
}

module.exports = {
  getSumOfDigits
};
