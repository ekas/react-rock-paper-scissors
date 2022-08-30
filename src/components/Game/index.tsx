import { GameMode } from "../../types/Game";
import Button from "../Button";
import BackIcon from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";

import "./index.less";

interface GameProps {
  mode: GameMode | undefined;
  setGameMode: (mode: GameMode | undefined) => void;
}

const Game = ({ mode, setGameMode }: GameProps) => {
  const navigate = useNavigate();

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
      <Button className="game-play-again-btn">Play Again</Button>
    </div>
  );
};

export default Game;
