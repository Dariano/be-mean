#NodeJS - Aula 08-5 - Exercícios
autor: Dariano Soares

##1. Insira 5 pokemons novos, na coleção **pokemons**, escolha 3 e os adicione em um array e uma nova coleção chamada **meus-pekemons**, utilizando o **ObjectId**. Adiciona o **require** em campos que ache obrigatório no Schema do **Pokemon**.




##2. Crie um Schema de exemplo com validação para os campos (utilizar Arquitetura Atômica, ou seja campo sendo um Schema separado):
	- email
	- cpf
	- cnpj
	- url
	- ip


##3. Dê 3 exemplos **diferentes**, para cada, utilizando as funções:
	- findAndModify
	- findOneUpdate
	- findOneRemove

##4. Crie **1** Schema com todo CRUD funcional e métodos especiais, que agrupe:
	- virtuals
	- getters & setters
	- method & static
	- embedded document
	- plugins
	- middlewares


##5. Crie 1 Schema para password com criptografia e arquitetura atômica.
	- use SHA256 com SALT como criptografia
	- use middleware com pre save
	- use methods