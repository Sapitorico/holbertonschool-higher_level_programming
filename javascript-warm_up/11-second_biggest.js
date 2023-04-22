#!/usr/bin/node
// print a second biggest integer in the list of arguments.
const array = process.argv.slice(2).map(num => parseInt(num)).sort((a, b) => a - b);
console.log(array[array.length - 2]);
