/* eslint-disable camelcase */
const { Sequelize } = require("../models");
const db = require("../models");
const user = db.User;
const game = db.Game;
const round = db.Round;
const guess = db.Guess;
const { getUserStatistics } = require("../helper/getUserStatistics")

const getUser = async (req, res) => {
  const { id } = req.body;
  try {
    const myUser = await user.findAll({
      raw: true,
      where: {
        id
      },
    });
    res.json(myUser);
  } catch (err) {
    console.log(err);
  }
};

// TO BE COMPLETED - CREATING NEW USER
const createUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  try {
    const newUser = await user.create({
      first_name,
      last_name,
      email,
      password,
    });
    console.log(newUser);
    res.json(newUser);
  } catch (err) {
    console.log(err);
  }
};


const getLifeTimeStatistics = async(req,res) => {
  try{
    const id = req.params.id
    const userGamesIdArr = [];
    const userRoundsIdArr = [];

    //gets all games stats from db related to the user id
    const allUserGames = await game.findAll({
      where:{
        creator_id: id
      },
      raw: true
    })

    //does not run the other db calls when user has not played a game
    if(allUserGames.length < 1){
      res.json({error: "No Games Currently"})
    }

    //populates the array of game ids 
    allUserGames.forEach(game => {
      userGamesIdArr.push(game.id)
    })

    //finds all round data that are linked to the game id array
    const allUserGameRounds = await round.findAll({
      where:{
        game_id: userGamesIdArr
      },
      raw: true
    })

    //populates the round id array
    allUserGameRounds.forEach(round => {
      userRoundsIdArr.push(round.id)
    })

    //finds all guess data related related to the rounds id array
    const allUserGameGuesses = await guess.findAll({
      where:{
        round_id: userRoundsIdArr
      },
      raw: true
    })
   

    res.json(getUserStatistics(allUserGames, allUserGameRounds, allUserGameGuesses))


  }catch(err){
    console.log(err)
  }


}

module.exports = { getUser, createUser, getLifeTimeStatistics };
