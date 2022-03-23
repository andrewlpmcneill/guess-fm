import { useState } from "react";
import Map from "./components/Map";
import "./App.css";
import Player from "./components/Player/index";
import Results from "./components/Results/index";
import { Box } from "@mui/material";
import Dialog from "./components/Dialog";

const DUMMY_GUESSES_DATA = [
  { id: 1, country: "Singapore", distanceAway: 4500, direction: "N" },
  { id: 2, country: "Zimbabwe", distanceAway: 6000, direction: "S" },
  { id: 3, country: "Monstserrat", distanceAway: 3200, direction: "SW" },
  { id: 4, country: "Italy", distanceAway: 1800, direction: "NE" },
  { id: 5, country: "Norway", distanceAway: 0, direction: "" },
];

function App() {
  // ROUND STATE
  const [round, setRound] = useState(0);

  const resetGame = () => {
    setRound(1);
  };

  const autoplay = () => {
    player.play();
  };

  // Needs to be trigged by guess button
  const updateRoundStatus = (guess) => {
    console.log(guess)
    if (guesses.length === 4 || guess.distanceAway === 0) {
      setRound((prev) => prev + 1);
    }
  };

  // RESULTS STATE
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(true);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  // GUESSES STATE
  const [guesses, setGuesses] = useState([]);

  const clearGuesses = () => {
    setGuesses([]);
  };
  const addGuess = (guess) => {
    setGuesses((prev) => [...prev, guess]);
  };

  // MAP STATE
  const [mapData, setMapData] = useState();

  // PLAYER STATE
  const [playing, setPlaying] = useState(true);
  const [value, setValue] = useState(30);
  const player = document.getElementById("mp3Player");

  const click = () => {
    if (playing) {
      setPlaying(false);
      player.pause();
      return;
    }
    setPlaying(true);
    player.play();
    return;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    player.volume = newValue / 100;
  };
  //

  return (
    <div className="App">
      <h3>GUESS FM</h3>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Map setMapData={setMapData} />
        <Dialog
          round={round}
          autoplay={autoplay}
          resetGame={resetGame}
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
