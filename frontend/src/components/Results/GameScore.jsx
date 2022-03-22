import React from "react";
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"


export default function GameScore(props) {
  const score = props.data ? props.data : 0;

  return (

    <Stack direction="column">
      <Typography sx={{fontFamily: 'Wild World'}} variant={'h4'}>CURRENT SCORE:</Typography>
      <Typography>{score}/3</Typography>
    </Stack>
  );
}
