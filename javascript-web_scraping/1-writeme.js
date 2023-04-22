#!/usr/bin/node
const fs = require('fs');
const file = process.argv[2];
const args = process.argv[3];
fs.writeFile(file, args, 'utf8', (err, data) => {
  if (err) console.error(err);
});
