import { type Direction } from "./types.js";
import Coordinates from "./Coordinates.js";

export default class Robot {
  constructor(public position: Coordinates = new Coordinates(0, 0)) {}

  moveNorth = () => {
    const previousPosition = this.position;
    const y = this.position.y + 1;
    try {
      const updatedPosition = new Coordinates(this.position.x, y);
      this.position = updatedPosition;
      console.log(
        `The robot has moved from ${previousPosition} to ${this.position}`
      );
    } catch (e) {
      throw new Error(
        `Illegal Move: cannot move robot in the direction N from ${previousPosition}.`
      );
    }
    this.position = new Coordinates(this.position.x, y);
  };

  moveEast = () => {
    const previousPosition = this.position;
    const x = this.position.x + 1;
    try {
      const updatedPosition = new Coordinates(x, this.position.y);
      this.position = updatedPosition;
      console.log(
        `The robot has moved from ${previousPosition} to ${this.position}`
      );
    } catch (e) {
      throw new Error(
        `Illegal Move: cannot move robot in the direction E from ${previousPosition}.`
      );
    }
  };

  moveWest = () => {
    const previousPosition = this.position;
    const x = this.position.x - 1;
    try {
      const updatedPosition = new Coordinates(x, this.position.y);
      this.position = updatedPosition;
      console.log(
        `The robot has moved from ${previousPosition} to ${this.position}`
      );
    } catch (e) {
      throw new Error(
        `Illegal Move: cannot move robot in the direction W from ${previousPosition}.`
      );
    }

    console.log(
      `The robot has moved from ${previousPosition} to ${this.position}`
    );
  };

  moveSouth = () => {
    const previousPosition = this.position;
    const y = this.position.y - 1;

    try {
      const updatedPosition = new Coordinates(this.position.x, y);
      this.position = updatedPosition;
      console.log(
        `The robot has moved from ${previousPosition} to ${this.position}`
      );
    } catch (e) {
      throw new Error(
        `Illegal Move: cannot move robot in the direction S from ${previousPosition}.`
      );
    }
  };

  move = (direction: Direction) => {
    switch (direction) {
      case "N": {
        this.moveNorth();
        break;
      }

      case "E": {
        this.moveEast();
        break;
      }

      case "W": {
        this.moveWest();
        break;
      }

      case "S": {
        this.moveSouth();
        break;
      }

      default:
        throw new Error(
          `Illegal Direction: ${direction} must be one of values N, E, W, S`
        );
    }
  };

  processInstructions(instructions: Direction[]) {
    const processedInstructions: Direction[] = [];
    for (const instruction of instructions) {
     try {
         this.move(instruction);
         processedInstructions.push(instruction);
     } catch (e) {
        throw new Error(`Illegal Instructions: The robot was only able to process part of the instructions provided: ${processedInstructions.join(' ')} before encountering the invalid move: ${instruction}. The remaining instructions: ${instructions.slice(processedInstructions.length)} were not processed.`);
     }
    }
  }
}
