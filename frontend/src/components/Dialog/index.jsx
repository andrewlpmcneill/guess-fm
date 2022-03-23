import Instructions from './Instructions';
import Announcement from './Announcement';
import GameOver from './GameOver'

export default function Dialog(props) {
  // Props passed in to render Dialog box
  const { round, autoplay, resetGame, nextRound, clearGuesses } = props;

  return (
    <div>
      {round === 0 && <Instructions resetGame={resetGame} round={round} nextRound={nextRound} />}
      {round === 1 && <Announcement round={round} autoplay={autoplay} clearGuesses={clearGuesses} />}
      {round === 2 && <Announcement open={true} round={round} autoplay={autoplay} clearGuesses={clearGuesses}/>}
      {round === 3 && <Announcement open={true} round={round} autoplay={autoplay} clearGuesses={clearGuesses}/>}
      {round > 3 && <GameOver resetGame={resetGame}/>} 
    </div>
  );
}