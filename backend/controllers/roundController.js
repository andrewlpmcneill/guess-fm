/* eslint-disable camelcase */
const { Sequelize } = require("../models");
const db = require("../models");
const round = db.Round;

const getRounds = async (req, res) => {
  try {
    const myRound = await round.findAll({
      raw: true,
    });
    res.json(myRound);
  } catch (err) {
    console.log(err);
  }
};

const newRound = async (req, res) => {
  try {
    const { user_id, game_id, station_id } = req.body;

    const newRound = await round.create({
      user_id,
      game_id,
      station_id,
    });

    // console.log(newRound)

    res.json(newRound.dataValues);
  } catch (err) {
    console.log(err);
  }
};

const updateRounds = async (req, res) => {
  try {
    const result = req.body.result;
    const roundID = req.body.round_id;
    const updatedRound = await round.update(
      { result: result },
      {
        where: {
          // eslint-disable-next-line camelcase
          id: roundID,
        },
      }
    );
    res.json(updatedRound);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { updateRounds, newRound, getRounds };
