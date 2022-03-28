import { Fragment, useState, useEffect } from "react";
import { styled } from "@mui/material";
import getTicksWithDistance from "../../helpers/getTicksWithDistance";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";

export default function FinalScore(prop) {
  const { gameData, getGameStatistics } = prop;

  const [expanded, setExpanded] = useState('panel1');
  const [finalResult, setFinalResult] = useState({
    averageDistance: 0,
    averageGuesses: 0,
    totalScore: 0,
  });

  

  const CustomAccordion = styled(Accordion)(({ theme }) => ({
  }));

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
      <CustomAccordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ color: "white", backgroundColor: "#322D40"}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{ color: "white", backgroundColor: "#322D40"}}
        >
          <Typography
            sx={{ m: "auto", p: 0.5, fontWeight: "bold", fontFamily: "Wild World" }}
          >
            FINAL ROUND RESULTS
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: "white", backgroundColor: "#322D40"}}>
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
      </CustomAccordion>

      <CustomAccordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "white"}}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{ color: "white", backgroundColor: "#322D40"}}
        >
          <Typography
            sx={{ m: "auto", p: 0.5, fontWeight: "bold", fontFamily: "Wild World" }}
          >
            GAME STATISTICS
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ color: "white", backgroundColor: "#322D40!important", }}>
        <Box sx={{
              display: 'flex',
            }}>
            <Box>
              <Card sx={{backgroundColor: "#322D40!important", m: "auto", p: 2, textAlign: "center", border: "none!important", boxShadow: "none", fontSize: "18px" }}>
                <CardContent sx={{
                    color: 'white'
                  }}>
                  <Typography sx={{fontSize: "24px", fontWeight: 600,}}>
                    {gameData.score}/3
                  </Typography>
                  <Typography sx={{fontSize: "18px", fontWeight: 300,}}>
                    {"Total Score"}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box>
              <Card sx={{backgroundColor: "#322D40!important", m: "auto", p: 2, textAlign: "center", border: "none!important", boxShadow: "none" }}>
                <CardContent sx={{
                    color: 'white',
                  }}>
                  <Typography sx={{fontSize: "24px", fontWeight: 600}}>
                    {roundToTwo(finalResult.averageDistance)} km
                  </Typography>
                  <Typography sx={{fontSize: "18px", fontWeight: 300}}>
                    {"Average Distance"}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box>
              <Card sx={{backgroundColor: "#322D40!important", m: "auto", p: 2, textAlign: "center", border: "none!important", boxShadow: "none" }}>
                <CardContent sx={{
                    color: 'white',
                  }}>
                  <Typography sx={{fontSize: "24px", fontWeight: 600,}}>
                    {roundToTwo(finalResult.averageGuesses)}
                  </Typography>
                  <Typography sx={{fontSize: "18px", fontWeight: 300}}>
                    {"Average Guesses"}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </AccordionDetails>
      </CustomAccordion>
    </Fragment>
  );
}
