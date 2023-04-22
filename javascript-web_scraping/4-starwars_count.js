#!/usr/bin/node
const request = require('request');
const starWarsUri = process.argv[2];

request(starWarsUri, function (_err, _res, body) {
  const count = JSON.parse(body).results
    .flatMap(film => film.characters)
    .filter(character => character.split('/')[5] === '18')
    .length;

  console.log(count);
});