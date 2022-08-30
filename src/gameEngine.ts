export const gameRules = {
  rock: {
    rules: {
      rock: undefined,
      scissors: true,
      paper: false,
    },
  },
  scissors: {
    rules: {
      scissors: undefined,
      paper: true,
      rock: undefined,
    },
  },
  paper: {
    rules: {
      paper: undefined,
      scissors: false,
      rock: true,
    },
  },
};

export const gameObjects = ["rock", "scissors", "paper"];
