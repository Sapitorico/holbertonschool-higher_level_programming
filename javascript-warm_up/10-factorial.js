#!/usr/bin/node
// print factorial  of number
const factorial = number => {
  if (number >= 1) { return factorial(number - 1) * number; }
  return (1);
};
console.log(factorial(parseInt(process.argv[2])));
