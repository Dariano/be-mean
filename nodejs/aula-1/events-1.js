/*
   Usando Events
*/

var events = require('events');
var emitter = new events.EventEmitter();

function doATask (status) {
	if(status === 'success'){
		emitter.emit('taskSucess');
	}else{
		emitter.emit('taskFail');
	}

	emitter.emit('taskComplete', 'complete', status);
}

emitter.on('newListenner', function () {
	console.log('um novo Listenner foi adicionado.');
});

emitter.on('taskSuccess',  function () {
	console.log('task sucesso');
});

emitter.on('taskFail', function () {
	console.log('task falhou');
});

emitter.on('taskComplete', function (type, status) {
	console.log('a task é ' + type + ' com o status ' + status);
});

setTimeout(doATask, 201, 'success');
setTimeout(doATask, 403, 'fail');
