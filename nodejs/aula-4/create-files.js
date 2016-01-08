var fs = require('fs');

fs.writeFile('./hello.txt', 'Ola mundo.', (err, result) => {
	if(err) throw err;

	console.log(result);
});

var stream = fs.createWriteStream('./helloStream.txt', { defaultEnconding: 'utf8'});

	
stream.write('Olá para todos.');