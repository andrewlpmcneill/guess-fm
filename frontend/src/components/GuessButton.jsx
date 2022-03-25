import Button  from "@mui/material/Button";
import axios from "axios";

export default function GuessButton(props) {

 const { addGuess, guesses, updateRoundTable, setRound, loadAudio, round, coords, gameData, setScore, setIsDrawerOpen, setModelState, modelState } = props;

  const saveGuess = event => {
    event.preventDefault()
    // here gameData is referring to stations
    validateGuess(gameData, modelState, round)
      .then(guess => {
        addGuess(guess);
        if (guess.distanceAway === 0 || guesses.length === 4) {
          updateRoundTable(guesses.length === 4 ? "false" : "true");
          setRound(prev => prev + 1)
          loadAudio(gameData, round);
        }
      });
  }

  const validateGuess = async (stations, modelState, round) => {
    //round lat1 lng1 lat2 lgn2
    try {
      console.log("lat1, lat2", stations[round - 1], "coords", coords);

      const validatedGuessResponse = await axios.post("/guesses", {
        round_id: modelState.roundId, 
        lat1: stations[round - 1].latitude,
        lng1: stations[round - 1].longitude,
        lat2: coords[0],
        lng2: coords[1],
      });


      //rewards a point for correct guess
      if (validatedGuessResponse.data.distanceAway === 0) {
        setScore(prev => prev + 1);
      }

      //returns a valid guess response object
      setIsDrawerOpen(true);
      setModelState(prev => {
        return {...prev,
        guessId: validatedGuessResponse.data.id
        }
      })
      return validatedGuessResponse.data;
    } catch (err) {
      console.log(err);
    }
  };
  
  return(

    <Button fullWidth variant="contained" onClick={saveGuess}>
      Guess
    </Button>
  
  )



}
