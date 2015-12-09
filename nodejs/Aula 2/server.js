'use strict';

const date = (new Date()).toJSON();

const http = require('http'),
	SUCCESS = {
		version: 1.0,
		name: 'Be MEAN',
		returned_at: date
	},
	ERROR = {
		menssage: 'Não encontrado!'
	};

let server = http.createServer(function(req, res) {
	if (req.url === '/api/v1') {
		res.writeHead(200, {
			"Content-Type": "application/json"
		});
		res.write(JSON.stringify(SUCCESS));
	} else {
		res.writeHead(404, {
			"Content-Type": "application/json;charset=utf-8"
		});
		res.write(JSON.stringify(ERROR));
	}

	res.end();
});

server.listen(3000, function() {
	console.log('Servidor rodando na porta 3000.');
});