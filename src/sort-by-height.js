const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

	let arr1 = [];
	let brr = [];

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] === -1) {
			arr1.push(i);
		}
		else if (arr[i] !== -1) {
			brr.push(arr[i]);

			brr.sort((a, b) => a - b);
		}
	}

	for (let k = 0; k < arr1.length; k++) {
		brr.splice(arr1[k], 0, -1)
	}
	return brr;
}

module.exports = {
	sortByHeight
};
