import React from "react";
import GuessesItem from "./GuessesItem";
import styles from "./Guesses.module.css";
import { Box, Typography } from "@mui/material";

export default function Guesses(props) {
  const guessesData = props.data;

  const guesses = guessesData ? (
    guessesData.map((guess) => <GuessesItem key={guess.id} data={guess} />)
  ) : (
    <p className={styles.text}>No guesses currently</p>
  );

  return (
    <Box>
      <Typography sx={{fontFamily: 'Wild World'}} variant={'h4'}>Guesses:</Typography>
      {guesses}
    </Box>
  );
}
