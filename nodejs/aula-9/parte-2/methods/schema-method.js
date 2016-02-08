'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/teste');

var _schema = {
	name: String,
	description: String,
	types: [String],
	attack: Number,
	defense: Number,
	height: Number
};

const PokemonSchema = new Schema(_schema);

PokemonSchema.methods.findSimilarType = function(cb) {
	return this.model('pokemon').find({
		type: this.type
	}, cb);
};

module.exports = mongoose.model('pokemon', PokemonSchema);