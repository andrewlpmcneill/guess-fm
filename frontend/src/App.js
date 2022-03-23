import { useState } from "react";
import Map from "./components/Map";
import "./App.css";
import Player from "./components/Player/index";
import Results from "./components/Results/index";
import { Box } from "@mui/material";
import Dialog from "./components/Dialog";
import useDisplayMode from  "./hooks/useDisplayMode";
import useRoundData from "./hooks/useRoundData";
import useGuessesData from "./hooks/useGuessesData";
import usePlayerData from "./hooks/usePlayerData";


function App() {
  
  // Import state and functionality from useRoundData hook
  const { round, setRound, startGame } = useRoundData(0)


  // Needs to be trigged by guess button
  const updateRoundStatus = (guess) => {
    if (guesses.length === 4 || guess.distanceAway === 0) {
      setRound((prev) => prev + 1);
    }
  };


  // RESULTS STATE
  const [isDrawerOpen, setIsDrawerOpen, toggleDrawer] = useDisplayMode(false);
  


  // GUESSES STATE
  const {guesses, clearGuesses, addGuess} = useGuessesData([])
  

  // MAP STATE
  const [mapData, setMapData] = useState();

  // PLAYER STATE
  const { playing, value, click, handleChange, play, pause } = usePlayerData();
  //

  return (
    <div className="App">
      <h3>GUESS FM</h3>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Map setMapData={setMapData} />
        <Dialog
          round={round}
          play={play}
          pause={pause}
          startGame={startGame}
          guesses={guesses}
          clearGuesses={clearGuesses}
        />
        <Results
          guesses={guesses}
          onDrawerToggle={toggleDrawer}
          isDrawerOpen={isDrawerOpen}
        />
        <Player
          value={value}
          playing={playing}
          handleClick={click}
          handleChange={handleChange}
          addGuess={addGuess}
          guess={mapData}
          updateRoundStatus={updateRoundStatus}
        />
      </Box>
    </div>
  );
}

export default App;
