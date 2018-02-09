'use strict';

var fs = require('fs');
var path = require('path');

var webpackConfig = {
	"webpack_simplest": {
		"section_modules": {
			"unit_1": "const path = require('path');"
		},
		"section_customization": {},
		"section_configuration": {
			"unit_start": "module.exports = {",
			"unit_1_entry": "entry: './src/index.js',",
			"unit_2_entry": "output: {filename: 'bundle.js',path: path.resolve(__dirname, 'dist')}",
			"unit_end": "};"
		}
	}
};

var array = [];
var counter = 0;

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(__dirname + '/config.webpack.json')
});

lineReader.on('line', function (line) {
	if(counter < 3) {
		array.push(line);
		console.log(array);
	}
  counter ++;
});

// var readableStream = fs.createReadStream(__dirname + '/config.webpack.json', 'utf8');
// var chunk = "";
// readStream.on('data', function(chunk) {  
	
// }).on('end', function() {
// 	console.log(readStream)
// });

// readableStream.on('data', (chunk) => {
// 	if(chunk.length > 200){
// 		console.log(`Received ${chunk.length} bytes of data.`);
// 		readableStream.resume()
// 	} 
// });
// readableStream.on('end', () => {
//   console.log('There will be no more data.');
// });

// fs.readFile(__dirname + '/config.webpack.json', "utf-8", (err, data) => {
// 	if (err) throw err;
// 	console.log(data["config"]);
//   });



// // recursively read the JSON
// exports.readJSON = function (options) {

// 	fs.open('./config.webpack.json', 'r', (err, fd) => {
// 		if (err) throw err;
// 		fs.fstat(fd, (err, stat) => {
// 		  if (err) console.log(err);
// 		  else {
// 			  console.log(fd)
// 		  }
	  
// 		  // always close the file descriptor!
// 		  fs.close(fd, (err) => {
// 			if (err) console.log(err);
// 		  });
// 		});
// 	  });

// 	return true
// }
