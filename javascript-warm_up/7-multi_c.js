#!/usr/bin/node
// print x times a message
const x = parseInt(process.argv[2]);
console.log(isNaN(x) ? 'Missing number of occurrences' : 'C is fun\n'.repeat(x).slice(0, -1));
