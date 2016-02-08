#NodeJS - Aula 09-2 - Exercícios
autor: Dariano Soares

##1. Use o exemplo de teste do getter e setter e crie um teste para o method, use o exemplo (lembre-se de usar callback e testar).

schema-method.js
```js
	'use strict';

	const mongoose = require('mongoose');
	const Schema = mongoose.Schema;

	mongoose.connect('mongodb://localhost/teste');

	var _schema = {
		name: String,
		description: String,
		types: [String],
		attack: Number,
		defense: Number,
		height: Number
	};

	const PokemonSchema = new Schema(_schema);

	PokemonSchema.methods.findSimilarType = function(cb) {
		return this.model('pokemon').find({
			type: this.type
		}, cb);
	};

	module.exports = mongoose.model('pokemon', PokemonSchema);
```

method.spec.js
```js
	'use strict';

	const Pokemon = require('./schema-method');
	const util = require('util');
	const expect = require('chai').expect;

	describe('Schema method', () => {
		before(done => {
			const poke1 = {
				name: 'pokemon 1',
				description: 'criando primeiro pokemon',
				types: ['fogo'],
				attack: 49,
				defense: 51,
				height: 1.5
			};

			const poke2 = {
				name: 'pokemon 2',
				description: 'criando segundo pokemon',
				types: ['fogo'],
				attack: 51,
				defense: 49,
				height: 1.6
			};

			const poke3 = {
				name: 'pokemon 3',
				description: 'criando pokemon',
				types: ['agua'],
				attack: 70,
				defense: 81,
				height: 1.9
			};

			const pokes = [poke1, poke2, poke3];


			Pokemon.create(pokes)
				.then(pokemons => {
					util.log(pokemons);
					done();
				});
		});

		after(done => {
			Pokemon.remove({})
				.then(deleted => {
					util.log(deleted.result);
					done();
				});
		});

		describe('Filtrar pokemon', () => {
			it('do tipo fogo', () => {

				const pokeFilter = new Pokemon({
					name: /pokemon/i,
					types: {
						'$in': ['fogo']
					}
				});

				pokeFilter.findSimilarType((err, pokemons) => {
					util.log(pokemons);
					expect(pokemons).to.have.length(2);

					pokemons.forEach((pokemon) => {
						expect(pokemon.types[0]).to.be.equal('fogo');
					})
				});
			});
		})
	});
```

##2. Use o exemplo de testes do getter e setter, o static, use o exemplo (lembre-se de usar callback e testar).

```js

```

```js

```

##3. No controller ainda falta dois métodos para testar, o update e delete, crie-os e faça os testes no mesmo arquivo que contém os testes, create e retreive.


```js

```

##. Defina TDD em 3 linhas, baseado no que foi dito até o momento.


```js

```