import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import PlayButton from "./PlayButton";
import Volume from "./Volume";
import Mute from "./Mute";
import Display from "./Display";
import IconButton from "@mui/material/IconButton";

export default function Player(props) {
  
  const {
    handleClick,
    playing,
    volume,
    handleChange,
    source,
    setSource,
    setPlaying,
    error,
    getNewStation,
    gameData,
    setGameData,
    play,
    muted,
    handleMute,
    round,
    text,
    setText
  } = props;
  
  const player = document.getElementById("mp3Player");

  // Volume Side Effect
  useEffect(() => {
    // player variable does not work for this - has to be explicit
    document.getElementById("mp3Player").volume = 0.3;
  }, []);

  // mp3 Link Side Effect
  useEffect(() => {
    // get new station via getNewStation function
    const currentRound = gameData.round - 1;
    const currentStation = gameData.stations[currentRound];
    // prevent crashing on initial run of this effect
    if (currentStation === undefined) return;
    const country = currentStation.country;
    const stationID = currentStation.id;
    getNewStation(country, stationID).then((station) => {
      // update state
      const stationsCopy = [...gameData.stations];
      stationsCopy[currentRound] = station[0];
      setGameData((prev) => {
        return {
          ...prev,
          stations: stationsCopy,
        };
      });
      // setSource, load player, play music
      setSource(station[0].mp3_link);
      player.load();
      play();
    });
  }, [error]);

  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: "#20202a",
        borderRadius: "15px",
        border: "2px solid #4D4D75",
        position: "absolute",
        bottom: "2em",
        left: "4em",
        p: "1em 1.5em",
      }}
    >
      <Display
        round={round}
        text={text}
        setText={setText}
      />
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <IconButton
        sx={{ color: "#FFFFFF" }}
        onClick={handleClick}>
          <PlayButton
            playing={playing}
            player={player}
          />
        </IconButton>
        <Typography
          sx={{
            opacity: 0.5,
            color: "#1E1E42",
            fontSize: "12px",
            fontFamily: "Wild World",
            textShadow:
              "-1px -1px 0px rgba(255,255,255,0.3), 1px 1px 0px rgba(0,0,0,0.5)",
          }}
        >
          {"GUESS FM"}
        </Typography>
        <IconButton
          sx={{ color: "#FFFFFF" }}
        >
          <Mute
            handleMute={handleMute}
            muted={muted}
          />
        </IconButton>
        <audio
          id="mp3Player"
          src={source}
          type="audio/mp3"
          // Establishes listeners for media keys on users' keyboards
          onPause={() => {
            navigator.mediaSession.setActionHandler("play", function () {
              player.play();
              setPlaying(true);
            });
          }}
          onPlay={() => {
            navigator.mediaSession.setActionHandler("pause", function () {
              player.pause();
              setPlaying(false);
            });
          }}
        />
      </Stack>
      <Volume
        volume={volume}
        handleChange={handleChange}
        muted={muted}
      />
    </Stack>
  );
}
