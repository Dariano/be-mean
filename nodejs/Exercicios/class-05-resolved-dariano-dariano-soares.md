#NodeJS - Aula 05 - Exercícios
autor: Dariano Soares

##Instale algum gerenciador de versão do Node.js e instale a versão mais atual como padrão, enquanto escrevo é a versão 5.4.0

Comando

`node -v`

Saída

`v5.5.0`

Comando

`npm -v`

Saída

`3.3.12`

##Inicie um projeto novo para essa aula, com o **npm** e instale, salvando no package.json

Comando

`npm init`

package.json
```
	name: (exercicios) 
	version: (1.0.0) 0.0.1
	description: Exercicio da aula 5 de nodejs
	entry point: (index.js) app.js
	test command: 
	git repository: 
	keywords: nodejs
	author: dariano
	license: (ISC) 
```

> 1 dependência local

`npm i -S grunt`
> 1 dependência local de desenvolvimento

`npm i --save-dev jasmine`
> 1 dependência local opcional

`npm i -O optional`

package.json
```json

	{
	  "name": "exercicios",
	  "version": "0.0.1",
	  "description": "Exercicio da aula 5 de nodejs",
	  "main": "app.js",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1"
	  },
	  "keywords": [
	    "nodejs"
	  ],
	  "author": "dariano",
	  "license": "ISC",
	  "dependencies": {
	    "grunt": "^0.4.5"
	  },
	  "devDependencies": {
	    "jasmine": "^2.4.1"
	  },
	  "optionalDependencies": {
	    "mongoose": "^4.3.7",
	    "optional": "^0.1.3"
	  }
	}

```

##Crie e execute um script, via **npm**, que mostre uma mensagem no console com a global, que possui caminho para o diretório atual.

script.js
```js
	'use strict';

	console.log(__dirname);
```
Comando

`node script.js`

Saída

`/home/dariano/Documentos/Projetos/be-mean/nodejs/aula-5-1/exercicios`

##Cite 5 globais do Node.js e pelo menos 1 exemplo de cada.

##Explique como funciona e de um exemplo de **process**.
