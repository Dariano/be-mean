'use strict';

const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const timestemp = require('./plugin-timestemp');

const bloogPost = new Schema({
	id: Schema.ObjectId,
	title: { type: String, required: true},
	body: { type: String, required: true},
});

bloogPost.plugin(timestemp);

module.exports = mongoose.model('Post', bloogPost);