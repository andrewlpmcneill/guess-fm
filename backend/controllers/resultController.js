/* eslint-disable camelcase */
const { Sequelize } = require("../models");
const db = require("../models");
const result = db.Result;

const updateResults = async(req, res) => {
  try {
    const newResults = req.body.results;
    const gameID = req.body.game_id;
    const userID = req.body.user_id;
    const updatedResults = await result.update(
      { results: newResults },
      {
        where: {
          // eslint-disable-next-line camelcase
          user_id: userID,
          // eslint-disable-next-line camelcase
          game_id: gameID
        }
      }
    );
    res.json(updatedResults);
  } catch (err) {
    console.log(err);
  }
};


const getResult = async (req, res) => {
  try {
    const myResult = await result.findAll({
      raw: true,
      where: {
        // REMOVE HARDCODED ID
        id: 1,
      },
    });
    res.json(myResult);
  } catch (err) {
    console.log(err);
  }
};

const createResult = async (req, res) => {
  try {
    const newResult = await result.create({
      // FILL IN WITH REQUEST USER_ID AND REQUEST GAME_ID
      user_id: 1,
      game_id: 1,
    });
    res.json(newResult);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getResult, createResult, updateResults };