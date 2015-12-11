var events = require('events');
var carro;

function MeuCarro () {
	this.data = { item: 'Cruze'};
}

MeuCarro.prototype = new events.EventEmitter();

MeuCarro.prototype.obterCarro = function () {
	this.emit('data', this.data);
}

MeuCarro.prototype.atualizaCarro = function () {
	this.emit('result', this.data);
}

MeuCarro.prototype.enviarResultado = function () {
	this.emit('complete', this.data);
}

carro = new MeuCarro();

carro.on('data', function (data) {
	console.log('Este dado obtido é', data.item);
	carro.data['novo'] = 'Ferrari';
	carro.atualizaCarro(data);
});

carro.on('result', function (data) {
	console.log('data', data);
	carro.enviarResultado(data);
})

carro.on('complete', function (data) {
	console.log('Carro atualizado! %s e %s', data.item, data.novo);
});

carro.obterCarro();