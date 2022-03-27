import { useEffect } from 'react';
import Instructions from "./Instructions";
import Announcement from "./Announcement";
import GameOver from "./GameOver";
import About from "./About"

export default function Dialog(props) {
  // Props passed in to render Dialog box
  const {
    modelState,
    setModelState,
    round,
    play,
    pause,
    nextRound,
    clearGuesses,
    loadAudio,
    stations,
    setRound,
    game,
    setScore,
    score,
    createGame,
    createRound,
    updateResultsTable, 
    clearScore, 
    gameData,
    setGameData,
    clearRound,
    getGameStatistics,
    isAboutOpen,
    setIsAboutOpen,
    isInstructionsOpen,
    setIsInstructionsOpen,
  } = props;

  return (
    <div>
      {setIsAboutOpen && <About isAboutOpen={isAboutOpen} setIsAboutOpen={setIsAboutOpen} />}
      {isInstructionsOpen && (
        <Instructions
          modelState={modelState}
          setModelState={setModelState}
          createGame={createGame}
          round={round}
          nextRound={nextRound}
          loadAudio={loadAudio}
          setRound={setRound}
          game={game}
          stations={stations}
          gameData={gameData}
          setGameData={setGameData}
          setIsInstructionsOpen={setIsInstructionsOpen}
        />
      )}
      {gameData.round === 1 && (
        <Announcement
          round={round}
          play={play}
          clearGuesses={clearGuesses}
          createRound={createRound}
          modelState={modelState}
          stations={stations}
          gameData={gameData}
        />
      )}
      {gameData.round === 2 && (
        <Announcement
          open={true}
          round={round}
          play={play}
          clearGuesses={clearGuesses}
          loadAudio={loadAudio}
          createRound={createRound}
          modelState={modelState}
          stations={stations}
          gameData={gameData}
        />
      )}
      {gameData.round === 3 && (
        <Announcement
          open={true}
          round={round}
          play={play}
          clearGuesses={clearGuesses}
          loadAudio={loadAudio}
          createRound={createRound}
          modelState={modelState}
          stations={stations}
          gameData={gameData}
        />
      )}
      {gameData.round > 3 && (
        <GameOver
          pause={pause}
          loadAudio={loadAudio}
          setRound={setRound}
          setScore={setScore}
          score={score}
          updateResultsTable={updateResultsTable}
          modelState={modelState}
          stations={stations}
          gameData={gameData}
          clearScore={clearScore}
          clearRound={clearRound}
          clearGuesses={clearGuesses}
          getGameStatistics={getGameStatistics}
          nextRound={nextRound}
          createGame={createGame}
        />
      )}
    </div>
  );
}
