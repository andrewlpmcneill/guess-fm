import React from "react";
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';

export default function DialogButton(props) {

  const { onClick } = props;

  return (
      <Button variant="contained" onClick={onClick} sx={{fontFamily: 'Wild World'}} >
        {props.children}
      </Button>
  )

}