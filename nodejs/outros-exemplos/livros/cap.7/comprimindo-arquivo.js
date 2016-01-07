var fs = require('fs');
var zlib = require('zlib');
var gzip = zlib.createGzip();
var input = fs.createReadStream('input.txt');
var output = fs.createWriteStream('input.txt.gz', { flags: 'w'});

input.pipe(gzip).pipe(output);