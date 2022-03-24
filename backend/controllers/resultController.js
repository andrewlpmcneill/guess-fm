const { Sequelize } = require('../models');
const db = require('../models');
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

module.exports = { updateResults };