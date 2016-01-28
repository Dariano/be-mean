'use strict';

const blog = require('../mongoose-middleware/models/exercicio-1');

const novoBlog = new blog({
	name: 'Be Mean 1',
	title: 'Nodejs aula 8 parte 5 - 5'
});

novoBlog.save((err, doc) => {
	if (err)
		console.log(err);

	console.log(doc);
});