var zlib = require('zlib');
var data = "Este é somente um dado para compressão";

zlib.deflate(data, (error, compressed) => {
	if (error) return console.log('Erro', error);

	zlib.unzip(compressed, (error, decompressed) => {
		if (error) return console.log('Erro', error);

		console.log('Texto', decompressed.toString());
	})
});