import { useEffect, useState } from "react";
import {
  GameRules,
  getGameResult,
  getRandomGamesObjectIndex,
} from "../../gameEngine";
import { GameObjectsType } from "../../types/Game";
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
      setResult(getGameResult(playerChoice, computerChoice));
    }
  }, [computerChoice]);

  const onLoaderComplete = () => {
    if (playerChoice !== undefined) {
      setComputerChoice(getRandomGamesObjectIndex());
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
          GameRules.map((rule, index) => (
            <Button
              key={`icon_${index}`}
              className="game-area-left-item"
              onClick={() => handlePlayerChoice(rule.name as GameObjectsType)}
            >
              <img src={"images/" + rule.image} alt={rule.name} />
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
