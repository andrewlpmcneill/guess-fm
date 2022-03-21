import React, {useEffect} from "react";
import Drawer from "@mui/material/Drawer";
import Guesses from "./Guesses";

// const DUMMY_RESULT_DATA = 1;

const drawerWidth = 240;

export default function Results(props) {

  const {guesses, score} = props;

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
    <Guesses data={guesses}/>
  </Drawer>

}
