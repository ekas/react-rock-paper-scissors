import chalk from "chalk";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import chalkAnimation from "chalk-animation";
import { GameRules } from "./gameEngine.js";

export let animationTimer = (time = 3000) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const chalkColorMsg = (message, color) => {
  return chalk[color](message);
};

const gameObjects = GameRules.map((rule) => rule.name);

export const gameWelcome = async () => {
  const gameTitle = chalkAnimation.rainbow(
    "Welcome to Game Rock Paper Scissors"
  );
  await animationTimer();
  gameTitle.stop();
  console.log(chalkColorMsg("Rules to play the game !!", "blue"));
  console.log(
    chalkColorMsg(
      "1. You have to choose one of Game modes - Player vs Computer or Computer vs Computer",
      "blue"
    )
  );
  console.log(
    chalkColorMsg(
      `2. If you choose Player vs Computer, you have to choose one of the options - ${gameObjects.join(
        ", "
      )}`,
      "blue"
    )
  );
  console.log(
    chalkColorMsg(
      `3. If you choose Computer vs Computer, system will automatically choose one of the options - ${gameObjects.join(
        ", "
      )}`,
      "blue"
    )
  );
};

export const namePrompt = async () => {
  const { player_name } = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "Please enter your name",
    validate: (value) => {
      if (value.length) {
        return true;
      } else {
        return "Please enter your name";
      }
    },
  });
  return player_name;
};

export const gameModePrompt = async () => {
  const { game_mode } = await inquirer.prompt({
    name: "game_mode",
    type: "list",
    message: "Please select game mode",
    choices: ["Player vs Computer", "Computer vs Computer"],
  });
  return game_mode;
};

export const gamePlayAgain = async () => {
  const { game_play_bool } = await inquirer.prompt({
    name: "game_play_bool",
    type: "list",
    message: "Do you wanna play again?",
    choices: ["Yes", "No"],
  });
  return game_play_bool;
};

export const evaluatingGameResults = async (result, gameMode, playerName) => {
  const spinner = createSpinner("Evaluating...").start();
  await animationTimer(2000);
  if (result === undefined) {
    spinner.warn({ text: "🙈🙈 Its a Draw!" });
  } else if (result) {
    if (gameMode === "Player vs Computer") {
      spinner.success({ text: `✅✅✅ ${playerName} You Win !!!` });
    } else {
      spinner.success({ text: `✅✅✅ 🖥 🖥 Computer 1 Win !!!` });
    }
  } else {
    if (gameMode === "Player vs Computer") {
      spinner.error({ text: `😔😔😔 ${playerName} You Lose !!!` });
    } else {
      spinner.error({ text: `😔😔😔 🖥 🖥 Computer 1 Lose !!!` });
    }
  }
  return true;
};

export const gameObjectSelection = async () => {
  const { game_object } = await inquirer.prompt({
    name: "game_object",
    type: "list",
    message: "Please select object you wanna throw",
    choices: [...gameObjects],
  });
  return game_object;
};
