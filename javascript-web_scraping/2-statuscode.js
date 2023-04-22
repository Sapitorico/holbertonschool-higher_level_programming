#!/usr/bin/node
// s
const request = require('request');
const route = process.argv[2]; // Se debe especificar la URL del recurso a obtener
request.get(route, function (err, response) {
  if (err) throw err;
  console.log('code:', response.statusCode);
});
