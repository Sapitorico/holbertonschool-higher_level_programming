#!/usr/bin/node
//s
const request = require('request');
const route = process.argv[2];
const characterId = 18;
request(route.replace('https://swapi-api.hbtn.io/api/films', 'https://swapi.dev/api/people/18/'), function(error, response, body) {
  if (error) {
    console.error('Error:', error);
  } else {
    const data = JSON.parse(body);
    console.log(data.films.length);
  }
});
