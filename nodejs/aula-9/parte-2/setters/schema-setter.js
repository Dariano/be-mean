'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let toLower = (valor) => valor.toLowerCase();

const UserSchema = new Schema({
	email: { type: String, set: toLower}
});

module.exports = mongoose.model('user', UserSchema);