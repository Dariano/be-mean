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