const { Sequelize } = require('../models')
const db = require('../models')
const game = db.Game;

const demoGreeting = (req,res) => {
  res.json({greetings: "This is coming from the games controller"})
}

module.exports = { demoGreeting }