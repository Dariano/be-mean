'use strict';

const EventEmitter = require('events').EventEmitter;
const util = require('util');

function User(data) {
	this.data = data;
	this.on('user:save', sendMail);
	this.on('error', sendError);

	EventEmitter.call(this);
}

util.inherits(User, EventEmitter);

User.prototype.save = function() {
	if (this.data.name) {
		this.emit('user:save', this.data);
	} else {
		this.emit('error', new TypeError('User need an name'));
	}
};

function sendMail(user) {
	user.pass = Math.floor(Math.random() * (1000000 - 900000) + 900000);
	console.log('Ola, ', user.name);
	console.log('bem vindo seu pass é', user.pass);
}

function sendError(error) {
	throw error;
}

module.exports = User;