#!/usr/bin/node
// define a class square
const SquareBase = require('./5-square');

// define a class square

class Square extends SquareBase {
  constructor (size) {
    super(size, size);
    this.char = 'X';
  }

  print () {
    // print square
    console.log(this.char.repeat(this.width).repeat(this.width).match(new RegExp('.{1,' + this.width + '}', 'g')).join('\n'));
  }

  charPrint (c) {
    // change character and print square
    if (c) this.char = c;
    this.print();
  }
}
module.exports = Square;
