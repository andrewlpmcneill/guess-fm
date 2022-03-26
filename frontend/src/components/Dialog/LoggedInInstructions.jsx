import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Dialog from "@mui/material/Dialog";
import { Fragment, useState, useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogButton from "./DialogButton";
import { DialogActions, Stack } from "@mui/material";

const LoggedInInstructions = (props) => {
  const { user } = useAuth0();
  const { given_name, user_id, picture, email, sub } = user;
  console.log()
  const {
    modelState,
    startGame,
  } = props;

  return (
    <Dialog open={true} fullWidth>
      <DialogTitle sx={{ m: "auto", p: 2, fontFamily: "Wild World" }}>
        {`WELCOME ${given_name.toUpperCase()}`}
      </DialogTitle>
      {/* Add margin around content */}
      <DialogContent sx={{ m: "1", textAlign: "center" }}>
        <Typography>
          {"📡 - A random radio station from somewhere in the world will play."}
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
        <Fragment>
          {/* NEED TO FIX BACKEND TO TAKE A STRING AS AN ID */}
          <DialogButton onClick={() => startGame(1)}>
            {"PLAY NOW"}
          </DialogButton>
        </Fragment>
      </DialogActions>
    </Dialog>
  );
};

export default withAuthenticationRequired(LoggedInInstructions, {
  onRedirecting: () => <div>Loading...</div>,
});
