#!/usr/bin/node
// define a class square
const SquareBase = require('./5-square');

class Square extends SquareBase {
  constructor (size) {
    super(size, size);
  }

  charPrint (c = 'X') {
    Array.from({ length: this.width }).forEach(() => {
      console.log(c.repeat(this.width));
    });
  }
}

module.exports = Square;
