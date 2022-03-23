import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import DialogButton from './DialogButton'
import Instructions from './Instructions';
import Announcement from './Announcement';
import GameOver from './GameOver'

// Alter padding and styling of the content and bottom actions section of materialUI component
const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  '& .MuiDialogActions-root': {
    paddingBottom: theme.spacing(2),
    margin: 'auto'
  },
}));

// Customize the DialogTitle component
const CustomDialogTitle = (props) => {
  const { title } = props;

  return (
    // Centre with margin auto, add padding, customize fontFamily
    // **CHANGE FONT FAMILY CUSTOMIZATION IN THEME**
    <DialogTitle sx={{ m: 'auto', p: 2, fontFamily: 'Wild World' }} >
      {title}
    </DialogTitle>
  );
};

export default function CustomizedDialog(props) {
  // Props passed in to render Dialog box
  const { round, autoplay, resetGame, nextRound } = props;
  // Track whether or not the dialog box is open
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {round === 0 && <Instructions round={round} nextRound={nextRound} />}
      {round > 0 && round < 4 && <Announcement round={round} autoplay={autoplay} />}
      {round > 3 && <GameOver />} 
    </div>
  );
}