import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import DialogButton from './DialogButton'

export default function Instructions(props) {
  // Props passed in to render Dialog box
  const { loadAudio, setRound, modelState, createGame, round, gameData } = props;
 
  const startGame = (userId) => {
    console.log(userId);
    createGame(userId)
      .then(() => {
        loadAudio(gameData, round);
        setRound(1);
      })
  }

  return (
    <div>
      <Dialog
        open={true}
        fullWidth
      >
        <DialogTitle sx={{ m: 'auto', p: 2, fontFamily: 'Wild World' }}>
          {"WELCOME TO GUESS FM"}
        </DialogTitle>
        {/* Add margin around content */}
        <DialogContent sx={{ m: '1', textAlign: 'center'}}>
          <Typography >
            {"HOW TO PLAY: "}
          </Typography>
          <Typography >
            {"📡 - A random radio station from somewhere in the world will play."}
          </Typography>
          <Typography >
            {"🏴‍☠️ - You get 5 tries to guess what country it’s in."}
          </Typography>
          <Typography >
            {"3️⃣ - Repeat for 2 more stations to get your score out of 3!"}
          </Typography>
        </DialogContent>
        <DialogButton onClick={() => startGame(modelState.userId)}>{"START GAME"}</DialogButton>
      </Dialog>
    </div>
  );
}