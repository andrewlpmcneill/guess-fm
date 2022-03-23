import { useState } from 'react';

export default function useRoundData() {
  const [round, setRound] = useState(0);

  const startGame = () => {
    setRound(1);
  };

  return { round, setRound, startGame } 
}