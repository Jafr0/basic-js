const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	const arr = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i - 1]) {
			arr[arr.length - 1][0] += 1;
		}
		else {
			arr.push([1, str[i]]);
		}
	}
	let str2 = arr.join().replace(/,/g, "").replace(/1/g, "")
	return str2
}

module.exports = {
	encodeLine
};
