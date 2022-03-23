import { useState, useEffect } from "react";
import Map from "./components/Map";
import "./App.css";
import Player from "./components/Player/index";
import Results from "./components/Results/index";
import { Box } from "@mui/material";
import Dialog from "./components/Dialog";
import useDisplayMode from "./hooks/useDisplayMode";
import useRoundData from "./hooks/useRoundData";
import useGuessesData from "./hooks/useGuessesData";
import usePlayerData from "./hooks/usePlayerData";
import getDistanceFromLatLonInKm from "./helpers/getDistanceFromCoords";
import axios from "axios";
import { getCompassDirection } from "geolib";

function App() {
  // Import state and functionality from useRoundData hook
  const { round, setRound, startGame } = useRoundData(0);

  // Needs to be trigged by guess button
  const updateRoundStatus = (guess) => {
    if (guesses.length === 4 || guess.distanceAway === 0) {
      setRound((prev) => prev + 1);
      setAudio();
    }
  };

  const [gameData, setGameData] = useState([])

  useEffect(() => {
    axios.get('/stations')
      .then(response => {
        console.log(response.data);
        setGameData(response.data);
      })
  }, [])

  const lookup = require('country-code-lookup')

  const [country, setCountry] = useState('');
  const [coords, setCoords] = useState([]);


  const validateGuess =  () => {
    
    let distanceAway, guessCountry, direction;
    
    if (lookup.byIso(country).country === gameData[round - 1].country) {
      distanceAway = 0;
      guessCountry = gameData[round - 1].country
      direction = ""
    }
    else {
      distanceAway = Math.round(getDistanceFromLatLonInKm(gameData[round - 1].longitude, gameData[round - 1].latitude, coords[0], coords[1]));
      guessCountry = lookup.byIso(country).country;
      direction = getCompassDirection(
        // guess coords
        { latitude: coords[0], longitude: coords[1] },
        // answer coords
        // Latitude = longitude and longitude = latitude (RADIO GARDEN ERROR)
        { latitude: gameData[round - 1].longitude, longitude: gameData[round - 1].latitude });
    }
    return({
      id: 1,
      distanceAway: distanceAway,
      direction: direction,
      country: guessCountry,
    })

  }

  // RESULTS STATE
  const [isDrawerOpen, setIsDrawerOpen, toggleDrawer] = useDisplayMode(false);

  // GUESSES STATE
  const { guesses, clearGuesses, addGuess } = useGuessesData([]);

  // MAP STATE
  const [mapData, setMapData] = useState();

  // PLAYER STATE
  const { playing, value, click, handleChange, play, pause } = usePlayerData();

  const setAudio = () => {
    console.log("ROUND:", round);
    setSource(gameData[round].mp3_link);

    
    
    document.getElementById("mp3Player").load();
  }

  const [source, setSource] = useState("")

  return (
    <div className="App">
      <h3>GUESS FM</h3>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Map setMapData={setMapData} gameData={gameData} setCountry={setCountry} country={country} coords={coords} setCoords={setCoords} />
        <Dialog
          setAudio={setAudio}
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
          gameData={gameData}
          validateGuess={validateGuess}
          updateRoundStatus={updateRoundStatus}
          source={source}
          setAudio={setAudio}
          round={round}
        />
      </Box>
    </div>
  );
}

export default App;
