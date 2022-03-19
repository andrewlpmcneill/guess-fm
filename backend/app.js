const express = require('express');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');
const db = require('./models');
const bodyParser = require('body-parser');
const PORT = 8080;
const ENVIRONMENT = 'dev';

const app = express();

// middleware setup
app.use(morgan(ENVIRONMENT));
app.use(bodyParser);

app.get('/', (req, res) => {
  res.json({greetings: 'hello world'});
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

const sequelize = new Sequelize('guessfm', 'labber', 'labber', {
  host: 'localhost',
  dialect: 'postgres'
});

const testSequelizeConn = async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testSequelizeConn();

// const User = db.User;
// User.create({
//   full_name: 'test',
//   email: 'email',
//   password: 'password'
// });

// const Game = db.Game;
// Game.create({
//   creator_id: 1
// });