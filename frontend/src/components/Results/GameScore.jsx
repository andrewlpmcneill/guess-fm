import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function GameScore(props) {
  const score = props.data ? props.data : 0;
  const scoreStyle = {
    fontFamily: "IBM Plex Mono",
    fontWeight: "600",
    color: "#F2F2F2",
    fontSize: "2rem",
    marginTop: "-0.3em"
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
