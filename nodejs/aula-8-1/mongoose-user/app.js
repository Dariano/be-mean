'use strict';

const Model = require('./model');

const _user = {
	name: 'DARIO SOARES aula 8-5',
	password: '1234567',
	email: 'DARIO@GMAIL.COM'
};

Model.create(_user);

 // const  query = { name: /dario soares/i };
 // Model.retreive(query);
 // Model.get(query);

// const query = { _id: '56aac680ba12d97f13673e68' };
// const mod = { password: '5&nh@F0$t&'}

// Model.update(query, mod);

// const query = { _id: '56a6edee0979e5fc20e1134f' };

// Model.delete(query);