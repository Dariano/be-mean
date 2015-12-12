#NodeJS - Aula 01 - Exercícios
autor: Dariano Soares

##1. Explique como um `processo síncrono e assíncrono` roda no Node.js, dê um exemplo para casa.

Um procedimento **Sícrono** é aquele em que uma operação ocorre após o término de outra.
```js
console.log('1');

correr();

console.log('3');

function carrer(){
	console.log('2');
}
```

Um procedimento **assíncrono** não bloqueia a execução do código. Se um procedimento leva certo tempo para ser encerrado, a linha após esse procedimento será executada antes dele terminar.
```js
console.log('1');

correr();

console.log('3');

function correr(){
	setTimeout(function(){
		console.log('2');
	}, 10);
}
```

Referência -> Livro Construindo Aplicações com NodeJS, William Bruno Moraes.

##2. Como o v8 executa JavaScript? Demostre 1 exemplo com código ou imagem.
```

```

##3. Qual a diferença entre um sitema `single` para um `multi-thread`?
```

```
##4. Como a `Thread Pool` tem um tamanho `padrão de 4`, o que acontece se você `enviar 5 requisições` ao banco?
```

```
##5. Como você `venderia o peixe do Node.js` na sua empresa para tentar convencer seu chefe da sua adoção?
```

```
##6. Qual a versão do seu `node`?
```

```
##7. Qual a versão do seu `npm`?