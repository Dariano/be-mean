const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
	name: String,
	description: String,
	type: String,
	attack: Number,
	defense: Number,
	height: Number
};

const pokemonSchema = new Schema(_schema);
const pokeModel = mongoose.model('pokemons', pokemonSchema);

const query = { name: /magneton/i};
const mod = { attack: 100};

pokeModel.update(query, mod, (err, data) => {
	if (err) return console.log("Erro", err);

	return console.log('Alterou', data);
});

module.exports = pokemonSchema;