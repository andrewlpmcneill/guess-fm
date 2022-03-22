import { useState, useEffect } from "react";
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import PlayButton from "./PlayButton";
import Volume from "./Volume";

export default function Player(props) {

  const [playing, setPlaying] = useState(true);
  const [value, setValue] = useState(30);
  const player = document.getElementById("mp3Player");

  useEffect(() => {
    document.getElementById("mp3Player").volume = 0.3;
  }, [])

  const click = () => {
    if (playing) {
      setPlaying(false);
      player.pause();
      return;
    }
    setPlaying(true);
    player.play();
    return;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    player.volume = newValue / 100;
  };

  return (

    <Stack
      direction="row"
      m="0 2em"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <PlayButton onClick={click} icon={playing ? "playing" : "paused"} />
      <audio id="mp3Player" src="http://radio.garden/api/ara/content/listen/Z8RjDwNU/channel.mp3" type="audio/mp3" />
      <Volume value={value} onChange={handleChange}/>
      <Button fullWidth variant="contained">
        Guess
      </Button>
    </Stack>

    

  )

}