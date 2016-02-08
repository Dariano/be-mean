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
				//util.log(pokemons);
				done();
			});
	});

	after(done => {
		Pokemon.remove({})
			.then(deleted => {
				//util.log(deleted.result);
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

				expect(pokemons).to.have.length(2);

				pokemons.forEach((pokemon) => {
					util.log(pokemon.name);
					const temFogo = pokemon.types.some((type) => type == 'fogo');
					expect(temFogo).to.be.true('fogo');
					expect(pokemon.name).to.be.contain('pokemon');
				})
			});
		});
	});
});