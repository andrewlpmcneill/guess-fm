import Instructions from './Instructions';
import Announcement from './Announcement';
import GameOver from './GameOver'

export default function Dialog(props) {
  // Props passed in to render Dialog box
  const { round, play, pause, startGame, nextRound, clearGuesses } = props;

  return (
    <div>
      {round === 0 && <Instructions startGame={startGame} round={round} nextRound={nextRound} />}
      {round === 1 && <Announcement round={round} play={play} clearGuesses={clearGuesses} />}
      {round === 2 && <Announcement open={true} round={round} play={play} clearGuesses={clearGuesses}/>}
      {round === 3 && <Announcement open={true} round={round} play={play} clearGuesses={clearGuesses}/>}
      {round > 3 && <GameOver startGame={startGame} pause={pause} />} 
    </div>
  );
}