# React Rock Paper Scissors CLI

Interactive Terminal or Command Prompt Game

## Project Game CLI Instructions

Make sure you've [`git`](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), [`yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) & [`nodejs`](https://nodejs.org/en/) installed in your system.

Open terminal and follow these steps;

- Step 1: Clone the repo.

```bash
git clone https://github.com/ekas/react-rock-paper-scissors
```

You should now see a `react-rock-paper-scissors` folder in your present working directory. Let's change directory to it.

```bash
cd react-rock-paper-scissors/
cd GameCLI
```

- Step 2: CLI Build Instructions. Install dependencies.

```bash
yarn install
```

This will use `yarn` to install project dependencies.

- Step 3: Start the CLI project on the terminal.

```bash
yarn start
```

This will start game on Terminal and from there follow instructions on the terminal

## Project Extension

- If you would like to add more Game Objects.
- Simply open `gameEngine.js` file you wil find a `GameRules`. Add JSON as follows:

```js
{
    name: "pencil",
    rules: {
      pencil: undefined, //default case when opponet choose the same Object
      paper: true
      scissors: false,
      rock: true,
    },
},
```

```text
Note: Add rule for pencil in other json Objects

- `true` if other object beats pencil
- `false` if other object does notbeats pencil

```

## Project Features

- Simple Rock Paper Scissors Game Command Line Interface Game.
- Choose mode between Player vs Computer or Computer vs Computer.
- For Player vs Computer, user will asked chose an option. User will see a loader saying `Evaluating...`. System will select a random selection for computer player and will display result.
- For Player vs Computer, User will see a loader saying `Evaluating...`. System will select a random selection for both computer 1 and Computer 2 player and will display result respectively.
- Additionally, User will be prompted with option to continue play or not.

## Project Screenshots

![Img 1](https://github.com/ekas/react-rock-paper-scissors/blob/main/screenshots/Image_1.png)

![Img 2](https://github.com/ekas/react-rock-paper-scissors/blob/main/screenshots/Image_2.png)

![Img 3](https://github.com/ekas/react-rock-paper-scissors/blob/main/screenshots/Image_3.png)

![Img 4](https://github.com/ekas/react-rock-paper-scissors/blob/main/screenshots/Image_4.png)

![Img 5](https://github.com/ekas/react-rock-paper-scissors/blob/main/screenshots/Image_5.png)

## Thank You
