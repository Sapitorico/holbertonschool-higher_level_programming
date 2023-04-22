#!/usr/bin/node
// define a class Rectangle

class Rectangle {
  constructor (w, h) {
    // initialize the rectangle
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      return;
    }
    this.width = w;
    this.height = h;
  }

  print () {
    // console.log('X'.repeat(this.width).repeat(this.height));
    // print rectangle
    console.log('X'.repeat(this.width).repeat(this.height).match(new RegExp('.{1,' + this.width + '}', 'g')).join('\n'));
  }
}
// export class
module.exports = Rectangle;
