import Map from './components/Map'
import './App.css';
import Player from './components/Player/index';
import Results from './components/Results/index'
import { Box } from '@mui/material';

function App() {



  return (
    <div className="App">
      <h3>GUESS FM</h3>
      <Box sx={{position: 'relative'}}>
        <Map />
        <Results/>
      </Box>
      <Player />
    </div>
  );
}

export default App;
