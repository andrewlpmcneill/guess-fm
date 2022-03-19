const { sequelize } = require('./models');
const db = require('./models');
const User = db.User;
const Game = db.Game;

const addFile = async() => {
  const userExample = await User.create({
    full_name: 'test',
    email: 'email',
    password: 'password'
  });
  
  const gameExample = await Game.create({
    creator_id: 1
  });

  sequelize.close()
}


addFile();