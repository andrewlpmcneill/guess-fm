import React from "react";
import GuessesItem from "./GuessesItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Guesses(props) {
  const guessesData = props.data;

  const tempData = [
    { id: "a", country: "", distanceAway: null, direction: "", fake: true },
    { id: "b", country: "", distanceAway: null, direction: "", fake: true },
    { id: "c", country: "", distanceAway: null, direction: "", fake: true },
    { id: "d", country: "", distanceAway: null, direction: "", fake: true },
    { id: "e", country: "", distanceAway: null, direction: "", fake: true },
  ];

  guessesData.forEach((guessItem, index) => {
    tempData[index] = guessItem;
  });

  const guesses = tempData.map((guess) => (
    <GuessesItem key={guess.id} data={guess} />
  ));

  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "Wild World",
          textAlign: "center",
          marginBottom: "1rem",
          paddingTop: "1rem",
          color: "#F2F2F2",
          textShadow: "3px 3px 4px black",
        }}
        variant="h6"
      >
        GUESSES
      </Typography>
      {guesses}
    </Box>
  );
}
