import React from "react";
import GuessesItem from "./GuessesItem";
import { Box, Typography } from "@mui/material";

export default function Guesses(props) {
  const guessesData = props.data;

  const guesses = guessesData ? (
    guessesData.map((guess) => <GuessesItem key={guess.id} data={guess} />)
  ) : (
    <Typography >No guesses currently</Typography>
  );

  return (
    <Box sx={{height: "70%"}}>
      <Typography sx={{fontFamily: 'Wild World'}} variant={'h4'}>GUESSES:</Typography>
      {guesses}
    </Box>
  );
}
