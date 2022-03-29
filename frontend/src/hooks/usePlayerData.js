import { useState } from "react";
import axios from 'axios';

export default function usePlayerData() {

  const message = "YOU ARE NOW LISTENING TO 101.7 GUESS FM... ENJOY THE GAME!";

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [source, setSource] = useState("");
  const [error, setError] = useState(0);
  const [muted, setMuted] = useState(false);
  const [text, setText] = useState(message);
  
  const player = document.getElementById("mp3Player");
  
  // play/pause click handler
  const handleClick = () => {
    if (playing) {
      setPlaying(false);
      player.pause();
      return;
    }
    setPlaying(true);
    player.play();
    player.volume = volume / 100;
    return;
  };
  
  const handleChange = (event, newVolume) => {
    if (muted) setMuted(false);
    setVolume(newVolume);
    player.volume = newVolume / 100;
  };
  
  const handleMute = event => {
    if (muted) {
      setMuted(false);
      player.volume = volume / 100;
      return;
    }
    setMuted(true);
    player.volume = 0;
  };

  const getNewStation = async (country, stationID) => {
    try {
      const postCountry = await axios.post('/stations/no-source', {
        station_id: stationID,
        country: country
      });
      return postCountry.data;
    } catch (err) {
      console.log(err);
    }
  };
  
  const play = () => {
    player.play()
      .catch(() => {
        console.log('INVALID SOURCE DETECTED');
        setError(prev => prev + 1);
      })
      setPlaying(true);
      player.volume = volume / 100;
  };

  const pause = () => {
    player.pause();
    setPlaying(false);
  }

  const loadAudio = (stations, round) => {
    if (round > 0 && round < 4) {
      setSource(stations[round - 1].mp3_link);
      document.getElementById("mp3Player").load();
      setPlaying(false);
    }
  };

  return { playing, volume, handleClick, handleChange, play, pause, source, setSource, loadAudio, setPlaying, error, getNewStation, handleMute, muted, text, setText }

}