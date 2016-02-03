'use strict';

function Calc() {
	return {
		sum,
		sub
	};
};

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

module.exports = Calc();