/*
	Encanando dados para o fluxo de escrita
*/

var Stream = require('stream');
var stream = new Stream();
var bytes = 0;

stream.writable = true;

stream.write = (buffer) => {
	bytes += buffer.length;
};

stream.end = (buffer) => {
	if(buffer){
		stream.write(buffer);		
	}

	stream.writable = false;
	stream.emit('finish');

	console.log(bytes + ' bytes escritos');
};

stream.pipe(stream);
stream.emit('data', new Buffer('Panela velha é que faz comida boa.'));
stream.emit('end');
