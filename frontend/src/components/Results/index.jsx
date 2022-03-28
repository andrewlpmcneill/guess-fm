import Guesses from "./Guesses";
import GameScore from "./GameScore";
import Stack from "@mui/material/Stack";


const width = 300;
const height = 500;

export default function Results(props) {
  const { gameData } = props;

  return (
    <Stack
      direction="column"
      sx={{
        padding: "1rem",
        width: width,
        minHeight: height,
        position: "absolute",
        zIndex: 1000,
        right: 50,
        top: 100,
        background: "transparent",
        borderRadius: "15px",
        backdropFilter: "blur(20px)",
      }}
    >
      <Stack direction="row" justifyContent="flex-start">
      </Stack>

      <Guesses data={gameData.guesses} />
      <GameScore data={gameData.score} />
    </Stack>
  );
}
