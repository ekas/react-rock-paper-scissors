import { useEffect, useState } from "react";
import { GameObjects, GameObjectsType, GameRules } from "../../gameEngine";
import Button from "../Button";
import Counter from "../Counter";

import "./index.less";

interface GameAreaProps {
  setResult: (result: boolean | undefined) => void;
  isRefreshing: boolean;
}

const GameArea = ({ setResult, isRefreshing }: GameAreaProps) => {
  const [loader, setLoader] = useState(false);
  const [playerChoice, setPlayerChoice] = useState<GameObjectsType>();
  const [computerChoice, setComputerChoice] = useState<GameObjectsType>();

  useEffect(() => {
    if (isRefreshing) {
      setPlayerChoice(undefined);
      setComputerChoice(undefined);
    }
  }, [isRefreshing]);

  useEffect(() => {
    if (computerChoice !== undefined) {
      const boolVal = GameRules.filter((rule) => rule.name === playerChoice)[0]
        .rules[computerChoice];
      setResult(boolVal);
    }
  }, [computerChoice]);

  const pickRandomChoice = (): GameObjectsType => {
    return GameObjects[
      Math.floor(Math.random() * GameObjects.length)
    ] as GameObjectsType;
  };

  const onLoaderComplete = () => {
    if (playerChoice !== undefined) {
      setComputerChoice(pickRandomChoice());
      setLoader(false);
    }
  };

  const handlePlayerChoice = (choice: GameObjectsType) => {
    setLoader(true);
    setPlayerChoice(choice);
  };

  return (
    <div className="game-area">
      <div className="game-area-left">
        {playerChoice === undefined ? (
          GameObjects.map((object, index) => (
            <Button
              key={`icon_${index}`}
              className="game-area-left-item"
              onClick={() => handlePlayerChoice(object as GameObjectsType)}
            >
              <img src={"images/" + object + ".png"} alt={object} />
            </Button>
          ))
        ) : (
          <div className="game-area-left-disabled">
            <img src={"images/" + playerChoice + ".png"} alt={playerChoice} />
          </div>
        )}
      </div>
      <div className="game-area-center">v/s</div>
      <div className="game-area-right">
        {computerChoice !== undefined ? (
          <div className="game-area-right-item">
            <img
              src={"images/" + computerChoice + ".png"}
              alt={computerChoice}
            />
          </div>
        ) : loader ? (
          <Counter startCount={3} onComplete={onLoaderComplete} />
        ) : (
          <div className="game-area-right-item-text">Choose Your Option</div>
        )}
      </div>
    </div>
  );
};

export default GameArea;
