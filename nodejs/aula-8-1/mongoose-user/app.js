'use strict';

const http = require('http');
const url = require('url');
const Controller = require('./controller');

var server = http.createServer(function(req, res) {
	const url_parts = url.parse(req.url);

	switch (url_parts.pathname) {
		case '/api/users/create':
			Controller.create(req, res);
			break;
		case '/api/users/update':
			Controller.update(req, res);
			break;
		case '/api/users/retreive':
			Controller.find(req, res);
			break;
		case '/api/users/get':
			Controller.findOne(req, res);
			break;
		case '/api/users/delete':
			Controller.remove(req, res);
			break;
		defaul
			res.end('ROTA NÃO ENCONTRADA');
			break;
	}
});

server.listen(3000, () => {
	console.log('Servidor rodando.');
});