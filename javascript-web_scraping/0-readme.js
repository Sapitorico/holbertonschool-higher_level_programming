#!/usr/bin/node
// require() module loading
const fs = require('fs');
const file = process.argv[2];
// reads, creates, updates, deletes and renames files
/*
Parameters:
- filename: file
- encoding: utf8
- callback_function: err if error occurs, data file content
*/
fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
