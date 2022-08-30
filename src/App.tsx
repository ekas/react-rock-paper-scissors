import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";
import { useEffect, useState } from "react";
import { GameMode } from "./types/Game";
import Game from "./components/Game";
import PageNotFound from "./components/PageNotFound";

import "./App.less";

function App() {
  const navigate = useNavigate();
  const [gameMode, setGameMode] = useState<GameMode>();

  useEffect(() => {
    gameMode && navigate("/game");
  }, [gameMode]);

  return (
    <div className="App">
      <main className="container">
        <Routes>
          <Route path="/">
            <Route path="" element={<Landing setGameMode={setGameMode} />} />
            <Route
              path="game"
              element={<Game mode={gameMode} setGameMode={setGameMode} />}
            />
            <Route
              path="*"
              element={<PageNotFound setGameMode={setGameMode} />}
            />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
