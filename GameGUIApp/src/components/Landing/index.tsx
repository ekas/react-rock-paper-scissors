import logo from "../../assets/logo.jpeg";
import { GameMode } from "../../types/Game";
import Button from "../Button";

import "./index.less";

interface LandingProps {
  setGameMode: (mode: GameMode) => void;
}

const Landing = ({ setGameMode }: LandingProps) => {
  return (
    <div className="landing">
      <h1 className="landing-heading">Rock Paper Scissors</h1>
      <img src={logo} alt="Logo" className="landing-logo" />
      <div className="landing-buttons">
        <Button
          onClick={() => setGameMode("player")}
          className="landing-button"
        >
          Player vs Computer
        </Button>
        <Button
          onClick={() => setGameMode("computer")}
          className="landing-button"
        >
          Computer vs Computer
        </Button>
      </div>
    </div>
  );
};

export default Landing;
