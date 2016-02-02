'use strict';

const assert = require('assert');

describe('Array', () => {

	describe('#indexOf', () => {
		it('deve retorna -1 quando o valor não está presente', () => {
			assert.equal(-1,[1,2,3].indexOf(5));
			assert.equal(-1,[1,2,3].indexOf(0));
		});
	});

	describe('#indexOf 1', () => {
		it('deve retorna 1 quando o valor está presente', () => {
			assert.equal(0,[1,2,3].indexOf(1));
			assert.equal(-1,[1,2,3].indexOf(5));
		});
	});
});