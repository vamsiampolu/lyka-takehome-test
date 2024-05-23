import Robot from "./Robot.js";
import { type Direction } from "./types.js";

const robot = new Robot();
console.log(`Robot is currently at position: ${robot.position}`);

const instructions = process.argv.slice(2) as Direction[];
console.log(`Received instructions ${instructions.join(' ')}`);

robot.processInstructions(instructions);

console.log(`Robot is currently at position: ${robot.position}`);
