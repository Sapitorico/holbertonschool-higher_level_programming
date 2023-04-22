#!/usr/bin/node
// print a message depending on of the number of arguments
const result = process.argv.length === 2 ? 'No argument' : process.argv.length === 3 ? 'Argument found' : 'Arguments found';
console.log(result);
