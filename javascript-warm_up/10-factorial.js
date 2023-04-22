#!/usr/bin/node
// print factorial  of numbedr
function factorial (n) {
  if (n >= 1) { return factorial(n - 1) * n; }
  return (1);
}
console.log(factorial(parseInt(process.argv[2])));
