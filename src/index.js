'use strict'

// Modules up top
const fs = require('fs');


/*  To Do List
 *
 *   1. Need to copy a file, or find some kind of fd (file descriptor)
 *   2. Retain that information somehow, via as a string, or something else etc
 *   3. Transfer it somehow to make it writable to another file
 */

 // Initializer - initialized variables

// const webpack = {
//   config: {
//     js: "Hello World"
//   }
// }

// let configTemplate = ['/webpack.config.js', '/config.webpack.json'];
// configTemplate.map( filename => {
//   fs.readFile(__dirname + '/config.webpack.json', {encoding:'utf8', flag: 'r'}, (err, data) => {  
//     if (err) {
//       throw err;
//     } else {
//       fs.writeFile('/config.webpack.json', data , 'utf8', (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//       })
//     }
//   })
// })

fs.open(__dirname + '/config.webpack.json', 'r', (err, fd) => {
  if (err) throw err;
  fs.fstat(fd, (err, stat) => {
    if (err) throw err;
    // use stat
    console.log("stat: " + stat);
    // always close the file descriptor!
    fs.close(fd, (err) => {
      if (err) throw err;
    });
  });
});

