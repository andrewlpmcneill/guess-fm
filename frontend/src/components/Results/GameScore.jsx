import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function GameScore(props) {
  const score = props.data ? props.data : 0;

  return (
    <Stack direction="column">
      <Typography
        sx={{ fontFamily: "Wild World", marginBottom: "1rem", marginTop: "1rem", textAlign:"center", color:"#F2F2F2" }}
        variant={"h5"}
      >
        CURRENT SCORE
      </Typography>
      <Typography sx={{ margin: "auto" }}>{score}/3</Typography>
    </Stack>
  );
}
