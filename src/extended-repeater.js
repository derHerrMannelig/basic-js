const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = typeof options.repeatTimes === 'number' ? options.repeatTimes : 1;
  let separator = typeof options.separator === 'string' ? options.separator : '+';
  let addition = options.addition !== undefined ? String(options.addition) : '';
  let additionRepeatTimes = typeof options.additionRepeatTimes === 'number' ? options.additionRepeatTimes : 1;
  let additionSeparator = typeof options.additionSeparator === 'string' ? options.additionSeparator : '|';

  let add = `${addition}${additionSeparator}`.repeat(additionRepeatTimes - 1) + `${addition}`;
  let astr = `${String(str)}${add}`;
  let format = `${astr}${separator}`.repeat(repeatTimes - 1) + `${astr}`;

  return format;
}

module.exports = {
  repeater
};
