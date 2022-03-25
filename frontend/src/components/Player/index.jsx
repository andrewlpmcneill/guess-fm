import { useEffect } from "react";
import Stack from '@mui/material/Stack'
import PlayButton from "./PlayButton";
import Volume from "./Volume";
import ReactAudioPlayer from 'react-audio-player';

export default function Player(props) {

  const { handleClick, playing, volume, handleChange, source } = props;

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
      <Volume volume={volume} handleChange={handleChange}/>
    </Stack>

  )

}