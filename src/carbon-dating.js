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
	let a = sampleActivity / 1
	if (typeof sampleActivity === 'string' && typeof a === 'number' && a != NaN && a != undefined && a != 0) {




		let t = Math.log(15 / a.toString()) / (0.693 / 5730)
		if (t >= 0) return Math.ceil(t)
		else return false



	} else return false
}



module.exports = {
	dateSample
};
