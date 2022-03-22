import React from "react";
import GuessesItem from "./GuessesItem";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";

export default function Guesses(props) {
  const guessesData = props.data;

  const guesses = guessesData ? (
    guessesData.map((guess) => <GuessesItem key={guess.id} data={guess} />)
  ) : (
    <Typography sx={{ textAlign: "center" }}>No guesses currently</Typography>
  );

  return (
    <Box sx={{ height: "70%" }}>
      <Typography
        sx={{ fontFamily: "Wild World", textAlign: "center", marginBottom: '10px' }}
        variant={"h4"}
      >
        GUESSES
      </Typography>
      {guesses}
    </Box>
  );
}
