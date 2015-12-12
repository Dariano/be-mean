var fs = require('fs');

fs.readFile('index.txt', (err, result) => {
	if(err){
		console.log(err);
	}

	console.log(result.toString());
});

