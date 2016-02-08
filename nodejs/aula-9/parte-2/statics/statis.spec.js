'use strict';

const Pokemon = require('./schema-statics');
const util = require('util');
const expect = require('chai').expect;

describe('Schema statis', () => {
	before(done => {
		const poke1 = {
			name: 'aguia-poke',
			description: 'criando primeiro pokemon',
			types: ['fogo'],
			attack: 49,
			defense: 51,
			height: 1.5
		};

		const poke2 = {
			name: 'cavalo-poke',
			description: 'criando segundo pokemon',
			types: ['fogo'],
			attack: 51,
			defense: 49,
			height: 1.6
		};

		const poke3 = {
			name: 'urso-poke',
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

	describe('Filtar usando statis', () => {
		it('e retorna todos pokemons que contém poke no nome', () => {

			Pokemon.search('poke', (err, pokemons) => {
				if (err) throw err;

				expect(pokemons).to.have.length(3);

				pokemon.forEach((pokemon) => {
					expect(pokemon.name).to.be.contain('poke');
				});

				process.exit(1);
			});
		});

		it('e retorna todos pokemons que contém cavalo no nome', () => {

			Pokemon.search('cavalo', (err, pokemons) => {
				if (err) throw err;

				expect(pokemons).to.have.length(1);

				pokemon.forEach((pokemon) => {
					expect(pokemon.name).to.be.contain('cavalo');
				});

				process.exit(1);
			});
		});
	});
});