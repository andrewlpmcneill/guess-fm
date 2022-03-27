import Dialog from "@mui/material/Dialog";
import { Fragment, useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogButton from "./DialogButton";
import { DialogActions, Stack } from "@mui/material";

export default function Instructions(props) {
  // Props passed in to render Dialog box
  const {
    modelState,
    createGame,
    nextRound,
    setIsInstructionsOpen
  } = props;

  const startGame = (userId) => {
    createGame(userId).then(() => {
      setIsInstructionsOpen(false)
      nextRound();
    });
  };

  return (
    <div>
      <Dialog open={true} fullWidth>
        <DialogTitle sx={{ m: "auto", p: 2, fontFamily: "Wild World" }}>
          {`WELCOME TO GUESS FM`}
        </DialogTitle>
        {/* Add margin around content */}
        <DialogContent sx={{ m: "1", textAlign: "center" }}>
          <Typography>{"HOW TO PLAY: "}</Typography>
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
      </Dialog>
    </div>
  );
}
