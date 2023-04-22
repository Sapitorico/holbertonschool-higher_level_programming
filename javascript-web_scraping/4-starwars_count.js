#!/usr/bin/node
//s
const request = require('request');
const route = process.argv[2];
if (!route) {
  console.error(0)
  return 0;
}
request(route.replace('https://swapi-api.hbtn.io/api/films', 'https://swapi.dev/api/people/18/'), function(error, response, body) {
  if (error) {
    console.error('Error:', error);
  } else {
    const data = JSON.parse(body);
    console.log(data.films.length);
  }
});
