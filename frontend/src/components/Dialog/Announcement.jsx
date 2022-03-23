import { useState, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Announcement(props) {
  // Set open to true for testing purposes
  const [open, setOpen] = useState(true);
  const { round, onClick, play, clearGuesses } = props;

  const handleClose = () => {
    setOpen(false);
    play();
    clearGuesses();
  };

  return (
    <div>
      {/* Customize materialUI dialog box to  slide up and size*/}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
        maxWidth={'xs'}
        onClick={onClick}
      >
        {/* Dynamically generate round number */}
        <DialogTitle sx={{m: 'auto', fontFamily: 'Wild World'}}>{`ROUND ${round}`}</DialogTitle>
        <DialogActions sx={{p: 2}}>
          <Button onClick={handleClose} variant="contained" sx={{m: 'auto', fontFamily: 'Wild World'}}>START</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}