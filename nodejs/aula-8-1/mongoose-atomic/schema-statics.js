const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/be-mean-mongodb')

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

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

Pokemon.search('caterpie', (err, data) => {
	if (err) throw err;

	console.log(data);

	data.forEach((pokemon) => console.log('pokemon', pokemon));

	process.exit(1);
});
