import React from "react";
import GuessesItem from "./GuessesItem";
import styles from "./Guesses.module.css";
import { Box } from "@mui/material";

export default function Guesses(props) {
  const guessesData = props.data;

  const guesses = guessesData ? (
    guessesData.map((guess) => <GuessesItem key={guess.id} data={guess} />)
  ) : (
    <h3 className={styles.text}>No guesses currently</h3>
  );

  return (
    <Box>
      <h2 className={styles.text}>Guesses:</h2>
      {guesses}
    </Box>
  );
}
