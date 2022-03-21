const { Sequelize } = require('../models')
const db = require('../models')
const user = db.User;

const demoGreeting = (req,res) => {
  res.json({greetings: "This is coming from the users controller"})
}

module.exports = { demoGreeting }