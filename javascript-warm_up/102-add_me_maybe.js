#!/usr/bin/node
// increments and calls a function
exports.addMeMaybe = function (x, functionName) {
  functionName(x + 1);
};
