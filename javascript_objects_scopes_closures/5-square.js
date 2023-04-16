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
    // print the rectangle
    console.log('X'.repeat(this.width).repeat(this.height).match(new RegExp('.{1,' + this.width + '}', 'g')).join('\n'));
  }

  rotate () {
    // rotate the value of the rectangle
    const width = this.width;
    this.width = this.height;
    this.height = width;
  }

  double () {
    // duplicate the value of the rectangle
    this.width = this.width * 2;
    this.height = this.height * 2;
  }
}

// define a class square

class Square extends Rectangle {
  constructor (size) {
    // initialize square
    super(size, size);
  }
}
module.exports = Square;
