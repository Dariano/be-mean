/*
	Soma números lidos no stdin.
*/

var sum = 0;

process.stdin.on('data', (data) => {
	var number = parseInt(data.toString(), 10);

	if(isFinite(number)){
		sum += number;
	}

	console.log("soma", sum);
});

process.stdin.resume();