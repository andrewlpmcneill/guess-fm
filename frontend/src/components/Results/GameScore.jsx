import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function GameScore(props) {
  const score = props.data ? props.data : 0;
  const scoreStyle = {
    fontFamily: "Wild World",
    textShadow: "3px 3px 4px black",
    color: "#F2F2F2",
    fontSize: "1.5rem"
  };

  return (
    <Stack direction="column">
      <Typography
        sx={{
          fontFamily: "Wild World",
          marginTop: "1.5rem",
          textAlign: "center",
          color: "#F2F2F2",
          minHeight: "50px",
          position: "relative",
          textShadow: "3px 3px 4px black",
        }}
        variant="h6"
      >
        SCORE
      </Typography>
      <Typography
        variant="h4"
        sx={{ margin: "auto", fontFamily: "Wild World" }}
      >
        <Stack direction="row" alignContent="center" sx={{ gap: "0.4rem" }}>
          <Typography sx={scoreStyle}>
            {score}
          </Typography>
          <Typography sx={scoreStyle}>
            /
          </Typography>
          <Typography sx={scoreStyle}>
            3
          </Typography>
        </Stack>
      </Typography>
    </Stack>
  );
}
