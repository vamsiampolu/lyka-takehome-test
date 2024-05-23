import Coordinates from "../src/Coordinates.js";
import { describe, it, expect } from "vitest";

describe("Coordinates", () => {
  it("represents the starting position in the warehouse", () => {
    const coordinates = new Coordinates(0, 0);
    expect(coordinates.x).toEqual(0);
    expect(coordinates.y).toEqual(0);
  });

  it("represents the farthest position in the warehouse", () => {
    const coordinates = new Coordinates(9, 9);
    expect(coordinates.x).toEqual(9);
    expect(coordinates.y).toEqual(9);
  });

  it("throws an error when invalid coordinates are provided", () => {
    expect(() => new Coordinates(10, 2)).toThrowError(
      "Invalid Coordinates: position is out of bounds"
    );
    expect(() => new Coordinates(2, 10)).toThrowError(
      "Invalid Coordinates: position is out of bounds"
    );
    expect(() => new Coordinates(2, -4)).toThrowError(
      "Invalid Coordinates: position is out of bounds"
    );
    expect(() => new Coordinates(-2, 4)).toThrowError(
      "Invalid Coordinates: position is out of bounds"
    );
  });
});

describe("Coordinates#isValidCoordinates", () => {
  it("should accept coordinates within the warehouse as valid", () => {
    const coordinates = new Coordinates(0, 0);
    expect(coordinates.isValidCoordinates(0, 0)).toBe(true);
    expect(coordinates.isValidCoordinates(2, 4)).toBe(true);
    expect(coordinates.isValidCoordinates(9, 9)).toBe(true);
  });
});

describe('Coordinates#toString', () => {
    it('prints coordinates in format (x, y)', () => {
        const coordinates = new Coordinates(0, 0);
        expect(coordinates.toString()).toEqual('(0, 0)')
    });
});
