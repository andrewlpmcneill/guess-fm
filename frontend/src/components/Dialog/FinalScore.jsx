import { Fragment, useState, useEffect } from "react";
import getTicksWithDistance from "../../helpers/getTicksWithDistance";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function FinalScore(prop) {
  const { gameData, getGameStatistics } = prop;

  const [expanded, setExpanded] = useState(false);
  const [finalResult, setFinalResult] = useState({
    averageDistance: 0,
    averageGuesses: 0,
    totalScore: 0,
  });

  //make axios call to grab final game statistics from backend
  useEffect(() => {
    getGameStatistics().then((res) => {
      setFinalResult(res);
    });
  }, [getGameStatistics]);

  //sets default state and opens accordion
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //rounding function
  const roundToTwo = (num) => {
    return Math.round(num * 100) / 100;
  };

  const currentStation = gameData.stations[gameData.round - 2];
  let roundAnswer = "";
  let pinDistanceAway;
  let distanceAwayVisual;

  if (gameData.guesses[gameData.guesses.length - 1].isCorrect) {
    roundAnswer = `You got it in ${gameData.guesses.length} guesses. `;
    pinDistanceAway =
      gameData.guesses[gameData.guesses.length - 1].distanceAway;
    distanceAwayVisual = `📍${getTicksWithDistance(
      gameData.guesses[gameData.guesses.length - 1].distanceAway
    )}🌎`;
  } else {
    pinDistanceAway =
      gameData.guesses[gameData.guesses.length - 1].distanceAway;
    distanceAwayVisual = `📍${getTicksWithDistance(
      gameData.guesses[gameData.guesses.length - 1].distanceAway
    )}🌎`;
  }

  return (
    <Fragment>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{ m: "auto", p: 0.5, fontSize: "1.4rem", fontWeight: "bold" }}
          >
            ROUND 3 - RESULTS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The correct answer was <strong>{currentStation.country}</strong>.{" "}
            {roundAnswer}
          </Typography>
          <Typography mt={1}>
            The station playing was{" "}
            <strong>{currentStation.station_title}</strong> in{" "}
            <strong>{currentStation.city}</strong>
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
          <Typography
            sx={{ m: "auto", p: 0.5, fontSize: "1.4rem", fontWeight: "bold" }}
          >
            GAME STATISTICS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            direction="row"
            spacing={8}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Typography sx={{ fontSize: "1.3rem" }}>Total Score:</Typography>
            <Typography sx={{ fontSize: "1.3rem" }}>
              {finalResult.totalScore}/3
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={8}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Typography sx={{ fontSize: "1.3rem" }}>
              Average Distance:{" "}
            </Typography>
            <Typography sx={{ fontSize: "1.3rem" }}>
              {roundToTwo(finalResult.averageDistance)} km
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={8}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Typography sx={{ fontSize: "1.3rem" }}>
              Average Guesses:{" "}
            </Typography>
            <Typography sx={{ fontSize: "1.3rem" }}>
              {roundToTwo(finalResult.averageGuesses)} guesses
            </Typography>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
}
