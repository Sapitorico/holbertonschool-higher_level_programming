#!/usr/bin/node
// returns the reversed version of a list
exports.esrever = function (list) {
  let aux;
  const new_list = [];

  for (let i = 0; i < list.length / 2; i++) {
    aux = list[i];
    list[i] = list[list.length - i - 1];
    list[list.length - i - 1] = aux;
  }
  return list;
};
