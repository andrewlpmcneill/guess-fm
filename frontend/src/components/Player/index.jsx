import { useEffect } from "react";
import Stack from '@mui/material/Stack'
import PlayButton from "./PlayButton";
import Volume from "./Volume";
import ReactAudioPlayer from 'react-audio-player';
import Pause from "@mui/icons-material/Pause";

export default function Player(props) {

  const { handleClick, playing, volume, handleChange, source, setPlaying } = props;
  const player = document.getElementById("mp3Player");

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
      <PlayButton
        onClick={handleClick}
        icon={playing ? "playing" : "paused"}
      />
      <ReactAudioPlayer
        id="mp3Player"
        src={source}
        type="audio/mp3"
        onPause={() => {
          navigator.mediaSession.setActionHandler('play', function() {
            player.play();
            setPlaying(true);
          });
        }} 
        onPlay={() => {
          navigator.mediaSession.setActionHandler('pause', function() {
            player.pause();
            setPlaying(false);
          });
        }}
      />
      <Volume volume={volume} handleChange={handleChange}/>
    </Stack>

  )

}