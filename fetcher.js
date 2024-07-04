// Imports
const needle = require('needle');
const fs = require("fs");

// Assign terminal arguments to variables
const url = process.argv[2];
const filePath = process.argv[3];

// use needle to access url resource

needle.get(url, (error, response, body) => {

  // write resource to local path
  fs.writeFile(filePath, body, error => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    }
  });

});

// refer to httpexample.js for starter and test code for needle
//refer to node.js documentation for fs

