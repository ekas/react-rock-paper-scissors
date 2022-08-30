import { useEffect, useState } from "react";
import { GameObjects, GameObjectsType, GameRules } from "../../gameEngine";
import { GameAreaComputerStateTpes } from "../../types/Game";
import Button from "../Button";
import Counter from "../Counter";

import "./index.less";

interface GameAreaComputerProps {
  setResult: (result: boolean | undefined) => void;
  isRefreshing: boolean;
}

const GameAreaComputer = ({
  setResult,
  isRefreshing,
}: GameAreaComputerProps) => {
  const [choice, setChoice] = useState<GameAreaComputerStateTpes>({
    playerChoice: undefined,
    computerChoice: undefined,
  });
  const [loader, setLoader] = useState(true);

  const onLoaderComplete = () => {
    setLoader(false);
    handlePlayerChoice();
  };

  useEffect(() => {
    if (isRefreshing) {
      setLoader(true);
      setChoice({ playerChoice: undefined, computerChoice: undefined });
    }
  }, [isRefreshing]);

  useEffect(() => {
    if (
      choice.computerChoice !== undefined &&
      choice.playerChoice !== undefined
    ) {
      setResult(
        GameRules.filter((rule) => rule.name === choice.playerChoice)[0].rules[
          choice.computerChoice
        ]
      );
    }
  }, [loader]);

  const pickRandomChoice = (): GameObjectsType => {
    return GameObjects[
      Math.floor(Math.random() * GameObjects.length)
    ] as GameObjectsType;
  };

  const handlePlayerChoice = () => {
    setChoice({
      ...choice,
      playerChoice: pickRandomChoice(),
      computerChoice: pickRandomChoice(),
    });
  };

  const { playerChoice, computerChoice } = choice;
  return (
    <div className="game-area">
      {loader ? (
        <Counter startCount={5} onComplete={onLoaderComplete} />
      ) : (
        <>
          <div className="game-area-left">
            {playerChoice !== undefined && (
              <div className="game-area-left-disabled">
                <img
                  src={"images/" + playerChoice + ".png"}
                  alt={playerChoice}
                />
              </div>
            )}
          </div>
          <div className="game-area-center">v/s</div>
          <div className="game-area-right">
            {computerChoice !== undefined && (
              <div className="game-area-right-item">
                <img
                  src={"images/" + computerChoice + ".png"}
                  alt={computerChoice}
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default GameAreaComputer;
