const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
	name: String,
}

const pokemonSchema = new Schema(_schema);
const DarioModel = mongoose.model('pokemons', pokemonSchema);

DarioModel.findById("564b1dad25337263280d0479",(err, data) => {
	if (err) return console.log("Erro", err);

	return console.log('Buscou', data);
});

module.exports = pokemonSchema;