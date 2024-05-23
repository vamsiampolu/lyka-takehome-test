import Robot from "../src/Robot.js";
import Coordinates from "../src/Coordinates.js";
import { describe, it, expect } from "vitest";
import { Direction } from "../src/types.js";

describe("Robot", () => {
  it("should create a robot at the starting position", () => {
    const robot = new Robot();
    expect(robot.position).toBeDefined();

    expect(robot.position.x).toEqual(0);
    expect(robot.position.y).toEqual(0);
  });

  it("should create a robot at a valid starting position", () => {
    const robot = new Robot(new Coordinates(4, 4));

    expect(robot.position.x).toEqual(4);
    expect(robot.position.y).toEqual(4);
  });

  it("should create a robot at the north-east corner of the warehouse", () => {
    const robot = new Robot(new Coordinates(9, 9));

    expect(robot.position.x).toEqual(9);
    expect(robot.position.y).toEqual(9);
  });

  it("should throw an error when an invalid starting position is specified", () => {
    expect(() => new Robot(new Coordinates(0, 12))).toThrowError(
      "Invalid Coordinates: position is out of bounds"
    );
  });
});

describe("Robot#move", () => {
  it("should throw an error when an invalid direction is specified", () => {
    const robot = new Robot();
    expect(() => robot.move("Y" as any)).toThrowError(
      "Illegal Direction: Y must be one of values N, E, W, S"
    );
  });

  it("should move a Robot from coordinates (0, 0) to (0, 1) when direction is N", () => {
    const robot = new Robot();
    expect(robot.position.toString()).toEqual("(0, 0)");

    robot.move("N");
    expect(robot.position.toString()).toEqual("(0, 1)");
  });

  it("should move a Robot from coordinates (0, 0) to (1, 0) when direction is E", () => {
    const robot = new Robot();
    expect(robot.position.toString()).toEqual("(0, 0)");

    robot.move("E");
    expect(robot.position.toString()).toEqual("(1, 0)");
  });

  it("should throw an Error when robot at (0, 0) is instructed to move in the direction W", () => {
    const robot = new Robot();
    expect(() => robot.move("W")).toThrow(
      "Illegal Move: cannot move robot in the direction W from (0, 0)."
    );
  });

  it("should throw an Error when robot at (0, 0) is instructed to move in the direction S", () => {
    const robot = new Robot();
    expect(() => robot.move("S")).toThrow(
      "Illegal Move: cannot move robot in the direction S from (0, 0)."
    );
  });

  it("should move a Robot from coordinates (4, 4) to (4, 5) when direction N is specified", () => {
    const robot = new Robot(new Coordinates(4, 4));
    robot.move("N");
    expect(robot.position.toString()).toEqual("(4, 5)");
  });

  it("should move Robot from coordinates (4,4) to (5, 4) when direction E is specified", () => {
    const robot = new Robot(new Coordinates(4, 4));
    robot.move("E");
    expect(robot.position.toString()).toEqual("(5, 4)");
  });

  it("should move Robot from coordinates (4, 4) to (3, 4) when direction W is specified", () => {
    const robot = new Robot(new Coordinates(4, 4));
    robot.move("W");
    expect(robot.position.toString()).toEqual("(3, 4)");
  });

  it("should move Robot from coordinates (4, 4) to (4, 3) when direction S is specified", () => {
    const robot = new Robot(new Coordinates(4, 4));
    robot.move("S");
    expect(robot.position.toString()).toEqual("(4, 3)");
  });

  it("should throw an error when robot at from (0, 9 is instructed to move in direction N", () => {
    const robot = new Robot(new Coordinates(0, 9));
    expect(() => robot.move("N")).toThrow(
      "Illegal Move: cannot move robot in the direction N from (0, 9)."
    );
  });

  it("should throw an error when robot at (9, 0) is instructed to move in the direction E", () => {
    const robot = new Robot(new Coordinates(9, 0));
    expect(() => robot.move("E")).toThrow(
      "Illegal Move: cannot move robot in the direction E from (9, 0)."
    );
  });
});

describe("Robot#processInstructions", () => {
  it("should process a series of valid move instructions", () => {
    const instructions = `N E N E N E N E`.split(" ") as Direction[];
    const robot = new Robot();
    robot.processInstructions(instructions);
    expect(robot.position.toString()).toEqual(`(4, 4)`);
  });

  it('should process a series of instructions until an invalid move is encountered', () => {
    const instructions = `N E N E W W W E S N N`.split(' ') as Direction[];
    const robot = new Robot();
    expect(() => robot.processInstructions(instructions)).toThrow('Illegal Instructions: The robot was only able to process part of the instructions provided: N E N E W W before encountering the invalid move: W. The remaining instructions: W,E,S,N,N were not processed.');
  });
});
