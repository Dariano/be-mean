/*
	Um fluxo de leitura que emite vários eventos DATA seguindo de um evento END.
*/

var Stream = require('stream');
var stream = new Stream();
var duration = 5 * 1000;
var end = Date.now() + duration;
var interval;

stream.readable = true;
interval = setInterval(() => {
	var now = Date.now();

	console.log('Emitido um evento data');
	stream.emit('data', new Buffer('foo'));

	if(now >= end){
		console.log('Emitindo um evento end');
		stream.emit('end');
		clearInterval(interval);
	}
}, 1000);