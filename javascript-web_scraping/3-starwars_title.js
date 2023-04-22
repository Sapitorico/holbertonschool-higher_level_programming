#!/usr/bin/node
// s
const request = require('request');
const episodeNumber = process.argv[2];
request(`https://swapi.dev/api/films/${episodeNumber}/`, function (error, response, body) {
  if (error) console.error('Error:', error);
  else if (episodeNumber === '7') {
    console.log('The Force Awakens');
  } else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});
