'use strict';

const mongoose = require('mongoose');
const util = require('util');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const log = require('./log');

mongoose.connect('mongodb://localhost/be-mean-mongoose');

function blog() {
	const schema = new Schema({
		id: ObjectId,
		name: {
			type: String,
			trin: true
		},
		title: {
			type: String,
			trin: true
		},
		create_at: {
			type: Date,
			default: Date.now
		}
	});

	schema.post('find', function(docs) {

		docs.forEach(doc => log('blog', `${doc.title} foi encontrado.`));
	});

	return mongoose.model('Blog', schema);
}

module.exports = blog();