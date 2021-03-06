const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
	name: String,
}

const pokemonSchema = new Schema(_schema);
const DarioModel = mongoose.model('pokemons', pokemonSchema);

const query = { name: 'Magneton', attack: { $gt: 50}};

const fields = { name: 1};

DarioModel.find(query, fields, (err, data) => {
	if (err) return console.log("Erro", err);

	return console.log('Buscou', data);
});

module.exports = pokemonSchema;