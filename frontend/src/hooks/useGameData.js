import { useState, useEffect } from "react";
import axios from "axios";

export default function useGuessesData(initial) {
  const [guesses, setGuesses] = useState(initial);
  const [score, setScore] = useState(0);
  const [game, setGame] = useState(0);
  const [round, setRound] = useState(0);
  const [gameData, setGameData] = useState([]);
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    if (game !== 1) {
      axios.get("/stations").then(response => {
        console.log(response.data);
        setGameData(response.data);
      });
    }
  }, [game]);

  useEffect(() => {
    if (round === 1) setGame(prev => prev + 1);
  }, [round]);

  // Set guesses array back to empty
  const clearGuesses = () => {
    setGuesses([]);
  };

  // Update guess state
  const addGuess = (guess) => {
    setGuesses((prev) => [...prev, guess]);
  };

  return { guesses, clearGuesses, addGuess, score, setScore, game, setGame, round, setRound, gameData, setGameData, coords, setCoords };
}