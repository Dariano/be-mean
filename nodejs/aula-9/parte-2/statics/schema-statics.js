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

PokemonSchema.statics.search = function(name, cb) {
	return this.where('name', new RegExp(name, 'i')).exec(cb);
};

module.exports = mongoose.model('Pokemon', PokemonSchema);