import { Fragment } from "react";
import Guesses from "./Guesses";
import GameScore from "./GameScore";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 300;

export default function Results(props) {
  const { onDrawerToggle, isDrawerOpen, gameData } = props;


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
        open={isDrawerOpen}
      >
        <Stack direction="row" justifyContent="flex-start">
          <IconButton onClick={onDrawerToggle}>
            <ChevronRightIcon/>
          </IconButton>
        </Stack>

        <Guesses data={gameData.guesses} />
        <GameScore data={gameData.score} />
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
        open={!isDrawerOpen}
      >
          <IconButton sx={{height:'100%'}} onClick={onDrawerToggle}>
            <ChevronLeftIcon/>
          </IconButton>
 

      </Drawer>

    </Fragment>

  );
}
