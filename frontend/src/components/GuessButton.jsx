import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import axios from "axios";

export default function GuessButton(props) {
  const {
    addGuess,
    updateRoundTable,
    setModelState,
    modelState,
    gameData,
    addScore, 
    nextRound
  } = props;

  const saveGuess = (event) => {
    event.preventDefault();
    validateGuess(gameData.stations, modelState, gameData.round, gameData.coords).then((guess) => {
      addGuess(guess);
      if (guess.isCorrect || gameData.guesses.length === 4) {
        updateRoundTable(gameData.guesses.length === 4 ? "false" : "true");
        setTimeout(() => {
          nextRound()}, 250);
      }
    });
  };

  const validateGuess = async (stations, modelState, round, coords) => {
    //round lat1 lng1 lat2 lgn2
    try {
      const validatedGuessResponse = await axios.post("/guesses", {
        round_id: modelState.roundId,
        lat1: stations[round - 1].latitude,
        lng1: stations[round - 1].longitude,
        lat2: coords[0],
        lng2: coords[1],
      });

      //rewards a point for correct guess
      if (validatedGuessResponse.data.isCorrect) {
        // setScore((prev) => prev + 1);
        addScore();
      }

      //returns a valid guess response object
      setModelState((prev) => {
        return { ...prev, guessId: validatedGuessResponse.data.id };
      });
      return validatedGuessResponse.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (

    <Button fullWidth variant="contained" onClick={saveGuess} sx={{ background: "#C9333B" }}>
      Guess
    </Button>
  
  );
}
