'use strict';

const fs = require('fs');
const logStream = fs.createWriteStream(__dirname + '/model.log', { 'flags': 'a'});

function log(model, value, done) {
	logStream.write(`${model} : ${ value} : ${ new Date()} \n`);
}

module.exports = log;