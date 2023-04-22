#!/usr/bin/node
// s
const request = require('request');
const route = process.argv[2];
request(route, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);
    const completedTasksByUser = {};
    data.forEach((task) => {
      const userId = task.userId;
      if (task.completed) {
        completedTasksByUser[userId] = (completedTasksByUser[userId] || 0) + 1;
      }
    });
    console.log(completedTasksByUser);
  }
});
