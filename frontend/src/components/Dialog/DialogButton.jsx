import React from "react";
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

export default function DialogButton(props) {

  const { onClick } = props;

  return (
    <DialogActions sx={{m: 'auto', paddingBottom: 2}} onClick={onClick}>
      <Button variant="contained" sx={{fontFamily: 'Wild World'}} >
        {props.children}
      </Button>
    </DialogActions>
  )

}