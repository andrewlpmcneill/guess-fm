import { useState, useEffect } from "react";
import axios from "axios";

export default function useModelData(initial) {
  const [modelState, setModelState] = useState({
    userId: null,
    gameId: null,
    resultsId: null,
    stationId: null,
    roundId: null,
    guessId: null,
  });
  
  // Get user ID for game and insert into localStorage
  useEffect(() => {
    if (!localStorage.userId) {
      axios.post("/users", {first_name: null, last_name: null, email: null, password: null})
        .then((response) => {
          const newUserId = response.data.id;
          localStorage.userId = newUserId;
          setModelState((prev) => {
            return {...prev, userId: newUserId}
          })
        })
    } else {
      setModelState((prev) => {
        return {...prev, userId: localStorage.userId}
      })
    }
  }, [])

  const createGame = async (userId) => {
    try {
      // Create game and grab game ID from the response
      const postGame = await axios.post("/games", { creator_id: userId });
      const gameId = postGame.data.id;
      // Create result entry and grab result ID from the response
      const postResult = await axios.post("/results", {
        user_id: userId,
        game_id: postGame.data.id,
      });
      const resultsId = postResult.data.id;
      // Set the radio stations for the game, start the game in round 1 and set state object
      setModelState((prev) => {
        return { ...prev, gameId, resultsId, userId };
      });
    } catch (err) {
      console.log(err);
    }
  };

  const createRound = async (userId, gameId, stationId) => {
    try {
      const postRound = await axios.post("/rounds", {
        user_id: userId,
        game_id: gameId,
        station_id: stationId,
      });
      const roundId = postRound.data.id;
      setModelState((prev) => {
        return { ...prev, stationId, roundId };
      });
    } catch (err) {
      console.log(err);
    }
  };

  // API CALL TO UPDATE ROUNDS TABLE
  const updateRoundTable = (result) => {
    axios
      .patch("/rounds", {
        result: result,
        round_id: modelState.roundId,
      })
      .then((response) => {
        console.log(response);
      });
  };

  // API CALL TO UPDATE RESULTS TABLE
  const updateResultsTable = (results) => {
    axios
      .patch("/results", {
        results: results,
        game_id: modelState.gameId,
        user_id: modelState.userId,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const getGameStatistics = async () => {
    try {
      const gameStats = await axios.get(`/guesses/games/${modelState.gameId}`);
      return gameStats.data;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    modelState,
    setModelState,
    createGame,
    updateResultsTable,
    updateRoundTable,
    createRound,
    getGameStatistics,
  };
}
