import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import getDirectionIcon from "../../helpers/getDirectionIcon";

export default function Guesses(props) {
  const guessData = props.data;

  //returns an icon component
  const distance = guessData.isCorrect ? 0 : guessData.distanceAway;
  const directionClue = getDirectionIcon(guessData.direction);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontWeight: "bold",
  }));

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ marginBottom: "5px", padding: "5px" }}
    >
      <Item sx={{ width: "55%" }}>{guessData.country}</Item>
      <Item sx={{ width: "30%" }}>{distance}km</Item>
      <Item sx={{ width: "15%" }}>{directionClue}</Item>
    </Stack>
  );
}
