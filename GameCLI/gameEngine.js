export const GameRules = [
  {
    name: "rock",
    image: "rock.png",
    rules: {
      rock: undefined,
      scissors: true,
      paper: false,
    },
  },
  {
    name: "scissors",
    image: "scissors.png",
    rules: {
      scissors: undefined,
      paper: true,
      rock: false,
    },
  },
  {
    name: "paper",
    image: "paper.png",
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
