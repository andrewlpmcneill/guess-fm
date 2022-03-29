const getGameStatistics = (arrOfGuesses, arrOfRounds) => {
  let totalDistance = 0;
  let score = 0;
  const numberOfRounds = arrOfRounds.length;
  const numberOfGuesses = arrOfGuesses.length;

  arrOfGuesses.forEach((guess) => {
    totalDistance += guess.result;
  });

  arrOfRounds.forEach((round) => {
    if (round.result) {
      score++;
    }
  });


  return {
    averageDistance: Math.round(totalDistance / numberOfGuesses * 100) / 100,
    averageGuesses:   Math.round(numberOfGuesses / numberOfRounds * 100) / 100,
    totalScore: score,
  };
};

module.exports = { getGameStatistics };
