#!/usr/bin/node
// executes x times a function
exports.callMeMoby = function (x, functionName) {
  for (let i = 0; i < x; i++) { functionName(); }
};
// exports.callMeMoby = function(x, functionName)
// {
//     Array(x).fill().forEach(function(){functionName();});
// }
