import React, { useState } from "react";
import Guesses from "./Guesses";
import GameScore from "./GameScore";
import { IconButton, Drawer } from "@mui/material";
import styles from "./Results.module.css"

const drawerWidth = 300;

export default function Results(props) {
  const { guesses, score } = props;

  const [openResults, setOpenResults] = useState(true);

  const handleOpenResults = () => { 
    setOpenResults(false)
  }
  

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
      open={openResults}
    >
      <IconButton onClick={handleOpenResults}>
        ▶
      </IconButton>
      <Guesses data={guesses} />
      <GameScore data={score}/>
    </Drawer>
  );
}
