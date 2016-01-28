'use strict';

const fs = require('fs');
const logStream = fs.createWriteStream(__dirname + '/blog-models.md', { 'flags': 'a'});

function log(model, value, done) {
	logStream.write(`${model} : ${ value} : ${ new Date()} \n`);
}

module.exports = log;