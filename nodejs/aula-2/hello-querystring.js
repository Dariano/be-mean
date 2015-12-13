'use strict';

let http = require('http'),
	url = require('url');

let server = http.createServer(function(req, res) {

	let result = url.parse(req.url, true);

	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("<html> <body>");
	res.write("<h1>Query string </h1>");
	res.write("<ul>");

	for(var key in result.query){
		res.write("<li>" + key + ": " + result.query[key] + "</li>");
	}

	res.write("</ul>");
	res.write("</body></html>");
	res.end();

	console.log('passei por aqui');
});

server.listen(3000, function() {
	console.log('Servidor rodando na porta 3000.');
});