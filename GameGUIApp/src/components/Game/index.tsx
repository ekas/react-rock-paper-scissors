import { useState } from "react";
import { GameMode } from "../../types/Game";
import Button from "../Button";
import BackIcon from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";

import "./index.less";
import GameArea from "../GameArea";
import GameAreaComputer from "../GameAreaComputer";

interface GameProps {
  mode: GameMode | undefined;
  setGameMode: (mode: GameMode | undefined) => void;
}

const Game = ({ mode, setGameMode }: GameProps) => {
  const navigate = useNavigate();
  const [result, setResult] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleResultPublish = (result: boolean | undefined) => {
    setIsRefreshing(false);
    if (result === undefined) {
      setResult("Its a Draw!");
    } else if (result) {
      if (mode === "player") {
        setResult("You Win !!!");
      } else {
        setResult("Computer 1 Win !!!");
      }
    } else {
      if (mode === "player") {
        setResult("You Lose !!!");
      } else {
        setResult("Computer 1 Lose !!!");
      }
    }
  };

  const handleBackClick = () => {
    navigate("/");
    setGameMode(undefined);
  };

  return (
    <div className="game">
      <Button className="game-back-btn" onClick={() => handleBackClick()}>
        <img src={BackIcon} alt="Back Button" className="game-back-btn-icon" />
      </Button>
      <div className="game-header">
        <h1 className="game-header-heading">Rock Paper Scissors</h1>
        {mode && (
          <h2 className="game-header-mode">
            {mode === "player"
              ? "Player v/s Computer"
              : "Computer 1 v/s Computer 2"}
          </h2>
        )}
      </div>
      {mode === "player" ? (
        <GameArea setResult={handleResultPublish} isRefreshing={isRefreshing} />
      ) : (
        <GameAreaComputer
          setResult={handleResultPublish}
          isRefreshing={isRefreshing}
        />
      )}

      {result && <div className="game-result">{result}</div>}
      <Button
        className="game-play-again-btn"
        onClick={() => {
          setIsRefreshing(true);
          setResult("");
        }}
      >
        Play Again
      </Button>
    </div>
  );
};

export default Game;
