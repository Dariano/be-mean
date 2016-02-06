'use strict';

const User = require('./schema-validate-age');
const expect = require('chai').expect;

describe('User Validate', () => {
	it('age only aceept 18 or more years', () => {
		let user = new User();
		user.age = 24;

		expect(user.validateSync()).to.be.undefined;
	});
});

describe('Validate age of users with less year of 18', () => {
	it('age less of 18 not accept', () => {
		var user = new User();
		user.age = 2;
 		
		const validate = user.validateSync();

		expect(validate.message).to.be.eq('user validation failed');
		expect(validate.errors).to.be.exist;
	});
});
