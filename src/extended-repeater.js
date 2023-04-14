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
  if(options.separator === undefined) {
    options.separator = '+';
  }
 if(options.additionSeparator === undefined) {
  options.additionSeparator = '|';
 }
 if(options.addition === undefined) {
   options.addition = '';
 } 
 if(options.additionRepeatTimes === undefined) 
   options.additionRepeatTimes = 1;
 if(options.repeatTimes === undefined) 
   options.repeatTimes = 1;
  
   let result = [];
   let addition = [];
 for(let j = 1; j <= options.additionRepeatTimes; j++) {
       addition.push(`${options.addition}`); 
     }
  let allAddition = addition.join(`${options.additionSeparator}`)
   console.log(allAddition)
   
  console.log(options.repeatTimes)
   for(let i = 1; i <= options.repeatTimes; i++) {
      {
       result.push(`${str}${allAddition}`); 
     }
    
     
   }
  console.log(result)
   return result.join(`${options.separator}`)
 }

module.exports = {
  repeater
};
