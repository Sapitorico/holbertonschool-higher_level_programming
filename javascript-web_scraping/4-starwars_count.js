#!/usr/bin/node
const request = require('request');
const starWarsUri = process.argv[2];

request(starWarsUri, function (_err, _res, body) {
  const count = JSON.parse(body).results
    .reduce((total, film) => {
      const characters = film.characters.filter(character => character.split('/')[5] === '18');
      return total + characters.length;
    }, 0);

  console.log(count);
});
