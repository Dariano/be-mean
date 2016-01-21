const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
	attacks: Schema.Types.Mixed
};

const pokemonSchema = new Schema(_schema);

const data = {
	attacks: [{
		name: 'Soco na cara',
		power: 1000,
		order: 1,
		active: true,
		created_at: Date.now()
	}, {
		name: 'Soco no peito',
		power: 1150,
		order: 2,
		active: false,
		created_at: Date.now()
	}]
}

const Model = mongoose.model('pokemons', pokemonSchema);
const poke = new Model(data);
poke.save(function(err, data) {
	if (err) return console.log("Erro", err);

	console.log('Inseriu', data);
});

module.exports = pokemonSchema;