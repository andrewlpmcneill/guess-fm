const { Sequelize } = require("../models");
const db = require("../models");
const round = db.Round;

const newRound = async (req, res) => {
  try {
    const { userId, gameId, stationId } = req.body;

    const newRound = await round.create({
      user_id: userId,
      game_id: gameId,
      station_id: stationId,
    });

    // console.log(newRound)

    res.json({ id: newRound.id });
  } catch (err) {
    console.log(err);
  }
};

const updateRounds = async (req, res) => {
  try {
    const result = req.body.result;
    const roundID = req.body.round_id;
    console.log(req.body);
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

module.exports = { updateRounds, newRound };
