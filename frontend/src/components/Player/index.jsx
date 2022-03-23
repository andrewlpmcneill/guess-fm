import { useEffect } from "react";
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import PlayButton from "./PlayButton";
import Volume from "./Volume";

export default function Player(props) {

  const { addGuess, handleClick, playing, value, handleChange, updateRoundStatus, validateGuess, gameData } = props;

  useEffect(() => {
    document.getElementById("mp3Player").volume = 0.3;
  }, [])

  const saveGuess = (event) => {
    event.preventDefault()
    // console.log(props.guess);
    const guess = validateGuess();
    console.log(guess)
    addGuess(guess);
    updateRoundStatus(guess)
  }

  return (

    <Stack
      direction="row"
      m="0 2em"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <PlayButton onClick={handleClick} icon={playing ? "playing" : "paused"} />
      <audio id="mp3Player" src="http://radio.garden/api/ara/content/listen/Ey0ePewU/channel.mp3" type="audio/mp3" />
      <Volume value={value} onChange={handleChange}/>
      <Button fullWidth variant="contained" onClick={saveGuess}>
        Guess
      </Button>
    </Stack>

  )

}