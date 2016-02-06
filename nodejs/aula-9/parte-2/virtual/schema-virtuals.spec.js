'use strict';

const Person = require('./schema-virtuals');
const util = require('util');
const expect = require('chai').expect;

describe('Testing Virtual', () => {
	const dariano = {
		first: 'dariano',
		last: 'soares'
	};

	before(done => {
		Person.create({
				name: dariano
			})
			.then(person => {
				util.log(person);
				done();
			});
	});

	after(done => {
		Person.remove({
				name: dariano
			})
			.then(removed => {
				util.log(removed.result);
				done();
			});
	});

	describe('virtual give a full name concated', () => {
		it('expect full name have a first and last', done => {
			Person.findOne({ name: dariano} , (err, person) => {
				expect(err).to.not.exist;
				expect(person.name.full).to.be.eq(dariano.first + ' ' + dariano.last);
				done();
			});
		});
	});
});