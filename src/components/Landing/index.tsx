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
      <div className="landing-button">
        <Button onClick={() => setGameMode("player")}>
          Player vs Computer
        </Button>
        <Button onClick={() => setGameMode("computer")}>
          Computer vs Computer
        </Button>
      </div>
    </div>
  );
};

export default Landing;
