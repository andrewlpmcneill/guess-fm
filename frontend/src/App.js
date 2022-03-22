import Map from './components/Map'
import './App.css';
import Player from './components/Player/index';

function App() {



  return (
    <div className="App">
      <h3>GUESS FM</h3>
      <div>
        <Map />  
      </div>
      <Player />
    </div>
  );
}

export default App;
