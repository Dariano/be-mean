function imprimirNome(nome, callback) {
	if (typeof nome === 'string') {
		callback(null, nome);
	} else {
		var err = new Error('Opa, deu erro');

		callback(err, null);
	}
};

imprimirNome('Dariano', (err, nome) => {
	if(err) {
		console.log('erro', err);
	}else
	{
		console.log('nome', nome);
	}

});