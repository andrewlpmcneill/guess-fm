import { useState, useEffect } from "react";
import Instructions from "./Instructions";
import Announcement from "./Announcement";
import GameOver from "./GameOver";
import About from "./About";
import LifeTimeStats from "./LifeTimeStats";

export default function Dialog(props) {
  // Props passed in to render Dialog box
  const {
    modelState,
    play,
    pause,
    nextRound,
    clearGuesses,
    loadAudio,
    createGame,
    createRound,
    updateResultsTable,
    clearScore,
    gameData,
    clearRound,
    getGameStatistics,
    isAboutOpen,
    setIsAboutOpen,
    isStatsOpen,
    setIsStatsOpen,
    getLifeTimeStatistics,
    isInstructionsOpen,
    setIsInstructionsOpen,
    isAnnouncementOpen,
    setAnnouncementOpen,
  } = props;

  useEffect(() => {
    loadAudio(gameData.stations, gameData.round);
    if (gameData.round === 1 || gameData.round === 2 || gameData.round === 3) {
      setAnnouncementOpen(true);
    }
  }, [gameData.round]);


  return (
    <div>
      {isAboutOpen && (
        <About isAboutOpen={isAboutOpen} setIsAboutOpen={setIsAboutOpen} />
      )}
      <LifeTimeStats
        isStatsOpen={isStatsOpen}
        setIsStatsOpen={setIsStatsOpen}
        getLifeTimeStatistics={getLifeTimeStatistics}
        modelState={modelState}
      />
      {isInstructionsOpen && (
        <Instructions
          modelState={modelState}
          createGame={createGame}
          nextRound={nextRound}
          open={isInstructionsOpen}
          setIsInstructionsOpen={setIsInstructionsOpen}
        />
      )}
      {isAnnouncementOpen && (
        <Announcement
          open={isAnnouncementOpen}
          play={play}
          clearGuesses={clearGuesses}
          createRound={createRound}
          modelState={modelState}
          gameData={gameData}
          setAnnouncementOpen={setAnnouncementOpen}
        />
      )}
      {gameData.round > 3 && (
        <GameOver
          pause={pause}
          updateResultsTable={updateResultsTable}
          clearScore={clearScore}
          gameData={gameData}
          clearRound={clearRound}
          clearGuesses={clearGuesses}
          getGameStatistics={getGameStatistics}
          nextRound={nextRound}
          createGame={createGame}
          modelState={modelState}
        />
      )}
    </div>
  );
}
