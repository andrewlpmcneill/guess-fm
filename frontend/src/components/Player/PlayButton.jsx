import { React, useState } from "react";
import classNames from "classnames";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

export default function PlayButton(props) {

  const icon = props.icon;

  return (
    <div>
      {icon === "paused" && (
        <PlayArrowIcon color="primary" fontSize="large" onClick={props.onClick} />
      )}
      {icon === "playing" && (
        <PauseIcon color="primary" fontSize="large" onClick={props.onClick} />
      )}
    </div>

  )

}