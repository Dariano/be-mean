'use strict';

const assert = require('assert');
const add = require('./add');

assert.deepStrictEqual(3, add(1, 2), "Deve retornar o valor 3");
assert.deepStrictEqual(5, add(1, 2, 2), "Deve retornar o valor 5");
assert.deepStrictEqual(10, add(1, 2, 2, 4, 1), "Deve retornar o valor 10");
assert.deepStrictEqual(15, add(1, 5, 4, 4, 1), "Deve retornar o valor 15");