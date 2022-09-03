export type GameObjectsType = undefined | "rock" | "scissors" | "paper";
export type GameMode = "player" | "computer";

export type GameAreaComputerStateTpes = {
  playerChoice: GameObjectsType;
  computerChoice: GameObjectsType;
};

export type GameRulesType = {
  name: GameObjectsType;
  image: string;
  rules: any;
};
