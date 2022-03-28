import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { useEffect, useState } from "react";

const AboutDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "#20202a",
    borderRadius: "15px",
    border: "1px solid #4D4D75",
  },
  "& .MuiDialogTitle-root": {
    backgroundColor: "#20202a",
    color: "#c9333b",
    fontFamily: "Wild World",
    m: "auto",
    p: 2,
  },
  "& .MuiDialogContent-root": {
    color: "white",
  },
  a: {
    color: "#c9333b",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: "#AB151D",
    },
  },
}));

export default function LifeTimeStats(props) {
  // Props passed in to render Dialog box
  const { isStatsOpen, setIsStatsOpen, getLifeTimeStatistics, modelState } =
    props;

  //set default to 0 so props can render in component without causing an error
  const [lifeTimeStatsData, setLifeTimeStatsData] = useState({
    lifeTimeGames: 0,
    lifeTimeRounds: 0,
    totalRoundsCleared: 0,
    averageGuessesPerRound: 0,
    lifeTimeGuesses: 0,
    percentRoundClear: 0,
    firstGuessAverageDistance: 0,
  });

  //Life time stats will update when game id changes
  useEffect(() => {
    if (modelState.userId) {
      getLifeTimeStatistics().then((res) => {
        //only sets user stats if they have games played
        if (!res.error) {
          setLifeTimeStatsData(res);
        }
      });
    }
  }, [modelState.gameId]);

  return (
    <div>
      <AboutDialog open={isStatsOpen} fullWidth>
        <IconButton
          aria-label="close"
          onClick={() => setIsStatsOpen(false)}
          sx={{
            position: "absolute",
            left: 8,
            top: 8,
            color: "#AB151D",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle
          sx={{
            m: "auto",
            p: 2,
            textShadow: "0 0 3px #c9333b, 0 0 5px #c9333b",
            letterSpacing: "2px",
          }}
        >
          {"LIFETIME STATISTICS"}
        </DialogTitle>
        {/* Add margin around content */}
        <DialogContent sx={{ m: "auto", p: 1, textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Card
                sx={{
                  m: "auto",
                  p: 1,
                  textAlign: "center",
                  border: "none !important",
                  boxShadow: "none",
                  fontSize: "18px",
                }}
              >
                <CardContent
                  sx={{
                    color: "white",
                  }}
                >
                  <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                    {lifeTimeStatsData.lifeTimeGames}
                  </Typography>
                  <Typography sx={{ fontSize: "18px", fontWeight: 300 }}>
                    {"TOTAL GAMES"}
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            <Box>
              <Card
                sx={{
                  m: "auto",
                  p: 1,
                  textAlign: "center",
                  border: "none !important",
                  boxShadow: "none",
                }}
              >
                <CardContent
                  sx={{
                    color: "white",
                  }}
                >
                  <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                    {`${lifeTimeStatsData.totalRoundsCleared} - ${lifeTimeStatsData.lifeTimeRounds}`}
                  </Typography>
                  <Typography sx={{ fontSize: "18px", fontWeight: 300 }}>
                    {"ROUNDS WON/LOST"}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box>
              <Card
                sx={{
                  m: "auto",
                  p: 1,
                  textAlign: "center",
                  border: "none !important",
                  boxShadow: "none",
                }}
              >
                <CardContent
                  sx={{
                    color: "white",
                  }}
                >
                  <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                    {lifeTimeStatsData.averageGuessesPerRound}
                  </Typography>
                  <Typography sx={{ fontSize: "18px", fontWeight: 300 }}>
                    {"AVG GUESS PER ROUND"}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Card
                sx={{
                  m: "auto",
                  p: 1,
                  textAlign: "center",
                  border: "none !important",
                  boxShadow: "none",
                  fontSize: "18px",
                }}
              >
                <CardContent
                  sx={{
                    color: "white",
                  }}
                >
                  <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                    {lifeTimeStatsData.lifeTimeGuesses}
                  </Typography>
                  <Typography sx={{ fontSize: "18px", fontWeight: 300 }}>
                    {"TOTAL GUESSES"}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box>
              <Card
                sx={{
                  m: "auto",
                  p: 1,
                  textAlign: "center",
                  border: "none !important",
                  boxShadow: "none",
                }}
              >
                <CardContent
                  sx={{
                    color: "white",
                  }}
                >
                  <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                    {`${lifeTimeStatsData.percentRoundClear}%`}
                  </Typography>
                  <Typography sx={{ fontSize: "18px", fontWeight: 300 }}>
                    {"ROUNDS WON PERCENT"}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box>
              <Card
                sx={{
                  m: "auto",
                  p: 1,
                  textAlign: "center",
                  border: "none !important",
                  boxShadow: "none",
                }}
              >
                <CardContent
                  sx={{
                    color: "white",
                  }}
                >
                  <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                    {lifeTimeStatsData.firstGuessAverageDistance}
                  </Typography>
                  <Typography sx={{ fontSize: "18px", fontWeight: 300 }}>
                    {"AVG FIRST GUESS DISTANCE"}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </DialogContent>
      </AboutDialog>
    </div>
  );
}
