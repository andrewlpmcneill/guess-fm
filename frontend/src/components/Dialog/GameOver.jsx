import { useState } from "react";
import { styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import FinalScore from "./FinalScore";
import { DialogActions } from "@mui/material";
import { Button } from "@mui/material";


export default function GameOver(props) {
  // Props passed in to render Dialog box
  const {
    pause,
    updateResultsTable,
    clearScore,
    gameData,
    clearRound,
    clearGuesses,
    getGameStatistics,
    nextRound,
    createGame,
    modelState
  } = props;
  // Track whether or not the dialog box is open
  const [open, setOpen] = useState(true);

  const CustomDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiPaper-root": {
      backgroundColor: "#20202a",
      borderRadius: "15px",
      border: "1px solid #4D4D75",
      overflow: "hidden"
    },
    "& .MuiDialogTitle-root": {
      backgroundColor: "#20202a",
      color: "#c9333b",
      fontFamily: "Wild World",
      m: "auto",
      p: 2,
    },
    "& .MuiDialogContent-root": {
      color: "white",
    },
    "& .MuiButton-root": {
      backgroundColor: "#c9333b",
      "&:hover": {
        backgroundColor: "#AB151D",
      },
    },
  }));

  const handleClose = (userId) => {
    // Add results to table and pause music
    updateResultsTable(gameData.score);
    pause();
    // Clear guesses and rounds
    clearGuesses();
    clearScore();
    clearRound();
    // Create a new game in DB and go to next round 
    createGame(userId).then(() => {
      setOpen(false);
      // Slight delay before starting the next round
      setTimeout(() => {
        nextRound()
      }, 250);
    });
  };

  return (
    <div>
      <CustomDialog open={open} fullWidth sx={{border: "10px solid #4D4D75"}}>
        <DialogTitle sx={{ m: "auto", p: 2, fontFamily: "Wild World", textShadow: "0 0 3px #c9333b, 0 0 5px #c9333b", letterSpacing: "2px"}}>
          {"GAME OVER"}
        </DialogTitle>
        {/* Add margin around content */}
        <DialogContent sx={{ m: "1", textAlign: "center" }}>
          
          {/* <Typography>{`Your final score is ${gameData.score}/3.`}</Typography> */}
          <FinalScore gameData={gameData} getGameStatistics={getGameStatistics}/>
        </DialogContent>
        <DialogActions sx={{m: 'auto', paddingBottom: 2}} onClick={() => handleClose(modelState.userId)}>
          <Button variant="contained" sx={{fontFamily: 'Wild World'}} >
            {"PLAY AGAIN"}
          </Button>
        </DialogActions>
      </CustomDialog>
    </div>
  );
}
