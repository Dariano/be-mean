const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mongoose-user-test')

var userSchema = new Schema({
	name: require('./fields/fields-name'),
	password: require('./fields/fields-password'),
	email: require('./fields/fields-email'),
	type: require('./fields/fields-type'),
	created_at: require('./fields/fields-created_at')
});

const _userData = {
	name: 'DARIO SOARES 2',
	password: '1234567',
	email: 'DARIO@GMAIL.COM'
};

const User = mongoose.model('User', userSchema);

User.create(_userData, (err, data) => {
	if(err) return console.log('Erro:', err);

	console.log('Inseriu:', data);
});

// User.findOne(null, (err, data) => {
// 	if (err) throw err;

// 	console.log('Achou:', data.name);

// 	process.exit(1);
// })