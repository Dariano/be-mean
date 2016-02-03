'use strict';

function Calc() {
	return {
		sum,
		sub,
		div,
		mult,
		sqrt
	};
};

const div = (a, b) => {
	if(!a || !b) throw new Error("Não pode dividir por zero."); 

	return a / b
};

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const sqrt = (a) => Math.sqrt(a);

module.exports = Calc();