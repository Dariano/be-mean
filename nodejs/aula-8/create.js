'use strict';

const model = require('./posts');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var post = {
	title: 'testing title',
	body: 'Ola blog'
};

model.create(post, createPost);

function createPost(err, post) {
	if(err) throw err;

	console.log(post);
	process.exit(1);
}