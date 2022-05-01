const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let brr = s2.split('');
	let n;
	let count = 0;

	for (let i = 0; i < s1.length; i++) {
		n = brr.indexOf(s1[i]);
		if (n != -1) {
			count++;
			brr.splice(n, 1);
		}
	}
	return count;
}

module.exports = {
	getCommonCharacterCount
};
