import { useState } from "react";
import PlayButton from "./PlayButton";
import Volume from "./Volume";

export default function Player(props) {

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
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    player.volume = newValue / 100;
  };

  return (

    <div className="playerContainer">
      <PlayButton onClick={click} icon={playing ? "playing" : "paused"} />
      <audio autoPlay id="mp3Player" src="http://radio.garden/api/ara/content/listen/Z8RjDwNU/channel.mp3" type="audio/mp3" />
      <Volume className="volumeSlider" value={value} onChange={handleChange}/>
    </div>

    

  )

}