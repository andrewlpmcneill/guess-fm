const express = require('express');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');
const db = require('./models');

const PORT = 8080;
const ENVIRONMENT = 'dev';
const app = express();
const sequelize = new Sequelize('guessfm', 'labber', 'labber', {
  host: 'localhost',
  dialect: 'postgres'
});
const stationRoutes  = require("./routes/stations")

// middleware setup
app.use(morgan(ENVIRONMENT));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


//routes
app.get('/', (req, res) => {
  res.json({greetings: 'hello world'});
});
app.use('/stations/', stationRoutes)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));


//iife that checks for connection db
(async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

