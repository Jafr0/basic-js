const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let str = n.toString().split('');
	let res = [];

	for (let i = 0; i < str.length; i++) {
		let str2 = str.slice();
		str2.splice(i, 1)
		res.push(str2.join(''));
		res.sort().reverse()
	}
	return res[0] / 1;
}

module.exports = {
	deleteDigit
};
