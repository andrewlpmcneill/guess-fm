import { useState } from "react";

export default function usePlayerData() {

  const [playing, setPlaying] = useState(true);
  const [value, setValue] = useState(30);
  
  const player = document.getElementById("mp3Player");
  
  const click = () => {
    if (playing) {
      setPlaying(false);
      player.pause();
      return;
    }
    setPlaying(true);
    player.play();
    return;
  };
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    player.volume = newValue / 100;
  };
  
  const play = () => {
    player.play();
  };

  const pause = () => {
    player.pause();
  }

  return { playing, value, click, handleChange, play, pause }

}