### Lyka Take Home Test

#### Installation

The application use `lts/iron` (node v20 LTS) and `pnpm` version `9.0.6`, to ensure the correct versions of node and the package manager are installed, run:

```bash
$ nvm use
$ corepack install
```

To install the dependencies, run:

```bash
$ pnpm install
```

### Usage

To run the app, use the following:

```bash
$ pnpm dev N E N E N E
```

Provide a set of instructions for the robot to execute, ensure that the instructions are separated by a space. 
A limitation at the moment is that the robot always starts in the south-west corner and does not remember the result of a previous run.

### Description

A robot can move around a warehouse of size 10 X 10 given instructions in the form of a string consisting of multiple moves.
A move is a direction representing `North`, `South`, `East` or `West`. For brevity, the direction provided to the robot is shortened to 

|Direction|Move|
|:-------:|:--:|
|North|N|
|South|S|
|East|E|
|West|W|

An instruction may be:  `N E N E N E N E`. Using this instruction, the robot moves from the south-west corner of the warehouse to the center of the warehouse.

```ts
type Move = 'N' | 'E' | 'W' | 'S';
```

#### Assumptions

We can assume that the south west corner (aka the bottom left) of the warehouse is the starting position of the robot. We can assign it the co-ordinates `(0, 0)`. In typescript, we will represent this as:

```ts
type Point {
    x: number;
    y: number;
}
```

The directions are similar to the ones we may find when reading a Map as shown in the diagram below:
```
      N
      ^
      | 
W <--- ---> E
      |
      V
      S
```

`North` means `Up`, `West` means `Left`, `East` means `Right` and `South` means `Down`.


We also assume that each move moves the robot in the specified direction by a distance of `1` unit. Given that we start at `(0, 0)` at the `South-West` corner, the `North-East` corner
which is the farthest point from the starting position in the warehouse would be `(9, 9)`. The robot can only traverse any points in the warehouse between these points. 

Any instructions that require the robot to move out of these bounds is considered an `IllegalMove` and the robot will throw an error and stop at the last valid instruction.

Given: The robot is at `(0,0)` and the instruction provided is `N E N E N E N E`

`N` moves the robot from `(0,0)` to `(0, 1)`
`E` moves the robot from `(0, 1)` to `(1, 1)`

`N` moves the robot from `(1,1)` to `(1, 2)`
`E` moves the robot from `(1, 2)` to `(2,2)`

`N` moves the robot from `(2, 2)` to `(2, 3)`
`E` moves the robot from `(2, 3)` to `(3, 3)`

`N` moves the robot from `(3, 3)` to `(3, 4)`
`E` moves the robot from `(3, 4)` to `(4, 4)`

The center of the room is at `(4, 4)` as suggested in the problem.

#### Development

The project uses typescript, to build the project, use `pnpm build` and clean the `dist` directory using `pnpm run clean`.

To format your code, run:

```bash
$ pnpm format
```

We use `vitest` to run the unit tests, use:

```bash
$ pnpm test
```
