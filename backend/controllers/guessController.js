const { Sequelize } = require('../models')
const db = require('../models')
const guess = db.Guess;

const demoGreeting = (req,res) => {
  res.json({greetings: "This is coming from the guess controller"})
}

module.exports = { demoGreeting }