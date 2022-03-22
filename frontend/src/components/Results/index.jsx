import React, { useState, Fragment } from "react";
import Guesses from "./Guesses";
import GameScore from "./GameScore";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 300;

export default function Results(props) {
  const { guesses, score, menuStatus } = props;

  const [openResults, setOpenResults] = useState(
    menuStatus === false ? menuStatus : true
  );

  const handleOpenResults = () => {
    setOpenResults((prev) => !prev);
  };


  return (
    <Fragment>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            position: "absolute"
          }
        }}
        variant="persistent"
        anchor="right"
        open={openResults}
      >
        <Stack direction="row" justifyContent="flex-start">
          <IconButton onClick={handleOpenResults}>
            <ChevronRightIcon/>
          </IconButton>
        </Stack>

        <Guesses data={guesses} />
        <GameScore data={score} />
      </Drawer>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 40,
            position: "absolute"
          }
        }}
        variant="persistent"
        anchor="right"
        open={!openResults}
      >
          <IconButton sx={{height:'100%'}} onClick={handleOpenResults}>
            <ChevronLeftIcon/>
          </IconButton>
 

      </Drawer>

    </Fragment>

  );
}
