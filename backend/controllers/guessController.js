const { Sequelize } = require("../models");
const axios = require("axios");
const db = require("../models");
const guess = db.Guess;
const { validateGuess } = require("../helper/validateGuesses");


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
    const { round, lat1, lng1, lat2, lng2 } = req.body;

    const reverseCall1 = await axios.get(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat1}&lon=${lng1}&limit=1&appid=f89361fb753c9647ce4d1c6ca62fdc3c`
    );
    const reverseCall2 = await axios.get(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat2}&lon=${lng2}&limit=1&appid=f89361fb753c9647ce4d1c6ca62fdc3c`
    );

    const country1 = reverseCall1.data[0].country;
    const country2 = reverseCall2.data[0].country;

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
      round_id: round,
      result: guessResultObject.distanceAway,
    });

    res.json(guessResultObject);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { demoGreeting, validateAndInsertGuess };
