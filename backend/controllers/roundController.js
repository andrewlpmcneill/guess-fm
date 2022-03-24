const { Sequelize } = require("../models");
const db = require("../models");
const round = db.Round;

const demoGreeting = (req, res) => {
  res.json({ greetings: "This is coming from the round controller" });
};

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

module.exports = { demoGreeting, newRound };
