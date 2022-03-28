import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

export default function PlayButton(props) {

  const icon = props.icon;

  return (
    <>
      {icon === "paused" && (
        <PlayArrowIcon data-testid="play" color="primary" fontSize="large" onClick={props.onClick} sx={{ color: "#C9333B", cursor: "pointer" }} />
      )}
      {icon === "playing" && (
        <PauseIcon data-testid="pause" color="primary" fontSize="large" onClick={props.onClick} sx={{ color: "#C9333B", cursor: "pointer" }}/>
      )}
    </>

  )

}