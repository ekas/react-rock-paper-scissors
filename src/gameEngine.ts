export const GameRules = [
  {
    name: "rock",
    rules: {
      rock: undefined,
      scissors: true,
      paper: false,
    },
  },
  {
    name: "scissors",
    rules: {
      scissors: undefined,
      paper: true,
      rock: undefined,
    },
  },
  {
    name: "paper",
    rules: {
      paper: undefined,
      scissors: false,
      rock: true,
    },
  },
];

export type GameRulesType = typeof GameRules;

export const GameObjects = ["rock", "scissors", "paper"];

export type GameObjectsType = "rock" | "scissors" | "paper" | undefined;
