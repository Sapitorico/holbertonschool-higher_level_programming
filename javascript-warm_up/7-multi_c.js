#!/usr/bin/node
// print x times a messages
const x = parseInt(process.argv[2]);
for (let i = 0; i < x; i++) { console.log(isNaN(x) ? 'Missing number of occurrences' : 'C is fun'); }
