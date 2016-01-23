'use strict';

const User =require('./user.js');

const user = new User({ name: 'Dariano'});

// user.save();

const invalidUser = new User({ cpf: '111111132'});

invalidUser.save();