import { useEffect } from "react";
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import PlayButton from "./PlayButton";
import Volume from "./Volume";
import ReactAudioPlayer from 'react-audio-player';

export default function Player(props) {

  const { handleClick, playing, value, handleChange, updateRoundStatus, validateGuess, source } = props;

  useEffect(() => {
    document.getElementById("mp3Player").volume = 0.3;
  }, [])

  return (

    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <PlayButton onClick={handleClick} icon={playing ? "playing" : "paused"} />
      <ReactAudioPlayer id="mp3Player" src={source} type="audio/mp3" />
      {/* {audioPlayer} */}
      <Volume value={value} onChange={handleChange}/>
    </Stack>

  )

}