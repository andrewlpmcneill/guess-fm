
const { sequelize, Sequelize } = require('./models');
const db = require('./models');
const User = db.User;
const Game = db.Game;
const Result = db.Result;
const Station = db.Station;



// const findStation = async(id) => {
//   const myStation = await Station.findAll({
//     raw: true,
//     where: {
//       id: id
//     }
//   })
//   console.log(myStation)

//   sequelize.close()
// }

const randomStation = async()=>{
  const myRandomStations = await Station.findAll({
    // attributes:[
    //   [Sequelize.fn('DISTINCT', Sequelize.col('country')), 'country']
    // ],
    raw: true,
    order: Sequelize.literal('random()'),
    where:{

    },
    limit: 5
  })

  return(myRandomStations)

}

// findStation('6sWzPKV-')

// randomStation();

module.exports = {randomStation}