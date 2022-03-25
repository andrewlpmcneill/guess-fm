import Map from "./components/Map";
import "./App.css";
import Player from "./components/Player/index";
import Results from "./components/Results/index";
import GuessButton from "./components/GuessButton"
import { Box, Stack } from "@mui/material";
import Dialog from "./components/Dialog";
import useDisplayMode from "./hooks/useDisplayMode";
import useGameData from "./hooks/useGameData";
import usePlayerData from "./hooks/usePlayerData";
import useModelData from "./hooks/useModelData";

function App() {
  // Import state and functionality from useRoundData hook
  // const { round, setRound, startGame } = useRoundData(0);
  
  const { modelState, setModelState, createGame, updateResultsTable, updateRoundTable, createRound } = useModelData() 
  
  
  
  // RESULTS STATE
  const [isDrawerOpen, setIsDrawerOpen, toggleDrawer] = useDisplayMode(false);

  // GAME STATE
  const { guesses, clearGuesses, addGuess, score, setScore, game, round, setRound, gameData, coords, setCoords } = useGameData([]);

  // PLAYER STATE
  const { playing, volume, click, handleChange, play, pause, source, loadAudio } = usePlayerData();
   






  return (
    <div className="App">
      <h3>GUESS FM</h3>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Map
        gameData={gameData}
        coords={coords}
        setCoords={setCoords}
      />
        <Dialog
          loadAudio={loadAudio}
          setRound={setRound}
          round={round}
          play={play}
          pause={pause}
          game={game}
          guesses={guesses}
          clearGuesses={clearGuesses}
          setScore={setScore}
          score={score}
          modelState={modelState}
          setModelState={setModelState}
          createGame={createGame}
          createRound={createRound}
          updateResultsTable={updateResultsTable}
          gameData={gameData}
        />
        <Results
          guesses={guesses}
          onDrawerToggle={toggleDrawer}
          isDrawerOpen={isDrawerOpen}
          score={score}
        />
        <Stack
          direction="row"
          m="0 2em"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Player
            volume={volume}
            playing={playing}
            handleClick={click}
            handleChange={handleChange}
            addGuess={addGuess}
            gameData={gameData}
            source={source}
            round={round}
          />
          <GuessButton
            addGuess={addGuess}
            guesses={guesses}
            updateRoundTable={updateRoundTable}
            round={round}
            setRound={setRound}
            loadAudio={loadAudio}
            coords={coords}
            gameData={gameData}
            setScore={setScore}
            setIsDrawerOpen={setIsDrawerOpen}
            setModelState={setModelState}
            modelState={modelState}
          />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
