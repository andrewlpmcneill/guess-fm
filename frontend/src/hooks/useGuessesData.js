import { useState } from "react";

export default function useGuessesData(initial) {
  const [guesses, setGuesses] = useState(initial);

  const clearGuesses = () => {
    setGuesses([]);
  };
  const addGuess = (guess) => {
    setGuesses((prev) => [...prev, guess]);
  };

  return { guesses, clearGuesses, addGuess };
}
