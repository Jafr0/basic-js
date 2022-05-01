const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	arr: [],
	getLength() {
		return this.arr.length
	},
	addLink(value) {
		if (value !== undefined) {
			this.arr.push(value)
			return this
		} else {
			this.arr.push('( )')
			return this
		}

	},
	removeLink(position) {
		let i = position - 1
		if (i >= 0 && Number.isInteger(i) && i < this.arr.length - 1) {
			this.arr.splice(i, 1)
			return this
		} else {
			this.arr = []
			throw new Error('You can\'t remove incorrect link!')
		}

	},
	reverseChain() {
		this.arr.reverse()
		return this
	},
	finishChain() {
		let res = this.arr.map(e => `( ${e} )`)
		this.arr = []
		return res.join('~~')
	}

};


module.exports = {
	chainMaker
};
