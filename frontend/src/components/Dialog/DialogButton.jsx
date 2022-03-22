import React from "react";
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

export default function DialogButton(props) {

  const { onClick, action } = props;

  return (
    <DialogActions onClick={onClick}>
      <Button variant="contained" sx={{fontFamily: 'Wild World'}} >
        {action}
      </Button>
    </DialogActions>
  )

}