const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test')

var userSchema = new Schema({
	name: String,
	email: String,
	create_at: {
		type: String,
		default: Date.now,
		index: true
	}
});

const User = mongoose.model('Usuario', userSchema);
const _user = {
	name: 'dariele soares',
	email: 'dariele@hotmail.com'
};

userSchema.index({
	name: 1,
	email: -1
});

User.create(_user, (err, data) => {
	if (err) throw err;

	console.log('Inseriu:', data);

	process.exit(1);
});