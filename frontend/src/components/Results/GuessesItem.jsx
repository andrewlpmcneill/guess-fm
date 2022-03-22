import { Box, Stack } from "@mui/material";
import React from "react";


export default function Guesses(props) {
  const guessData = props.data;

  const directionClue = guessData.direction ? guessData.direction : "✔";
  
  const countryTheme = {
    border: 1,
    borderRadius: "5px",
    padding: "6px 13px 6px 13px",
    margin: "2px 4px",
    width: "55%",
    height: "100%"
  }

  const distanceTheme = {
    border: 1,
    borderRadius: "5px",
    padding: "6px 13px 6px 13px",
    margin: "2px 4px",
    width: "30%",
    height: "100%"

  }

  const directionTheme = {
    border: 1,
    borderRadius: "5px",
    padding: "6px 13px 6px 13px",
    margin: "2px 4px",
    width: "15%",
    height: "100%"

  }

  return (

    <Stack direction="row" spacing={1}>
      <Box sx={countryTheme}>{guessData.country}</Box>
      <Box sx={distanceTheme}>{guessData.distanceAway}km</Box>
      <Box sx={directionTheme}>{directionClue}</Box>

    </Stack>

  );
}
