import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

export default function PlayButton(props) {

  const { playing, player } = props;

  return (
    <>
      {!playing && (
        <PlayArrowIcon data-testid="play" color="primary" fontSize="large" onClick={props.onClick} sx={{ color: "#C9333B", cursor: "pointer" }} />
      )}
      {playing && (
        <PauseIcon data-testid="pause" color="primary" fontSize="large" onClick={props.onClick} sx={{ color: "#C9333B", cursor: "pointer" }}/>
      )}
    </>

  )

}