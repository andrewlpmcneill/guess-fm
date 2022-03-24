/* eslint-disable camelcase */
const { Sequelize } = require("../models");
const db = require("../models");
const game = db.Game;

const getGame = async (req, res) => {
  const { id } = req.body.id;
  try {
    const myGame = await game.findAll({
      raw: true,
      where: {
        id
      },
    });
    res.json(myGame);
  } catch (err) {
    console.log(err);
  }
};

const createGame = async (req, res) => {
  const { creator_id } = req.body;
  try {
    const newGame = await game.create({
      // REMOVE HARDCODED CREATOR_ID AND FILL IN WITH REQUEST DATA
      creator_id
    });
    res.json(newGame);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createGame, getGame };
