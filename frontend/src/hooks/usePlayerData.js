import { useState } from "react";

export default function usePlayerData() {

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [source, setSource] = useState("");
  
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
  
  const handleChange = (event, newVolume) => {
    setVolume(newVolume);
    player.volume = newVolume / 100;
  };
  
  const play = () => {
    player.play();
    setPlaying(true);
  };

  const pause = () => {
    player.pause();
    setPlaying(false);
  }

  const loadAudio = (gameData, round) => {
    if (round < 4) {
      setSource(gameData[round].mp3_link);
      document.getElementById("mp3Player").load();
    }
  };

  return { playing, volume, click, handleChange, play, pause, source, loadAudio }

}