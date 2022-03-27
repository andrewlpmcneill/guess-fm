import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import FinalScore from "./FinalScore";
import { DialogActions } from "@mui/material";
import { Button } from "@mui/material";


export default function GameOver(props) {
  // Props passed in to render Dialog box
  const { pause, updateResultsTable, clearScore, gameData, clearRound, getGameStatistics } = props;
  // Track whether or not the dialog box is open
  const [open, setOpen] = useState(true);


  const handleClose = () => {
    updateResultsTable(gameData.score);
    pause();
    clearRound();
    clearScore();
    setOpen(false);
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
