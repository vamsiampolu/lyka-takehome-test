export default class Coordinates {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    // console.log(this.isValidCoordinates(x, y));
    if (!this.isValidCoordinates(x, y)) {
        throw new Error("Invalid Coordinates: position is out of bounds");
    }

    this.x = x;
    this.y = y;
  }

  isValidCoordinates = (x: number, y: number) => {
    return x >= 0 && x <= 9 && y >= 0 && y <= 9;
  }

  toString() {
    return `(${this.x}, ${this.y})`.trim();
  }
}
