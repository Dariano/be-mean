'use strict';

const mongoose = require('mongoose');
const util = require('util');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost/be-meam-mongodb');

function pokemonHandle() {
	const schema = new Schema({
		id: ObjectId,
		name: { type: String, trin : true },
		type: { type: String, trin : true },
		attack: { type: Number },
		defence: { type: Number },
		height: { type: Number },
		description: { type: String, trin : true },
		updateAt: { type: Date, default: Date.now }
	});

	schema.pre('count', function (next) {
		util.log('pre count');
		next();
	});

	schema.post('count', function (doc) {
		util.log('post count');
		util.log(doc);
		
	});

	schema.pre('save', function (next) {
		util.log('before save');
		next();		
	});

	schema.post('save', doc => {
		util.log('%s has been saved', doc.name);
	});

	schema.pre('validate', function (next) {
		util.log('before validate');
		next();		
	});

	schema.post('validate', doc => {
		util.log('%s has been valid', doc.name);
	});

	schema.post('remove', doc => {
		util.log('%s has been removed', doc.name);
	});


	return mongoose.model('Pokemon', schema);
}

module.exports = pokemonHandle();