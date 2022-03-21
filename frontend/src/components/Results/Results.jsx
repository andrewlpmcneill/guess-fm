import React, { useEffect } from "react";
import Guesses from "./Guesses";
import GameScore from "./GameScore";
import { IconButton, Drawer } from "@mui/material";
import styles from "./Results.module.css"

// const DUMMY_RESULT_DATA = 1;

const drawerWidth = 300;

export default function Results(props) {
  const { guesses, score } = props;

  // const [open, setOpen] = useEffect(true);

  return (
    <Drawer
      className={styles.drawer}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
        fontFamily: 'Wild World'
      }}
      variant="persistent"
      anchor="right"
      open={true}
    >
      <IconButton>
        ▶
      </IconButton>
      <Guesses data={guesses} />
      <GameScore data={score}/>
    </Drawer>
  );
}
