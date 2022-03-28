import React from "react";
import GuessesItem from "./GuessesItem";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";

export default function Guesses(props) {
  const guessesData = props.data;
  
  const tempData = [
    {id: "a", country: "", distanceAway: null, direction:"", fake: true},
    {id: "b", country: "", distanceAway: null, direction:"", fake: true},
    {id: "c", country: "", distanceAway: null, direction:"", fake: true},
    {id: "d", country: "", distanceAway: null, direction:"", fake: true},
    {id: "e", country: "", distanceAway: null, direction:"", fake: true}
  ]

  guessesData.forEach((guessItem, index) => {
    tempData[index] = guessItem
  })

  const guesses = tempData.map(guess => <GuessesItem key={guess.id} data={guess} />)

  // const guesses = guessesData ? (
  //   guessesData.map((guess) => <GuessesItem key={guess.id} data={guess} />)
  // ) : "";


  return (
    <Box sx={{ height: "70%" }}>
      <Typography
        sx={{ fontFamily: "Wild World", textAlign: "center", marginBottom: '1rem', marginTop: '1rem', color:"#F2F2F2" }}
        variant={"h5"}
      >
        GUESSES
      </Typography>
      {guesses}
    </Box>
  );
}
