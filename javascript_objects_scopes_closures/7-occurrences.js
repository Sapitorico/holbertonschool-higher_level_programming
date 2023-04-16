#!/usr/bin/node
// returns the number of occurrences in a list
exports.nbOccurences = function (list, searchElement) {
  const countMap = new Map();
  list.forEach(item => {
    const count = countMap.get(item) || 0;
    countMap.set(item, count + 1);
  });
  return countMap.get(searchElement) || 0;
};
