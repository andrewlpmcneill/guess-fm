import { useEffect } from "react";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import PlayButton from "./PlayButton";
import Volume from "./Volume";
import Mute from "./Mute";
import Display from "./Display";
import IconButton from '@mui/material/IconButton';

export default function Player(props) {

  const { handleClick, playing, volume, handleChange, source, setSource, setPlaying, error, getNewStation, gameData, setGameData, play, muted, handleMute, round } = props;
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
      direction="column"
      sx={{ backgroundColor: '#20202a', borderRadius: "15px", position: "absolute", bottom: "2em", left: "4em", p: "1em 1.5em" }}
    >
      <Display round={round}/>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        // sx={{ width: "220px" }}
      >
        <IconButton sx={{ color: "#FFFFFF" }}>
          <PlayButton
            onClick={handleClick}
            icon={playing ? "playing" : "paused"}
          />
        </IconButton>
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
        <IconButton sx={{ color: "#FFFFFF" }}>
          <Mute handleMute={handleMute} muted={muted} />
        </IconButton>
      </Stack>
      <Volume volume={volume} handleChange={handleChange} muted={muted}/>
    </Stack>

  )

}