const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed brr based on the control sequences that original
 * brr contains
 * 
 * @param {brr} arr initial brr
 * @returns {brr} transformed brr
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

	try {

		if (!Array.isArray(arr)) {
			throw new SyntaxError('\'arr\' parameter must be an instance of the Array!');
		}
		let brr = [];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] !== '--discard-next' &&
				arr[i] !== '--discard-prev' &&
				arr[i] !== "--double-next" &&
				arr[i] !== "--double-prev") {
				brr.push(arr[i]);
			} else if (arr[i] === '--discard-next' &&
				i !== arr.length - 1) {
				i++;
			} else if (arr[i] === '--discard-prev' &&
				arr[i - 2] !== '--discard-next' &&
				i !== 0) {
				brr.pop();
			} else if (arr[i] === '--double-next' &&
				i !== arr.length - 1) {
				brr.push(arr[i + 1]);
			} else if (arr[i] === '--double-prev' &&
				arr[i - 2] !== '--discard-next' &&
				i !== 0) {
				brr.push(arr[i - 1]);
			}
		}

		return brr;


	}
	catch (e) {
		throw new SyntaxError('\'arr\' parameter must be an instance of the Array!')
	}
};

module.exports = {
	transform
};
