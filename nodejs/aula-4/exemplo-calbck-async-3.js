function sum(num1, num2, callback) {
	setTimeout(() => {
		if (typeof num1 === 'number' && typeof num2 === 'number') {
			var result = num1 + num2;

			callback(null, result);
		} else {
			var error = new Error('Passe o número valido');

			callback(error, null);
		}
	}, 3000);
};

function minus(num1, num2, callback) {
	setTimeout(() => {
		if (typeof num1 === 'number' && typeof num2 === 'number') {
			var result = num1 - num2;

			callback(null, result);
		} else {
			var error = new Error('Passe o número valido');

			callback(error, null);
		}
	}, 1000);
};

function media(num1, num2, callback) {
	setTimeout(() => {
		if (typeof num1 === 'number' && typeof num2 === 'number') {
			var result = (num1 + num2) / 2;

			callback(null, result);
		} else {
			var error = new Error('Passe o número valido');

			callback(error, null);
		}
	}, 1000);
};


//funções aninhadas... Isso pode se tornar um inferno!!!!
sum(50, 50, (err, result) => {
	if (err) {
		console.log('error', err);
	} else {
		console.log('soma', result);
	}

	minus(50, 20, (err, result) => {
		if (err) {
			console.log('error', err);
		} else {
			console.log('subtração', result);
		}
	});

});

minus(50, 20, (err, result) => {
	if (err) {
		console.log('error', err);
	} else {
		console.log('subtração', result);
	}
});

media(30, 20, (err, result) => {
	if (err) {
		console.log('error', err);
	} else {
		console.log('media', result);
	}
});