'use strict';

const Pokemon = require('../mongoose-middleware/models/pokemons_error');

const novoPoke = new Pokemon({
	name: 'Pompeu',
	description: 'a big pokemon',
	type: 'karate',
	attack: 50,
	defense: 99,
	height: 1.82
});

novoPoke.save(err => {
	if (err) 
		console.log(err);
});