const { Sequelize } = require('../models');
const db = require('../models');
const result = db.Result;

const demoGreeting = (req,res) => {
  res.json({greetings: "This is coming from the results controller"});
};

module.exports = { demoGreeting };