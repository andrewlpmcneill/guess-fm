/* eslint-disable camelcase */
const { Sequelize } = require("../models");
const db = require("../models");
const game = db.Game;

const getGames = async (req, res) => {
  
  try {
    const myGame = await game.findAll({
      raw: true,
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
      creator_id
    });
    res.json(newGame.dataValues);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createGame, getGames };
