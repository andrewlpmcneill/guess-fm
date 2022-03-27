import { useState, useEffect } from "react";
import axios from "axios";

export default function useGameData() {
  const [gameData, setGameData] = useState({
    guesses: [],
    score: 0,
    game: 0,
    round: 0,
    stations: [],
    coords: [],
  });

  useEffect(() => {
    if (gameData.round === 0 || (gameData.game === 0 && gameData.round === 0)) {
      axios.get("/stations").then((response) => {
        setGameData((prev) => {return {...gameData, stations: response.data}})
      });
    }
    if (gameData.round === 1) {
      setGameData((prev) => {
        return {...prev, game: prev.game + 1}
      })
    };
    
  }, [gameData.round]);

  // useEffect(() => {
  // }, [gameData.round]);

  // Set guesses array back to empty
  const clearGuesses = () => {
    setGameData((prev) => {
      return {...prev, guesses: []};
    })

  };

  // Update guess state
  const addGuess = (guess) => {
    
    const guessesCopy = [...gameData.guesses]
    guessesCopy.push(guess);
    setGameData((prev) => {
      return {...prev, guesses: guessesCopy}
    })
  };

  const addScore = () => {
    setGameData ((prev) => {
      return {...prev, score: prev.score + 1}
    })
  }

  const clearScore = () => {
    setGameData ((prev) => {
      return {...prev, score: 0} 
    })
  }

  const nextRound = () => {
    setGameData ((prev) => {
      return {...prev, round: prev.round + 1}
    })
  }

  const clearRound = () => {
    setGameData ((prev) => {
      return {...prev, round: 0} 
    })
  }

  const assignCoords = (val) => {
  setGameData((prev) => {
    return {...prev, coords:[val[0], val[1]]}
  } )
  }


  return {
    clearGuesses,
    addGuess,
    gameData,
    setGameData,
    addScore,
    clearScore,
    nextRound,
    clearRound,
    assignCoords
  };
}
