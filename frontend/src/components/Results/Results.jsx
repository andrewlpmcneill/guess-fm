import React, {useEffect} from "react";
import Drawer from "@mui/material/Drawer";

// const DUMMY_GUESSES_DATA = [
//   { distanceAway: 4500, direction: "N" },
//   { distanceAway: 6000, direction: "S" },
//   { distanceAway: 3200, direction: "SW" },
//   { distanceAway: 1800, direction: "NE" },
//   { distanceAway: 0, direction: "" },
// ];

// const DUMMY_RESULT_DATA = 1;

const drawerWidth = 240;

export default function Results(props) {

  // const [open, setOpen] = useEffect(true)

  return <Drawer
    className="results"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
      },
    }}

    variant="persistent"
    anchor="right"
    open={true}
  >
    <div>
      <p>guess1</p>
    </div>
    <div>
      <p>guess2</p>
    </div>
    <div>
      <p>guess3</p>
    </div>
    <div>
      <p>guess4</p>
    </div>
  </Drawer>

}
