/*
	function(err, result)
*/

function soma (num1, num2, callback) {
	if(typeof num1 === 'number' && typeof num2 === 'number'){
		var result = num1 + num2;

		callback(null, result);
	} else{
		var error = new Error('Passe o número valido');

		callback(error, null);
	}
};

soma(5, 5, (err, result) => {
	if(err){
		console.log('error', err);
	}
	else{
		console.log('soma', result);
	}
});

somar('daasda', 'dasdasds', (err, result) => {
	if(err){
		console.log('error', err);
	}
	else{
		console.log('soma', result);
	}
});