#!/usr/bin/node
// print int argument
parseInt(process.argv[2]) ? console.log('My number:', parseInt(process.argv[2])) : console.log('Not a number');
