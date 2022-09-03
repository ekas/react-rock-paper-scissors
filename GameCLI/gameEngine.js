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
      rock: false,
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

export const getRandomGamesObjectIndex = () => {
  return GameRules[Math.floor(Math.random() * GameRules.length)].name;
};

export const getGameResult = (playerChoice, computerChoice) => {
  return (
    computerChoice &&
    playerChoice &&
    GameRules.filter((rule) => rule.name === playerChoice)[0].rules[
      computerChoice
    ]
  );
};
