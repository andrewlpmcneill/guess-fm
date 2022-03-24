import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import DialogButton from './DialogButton'

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
      {props.children}
    </DialogTitle>
  );
};

export default function Instructions(props) {
  // Props passed in to render Dialog box
  const { setAudio, setRound } = props;
  // Track whether or not the dialog box is open
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setAudio();
    setRound(1);
    setOpen(false);
  };

  return (
    <div>
      <CustomDialog
        open={open}
        fullWidth
      >
        <CustomDialogTitle id="customized-dialog-title">
          {"WELCOME TO GUESS FM"}
        </CustomDialogTitle>
        {/* Add margin around content */}
        <DialogContent sx={{ m: 1}}>
          <Typography >
            {"HOW TO PLAY: "}
          </Typography>
          <Typography >
            {"📡 - A random radio station from somewhere in the world will play."}
          </Typography>
          <Typography >
            {"🏴‍☠️ - You get 5 tries to guess what country it’s in."}
          </Typography>
          <Typography >
            {"3️⃣ - Repeat for 2 more stations to get your score out of 3!"}
          </Typography>
        </DialogContent>
        <DialogButton onClick={handleClose}>{"START GAME"}</DialogButton>
      </CustomDialog>
    </div>
  );
}