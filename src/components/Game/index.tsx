import { useState } from "react";
import { GameMode } from "../../types/Game";
import Button from "../Button";
import BackIcon from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";
import { gameRules, gameObjects } from "../../gameEngine";

import "./index.less";

interface GameProps {
  mode: GameMode | undefined;
  setGameMode: (mode: GameMode | undefined) => void;
}

const Game = ({ mode, setGameMode }: GameProps) => {
  const navigate = useNavigate();
  const [result, setResult] = useState("You Win!");
  const [playerChoice, setPlayerChoice] = useState(undefined);
  const [opponentChoice, setOpponentChoice] = useState("rock");

  const handleBackClick = () => {
    navigate("/");
    setGameMode(undefined);
  };

  return (
    <div className="game">
      <Button className="game-back-btn" onClick={() => handleBackClick()}>
        <img src={BackIcon} alt="Back Button" className="game-back-btn-icon" />
      </Button>
      <h1 className="game-heading">Rock Paper Scissors</h1>
      {mode && (
        <h2 className="game-mode">
          {mode === "player" ? "Player v/s Computer" : "Computer v/s Computer"}
        </h2>
      )}

      <div className="game-area">
        <div className="game-area-left">
          {gameObjects.map((object, index) => (
            <Button key={`icon_${index}`} className="game-area-left-item">
              <img src={"images/" + object + ".png"} alt={object} />
            </Button>
          ))}
        </div>
        <div className="game-area-center">v/s</div>
        <div className="game-area-right">
          {opponentChoice ? (
            <Button key={`icon_opponent`} className="game-area-right-item">
              <img
                src={"images/" + opponentChoice + ".png"}
                alt={opponentChoice}
              />
            </Button>
          ) : (
            "Choose Your Option"
          )}
        </div>
      </div>
      {result && <div className="game-result">{result}</div>}
      <Button className="game-play-again-btn">Play Again</Button>
    </div>
  );
};

export default Game;
