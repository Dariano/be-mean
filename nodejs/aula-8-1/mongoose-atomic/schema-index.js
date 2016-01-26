const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	email: String,
	create_at: { type: String, default: Date.now, index: true }
});

userSchema.index({ name:1, type: -1});