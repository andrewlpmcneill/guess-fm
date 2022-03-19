const { sequelize } = require('./models');
const db = require('./models');
const User = db.User;
const Game = db.Game;
const Result = db.Result;
const Station = db.Station;
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


  const stationExample = await Station.create({
    id:"6sWzPKV-",
    station_title: 'WXAN 103.9 FM',
    mp3_link: "http://radio.garden/api/ara/content/listen/6sWzPKV-/channel.mp3",
    place_id: "Fc3P-VmJ",
    city: "Ava IL",
    country: "United States",
    latitude: -89.49471,
    longitude: 37.88826
  });

  const roundExample = await Round.create({
    user_id: 1,
    game_id: 1,
    station_id: "6sWzPKV-",
    result: true
  });

  const guessExample = await Guess.create({
    round_id: 1,
    result: 1000
  });

  sequelize.close()
}


addFile();

