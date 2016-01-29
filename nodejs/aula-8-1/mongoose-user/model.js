'use strict';

const mongoose = require('mongoose');
const Schema = require('./schema');
const querystring = require('querystring');
const url = require('url');

const User = mongoose.model('User', Schema);

const REPOSITORY = {
	create: (req, res) => {
		var queryData = '';
		req.on('data', (data) => {
			queryData += data;
		});

		req.on('end', () => {
			const obj = querystring.parse(queryData);

			User.create(obj, (err, data) => {
				if (err) return res.end(JSON.stringify(err.errors));

				res.writeHead(200, {
					'Content-Type': 'application/json'
				});
				return res.end(JSON.stringify(data));
			});
		})
	},
	retreive: (req, res) => {
		const query = {};

		User.find(query, (err, data) => {
			if (err) return res.end(JSON.stringify(err.errors));

			res.writeHead(200, {
				'Content-Type': 'application/json'
			});
			return res.end(JSON.stringify(data));
		});
	},
	get: (req, res) => {
		User.findOne(query, (err, data) => {
			if (err) throw err;

			console.log('Achei:', data);
		});
	},
	update: (req, res) => {
		var queryData = '';
		req.on('data', (data) => {
			queryData += data;
		});

		req.on('end', () => {
			const mod = querystring.parse(queryData);
			const url_parts = url.parse(req.url);
			const query = querystring.parse(url_parts.query);

			User.update(query, mod, (err, data) => {
				if (err) return res.end(JSON.stringify(err.errors));

				res.writeHead(200, {
					'Content-Type': 'application/json'
				});
				return res.end(JSON.stringify(data));
			});
		})
	},
	delete: (req, res) => {
		const url_parts = url.parse(req.url);
		const query = querystring.parse(url_parts.query);

		console.log(query);

		User.remove(query, (err, data) => {
			if (err) return res.end(JSON.stringify(err.errors));

			res.writeHead(200, {
				'Content-Type': 'application/json'
			});
			return res.end(JSON.stringify(data));
		});
	},
};

module.exports = REPOSITORY;