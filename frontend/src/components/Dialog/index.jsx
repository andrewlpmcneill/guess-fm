import { useState, useEffect } from 'react';
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

  useEffect(() => {
    loadAudio(gameData.stations, gameData.round)
    if (gameData.round === 1 || gameData.round === 2 || gameData.round === 3) {
      setAnnouncementOpen(true);
    }
  }, [gameData.round])

  const [ isAnnouncementOpen, setAnnouncementOpen ] = useState(false)

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
      {isAnnouncementOpen && (
        <Announcement
          open={isAnnouncementOpen}
          round={round}
          play={play}
          clearGuesses={clearGuesses}
          createRound={createRound}
          modelState={modelState}
          stations={stations}
          gameData={gameData}
          setAnnouncementOpen={setAnnouncementOpen}
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
