'use strict';

const Model = require('./model');

const CRUD = {
	create: (req, res) => {
		Model.create(req, res);
	},
	retreive: (req, res) => {
		Model.retreive(req, res);
	},
	update: (req, res) => {
		Model.update(req, res);
	},
	delete: (req, res) => {
		Model.delete(req, res);
	},
};

module.exports = CRUD;