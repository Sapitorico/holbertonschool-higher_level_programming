#!/usr/bin/node
// define a class square

class Square {
  constructor (w) {
    // initialize square
    if (w <= 0 || !Number.isInteger(w)) {
      return;
    }
    this.width = w;
  }

  print () {
    // print square
    console.log('X'.repeat(this.width).repeat(this.width).match(new RegExp('.{1,' + this.width + '}', 'g')).join('\n'));
  }

  double () {
    // duplicate area of square
    this.width = this.width * 2;
  }
}
module.exports = Square;
