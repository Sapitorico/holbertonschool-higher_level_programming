#!/usr/bin/node
// print a squarse
const size = parseInt(process.argv[2]);
console.log(isNaN(size) ? 'Missing size' : Array(size).fill('X'.repeat(size)).join('\n'));
