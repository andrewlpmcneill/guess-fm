import React, { Fragment } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";


export default function Guesses(props) {
  const guessesData = props.data;

  const guesses = guessesData.map((guess) => (

    <Fragment>
      <ListItem>
        <ListItemText primary={guess.distanceAway}/>
      </ListItem>
      <Divider/>
    </Fragment>

  ))

  return (

    <div variant="" className="guesses">
      <h3>Guesses</h3>
      <List>
        {guesses}
      </List>
    </div>

  )

}