#NodeJS - Aula 09 - Exercícios
autor: Dariano Soares

##1. Faça uma lista de todas funções que o modulo assert possui e coloque no md.

> assert(value[, message]), assert.ok(value[, message])
> assert.deepEqual(actual, expected[, message])
> assert.deepStrictEqual(actual, expected[, message])
> assert.doesNotThrow(block[, error][, message])
> assert.equal(actual, expected[, message])
> assert.fail(actual, expected, message, operator)
> assert.ifError(value)
> assert.notDeepEqual(actual, expected[, message])
> assert.notDeepStrictEqual(actual, expected[, message])
> assert.notEqual(actual, expected[, message])
> assert.notStrictEqual(actual, expected[, message])
> assert.strictEqual(actual, expected[, message])
> assert.throws(block[, error][, message])

##2. Modifique todos os testes que estão usando assert.equal para assert.deepStrictEqual(valor, result, 'comentário') faça todos passarem, coloque os testes no md.

```js

```

#3. Na Calculadora do chai crie mais 3 testes, uma para divisão, outro para multiplicação e 1 para raiz quadrada, lembrando que não deve aceitar divisão por zero.

calc.js
```js
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
```
chai-ex-01.spec.js
```js
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
```

#4. Use o expect para testar a exeção da divisão por zero.

```js
	describe('Calcular a divisão de dois numeros', () => {

		it('A função não deve aceitar divisão por zero', () => {
			const div = () => Calc.div(0, 0);

			expect(div).to.throw(/Não pode dividir por zero./);
			expect(div).to.throw(Error, 'Não pode dividir por zero.');
		});
	});
```