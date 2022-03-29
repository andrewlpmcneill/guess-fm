import { useState, useEffect, forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { CircularProgress, DialogContent, Typography } from "@mui/material";
import getTicksWithDistance from "../../helpers/getTicksWithDistance";

// Sliding up transition component, passed to dialog box
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "#20202a",
    borderRadius: "15px",
    // Maybe not?
    border: "1px solid #4D4D75",
    // boxShadow: "0px 0px 10px 2px #9393C2"
  },
  "& .MuiButton-root": {
    backgroundColor: "#c9333b",
    "&:hover": {
      backgroundColor: "#AB151D",
    },
  },
}));

export default function Announcement(props) {
  
  // Set short buffer on play button to give audio player time to load
  const [buffer, setBuffer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBuffer(false);
    }, 1000);
  }, []);

  const {
    play,
    clearGuesses,
    createRound,
    modelState,
    gameData,
    setAnnouncementOpen,
    open,
  } = props;
  
  const numberOfGuesses = gameData.guesses.length;

  //sets button text
  const buttonTitle =
  gameData.round === 1 ? "START" : `START ROUND ${gameData.round}`;

  
  //sets round results data
  const currentStation = gameData.stations[gameData.round - 2];
  const roundTitle =
  gameData.round === 1
  ? "ROUND 1"
    : gameData.guesses[numberOfGuesses - 1].isCorrect
    ? "NICE ONE!"
    : "OOPS... NOT QUITE";
    
  
  const roundAnswer =
    numberOfGuesses >= 1 &&
    gameData.guesses[numberOfGuesses - 1].isCorrect
      ? `You got it in ${numberOfGuesses} ${
          numberOfGuesses === 1 ? "guess" : "guesses"
        }. `
      : "";

  const pinDistanceAway =
    numberOfGuesses >= 1
      ? gameData.guesses[numberOfGuesses - 1].distanceAway
      : "";

  const distanceAwayVisual =
    numberOfGuesses >= 1
      ? `📍${getTicksWithDistance(
          gameData.guesses[numberOfGuesses - 1].distanceAway
        )}🌎`
      : "";


  // On close of round announcement - play audio and clear previous guesses
  const handleClose = () => {
    setAnnouncementOpen(false);
    clearGuesses();
    createRound(
      modelState.userId,
      modelState.gameId,
      // Can we clean this up?
      gameData.stations[gameData.round - 1].id
    ).then(() => {
      play();
    });
  };


  return (
    <div>
      {/* Customize materialUI dialog box to  slide up and size*/}
      <CustomDialog
        open={open}
        TransitionComponent={Transition}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
      >
        {/* Dynamically generate round number */}
        <DialogTitle
          sx={{
            textShadow: "0 0 3px #c9333b, 0 0 5px #c9333b",
            letterSpacing: "2px",
          }}
        >{`${roundTitle}`}</DialogTitle>

        {gameData.round > 1 && (
          <DialogContent sx={{ m: "1", textAlign: "center" }}>
            <Typography>
              The correct answer was <strong>{currentStation.country}</strong>.{" "}
              {roundAnswer}
            </Typography>
            <Typography mt={1}>
              The station playing was{" "}
              <strong>{currentStation.station_title}</strong> in{" "}
              <strong>{currentStation.city}.</strong>
            </Typography>
            <Typography mt={1}>
              Your pin was <strong>{pinDistanceAway} km</strong> away.
            </Typography>
            <Typography mt={1}>{distanceAwayVisual}</Typography>
          </DialogContent>
        )}

        <DialogActions sx={{ p: 2 }}>
          {buffer ? (
            <CircularProgress sx={{ m: "auto", color: "#4D4D75" }} />
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
      </CustomDialog>
    </div>
  );
}
