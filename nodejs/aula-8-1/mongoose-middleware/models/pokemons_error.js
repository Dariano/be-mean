'use strict';

const mongoose = require('mongoose');
const util = require('util');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const log = require('./log');

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

	schema.pre('save', true, function (next, done) {
		util.log('before save');
		const err = new Error('Erro forçado!');
		next(err);		
	});

	schema.post('save', doc => {
		util.log('%s has been saved', doc.name);
		log('pokemon', `${this.name} ${this._id} saved`);
	});

	return mongoose.model('Pokemon', schema);
}

module.exports = pokemonHandle();