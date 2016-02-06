'use strict';

const User = require('./schema-setter');
const expect = require('chai').expect;

describe('testing of schema User', () => {
	describe('testing of setter to uppercase', () => {
		it('email only lower case save in mongo', () => {
			var user = new User();
			user.email = 'DARIANO@gmail.com';

			expect(user.email).to.be.equal('dariano@gmail.com');
		});
	});
});