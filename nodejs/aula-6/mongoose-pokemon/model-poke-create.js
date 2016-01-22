const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
	name: String,
}

const pokemonSchema = new Schema(_schema);

const DarioModel = mongoose.model('Pokemon', pokemonSchema);


const dario = new DarioModel({ name: 'dario'});

dario.save(function(err, data) {
	if (err) return console.log("Erro", err);

	return console.log('Inseriu', data);
});

// ou

// DarioModel.create({ name: 'dario'}, function (err, data) {
// 	f (err) return console.log("Erro", err);

// 	return console.log('Inseriu', data);
// });

module.exports = pokemonSchema;