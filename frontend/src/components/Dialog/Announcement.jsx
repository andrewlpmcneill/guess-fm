import { useState, useEffect, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { CircularProgress, DialogContent, Typography } from "@mui/material";
import getTicksWithDistance from "../../helpers/getTicksWithDistance"

// Sliding up transition component, passed to dialog box
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Announcement(props) {
  // Set open to true for testing purposes
  const [open, setOpen] = useState(true);
  const {
    onClick,
    play,
    clearGuesses,
    createRound,
    modelState,
    gameData
  } = props;


  //dialog box triggers on correct guess or after 5guesses
  const buttonTitle = gameData.round === 1? "START" : `START ROUND ${gameData.round}`
  const answer = gameData.stations[gameData.round -2]
  let roundTitle;
  let roundAnswer = "";
  let pinDistanceAway;
  let distanceAwayVisual;
  


  if(gameData.round === 1){
    roundTitle = "ROUND 1"
  }else if (gameData.guesses.length >= 1 && gameData.guesses[gameData.guesses.length -1 ].isCorrect){
    // let dataRound = gameData.round === 2 ? 1 : 2;
    roundTitle = "NICE ONE!"
    roundAnswer = `You got it in ${gameData.guesses.length} guesses. `
    pinDistanceAway = gameData.guesses[gameData.guesses.length - 1].distanceAway
    distanceAwayVisual = `📍${getTicksWithDistance(gameData.guesses[gameData.guesses.length - 1].distanceAway)}🌎`

  }else if(gameData.guesses.length > 4 && !gameData.guesses[gameData.guesses.length -1 ].isCorrect){
    roundTitle = "OOPS... NOT QUITE"
    pinDistanceAway = gameData.guesses[gameData.guesses.length - 1].distanceAway
    distanceAwayVisual = `📍${getTicksWithDistance(gameData.guesses[gameData.guesses.length - 1].distanceAway)}🌎`
  }

  


  // On close of round announcement - play audio and clear previous guesses
  const handleClose = () => {
    setOpen(false);
    createRound(
      modelState.userId,
      modelState.gameId,
      // Can we clean this up?
      gameData.stations[gameData.round - 1].id
    ).then(() => {
      play();
      clearGuesses();
    });
  };

  // Set short buffer on play button to give audio player time to load
  const [buffer, setBuffer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBuffer(false);
    }, 1000);
  }, []);

  return (
    <div>
      {/* Customize materialUI dialog box to  slide up and size*/}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
        maxWidth={"xs"}
        onClick={onClick}
      >
        {/* Dynamically generate round number */}
        <DialogTitle
          sx={{ m: "auto", fontFamily: "Wild World" }}
        >{`${roundTitle}`}</DialogTitle>
        
        {gameData.round > 1 
        &&
        <DialogContent sx={{ m: "1", textAlign: "center" }}>
          <Typography>The correct answer was <strong>{answer.country}</strong>. {roundAnswer}</Typography>
          <Typography mt={1}>The station playing was <strong>{answer.station_title}</strong> in <strong>{answer.city}</strong></Typography>
          <Typography mt={1}>Your pin was <strong>{pinDistanceAway} km</strong> away.</Typography>
          <Typography mt={1}>{distanceAwayVisual}</Typography>
        </DialogContent>}
        
        <DialogActions sx={{ p: 2 }}>
          {buffer ? (
            <CircularProgress sx={{ m: "auto" }} />
          ) : (
            <Button
              onClick={handleClose}
              variant="contained"
              sx={{ m: "auto", fontFamily: "Wild World" }}
            >
              {buttonTitle}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
