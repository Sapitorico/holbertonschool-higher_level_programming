#!/usr/bin/node
// print a squarse
const size = parseInt(process.argv[2]);
for (let i = 0; i < size; i++) { console.log(isNaN(size) ? 'Missing size' : 'X'.repeat(size)); }
