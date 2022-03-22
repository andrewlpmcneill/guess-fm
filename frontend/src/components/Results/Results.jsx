import React, { useState } from "react";
import Guesses from "./Guesses";
import GameScore from "./GameScore";
import { IconButton, Drawer, Box } from "@mui/material";
import styles from "./Results.module.css";

const drawerWidth = 300;

export default function Results(props) {
  const { guesses, score, menuStatus } = props;

  const [openResults, setOpenResults] = useState(menuStatus === false ? menuStatus : true);

  const handleOpenResults = () => {
    setOpenResults(prev => !prev);
  };


  return (
    <Drawer
      className={styles.drawer}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        }
      }}
      variant="persistent"
      anchor="right"
      open={openResults}
      PaperProps={{ style: { height: "90vh" } }}
    >
      <Box className={styles.drawerHeader}>
        <IconButton onClick={handleOpenResults}>▶</IconButton>
      </Box>

      <Guesses data={guesses} />
      <GameScore data={score} />

    </Drawer>
  );
}
