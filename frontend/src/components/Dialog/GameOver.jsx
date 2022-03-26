import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogButton from "./DialogButton";
import getTicksWithDistance from "../../helpers/getTicksWithDistance";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack, Box } from "@mui/material";

export default function GameOver(props) {
  // Props passed in to render Dialog box
  const { pause, updateResultsTable, clearScore, gameData, clearRound } = props;
  // Track whether or not the dialog box is open
  const [open, setOpen] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClose = () => {
    updateResultsTable(gameData.score);
    pause();
    clearRound();
    clearScore();
    setOpen(false);
  };

  const answer = gameData.stations[gameData.round - 2];
  let roundTitle;
  let roundAnswer = "";
  let pinDistanceAway;
  let distanceAwayVisual;

  if (gameData.round === 1) {
    roundTitle = "ROUND 1";
  } else if (
    gameData.guesses.length >= 1 &&
    gameData.guesses[gameData.guesses.length - 1].isCorrect
  ) {
    // let dataRound = gameData.round === 2 ? 1 : 2;
    roundTitle = "NICE ONE!";
    roundAnswer = `You got it in ${gameData.guesses.length} guesses. `;
    pinDistanceAway =
      gameData.guesses[gameData.guesses.length - 1].distanceAway;
    distanceAwayVisual = `📍${getTicksWithDistance(
      gameData.guesses[gameData.guesses.length - 1].distanceAway
    )}🌎`;
  } else if (
    gameData.guesses.length > 4 &&
    !gameData.guesses[gameData.guesses.length - 1].isCorrect
  ) {
    roundTitle = "OOPS... NOT QUITE";
    pinDistanceAway =
      gameData.guesses[gameData.guesses.length - 1].distanceAway;
    distanceAwayVisual = `📍${getTicksWithDistance(
      gameData.guesses[gameData.guesses.length - 1].distanceAway
    )}🌎`;
  }

  return (
    <div>
      <Dialog open={open} fullWidth>
        <DialogTitle sx={{ m: "auto", p: 2, fontFamily: "Wild World" }}>
          {"WELL PLAYED!"}
        </DialogTitle>
        {/* Add margin around content */}
        <DialogContent sx={{ m: "1", textAlign: "center" }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant="h6" sx={{ m: "auto", p: 1 }}>
                ROUND 3 - RESULTS
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The correct answer was <strong>{answer.country}</strong>.{" "}
                {roundAnswer}
              </Typography>
              <Typography mt={1}>
                The station playing was <strong>{answer.station_title}</strong>{" "}
                in <strong>{answer.city}</strong>
              </Typography>
              <Typography mt={1}>
                Your pin was <strong>{pinDistanceAway} km</strong> away.
              </Typography>
              <Typography mt={1}>{distanceAwayVisual}</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography variant="h6" sx={{ m: "auto", p: 1 }}>GAME STATS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={8} justifyContent="center" alignItems="center" >
                <Typography>Total Score:</Typography>
                <Typography>3</Typography>
              </Stack>
              <Stack direction="row" spacing={8} justifyContent="center" alignItems="center" >
                <Typography>Average Distance: </Typography>
                <Typography>380 km</Typography>
              </Stack>
              <Stack direction="row" spacing={8} justifyContent="center" alignItems="center" >
                <Typography>Average Guesses: </Typography>
                <Typography>4 guesses</Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* <Typography>{`Your final score is ${gameData.score}/3.`}</Typography> */}
        </DialogContent>
        <DialogButton onClick={handleClose}>{"PLAY AGAIN"}</DialogButton>
      </Dialog>
    </div>
  );
}
