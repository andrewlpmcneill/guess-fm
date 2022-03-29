import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogButton from "./DialogButton";
import DialogActions from "@mui/material/DialogActions";
import { Grid } from "@mui/material";

export default function Instructions(props) {
  // Props passed in to render Dialog box
  const { modelState, createGame, nextRound, setIsInstructionsOpen, open } = props;

  const CustomDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiPaper-root": {
      backgroundColor: "#20202a",
      borderRadius: "15px",
      // Maybe not?
      border: "1px solid #4D4D75",
    },
    "& .MuiButton-root": {
      backgroundColor: "#c9333b",
      "&:hover": {
        backgroundColor: "#AB151D",
      },
    },
  }));

  // Start game on PLAY NOW button pressed
  const handleClick = (userId) => {
    createGame(userId).then(() => {
      setIsInstructionsOpen(false);
      nextRound();
    });
  };

  return (
    <div>
      <CustomDialog open={open} fullWidth={true} maxWidth={"md"}>
        <DialogTitle sx={{textShadow: "0 0 3px #c9333b, 0 0 5px #c9333b",
          letterSpacing: "2px"}}>
          {`WELCOME TO GUESS FM`}
        </DialogTitle>
        {/* Add margin around content */}
        <DialogContent sx={{textAlign: "center" }}>
          {/* <Typography sx={{marginBottom: 2}}>{"HOW TO PLAY: "}</Typography> */}
          <Grid sx={{ flexGrow: 1 }} container spacing={2} justifyContent={"flex-end"}>
            <Grid item xs={3}>
              <Typography sx={{textAlign: "right" }}>
                {"1️⃣"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Typography>
            </Grid>
            <Grid item xs={9} sx={{textAlign: "left" }}>
              <Typography>
                {"A random radio station from around the world will play."}
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{textAlign: "right" }}>
              <Typography>
                {"2️⃣"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Typography>
            </Grid>
            <Grid item xs={9} sx={{textAlign: "left" }}>
              <Typography>
                {"Drop a pin in the country you think it’s from."}
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{textAlign: "right" }}>
              <Typography>
                {"3️⃣"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Typography>
            </Grid>
            <Grid item xs={9} sx={{textAlign: "left" }}>
              <Typography>
                {"Use the guess button to submit your answer."}
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{textAlign: "right" }}>
              <Typography>
                {"4️⃣"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Typography>
            </Grid>
            <Grid item xs={9} sx={{textAlign: "left" }}>
              <Typography>
                {"Distance and direction hints show after each wrong guess."}
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{textAlign: "right" }}>
              <Typography>
                {"5️⃣"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Typography>
            </Grid>
            <Grid item xs={9} sx={{textAlign: "left" }}>
              <Typography>
                {"There are 3 rounds in a game."}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            m: "auto",
            paddingBottom: 2,
            justifyContent: "space-between",
          }}
        >
          <DialogButton onClick={() => handleClick(modelState.userId)}>
            {"PLAY NOW"}
          </DialogButton>
        </DialogActions>
      </CustomDialog>
    </div>
  );
}
