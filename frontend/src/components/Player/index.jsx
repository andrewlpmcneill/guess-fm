import { useEffect } from "react";
import Stack from '@mui/material/Stack'
import PlayButton from "./PlayButton";
import Volume from "./Volume";

export default function Player(props) {

  const { handleClick, playing, volume, handleChange, source, setSource, setPlaying, error, getNewStation, gameData, setGameData, play } = props;
  const player = document.getElementById("mp3Player");

  // Volume Side Effect
  useEffect(() => {
    document.getElementById("mp3Player").volume = 0.3;
  }, []);

  // mp3 Link Side Effect
  useEffect(() => {
    // get new station via getNewStation function
    const currentRound = gameData.round - 1;
    const currentStation = gameData.stations[currentRound];
    if (currentStation === undefined) return;
    const country = currentStation.country;
    const stationID = currentStation.id
    getNewStation(country, stationID)
      .then(station => {
        // update state
        const stationsCopy = [...gameData.stations];
        stationsCopy[currentRound] = station[0];
        setGameData(prev => {
          return {
            ...prev,
            stations: stationsCopy
          }
        })
        // setSource, load player, play music
        setSource(station[0].mp3_link);
        player.load();
        play();
      });
  }, [error])


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
      <audio
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