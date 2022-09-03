import { useNavigate } from "react-router-dom";
import { GameMode } from "../../types/Game";
import BackIcon from "../../assets/back.svg";
import Button from "../Button";

import "./index.less";

interface PageNotFoundProps {
  setGameMode: (mode: GameMode | undefined) => void;
}

const PageNotFound = ({ setGameMode }: PageNotFoundProps) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
    setGameMode(undefined);
  };
  return (
    <div className="not-found">
      <Button className="not-found-back-btn" onClick={() => handleBackClick()}>
        <img
          src={BackIcon}
          alt="Back Button"
          className="not-found-back-btn-icon"
        />
      </Button>
      <h1 className="not-found-heading">404</h1>
      <h2 className="not-found-subheading">Not Found</h2>
    </div>
  );
};

export default PageNotFound;
