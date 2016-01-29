const mongoose = require('mongoose');
const Schema = require('./schema');

const User = mongoose.model('User', Schema);

const REPOSITORY = {
	create: (user) => {
		User.create(user, (err, data) => {
			if (err) return console.log('Erro:', err);

			console.log('Inseri:', data);
		});
	},
	retreive: (query) => {
		User.find(query, (err, data) => {
			if (err) throw err;

			console.log('Achou:', data);
		});
	},
	get: (query) => {
		User.findOne(query, (err, data) => {
			if (err) throw err;

			console.log('Achei:', data);
		});
	},
	update: (query, mod) => {
		User.update(query, mod, (err, data) => {
			if (err) throw err;

			console.log('Alterei:', data);
		});

	},
	delete: (query) => {
		User.remove(query, (err, data) => {
			if (err) throw err;

			console.log('Removi:', data);
		});
	},
};

module.exports = REPOSITORY;