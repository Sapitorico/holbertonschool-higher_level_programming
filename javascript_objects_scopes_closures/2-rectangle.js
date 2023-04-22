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
}
// export class
module.exports = Rectangle;
