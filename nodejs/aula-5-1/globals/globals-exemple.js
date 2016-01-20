'use strict';

console.log(__dirname);
console.log(__filename);

var buff = new Buffer('Olá pessoal.');

console.log(buff.toString());

const time = setInterval(() => console.log('hello async'), 1000);

setTimeout(() => clearInterval(time), 5000);