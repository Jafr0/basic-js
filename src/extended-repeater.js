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

	let string = String(str);
	let add = String(options.addition);

	let addsep = options.additionSeparator || '|';
	let sep = options.separator || '+';

	let result = '',
		plus = '',
		count = 0;

	if (add.length != 0 && options.additionRepeatTimes != 0) {
		while (count < options.additionRepeatTimes) {
			plus += add + `${addsep}`;
			count++;
		}
		plus = plus.slice(0, plus.length - `${addsep}`.length);
		count = 0;
	}


	if (options.additionRepeatTimes === undefined && options.repeatTimes === undefined) {
		plus += add;
		result += string + plus;
		return result
	}



	while (count < options.repeatTimes) {
		result += string + plus + `${sep}`;
		count++;
	}

	result = result.slice(0, result.length - `${sep}`.length);

	return result;
}

module.exports = {
	repeater
};
