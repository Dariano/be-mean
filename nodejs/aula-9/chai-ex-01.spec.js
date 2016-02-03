'use strict';

const Calc = require('./calc.js');
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

	describe('Calcular a divisão de dois numeros', () => {
		it('A função deve retorna a divisão de dois numeros', () => {
			const div = Calc.div(5, 5);
			
			expect(div).to.be.a('number');
			expect(div).to.equal(1);			
			expect(Calc).to.have.property('div');
		});

		it('A função não deve aceitar divisão por zero', () => {
			const div = () => Calc.div(0, 0);

			expect(div).to.throw(/Não pode dividir por zero./);
			expect(div).to.throw(Error, 'Não pode dividir por zero.');
		});
	});

	describe('Calcular a multiplicação de dois numeros', () => {
		it('A função deve retorna a multiplicação de dois numeros', () => {
			const mult = Calc.mult(5, 5);
			
			expect(mult).to.be.a('number');
			expect(mult).to.equal(25);			
			expect(Calc).to.have.property('mult');
		});
	});

	describe('Calcular a raiz quadrada do valor passado', () => {
		it('A função deve retorna a raiz quadrada do valor passado', () => {
			const sqrt = Calc.sqrt(9);
			
			expect(sqrt).to.be.a('number');
			expect(sqrt).to.equal(3);			
			expect(Calc).to.have.property('sqrt');
		});
	});
});