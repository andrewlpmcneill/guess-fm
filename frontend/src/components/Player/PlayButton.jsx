import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

export default function PlayButton(props) {

  const icon = props.icon;

  return (
    <div>
      {icon === "paused" && (
        <PlayArrowIcon data-testid="play" color="primary" fontSize="large" onClick={props.onClick} />
      )}
      {icon === "playing" && (
        <PauseIcon data-testid="pause" color="primary" fontSize="large" onClick={props.onClick} />
      )}
    </div>

  )

}