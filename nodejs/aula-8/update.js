'use strict';

const model = require('./posts');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const _id = process.argv[2];

const id = { _id: _id };
const body = {body: 'Blog atualizado'};

model.update(id, body, response);

function response(err, post) {
	if(err) throw err;

	console.log(post);
	process.exit(1);
}