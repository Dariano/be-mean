'use strict';

const Calc = require('./ex_01_mocha');
const expect = require('chai').expect;

describe('Calc', () => {
	describe('Calcular a soma de dois numeros', () => {
		it('A função deve retorna a soma de dois numeros', () => {
			const soma = Calc.sum(5, 5);

			expect(soma).to.be.a('number');
			expect(soma).to.equal(10);			
			expect(Calc).to.have.property('sum');
		});
	});

	describe('Calcular a subtração de dois numeros', () => {
		it('A função deve retorna a subtração de dois numeros', () => {
			const sub = Calc.sub(5, 5);
			
			expect(sub).to.be.a('number');
			expect(sub).to.equal(0);			
			expect(Calc).to.have.property('sub');
		});
	});
});