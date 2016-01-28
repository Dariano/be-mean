#NodeJS - Aula 08 - Exercícios
autor: Dariano Soares

##1. Criar um middleware pre com um erro e propaga o erro para quem o chamar e sava o result.

Arquivo blog.js
```js
	'use strict';

	const mongoose = require('mongoose');
	const util = require('util');
	const Schema = mongoose.Schema;
	const ObjectId = Schema.ObjectId;
	const log = require('./log');

	mongoose.connect('mongodb://localhost/be-meam-mongoose');

	function blog() {
		const schema = new Schema({
			id: ObjectId,
			name: { type: String, trin : true },		
			title: { type: String, trin : true },		
			create_at: { type: Date, default: Date.now }
		});

		schema.pre('save', true, function (next, done) {
			util.log('Antes de salvar');
			const err = new Error('Erro forçado!!!!!!');
			next(err);		
		});

		return mongoose.model('Blog', schema);
	}

	module.exports = blog();
```

Arquivo save.js
```js
	'use strict';

	const Blog = require('../mongoose-middleware/models/exercicio-1.js');

	const novoBlog = new Blog({
		name: 'Be Mean',
		title: 'Nodejs aula 8 parte 5'
	});

	novoBlog.save(err => {
		if (err) 
			console.log(err);
	});
```
node save
27 Jan 23:52:58 - Antes de salvar
[Error: Erro forçado!!!!!!]

##2. Adicione o modulo de log, aos dois schemas do blog, e faça com que gere um arquivo blog-models.md com pelomenos 6 operações no blog save() ou delete().
Arquivo middleware.js
```js
	'use strict';

	const mongoose = require('mongoose');
	const util = require('util');
	const Schema = mongoose.Schema;
	const ObjectId = Schema.ObjectId;
	const log = require('./log');

	mongoose.connect('mongodb://localhost/be-mean-mongoose');

	function blog() {
		const schema = new Schema({
			id: ObjectId,
			name: {
				type: String,
				trin: true
			},
			title: {
				type: String,
				trin: true
			},
			create_at: {
				type: Date,
				default: Date.now
			}
		});

		schema.post('save', function(doc) {
			log('blog foi salvo com sucesso.', doc.title);
		});

		schema.post('remove', function(doc) {
			log('blog', `${doc.title} ${doc._id} foi removido com sucesso.`);
		});

		return mongoose.model('Blog', schema);
	}

	module.exports = blog();
```
Arquivo blog-models.md
```md
	blog foi salvo com sucesso. : Nodejs aula 8 parte 5 : Thu Jan 28 2016 00:21:34 GMT-0200 (BRST) 
	blog foi salvo com sucesso. : Nodejs aula 8 parte 5 - 2 : Thu Jan 28 2016 00:21:59 GMT-0200 (BRST) 
	blog foi salvo com sucesso. : Nodejs aula 8 parte 5 - 3 : Thu Jan 28 2016 00:22:16 GMT-0200 (BRST) 
	blog : Nodejs aula 8 parte 5 56a97af3e59a93de12b66729 foi removido com sucesso. : Thu Jan 28 2016 00:24:31 GMT-0200 (BRST) 
	blog : Nodejs aula 8 parte 5 - 2 56a97b478413c93013ddb234 foi removido com sucesso. : Thu Jan 28 2016 00:25:10 GMT-0200 (BRST) 
	blog : Nodejs aula 8 parte 5 - 3 56a97b58c142fa5213d5b5be foi removido com sucesso. : Thu Jan 28 2016 00:25:23 GMT-0200 (BRST) 
```

##3. Crie um middleware usando o exemplo no blog para gerar log com nome do titulo dos post que foi buscado. Use o **find**.


Middleware **find**
```js
	'use strict';

	const mongoose = require('mongoose');
	const util = require('util');
	const Schema = mongoose.Schema;
	const ObjectId = Schema.ObjectId;
	const log = require('./log');

	mongoose.connect('mongodb://localhost/be-mean-mongoose');

	function blog() {
		const schema = new Schema({
			id: ObjectId,
			name: {
				type: String,
				trin: true
			},
			title: {
				type: String,
				trin: true
			},
			create_at: {
				type: Date,
				default: Date.now
			}
		});

		schema.post('find', function(doc) {
			log('blog', `${doc.title} ${doc._id} foi encontrado.`);
		});

		return mongoose.model('Blog', schema);
	}

	module.exports = blog();
```
