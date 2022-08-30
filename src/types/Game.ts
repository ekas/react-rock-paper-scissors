import { GameObjectsType } from "../gameEngine";

export type GameMode = "player" | "computer";

export type GameAreaComputerStateTpes = {
  playerChoice: GameObjectsType;
  computerChoice: GameObjectsType;
};
