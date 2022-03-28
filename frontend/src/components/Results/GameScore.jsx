import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function GameScore(props) {
  const score = props.data ? props.data : 0;

  return (
    <Stack direction="column">
      <Typography
        sx={{
          fontFamily: "Wild World",
          marginBottom: "1rem",
          marginTop: "1.5rem",
          textAlign: "center",
          color: "#F2F2F2",
          minHeight: "150px",
          position: "relative",
          textShadow: "3px 3px 4px black"
  
        }}
        variant={"h5"}
      >
        SCORE
      </Typography>
      <Typography
        variant="h4"
        sx={{ margin: "auto", fontFamily: "Wild World"}}
      >
        <Typography variant="h4" sx={{ fontFamily: "Wild World", position: "absolute", left: "36%", bottom: "16%", color: "#F2F2F2", textShadow: "3px 3px 4px black"}}>
          {score}
        </Typography>
        <Typography variant="h5" sx={{ fontFamily: "Wild World", position: "absolute", left: "46%", bottom: "14%", color: "#F2F2F2", textShadow: "3px 3px 4px black" }}>
          /
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: "Wild World", position: "absolute", left: "50%", bottom: "9%", color: "#F2F2F2", textShadow: "3px 3px 4px black" }}>
          3
        </Typography>
      </Typography>
    </Stack>
  );
}
