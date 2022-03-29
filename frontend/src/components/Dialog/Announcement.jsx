import { useState, useEffect, forwardRef } from "react";
import { styled } from '@mui/material/styles';
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
  '& .MuiPaper-root': {
    backgroundColor: '#20202a',
    borderRadius: "15px",
    // Maybe not?
    border: "1px solid #4D4D75",
    // boxShadow: "0px 0px 10px 2px #9393C2"
  },
  '& .MuiButton-root': {
    backgroundColor: "#c9333b",
    '&:hover': {
      backgroundColor: "#AB151D",
    }
  },
}));

export default function Announcement(props) {

  console.log("hello")

  const { play, clearGuesses, createRound, modelState, gameData, setAnnouncementOpen, open } =
    props;

  //conditional text display logic for the button
  const buttonTitle =
    gameData.round === 1 ? "START" : `START ROUND ${gameData.round}`;

  // Round - 2 represents the previous round
  const currentStation = gameData.stations[gameData.round - 2];
  let roundTitle;
  let roundAnswer = "";
  let pinDistanceAway;
  let distanceAwayVisual;

  //fix this logic
  //can not define variables outside of conditions as undefined will throw errors
  if (gameData.round === 1) {
    roundTitle = "ROUND 1";
  } else if (
    gameData.guesses.length >= 1 &&
    gameData.guesses[gameData.guesses.length - 1].isCorrect
  ) {
    roundTitle = "NICE ONE!";
    roundAnswer = `You got it in ${gameData.guesses.length} ${gameData.guesses.length === 1? "guess" : "guesses"}. `;
    pinDistanceAway =
      gameData.guesses[gameData.guesses.length - 1].distanceAway;
    distanceAwayVisual = `📍${getTicksWithDistance(
      gameData.guesses[gameData.guesses.length - 1].distanceAway
    )}🌎`;
  } else if (
    gameData.guesses.length > 4 &&
    !gameData.guesses[gameData.guesses.length - 1].isCorrect
  ) {
    roundTitle = "OOPS... NOT QUITE";
    pinDistanceAway =
      gameData.guesses[gameData.guesses.length - 1].distanceAway;
    distanceAwayVisual = `📍${getTicksWithDistance(
      gameData.guesses[gameData.guesses.length - 1].distanceAway
    )}🌎`;
  }

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
      <CustomDialog
        open={open}
        TransitionComponent={Transition}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
      >
        {/* Dynamically generate round number */}
        <DialogTitle
          sx={{textShadow: "0 0 3px #c9333b, 0 0 5px #c9333b", letterSpacing: "2px" }}
        >{`${roundTitle}`}</DialogTitle>

        {gameData.round > 1 && (
          <DialogContent sx={{ m: "1", textAlign: "center" }}>
            <Typography>
              The correct answer was <strong>{currentStation.country}</strong>.{" "}
              {roundAnswer}
            </Typography>
            <Typography mt={1}>
              The station playing was <strong>{currentStation.station_title}</strong> in{" "}
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
