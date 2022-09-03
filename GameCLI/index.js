#!/usr/bin/env node
import { getRandomGamesObjectIndex, getGameResult } from "./gameEngine.js";
import {
  chalkColorMsg,
  evaluatingGameResults,
  gameModePrompt,
  gameObjectSelection,
  gamePlayAgain,
  gameWelcome,
  namePrompt,
} from "./game.js";

let gameMode;
let playerName;
let gameObjectSelected;
let computerGameObject;

await gameWelcome();
playerName = await namePrompt();

console.log(
  chalkColorMsg(`Welcome ${playerName}. Are you ready for the ready?`, "green")
);

export const continuePlay = async (response) => {
  if (response === "Yes") {
    await gamePlay();
  } else {
    console.log(chalkColorMsg("Thank you for playing the game !!", "blue"));
    process.exit(1);
  }
};

const gamePlay = async () => {
  gameMode = await gameModePrompt();
  console.log(
    chalkColorMsg(
      `You have selected ${chalkColorMsg(gameMode, "yellow")} mode`,
      "green"
    )
  );

  if (gameMode === "Player vs Computer") {
    gameObjectSelected = await gameObjectSelection();
    computerGameObject = getRandomGamesObjectIndex();
  } else {
    gameObjectSelected = getRandomGamesObjectIndex();
    computerGameObject = getRandomGamesObjectIndex();
  }

  console.log(
    chalkColorMsg(
      `${
        gameMode === "Player vs Computer"
          ? "You Selected"
          : "Computer 1 Selected"
      } ${chalkColorMsg(gameObjectSelected, "yellow")} and ${
        gameMode === "Player vs Computer"
          ? "Computer Selected"
          : "Computer 2 Selected"
      } ${chalkColorMsg(computerGameObject, "yellow")}`,
      "green"
    )
  );
  const result = getGameResult(gameObjectSelected, computerGameObject);
  await evaluatingGameResults(result, gameMode, playerName);
  await continuePlay(await gamePlayAgain());
};

await gamePlay();
