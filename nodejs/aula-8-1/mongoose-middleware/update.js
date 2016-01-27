'use strict';

const Pokemon = require('../mongoose-middleware/models/pokemons');

const query = Pokemon.where({ attack: 50 });

query.update({ name: 'Pompeu Atualizado'}).exec();