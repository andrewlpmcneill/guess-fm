const { Sequelize } = require('../models');
const db = require('../models');
const round = db.Round;

const updateRounds = async(req, res) => {
  try {
    const result = req.body.result;
    const roundID = req.body.round_id;
    console.log(req.body);
    const updatedRound = await round.update(
      { result: result },
      {
        where: {
          // eslint-disable-next-line camelcase
          id: roundID
        }
      }
    );
    res.json(updatedRound);


  } catch (err) {
    console.log(err);
  }
};

module.exports = { updateRounds };