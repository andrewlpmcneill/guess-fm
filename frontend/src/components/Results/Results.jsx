import React, { useState } from "react";
import Guesses from "./Guesses";
import GameScore from "./GameScore";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";


const drawerWidth = 300;

export default function Results(props) {
  const { guesses, score, menuStatus } = props;

  const [openResults, setOpenResults] = useState(menuStatus === false ? menuStatus : true);

  const handleOpenResults = () => {
    setOpenResults(prev => !prev);
  };


  return (
    <Drawer
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
    >
      <Stack direction="row" justifyContent="flex-start">
        <IconButton onClick={handleOpenResults}>▶</IconButton>
      </Stack>

      <Guesses data={guesses} />
      <GameScore data={score} />

    </Drawer>
  );
}
