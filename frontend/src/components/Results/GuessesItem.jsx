import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import React from "react";


export default function Guesses(props) {
  const guessData = props.data;

  const directionClue = guessData.direction ? guessData.direction : "✔";
  
  const countryStyle = {
    border: 1,
    borderRadius: "5px",
    padding: "6px 13px 6px 13px",
    margin: "2px 4px",
    width: "55%",
    height: "100%",
    textAlign: 'center'
  }

  const distanceStyle = {
    border: 1,
    borderRadius: "5px",
    padding: "6px 13px 6px 13px",
    margin: "2px 4px",
    width: "30%",
    height: "100%",
    textAlign: 'center'

  }

  const directionStyle = {
    border: 1,
    borderRadius: "5px",
    padding: "6px 13px 6px 13px",
    margin: "2px 4px",
    width: "15%",
    height: "100%",
    textAlign: 'center'

  }

  return (

    <Stack direction="row" spacing={1} sx={{marginBottom: '5px'}}>
      <Box sx={countryStyle}>{guessData.country}</Box>
      <Box sx={distanceStyle}>{guessData.distanceAway}km</Box>
      <Box sx={directionStyle}>{directionClue}</Box>

    </Stack>

  );
}
