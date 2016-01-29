'use strict';

const mongoose = require('mongoose');
const Schema = require('./schema');
const querystring = require('querystring');
const url = require('url');
const User = mongoose.model('User', Schema);

const callBack = (err, data, res) => {
	if (err) return res.end(JSON.stringify(err.errors));

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	return res.end(JSON.stringify(data));
};

const getQuery = (_url) => {
	const url_parts = url.parse(_url);
	return querystring.parse(url_parts.query);
};

const create = (req, res) => {
	var queryData = '';
	req.on('data', (data) => {
		queryData += data;
	});

	req.on('end', () => {
		const obj = querystring.parse(queryData);

		User.create(obj, (err, data) => callBack(err, data, res));
	})
};
const find = (req, res) => {
	const query = getQuery(req.url);

	User.find(query, (err, data) => callBack(err, data, res));
};
const findOne = (req, res) => {
	const query = getQuery(req.url);

	User.findOne(query, (err, data) => callBack(err, data, res));
};
const update = (req, res) => {
	var queryData = '';
	req.on('data', (data) => {
		queryData += data;
	});

	req.on('end', () => {
		const mod = querystring.parse(queryData);
		const query = getQuery(req.url);

		User.update(query, mod, (err, data) => callBack(err, data, res));
	})
};
const remove = (req, res) => {
	const query = getQuery(req.url);

	User.remove(query, (err, data) => callBack(err, data, res));
};

const REPOSITORY = {
	create,
	find,
	findOne,
	update,	
	remove
};

module.exports = REPOSITORY;