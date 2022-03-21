const { Sequelize } = require('../models')
const db = require('../models')
const round = db.Round;

const demoGreeting = (req,res) => {
  res.json({greetings: "This is coming from the round controller"})
}

module.exports = { demoGreeting }