'use strict';

var http = require('http')
, fs     = require('fs')
, index  = fs.readFileSync('index.html');

let server = http.createServer(function (req, res) {
	res.writeHead(200, { "Content-Type": "text/html"});
	res.end(index);
});

server.listen(3000, function(){
	console.log('Servidor rodando na porta 3000.');
});