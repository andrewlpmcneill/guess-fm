import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import { Fragment, useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogButton from "./DialogButton";
import DialogActions from "@mui/material/DialogActions";

export default function Instructions(props) {
  // Props passed in to render Dialog box
  const { modelState, createGame, nextRound, setIsInstructionsOpen } = props;

  const CustomDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiPaper-root": {
      backgroundColor: "#20202a",
      borderRadius: "15px",
      // Maybe not?
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
    "& .MuiButton-root": {
      backgroundColor: "#c9333b",
      "&:hover": {
        backgroundColor: "#AB151D",
      },
    },
  }));

  const startGame = (userId) => {
    createGame(userId).then(() => {
      setIsInstructionsOpen(false);
      nextRound();
    });
  };

  return (
    <div>
      <CustomDialog open={true} fullWidth>
        <DialogTitle
          sx={{
            m: "auto",
            p: 2,
            fontFamily: "Wild World",
            textShadow: "0 0 3px #c9333b, 0 0 5px #c9333b",
            letterSpacing: "2px",
          }}
        >
          {`WELCOME TO GUESS FM`}
        </DialogTitle>
        {/* Add margin around content */}
        <DialogContent sx={{ m: "1", textAlign: "center" }}>
          <Typography sx={{marginBottom: 1}}>{"HOW TO PLAY: "}</Typography>
          <Typography>
            {
              "📡 - A random radio station from somewhere in the world will play."
            }
          </Typography>
          <Typography>
            {"🏴‍☠️ - You get 5 tries to guess what country it’s in."}
          </Typography>
          <Typography>
            {"3️⃣ - Repeat for 2 more stations to get your score out of 3!"}
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            m: "auto",
            paddingBottom: 2,
            justifyContent: "space-between",
          }}
        >
          <DialogButton onClick={() => startGame(modelState.userId)}>
            {"PLAY NOW"}
          </DialogButton>
        </DialogActions>
      </CustomDialog>
    </div>
  );
}
