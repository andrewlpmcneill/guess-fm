import VolumeOffIcon from '@mui/icons-material/VolumeOff';

export default function Mute(props) {

  const { handleMute, muted } = props;

  return (

    <VolumeOffIcon
      sx={{ color: muted ? "#C9333B" : "#721F23", cursor: "pointer" }}
      onClick={handleMute}
      fontSize="large"
    />
      
  )

}