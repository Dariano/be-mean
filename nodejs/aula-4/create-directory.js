var fs = require('fs');

fs.mkdir('./novoDiretorio', (err, result) => {
	if (err) { throw err };

	console.log(result);
});