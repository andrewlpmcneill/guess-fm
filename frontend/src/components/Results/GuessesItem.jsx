import React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import getDirectionIcon from "../../helpers/getDirectionIcon";
import CheckIcon from '@mui/icons-material/Check';
import { Box } from "@mui/material";

export default function Guesses(props) {
  const guessData = props.data;

  const country = guessData.fake ? "" : guessData.country;
  const distance = guessData.fake ? "" : guessData.isCorrect ? <CheckIcon /> : `${guessData.distanceAway}km`;
  const directionClue = guessData.fake ? "" :  getDirectionIcon(guessData.direction);

  //returns an icon component
  // const distance = guessData.isCorrect ? <CheckIcon/> : `${guessData.distanceAway}km`;

  const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#F2F2F2",
    minHeight: "44px",
    background: "rgba(32,32,42,0.5)",
    fontSize: "14px",
    borderRadius: "5px",
    fontFamily: "IBM Plex Mono",

  }));

  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="center"
      alignContent="center"
      sx={{ marginBottom: "5px", padding: "3px" }}
    >
      <Item sx={{ width: "50%", maxWidth: "50%", paddingTop: "12px" }}>{country}</Item>
      <Item sx={{ width: "35%", maxWidth: "35%", paddingTop: "12px" }}>{distance}</Item>
      <Item sx={{ width: "15%", maxWidth: "15%" }}>{directionClue}</Item>
    </Stack>
  );
}
