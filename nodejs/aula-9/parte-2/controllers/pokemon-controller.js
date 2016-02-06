'use strict';

const Model = require('./pokemon-schema.js');

const CRUD = {
	create: (data, callback) => {
		const dariomon = new Model(data);
		dariomon.save(callback);
	},
	retreive: (query,callback) => {
		Model.find(query, callback);
	},
	update: (query, mod, options, callback) => {
		options = options || {};
		Model.update(query, mod, options, callback);
	},
	delete: (query, callback) => {
		Model.remove(query, callback)
	}
};

module.exports = CRUD;