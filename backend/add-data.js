const { sequelize } = require('./models');
const db = require('./models');
const User = db.User;
const Game = db.Game;
const Result = db.Result;
const Round = db.Round;
const Guess = db.Guess;



const addFile = async() => {
  const userExample = await User.create({
    full_name: 'test',
    email: 'email',
    password: 'password'
  });
  
  const gameExample = await Game.create({
    creator_id: 1
  });

  const resultExample = await Result.create({
    user_id: 1,
    game_id: 1,
    results: 0
  });

  const roundExample = await Round.create({
    user_id: 1,
    game_id: 1,
    station_id: "6sWzPKV-",
    result: true
  });

  sequelize.close();
}


addFile();

