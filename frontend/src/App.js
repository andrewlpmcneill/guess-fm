import { useState, useEffect } from "react";
import Map from "./components/Map";
import "./App.css";
import Player from "./components/Player/index";
import Results from "./components/Results/index";
import { Box } from "@mui/material";
import Dialog from "./components/Dialog";
import useDisplayMode from "./hooks/useDisplayMode";
import useGuessesData from "./hooks/useGuessesData";
import usePlayerData from "./hooks/usePlayerData";
import getDistanceFromLatLonInKm from "./helpers/getDistanceFromCoords";
import axios from "axios";
import { getCompassDirection } from "geolib";

function App() {
  // Import state and functionality from useRoundData hook
  // const { round, setRound, startGame } = useRoundData(0);
  const [state, setState] = useState({
    playerId: null,
    gameId: null,
    resultsId: null,
    stationId: null,
    roundId: null,
    guessId: null,
  })

  // Needs to be trigged by guess button
  const updateRoundStatus = (guess) => {
    if (guesses.length === 4 || guess.distanceAway === 0) {
      setRound((prev) => prev + 1);
      setAudio();
    }
  };

  const startGame = async() => {

    try {
      // Create game and grab game ID from the response
      const postGame = await axios.post("/games", { creator_id: 1})
      const gameId = postGame.data.id;
      // Create result entry and grab result ID from the response
      const postResult = await axios.post("/results", {
        user_id: 1,
        game_id: postGame.data.id
      })
      const resultsId = postResult.data.id;
      // Set the radio stations for the game, start the game in round 1 and set state object
      setAudio();
      setRound(1);
      setState((prev) => {
        return {...prev,
          gameId,
          resultsId,
          userId: 1,}
      });  
    } catch(err){
      console.log(err)
    }

  }

  const startRound = async() => {

    try {
      const postRound = await axios.post("/rounds", { 
        user_id: state.userId, 
        game_id: state.gameId,
        station_id: gameData[0].id,
      })
      const stationId = postRound.data.station_id;
      const roundId = postRound.data.id;
      play();
      clearGuesses();
      setState((prev) => {
        return {...prev, 
        stationId,
        roundId
      }
      })
    } catch(err) {
      console.log(err)
    }
  }
  

  // API CALL TO UPDATE ROUNDS TABLE
  const updateRoundTable = result => {
    axios.patch('/rounds', { result: null, roundID: state.roundId });
  };

  // API CALL TO UPDATE RESULTS TABLE
  const updateResultsTable = result => {
    axios.patch('/results', { results: null, game_id: state.gameId, user_id: state.playerId })
  };

  const [game, setGame] = useState(0);
  const [round, setRound] = useState(0);
  const [gameData, setGameData] = useState([])

  useEffect(() => {
    if (round === 1) setGame(prev => prev + 1);
  }, [round])

  useEffect(() => {
    if (game !== 1) {
      axios.get('/stations')
        .then(response => {
          console.log(response.data);
          setGameData(response.data);
        })
    }
  }, [game])

  const lookup = require('country-code-lookup')

  const [country, setCountry] = useState('');
  const [coords, setCoords] = useState([]);


  const validateGuess =  () => {
    
    let distanceAway, guessCountry, direction;
    
    if (lookup.byIso(country).country === gameData[round - 1].country) {
      distanceAway = 0;
      guessCountry = gameData[round - 1].country
      direction = ""

      //set new score
      setScore(prev => prev + 1)
    }
    else {
      distanceAway = Math.round(getDistanceFromLatLonInKm(gameData[round - 1].latitude, gameData[round - 1].longitude, coords[0], coords[1]));
      guessCountry = lookup.byIso(country).country;
      direction = getCompassDirection(
        // guess coords
        { latitude: coords[0], longitude: coords[1] },
        // answer coords
        // Latitude = longitude and longitude = latitude (RADIO GARDEN ERROR)
        { latitude: gameData[round - 1].latitude, longitude: gameData[round - 1].longitude });
    }

    setIsDrawerOpen(true);

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
  const { guesses, clearGuesses, addGuess, score, setScore } = useGuessesData([]);

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
          setRound={setRound}
          round={round}
          play={play}
          pause={pause}
          game={game}
          guesses={guesses}
          clearGuesses={clearGuesses}
          setScore={setScore}
          score={score}
          state={state}
          setState={setState}
          startGame={startGame}
          startRound={startRound}
        />
        <Results
          guesses={guesses}
          onDrawerToggle={toggleDrawer}
          isDrawerOpen={isDrawerOpen}
          score={score}
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
