import { useState, useEffect, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { CircularProgress } from "@mui/material";

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
        >{`ROUND ${gameData.round}`}</DialogTitle>
        <DialogActions sx={{ p: 2 }}>
          {buffer ? (
            <CircularProgress sx={{ m: "auto" }} />
          ) : (
            <Button
              onClick={handleClose}
              variant="contained"
              sx={{ m: "auto", fontFamily: "Wild World" }}
            >
              START
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
