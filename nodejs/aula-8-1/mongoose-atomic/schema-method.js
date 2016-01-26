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

PokemonSchema.methods.findSimilarType = function(cb) {
	return this.model('Pokemon').find({
		type: this.type
	}, cb);
};

const Pokemon = mongoose.model('Pokemon', PokemonSchema);
const poke = new Pokemon({
	name: 'Charmander',
	types: { '$in' : ['fire']}
});

// poke.findSimilarType((err, data) => {
// 	if (err) throw err;

// 	console.log(data);

// 	data.forEach((pokemon) => console.log('pokemon', pokemon));

// 	process.exit(1);
// });

poke 
	.findSimilarType()
	.where('defense').gt(100)
	.limit(4)
	.exec((err, data) => {
		if(err) throw err;

		data.forEach((pokemon) => console.log('pokemon', pokemon));

		process.exit(1);
	})