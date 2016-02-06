'use strict';

const expect = require('chai').expect;
const ctrl = require('./pokemon-controller');

describe('Controller of Pokemons', () => {
	const pokemon = {
		name: 'dariano',
		description: 'Pokemonzudo S2',
		type: 'Fire',
		attack: 90,
		defense: 85,
		height: 1.85
	};

	after(done => {
		let Model = require('./pokemon-schema');
		Model.remove({});
		done();
	})

	describe('create a new polkemon', () => {
		it('expect a new pokemon has created', done => {
			ctrl.create(pokemon, (err, data) => {
				expect(err).to.not.exist;
				expect(data._id).to.exist;
				expect(data.height).to.be.eq(1.85);
				expect(data.defense).to.be.eq(85);
				expect(data.attack).to.be.eq(90);
				expect(data.type).to.be.eq('Fire');
				expect(data.description).to.be.eq('Pokemonzudo S2');
				expect(data.name).to.be.eq('dariano');

				done();
			});
		});
	});

	describe('Find all Pokemons', () => {
		it('expect get all pokemons in db', done => {
			ctrl.retreive({}, (err, data) => {
				expect(err).to.not.exist;
				expect(data).to.be.an('Array');
				expect(data).to.have.length.above(1);

				done();
			});
		});
	});
})