#NodeJS - Aula 10 - Exercícios
autor: Dariano Soares

##1. Criar um módulo de redirecionamento para quando não encontrar a rota, redirecionar para url/404.
```js
	'use strict';

	const express = require('express');
	const app = express();

	app.get('/',(req, res) => {
		res.redirect('404')
	});

	app.get('/404', (req, res) => {
		res.send('url not found.')
	});


	app.listen(3000, () => {
		console.log('Servidor rodando!');
	});
```

##2. Criar um módulo onde seja passado o retorno, podendo ser String ou Buffer, caso seja String definir cabeçalho correto mesmo usando res.send.
```js
	'use strict';

	const express = require('express');
	const app = express();

	app.get('/',(req, res) => {
		res.set({ 'Content-Type': 'application/json'});
		res.json({ mensagem: 'Olá express!'});
	});


	app.listen(3000, () => {
		console.log('Servidor rodando!');
	});
```