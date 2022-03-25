import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import DialogButton from './DialogButton'

export default function GameOver(props) {
  // Props passed in to render Dialog box
  const { pause, setRound, setScore, score, updateResultsTable } = props;
  // Track whether or not the dialog box is open
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    updateResultsTable(score)
    pause();
    setRound(0);
    setScore(0);
    // loadAudio(gameData, round);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        fullWidth
      >
        <DialogTitle sx={{ m: 'auto', p: 2, fontFamily: 'Wild World' }}>
          {"WELL PLAYED!"}
        </DialogTitle>
        {/* Add margin around content */}
        <DialogContent sx={{ m: '1', textAlign: 'center'}}>
          <Typography >
            {`Your final score is ${score}/3.`}
          </Typography>
        </DialogContent>
        <DialogButton onClick={handleClose}>{"PLAY AGAIN"}</DialogButton>
      </Dialog>
    </div>
  );
}