import Guesses from "./Guesses";
import GameScore from "./GameScore";
import Stack from "@mui/material/Stack";


const width = 300;
const height = 550;

export default function Results(props) {
  const { gameData } = props;

  return (
    <Stack
      direction="column"
      justifyContent="center"
      sx={{
        padding: "0 1rem 1rem 1rem",
        width: width,
        minHeight: height,
        position: "absolute",
        zIndex: 1000,
        right: "4em",
        bottom: "8em",
        background: "rgba(41,38,33,0.8)",
        borderRadius: "15px",
        backdropFilter: "blur(20px)",
        border: "1px solid #4D4D75"
      }}
    >
      <Stack direction="row" justifyContent="flex-start">
      </Stack>

      <Guesses data={gameData.guesses} />
      <GameScore data={gameData.score} />
    </Stack>
  );
}
