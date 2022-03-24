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
    res.json(updatedResults.dataValues);
  } catch (err) {
    console.log(err);
  }
};


const getResults = async (req, res) => {
  try {
    const myResult = await result.findAll({
      raw: true,
    });
    res.json(myResult);
  } catch (err) {
    console.log(err);
  }
};

const createResult = async (req, res) => {
  const { user_id, game_id } = req.body;
  try {
    const newResult = await result.create({
      user_id,
      game_id
    });
    res.json(newResult.dataValues);
    console.log(newResult.dataValues);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getResults, createResult, updateResults };