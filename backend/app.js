const express = require('express');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');
const db = require('./models');
const dotenv = require('dotenv').config();

// for development
// const DBNAME = process.env.DBNAME;
// const DBUSERNAME = process.env.DBUSERNAME;
// const DBPASSWORD = process.env.DBPASSWORD;
// const DBHOST = process.env.DBHOST;
// const DBDIALECT = process.env.DBDIALECT;

// for production
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_INSTANCE = process.env.DB_INSTANCE;

const PORT = 8080;
const ENVIRONMENT = 'dev';
const app = express();

// for development
// const sequelize = new Sequelize(DBNAME, DBUSERNAME, DBPASSWORD, {
//   host: DBHOST,
//   dialect: DBDIALECT
// });

// for production
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: `/cloudsql/${process.env.DB_INSTANCE}`,
  dialect: 'postgres',
  dialectOptions: {
    socketPath: `/cloudsql/${DB_INSTANCE}`
  }
});


//import routes
const gameRoutes  = require("./routes/games");
const guessRoutes  = require("./routes/guesses");
const resultRoutes  = require("./routes/results");
const roundRoutes  = require("./routes/rounds");
const stationRoutes  = require("./routes/stations");
const userRoutes  = require("./routes/users");


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

app.use('/games', gameRoutes);
app.use('/guesses', guessRoutes);
app.use('/results', resultRoutes);
app.use('/rounds', roundRoutes);
app.use('/stations', stationRoutes);
app.use('/users', userRoutes);



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

