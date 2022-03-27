import { useState } from "react";
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
    loadAudio,
    nextRound,
    createGame
  } = props;
  // Track whether or not the dialog box is open
  const [open, setOpen] = useState(true);


  const handleClose = (userId) => {
    // Add results to table and pause music
    updateResultsTable(gameData.score);
    pause();
    // Clear guesses and rounds
    clearGuesses();
    clearScore();
    clearRound();
    // Round needs to be hardcoded to 0 in order to properly load first station
    loadAudio(gameData.stations, 0);
    // Create a new game in DB and go to next round 
    createGame(userId).then(() => {
      nextRound();
      setOpen(false);
    });
    
  };


  return (
    <div>
      <Dialog open={open} fullWidth>
        <DialogTitle sx={{ m: "auto", p: 2, fontFamily: "Wild World" }}>
          {"WELL PLAYED!"}
        </DialogTitle>
        {/* Add margin around content */}
        <DialogContent sx={{ m: "1", textAlign: "center" }}>
          
          {/* <Typography>{`Your final score is ${gameData.score}/3.`}</Typography> */}
          <FinalScore gameData={gameData} getGameStatistics={getGameStatistics}/>
        </DialogContent>
        <DialogActions sx={{m: 'auto', paddingBottom: 2}} onClick={handleClose}>
          <Button variant="contained" sx={{fontFamily: 'Wild World'}} >
            {"PLAY AGAIN"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
