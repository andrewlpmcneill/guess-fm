import Map from "./components/Map";
import "./App.css";
import Player from "./components/Player/index";
import Results from "./components/Results/index";
import GuessButton from "./components/GuessButton";
import { Box, Stack } from "@mui/material";
import Dialog from "./components/Dialog";
import useDisplayMode from "./hooks/useDisplayMode";
import useGameData from "./hooks/useGameData";
import usePlayerData from "./hooks/usePlayerData";
import useModelData from "./hooks/useModelData";

function App() {
  // DATABASE STATE AND FUNCTIONS
  const {
    modelState,
    setModelState,
    createGame,
    updateResultsTable,
    updateRoundTable,
    createRound,
    getGameStatistics
  } = useModelData();

  // TOGGLE DISPLAY STATE
  const [isDrawerOpen, setIsDrawerOpen, toggleDrawer] = useDisplayMode(false);

  // GAME STATE
  const {
    clearGuesses,
    addGuess,
    gameData,
    setGameData,
    addScore,
    clearScore,
    nextRound,
    clearRound,
    assignCoords,
  } = useGameData([]);

  // PLAYER STATE
  const {
    playing,
    volume,
    click,
    handleChange,
    play,
    pause,
    source,
    loadAudio,
    setPlaying
  } = usePlayerData();

  return (
    <div className="App">
      <h3>GUESS FM</h3>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Map gameData={gameData} assignCoords={assignCoords} />
        <Dialog
          loadAudio={loadAudio}
          play={play}
          pause={pause}
          clearGuesses={clearGuesses}
          gameData={gameData}
          setGameData={setGameData}
          modelState={modelState}
          setModelState={setModelState}
          createGame={createGame}
          createRound={createRound}
          updateResultsTable={updateResultsTable}
          clearScore={clearScore}
          clearRound={clearRound}
          nextRound={nextRound}
          getGameStatistics={getGameStatistics}
        />
        <Results
          guesses={gameData.guesses}
          gameData={gameData}
          setGameData={setGameData}
          onDrawerToggle={toggleDrawer}
          isDrawerOpen={isDrawerOpen}
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
            source={source}
            setPlaying={setPlaying}
          />
          <GuessButton
            addGuess={addGuess}
            gameData={gameData}
            updateRoundTable={updateRoundTable}
            loadAudio={loadAudio}
            addScore={addScore}
            setIsDrawerOpen={setIsDrawerOpen}
            setModelState={setModelState}
            modelState={modelState}
            setGameData={setGameData}
            nextRound={nextRound}
          />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
