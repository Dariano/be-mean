'use strict';

const Pokemon = require('../mongoose-middleware/models/pokemons');

Pokemon.findOne({
	name: 'Pompeu'
}, (err, doc) => {
	doc.remove((err) => {
		if (err)
			console.log(err || 'removed');

	})
});