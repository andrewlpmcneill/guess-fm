
const getUserStatistics = (arrOfGames, arrOfRounds, arrOfGuesses) => {
  const lifeTimeGames = arrOfGames.length;
  const lifeTimeRounds = arrOfRounds.length;
  const lifeTimeGuesses = arrOfGuesses.length;
  const averageGuessesPerRound = Math.round(lifeTimeGuesses/lifeTimeRounds *100) / 100;
  const roundsIdArrayForFirstGuesses =[];
  const firstGuessArr = [];
  let totalRoundScore = 0;
  let totalDistanceAway = 0;
  let firstGuessTotalDistance = 0;


  //calculates total rounds cleared
  arrOfRounds.forEach(round => {
    if(round.result){
      totalRoundScore ++
    }
  })

  //calculates total lifetime guess distance
  arrOfGuesses.forEach(guess => {
    if(guess.result !== null){
      totalDistanceAway += guess.result
    }
  })

  //populates an array with all first guesses
  arrOfGuesses.forEach(guess => {
    if(!roundsIdArrayForFirstGuesses.includes(guess.round_id)){
      roundsIdArrayForFirstGuesses.push(guess.round_id)
      firstGuessArr.push(guess)
    }
  })

  //calculates all first guess total distance
  firstGuessArr.forEach(firstGuess => {
    if(firstGuess.result !== null){
      firstGuessTotalDistance += firstGuess.result
    }
  })



  const percentRoundClear = Math.round(totalRoundScore/lifeTimeRounds * 10000) / 100;
  const averageGuessDistanceAway = Math.round(totalDistanceAway/lifeTimeGuesses *100)/100;
  const firstGuessAverageDistance = Math.round(firstGuessTotalDistance/ firstGuessArr.length *100)/100

  return{
    lifeTimeGames,
    lifeTimeRounds,
    lifeTimeGuesses,
    totalRoundCleared: totalRoundScore,
    percentRoundClear,
    averageGuessesPerRound,
    averageGuessDistanceAway,
    firstGuessAverageDistance
  }

}

module.exports = {getUserStatistics}