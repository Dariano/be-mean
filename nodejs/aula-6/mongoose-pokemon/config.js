const mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/be-mean-pokemons';
mongoose.connect('mongodb://localhost/be-mean-mongodb');

mongoose.connection.on('connected', () => {
	console.log('Mongoose default connection apen to ');
});

mongoose.connection.on('error', (err) => {
	console.log('Mongoose default connected error', err);
});
mongoose.connection.on('disconnected', () => {
	console.log('Mongoose default connection disconnected');
});
mongoose.connection.on('open', () => {
	console.log('Mongoose default connection is open');
});

process.on('SIGINT', () => {
	mongoose.connection.close(() => {
		console.log('Mongoose default connection disconnected through app termination');

		process.exit(0);
	});
});