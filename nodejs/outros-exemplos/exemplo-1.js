'use strict';

const EventEmitter = require('events').EventEmitter;
const util = require('util');

function User(data) {
	this.data = data;
	this.on('user:save', sendMail);
	this.on('error', sendError);
	EventEmitter.call(this);
}


User.prototype.save = function() {
	if (this.data.name) {
		this.emit('user:save', this.data);
	} else {
		this.emit('error', new TypeError('User need an name'));
	}
};

util.inherits(User, EventEmitter);

function sendMail(user) {
	user.pass = Math.floor(Math.random() * (1000000 - 900000)) + 900000;
	util.log(`\n
      \tOla ${user.name}!
      \tbem vindo seu pass é ${user.pass}
      \tvocê tem 24 horas para muda-lo
      \tou tera que pedir reenvio\n`);
}

function sendError(err) {
	throw err;
}

module.exports = User;