import Instructions from "./Instructions";
import Announcement from "./Announcement";
import GameOver from "./GameOver";

export default function Dialog(props) {
  // Props passed in to render Dialog box
  const {
    state,
    setState,
    round,
    play,
    pause,
    nextRound,
    clearGuesses,
    setAudio,
    setRound,
    game,
    setScore,
    score,
    startGame,
    startRound,
  } = props;

  return (
    <div>
      {round === 0 && (
        <Instructions
          state={state}
          setState={setState}
          startGame={startGame}
          round={round}
          nextRound={nextRound}
          setAudio={setAudio}
          setRound={setRound}
          game={game}
        />
      )}
      {round === 1 && (
        <Announcement
          round={round}
          play={play}
          clearGuesses={clearGuesses}
          startRound={startRound}
        />
      )}
      {round === 2 && (
        <Announcement
          open={true}
          round={round}
          play={play}
          clearGuesses={clearGuesses}
          setAudio={setAudio}
          startRound={startRound}
        />
      )}
      {round === 3 && (
        <Announcement
          open={true}
          round={round}
          play={play}
          clearGuesses={clearGuesses}
          setAudio={setAudio}
          startRound={startRound}
        />
      )}
      {round > 3 && (
        <GameOver
          pause={pause}
          setAudio={setAudio}
          setRound={setRound}
          setScore={setScore}
          score={score}
        />
      )}
    </div>
  );
}
