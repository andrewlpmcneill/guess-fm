/* eslint-disable camelcase */
const { sequelize } = require("../models");
const axios = require("axios");
const db = require("../models");
const guess = db.Guess;
const round = db.Round;
const { validateGuess } = require("../helper/validateGuesses");
const { getGameStatistics } = require("../helper/getGameStatistics");
const mapBoxAPI = process.env.MAPBOXAPIKEY;


const getGuesses = async (req, res) => {
  try {
    const myGuesses = await guess.findAll({
      raw: true,
    });
    res.json(myGuesses);
  } catch (err) {
    console.log(err);
  }
};

const validateAndInsertGuess = async (req, res) => {
  //lat1, lng1 = station coord
  //lat2, ln2 = guess coord
  try {
    const { round_id, lat1, lng1, lat2, lng2 } = req.body;

    const reverseCall1 = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng1},${lat1}.json?types=country&access_token=${mapBoxAPI}`
    );
    const reverseCall2 = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng2},${lat2}.json?types=country&access_token=${mapBoxAPI}`
    );
    const country1 = reverseCall1.data.features[0].properties.short_code;
    const country2 = reverseCall2.data.features[0].properties.short_code;


    const guessResultObject = validateGuess(
      lat1,
      lng1,
      lat2,
      lng2,
      country1,
      country2
    );

    console.log(guessResultObject);

    const guessExample = await guess.create({
      round_id,
      result: guessResultObject.distanceAway,
    });
    res.json({
      id: guessExample.dataValues.id,
      country: guessResultObject.country,
      distanceAway: guessResultObject.distanceAway,
      direction: guessResultObject.direction,
      isCorrect: guessResultObject.isCorrect,
    });
  } catch (err) {
    console.log(err);
  }
};

const gameStatistics = async (req, res) => {
  try {
    const game_id = req.params.gameId;

    //grabs all rounds related to the game
    const allRoundsForOneGame = await round.findAll({
      where: {
        game_id: game_id,
      },
      raw: true,
    });
    console.log(allRoundsForOneGame);
    //using helper function to calculate end score for the game
    // const finalScore = totalScore(allGuessesForOneGame);

    const arrayOfRoundIds = allRoundsForOneGame.map((x) => x.id);

    //grabs all guesses related to the game
    const allGuessesForOneGame = await guess.findAll({
      where: {
        round_id: arrayOfRoundIds,
      },
      raw: true,
    });
    console.log(allGuessesForOneGame);

    res.json(getGameStatistics(allGuessesForOneGame, allRoundsForOneGame));
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getGuesses, validateAndInsertGuess, gameStatistics };
