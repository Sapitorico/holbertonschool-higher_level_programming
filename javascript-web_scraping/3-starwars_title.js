#!/usr/bin/node
const request = require('request');
const episodeNumber = process.argv[2];
request(`https://swapi.dev/api/films/${episodeNumber}/`, function (error, response, body) {
  if (error) console.error('Error:', error);
  else {
    const data = JSON.parse(body);
    console.log(data.title);
  }
});