'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/teste');

let apenasMaiusculas = texto => texto.toUpperCase();

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
	return this.model('Pokemon').find({
		type: this.type
	}, cb);
};

module.exports = PokemonSchema; //mongoose.model('pokemon', PokemonSchema);