var fs = require('fs');
var zlib = require('zlib');
var gunzip = zlib.createGunzip();
var input = fs.createReadStream('input.txt.gz');
var output = fs.createWriteStream('input.txt');

input.pipe(gunzip).pipe(output);