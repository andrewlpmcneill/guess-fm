import { useState } from "react";
import axios from 'axios';

export default function usePlayerData() {

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [source, setSource] = useState("");
  const [error, setError] = useState(0);
  
  const player = document.getElementById("mp3Player");
  
  const click = () => {
    if (playing) {
      setPlaying(false);
      player.pause();
      return;
    }
    setPlaying(true);
    player.play();
    player.volume = volume;
    return;
  };
  
  const handleChange = (event, newVolume) => {
    setVolume(newVolume);
    player.volume = newVolume / 100;
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
      player.volume = volume;
  };

  const pause = () => {
    player.pause();
    setPlaying(false);
  }

  const loadAudio = (stations, round) => {
    if (round < 4) {
      setSource(stations[round].mp3_link);
      document.getElementById("mp3Player").load();
      setPlaying(false);
    }
  };

  return { playing, volume, click, handleChange, play, pause, source, setSource, loadAudio, setPlaying, error, getNewStation }

}