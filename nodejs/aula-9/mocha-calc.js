'use strict';

const Calc = require('./ex_01_mocha_calc');
const assert = require('assert');

describe('Calc', () => {
	describe('Calcular a soma de dois numeros', () => {
		it('A função deve retorna a soma de dois numeros', () => {
			const soma = Calc().sum(5, 5);
			assert.deepStrictEqual(10, soma);
			assert.deepEqual(10, soma);
			assert.deepStrictEqual(10, soma);
		});
	});

	describe('Calcular a subtração de dois numeros', () => {
		it('A função deve retorna a subtração de dois numeros', () => {
			const sub = Calc().sub(10, 5);
			assert.equal(5, sub);
			assert.deepEqual(5, sub);
			assert.deepStrictEqual(5, sub);
		});
	});
});