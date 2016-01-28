'use strict';

const Pokemon = require('../mongoose-middleware/models/exercicio-1');

Pokemon.findOne({
	title: 'Nodejs aula 8 parte 5 - 3'
}, (err, doc) => {
	doc.remove((err) => {
		if (err)
			console.log(err || 'removed');

	});
});