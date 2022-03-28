import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import getDirectionIcon from "../../helpers/getDirectionIcon";
import CheckIcon from '@mui/icons-material/Check';

export default function Guesses(props) {
  const guessData = props.data;

  const country = guessData.fake ? "" : guessData.country;
  const distance = guessData.fake ? "" : guessData.isCorrect ? <CheckIcon/> : `${guessData.distanceAway}km`;
  const directionClue = guessData.fake ? "" :  getDirectionIcon(guessData.direction);

  //returns an icon component
  // const distance = guessData.isCorrect ? <CheckIcon/> : `${guessData.distanceAway}km`;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontWeight: "bold",
    minHeight: "46.02px",
    background: "rgba(32,32,42,0.5)"
  }));

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ marginBottom: "5px", padding: "5px" }}
    >
      <Item sx={{ width: "55%" }}>{country}</Item>
      <Item sx={{ width: "30%" }}>{distance}</Item>
      <Item sx={{ width: "15%" }}>{directionClue}</Item>
    </Stack>
  );
}
