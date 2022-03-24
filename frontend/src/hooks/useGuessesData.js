import { useState } from "react";

export default function useGuessesData(initial) {
  const [guesses, setGuesses] = useState(initial);
  const [score, setScore] = useState(0);

  const clearGuesses = () => {
    setGuesses([]);
  };
  const addGuess = (guess) => {
    setGuesses((prev) => [...prev, guess]);
  };

  return { guesses, clearGuesses, addGuess, score, setScore };
}
