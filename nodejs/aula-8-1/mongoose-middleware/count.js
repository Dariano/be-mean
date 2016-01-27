'use strict';

const Pokemon = require('../mongoose-middleware/models/pokemons');

const query = Pokemon.where({ name: /pompeu/i});

query.count((err, doc) => {
	if(err) throw err;

	console.log('existem', doc);
});